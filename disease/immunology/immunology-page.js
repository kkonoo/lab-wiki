const config = window.IMMUNOLOGY;
    const PAGE_BASE = (document.currentScript && document.currentScript.src) || window.location.href; // immunology/ 기준 경로
    const sections = config.sections;
    const articleRows = config.articleRows || [];

    const articles = Object.fromEntries(articleRows.map(function (row) {
      return [row[0], {title:row[1],aliases:row[2],section:row[3],summary:row[4],body:row[5],related:row[6]}];
    }));

    const sourceLinks = config.sourceLinks || {};
    const officialSupplementLinks = {};

    const glossaryTerms = config.glossaryTerms || {};
    const glossaryPattern = /(^|[^A-Za-z0-9])(scRNA-seq|PRR|cytokine|HSPC|HEV|TNFSF)(?![A-Za-z0-9])/gi;

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

    const app = document.getElementById("app");
    const topSearch = document.getElementById("topSearch");
    let activeFilter = "all";

    function esc(value) {
      return String(value).replace(/[&<>'"]/g, function (c) {
        return {"&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;"}[c];
      });
    }

    function route(hash) {
      window.location.hash = hash;
    }

    function categoryCards() {
      return Object.keys(sections).map(function (key) {
        const s = sections[key];
        return '<button class="category-card" style="--accent:' + s.accent + '" data-section="' + key + '">' +
          '<span class="category-number">' + s.number + ' · ' + s.english + '</span>' +
          '<h3>' + s.title + '</h3><p>' + s.summary + '</p><p class="kuby-map">' + s.kuby + '</p>' +
          '<span class="card-route">질문으로 살펴보기 →</span></button>';
      }).join("");
    }

    function renderHome() {
      if (config.homeSection) return renderSection(config.homeSection);
      document.title = "Immunology · HaLab Wiki";
      app.innerHTML = '<section class="hero"><div class="container">' +
        '<p class="eyebrow">Immunology knowledge base</p><h1>Immunology</h1>' +
        '<p class="hero-copy">기초와 구성 · 선천면역 · 적응면역(인식·발달 / 실행·장소) · 질환과 면역 개입 · 면역 연구와 오믹스 — Kuby 면역학 8판 흐름</p>' +
        '<form class="hero-search" id="heroSearchForm" role="search"><input id="heroSearch" type="search" aria-label="Immunology 통합 검색" placeholder="Search: MHC, complement, T cell, inflammasome, HLA"><span class="search-icon">⌕</span></form>' +
        '<p class="search-hint">Korean / English / acronym</p></div></section>' +
        '<section class="browse"><div class="container"><div class="section-heading"><h2>어디서부터 볼까요?</h2><p>기초 → 선천면역 → 적응면역 → 질환 → 연구방법, Kuby 8판 순서를 따라가 보세요.</p></div>' +
        '<div class="category-grid">' + categoryCards() + '</div></div></section>';
      document.getElementById("heroSearchForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const q = document.getElementById("heroSearch").value.trim();
        if (q) route("search/" + encodeURIComponent(q));
      });
      window.scrollTo(0, 0);
    }

    function renderSection(key) {
      if (config.sectionRoutes && config.sectionRoutes[key]) { window.location.href = config.sectionRoutes[key]; return; }
      const s = sections[key];
      if (!s) return renderHome();
      document.title = s.title + " · Immunology";
      const annotateOnce = createAnnotator();
      const groups = s.groups.map(function (group, i) {
        const items = group.items.map(function (item) {
          const hasPage = Boolean(item[0] && articles[item[0]]);
          return '<div class="concept-row"><strong>' + annotateOnce(item[1]) + '</strong><p>' + annotateOnce(item[2]) + '</p>' +
            (hasPage ? '<button data-article="' + item[0] + '">읽기 →</button>'
              : item[4] ? '<a class="map-link" href="' + esc(item[4]) + '">페이지 →</a>'
              : '<span class="map-label' + (item[3] === "wiki 문서 있음" ? ' has-wiki' : '') + '">' + esc(item[3] || "준비 중") + '</span>') + '</div>';
        }).join("");
        return '<section class="question-block"><div class="question-head"><small>QUESTION ' + String(i + 1).padStart(2, "0") + '</small>' +
          '<h2>' + annotateOnce(group.q) + '</h2><p>' + annotateOnce(group.note) + '</p></div><div>' + items + '</div></section>';
      }).join("");
      app.innerHTML = '<div class="container"><nav class="breadcrumb" aria-label="현재 위치"><button data-route="home">목록</button><span>›</span>' + s.title + '</nav>' +
        '<header class="page-header" style="border-top:4px solid ' + s.accent + '"><p class="eyebrow">' + s.number + ' · ' + s.english + '</p><h1>' + s.title + '</h1><p class="lead">' + s.summary + ' · ' + s.kuby + '</p></header>' +
        '<div class="question-list">' + groups + '</div></div>';
      window.scrollTo(0, 0);
    }

    function articleText(a) {
      const bodyText = a.body.map(function (b) { return [b[0]].concat(Array.isArray(b[1]) ? b[1] : [b[1]]).join(" "); });
      const id = Object.keys(articles).find(id => articles[id] === a);
      const extra = (config.articleExtras || {})[id];
      return [a.title, a.aliases.join(" "), a.summary, extra ? JSON.stringify(extra) : ""].concat(bodyText).join(" ").toLowerCase();
    }

    function highlight(text, query) {
      if (!query) return esc(text);
      const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      return esc(text).replace(new RegExp("(" + safe + ")", "ig"), "<mark>$1</mark>");
    }

    function searchArticles(query, filter) {
      const q = query.trim().toLowerCase();
      if (!q) return [];
      return Object.keys(articles).map(function (id) {
        const a = articles[id];
        if (filter !== "all" && a.section !== filter) return null;
        const hay = articleText(a);
        const pos = hay.indexOf(q);
        if (pos < 0) return null;
        const titleHit = a.title.toLowerCase().includes(q) ? 3 : 0;
        const aliasHit = a.aliases.join(" ").toLowerCase().includes(q) ? 2 : 0;
        return { id: id, article: a, score: titleHit + aliasHit + 1 };
      }).filter(Boolean).sort(function (a, b) { return b.score - a.score || a.article.title.localeCompare(b.article.title); });
    }

    function renderSearch(query) {
      document.title = '"' + query + '" 검색 · Immunology';
      const filterButtons = ['<button class="filter-btn ' + (activeFilter === "all" ? "active" : "") + '" data-filter="all">전체</button>'].concat(
        Object.keys(sections).map(function (key) { return '<button class="filter-btn ' + (activeFilter === key ? "active" : "") + '" data-filter="' + key + '">' + sections[key].title + '</button>'; })
      ).join("");
      const found = searchArticles(query, activeFilter);
      const qLow = query.trim().toLowerCase();
      const topicHits = [];
      Object.keys(sections).forEach(function (key) {
        if (activeFilter !== "all" && activeFilter !== key) return;
        sections[key].groups.forEach(function (g) {
          g.items.forEach(function (item) {
            const hay = [g.q, g.note, item[1], item[2]].join(" ").toLowerCase();
            if (!(item[0] && articles[item[0]]) && qLow && hay.indexOf(qLow) >= 0) topicHits.push({ key: key, group: g, item: item });
          });
        });
      });
      const cards = found.length ? found.map(function (r) {
        const s = sections[r.article.section];
        return '<button class="result-card" data-article="' + r.id + '"><span class="result-path">' + s.title + ' › 문서</span>' +
          '<h2>' + highlight(r.article.title, query) + '</h2><p>' + highlight(r.article.summary, query) + '</p></button>';
      }).join("") : "";
      const topicCards = topicHits.map(function (h) {
        return '<button class="result-card" data-section="' + h.key + '"><span class="result-path">' + esc(sections[h.key].title) + ' › ' + esc(h.item[3] || "준비 중") + '</span>' +
          '<h2>' + highlight(h.item[1], query) + '</h2><p>' + highlight(h.group.q + ' — ' + h.item[2], query) + '</p></button>';
      }).join("");
      const allCards = (cards + topicCards) || '<div class="empty"><strong>No results</strong><br>Try: English / Korean / acronym</div>';
      app.innerHTML = '<div class="container search-page"><nav class="breadcrumb"><button data-route="home">목록</button><span>›</span>검색</nav>' +
        '<header class="page-header"><p class="eyebrow">Search</p><h1>“' + esc(query) + '”</h1></header>' +
        '<div class="search-summary"><p>Public pages · <strong>' + (found.length + topicHits.length) + '</strong></p><div class="filters">' + filterButtons + '</div></div>' +
        '<div class="results">' + allCards + '</div></div>';
      topSearch.value = query;
      window.scrollTo(0, 0);
    }

    const paperLinks = config.paperLinks || {};

    function getSources(id) {
      return (sourceLinks[id] || []).concat(officialSupplementLinks[id] || []);
    }
    function getPapers(id) {
      return paperLinks[id] || [];
    }



function visualFigure(f, className) {
 return '<figure class="'+className+'"><div class="diagram-scroll"><img src="'+esc(f.src)+'" alt="'+esc(f.alt)+'"></div><figcaption>'+esc(f.caption)+'<span class="visual-sources">'+f.sources.map(s=>'<a href="'+esc(s[1])+'" target="_blank" rel="noopener noreferrer">'+esc(s[0])+' ↗</a>').join(' · ')+'</span><a class="svg-open" href="'+esc(f.src)+'" target="_blank" rel="noopener noreferrer">SVG 크게 보기 ↗</a></figcaption></figure>';
}
function simpleTermTable(t) {
 return '<section class="term-section"><h2>'+esc(t.title)+'</h2><div class="term-table-wrap"><table><thead><tr>'+t.headers.map(h=>'<th scope="col">'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+t.rows.map(r=>'<tr>'+r.map((v,i)=>'<'+(i?'td':'th scope="row"')+'>'+esc(v)+'</'+(i?'td':'th')+'>').join('')+'</tr>').join('')+'</tbody></table></div></section>';
}
function renderVisuals(id) {
 const x=(config.articleExtras||{})[id]; if(!x)return "";
 const tabs=x.figures.map((f,i)=>'<button type="button" role="tab" tabindex="'+(i===0?'0':'-1')+'" id="visual-tab-'+i+'" aria-selected="'+(i===0)+'" aria-controls="visual-panel-'+i+'" data-visual-tab="'+i+'"><strong>'+esc(f.title)+'</strong>'+(f.subtitle?'<small>'+esc(f.subtitle)+'</small>':'')+'</button>').join("");
 const panels=x.figures.map((f,i)=>'<section class="visual-panel" id="visual-panel-'+i+'" role="tabpanel" tabindex="0" aria-labelledby="visual-tab-'+i+'"'+(i?' hidden':'')+'>'+visualFigure(f,'panel-figure')+(f.related?'<p class="axis-related"><button data-article="'+esc(f.related[0])+'">'+esc(f.related[1])+' →</button></p>':'')+(i===0&&x.tableInFirstPanel?simpleTermTable(x.table):'')+'</section>').join("");
 return (x.leadFigure?'<section class="lead-map" aria-label="선천 적응면역 전체 지도">'+visualFigure(x.leadFigure,'visual-panel')+'</section>':'')+'<section class="visual-explorer" aria-label="그림으로 살펴보기"><div class="visual-tabs" role="tablist" aria-label="그림 선택">'+tabs+'</div>'+panels+'<p class="visual-callout">'+esc(x.callout)+'</p></section>';
}
function renderTermTable(id) {
 const x=(config.articleExtras||{})[id]; if(!x||x.tableInFirstPanel)return "";
 const table=simpleTermTable(x.table);if(!x.counts)return table;
 return '<details class="counts-details"><summary>PBMC3k 관측 수·비율 표 (n = '+x.counts.n.toLocaleString()+')</summary><div class="term-table-wrap"><table><thead><tr><th>원본 주석</th><th>Barcode 수</th><th>비율</th></tr></thead><tbody>'+x.counts.counts.map(r=>'<tr><th scope="row">'+esc(r.label)+'</th><td>'+r.n.toLocaleString()+'</td><td>'+r.percent.toFixed(2)+'%</td></tr>').join('')+'</tbody></table></div></details>'+table;
}

    function renderArticle(id) {
      if (config.articlePages && config.articlePages[id]) { window.location.replace(new URL(config.articlePages[id], PAGE_BASE).href); return; }
      if (config.articleRoute && articles[id]) { window.location.href = config.articleRoute + "#article/" + id; return; }
      const a = articles[id];
      if (!a) return renderHome();
      const s = sections[a.section];
      const annotateOnce = createAnnotator();
      document.title = a.title + " · Immunology";
      const body = a.body.map(function (part) {
        const points = Array.isArray(part[1]) ? part[1] : part[1].replace(/\.\s+/g, ".||| ").split("|||").filter(Boolean);
        return '<section><h2>' + part[0] + '</h2><ul class="fact-list">' + points.map(function (point) { return "<li>" + annotateOnce(point.trim()) + "</li>"; }).join("") + "</ul></section>";
      }).join("");
      const related = a.related.filter(function (rid) { return articles[rid]; }).map(function (rid) {
        return '<button data-article="' + rid + '">' + articles[rid].title + ' →</button>';
      }).join("");
      const sources = getSources(id).map(function (source) {
        return '<a href="' + esc(source[1]) + '" target="_blank" rel="noopener noreferrer">' + esc(source[0]) + ' ↗</a>';
      }).join("");
      const papers = getPapers(id).map(function (paper) {
        return '<a href="' + esc(paper[1]) + '" target="_blank" rel="noopener noreferrer">' + esc(paper[0]) + ' ↗</a>';
      }).join("");
      app.innerHTML = '<div class="container"><nav class="breadcrumb"><button data-route="home">목록</button><span>›</span><button data-section="' + a.section + '">' + s.title + '</button><span>›</span>' + a.title + '</nav>' +
        '<div class="article-layout' + ((config.articleExtras || {})[id] ? ' has-visuals' : '') + '"><article class="article"><p class="eyebrow">' + s.title + '</p><h1>' + a.title + '</h1>' +
        '<p class="aliases">Aliases: ' + a.aliases.join(" · ") + '</p><p class="tooltip-hint">점선 용어: hover / focus → 한 줄 설명</p><p class="definition">' + annotateOnce(a.summary) + '</p>' + renderVisuals(id) + renderTermTable(id) + body + '</article>' +
        '<aside class="aside"><div class="aside-box"><h3>Related</h3><div class="related-list">' + related + '</div></div>' +
        (sources ? '<div class="aside-box source-box"><h3>Resources / External links</h3><div class="source-list">' + sources + '</div></div>' : '') +
        (papers ? '<div class="aside-box paper-box"><h3>Key papers</h3><div class="paper-list">' + papers + '</div></div>' : '') +
        '</aside></div></div>';
      window.scrollTo(0, 0);
    }

    function handleRoute() {
      const raw = window.location.hash.replace(/^#/, "");
      const parts = raw.split("/");
      if (!raw || raw === "home") return renderHome();
      if (parts[0] === "section") return renderSection(parts[1]);
      if (parts[0] === "article") return renderArticle(parts[1]);
      if (parts[0] === "search") return renderSearch(decodeURIComponent(parts.slice(1).join("/")));
      renderHome();
    }

    document.addEventListener("click", function (e) {
      const visual = e.target.closest("[data-visual-tab]");
      if (visual) {
        const explorer = visual.closest(".visual-explorer");
        explorer.querySelectorAll("[data-visual-tab]").forEach(b => { b.setAttribute("aria-selected", b === visual ? "true" : "false"); b.tabIndex = b === visual ? 0 : -1; });
        explorer.querySelectorAll(".visual-panel").forEach((p,i) => p.hidden = i !== Number(visual.dataset.visualTab));
        return;
      }
      const home = e.target.closest("[data-route='home']");
      const section = e.target.closest("[data-section]");
      const article = e.target.closest("[data-article]");
      const filter = e.target.closest("[data-filter]");
      if (home) route("home");
      else if (article) route("article/" + article.dataset.article);
      else if (section) route("section/" + section.dataset.section);
      else if (filter) { activeFilter = filter.dataset.filter; const q = decodeURIComponent(window.location.hash.split("/").slice(1).join("/")); renderSearch(q); }
    });

    document.getElementById("topSearchForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const q = topSearch.value.trim();
      if (q) window.location.href = new URL("../../index.html?q=" + encodeURIComponent(q), PAGE_BASE).href; // 상단 검색 → 대문 전체 검색
    });

    document.addEventListener("keydown", function (e) {
      const tab = e.target.closest && e.target.closest("[data-visual-tab]");
      if (tab && ["ArrowLeft","ArrowRight","Home","End"].includes(e.key)) {
        e.preventDefault(); const tabs=Array.from(tab.closest("[role=tablist]").querySelectorAll("[role=tab]")); const current=tabs.indexOf(tab); const next=e.key==="Home"?0:e.key==="End"?tabs.length-1:(current+(e.key==="ArrowRight"?1:-1)+tabs.length)%tabs.length; tabs[next].click(); tabs[next].focus(); return;
      }
      if (e.key === "/" && document.activeElement.tagName !== "INPUT") {
        e.preventDefault(); topSearch.focus();
      }
    });
    window.addEventListener("hashchange", handleRoute);
    handleRoute();
