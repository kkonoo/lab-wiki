window.DISEASE = (function () {
  const meta = {
    id: "sle",
    title: "Systemic Lupus Erythematosus (SLE)",
    domain: "Autoimmune",
    updated: "2026-08-06"
  };

  /* ── 4 blocks ────────────────────────────────────────────────────────── */
  const acts = [
    { id: "A", num: "01", en: "DEFINITION · EPIDEMIOLOGY", title: "무엇인가", accent: "#6f3a55",
      blurb: "정의·분류 · 감별 · 아형 · 유병률 · 질병부담 · 성별과 인종 편중",
      sections: ["def", "epi"] },
    { id: "B", num: "02", en: "CAUSE · COURSE", title: "왜·어떻게", accent: "#315d78",
      blurb: "자가항원 청소 실패 · 보체 · EBV · type I IFN 축 · 재발과 관해의 반복",
      sections: ["risk", "course"] },
    { id: "C", num: "03", en: "CLINICAL", title: "임상", accent: "#94553b",
      blurb: "다장기 침범의 진단 · 2019 EULAR/ACR 기준 · HCQ와 생물학적 제제 · 미해결 수요",
      sections: ["dx", "tx"] },
    { id: "D", num: "04", en: "RESEARCH", title: "연구", accent: "#1f5d43",
      blurb: "약 100개 loci의 세포타입 귀속 · 단일세포 eQTL · 진료 권고와 신약의 최근 변화",
      sections: ["omics", "now"] }
  ];

  /* ── 8 sections ──────────────────────────────────────────────────────── */
  const sections = {
    def: { number: "01", title: "정의 · 분류", act: "A",
      lead: "정의 · 유사 질환과의 감별 · 아형 구분",
      questions: [
        { q: "어떻게 정의하고 분류하는가?", note: "자가항체 → 면역복합체 → 다장기 침범", article: "sle-definition" },
        { q: "비슷한 질환과 무엇이 다른가?", note: "RA · Sjögren · MCTD · 약물유발 루푸스", article: "sle-differential" },
        { q: "주요 아형은 무엇인가?", note: "장기 침범 패턴 → 신장 침범 여부가 최대 분기", article: "sle-subtypes" }
      ] },
    epi: { number: "02", title: "역학 · 질병부담", act: "A",
      lead: "유병률·발생률 · 추세 · 인구집단별 분포 · 사회경제적 부담",
      questions: [
        { q: "세계와 한국에서 얼마나 흔한가?", note: "유병률 → 발생률 → 환자 수", article: "sle-prevalence" },
        { q: "발생률·유병률은 증가하는가?", note: "진단 향상·생존 연장 → 유병 인구 증가", article: "sle-trend" },
        { q: "어떤 연령·성별·집단에서 많이 발생하는가?", note: "가임기 여성 → 인종 → 사회경제적 층", article: "sle-demographics" },
        { q: "질병부담과 사회경제적 영향은 얼마나 큰가?", note: "젊은 발병 → 장기 손상 누적 → 노동 손실", article: "sle-burden" }
      ] },
    risk: { number: "01", title: "원인 · 위험인자", act: "B",
      lead: "유전·환경의 기여 · 개시 부위 · 보호요인과 촉발요인",
      questions: [
        { q: "주요 위험인자는 무엇인가?", note: "여성 · EBV · UV · 흡연 · 특정 인종", article: "sle-riskfactors" },
        { q: "유전과 환경은 각각 얼마나 기여하는가?", note: "보체 결핍(희귀) → C4 copy number → 폴리제닉", article: "sle-genetics" },
        { q: "질병은 어떤 장기·조직·세포에서 시작되는가?", note: "특정 장기 아님 — 자가항원 청소 실패에서 시작", article: "sle-origin" },
        { q: "보호요인과 촉발요인은 무엇인가?", note: "자외선 차단 · 금연 → 감염 · 임신 · 약물", article: "sle-triggers" }
      ] },
    course: { number: "02", title: "발병 · 진행", act: "B",
      lead: "임상 전 단계 · 진행 경로 · 표현형 이질성 · 합병증과 사망 원인",
      questions: [
        { q: "발병 전에는 어떤 변화가 일어나는가?", note: "자가항체 선행 → 항체 종류 누적 → 발현", article: "sle-preclinical" },
        { q: "초기에서 말기까지 어떤 경로를 밟는가?", note: "재발–관해 반복 → 장기 손상 누적", article: "sle-progression" },
        { q: "환자마다 진행속도와 표현형이 다른 이유는 무엇인가?", note: "자가항체 조합 · IFN 활성 · 인종·유전 배경", article: "sle-heterogeneity" },
        { q: "주요 합병증과 사망 원인은 무엇인가?", note: "신부전 · 감염 · 심혈관 — 이중 정점", article: "sle-complications" }
      ] },
    dx: { number: "01", title: "진단 · 분류", act: "C",
      lead: "초기 증상 · 진단 기준 · 바이오마커 · 조기진단의 장벽 · 중증도와 예후 구분",
      questions: [
        { q: "초기 증상은 무엇인가?", note: "피로·발열·관절통 → 뺨 발진 · 광과민", article: "sle-symptoms" },
        { q: "현재 진단 기준은 무엇인가?", note: "2019 EULAR/ACR — ANA 관문 + 가중 합산 ≥10점", article: "sle-criteria" },
        { q: "어떤 검사와 바이오마커를 사용하는가?", note: "ANA → anti-dsDNA·anti-Sm → 보체 C3·C4", article: "sle-tests" },
        { q: "조기진단이 어려운 이유는 무엇인가?", note: "비특이 다장기 증상 · ANA의 낮은 특이도", article: "sle-dxdelay" },
        { q: "아형·중증도·예후를 어떻게 구분하는가?", note: "SLEDAI 등 활성도 · 장기 손상 지수", article: "sle-severity" }
      ] },
    tx: { number: "02", title: "치료 · 미충족 수요", act: "C",
      lead: "표준 치료 · 반응 이질성 · 불응과 재발 · 남은 임상 수요",
      questions: [
        { q: "현재 표준 치료는 무엇인가?", note: "HCQ 전 환자 → 스테로이드 감량 → 면역억제·생물학적 제제", article: "sle-standard-tx" },
        { q: "어떤 환자에게 효과가 있는가?", note: "신장 외 SLE vs 루푸스 신염의 전략 분리", article: "sle-response" },
        { q: "치료반응이 다른 이유는 무엇인가?", note: "IFN 우세 · 자가항체 조합 · 장기별 병태 차이", article: "sle-response-variability" },
        { q: "불응·재발·부작용 문제는 무엇인가?", note: "재발 반복 · 스테로이드 독성 누적 · 감염", article: "sle-refractory" },
        { q: "아직 충족되지 않은 임상적 필요는 무엇인가?", note: "신약 빈곤 · 신경정신 루푸스 · 층화 부재", article: "sle-unmet" }
      ] },
    omics: { number: "01", title: "유전학 · 오믹스", act: "D",
      lead: "GWAS 신호 · 작동 세포 · bulk와 single-cell · 조직·혈액 대응 · ancestry 편중",
      questions: [
        { q: "GWAS는 어떤 유전자와 경로를 지목하는가?", note: "HLA · 보체 C4 → IFN·핵산 감지 경로", article: "sle-gwas" },
        { q: "위험변이는 어떤 세포에서 작동하는가?", note: "classical monocyte의 IFN 반응 유전자에 수렴", article: "sle-variant-celltype" },
        { q: "bulk와 single-cell 연구는 무엇을 보여주었는가?", note: "IFN signature → 세포별 분해 → 환자 층화", article: "sle-singlecell" },
        { q: "조직·혈액 바이오마커는 얼마나 일치하는가?", note: "PBMC 중심 · 신장 등 표적조직 데이터 부족", article: "sle-tissue-blood" },
        { q: "ancestry 차이는 무엇인가?", note: "비유럽계에서 유병·중증 높으나 데이터는 반대로 부족", article: "sle-ancestry" }
      ] },
    now: { number: "02", title: "최신 동향", act: "D",
      lead: "진료 권고 · 새 치료제와 안전성 · 새 코호트와 데이터 · 새 분석 기법",
      questions: [
        { q: "진료 권고는 최근 어떻게 바뀌었는가?", note: "EULAR 2023 update — 조기 생물학적 제제·스테로이드 감량", article: "sle-guideline-change" },
        { q: "새 치료제와 안전성 정보는 무엇인가?", note: "anifrolumab · voclosporin · belimumab 적응 확대", article: "sle-drug-update" },
        { q: "새 코호트·오믹스 데이터는 무엇이 생겼는가?", note: "SLE 단일세포 eQTL 자원 · 다인종 코호트", article: "sle-new-data" },
        { q: "새로 쓸 수 있게 된 분석 기법은 무엇인가?", note: "sc-eQTL · 자극조건 eQTL · CAR-T 관찰", article: "sle-new-method" }
      ] }
  };

  /* ── articles ────────────────────────────────────────────────────────── */
  const articleList = [
    /* ── A-01 정의 · 분류 ────────────────────────────────────────────── */
    {
      id: "sle-definition", section: "def",
      title: "어떻게 정의하고 분류하는가?",
      aliases: ["systemic lupus erythematosus", "전신홍반루푸스", "루푸스", "definition", "immune complex"],
      summary: "핵산복합체에 대한 자가항체와 면역복합체 침착으로 다장기를 침범하는 만성 자가면역질환 — 단일 표적 장기가 없다는 점이 정의의 핵심",
      facts: [
        ["질환 분류", "전신 자가면역질환 — 다장기 침범", "—", "", false],
        ["핵심 자가항원", "핵산복합체 (DNA · RNP 등)", "Tsokos 2011", "2011", false],
        ["핵심 기전 축", "자가항원 청소 실패 → 자가항체 → 면역복합체 → type I IFN", "Tsokos 2011 · Kaul 2016", "2016", false],
        ["ICD-10", "M32", "WHO ICD-10", "", true]
      ],
      body: [
        ["무엇을 SLE라 부르는가", [
          "핵 안의 핵산복합체(DNA·RNP)를 표적하는 자가항체가 만들어지고, 면역복합체가 조직에 침착해 염증을 일으키는 질환",
          "표적 장기가 하나로 고정되지 않음 — 피부·관절·신장·혈액·신경계·장막 어디든 침범 가능",
          "이 다장기성이 진단·분류·치료를 모두 어렵게 만드는 근원"
        ]],
        ["핵심 기전 축", [
          "apoptotic debris 청소 실패 → 자가항원 노출 증가 → 핵산복합체에 대한 자가항체 생성",
          "면역복합체 형성 → 조직 침착 → 보체 활성화 → 염증·조직손상",
          "핵산 감지 경로를 통한 type I interferon 상승 — bulk·단일세포에서 일관되게 관찰되는 hallmark"
        ]],
        ["분류 체계", [
          "1차 축은 침범 장기 — 특히 신장 침범(lupus nephritis) 여부가 예후와 치료를 가르는 최대 분기",
          "질병활성도(활성·저활성·관해)와 누적 장기손상은 별개의 축으로 각각 측정",
          "분자 수준 재분류(IFN 우세형 등)는 제안 단계 · 임상 적용 미확립"
        ]]
      ],
      related: ["sle-differential", "sle-subtypes", "sle-criteria"],
      papers: [["Tsokos 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1100359"],
               ["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"]]
    },
    {
      id: "sle-differential", section: "def",
      title: "비슷한 질환과 무엇이 다른가?",
      aliases: ["differential diagnosis", "감별진단", "Sjögren", "MCTD", "drug-induced lupus", "RA"],
      summary: "다장기 침범과 항핵항체 프로파일이 감별의 축 — 특히 anti-dsDNA·anti-Sm의 높은 특이도가 다른 결합조직질환과 SLE를 가르는 지점",
      facts: [
        ["류마티스 관절염 (RA)", "관절 중심 · 미란성 · ACPA 양성 · SLE 관절염은 대개 비미란성", "—", "", false],
        ["Sjögren 증후군", "건조 증상 중심 · anti-Ro/La 우세", "—", "", false],
        ["혼합결합조직병 (MCTD)", "고역가 anti-U1RNP · 여러 질환 소견 중복", "—", "", false],
        ["약물유발 루푸스", "원인 약물 중단 시 호전 · anti-histone 우세 · 신장·신경 침범 드묾", "—", "", true]
      ],
      body: [
        ["다른 결합조직질환과의 감별", [
          "RA — 관절 중심이고 미란을 만듦 · SLE 관절염은 통증이 뚜렷해도 대개 비미란성",
          "Sjögren 증후군 — 건조 증상이 중심이고 anti-Ro/La가 우세 · SLE와 중복되는 경우도 흔함",
          "혼합결합조직병(MCTD) — 고역가 anti-U1RNP와 여러 질환 소견의 중복이 특징"
        ]],
        ["자가항체로 가르기", [
          "ANA는 감도가 높으나 특이도가 낮음 — 건강인·다른 질환에서도 양성 → 단독 해석 금물",
          "anti-dsDNA·anti-Sm은 SLE에 상대적으로 특이적 → 감별의 결정적 단서",
          "보체 C3·C4 소모는 활동성 SLE를 시사 — 다른 결합조직질환에서는 덜 뚜렷"
        ]],
        ["감별이 어려운 상황", [
          "초기에는 피로·관절통 등 비특이 증상만 있어 다른 질환과 구분되지 않는 구간 존재",
          "약물유발 루푸스 — 원인 약물 중단 시 호전되고 신장·신경 침범이 드묾",
          "감염·악성종양이 SLE 유사 소견을 만들 수 있어 배제가 필요"
        ]]
      ],
      related: ["sle-definition", "sle-tests", "sle-dxdelay"],
      papers: [["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"]]
    },
    {
      id: "sle-subtypes", section: "def",
      title: "주요 아형은 무엇인가?",
      aliases: ["subtype", "아형", "lupus nephritis", "neuropsychiatric lupus", "cutaneous lupus"],
      summary: "신장 침범(lupus nephritis) 여부가 예후와 치료를 가르는 최대 분기 — SLE 환자의 30–50%가 경과 중 신염으로 진행",
      facts: [
        ["루푸스 신염 — 전체", "SLE 환자의 25–60%", "리뷰", "—", true],
        ["루푸스 신염 — 진단 시점", "15–30%", "리뷰", "—", true],
        ["루푸스 신염 — 경과 중", "30–50%", "리뷰", "—", true],
        ["신경정신 루푸스", "예후 불량 · 진단 기준 자체가 불확실", "—", "", true],
        ["피부 루푸스", "전신 침범 없이 피부에 국한되는 형태도 존재", "—", "", true]
      ],
      body: [
        ["장기 침범 기준 아형", [
          "루푸스 신염 — 예후와 치료 전략을 가르는 최대 분기 · 신부전으로 직결될 수 있는 유일한 흔한 침범",
          "신경정신 루푸스 — 두통·인지장애부터 발작·정신병까지 스펙트럼이 넓고 진단 기준 자체가 불확실",
          "피부·관절 중심형 — 전신 침범 없이 상대적으로 경한 경과"
        ]],
        ["다른 분류 축", [
          "발병 연령 — 소아 발병 SLE는 장기 침범이 더 흔하고 중증 경향",
          "약물유발 루푸스 — 원인 약물 중단으로 호전되므로 별개 범주",
          "신생아 루푸스 — 모체 anti-Ro/La의 태반 통과에 의한 별개 병태"
        ]],
        ["분자 아형 시도", [
          "type I IFN 활성 정도로 나누는 시도 — 치료 표적(anifrolumab)과 직접 연결되는 축",
          "자가항체 조합에 따른 군집화 — 장기 침범 패턴과의 연관 보고",
          "어느 축도 아직 임상 의사결정에 쓰일 만큼 검증되지 않음"
        ]]
      ],
      related: ["sle-definition", "sle-complications", "sle-heterogeneity"],
      papers: [["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"]]
    },

    /* ── A-02 역학 · 질병부담 ────────────────────────────────────────── */
    {
      id: "sle-prevalence", section: "epi",
      title: "세계와 한국에서 얼마나 흔한가?",
      aliases: ["prevalence", "incidence", "유병률", "발생률", "epidemiology"],
      summary: "전 세계 유병률 10만명당 43.7(약 341만명) · 발생률 10만명당 5.14/년 — RA보다 훨씬 드물지만 젊은 여성에 집중되어 부담이 큼",
      facts: [
        ["전 세계 유병률", "10만명당 43.7 (95% 범위 15.9–108.9) · 약 341만명", "Global epidemiology of SLE, Ann Rheum Dis", "2023", false],
        ["전 세계 발생률", "10만인년당 5.14 (1.4–15.1) · 연 약 40만명", "동 연구", "2023", false],
        ["여성 유병률", "10만명당 78.7 · 약 304만명", "동 연구", "2023", false],
        ["남성 유병률", "10만명당 9.3 · 약 36만명", "동 연구", "2023", false],
        ["한국 유병률", "여성 10만명당 35.5 · 남성 3.5", "국내 건강보험 기반 연구", "—", true],
        ["한국 환자 수", "22,715명 (2016) — 2010년 15,437명 대비 약 +47%", "국내 청구자료 기반 보도", "2016", true],
        ["데이터 공백", "전 세계 국가의 79.8%에 역학 데이터 부재", "동 연구", "2023", false]
      ],
      body: [
        ["전 세계", [
          "유병률 10만명당 43.7 — RA(연령표준화 208.8/10만)의 약 5분의 1 수준",
          "추정 범위가 15.9–108.9로 매우 넓음 — 진단 기준·의료 접근성·연구 설계 차이가 반영된 결과",
          "국가의 79.8%에 역학 데이터가 없음 → 전 세계 추정치 자체가 소수 국가에 의존"
        ]],
        ["한국", [
          "여성 10만명당 35.5 · 남성 3.5 — 성비가 약 10:1로 전 세계 평균보다 가파름",
          "가임기 여성에서 10만명당 50.5–62.0으로 더 높게 보고",
          "청구자료 기반 환자 수는 2010년 15,437명에서 2016년 22,715명으로 증가"
        ]],
        ["수치를 읽을 때 주의할 점", [
          "국내 수치는 출처와 산출 연도가 제각각 — 인용 시 반드시 어느 자료의 몇 년도 값인지 병기할 것",
          "청구자료 기반 환자 수는 유병률이 아니라 진료 발생 기준 — 미진단·미수진 제외",
          "SLE는 희귀질환 산정특례 대상이라 등록 기준 변경이 겉보기 증가를 만들 수 있음"
        ]]
      ],
      related: ["sle-trend", "sle-demographics", "sle-burden"],
      links: [["국가통계포털 KOSIS", "https://kosis.kr/"],
              ["건강보험심사평가원 보건의료빅데이터", "https://opendata.hira.or.kr/"]]
    },
    {
      id: "sle-trend", section: "epi",
      title: "발생률·유병률은 증가하는가?",
      aliases: ["trend", "추세", "survival", "생존율"],
      summary: "발생률보다 유병 인구의 증가가 두드러짐 — 진단 향상과 생존 연장이 겹친 결과이므로 \"환자가 늘었다\"를 발병 증가로 읽으면 오독",
      facts: [
        ["국내 환자 수 추세", "15,437명(2010) → 22,715명(2016) · 약 +47%", "국내 청구자료 기반 보도", "2016", true],
        ["증가의 주된 원인", "진단 향상 · 생존 연장 — 발병 증가보다 우세로 해석", "리뷰", "—", true],
        ["생존율", "과거 대비 크게 개선 — 다만 일반 인구 대비 초과 사망은 지속", "리뷰", "—", true],
        ["최신 국내 추이", "확인 필요 — 2016년 이후 연도별 값", "HIRA·NHIS", "", true]
      ],
      body: [
        ["무엇이 늘고 있나", [
          "유병 인구 증가가 뚜렷 — 국내 청구자료 기준 6년 사이 약 47% 증가 보고",
          "생존 기간 연장이 유병 인구를 늘리는 주요 경로 — 치료가 좋아질수록 유병률은 오름",
          "발생률 자체의 증가 근거는 상대적으로 약함"
        ]],
        ["겉보기 추세를 만드는 요인", [
          "분류 기준 변화 — 2019 EULAR/ACR 기준 도입으로 분류되는 환자군이 달라짐",
          "ANA 검사 접근성 향상 → 경증·초기 환자의 포착 증가",
          "희귀질환 등록·산정특례 제도 변경 → 청구자료상 환자 수에 직접 영향"
        ]],
        ["한국에서 확인할 것", [
          "2016년 이후 연도별 추이 — 최신값이 아직 확보되지 않음",
          "조유병률과 연령표준화 유병률의 분리 — 인구 고령화 효과를 걷어내야 함",
          "제도 변경 시점과 꺾이는 지점이 일치하는지 대조"
        ]]
      ],
      related: ["sle-prevalence", "sle-complications", "sle-burden"]
    },
    {
      id: "sle-demographics", section: "epi",
      title: "어떤 연령·성별·집단에서 많이 발생하는가?",
      aliases: ["sex ratio", "성비", "가임기", "ancestry", "인종"],
      summary: "가임기 여성에 압도적으로 집중 — 전 세계 여성:남성 유병률비 약 8.5:1, 국내는 약 10:1 · African·Hispanic·Asian 계통에서 유병률과 중증도가 모두 높음",
      facts: [
        ["성비 (여:남) — 전 세계 유병률", "78.7 : 9.3 = 약 8.5 : 1", "Global epidemiology of SLE", "2023", false],
        ["성비 — 전 세계 발생률", "8.82 : 1.53 = 약 5.8 : 1", "동 연구", "2023", false],
        ["성비 — 한국", "35.5 : 3.5 = 약 10 : 1", "국내 연구", "—", true],
        ["호발 연령", "가임기(약 15–45세) — RA보다 이른 발병", "리뷰", "—", true],
        ["국내 가임기 여성", "10만명당 50.5–62.0", "국내 연구", "—", true],
        ["인종", "African · Hispanic · Asian 계통에서 유병률·중증 장기침범 모두 높음", "Tsokos 2011", "2011", false],
        ["최고 유병 국가", "아랍에미리트 · 바베이도스 · 브라질", "Global epidemiology of SLE", "2023", false]
      ],
      body: [
        ["성별", [
          "자가면역질환 중에서도 성별 편중이 가장 극단적인 축 — 여성이 약 8.5배(전 세계 유병률 기준)",
          "발생률 기준 성비(5.8:1)가 유병률 기준(8.5:1)보다 낮음 → 여성에서 생존 기간이 더 긴 효과 시사",
          "C4 유전자 효과의 성차가 여성 취약성을 부분적으로 설명한다는 보고"
        ]],
        ["연령", [
          "가임기에 집중 — RA(40–60대)보다 이른 발병이 질병부담의 성격을 다르게 만듦",
          "소아 발병 SLE는 장기 침범이 더 흔하고 중증 경향",
          "고령 발병은 상대적으로 경한 경과와 낮은 성비를 보임"
        ]],
        ["인종·지역", [
          "African·Hispanic·Asian 계통에서 유병률과 중증 장기침범(특히 신염)이 모두 높음",
          "아랍에미리트·바베이도스·브라질에서 최고 유병률 보고 · 고소득 국가에서 더 자주 보고됨",
          "고소득 국가 편중은 실제 차이와 진단 접근성 차이가 섞인 결과일 가능성"
        ]]
      ],
      related: ["sle-prevalence", "sle-genetics", "sle-ancestry"],
      papers: [["Tsokos 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1100359"],
               ["Kamitaki 2020, Nature", "https://doi.org/10.1038/s41586-020-2277-x"]]
    },
    {
      id: "sle-burden", section: "epi",
      title: "질병부담과 사회경제적 영향은 얼마나 큰가?",
      aliases: ["burden", "질병부담", "장기 손상", "damage index", "생산성"],
      summary: "가임기 발병이라 부담의 성격이 다름 — 교육·취업·임신이 진행되는 시기에 장기 손상이 누적되고, 신장 침범 시 투석·이식 비용까지 겹침",
      facts: [
        ["발병 시기", "가임기 — 교육·취업·출산 시기와 겹침", "—", "", false],
        ["누적 장기 손상", "재발이 반복될수록 비가역적으로 축적", "리뷰", "—", true],
        ["말기신부전", "루푸스 신염의 일부가 투석·이식으로 진행", "리뷰", "—", true],
        ["국내 진료비", "확인 필요 — 건강보험 진료비 통계", "HIRA·NHIS", "", true],
        ["DALY", "확인 필요 — SLE는 GBD 독립 원인으로 집계되지 않음", "—", "", true]
      ],
      body: [
        ["부담의 발생 지점", [
          "가임기 발병 → 교육·취업·임신이 진행되는 시기에 질병이 겹침 · RA(40–60대 발병)와 부담의 성격이 다름",
          "재발–관해가 반복되면서 장기 손상이 비가역적으로 누적 — 활성도가 낮아도 손상은 남음",
          "루푸스 신염 진행 시 투석·이식 비용이 추가 — 부담이 급격히 커지는 분기"
        ]],
        ["측정의 어려움", [
          "SLE는 GBD에서 독립 원인으로 집계되지 않아 국제 비교 가능한 DALY가 없음",
          "피로·인지장애 등 환자보고 부담이 활성도 지표로는 포착되지 않음",
          "질병 활성도와 누적 손상을 따로 재야 하므로 단일 지표로 부담을 표현하기 어려움"
        ]],
        ["삶의 질", [
          "피로가 가장 흔하고 지속적인 증상 — 염증지표와 상관이 낮아 치료로 잘 잡히지 않음",
          "임신 계획·약물 선택의 제약이 젊은 여성 환자에게 추가 부담",
          "광과민으로 인한 일상 활동 제약"
        ]]
      ],
      related: ["sle-complications", "sle-prevalence", "sle-refractory"],
      links: [["건강보험심사평가원 보건의료빅데이터", "https://opendata.hira.or.kr/"]]
    },

    /* ── B-01 원인 · 위험인자 ────────────────────────────────────────── */
    {
      id: "sle-riskfactors", section: "risk",
      title: "주요 위험인자는 무엇인가?",
      aliases: ["risk factor", "위험인자", "EBV", "UV", "estrogen", "smoking"],
      summary: "여성·특정 인종이라는 고정 인자 위에 EBV 감염이 가장 강한 환경 위험인자 — 소아에서 최대 50배까지 위험 상승 보고",
      facts: [
        ["최대 고정 인자", "여성 · African·Hispanic·Asian 계통", "Tsokos 2011", "2011", false],
        ["최대 환경 위험인자", "EBV 감염 — 소아에서 최대 50배", "Harley 2018 · Kaul 2016", "2018", false],
        ["자외선(UV)", "피부 병변·전신 재발의 확립된 유발 인자", "리뷰", "—", true],
        ["성호르몬", "에스트로겐 노출이 위험과 연관", "리뷰", "—", true],
        ["흡연", "위험 상승 및 치료 반응 저하와 연관", "리뷰", "—", true],
        ["약물", "약물유발 루푸스 — 원인 약물 중단 시 호전", "—", "", true]
      ],
      body: [
        ["EBV — 가장 강한 환경 인자", [
          "EBV 감염이 SLE 위험을 크게 높임 — 소아에서 최대 50배 보고",
          "SLE 위험 loci의 절반을 EBV의 EBNA2 단백질이 점유 → 유전–환경 상호작용의 직접적 분자 근거",
          "\"감염이 자가면역을 켠다\"는 가설을 유전체 수준에서 뒷받침한 드문 사례"
        ]],
        ["그 밖의 인자", [
          "자외선 — 피부 병변과 전신 재발을 유발 · 케라티노사이트 apoptosis 증가를 기전으로 제시",
          "성호르몬 — 가임기 여성 편중, 임신·경구피임약과의 연관",
          "흡연 — 위험 상승과 hydroxychloroquine 반응 저하 양쪽으로 보고",
          "규폐·유기용제 등 직업 노출 — 연관 보고되나 근거는 제한적"
        ]],
        ["해석의 주의", [
          "여성·인종은 개입 불가능한 고정 인자 → 예방 전략은 EBV·UV·흡연 쪽으로 좁혀짐",
          "인종 차이에 유전과 사회경제적 요인이 섞여 있어 순수 유전 효과 분리가 어려움",
          "대부분 관찰연구 기반 → Mendelian randomization 등으로 인과 검정이 필요한 단계"
        ]]
      ],
      related: ["sle-genetics", "sle-triggers", "sle-origin"],
      papers: [["Harley 2018, Nat Genet", "https://doi.org/10.1038/s41588-018-0102-3"],
               ["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"]]
    },
    {
      id: "sle-genetics", section: "risk",
      title: "유전과 환경은 각각 얼마나 기여하는가?",
      aliases: ["genetics", "complement", "C1q", "C4", "copy number", "GWAS", "유전"],
      summary: "보체가 유전 위험의 중심 — 희귀 C1q·C4 결핍이 강력한 단일유전자 위험을, 흔한 C4 copy number 변이가 정량적 위험을 만든다",
      facts: [
        ["단일유전자 위험", "C1q · C4 결핍 — 강한 SLE 위험", "Kaul 2016", "2016", false],
        ["흔한 변이 위험", "C4 copy number — 정량적 위험 부여", "Kamitaki 2020", "2020", false],
        ["C4 효과의 성차", "남성 > 여성 — 여성 취약성을 부분 설명", "Kamitaki 2020", "2020", false],
        ["보고된 위험 loci", "약 100개", "Perez 2022 등", "2022", true],
        ["유전–환경 상호작용", "SLE 위험 loci의 절반을 EBV EBNA2가 점유", "Harley 2018", "2018", false]
      ],
      body: [
        ["보체 — 유전 위험의 중심", [
          "희귀 C1q·C4 결핍이 가장 강한 단일유전자 SLE 위험 — 자가항원 청소 실패 모델의 직접 근거",
          "흔한 C4 copy number 변이가 집단 수준의 정량적 위험을 만듦 — 복제수가 낮을수록 위험 상승",
          "C4 효과가 남성에서 더 크게 나타나는 성차 → 여성 취약성의 부분 설명"
        ]],
        ["나머지 유전 구조", [
          "HLA 및 약 100개의 위험 loci — 핵산 감지·IFN 신호·림프구 활성화 경로로 수렴",
          "대부분 개별 효과가 작은 폴리제닉 구조 · 보체만 예외적으로 큰 효과",
          "위험 loci의 상당수가 비암호화 조절 영역 → 표적 유전자 지목에 추가 분석 필요"
        ]],
        ["환경과의 상호작용", [
          "SLE 위험 loci의 절반을 EBV EBNA2가 점유 → 유전과 환경이 같은 조절 영역에서 만남",
          "\"유전 몇 % · 환경 몇 %\"의 분할이 성립하지 않는 대표적 사례",
          "인종별 유전 배경 차이가 유병률·중증도 격차의 일부를 설명"
        ]]
      ],
      related: ["sle-riskfactors", "sle-gwas", "sle-demographics"],
      papers: [["Kamitaki 2020, Nature", "https://doi.org/10.1038/s41586-020-2277-x"],
               ["Harley 2018, Nat Genet", "https://doi.org/10.1038/s41588-018-0102-3"],
               ["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"]]
    },
    {
      id: "sle-origin", section: "risk",
      title: "질병은 어떤 장기·조직·세포에서 시작되는가?",
      aliases: ["origin", "apoptosis", "clearance", "autoantigen", "개시"],
      summary: "특정 장기가 아니라 자가항원 청소 실패에서 시작 — apoptotic debris가 제거되지 않아 핵산이 면역계에 노출되는 것이 개시 사건",
      facts: [
        ["개시 사건", "apoptotic debris 청소 실패 → 자가항원(핵산) 노출", "Tsokos 2011 · Kaul 2016", "2016", false],
        ["청소 담당", "보체(C1q·C4)와 식세포", "—", "", false],
        ["증폭 경로", "핵산 감지 → type I interferon 상승", "Kaul 2016 · Perez 2022", "2022", false],
        ["개시 장기", "특정 장기 아님 — 전신 면역계 수준에서 시작", "—", "", false]
      ],
      body: [
        ["개시의 위치", [
          "RA의 점막 기원 가설과 달리 SLE는 특정 장기에서 시작한다고 보기 어려움",
          "세포 사멸 후 남는 핵산복합체를 제거하지 못하는 것 자체가 개시 사건",
          "보체 결핍이 가장 강한 유전 위험이라는 사실이 이 모델을 뒷받침"
        ]],
        ["개시에서 증폭으로", [
          "노출된 핵산 → 핵산 감지 경로 활성화 → type I interferon 상승",
          "IFN이 항원 제시와 림프구 활성화를 높여 자가항체 생성을 촉진",
          "자가항체–항원 면역복합체가 다시 IFN을 유도하는 양성 되먹임 형성"
        ]],
        ["침착의 위치가 표현형을 만든다", [
          "면역복합체가 어디에 침착하는지가 장기 침범 패턴을 결정",
          "신장 사구체는 여과 구조상 면역복합체 침착에 취약 → 신염이 흔한 이유",
          "왜 환자마다 침착 부위가 다른지는 미해결"
        ]]
      ],
      related: ["sle-genetics", "sle-progression", "sle-preclinical"],
      papers: [["Tsokos 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1100359"],
               ["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"]]
    },
    {
      id: "sle-triggers", section: "risk",
      title: "보호요인과 촉발요인은 무엇인가?",
      aliases: ["trigger", "촉발요인", "photoprotection", "flare", "pregnancy", "infection"],
      summary: "확립된 보호 수단은 자외선 차단과 hydroxychloroquine 유지 — 촉발요인은 UV·감염·임신·특정 약물이 반복 거론",
      facts: [
        ["보호 — 광차단", "자외선 차단이 피부 병변·재발 예방에 확립", "가이드라인", "—", true],
        ["보호 — HCQ 유지", "재발 감소·장기 손상 억제·생존 개선과 연관", "EULAR 2023", "2023", true],
        ["보호 — 금연", "위험 감소 및 HCQ 반응 개선", "리뷰", "—", true],
        ["촉발 — 자외선", "피부 병변과 전신 재발 유발", "리뷰", "—", true],
        ["촉발 — 감염·임신·약물", "재발의 흔한 선행 사건으로 거론", "리뷰", "—", true]
      ],
      body: [
        ["보호 쪽", [
          "자외선 차단 — 개입 가능하고 효과가 확립된 유일에 가까운 생활 수단",
          "hydroxychloroquine 유지 — 재발 감소·장기 손상 억제·생존 개선과 연관되어 전 환자 권고",
          "금연 — 위험 감소와 HCQ 반응 개선 양쪽에서 이득"
        ]],
        ["촉발 쪽", [
          "자외선 — 케라티노사이트 apoptosis 증가를 통한 자가항원 노출 증가가 기전 가설",
          "감염 — 면역 활성화를 통해 재발을 유발 · EBV는 발병 자체의 위험인자이기도 함",
          "임신·산욕기 — 호르몬 변화와 면역 재조정이 재발 시점과 겹침",
          "특정 약물 — 약물유발 루푸스 및 기존 SLE의 악화"
        ]],
        ["근거 수준의 한계", [
          "촉발요인 대부분이 후향적 관찰 기반 → 회상 편향과 역인과 배제 곤란",
          "재발의 상당수는 명확한 유발 사건 없이 발생",
          "재발을 예측할 지표가 없어 예방적 개입의 시점을 잡을 수 없음"
        ]]
      ],
      related: ["sle-riskfactors", "sle-standard-tx", "sle-refractory"]
    },

    /* ── B-02 발병 · 진행 ───────────────────────────────────────────── */
    {
      id: "sle-preclinical", section: "course",
      title: "발병 전에는 어떤 변화가 일어나는가?",
      aliases: ["preclinical", "autoantibody", "임상 전", "ANA", "자가항체 누적"],
      summary: "자가항체가 임상 발현보다 수년 선행하고 종류가 순차적으로 누적 — ANA가 먼저, 이후 anti-dsDNA·anti-Sm 등이 더해지며 발병에 가까워짐",
      facts: [
        ["자가항체 선행", "임상 발현 수년 전부터 검출", "리뷰", "—", true],
        ["출현 순서", "ANA → anti-Ro/La → anti-dsDNA → anti-Sm·RNP 경향", "리뷰", "—", true],
        ["누적 패턴", "항체 종류가 늘수록 발병이 임박", "리뷰", "—", true],
        ["예측 지표", "부재 — ANA 양성자 중 진행자 식별 불가", "—", "", false]
      ],
      body: [
        ["임상 전 단계", [
          "자가항체가 임상 발현보다 수년 앞서 혈청에 나타남 — RA와 같은 구조",
          "항체가 한꺼번에 생기지 않고 종류가 순차적으로 누적되는 경향",
          "누적된 항체 종류가 많을수록 발병이 임박한 것으로 보고"
        ]],
        ["왜 예방이 어려운가", [
          "ANA 양성은 건강인에서도 흔함 — 양성만으로 위험군을 정의할 수 없음",
          "진행자를 가려낼 지표가 없어 예방 임상시험의 대상 특정이 불가",
          "RA의 ACPA 양성 at-risk 코호트에 해당하는 대규모 SLE 코호트도 드묾"
        ]],
        ["연구 접근", [
          "군 입대자 등 보관 혈청이 있는 코호트에서 후향적으로 관찰된 사례가 근거의 중심",
          "전향적 at-risk 코호트 구축이 예방 연구의 전제",
          "자가항체 누적 순서와 IFN 활성의 시간 관계는 미규명"
        ]]
      ],
      related: ["sle-origin", "sle-progression", "sle-tests"]
    },
    {
      id: "sle-progression", section: "course",
      title: "초기에서 말기까지 어떤 경로를 밟는가?",
      aliases: ["flare", "remission", "재발", "관해", "damage accrual", "type I interferon"],
      summary: "재발–관해가 반복되며 장기 손상이 누적되는 경로 — 활성도가 낮아져도 손상은 비가역적으로 남는다는 점이 RA와 다른 진행 양상",
      facts: [
        ["경과 형태", "재발(flare)–관해 반복", "—", "", false],
        ["손상 누적", "재발마다 비가역적 장기 손상 축적", "리뷰", "—", true],
        ["중심 축", "type I interferon 상승 — 활성기에 두드러짐", "Kaul 2016 · Perez 2022", "2022", false],
        ["활성도 지표 vs 손상 지표", "별개로 측정 — 활성도가 낮아도 손상은 진행", "—", "", false]
      ],
      body: [
        ["진행의 형태", [
          "단조롭게 악화되지 않고 재발과 관해가 반복되는 경로",
          "재발할 때마다 장기 손상이 누적 — 활성도가 가라앉아도 손상은 되돌아가지 않음",
          "손상의 일부는 질병 자체가 아니라 치료(특히 스테로이드)에서 옴"
        ]],
        ["IFN 축의 역할", [
          "type I interferon 상승이 활성기에 두드러지는 hallmark",
          "IFN이 항원 제시·림프구 활성화를 높여 자가항체 생성을 유지",
          "면역복합체가 다시 IFN을 유도하는 되먹임이 만성화를 설명"
        ]],
        ["말기 경로", [
          "루푸스 신염 진행 시 말기신부전 → 투석·이식",
          "누적 손상이 심혈관·근골격·신경계에 걸쳐 기능 저하로 나타남",
          "장기 생존이 개선되면서 손상 누적과 동반질환 관리가 새로운 중심 과제로 이동"
        ]]
      ],
      related: ["sle-heterogeneity", "sle-complications", "sle-severity"],
      papers: [["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"],
               ["Perez 2022, Science", "https://doi.org/10.1126/science.abf1970"]]
    },
    {
      id: "sle-heterogeneity", section: "course",
      title: "환자마다 진행속도와 표현형이 다른 이유는 무엇인가?",
      aliases: ["heterogeneity", "이질성", "phenotype", "IFN signature", "autoantibody profile"],
      summary: "SLE는 자가면역질환 중 이질성이 가장 큰 축 — 자가항체 조합·IFN 활성·인종 배경이 표현형 차이의 유력 후보이나 어느 것도 예측에 쓰이지 못함",
      facts: [
        ["표현형 폭", "피부·관절 국한형부터 신염·신경정신 침범까지", "—", "", false],
        ["자가항체 조합", "장기 침범 패턴과의 연관 보고", "리뷰", "—", true],
        ["type I IFN 활성", "환자 간 편차 큼 — 치료 표적과 직접 연결", "Perez 2022", "2022", false],
        ["인종 배경", "African·Hispanic·Asian에서 중증 장기침범 높음", "Tsokos 2011", "2011", false],
        ["개별 예측력", "부재", "—", "", false]
      ],
      body: [
        ["관찰되는 이질성", [
          "같은 진단 안에 피부·관절 국한형부터 신염·신경정신 침범까지 공존",
          "재발 빈도와 손상 누적 속도의 환자 간 편차가 큼",
          "치료 반응도 환자마다 달라 이질성이 임상 단계까지 이어짐"
        ]],
        ["이질성의 후보 원인", [
          "자가항체 조합 — anti-dsDNA는 신염과, anti-Ro/La는 피부·신생아 루푸스와 연관",
          "type I IFN 활성 정도 — anifrolumab이라는 표적 치료와 직접 연결되는 축",
          "인종·유전 배경 — 특히 신염 위험에서 큰 차이",
          "사회경제적 요인 — 진단 시점과 치료 접근성 차이가 경과에 반영"
        ]],
        ["왜 예측이 안 되는가", [
          "분자 층화가 임상 결과와 연결된다는 검증이 미완",
          "표적 조직(신장) 접근이 생검에 의존해 대규모 데이터 확보가 어려움",
          "혈액 IFN 지표가 장기별 병태를 얼마나 반영하는지 미검증"
        ]]
      ],
      related: ["sle-subtypes", "sle-response-variability", "sle-singlecell"],
      papers: [["Perez 2022, Science", "https://doi.org/10.1126/science.abf1970"],
               ["Tsokos 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1100359"]]
    },
    {
      id: "sle-complications", section: "course",
      title: "주요 합병증과 사망 원인은 무엇인가?",
      aliases: ["mortality", "사망", "infection", "cardiovascular", "end-stage renal disease", "이중 정점"],
      summary: "사망 원인이 시기에 따라 갈리는 이중 정점 — 초기에는 질병 활성과 감염, 후기에는 심혈관질환과 말기신부전",
      facts: [
        ["초기 사망 원인", "질병 활성 · 감염(면역억제 관련)", "리뷰", "—", true],
        ["후기 사망 원인", "심혈관질환 · 말기신부전", "리뷰", "—", true],
        ["말기신부전", "루푸스 신염의 일부가 투석·이식으로 진행", "리뷰", "—", true],
        ["초과 사망", "생존율 개선에도 일반 인구 대비 초과 사망 지속", "리뷰", "—", true],
        ["국내 사망 통계", "확인 필요", "—", "", true]
      ],
      body: [
        ["이중 정점", [
          "초기 — 조절되지 않는 질병 활성과 면역억제에 따른 중증 감염",
          "후기 — 만성 염증과 스테로이드 노출이 누적된 결과로서의 심혈관질환",
          "이 두 정점 구조가 치료 목표를 \"활성 억제\"와 \"장기 보호\" 양쪽으로 나눔"
        ]],
        ["장기별 합병증", [
          "신장 — 루푸스 신염 → 말기신부전 → 투석·이식",
          "심혈관 — 만성 염증에 스테로이드 유래 대사 이상이 겹쳐 위험 증폭",
          "신경정신 — 인지장애부터 발작·정신병까지 · 진단과 귀속 자체가 어려움",
          "혈액 — 혈구감소 · 항인지질항체 동반 시 혈전"
        ]],
        ["치료가 만드는 부담", [
          "스테로이드 — 감염·골괴사·골다공증·대사이상 · 누적 용량이 손상의 주요 원인",
          "면역억제제 — 감염과 가임력 문제(특히 cyclophosphamide)",
          "이 때문에 최근 권고가 스테로이드 감량·중단을 전면에 두는 방향으로 이동"
        ]]
      ],
      related: ["sle-progression", "sle-burden", "sle-refractory"],
      papers: [["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"]]
    },

    /* ── C-01 진단 · 분류 ───────────────────────────────────────────── */
    {
      id: "sle-symptoms", section: "dx",
      title: "초기 증상은 무엇인가?",
      aliases: ["초기 증상", "malar rash", "photosensitivity", "fatigue", "arthralgia"],
      summary: "피로·발열·관절통 같은 비특이 증상으로 시작하는 경우가 많고, 뺨 발진·광과민·구강궤양 등 특징적 소견은 뒤늦게 또는 일부에서만 나타남",
      facts: [
        ["가장 흔한 초기 증상", "피로 · 발열 · 관절통 — 비특이적", "—", "", false],
        ["특징적 피부 소견", "뺨 발진(malar rash) · 원판상 발진 · 광과민", "—", "", false],
        ["점막", "구강·비강 궤양 — 대개 무통성", "—", "", false],
        ["혈액", "백혈구·림프구·혈소판 감소", "—", "", false],
        ["신장", "초기에는 무증상 — 단백뇨로만 발견되는 경우 흔함", "—", "", false]
      ],
      body: [
        ["비특이 증상으로 시작", [
          "피로·발열·체중감소·관절통 — 어느 것도 SLE에 특이적이지 않음",
          "관절통은 흔하나 대개 비미란성이라 RA와 경과가 다름",
          "이 구간에서 다른 질환으로 오인되거나 진단이 지연되는 경우가 많음"
        ]],
        ["특징적 소견", [
          "뺨 발진(malar rash) — 코와 뺨을 잇는 나비 모양 · 코주름은 비껴감",
          "광과민 — 자외선 노출 후 발진 또는 전신 증상 악화",
          "무통성 구강·비강 궤양 — 환자가 자각하지 못하는 경우가 많아 진찰로 확인",
          "레이노 현상 · 탈모"
        ]],
        ["놓치기 쉬운 침범", [
          "신장 — 초기에는 무증상이라 소변검사 없이는 발견되지 않음",
          "혈액 — 혈구감소가 우연히 발견되는 경우",
          "장막 — 흉막염·심낭염이 흉통으로 나타남"
        ]]
      ],
      related: ["sle-criteria", "sle-dxdelay", "sle-differential"]
    },
    {
      id: "sle-criteria", section: "dx",
      title: "현재 진단 기준은 무엇인가?",
      aliases: ["2019 EULAR/ACR", "classification criteria", "분류 기준", "ANA entry criterion"],
      summary: "2019 EULAR/ACR 분류 기준 — ANA 양성을 필수 관문으로 두고, 7개 임상·3개 면역 도메인을 2~10점으로 가중 합산해 10점 이상이면 분류",
      facts: [
        ["기준", "2019 EULAR/ACR 분류 기준", "Aringer 2019", "2019", false],
        ["관문(entry criterion)", "ANA ≥1:80 양성 1회 이상 — 감도 97.8%", "Aringer 2019", "2019", false],
        ["도메인", "임상 7개(전신·혈액·신경정신·점막피부·장막·근골격·신장) + 면역 3개(항인지질·보체·SLE 특이항체)", "Aringer 2019", "2019", false],
        ["가중", "항목당 2~10점", "Aringer 2019", "2019", false],
        ["분류 역치", "합산 10점 이상", "Aringer 2019", "2019", false],
        ["신염 특례", "ANA 양성 + class III/IV 루푸스 신염이면 분류 가능", "Aringer 2019", "2019", false]
      ],
      body: [
        ["기준의 구조", [
          "ANA 양성을 필수 관문으로 둠 — 감도 97.8%로 거의 모든 SLE를 통과시키되 ANA 음성은 배제",
          "임상 7개 도메인과 면역 3개 도메인을 항목당 2~10점으로 가중 합산",
          "각 도메인에서 가장 높은 점수 하나만 계산 — 같은 도메인 내 중복 가산 없음",
          "합산 10점 이상이면 SLE로 분류"
        ]],
        ["이전 기준과의 차이", [
          "ACR 1997·SLICC 2012 대비 감도와 특이도를 함께 개선하는 것이 목표였음",
          "가중 방식 도입 — 모든 항목을 동등하게 세던 방식에서 벗어남",
          "class III/IV 루푸스 신염은 단독으로 분류를 성립시킬 만큼 높은 가중"
        ]],
        ["기준 사용의 한계", [
          "분류(classification) 기준이지 진단(diagnosis) 기준이 아님 — 연구 대상군 정의가 본래 목적",
          "ANA 음성 SLE는 구조적으로 분류에서 제외됨",
          "소아 SLE에서 감도·특이도가 떨어진다는 보고 — 성인 기준의 직접 적용에 주의"
        ]]
      ],
      related: ["sle-tests", "sle-symptoms", "sle-dxdelay"],
      papers: [["Aringer 2019, Ann Rheum Dis / Arthritis Rheumatol", "https://doi.org/10.1002/art.40930"]]
    },
    {
      id: "sle-tests", section: "dx",
      title: "어떤 검사와 바이오마커를 사용하는가?",
      aliases: ["ANA", "anti-dsDNA", "anti-Sm", "complement", "C3", "C4", "검사"],
      summary: "ANA가 감도 높은 선별 검사, anti-dsDNA·anti-Sm이 특이도 높은 확인 검사 — 보체 C3·C4 소모와 anti-dsDNA 역가가 활성도 추적에 함께 쓰임",
      facts: [
        ["선별", "ANA — 감도 높으나 특이도 낮음(건강인 양성 흔함)", "—", "", false],
        ["특이 항체", "anti-dsDNA · anti-Sm — SLE에 상대적으로 특이적", "—", "", false],
        ["활성도 추적", "anti-dsDNA 역가 상승 · 보체 C3·C4 소모", "—", "", false],
        ["장기 평가", "소변 단백/크레아티닌비 · 신장 생검", "—", "", false],
        ["동반 항체", "항인지질항체 — 혈전·임신 합병증 위험 평가", "—", "", false],
        ["예측 바이오마커", "부재 — 치료반응·재발 예측 마커 없음", "—", "", false]
      ],
      body: [
        ["자가항체", [
          "ANA — 감도가 높아 선별에 쓰이나 건강인에서도 흔히 양성 → 단독으로 진단 근거가 되지 않음",
          "anti-dsDNA — SLE에 특이적이고 신염·질병활성도와 연관 · 역가 추적에 사용",
          "anti-Sm — 특이도가 매우 높으나 감도는 낮음",
          "anti-Ro/La — Sjögren 중복, 광과민, 신생아 루푸스 위험과 연관"
        ]],
        ["보체와 장기 평가", [
          "C3·C4 소모 — 면역복합체에 의한 보체 활성화를 반영 · 활성기 지표",
          "소변 단백/크레아티닌비 — 신염 선별의 기본 · 무증상 신염을 잡아내는 유일한 통로",
          "신장 생검 — 루푸스 신염의 class 결정과 치료 선택에 필수"
        ]],
        ["없는 것", [
          "재발을 미리 알려주는 마커 부재 — anti-dsDNA·보체도 예고력이 제한적",
          "어떤 생물학적 제제가 들을지 알려주는 예측 마커 부재",
          "신경정신 루푸스를 객관적으로 확인할 검사 부재"
        ]]
      ],
      related: ["sle-criteria", "sle-severity", "sle-tissue-blood"]
    },
    {
      id: "sle-dxdelay", section: "dx",
      title: "조기진단이 어려운 이유는 무엇인가?",
      aliases: ["diagnostic delay", "진단 지연", "ANA 특이도", "다장기"],
      summary: "다장기 증상이 순차적으로 나타나 어느 과를 먼저 가느냐에 따라 진단 경로가 갈리고, ANA의 낮은 특이도가 확진과 배제 양쪽을 흐린다",
      facts: [
        ["초기 소견", "비특이적 · 장기별로 순차 출현", "—", "", false],
        ["ANA 특이도", "낮음 — 건강인·다른 질환에서도 양성", "—", "", false],
        ["진료과 분산", "피부·신장·혈액·신경 등 여러 과로 흩어짐", "—", "", false],
        ["국내 진단 지연 기간", "확인 필요", "국내 코호트", "", true]
      ],
      body: [
        ["증상 쪽 문제", [
          "다장기 증상이 한꺼번에 오지 않고 순차적으로 나타남 → 각각을 별개 문제로 다루기 쉬움",
          "피로·관절통 등 초기 증상이 비특이적",
          "환자가 처음 찾는 과(피부·신장·혈액·신경)에 따라 진단 경로와 소요 시간이 달라짐"
        ]],
        ["검사 쪽 문제", [
          "ANA 양성은 건강인에서도 흔해 그 자체로 진단이 되지 않음 → 불필요한 검사·불안 유발",
          "특이 항체(anti-Sm)는 감도가 낮아 음성이어도 배제가 안 됨",
          "신장 침범은 무증상이라 소변검사를 하지 않으면 놓침"
        ]],
        ["왜 문제가 되는가", [
          "진단 지연 동안 장기 손상이 비가역적으로 누적",
          "특히 신염은 조기 치료 여부가 신기능 예후를 좌우",
          "지연 단축이 신약 개발 못지않은 임상적 효과를 낼 수 있는 지점"
        ]]
      ],
      related: ["sle-criteria", "sle-symptoms", "sle-preclinical"]
    },
    {
      id: "sle-severity", section: "dx",
      title: "아형·중증도·예후를 어떻게 구분하는가?",
      aliases: ["SLEDAI", "damage index", "SLICC", "활성도", "중증도", "예후"],
      summary: "질병활성도와 누적 장기손상을 별도 지표로 나눠 측정 — 활성도가 낮아져도 손상은 진행하므로 두 축을 함께 봐야 예후가 잡힌다",
      facts: [
        ["활성도 지표", "SLEDAI 계열 등 복합 지표", "—", "", true],
        ["손상 지표", "누적 장기손상 지수 — 비가역 손상만 계산", "—", "", true],
        ["두 축의 관계", "활성도 낮아도 손상은 누적 → 별도 추적 필요", "—", "", false],
        ["예후 불량 인자", "루푸스 신염 · 신경정신 침범 · 낮은 사회경제적 접근성", "리뷰", "—", true],
        ["개별 예측력", "부족 — 집단 수준 연관에 머무름", "—", "", false]
      ],
      body: [
        ["두 개의 축", [
          "질병활성도 — 지금 염증이 얼마나 활발한지 · 치료 조정의 기준",
          "누적 장기손상 — 되돌릴 수 없는 손상의 총량 · 예후의 기준",
          "활성도가 낮아도 손상은 계속 쌓이므로 둘을 함께 봐야 함"
        ]],
        ["예후 층화", [
          "루푸스 신염 — 예후를 가르는 최대 인자 · class에 따라 치료와 전망이 갈림",
          "신경정신 침범 — 예후 불량하나 진단 자체가 어려움",
          "사회경제적 요인 — 진단 시점과 치료 지속성에 영향해 예후에 직접 반영"
        ]],
        ["분자 층화의 부재", [
          "type I IFN 활성 기반 층화 — 표적 치료와 연결되나 임상 적용 미확립",
          "복합 지표는 병태의 결과를 재는 것이지 기전을 구분하지 못함",
          "기전 기반 층화가 이루어져야 어떤 생물학적 제제를 쓸지 근거가 생김"
        ]]
      ],
      related: ["sle-tests", "sle-heterogeneity", "sle-response-variability"]
    },

    /* ── C-02 치료 · 미충족 수요 ────────────────────────────────────── */
    {
      id: "sle-standard-tx", section: "tx",
      title: "현재 표준 치료는 무엇인가?",
      aliases: ["hydroxychloroquine", "HCQ", "glucocorticoid", "belimumab", "anifrolumab", "표준 치료"],
      summary: "hydroxychloroquine을 전 환자에게 유지하면서 스테로이드를 최소화하는 것이 기본 골격 — 조절되지 않으면 면역억제제 또는 생물학적 제제를 조기에 추가",
      facts: [
        ["기본 약제", "hydroxychloroquine — 전 환자 권고 · 목표 5 mg/kg 실체중/일", "EULAR 2023", "2023", false],
        ["스테로이드", "감량·중단을 목표 — 장기 노출이 손상의 주요 원인", "EULAR 2023", "2023", false],
        ["면역억제제", "mycophenolate · azathioprine · methotrexate · cyclophosphamide", "EULAR 2023", "2023", true],
        ["생물학적 제제", "belimumab · anifrolumab — 신장 외 SLE에서 표준치료보다 나은 조절", "EULAR 2023", "2023", false],
        ["루푸스 신염", "GC + mycophenolate 또는 저용량 IV cyclophosphamide(anchor) + belimumab 또는 CNI(voclosporin·tacrolimus) 추가", "EULAR 2023", "2023", false],
        ["권고 구성", "5개 총괄 원칙 + 13개 권고", "EULAR 2023", "2023", false]
      ],
      body: [
        ["뼈대 — HCQ와 스테로이드 최소화", [
          "hydroxychloroquine을 전 환자에게 유지 — 재발 감소·손상 억제·생존 개선과 연관",
          "용량 목표는 실제 체중 기준 5 mg/kg/일 · 망막독성 위험과 재발 위험을 함께 고려",
          "스테로이드는 조기에 감량·중단하는 것을 목표로 함 — 누적 노출이 손상의 주요 원인"
        ]],
        ["조절되지 않을 때", [
          "면역억제제 또는 생물학적 제제를 조기에 추가해 질병을 잡고 스테로이드 감량을 앞당김",
          "belimumab과 anifrolumab 사이에 위계는 없음 · 사전 면역억제제 사용이 생물학적 제제 개시의 전제가 아님",
          "이 점이 최근 권고의 핵심 변화 — 생물학적 제제를 마지막 수단으로 미루지 않음"
        ]],
        ["루푸스 신염은 별도 전략", [
          "anchor — 글루코코르티코이드 + mycophenolate 또는 저용량 정맥 cyclophosphamide",
          "추가 — belimumab 또는 칼시뉴린 억제제(voclosporin·tacrolimus)",
          "고품질 무작위연구에서 병용이 단독보다 높은 반응률을 보인 것이 근거"
        ]]
      ],
      related: ["sle-response", "sle-drug-update", "sle-guideline-change"],
      papers: [["EULAR 2023 update, Ann Rheum Dis", "https://doi.org/10.1136/ard-2023-224762"]]
    },
    {
      id: "sle-response", section: "tx",
      title: "어떤 환자에게 효과가 있는가?",
      aliases: ["treatment response", "치료반응", "renal response", "extrarenal"],
      summary: "신장 외 SLE와 루푸스 신염이 서로 다른 전략과 반응 지표를 가짐 — 병용 요법이 단독보다 반응률이 높다는 것이 최근 근거의 방향",
      facts: [
        ["신장 외 SLE", "anifrolumab·belimumab이 표준치료 대비 나은 조절", "EULAR 2023", "2023", false],
        ["루푸스 신염", "belimumab·voclosporin 병용이 더 높은 반응률", "EULAR 2023", "2023", false],
        ["HCQ", "전 환자에서 이득 — 재발·손상·생존 전반", "EULAR 2023", "2023", true],
        ["반응 예측 인자", "부재", "—", "", false],
        ["반응률 수치", "확인 필요 — 시험별 정의가 달라 직접 비교 곤란", "임상시험", "", true]
      ],
      body: [
        ["효과가 잘 나는 조건", [
          "조기 치료 — 장기 손상이 누적되기 전 개입",
          "HCQ 유지 순응 — 중단이 재발의 흔한 선행 요인",
          "장기 침범이 제한적이고 활성도가 낮은 상태에서 시작"
        ]],
        ["장기별로 갈린다", [
          "신장 외 SLE — anifrolumab·belimumab이 표준치료 대비 나은 질병 조절",
          "루푸스 신염 — anchor 치료에 belimumab 또는 voclosporin을 더하면 반응률 상승",
          "신경정신 루푸스 — 근거가 가장 빈약한 영역 · 반응 평가 기준 자체가 불확실"
        ]],
        ["반응률 해석의 어려움", [
          "시험마다 반응 정의(복합 지표)가 달라 계열 간 직접 비교가 어려움",
          "위약군에서도 상당한 반응이 나타나 효과 크기가 희석되는 경향",
          "이질성이 커서 전체 반응률이 개별 환자의 기대치를 반영하지 못함"
        ]]
      ],
      related: ["sle-standard-tx", "sle-response-variability", "sle-subtypes"],
      papers: [["EULAR 2023 update, Ann Rheum Dis", "https://doi.org/10.1136/ard-2023-224762"]]
    },
    {
      id: "sle-response-variability", section: "tx",
      title: "치료반응이 다른 이유는 무엇인가?",
      aliases: ["response heterogeneity", "IFN signature", "stratification", "반응 이질성"],
      summary: "동일 진단 안에 서로 다른 분자 병태가 섞여 있는 것이 근본 원인 — type I IFN 활성 정도가 가장 유력한 층화 축이나 아직 처방 결정에 쓰이지 못함",
      facts: [
        ["1차 가설", "동일 진단 내 분자 병태의 혼재", "리뷰 합의", "—", false],
        ["유력 층화 축", "type I interferon 활성 정도", "Perez 2022", "2022", false],
        ["장기별 차이", "신장·피부·신경계의 병태가 서로 다름", "—", "", false],
        ["층화 적용", "미확립 — IFN 지표가 처방 결정에 쓰이지 않음", "—", "", false]
      ],
      body: [
        ["병태의 혼재", [
          "type I IFN 우세형과 그렇지 않은 환자가 같은 진단 아래 섞여 있음",
          "IFN 표적 치료(anifrolumab)가 존재하므로 이 축은 곧바로 처방 결정으로 이어질 수 있는 후보",
          "자가항체 조합에 따른 군집도 장기 침범 패턴과 연관되어 층화 후보"
        ]],
        ["장기별 병태 차이", [
          "같은 환자 안에서도 신장·피부·신경계의 병태가 달라 한 약제가 모든 장기에 같은 효과를 내지 않음",
          "루푸스 신염이 별도 치료 전략을 갖는 이유",
          "장기별 반응을 하나의 복합 지표로 묶으면 실제 효과가 희석됨"
        ]],
        ["층화가 막힌 이유", [
          "IFN 지표의 측정 방식이 표준화되지 않음",
          "표적 조직(신장) 데이터가 생검 의존이라 부족 — 대부분의 오믹스 연구가 PBMC 기반",
          "층화 임상시험이 아직 결론에 이르지 못함"
        ]]
      ],
      related: ["sle-heterogeneity", "sle-variant-celltype", "sle-unmet"],
      papers: [["Perez 2022, Science", "https://doi.org/10.1126/science.abf1970"]]
    },
    {
      id: "sle-refractory", section: "tx",
      title: "불응·재발·부작용 문제는 무엇인가?",
      aliases: ["flare", "refractory", "steroid toxicity", "재발", "불응", "스테로이드 독성"],
      summary: "재발이 반복되면서 스테로이드 노출이 누적되는 구조가 핵심 문제 — 손상의 상당 부분이 질병이 아니라 치료에서 온다",
      facts: [
        ["재발", "경과 중 반복 — 예측 지표 부재", "—", "", false],
        ["스테로이드 독성", "감염·골괴사·골다공증·대사이상 — 누적 용량 의존", "리뷰", "—", true],
        ["최근 권고 방향", "스테로이드 감량·중단을 전면에 배치", "EULAR 2023", "2023", false],
        ["감염", "면역억제에 따른 지속적 위험 · 초기 사망 원인", "리뷰", "—", true],
        ["불응 정의", "SLE에는 D2T RA 같은 합의된 불응 정의가 없음", "—", "", true]
      ],
      body: [
        ["재발", [
          "재발–관해가 반복되는 것이 질병의 기본 형태 · 재발마다 손상이 누적",
          "재발을 예고하는 지표가 없어 선제적 개입이 불가",
          "HCQ 중단·감염·자외선 노출이 흔한 선행 요인으로 거론"
        ]],
        ["스테로이드가 만드는 부담", [
          "감염·골괴사·골다공증·대사이상 — 누적 용량에 의존",
          "손상 지수에 잡히는 항목의 상당수가 치료 유래 · 질병 자체와 분리되지 않음",
          "최근 권고가 스테로이드 감량·중단을 전면에 둔 직접적 이유"
        ]],
        ["불응", [
          "여러 계열에 실패하는 환자군이 존재하나 RA의 difficult-to-treat 같은 합의된 정의가 없음",
          "정의가 없으면 그 환자군을 연구 대상으로 특정할 수 없음",
          "신경정신 루푸스는 반응 평가 기준 자체가 없어 불응 여부 판정도 어려움"
        ]]
      ],
      related: ["sle-complications", "sle-unmet", "sle-triggers"],
      papers: [["EULAR 2023 update, Ann Rheum Dis", "https://doi.org/10.1136/ard-2023-224762"]]
    },
    {
      id: "sle-unmet", section: "tx",
      title: "아직 충족되지 않은 임상적 필요는 무엇인가?",
      aliases: ["unmet need", "drug development", "신약 빈곤", "미충족 수요"],
      summary: "60년간 승인된 신약이 극소수라는 것이 SLE의 상징적 문제 — 이질성·후기 진단·복합 평가지표가 임상시험 실패를 반복시켜 왔다",
      facts: [
        ["신약 빈곤", "60년간 belimumab 등 소수만 승인", "Kaul 2016", "2016", false],
        ["실패 요인", "이질성 · 후기 진단 · 복합 평가지표의 한계", "Kaul 2016", "2016", false],
        ["근거 빈약 영역", "신경정신 루푸스 · 소아 SLE", "—", "", true],
        ["층화", "분자 subtype 기반 환자 선택 필요 — 미확립", "Kaul 2016", "2016", false]
      ],
      body: [
        ["세 가지 미충족", [
          "반응 예측 — IFN 표적 치료가 있음에도 대상 환자를 고를 근거가 없음",
          "스테로이드 탈피 — 감량·중단을 안전하게 할 수 있는 환자를 가릴 수단 부재",
          "재발 예방 — 재발을 예고하는 지표가 없어 선제 개입 불가"
        ]],
        ["신약이 왜 안 나왔나", [
          "환자 이질성이 커서 전체 집단 대상 시험에서 효과가 희석됨",
          "진단이 늦어 이미 손상이 누적된 환자가 등록됨",
          "복합 평가지표(responder index)가 실제 효과를 민감하게 잡아내지 못함",
          "→ 분자 subtype 기반 환자 선택이 해결 경로로 지목"
        ]],
        ["소외된 영역", [
          "신경정신 루푸스 — 진단·평가 기준 자체가 없어 시험 설계가 불가에 가까움",
          "소아 SLE — 성인 기준을 그대로 적용하기 어려움",
          "비유럽계 환자 — 유병률과 중증도가 높은데 시험 등록 비율은 낮음"
        ]]
      ],
      related: ["sle-refractory", "sle-response-variability", "sle-drug-update"],
      papers: [["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"]]
    },

    /* ── D-01 유전학 · 오믹스 ───────────────────────────────────────── */
    {
      id: "sle-gwas", section: "omics",
      title: "GWAS는 어떤 유전자와 경로를 지목하는가?",
      aliases: ["GWAS", "C4", "complement", "copy number", "loci", "EBNA2"],
      summary: "보체 C4의 copy number 변이가 SLE 유전학의 특징적 발견 — 단순 SNP을 넘어선 구조 변이가 정량적 위험과 성차를 함께 설명",
      facts: [
        ["보고 loci", "약 100개", "리뷰", "—", true],
        ["최대 특징적 발견", "보체 C4 copy number — 복제수에 따른 정량적 위험", "Kamitaki 2020", "2020", false],
        ["성차", "C4 효과가 남성 > 여성", "Kamitaki 2020", "2020", false],
        ["단일유전자 위험", "C1q·C4 결핍 — 강한 위험", "Kaul 2016", "2016", false],
        ["환경 교차", "위험 loci의 절반을 EBV EBNA2가 점유", "Harley 2018", "2018", false],
        ["수렴 경로", "핵산 감지 · type I IFN · 림프구 활성화", "—", "", true]
      ],
      body: [
        ["보체 C4 — SLE 유전학의 상징", [
          "SNP 배열만으로는 잡히지 않는 copy number 변이가 위험을 정량적으로 조절",
          "복제수가 낮을수록 SLE 위험 상승 — 청소 실패 모델과 일치",
          "같은 변이가 조현병에서는 반대 방향으로 작동 — 맥락 의존성의 대표 사례"
        ]],
        ["나머지 유전 구조", [
          "약 100개 위험 loci가 핵산 감지·type I IFN·림프구 활성화 경로로 수렴",
          "대부분 비암호화 조절 영역에 위치 → 표적 유전자 지목에 fine-mapping과 QTL 통합 필요",
          "희귀 보체 결핍과 흔한 폴리제닉 위험이 같은 경로의 양 끝"
        ]],
        ["유전과 환경이 만나는 지점", [
          "SLE 위험 loci의 절반을 EBV EBNA2가 점유 → 바이러스 단백질이 위험 조절 영역에 결합",
          "유전–환경 상호작용을 유전체 좌표 수준에서 보여준 드문 사례",
          "어느 세포·어느 시점에서 인과적으로 작동하는지는 미규명"
        ]]
      ],
      related: ["sle-genetics", "sle-variant-celltype", "sle-ancestry"],
      papers: [["Kamitaki 2020, Nature", "https://doi.org/10.1038/s41586-020-2277-x"],
               ["Harley 2018, Nat Genet", "https://doi.org/10.1038/s41588-018-0102-3"]]
    },
    {
      id: "sle-variant-celltype", section: "omics",
      title: "위험변이는 어떤 세포에서 작동하는가?",
      aliases: ["sc-eQTL", "cell type", "classical monocyte", "interferon", "colocalization"],
      summary: "SLE 환자 PBMC의 8개 세포유형 단일세포 eQTL 매핑에서 classical monocyte의 type I IFN 반응 유전자가 최고 신호 — GWAS loci를 세포유형에 귀속시킨 사례",
      facts: [
        ["설계", "SLE 환자 PBMC 단일세포 cis-eQTL — 8개 세포유형", "Perez 2022, Science", "2022", false],
        ["최고 신호", "classical monocyte의 type I ISG", "Perez 2022", "2022", false],
        ["세포 조성 변화", "naive CD4⁺ T 감소 · GZMH⁺ CD8⁺ T 증가", "Perez 2022", "2022", false],
        ["방법", "eQTL × GWAS colocalization → loci의 세포유형 귀속·fine-mapping", "Perez 2022", "2022", false],
        ["맥락 특이 효과", "IFN 자극에서만 나타나는 interaction eQTL 발견", "Perez 2022", "2022", false]
      ],
      body: [
        ["세포유형 귀속", [
          "SLE 환자 PBMC를 8개 세포유형으로 나눠 cis-eQTL을 매핑",
          "classical monocyte의 type I interferon 자극 유전자(ISG)에서 신호가 가장 강함",
          "eQTL과 GWAS를 colocalization으로 이어 붙여 위험 loci를 세포유형에 귀속"
        ]],
        ["세포 조성의 변화", [
          "naive CD4⁺ T세포 감소, GZMH⁺ CD8⁺ T세포 증가 — 환자에서 관찰되는 조성 변화",
          "조성 변화와 세포당 발현 변화를 분리한 것이 단일세포 접근의 이득",
          "bulk에서는 이 둘이 뒤섞여 해석이 불가능"
        ]],
        ["맥락 의존 유전 효과", [
          "IFN 자극 조건에서만 나타나는 interaction eQTL 존재 — 정상 상태 데이터로는 못 잡는 신호",
          "유전 효과가 세포 상태에 따라 켜지고 꺼진다는 직접 증거",
          "환자를 IFN 활성 기반 분자 subtype으로 층화하는 근거로도 사용"
        ]],
        ["B세포 축", [
          "억제수용체 FcγRIIB의 기능상실 allele이 SLE 감수성과 연관",
          "MZ B세포는 FcγRIIB를 가장 높게 발현해 하이퍼활성을 억제하는데 SLE 환자에서 이 발현이 최대로 감소",
          "MZ와 follicular B세포 모두 병원성 자가항체를 생산"
        ]]
      ],
      related: ["sle-gwas", "sle-singlecell", "sle-tissue-blood"],
      papers: [["Perez 2022, Science", "https://doi.org/10.1126/science.abf1970"],
               ["Barlev 2022", ""], ["Nashi 2010", ""]]
    },
    {
      id: "sle-singlecell", section: "omics",
      title: "bulk와 single-cell 연구는 무엇을 보여주었는가?",
      aliases: ["single-cell", "IFN signature", "bulk", "deconvolution", "HERV"],
      summary: "bulk에서 확립된 type I IFN signature를 단일세포가 세포유형별로 분해 — 어느 세포가 IFN 신호를 내는지, 조성 변화인지 발현 변화인지가 비로소 갈림",
      facts: [
        ["bulk의 성과", "type I IFN signature — 일관된 hallmark 확립", "Kaul 2016", "2016", false],
        ["bulk의 한계", "세포 조성 변화와 발현 변화의 교란", "—", "", false],
        ["single-cell의 기여", "IFN 신호를 세포유형별로 분해 · classical monocyte 최고", "Perez 2022", "2022", false],
        ["HERV 축", "type I IFN이 HERV-K env 발현을 높여 IFN↔HERV 양성 피드백 형성", "Le 2025", "2025", true],
        ["HERV 조절자", "immunostimulatory HERV-K/W 증가 · 억제자 TRIM28 감소", "Galliano 2026", "2026", true]
      ],
      body: [
        ["bulk가 세운 것과 놓친 것", [
          "type I IFN signature는 bulk 시대에 확립된 SLE의 대표 hallmark",
          "다만 그 신호가 어느 세포에서 오는지, 세포가 늘어난 것인지 세포당 발현이 는 것인지 구분 불가",
          "환자 간 IFN 활성 편차의 원인도 bulk로는 설명되지 않음"
        ]],
        ["single-cell이 바꾼 것", [
          "IFN 신호를 세포유형별로 분해 — classical monocyte가 최고 신호원임을 특정",
          "조성 변화(naive CD4⁺T↓, GZMH⁺CD8⁺T↑)와 발현 변화를 분리",
          "세포유형별 eQTL과 결합해 유전 위험을 세포에 귀속시키는 경로를 열었음"
        ]],
        ["IFN을 되먹이는 후보 엔진", [
          "type I IFN이 골수계 세포에서 HERV-K102/108 env 발현을 높여 IFN↔HERV-K 양성 피드백을 형성",
          "SLE는 만성 IFN 상태라 HERV-K가 이미 고발현 · immunostimulatory HERV-K/W 증가와 억제자 TRIM28 감소가 함께 보고",
          "HERV-K env는 SLE·RA anti-Env 자가항체의 표적이기도 함 — IFN hallmark의 자가 유지 기전 후보"
        ]]
      ],
      related: ["sle-variant-celltype", "sle-progression", "sle-new-method"],
      papers: [["Perez 2022, Science", "https://doi.org/10.1126/science.abf1970"],
               ["Le 2025", ""], ["Galliano 2026", ""]]
    },
    {
      id: "sle-tissue-blood", section: "omics",
      title: "조직·혈액 바이오마커는 얼마나 일치하는가?",
      aliases: ["PBMC", "kidney biopsy", "surrogate", "조직", "혈액", "표적조직"],
      summary: "SLE 오믹스는 대부분 PBMC 기반 — 신장 등 표적조직의 데이터가 부족해 혈액 지표가 장기 병태를 반영하는지 검증되지 않았다",
      facts: [
        ["주 검체", "PBMC — 접근 용이 · 대부분의 오믹스가 여기 기반", "Perez 2022", "2022", false],
        ["표적조직", "신장 · 피부 — 생검 의존 · 데이터 희소", "—", "", false],
        ["조직 eQTL", "표적조직·자극조건 특이 유전 효과는 초기 단계", "Nishide & Kumanogoh 2024", "2024", true],
        ["일치도 추정치", "확인 필요 — 체계적 비교 연구 부족", "—", "", true]
      ],
      body: [
        ["왜 문제인가", [
          "SLE 오믹스 연구의 대부분이 PBMC 기반 — 접근성 때문에 불가피한 선택",
          "실제 손상이 일어나는 곳은 신장·피부·신경계 등 표적조직",
          "혈액 IFN 지표가 신장 병태를 얼마나 반영하는지 검증되지 않음"
        ]],
        ["표적조직 데이터의 장벽", [
          "신장 생검이 필요해 대규모·종단 확보가 어려움",
          "생검은 치료 결정 시점에만 시행되므로 경과를 따라가는 데이터가 되기 어려움",
          "피부는 상대적으로 접근이 쉬우나 신장 병태를 대신하지는 못함"
        ]],
        ["검증에 필요한 것", [
          "동일 환자의 조직·혈액 짝지음(paired sample) 설계",
          "치료 전후 종단 채취 — 변화의 대응 여부까지 확인",
          "자극 조건(IFN)을 포함한 맥락별 eQTL — 정상 상태만으로는 신호를 놓침"
        ]]
      ],
      related: ["sle-variant-celltype", "sle-response-variability", "sle-new-data"],
      papers: [["Perez 2022, Science", "https://doi.org/10.1126/science.abf1970"],
               ["Nishide & Kumanogoh 2024", ""]]
    },
    {
      id: "sle-ancestry", section: "omics",
      title: "ancestry 차이는 무엇인가?",
      aliases: ["ancestry", "인종", "transferability", "PRS", "health disparity"],
      summary: "SLE는 비유럽계에서 유병률과 중증도가 모두 높은데 유전·오믹스 데이터는 반대로 유럽계에 편중 — 부담과 데이터의 방향이 어긋난 대표 사례",
      facts: [
        ["임상 부담", "African·Hispanic·Asian 계통에서 유병률·중증 장기침범 높음", "Tsokos 2011", "2011", false],
        ["데이터", "유전·오믹스 연구는 유럽계 편중", "—", "", true],
        ["C4 구조 변이", "인종 간 복제수 분포 차이 — 위험 추정치에 직접 영향", "Kamitaki 2020", "2020", true],
        ["역학 데이터", "전 세계 국가의 79.8%에 부재", "Global epidemiology of SLE", "2023", false],
        ["PRS 전이성", "확인 필요 — 한국인 코호트 검증 미완", "—", "", true]
      ],
      body: [
        ["부담과 데이터의 어긋남", [
          "비유럽계에서 유병률과 중증도가 모두 높은데 연구 데이터는 유럽계에 편중",
          "역학 데이터조차 전 세계 국가의 79.8%에 부재",
          "부담이 큰 집단일수록 근거가 없는 구조 — 다른 자가면역질환보다 격차가 뚜렷"
        ]],
        ["무엇이 다른가", [
          "C4 copy number 분포가 인종 간 다름 → 같은 변이의 위험 추정치가 이동",
          "HLA 대립유전자 빈도와 LD 구조 차이가 fine-mapping 결과에 영향",
          "사회경제적 접근성 차이가 진단 시점·치료 지속성을 통해 중증도에 반영 — 유전 효과와 분리가 어려움"
        ]],
        ["한국인 관점", [
          "동아시아는 유병률이 높은 축인데 대규모 유전·오믹스 코호트는 부족",
          "유럽계 기반 PRS의 한국인 적용 성능은 별도 검증 없이 사용 금물",
          "이 공백이 국내 코호트 기반 연구의 차별점이 되는 지점"
        ]]
      ],
      related: ["sle-gwas", "sle-demographics", "sle-new-data"],
      papers: [["Kamitaki 2020, Nature", "https://doi.org/10.1038/s41586-020-2277-x"],
               ["Tsokos 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1100359"]]
    },

    /* ── D-02 최신 동향 ─────────────────────────────────────────────── */
    {
      id: "sle-guideline-change", section: "now",
      title: "진료 권고는 최근 어떻게 바뀌었는가?",
      aliases: ["EULAR 2023", "guideline", "진료 권고", "steroid tapering"],
      summary: "EULAR 2023 update의 핵심은 두 가지 — 생물학적 제제를 마지막 수단으로 미루지 않고, 스테로이드 감량·중단을 명시적 목표로 올린 것",
      facts: [
        ["최신 권고", "EULAR SLE 관리 권고 2023 update", "Ann Rheum Dis", "2023", false],
        ["구성", "5개 총괄 원칙 + 13개 권고", "EULAR 2023", "2023", false],
        ["HCQ", "전 환자 · 목표 5 mg/kg 실체중/일 · 망막독성과 재발 위험 함께 고려", "EULAR 2023", "2023", false],
        ["생물학적 제제", "조기 도입 고려 · anifrolumab과 belimumab 사이 위계 없음 · 사전 면역억제제 사용 불필요", "EULAR 2023", "2023", false],
        ["루푸스 신염", "anchor(GC + MMF 또는 저용량 IV CYC) + belimumab 또는 CNI 추가", "EULAR 2023", "2023", false],
        ["분류 기준", "2019 EULAR/ACR — 이후 개정 없음", "Aringer 2019", "2019", true]
      ],
      body: [
        ["무엇이 바뀌었나", [
          "생물학적 제제(anifrolumab·belimumab)의 조기 도입 — 마지막 수단이 아니라 질병을 잡고 스테로이드를 줄이는 수단으로 재배치",
          "두 제제 사이에 위계를 두지 않음 · 사전 면역억제제 사용이 개시 조건이 아님",
          "스테로이드 감량·중단을 명시적 목표로 전면 배치"
        ]],
        ["루푸스 신염", [
          "anchor는 글루코코르티코이드 + mycophenolate 또는 저용량 정맥 cyclophosphamide 유지",
          "belimumab 또는 칼시뉴린 억제제(voclosporin·tacrolimus) 추가를 고려하도록 권고",
          "고품질 무작위연구에서 병용의 반응률 우위가 확인된 것이 근거"
        ]],
        ["갱신 시 확인할 것", [
          "EULAR 다음 update 시점과 주요 변경점",
          "ACR의 SLE·루푸스 신염 권고 최신판 — EULAR와의 차이",
          "국내 진료지침(대한류마티스학회) 반영 여부와 시차 · 보험 급여 기준(생물학적 제제 접근성을 좌우)"
        ]]
      ],
      related: ["sle-drug-update", "sle-standard-tx", "sle-criteria"],
      papers: [["EULAR 2023 update, Ann Rheum Dis", "https://doi.org/10.1136/ard-2023-224762"],
               ["Aringer 2019, Arthritis Rheumatol", "https://doi.org/10.1002/art.40930"]]
    },
    {
      id: "sle-drug-update", section: "now",
      title: "새 치료제와 안전성 정보는 무엇인가?",
      aliases: ["anifrolumab", "voclosporin", "belimumab", "CAR-T", "신약"],
      summary: "type I IFN 수용체를 겨냥한 anifrolumab과 루푸스 신염용 voclosporin의 등장이 60년 신약 빈곤의 실질적 전환점 — 기전 기반 치료가 처음으로 임상에 들어온 사례",
      facts: [
        ["anifrolumab", "type I IFN 수용체 표적 — 신장 외 SLE", "EULAR 2023", "2023", false],
        ["voclosporin", "칼시뉴린 억제제 — 루푸스 신염 병용", "EULAR 2023", "2023", false],
        ["belimumab", "BAFF 표적 — 신장 외 SLE 및 루푸스 신염 병용", "EULAR 2023", "2023", false],
        ["기전적 의미", "IFN 축을 직접 겨냥한 첫 승인 계열", "—", "", true],
        ["안전성 공통 이슈", "감염 — 면역억제 계열 전반", "—", "", true],
        ["CAR-T", "B세포 표적 세포치료 — 초기 관찰 단계", "—", "", true],
        ["국내 허가·급여", "확인 필요", "—", "", true]
      ],
      body: [
        ["기전 기반 치료의 진입", [
          "anifrolumab — type I IFN 수용체를 겨냥 · SLE의 대표 hallmark를 직접 표적한 첫 계열",
          "belimumab — BAFF 표적으로 B세포 생존을 억제 · 신장 외 SLE와 루푸스 신염 병용 양쪽에서 근거",
          "voclosporin — 루푸스 신염 병용에서 반응률 상승"
        ]],
        ["남은 문제", [
          "어떤 환자에게 IFN 표적이 들을지 고를 지표가 없음 — 표적은 생겼는데 대상이 없음",
          "신경정신 루푸스에 대한 근거는 여전히 빈약",
          "감염 위험이 모든 면역억제 계열의 공통 부담"
        ]],
        ["갱신 시 확인할 것", [
          "국내 허가·급여 등재 현황과 해외와의 시차 — 실제 처방 가능 여부를 좌우",
          "CAR-T 등 세포치료의 임상 근거 축적 정도",
          "장기 안전성 데이터 — 특히 감염·악성종양"
        ]]
      ],
      related: ["sle-guideline-change", "sle-unmet", "sle-response-variability"],
      papers: [["EULAR 2023 update, Ann Rheum Dis", "https://doi.org/10.1136/ard-2023-224762"],
               ["Kaul 2016, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2016.39"]]
    },
    {
      id: "sle-new-data", section: "now",
      title: "새 코호트·오믹스 데이터는 무엇이 생겼는가?",
      aliases: ["cohort", "sc-eQTL", "atlas", "새 데이터", "다인종"],
      summary: "SLE 환자 PBMC의 다인종 단일세포 eQTL 자원이 공개되어 참조 기준으로 활용 가능 — 표적조직과 국내 코호트가 남은 공백",
      facts: [
        ["sc-eQTL 자원", "SLE 환자 PBMC 8개 세포유형 cis-eQTL", "Perez 2022, Science", "2022", false],
        ["다인종 포함", "유럽계·아시아계 등 복수 ancestry 포함 설계", "Perez 2022", "2022", true],
        ["전 세계 역학", "체계적 분석·모델링 연구로 국가별 추정치 제공", "Ann Rheum Dis", "2023", false],
        ["표적조직 데이터", "신장 등 — 여전히 희소", "—", "", false],
        ["국내 코호트", "확인 필요 — 가용 한국인 SLE 코호트·바이오뱅크 현황", "—", "", true]
      ],
      body: [
        ["참조로 쓸 수 있게 된 것", [
          "SLE 환자 PBMC의 세포유형별 eQTL — colocalization 분석의 상대 데이터로 직접 활용 가능",
          "IFN 자극 조건의 interaction eQTL — 맥락 의존 효과 검정의 참조",
          "전 세계 역학 모델링 연구 — 국가별 유병·발생 추정치의 기준선"
        ]],
        ["아직 부족한 것", [
          "신장 등 표적조직의 단일세포·eQTL 데이터",
          "조직·혈액 paired 검체 — 공개 자원이 매우 드묾",
          "동아시아 기반 대규모 SLE 오믹스 코호트"
        ]],
        ["갱신 시 확인할 것", [
          "새로 공개된 자원의 ancestry 구성과 표본 규모",
          "데이터 접근 절차(DAC 승인·IRB)와 소요 기간",
          "국내 SLE 코호트·바이오뱅크의 신규 개방 여부"
        ]]
      ],
      related: ["sle-new-method", "sle-ancestry", "sle-tissue-blood"],
      papers: [["Perez 2022, Science", "https://doi.org/10.1126/science.abf1970"]]
    },
    {
      id: "sle-new-method", section: "now",
      title: "새로 쓸 수 있게 된 분석 기법은 무엇인가?",
      aliases: ["sc-eQTL", "interaction eQTL", "colocalization", "분석 기법", "자극조건"],
      summary: "단일세포 eQTL과 자극조건 interaction eQTL의 결합 — 유전 효과가 세포 상태에 따라 켜지고 꺼지는 것을 직접 측정할 수 있게 된 것이 핵심 변화",
      facts: [
        ["sc-eQTL", "세포유형별 유전자 조절 효과 측정", "Perez 2022", "2022", false],
        ["interaction eQTL", "IFN 자극 조건에서만 나타나는 유전 효과 검출", "Perez 2022", "2022", false],
        ["colocalization", "GWAS 신호와 QTL 신호의 인과변이 공유 검정", "—", "", false],
        ["구조 변이 분석", "C4 등 copy number를 SNP 배열에서 추정하는 접근", "Kamitaki 2020", "2020", true],
        ["공간전사체", "신장 조직에의 적용 — 확인 필요", "—", "", true]
      ],
      body: [
        ["맥락 의존 효과의 측정", [
          "정상 상태 eQTL만으로는 SLE 위험변이의 상당수가 신호를 내지 않음",
          "IFN 자극 조건에서만 나타나는 interaction eQTL — 질병 맥락에서만 켜지는 유전 효과를 직접 포착",
          "\"유전 효과는 고정된 값\"이라는 전제를 깨는 결과"
        ]],
        ["구조 변이", [
          "보체 C4처럼 copy number가 위험을 만드는 경우 SNP 기반 GWAS만으로는 놓침",
          "SNP 배열에서 구조 변이를 추정하는 접근이 이 신호를 복원",
          "SLE는 구조 변이 분석의 필요성을 보여준 대표 질환"
        ]],
        ["갱신 시 확인할 것", [
          "새 기법의 검증 수준 — 단일 데이터셋인지 다중 벤치마크를 거쳤는지",
          "필요 표본 규모와 비용 — 국내 코호트로 적용 가능한 수준인지",
          "참조 아틀라스 의존 기법의 경우 참조의 ancestry 구성"
        ]]
      ],
      related: ["sle-new-data", "sle-variant-celltype", "sle-singlecell"],
      papers: [["Perez 2022, Science", "https://doi.org/10.1126/science.abf1970"],
               ["Kamitaki 2020, Nature", "https://doi.org/10.1038/s41586-020-2277-x"]]
    }
  ];

  /* ── glossary ────────────────────────────────────────────────────────── */
  const glossaryTerms = {
    "ana": { key: "ana", definition: "Antinuclear antibody(항핵항체). SLE 분류의 필수 관문이나 건강인에서도 흔히 양성." },
    "anti-dsdna": { key: "dsdna", definition: "이중가닥 DNA에 대한 자가항체. SLE에 특이적이고 신염·질병활성도와 연관." },
    "type i interferon": { key: "ifn", definition: "핵산 감지로 유도되는 사이토카인 축. SLE의 대표 hallmark이자 anifrolumab의 표적." },
    "보체": { key: "comp", definition: "면역복합체·apoptotic debris 청소를 담당. C1q·C4 결핍이 강한 SLE 위험." },
    "c4": { key: "c4", definition: "보체 C4. copy number 변이가 SLE 위험을 정량적으로 조절하며 효과에 성차가 있음." },
    "ebna2": { key: "ebna2", definition: "EBV 핵항원 2. SLE 위험 loci의 절반을 점유해 유전-환경 상호작용을 시사." },
    "lupus nephritis": { key: "ln", definition: "루푸스 신염. SLE 예후를 가르는 최대 분기로 경과 중 30–50%에서 발생." },
    "hydroxychloroquine": { key: "hcq", definition: "SLE 전 환자에게 권고되는 기본 약제. 재발·손상 억제와 생존 개선에 연관." },
    "belimumab": { key: "beli", definition: "BAFF를 표적해 B세포 생존을 억제하는 생물학적 제제." },
    "anifrolumab": { key: "anif", definition: "type I IFN 수용체를 표적하는 생물학적 제제. 신장 외 SLE에 사용." },
    "sledai": { key: "sledai", definition: "SLE 질병활성도 지수. 활성도 측정용이며 누적 손상은 별도 지표로 잰다." },
    "herv": { key: "herv", definition: "Human endogenous retrovirus. IFN에 의해 발현이 오르며 IFN 되먹임 후보." },
    "colocalization": { key: "coloc", definition: "GWAS 신호와 QTL 신호가 같은 인과변이를 공유하는지 검정하는 방법." }
  };
  const glossaryPattern = /(^|[^A-Za-z0-9가-힣])(ANA|anti-dsDNA|type I interferon|보체|C4|EBNA2|lupus nephritis|hydroxychloroquine|belimumab|anifrolumab|SLEDAI|HERV|colocalization)(?=$|[^A-Za-z0-9])/gi;

  return { meta: meta, acts: acts, sections: sections, articles: articleList, glossaryTerms: glossaryTerms, glossaryPattern: glossaryPattern };
})();
