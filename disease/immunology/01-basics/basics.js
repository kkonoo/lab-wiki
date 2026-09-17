/* Immunology 01-basics — overview.html · cells.html 상호작용 (의존성 없음) */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* 상단 검색 → 목록 페이지 검색으로 */
  var form = $("#topSearchForm"), input = $("#topSearch");
  if (form) form.addEventListener("submit", function (e) {
    e.preventDefault();
    var v = input.value.trim();
    if (v) location.href = "./index.html#search/" + encodeURIComponent(v);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && input && document.activeElement.tagName !== "INPUT") { e.preventDefault(); input.focus(); }
  });

  /* 탭 */
  $$('[role="tablist"]').forEach(function (list) {
    var tabs = $$('[role="tab"]', list);
    function show(t, push) {
      tabs.forEach(function (x) {
        var on = x === t;
        x.setAttribute("aria-selected", on ? "true" : "false");
        x.tabIndex = on ? 0 : -1;
        document.getElementById(x.getAttribute("aria-controls")).hidden = !on;
      });
      if (push) history.replaceState(null, "", "#" + t.id);
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { show(t, true); });
      t.addEventListener("keydown", function (e) {
        var n = e.key === "ArrowRight" ? tabs[(i + 1) % tabs.length] : e.key === "ArrowLeft" ? tabs[(i - 1 + tabs.length) % tabs.length] : null;
        if (n) { e.preventDefault(); n.focus(); show(n, true); }
      });
    });
    var init = tabs.filter(function (t) { return t.id === location.hash.slice(1); })[0];
    if (init) show(init, false);
  });

  /* 그림 강조: svg 안의 [attr] 토큰과 keys가 겹치면 .on */
  function highlighter(svg, sel, attr) {
    var els = $$(sel, svg);
    return function (keys) {
      if (!keys || !keys.length) {
        svg.classList.remove("hot");
        els.forEach(function (el) { el.classList.remove("on"); });
        return;
      }
      svg.classList.add("hot");
      els.forEach(function (el) {
        var t = (el.getAttribute(attr) || "").split(/\s+/);
        el.classList.toggle("on", t.some(function (k) { return keys.indexOf(k) >= 0; }));
      });
    };
  }

  function bindTriggers(figName, hi, onShow) {
    var pinned = null, pinBtn = null, timer = null;
    function keysOf(el) { return el.getAttribute("data-hl").split(/\s+/); }
    function rest() { hi(pinned); if (onShow) onShow(null); }
    $$('[data-fig="' + figName + '"][data-hl]').forEach(function (el) {
      el.addEventListener("mouseenter", function () { hi(keysOf(el)); });
      el.addEventListener("mouseleave", rest);
      el.addEventListener("focus", function () { hi(keysOf(el)); });
      el.addEventListener("blur", rest);
      if (el.tagName === "BUTTON") el.addEventListener("click", function () {
        var same = pinBtn === el;
        if (pinBtn) pinBtn.classList.remove("on");
        clearTimeout(timer);
        pinned = same ? null : keysOf(el);
        pinBtn = same ? null : el;
        if (pinBtn) pinBtn.classList.add("on");
        hi(pinned);
        if (el.classList.contains("see")) {           /* 그림이 화면 밖일 때 */
          var fig = document.getElementById(figName + "Fig");
          if (fig) fig.scrollIntoView({ behavior: "smooth", block: "center" });
          timer = setTimeout(function () { if (pinBtn === el) { el.classList.remove("on"); pinned = pinBtn = null; hi(null); } }, 4000);
        }
      });
    });
  }

  /* ── overview: 조혈 계통도 ── */
  var map = $("svg.hmap");
  if (map) {
    var hiMap = (function () {
      var h1 = highlighter(map, ".cell[data-k]", "data-k"), h2 = highlighter(map, ".edge[data-k]", "data-k");
      return function (k) { h1(k); h2(k); };
    })();
    var PARENT = { cmp: "hsc", clp: "hsc", mep: "cmp", gmp: "cmp", rbc: "mep", mk: "mep", plt: "mk",
      neut: "gmp", eos: "gmp", baso: "gmp", mono: "gmp", dc: "gmp", mast: "gmp", mac: "mono", tdc: "dc",
      nk: "clp", b: "clp", thy: "clp", t: "thy", nkt: "thy", plasma: "b", efft: "t" };
    var LIN = { st: "줄기세포", my: "골수계", ly: "림프계" };
    var ROLE = { inn: "선천", ada: "적응", il: "innate-like", non: "산소 운반·지혈", prog: "전구 단계" };
    var PLACE = { hsc: "골수", cmp: "골수", clp: "골수", mep: "골수", gmp: "골수", mk: "골수", thy: "흉선",
      mast: "조직", mac: "조직", tdc: "조직 → 림프절", plasma: "조직·림프기관", efft: "조직·림프기관" };
    var FULL = { hsc: "hematopoietic stem cell", cmp: "common myeloid progenitor", clp: "common lymphoid progenitor",
      mep: "megakaryocyte–erythrocyte progenitor", gmp: "granulocyte–macrophage progenitor", nk: "natural killer", nkt: "natural killer T" };
    var info = $("#mapInfo"), infoDefault = info ? info.innerHTML : "";
    function lineage(k) { var o = [k]; while (PARENT[o[o.length - 1]]) o.push(PARENT[o[o.length - 1]]); return o; }
    function describe(g) {
      if (!info) return;
      if (!g) { info.innerHTML = infoDefault; return; }
      var k = g.getAttribute("data-k"), c = g.classList, nm = $(".nm", g), sb = $(".sb", g);
      var lin = ["st", "my", "ly"].filter(function (x) { return c.contains(x); })[0];
      var role = ["inn", "ada", "il", "non", "prog"].filter(function (x) { return c.contains(x); })[0];
      var name = k === "thy" ? "Thymocyte" : k === "mk" ? "Megakaryocyte" : (nm ? nm.textContent : k);
      var ko = k === "thy" ? "흉선세포" : k === "mk" ? "거핵세포" : (sb ? sb.textContent : "");
      info.innerHTML = "<b>" + name + "</b>" + (FULL[k] ? " " + FULL[k] + " ·" : "") + " " + ko + " · 계통 <em>" + LIN[lin] + "</em> · 역할 <em>" + ROLE[role] +
        "</em> · 장소 <em>" + (PLACE[k] || "혈액") + "</em> · 경로 <em>" + lineage(k).reverse().map(function (x) { return x.toUpperCase(); }).join(" → ") + "</em>";
    }
    $$(".cell[data-k]", map).forEach(function (g) {
      var k = g.getAttribute("data-k");
      g.addEventListener("mouseenter", function () { hiMap(lineage(k)); describe(g); });
      g.addEventListener("mouseleave", function () { hiMap(null); describe(null); });
      g.addEventListener("click", function () { hiMap(lineage(k)); describe(g); });
    });
    bindTriggers("map", hiMap);

    var legend = $("#mapLegend");
    $$("[data-mode]", $("#mapMode")).forEach(function (b) {
      b.addEventListener("click", function () {
        var role = b.getAttribute("data-mode") === "role";
        map.classList.toggle("role", role);
        if (legend) legend.setAttribute("data-show", role ? "role" : "lin");
        $$("[data-mode]", $("#mapMode")).forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      });
    });
  }

  /* ── cells: 채혈관 ── */
  var tubes = $("svg.tubes");
  if (tubes) {
    var hiT = highlighter(tubes, ".layer[data-layer]", "data-layer");
    bindTriggers("tubes", function (k) {
      hiT(k);
      $$('tr[data-fig="tubes"]').forEach(function (tr) {
        tr.classList.toggle("on", !!k && tr.getAttribute("data-hl") === k.join(" "));
      });
    });
    $$(".layer[data-layer]", tubes).forEach(function (g) {
      var ks = g.getAttribute("data-layer").split(/\s+/);
      g.addEventListener("mouseenter", function () {
        hiT([ks[ks.length - 1]]);
        $$('tr[data-fig="tubes"]').forEach(function (tr) { tr.classList.toggle("on", ks.indexOf(tr.getAttribute("data-hl")) >= 0); });
      });
      g.addEventListener("mouseleave", function () { hiT(null); $$('tr[data-fig="tubes"]').forEach(function (tr) { tr.classList.remove("on"); }); });
    });
  }

  /* ── cells: UMAP ── */
  var umap = $("svg.umap");
  if (umap) {
    var hiU = highlighter(umap, "[data-cl]", "data-cl");
    $$(".crow[data-cl]").forEach(function (row) {
      var k = [row.getAttribute("data-cl")];
      row.addEventListener("mouseenter", function () { hiU(k); });
      row.addEventListener("mouseleave", function () { hiU(null); });
      row.addEventListener("focus", function () { hiU(k); });
      row.addEventListener("blur", function () { hiU(null); });
    });
  }
})();
