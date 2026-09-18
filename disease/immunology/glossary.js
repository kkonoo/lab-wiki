/* Immunology 전용 문서 — 본문에 처음 나오는 용어에 점선과 hover 정의를 붙인다.
   용어 사전은 각 섹션 data.js의 glossaryTerms(window.IMMUNOLOGY_* 전역)에서 모은다.
   스타일은 ../immunology.css의 .glossary-term 규칙을 그대로 쓴다. */
(function () {
  "use strict";
  var terms = {};
  Object.keys(window).forEach(function (k) {
    if (k.indexOf("IMMUNOLOGY") !== 0) return;
    var g = window[k] && window[k].glossaryTerms;
    if (!g) return;
    Object.keys(g).forEach(function (t) {
      var key = t.toLowerCase();
      if (!terms[key] && g[t] && g[t].definition) terms[key] = g[t];
    });
  });
  var list = Object.keys(terms).sort(function (a, b) { return b.length - a.length; });
  if (!list.length) return;

  var root = document.querySelector("article.article");
  if (!root) return;

  /* 건드리지 않을 자리 — 링크·제목·그림·별칭 줄·표 머리 */
  var SKIP_TAG = { A: 1, H1: 1, H2: 1, H3: 1, CODE: 1, BUTTON: 1, SCRIPT: 1, STYLE: 1,
                   THEAD: 1, TH: 1, SVG: 1, TITLE: 1, DESC: 1, TEXT: 1, FIGCAPTION: 0 };
  function skipped(node) {
    for (var el = node.parentNode; el && el !== root; el = el.parentNode) {
      if (el.nodeType !== 1) continue;
      /* SVG 요소는 tagName이 소문자라 정규화해서 본다 */
      if (SKIP_TAG[String(el.tagName).toUpperCase()]) return true;
      if (el.classList && (el.classList.contains("aliases") || el.classList.contains("fig-tools") ||
                           el.classList.contains("glossary-term"))) return true;
    }
    return false;
  }

  var nodes = [], walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  while (walker.nextNode()) {
    var n = walker.currentNode;
    if (n.nodeValue && n.nodeValue.trim() && !skipped(n)) nodes.push(n);
  }

  var seen = {}, marked = 0;

  function wrapFirst(node) {
    var text = node.nodeValue, low = text.toLowerCase();
    for (var i = 0; i < list.length; i++) {
      var t = list[i], item = terms[t];
      if (seen[item.key || t]) continue;
      var idx = low.indexOf(t);
      if (idx < 0) continue;
      if (/^[a-z0-9]/.test(t)) {                     /* 영문 용어는 단어 경계를 본다 */
        var b = idx > 0 ? text.charAt(idx - 1) : " ";
        var a = idx + t.length < text.length ? text.charAt(idx + t.length) : " ";
        if (/[A-Za-z0-9]/.test(b) || /[A-Za-z0-9]/.test(a)) continue;
      }
      seen[item.key || t] = true;
      marked++;
      var rest = node.splitText(idx);
      rest.nodeValue = rest.nodeValue.slice(t.length);
      var span = document.createElement("span");
      span.className = "glossary-term";
      span.setAttribute("tabindex", "0");
      span.setAttribute("data-definition", item.definition);
      span.textContent = text.substr(idx, t.length);
      node.parentNode.insertBefore(span, rest);
      return rest;                                   /* 남은 뒤쪽을 이어서 검사 */
    }
    return null;
  }

  nodes.forEach(function (node) {
    var cur = node, guard = 0;
    while (cur && guard++ < 12) cur = wrapFirst(cur);
  });

  if (marked) document.documentElement.setAttribute("data-glossary", String(marked));
})();
