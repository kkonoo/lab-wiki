<!-- site 시각 페이지 스키마 — 레이아웃·공용 자산·목차 계약
     문체·용어·수치 규칙은 _schema/disease-page.md §4·§5가 SSOT다. 여기 복사하지 않는다. -->

# site 시각 페이지 스키마

`site/`에는 레이아웃이 **두 종류** 있다. 이 문서는 두 번째를 다룬다.

| | data.js 구동 페이지 | **시각 페이지** |
|---|---|---|
| 구조 | `index.html` 껍데기 + `data.js` + `disease-page.js` | 질문 1개 = **정적 HTML 1개** |
| 쓰는 곳 | 질환 8곳 (`autoimmune/ra` 등) | immunology 28문서, aging·autoimmune/general·cancer/brca·cancer/general·neuro/general·virus · 방법론 SPA 도메인(gwas — §9) |
| 스키마 | `_schema/disease-page.md` | **이 문서** |
| 언제 쓰나 | 질문 30~35개를 한 틀로 찍어낼 때 | 그림·상호작용이 본문의 절반 이상일 때 |

시각 페이지는 **SVG 도해와 토글·hover 연동이 본문인** 문서다. `data.js`의 `body[]` 배열로는 표현이 안 되므로 HTML을 직접 쓴다. 대신 검색 색인·용어 hover·섹션 목록은 `data.js`가 계속 담당한다(용어 카드 SPA에 붙는 시각 페이지는 예외 — §9).

---

## 1. 파일 구성

```
site/assets/css/base.css · spa.css    공용 토큰·틀 · 용어 카드 틀  ← 먼저 로드 (색·글꼴·로드 순서는 _schema/design.md)
site/assets/css/article.css          시각 페이지 공용 스타일   ← 질환 무관
site/assets/js/article-page.js       시각 페이지 공용 동작     ← 질환 무관
site/disease/<대>/<질환>/<질환>.css    질환 전용 규칙 + 옛 색 이름 별칭(body)
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
4. 스크립트 순서 `article-page.js` → `data.js` → `glossary.js` (SPA 도메인은 `data.js` 없이 `article-page.js` → `../glossary.js` — §9.3)

`h2`의 `<small>`은 영문 부제 자리다. 목차에서는 자동으로 빠진다.

---

## 3. 문서 목차 (Contents)

`article-page.js`가 `article`의 `h2[id]`를 읽어 **본문 왼쪽**에 만든다. **HTML에 목차 마크업을 쓰지 않는다** — 새 문서에서 할 일은 h2에 `id`를 다는 것뿐이다.

- **h2가 3개 미만이면 만들지 않는다.** `.article-layout`이 없는 문서(섹션 index 등)도 그냥 지나간다.
- 목차가 생기면 `body.vpage`에 `has-toc`가 붙고 `.article-layout`이 `200px · 본문 · 250px` 3단이 된다. 이때만 `.container`·`.topbar-inner` 본문 폭이 1240 → 1560px로 넓어진다(`max-width`에 좌우 여백 48px를 더해 둔다).
- 고정 헤더(72px, `--header-h`)와 겹치지 않도록 `.vpage .article h2{scroll-margin-top:calc(var(--header-h) + 20px)}`. **목차 클릭 후 해당 h2의 `top`이 92px**(±1, 소수점)인 것이 검사 기준이다(2026-10-18 상단 바 64 → 72px, 84 → 92px).
- **표시는 음영만.** 항목 앞 세로 accent 막대·활성 번호 강조색은 쓰지 않는다(2026-09-18 결정).
- 스크롤 스파이는 rAF throttle, 현재 절에 `.on` + `aria-current="true"`. `prefers-reduced-motion`을 존중한다.

### 반응형

| 폭 | 목차 | `.article-layout` |
|---|---|---|
| 1281px 이상 | 보임 | `200px · 본문 · 250px` |
| 821~1280px | 숨김 | `본문 · 250px` |
| 820px 이하 | 숨김 | `본문` 1단 (aside가 아래로) |

### "여기 헷갈려요" 버튼

`article-page.js`가 사이트 공용 `assets/js/feedback.js`를 불러와 오른쪽 아래에 학생 피드백 버튼을 만든다. 문서 HTML에서 할 일은 없다.
붙이는 규칙·주소(`FEEDBACK_URL`)·받는 쪽 코드는 `assets/js/feedback.js` 첫 주석이 SSOT다.

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
6. `data.js`에 `articleRows`·`paperLinks`·`glossaryTerms`·`articlePages` 추가 (SPA 도메인은 SPA의 `articlePages`에 등록 — §9.4)
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
- **Chromium 1440 / 1680 / 1920px**: 목차 sticky · 클릭 후 h2 `top` = 92px · 스파이 인덱스 일치 · 가로 넘침 0 · 모드 토글 동작(450ms 대기)
- **좁은 폭 1280 / 820px**: 목차 `display:none` + 컬럼 원복

### 검사에서 걸리는 오탐

- **smooth scroll은 600ms로 안 끝난다.** 먼 거리는 1.2초까지 걸려 이동 중간값이 찍힌다 — `scrollY`가 멈출 때까지 폴링한 뒤 측정한다.
- **문서 마지막 절은 `top` 92px에 못 온다.** 스크롤이 바닥에 닿기 때문이다. `scrollY == scrollHeight - innerHeight`면 통과로 처리한다.
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

---

## 9. 용어 카드 SPA에 붙이는 시각 페이지 (gwas → omics · single-cell)

gwas처럼 **용어 카드 SPA**(`<도메인>/index.html` 안 inline `sections`·`articles`)가 있는 도메인에, 그림을 봐야 이해되는 방법론만 골라 시각 페이지를 붙인다. 첫 적용 도메인은 gwas(2026-10-18 결정).

### 9.1 언제 만드나

- 그림·상호작용 없이는 핵심 구분이 안 되는 방법만 — 예: coloc(H3 vs H4) · fine-mapping(credible set·PIP) · regional plot·LD · MR(IV 가정).
- 나머지는 카드로 충분하다. 도메인 전체를 교과서로 옮기지 않는다 — 그림 생성기는 논문이 바뀔 때마다 같이 고쳐야 하는 유지 비용이다.

### 9.2 경로

```
site/gwas/
├─ index.html              SPA(용어 카드). articlePages로 시각 페이지를 가리킨다
├─ glossary.js             용어 사전 SSOT — SPA와 시각 페이지가 같이 로드
├─ gwas.css                (첫 시각 페이지 때 신설) 공통 토큰·topbar·.glossary-term
└─ <NN-섹션>/<id>.html       예: 03-postgwas/coloc.html
   └─ <섹션>.css · <섹션>.js   섹션 전용 그림 훅(§4, g- 접두사)
```

- 폴더 = SPA `sections`의 number + key(`postgwas` → `03-postgwas`). key가 도메인명과 겹치면 english 라벨 — gwas의 02는 `02-association`.
- 파일명 = SPA article id(`coloc` → `coloc.html`).
- 공용 자산 상대 깊이는 `../../assets/`(질환 시각 페이지는 `../../../`). 복사해 시작할 때 가장 먼저 고친다.
- 그림 생성기는 `wiki/site-meta/<도메인>-figures/*.py` → `GEN` 마커(§4). 데이터는 **seed 고정 시뮬레이션** — 논문 그림을 옮겨 그리지 않는다.
- 도메인 유지보수 레이어는 `wiki/site-meta/<도메인>.md`(gwas → `site-meta/gwas.md`).

### 9.3 §1·§2 계약과 다른 점

- **섹션 `data.js` 없음.** 섹션 목록은 SPA가 그리므로 `articleRows`가 필요 없고, `article-page.js`는 window 데이터를 읽지 않는다. Key papers는 aside에 정적으로 쓴다.
- 스크립트 순서 = `../../assets/js/article-page.js` → `../glossary.js`.
- 검색 색인은 정적 HTML 경로(h1·`meta description`·`h2[id]`)로 잡힌다 → `tools/build-search-index.js` 재실행만.

### 9.4 용어 카드 ↔ 시각 페이지

immunology는 `articlePages`에 등록된 id를 열면 시각 페이지로 **이동**한다(카드 대체, `immunology-page.js`). SPA 도메인은 카드를 **남긴다** — 카드 = 논문 읽다 찾는 1분 요약, 시각 페이지 = 학습용.

| 위치 | 동작 |
|---|---|
| SPA `articlePages` | `index.html` inline `const articlePages = { coloc: "03-postgwas/coloc.html" }` — **파일이 생긴 뒤에** 등록(빈 링크 금지) |
| SPA 섹션 목록 | 등록된 항목에 `그림` 배지(`.deep-badge`, 도메인 주조색) |
| SPA 카드 | 정의 바로 아래 "그림으로 깊게 보기 →"(`.deep-link`) |
| 시각 페이지 breadcrumb | `HaLab Wiki › GWAS › Post-GWAS › <제목>` — 섹션은 `../index.html#section/<key>` |
| 시각 페이지 aside | 첫 상자 "1분 요약" → `../index.html#article/<id>` · Related는 시각 페이지가 있으면 그쪽, 없으면 카드 |
| hover 용어 | `<도메인>/glossary.js` 하나. 용어 추가는 `terms`에만(정규식은 키에서 길이순 자동 생성). `body.vpage`면 본문에 직접 붙이고 `html[data-glossary]`에 개수를 남긴다 |

### 9.5 노션 Method documents에서 올 때

학생이 노션에 쓴 method 노트가 시각 페이지의 출발점이 될 수 있다. 흡수 절차는 `CLAUDE.md` §9.5. 이 스키마에서 지킬 것은 둘이다.

- 노션 문장·이미지를 옮기지 않는다 — 근거는 노션이 인용한 논문, 그림은 생성기로 새로 그린다.
- 노션 URL은 `site/`에 넣지 않는다 → `site-meta/<도메인>.md` 매핑 표(`CLAUDE.md` §11.1과 같은 이유 — HTML은 view-source로 전부 공개).

### 9.6 검사 추가분

- SPA: `articlePages`의 경로가 모두 실제 파일 · 등록 id 카드에 `.deep-link` 1개 · 섹션 목록 배지 수 = 그 섹션의 등록 수 · 콘솔 오류 0
- 시각 페이지: `html[data-glossary]` > 0 · breadcrumb·"1분 요약" 링크가 SPA 라우트(`#section/…`·`#article/…`)로 열림
