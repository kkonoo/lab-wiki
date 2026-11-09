window.DISEASE = (function () {
  const meta = {
    id: "ra",
    title: "Rheumatoid Arthritis (RA)",
    domain: "Autoimmune",
    updated: "2026-11-09"
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
        { q: "어떻게 정의하고 분류하는가?", note: "활막을 표적으로 하는 만성 자가면역 전신질환", article: "ra-definition" },
        { q: "비슷한 질환과 무엇이 다른가?", note: "OA · PsA · SLE · gout 감별", article: "ra-differential" },
        { q: "주요 아형은 무엇인가?", note: "자가항체 유무로 seropositive / seronegative 구분", article: "ra-subtypes" }
      ] },
    epi: { number: "02", title: "역학 · 질병부담", act: "A",
      questions: [
        { q: "세계와 한국에서 얼마나 흔한가?", note: "유병률 · 발생률 · 환자 수", article: "ra-prevalence" },
        { q: "발생률·유병률은 증가하는가?", note: "연령표준화 발생률은 완만, 고령화로 유병 인구는 증가", article: "ra-trend" },
        { q: "어떤 연령·성별·집단에서 많이 발생하는가?", note: "성비 · 호발 연령 · 지역·인종", article: "ra-demographics" },
        { q: "질병부담과 사회경제적 영향은 얼마나 큰가?", note: "기능 장애로 노동이 손실되고 의료비가 늘어남", article: "ra-burden" }
      ] },
    risk: { number: "01", title: "원인 · 위험인자", act: "B",
      questions: [
        { q: "주요 위험인자는 무엇인가?", note: "흡연 · 치주염 · 성호르몬 · 비만", article: "ra-riskfactors" },
        { q: "유전과 환경은 각각 얼마나 기여하는가?", note: "유전율 · HLA · 폴리제닉 · GxE", article: "ra-genetics" },
        { q: "질병은 어떤 장기·조직·세포에서 시작되는가?", note: "관절이 아닌 점막(폐·구강·장)", article: "ra-mucosal-origin" },
        { q: "보호요인과 촉발요인은 무엇인가?", note: "보호 쪽은 금연·식이, 촉발 쪽은 감염·스트레스·출산", article: "ra-protective-triggers" }
      ] },
    course: { number: "02", title: "발병 · 진행", act: "B",
      questions: [
        { q: "발병 전에는 어떤 변화가 일어나는가?", note: "자가항체가 먼저 나오고 at-risk를 거쳐 임상 발현", article: "ra-preclinical" },
        { q: "초기에서 말기까지 어떤 경로를 밟는가?", note: "활막염 → 연골 소실 → 골미란 → 변형", article: "ra-progression" },
        { q: "환자마다 진행속도와 표현형이 다른 이유는 무엇인가?", note: "자가항체 · 유전 배경 · 활막 세포 조성", article: "ra-heterogeneity" },
        { q: "주요 합병증과 사망 원인은 무엇인가?", note: "심혈관 · RA-ILD · 감염", article: "ra-complications" }
      ] },
    dx: { number: "01", title: "진단 · 분류", act: "C",
      questions: [
        { q: "초기 증상은 무엇인가?", note: "대칭성 소관절 종창 · 아침 강직", article: "ra-symptoms" },
        { q: "현재 진단 기준은 무엇인가?", note: "ACR/EULAR 2010(4개 항목 합산)", article: "ra-criteria" },
        { q: "어떤 검사와 바이오마커를 사용하는가?", note: "ACPA·RF · CRP·ESR · 초음파·MRI", article: "ra-tests" },
        { q: "조기진단이 어려운 이유는 무엇인가?", note: "비특이 초기 소견 · seronegative · 기준의 한계", article: "ra-dxdelay" },
        { q: "아형·중증도·예후를 어떻게 구분하는가?", note: "질병활성도 지표 · 예후 불량 인자", article: "ra-severity" }
      ] },
    tx: { number: "02", title: "치료 · 미충족 수요", act: "C",
      questions: [
        { q: "현재 표준 치료는 무엇인가?", note: "treat-to-target에 따라 csDMARD에서 bDMARD·tsDMARD로", article: "ra-standard-tx" },
        { q: "어떤 환자에게 효과가 있는가?", note: "조기 치료의 이득 · 관해 도달률의 한계", article: "ra-response" },
        { q: "치료반응이 다른 이유는 무엇인가?", note: "동일 진단 내 분자·세포 병태의 혼재", article: "ra-response-variability" },
        { q: "불응·재발·부작용 문제는 무엇인가?", note: "D2T RA · 중단 후 재발 · 감염과 안전성", article: "ra-refractory" },
        { q: "아직 충족되지 않은 임상적 필요는 무엇인가?", note: "반응 예측 · 중단 가능 환자 식별 · 예방", article: "ra-unmet" }
      ] },
    omics: { number: "01", title: "유전학 · 오믹스", act: "D",
      questions: [
        { q: "GWAS는 어떤 유전자와 경로를 지목하는가?", note: "HLA · 101 loci · 면역 활성화 경로", article: "ra-gwas" },
        { q: "위험변이는 어떤 세포에서 작동하는가?", note: "T·B세포와 기질세포 · coloc과 sc-eQTL", article: "ra-variant-celltype" },
        { q: "bulk와 single-cell 연구는 무엇을 보여주었는가?", note: "혼재된 활막에서 기능적 subset을 분리함", article: "ra-singlecell" },
        { q: "조직·혈액 바이오마커는 얼마나 일치하는가?", note: "활막 생검의 장벽 · 혈액 대리지표의 한계", article: "ra-tissue-blood" },
        { q: "ancestry 차이는 무엇인가?", note: "유럽계에 편중되어 효과 전이성과 PRS 성능이 문제됨", article: "ra-ancestry" }
      ] },
    now: { number: "02", title: "최신 동향", act: "D",
      questions: [
        { q: "진료 권고는 최근 어떻게 바뀌었는가?", note: "분류 기준 · treat-to-target · D2T 정의", article: "ra-guideline-change" },
        { q: "새 치료제와 안전성 정보는 무엇인가?", note: "계열이 늘었고, JAKi 안전성 정보로 처방이 조정됨", article: "ra-drug-update" },
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
      summary: "활막(synovium)을 표적으로 하는 만성 전신 자가면역질환. 치료하지 않으면 관절이 비가역적으로 파괴되고 장애가 남음",
      facts: [
        ["질환 분류", "만성 염증성 자가면역질환", "—", "", false],
        ["표적 조직", "활막(synovium), 이차적으로 연골·골", "—", "", false],
        ["침범 범위", "관절 + 관절 외(폐·혈관·눈·피부)", "—", "", false],
        ["ICD-10", "M05 (seropositive) · M06 (기타)", "WHO ICD-10", "", true]
      ],
      body: [
        ["무엇을 RA라 부르는가", [
          "활막의 만성 염증이 연골·골 파괴로 이어지는 자가면역질환",
          "면역계가 자기 조직을 공격함. 마모로 생기는 퇴행성 관절질환과는 근본적으로 다름",
          "염증이 활막에 국재함. 다른 전신 자가면역질환과 구분되는 지점"
        ]],
        ["왜 전신질환인가", [
          "관절 외(extra-articular) 침범: 폐·혈관·눈·피부",
          "만성 전신 염증이 동맥경화를 촉진해서 심혈관 위험이 올라감",
          "\"관절 질환\"으로만 다룰 경우 사망률 기여분을 놓침"
        ]],
        ["분류 체계", [
          "1차 축: 자가항체 유무(seropositive / seronegative)",
          "2차 축: 질병활성도(관해·저활성·중등도·고활성). 치료 조정의 기준",
          "분자·세포 수준 재분류(molecular taxonomy)는 미확립"
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
      summary: "손·발 소관절의 대칭성 침범과 염증지표 상승으로 골관절염과 감별함. 자가항체 프로파일과 관절 외 침범 양상으로 다른 염증성 관절염과 감별함",
      facts: [
        ["골관절염 (OA)", "퇴행성 · 비대칭 · 체중부하 관절 · 염증지표 정상", "—", "", false],
        ["건선관절염 (PsA)", "부착부염 · 지염 · 피부병변 · 대개 ACPA 음성", "—", "", false],
        ["전신홍반루푸스 (SLE)", "대개 비미란성 관절염 · 신장·피부·혈액 침범 · ANA 프로파일", "—", "", false],
        ["통풍 (gout)", "급성 단관절 발작 · 결정(crystal) 확인으로 확진", "—", "", false]
      ],
      body: [
        ["염증성인가 퇴행성인가", [
          "OA: 마모로 생기는 퇴행성 변화 · 비대칭 · 무릎·고관절 등 체중부하 관절 중심",
          "RA: 손·손목·발 소관절의 좌우 대칭 침범 · CRP·ESR 상승",
          "아침 강직은 RA에서 30분 이상 지속되고, OA에서는 짧고 활동으로 곧 완화됨"
        ]],
        ["다른 염증성 관절염과의 감별", [
          "PsA: 부착부염(enthesitis)·지염(dactylitis)·피부와 손발톱 병변 · 대개 ACPA 음성",
          "SLE: 통증에 비해 미란이 드묾 · 신장·혈액 침범 · 항핵항체 프로파일 상이",
          "통풍: 급성 단관절 발작 · 관절액 결정(crystal) 확인으로 확진"
        ]],
        ["감별이 어려운 상황", [
          "초기 RA는 소견이 비특이적임. 미분화 관절염(undifferentiated arthritis)으로 분류되는 구간이 있음",
          "seronegative RA에는 자가항체라는 결정적 단서가 없음",
          "중복증후군(overlap syndrome)에서는 여러 질환의 소견이 섞여 있음"
        ]]
      ],
      related: ["ra-definition", "ra-symptoms", "ra-subtypes"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-subtypes", section: "def",
      title: "주요 아형은 무엇인가?",
      aliases: ["seropositive", "seronegative", "ACPA", "RF", "subtype", "아형"],
      summary: "1차 분류축은 자가항체 유무. seropositive와 seronegative는 유전 배경·경과·치료반응이 달라서 별개 질환군일 가능성이 제기됨",
      facts: [
        ["seropositive", "ACPA 및/또는 RF 양성 · 환자의 대략 2/3", "Primer", "2018", true],
        ["seronegative", "자가항체 음성 · 진단이 더 늦어지는 경향", "Primer", "2018", true],
        ["유전 연관 차이", "HLA shared epitope 연관은 seropositive에 집중", "Raychaudhuri 2012", "2012", false],
        ["관절 파괴", "seropositive에서 더 빠른 경향", "리뷰 합의", "", true]
      ],
      body: [
        ["seropositive RA", [
          "ACPA 및/또는 RF 양성 · HLA shared epitope 연관 뚜렷 · 흡연과의 상호작용도 여기에 집중",
          "자가항체가 증상보다 수년 앞서 나와서 임상 전 단계를 관찰할 수 있는 유일한 아형",
          "관절 파괴의 진행 속도가 더 빠른 경향"
        ]],
        ["seronegative RA", [
          "자가항체가 음성이면 분류 기준 점수에 미달해서 진단이 늦어짐",
          "HLA 연관이 불명확해서 유전 구조 자체가 다를 가능성",
          "다른 질환(척추관절염 계열 등)의 혼입 가능성 지적"
        ]],
        ["다른 분류 축", [
          "발병 연령: 고령 발병 RA(elderly-onset)는 큰 관절 침범과 전신 증상이 우세함",
          "치료 반응: difficult-to-treat RA를 별도로 범주화함 (C-02 치료 참조)",
          "두 축 모두 임상 관찰에 기반하고 분자적 근거는 미확보"
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
      summary: "전 세계 환자 약 1,760만명(GBD 2021, 2020년), 한국 진료 인원 254,778명(HIRA 2022). 추정 방식에 따라 유병률이 0.21%(GBD)~1%(임상 문헌)로 갈림",
      facts: [
        ["전 세계 환자 수", "1,760만명", "GBD 2021 (Lancet Rheumatol 2023)", "2020", false],
        ["연령표준화 유병률", "10만명당 208.8 (≈ 0.21%)", "GBD 2021", "2020", false],
        ["임상 문헌 유병률", "약 0.5–1%, GBD 추정과 2~5배 괴리 (아래 주의 참조)", "Primer·리뷰", "2018–", false],
        ["한국 진료 인원", "254,778명", "HIRA 청구자료", "2022", false],
        ["한국 인구 대비", "약 0.5%(진료 인원 기준 단순 환산치)", "HIRA 2022 기반 계산", "2022", true],
        ["2050년 예측", "3,170만명 (2020 대비 +80.2%)", "GBD 2021", "—", false],
        ["연령표준화 발생률", "10만명당 11.8, 1990년 10.4에서 증가", "GBD 2021", "2021", false],
        ["60세 이상 발생률", "10만명당 30.3, 연령에 따라 급증", "GBD 2021", "2021", false]
      ],
      body: [
        ["전 세계", [
          "유병률 대략 0.5–1%로 자가면역질환 중 가장 흔한 축",
          "지역·인종 간 편차가 커서 인용할 때 출처와 연도를 함께 적어야 함",
          "일부 원주민 집단에서 유병률이 현저히 높아서 유전 배경의 기여를 시사함"
        ]],
        ["한국", [
          "주 출처는 건강보험 청구자료(HIRA·NHIS) 기반 연구",
          "청구자료의 한계: 진단코드에 기반해서 과대 또는 과소 추정이 가능함. 인용할 때 한계를 함께 적음",
          "교차 확인 경로는 산정특례·희귀질환 등록 자료"
        ]],
        ["수치를 읽을 때 주의할 점", [
          "GBD와 임상 문헌의 괴리: GBD 연령표준화 유병률 0.21%, 임상 문헌 0.5–1%로 2~5배 차이. 사례 정의와 모델링 방식이 달라서 두 값을 섞어 쓰지 않음",
          "한국 수치는 유병률이 아니라 진료 인원(청구 발생 기준). 무증상·미진단·미수진 환자는 빠져 있음",
          "유병률(prevalence)과 발생률(incidence)을 섞어 쓰지 않음. 만성질환이라 둘의 괴리가 큼",
          "진단 기준이 개정되면 실제 변화 없이도 유병률이 변동함",
          "연구마다 대상 연령대(전체 인구 vs 성인)가 달라서 직접 비교가 안 되는 경우가 많음"
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
      summary: "연령표준화 유병률은 1990→2020 +14.1%로 완만하게 늘었고, 환자 수는 2050년 3,170만명으로 +80.2% 전망. 두 지표의 증가 폭이 크게 다르므로 구분해서 씀",
      facts: [
        ["연령표준화 유병률 추세", "1990→2020 +14.1%로 완만한 증가", "GBD 2021", "2020", false],
        ["유병 환자 수 추세", "2020년 1,760만 → 2050년 3,170만 (+80.2%)", "GBD 2021", "—", false],
        ["연령표준화 사망률", "10만명당 0.47, 1990 대비 −23.8%", "GBD 2021", "2020", false],
        ["한국 추세", "244,786명(2020) → 254,778명(2022) · +4.1%", "HIRA 청구자료", "2022", false],
        ["추세 해석 주의", "진단 기준 개정·의료 접근성 변화가 겉보기 추세를 만든다", "—", "", false]
      ],
      body: [
        ["두 지표의 분기", [
          "연령표준화 발생률 — \"동일 연령 구조에서의 신규 발생\" · 비교적 안정",
          "유병 환자 수는 고령화와 생존 기간 연장으로 증가함. 치료 향상이 오히려 증가 요인",
          "\"RA가 늘고 있다\" — 지표 명시 없이는 오해 소지"
        ]],
        ["겉보기 추세를 만드는 요인", [
          "분류 기준 개정: 기준이 넓어지면 실제 변화 없이 유병률이 올라감",
          "의료 접근성과 진단 인식이 좋아지면 과거에 못 잡던 환자가 들어와서 발생률 상승처럼 관측됨",
          "흡연은 seropositive RA의 주요 환경 위험인자여서 인구 흡연율 추이가 발생률에 반영됨"
        ]],
        ["한국에서 확인할 것", [
          "청구자료 연도별 추이는 코드 부여 관행 변화에 민감함. 급격히 꺾이면 제도 변화를 먼저 의심함",
          "고령 인구 비중이 빠르게 올라서 조유병률과 연령표준화 유병률을 반드시 나눠 봄"
        ]]
      ],
      related: ["ra-prevalence", "ra-demographics", "ra-burden"],
      links: [["IHME — GBD Compare", "https://vizhub.healthdata.org/gbd-compare/"]]
    },
    {
      id: "ra-demographics", section: "epi",
      title: "어떤 연령·성별·집단에서 많이 발생하는가?",
      aliases: ["sex ratio", "age of onset", "성비", "호발 연령", "ancestry"],
      summary: "연령표준화 여:남 유병률비 2.45(GBD 2021), 발병 정점 40–60대. 성별 편중은 성호르몬과 임신·출산이 위험을 조절한다는 관찰과 연결됨",
      facts: [
        ["성비 (여 : 남)", "연령표준화 유병률비 2.45", "GBD 2021", "2020", false],
        ["성비 — 임상 문헌", "약 2–3 : 1", "Primer", "2018", false],
        ["발병 정점 연령", "40–60대", "Primer", "2018", false],
        ["고령 발병 RA", "성비 차이가 줄고 큰 관절 침범이 두드러짐", "리뷰", "", true],
        ["지역·인종 차이", "일부 원주민 집단에서 높은 유병률 보고", "리뷰", "", true]
      ],
      body: [
        ["성별", [
          "여성 : 남성 약 2–3 : 1로 자가면역질환 전반의 여성 편중과 같은 방향",
          "임신 중에는 관해되고 출산 후에는 악화되어, 성호르몬이 질병활성도를 조절함을 시사",
          "고령 발병에서 성비 차이 축소 경향"
        ]],
        ["연령", [
          "발병 정점은 40–60대이고 젊은 성인에서도 발생함",
          "고령 발병 RA(elderly-onset)는 큰 관절 침범과 전신 증상이 우세해서 임상 양상이 다름",
          "소아기 발병은 별개 질환(소아 특발성 관절염)으로 분류함"
        ]],
        ["집단", [
          "일부 원주민 집단에서 유병률이 높아서 유전 배경의 기여를 시사함",
          "지역 간 격차의 상당 부분은 흡연율과 인구 연령 구조로 설명됨",
          "동아시아 역학·유전 데이터는 유럽계에 비해 부족함"
        ]]
      ],
      related: ["ra-prevalence", "ra-riskfactors", "ra-gwas"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-burden", section: "epi",
      title: "질병부담과 사회경제적 영향은 얼마나 큰가?",
      aliases: ["burden", "DALY", "질병부담", "생산성 손실", "의료비", "work disability"],
      summary: "전 세계 DALY 306만 중 YLD가 76.4%로, 사망보다 장애가 부담의 중심. 국내 진료비는 2년 새 14.1% 증가(HIRA 2020→2022)",
      facts: [
        ["DALY", "306만 (연령표준화 10만명당 36.4)", "GBD 2021", "2020", false],
        ["DALY 구성", "YLD(장애 생존)가 76.4%로 사망보다 장애가 부담의 중심", "GBD 2021", "2020", false],
        ["전 세계 사망", "38,300명", "GBD 2021", "2020", false],
        ["국내 진료비", "2,936억원(2020) → 3,348억원(2022) · +14.1%", "HIRA 청구자료", "2022", false],
        ["노동 능력 상실", "확인 필요. 발병 후 취업 유지율 감소 보고", "코호트 연구", "", true],
        ["기대수명", "심혈관 동반질환으로 단축", "리뷰 합의", "", false]
      ],
      body: [
        ["부담의 발생 지점", [
          "관절이 파괴되면 기능 장애로 노동 능력을 잃음. 직접 의료비보다 생산성 손실의 비중이 클 수 있음",
          "호발 연령이 40–60대여서 경제활동이 활발한 연령대에서 손실이 큼",
          "심혈관 동반질환으로 기대수명이 단축됨. 관절 증상과는 별개의 부담"
        ]],
        ["비용 구조의 변화", [
          "생물학적 제제가 도입되면서 약제비가 급증했고, 비용 중심이 입원·수술에서 약제로 옮겨 감",
          "동시에 관절 변형과 관절치환술이 줄어서 장기 비용의 방향은 단순하지 않음",
          "\"치료비 증가\"와 \"사회적 부담 증가\"는 동일한 진술이 아님"
        ]],
        ["삶의 질", [
          "통증·피로·기능 제한이 우울·수면 장애로 이어지는 경우가 흔함",
          "환자보고 결과(PRO)로 드러나는 부담은 염증지표만으로는 잡히지 않음",
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
      summary: "흡연은 seropositive RA에서 재현성이 가장 높은 환경 위험인자. 그다음이 치주염·비만·여성 호르몬",
      facts: [
        ["최대 환경 위험인자", "흡연 (seropositive RA)", "리뷰 합의", "", false],
        ["구강", "치주염 · P. gingivalis 등 구강 미생물", "Holers 2018", "2018", true],
        ["대사", "비만에서 위험 상승 보고 · 효과 크기는 연구별 편차", "코호트 연구", "", true],
        ["호르몬", "여성 호르몬·출산력이 위험과 발병 시점을 조절함. 생식기간이 짧거나 폐경이 이르면 발병 위험 증가", "Volkmann 2026, Nat Rev Rheumatol", "2026", false],
        ["직업·환경 노출", "실리카 등 흡입성 분진이 폐 점막 경로를 시사", "리뷰", "", true]
      ],
      body: [
        ["가장 확립된 인자, 흡연", [
          "seropositive RA에서 재현성이 가장 높고 seronegative에서는 연관이 약함",
          "용량과 기간에 따라 위험이 올라감. 금연 후에도 위험은 서서히만 감소",
          "폐 점막에서 citrullination을 유도해서 점막 기원 가설과 직접 연결됨"
        ]],
        ["그 밖의 인자", [
          "치주염: 구강 미생물이 단백질 citrullination을 유도한다는 가설과 함께 연관이 보고됨",
          "비만: 위험 상승이 보고되었고, 지방조직에서 나오는 염증성 매개체가 기전으로 제시됨",
          "여성 호르몬과 출산력이 위험과 발병 시점을 조절함. 효과 방향은 단순하지 않음",
          "실리카 등 흡입성 분진은 직업 노출 연구에서 위험 상승이 보고됨"
        ]],
        ["위험인자 해석의 주의", [
          "대부분 관찰연구에 기반해서 교란과 역인과를 배제하기 어려움",
          "seropositive/seronegative에서 효과가 갈리므로 아형 구분 없는 추정치는 희석됨",
          "Mendelian randomization은 관찰 연관의 인과성을 검정하는 데 쓰는 접근"
        ]]
      ],
      related: ["ra-genetics", "ra-mucosal-origin", "ra-protective-triggers"],
      papers: [["McInnes & Schett 2011, N Engl J Med", "https://doi.org/10.1056/NEJMra1004965"],
               ["Holers 2018, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-018-0070-0"],
               ["Volkmann 2026, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-026-01405-2"]]
    },
    {
      id: "ra-genetics", section: "risk",
      title: "유전과 환경은 각각 얼마나 기여하는가?",
      aliases: ["HLA", "shared epitope", "heritability", "GWAS", "gene-environment interaction", "유전율"],
      summary: "seropositive RA 유전 위험이 가장 집중된 곳은 HLA-DRβ1 peptide-binding groove의 아미노산 모티프(shared epitope). 나머지는 작은 효과가 다수 더해지는 폴리제닉 구조",
      facts: [
        ["유전율 (쌍둥이 연구)", "약 60%, seropositive에서 더 높음", "쌍둥이 연구", "", true],
        ["최대 단일 위험 영역", "HLA-DRB1 (shared epitope)", "Raychaudhuri 2012", "2012", false],
        ["보고된 위험 loci", "trans-ethnic GWAS 101개", "Okada 2014", "2014", false],
        ["유전×환경", "흡연 × HLA shared epitope가 위험을 상승적으로 키움", "리뷰 합의", "", false],
        ["seronegative 유전 구조", "HLA 연관이 불명확해서 별도 검증 필요", "—", "", true]
      ],
      body: [
        ["유전의 몫", [
          "쌍둥이 연구에 기반한 유전율은 약 60%이고 seropositive에서 더 높게 추정됨",
          "MHC 연관을 아미노산 수준까지 좁혀서 shared epitope의 분자적 실체를 규정함",
          "위험 HLA는 두 방향으로 작동함: citrullinated self-peptide를 T세포에 제시하고, 자가반응 TCR을 선택함",
          "MHC 밖 위험은 작은 효과의 변이 다수가 합쳐진 폴리제닉 구조. trans-ethnic GWAS에서 101개 loci"
        ]],
        ["환경의 몫", [
          "흡연이 seropositive RA 환경 위험의 중심이고 그 외는 효과 크기가 작음",
          "유전 배경에 따라 효과가 달라져서 환경 단독 기여를 분리해 추정하기 어려움"
        ]],
        ["둘의 상호작용", [
          "흡연 × HLA shared epitope는 각각의 합보다 큰 위험을 만듦(gene-environment interaction)",
          "\"유전 몇 % · 환경 몇 %\"의 단순 분할이 성립하지 않는 근거",
          "보고된 loci가 설명하는 유전율은 전체의 일부. 나머지가 어디에 있는지(rare variant · 상호작용 · 미검출 common variant)는 미해결"
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
      summary: "seropositive RA의 개시 부위는 관절이 아니라 폐·구강·장 점막일 가능성. 관절 증상 이전 단계에 개입 표적이 있음을 시사",
      facts: [
        ["개시 추정 부위", "관절이 아닌 점막(폐·구강·장)", "Holers 2018", "2018", false],
        ["at-risk 단계 관찰", "국소 ACPA 생성 · 점막 염증 · dysbiosis · NET 형성", "Holers 2018", "2018", false],
        ["폐 경로", "흡연·실리카 노출과 연결됨", "리뷰", "", true],
        ["구강 경로", "치주염 · 구강 미생물이 citrullination을 유도한다는 가설", "리뷰", "", true]
      ],
      body: [
        ["점막 개시", [
          "관절보다 점막에서 먼저 시작된다는 근거가 쌓이는 중",
          "임상 전(at-risk) 단계에서 관찰되는 것: 국소 ACPA 생성 · 점막 염증 · dysbiosis · NET(neutrophil extracellular trap) 형성",
          "관절 증상 이전 단계가 예방적 개입이 이론적으로 가능한 유일한 창(window)"
        ]],
        ["세 점막 경로", [
          "폐: 흡연·실리카 등 흡입성 노출과 직접 연결되고 seropositive RA에서 가장 유력",
          "구강: 치주염, 그리고 구강 미생물이 citrullination을 유도한다는 가설",
          "장: microbiome 불균형과의 연관이 보고됨. 인과 방향은 미확정"
        ]],
        ["관절로의 전환", [
          "점막 자가항체가 전신 자가면역과 관절염으로 전환되는 기전은 미해결",
          "전환 이후 활막으로의 국재화 기전도 별도 미해결",
          "이 전환 지점이 RA 예방의 표적으로 지목됨"
        ]]
      ],
      related: ["ra-riskfactors", "ra-preclinical", "ra-variant-celltype"],
      papers: [["Holers 2018, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-018-0070-0"]]
    },
    {
      id: "ra-protective-triggers", section: "risk",
      title: "보호요인과 촉발요인은 무엇인가?",
      aliases: ["protective factor", "trigger", "smoking cessation", "pregnancy", "보호요인", "촉발요인"],
      summary: "확립된 보호요인은 금연 하나뿐이고, 식이·미생물 등 나머지 후보는 관찰연구 수준. 촉발요인으로 감염·출산·스트레스가 거론되나 인과 근거는 부족",
      facts: [
        ["확립된 보호요인", "금연. 다만 위험 감소는 서서히 진행", "리뷰 합의", "", true],
        ["보호 후보", "식이 패턴 · 오메가-3 등, 관찰연구 수준", "관찰연구", "", true],
        ["임신", "임신 중에는 관해, 출산 후에는 악화와 발병 위험 상승", "리뷰", "", true],
        ["감염", "발병 촉발 후보로 거론되나 인과 근거 부족", "—", "", true]
      ],
      body: [
        ["보호 쪽", [
          "금연은 유일하게 개입할 수 있는 확립 요인. 위험 감소는 수년에 걸쳐 서서히 진행",
          "식이 패턴·오메가-3 등은 관찰연구에서 연관이 보고됨. 개입 근거는 부족",
          "구강 위생·치주 관리는 기전적 타당성은 있으나 발병 예방 효과가 미검증"
        ]],
        ["촉발 쪽", [
          "출산: 산후 발병 위험 상승이 보고됨. 임신 중 관해와 대비되는 현상",
          "감염: 발병 촉발 후보로 반복 거론되나 특정 병원체와의 인과는 미확립",
          "스트레스·생활사건은 회상 편향(recall bias)이 커서 해석에 주의"
        ]],
        ["근거 수준의 한계", [
          "대부분 후향적 관찰연구여서 역인과와 회상 편향을 배제하기 어려움",
          "at-risk 코호트를 전향적으로 추적해야 하나 규모가 작음",
          "Mendelian randomization은 인과 방향을 검정하는 우회 경로"
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
      summary: "ACPA·RF가 혈청에서 관절 증상보다 수년 먼저 검출되고, ACPA 양성에 근골격 증상이 있으면 20–60%(중앙값 32%)가 실제로 발병함. 임상 이전에 긴 잠복 단계가 있음",
      facts: [
        ["자가항체 선행 기간", "관절 증상 수년 전", "Smolen 2018", "2018", false],
        ["선행 자가항체", "anti-CCP(ACPA) · rheumatoid factor(RF)", "Primer", "2018", false],
        ["at-risk 진행률", "ACPA 양성 + 근골격 증상에서 20–60% (중앙값 약 32%), 수년 내", "코호트 종합", "—", false],
        ["고위험 층", "고역가 ACPA에 임상의심 관절통(CSA)이 있으면 2년 내 약 50%", "코호트", "—", true],
        ["예측 지표", "없음. 진행자를 가려낼 수단이 없음", "—", "", false]
      ],
      body: [
        ["임상 전 잠복 단계", [
          "anti-CCP(ACPA)·RF가 혈청에 나타나는 시점은 관절 증상 수년 전",
          "진단 시점 = 질병의 시작이 아니라 이미 상당히 진행된 시점",
          "ACPA의 표적은 citrullination 등 번역후변형(PTM) 항원. 가변부에 N-glycosylation이 더해지고, 이 가변부 glycan의 발병 예측력이 보고됨"
        ]],
        ["단계의 구획", [
          "유전 위험 보유 → 환경 노출 → 점막 자가면역 개시 → 전신 자가항체 → 관절통(무종창) → 임상 관절염",
          "각 단계의 소요 기간과 이행률은 코호트별 편차가 커서 확정하기 어려움",
          "관절통이 있으나 종창이 없는 구간(arthralgia)이 개입 시험의 주 대상"
        ]],
        ["이 단계의 중요성", [
          "발병 자체를 막을 수 있는 유일한 구간. 발병 후 치료는 억제이지 예방이 아님",
          "ACPA 양성자가 모두 진행하지는 않는데, 진행자를 가려낼 예측 지표가 없음",
          "예측 지표가 없어서 예방 임상시험 설계가 막혀 있음"
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
      summary: "치료하지 않으면 활막염 → 연골 소실 → 골미란 → 관절 변형으로 진행함. 활막 fibroblast가 이 파괴를 능동적으로 구동함",
      facts: [
        ["진행 경로", "활막염 → 연골 소실 → 골미란 → 관절 변형", "—", "", false],
        ["염증 매개 subset", "FAP⁺THY1⁺ (sub-lining)", "Croft 2019", "2019", false],
        ["파괴 매개 subset", "FAP⁺THY1⁻ (lining)", "Croft 2019", "2019", false],
        ["골 파괴 경로", "RANKL·M-CSF가 osteoclast를 활성화", "Caetano-Lopes 2008", "2008", false]
      ],
      body: [
        ["활막에서 일어나는 일", [
          "활막 fibroblast는 오랫동안 수동적 구조세포로 여겨졌으나, RA 활막에서는 염증과 파괴를 능동적으로 주도함",
          "FAP(fibroblast activation protein)⁺는 병원성 표현형의 표지. 기능이 나뉘어 FAP⁺THY1⁺는 염증, FAP⁺THY1⁻는 연골·골 파괴를 맡음",
          "면역세포와 기질세포가 서로를 증폭해서 만성화된 염증 조직(pannus)이 생김"
        ]],
        ["골·연골 파괴", [
          "면역 신호(RANKL·M-CSF)가 osteoclast를 활성화해서 골미란이 생김(osteoimmunology)",
          "연골 소실은 기질 분해효소로 진행되고 재생되지 않는 비가역 손상",
          "골미란이 일찍 나타나면 이후 빠른 진행을 예측함"
        ]],
        ["치료가 바꾼 경로", [
          "treat-to-target 도입 이후 심한 관절 변형의 빈도 대폭 감소",
          "다만 염증을 억제해도 구조가 늘 보존되지는 않아서, 증상과 방사선학적 진행이 갈릴 수 있음"
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
      summary: "같은 진단 안에 서로 다른 분자·세포 병태가 섞여 있음. 진행 속도 차이의 유력한 후보는 활막 pathotype과 자가항체 상태",
      facts: [
        ["빠른 진행 연관 인자", "seropositive · 고역가 자가항체 · 조기 미란 · 높은 염증지표", "리뷰 합의", "", false],
        ["활막 pathotype", "림프구 우세 / 골수성 우세 / 저면역 섬유성의 세 유형 제안", "단일세포·조직 연구", "", true],
        ["개별 예측력", "임상 지표만으로는 부족", "—", "", false]
      ],
      body: [
        ["관찰되는 이질성", [
          "진행 속도의 환자 간 편차가 큼: 수년간 경미한 경과부터 급속 변형까지",
          "관절 외 침범의 유무·양상도 환자마다 상이",
          "같은 약제에도 반응이 달라서 이질성이 치료 단계까지 이어짐"
        ]],
        ["이질성의 후보 원인", [
          "자가항체 상태: seropositive에서 더 빠르게 진행하는 경향",
          "활막 pathotype: 림프구 우세 / 골수성 우세 / 저면역 섬유성의 세 유형이 제안됨. 치료반응과의 연관은 검증 중",
          "유전 배경: 위험 loci 조합에 따라 병태가 달라질 가능성",
          "환경 노출이 계속되는지 여부: 흡연을 계속하면 경과에 영향"
        ]],
        ["왜 예측이 안 되는가", [
          "임상표현형 기반 분류가 분자·세포 subgroup으로 전환되지 못함(molecular taxonomy 미완)",
          "pathotype을 판정하려면 활막 생검이 필요해서 임상 적용이 어려움",
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
      summary: "주요 사망 원인은 심혈관질환으로, 만성 전신 염증이 동맥경화를 촉진하기 때문. 그다음이 RA-ILD와 감염",
      facts: [
        ["주요 사망 원인", "심혈관질환", "리뷰 합의", "", false],
        ["기대수명", "일반 인구 대비 단축", "리뷰 합의", "", true],
        ["RA-ILD", "예후가 나쁜 관절 외 침범", "리뷰", "", true],
        ["감염 위험", "질병 자체와 면역억제 치료 양쪽에서 상승", "—", "", false],
        ["기타 동반질환", "골다공증 · 우울 · 빈혈", "리뷰", "", true]
      ],
      body: [
        ["심혈관", [
          "만성 전신 염증이 동맥경화를 촉진해서 심근경색·뇌졸중 위험이 올라감",
          "전통적 위험인자만으로는 설명되지 않는 초과 위험 존재",
          "질병활성도를 조절하면 심혈관 위험이 줄어듦. 염증 억제의 관절 외 이득"
        ]],
        ["폐", [
          "간질성 폐질환(RA-ILD): 예후가 나쁘고 관절 증상과 독립적으로 진행할 수 있음",
          "흡연과 seropositive 상태가 위험 인자로 거론",
          "폐는 개시 부위 후보이기도 해서 원인과 합병증의 경계가 모호함"
        ]],
        ["감염과 그 외", [
          "감염: 질병 자체의 면역 이상과 면역억제 치료 양쪽에서 위험이 올라감",
          "골다공증: 만성 염증, 활동 저하, 스테로이드 사용이 겹친 결과",
          "우울·빈혈은 삶의 질에 직접 영향을 주지만 염증지표로는 잡히지 않음",
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
      summary: "손·손목·발 소관절의 좌우 대칭 종창과 30분 이상 지속되는 아침 강직. 골관절염과 갈리는 두 축",
      facts: [
        ["침범 관절", "손·손목·발의 작은 관절 (MCP·PIP·MTP)", "—", "", false],
        ["대칭성", "좌우 대칭 침범이 전형", "—", "", false],
        ["아침 강직", "30분–1시간 이상 지속", "임상 소견", "", false],
        ["전신 증상", "피로 · 미열 · 식욕부진", "—", "", false]
      ],
      body: [
        ["관절 증상", [
          "손·손목·발 소관절의 좌우 대칭 다발관절염. MCP·PIP·MTP 관절이 전형",
          "관절 종창·압통·열감이 있고, 원위지관절(DIP)은 대개 침범하지 않음",
          "30분 이상 지속되는 아침 강직이 골관절염의 짧은 강직과 갈리는 지점"
        ]],
        ["전신 증상", [
          "피로·미열·식욕부진이 관절 증상보다 먼저 오거나 함께 나타남",
          "관절 외 침범(폐·눈·피부 결절)이 초기에 드러나는 경우도 있음"
        ]],
        ["초기 증상의 함정", [
          "초기에는 관절통만 있고 종창이 없는 구간(arthralgia)이 있어 진찰로 미포착",
          "증상이 간헐적으로 나타났다 사라져서 환자와 의사 모두 진료를 미룸",
          "증상이 나타난 뒤 진료까지 걸리는 시간이 진단 지연의 상당 부분을 차지"
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
      summary: "ACR/EULAR 2010 분류 기준. 침범 관절 수·혈청학·급성반응물질·증상 기간의 4개 항목을 합산함. 확진 도구가 아닌 분류 도구",
      facts: [
        ["기준", "ACR/EULAR 2010 분류 기준", "ACR/EULAR", "2010", false],
        ["항목", "침범 관절 수 · 혈청학(ACPA·RF) · 급성반응물질(CRP·ESR) · 증상 기간", "ACR/EULAR", "2010", false],
        ["설계 목적", "조기 환자 포착(1987 기준의 후기 편향 보정)", "—", "", true],
        ["성격", "연구용 분류 기준 · 개별 환자 확진 도구 아님", "—", "", false]
      ],
      body: [
        ["기준의 구성", [
          "4개 항목의 점수 합산 방식: 침범 관절 수 · 혈청학 · 급성반응물질 · 증상 기간",
          "혈청학 항목에서 ACPA·RF의 역가(저역가/고역가)를 구분해 가중",
          "다른 질환으로 더 잘 설명되지 않을 것. 감별이 전제"
        ]],
        ["1987 기준과의 차이", [
          "1987 기준은 미란·결절 등 후기 소견을 포함해서 조기 환자를 미포착",
          "2010 기준은 조기 포착을 목표로 재설계되어 조기 치료 패러다임과 연동"
        ]],
        ["기준 사용의 한계", [
          "분류(classification) 기준이지 진단(diagnosis) 기준이 아님. 연구 대상군 정의가 본래 목적",
          "기준 미달이어도 임상적으로 RA일 수 있으므로 점수만으로 배제 금물",
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
      summary: "자가항체(ACPA·RF)와 염증지표(CRP·ESR)가 기본 축. 초음파·MRI가 진찰로 미포착되는 활막염과 조기 미란을 보완",
      facts: [
        ["자가항체", "anti-CCP(ACPA) · rheumatoid factor(RF)", "—", "", false],
        ["ACPA 특이도", "RF보다 높아 RA에 상대적으로 특이적", "리뷰 합의", "", true],
        ["염증지표", "CRP · ESR. 비특이적이고 활성도 추적용", "—", "", false],
        ["영상", "단순 X선(미란) · 초음파·MRI(활막염·조기 미란)", "—", "", false],
        ["예측 바이오마커", "부재(치료반응·예후 예측 마커 없음)", "—", "", false]
      ],
      body: [
        ["자가항체", [
          "ACPA는 RF보다 특이도가 높아 감별에 유리하고, 증상 수년 전부터 검출 가능",
          "RF는 감도는 있으나 다른 질환·건강인에서도 양성이라 단독 해석 금물",
          "두 항체의 역가가 예후와 연관됨. 고역가에서 빠른 진행 경향"
        ]],
        ["염증지표와 영상", [
          "CRP·ESR는 비특이적이라 진단보다 활성도 추적과 치료 조정에 사용",
          "단순 X선으로 미란·관절강 협착을 확인함. 조기에는 정상인 경우 많음",
          "초음파·MRI는 진찰로 미포착되는 활막염과 조기 미란을 검출해 조기 진단에 기여"
        ]],
        ["없는 것", [
          "치료반응 예측 마커: 어떤 약제가 효과를 낼지 사전에 가릴 검사 부재",
          "예후 예측 마커: 개별 환자의 진행 속도를 정량할 지표 부재",
          "활막 상태를 반영하는 혈액 대리지표는 미검증"
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
      summary: "초기 소견의 비특이성, seronegative의 단서 부재, 분류 기준의 구조적 한계가 겹쳐 진단이 지연됨. 조기 치료의 창(window of opportunity)을 놓치는 원인",
      facts: [
        ["치료의 창", "발병 초기. 조기 치료 시 관해 도달률과 구조 보존에 유리", "리뷰 합의", "", true],
        ["국내 진단 지연 기간", "확인 필요", "국내 코호트", "", true],
        ["seronegative 비율", "환자의 대략 1/3", "Primer", "2018", true]
      ],
      body: [
        ["환자 쪽 지연", [
          "초기 증상이 간헐적이어서 자연 호전으로 오인하고 진료가 지연됨",
          "관절통을 노화·과사용으로 귀속하는 인식",
          "1차 의료에서 류마티스 전문 진료로 의뢰하기까지 지연됨"
        ]],
        ["의학적 한계", [
          "초기 소견이 비특이적이라 미분화 관절염 구간이 있고, 다른 관절통과 구분 불가",
          "seronegative 환자는 자가항체라는 단서가 없어 기준 도달이 지연됨",
          "분류 기준은 연구용 분류 도구여서 기준 미달에도 RA 가능"
        ]],
        ["왜 문제가 되는가", [
          "조기 치료의 이득이 커서 지연이 구조 손상으로 이어짐",
          "발병 전 단계에는 진행자 식별 지표조차 없어서 예방적 접근 불가",
          "지연을 줄이면 신규 약제 개발 못지않은 임상적 효과를 냄"
        ]]
      ],
      related: ["ra-criteria", "ra-preclinical", "ra-unmet"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-severity", section: "dx",
      title: "아형·중증도·예후를 어떻게 구분하는가?",
      aliases: ["DAS28", "CDAI", "SDAI", "disease activity", "prognosis", "중증도", "예후"],
      summary: "복합 질병활성도 지표(DAS28 등)로 활성도를 정량해 치료를 조정함. 예후 불량 인자는 알려져 있으나 개별 예측력은 부족",
      facts: [
        ["질병활성도 지표", "DAS28 · CDAI · SDAI", "—", "", true],
        ["활성도 구간", "관해 · 낮음 · 중등도 · 높음", "—", "", false],
        ["예후 불량 인자", "고역가 자가항체 · 조기 미란 · 높은 염증지표", "리뷰 합의", "", false],
        ["개별 예측력", "부족함. 집단 수준 연관에 머무름", "—", "", false]
      ],
      body: [
        ["활성도 정량", [
          "복합 지표(DAS28 등)는 관절 수·염증지표·환자·의사 평가를 합산함",
          "관해 / 낮음 / 중등도 / 높음의 구간 구분이 treat-to-target의 목표 판정 기준",
          "정기 측정과 목표 미달 시 치료 변경. 활성도 지표가 치료 결정의 축"
        ]],
        ["예후 층화", [
          "예후 불량 인자: 고역가 자가항체 · 조기 미란 · 지속적 고염증 · 다수 관절 침범",
          "이 인자들은 집단 수준의 연관이어서 개별 환자의 경과 예측에는 불충분",
          "difficult-to-treat RA는 치료 반응 축의 별도 층화 범주(C-02 치료 참조)"
        ]],
        ["분자 층화의 부재", [
          "활막 pathotype 기반 층화는 제안되었으나 임상 적용 미확립",
          "복합 지표는 병태의 결과를 측정할 뿐 기전을 구분하지 못함",
          "기전 기반으로 층화해야 치료 선택의 근거가 생김"
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
      summary: "조기·적극 치료로 관해를 목표하는 treat-to-target. methotrexate 중심 csDMARD로 시작해 반응 불충분 시 bDMARD·tsDMARD로 단계 상승",
      facts: [
        ["치료 전략", "treat-to-target(관해 또는 낮은 질병활성도 목표)", "Smolen 2018", "2018", false],
        ["1차 치료", "methotrexate 중심 csDMARD", "가이드라인", "", false],
        ["생물학적 제제(bDMARD)", "TNF 억제제 · IL-6 수용체 억제제 · T세포 공동자극 조절 · B세포 제거", "—", "", false],
        ["표적 합성 제제(tsDMARD)", "JAK 억제제(경구 투여)", "—", "", false],
        ["보조", "저용량 글루코코르티코이드(단기 가교 목적)", "가이드라인", "", true]
      ],
      body: [
        ["treat-to-target", [
          "조기에 적극 치료해 질병활성도를 낮추고 관해를 목표함",
          "정기적 활성도 측정과 목표 미달 시 치료 변경. 기준은 증상 완화가 아닌 목표 도달",
          "전환의 성과로 심한 관절 변형 빈도가 대폭 감소함"
        ]],
        ["약제 계열과 순서", [
          "1차는 methotrexate 중심 csDMARD. 금기 시 대체 csDMARD",
          "반응이 불충분하면 bDMARD 또는 tsDMARD를 추가하거나 전환",
          "생물학적 제제의 표적 축: TNF · IL-6 · T세포 공동자극 · B세포",
          "글루코코르티코이드는 효과 발현까지의 단기 가교 목적. 장기 사용 지양"
        ]],
        ["유전학에서 약물로", [
          "trans-ethnic GWAS 101개 loci 후보유전자와 RA 승인약 표적의 상당 부분 일치",
          "이 일치가 기존 약의 적응 확대(repurposing)와 신약 표적 발굴의 근거",
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
      summary: "조기 치료 환자에서 관해 도달률이 높음. 다만 어떤 계열이든 상당 비율이 일차 반응에 실패하는 구조는 공통",
      facts: [
        ["조기 치료의 이득", "관해 도달률·구조 보존에서 유리", "리뷰 합의", "", true],
        ["MTX 단독 ACR50", "약 41%(병용 시 56–67%)", "네트워크 메타분석", "—", true],
        ["bDMARD 반응 (MTX 실패 후)", "ACR20 / 50 / 70 = 61.4% / 37.8% / 18.8% — \"60·40·20 패턴\"", "메타분석 21연구, J Clin Rheumatol", "2023", false],
        ["bDMARD 반응 (1차 실패 후 교체)", "ACR20 / 50 / 70 = 48.5% / 27.3% / 12.9%. 교체할수록 하락", "동 메타분석", "2023", false],
        ["반응 예측 인자", "부재", "—", "", false]
      ],
      body: [
        ["효과가 잘 나는 조건", [
          "조기 치료: 증상 발현 후 이른 시점에 개입하면 관해 도달률이 높음",
          "낮은 기저 질병활성도, 미란 없음, 짧은 이환 기간",
          "치료 순응도와 정기적 활성도 모니터링의 유지"
        ]],
        ["효과가 제한되는 조건", [
          "장기 이환·구조 손상이 이미 진행된 경우 염증을 억제해도 기능이 회복되지 않음",
          "여러 계열에 순차 실패한 이력이 있으면 이후 반응률이 낮아지는 경향",
          "동반질환·감염 위험으로 약제 선택이 제한되는 경우"
        ]],
        ["반응률의 구조적 한계", [
          "MTX 실패 후 bDMARD의 ACR20/50/70이 약 60·40·20%. 계열이 달라도 이 패턴은 대체로 유지",
          "1차 생물학적 제제 실패 후 교체하면 48.5 / 27.3 / 12.9%로 하락함. 교체할수록 기대치가 낮아짐",
          "어떤 환자에게 어떤 계열이 효과를 낼지 사전에 알 수 없어서 치료가 순차적 시행착오가 됨"
        ]]
      ],
      related: ["ra-standard-tx", "ra-response-variability", "ra-severity"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-response-variability", section: "tx",
      title: "치료반응이 다른 이유는 무엇인가?",
      aliases: ["response heterogeneity", "pathotype", "stratification", "반응 이질성"],
      summary: "동일 임상 진단 안에 서로 다른 분자·세포 병태가 혼재함. 활막 pathotype 차이가 계열별 반응 차이의 유력 설명",
      facts: [
        ["1차 가설", "동일 진단 내 상이한 분자·세포 병태의 혼재", "리뷰 합의", "", false],
        ["활막 pathotype", "림프구 우세 / 골수성 우세 / 저면역 섬유성", "조직·단일세포 연구", "", true],
        ["약동학 요인", "면역원성(항약물항체)과 대사 차이", "—", "", true],
        ["층화 임상시험", "pathotype 기반 층화 시도. 검증 진행 중", "—", "", true]
      ],
      body: [
        ["병태의 혼재", [
          "임상적으로 같은 RA여도 활막의 세포 조성이 환자마다 상이",
          "B세포가 풍부한 활막이면 B세포 표적 치료에 유리할 가능성. 기전적으로 타당한 가설",
          "저면역 섬유성 활막이면 기존 면역 표적 약제의 효과가 제한될 가능성"
        ]],
        ["약제 쪽 요인", [
          "항약물항체가 형성되면(면역원성) 약물 농도가 떨어져 이차 실패",
          "대사와 투여 순응도의 차이. 특히 methotrexate에서 영향",
          "동반 약제와의 상호작용"
        ]],
        ["층화가 막힌 이유", [
          "pathotype 판정에 활막 생검이 필요해서 대규모 적용 곤란",
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
      summary: "difficult-to-treat RA는 RA 환자의 11.7%, 약 9명 중 1명. 관해는 억제 상태여서 중단 시 재발이 빈번",
      facts: [
        ["difficult-to-treat RA", "EULAR 정의 제시", "EULAR", "2021", false],
        ["D2T RA 비율", "11.7% (95% CI 9.5–14.3), 약 9명 중 1명", "메타분석 23연구·27,987명, Ann Rheum Dis", "2025", false],
        ["엄격 기준 적용 시", "b/tsDMARD 3계열 이상 실패 = 4.6%", "동 메타분석", "2025", false],
        ["집단별 차이", "b/tsDMARD 노출군 13.2%, 일반 RA군 10.9%", "동 메타분석", "2025", false],
        ["중단 후 재발", "빈번함. 관해는 억제 상태이지 치유가 아님", "리뷰 합의", "", false],
        ["주요 안전성 이슈", "감염, JAK 억제제의 심혈관·악성종양 신호", "—", "", true]
      ],
      body: [
        ["불응", [
          "복수 기전 약제에 순차 실패하는 환자군이 있어서 difficult-to-treat RA로 별도 정의",
          "불응의 원인이 염증인지, 구조 손상에 의한 통증인지, 동반 섬유근통인지 구분 필요",
          "이 구분 없이 약제만 교체하면 효과 없는 면역억제가 누적"
        ]],
        ["재발", [
          "약제 중단 시 재발이 빈번함. 관해는 억제 상태이지 치유가 아님",
          "ACPA 발현 B세포는 약물 관해 중에도 활성 표현형으로 잔존해 재발의 원천이 됨",
          "안전하게 감량·중단할 수 있는 환자를 식별할 지표 부재"
        ]],
        ["부작용과 안전성", [
          "감염은 면역억제에 따르는 지속적 부담. 고령·동반질환에서 위험 증가",
          "JAK 억제제는 시판후 안전성 연구에서 심혈관·악성종양 신호가 나와 처방 권고가 조정됨",
          "장기 안전성 데이터가 쌓이면서 약제 선택 기준이 계속 바뀜"
        ]]
      ],
      related: ["ra-response-variability", "ra-unmet", "ra-complications"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-unmet", section: "tx",
      title: "아직 충족되지 않은 임상적 필요는 무엇인가?",
      aliases: ["unmet need", "prediction", "prevention", "미충족 수요"],
      summary: "치료제 확대에도 반응 예측·중단 판단·발병 예방의 세 축이 모두 미해결. 예측 수단의 부재가 공통 병목",
      facts: [
        ["반응 예측", "약제 선택의 사전 근거 부재", "—", "", false],
        ["중단 판단", "감량·중단 가능 환자 식별 지표 부재", "—", "", false],
        ["예방", "at-risk 진행자 식별 지표가 없어 예방 시험 설계 곤란", "—", "", false],
        ["seronegative RA", "진단·치료 근거가 상대적으로 빈약", "—", "", true]
      ],
      body: [
        ["세 가지 미충족", [
          "반응 예측: 어떤 기전의 약을 먼저 쓸지 고를 근거가 없어 순차적 시행착오",
          "중단 판단: 안전하게 감량·중단할 환자를 가릴 수단이 없어 과잉 면역억제가 지속됨",
          "발병 예방: at-risk 진행자를 식별할 수 없어 예방 임상시험 대상 특정 곤란",
        ]],
        ["소외된 환자군", [
          "seronegative RA는 진단이 지연되고 임상시험 포함 비율이 낮으며 치료 근거가 빈약",
          "difficult-to-treat RA는 별도 정의는 생겼으나 표적 치료 전략 미확립",
          "고령 발병 RA는 동반질환 때문에 약제 선택 폭이 좁음"
        ]],
        ["공통 병목", [
          "세 미충족 모두 \"어느 환자·어느 시점인가\"의 예측 문제로 수렴",
          "예측의 전제는 병태의 분자적 층화와 그것을 비침습적으로 측정할 수단",
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
      summary: "GWAS 결과와 승인 약물 표적이 일치한 대표 사례. 유전학에서 약물 발굴로 이어질 가능성을 보여 준 질환",
      facts: [
        ["보고 loci", "trans-ethnic 101개", "Okada 2014", "2014", false],
        ["MHC fine-mapping", "HLA-DRβ1 아미노산 수준까지 정련함", "Raychaudhuri 2012", "2012", false],
        ["다인종 확장", "multi-ancestry GWAS로 loci를 확장하고 전이성을 평가", "Ishigaki 2022", "2022", false],
        ["수렴 경로", "T세포·B세포 활성화, NF-κB, JAK-STAT", "—", "", true]
      ],
      body: [
        ["지목된 것", [
          "MHC 연관을 아미노산 수준까지 정련해 shared epitope의 분자적 실체를 규정",
          "MHC 밖 다수의 면역 관련 loci가 T세포·B세포 활성화 경로로 수렴",
          "후보유전자와 승인 약물 표적이 일치해서 유전학을 약물 개발로 잇는 근거가 됨"
        ]],
        ["loci에서 유전자로", [
          "대부분의 위험변이가 비암호화 영역에 있어서 표적 유전자 지목에 추가 단계 필요",
          "fine-mapping → 인과변이 후보 축소 · eQTL colocalization → 조절 대상 유전자 지목",
          "이 단계를 거치지 않으면 \"가장 가까운 유전자\"의 오지목 위험"
        ]],
        ["약물 표적으로의 번역", [
          "유전 근거가 있는 표적은 임상시험 성공률이 높다는 관찰",
          "기존 약의 적응 확대(repurposing) 후보 도출",
          "표적이 면역세포에서 기질(fibroblast)로 확장됨"
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
      summary: "위험변이의 작동 세포는 T·B세포에 집중되나 기질세포로 확장 중. 단일세포 참조와 colocalization으로 이를 직접 검증함",
      facts: [
        ["1차 수렴 세포", "T세포 · B세포(면역 활성화 경로)", "GWAS 후속 분석", "", true],
        ["확장 중인 축", "활막 기질세포(fibroblast)", "Croft 2019 · Zou & Brenner 2025", "2019–", false],
        ["검증 수단", "sc-eQTL, colocalization, 개방염색질(caQTL)", "—", "", false],
        ["B세포 tolerance 조절자", "FcγRIIB, MZ B세포, BAFF, 성호르몬", "concepts 페이지", "", false]
      ],
      body: [
        ["세포유형 지목의 방법", [
          "위험변이의 대부분이 비암호화 조절 영역에 있어서 어느 세포에서 열려 있는지가 관건",
          "세포유형별 개방염색질·eQTL과의 중첩을 검정해 작동 세포 후보를 좁힘",
          "colocalization으로 GWAS 신호와 QTL 신호가 인과변이를 공유하는지 판정",
        ]],
        ["B세포 축", [
          "자가항체가 발병 수년 전에 나타나고 B세포를 제거하면 질병이 호전되므로 B세포를 병인 중심에 배치",
          "ACPA 발현 B세포가 약물 관해 중에도 활성 표현형으로 남아 재발의 원천이 됨. 그래서 tolerance 회복이 근본 표적",
          "억제수용체·MZ B세포·BAFF·성호르몬이 tolerance의 조절 축"
        ]],
        ["기질세포 축", [
          "FAP⁺ 활막 fibroblast가 염증과 파괴를 직접 매개해서 위험변이 작동 후보 세포로 떠오름",
          "면역세포 중심으로만 해석하면 기질 표적치료의 근거를 설명하지 못함",
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
      summary: "bulk에서 혼재로 보이던 활막이 단일세포에서 기능적 subset으로 나뉨. 병태 표적이 면역세포에서 기질세포로 확장",
      facts: [
        ["핵심 발견", "FAP⁺THY1⁺(염증) / FAP⁺THY1⁻(파괴) subset 분리", "Croft 2019", "2019", false],
        ["bulk의 한계", "세포 조성 변화와 발현 변화의 교란", "—", "", false],
        ["보완 수단", "cell-type deconvolution(참조 아틀라스에 의존)", "—", "", false],
        ["진행 중", "임상표현형을 분자·세포 subgroup으로 재분류", "Nishide & Kumanogoh 2024", "2024", true]
      ],
      body: [
        ["bulk가 놓친 것", [
          "bulk 발현 변화는 세포 조성 변화인지 세포당 발현 변화인지 구분 불가",
          "소수 세포집단의 신호가 다수 집단에 희석되어 미검출",
          "deconvolution으로 부분 보완 가능하나 참조 아틀라스의 품질에 의존"
        ]],
        ["single-cell이 바꾼 것", [
          "혼재로 보이던 활막 세포를 기능적으로 구분되는 subset으로 분리",
          "fibroblast는 수동적 구조세포가 아니라 병을 일으키는 세포",
          "염증과 파괴를 따로 제어할 근거가 되어 기질 표적치료의 출발점"
        ]],
        ["남은 과제", [
          "subset 정의가 연구마다 달라서 명명과 경계가 통일되지 않음",
          "공간 정보가 없음. 어느 subset이 어디에 있는지는 공간전사체가 필요",
          "종단 관찰 부재. 치료 전후 subset 변화를 추적한 데이터가 부족"
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
      summary: "활막이 병변 조직이지만 생검에 의존해서 접근성이 낮음. 혈액 지표가 활막 상태를 얼마나 반영하는지는 미검증",
      facts: [
        ["병변 조직", "활막. 생검이 필요해 대규모 코호트 확보 곤란", "—", "", false],
        ["혈액 지표", "접근은 쉬우나 활막 반영도는 미검증", "—", "", false],
        ["필요 설계", "paired sample (동일 환자의 활막 + 혈액)", "—", "", false],
        ["일치도 추정치", "확인 필요. 체계적 비교 연구 부족", "—", "", true]
      ],
      body: [
        ["왜 문제인가", [
          "활막은 생검이 필요해 접근성이 낮고, 반복 채취와 대규모 코호트 구축이 곤란",
          "혈액은 반복 채취가 가능하나 활막 상태 반영도가 검증되지 않음",
          "이 간극이 예후·치료반응 마커 개발의 실질적 병목"
        ]],
        ["검증에 필요한 것", [
          "동일 환자의 활막·혈액 짝지음(paired sample) 설계",
          "치료 전후 종단 채취로 변화가 대응하는지까지 확인",
          "충분한 표본 확보. 이질성이 큰 질환이라 소규모로는 결론 불가"
        ]],
        ["대안 경로", [
          "영상(초음파·MRI)을 활막 상태의 대리지표로 활용하는 접근",
          "순환 세포·세포외소포 등 조직 유래 신호를 혈액에서 포착하는 시도",
          "어느 경로든 활막 기준(ground truth)과 대조해 검증하는 것이 전제"
        ]]
      ],
      related: ["ra-singlecell", "ra-response-variability", "ra-ancestry"],
      papers: [["Zou & Brenner 2025, Nat Rev Rheumatol", "https://doi.org/10.1038/s41584-025-01259-0"]]
    },
    {
      id: "ra-ancestry", section: "omics",
      title: "ancestry 차이는 무엇인가?",
      aliases: ["ancestry", "transferability", "PRS", "multi-ancestry", "trans-ethnic", "인종"],
      summary: "RA GWAS는 다인종 확장이 이루어진 편이나 표본은 여전히 유럽계 편중. 한국인에서의 효과 전이성과 PRS 성능은 별도 검증 필요",
      facts: [
        ["다인종 확장", "multi-ancestry GWAS 수행으로 전이성 평가 가능", "Ishigaki 2022", "2022", false],
        ["표본 편중", "유럽계 중심이고 동아시아는 상대적으로 부족", "—", "", true],
        ["HLA 대립유전자 빈도", "인종 간 차이가 있고 shared epitope 구성도 상이", "—", "", true],
        ["PRS 전이성", "확인 필요. 한국인 코호트 검증 미완", "—", "", true]
      ],
      body: [
        ["무엇이 다른가", [
          "위험 대립유전자 빈도와 LD 구조가 인종마다 달라서 동일 변이의 효과 추정치가 이동",
          "HLA 대립유전자 빈도가 달라서 shared epitope의 구성과 기여도가 인종별로 다름",
          "환경 노출(흡연율 등)의 분포 차이도 겹쳐 순수 유전 효과 분리가 어려움"
        ]],
        ["다인종 GWAS의 성과", [
          "RA는 자가면역질환 중 trans-ethnic 분석이 비교적 일찍 이루어진 편",
          "인종 공통 신호와 인종 특이 신호를 분리하고 fine-mapping 해상도를 높임"
        ]],
        ["남은 편중", [
          "표본이 여전히 유럽계 중심이어서 동아시아 검정력 부족",
          "유럽계 기반 PRS를 한국인에 적용할 때의 성능은 별도 검증 없이 사용 금물",
          "이 편중이 한국인 코호트 기반 연구의 차별점"
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
      summary: "EULAR 치료 권고는 3년 주기로 개정됨(2022, 2025). difficult-to-treat RA 정의(2021)가 도입되어 불응 환자군이 별도 범주로 규정됨",
      facts: [
        ["D2T RA 정의", "EULAR 정의 제시", "EULAR", "2021", false],
        ["분류 기준", "ACR/EULAR 2010. 이후 개정 없음", "ACR/EULAR", "2010", true],
        ["EULAR 치료 권고", "2022 update (Ann Rheum Dis)에 이어 2025 update 발행. 3년 주기 개정", "EULAR", "2022 / 2025", true],
        ["치료 전략", "treat-to-target 유지. 목표 설정과 감량 지침이 정련됨", "가이드라인", "", true],
        ["ACR 치료 권고", "2021 guideline (직전 2015). MTX 단독요법을 1차로 강력 권고하고, 목표는 낮은 질병활성도 또는 관해", "Fraenkel 2021, ACR", "2021", false],
        ["ACR 권고의 근거 수준", "44개 권고 중 strong은 7개. 나머지는 conditional(근거 불충분)", "Fraenkel 2021", "2021", false]
      ],
      body: [
        ["무엇이 바뀌었나", [
          "difficult-to-treat RA: 복수 기전 약제에 실패한 환자군을 별도 범주로 정의",
          "정의가 생기면서 진료에서는 원인 재평가(염증, 구조 손상, 동반 섬유근통)를 요구하고 연구에서는 명확한 대상군을 확보",
          "treat-to-target의 뼈대는 유지. 목표 도달 후 감량·중단 지침이 정련되는 방향"
        ]],
        ["바뀌지 않은 것", [
          "진단 분류 기준은 ACR/EULAR 2010 이후 개정 없음",
          "1차 치료는 methotrexate 중심 csDMARD 유지",
          "약제 선택 순서는 여전히 근거가 약해 순차적 시도에 의존"
        ]],
        ["갱신 시 확인할 것", [
          "ACR·EULAR 각각의 최신판 발행 연도와 주요 변경점",
          "국내 진료지침(대한류마티스학회)의 반영 여부와 시차",
          "보험 급여 기준 변경. 국내에서는 실제 처방 순서를 좌우"
        ]]
      ],
      related: ["ra-drug-update", "ra-standard-tx", "ra-refractory"],
      papers: [["Smolen 2018, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2018.1"]]
    },
    {
      id: "ra-drug-update", section: "now",
      title: "새 치료제와 안전성 정보는 무엇인가?",
      aliases: ["JAK inhibitor", "safety", "ORAL Surveillance", "biosimilar", "신약", "안전성"],
      summary: "ORAL Surveillance(NEJM 2022)에서 tofacitinib의 MACE·악성종양 위험이 TNF 억제제 대비 높아 비열등성 미충족. 허가사항과 처방 권고 조정으로 이어짐",
      facts: [
        ["안전성 신호", "tofacitinib은 MACE·악성종양 위험이 TNF 억제제 대비 높아 비열등성 미충족", "Ytterberg 2022, N Engl J Med 386:316–326", "2022", false],
        ["연구 설계", "3b/4상 시판후 비열등성 RCT. ≥50세이고 심혈관 위험인자 ≥1개. tofacitinib 5mg/10mg BID vs TNFi (1:1:1)", "ORAL Surveillance", "2022", false],
        ["조치", "허가사항과 처방 권고 조정. 흡연·남성·65세 초과·심혈관 병력·악성종양 병력 등 고위험군에서 사용 제한", "규제기관", "", true],
        ["계열 확장", "TNF, IL-6, T세포 공동자극, B세포, JAK", "—", "", false],
        ["바이오시밀러", "확대됨. 접근성과 비용 구조에 영향", "—", "", true],
        ["개발 중 표적", "기질(fibroblast) 표적. 전임상·초기 단계", "Zou & Brenner 2025", "2025", false]
      ],
      body: [
        ["안전성 쪽 변화", [
          "JAK 억제제는 시판후 무작위 안전성 연구에서 심혈관·악성종양 신호가 보고됨",
          "그 결과 허가사항과 처방 권고가 조정되고, 고령·심혈관 위험군에서 사용 제한",
          "장기 안전성 데이터 축적이 계속되므로 이 항목은 지속 갱신 대상"
        ]],
        ["약제 쪽 변화", [
          "바이오시밀러가 확대되면서 접근성이 개선되고 비용 구조가 바뀜",
          "새로운 기전의 승인 약제는 확인 필요. 최근 승인 목록과 대조 요망",
          "기질(fibroblast) 표적은 아직 전임상·초기 단계. 임상 진입 여부를 지켜볼 것"
        ]],
        ["갱신 시 확인할 것", [
          "국내 허가·급여 등재 현황과 해외와의 시차",
          "안전성 경고 갱신(규제기관 공지 기준)",
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
      summary: "활막 조직 단일세포 아틀라스와 다인종 RA GWAS가 공개되어 참조 기준으로 활용 가능. 국내 코호트와 연결하는 것이 남은 과제",
      facts: [
        ["활막 아틀라스", "활막 조직 단일세포 참조(기질·면역 subset 포함)", "Croft 2019 등", "2019–", false],
        ["다인종 GWAS", "multi-ancestry RA GWAS 공개", "Ishigaki 2022", "2022", false],
        ["공개 QTL 자원", "GTEx, 면역세포 eQTL, sc-eQTL 데이터셋", "—", "", true],
        ["국내 코호트", "확인 필요. 가용 한국인 RA 코호트·바이오뱅크 현황", "—", "", true]
      ],
      body: [
        ["참조로 쓸 수 있게 된 것", [
          "활막 조직 단일세포 아틀라스로 기질세포 subset을 참조 기준으로 활용 가능",
          "다인종 GWAS 요약통계는 인종 간 효과 비교와 fine-mapping의 재료",
          "공개 eQTL·sc-eQTL 자원은 colocalization 분석의 상대 데이터"
        ]],
        ["아직 드문 것", [
          "활막·혈액 paired 검체는 공개 자원이 희소",
          "종단(치료 전후) 단일세포 데이터. 반응 기전을 관찰하려면 필요",
          "동아시아 기반 대규모 RA 오믹스 코호트"
        ]],
        ["갱신 시 확인할 것", [
          "새로 공개된 아틀라스·요약통계의 인종 구성과 표본 규모",
          "데이터 접근 절차(DAC 승인, IRB)와 소요 기간",
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
      summary: "단일세포·공간전사체와 sc-eQTL·colocalization을 결합함. 위험변이의 작동 세포를 조직 맥락에서 직접 검증할 수 있게 됨",
      facts: [
        ["단일세포", "활막 세포의 기능적 subset 분리", "Croft 2019", "2019", false],
        ["공간전사체", "subset이 조직 어디에 있는지 확인", "—", "", true],
        ["sc-eQTL", "세포유형별 유전자 조절 효과 측정", "—", "", false],
        ["colocalization", "GWAS 신호와 QTL 신호가 인과변이를 공유하는지 검정", "—", "", false],
        ["다인종 fine-mapping", "LD 구조 차이를 이용해 인과변이 해상도를 높임", "Ishigaki 2022", "2022", false]
      ],
      body: [
        ["세포 해상도", [
          "단일세포로 bulk에서 혼재로 보이던 활막 세포를 기능적 subset으로 분리",
          "공간전사체로 subset이 조직 어디에 있는지까지 확인하고 세포 간 상호작용 맥락을 복원",
          "두 기법을 결합하면 면역·기질 상호작용을 조직 구조 위에서 관찰 가능"
        ]],
        ["유전–세포 연결", [
          "sc-eQTL로 세포유형별 유전자 조절 효과를 측정하고, bulk eQTL이 놓치던 소수 집단 신호를 포착",
          "colocalization으로 GWAS 신호와 QTL 신호가 같은 인과변이를 공유하는지 판정",
          "다인종 fine-mapping으로 LD 구조 차이를 이용해 인과변이 후보를 좁힘"
        ]],
        ["갱신 시 확인할 것", [
          "새 기법의 검증 수준: 단일 데이터셋인지 다중 벤치마크를 거쳤는지",
          "필요 표본 규모와 비용: 국내 코호트로 적용 가능한 수준인지",
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
    "thy1": { key: "thy1", definition: "활막 fibroblast subset을 가르는 표면 표지: THY1⁺(염증)와 THY1⁻(파괴)." },
    "rankl": { key: "rankl", definition: "Receptor activator of NF-κB ligand. osteoclast를 활성화해 골 파괴를 유도." },
    "osteoclast": { key: "oc", definition: "골을 흡수하는 세포. 만성 염증이 활성화하면 골미란을 일으킴." },
    "dmard": { key: "dmard", definition: "Disease-modifying antirheumatic drug. 질병 경과를 바꾸는 RA 치료제." },
    "dysbiosis": { key: "dys", definition: "미생물 군집 구성의 불균형. RA에서 점막 트리거 후보로 지목." },
    "prs": { key: "prs", definition: "Polygenic risk score. 다수 변이 효과를 합산한 개인 유전 위험 점수." },
    "colocalization": { key: "coloc", definition: "GWAS 신호와 QTL 신호가 같은 인과변이를 공유하는지 검정하는 방법." }
  };
  const glossaryPattern = /(^|[^A-Za-z0-9가-힣])(HLA|shared epitope|ACPA|citrullination|FAP|THY1|RANKL|osteoclast|DMARD|dysbiosis|PRS|colocalization)(?=$|[^A-Za-z0-9])/gi;


  return { meta: meta, acts: acts, sections: sections, articles: articleList, glossaryTerms: glossaryTerms, glossaryPattern: glossaryPattern };
})();
