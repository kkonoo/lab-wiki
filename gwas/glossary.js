/* GWAS 용어 사전 — gwas/index.html(SPA)과 gwas 시각 페이지(<NN-섹션>/*.html)가 같이 쓰는 SSOT.
   SPA       : index.html의 createAnnotator가 window.GWAS_GLOSSARY.terms · .pattern을 읽는다 → index.html 인라인 스크립트보다 먼저 로드.
   시각 페이지 : body.vpage면 article.article 본문에서 용어마다 첫 등장 1회에 점선 + hover 정의를 붙인다.
   용어 추가는 terms에만 한다 — pattern은 terms 키에서 긴 것부터 자동으로 만든다.
   스타일(.glossary-term)은 SPA는 index.html, 시각 페이지는 gwas.css 쪽. 규칙: site/_schema/visual-page.md §9 */
(function () {
  "use strict";
  var terms = {
    "genetic variant": { key: "variant", definition: "Reference sequence와 다른 DNA position 또는 sequence." },
    "variant": { key: "variant", definition: "Reference sequence와 다른 DNA position 또는 sequence." },
    "snp": { key: "snp", definition: "Single nucleotide position에서 나타나는 genetic variant." },
    "allele": { key: "allele", definition: "하나의 locus에서 가능한 서로 다른 sequence form." },
    "alleles": { key: "allele", definition: "하나의 locus에서 가능한 서로 다른 sequence form." },
    "genotype": { key: "genotype", definition: "Individual이 보유한 allele combination 또는 allele count." },
    "phenotype": { key: "phenotype", definition: "GWAS에서 분석하는 관찰 가능한 trait 또는 disease status." },
    "locus": { key: "locus", definition: "Genome상의 특정 position 또는 genomic region." },
    "loci": { key: "locus", definition: "Genome상의 특정 position 또는 genomic region." },
    "ld": { key: "ld", definition: "서로 다른 variant가 population에서 non-random하게 함께 나타나는 pattern." },
    "ancestry": { key: "ancestry", definition: "Shared genetic background를 반영하는 population structure." },
    "association": { key: "association", definition: "Variant와 phenotype 사이의 statistical relationship; causality와는 구분." },
    "effect size": { key: "effect-size", definition: "Association의 direction과 magnitude; 주로 beta 또는 OR로 표시." },
    "p-value": { key: "p-value", definition: "Null model에서 현재보다 극단적인 result가 나올 probability." },
    "summary statistics": { key: "summary-statistics", definition: "Variant별 effect size, SE, p-value 등을 담은 result table." },
    "summary stats": { key: "summary-statistics", definition: "Variant별 effect size, SE, p-value 등을 담은 result table." },
    "genome build": { key: "genome-build", definition: "Genomic position의 기준이 되는 reference genome version." },
    "reference panel": { key: "reference-panel", definition: "Imputation 또는 LD 계산에 사용하는 reference genotype dataset." },
    "causal variant": { key: "causal-variant", definition: "Phenotype 변화에 직접 관여한다고 추정되는 genetic variant." }
  };

  /* (앞 경계)(용어)(뒤 경계) — 영문·숫자에 붙은 부분 일치는 잡지 않는다. 긴 용어가 먼저 맞도록 길이순 */
  var alternation = Object.keys(terms)
    .sort(function (a, b) { return b.length - a.length; })
    .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); })
    .join("|");
  var pattern = new RegExp("(^|[^A-Za-z0-9])(" + alternation + ")(?=$|[^A-Za-z0-9])", "gi");

  window.GWAS_GLOSSARY = { terms: terms, pattern: pattern };

  /* ── 시각 페이지 전용: 본문 텍스트 노드에 직접 붙인다 ── */
  if (!document.body || !document.body.classList.contains("vpage")) return;
  var root = document.querySelector("article.article");
  if (!root) return;

  /* 건드리지 않을 자리 — 링크·제목·코드·그림(SVG 안 글자 포함)·별칭 줄 */
  var SKIP_TAG = /^(A|H1|H2|H3|CODE|PRE|BUTTON|SCRIPT|STYLE|THEAD|TH|SVG|TITLE|DESC|TEXT|TSPAN)$/;
  function skipped(node) {
    for (var el = node.parentNode; el && el !== root; el = el.parentNode) {
      if (el.nodeType !== 1) continue;
      if (SKIP_TAG.test(String(el.tagName).toUpperCase())) return true;     /* SVG 요소는 tagName이 소문자 */
      if (el.classList && (el.classList.contains("aliases") || el.classList.contains("glossary-term"))) return true;
    }
    return false;
  }

  var nodes = [], walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  while (walker.nextNode()) {
    var n = walker.currentNode;
    if (n.nodeValue && n.nodeValue.trim() && !skipped(n)) nodes.push(n);
  }

  var seen = {}, marked = 0;
  function wrapNext(node) {
    var re = new RegExp(pattern.source, "gi"), text = node.nodeValue, m;
    while ((m = re.exec(text))) {
      var item = terms[m[2].toLowerCase()];
      if (!item || seen[item.key]) continue;
      seen[item.key] = true;
      marked++;
      var rest = node.splitText(m.index + m[1].length);
      rest.nodeValue = rest.nodeValue.slice(m[2].length);
      var span = document.createElement("span");
      span.className = "glossary-term";
      span.setAttribute("tabindex", "0");
      span.setAttribute("data-definition", item.definition);
      span.textContent = m[2];
      node.parentNode.insertBefore(span, rest);
      return rest;                                   /* 남은 뒤쪽을 이어서 검사 */
    }
    return null;
  }
  nodes.forEach(function (node) {
    var cur = node, guard = 0;
    while (cur && guard++ < 12) cur = wrapNext(cur);
  });

  if (marked) document.documentElement.setAttribute("data-glossary", String(marked));
})();
