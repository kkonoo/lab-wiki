/* Human genetics 시각 페이지 공용 — 그림 모드 토글 (의존성 없음). gwas/gwas-fig.js와 같은 계약.
   .seg[data-fig="<figure id>"] 안의 button[data-mode] → figure[data-mode] 갱신 · 그 안의 .g-ov[data-ov=모드]에 .on */
(function () {
  "use strict";
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  $$(".seg[data-fig]").forEach(function (seg) {
    var fig = document.getElementById(seg.getAttribute("data-fig"));
    if (!fig) return;
    var btns = $$("button[data-mode]", seg);
    function set(m) {
      fig.setAttribute("data-mode", m);
      btns.forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-mode") === m ? "true" : "false"); });
      $$(".g-ov", fig).forEach(function (g) { g.classList.toggle("on", g.getAttribute("data-ov") === m); });
    }
    btns.forEach(function (b) { b.addEventListener("click", function () { set(b.getAttribute("data-mode")); }); });
    set(fig.getAttribute("data-mode") || btns[0].getAttribute("data-mode"));
  });
})();
