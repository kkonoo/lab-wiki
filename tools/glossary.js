/*
 * 용어집(glossary/index.html) 데이터 모으기 → glossary/data.js
 *
 *   build-search-index.js 가 검색 색인을 만든 뒤 이 모듈을 부른다 — 따로 실행하지 않는다.
 *   새 글을 쓰지 않는다. 사이트에 이미 있는 것만 모아서 용어마다 한 항목으로 묶는다.
 *
 * 모으는 것
 *   1) 용어 카드   : 인라인 SPA(gwas · omics/* · single-cell/* · multi-omics · 질문형 질환 페이지)의
 *                   articles / articleRows → 제목 · 별칭 · 한 줄 요약(summary) · related · articlePages(그림 페이지)
 *   2) 점선 용어   : glossaryTerms — 인라인 SPA · 질환 data.js · gwas/glossary.js · immunology 섹션 data.js
 *   3) 약어 풀이   : 정적 문서의 <dt>약어</dt><dd>풀이</dd> (immunology 01 기초)
 *   4) 다루는 문서 : 검색 색인 항목 중 별칭(또는 제목)이 이 용어와 똑같은 것
 *
 * 같은 용어 판단: 제목·별칭·점선 용어를 소문자로 맞춰 비교한다. 정의는 합치지 않고 출처별로 나란히 둔다
 * (같은 nephron도 AKI는 재생 불가, CKD는 남은 nephron의 부담을 말한다 — 맥락이 다르면 둘 다 맞다).
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

module.exports = function buildGlossary({ ROOT, items, DOMAINS, U }) {
  const { rel, domainOf, text, cleanTitle, tag, literal, resolveUrl } = U;
  const read = (r) => fs.readFileSync(path.join(ROOT, r), "utf8");
  /* 비교용 키 — 대소문자 · 하이픈과 띄어쓰기 차이(missing self / missing-self)는 같은 말로 본다 */
  const norm = (s) => String(s || "").toLowerCase().replace(/[‐-―]/g, "-").replace(/[-\s]+/g, " ").trim();
  /* 첫 단어가 소문자뿐이면 첫 글자만 대문자(카드 제목과 맞춤: de novo → De novo, single-cell eQTL → Single-cell eQTL).
     eQTL · scQTL 처럼 첫 단어에 대문자가 있거나 p-value · p-tau217 처럼 한 글자 접두면 그대로 */
  const head = (s) => {
    const first = String(s).split(/\s+/)[0];
    return /^[a-z]/.test(s) && !/[A-Z]/.test(first) && !/^[a-z]-/.test(s) ? s.charAt(0).toUpperCase() + s.slice(1) : s;
  };
  /* 용어집은 ABC순 하나로 간다. 한글로만 적힌 점선 용어는 데이터에 영어가 없어 여기서만 대응시킨다
     (정의를 새로 쓰는 게 아니라 정렬·합치기용 영어 이름). 새 한글 용어가 생기면 빌드가 경고를 낸다 */
  const EN = { "보체": "complement", "과민반응": "hypersensitivity", "경구 관용": "oral tolerance" };
  const isKo = (s) => /^[ㄱ-ㆎ가-힣]/.test(String(s).trim());
  /* 한글로 시작하는 질환 카드 제목의 영어 표제어 — 괄호 속 영어(노화 유전학 (Aging genetics)),
     없으면 카드 키워드 중 첫 일반명사(소문자로 시작), 그것도 없으면 첫 영어 키워드 */
  function englishOf(title, keywords) {
    const paren = String(title).match(/\(([A-Za-z][^()]*[a-z]{4,}[^()]*)\)/);
    if (paren) return paren[1].trim();
    const en = (keywords || []).map((k) => String(k).trim()).filter((k) => /^[A-Za-z]/.test(k));
    return en.find((k) => /^[a-z]/.test(k)) || en[0] || null;
  }
  /* 질문형 질환 페이지 카드 제목의 부제(" — …", ": …")는 표제어에서 뗀다 — cccDNA — 지속의 저장고 → cccDNA */
  const stem = (t) => String(t).trim().split(/\s+—\s+|:\s+/)[0].trim() || String(t).trim();
  const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const termRe = (t, flags) => new RegExp("(^|[^A-Za-z0-9])(" + esc(t) + ")(?=$|[^A-Za-z0-9])", flags || "i");

  /* ── 항목 저장소 ── */
  const E = new Map();                 // 표제어(소문자) → 항목
  const aliasIdx = new Map();          // 별칭(소문자) → Set(표제어 키)
  const cardRef = new Map();           // "page#id" → 표제어 키 (related 풀기)
  const pendingRel = [];
  const stats = { cards: 0, defs: 0, abbr: 0 };

  function entry(key, title) {
    if (!E.has(key)) E.set(key, { key, t: title, a: new Map(), k: new Set(), c: [], f: [], x: new Map(), b: new Map(), r: new Set(), d: new Set() });
    return E.get(key);
  }
  /* 질환 카드의 aliases는 동의어가 아니라 검색 키워드(HLA 카드 → MHC · shared epitope · antigen presentation)다.
     화면에 별칭으로 보이지 않고, 다른 용어를 이 항목으로 끌어오지도 않는다 — 용어집 검색에만 쓴다 */
  function addKeyword(e, name) { const n = norm(name); if (n && n !== e.key) e.k.add(String(name).trim()); }
  function addAlias(e, name) {
    const n = norm(name);
    if (!n || n === e.key || e.a.has(n)) return;
    e.a.set(n, String(name).trim());
    if (!aliasIdx.has(n)) aliasIdx.set(n, new Set());
    aliasIdx.get(n).add(e.key);
  }
  /* 이름 여럿 중 하나라도 표제어와 같으면 그 항목.
     아니면 별칭이 한 항목만 가리킬 때 그 항목 — 단 같은 도메인 안에서만(질환 페이지의 eQTL 정의가 GWAS의 GTEx 카드에 붙지 않게) */
  function find(names, domain) {
    for (const n of names) if (E.has(n)) return E.get(n);
    for (const n of names) {
      const s = aliasIdx.get(n);
      if (!s) continue;
      const hit = [...s].map((k) => E.get(k)).filter((e) => !domain || e.d.has(domain));
      if (hit.length === 1) return hit[0];
    }
    return null;
  }
  /* 정의 앞에 붙는 출처 이름 — 짧게.
     Rheumatoid Arthritis (RA) → RA · 면역학 문서 → Immunology · 선천면역(섹션) · gwas/* → GWAS · 신경 공통 → Neuro · Development */
  const shortCache = new Map();
  function shortName(r, title) {
    if (shortCache.has(r)) return shortCache.get(r);
    let s = title;
    const im = r.match(/^(disease\/immunology\/\d\d-[^/]+)\//);
    if (im && fs.existsSync(path.join(ROOT, im[1], "index.html"))) s = "Immunology · " + stem(cleanTitle(tag(read(im[1] + "/index.html"), "title")));
    else if (r.startsWith("gwas/")) s = "GWAS";
    else {
      const p = String(title).match(/\(([^()]+)\)\s*$/);
      if (p) s = p[1].trim();
      else if (r.startsWith("disease/neuro/general/")) s = /neuro/i.test(title) ? title.split(/\s+\/\s+/).pop() : "Neuro · " + title;
    }
    shortCache.set(r, s);
    return s;
  }
  function pageInfo(r) {
    const html = read(r);
    const t = cleanTitle(tag(html, "title")) || tag(html, "h1");
    return { t, u: r, d: domainOf(r).label, s: shortName(r, t) };
  }
  function pushWhere(map, x, where) {
    if (!map.has(x)) map.set(x, { x, w: [] });
    const slot = map.get(x);
    where.forEach((p) => { if (!slot.w.some((q) => q.u === p.u)) slot.w.push(p); });
  }

  /* ── 파일 목록 ── */
  const all = [];
  (function walk(dir) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (e.name.startsWith(".") || ["tools", "assets", "_schema", "glossary"].includes(e.name)) continue;
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p); else if (/\.(html|js)$/.test(e.name)) all.push(rel(p));
    }
  })(ROOT);
  all.sort();
  const htmls = all.filter((r) => r.endsWith(".html") && r !== "index.html");

  /* ── 1) 용어 카드 ── */
  for (const r of htmls) {
    const html = read(r);
    if (!/const\s+(articles|articleRows)\s*=\s*[\[{]/.test(html) || /http-equiv="refresh"/i.test(html)) continue;
    let articles = literal(html, "articles");
    const rows = literal(html, "articleRows");
    if (rows && (!articles || typeof articles !== "object")) {
      articles = Object.fromEntries(rows.map((row) => [row[0], { title: row[1], aliases: row[2], section: row[3], summary: row[4], related: row[6] }]));
    }
    if (!articles || typeof articles !== "object") continue;
    const sections = literal(html, "sections") || {};
    const figs = literal(html, "articlePages") || {};
    const D = domainOf(r), pageTitle = cleanTitle(tag(html, "title"));
    for (const [id, a] of Object.entries(articles)) {
      if (!a || !a.title) continue;
      const full = String(a.title).trim();
      let name = D.key === "disease" ? stem(full) : full, ko = null;
      if (isKo(name)) { const en = englishOf(full, a.aliases); if (en) { ko = name; name = head(en); } }
      const e = entry(norm(name), name);
      if (ko) addAlias(e, ko);                                       // 한글 제목은 별칭으로 남겨 Ctrl+F에 걸리게
      const card = { s: a.summary || "", u: r + "#article/" + id, d: D.label, p: pageTitle, l: shortName(r, pageTitle), g: (sections[a.section] || {}).title || "" };
      if (name !== full) card.ct = full;
      e.c.push(card);
      e.d.add(D.label);
      (a.aliases || []).forEach((al) => (D.key === "disease" ? addKeyword(e, al) : addAlias(e, al)));
      if (figs[id]) {
        const fu = resolveUrl(r, figs[id]);
        if (fs.existsSync(path.join(ROOT, fu))) e.f.push({ t: tag(read(fu), "h1") || pageInfo(fu).t, u: fu });
      }
      cardRef.set(r + "#" + id, e.key);
      if (Array.isArray(a.related)) pendingRel.push([e.key, r, a.related]);
      stats.cards++;
    }
  }

  /* ── 2) 점선 용어 ── */
  /* glossaryPattern 의 대안 목록에서 표기(대소문자)를 가져온다 — 사전 키는 소문자라 eGFR · CpG 표기가 사라져 있다 */
  function casingFrom(src) {
    const map = new Map();
    const m = src.match(/glossaryPattern\s*=\s*\/(.*)\/[gimsuy]*\s*;/);
    if (!m) return map;
    const alt = m[1].match(/\(\^\|\[[^\]]*\]\)\((.*?)\)\(\?=/);
    if (!alt) return map;
    alt[1].split("|").forEach((t) => { const raw = t.replace(/\\(.)/g, "$1"); map.set(norm(raw), raw); });
    return map;
  }
  /* 패턴이 없으면 본문에서 가장 많이 쓴 표기 — 사전 키("egfr":) 자리는 세지 않는다 */
  function casingByText(term, texts) {
    const tally = new Map();
    const re = new RegExp("(^|[^A-Za-z0-9])(" + esc(term) + ")(?=$|[^A-Za-z0-9])(?![\"']\\s*:)", "gi");
    texts.forEach((s) => { for (const m of s.matchAll(re)) tally.set(m[2], (tally.get(m[2]) || 0) + 1); });
    let best = term, n = 0;
    for (const [k, v] of tally) if (v > n || (v === n && /[A-Z]/.test(k) && !/[A-Z]/.test(best))) { best = k; n = v; }
    return best;
  }
  /* 다른 도메인이라도 정의가 그 항목 이름으로 시작하면 같은 말 — "prs": "Polygenic risk score. …" → GWAS 카드 Polygenic risk score */
  function expansionOf(names, def) {
    const d0 = norm(def);
    for (const n of names) for (const k of aliasIdx.get(n) || []) {
      const e = E.get(k), first = norm(String(e.t).split(/\s+(?:&|·|vs)\s+|\s*\(/)[0]);
      if (first.length > 3 && (d0.startsWith(e.key) || d0.startsWith(first))) return e;
    }
    return null;
  }
  function addTerms(terms, where, casing, texts, D) {
    /* 같은 key(복수형·동의어)는 한 묶음 */
    const groups = new Map();
    for (const [t, it] of Object.entries(terms || {})) {
      if (!it || !it.definition) continue;
      const k = norm(it.key || t);
      if (!groups.has(k)) groups.set(k, { key: k, names: [], def: it.definition });
      groups.get(k).names.push(t);
    }
    for (const g of groups.values()) {
      const en = g.names.map((n) => EN[String(n).trim()]).filter(Boolean);
      const names = en.map(norm).concat(g.names.map(norm));
      let lead = g.names.find((n) => norm(n) === g.key) || g.names.slice().sort((a, b) => a.length - b.length)[0];
      if (en.length && isKo(lead)) lead = en[0];
      const show = (n) => casing.get(norm(n)) || casingByText(n, texts);
      const pages = typeof where === "function" ? where(g.names) : where;
      if (!pages.length) continue;
      let e = find(names, D.label) || find(en.map(norm)) || expansionOf(names, g.def);
      if (!e) e = entry(norm(lead), head(show(lead)));
      g.names.forEach((n) => addAlias(e, show(n)));
      pushWhere(e.x, g.def, pages);
      e.d.add(D.label);
      stats.defs++;
    }
  }
  const pageText = new Map();
  const textOf = (r) => { if (!pageText.has(r)) pageText.set(r, text(read(r))); return pageText.get(r); };
  /* 시각 페이지는 본문에 실제로 나오는 곳만 */
  const appearsIn = (candidates) => (names) => candidates.filter((r) => names.some((n) => termRe(n).test(textOf(r)))).map(pageInfo);

  /* 읽는 순서 = 방법론 도메인 먼저, 질환 나중. 방법론 사전이 먼저 자기 카드에 붙어야
     질환 페이지의 같은 용어가 그 항목(카드)으로 모인다 — 거꾸로면 질환 쪽이 카드 없는 항목을 먼저 만든다 */
  // 2-1) gwas/glossary.js — SPA와 시각 페이지가 같이 쓴다
  if (all.includes("gwas/glossary.js")) {
    const ctx = { window: {}, document: { body: null } };
    vm.createContext(ctx);
    try { vm.runInContext(read("gwas/glossary.js"), ctx, { timeout: 2000 }); } catch (err) { /* 시각 페이지 전용 부분은 DOM이 없어 멈춘다 */ }
    const G = ctx.window.GWAS_GLOSSARY;
    const visual = htmls.filter((r) => r.startsWith("gwas/") && r !== "gwas/index.html" && /glossary\.js/.test(read(r)));
    const spa = pageInfo("gwas/index.html");
    if (G) addTerms(G.terms, (names) => [spa].concat(appearsIn(visual)(names)), new Map(), [textOf("gwas/index.html")], domainOf("gwas"));
  }
  // 2-2) 인라인 SPA·정적 페이지의 const glossaryTerms (방법론 도메인 → 질환)
  const inline = htmls.filter((r) => /const\s+glossaryTerms\s*=\s*\{/.test(read(r)));
  inline.filter((r) => !r.startsWith("disease/")).concat(inline.filter((r) => r.startsWith("disease/"))).forEach((r) => {
    const html = read(r);
    addTerms(literal(html, "glossaryTerms"), [pageInfo(r)], casingFrom(html), [text(html)], domainOf(r));
  });
  // 2-3) 질환 data.js (disease-page.js)
  for (const r of all.filter((f) => f.endsWith("/data.js") && !f.startsWith("disease/immunology/"))) {
    const src = read(r);
    if (!/const\s+glossaryTerms\s*=\s*\{/.test(src)) continue;
    const page = path.posix.join(path.posix.dirname(r), "index.html");
    if (!fs.existsSync(path.join(ROOT, page))) continue;
    addTerms(literal(src, "glossaryTerms"), [pageInfo(page)], casingFrom(src), [src], domainOf(r));
  }
  // 2-4) immunology 섹션 data.js — 그 섹션 시각 페이지 중 용어가 나오는 곳
  for (const r of all.filter((f) => f.startsWith("disease/immunology/") && f.endsWith("/data.js"))) {
    const ctx = { window: {} };
    vm.createContext(ctx);
    try { vm.runInContext(read(r), ctx, { timeout: 2000 }); } catch (err) { continue; }
    const dir = path.posix.dirname(r);
    const pages = htmls.filter((h) => path.posix.dirname(h) === dir && /glossary\.js/.test(read(h)) && /\.\/data\.js/.test(read(h)));
    const texts = pages.map(textOf);
    Object.keys(ctx.window).forEach((k) => {
      const g = ctx.window[k] && ctx.window[k].glossaryTerms;
      if (!g) return;
      addTerms(g, (names) => { const hit = appearsIn(pages)(names); return hit.length ? hit : pages.slice(0, 1).map(pageInfo); }, new Map(), texts, domainOf(r));
    });
  }

  /* ── 3) 약어 풀이 ── */
  for (const r of htmls) {
    const html = read(r);
    const pairs = [...html.matchAll(/<dt>([\s\S]*?)<\/dt>\s*<dd>([\s\S]*?)<\/dd>/gi)];
    if (!pairs.length) continue;
    const where = [pageInfo(r)];
    for (const m of pairs) {
      const dt = text(m[1]), dd = text(m[2]);
      if (!dt || !dd) continue;
      const names = [norm(dt)].concat(dt.split(/\s*·\s*/).map(norm));
      let e = find(names, domainOf(r).label);
      if (!e) e = entry(norm(dt), dt);
      pushWhere(e.b, dd, where);
      e.d.add(domainOf(r).label);
      stats.abbr++;
    }
  }

  /* ── related → 표제어 ── */
  for (const [key, r, ids] of pendingRel) {
    ids.forEach((id) => { const k = cardRef.get(r + "#" + id); if (k && k !== key) E.get(key).r.add(k); });
  }

  /* ── 4) 다루는 문서 ── */
  const tokIdx = new Map();
  items.forEach((it, i) => {
    const toks = new Set([norm(it.t)].concat(it.k ? it.k.split(/\s*·\s*/).map(norm) : []));
    toks.forEach((t) => { if (!t) return; if (!tokIdx.has(t)) tokIdx.set(t, []); tokIdx.get(t).push(i); });
  });
  const DOC_MAX = 8;
  for (const e of E.values()) {
    const own = new Set(e.c.map((c) => c.u).concat(e.f.map((f) => f.u)));
    const names = [e.key].concat([...e.a.keys()]).filter((n) => n.length > 1);
    const seen = new Set(), docs = [];
    names.forEach((n, ni) => (tokIdx.get(n) || []).forEach((i) => {
      const it = items[i];
      if (own.has(it.u) || seen.has(it.u)) return;
      seen.add(it.u);
      docs.push({ t: it.t, u: it.u, p: it.p || it.d, d: it.d, w: (norm(it.t) === n ? 0 : 2) + (ni ? 1 : 0) });
    }));
    docs.sort((a, b) => a.w - b.w);
    e.o = docs.slice(0, DOC_MAX).map(({ w, ...rest }) => rest);
    e.on = docs.length;
  }

  /* ── 정렬 · id ── */
  /* ABC순 하나 — 숫자로 시작하면 맨 앞(0–9), 그다음 A–Z. 한글 표제어가 남으면 영어 별칭으로 자리를 잡고,
     영어가 아예 없으면 맨 뒤 "기타"에 두고 빌드 때 경고한다(EN 대응표에 추가할 것) */
  const lead = (s) => String(s).replace(/^[^A-Za-z0-9ㄱ-ㆎ가-힣]+/, "");
  const warnings = [];
  function sortKey(e) {
    if (!isKo(lead(e.t))) return lead(e.t);
    const en = [...e.a.values()].find((a) => /^[A-Za-z0-9]/.test(lead(a)));
    if (en) return lead(en);
    warnings.push(e.t);
    return null;
  }
  const ORDER = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ~";
  const collator = new Intl.Collator("en", { sensitivity: "base", numeric: true });
  const list = [...E.values()];
  list.forEach((e) => {
    e.sk = sortKey(e);
    const ch = e.sk ? e.sk.charAt(0).toUpperCase() : "~";
    e.i = /[A-Z]/.test(ch) ? ch : /[0-9]/.test(ch) ? "#" : "~";
  });
  list.sort((a, b) => ORDER.indexOf(a.i) - ORDER.indexOf(b.i) || collator.compare(a.sk || a.t, b.sk || b.t));
  const ids = new Map(), used = new Set();
  list.forEach((e) => {
    let base = e.key.replace(/[^a-z0-9가-힣]+/g, "-").replace(/^-+|-+$/g, "") || "term", id = base, n = 2;
    while (used.has(id)) id = base + "-" + n++;
    used.add(id); ids.set(e.key, id);
  });
  const dOrder = DOMAINS.map((d) => d.label);
  const entries = list.map((e) => {
    const o = { id: ids.get(e.key), t: e.t, i: e.i, d: [...e.d].sort((a, b) => dOrder.indexOf(a) - dOrder.indexOf(b)) };
    const aka = [...e.a.values()].filter((v) => norm(v) !== e.key);
    if (aka.length) o.a = aka;
    const kw = [...e.k].filter((v) => !e.a.has(norm(v)));
    if (kw.length) o.k = kw;
    if (e.c.length) o.c = e.c;
    if (e.x.size) o.x = [...e.x.values()];
    if (e.b.size) o.b = [...e.b.values()];
    if (e.f.length) o.f = e.f;
    if (e.r.size) o.r = [...e.r].map((k) => ids.get(k)).filter(Boolean);
    if (e.o.length) { o.o = e.o; if (e.on > e.o.length) o.on = e.on; }
    return o;
  });

  /* ── 쓰기 — 내용이 그대로면 updated 날짜를 유지한다(날짜 = 마지막 내용 변경) ── */
  const OUT = path.join(ROOT, "glossary/data.js");
  const today = new Date().toISOString().slice(0, 10);
  let updated = today;
  if (fs.existsSync(OUT)) {
    try {
      const prev = fs.readFileSync(OUT, "utf8");
      const old = JSON.parse(prev.slice(prev.indexOf("{"), prev.lastIndexOf("}") + 1));
      if (JSON.stringify(old.entries) === JSON.stringify(entries)) updated = old.updated || today;
    } catch (err) { /* 새로 쓴다 */ }
  }
  const data = { updated, domains: DOMAINS, stats: { entries: entries.length, cards: stats.cards, defs: stats.defs, abbr: stats.abbr }, entries };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, "/* 자동 생성 — node tools/build-search-index.js (tools/glossary.js) · 직접 수정 금지 */\nwindow.WIKI_GLOSSARY = " + JSON.stringify(data) + ";\n");

  /* 검색 색인에는 용어 카드가 없는 용어만 더한다 — 카드는 이미 색인에 있다 */
  const extra = entries.filter((e) => !e.c).map((e) => {
    const D = DOMAINS.find((d) => d.label === e.d[0]) || DOMAINS[4];
    return { t: e.t, k: (e.a || []).join(" · "), s: (e.x && e.x[0].x) || (e.b && e.b[0].x) || "", u: "glossary/index.html#g-" + e.id, d: D.label, c: D.color, p: "용어집", g: "용어" };
  });
  return { out: rel(OUT), entries: entries.length, stats, extra, kb: (fs.statSync(OUT).size / 1024).toFixed(0), warnings };
};
