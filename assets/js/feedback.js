/* "여기 헷갈려요" — 오른쪽 아래 학생 피드백 버튼 (사이트 공용, 의존성 없음)
   보낸 내용은 Google Sheet(Apps Script 웹 앱)에 쌓이고 /ingest-inbox가 읽어 "흔한 오해" 블록을 보강한다.
   받는 쪽 코드는 tools/feedback.gs. 스타일은 같은 assets의 css/feedback.css를 이 파일이 직접 불러온다.

   붙이는 곳 — 페이지 HTML에서 따로 할 일은 아래뿐이다:
   - 시각 페이지(article-page.js) · 질환 페이지(disease-page.js): 그 공용 스크립트가 이 파일을 불러온다.
   - 공용 스크립트가 없는 페이지(gwas·omics·single-cell·multi-omics 등 inline <script> 페이지):
     </body> 직전에 <script src="<상대경로>/assets/js/feedback.js"></script> 한 줄.
   - 목록뿐인 색인 페이지와 대문에는 붙이지 않는다.
   FEEDBACK_URL이 비어 있으면 버튼을 만들지 않는다. */
(function () {
  "use strict";
  var FEEDBACK_URL = "https://script.google.com/macros/s/AKfycbwoXViRD661mk35I6uZB1hORGK9u6VQPtT4u-HJCcAU1bQdfN5aElVRKja9XFFegu5U/exec";
  if (!FEEDBACK_URL || document.querySelector(".fb-btn")) return;
  var BASE = (document.currentScript && document.currentScript.src) || location.href;

  /* 본문 범위 — 시각 페이지·질환 문서는 .article, 그 밖엔 main. 질환·도메인 페이지는 hash로 화면이 바뀌므로 열 때마다 다시 찾는다 */
  function scope() { return document.querySelector(".article") || document.querySelector("main") || document.body; }
  function headings() { return Array.prototype.slice.call(scope().querySelectorAll("h2")); }
  function label(h) {
    var c = h.cloneNode(true), sm = c.querySelector("small");
    if (sm) sm.parentNode.removeChild(sm);
    return (c.textContent || "").replace(/\s+/g, " ").trim();
  }

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "fb-btn";
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-controls", "fbPanel");
  btn.innerHTML = '<span class="fb-q" aria-hidden="true">?</span>여기 헷갈려요';

  var form = document.createElement("form");
  form.className = "fb-panel";
  form.id = "fbPanel";
  form.hidden = true;
  form.innerHTML =
    '<div class="fb-hd"><b>여기 헷갈려요</b><button type="button" class="fb-x" aria-label="닫기">×</button></div>' +
    '<label>어느 부분?<select name="section"></select></label>' +
    '<div class="fb-quote" hidden><span></span><button type="button">빼기</button></div>' +
    '<label>무엇이 헷갈렸나요?<textarea name="message" rows="4" maxlength="2000" required ' +
      'placeholder="예: 그림의 이 화살표가 무엇을 뜻하는지 모르겠어요"></textarea></label>' +
    '<label><span>이름 <small>(선택)</small></span><input name="who" maxlength="40" autocomplete="name"></label>' +
    '<input name="website" class="fb-hp" tabindex="-1" autocomplete="off" aria-hidden="true">' +
    '<p class="fb-note">보낸 내용은 PI만 보고, 이 교재를 고치는 데 씁니다.</p>' +
    '<div class="fb-row"><span class="fb-status" role="status"></span><button type="submit">보내기</button></div>';

  var sel = form.querySelector("select"), msg = form.querySelector("textarea"), who = form.querySelector('[name="who"]');
  var quoteBox = form.querySelector(".fb-quote"), status = form.querySelector(".fb-status"), send = form.querySelector('[type="submit"]');
  try { who.value = localStorage.getItem("fb-name") || ""; } catch (e) {}

  /* 본문에서 문장을 골라 둔 채 버튼을 누르면 그 문장을 같이 보낸다 */
  var quote = "";
  function grabSelection() {
    var s = window.getSelection && window.getSelection();
    var t = s ? String(s).replace(/\s+/g, " ").trim() : "";
    if (t && s.anchorNode && scope().contains(s.anchorNode)) quote = t.slice(0, 500);
  }
  function showQuote() {
    quoteBox.hidden = !quote;
    quoteBox.querySelector("span").textContent = quote ? "“" + quote + "”" : "";
  }
  quoteBox.querySelector("button").addEventListener("click", function () { quote = ""; showQuote(); });

  var hs = [];
  function open() {
    hs = headings();
    sel.innerHTML = '<option value="">문서 전체</option>';
    hs.forEach(function (h, i) {
      var o = document.createElement("option");
      o.value = String(i);
      o.textContent = label(h);
      sel.appendChild(o);
    });
    var cur = -1;                                    /* 목차 스파이와 같은 기준 — 지금 읽던 절 */
    for (var i = 0; i < hs.length; i++) if (hs[i].getBoundingClientRect().top <= 130) cur = i;
    if (hs.length && window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 4) cur = hs.length - 1;
    sel.value = cur >= 0 ? String(cur) : "";
    showQuote();
    status.textContent = "";
    form.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    msg.focus();
  }
  function close() {
    form.hidden = true;
    btn.setAttribute("aria-expanded", "false");
    btn.focus();
  }
  btn.addEventListener("pointerdown", grabSelection);
  btn.addEventListener("click", function () {
    if (!form.hidden) { close(); return; }
    if (!quote) grabSelection();
    open();
  });
  form.querySelector(".fb-x").addEventListener("click", close);
  form.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  window.addEventListener("hashchange", function () { if (!form.hidden) close(); });   /* 다른 문서로 넘어가면 절 목록이 낡는다 */

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = msg.value.trim();
    if (!text) { msg.focus(); return; }
    var name = who.value.trim();
    try { localStorage.setItem("fb-name", name); } catch (err) {}
    var h = sel.value ? hs[+sel.value] : null;
    send.disabled = true;
    status.textContent = "보내는 중…";
    fetch(FEEDBACK_URL, {                            /* text/plain 본문이라 CORS preflight가 없다 */
      method: "POST",
      body: JSON.stringify({
        page: location.pathname + (h && h.id ? "#" + h.id : location.hash),
        title: document.title,
        section: h ? label(h) : "",
        quote: quote,
        message: text,
        name: name,
        website: form.querySelector(".fb-hp").value
      })
    }).then(function (r) { return r.json(); }).then(function (d) {
      if (!d.ok) throw new Error("rejected");
      msg.value = "";
      quote = "";
      status.textContent = "고마워요. 잘 받았어요!";
      setTimeout(function () { if (!form.hidden) close(); }, 1500);
    }).catch(function () {
      status.textContent = "보내지 못했어요. 잠시 뒤 다시 눌러 주세요.";
    }).then(function () { send.disabled = false; });
  });

  /* 스타일이 붙은 뒤에 버튼을 띄운다 — 먼저 띄우면 잠깐 맨 아래에 맨 버튼이 보인다 */
  var css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = new URL("../css/feedback.css", BASE).href;
  css.onload = function () {
    document.body.appendChild(btn);
    document.body.appendChild(form);
  };
  document.head.appendChild(css);
})();
