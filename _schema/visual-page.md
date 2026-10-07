<!-- site 시각 페이지 스키마 — 레이아웃·공용 자산·목차 계약
     문체·용어·수치 규칙은 _schema/disease-page.md §4·§5가 SSOT다. 여기 복사하지 않는다. -->

# site 시각 페이지 스키마

`site/`에는 레이아웃이 **두 종류** 있다. 이 문서는 두 번째를 다룬다.

| | data.js 구동 페이지 | **시각 페이지** |
|---|---|---|
| 구조 | `index.html` 껍데기 + `data.js` + `disease-page.js` | 질문 1개 = **정적 HTML 1개** |
| 쓰는 곳 | 질환 8곳 (`autoimmune/ra` 등) | immunology 28문서, aging·autoimmune/general·cancer/brca·cancer/general·neuro/general·virus |
| 스키마 | `_schema/disease-page.md` | **이 문서** |
| 언제 쓰나 | 질문 30~35개를 한 틀로 찍어낼 때 | 그림·상호작용이 본문의 절반 이상일 때 |

시각 페이지는 **SVG 도해와 토글·hover 연동이 본문인** 문서다. `data.js`의 `body[]` 배열로는 표현이 안 되므로 HTML을 직접 쓴다. 대신 검색 색인·용어 hover·섹션 목록은 `data.js`가 계속 담당한다.

---

## 1. 파일 구성

```
site/assets/css/article.css          시각 페이지 공용 스타일   ← 질환 무관
site/assets/js/article-page.js       시각 페이지 공용 동작     ← 질환 무관
site/disease/<대>/<질환>/<질환>.css    질환 공통 토큰·topbar
site/disease/<대>/<질환>/glossary.js  hover 용어
site/disease/<대>/<질환>/<섹션>/<질문>.html   문서 본체
site/disease/<대>/<질환>/<섹션>/<섹션>.css    그 섹션 전용 규칙·훅 목록
site/disease/<대>/<질환>/<섹션>/<섹션>.js     그 섹션 전용 동작
site/disease/<대>/<질환>/<섹션>/data.js       articleRows·paperLinks·glossaryTerms·articlePages
```

**공용은 `assets/`에만 둔다.** 2026-09-18까지 공용 파일이 `immunology/01-basics/basics.css`·`basics.js`에 있었고 02~05가 그것을 링크했다 — 한 섹션 소속처럼 보이는 파일이 사실은 전 문서 공용이라 다른 질환이 재사용하지 못했다. 옛 경로에는 forwarder(`@import` / `document.write`)만 남아 있으니 **거기에 규칙을 쓰지 말 것**. 고칠 곳은 `assets/` 쪽이다.

`fetch`가 아니라 `<script src>`를 쓰는 이유는 data.js 쪽과 같다 — `file://`로 열어도 동작해야 한다.

---

## 2. DOM 계약

```html
<body class="vpage">
  <header class="topbar"> … </header>
  <main id="app" tabindex="-1">
    <div class="container">
      <nav class="breadcrumb"> … </nav>
      <div class="article-layout">
        <article class="article">
          <h1>질문형 제목</h1>
          <h2 id="slug">절 제목 <small>ENGLISH SUBTITLE</small></h2>
          …
        </article>
        <aside class="aside">
          <div class="aside-box"> … </div>
        </aside>
      </div>
    </div>
  </main>
  <footer><div class="container"><span><!--GEN:STAMP-->Updated YYYY-MM-DD<!--/GEN:STAMP--></span></div></footer>
  <script src="../../../assets/js/article-page.js"></script>
  <script src="./data.js"></script>
  <script src="../glossary.js"></script>
</body>
```

지켜야 하는 것은 네 가지뿐이다.

1. `body`에 `vpage` — 모든 공용 규칙의 진입점
2. `.article-layout` > `.article` + `.aside` — 이 셋이 있어야 3단 레이아웃이 성립한다
3. **`h2`마다 `id`** — 목차와 스크롤 스파이가 이것만 본다. 없는 h2는 목차에서 사라진다
4. 스크립트 순서 `article-page.js` → `data.js` → `glossary.js`

`h2`의 `<small>`은 영문 부제 자리다. 목차에서는 자동으로 빠진다.

---

## 3. 문서 목차 (Contents)

`article-page.js`가 `article`의 `h2[id]`를 읽어 **본문 왼쪽**에 만든다. **HTML에 목차 마크업을 쓰지 않는다** — 새 문서에서 할 일은 h2에 `id`를 다는 것뿐이다.

- **h2가 3개 미만이면 만들지 않는다.** `.article-layout`이 없는 문서(섹션 index 등)도 그냥 지나간다.
- 목차가 생기면 `body.vpage`에 `has-toc`가 붙고 `.article-layout`이 `200px · 본문 · 250px` 3단이 된다. 이때만 `.container`·`.topbar-inner` 폭이 1240 → 1560px로 넓어진다(1680px 기준 본문 956 → 1042px).
- 고정 헤더(64px)와 겹치지 않도록 `.vpage .article h2{scroll-margin-top:84px}`. **목차 클릭 후 해당 h2의 `top`이 정확히 84px**인 것이 검사 기준이다.
- **표시는 음영만.** 항목 앞 세로 accent 막대·활성 번호 강조색은 쓰지 않는다(2026-09-18 결정).
- 스크롤 스파이는 rAF throttle, 현재 절에 `.on` + `aria-current="true"`. `prefers-reduced-motion`을 존중한다.

### 반응형

| 폭 | 목차 | `.article-layout` |
|---|---|---|
| 1281px 이상 | 보임 | `200px · 본문 · 250px` |
| 821~1280px | 숨김 | `본문 · 250px` |
| 820px 이하 | 숨김 | `본문` 1단 (aside가 아래로) |

### "여기 헷갈려요" 버튼

`article-page.js`가 오른쪽 아래에 학생 피드백 버튼을 만든다. 문서 HTML에서 할 일은 없다.
- 보낸 내용(페이지·절·선택한 문장·내용·이름(선택))은 Apps Script 웹 앱을 거쳐 Google Sheet에 쌓인다. 받는 쪽 코드는 `tools/feedback.gs`, 주소는 `article-page.js`의 `FEEDBACK_URL`.
- `FEEDBACK_URL`이 비어 있으면 버튼이 생기지 않는다.
- 2026-10-07 면역학 문서에서 시험 운영 시작. 이 시점에 `article-page.js`를 쓰는 문서가 면역학 28개뿐이라 경로 조건은 따로 두지 않았다 — §8의 8문서가 공용 자산으로 옮겨 오면 버튼도 같이 붙는다.

---

## 4. 그림(SVG)

- 생성기는 `wiki/site-meta/<질환>-…-figures/*.py`. HTML의 `<!--GEN:NAME-->…<!--/GEN:NAME-->` 사이에 주입한다. **그 구간을 손으로 고치지 않는다** — 다음 생성에서 지워진다.
- 발판 클래스(JS·CSS 훅)는 **반드시 `g-` 접두사**를 붙이고 섹션 CSS 맨 아래 훅 목록에 선언해 둔다. 접두사를 빼면 공용 짧은 클래스와 충돌한다(03에서 `num`·`axis`·`sp`가 `.num text{fill:#fff}`에 걸려 글자가 흰색으로 렌더된 적이 있다 — jsdom은 못 잡고 브라우저 렌더에서만 보였다).
- 모드 토글은 `data-<xx>mode` 버튼 + `.ov-<모드>` 오버레이, 표 연동은 `tr[data-fig][data-hl]`.
- CSS 전환이 0.25~0.3s라 **토글 검사는 450ms 기다린 뒤** 측정한다.
- 그림 안 글자의 문체는 스키마 §4.3.

---

## 5. 새 시각 페이지를 만드는 절차

1. 출처 조사를 **먼저** 끝낸다(문장마다 출처, 없으면 그 문장을 삭제 — §5)
2. 기존 문서를 복사해 시작한다. 상대경로 깊이(`../../../`)를 먼저 맞춘다
3. `<title>`·`description`·breadcrumb 교체
4. 본문 작성 — **h2마다 `id`**. 문체는 스키마 §4
5. 그림이 필요하면 생성기에 `build_*`를 추가하고 `GEN` 마커로 주입
6. `data.js`에 `articleRows`·`paperLinks`·`glossaryTerms`·`articlePages` 추가
7. 검색 색인 재생성 (`tools/build-search-index.js`)
8. §6 검사
9. `site-meta/<질환>.md`와 `log.md` 갱신

---

## 6. 검사

```bash
# 1) 공용 자산 참조 (28이면 정상 — 옛 basics.* 경로가 남아 있으면 출력됨)
grep -rl 'assets/css/article.css' --include=*.html wiki/site/disease | wc -l
grep -rn 'basics\.css\|basics\.js' --include=*.html wiki/site/disease | grep -v assets/

# 2) id 없는 h2 (0이어야 함)
grep -c '<h2' <문서>; grep -c '<h2 id=' <문서>

# 3) NUL 바이트 (0이어야 함)
tr -dc '\000' < wiki/site/assets/css/article.css | wc -c
```

- **jsdom**: 목차 항목 수 = `h2[id]` 수 · 죽은 앵커 0 · 콘솔 오류 0 · `GEN` 구간과 `STAMP` 정상 · 내부 링크 무결성(`#`뿐 아니라 `?` 쿼리도 벗길 것)
- **Chromium 1440 / 1680 / 1920px**: 목차 sticky · 클릭 후 h2 `top` = 84px · 스파이 인덱스 일치 · 가로 넘침 0 · 모드 토글 동작(450ms 대기)
- **좁은 폭 1280 / 820px**: 목차 `display:none` + 컬럼 원복

### 검사에서 걸리는 오탐

- **smooth scroll은 600ms로 안 끝난다.** 먼 거리는 1.2초까지 걸려 이동 중간값이 찍힌다 — `scrollY`가 멈출 때까지 폴링한 뒤 측정한다.
- **문서 마지막 절은 `top` 84px에 못 온다.** 스크롤이 바닥에 닿기 때문이다. `scrollY == scrollHeight - innerHeight`면 통과로 처리한다.
- **favicon `ERR_FILE_NOT_FOUND`**: 미러에 `site/assets/img/`를 안 담았을 때 늘 뜬다.
- Playwright에서 `route('**://**', abort)`로 외부 요청을 막으면 `file://`까지 막힌다 — `/^https?:/`로 한정한다.
- 그림 자동 검사(viewBox 이탈·상자 폭 초과·글자 겹침)는 **절대 0이 목표가 아니다.** 작은 glyph rect를 오인해 기준선에서도 100건 넘게 나온다. **전후 diff에서 "신규 0건"**을 본다.

---

## 7. 파일을 옮기거나 공용 규칙을 고칠 때

`assets/**`·`_schema/**`·상위 색인은 **여러 세션이 공유한다.** 전체 재작성 금지, 국소 치환 또는 append만. 그리고 기기로 보낼 때:

- **T: 마운트에서 append(`>>` · `open(...,"a")` · heredoc `cat >>`)를 쓰지 않는다** — 덧붙인 길이만큼 NUL 바이트가 옛 EOF 자리에 박힌다(`CLAUDE.md` §6-12). 파일 전체를 읽어서 전체를 다시 쓰거나, 컨테이너에서 이어붙여 `assert b'\x00' not in out` 후 `device_commit_files`로 보낸다. 쓴 뒤 `tr -dc '\000' < 파일 | wc -c`로 0을 확인한다.
- commit 직후 몇 초간 기기에서 이전 내용이 보인다. **md5로 확인**하고 불일치면 `force: true`로 재전송한다.
- 기기 `rm`은 막혀 있다. 파일을 옮길 때는 옛 경로에 forwarder를 남기고, 그 파일 첫 줄에 "여기 쓴 것은 유지되지 않는다"를 적어 둔다.

---

## 8. 남은 일 — 공용 자산을 안 쓰는 시각 페이지 8문서

immunology 밖의 시각 페이지는 **아직 inline `<style>`**로 되어 있어 `assets/css/article.css`·`assets/js/article-page.js`를 쓰지 않는다. 그래서 **문서 목차가 붙지 않는다.** 나중에 잡을 일이다(2026-09-18 기록).

| 문서 | h2 | `id` 있는 h2 |
|---|---|---|
| `aging/index.html` | 4 | 0 |
| `autoimmune/general/index.html` | 4 | 0 |
| `cancer/brca/index.html` | 4 | 0 |
| `cancer/general/index.html` | 4 | 0 |
| `neuro/general/brain-regions.html` | 3 | 0 |
| `neuro/general/development.html` | 3 | 0 |
| `neuro/general/neuroinflammation.html` | 3 | 0 |
| `virus/index.html` | 4 | 0 |

(`neuro/general/index.html`은 h2가 1개라 목차 대상이 아니다.)

옮길 때 확인할 것:

1. **`h2`에 `id`가 하나도 없다.** 경로만 바꾸면 목차는 여전히 안 붙는다 — `id`를 먼저 달아야 한다.
2. **inline `<style>`을 `article.css`와 대조**한다. 같은 클래스명에 다른 값을 쓰고 있으면 공용 규칙으로 갈아타는 순간 렌더가 바뀐다. 문서마다 남겨야 하는 규칙은 섹션 CSS(`<질환>.css`)로 빼고, 공용과 겹치는 것만 지운다.
3. 훅 클래스가 `g-` 없이 짧은 이름을 쓰고 있으면 공용 CSS와 충돌한다(§4).
4. 한 문서씩 옮기고 그때마다 §6 검사를 돌린다. 8개를 한 번에 바꾸면 어느 문서에서 깨졌는지 못 찾는다.
