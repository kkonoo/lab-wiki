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

### 4.1 그리는 규칙 (2026-11-05)

diagram-design(cathrynlavery/diagram-design, MIT)의 연결선 · 밀도 규칙 가운데 우리 그림에 맞는 것만 가져왔다. 기존 그림은 고치지 않고 **새 그림부터** 지킨다. 걸리는 것은 §6 `check_svg.py`가 잡는다.

- **그릴지 먼저 본다.** 표 3열이나 문단으로 같은 말이 되면 그리지 않는다.
- **밀도**: 상자 9개 · 화살표 12개를 넘으면 그림 두 장(전체 + 자세히)으로 나눈다. 강조(주조색 진한 면)는 그림 하나에 1–2곳.
- **화살표는 가로 · 세로로만 꺾는다.** 비스듬한 직선 금지. 곡선은 혈관 · 림프관처럼 모양 자체가 내용일 때만.
- **끝점이 아닌 상자 뒤로 지나가지 않는다.** 돌아간다. 정말 피할 수 없으면 점선(`4,3`)으로, 라벨은 보이는 끝에.
- **한 변에 화살표가 여럿이면 붙는 점을 나눈다.** 변 길이 L에 N개면 k번째는 `L·k/(N+1)`, 서로 12px 이상(짧은 상자 8px). 한 점에서 두 갈래로 나가지 않는다.
- **화살표 라벨은 선 위에 얹지 않는다.** 선에서 6–10px 띄우거나, 불투명 바탕(`rect`)을 깔고 그 위에 쓴다.
- **한글 글자 폭은 글자마다 센다**: 실측은 한글 · 전각 1글자 ≈ 0.775em, 그 밖(영문 · 숫자 · 기호 · 띄어쓰기) ≈ 0.463em이다(2026-11-25, 쪽 여덟에서 글자 1,022개). 상자 폭을 정할 때는 여유를 두려고 1em · 0.6em으로 세도 되지만, **검사기(`check_svg.py`)는 실측값을 쓴다** — 옛 값으로 세면 상자가 필요 이상 넓어진다. 합 × 글자 크기 + 좌우 여백으로 상자 폭을 정한다. "한글 몇 자"로만 세면 숫자 · 기호가 빠져 상자가 모자란다.
- **한글은 12px 밑으로 줄이지 않는다.** 안 들어가면 글을 줄인다.
- **접근성**: `<svg role="img" aria-labelledby="<id>T <id>D">` + `<title id="<id>T">` · `<desc id="<id>D">`(coloc 방식). id는 그림마다 다르게.

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

### 그림 연결선 · 상자 폭 (`check_svg.py`, 2026-11-05)

```bash
python3 wiki/site-meta/tools/check_svg.py wiki/site/gwas/03-postgwas/coloc.html   # html 여러 개를 한 번에 줘도 된다
```

§4.1을 HTML 안 `<svg>`에서 잰다: `diagonal`(비스듬한 화살표) · `behind`(끝점 아닌 상자를 지남) · `port`(한 점에 화살표 끝 둘) · `on-line`(화살표가 글자 위를 지남) · `too-wide`(글자가 상자보다 넓음 — 글자 폭은 어림) · **`covered`(나중에 그린 불투명한 면이 글자를 덮음)** · **`vbox-out`(그린 것이 viewBox 밖으로 나감 — 잘린다)** · **`vbox-slack`(viewBox 한쪽이 많이 남음 — 그림이 작아진다)**. 뒤의 셋은 2026-11-25 추가. 화살표 = `marker-end`/`marker-start`가 붙은 `path`·`line`, 상자 = 40×20 이상 `rect`(영역 클래스 `zone`·`lane`·`band`·`ov`·`frame`·`hl` 등과 그림 폭 80% 넘는 띠는 뺀다).

`covered`는 그 영역 클래스들을 **다시 본다** — 상자로는 안 쳐도 뒤를 가리는 면이기 때문이다. SVG는 나중에 그린 것이 위에 오므로 **글자보다 문서 순서가 뒤인 면**만 보고, 그 면의 `fill`이 `none`이 아니면서 실효 불투명도가 0.85 이상일 때, 글자 상자의 30% 넘게 덮으면 잡는다. 칠은 inline 속성 · `style` · CSS 클래스(조상 클래스 + 요소 꼴인 `.xfig .bx rect{fill:…}`도 읽는다)에서 찾고, **상태 선택자(`[data-mode=…]` · `:not(…)`)가 붙은 규칙은 켜졌는지 알 수 없어 건너뛴다**. `gfig.band()`가 띠 위에 얹는 `g-band-t`는 예외다.

못 잡는 것: 채운 `<path>`·`<circle>`(면은 `<rect>`만 본다) · **불투명한 면 위에 나중에 글자를 얹어 색이 묻히는 경우**(색 계산이 필요하다). 이름표가 점 위에 겹치는 것도 여기 들어가니 모드별 PNG는 계속 눈으로 본다.

### viewBox 맞추기 (`vbox-out` · `vbox-slack`, 2026-11-25)

둘은 **한 계산에서 양방향으로** 나온다. 그린 것의 바깥 상자를 viewBox와 견주어, 밖으로 나가면 화면에서 잘리고(`vbox-out`) 안쪽이 남으면 쪽이 폭에 맞춰 그림을 줄이면서 글자가 그만큼 작아진다(`vbox-slack`). 잘림만 보면 "그림이 작게 보이는" 쪽을 놓친다 — 10번 association-model에서 축 이름이 네 번 잘렸고, 같은 쪽 그림 넷 가운데 셋은 오른쪽이 108 · 163 · 175 남아 있었다.

- **`<defs>` · `<marker>` · `<clipPath>` · `<mask>` · `<pattern>` · `<symbol>` 안은 보지 않는다.** 화살촉 템플릿은 참조된 자리에 그려지는데 원 좌표로 재면 그림 전체가 이탈로 잡힌다(교재 `regulation.html`에서 실제로 겪음).
- **모드마다 따로 잰다.** 이탈은 가장 많이 나간 모드, 남는 여백은 가장 꽉 찬 모드를 기준으로 본다 — viewBox 하나가 모든 모드를 담아야 한다.
- **가로와 세로의 기준이 다르다.** 글자 폭은 어림이라 가로는 20, 세로는 글자 높이가 정확해 3으로 둔다. 남는 여백은 90(가로) · 60(세로). `too-wide` 는 12px 넘게 넘칠 때만 알린다 — 그 아래는 여백 문제다.
- `rotate(a cx cy)`가 붙은 것(세로 축 이름이 흔히 그렇다)은 다른 검사에서는 빼지만 회전 중심을 범위에 넣는다. 통째로 빼면 남는 여백이 실제보다 크게 나온다.
- **가로 임계는 20, 세로는 3이다(2026-11-25 보정).** 글자 폭 계수를 실측으로 다시 맞추기 전에는 가로를 70까지 벌려야 했는데, 그래도 긴 한글 주석 한 줄이 통째로 이탈로 잡히는 오탐이 났다(11번 twas에서 세 건). 계수를 고친 뒤 그림 있는 쪽 51개에서 가로 오탐 0건이고 임계를 3까지 내려도 0건이었다 — 긴 글자의 꼬리(과대추정 99분위 +65)를 감안해 40으로 뒀다. 그보다 적게 가로로 잘리는 것은 여전히 안 보인다.
- 세로는 추정이 정확해 거의 다 잡힌다 — 교재 `genetics-to-drugs.html`의 실제 결함(아래 8)을 되돌려 돌렸더니 추정값이 브라우저 측정과 같았고 여백도 118 대 117.2로 1단위 안쪽이었다. 가로를 정확히 보려면 아래의 브라우저 측정을 쓴다.
- **값은 신호이지 측정이 아니다.** 곡선은 끝점만 보고 글자 폭은 어림이라, 걸리면 눈으로 보고 정한다. 정확히 재려면 브라우저에서 `getBoundingClientRect()`를 user 좌표로 되돌린다 — `k = vb.width / svgRect.width`, `x = (r.left − svgRect.left)·k + vb.x`. `getBBox()`는 transform이 섞이면 어긋난다.

- **0이 목표가 아니다** — 생성기를 고친 전후로 돌려 신규 0건을 본다. 기준선(2026-11-05, 그림 있는 29쪽): 102건(too-wide 58 · diagonal 24 · on-line 12 · behind 4 · port 4). 눈으로 확인한 진짜 예: sensing 그림 1 MAVS → IRF3 선이 `K⁺ 유출…` 알약 뒤를 지남(behind), MyD88 · TRIF에서 점선 · 실선이 한 점에서 나감(port).
- 토글로 숨긴 오버레이 글자도 잰다 — 기본 화면에 안 보이는 글이 걸릴 수 있다.
- 예전 immunology 생성기의 `check_fig`(viewBox 이탈 · 글자 겹침)는 저장소에 남아 있지 않다. 그 둘은 아직 이 스크립트에 없다.

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
| `virus/general/index.html` | 2 | 0 |
| `virus/hbv/index.html` | 3 | 0 |

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
- 2026-11-24 gwas에서 두 등급으로 넓혔다. **A**는 그림 없이는 핵심 구분이 안 되는 방법, **B**는 그림이 이해를 크게 돕고 seed 고정 시뮬레이션으로 그릴 수 있는 개념이다. 도구 · DB 카드와 정의 한 줄로 끝나는 카드는 계속 카드로 둔다. 도메인별 목록과 순서는 `site-meta/<도메인>.md` §2.

### 9.2 경로

```
site/gwas/
├─ index.html              SPA(용어 카드). articlePages로 시각 페이지를 가리킨다
├─ glossary.js             용어 사전 SSOT — SPA와 시각 페이지가 같이 로드
├─ gwas.css                시각 페이지 공용 — article.css용 옛 색 이름 별칭(토큰·상단 바·.glossary-term은 base·spa가 맡음)
├─ gwas-fig.css · gwas-fig.js  시각 페이지 공용 그림 훅(§4, g- 접두사) · 모드 토글 · 좁은 화면 스크롤 시작점
└─ <NN-섹션>/<id>.html       예: 03-postgwas/coloc.html · 01-genetics/ld.html
```

- 그림 훅과 토글은 처음에 `03-postgwas/postgwas.css · .js`에 있었고, 두 번째 섹션(01-genetics)이 쓰기 시작한 2026-11-24에 `gwas-fig.*`로 옮겼다. 한 섹션에서만 쓰는 훅이 생기면 그때 `<NN-섹션>/<섹션>.css`를 만든다.

- 폴더 = SPA `sections`의 number + key(`postgwas` → `03-postgwas`). key가 도메인명과 겹치면 english 라벨 — gwas의 02는 `02-association`.
- 파일명 = SPA article id(`coloc` → `coloc.html`). 카드 여러 개를 한 페이지로 묶으면 대표 카드 id가 파일명이고, 나머지 카드는 `articlePages`에 `<경로>#<h2 id>`로 건다(예: `haplotype: "01-genetics/ld.html#haplotype"`).
- 공용 자산 상대 깊이는 `../../assets/`(질환 시각 페이지는 `../../../`). 복사해 시작할 때 가장 먼저 고친다.
- 그림 생성기는 `wiki/site-meta/<도메인>-figures/*.py` → `GEN` 마커(§4). 데이터는 **seed 고정 시뮬레이션** — 논문 그림을 옮겨 그리지 않는다. 본문 문장 속 시뮬레이션 수치도 `GEN` 인라인 마커로 넣는다(예: coloc `<!--GEN:FRAG_PP-->`).
- 좁은 화면에서 가로 스크롤되는 그림은 `.fig-scroll[data-scroll="end|center"]`로 시작 위치를 정한다(신호가 오른쪽에 있으면 빈 축부터 보인다 — coloc 390px). 동작은 `gwas/gwas-fig.js`(2026-11-24 섹션 공용으로 옮김) — 다른 도메인에서 쓰면 `assets/`로 옮긴다.
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
| SPA 카드 | 본문 맨 아래 "그림으로 깊게 보기 →"(`.deep-link`) — 카드를 다 읽은 뒤 넘어가는 자리(2026-10-19 정의 아래 → 맨 아래) |
| 시각 페이지 breadcrumb | `HaLab Wiki › GWAS › Post-GWAS › <제목>` — 섹션은 `../index.html#section/<key>` |
| 시각 페이지 aside | 첫 상자 "1분 요약" → `../index.html#article/<id>` · Related는 시각 페이지가 있으면 그쪽, 없으면 카드 |
| hover 용어 | `<도메인>/glossary.js` 하나. 용어 추가는 `terms`에만(정규식은 키에서 길이순 자동 생성). `body.vpage`면 본문에 직접 붙이고 `html[data-glossary]`에 개수를 남긴다 |

### 9.5 노션 Method documents에서 올 때

학생이 노션에 쓴 method 노트가 시각 페이지의 출발점이 될 수 있다. 흡수 절차는 `CLAUDE.md` §9.5. 이 스키마에서 지킬 것은 둘이다.

- 노션 문장·이미지를 옮기지 않는다 — 근거는 노션이 인용한 논문, 그림은 생성기로 새로 그린다.
- 노션 URL은 `site/`에 넣지 않는다 → `site-meta/<도메인>.md` 매핑 표(`CLAUDE.md` §11.1과 같은 이유 — HTML은 view-source로 전부 공개).

### 9.6 검사 추가분

- SPA: `articlePages`의 경로가 모두 실제 파일(`#`이 붙으면 그 `h2[id]`도 있어야 함) · 등록 id 카드에 `.deep-link` 1개 · 섹션 목록 배지 수 = 그 섹션의 등록 수 · 콘솔 오류 0
- 시각 페이지: `html[data-glossary]` > 0 · breadcrumb·"1분 요약" 링크가 SPA 라우트(`#section/…`·`#article/…`)로 열림
