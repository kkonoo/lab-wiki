window.DISEASE = (function () {
  const meta = {
    id: "dkd",
    title: "Diabetic Kidney Disease (DKD)",
    domain: "Nephro"
  };

  const acts = [
    { id: "A", num: "01", en: "DEFINITION · EPIDEMIOLOGY", title: "무엇인가", accent: "#6f3a55",
      blurb: "CKD와의 경계 · albuminuric/non-albuminuric 표현형 · 세계와 한국의 부담",
      sections: ["def", "epi"] },
    { id: "B", num: "02", en: "CAUSE · COURSE", title: "왜·어떻게", accent: "#315d78",
      blurb: "고혈당 너머의 위험 · 대사 재프로그래밍 → 선천면역 → fibrosis의 연결",
      sections: ["risk", "course"] },
    { id: "C", num: "03", en: "CLINICAL", title: "임상", accent: "#94553b",
      blurb: "선별·조직검사 적응증 · 네 기둥 치료 · SGLT2i·finerenone·GLP-1 RA",
      sections: ["dx", "tx"] },
    { id: "D", num: "04", en: "RESEARCH", title: "연구", accent: "#1f5d43",
      blurb: "당뇨 특이 유전효과 · 변이→세포타입 · 단일세포·공간 아틀라스 · 아형",
      sections: ["omics", "now"] }
  ];

  const sections = {
    def: { number: "01", title: "정의 · 분류", act: "A", questions: [
      { q: "DKD는 CKD와 어떻게 구분하는가?", note: "당뇨 동반 CKD → 당뇨 귀속분 → CGA의 Cause", article: "dkd-definition" },
      { q: "albuminuric·non-albuminuric 표현형은 무엇인가?", note: "ACR 상승 경로 · eGFR 단독 저하 경로 → 서로 다른 조직 소견", article: "dkd-phenotype" },
      { q: "T1D와 T2D에서 무엇이 다른가?", note: "이환기간 기점 명확 ↔ 진단 시점 이미 동반 가능", article: "dkd-t1d-t2d" },
      { q: "임상 진단과 조직 소견은 왜 어긋나는가?", note: "임상 DKD ↔ 비당뇨 신질환 동반 · 조직검사 없이 추정", article: "dkd-biopsy-discordance" }
    ]},
    epi: { number: "02", title: "역학 · 질병부담", act: "A", questions: [
      { q: "당뇨 환자 중 얼마나 DKD로 가는가?", note: "약 40% · 이환기간·혈당·혈압에 따른 분화", article: "dkd-frequency" },
      { q: "세계 질병부담은 얼마나 큰가?", note: "GBD 2021 DALY · 사망 · 1990년 대비 증가율", article: "dkd-global-burden" },
      { q: "한국에서는 어떤 규모인가?", note: "당뇨 유병 14.8% · 신대체요법 원인 1위", article: "dkd-korea" },
      { q: "kidney failure 원인에서 당뇨의 비중은?", note: "한국 CKD 5D의 약 절반 · 20년간 유지", article: "dkd-kidney-failure-share" }
    ]},
    risk: { number: "01", title: "원인 · 위험인자", act: "B", questions: [
      { q: "고혈당 외에 무엇이 위험을 정하는가?", note: "혈압 · 비만 · 이환기간 · 반복 AKI · nephron capacity", article: "dkd-riskfactors" },
      { q: "대사 스트레스는 어느 세포를 먼저 치는가?", note: "podocyte 지질 민감성 · 근위세뇨관 에너지 수요", article: "dkd-target-cells" },
      { q: "유전 위험은 어떻게 기여하는가?", note: "다유전자 배경 · APOL1 · 가족 집적", article: "dkd-genetic-risk" },
      { q: "같은 당뇨에서 왜 진행 속도가 갈리는가?", note: "표현형 이질성 · 조직 미세환경 차이 · 층화의 필요", article: "dkd-heterogeneity" }
    ]},
    course: { number: "02", title: "발병 · 진행", act: "B", questions: [
      { q: "세뇨관·podocyte 대사는 어떻게 재프로그램되는가?", note: "FAO 결손 → 지질 축적 → ATP 고갈·탈분화", article: "dkd-metabolic-reprogramming" },
      { q: "대사 손상은 어떻게 선천면역으로 번역되는가?", note: "mtDNA 누출 → cGAS-STING · mtROS → NLRP3", article: "dkd-innate-immunity" },
      { q: "면역세포는 어떻게 되먹임하는가?", note: "대식세포 glycolysis · 지질 연관 표현형 · ROS·ECM", article: "dkd-immune-feedback" },
      { q: "보체는 어디서 들어오는가?", note: "lectin 경로 진입 · C3a·C5a · 세포내 complosome", article: "dkd-complement" },
      { q: "조직은 어떤 순서로 망가지는가?", note: "hyperfiltration → albuminuria → 세뇨관간질 fibrosis", article: "dkd-tissue-course" }
    ]},
    dx: { number: "01", title: "진단 · 분류", act: "C", questions: [
      { q: "언제 어떻게 선별하는가?", note: "진단 시점·연 1회 → eGFR + urine ACR 동시", article: "dkd-screening" },
      { q: "당뇨망막병증은 진단에 어떤 역할을 하는가?", note: "미세혈관 동반 소견 → 당뇨 귀속 근거 보강", article: "dkd-retinopathy" },
      { q: "언제 신장 조직검사를 하는가?", note: "비전형 경과 · 급속 진행 · 혈뇨 · 망막병증 부재", article: "dkd-biopsy-indication" },
      { q: "진행 위험을 어떻게 예측하는가?", note: "eGFR·ACR 조합 · eGFR slope · 위험 방정식", article: "dkd-risk-prediction" }
    ]},
    tx: { number: "02", title: "치료 · 미충족 수요", act: "C", questions: [
      { q: "표준 치료의 기둥은 무엇인가?", note: "RAS 차단 + SGLT2i + 대사·혈압 관리 + 추가 약제", article: "dkd-four-pillars" },
      { q: "SGLT2 억제제는 무엇을 바꾸는가?", note: "DAPA-CKD · eGFR 임계 · 혈당 비의존 신보호", article: "dkd-sglt2i" },
      { q: "비스테로이드 MRA는 어디에 쓰는가?", note: "FIDELIO-DKD · 잔여 albuminuria · hyperkalaemia 감시", article: "dkd-finerenone" },
      { q: "GLP-1 수용체 작용제는 어디까지 왔는가?", note: "FLOW · 신장 복합 종말점 · eGFR slope", article: "dkd-glp1" },
      { q: "혈당·혈압 목표는 어떻게 잡는가?", note: "개별화 HbA1c · metformin eGFR 기준 · statin", article: "dkd-glycemic-target" }
    ]},
    omics: { number: "01", title: "유전학 · 오믹스", act: "D", questions: [
      { q: "DKD에 당뇨 특이 유전효과가 있는가?", note: "당뇨군 eGFR GWAS → 일반 인구와 무관·역방향 loci", article: "dkd-genetics" },
      { q: "GWAS 변이를 어느 세포로 내려보내는가?", note: "구획별 eQTL · 단일세포 multiome · scorecard", article: "dkd-variant-to-cell" },
      { q: "조직 프로테옴은 무엇을 더 주는가?", note: "kidney pQTL → coloc·MR → 표적 · 혈장 위험점수", article: "dkd-proteogenomics" },
      { q: "단일세포·공간 아틀라스는 무엇을 보여주는가?", note: "손상 세포 상태 · fibrotic microenvironment · 염증성 PT", article: "dkd-atlas" }
    ]},
    now: { number: "02", title: "최신 동향", act: "D", questions: [
      { q: "진료 권고는 최근 어떻게 바뀌었는가?", note: "KDIGO 2022 → SGLT2i 1A · nsMRA 2A · GLP-1 RA 1B", article: "dkd-guideline-change" },
      { q: "새 치료 근거는 무엇이 추가됐는가?", note: "FLOW 2024 · FIDELITY 통합 · 병용 전략", article: "dkd-drug-update" },
      { q: "새로 정의된 환자 아형은 무엇인가?", note: "B세포 우세 niche · fibrotic microenvironment 분류", article: "dkd-subtypes" },
      { q: "새로 쓸 수 있게 된 분석 기법은?", note: "공간 대사체 · 단일세포 multiome · allele-specific 신호", article: "dkd-new-method" }
    ]}
  };

  const articleList = [
    {
      id: "dkd-definition", section: "def", title: "DKD는 CKD와 어떻게 구분하는가?",
      aliases: ["diabetic kidney disease", "당뇨병성 신장질환", "diabetic nephropathy", "CKD with diabetes"],
      summary: "당뇨를 동반한 CKD 중 당뇨에 귀속되는 부분 — CGA 분류의 Cause 축에 해당하며, 단일 원인 전제의 ‘diabetic nephropathy’보다 다인자 표현이 우세",
      facts: [
        ["분류 위치", "CGA의 Cause 축", "KDIGO 2024", "2024", false],
        ["임상 기준 축", "eGFR + urine ACR (CKD와 공통)", "KDIGO 2024", "2024", false],
        ["명명 방향", "CKD with diabetes", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["경계의 설정", ["당뇨 + CKD 진단 기준 충족 → 1차적으로 DKD 추정", "당뇨 이환기간·망막병증·단백뇨 경과 → 당뇨 귀속의 근거", "비당뇨 신질환 동반 가능 → 임상 진단은 추정이지 확정 아님"]],
        ["‘diabetic nephropathy’ 표현의 한계", ["당뇨 하나를 단일 driver로 전제", "비만·고혈압·노화·반복 AKI의 중첩 미포착", "유전 구조까지 하나로 묶는다는 뜻은 아님 → 당뇨 특이 loci 보고 존재"]],
        ["CKD 페이지와의 분업", ["공통 진단·병기·overload 감소 치료 → CKD 문서", "당뇨 특이 표현형·기전·약제·유전 → 이 문서군"]]
      ],
      related: ["dkd-phenotype", "dkd-t1d-t2d", "dkd-genetics"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"], ["Cole 2025, JASN", "https://doi.org/10.1681/ASN.0000000718"]],
      links: [["KDIGO 2024 CKD Guideline", "https://kdigo.org/guidelines/ckd-evaluation-and-management/"]]
    },
    {
      id: "dkd-phenotype", section: "def", title: "albuminuric·non-albuminuric 표현형은 무엇인가?",
      aliases: ["non-albuminuric", "NADKD", "normoalbuminuric", "albuminuria phenotype"],
      summary: "ACR 상승을 거치는 고전 경로와 albuminuria 없이 eGFR만 떨어지는 경로의 공존 — 후자가 신기능 저하 당뇨 환자의 절반에 가깝고 조직 소견·예후도 다름",
      facts: [
        ["신기능 저하 T2D 중 non-albuminuric 비율", "45.6%", "Yang et al., Front Endocrinol (31편 메타분석)", "2022", false],
        ["전체 DKD 중 non-albuminuric 비율", "24.7%", "Yang et al., Front Endocrinol", "2022", false],
        ["전체 T2D 인구 중 비율", "8.4%", "Yang et al., Front Endocrinol", "2022", false],
        ["성별 경향 (남성 상대위험)", "0.74", "Yang et al., Front Endocrinol", "2022", false],
        ["당뇨 이환기간 차이", "약 2.9년 짧음", "Yang et al., Front Endocrinol", "2022", false]
      ],
      body: [
        ["두 경로", ["albuminuric — 사구체 여과장벽 손상 → ACR 상승 → eGFR 저하", "non-albuminuric — ACR 정상 범위에서 eGFR 단독 저하", "두 경로의 공존 → albuminuria 단독 선별의 누락 위험"]],
        ["임상 차이", ["non-albuminuric — 고령 경향 · 여성 비율 높음 · HbA1c·혈압 낮음 · 당뇨망막병증 동반 적음", "연간 eGFR 저하 폭 0–4.6 (non-albuminuric) 대 1.75–3.13 mL/min/1.73m² (albuminuric)", "non-albuminuric — 심혈관·ESRD·사망 위험이 상대적으로 낮음"]],
        ["조직의 시사", ["전형적 당뇨 사구체병증 소견이 non-albuminuric에서 덜 빈번", "혈관·세뇨관간질 병변의 상대적 기여 시사 → 기전 분화 가능성"]]
      ],
      related: ["dkd-definition", "dkd-screening", "dkd-heterogeneity"],
      papers: [["Yang 2022, Front Endocrinol", "https://doi.org/10.3389/fendo.2022.871272"]]
    },
    {
      id: "dkd-t1d-t2d", section: "def", title: "T1D와 T2D에서 무엇이 다른가?",
      aliases: ["type 1 diabetes", "type 2 diabetes", "T1D", "T2D"],
      summary: "T1D는 발병 시점이 분명해 이환기간 축이 깨끗하고, T2D는 진단 시점에 이미 신장 이상 동반 가능 — 위험인자 구성과 동반질환 배경도 분화",
      facts: [
        ["세계 DKD-T2DM DALY (2021)", "11,278,935 (95% UI 9,682,785–13,103,871)", "GBD 2021 DKD 분석, 2025", "2021", false],
        ["세계 DKD-T1DM DALY (2021)", "3,875,628 (95% UI 3,062,396–4,845,503)", "GBD 2021 DKD 분석, 2025", "2021", false],
        ["DKD-T2DM 기여 위험 — 높은 BMI", "38.2%", "GBD 2021 DKD 분석, 2025", "2021", false]
      ],
      body: [
        ["시간축", ["T1D — 발병 시점 명확 → 이환기간 대비 위험 추정 용이", "T2D — 무증상 기간 선행 → 진단 시점에 이미 albuminuria·eGFR 저하 가능"]],
        ["위험 구성", ["두 형 공통 — 신기능 이상·높은 공복혈당이 최상위 기여", "T2DM 특이 — 높은 BMI·수축기혈압·식이·낮은 신체활동이 추가 기여", "→ T2D DKD는 cardio-kidney-metabolic 맥락에서 다뤄짐"]],
        ["부담의 증가 속도", ["1990년 대비 DALY 증가 — T1DM 74.0% · T2DM 173.6%", "1990년 대비 사망 증가 — T1DM 90.7% · T2DM 222.5%"]]
      ],
      related: ["dkd-riskfactors", "dkd-global-burden", "dkd-genetics"],
      papers: [["GBD 2021 DKD DALY 분석, 2025", "https://pubmed.ncbi.nlm.nih.gov/39863522/"]]
    },
    {
      id: "dkd-biopsy-discordance", section: "def", title: "임상 진단과 조직 소견은 왜 어긋나는가?",
      aliases: ["kidney biopsy", "nondiabetic renal disease", "NDRD", "조직검사"],
      summary: "임상 DKD는 조직 확인 없이 내리는 추정 진단 — 비당뇨 신질환 동반·단독 사례가 섞이며, 표현형 이질성이 유전·임상 연구의 신호를 희석",
      facts: [
        ["임상 진단 근거", "당뇨 + eGFR·ACR 이상 + 망막병증 등 정황", "KDIGO 2024", "2024", false],
        ["표현형 정의 이질성", "albuminuric·non-albuminuric 양상 병존", "Roumeliotis 2024, Curr Genomics", "2024", false]
      ],
      body: [
        ["어긋남의 원인", ["조직검사 미시행 → 당뇨 귀속이 정황 추론", "비당뇨 신질환 동반 또는 단독 가능", "non-albuminuric 표현형 → 전형적 당뇨 사구체병증 소견 빈도 낮음"]],
        ["연구에 미치는 영향", ["DKD case/control 이분 정의 → 이질적 집단 혼합 → 효과 희석", "정량 형질(eGFR·eGFR slope) 기반 설계가 대안으로 제시"]]
      ],
      related: ["dkd-phenotype", "dkd-biopsy-indication", "dkd-genetics"],
      papers: [["Roumeliotis 2024, Curr Genomics", "https://doi.org/10.2174/0113892029300247240325080421"], ["Cole 2025, JASN", "https://doi.org/10.1681/ASN.0000000718"]]
    },
    {
      id: "dkd-frequency", section: "epi", title: "당뇨 환자 중 얼마나 DKD로 가는가?",
      aliases: ["prevalence", "유병률", "40%"],
      summary: "당뇨 환자의 약 40%에서 발생 — 이환기간·혈당·혈압·비만에 따라 발생과 진행 속도가 크게 분화",
      facts: [
        ["당뇨 환자 중 DKD 발생 비율", "약 40%", "Zhu 2025, Nat Commun · Dumoulin 2026, Nature", "2026", false],
        ["한국 성인(30세 이상) 당뇨 유병률", "14.8%", "Diabetes Fact Sheet in Korea 2024 (KNHANES 2021–2022)", "2024", false],
        ["한국 65세 이상 당뇨 유병률", "29.4%", "Diabetes Fact Sheet in Korea 2024", "2024", false]
      ],
      body: [
        ["규모의 구조", ["당뇨 인구 자체의 증가 → DKD 절대 환자 수 증가", "약 40%라는 비율 → 당뇨 유병률에 곱해져 부담 결정", "고령층 당뇨 유병률이 높음 → 고령 DKD 부담 집중"]],
        ["비율 해석의 주의", ["‘약 40%’는 표현형 정의·추적기간에 따라 변동", "albuminuria 단독 기준과 eGFR 포함 기준의 차이 → 값 혼용 금물"]]
      ],
      related: ["dkd-korea", "dkd-global-burden", "dkd-phenotype"],
      papers: [["Zhu 2025, Nat Commun", "https://doi.org/10.1038/s41467-025-56891-x"], ["Dumoulin 2026, Nature", "https://doi.org/10.1038/s41586-026-10363-4"]],
      links: [["Diabetes Fact Sheet in Korea 2024 (대한당뇨병학회)", "https://diabetes.or.kr/bbs/?code=fact_sheet"]]
    },
    {
      id: "dkd-global-burden", section: "epi", title: "세계 질병부담은 얼마나 큰가?",
      aliases: ["global burden", "GBD", "DALY", "질병부담"],
      summary: "GBD 2021 기준 DKD-T2DM DALY 1,128만·사망 47.7만 — 1990년 대비 DALY 173.6%·사망 222.5% 증가로 당뇨 합병증 중 증가 속도가 가파른 축",
      facts: [
        ["DKD-T2DM DALY (2021)", "11,278,935 (95% UI 9,682,785–13,103,871)", "GBD 2021 DKD 분석, 2025", "2021", false],
        ["DKD-T2DM 연령표준화 DALY율", "131.1/10만 (95% UI 112.8–152.5)", "GBD 2021 DKD 분석, 2025", "2021", false],
        ["DKD-T2DM 사망 (2021)", "477,273 (95% UI 401,541–565,951)", "GBD 2021 DKD 분석, 2025", "2021", false],
        ["DKD-T1DM 사망 (2021)", "94,020 (95% UI 71,457–119,984)", "GBD 2021 DKD 분석, 2025", "2021", false],
        ["1990→2021 DALY 증가", "T1DM 74.0% · T2DM 173.6%", "GBD 2021 DKD 분석, 2025", "2021", false]
      ],
      body: [
        ["부담의 두 성분", ["조기 사망 → YLL", "기능 저하·투석·합병증 동반 생존 → YLD", "→ 두 성분의 합이 DALY"]],
        ["기여 위험", ["신기능 이상 — 거의 100%", "높은 공복혈당 — T1DM 70.8% · T2DM 87.4%", "T2DM 추가 — 높은 BMI 38.2% · 식이 17.8% · 수축기혈압 10.2% · 낮은 신체활동 6.2%"]],
        ["수치 사용 주의", ["GBD 추정치 → 불확실구간(UI) 동반 제시 필수", "국가 등록자료(청구·투석 등록)와 산출 방식 상이 → 직접 비교 금물"]]
      ],
      related: ["dkd-t1d-t2d", "dkd-korea", "dkd-kidney-failure-share"],
      papers: [["GBD 2021 DKD DALY 분석, 2025", "https://pubmed.ncbi.nlm.nih.gov/39863522/"]]
    },
    {
      id: "dkd-korea", section: "epi", title: "한국에서는 어떤 규모인가?",
      aliases: ["Korea", "한국", "KNHANES", "KORDS", "대한신장학회"],
      summary: "30세 이상 당뇨 유병률 14.8%·약 533만명이라는 모수 위에서, 신대체요법 원인 1위가 당뇨 — 신규 혈액투석 환자의 절반 수준",
      facts: [
        ["30세 이상 당뇨 유병률", "14.8% (남 16.9% · 여 12.6%)", "Diabetes Fact Sheet in Korea 2024 (KNHANES 2021–2022)", "2024", false],
        ["30세 이상 당뇨 인구", "약 533만명", "Diabetes Fact Sheet in Korea 2024", "2024", false],
        ["2021년 신규 혈액투석 — 당뇨", "6,680명", "대한신장학회 KORDS, Kidney Res Clin Pract", "2024", false],
        ["2021년 신규 혈액투석 — 비당뇨", "6,430명", "대한신장학회 KORDS, Kidney Res Clin Pract", "2024", false],
        ["2021년 신규 복막투석 — 당뇨 / 비당뇨", "487명 / 924명", "대한신장학회 KORDS, Kidney Res Clin Pract", "2024", false]
      ],
      body: [
        ["모수와 결과", ["고령화 + 당뇨 유병률 상승 → DKD 후보 인구 확대", "65세 이상 당뇨 유병률 29.4% → 고령 신대체요법 수요 증가"]],
        ["투석 양식의 분화", ["신규 혈액투석 — 당뇨가 비당뇨보다 많음", "신규 복막투석 — 비당뇨가 당뇨의 약 두 배", "→ 양식별 구성이 다르므로 전체 비율과 분리해 읽을 것"]],
        ["자료원의 한계", ["KNHANES — 표본 조사 기반 유병률", "KORDS — 등록사업 기반 투석 환자 집계", "청구자료 기반 지표와 산출 모집단 상이 → 값 혼용 금물"]]
      ],
      related: ["dkd-kidney-failure-share", "dkd-frequency", "dkd-global-burden"],
      papers: [["대한신장학회 KORDS 2021 분석, Kidney Res Clin Pract 2024", "https://doi.org/10.23876/j.krcp.23.130"]],
      links: [["Diabetes Fact Sheet in Korea 2024", "https://diabetes.or.kr/bbs/?code=fact_sheet"]]
    },
    {
      id: "dkd-kidney-failure-share", section: "epi", title: "kidney failure 원인에서 당뇨의 비중은?",
      aliases: ["ESRD", "kidney failure", "CKD 5D", "신대체요법"],
      summary: "한국 투석 환자에서 당뇨가 20년간 46.4–51.0%를 차지하며 원인 1위 유지 — 최근에는 당뇨·비당뇨 간 사망률 격차도 좁혀짐",
      facts: [
        ["CKD 5D 중 당뇨 비율 (2001–2021)", "46.4–51.0%", "대한신장학회 KORDS, Kidney Res Clin Pract", "2024", false],
        ["2021년 당뇨 CKD 5D 사망률", "40.3/1,000 인년", "대한신장학회 KORDS, Kidney Res Clin Pract", "2024", false],
        ["2021년 비당뇨 CKD 5D 사망률", "41.2/1,000 인년", "대한신장학회 KORDS, Kidney Res Clin Pract", "2024", false]
      ],
      body: [
        ["비중의 안정성", ["20년간 대략 절반 수준에서 등락 → 급증도 급감도 아님", "당뇨 인구 증가와 신보호 치료 확대가 상쇄 가능성"]],
        ["사망률 역전", ["2020년까지 당뇨군 사망률이 더 높은 추세", "2021년 비당뇨군 41.2 대 당뇨군 40.3 → 역전", "복막투석 + 당뇨 조합이 20년간 가장 높은 사망률 유지"]],
        ["해석의 한계", ["등록사업 기반 → 참여 기관·보고 완결성의 영향", "원인 분류가 임상 추정 진단에 의존"]]
      ],
      related: ["dkd-korea", "dkd-risk-prediction", "dkd-biopsy-discordance"],
      papers: [["대한신장학회 KORDS 2021 분석, Kidney Res Clin Pract 2024", "https://doi.org/10.23876/j.krcp.23.130"]]
    },
    {
      id: "dkd-riskfactors", section: "risk", title: "고혈당 외에 무엇이 위험을 정하는가?",
      aliases: ["risk factor", "위험인자", "BMI", "blood pressure"],
      summary: "공복혈당이 최대 기여 인자이나 단독 설명 불가 — 비만·수축기혈압·식이·신체활동, 그리고 평생 nephron capacity가 함께 위험을 결정",
      facts: [
        ["기여 위험 — 높은 공복혈당 (T2DM)", "87.4%", "GBD 2021 DKD 분석, 2025", "2021", false],
        ["기여 위험 — 높은 BMI (T2DM)", "38.2%", "GBD 2021 DKD 분석, 2025", "2021", false],
        ["기여 위험 — 식이 (T2DM)", "17.8%", "GBD 2021 DKD 분석, 2025", "2021", false],
        ["기여 위험 — 수축기혈압 (T2DM)", "10.2%", "GBD 2021 DKD 분석, 2025", "2021", false]
      ],
      body: [
        ["대사·혈역학 축", ["고혈당 → 사구체 hyperfiltration·AGE 축적·지질 축적", "비만 → 전신 저강도 염증·사구체 과부하", "혈압 상승 → 사구체 내압 전달 → 여과장벽 손상"]],
        ["capacity 축", ["출생 시 nephron 수·조산·저체중 → 낮은 예비 용량", "반복 AKI·노화 → nephron 추가 소실", "→ 같은 당뇨 부하에서도 잔여 용량에 따라 결과 분화"]],
        ["단백뇨 자체가 위험인자", ["albumin 노출 → 세뇨관 상피 스트레스 → 면역세포 동원", "→ 위험인자이자 진행 매개자"]]
      ],
      related: ["dkd-target-cells", "dkd-heterogeneity", "dkd-tissue-course"],
      papers: [["GBD 2021 DKD DALY 분석, 2025", "https://pubmed.ncbi.nlm.nih.gov/39863522/"], ["Jia 2022, Mol Med", "https://doi.org/10.1186/s10020-022-00525-1"]]
    },
    {
      id: "dkd-target-cells", section: "risk", title: "대사 스트레스는 어느 세포를 먼저 치는가?",
      aliases: ["podocyte", "proximal tubule", "근위세뇨관", "target cell"],
      summary: "재흡수에 막대한 ATP를 쓰는 근위세뇨관과 지질 축적에 특히 민감한 podocyte가 1차 표적 — 같은 지질 부하에도 두 세포의 결과가 다름",
      facts: [
        ["근위세뇨관 주 연료", "fatty acid oxidation", "Kang 2015, Nat Med", "2015", false],
        ["인간 신장 tubule 전사체 분석 규모", "n=95 (정상·섬유화)", "Kang 2015, Nat Med", "2015", false],
        ["CERS6 발현과 GFR", "음의 상관 (인간 DKD·FSGS biopsy)", "Zhu 2025, Nat Commun", "2025", false]
      ],
      body: [
        ["근위세뇨관", ["재흡수 부담 → 높은 ATP 요구 → FAO 의존", "FAO 결손 → ATP 고갈·세포사·탈분화·지질 축적", "당뇨 시 SGLT2 발현 증가 → 재흡수 부하 가중"]],
        ["podocyte", ["여과장벽 유지에 복잡한 형태 유지 필요 → 미토콘드리아 수·기능 의존", "중성지방 축적만으로는 섬유화 표현형 미발생, 반면 특정 지질종에 민감", "CerS6 유래 ceramide 축적 → 미토콘드리아 손상 경로"]],
        ["세포형 특이성의 함의", ["같은 ‘지질독성’이 세포마다 다른 출력 → 경로 일반화 곤란", "→ 치료 표적도 세포형별 분리 필요"]]
      ],
      related: ["dkd-metabolic-reprogramming", "dkd-innate-immunity", "dkd-atlas"],
      papers: [["Kang 2015, Nat Med", "https://doi.org/10.1038/nm.3762"], ["Zhu 2025, Nat Commun", "https://doi.org/10.1038/s41467-025-56891-x"]]
    },
    {
      id: "dkd-genetic-risk", section: "risk", title: "유전 위험은 어떻게 기여하는가?",
      aliases: ["genetic risk", "heritability", "APOL1", "가족력"],
      summary: "가족 집적과 다유전자 배경이 오래 보고됐고 ancestry 특이 위험 변이가 존재 — 다만 효과크기가 작아 단일 변이로 임상 판단 불가",
      facts: [
        ["가족연구 보고 시점", "약 30년 전부터", "Roumeliotis 2024, Curr Genomics", "2024", false],
        ["APOL1 고위험 유전형 진행 예측 도구", "9-protein 위험점수 tAUC 86.5%", "Nat Med APOL1 APRS", "2026", false],
        ["APOL1 고위험군 위험 5분위 간 10년 사건률", "62.5% 대 3.3%", "Nat Med APOL1 APRS", "2026", false]
      ],
      body: [
        ["유전 기여의 층", ["다유전자 배경 — 개별 효과 작고 다수 변이에 분산", "ancestry 특이 — 아프리카계 APOL1 고위험 유전형", "단일유전자 신질환 — 당뇨 동반 시 감별 대상"]],
        ["임상 번역의 현재", ["유전형만으로 진행 예측 부족 → 혈장 단백 점수가 보완", "유전학의 주된 산출 → 예측보다 표적 발굴"]]
      ],
      related: ["dkd-genetics", "dkd-proteogenomics", "dkd-risk-prediction"],
      papers: [["Roumeliotis 2024, Curr Genomics", "https://doi.org/10.2174/0113892029300247240325080421"], ["APOL1 Proteomic Risk Score 2026, Nat Med", "https://doi.org/10.1038/s41591-026-04337-2"]]
    },
    {
      id: "dkd-heterogeneity", section: "risk", title: "같은 당뇨에서 왜 진행 속도가 갈리는가?",
      aliases: ["heterogeneity", "이질성", "progression", "층화"],
      summary: "표현형·조직 미세환경·면역 구성의 차이가 겹쳐 진행 속도가 분화 — 최근 공간 아틀라스가 진행이 빠른 별개 아형을 조직 수준에서 규정",
      facts: [
        ["연간 eGFR 저하 (albuminuric)", "1.75–3.13 mL/min/1.73m²", "Yang 2022, Front Endocrinol", "2022", false],
        ["연간 eGFR 저하 (non-albuminuric)", "0–4.6 mL/min/1.73m²", "Yang 2022, Front Endocrinol", "2022", false],
        ["조직 분류의 예후 성능", "fibrotic microenvironment가 전통 조직병리 대비 예후 개선", "Abedini 2024, Nat Genet", "2024", false]
      ],
      body: [
        ["이질성의 층", ["표현형 — albuminuric 대 non-albuminuric", "조직 — fibrotic microenvironment 비율", "면역 — B세포 우세 niche 등 면역 구성 차이"]],
        ["층화의 실익", ["평균 경과 기반 예측 → 개인 수준 오차 큼", "조직·혈장 기반 층화 → 고위험군 선별 및 임상시험 환자 선택"]]
      ],
      related: ["dkd-phenotype", "dkd-subtypes", "dkd-atlas"],
      papers: [["Yang 2022, Front Endocrinol", "https://doi.org/10.3389/fendo.2022.871272"], ["Abedini 2024, Nat Genet", "https://doi.org/10.1038/s41588-024-01802-x"], ["Dumoulin 2026, Nature", "https://doi.org/10.1038/s41586-026-10363-4"]]
    },
    {
      id: "dkd-metabolic-reprogramming", section: "course", title: "세뇨관·podocyte 대사는 어떻게 재프로그램되는가?",
      aliases: ["metabolic reprogramming", "FAO", "fatty acid oxidation", "lipotoxicity", "대사 재프로그래밍"],
      summary: "FAO 효소·조절자 발현 저하와 세포내 지질 축적이 핵심 — FAO 억제 단독으로 섬유화 표현형이 재현되고 복구가 보호",
      facts: [
        ["섬유화 신장의 상위 교란 경로", "염증과 대사", "Kang 2015, Nat Med", "2015", false],
        ["FAO 억제 in vitro 결과", "ATP 고갈 · 세포사 · 탈분화 · 지질 축적", "Kang 2015, Nat Med", "2015", false],
        ["ceramide 결합 부위", "VDAC1 Glu59", "Zhu 2025, Nat Commun", "2025", false]
      ],
      body: [
        ["세뇨관 축", ["FAO 효소·조절자 발현 저하 → 지질 축적", "ATP 공급 부족 → 상피 탈분화 → 섬유화 환경 조성", "유전적·약리적 FAO 복구 → 마우스 보호"]],
        ["podocyte 축", ["CerS6 상향 → ceramide(d18:1/16:0) 생성", "ceramide가 VDAC1에 결합 → 미토콘드리아 투과성 변화", "podocyte 특이 결손 → 손상 개선 · 과발현 단독 → 단백뇨 유발"]],
        ["lncRNA를 통한 조절", ["Tug1 → PGC-1α 프로모터 결합 → 미토콘드리아 생체에너지 회복", "PVT1 → TRIM56 경유 AMPKα 유비퀴틴화 → 미토콘드리아 생성·분열 교란"]]
      ],
      related: ["dkd-target-cells", "dkd-innate-immunity", "dkd-sglt2i"],
      papers: [["Kang 2015, Nat Med", "https://doi.org/10.1038/nm.3762"], ["Zhu 2025, Nat Commun", "https://doi.org/10.1038/s41467-025-56891-x"], ["Lv 2024, Cell Death Dis", "https://doi.org/10.1038/s41419-024-07107-5"]]
    },
    {
      id: "dkd-innate-immunity", section: "course", title: "대사 손상은 어떻게 선천면역으로 번역되는가?",
      aliases: ["innate immunity", "cGAS-STING", "NLRP3", "선천면역", "sterile inflammation"],
      summary: "미토콘드리아가 망가지며 세포질로 새어나온 자기 DNA와 ROS가 센서를 켜는 구조 — 염증의 출발점이 침윤 면역세포가 아니라 신장 실질세포",
      facts: [
        ["세뇨관 Tfam 결손 마우스 경과", "미토콘드리아 소실·에너지 결핍 → fibrosis·면역세포 침윤", "Chung 2019, Cell Metab", "2019", false],
        ["STING 억제 효과", "마우스 CKD 모델 fibrosis 완화", "Chung 2019, Cell Metab", "2019", false],
        ["골수 chimera 결과", "Nlrp3 결손 골수 이식은 보호 실패 · Nlrp3 결손 수용체는 WT 골수에도 보호", "Shahzad 2015, Kidney Int", "2015", false],
        ["IL-1R 길항 효과", "마우스 당뇨신증 예방 및 역전", "Shahzad 2015, Kidney Int", "2015", false]
      ],
      body: [
        ["핵산 센싱 경로", ["미토콘드리아 손상 → 세포질 mtDNA 누출 → cGAS-STING 활성", "genotoxic stress·후성유전 탈조절 → 핵 DNA 단편·retroelement 축적", "AIM2·endosomal TLR 등 다른 센서도 맥락에 따라 관여"]],
        ["inflammasome 경로", ["mitochondrial ROS → 사구체 내피·podocyte의 NLRP3 활성", "caspase-1 → IL-1β·IL-18 성숙 → sterile inflammation", "mtROS 억제 → 사구체 inflammasome 활성·신병증 차단"]],
        ["의미", ["염증의 원천이 조직 실질세포 → 항염 표적이 면역세포에 국한되지 않음", "대사 교정이 곧 항염 개입이 될 수 있는 구조"]]
      ],
      related: ["dkd-metabolic-reprogramming", "dkd-immune-feedback", "dkd-complement"],
      papers: [["Chung 2019, Cell Metab", "https://doi.org/10.1016/j.cmet.2019.08.003"], ["Shahzad 2015, Kidney Int", "https://doi.org/10.1038/ki.2014.271"], ["Andrade-Silva 2026, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-026-01120-x"]]
    },
    {
      id: "dkd-immune-feedback", section: "course", title: "면역세포는 어떻게 되먹임하는가?",
      aliases: ["macrophage", "glycolysis", "TREM2", "대식세포", "immunometabolism"],
      summary: "단백뇨에 노출된 세뇨관이 보낸 신호가 대식세포를 glycolysis로 전환시키고, 전환된 대식세포가 다시 ROS·ECM으로 대사 손상을 키우는 순환",
      facts: [
        ["대식세포 glycolysis 유도 경로", "세뇨관 상피 유래 EV → HIF-1α 안정화", "Jia 2022, Mol Med", "2022", false],
        ["glycolysis 차단 효과", "2-DG 처리 → 염증·섬유화 유전자 발현 감소", "Jia 2022, Mol Med", "2022", false],
        ["대식세포 표현형 이동", "초기 전염증 → TREM2hi/MRC1hi 지질 연관", "Zhang 2026, Research", "2026", false]
      ],
      body: [
        ["실질세포 → 면역세포", ["albumin 노출 세뇨관 상피가 세포외소포 분비", "EV가 HIF-1α를 안정화 → 대식세포 glycolysis 전환", "db/db 마우스 투여로 in vivo 재현"]],
        ["면역세포 → 실질세포", ["활성화 면역세포 → ROS 과생산·미토콘드리아 항상성 교란·ECM 축적", "→ 대사 손상 심화 → 다시 면역 활성 → 자기증폭 루프"]],
        ["적응면역 축", ["Th17/Treg 균형 붕괴 보고", "조직 내 B세포 집적이 별개 아형을 규정 → 아형 문서 참조"]],
        ["조율 인자", ["HIF-1α · AMPK · mTOR · SIRT1이 대사 신호와 면역 반응을 연결"]]
      ],
      related: ["dkd-innate-immunity", "dkd-subtypes", "dkd-sglt2i"],
      papers: [["Jia 2022, Mol Med", "https://doi.org/10.1186/s10020-022-00525-1"], ["Zhang 2026, Research", "https://pubmed.ncbi.nlm.nih.gov/42553440/"], ["Gao 2026, Front Physiol", "https://doi.org/10.3389/fphys.2025.1736472"]]
    },
    {
      id: "dkd-complement", section: "course", title: "보체는 어디서 들어오는가?",
      aliases: ["complement", "보체", "lectin pathway", "C3a", "C5a", "complosome"],
      summary: "당뇨에서 변형된 당쇄에 mannose가 결합하는 lectin 경로가 특이 진입점 — 효과분자 C3a·C5a가 염증·산화스트레스·fibrosis를 조절하고, 세포내 보체는 대사 자체를 조절",
      facts: [
        ["lectin 경로 진입 방식", "변형된 당쇄에 mannose 결합", "Kotsalas 2025, J Clin Med", "2025", false],
        ["주요 효과분자", "C3a · C5a · C5b-9 (MAC)", "Kotsalas 2025, J Clin Med", "2025", false],
        ["complosome 조절 대상", "미토콘드리아 호흡 · glycolysis · autophagy · 유전자 전사", "West & Kemper 2023, Nat Rev Nephrol", "2023", false]
      ],
      body: [
        ["세 경로", ["classical — C1q가 면역복합체·손상 자기항원 인식", "lectin — 당뇨에서 변형된 당쇄 인식 → 당뇨 특이 진입점", "alternative — C3 tick-over가 손상 표면에서 증폭"]],
        ["효과와 조절", ["C3a·C5a → 염증·산화스트레스·미토콘드리아 항상성·fibrosis 조절", "CD59 등 조절인자 이상 → 국소 보체 활성 증폭"]],
        ["세포내 보체", ["면역·비면역세포 모두에서 기본 세포생리 조절", "→ 보체를 면역 효과기가 아니라 대사 조절자로 재배치"]],
        ["약물과의 교차", ["SGLT2i·GLP-1 등 신규 항당뇨제의 보체 조절 효과가 별도 정리됨"]]
      ],
      related: ["dkd-innate-immunity", "dkd-immune-feedback", "dkd-drug-update"],
      papers: [["Kotsalas 2025, J Clin Med", "https://doi.org/10.3390/jcm14238589"], ["Ma 2025, Diabet Med", "https://doi.org/10.1111/dme.15427"], ["West & Kemper 2023, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-023-00704-1"]]
    },
    {
      id: "dkd-tissue-course", section: "course", title: "조직은 어떤 순서로 망가지는가?",
      aliases: ["disease course", "진행", "hyperfiltration", "fibrosis", "tubulointerstitial"],
      summary: "사구체 hyperfiltration과 여과장벽 손상에서 시작해 세뇨관간질 염증·fibrosis로 무게중심이 옮겨가는 경과 — 다만 non-albuminuric 경로는 이 순서를 따르지 않음",
      facts: [
        ["fibrotic microenvironment의 예후 가치", "전통 조직병리 대비 개선", "Abedini 2024, Nat Genet", "2024", false],
        ["염증성 근위세뇨관 표지", "HAVCR1⁺VCAM1⁺ → ICAM1 상향", "Reck 2025, Nat Commun", "2025", false],
        ["초기 인간 DN 단일핵 소견", "K⁺ 분비 증가 · 혈관신생 signature", "Wilson 2019, PNAS", "2019", false]
      ],
      body: [
        ["고전 경로", ["고혈당·과부하 → 사구체 hyperfiltration·비대", "podocyte 스트레스·소실 → albuminuria", "세뇨관 albumin 노출·대사 실패 → 간질 염증 → fibrosis"]],
        ["세뇨관간질로의 이동", ["염증성 PT가 fibrotic niche에 국재 → 백혈구 동원·myofibroblast 활성의 paracrine 원천", "→ 후기 기능 저하의 무게중심이 사구체에서 간질로"]],
        ["예외 경로", ["non-albuminuric — 여과장벽 손상 없이 eGFR 저하", "혈관·세뇨관간질 병변의 상대적 기여 시사"]]
      ],
      related: ["dkd-phenotype", "dkd-atlas", "dkd-risk-prediction"],
      papers: [["Abedini 2024, Nat Genet", "https://doi.org/10.1038/s41588-024-01802-x"], ["Reck 2025, Nat Commun", "https://doi.org/10.1038/s41467-025-59997-4"], ["Wilson 2019, PNAS", "https://doi.org/10.1073/pnas.1908706116"]]
    },
    {
      id: "dkd-screening", section: "dx", title: "언제 어떻게 선별하는가?",
      aliases: ["screening", "선별", "ACR", "eGFR"],
      summary: "eGFR과 urine ACR을 함께, 정기적으로 — 한 축만 보면 non-albuminuric 경로를 놓치고 단회 이상만으로는 만성성 미확정",
      facts: [
        ["선별 축", "serum creatinine 기반 eGFR + urine ACR", "KDIGO 2024", "2024", false],
        ["만성성 기준", ">3개월 지속", "KDIGO 2024", "2024", false],
        ["albuminuria 범주", "A1 · A2 · A3", "KDIGO 2024", "2024", false]
      ],
      body: [
        ["두 축을 함께 보는 이유", ["albuminuria 단독 선별 → non-albuminuric 경로 누락", "eGFR 단독 선별 → 초기 여과장벽 손상 누락", "같은 eGFR에서도 ACR 상승 시 위험 증가 → 조합이 위험을 규정"]],
        ["해석의 주의", ["단회 eGFR 저하·ACR 상승 → 반복 확인 전 확정 금물", "발열·운동·감염·월경 등 일시적 albuminuria 상승 요인 배제", "근육량 극단 → cystatin C 병용 고려"]]
      ],
      related: ["dkd-phenotype", "dkd-retinopathy", "dkd-risk-prediction"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]],
      links: [["KDIGO 2024 CKD Guideline", "https://kdigo.org/guidelines/ckd-evaluation-and-management/"]]
    },
    {
      id: "dkd-retinopathy", section: "dx", title: "당뇨망막병증은 진단에 어떤 역할을 하는가?",
      aliases: ["retinopathy", "당뇨망막병증", "microvascular"],
      summary: "같은 미세혈관 손상 축의 동반 소견으로 당뇨 귀속 근거를 보강 — 다만 non-albuminuric 표현형에서는 동반 빈도가 낮아 부재가 배제 근거는 아님",
      facts: [
        ["non-albuminuric 표현형의 망막병증 동반", "albuminuric 대비 적음", "Yang 2022, Front Endocrinol", "2022", false]
      ],
      body: [
        ["보강 근거로서의 역할", ["망막·사구체 모두 미세혈관 표적 → 동반 시 당뇨 귀속 설득력 상승", "특히 T1D에서 이환기간과 함께 해석"]],
        ["한계", ["망막병증 부재 → 비당뇨 신질환 가능성 상승이나 배제는 불가", "non-albuminuric 경로 → 망막병증 없이 진행 가능"]]
      ],
      related: ["dkd-biopsy-indication", "dkd-phenotype", "dkd-biopsy-discordance"],
      papers: [["Yang 2022, Front Endocrinol", "https://doi.org/10.3389/fendo.2022.871272"]]
    },
    {
      id: "dkd-biopsy-indication", section: "dx", title: "언제 신장 조직검사를 하는가?",
      aliases: ["biopsy", "조직검사", "indication"],
      summary: "경과가 전형적 DKD와 어긋날 때 — 비당뇨 신질환을 찾아 치료 방향을 바꾸기 위한 검사",
      facts: [
        ["임상 진단의 성격", "조직 확인 없는 추정 진단", "KDIGO 2024", "2024", false]
      ],
      body: [
        ["비전형 신호", ["당뇨 이환기간 대비 이른 신기능 저하", "급속한 eGFR 저하 또는 급격한 단백뇨 증가", "활동성 요침사·육안적 혈뇨", "당뇨망막병증 부재", "전신 자가면역 소견 동반"]],
        ["검사의 이득", ["비당뇨 신질환 확인 → 면역억제 등 다른 치료 경로", "혼재 병변의 비중 파악 → 예후 판단 보정"]]
      ],
      related: ["dkd-biopsy-discordance", "dkd-retinopathy", "dkd-atlas"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]]
    },
    {
      id: "dkd-risk-prediction", section: "dx", title: "진행 위험을 어떻게 예측하는가?",
      aliases: ["risk prediction", "위험 예측", "eGFR slope", "KFRE"],
      summary: "eGFR·ACR 조합이 기본 축이고 eGFR slope가 경과 지표 — 최근에는 혈장 단백 패널이 기존 임상 방정식과 유전 점수를 모두 상회한 사례 보고",
      facts: [
        ["APOL1 고위험군 9-protein 점수 tAUC", "86.5%", "Nat Med APOL1 APRS", "2026", false],
        ["같은 코호트 Kidney Failure Risk Equation tAUC", "66.1%", "Nat Med APOL1 APRS", "2026", false],
        ["외부검증 tAUC (ARIC · UK Biobank)", "82–85%", "Nat Med APOL1 APRS", "2026", false],
        ["위험 5분위 간 10년 사건률", "62.5% 대 3.3%", "Nat Med APOL1 APRS", "2026", false]
      ],
      body: [
        ["임상 축", ["eGFR 범주 × ACR 범주 → 위험 등급", "eGFR slope → 개인별 진행 속도의 직접 지표", "위험 방정식 → kidney failure 도달 확률 추정"]],
        ["분자 축", ["혈장 단백 패널 → 현재 조직 상태의 반영", "구성 단백이 신장 조직 fibrosis·세뇨관 손상 경로와 상관", "조직 microenvironment 기반 층화 → 임상시험 환자 선택"]],
        ["두 축의 성격 구분", ["유전 점수 → 출생 시점부터 고정된 선행 위험 층화", "단백 점수 → 특정 시점의 상태 반영", "→ 성능 비교표로 병치 시 해석 오류 주의"]]
      ],
      related: ["dkd-genetic-risk", "dkd-proteogenomics", "dkd-subtypes"],
      papers: [["APOL1 Proteomic Risk Score 2026, Nat Med", "https://doi.org/10.1038/s41591-026-04337-2"], ["Abedini 2024, Nat Genet", "https://doi.org/10.1038/s41588-024-01802-x"]]
    },
    {
      id: "dkd-four-pillars", section: "tx", title: "표준 치료의 기둥은 무엇인가?",
      aliases: ["treatment", "표준 치료", "KDIGO 2022", "four pillars"],
      summary: "RAS 차단과 SGLT2 억제제를 기반으로, 잔여 위험에 따라 비스테로이드 MRA·GLP-1 수용체 작용제를 층층이 더하는 병용 모델",
      facts: [
        ["SGLT2i 권고", "T2D·CKD·eGFR ≥20 mL/min/1.73m² — 1A", "KDIGO 2022", "2022", false],
        ["GLP-1 RA 권고", "혈당 목표 미달 시 장시간 작용 제제 — 1B", "KDIGO 2022", "2022", false],
        ["비스테로이드 MRA 권고", "eGFR ≥25 · 정상 칼륨 · ACR ≥30 mg/g — 2A", "KDIGO 2022", "2022", false],
        ["metformin 사용 기준", "eGFR ≥30 mL/min/1.73m²", "KDIGO 2022", "2022", false],
        ["statin", "T1D·T2D 동반 CKD 전체 권고", "KDIGO 2022", "2022", false]
      ],
      body: [
        ["층위 구조", ["생활습관 교정 → 1차 약물 → 잔여 위험 표적 약물의 단계적 적층", "단일 약제가 아닌 병용이 표준"]],
        ["기반 두 축", ["최대 내약 용량의 RAS 차단 → albuminuria·사구체 부하 감소", "SGLT2 억제제 → 혈당 강하와 독립적인 신·심장 보호"]],
        ["적층 약물", ["잔여 albuminuria + 정상 칼륨 → 비스테로이드 MRA 추가", "혈당 목표 미달 또는 체중·심혈관 위험 → GLP-1 RA 추가"]],
        ["중단 기준", ["SGLT2i는 eGFR가 20 미만으로 떨어져도 투석·이식 개시 전까지 유지"]]
      ],
      related: ["dkd-sglt2i", "dkd-finerenone", "dkd-glp1"],
      papers: [["KDIGO 2022 Diabetes in CKD", "https://doi.org/10.1016/j.kint.2022.06.008"]],
      links: [["KDIGO 2022 Executive Summary (PDF)", "https://kdigo.org/wp-content/uploads/2022/10/Executive-Summary-KDIGO-2022-Clinical-Practice-Guideline-for-Diabetes-Management-in-CKD.pdf"]]
    },
    {
      id: "dkd-sglt2i", section: "tx", title: "SGLT2 억제제는 무엇을 바꾸는가?",
      aliases: ["SGLT2 inhibitor", "dapagliflozin", "DAPA-CKD", "gliflozin"],
      summary: "근위세뇨관 재흡수 부하를 낮춰 사구체 과부하를 줄이는 약제 — 혈당 강하와 무관하게 신장 복합 종말점을 39% 낮춘 근거",
      facts: [
        ["DAPA-CKD 무작위 배정", "4,304명", "Heerspink et al., NEJM", "2020", false],
        ["대상 기준", "eGFR 25–75 · ACR 200–5,000 mg/g", "Heerspink et al., NEJM", "2020", false],
        ["T2D 동반 비율", "약 68%", "Heerspink et al., NEJM", "2020", false],
        ["1차 복합 종말점", "HR 0.61 (95% CI 0.51–0.72; P<0.001)", "Heerspink et al., NEJM", "2020", false],
        ["전체 사망", "HR 0.69 (95% CI 0.53–0.88; P=0.004)", "Heerspink et al., NEJM", "2020", false],
        ["평균 추적", "2.4년 (조기 종료)", "Heerspink et al., NEJM", "2020", false]
      ],
      body: [
        ["작용의 층", ["근위세뇨관 sodium·glucose 재흡수 억제 → tubuloglomerular feedback → 사구체 내압 감소", "세뇨관 대사 부하 감소 → FAO 복원 방향", "대사산물 itaconate 상승 경유 NLRP3 억제가 전임상에서 보고"]],
        ["임상 결과", ["1차 복합 종말점 9.2% 대 14.5% → NNT 19", "당뇨 유무를 넘어 CKD 전반으로 적응 확대"]],
        ["실무 주의", ["개시 직후 일시적 eGFR 하강(dip) → 중단 사유 아님", "체액량·저혈압·생식기 감염 모니터링"]]
      ],
      related: ["dkd-four-pillars", "dkd-metabolic-reprogramming", "dkd-innate-immunity"],
      papers: [["Heerspink 2020 (DAPA-CKD), NEJM", "https://doi.org/10.1056/NEJMoa2024816"], ["Ke 2021, FASEB J", "https://doi.org/10.1096/fj.202100909RR"], ["Rykova 2025, Int J Mol Sci", "https://doi.org/10.3390/ijms26041670"]]
    },
    {
      id: "dkd-finerenone", section: "tx", title: "비스테로이드 MRA는 어디에 쓰는가?",
      aliases: ["finerenone", "MRA", "FIDELIO-DKD", "mineralocorticoid"],
      summary: "최대 내약 RAS 차단에도 albuminuria가 남는 T2D 동반 CKD에서 신장 복합 종말점을 18% 낮춘 약제 — hyperkalaemia 감시가 전제",
      facts: [
        ["FIDELIO-DKD 무작위 배정", "5,674명 (finerenone 2,833 · 위약 2,841)", "Bakris et al., NEJM", "2020", false],
        ["용량", "eGFR ≥60 → 20 mg/일 · eGFR 25–60 → 10 mg/일", "Bakris et al., NEJM", "2020", false],
        ["1차 신장 복합 종말점", "HR 0.82 (95% CI 0.73–0.93; P=0.001)", "Bakris et al., NEJM", "2020", false],
        ["심혈관 복합 종말점", "HR 0.86 (95% CI 0.75–0.99; P=0.03)", "Bakris et al., NEJM", "2020", false],
        ["연구자 보고 hyperkalaemia", "18.3% 대 9.0%", "Bakris et al., NEJM", "2020", false],
        ["중앙값 추적", "2.6년", "Bakris et al., NEJM", "2020", false]
      ],
      body: [
        ["적응 위치", ["최대 내약 RAS 차단 위에 추가하는 약제", "잔여 albuminuria ACR ≥30 mg/g · eGFR ≥25 · 정상 칼륨이 개시 조건"]],
        ["1차 종말점 구성", ["kidney failure · 기저 eGFR 40% 이상 감소 · 신장 원인 사망"]],
        ["안전성", ["hyperkalaemia 빈도가 위약의 약 두 배 → 칼륨 정기 측정 전제", "스테로이드성 MRA 대비 비스테로이드 구조의 선택성이 근거"]]
      ],
      related: ["dkd-four-pillars", "dkd-glp1", "dkd-drug-update"],
      papers: [["Bakris 2020 (FIDELIO-DKD), NEJM", "https://doi.org/10.1056/NEJMoa2025845"], ["KDIGO 2022 Diabetes in CKD", "https://doi.org/10.1016/j.kint.2022.06.008"]]
    },
    {
      id: "dkd-glp1", section: "tx", title: "GLP-1 수용체 작용제는 어디까지 왔는가?",
      aliases: ["GLP-1", "semaglutide", "FLOW", "GLP-1 RA"],
      summary: "신장 종말점을 1차 평가변수로 둔 전용 시험에서 복합 위험을 24% 낮춤 — DKD 치료의 세 번째 축으로 자리",
      facts: [
        ["FLOW 무작위 배정", "3,533명", "Perkovic et al., NEJM", "2024", false],
        ["용량", "semaglutide 주 1회 1.0 mg (0.25 mg부터 증량)", "Perkovic et al., NEJM", "2024", false],
        ["1차 복합 종말점", "HR 0.76 (95% CI 0.66–0.88; P=0.0003)", "Perkovic et al., NEJM", "2024", false],
        ["eGFR slope 차이", "연 1.16 mL/min/1.73m² 완만", "Perkovic et al., NEJM", "2024", false],
        ["심혈관 사망", "29% 감소", "Perkovic et al., NEJM", "2024", false],
        ["MACE", "18% 감소", "Perkovic et al., NEJM", "2024", false],
        ["평균 추적", "3.4년", "Perkovic et al., NEJM", "2024", false]
      ],
      body: [
        ["대상 정의", ["eGFR 50–75 + ACR 300–5,000 mg/g, 또는", "eGFR 25–50 + ACR 100–5,000 mg/g"]],
        ["1차 종말점 구성", ["kidney failure(28일 초과 eGFR <15 또는 장기 KRT·이식)", "기저 eGFR 50% 이상 지속 감소", "신장 또는 심혈관 원인 사망"]],
        ["위치 변화", ["기존에는 혈당·체중 관리 약제로 분류", "신장 전용 시험 결과 → 신보호 약제군으로 편입"]]
      ],
      related: ["dkd-four-pillars", "dkd-drug-update", "dkd-finerenone"],
      papers: [["Perkovic 2024 (FLOW), NEJM", "https://pubmed.ncbi.nlm.nih.gov/38785209/"], ["KDIGO 2022 Diabetes in CKD", "https://doi.org/10.1016/j.kint.2022.06.008"]]
    },
    {
      id: "dkd-glycemic-target", section: "tx", title: "혈당·혈압 목표는 어떻게 잡는가?",
      aliases: ["HbA1c", "glycemic target", "혈당 목표", "metformin"],
      summary: "HbA1c 목표는 합병증·저혈당 위험·기대여명에 따라 개별화하고, 약제 선택은 eGFR 구간이 규정 — 지질 관리는 전체 대상",
      facts: [
        ["metformin 사용 기준", "eGFR ≥30 mL/min/1.73m²", "KDIGO 2022", "2022", false],
        ["statin 권고 대상", "T1D·T2D 동반 CKD 전체", "KDIGO 2022", "2022", false],
        ["종합 관리 모델", "생활습관 → 1차 약물 → 잔여 위험 표적 약물", "KDIGO 2022", "2022", false]
      ],
      body: [
        ["혈당 목표의 개별화", ["미세혈관 합병증 위험 대 저혈당·부담의 균형", "eGFR 저하 시 인슐린·일부 경구제 청소율 변화 → 저혈당 위험 상승", "CKD에서 HbA1c 해석 자체가 빈혈·적혈구 수명 영향을 받음"]],
        ["약제와 eGFR 구간", ["metformin — eGFR 30 이상에서 사용", "SGLT2i — eGFR 20 이상 개시, 이후 하강해도 유지", "비스테로이드 MRA — eGFR 25 이상 및 정상 칼륨"]],
        ["동반 관리", ["혈압·지질·체중·금연이 신·심혈관 결과에 동시 작용", "statin은 CKD 동반 당뇨 전체에 권고"]]
      ],
      related: ["dkd-four-pillars", "dkd-sglt2i", "dkd-guideline-change"],
      papers: [["KDIGO 2022 Diabetes in CKD", "https://doi.org/10.1016/j.kint.2022.06.008"]],
      links: [["KDIGO 2022 Executive Summary (PDF)", "https://kdigo.org/wp-content/uploads/2022/10/Executive-Summary-KDIGO-2022-Clinical-Practice-Guideline-for-Diabetes-Management-in-CKD.pdf"]]
    },
    {
      id: "dkd-genetics", section: "omics", title: "DKD에 당뇨 특이 유전효과가 있는가?",
      aliases: ["GWAS", "genetics", "유전", "diabetes-specific loci"],
      summary: "당뇨 환자만으로 본 eGFR GWAS에서 일반 인구와 무관하거나 방향이 반대인 loci가 나옴 — DKD가 ‘일반 CKD + 당뇨’의 단순 합이 아님을 시사",
      facts: [
        ["당뇨군 eGFR GWAS 규모", "52,531명 (T1D 17,267 · T2D 35,264)", "Cole 2025, JASN", "2025", false],
        ["검출 loci", "13개 (P<5×10⁻⁸)", "Cole 2025, JASN", "2025", false],
        ["당뇨 특이 loci", "5개 — HIPK3 · TRIM5 · RORA · ERBB4 · BCL6/LPP", "Cole 2025, JASN", "2025", false],
        ["DKD GWAS 메타 규모 (표현형 10종)", "당뇨 약 27,000명", "Sandholm 2022, Diabetologia", "2022", false],
        ["유전자 수준 신호", "10개 (P<2.7×10⁻⁶)", "Sandholm 2022, Diabetologia", "2022", false]
      ],
      body: [
        ["당뇨 특이성의 근거", ["당뇨군 전용 eGFR GWAS → 일반 인구 eGFR과 무관·역방향 loci 5개", "HIPK3·BCL6·LPP·RORA → 신장 구획·세포에서 DKD·당뇨군 차등발현"]],
        ["표현형 정의의 영향", ["DKD case/control 이분 정의 → 이질적 집단 혼합 → 검정력 손실", "eGFR 정량 형질 + 이환기간·아형·BMI·HbA1c 보정 → 신호 회복", "→ 설계 단계에서 정량 형질·eGFR slope 우선 고려"]],
        ["집단 범위의 한계", ["두 연구 모두 주로 유럽계 코호트 → 전이성 미확인"]]
      ],
      related: ["dkd-variant-to-cell", "dkd-genetic-risk", "dkd-biopsy-discordance"],
      papers: [["Cole 2025, JASN", "https://doi.org/10.1681/ASN.0000000718"], ["Sandholm 2022, Diabetologia", "https://doi.org/10.1007/s00125-022-05735-0"], ["Roumeliotis 2024, Curr Genomics", "https://doi.org/10.2174/0113892029300247240325080421"]]
    },
    {
      id: "dkd-variant-to-cell", section: "omics", title: "GWAS 변이를 어느 세포로 내려보내는가?",
      aliases: ["variant to gene", "eQTL", "multiome", "scorecard", "variant-to-cell-type"],
      summary: "신장 구획별 eQTL과 단일세포 multiome 기반 allele-specific 신호를 합쳐 변이~유전자 쌍을 점수화하는 단계까지 진행 — 비코딩 변이 해석의 표준 경로",
      facts: [
        ["multiancestry eGFR GWAS 규모", "2,287,877명", "Liu 2025, Science", "2025", false],
        ["독립 loci", "1,026개 (신규 97)", "Liu 2025, Science", "2025", false],
        ["통합 정보 종류", "32종 (variant 8 · target 12 · gene 12)", "Liu 2025, Science", "2025", false],
        ["조절변이 대 코딩변이", "601 대 459", "Liu 2025, Science", "2025", false],
        ["구획별 eQTL 표본", "사구체 240 · 세뇨관간질 311", "Han 2023, Nat Commun", "2023", false],
        ["eGene 수", "사구체 5,371 · 세뇨관간질 9,787", "Han 2023, Nat Commun", "2023", false]
      ],
      body: [
        ["문제의 구조", ["신장 형질 GWAS 변이의 90% 이상이 비코딩 영역", "→ 표적 유전자·조절 기능의 지목이 병목"]],
        ["해법의 층", ["구획별 eQTL → 사구체·세뇨관간질 구분", "단일핵 개방 크로마틴·TSS 거리 → fine-mapping의 prior → credible set 축소", "allele-specific accessibility·expression → 세포형 수준 추론", "점수 통합 → 변이~유전자 쌍의 우선순위"]],
        ["검증", ["일부 변이·유전자를 in vitro 및 Drosophila nephrocyte 모델로 확인"]]
      ],
      related: ["dkd-genetics", "dkd-proteogenomics", "dkd-new-method"],
      papers: [["Liu 2025, Science", "https://doi.org/10.1126/science.adp4753"], ["Han 2023, Nat Commun", "https://doi.org/10.1038/s41467-023-37691-7"]],
      links: [["Kidney Disease Genetic Scorecard", "https://susztaklab.com/GWAS2M"]]
    },
    {
      id: "dkd-proteogenomics", section: "omics", title: "조직 프로테옴은 무엇을 더 주는가?",
      aliases: ["proteogenomics", "pQTL", "proteomics", "프로테옴"],
      summary: "신장 조직 단백 수준의 유전 연관이 조직 발현이나 혈장 프로테옴만으로는 잡히지 않는 신호를 제공 — cardio-kidney-metabolic 형질의 표적 우선순위로 연결",
      facts: [
        ["인간 신장 표본 규모", "337례 (WGS + RNA-seq + proteomics)", "Hirohama 2025, Nat Med", "2025", false],
        ["연결한 GWAS 수", "36개 cardio-kidney-metabolic 형질", "Hirohama 2025, Nat Med", "2025", false],
        ["우선순위 단백", "89개", "Hirohama 2025, Nat Med", "2025", false],
        ["대표 사례", "ANGPTL3 (지질·신기능) · CHMP1A (신기능·혈압)", "Hirohama 2025, Nat Med", "2025", false]
      ],
      body: [
        ["방법의 구조", ["kidney pQTL 산출 → GWAS와 Bayesian colocalization", "Mendelian randomization으로 방향성 평가", "→ 유전 근거가 있는 단백 표적의 우선순위"]],
        ["층 간 불일치의 의미", ["전사체 수준 신호와 단백 수준 신호가 항상 일치하지 않음", "혈장 프로테옴은 조직 상태를 부분적으로만 반영", "→ 조직 프로테옴이 독립적 정보층"]],
        ["임상 연결", ["혈장 단백 패널이 진행 예측에서 임상 방정식·유전 점수 상회 사례"]]
      ],
      related: ["dkd-variant-to-cell", "dkd-risk-prediction", "dkd-genetic-risk"],
      papers: [["Hirohama 2025, Nat Med", "https://doi.org/10.1038/s41591-025-03872-8"], ["APOL1 Proteomic Risk Score 2026, Nat Med", "https://doi.org/10.1038/s41591-026-04337-2"]]
    },
    {
      id: "dkd-atlas", section: "omics", title: "단일세포·공간 아틀라스는 무엇을 보여주는가?",
      aliases: ["atlas", "single cell", "spatial", "KPMP", "아틀라스"],
      summary: "세포형 목록을 넘어 손상 상태와 조직 이웃(niche)이 임상 정보를 담는 단위임을 보임 — 상태를 굴리는 전사인자 회로까지 지목",
      facts: [
        ["KPMP 아틀라스 규모", "건강 45명 · 질환 48명 · >400,000 nuclei/cell", "Lake 2023, Nature", "2023", false],
        ["정의된 세포형 · 상태", "51 cell type · 28 cellular state", "Lake 2023, Nature", "2023", false],
        ["공간 microenvironment", "glomerular · immune · tubule · fibrotic", "Abedini 2024, Nat Genet", "2024", false],
        ["근위세뇨관 상태 전환 조절 TF", "ELF3 · KLF6 · KLF10", "Kidney chromatin atlas, Nat Commun", "2024", false],
        ["염증성 PT의 후성유전 각인", "HNF4α 소실 + NF-κB·AP-1 활성", "Reck 2025, Nat Commun", "2025", false]
      ],
      body: [
        ["상태라는 단위", ["cycling · adaptive(successful/maladaptive repair) · transitioning · degenerative", "maladaptive 상태 signature → 신기능 저하 예측"]],
        ["niche라는 단위", ["비지도 deconvolution으로 네 microenvironment 도출", "fibrotic microenvironment 비율 → 전통 조직병리 대비 예후 개선"]],
        ["표적 가능성", ["VCAM1⁺ICAM1⁺ 염증성 PT가 fibrotic niche에 국재", "백혈구 동원·myofibroblast 활성의 paracrine 원천", "AP-1 억제제·senolytic → 마우스 모델에서 염증·fibrosis 개선"]]
      ],
      related: ["dkd-tissue-course", "dkd-subtypes", "dkd-new-method"],
      papers: [["Lake 2023, Nature", "https://doi.org/10.1038/s41586-023-05769-3"], ["Abedini 2024, Nat Genet", "https://doi.org/10.1038/s41588-024-01802-x"], ["Reck 2025, Nat Commun", "https://doi.org/10.1038/s41467-025-59997-4"], ["Kidney chromatin atlas 2024, Nat Commun", "https://doi.org/10.1038/s41467-023-44467-6"]]
    },
    {
      id: "dkd-guideline-change", section: "now", title: "진료 권고는 최근 어떻게 바뀌었는가?",
      aliases: ["guideline", "KDIGO 2022", "권고 변경"],
      summary: "SGLT2 억제제가 강한 권고로 올라오고 비스테로이드 MRA·GLP-1 수용체 작용제가 적층 약물로 편입 — 단일 약제에서 병용 모델로 이동",
      facts: [
        ["SGLT2i", "eGFR ≥20 — 1A 권고", "KDIGO 2022", "2022", false],
        ["GLP-1 RA", "장시간 작용 제제 — 1B 권고", "KDIGO 2022", "2022", false],
        ["비스테로이드 MRA", "eGFR ≥25 · 정상 칼륨 · ACR ≥30 — 2A 제안", "KDIGO 2022", "2022", false],
        ["SGLT2i 유지", "eGFR 20 미만 하강 시에도 KRT 개시 전까지 지속", "KDIGO 2022", "2022", false]
      ],
      body: [
        ["변화의 방향", ["혈당 중심 → 장기 보호 중심의 약제 선택", "eGFR 하한 완화 → 진행된 CKD에서도 개시 가능", "생활습관 → 1차 약물 → 잔여 위험 표적의 적층 모델 명문화"]],
        ["남은 실무 과제", ["잔여 albuminuria에도 약제가 추가되지 않는 치료 관성", "hyperkalaemia 우려로 인한 MRA 과소 처방"]]
      ],
      related: ["dkd-four-pillars", "dkd-drug-update", "dkd-glycemic-target"],
      papers: [["KDIGO 2022 Diabetes in CKD", "https://doi.org/10.1016/j.kint.2022.06.008"]],
      links: [["KDIGO 2022 Guideline (PDF)", "https://kdigo.org/wp-content/uploads/2022/10/KDIGO-2022-Clinical-Practice-Guideline-for-Diabetes-Management-in-CKD.pdf"]]
    },
    {
      id: "dkd-drug-update", section: "now", title: "새 치료 근거는 무엇이 추가됐는가?",
      aliases: ["drug update", "FLOW", "신약", "semaglutide"],
      summary: "GLP-1 수용체 작용제의 신장 전용 시험이 2024년에 결과를 냄 — 세 약제군이 각각 독립된 신장 종말점 근거를 갖춘 상태",
      facts: [
        ["FLOW 1차 복합 종말점", "HR 0.76 (95% CI 0.66–0.88; P=0.0003)", "Perkovic et al., NEJM", "2024", false],
        ["FLOW eGFR slope 차이", "연 1.16 mL/min/1.73m²", "Perkovic et al., NEJM", "2024", false],
        ["DAPA-CKD 1차 복합 종말점", "HR 0.61 (95% CI 0.51–0.72)", "Heerspink et al., NEJM", "2020", false],
        ["FIDELIO-DKD 1차 신장 종말점", "HR 0.82 (95% CI 0.73–0.93)", "Bakris et al., NEJM", "2020", false]
      ],
      body: [
        ["세 축의 정렬", ["SGLT2i — 신장 복합 종말점 39% 감소", "비스테로이드 MRA — 신장 복합 종말점 18% 감소", "GLP-1 RA — 신장 복합 종말점 24% 감소"]],
        ["병용의 근거 상태", ["각 시험은 서로 다른 배경 치료 위에서 수행", "세 약제 동시 병용의 직접 비교 근거는 제한적"]],
        ["항염 표적치료의 현재", ["ASK1·JAK1/2·PKCβ·Nrf2·PDE·IL-1β·IL-6 등 직접 항염 시도가 진행", "실제 신보호 성과는 대사·혈역학 약제 쪽에 집중"]]
      ],
      related: ["dkd-glp1", "dkd-sglt2i", "dkd-finerenone"],
      papers: [["Perkovic 2024 (FLOW), NEJM", "https://pubmed.ncbi.nlm.nih.gov/38785209/"], ["Heerspink 2020 (DAPA-CKD), NEJM", "https://doi.org/10.1056/NEJMoa2024816"], ["Bakris 2020 (FIDELIO-DKD), NEJM", "https://doi.org/10.1056/NEJMoa2025845"], ["Tuttle 2026, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-026-01117-6"]]
    },
    {
      id: "dkd-subtypes", section: "now", title: "새로 정의된 환자 아형은 무엇인가?",
      aliases: ["subtype", "아형", "B cell", "tertiary lymphoid structure", "TLS"],
      summary: "공간 전사체가 B세포 우세·TLS 유사 면역 microenvironment를 진행이 빠른 DKD 부분집합으로 규정하고, 대응 혈장 단백 패널까지 제시",
      facts: [
        ["아틀라스 구성", "Xenium·CosMx 공간전사체 + snRNA 통합", "Dumoulin 2026, Nature", "2026", false],
        ["규정된 아형", "B세포 우세·TLS 유사 면역 microenvironment", "Dumoulin 2026, Nature", "2026", false],
        ["임상 연결", "신장 종말점 도달 가속 · 혈장 단백 패널로 biobank 층화", "Dumoulin 2026, Nature", "2026", false],
        ["조직 분류의 예후", "fibrotic microenvironment가 전통 조직병리 대비 개선", "Abedini 2024, Nat Genet", "2024", false]
      ],
      body: [
        ["아형화의 두 축", ["섬유화 중심 — fibrotic microenvironment 비율", "면역 중심 — B세포 우세 TLS 유사 niche"]],
        ["임상 번역 경로", ["조직 biomarker → 대응 혈장 단백 패널 → 비침습 층화", "임상모델 대비 위험예측 개선 → 시험 환자 선택 근거"]],
        ["해석의 범위", ["층화 지표로서의 유용성과 인과 주장은 구분", "B세포를 제거하는 개입 연구가 다음 단계"]]
      ],
      related: ["dkd-heterogeneity", "dkd-atlas", "dkd-risk-prediction"],
      papers: [["Dumoulin 2026, Nature", "https://doi.org/10.1038/s41586-026-10363-4"], ["Abedini 2024, Nat Genet", "https://doi.org/10.1038/s41588-024-01802-x"]]
    },
    {
      id: "dkd-new-method", section: "now", title: "새로 쓸 수 있게 된 분석 기법은?",
      aliases: ["method", "spatial metabolomics", "공간 대사체", "multiome"],
      summary: "해부 구획별 대사산물을 직접 재는 공간 대사체와 단일세포 multiome 기반 allele-specific 분석이 더해지며, 조직 좌표 위에서 대사·조절·유전을 동시에 읽는 단계",
      facts: [
        ["공간 대사체 대표 성과", "DKD 간질 fibrosis 부위의 adenine 국재", "Sharma 2023, J Clin Invest · Sharma 2026, Nat Rev Nephrol", "2026", false],
        ["adenine의 임상 연결", "요중 adenine이 DKD 진행 예측", "Sharma 2023, J Clin Invest", "2023", false],
        ["공간 multi-omics 사례", "podocyte glycerolipid 대사·MAPK 교란 · 요중 MMP3 후보", "Qiu 2026, Fundamental Research", "2026", false],
        ["크로마틴 층", "snRNA+snATAC+메틸화+4종 histone mark 통합", "Kidney chromatin atlas, Nat Commun", "2024", false]
      ],
      body: [
        ["측정 층의 확장", ["전사체 → 크로마틴 접근성·메틸화·histone mark", "단일세포 → 공간 좌표(spot 및 단일세포 해상도)", "유전자·단백 → 대사산물"]],
        ["대사산물의 위치 변화", ["기존 — 하류 산물로서의 biomarker", "최근 — 손상을 매개하는 driver 후보(adenine 사례)"]],
        ["실무적 함의", ["FFPE 임상 검체에서도 공간 multi-omics 수행 사례 존재", "→ 후향적 biopsy 코호트 활용 가능성"]]
      ],
      related: ["dkd-atlas", "dkd-variant-to-cell", "dkd-tissue-course"],
      papers: [["Sharma 2026, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-025-01007-3"], ["Qiu 2026, Fundamental Research", "https://doi.org/10.1016/j.fmre.2026.02.005"], ["Kidney chromatin atlas 2024, Nat Commun", "https://doi.org/10.1038/s41467-023-44467-6"]]
    }
  ];

  const glossaryTerms = {
    "dkd": { key: "dkd", definition: "Diabetic kidney disease. 당뇨를 동반한 CKD 중 당뇨에 귀속되는 부분." },
    "albuminuria": { key: "albuminuria", definition: "소변 albumin 증가. 사구체 여과장벽 손상과 kidney·cardiovascular 위험의 지표." },
    "acr": { key: "acr", definition: "Urine albumin-to-creatinine ratio. albuminuria를 A1–A3로 분류하는 정량 지표." },
    "egfr": { key: "egfr", definition: "Estimated glomerular filtration rate. serum creatinine·cystatin C로 추정한 여과 기능." },
    "podocyte": { key: "podocyte", definition: "사구체 여과장벽을 구성하는 상피세포. 지질 축적과 과부하 손상에 민감." },
    "fao": { key: "fao", definition: "Fatty acid oxidation. 근위세뇨관의 주 에너지원이며 섬유화 신장에서 결손." },
    "nlrp3": { key: "nlrp3", definition: "세포내 위험신호를 감지해 caspase-1과 IL-1β를 활성화하는 inflammasome 복합체." },
    "cgas-sting": { key: "cgas-sting", definition: "세포질 DNA를 감지해 염증 신호를 켜는 경로. mtDNA 누출이 대표 트리거." },
    "complosome": { key: "complosome", definition: "세포내에서 작동하는 보체. 미토콘드리아 호흡·glycolysis·autophagy·전사를 조절." },
    "sglt2 inhibitor": { key: "sglt2i", definition: "Sodium–glucose cotransporter-2 inhibitor. 혈당 강하와 독립적으로 신·심장을 보호하는 약제군." },
    "finerenone": { key: "finerenone", definition: "비스테로이드 mineralocorticoid receptor antagonist. 잔여 albuminuria에 추가하며 hyperkalaemia 감시 필요." },
    "glp-1 ra": { key: "glp1ra", definition: "Glucagon-like peptide-1 receptor agonist. FLOW에서 신장 복합 종말점 감소를 보인 약제군." },
    "krt": { key: "krt", definition: "Kidney replacement therapy. haemodialysis·peritoneal dialysis·kidney transplantation의 묶음." },
    "apol1": { key: "apol1", definition: "아프리카계에서 kidney 위험과 연관된 유전자. 고위험 유전형에서 진행 위험 상승." },
    "eqtl": { key: "eqtl", definition: "Expression quantitative trait locus. 유전 변이와 유전자 발현의 연관." },
    "microenvironment": { key: "microenvironment", definition: "조직에서 공간적으로 함께 놓인 세포들의 이웃 단위. 신장에서는 glomerular·immune·tubule·fibrotic으로 분해." }
  };
  const glossaryPattern = /(^|[^A-Za-z0-9가-힣])(DKD|albuminuria|ACR|eGFR|podocyte|FAO|NLRP3|cGAS-STING|complosome|SGLT2 inhibitor|finerenone|GLP-1 RA|KRT|APOL1|eQTL|microenvironment)(?=$|[^A-Za-z0-9])/gi;

  return { meta: meta, acts: acts, sections: sections, articles: articleList, glossaryTerms: glossaryTerms, glossaryPattern: glossaryPattern };
})();
