#!/usr/bin/env node
/**
 * HaLab Wiki — global search index builder
 *
 * 모든 도메인 페이지(gwas / omics / single-cell / multi-omics / disease)를 훑어
 * article 단위 검색 색인을 assets/js/search-index.js 로 생성한다.
 *
 *   node tools/build-search-index.js
 *
 * 페이지 데이터 형태 3종을 모두 지원:
 *   1) const articles   = { id: {title, aliases, section, summary} , ... }   (html)
 *   2) const articleRows = [ [id, title, aliases, section, summary, ...], ]  (html)
 *   3) window.DISEASE = { meta, sections, articles:[{id,title,aliases,summary,section}] } (data.js)
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'assets', 'js', 'search-index.js');

/* 도메인 정의: 경로 접두사 → 라벨 / 색 */
const DOMAINS = [
  { prefix: 'gwas',        label: 'GWAS',           accent: '#315d78' },
  { prefix: 'single-cell', label: 'Single-cell',    accent: '#1f5d43' },
  { prefix: 'multi-omics', label: 'Multi-omics',    accent: '#936f21' },
  { prefix: 'omics',       label: 'Omics',          accent: '#94553b' },
  { prefix: 'disease',     label: 'Human diseases', accent: '#6f3a55' }
];

function domainOf(rel) {
  const first = rel.split('/')[0];
  const hit = DOMAINS.find(d => d.prefix === first);
  return hit || { prefix: first, label: first, accent: '#667168' };
}

/* ---------- JS literal 추출 (balanced scanner) ---------- */
function extractLiteral(src, name, open) {
  const re = new RegExp('(?:const|let|var)\\s+' + name + '\\s*=\\s*\\' + open);
  const m = re.exec(src);
  if (!m) return null;
  const close = open === '{' ? '}' : ']';
  const start = src.indexOf(open, m.index);
  let depth = 0, str = null, esc = false;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (str) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === str) str = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { str = c; continue; }
    if (c === open) depth++;
    else if (c === close) { depth--; if (depth === 0) return src.slice(start, i + 1); }
  }
  return null;
}

function evalLiteral(lit) {
  if (!lit) return null;
  try { return vm.runInNewContext('(' + lit + ')', {}, { timeout: 5000 }); }
  catch (e) { return null; }
}

function titleOf(html, fallback) {
  const m = /<title>([\s\S]*?)<\/title>/i.exec(html);
  if (!m) return fallback;
  return m[1].replace(/·\s*HaLab Wiki\s*$/i, '').trim() || fallback;
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === '.git' || e.name === 'node_modules' || e.name === '_schema') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const clean = v => String(v == null ? '' : v).replace(/\s+/g, ' ').trim();
const aliasStr = a => (Array.isArray(a) ? a : [a]).filter(Boolean).map(clean).join(' · ');

/* ---------- 수집 ---------- */
const entries = [];
const pages = [];
let skipped = [];

for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const dir = rel.split('/').slice(0, -1).join('/');

  /* 1) 질환 data.js */
  if (rel.endsWith('/data.js')) {
    const sandbox = { window: {}, console };
    let D = null;
    try { vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { timeout: 5000 }); D = sandbox.window.DISEASE; }
    catch (e) { skipped.push(rel + ' (' + e.message + ')'); continue; }
    if (!D || !D.articles) { skipped.push(rel + ' (no articles)'); continue; }
    const dom = domainOf(rel);
    const pageTitle = clean((D.meta && D.meta.title) || dir);
    const url = dir + '/index.html';
    pages.push({ t: pageTitle, u: url, d: dom.label, c: dom.accent, s: clean(D.meta && D.meta.description) });
    const secTitle = k => clean(((D.sections || {})[k] || {}).title);
    for (const a of D.articles) {
      if (!a || !a.id) continue;
      entries.push({
        t: clean(a.title), k: aliasStr(a.aliases), s: clean(a.summary),
        u: url + '#article/' + a.id, p: pageTitle, g: secTitle(a.section),
        d: dom.label, c: dom.accent
      });
    }
    continue;
  }

  if (!rel.endsWith('.html')) continue;
  const html = fs.readFileSync(file, 'utf8');
  const dom = domainOf(rel);
  const pageTitle = titleOf(html, rel);
  const url = rel;

  const sections = evalLiteral(extractLiteral(html, 'sections', '{')) || {};
  const secTitle = k => clean((sections[k] || {}).title);

  /* landing page (index.html at root, gwas hub 등) — 페이지 자체도 검색 대상 */
  const desc = (/<meta name="description" content="([^"]*)"/i.exec(html) || [])[1];
  const lead = (/<p class="lead">([\s\S]*?)<\/p>/i.exec(html) || [])[1];
  if (rel !== 'index.html') {
    pages.push({
      t: pageTitle, u: url, d: dom.label, c: dom.accent,
      s: clean((desc || lead || '').replace(/<[^>]+>/g, ''))
    });
  }

  /* 2) const articles = {...} */
  const objLit = extractLiteral(html, 'articles', '{');
  const obj = evalLiteral(objLit);
  if (obj && Object.keys(obj).length) {
    for (const [id, a] of Object.entries(obj)) {
      if (!a || !a.title) continue;
      entries.push({
        t: clean(a.title), k: aliasStr(a.aliases), s: clean(a.summary),
        u: url + '#article/' + id, p: pageTitle, g: secTitle(a.section),
        d: dom.label, c: dom.accent
      });
    }
    continue;
  }

  /* 3) const articleRows = [[id,title,aliases,section,summary,...], ...] */
  const rows = evalLiteral(extractLiteral(html, 'articleRows', '['));
  if (Array.isArray(rows) && rows.length) {
    for (const r of rows) {
      if (!Array.isArray(r) || !r[0]) continue;
      entries.push({
        t: clean(r[1]), k: aliasStr(r[2]), s: clean(r[4]),
        u: url + '#article/' + r[0], p: pageTitle, g: secTitle(r[3]),
        d: dom.label, c: dom.accent
      });
    }
  }
}

/* 중복 제거 (같은 url) */
const seen = new Set();
const items = entries.filter(e => (seen.has(e.u) ? false : (seen.add(e.u), true)));
const pageSeen = new Set();
const pageItems = pages.filter(p => (pageSeen.has(p.u) ? false : (pageSeen.add(p.u), true)));

const payload = {
  built: new Date().toISOString().slice(0, 10),
  domains: DOMAINS.map(d => ({ label: d.label, accent: d.accent })),
  pages: pageItems,
  items
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, 'window.WIKI_SEARCH_INDEX = ' + JSON.stringify(payload) + ';\n', 'utf8');

const byDomain = {};
for (const i of items) byDomain[i.d] = (byDomain[i.d] || 0) + 1;
console.log('search-index.js 생성 완료 →', path.relative(ROOT, OUT));
console.log('  articles:', items.length, '| pages:', pageItems.length,
            '|', (fs.statSync(OUT).size / 1024).toFixed(1) + 'KB');
console.log('  ' + Object.entries(byDomain).map(([k, v]) => k + ' ' + v).join(' · '));
if (skipped.length) console.log('  skipped:', skipped.join(', '));
