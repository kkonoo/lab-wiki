#!/usr/bin/env node
/*
 * HaLab Wiki 전체 검색 색인 생성기 → assets/js/search-index.js
 *
 *   cd wiki/site && node tools/build-search-index.js
 *
 * 페이지를 추가·수정한 뒤 다시 실행. 의존성 없음(Node 18+).
 * 읽는 형식
 *   1) HTML 안의 const sections / articles / articleRows  (gwas·omics·single-cell·multi-omics·질문형 질환 페이지)
 *   2) data.js 의 window.DISEASE                             (disease-page.js 질환 페이지)
 *   3) data.js 의 window.IMMUNOLOGY(_BASICS)                  (immunology SPA · articlePages 전용 문서)
 *   4) 정적 HTML 문서                                         (h1 · Aliases · meta description · id 달린 h2 · 약어 dt/dd)
 *   5) 허브 index.html                                        (페이지 목록)
 */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "assets/js/search-index.js");

const DOMAINS = [
  { key: "gwas", label: "GWAS", color: "var(--blue)" },
  { key: "omics", label: "Omics", color: "var(--rust)" },
  { key: "single-cell", label: "Single-cell", color: "var(--green)" },
  { key: "multi-omics", label: "Multi-omics", color: "var(--gold)" },
  { key: "disease", label: "Disease", color: "var(--plum)" },
];
const SKIP = new Set(["index.html", "index.old.html"]);          // 대문 자체
const items = [], pages = [], seenPage = new Set(), log = [];

/* ── 유틸 ── */
const rel = (abs) => path.relative(ROOT, abs).split(path.sep).join("/");
const domainOf = (r) => DOMAINS.find((d) => r === d.key || r.startsWith(d.key + "/")) || DOMAINS[4];
const decode = (s) => String(s)
  .replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'").replace(/&amp;/g, "&");
const text = (html) => decode(String(html || "").replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
  .replace(/<svg[\s\S]*?<\/svg>/gi, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const clip = (s, n = 220) => (s && s.length > n ? s.slice(0, n - 1) + "…" : s || "");
const cleanTitle = (t) => text(t).replace(/\s*·\s*(HaLab Wiki|Immunology|General Neuro)\s*$/i, "").trim();
const join = (a) => (Array.isArray(a) ? a.filter(Boolean).join(" · ") : a ? String(a) : "");
const meta = (html, name) => { const m = html.match(new RegExp('<meta name="' + name + '" content="([^"]*)"', "i")); return m ? decode(m[1]) : ""; };
const tag = (html, t) => { const m = html.match(new RegExp("<" + t + "[^>]*>([\\s\\S]*?)</" + t + ">", "i")); return m ? text(m[1]) : ""; };

function addItem(o) {
  if (!o.t || !o.u) return;
  items.push({ t: clip(o.t, 140), k: clip(o.k || "", 260), s: clip(o.s || "", 240), u: o.u, d: o.d, c: o.c, p: o.p || "", g: o.g || "" });
}
function addPage(o) {
  if (!o.t || !o.u || seenPage.has(o.u)) return;
  seenPage.add(o.u);
  pages.push({ t: clip(o.t, 120), s: clip(o.s || "", 220), u: o.u, d: o.d, c: o.c });
}
function resolveUrl(pageRel, href) {
  if (!href) return "";
  if (/^https?:/.test(href)) return href;
  const [p, h] = href.split("#");
  const abs = path.posix.normalize(path.posix.join(path.posix.dirname(pageRel), p || path.posix.basename(pageRel)));
  return abs + (h ? "#" + h : "");
}

/* JS 리터럴 꺼내기: `const NAME = {` 또는 `[` 부터 짝이 맞는 괄호까지 (문자열·주석 건너뜀) */
function literal(src, name) {
  const m = src.match(new RegExp("(?:const|let|var)\\s+" + name + "\\s*=\\s*([\\[{])"));
  if (!m) return undefined;
  let i = m.index + m[0].length - 1, depth = 0, q = null;
  for (let j = i; j < src.length; j++) {
    const ch = src[j], nx = src[j + 1];
    if (q) {
      if (ch === "\\") { j++; continue; }
      if (ch === q) q = null;
      continue;
    }
    if (ch === "/" && nx === "/") { j = src.indexOf("\n", j); if (j < 0) break; continue; }
    if (ch === "/" && nx === "*") { j = src.indexOf("*/", j + 2) + 1; continue; }
    if (ch === '"' || ch === "'" || ch === "`") { q = ch; continue; }
    if (ch === "{" || ch === "[") depth++;
    else if (ch === "}" || ch === "]") { depth--; if (depth === 0) return vm.runInNewContext("(" + src.slice(i, j + 1) + ")", {}, { timeout: 2000 }); }
  }
  return undefined;
}
function loadWindow(files) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  files.forEach((f) => vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f, timeout: 2000 }));
  return ctx.window;
}

/* ── 1) 인라인 sections/articles/articleRows 페이지 ── */
function inlinePage(abs, html) {
  const r = rel(abs), D = domainOf(r);
  let articles = literal(html, "articles");
  const rows = literal(html, "articleRows");
  if (rows && (!articles || typeof articles !== "object")) {
    articles = Object.fromEntries(rows.map((row) => [row[0], { title: row[1], aliases: row[2], section: row[3], summary: row[4] }]));
  }
  const sections = literal(html, "sections") || {};
  const pageTitle = cleanTitle(tag(html, "title"));
  addPage({ t: pageTitle, s: meta(html, "description"), u: r, d: D.label, c: D.color });
  let n = 0;
  Object.entries(articles || {}).forEach(([id, a]) => {
    const sec = sections[a.section] || {};
    addItem({ t: a.title, k: join(a.aliases), s: a.summary, u: r + "#article/" + id, d: D.label, c: D.color, p: pageTitle, g: sec.title }); n++;
  });
  Object.entries(sections).forEach(([key, sec]) => {
    addItem({ t: sec.title, k: join([sec.english, sec.kuby]), s: sec.summary, u: r + "#section/" + key, d: D.label, c: D.color, p: pageTitle, g: "섹션" });
    (sec.groups || []).forEach((g) => (g.items || []).forEach((it) => {
      if (articles && articles[it[0]]) return;
      const u = it[4] ? resolveUrl(r, it[4]) : r + "#section/" + key;
      addItem({ t: it[1], s: join([it[2], it[3]]), u, d: D.label, c: D.color, p: pageTitle, g: g.q });
    }));
  });
  log.push(`inline   ${r}  articles ${n}`);
}

/* ── 2) window.DISEASE ── */
function diseasePage(abs, html) {
  const r = rel(abs), D = domainOf(r);
  const W = loadWindow([path.join(path.dirname(abs), "data.js")]);
  const X = W.DISEASE; if (!X) return false;
  const pageTitle = cleanTitle((X.meta && X.meta.title) || tag(html, "title"));
  addPage({ t: pageTitle, s: meta(html, "description"), u: r, d: D.label, c: D.color });
  const secs = X.sections || {};
  (X.articles || []).forEach((a) => {
    const sec = secs[a.section] || {};
    addItem({ t: a.title, k: join(a.aliases), s: a.summary, u: r + "#article/" + a.id, d: D.label, c: D.color, p: pageTitle, g: sec.title });
  });
  Object.entries(secs).forEach(([key, sec]) => addItem({ t: sec.title, s: (sec.questions || []).map((q) => q.q).join(" · "), u: r + "#section/" + key, d: D.label, c: D.color, p: pageTitle, g: "섹션" }));
  log.push(`disease  ${r}  articles ${(X.articles || []).length}`);
  return true;
}

/* ── 3) window.IMMUNOLOGY ── */
function immunology(dirAbs) {
  const base = rel(dirAbs), D = domainOf(base);
  const rootData = path.join(dirAbs, "data.js"), basics = path.join(dirAbs, "01-basics/data.js");
  const W0 = loadWindow([basics, rootData]);                        // 대문 SPA와 같은 순서
  const I = W0.IMMUNOLOGY || {};
  const routes = I.sectionRoutes || {}, pagesMap = I.articlePages || {};
  const articleRoute = I.articleRoute || "./01-basics/index.html";
  addPage({ t: "Immunology", s: meta(fs.readFileSync(path.join(dirAbs, "index.html"), "utf8"), "description"), u: base + "/index.html", d: D.label, c: D.color });
  const rowsById = Object.fromEntries((I.articleRows || []).map((row) => [row[0], row]));
  const secUrl = (key) => base + "/" + String(routes[key] || "./index.html").replace(/^\.\//, "");
  const allPages = Object.assign({}, pagesMap);                     // 섹션별 전용 문서를 모은다
  // 섹션별 data.js (02~06 포함) — articleRows·articlePages가 섹션 쪽에 있으면 그것을 우선
  Object.entries(routes).forEach(([key, route]) => {
    const secDir = path.join(dirAbs, path.dirname(route));
    const W = loadWindow([path.join(secDir, "data.js")]);
    const SI = W.IMMUNOLOGY || {};
    const S = (SI.sections && SI.sections[key]) || (I.sections || {})[key];
    if (!S) return;
    const rows = Object.assign({}, rowsById, Object.fromEntries((SI.articleRows || []).map((row) => [row[0], row])));
    const pages = Object.assign({}, pagesMap, SI.articlePages || {});
    Object.assign(allPages, SI.articlePages || {});
    const artUrl = (id) => pages[id] ? base + "/" + pages[id] : base + "/" + articleRoute.replace(/^\.\//, "") + "#article/" + id;
    const secTitle = S.number ? S.number + " " + S.title : S.title;
    addPage({ t: "Immunology · " + secTitle, s: S.summary, u: secUrl(key), d: D.label, c: D.color });
    addItem({ t: S.title, k: join([S.english, S.kuby]), s: S.summary, u: secUrl(key), d: D.label, c: D.color, p: "Immunology", g: "섹션" });
    (S.groups || []).forEach((g) => (g.items || []).forEach((it) => {
      const row = rows[it[0]];
      if (row) addItem({ t: row[1], k: join(row[2]), s: row[4], u: artUrl(row[0]), d: D.label, c: D.color, p: "Immunology", g: secTitle });
      else addItem({ t: it[1], s: join([it[2], it[3]]), u: it[4] ? resolveUrl(secUrl(key), it[4]) : secUrl(key), d: D.label, c: D.color, p: "Immunology", g: secTitle + " › " + g.q });
    }));
  });
  log.push(`immuno   ${base}  articles ${Object.keys(rowsById).length} · 전용 문서 ${Object.keys(allPages).length}`);
  return new Set(Object.values(allPages).map((p) => base + "/" + p));
}

/* ── 4) 정적 문서 ── */
function staticDoc(abs, html, crumbP) {
  const r = rel(abs), D = domainOf(r);
  const h1 = tag(html, "h1") || cleanTitle(tag(html, "title"));
  const aliases = (html.match(/<p class="aliases">([\s\S]*?)<\/p>/i) || [])[1];
  const abbr = [...html.matchAll(/<dt>([\s\S]*?)<\/dt>\s*<dd>([\s\S]*?)<\/dd>/gi)].map((m) => text(m[1]) + " " + text(m[2]));
  const k = join([aliases ? text(aliases).replace(/^Aliases:\s*/i, "") : "", abbr.join(" · ")]);
  const desc = meta(html, "description");
  /* 같은 URL 항목(예: immunology 목록의 전용 문서 행)이 있으면 별칭·약어만 합쳐 중복 결과 방지 */
  const same = items.find((it) => it.u === r);
  if (same) {
    same.k = clip(join([same.k, k]), 400);
    if (!same.s) same.s = clip(desc, 240);
  } else addItem({ t: h1, k, s: desc, u: r, d: D.label, c: D.color, p: crumbP, g: "문서" });
  let n = 0;
  for (const m of html.matchAll(/<h2([^>]*)>([\s\S]*?)<\/h2>([\s\S]{0,1200})/gi)) {
    const id = (m[1].match(/id="([^"]+)"/) || [])[1];
    const title = text(m[2].replace(/<small[\s\S]*?<\/small>/gi, ""));
    const lede = (m[3].match(/<p class="lede[^"]*">([\s\S]*?)<\/p>/i) || [])[1];
    if (!title) continue;
    addItem({ t: title, s: lede ? text(lede) : "", u: id ? r + "#" + id : r, d: D.label, c: D.color, p: crumbP ? crumbP + " › " + h1 : h1, g: "문서 구역" }); n++;
  }
  log.push(`static   ${r}  구역 ${n}`);
}

/* ── 5) 순회 ── */
function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "tools" || e.name === "assets" || e.name === "_schema") continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out); else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

const immDir = path.join(ROOT, "disease/immunology");
const immDocs = fs.existsSync(immDir) ? immunology(immDir) : new Set();

for (const abs of walk(ROOT).sort()) {
  const r = rel(abs);
  if (SKIP.has(r)) continue;
  const html = fs.readFileSync(abs, "utf8");
  if (/http-equiv="refresh"/i.test(html)) { log.push(`skip     ${r}  (redirect)`); continue; }
  if (r.startsWith("disease/immunology/")) {
    if (immDocs.has(r)) staticDoc(abs, html, "Immunology");
    continue;                                                      // SPA 셸은 immunology()에서 처리
  }
  if (/const\s+(articles|articleRows)\s*=\s*[\[{]/.test(html)) { inlinePage(abs, html); continue; }
  if (/disease-page\.js/.test(html) && fs.existsSync(path.join(path.dirname(abs), "data.js"))) { if (diseasePage(abs, html)) continue; }
  if (/<p class="aliases">|<h2[^>]*id="/i.test(html) || /brainmap|class="tabs"/.test(html)) {
    const parentHub = path.join(path.dirname(abs), "index.html");
    const p = fs.existsSync(parentHub) && abs !== parentHub ? cleanTitle(tag(fs.readFileSync(parentHub, "utf8"), "title")) : "";
    staticDoc(abs, html, p); continue;
  }
  const D = domainOf(r);                                             // 허브
  addPage({ t: cleanTitle(tag(html, "title")) || tag(html, "h1"), s: meta(html, "description") || text((html.match(/<p class="lead">([\s\S]*?)<\/p>/i) || [])[1]), u: r, d: D.label, c: D.color });
  log.push(`hub      ${r}`);
}

const IDX = { generated: new Date().toISOString().slice(0, 10), domains: DOMAINS, items, pages };
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, "/* 자동 생성 — node tools/build-search-index.js · 직접 수정 금지 */\nwindow.WIKI_SEARCH_INDEX = " + JSON.stringify(IDX) + ";\n");
if (process.argv.includes("-v")) console.log(log.join("\n"));
const byD = {}; items.forEach((i) => (byD[i.d] = (byD[i.d] || 0) + 1));
console.log(`✓ ${rel(OUT)} · items ${items.length} · pages ${pages.length} · ${(fs.statSync(OUT).size / 1024).toFixed(0)} KB · ` + Object.entries(byD).map(([k, v]) => k + " " + v).join(" · "));
