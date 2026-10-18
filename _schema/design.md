<!-- site 디자인(색·글꼴·틀·CSS 로드 순서) SSOT. 2026-10-18 전면 개편.
     문체·용어·수치 = disease-page.md §4·§5 · 시각 페이지 레이아웃 = visual-page.md. 여기 복사하지 않는다. -->

# site 디자인 스키마

## 1. 원형

- **레이아웃**: 랩 홈페이지 `halab-site`(halab.knu.ac.kr — 그 원형은 cmri)의 틀을 따른다. 흰 바탕 · 72px 흰 상단 바(학교 심볼 + 이름 + 도메인 내비) · 진한 머리 띠 · 모서리 16px 카드 · 얇은 선.
- **원칙**: slide-gallery(kkonoo.github.io/slide-gallery) "PPT 기본 팁"에서 웹에 그대로 맞는 것만 가져온다.
  - 글꼴은 **Pretendard 하나**, 위계는 굵기(800 제목 · 700 소제목 · 600 링크·라벨 · 400 본문)
  - **주조색 하나 + 강조색 하나**, 단계는 같은 색의 옅은 명도(`--theme-soft` · `--theme-line`)
  - **강조는 한 화면에 한 곳** — 색을 섹션마다 바꾸지 않는다
  - 글자는 순검정 대신 짙은 회색(`--text` · `--body`), 설명은 중간 회색(`--muted`)
  - 선은 글자 굵기 정도(1px), 굵은 테두리 금지(강조 막대는 3–4px 한 군데만)
  - 이모지 금지 · 아이콘은 한 팩에서만

## 2. 색

| 범위 | 주조색 | 토큰 | 출처 |
|---|---|---|---|
| 사이트(허브 `index.html`) | 초록 `#1B7445` | `--c-site` | halab-site |
| GWAS | forest `#1F5236` | `--c-gwas` | slide-gallery 테마 |
| Omics | crimson `#B0283C` | `--c-omics` | 〃 |
| Single-cell | wine `#7A1F3D` | `--c-sc` | 〃 |
| Multi-omics | plum `#7A2E6B` | `--c-mo` | 〃 |
| Human diseases (immunology 포함) | blue `#2563C9` | `--c-disease` | 〃 |

- 페이지는 `<body data-domain="gwas|omics|single-cell|multi-omics|disease">` 하나로 주조색을 고른다. `base.css`가 그 도메인의 `--theme` · `--theme-soft` · `--theme-line` · `--theme-deep(-2)` · `--theme-glow` · `--theme-hi` · `--grad`를 정한다. **페이지 CSS·JS에 색을 박지 않는다.**
- 섹션 데이터의 `accent` 값(GWAS 01–04 등)은 **쓰지 않는다**(2026-10-18 결정 — 도메인 주조색 하나). 데이터에 남아 있어도 렌더하지 않는다.
- 다른 도메인을 가리킬 때(허브 카드·전체 검색 결과)만 `--c-*`를 쓴다. 검색 색인의 도메인 색도 `--c-*`(`tools/build-search-index.js`).
- 예외 색: 모순 상자·`확인 필요` 배지 = 주황(`#C2531F` 계열). 그림(SVG)의 의미 색(계통·경로·세포형)은 데이터 색이라 토큰으로 바꾸지 않는다.
- 옛 색 이름(`--green` · `--ink` · `--paper` · `--blue` …)은 `immunology.css`·`brain-regions.html`이 **`body`에** 토큰 별칭으로 둔다. `:root`에 두면 도메인 색이 아니라 사이트 초록으로 굳는다(사용자 정의 속성은 선언된 요소에서 계산돼 상속된다).

## 3. CSS 파일과 로드 순서

```
assets/css/base.css      토큰 · 도메인 테마 · 기본 요소 · 공용 틀(상단 바·도메인 내비·바닥)   ← 모든 페이지가 처음 로드
assets/css/spa.css       용어 카드 SPA(gwas · omics/* · single-cell/* · multi-omics · 질문형 질환 페이지) — 첫 화면 띠 · 섹션 카드 · 질문 블록 · 검색 · 용어 카드 · hover 용어
assets/css/hub.css       허브(index.html)와 도메인 목록(omics/ · single-cell/ · disease/ · disease/<대분류>/)
assets/css/disease.css   disease-page.js 질환 8곳 전용(4블록 카드 · 수치 표 · 모순 상자)
disease/immunology/immunology.css   면역학 전용(visual-tabs · term-table …) + 옛 색 이름 별칭
gwas/gwas.css            GWAS 시각 페이지 공용 — 옛 색 이름 별칭(article.css용). SPA는 안 씀
assets/css/article.css   시각 페이지(body.vpage) 공용 — visual-page.md
assets/css/feedback.css  "여기 헷갈려요" 버튼 — --theme을 따른다
```

| 페이지 | 순서 |
|---|---|
| 허브 · 도메인 목록 | `base` → `hub` |
| 용어 카드 SPA | `base` → `spa` |
| 질환 8곳 | `base` → `spa` → `disease` |
| 면역학 SPA | `base` → `spa` → `immunology` |
| 면역학 시각 페이지 | `base` → `spa` → `immunology` → `article` → 섹션 css |
| GWAS 시각 페이지 | `base` → `spa` → `gwas` → `article` → 섹션 css |

`assets/css/styles.css`는 어느 페이지도 링크하지 않는 옛 사본이다.

## 4. 틀

- **상단 바**: `header.topbar` > `.topbar-inner` > `.brand-group`(`.brand-home` 심볼+이름, `.brand-domain` 경로) · `nav.domain-nav`(5 도메인, 지금 도메인에 `aria-current="page"`) · `form.top-search`. 높이 72px(`--header-h`).
  - 가운데 경로(`/ Human diseases / Neuro …`)는 숨기고 지금 페이지 이름만 남긴다 — 도메인 내비와 겹치고 긴 경로가 내비를 덮는다.
  - 1080px 이하에서 도메인 내비를 숨긴다.
- **진한 머리 띠**: 도메인 첫 화면(`.hero`)·허브(`.hub-hero`)·섹션 머리(`.breadcrumb` + `.page-header`). 섹션 머리는 컨테이너 안 요소라 `box-shadow: 0 0 0 100vmax` + `clip-path: inset(0 -100vmax)`로 화면 끝까지 칠한다(가로 넘침 없음). 경로와 머리 사이는 `margin-bottom:-1px`로 겹친다 — 소수점 높이에서 두 띠 사이에 밝은 선이 생긴다.
- **고정 머리 아래 여백**: 목차 sticky·h2 `scroll-margin-top` = `--header-h + 20px` = **92px**.
- **hover 용어 말풍선**은 `display`로 숨긴다. `visibility`로 숨기면 화면 오른쪽 끝 용어의 말풍선이 가로 스크롤을 만든다(390px에서 241px 넘침, 2026-10-18).

## 5. 검사

- 전 페이지 1440 · 390px: 가로 넘침 0 · 콘솔 오류 0 · `.topbar` 높이 72(+1 테두리) · `body` 글꼴 `Pretendard Variable`
- 페이지에 남은 옛 흔적: `grep -rn 'Georgia\|s\.accent\|act\.accent' wiki/site --include=*.html --include=*.css --include=*.js` → 0
- 새 페이지는 `assets/css/base.css`를 링크하는지: `for f in $(find wiki/site -name '*.html'); do grep -q base.css $f || echo $f; done` → 출력 없음

## 6. 다크 모드 — 나중

halab-site처럼 달·해 버튼을 넣을 수 있지만 **아직 안 한다**(2026-10-18 결정). 먼저 할 일:

1. 그림 SVG에 박힌 색(면역학 HTML `fill="#…"` 144곳)과 `article.css`의 hex 182곳을 토큰으로 옮긴다.
2. `base.css`에 `:root[data-theme="dark"]` 토큰을 추가하고 `color-scheme: only light`를 푼다.

그 전까지는 `color-scheme: only light`로 밝은 화면을 고정한다 — 삼성 인터넷의 강제 다크가 그림 색을 뒤집지 않게.
