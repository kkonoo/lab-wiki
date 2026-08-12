/* =========================================================================
   HaLab Wiki — disease page renderer (공통)

   이 파일은 질환에 무관한 렌더 로직만 담는다.
   질환별 내용은 각 페이지의 data.js가 window.DISEASE 로 주입한다.

     window.DISEASE = {
       meta            { id, title, domain, updated }
       acts[]          { id, num, en, title, accent, blurb, sections[] }
       sections{}      { number, title, act, questions[{q, note, article}] }
       articles[]      { id, section, title, aliases[], summary,
                         facts[[라벨, 값, 출처, 연도, 확인필요]],
                         body[[소제목, [불릿]]], related[], papers[[]], links[[]] }
       glossaryTerms{} · glossaryPattern
     }

   ─────────────────────────────────────────────────────────────────────────
   주의 — 이 디렉터리(site/)는 공개 배포된다.
   conf · tier · updated · gap · 모순 플래그 · updates 이력 같은
   유지보수·비공개 레이어는 여기에 넣지 않는다.
   그것들은 wiki/site-meta/<disease>.md 에 둔다.
   ========================================================================= */

(function () {
  const D = window.DISEASE;
  const meta = D.meta, acts = D.acts, sections = D.sections;
  const articleList = D.articles;
  const articles = Object.fromEntries(articleList.map(function (a) { return [a.id, a]; }));
  const glossaryTerms = D.glossaryTerms || {};
  const glossaryPattern = D.glossaryPattern || /(?!)/g;

  /* ── utils ──────────────────────────────────────────────────────────── */
  const app = document.getElementById("app");
  const topSearch = document.getElementById("topSearch");
  let activeFilter = "all";

  function esc(v) {
    return String(v).replace(/[&<>'"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c];
    });
  }
  function route(hash) { window.location.hash = hash; }
  function actOf(sectionId) {
    const key = sections[sectionId] && sections[sectionId].act;
    return acts.filter(function (a) { return a.id === key; })[0] || acts[0];
  }

  function createAnnotator() {
    const seen = new Set();
    return function (text) {
      return esc(text).replace(glossaryPattern, function (match, prefix, term) {
        const item = glossaryTerms[term.toLowerCase()];
        if (!item || seen.has(item.key)) return match;
        seen.add(item.key);
        return prefix + '<span class="glossary-term" tabindex="0" data-definition="' + esc(item.definition) + '">' + esc(term) + '</span>';
      });
    };
  }

  function badge(cls, text, title) {
    return '<span class="badge ' + cls + '"' + (title ? ' title="' + esc(title) + '"' : "") + '>' + esc(text) + "</span>";
  }

  /* ── home ───────────────────────────────────────────────────────────── */
  function renderHome() {
    document.title = meta.title + " · HaLab Wiki";
    const cards = acts.map(function (act) {
      return '<button class="card" style="--accent:' + act.accent + '" data-act="' + act.id + '">' +
        "<small>" + act.num + " · " + esc(act.en) + "</small>" +
        "<h2>" + esc(act.title) + "</h2>" +
        "<p>" + esc(act.blurb) + "</p>" +
        '<span class="route">질문으로 살펴보기 →</span></button>';
    }).join("");

    app.innerHTML = '<section class="hero"><div class="container">' +
      '<p class="eyebrow">' + esc(meta.domain) + " disease knowledge base</p><h1>" + esc(meta.title) + "</h1>" +
      '<p class="hero-copy">무엇인가 · 왜·어떻게 · 임상 · 연구 — 네 갈래의 질문을 따라가는 RA 지도</p>' +
      '<form class="hero-search" id="heroSearchForm" role="search"><input id="heroSearch" type="search" aria-label="' + esc(meta.title) + ' 통합 검색" placeholder="' + esc(meta.searchPlaceholder || "Search: 유병률, 진단, 치료, 유전학") + '"><span class="search-icon">⌕</span></form>' +
      '<p class="search-hint">Korean / English / acronym · 수치표 포함 검색</p></div></section>' +
      '<section class="browse"><div class="container"><div class="grid">' + cards + "</div></div></section>";

    document.getElementById("heroSearchForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const q = document.getElementById("heroSearch").value.trim();
      if (q) route("search/" + encodeURIComponent(q));
    });
    window.scrollTo(0, 0);
  }

  /* ── act page (블록 안의 섹션들) ────────────────────────────────────── */
  function renderAct(actId) {
    const act = acts.filter(function (a) { return a.id === actId; })[0];
    if (!act) return renderHome();
    document.title = act.title + " · " + meta.title;
    const annotate = createAnnotator();

    const blocks = act.sections.map(function (sid) {
      const s = sections[sid];
      /* 섹션 소제목(lead)은 아래 질문과 중복되므로 렌더하지 않는다 (데이터로만 보관) */
      const head = '<div class="question-head"><small>SECTION ' + s.number + "</small>" +
        "<h2>" + esc(s.title) + "</h2></div>";
      const rows = s.questions.map(function (item) {
        const a = articles[item.article];
        return '<div class="concept-row"><strong>' + annotate(item.q) + "</strong>" +
          "<p>" + annotate(item.note || (a ? a.summary : "")) + "</p>" +
          (a ? '<button class="go" data-article="' + item.article + '">읽기 →</button>'
             : '<span class="map-label">준비 중</span>') + "</div>";
      }).join("");
      return '<section class="question-block">' + head + "<div>" + rows + "</div></section>";
    }).join("");

    app.innerHTML = '<div class="container"><nav class="breadcrumb" aria-label="현재 위치">' +
      '<button data-route="home">홈</button><span>›</span>' + esc(act.title) + "</nav>" +
      '<header class="page-header" style="border-top:4px solid ' + act.accent + '">' +
      '<p class="eyebrow">' + act.num + " · " + esc(act.en) + "</p>" +
      "<h1>" + esc(act.title) + '</h1><p class="lead">' + esc(act.blurb) + "</p></header>" +
      '<div class="question-list">' + blocks + "</div>" +
      '<div style="height:60px"></div></div>';
    window.scrollTo(0, 0);
  }

  /* 섹션 딥링크(#section/dx)는 해당 블록으로 보낸다 */
  function renderSection(sid) {
    if (!sections[sid]) return renderHome();
    return renderAct(sections[sid].act);
  }

  /* ── article ────────────────────────────────────────────────────────── */
  function renderFacts(facts) {
    if (!facts || !facts.length) return "";
    const rows = facts.map(function (f) {
      const src = [f[2], f[3]].filter(function (x) { return x && x !== "—"; }).join(" · ");
      return "<tr><td>" + esc(f[0]) + '</td><td class="val">' + esc(f[1]) +
        (f[4] ? " " + badge("b-check", "확인 필요") : "") + '</td><td class="src">' + esc(src || "—") + "</td></tr>";
    }).join("");
    return '<div class="facts-wrap"><table class="facts"><thead><tr><th>항목</th><th>값</th><th>출처 · 연도</th></tr></thead><tbody>' +
      rows + "</tbody></table></div>";
  }

  function renderArticle(id) {
    const a = articles[id];
    if (!a) return renderHome();
    const s = sections[a.section];
    const act = actOf(a.section);
    const annotate = createAnnotator();
    document.title = a.title + " · " + meta.title;

    const body = (a.body || []).map(function (part) {
      return "<section><h2>" + esc(part[0]) + '</h2><ul class="fact-list">' +
        part[1].map(function (p) { return "<li>" + annotate(p) + "</li>"; }).join("") + "</ul></section>";
    }).join("");

    const related = (a.related || []).filter(function (r) { return articles[r]; }).map(function (r) {
      return '<button data-article="' + r + '">' + esc(articles[r].title) + " →</button>";
    }).join("");
    const papers = (a.papers || []).map(function (p) {
      return p[1] ? '<a href="' + esc(p[1]) + '" target="_blank" rel="noopener noreferrer">' + esc(p[0]) + " ↗</a>"
                  : "<a>" + esc(p[0]) + "</a>";
    }).join("");
    const links = (a.links || []).map(function (l) {
      return '<a href="' + esc(l[1]) + '" target="_blank" rel="noopener noreferrer">' + esc(l[0]) + " ↗</a>";
    }).join("");
    const wiki = (a.wiki || []).map(function (w) { return "<code>" + esc(w) + "</code>"; }).join("");

    app.innerHTML = '<div class="container"><nav class="breadcrumb"><button data-route="home">홈</button><span>›</span>' +
      '<button data-act="' + act.id + '">' + esc(act.title) + "</button><span>›</span>" + esc(s.title) + "</nav>" +
      '<div class="article-layout"><article class="article">' +
      '<p class="eyebrow">' + s.number + " · " + esc(s.title) + "</p>" +
      "<h1>" + esc(a.title) + "</h1>" +
      '<p class="tooltip-hint">점선 용어: hover / focus → 한 줄 설명</p>' +
      '<p class="definition">' + annotate(a.summary) + "</p>" +
      renderFacts(a.facts) + body +
      "</article>" +
      '<aside class="aside">' +
      (related ? '<div class="aside-box"><h3>Related</h3><div class="related-list">' + related + "</div></div>" : "") +
      (links ? '<div class="aside-box source-box"><h3>Resources</h3><div class="source-list">' + links + "</div></div>" : "") +
      (papers ? '<div class="aside-box paper-box"><h3>Key papers</h3><div class="paper-list">' + papers + "</div></div>" : "") +
      (wiki ? '<div class="aside-box wiki-box"><h3>Wiki 출처 (SSOT)</h3>' + wiki + "</div>" : "") +
      "</aside></div></div>";
    window.scrollTo(0, 0);
  }

  /* ── search ─────────────────────────────────────────────────────────── */
  function articleText(a) {
    const bodyText = (a.body || []).map(function (b) { return [b[0]].concat(b[1]).join(" "); });
    const factText = (a.facts || []).map(function (f) { return f.slice(0, 4).join(" "); });
    return [a.title, (a.aliases || []).join(" "), a.summary]
      .concat(bodyText, factText).join(" ").toLowerCase();
  }
  function highlight(text, q) {
    if (!q) return esc(text);
    const safe = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return esc(text).replace(new RegExp("(" + safe + ")", "ig"), "<mark>$1</mark>");
  }
  function searchArticles(query, filter) {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return articleList.map(function (a) {
      if (filter !== "all" && sections[a.section].act !== filter) return null;
      const hay = articleText(a);
      if (hay.indexOf(q) < 0) return null;
      const t = a.title.toLowerCase().includes(q) ? 3 : 0;
      const al = (a.aliases || []).join(" ").toLowerCase().includes(q) ? 2 : 0;
      return { a: a, score: t + al + 1 };
    }).filter(Boolean).sort(function (x, y) { return y.score - x.score || x.a.title.localeCompare(y.a.title); });
  }
  function renderSearch(query) {
    document.title = '"' + query + '" 검색 · ' + meta.title;
    const filterButtons = ['<button class="filter-btn ' + (activeFilter === "all" ? "active" : "") + '" data-filter="all">전체</button>']
      .concat(acts.map(function (act) {
        return '<button class="filter-btn ' + (activeFilter === act.id ? "active" : "") + '" data-filter="' + act.id + '">' +
          act.id + ". " + esc(act.title) + "</button>";
      })).join("");
    const found = searchArticles(query, activeFilter);
    const cards = found.length ? found.map(function (r) {
      const s = sections[r.a.section];
      return '<button class="result-card" data-article="' + r.a.id + '">' +
        '<span class="result-path">' + s.number + " " + esc(s.title) + "</span>" +
        "<h2>" + highlight(r.a.title, query) + "</h2><p>" + highlight(r.a.summary, query) + "</p></button>";
    }).join("") : '<div class="empty"><strong>No results</strong><br>Try: 유병률 / HLA / fibroblast / difficult-to-treat</div>';
    app.innerHTML = '<div class="container search-page"><nav class="breadcrumb"><button data-route="home">홈</button><span>›</span>검색</nav>' +
      '<header class="page-header"><p class="eyebrow">Search</p><h1>“' + esc(query) + "”</h1></header>" +
      '<div class="search-summary"><p>문서 <strong>' + found.length + '</strong>건</p><div class="filters">' + filterButtons + "</div></div>" +
      '<div class="results">' + cards + "</div></div>";
    topSearch.value = query;
    window.scrollTo(0, 0);
  }

  /* ── routing ────────────────────────────────────────────────────────── */
  function handleRoute() {
    const raw = window.location.hash.replace(/^#/, "");
    const parts = raw.split("/");
    if (!raw || raw === "home") return renderHome();
    if (parts[0] === "act") return renderAct(parts[1]);
    if (parts[0] === "section") return renderSection(parts[1]);
    if (parts[0] === "article") return renderArticle(parts[1]);
    if (parts[0] === "search") return renderSearch(decodeURIComponent(parts.slice(1).join("/")));
    renderHome();
  }

  document.addEventListener("click", function (e) {
    const home = e.target.closest("[data-route='home']");
    const actEl = e.target.closest("[data-act]");
    const section = e.target.closest("[data-section]");
    const article = e.target.closest("[data-article]");
    const filter = e.target.closest("[data-filter]");
    if (home) route("home");
    else if (article) route("article/" + article.dataset.article);
    else if (actEl) route("act/" + actEl.dataset.act);
    else if (section) route("section/" + section.dataset.section);
    else if (filter) {
      activeFilter = filter.dataset.filter;
      renderSearch(decodeURIComponent(window.location.hash.split("/").slice(1).join("/")));
    }
  });

  document.getElementById("topSearchForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const q = topSearch.value.trim();
    if (q) { activeFilter = "all"; route("search/" + encodeURIComponent(q)); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); topSearch.focus(); }
  });

  document.getElementById("pageUpdated").textContent = meta.updated;
  window.addEventListener("hashchange", handleRoute);
  handleRoute();
})();
