window.DISEASE = (function () {
  const meta = {
    id: "ra",
    title: "Rheumatoid Arthritis (RA)",
    domain: "Autoimmune",
    updated: "2026-08-05"
  };


  /* ── 4 blocks ────────────────────────────────────────────────────────── */
  const acts = [
    { id: "A", num: "01", en: "DEFINITION · EPIDEMIOLOGY", title: "무엇인가", accent: "#6f3a55",
      blurb: "정의·분류 · 감별 · 아형 · 유병률 · 질병부담 · 한국과 세계의 추세",
      sections: ["def", "epi"] },
    { id: "B", num: "02", en: "CAUSE · COURSE", title: "왜·어떻게", accent: "#315d78",
      blurb: "유전·환경의 기여 · 점막 기원 · 임상 전 단계 · 활막염에서 골 파괴까지",
      sections: ["risk", "course"] },
    { id: "C", num: "03", en: "CLINICAL", title: "임상", accent: "#94553b",
      blurb: "증상·진단 기준 · 바이오마커 · treat-to-target · 미해결 임상 수요",
      sections: ["dx", "tx"] },
    { id: "D", num: "04", en: "RESEARCH", title: "연구", accent: "#1f5d43",
      blurb: "GWAS·단일세포가 밝힌 것 · 진료 권고·치료제·데이터·분석 기법의 최근 변화",
      sections: ["omics", "now"] }
  ];

  /* ── 9섹션 ───────────────────────────────────────────────────────────── */
  const sections = {
    def: { number: "01", title: "정의 · 분류", act: "A",
      questions: [
        { q: "어떻게 정의하고 분류하는가?", note: "만성 자가면역 → 활막 표적 → 전신질환", article: "ra-definition" },
        { q: "비슷한 질환과 무엇이 다른가?", note: "OA · PsA · SLE · gout 감별", article: "ra-differential" },
        { q: "주요 아형은 무엇인가?", note: "자가항체 → seropositive / seronegative", article: "ra-subtypes" }
      ] },
    epi: { number: "02", title: "역학 · 질병부담", act: "A",
      questions: [
        { q: "세계와 한국에서 얼마나 흔한가?", note: "유병률 → 발생률 → 환자 수", article: "ra-prevalence" },
        { q: "발생률·유병률은 증가하는가?", note: "연령표준화 발생률 → 고령화 → 유병 인구", article: "ra-trend" },
        { q: "어떤 연령·성별·집단에서 많이 발생하는가?", note: "성비 → 호발 연령 → 지역·인종", article: "ra-demographics" },
        { q: "질병부담과 사회경제적 영향은 얼마나 큰가?", note: "기능 장애 → 노동 손실 → 의료비", article: "ra-burden" }
      ] },
    risk: { number: "01", title: "원인 · 위험인자", act: "B",
      questions: [
        { q: "주요 위험인자는 무엇인가?", note: "흡연 · 치주염 · 성호르몬 · 비만", article: "ra-riskfactors" },
        { q: "유전과 환경은 각각 얼마나 기여하는가?", note: "유전율 → HLA → 폴리제닉 → GxE", article: "ra-genetics" },
        { q: "질병은 어떤 장기·조직·세포에서 시작되는가?", note: "관절이 아닌 점막 — 폐·구강·장", article: "ra-mucosal-origin" },
        { q: "보호요인과 촉발요인은 무엇인가?", note: "금연·식이 → 감염·스트레스·출산", article: "ra-protective-triggers" }
      ] },
    course: { number: "02", title: "발병 · 진행", act: "B",
      questions: [
        { q: "발병 전에는 어떤 변화가 일어나는가?", note: "자가항체 선행 → at-risk → 임상 발현", article: "ra-preclinical" },
        { q: "초기에서 말기까지 어떤 경로를 밟는가?", note: "활막염 → 연골 소실 → 골미란 → 변형", article: "ra-progression" },
        { q: "환자마다 진행속도와 표현형이 다른 이유는 무엇인가?", note: "자가항체 · 유전 배경 · 활막 세포 조성", article: "ra-heterogeneity" },
        { q: "주요 합병증과 사망 원인은 무엇인가?", note: "심혈관 · RA-ILD · 감염", article: "ra-complications" }
      ] },
    dx: { number: "01", title: "진단 · 분류", act: "C",
      questions: [
        { q: "초기 증상은 무엇인가?", note: "대칭성 소관절 종창 · 아침 강직", article: "ra-symptoms" },
        { q: "현재 진단 기준은 무엇인가?", note: "ACR/EULAR 2010 — 4개 항목 합산", article: "ra-criteria" },
        { q: "어떤 검사와 바이오마커를 사용하는가?", note: "ACPA·RF → CRP·ESR → 초음파·MRI", article: "ra-tests" },
        { q: "조기진단이 어려운 이유는 무엇인가?", note: "비특이 초기 소견 · seronegative · 기준의 한계", article: "ra-dxdelay" },
        { q: "아형·중증도·예후를 어떻게 구분하는가?", note: "질병활성도 지표 · 예후 불량 인자", article: "ra-severity" }
      ] },
    tx: { number: "02", title: "치료 · 미충족 수요", act: "C",
      questions: [
        { q: "현재 표준 치료는 무엇인가?", note: "treat-to-target → csDMARD → bDMARD·tsDMARD", article: "ra-standard-tx" },
        { q: "어떤 환자에게 효과가 있는가?", note: "조기 치료의 이득 · 관해 도달률의 한계", article: "ra-response" },
        { q: "치료반응이 다른 이유는 무엇인가?", note: "동일 진단 내 분자·세포 병태의 혼재", article: "ra-response-variability" },
        { q: "불응·재발·부작용 문제는 무엇인가?", note: "D2T RA · 중단 후 재발 · 감염과 안전성", article: "ra-refractory" },
        { q: "아직 충족되지 않은 임상적 필요는 무엇인가?", note: "반응 예측 · 중단 가능 환자 식별 · 예방", article: "ra-unmet" }
      ] },
    omics: { number: "01", title: "유전학 · 오믹스", act: "D",
      questions: [
        { q: "GWAS는 어떤 유전자와 경로를 지목하는가?", note: "HLA → 101 loci → 면역 활성화 경로", article: "ra-gwas" },
        { q: "위험변이는 어떤 세포에서 작동하는가?", note: "T·B세포 → 기질세포 · coloc과 sc-eQTL", article: "ra-variant-celltype" },
        { q: "bulk와 single-cell 연구는 무엇을 보여주었는가?", note: "혼재된 활막 → 기능적 subset 분리", article: "ra-singlecell" },
        { q: "조직·혈액 바이오마커는 얼마나 일치하는가?", note: "활막 생검의 장벽 · 혈액 대리지표의 한계", article: "ra-tissue-blood" },
        { q: "ancestry 차이는 무엇인가?", note: "유럽계 편중 → 효과 전이성 · PRS 성능", article: "ra-ancestry" }
      ] },
    now: { number: "02", title: "최신 동향", act: "D",
      questions: [
        { q: "진료 권고는 최근 어떻게 바뀌었는가?", note: "분류 기준 · treat-to-target · D2T 정의", article: "ra-guideline-change" },
        { q: "새 치료제와 안전성 정보는 무엇인가?", note: "계열 확장 → JAKi 안전성 → 처방 조정", article: "ra-drug-update" },
        { q: "새 코호트·오믹스 데이터는 무엇이 생겼는가?", note: "활막 단일세포 아틀라스 · 다인종 GWAS", article: "ra-new-data" },
        { q: "새로 쓸 수 있게 된 분석 기법은 무엇인가?", note: "단일세포 · 공간전사체 · sc-eQTL · coloc", article: "ra-new-method" }
      ] }
  };


  /* ── articles ────────────────────────────────────────────────────────
     summary = 이 문서를 한 문장으로 (수치 + 함의)
     facts   = [라벨, 값, 출처, 연도, check]
     flags   = §5 모순 플래그 (synthesis에서 이관)
     gap     = 이 article이 남기는 한 줄 — 08 섹션의 재료
     ------------------------------------------------------------------ */
  const articleList = [
    /* ── 01 정의 · 분류 ──────────────────────────────────────────────── */
    {
      id: "ra-definition", section: "def",
      title: "어떻게 정의하고 분류하는가?",
      aliases: ["rheumatoid arthritis", "류마티스 관절염", "definition", "synovium", "ICD-10"],
      summary: "활막(synovium)을 표적으로 하는 만성 전신 자가면역질환 — 무치료 시 관절의 비가역적 파괴와 장애로 진행",
      facts: [
        ["질환 분류", "만성 염증성 자가면역질환", "—", "", false],
        ["표적 조직", "활막(synovium) — 이차적으로 연골·골", "—", "", false],
        ["침범 범위", "관절 + 관절 외(폐·혈관·눈·피부)", "—", "", false],
        ["ICD-10", "M05 (seropositive) · M06 (기타)", "WHO ICD-10", "", true]
      ],
      body: [
        ["무엇을 RA라 부르는가", [
          "활막의 만성 염증 → 연골·골 파괴로 이어지는 자가면역질환",
          "면역계가 자기 조직을 표적 — 마모에 의한 퇴행성 관절질환과 근본적으로 다름",
          "염증의 활막 국재화 — 다른 전신 자가면역질환과 구분되는 지점"
        ]],
        ["왜 전신질환인가", [
          "관절 외(extra-articular) 침범 — 폐·혈관·눈·피부",
          "만성 전신 염증 → 동맥경화 촉진 → 심혈관 위험 상승",
          "\"관절 질환\"으로만 다룰 경우 사망률 기여분을 놓침"
        ]],
        ["분류 체계", [
          "1차 축: 자가항체 유무 — seropositive / seronegative",
          "2차 축: 질병활성도(관해·저활성·중등도·고활성) — 치료 조정의 기준",
          "분자·세포 수준 재분류(molecular taxonomy) — 미확립"
        ]]
      ],
      related: ["ra-differential", "ra-subtypes", "ra-criteria"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"],
               ["McInnes & Schett 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1004965"]]
    },
    {
      id: "ra-differential", section: "def",
      title: "비슷한 질환과 무엇이 다른가?",
      aliases: ["differential diagnosis", "osteoarthritis", "psoriatic arthritis", "SLE", "gout", "감별진단"],
      summary: "손·발 소관절의 대칭성 침범과 염증지표 상승 → 골관절염과 감별 · 자가항체 프로파일과 관절 외 침범 양상 → 다른 염증성 관절염과 감별",
      facts: [
        ["골관절염 (OA)", "퇴행성 · 비대칭 · 체중부하 관절 · 염증지표 정상", "—", "", false],
        ["건선관절염 (PsA)", "부착부염 · 지염 · 피부병변 · 대개 ACPA 음성", "—", "", false],
        ["전신홍반루푸스 (SLE)", "대개 비미란성 관절염 · 신장·피부·혈액 침범 · ANA 프로파일", "—", "", false],
        ["통풍 (gout)", "급성 단관절 발작 · 결정(crystal) 확인으로 확진", "—", "", false]
      ],
      body: [
        ["염증성인가 퇴행성인가", [
          "OA — 마모에 의한 퇴행성 변화 · 비대칭 · 무릎·고관절 등 체중부하 관절 중심",
          "RA — 손·손목·발 소관절의 좌우 대칭 침범 · CRP·ESR 상승",
          "아침 강직 — RA는 30분 이상 지속, OA는 짧고 활동으로 곧 완화"
        ]],
        ["다른 염증성 관절염과의 감별", [
          "PsA — 부착부염(enthesitis)·지염(dactylitis)·피부와 손발톱 병변 · 대개 ACPA 음성",
          "SLE — 통증에 비해 미란 드묾 · 신장·혈액 침범 · 항핵항체 프로파일 상이",
          "통풍 — 급성 단관절 발작 · 관절액 결정(crystal) 확인으로 확진"
        ]],
        ["감별이 어려운 상황", [
          "초기 RA — 비특이 소견 · 미분화 관절염(undifferentiated arthritis)으로 분류되는 구간 존재",
          "seronegative RA — 자가항체라는 결정적 단서 부재",
          "중복증후군(overlap syndrome) — 복수 질환의 소견 혼재"
        ]]
      ],
      related: ["ra-definition", "ra-symptoms", "ra-subtypes"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-subtypes", section: "def",
      title: "주요 아형은 무엇인가?",
      aliases: ["seropositive", "seronegative", "ACPA", "RF", "subtype", "아형"],
      summary: "1차 분류축은 자가항체 유무 — seropositive와 seronegative는 유전 배경·경과·치료반응이 상이해 별개 질환군일 가능성 제기",
      facts: [
        ["seropositive", "ACPA 및/또는 RF 양성 · 환자의 대략 2/3", "Primer", "2018", true],
        ["seronegative", "자가항체 음성 · 진단이 더 늦어지는 경향", "Primer", "2018", true],
        ["유전 연관 차이", "HLA shared epitope 연관은 seropositive에 집중", "Raychaudhuri 2012", "2012", false],
        ["관절 파괴", "seropositive에서 더 빠른 경향", "리뷰 합의", "", true]
      ],
      body: [
        ["seropositive RA", [
          "ACPA 및/또는 RF 양성 · HLA shared epitope 연관 뚜렷 · 흡연과의 상호작용도 여기에 집중",
          "자가항체가 증상보다 수년 선행 → 임상 전 단계 관찰이 가능한 유일한 아형",
          "관절 파괴의 진행 속도가 더 빠른 경향"
        ]],
        ["seronegative RA", [
          "자가항체 음성 → 분류 기준 점수 미달 → 진단 지연",
          "HLA 연관 불명확 → 유전 구조 자체의 차이 가능성",
          "다른 질환(척추관절염 계열 등)의 혼입 가능성 지적"
        ]],
        ["다른 분류 축", [
          "발병 연령 — 고령 발병 RA(elderly-onset)는 큰 관절 침범·전신 증상 우세",
          "치료 반응 — difficult-to-treat RA의 별도 범주화 (C-02 치료 참조)",
          "두 축 모두 임상 관찰 기반 · 분자적 근거 미확보"
        ]]
      ],
      related: ["ra-definition", "ra-genetics", "ra-unmet"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"],
               ["Raychaudhuri 2012, Nat Genet", "https://doi.org/10.1038/ng.1076"]]
    },

    /* ── 02 역학 · 질병부담 ──────────────────────────────────────────── */
    {
      id: "ra-prevalence", section: "epi",
      title: "세계와 한국에서 얼마나 흔한가?",
      aliases: ["prevalence", "incidence", "유병률", "발생률", "GBD", "HIRA", "KOSIS"],
      summary: "전 세계 환자 약 1,760만명(GBD 2021, 2020년) · 한국 진료 인원 254,778명(HIRA 2022) — 추정 방식에 따라 유병률이 0.21%(GBD)~1%(임상 문헌)로 갈림",
      facts: [
        ["전 세계 환자 수", "1,760만명", "GBD 2021 (Lancet Rheumatol 2023)", "2020", false],
        ["연령표준화 유병률", "10만명당 208.8 (≈ 0.21%)", "GBD 2021", "2020", false],
        ["임상 문헌 유병률", "약 0.5–1% — GBD 추정과 2~5배 괴리 (아래 주의 참조)", "Primer·리뷰", "2018–", false],
        ["한국 진료 인원", "254,778명", "HIRA 청구자료", "2022", false],
        ["한국 인구 대비", "약 0.5% — 진료 인원 기준 단순 환산치", "HIRA 2022 기반 계산", "2022", true],
        ["2050년 예측", "3,170만명 (2020 대비 +80.2%)", "GBD 2021", "—", false],
        ["연령표준화 발생률", "10만명당 11.8 — 1990년 10.4에서 증가", "GBD 2021", "2021", false],
        ["60세 이상 발생률", "10만명당 30.3 — 연령에 따라 급증", "GBD 2021", "2021", false]
      ],
      body: [
        ["전 세계", [
          "유병률 대략 0.5–1% — 자가면역질환 중 가장 흔한 축",
          "지역·인종 간 편차 큼 → 인용 시 출처와 연도 병기 필수",
          "일부 원주민 집단에서 현저히 높은 유병률 → 유전 배경의 기여 시사"
        ]],
        ["한국", [
          "주 출처 — 건강보험 청구자료(HIRA·NHIS) 기반 연구",
          "청구자료의 한계 — 진단코드 기반 → 과대 또는 과소 추정 가능 · 인용 시 한계 병기",
          "교차 확인 경로 — 산정특례·희귀질환 등록 자료"
        ]],
        ["수치를 읽을 때 주의할 점", [
          "GBD와 임상 문헌의 괴리 — GBD 연령표준화 유병률 0.21% vs 임상 문헌 0.5–1% · 2~5배 차이 · 사례 정의와 모델링 방식이 달라 두 값의 혼용 금지",
          "한국 수치는 유병률이 아니라 진료 인원(청구 발생 기준) — 무증상·미진단·미수진 환자 미포함",
          "유병률(prevalence)과 발생률(incidence)의 혼용 금지 — 만성질환이라 둘의 괴리가 큼",
          "진단 기준 개정 → 실제 변화 없이도 유병률 변동",
          "연구별 대상 연령대(전체 인구 vs 성인) 상이 → 직접 비교 불가한 경우 다수"
        ]]
      ],
      related: ["ra-trend", "ra-demographics", "ra-burden"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]],
      links: [["IHME — Global Burden of Disease", "https://www.healthdata.org/research-analysis/gbd"],
              ["국가통계포털 KOSIS", "https://kosis.kr/"]]
    },
    {
      id: "ra-trend", section: "epi",
      title: "발생률·유병률은 증가하는가?",
      aliases: ["trend", "추세", "age-standardized", "aging", "연령표준화"],
      summary: "연령표준화 유병률 1990→2020 +14.1%(완만한 증가) · 환자 수는 2050년 3,170만명으로 +80.2% 전망 — 두 지표의 증가 폭이 크게 다르므로 구분 필요",
      facts: [
        ["연령표준화 유병률 추세", "1990→2020 +14.1% — 완만한 증가", "GBD 2021", "2020", false],
        ["유병 환자 수 추세", "2020년 1,760만 → 2050년 3,170만 (+80.2%)", "GBD 2021", "—", false],
        ["연령표준화 사망률", "10만명당 0.47 — 1990 대비 −23.8%", "GBD 2021", "2020", false],
        ["한국 추세", "244,786명(2020) → 254,778명(2022) · +4.1%", "HIRA 청구자료", "2022", false],
        ["추세 해석 주의", "진단 기준 개정·의료 접근성 변화가 겉보기 추세를 만든다", "—", "", false]
      ],
      body: [
        ["두 지표의 분기", [
          "연령표준화 발생률 — \"동일 연령 구조에서의 신규 발생\" · 비교적 안정",
          "유병 환자 수 — 고령화와 생존 기간 연장으로 증가 · 치료 향상이 오히려 증가 요인",
          "\"RA가 늘고 있다\" — 지표 명시 없이는 오해 소지"
        ]],
        ["겉보기 추세를 만드는 요인", [
          "분류 기준 개정 — 기준 확대 → 실제 변화 없이 유병률 상승",
          "의료 접근성·진단 인식 향상 — 과거 미포착 환자의 유입 → 발생률 상승처럼 관측",
          "흡연율 변화 — seropositive RA의 주요 환경 위험인자 → 인구 흡연율 추이가 발생률에 반영"
        ]],
        ["한국에서 확인할 것", [
          "청구자료 연도별 추이 — 코드 부여 관행 변화에 민감 · 급격한 꺾임 시 제도 변화 우선 의심",
          "고령 인구 비중의 빠른 상승 → 조유병률과 연령표준화 유병률 분리 필수"
        ]]
      ],
      related: ["ra-prevalence", "ra-demographics", "ra-burden"],
      links: [["IHME — GBD Compare", "https://vizhub.healthdata.org/gbd-compare/"]]
    },
    {
      id: "ra-demographics", section: "epi",
      title: "어떤 연령·성별·집단에서 많이 발생하는가?",
      aliases: ["sex ratio", "age of onset", "성비", "호발 연령", "ancestry"],
      summary: "연령표준화 여:남 유병률비 2.45(GBD 2021) · 발병 정점 40–60대 — 성별 편중은 성호르몬과 임신·출산의 위험 조절 관찰과 연결",
      facts: [
        ["성비 (여 : 남)", "연령표준화 유병률비 2.45", "GBD 2021", "2020", false],
        ["성비 — 임상 문헌", "약 2–3 : 1", "Primer", "2018", false],
        ["발병 정점 연령", "40–60대", "Primer", "2018", false],
        ["고령 발병 RA", "성비 차이가 줄고 큰 관절 침범이 두드러짐", "리뷰", "", true],
        ["지역·인종 차이", "일부 원주민 집단에서 높은 유병률 보고", "리뷰", "", true]
      ],
      body: [
        ["성별", [
          "여성 : 남성 약 2–3 : 1 — 자가면역질환 전반의 여성 편중과 같은 방향",
          "임신 중 관해 · 출산 후 악화 → 성호르몬의 질병활성도 조절 시사",
          "고령 발병에서 성비 차이 축소 경향"
        ]],
        ["연령", [
          "발병 정점 40–60대 · 젊은 성인에서도 발생",
          "고령 발병 RA(elderly-onset) — 큰 관절 침범·전신 증상 우세로 임상 양상 상이",
          "소아기 발병 — 별개 질환(소아 특발성 관절염)으로 분류"
        ]],
        ["집단", [
          "일부 원주민 집단의 높은 유병률 → 유전 배경의 기여 시사",
          "지역 간 격차의 상당 부분 — 흡연율과 인구 연령 구조로 설명",
          "동아시아 역학·유전 데이터 — 유럽계 대비 부족"
        ]]
      ],
      related: ["ra-prevalence", "ra-riskfactors", "ra-gwas"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-burden", section: "epi",
      title: "질병부담과 사회경제적 영향은 얼마나 큰가?",
      aliases: ["burden", "DALY", "질병부담", "생산성 손실", "의료비", "work disability"],
      summary: "전 세계 DALY 306만 중 YLD가 76.4% — 사망보다 장애가 부담의 중심 · 국내 진료비는 2년 새 14.1% 증가(HIRA 2020→2022)",
      facts: [
        ["DALY", "306만 (연령표준화 10만명당 36.4)", "GBD 2021", "2020", false],
        ["DALY 구성", "YLD(장애 생존)가 76.4% — 사망보다 장애가 부담의 중심", "GBD 2021", "2020", false],
        ["전 세계 사망", "38,300명", "GBD 2021", "2020", false],
        ["국내 진료비", "2,936억원(2020) → 3,348억원(2022) · +14.1%", "HIRA 청구자료", "2022", false],
        ["노동 능력 상실", "확인 필요 — 발병 후 취업 유지율 감소 보고", "코호트 연구", "", true],
        ["기대수명", "심혈관 동반질환으로 단축", "리뷰 합의", "", false]
      ],
      body: [
        ["부담의 발생 지점", [
          "관절 파괴 → 기능 장애 → 노동 능력 상실 · 직접 의료비보다 생산성 손실의 비중이 클 수 있음",
          "호발 연령 40–60대 → 경제활동 핵심 연령대 직격",
          "심혈관 동반질환 → 기대수명 단축 · 관절 증상과 별개의 부담"
        ]],
        ["비용 구조의 변화", [
          "생물학적 제제 도입 → 약제비 급증 → 비용 중심이 입원·수술에서 약제로 이동",
          "동시에 관절 변형·관절치환술 감소 → 장기 비용의 방향은 단순하지 않음",
          "\"치료비 증가\"와 \"사회적 부담 증가\"는 동일한 진술이 아님"
        ]],
        ["삶의 질", [
          "통증·피로·기능 제한 → 우울·수면 장애로 이어지는 경우 흔함",
          "환자보고 결과(PRO) 기반 부담 — 염증지표만으로는 미포착"
        ]]
      ],
      related: ["ra-prevalence", "ra-progression", "ra-unmet"],
      links: [["IHME — Global Burden of Disease", "https://www.healthdata.org/research-analysis/gbd"],
              ["건강보험심사평가원 보건의료빅데이터", "https://opendata.hira.or.kr/"]]
    },

    /* ── 03 원인 · 위험인자 ──────────────────────────────────────────── */
    {
      id: "ra-riskfactors", section: "risk",
      title: "주요 위험인자는 무엇인가?",
      aliases: ["risk factor", "smoking", "periodontitis", "obesity", "위험인자", "흡연"],
      summary: "흡연 — seropositive RA에서 재현성이 가장 높은 환경 위험인자 · 치주염·비만·여성 호르몬이 뒤를 잇는 구조",
      facts: [
        ["최대 환경 위험인자", "흡연 (seropositive RA)", "리뷰 합의", "", false],
        ["구강", "치주염 · P. gingivalis 등 구강 미생물", "Holers 2018", "2018", true],
        ["대사", "비만 — 위험 상승 보고 · 효과 크기는 연구별 편차", "코호트 연구", "", true],
        ["호르몬", "여성 호르몬 · 출산력 — 위험과 발병 시점 조절", "리뷰", "", true],
        ["직업·환경 노출", "실리카 등 흡입성 분진 — 폐 점막 경로 시사", "리뷰", "", true]
      ],
      body: [
        ["흡연 — 가장 확립된 인자", [
          "seropositive RA에서 재현성 최고 · seronegative에서는 연관이 약함",
          "용량·기간 의존적 위험 상승 · 금연 후에도 위험이 서서히만 감소",
          "폐 점막에서의 citrullination 유도 → 점막 기원 가설과 직접 연결"
        ]],
        ["그 밖의 인자", [
          "치주염 — 구강 미생물의 단백질 citrullination 유도 가설과 함께 연관 보고",
          "비만 — 위험 상승 보고 · 지방조직 유래 염증성 매개체를 기전으로 제시",
          "여성 호르몬·출산력 — 위험과 발병 시점 조절 · 효과 방향이 단순하지 않음",
          "실리카 등 흡입성 분진 — 직업 노출 연구에서 위험 상승 보고"
        ]],
        ["위험인자 해석의 주의", [
          "대부분 관찰연구 기반 → 교란과 역인과 배제 곤란",
          "seropositive/seronegative에서 효과가 갈리므로 아형 구분 없는 추정치는 희석됨",
          "Mendelian randomization — 관찰 연관의 인과성 검정에 쓰이는 접근"
        ]]
      ],
      related: ["ra-genetics", "ra-mucosal-origin", "ra-protective-triggers"],
      papers: [["McInnes & Schett 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1004965"],
               ["Holers 2018, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-018-0070-0"]]
    },
    {
      id: "ra-genetics", section: "risk",
      title: "유전과 환경은 각각 얼마나 기여하는가?",
      aliases: ["HLA", "shared epitope", "heritability", "GWAS", "gene-environment interaction", "유전율"],
      summary: "seropositive RA 유전 위험의 최대 집중 지점은 HLA-DRβ1 peptide-binding groove의 아미노산 모티프(shared epitope) · 나머지는 소효과 다수가 더해지는 폴리제닉 구조",
      facts: [
        ["유전율 (쌍둥이 연구)", "약 60% — seropositive에서 더 높음", "쌍둥이 연구", "", true],
        ["최대 단일 위험 영역", "HLA-DRB1 (shared epitope)", "Raychaudhuri 2012", "2012", false],
        ["보고된 위험 loci", "trans-ethnic GWAS 101개", "Okada 2014", "2014", false],
        ["유전×환경", "흡연 × HLA shared epitope — 상승적 위험 증폭", "리뷰 합의", "", false],
        ["seronegative 유전 구조", "HLA 연관 불명확 — 별도 검증 필요", "—", "", true]
      ],
      body: [
        ["유전의 몫", [
          "쌍둥이 연구 기반 유전율 약 60% — seropositive에서 더 높게 추정",
          "MHC 연관의 아미노산 수준 정련 → shared epitope의 분자적 실체 규정",
          "위험 HLA의 두 작동 방향 — citrullinated self-peptide의 T세포 제시 · 자가반응 TCR 선택",
          "MHC 밖 위험 — 소효과 변이 다수의 합(폴리제닉) · trans-ethnic GWAS 101개 loci"
        ]],
        ["환경의 몫", [
          "흡연이 seropositive RA 환경 위험의 중심 · 그 외는 효과 크기가 작음",
          "환경 단독 기여를 분리 추정하기 어려움 — 유전 배경에 따라 효과가 달라지기 때문"
        ]],
        ["둘의 상호작용", [
          "흡연 × HLA shared epitope — 각각의 합보다 큰 위험(gene-environment interaction)",
          "\"유전 몇 % · 환경 몇 %\"의 단순 분할이 성립하지 않는 근거",
          "보고 loci가 설명하는 유전율은 전체의 일부 — 나머지의 소재(rare variant · 상호작용 · 미검출 common variant) 미해결"
        ]]
      ],
      related: ["ra-riskfactors", "ra-gwas", "ra-ancestry"],
      papers: [["Raychaudhuri 2012, Nat Genet", "https://doi.org/10.1038/ng.1076"],
               ["Okada 2014, Nature", "https://doi.org/10.1038/nature12873"],
               ["Ishigaki 2022, Nat Genet", "https://doi.org/10.1038/s41588-022-01032-z"]]
    },
    {
      id: "ra-mucosal-origin", section: "risk",
      title: "질병은 어떤 장기·조직·세포에서 시작되는가?",
      aliases: ["mucosal origins", "ACPA", "NET", "at-risk", "dysbiosis", "점막 기원"],
      summary: "seropositive RA의 개시 부위 — 관절이 아닌 폐·구강·장 점막일 가능성 · 관절 증상 이전 단계에 개입 표적이 존재함을 시사",
      facts: [
        ["개시 추정 부위", "관절이 아닌 점막(폐·구강·장)", "Holers 2018", "2018", false],
        ["at-risk 단계 관찰", "국소 ACPA 생성 · 점막 염증 · dysbiosis · NET 형성", "Holers 2018", "2018", false],
        ["폐 경로", "흡연·실리카 노출과 연결", "리뷰", "", true],
        ["구강 경로", "치주염 · 구강 미생물의 citrullination 유도 가설", "리뷰", "", true]
      ],
      body: [
        ["점막 개시", [
          "관절보다 선행하는 점막 개시 — 근거 축적 중",
          "임상 전(at-risk) 단계의 관찰 — 국소 ACPA 생성 · 점막 염증 · dysbiosis · NET(neutrophil extracellular trap) 형성",
          "관절 증상 이전 단계 → 예방적 개입이 이론적으로 가능한 유일한 창(window)"
        ]],
        ["세 점막 경로", [
          "폐 — 흡연·실리카 등 흡입성 노출과 직접 연결 · seropositive RA에서 가장 유력",
          "구강 — 치주염 및 구강 미생물의 citrullination 유도 가설",
          "장 — microbiome 불균형과의 연관 보고 · 인과 방향 미확정"
        ]],
        ["관절로의 전환", [
          "점막 자가항체 → 전신 자가면역·관절염으로의 전환 기전 미해결",
          "전환 이후 활막으로의 국재화 기전도 별도 미해결",
          "이 전환 지점 — RA 예방의 핵심 표적으로 지목"
        ]]
      ],
      related: ["ra-riskfactors", "ra-preclinical", "ra-variant-celltype"],
      papers: [["Holers 2018, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-018-0070-0"]]
    },
    {
      id: "ra-protective-triggers", section: "risk",
      title: "보호요인과 촉발요인은 무엇인가?",
      aliases: ["protective factor", "trigger", "smoking cessation", "pregnancy", "보호요인", "촉발요인"],
      summary: "확립된 보호요인은 금연 하나 — 식이·미생물 등 나머지 후보는 관찰연구 수준 · 촉발요인은 감염·출산·스트레스가 거론되나 인과 근거 부족",
      facts: [
        ["확립된 보호요인", "금연 — 다만 위험 감소가 서서히 진행", "리뷰 합의", "", true],
        ["보호 후보", "식이 패턴 · 오메가-3 등 — 관찰연구 수준", "관찰연구", "", true],
        ["임신", "임신 중 관해 · 출산 후 악화·발병 위험 상승", "리뷰", "", true],
        ["감염", "발병 촉발 후보로 거론 · 인과 근거 부족", "—", "", true]
      ],
      body: [
        ["보호 쪽", [
          "금연 — 유일하게 개입 가능한 확립 요인 · 위험 감소는 수년에 걸쳐 서서히 진행",
          "식이 패턴·오메가-3 등 — 관찰연구에서 연관 보고 · 개입 근거 부족",
          "구강 위생·치주 관리 — 기전적 타당성은 있으나 발병 예방 효과 미검증"
        ]],
        ["촉발 쪽", [
          "출산 — 산후 발병 위험 상승 보고 · 임신 중 관해와 대비되는 현상",
          "감염 — 발병 촉발 후보로 반복 거론 · 특정 병원체와의 인과 미확립",
          "스트레스·생활사건 — 회상 편향(recall bias)이 커 해석 주의"
        ]],
        ["근거 수준의 한계", [
          "대부분 후향적 관찰연구 → 역인과와 회상 편향 배제 곤란",
          "at-risk 코호트의 전향 추적이 필요하나 규모가 작음",
          "Mendelian randomization — 인과 방향 검정의 우회 경로"
        ]]
      ],
      related: ["ra-riskfactors", "ra-preclinical", "ra-mucosal-origin"],
      papers: [["McInnes & Schett 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1004965"]]
    },

    /* ── 04 발병 · 진행 ─────────────────────────────────────────────── */
    {
      id: "ra-preclinical", section: "course",
      title: "발병 전에는 어떤 변화가 일어나는가?",
      aliases: ["preclinical RA", "ACPA", "RF", "anti-CCP", "at-risk", "임상 전"],
      summary: "ACPA·RF의 혈청 검출이 관절 증상보다 수년 선행 · ACPA 양성 + 근골격 증상에서 20–60%(중앙값 32%)가 실제 발병 — 임상 이전의 긴 잠복 단계가 존재",
      facts: [
        ["자가항체 선행 기간", "관절 증상 수년 전", "Smolen 2018", "2018", false],
        ["선행 자가항체", "anti-CCP(ACPA) · rheumatoid factor(RF)", "Primer", "2018", false],
        ["at-risk 진행률", "ACPA 양성 + 근골격 증상에서 20–60% (중앙값 약 32%), 수년 내", "코호트 종합", "—", false],
        ["고위험 층", "고역가 ACPA + 임상의심 관절통(CSA) → 2년 내 약 50%", "코호트", "—", true],
        ["예측 지표", "부재 — 진행자 식별 수단 없음", "—", "", false]
      ],
      body: [
        ["임상 전 잠복 단계", [
          "anti-CCP(ACPA)·RF의 혈청 출현 — 관절 증상 수년 전",
          "진단 시점 = 질병의 시작이 아니라 이미 상당히 진행된 시점",
          "ACPA의 표적 — citrullination 등 번역후변형(PTM) 항원 · 가변부 N-glycosylation 획득 → 가변부 glycan의 발병 예측력 보고"
        ]],
        ["단계의 구획", [
          "유전 위험 보유 → 환경 노출 → 점막 자가면역 개시 → 전신 자가항체 → 관절통(무종창) → 임상 관절염",
          "각 단계의 소요 기간과 이행률 — 코호트별 편차가 커 확정 곤란",
          "관절통이 있으나 종창이 없는 구간(arthralgia) — 개입 시험의 주 대상"
        ]],
        ["이 단계의 중요성", [
          "발병 자체를 막을 수 있는 유일한 구간 — 발병 후 치료는 억제이지 예방이 아님",
          "ACPA 양성자 전원이 진행하지는 않음 → 진행자를 가려낼 예측 지표 부재",
          "예측 지표 부재 → 예방 임상시험 설계의 실질적 병목"
        ]]
      ],
      related: ["ra-mucosal-origin", "ra-progression", "ra-unmet"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"],
               ["Scherer 2022", ""]]
    },
    {
      id: "ra-progression", section: "course",
      title: "초기에서 말기까지 어떤 경로를 밟는가?",
      aliases: ["synovitis", "bone erosion", "osteoimmunology", "RANKL", "pannus", "진행"],
      summary: "무치료 시 진행 경로는 활막염 → 연골 소실 → 골미란 → 관절 변형 · 활막 fibroblast가 이 파괴를 능동적으로 구동",
      facts: [
        ["진행 경로", "활막염 → 연골 소실 → 골미란 → 관절 변형", "—", "", false],
        ["염증 매개 subset", "FAP⁺THY1⁺ (sub-lining)", "Croft 2019", "2019", false],
        ["파괴 매개 subset", "FAP⁺THY1⁻ (lining)", "Croft 2019", "2019", false],
        ["골 파괴 경로", "RANKL · M-CSF → osteoclast 활성화", "Caetano-Lopes 2008", "2008", false]
      ],
      body: [
        ["활막에서 일어나는 일", [
          "활막 fibroblast — 오랫동안 수동적 구조세포로 간주 → RA 활막에서 염증·파괴를 능동적으로 주도",
          "FAP(fibroblast activation protein)⁺ = 병원성 표현형의 표지 · 기능 분담 — FAP⁺THY1⁺는 염증, FAP⁺THY1⁻는 연골·골 파괴",
          "면역세포와 기질세포의 상호 증폭 → 만성화된 염증 조직(pannus) 형성"
        ]],
        ["골·연골 파괴", [
          "면역 신호(RANKL·M-CSF) → osteoclast 활성화 → 골미란(osteoimmunology)",
          "연골 소실 — 기질 분해효소에 의한 진행 · 재생되지 않는 비가역 손상",
          "골미란의 조기 출현 — 이후 빠른 진행의 예측 인자"
        ]],
        ["치료가 바꾼 경로", [
          "treat-to-target 도입 이후 심한 관절 변형의 빈도 대폭 감소",
          "다만 염증 억제가 구조 보존을 항상 동반하지는 않음 → 증상과 방사선학적 진행의 분리 가능성"
        ]]
      ],
      related: ["ra-heterogeneity", "ra-complications", "ra-singlecell"],
      papers: [["Croft 2019, Nature", "https://doi.org/10.1038/s41586-019-1263-7"],
               ["Zou & Brenner 2025, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-025-01259-0"],
               ["Caetano-Lopes 2008, Autoimmun Rev", "https://doi.org/10.1016/j.autrev.2008.07.038"]]
    },
    {
      id: "ra-heterogeneity", section: "course",
      title: "환자마다 진행속도와 표현형이 다른 이유는 무엇인가?",
      aliases: ["heterogeneity", "phenotype", "pathotype", "이질성", "molecular taxonomy"],
      summary: "동일 진단 안에 서로 다른 분자·세포 병태가 혼재 — 활막 pathotype과 자가항체 상태가 진행 속도 차이의 유력 후보",
      facts: [
        ["빠른 진행 연관 인자", "seropositive · 고역가 자가항체 · 조기 미란 · 높은 염증지표", "리뷰 합의", "", false],
        ["활막 pathotype", "림프구 우세 / 골수성 우세 / 저면역 섬유성 — 세 유형 제안", "단일세포·조직 연구", "", true],
        ["개별 예측력", "임상 지표만으로는 부족", "—", "", false]
      ],
      body: [
        ["관찰되는 이질성", [
          "진행 속도의 환자 간 편차 큼 — 수년간 경미한 경과부터 급속 변형까지",
          "관절 외 침범의 유무·양상도 환자마다 상이",
          "동일 약제에 대한 반응 차이 — 이질성이 치료 단계까지 이어짐"
        ]],
        ["이질성의 후보 원인", [
          "자가항체 상태 — seropositive에서 더 빠른 진행 경향",
          "활막 pathotype — 림프구 우세 / 골수성 우세 / 저면역 섬유성의 세 유형 제안 · 치료반응과의 연관 검증 중",
          "유전 배경 — 위험 loci 조합에 따른 병태 차이 가능성",
          "환경 노출 지속 여부 — 흡연 지속이 경과에 미치는 영향"
        ]],
        ["왜 예측이 안 되는가", [
          "임상표현형 기반 분류가 분자·세포 subgroup으로 전환되지 못함(molecular taxonomy 미완)",
          "pathotype 판정에 활막 생검 필요 → 임상 적용의 장벽",
          "혈액 지표로 pathotype을 대체할 수 있는지 미검증"
        ]]
      ],
      related: ["ra-progression", "ra-response-variability", "ra-singlecell"],
      papers: [["McInnes & Schett 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1004965"],
               ["Nishide & Kumanogoh 2024", ""]]
    },
    {
      id: "ra-complications", section: "course",
      title: "주요 합병증과 사망 원인은 무엇인가?",
      aliases: ["cardiovascular", "RA-ILD", "infection", "comorbidity", "합병증", "사망"],
      summary: "주요 사망 원인은 심혈관질환 — 만성 전신 염증의 동맥경화 촉진에 기인 · RA-ILD와 감염이 뒤를 잇는 구조",
      facts: [
        ["주요 사망 원인", "심혈관질환", "리뷰 합의", "", false],
        ["기대수명", "일반 인구 대비 단축", "리뷰 합의", "", true],
        ["RA-ILD", "예후 불량한 관절 외 침범", "리뷰", "", true],
        ["감염 위험", "질병 자체 + 면역억제 치료 양쪽에서 상승", "—", "", false],
        ["기타 동반질환", "골다공증 · 우울 · 빈혈", "리뷰", "", true]
      ],
      body: [
        ["심혈관", [
          "만성 전신 염증 → 동맥경화 촉진 → 심근경색·뇌졸중 위험 상승",
          "전통적 위험인자만으로는 설명되지 않는 초과 위험 존재",
          "질병활성도 조절이 심혈관 위험 감소와 연관 → 염증 억제의 관절 외 이득"
        ]],
        ["폐", [
          "간질성 폐질환(RA-ILD) — 예후 불량 · 관절 증상과 독립적으로 진행 가능",
          "흡연과 seropositive 상태가 위험 인자로 거론",
          "폐가 개시 부위 후보이기도 함 → 원인과 합병증의 경계가 모호"
        ]],
        ["감염과 그 외", [
          "감염 — 질병 자체의 면역 이상과 면역억제 치료 양쪽에서 위험 상승",
          "골다공증 — 만성 염증·활동 저하·스테로이드 사용의 복합 결과",
          "우울·빈혈 — 삶의 질에 직접 영향 · 염증지표로는 미포착"
        ]]
      ],
      related: ["ra-progression", "ra-burden", "ra-refractory"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },

    /* ── 05 진단 · 분류 ─────────────────────────────────────────────── */
    {
      id: "ra-symptoms", section: "dx",
      title: "초기 증상은 무엇인가?",
      aliases: ["morning stiffness", "symmetric polyarthritis", "초기 증상", "아침 강직"],
      summary: "손·손목·발 소관절의 좌우 대칭 종창과 30분 이상 지속되는 아침 강직 — 골관절염과 갈리는 두 축",
      facts: [
        ["침범 관절", "손·손목·발의 작은 관절 (MCP·PIP·MTP)", "—", "", false],
        ["대칭성", "좌우 대칭 침범이 전형", "—", "", false],
        ["아침 강직", "30분–1시간 이상 지속", "임상 소견", "", false],
        ["전신 증상", "피로 · 미열 · 식욕부진", "—", "", false]
      ],
      body: [
        ["관절 증상", [
          "손·손목·발 소관절의 좌우 대칭 다발관절염 — MCP·PIP·MTP 관절이 전형",
          "관절 종창·압통·열감 · 원위지관절(DIP)은 대개 침범하지 않음",
          "30분 이상 지속되는 아침 강직 — 골관절염의 짧은 강직과의 구분점"
        ]],
        ["전신 증상", [
          "피로 · 미열 · 식욕부진 — 관절 증상에 선행하거나 동반",
          "관절 외 침범(폐·눈·피부 결절)이 초기에 드러나는 경우도 존재"
        ]],
        ["초기 증상의 함정", [
          "초기에는 관절통만 있고 종창이 없는 구간(arthralgia) 존재 → 진찰로 미포착",
          "증상이 간헐적으로 나타났다 사라지는 경우 → 환자·의사 모두 지연 유발",
          "증상 발현부터 진료까지의 지연이 진단 지연의 상당 부분을 차지"
        ]]
      ],
      related: ["ra-criteria", "ra-dxdelay", "ra-differential"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]],
      links: [["NIAMS — Rheumatoid Arthritis", "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis"]]
    },
    {
      id: "ra-criteria", section: "dx",
      title: "현재 진단 기준은 무엇인가?",
      aliases: ["ACR/EULAR criteria", "classification criteria", "2010", "분류 기준"],
      summary: "ACR/EULAR 2010 분류 기준 — 침범 관절 수·혈청학·급성반응물질·증상 기간의 4개 항목 합산 · 확진 도구가 아닌 분류 도구",
      facts: [
        ["기준", "ACR/EULAR 2010 분류 기준", "ACR/EULAR", "2010", false],
        ["항목", "침범 관절 수 · 혈청학(ACPA·RF) · 급성반응물질(CRP·ESR) · 증상 기간", "ACR/EULAR", "2010", false],
        ["설계 목적", "조기 환자 포착 — 1987 기준의 후기 편향 보정", "—", "", true],
        ["성격", "연구용 분류 기준 · 개별 환자 확진 도구 아님", "—", "", false]
      ],
      body: [
        ["기준의 구성", [
          "4개 항목의 점수 합산 방식 — 침범 관절 수 · 혈청학 · 급성반응물질 · 증상 기간",
          "혈청학 항목에서 ACPA·RF의 역가(저역가/고역가)를 구분해 가중",
          "다른 질환으로 더 잘 설명되지 않을 것 — 감별이 전제"
        ]],
        ["1987 기준과의 차이", [
          "1987 기준 — 미란·결절 등 후기 소견 포함 → 조기 환자 미포착",
          "2010 기준 — 조기 포착을 목표로 재설계 · 조기 치료 패러다임과 연동"
        ]],
        ["기준 사용의 한계", [
          "분류(classification) 기준이지 진단(diagnosis) 기준이 아님 — 연구 대상군 정의가 본래 목적",
          "기준 미달이어도 임상적으로 RA일 수 있음 → 점수만으로 배제 금물",
          "seronegative 환자는 혈청학 점수를 얻지 못해 기준 도달이 지연됨"
        ]]
      ],
      related: ["ra-symptoms", "ra-tests", "ra-dxdelay"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-tests", section: "dx",
      title: "어떤 검사와 바이오마커를 사용하는가?",
      aliases: ["ACPA", "anti-CCP", "RF", "CRP", "ESR", "ultrasound", "MRI", "검사"],
      summary: "자가항체(ACPA·RF)와 염증지표(CRP·ESR)가 기본 축 · 초음파·MRI가 진찰로 미포착되는 활막염과 조기 미란을 보완",
      facts: [
        ["자가항체", "anti-CCP(ACPA) · rheumatoid factor(RF)", "—", "", false],
        ["ACPA 특이도", "RF보다 높음 — RA에 상대적으로 특이적", "리뷰 합의", "", true],
        ["염증지표", "CRP · ESR — 비특이적 · 활성도 추적용", "—", "", false],
        ["영상", "단순 X선(미란) · 초음파·MRI(활막염·조기 미란)", "—", "", false],
        ["예측 바이오마커", "부재 — 치료반응·예후 예측 마커 없음", "—", "", false]
      ],
      body: [
        ["자가항체", [
          "ACPA — RF보다 특이도가 높아 감별에 유리 · 증상 수년 전부터 검출 가능",
          "RF — 감도는 있으나 다른 질환·건강인에서도 양성 → 단독 해석 금물",
          "두 항체의 역가가 예후와 연관 — 고역가에서 빠른 진행 경향"
        ]],
        ["염증지표와 영상", [
          "CRP·ESR — 비특이적 · 진단보다 활성도 추적과 치료 조정에 사용",
          "단순 X선 — 미란·관절강 협착 확인 · 조기에는 정상인 경우 많음",
          "초음파·MRI — 진찰로 미포착되는 활막염과 조기 미란의 검출 · 조기 진단에 기여"
        ]],
        ["없는 것", [
          "치료반응 예측 마커 — 어떤 약제가 들을지 사전에 알려주는 검사 부재",
          "예후 예측 마커 — 개별 환자의 진행 속도를 정량할 지표 부재",
          "활막 상태를 반영하는 혈액 대리지표 — 미검증"
        ]]
      ],
      related: ["ra-criteria", "ra-severity", "ra-tissue-blood"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"],
               ["McInnes & Schett 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1004965"]]
    },
    {
      id: "ra-dxdelay", section: "dx",
      title: "조기진단이 어려운 이유는 무엇인가?",
      aliases: ["diagnostic delay", "window of opportunity", "seronegative", "진단 지연"],
      summary: "초기 소견의 비특이성 · seronegative의 단서 부재 · 분류 기준의 구조적 한계가 겹쳐 진단이 지연 — 조기 치료의 창(window of opportunity)을 놓치는 원인",
      facts: [
        ["치료의 창", "발병 초기 — 조기 치료 시 관해 도달률과 구조 보존에 유리", "리뷰 합의", "", true],
        ["국내 진단 지연 기간", "확인 필요", "국내 코호트", "", true],
        ["seronegative 비율", "환자의 대략 1/3", "Primer", "2018", true]
      ],
      body: [
        ["환자 쪽 지연", [
          "초기 증상의 간헐성 → 자연 호전으로 오인 · 진료 지연",
          "관절통을 노화·과사용으로 귀속하는 인식",
          "1차 의료에서 류마티스 전문 진료로의 의뢰 지연"
        ]],
        ["의학적 한계", [
          "초기 소견의 비특이성 → 미분화 관절염 구간 존재 · 다른 관절통과 구분 불가",
          "seronegative 환자 — 자가항체라는 결정적 단서 부재 → 기준 도달 지연",
          "분류 기준의 성격 — 연구용 분류 도구 · 기준 미달에도 RA 가능"
        ]],
        ["왜 문제가 되는가", [
          "조기 치료의 이득이 큼 → 지연이 곧 구조 손상으로 직결",
          "발병 전 단계에는 진행자 식별 지표조차 없음 → 예방적 접근 불가",
          "지연 단축이 신규 약제 개발 못지않은 임상적 효과를 낼 수 있는 지점"
        ]]
      ],
      related: ["ra-criteria", "ra-preclinical", "ra-unmet"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-severity", section: "dx",
      title: "아형·중증도·예후를 어떻게 구분하는가?",
      aliases: ["DAS28", "CDAI", "SDAI", "disease activity", "prognosis", "중증도", "예후"],
      summary: "복합 질병활성도 지표(DAS28 등)로 활성도를 정량해 치료를 조정 · 예후 불량 인자는 알려져 있으나 개별 예측력은 부족",
      facts: [
        ["질병활성도 지표", "DAS28 · CDAI · SDAI", "—", "", true],
        ["활성도 구간", "관해 · 낮음 · 중등도 · 높음", "—", "", false],
        ["예후 불량 인자", "고역가 자가항체 · 조기 미란 · 높은 염증지표", "리뷰 합의", "", false],
        ["개별 예측력", "부족 — 집단 수준 연관에 머무름", "—", "", false]
      ],
      body: [
        ["활성도 정량", [
          "복합 지표(DAS28 등) — 관절 수·염증지표·환자·의사 평가를 합산",
          "관해 / 낮음 / 중등도 / 높음의 구간 구분 → treat-to-target의 목표 판정 기준",
          "정기 측정과 목표 미달 시 치료 변경 — 활성도 지표가 치료 결정의 축"
        ]],
        ["예후 층화", [
          "예후 불량 인자 — 고역가 자가항체 · 조기 미란 · 지속적 고염증 · 다수 관절 침범",
          "이 인자들은 집단 수준의 연관 · 개별 환자의 경과 예측에는 불충분",
          "difficult-to-treat RA — 치료 반응 축의 별도 층화 범주(C-02 치료 참조)"
        ]],
        ["분자 층화의 부재", [
          "활막 pathotype 기반 층화 — 제안되었으나 임상 적용 미확립",
          "복합 지표는 병태의 결과를 측정할 뿐 기전을 구분하지 못함",
          "기전 기반 층화가 이루어져야 치료 선택의 근거가 생김"
        ]]
      ],
      related: ["ra-tests", "ra-heterogeneity", "ra-response-variability"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },

    /* ── 06 치료 · 미충족 수요 ──────────────────────────────────────── */
    {
      id: "ra-standard-tx", section: "tx",
      title: "현재 표준 치료는 무엇인가?",
      aliases: ["treat-to-target", "DMARD", "methotrexate", "biologic", "JAK inhibitor", "표준 치료"],
      summary: "조기·적극 치료로 관해를 목표하는 treat-to-target · methotrexate 중심 csDMARD로 시작해 반응 불충분 시 bDMARD·tsDMARD로 단계 상승",
      facts: [
        ["치료 전략", "treat-to-target — 관해 또는 낮은 질병활성도 목표", "Smolen 2018", "2018", false],
        ["1차 치료", "methotrexate 중심 csDMARD", "가이드라인", "", false],
        ["생물학적 제제(bDMARD)", "TNF 억제제 · IL-6 수용체 억제제 · T세포 공동자극 조절 · B세포 제거", "—", "", false],
        ["표적 합성 제제(tsDMARD)", "JAK 억제제 — 경구 투여", "—", "", false],
        ["보조", "저용량 글루코코르티코이드 — 단기 가교 목적", "가이드라인", "", true]
      ],
      body: [
        ["treat-to-target", [
          "조기 적극 치료 → 질병활성도 저하 → 관해 목표",
          "정기적 활성도 측정 · 목표 미달 시 치료 변경 — 기준은 증상 완화가 아닌 목표 도달",
          "전환의 성과 — 심한 관절 변형 빈도의 대폭 감소"
        ]],
        ["약제 계열과 순서", [
          "1차 — methotrexate 중심 csDMARD · 금기 시 대체 csDMARD",
          "반응 불충분 시 — bDMARD 또는 tsDMARD 추가·전환",
          "생물학적 제제의 표적 축 — TNF · IL-6 · T세포 공동자극 · B세포",
          "글루코코르티코이드 — 효과 발현까지의 단기 가교 목적 · 장기 사용 지양"
        ]],
        ["유전학에서 약물로", [
          "trans-ethnic GWAS 101개 loci 후보유전자와 RA 승인약 표적의 상당 부분 일치",
          "이 일치 → 기존 약의 적응 확대(repurposing) 및 신약 표적 발굴의 근거",
          "표적의 확장 — 면역세포에서 기질(fibroblast)로"
        ]]
      ],
      related: ["ra-response", "ra-refractory", "ra-gwas"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"],
               ["Okada 2014, Nature", "https://doi.org/10.1038/nature12873"]],
      links: [["NIAMS — Rheumatoid Arthritis: Diagnosis, Treatment", "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis"]]
    },
    {
      id: "ra-response", section: "tx",
      title: "어떤 환자에게 효과가 있는가?",
      aliases: ["treatment response", "remission", "early treatment", "치료반응", "관해"],
      summary: "조기 치료 환자에서 관해 도달률이 높음 — 다만 어떤 계열이든 상당 비율이 일차 반응에 실패하는 구조는 공통",
      facts: [
        ["조기 치료의 이득", "관해 도달률·구조 보존에서 유리", "리뷰 합의", "", true],
        ["MTX 단독 ACR50", "약 41% — 병용 시 56–67%", "네트워크 메타분석", "—", true],
        ["bDMARD 반응 (MTX 실패 후)", "ACR20 / 50 / 70 = 61.4% / 37.8% / 18.8% — \"60·40·20 패턴\"", "메타분석 21연구, J Clin Rheumatol", "2023", false],
        ["bDMARD 반응 (1차 실패 후 교체)", "ACR20 / 50 / 70 = 48.5% / 27.3% / 12.9% — 교체할수록 하락", "동 메타분석", "2023", false],
        ["반응 예측 인자", "부재", "—", "", false]
      ],
      body: [
        ["효과가 잘 나는 조건", [
          "조기 치료 — 증상 발현 후 이른 시점의 개입에서 관해 도달률이 높음",
          "낮은 기저 질병활성도 · 미란 없음 · 짧은 이환 기간",
          "치료 순응도와 정기적 활성도 모니터링의 유지"
        ]],
        ["효과가 제한되는 조건", [
          "장기 이환·구조 손상이 이미 진행된 경우 — 염증 억제로 기능이 회복되지 않음",
          "여러 계열에 순차 실패한 이력 — 이후 반응률이 낮아지는 경향",
          "동반질환·감염 위험으로 약제 선택이 제한되는 경우"
        ]],
        ["반응률의 구조적 한계", [
          "MTX 실패 후 bDMARD의 ACR20/50/70이 약 60·40·20% — 계열이 달라도 이 패턴은 대체로 유지",
          "1차 생물학적 제제 실패 후 교체하면 48.5 / 27.3 / 12.9%로 하락 — 교체할수록 기대치가 낮아짐",
          "어떤 환자에게 어떤 계열이 들을지 사전에 알 수 없음 → 치료가 순차적 시행착오의 형태를 띰"
        ]]
      ],
      related: ["ra-standard-tx", "ra-response-variability", "ra-severity"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-response-variability", section: "tx",
      title: "치료반응이 다른 이유는 무엇인가?",
      aliases: ["response heterogeneity", "pathotype", "stratification", "반응 이질성"],
      summary: "동일 임상 진단 안에 서로 다른 분자·세포 병태가 혼재 — 활막 pathotype 차이가 계열별 반응 차이의 유력 설명",
      facts: [
        ["1차 가설", "동일 진단 내 상이한 분자·세포 병태의 혼재", "리뷰 합의", "", false],
        ["활막 pathotype", "림프구 우세 / 골수성 우세 / 저면역 섬유성", "조직·단일세포 연구", "", true],
        ["약동학 요인", "면역원성(항약물항체) · 대사 차이", "—", "", true],
        ["층화 임상시험", "pathotype 기반 층화 시도 — 검증 진행 중", "—", "", true]
      ],
      body: [
        ["병태의 혼재", [
          "임상적으로 같은 RA여도 활막의 세포 조성이 환자마다 상이",
          "B세포가 풍부한 활막 → B세포 표적 치료에 유리할 가능성 · 기전적으로 타당한 가설",
          "저면역 섬유성 활막 → 기존 면역 표적 약제의 효과가 제한될 가능성"
        ]],
        ["약제 쪽 요인", [
          "항약물항체 형성(면역원성) → 약물 농도 저하 → 이차 실패",
          "대사·투여 순응도 차이 — 특히 methotrexate에서 영향",
          "동반 약제와의 상호작용"
        ]],
        ["층화가 막힌 이유", [
          "pathotype 판정에 활막 생검 필요 → 대규모 적용 곤란",
          "혈액 지표로 pathotype을 대체할 수 있는지 미검증",
          "층화 임상시험의 규모가 작아 결론 도출에 이르지 못함"
        ]]
      ],
      related: ["ra-heterogeneity", "ra-tissue-blood", "ra-unmet"],
      papers: [["Nishide & Kumanogoh 2024", ""],
               ["Zou & Brenner 2025, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-025-01259-0"]]
    },
    {
      id: "ra-refractory", section: "tx",
      title: "불응·재발·부작용 문제는 무엇인가?",
      aliases: ["difficult-to-treat RA", "D2T RA", "refractory", "relapse", "safety", "불응", "재발"],
      summary: "difficult-to-treat RA는 RA 환자의 11.7% — 약 9명 중 1명 · 관해는 억제 상태여서 중단 시 재발이 빈번",
      facts: [
        ["difficult-to-treat RA", "EULAR 정의 제시", "EULAR", "2021", false],
        ["D2T RA 비율", "11.7% (95% CI 9.5–14.3) — 약 9명 중 1명", "메타분석 23연구·27,987명, Ann Rheum Dis", "2025", false],
        ["엄격 기준 적용 시", "b/tsDMARD 3계열 이상 실패 = 4.6%", "동 메타분석", "2025", false],
        ["집단별 차이", "b/tsDMARD 노출군 13.2% vs 일반 RA군 10.9%", "동 메타분석", "2025", false],
        ["중단 후 재발", "빈번 — 관해는 억제 상태이지 치유가 아님", "리뷰 합의", "", false],
        ["주요 안전성 이슈", "감염 · JAK 억제제의 심혈관·악성종양 신호", "—", "", true]
      ],
      body: [
        ["불응", [
          "복수 기전 약제에 순차 실패하는 환자군 존재 → difficult-to-treat RA로 별도 정의",
          "불응의 원인이 염증인지, 구조 손상에 의한 통증인지, 동반 섬유근통인지 구분 필요",
          "이 구분 없이 약제만 교체하면 효과 없는 면역억제가 누적"
        ]],
        ["재발", [
          "약제 중단 시 재발 빈번 — 관해는 억제 상태이지 치유가 아님",
          "ACPA 발현 B세포 — 약물 관해 중에도 활성 표현형으로 잔존 → 재발의 원천",
          "안전하게 감량·중단할 수 있는 환자를 식별할 지표 부재"
        ]],
        ["부작용과 안전성", [
          "감염 — 면역억제에 따르는 지속적 부담 · 고령·동반질환에서 위험 증가",
          "JAK 억제제 — 시판후 안전성 연구의 심혈관·악성종양 신호 → 처방 권고 조정",
          "장기 안전성 데이터 축적 → 약제 선택 기준의 지속적 변동"
        ]]
      ],
      related: ["ra-response-variability", "ra-unmet", "ra-complications"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-unmet", section: "tx",
      title: "아직 충족되지 않은 임상적 필요는 무엇인가?",
      aliases: ["unmet need", "prediction", "prevention", "미충족 수요"],
      summary: "치료제 확대에도 반응 예측·중단 판단·발병 예방의 세 축이 모두 미해결 — 예측 수단의 부재가 공통 병목",
      facts: [
        ["반응 예측", "약제 선택의 사전 근거 부재", "—", "", false],
        ["중단 판단", "감량·중단 가능 환자 식별 지표 부재", "—", "", false],
        ["예방", "at-risk 진행자 식별 지표 부재 → 예방 시험 설계 곤란", "—", "", false],
        ["seronegative RA", "진단·치료 근거가 상대적으로 빈약", "—", "", true]
      ],
      body: [
        ["세 가지 미충족", [
          "반응 예측 — 어떤 기전의 약을 먼저 쓸지 고를 근거 부재 → 순차적 시행착오",
          "중단 판단 — 안전하게 감량·중단할 환자를 가릴 수단 부재 → 과잉 면역억제 지속",
          "발병 예방 — at-risk 진행자 식별 불가 → 예방 임상시험 대상 특정 곤란"
        ]],
        ["소외된 환자군", [
          "seronegative RA — 진단 지연 · 임상시험 포함 비율 낮음 · 치료 근거 빈약",
          "difficult-to-treat RA — 별도 정의는 생겼으나 표적 치료 전략 미확립",
          "고령 발병 RA — 동반질환으로 약제 선택 폭이 좁음"
        ]],
        ["공통 병목", [
          "세 미충족 모두 \"어느 환자·어느 시점인가\"의 예측 문제로 수렴",
          "예측의 전제 — 병태의 분자적 층화 · 그것을 비침습적으로 측정할 수단",
          "이 지점이 오믹스 접근의 임상적 진입 근거"
        ]]
      ],
      related: ["ra-refractory", "ra-preclinical", "ra-guideline-change"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },

    /* ── 07 유전학 · 오믹스 ─────────────────────────────────────────── */
    {
      id: "ra-gwas", section: "omics",
      title: "GWAS는 어떤 유전자와 경로를 지목하는가?",
      aliases: ["GWAS", "fine-mapping", "drug target", "101 loci", "HLA"],
      summary: "GWAS 결과와 승인 약물 표적이 일치한 대표 사례 — 유전학의 약물 발굴 번역 가능성을 입증한 질환",
      facts: [
        ["보고 loci", "trans-ethnic 101개", "Okada 2014", "2014", false],
        ["MHC fine-mapping", "HLA-DRβ1 아미노산 수준까지 정련", "Raychaudhuri 2012", "2012", false],
        ["다인종 확장", "multi-ancestry GWAS로 loci 확장 · 전이성 평가", "Ishigaki 2022", "2022", false],
        ["수렴 경로", "T세포·B세포 활성화 · NF-κB · JAK-STAT", "—", "", true]
      ],
      body: [
        ["지목된 것", [
          "MHC 연관의 아미노산 수준 정련 → shared epitope의 분자적 실체 규정",
          "MHC 밖 다수의 면역 관련 loci → T세포·B세포 활성화 경로로 수렴",
          "후보유전자와 승인 약물 표적의 일치 → 유전학에서 약물로의 번역 근거"
        ]],
        ["loci에서 유전자로", [
          "대부분의 위험변이가 비암호화 영역에 위치 → 표적 유전자 지목에 추가 단계 필요",
          "fine-mapping → 인과변이 후보 축소 · eQTL colocalization → 조절 대상 유전자 지목",
          "이 단계를 거치지 않으면 \"가장 가까운 유전자\"의 오지목 위험"
        ]],
        ["약물 표적으로의 번역", [
          "유전 근거가 있는 표적 — 임상시험 성공률이 높다는 관찰",
          "기존 약의 적응 확대(repurposing) 후보 도출",
          "표적의 확장 — 면역세포에서 기질(fibroblast)로"
        ]]
      ],
      related: ["ra-genetics", "ra-variant-celltype", "ra-ancestry"],
      papers: [["Okada 2014, Nature", "https://doi.org/10.1038/nature12873"],
               ["Raychaudhuri 2012, Nat Genet", "https://doi.org/10.1038/ng.1076"],
               ["Ishigaki 2022, Nat Genet", "https://doi.org/10.1038/s41588-022-01032-z"]]
    },
    {
      id: "ra-variant-celltype", section: "omics",
      title: "위험변이는 어떤 세포에서 작동하는가?",
      aliases: ["cell type", "colocalization", "sc-eQTL", "FcγRIIB", "B cell tolerance", "작동 세포"],
      summary: "위험변이의 작동 세포는 T·B세포에 집중되나 기질세포로 확장 중 — 단일세포 참조 + colocalization이 이를 직접 검증하는 경로",
      facts: [
        ["1차 수렴 세포", "T세포 · B세포 — 면역 활성화 경로", "GWAS 후속 분석", "", true],
        ["확장 중인 축", "활막 기질세포(fibroblast)", "Croft 2019 · Zou & Brenner 2025", "2019–", false],
        ["검증 수단", "sc-eQTL · colocalization · 개방염색질(caQTL)", "—", "", false],
        ["B세포 tolerance 조절자", "FcγRIIB · MZ B세포 · BAFF · 성호르몬", "concepts 페이지", "", false]
      ],
      body: [
        ["세포유형 지목의 방법", [
          "위험변이의 대부분이 비암호화 조절 영역 → 어느 세포에서 열려 있는지가 관건",
          "세포유형별 개방염색질·eQTL과의 중첩 검정 → 작동 세포 후보 축소",
          "colocalization — GWAS 신호와 QTL 신호의 인과변이 공유 여부 판정"
        ]],
        ["B세포 축", [
          "자가항체의 발병 수년 전 출현 + B세포 제거 시 질병 호전 → B세포를 병인 중심에 배치",
          "ACPA 발현 B세포의 약물 관해 중 잔존(활성 표현형) → 재발의 원천 → tolerance 회복이 근본 표적",
          "억제수용체·MZ B세포·BAFF·성호르몬이 tolerance의 조절 축"
        ]],
        ["기질세포 축", [
          "FAP⁺ 활막 fibroblast — 염증·파괴를 능동 매개 → 위험변이 작동 후보 세포로 부상",
          "면역세포 중심 해석만으로는 기질 표적치료의 근거를 설명하지 못함",
          "면역·기질 양쪽을 포함한 참조 아틀라스가 검증의 전제"
        ]]
      ],
      related: ["ra-gwas", "ra-singlecell", "ra-mucosal-origin"],
      papers: [["Croft 2019, Nature", "https://doi.org/10.1038/s41586-019-1263-7"],
               ["Scherer 2022", ""], ["Espéli 2019", ""], ["Barlev 2022", ""]],
    },
    {
      id: "ra-singlecell", section: "omics",
      title: "bulk와 single-cell 연구는 무엇을 보여주었는가?",
      aliases: ["single-cell", "scRNA-seq", "synovium", "FAP", "THY1", "bulk", "deconvolution"],
      summary: "bulk에서 혼재로 보이던 활막이 단일세포에서 기능적 subset으로 분리 — 병태 표적이 면역세포에서 기질세포로 확장",
      facts: [
        ["핵심 발견", "FAP⁺THY1⁺(염증) / FAP⁺THY1⁻(파괴) subset 분리", "Croft 2019", "2019", false],
        ["bulk의 한계", "세포 조성 변화와 발현 변화의 교란", "—", "", false],
        ["보완 수단", "cell-type deconvolution — 참조 아틀라스 의존", "—", "", false],
        ["진행 중", "임상표현형 → 분자·세포 subgroup 재분류", "Nishide & Kumanogoh 2024", "2024", true]
      ],
      body: [
        ["bulk가 놓친 것", [
          "bulk 발현 변화 — 세포 조성 변화인지 세포당 발현 변화인지 구분 불가",
          "소수 세포집단의 신호가 다수 집단에 희석되어 미검출",
          "deconvolution으로 부분 보완 가능하나 참조 아틀라스의 품질에 의존"
        ]],
        ["single-cell이 바꾼 것", [
          "혼재로 보이던 활막 세포 → 기능적으로 구분되는 subset으로 분리",
          "관점 전환의 출처 — fibroblast는 수동적 구조세포가 아닌 능동적 병원체",
          "염증과 파괴의 분리 제어 근거 → 기질 표적치료의 출발점"
        ]],
        ["남은 과제", [
          "subset 정의의 연구 간 불일치 — 명명과 경계가 통일되지 않음",
          "공간 정보의 부재 — 어느 subset이 어디에 위치하는지는 공간전사체가 필요",
          "종단 관찰 부재 — 치료 전후 subset 변화의 추적 데이터 부족"
        ]]
      ],
      related: ["ra-variant-celltype", "ra-progression", "ra-tissue-blood"],
      papers: [["Croft 2019, Nature", "https://doi.org/10.1038/s41586-019-1263-7"],
               ["Zou & Brenner 2025, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-025-01259-0"]]
    },
    {
      id: "ra-tissue-blood", section: "omics",
      title: "조직·혈액 바이오마커는 얼마나 일치하는가?",
      aliases: ["paired sample", "biopsy", "surrogate marker", "조직", "혈액", "대리지표"],
      summary: "활막이 병변 조직이나 생검 의존으로 접근성이 낮음 — 혈액 지표가 활막 상태를 얼마나 반영하는지는 미검증",
      facts: [
        ["병변 조직", "활막 — 생검 필요 · 대규모 코호트 확보 곤란", "—", "", false],
        ["혈액 지표", "접근 용이 · 활막 반영도 미검증", "—", "", false],
        ["필요 설계", "paired sample (동일 환자의 활막 + 혈액)", "—", "", false],
        ["일치도 추정치", "확인 필요 — 체계적 비교 연구 부족", "—", "", true]
      ],
      body: [
        ["왜 문제인가", [
          "활막 — 생검 필요 → 접근성 낮음 · 반복 채취와 대규모 코호트 구축 곤란",
          "혈액 — 반복 채취 가능하나 활막 상태 반영도가 검증되지 않음",
          "이 간극 → 예후·치료반응 마커 개발의 실질적 병목"
        ]],
        ["검증에 필요한 것", [
          "동일 환자의 활막·혈액 짝지음(paired sample) 설계",
          "치료 전후 종단 채취 — 변화의 대응 여부까지 확인",
          "충분한 표본 — 이질성이 큰 질환이라 소규모로는 결론 불가"
        ]],
        ["대안 경로", [
          "영상(초음파·MRI)을 활막 상태의 대리지표로 활용하는 접근",
          "순환 세포·세포외소포 등 조직 유래 신호를 혈액에서 포착하는 시도",
          "어느 경로든 활막 기준(ground truth)과의 대조 검증이 전제"
        ]]
      ],
      related: ["ra-singlecell", "ra-response-variability", "ra-ancestry"],
      papers: [["Zou & Brenner 2025, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-025-01259-0"]]
    },
    {
      id: "ra-ancestry", section: "omics",
      title: "ancestry 차이는 무엇인가?",
      aliases: ["ancestry", "transferability", "PRS", "multi-ancestry", "trans-ethnic", "인종"],
      summary: "RA GWAS는 다인종 확장이 이루어진 편이나 표본은 여전히 유럽계 편중 — 한국인에서의 효과 전이성과 PRS 성능은 별도 검증 필요",
      facts: [
        ["다인종 확장", "multi-ancestry GWAS 수행 — 전이성 평가 가능", "Ishigaki 2022", "2022", false],
        ["표본 편중", "유럽계 중심 — 동아시아 상대적 부족", "—", "", true],
        ["HLA 대립유전자 빈도", "인종 간 차이 — shared epitope 구성도 상이", "—", "", true],
        ["PRS 전이성", "확인 필요 — 한국인 코호트 검증 미완", "—", "", true]
      ],
      body: [
        ["무엇이 다른가", [
          "위험 대립유전자 빈도와 LD 구조가 인종 간 상이 → 동일 변이의 효과 추정치가 이동",
          "HLA 대립유전자 빈도 차이 → shared epitope의 구성과 기여도가 인종별로 다름",
          "환경 노출(흡연율 등)의 분포 차이도 겹쳐 순수 유전 효과 분리가 어려움"
        ]],
        ["다인종 GWAS의 성과", [
          "RA는 자가면역질환 중 trans-ethnic 분석이 비교적 일찍 이루어진 편",
          "인종 공통 신호와 인종 특이 신호의 분리 · fine-mapping 해상도 향상"
        ]],
        ["남은 편중", [
          "표본은 여전히 유럽계 중심 → 동아시아 검정력 부족",
          "유럽계 기반 PRS의 한국인 적용 성능 — 별도 검증 없이 사용 금물",
          "이 편중이 한국인 코호트 기반 연구의 차별점이 되는 지점"
        ]]
      ],
      related: ["ra-gwas", "ra-genetics", "ra-tissue-blood"],
      papers: [["Ishigaki 2022, Nat Genet", "https://doi.org/10.1038/s41588-022-01032-z"],
               ["Okada 2014, Nature", "https://doi.org/10.1038/nature12873"]]
    },

    /* ── D-02 최신 동향 ─────────────────────────────────────────────── */
    {
      id: "ra-guideline-change", section: "now",
      title: "진료 권고는 최근 어떻게 바뀌었는가?",
      aliases: ["guideline", "EULAR", "ACR", "difficult-to-treat", "D2T", "진료 권고", "가이드라인"],
      summary: "EULAR 치료 권고는 3년 주기 개정(2022 → 2025) · difficult-to-treat RA 정의(2021) 도입으로 불응 환자군이 별도 범주로 규정됨",
      facts: [
        ["D2T RA 정의", "EULAR 정의 제시", "EULAR", "2021", false],
        ["분류 기준", "ACR/EULAR 2010 — 이후 개정 없음", "ACR/EULAR", "2010", true],
        ["EULAR 치료 권고", "2022 update (Ann Rheum Dis) → 2025 update 발행 · 3년 주기 개정", "EULAR", "2022 / 2025", true],
        ["치료 전략", "treat-to-target 유지 · 목표 설정과 감량 지침이 정련", "가이드라인", "", true],
        ["ACR 치료 권고", "2021 guideline (직전 2015) — MTX 단독요법 1차 강력 권고 · 목표는 낮은 질병활성도 또는 관해", "Fraenkel 2021, ACR", "2021", false],
        ["ACR 권고의 근거 수준", "44개 권고 중 strong은 7개 — 나머지는 conditional(근거 불충분)", "Fraenkel 2021", "2021", false]
      ],
      body: [
        ["무엇이 바뀌었나", [
          "difficult-to-treat RA — 복수 기전 약제에 실패한 환자군을 별도 범주로 정의",
          "정의의 효과 — 진료에서는 원인 재평가(염증 vs 구조 손상 vs 동반 섬유근통)를 요구, 연구에서는 명확한 대상군 확보",
          "treat-to-target의 뼈대는 유지 · 목표 도달 후 감량·중단 지침이 정련되는 방향"
        ]],
        ["바뀌지 않은 것", [
          "진단 분류 기준 — ACR/EULAR 2010 이후 개정 없음",
          "1차 치료의 위치 — methotrexate 중심 csDMARD 유지",
          "약제 선택 순서 — 여전히 근거가 약해 순차적 시도에 의존"
        ]],
        ["갱신 시 확인할 것", [
          "ACR·EULAR 각각의 최신판 발행 연도와 주요 변경점",
          "국내 진료지침(대한류마티스학회)의 반영 여부와 시차",
          "보험 급여 기준 변경 — 국내에서는 실제 처방 순서를 좌우"
        ]]
      ],
      related: ["ra-drug-update", "ra-standard-tx", "ra-refractory"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-drug-update", section: "now",
      title: "새 치료제와 안전성 정보는 무엇인가?",
      aliases: ["JAK inhibitor", "safety", "ORAL Surveillance", "biosimilar", "신약", "안전성"],
      summary: "ORAL Surveillance(NEJM 2022) — tofacitinib의 MACE·악성종양 위험이 TNF 억제제 대비 높아 비열등성 미충족 · 허가사항과 처방 권고 조정으로 이어짐",
      facts: [
        ["안전성 신호", "tofacitinib — MACE·악성종양 위험이 TNF 억제제 대비 높음 · 비열등성 미충족", "Ytterberg 2022, N Engl J Med 386:316–326", "2022", false],
        ["연구 설계", "3b/4상 시판후 비열등성 RCT · ≥50세 + 심혈관 위험인자 ≥1개 · tofacitinib 5mg/10mg BID vs TNFi (1:1:1)", "ORAL Surveillance", "2022", false],
        ["조치", "허가사항·처방 권고 조정 — 흡연·남성·65세 초과·심혈관 병력·악성종양 병력 등 고위험군에서 사용 제한", "규제기관", "", true],
        ["계열 확장", "TNF · IL-6 · T세포 공동자극 · B세포 · JAK", "—", "", false],
        ["바이오시밀러", "확대 — 접근성과 비용 구조에 영향", "—", "", true],
        ["개발 중 표적", "기질(fibroblast) 표적 — 전임상·초기 단계", "Zou & Brenner 2025", "2025", false]
      ],
      body: [
        ["안전성 쪽 변화", [
          "JAK 억제제 — 시판후 무작위 안전성 연구에서 심혈관·악성종양 신호 보고",
          "결과 → 허가사항 및 처방 권고 조정 · 고령·심혈관 위험군에서 사용 제한",
          "장기 안전성 데이터 축적이 계속되므로 이 항목은 지속 갱신 대상"
        ]],
        ["약제 쪽 변화", [
          "바이오시밀러 확대 → 접근성 개선과 비용 구조 변화",
          "새로운 기전의 승인 약제 — 확인 필요 · 최근 승인 목록 대조 요망",
          "기질(fibroblast) 표적 — 아직 전임상·초기 단계 · 임상 진입 여부가 향후 관전 포인트"
        ]],
        ["갱신 시 확인할 것", [
          "국내 허가·급여 등재 현황과 해외와의 시차",
          "안전성 경고 갱신 — 규제기관 공지 기준",
          "새 계열의 3상 결과 발표 여부"
        ]]
      ],
      related: ["ra-guideline-change", "ra-refractory", "ra-standard-tx"],
      papers: [["Zou & Brenner 2025, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-025-01259-0"]]
    },
    {
      id: "ra-new-data", section: "now",
      title: "새 코호트·오믹스 데이터는 무엇이 생겼는가?",
      aliases: ["cohort", "atlas", "biobank", "reference", "새 데이터", "코호트"],
      summary: "활막 조직 단일세포 아틀라스와 다인종 RA GWAS가 공개되어 참조 기준으로 활용 가능 — 국내 코호트와의 연결이 남은 과제",
      facts: [
        ["활막 아틀라스", "활막 조직 단일세포 참조 — 기질·면역 subset 포함", "Croft 2019 등", "2019–", false],
        ["다인종 GWAS", "multi-ancestry RA GWAS 공개", "Ishigaki 2022", "2022", false],
        ["공개 QTL 자원", "GTEx · 면역세포 eQTL · sc-eQTL 데이터셋", "—", "", true],
        ["국내 코호트", "확인 필요 — 가용 한국인 RA 코호트·바이오뱅크 현황", "—", "", true]
      ],
      body: [
        ["참조로 쓸 수 있게 된 것", [
          "활막 조직 단일세포 아틀라스 — 기질세포 subset을 참조 기준으로 활용 가능",
          "다인종 GWAS 요약통계 — 인종 간 효과 비교와 fine-mapping의 재료",
          "공개 eQTL·sc-eQTL 자원 — colocalization 분석의 상대 데이터"
        ]],
        ["아직 드문 것", [
          "활막·혈액 paired 검체 — 공개 자원이 희소",
          "종단(치료 전후) 단일세포 데이터 — 반응 기전 관찰의 전제",
          "동아시아 기반 대규모 RA 오믹스 코호트"
        ]],
        ["갱신 시 확인할 것", [
          "새로 공개된 아틀라스·요약통계의 인종 구성과 표본 규모",
          "데이터 접근 절차(DAC 승인·IRB)와 소요 기간",
          "국내 코호트·바이오뱅크의 신규 개방 여부"
        ]]
      ],
      related: ["ra-new-method", "ra-ancestry", "ra-tissue-blood"],
      papers: [["Ishigaki 2022, Nat Genet", "https://doi.org/10.1038/s41588-022-01032-z"],
               ["Croft 2019, Nature", "https://doi.org/10.1038/s41586-019-1263-7"]]
    },
    {
      id: "ra-new-method", section: "now",
      title: "새로 쓸 수 있게 된 분석 기법은 무엇인가?",
      aliases: ["single-cell", "spatial transcriptomics", "sc-eQTL", "colocalization", "분석 기법", "방법론"],
      summary: "단일세포·공간전사체와 sc-eQTL·colocalization의 결합 — 위험변이의 작동 세포를 조직 맥락에서 직접 검증할 수 있게 된 것이 핵심 변화",
      facts: [
        ["단일세포", "활막 세포의 기능적 subset 분리", "Croft 2019", "2019", false],
        ["공간전사체", "subset의 조직 내 위치 정보 확보", "—", "", true],
        ["sc-eQTL", "세포유형별 유전자 조절 효과 측정", "—", "", false],
        ["colocalization", "GWAS 신호와 QTL 신호의 인과변이 공유 검정", "—", "", false],
        ["다인종 fine-mapping", "LD 구조 차이를 이용한 인과변이 해상도 향상", "Ishigaki 2022", "2022", false]
      ],
      body: [
        ["세포 해상도", [
          "단일세포 — bulk에서 혼재로 보이던 활막 세포를 기능적 subset으로 분리",
          "공간전사체 — subset이 조직 어디에 위치하는지까지 확보 · 세포 간 상호작용 맥락 복원",
          "두 기법의 결합 → 면역·기질 상호작용을 조직 구조 위에서 관찰 가능"
        ]],
        ["유전–세포 연결", [
          "sc-eQTL — 세포유형별 유전자 조절 효과 측정 · bulk eQTL이 놓치던 소수 집단 신호 포착",
          "colocalization — GWAS 신호와 QTL 신호가 같은 인과변이를 공유하는지 판정",
          "다인종 fine-mapping — LD 구조 차이를 이용해 인과변이 후보 축소"
        ]],
        ["갱신 시 확인할 것", [
          "새 기법의 검증 수준 — 단일 데이터셋인지 다중 벤치마크를 거쳤는지",
          "필요 표본 규모와 비용 — 국내 코호트로 적용 가능한 수준인지",
          "참조 아틀라스 의존 기법의 경우 참조의 인종 구성"
        ]]
      ],
      related: ["ra-new-data", "ra-singlecell", "ra-variant-celltype"],
      papers: [["Croft 2019, Nature", "https://doi.org/10.1038/s41586-019-1263-7"],
               ["Ishigaki 2022, Nat Genet", "https://doi.org/10.1038/s41588-022-01032-z"]]
    }
  ];


  /* ── glossary ───────────────────────────────────────────────────────── */
  const glossaryTerms = {
    "hla": { key: "hla", definition: "Human Leukocyte Antigen (MHC). 펩타이드를 T세포에 제시하는 분자로, 자가면역 최강 유전 위험 영역." },
    "shared epitope": { key: "se", definition: "RA 위험을 공유하는 HLA-DRB1 아미노산 모티프(peptide-binding groove)." },
    "acpa": { key: "acpa", definition: "Anti-citrullinated protein antibody(anti-CCP). RA 진단·분류의 핵심 자가항체." },
    "citrullination": { key: "citr", definition: "단백질 arginine→citrulline 변형. RA 자가항체(ACPA)의 표적." },
    "fap": { key: "fap", definition: "Fibroblast activation protein. RA 병원성 활막 fibroblast의 표지." },
    "thy1": { key: "thy1", definition: "활막 fibroblast subset을 가르는 표면 표지 — THY1⁺(염증) vs THY1⁻(파괴)." },
    "rankl": { key: "rankl", definition: "Receptor activator of NF-κB ligand. osteoclast를 활성화해 골 파괴를 유도." },
    "osteoclast": { key: "oc", definition: "골을 흡수하는 세포. 만성 염증이 활성화하면 골미란을 일으킴." },
    "dmard": { key: "dmard", definition: "Disease-modifying antirheumatic drug. 질병 경과를 바꾸는 RA 핵심 치료제." },
    "dysbiosis": { key: "dys", definition: "미생물 군집 구성의 불균형. RA에서 점막 트리거 후보로 지목." },
    "prs": { key: "prs", definition: "Polygenic risk score. 다수 변이 효과를 합산한 개인 유전 위험 점수." },
    "colocalization": { key: "coloc", definition: "GWAS 신호와 QTL 신호가 같은 인과변이를 공유하는지 검정하는 방법." }
  };
  const glossaryPattern = /(^|[^A-Za-z0-9가-힣])(HLA|shared epitope|ACPA|citrullination|FAP|THY1|RANKL|osteoclast|DMARD|dysbiosis|PRS|colocalization)(?=$|[^A-Za-z0-9])/gi;


  return { meta: meta, acts: acts, sections: sections, articles: articleList, glossaryTerms: glossaryTerms, glossaryPattern: glossaryPattern };
})();
