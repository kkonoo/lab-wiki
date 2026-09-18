/* Immunology 04-adaptive-effector — 그림 토글과 표 ↔ 그림 연동 (의존성 없음)
   공통 동작(상단 검색·탭)은 ../01-basics/basics.js */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* svg 안의 [data-fg] 그룹과 keys가 겹치면 .on */
  function highlighter(svg) {
    var els = $$(".fg[data-fg]", svg);
    return function (keys) {
      if (!keys || !keys.length) {
        svg.classList.remove("hot");
        els.forEach(function (el) { el.classList.remove("on"); });
        return;
      }
      svg.classList.add("hot");
      els.forEach(function (el) {
        var t = (el.getAttribute("data-fg") || "").split(/\s+/);
        el.classList.toggle("on", t.some(function (k) { return keys.indexOf(k) >= 0; }));
      });
    };
  }

  /* 표 행 ↔ 그림 */
  function bindRows(figName, hi) {
    var rows = $$('[data-fig="' + figName + '"][data-hl]');
    function paint(keys) {
      rows.forEach(function (tr) {
        tr.classList.toggle("on", !!keys && keys.indexOf(tr.getAttribute("data-hl")) >= 0);
      });
    }
    rows.forEach(function (tr) {
      var k = tr.getAttribute("data-hl").split(/\s+/);
      tr.addEventListener("mouseenter", function () { hi(k); paint(k); });
      tr.addEventListener("mouseleave", function () { hi(null); paint(null); });
    });
    return paint;
  }

  /* 모드 버튼 + 번호 설명 목록 */
  function bindMode(svg, attr, hi) {
    var btns = $$("[" + attr + "]");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        var m = b.getAttribute(attr);
        svg.setAttribute("data-mode", m);
        btns.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        $$(".steps").forEach(function (s) { s.classList.toggle("on", s.getAttribute("data-mode") === m); });
        if (hi) hi(null);
      });
    });
  }

  [["tact", "data-tamode"], ["tex", "data-txmode"], ["gc", "data-gcmode"], ["mem2", "data-mmmode"],
   ["fcx", "data-fcmode"], ["bar", "data-brmode"], ["tis", "data-tsmode"]]
    .forEach(function (pair) {
      var svg = $("svg." + pair[0]);
      if (!svg) return;
      var hi = highlighter(svg);
      var paint = bindRows(pair[0], hi);
      bindMode(svg, pair[1], hi);
      $$(".fg[data-fg]", svg).forEach(function (g) {
        var k = [g.getAttribute("data-fg")];
        g.addEventListener("mouseenter", function () { hi(k); paint(k); });
        g.addEventListener("mouseleave", function () { hi(null); paint(null); });
      });
    });
})();
