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
      { q: "DKD는 CKD와 어떻게 구분하는가?", note: "DKD · NDKD · 혼재 — 세 entity · 생검 없이는 분리 불가", article: "dkd-definition" },
      { q: "albuminuric·non-albuminuric 표현형은 무엇인가?", note: "Mogensen 경로는 소수 · non-albuminuric 45.6% · microalbuminuria 자연 퇴행", article: "dkd-phenotype" },
      { q: "T1D와 T2D에서 무엇이 다른가?", note: "T1D 약 30% · T2D 약 40% · 혈당 이득의 지연(metabolic memory)", article: "dkd-t1d-t2d" },
      { q: "임상 진단과 조직 소견은 왜 어긋나는가?", note: "T2D 생검의 NDKD 33–72.5% · 한국 생검 DKD 40%·NDKD 51%", article: "dkd-biopsy-discordance" }
    ]},
    epi: { number: "02", title: "역학 · 질병부담", act: "A", questions: [
      { q: "당뇨 환자 중 얼마나 DKD로 가는가?", note: "국제 T2D 약 40% · 한국 당뇨인 25.4% — 혼용 금지", article: "dkd-frequency" },
      { q: "세계 질병부담은 얼마나 큰가?", note: "GBD 2021 DKD DALY · GBD 2023 공복혈당 PAF 31.9%", article: "dkd-global-burden" },
      { q: "한국에서는 어떤 규모인가?", note: "당뇨 14.8% · DKD 25.4% · 조절률·SGLT2i 처방 5.94%", article: "dkd-korea" },
      { q: "kidney failure 원인에서 당뇨의 비중은?", note: "투석의 약 절반 · 신규 ESKD 약 46% · 사망률 수렴의 이면", article: "dkd-kidney-failure-share" }
    ]},
    risk: { number: "01", title: "원인 · 위험인자", act: "B", questions: [
      { q: "고혈당 외에 무엇이 위험을 정하는가?", note: "공복혈당·BMI·혈압 · nephron capacity · 개인 감수성", article: "dkd-riskfactors" },
      { q: "대사 스트레스는 어느 세포를 먼저 치는가?", note: "podocyte 소실 · 세뇨관 선행 변화 · 감수성 계통 내피", article: "dkd-target-cells" },
      { q: "유전 위험은 어떻게 기여하는가?", note: "가족 집적 · 낮은 SNP 유전율 · COL4A3 보호 변이 · APOL1", article: "dkd-genetic-risk" },
      { q: "같은 당뇨에서 왜 진행 속도가 갈리는가?", note: "선형 eGFR 저하 87% · slope 4분할 · 조직·면역·보호 인자", article: "dkd-heterogeneity" }
    ]},
    course: { number: "02", title: "발병 · 진행", act: "B", questions: [
      { q: "세뇨관·podocyte 대사는 어떻게 재프로그램되는가?", note: "FAO 결손 · 미토콘드리아·AMPK 저하 · PKM2 · superoxide 방향의 두 관찰", article: "dkd-metabolic-reprogramming" },
      { q: "대사 손상은 어떻게 선천면역으로 번역되는가?", note: "mtDNA 누출 → cGAS-STING · mtROS → NLRP3", article: "dkd-innate-immunity" },
      { q: "면역세포는 어떻게 되먹임하는가?", note: "대식세포 glycolysis · 지질 연관 표현형 · ROS·ECM", article: "dkd-immune-feedback" },
      { q: "보체는 어디서 들어오는가?", note: "lectin 경로 진입 · C3a·C5a · 세포내 complosome", article: "dkd-complement" },
      { q: "조직은 어떤 순서로 망가지는가?", note: "과여과 → podocyte 소실 → 간질 fibrosis · 10년 정상혈당 시 부분 역전", article: "dkd-tissue-course" }
    ]},
    dx: { number: "01", title: "진단 · 분류", act: "C", questions: [
      { q: "언제 어떻게 선별하는가?", note: "T2D 진단 시점·T1D 5년 후 · 연 1회 eGFR + urine ACR", article: "dkd-screening" },
      { q: "당뇨망막병증은 진단에 어떤 역할을 하는가?", note: "미세혈관 동반 소견 → 당뇨 귀속 근거 보강", article: "dkd-retinopathy" },
      { q: "언제 신장 조직검사를 하는가?", note: "red flag — 짧은 이환기간 · 활동성 요침사 · 급속 진행 · 망막병증 부재", article: "dkd-biopsy-indication" },
      { q: "진행 위험을 어떻게 예측하는가?", note: "eGFR·ACR · TNFR1·KRIS · 바이오마커+EHR 점수", article: "dkd-risk-prediction" }
    ]},
    tx: { number: "02", title: "치료 · 미충족 수요", act: "C", questions: [
      { q: "표준 치료의 기둥은 무엇인가?", note: "RAS 차단 + SGLT2i 기반 · MRA·GLP-1 RA 적층 · 이중 RAS 차단 제외", article: "dkd-four-pillars" },
      { q: "SGLT2 억제제는 무엇을 바꾸는가?", note: "CREDENCE · DAPA-CKD · tubuloglomerular feedback · biphasic eGFR", article: "dkd-sglt2i" },
      { q: "비스테로이드 MRA는 어디에 쓰는가?", note: "FIDELIO-DKD · FIDELITY · 잔여 albuminuria · hyperkalaemia 감시", article: "dkd-finerenone" },
      { q: "GLP-1 수용체 작용제는 어디까지 왔는가?", note: "FLOW · 신장 복합 종말점 · eGFR slope", article: "dkd-glp1" },
      { q: "혈당·혈압 목표는 어떻게 잡는가?", note: "DCCT/EDIC metabolic memory · HbA1c·혈압 목표 · metformin", article: "dkd-glycemic-target" }
    ]},
    omics: { number: "01", title: "유전학 · 오믹스", act: "D", questions: [
      { q: "DKD에 당뇨 특이 유전효과가 있는가?", note: "당뇨 특이 loci · T1D COL4A3 · T2D 재현의 벽", article: "dkd-genetics" },
      { q: "GWAS 변이를 어느 세포로 내려보내는가?", note: "구획별 eQTL · snATAC LDSC · 혈액 mQTL · scorecard", article: "dkd-variant-to-cell" },
      { q: "조직 프로테옴은 무엇을 더 주는가?", note: "kidney pQTL → coloc·MR → 표적 · 혈장 위험점수", article: "dkd-proteogenomics" },
      { q: "단일세포·공간 아틀라스는 무엇을 보여주는가?", note: "손상 세포 상태 · fibrotic microenvironment · 치료 반응 아틀라스", article: "dkd-atlas" }
    ]},
    now: { number: "02", title: "최신 동향", act: "D", questions: [
      { q: "진료 권고는 최근 어떻게 바뀌었는가?", note: "ADA·KDIGO 수렴 · ADA 2026 MRA + SGLT2i 동시 시작", article: "dkd-guideline-change" },
      { q: "새 치료 근거는 무엇이 추가됐는가?", note: "CONFIDENCE 2025 · FLOW 2024 · 항염 표적 2상", article: "dkd-drug-update" },
      { q: "새로 정의된 환자 아형은 무엇인가?", note: "B세포 우세 niche · fibrotic microenvironment 분류", article: "dkd-subtypes" },
      { q: "새로 쓸 수 있게 된 분석 기법은?", note: "공간 대사체 · 단일세포 multiome · 혈액 DNA 메틸화", article: "dkd-new-method" }
    ]}
  };

  const articleList = [
    {
      id: "dkd-definition", section: "def", title: "DKD는 CKD와 어떻게 구분하는가?",
      aliases: ["diabetic kidney disease", "당뇨병성 신장질환", "diabetic nephropathy", "CKD with diabetes", "NDKD"],
      summary: "당뇨 동반 CKD 안의 세 entity — 당뇨 귀속 DKD · 당뇨와 무관한 NDKD · 둘의 혼재; 생검 없이는 분리 불가 → 임상에서는 ‘CKD in diabetes’로 식별해 통합 신보호",
      facts: [
        ["CKD 임상 기준", "eGFR <60 mL/min/1.73m² 또는 ACR ≥30 mg/g · 3개월 이상 지속", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["권고 eGFR 식", "race 항 없는 2021 CKD-EPI creatinine · 근육량 이상·frailty에서 cystatin C 병용", "de Boer 2022 · ADA 2026", "2026", false],
        ["당뇨 + CKD의 구성", "DKD · NDKD · 혼재 — 세 entity", "Anders 2018, Nat Rev Nephrol", "2018", false],
        ["명명 방향", "CKD with diabetes", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["경계의 설정", ["당뇨 + CKD 기준 충족 → 1차적으로 DKD 추정", "당뇨 이환기간·망막병증·albuminuria 경과 → 당뇨 귀속의 정황 근거", "신생검 → DKD·NDKD·혼재를 가르는 유일한 신뢰 수단"]],
        ["통합 접근의 근거", ["T2D에서 고혈압·이상지질혈증·비만·신내 혈관질환·AKI·노화성 nephron 소실이 상시 중첩", "→ 원인 분리보다 ‘당뇨 + CKD’ 식별 후 통합 renoprotection이 실무 표준", "역학 연구의 엄밀한 명칭도 ‘CKD in DM’"]],
        ["CKD 페이지와의 분업", ["공통 진단·병기·overload 감소 치료 → CKD 문서", "당뇨 특이 표현형·기전·약제·유전 → 이 문서군"]]
      ],
      related: ["dkd-phenotype", "dkd-biopsy-discordance", "dkd-genetics"],
      papers: [["Thomas 2015, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2015.18"], ["Anders 2018, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-018-0001-y"], ["de Boer 2022 (ADA–KDIGO 합의), Diabetes Care", "https://doi.org/10.2337/dci22-0027"], ["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]],
      links: [["KDIGO 2024 CKD Guideline", "https://kdigo.org/guidelines/ckd-evaluation-and-management/"]]
    },
    {
      id: "dkd-phenotype", section: "def", title: "albuminuric·non-albuminuric 표현형은 무엇인가?",
      aliases: ["non-albuminuric", "NADKD", "normoalbuminuric", "albuminuria phenotype", "Mogensen", "microalbuminuria regression"],
      summary: "albuminuria를 거치는 고전 Mogensen 경로는 소수 — 신기능 저하 T2D의 45.6%가 albuminuria 없이 eGFR 저하, T1D microalbuminuria도 절반 이상이 자연 퇴행",
      facts: [
        ["신기능 저하 T2D 중 non-albuminuric 비율", "45.6%", "Shi 2022, Front Endocrinol (31편 메타분석)", "2022", false],
        ["전체 DKD 중 / 전체 T2D 중 non-albuminuric", "24.7% / 8.4%", "Shi 2022, Front Endocrinol", "2022", false],
        ["한국 — DM 중 / DKD 중 non-albuminuric", "3.4% / 13.4% (KNHANES 2019–2021)", "Kim 2024, Diabetes Metab J (2023 DKD Fact Sheet in Korea)", "2024", false],
        ["UKPDS — eGFR ≤60 도달자 중 선행 albuminuria 없음", "약 절반 (중앙값 15년 추적)", "Thomas 2015, Nat Rev Dis Primers", "2015", false],
        ["T1D microalbuminuria 6년 누적 regression", "58% (95% CI 52–64) · proteinuria 진행 19%", "Perkins 2003, NEJM", "2003", false]
      ],
      body: [
        ["세 궤적", ["albuminuric — 여과장벽 손상 → ACR 상승 → eGFR 저하(Mogensen 모델)", "non-albuminuric — ACR 정상 범위에서 eGFR 단독 저하", "microalbuminuria regression — HbA1c·혈압·지질 조절 시 자연 퇴행 · ACE inhibitor 사용과 무관"]],
        ["non-albuminuric의 임상상", ["고령 · 여성 우세(남성 RR 0.74) · 당뇨 이환기간 2.9년 짧음", "HbA1c −0.34%p · SBP −6.21 mmHg · 망막병증 적음(RR 0.58)", "예후 — albuminuric보다 양호, DKD 없는 당뇨보다 불량"]],
        ["조직의 시사", ["일본 신생검 registry — non-albuminuric의 62%가 정상·거의 정상 구조", "proteinuric의 66%가 전형적 DKD 병변 → non-albuminuric은 세뇨관간질·혈관 병변 우세", "한국 비율이 낮은 배경 후보 — RAS 차단제 보급 · 인종차 · 비당뇨 CKD 기여"]]
      ],
      related: ["dkd-definition", "dkd-screening", "dkd-heterogeneity"],
      papers: [["Shi 2022, Front Endocrinol", "https://doi.org/10.3389/fendo.2022.871272"], ["Kim 2024 (2023 DKD Fact Sheet in Korea), Diabetes Metab J", "https://doi.org/10.4093/dmj.2023.0310"], ["Thomas 2015, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2015.18"], ["Perkins 2003, NEJM", "https://doi.org/10.1056/NEJMoa021835"]]
    },
    {
      id: "dkd-t1d-t2d", section: "def", title: "T1D와 T2D에서 무엇이 다른가?",
      aliases: ["type 1 diabetes", "type 2 diabetes", "T1D", "T2D", "DCCT/EDIC"],
      summary: "T1D는 발병 시점이 분명해 이환기간 축이 깨끗하고 약 30%, T2D는 진단 시점에 이미 동반 가능하며 약 40% — 혈당 집중관리의 신장 이득은 T1D 10년 이상·T2D 2년 이상 지연",
      facts: [
        ["DKD 발생 비율", "T2D 약 40% · T1D 약 30%", "Tuttle 2022, Kidney Int", "2022", false],
        ["T1D 집중 혈당조절 후 impaired GFR", "50% 감소 (95% CI 18–69) · 중앙 22년 추적", "DCCT/EDIC 2011, NEJM", "2011", false],
        ["세계 DKD-T2DM DALY (2021)", "11,278,935 (95% UI 9,682,785–13,103,871)", "Li 2025, Chin Med J (GBD 2021)", "2021", false],
        ["세계 DKD-T1DM DALY (2021)", "3,875,628 (95% UI 3,062,396–4,845,503)", "Li 2025, Chin Med J (GBD 2021)", "2021", false],
        ["DKD-T2DM 기여 위험 — 높은 BMI", "38.2%", "Li 2025, Chin Med J (GBD 2021)", "2021", false]
      ],
      body: [
        ["시간축", ["T1D — 발병 시점 명확 → 이환기간 대비 위험 추정 용이 · 선별은 진단 5년 후부터", "T2D — 무증상 기간 선행 → 진단 시점에 이미 albuminuria·eGFR 저하 가능 → 진단 시점부터 선별", "혈당 집중관리의 eGFR 이득 — T1D 10년 이상 · T2D 2년 이상 지연(metabolic memory)"]],
        ["위험 구성", ["두 형 공통 — 신기능 이상·높은 공복혈당이 최상위 기여", "T2DM 특이 — 높은 BMI·수축기혈압·식이·낮은 신체활동 추가 기여", "→ T2D DKD는 cardio-kidney-metabolic 맥락"]],
        ["근거의 비대칭", ["T1D GWAS — COL4A3 보호 변이 등 재현 신호 존재", "T2D GWAS — DKD 전체 표현형에서 genome-wide 유의 신호 미검출", "주요 신보호 약제 RCT는 T2D 중심 · T1D 대상 신장 결과 RCT 부재"]],
        ["부담의 증가 속도", ["1990년 대비 DALY 증가 — T1DM 74.0% · T2DM 173.6%", "연령표준화 DALY율 — T1DM −3.9% · T2DM +24.0%"]]
      ],
      related: ["dkd-riskfactors", "dkd-global-burden", "dkd-genetics"],
      papers: [["Tuttle 2022, Kidney Int", "https://doi.org/10.1016/j.kint.2022.05.012"], ["DCCT/EDIC 2011, NEJM", "https://doi.org/10.1056/NEJMoa1111732"], ["Li 2025 (GBD 2021 DKD), Chin Med J", "https://doi.org/10.1097/CM9.0000000000003428"], ["Salem 2019, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2019030218"], ["van Zuydam 2018, Diabetes", "https://doi.org/10.2337/db17-0914"]]
    },
    {
      id: "dkd-biopsy-discordance", section: "def", title: "임상 진단과 조직 소견은 왜 어긋나는가?",
      aliases: ["kidney biopsy", "nondiabetic renal disease", "NDRD", "NDKD", "조직검사"],
      summary: "임상 DKD는 조직 확인 없는 추정 진단 — 생검 센터 보고에서 T2D의 33–72.5%가 비당뇨 신질환(NDKD), 한국 생검 자료에서는 DKD 40%·NDKD 51%·혼재 9%",
      facts: [
        ["T2D 생검 중 NDKD 비율 (센터 보고)", "33–72.5%", "Anders 2018, Nat Rev Nephrol", "2018", false],
        ["한국 생검 자료 (n=126)", "DKD 40% · NDKD 51% · 혼재 9%", "Anders 2018, Nat Rev Nephrol", "2018", false],
        ["최다 NDKD", "아시아 IgA nephropathy · 미국 FSGS", "Anders 2018, Nat Rev Nephrol", "2018", false],
        ["CKD G3의 ESRD 위험 (일본 Gonryo 코호트)", "DKD HR 7.1 (2.46–20.49) · NDKD 0.89 (0.19–4.24)", "Anders 2018, Nat Rev Nephrol", "2018", false]
      ],
      body: [
        ["어긋남의 원인", ["일상 생검의 비현실성 → 당뇨 귀속이 정황 추론", "비당뇨 신질환의 동반·단독", "non-albuminuric 표현형 → 전형적 당뇨 사구체병증 소견 빈도 낮음"]],
        ["수치 해석의 주의", ["생검 적응증 자체가 비전형 사례 쪽으로 편향 → NDKD 비율은 상한 쪽 추정", "DKD·NDKD 여부가 예후를 가름 → 같은 CKD G3에서도 진행 위험 상이"]],
        ["연구에 미치는 영향", ["DKD case/control 이분 정의 → 이질적 집단 혼합 → 효과 희석", "정량 형질(eGFR·eGFR slope) 기반 설계가 대안", "생검 없이 DKD·NDKD를 가르는 비침습 분류기는 아직 부재"]]
      ],
      related: ["dkd-phenotype", "dkd-biopsy-indication", "dkd-genetics"],
      papers: [["Anders 2018, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-018-0001-y"], ["Tervaert 2010, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2010010010"], ["Roumeliotis 2024, Curr Genomics", "https://doi.org/10.2174/0113892029300247240325080421"], ["Cole 2025, JASN", "https://doi.org/10.1681/ASN.0000000718"]]
    },
    {
      id: "dkd-frequency", section: "epi", title: "당뇨 환자 중 얼마나 DKD로 가는가?",
      aliases: ["prevalence", "유병률", "40%", "25.4%", "KNHANES"],
      summary: "국제 문헌 기준 T2D 약 40%·T1D 약 30%, 한국 KNHANES 2019–2021에서는 30세 이상 당뇨인의 25.4%(약 131만명) — 정의·자료원이 달라 혼용 금지",
      facts: [
        ["DKD 발생 비율 (국제 문헌)", "T2D 약 40% · T1D 약 30%", "Tuttle 2022, Kidney Int", "2022", false],
        ["한국 당뇨인 중 DKD (30세 이상)", "25.4% (albuminuria 22.0% · eGFR <60 6.73%)", "Kim 2024, Diabetes Metab J (KNHANES 2019–2021)", "2024", false],
        ["한국 DKD 환자 추정 수", "약 1,309,900명", "Kim 2024, Diabetes Metab J", "2024", false],
        ["한국 연령별 DKD 유병률", "30대 9.6% → 70세 이상 37.3%", "Kim 2024, Diabetes Metab J", "2024", false],
        ["한국 성인(30세 이상) 당뇨 유병률", "14.8%", "Diabetes Fact Sheet in Korea 2024 (KNHANES 2021–2022)", "2024", false]
      ],
      body: [
        ["규모의 구조", ["당뇨 인구 증가 → DKD 절대 환자 수 증가", "DKD 비율 × 당뇨 유병률 → 부담 규모", "고령일수록 DKD 유병률 상승 → 한국 DKD 환자의 66.9%가 60세 이상"]],
        ["비율 해석의 주의", ["국제 ‘약 40%’ → 리뷰 인용치, 1차 역학 추정치로 사용 금지", "한국 25.4% → 단면 표본조사 · albuminuria 또는 eGFR <60 기준", "정의·자료원·연도가 다른 두 값 → 한 문장에서 혼용 금지"]]
      ],
      related: ["dkd-korea", "dkd-global-burden", "dkd-phenotype"],
      papers: [["Tuttle 2022, Kidney Int", "https://doi.org/10.1016/j.kint.2022.05.012"], ["Kim 2024 (2023 DKD Fact Sheet in Korea), Diabetes Metab J", "https://doi.org/10.4093/dmj.2023.0310"], ["Thomas 2015, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2015.18"]],
      links: [["Diabetes Fact Sheet in Korea 2024 (대한당뇨병학회)", "https://diabetes.or.kr/bbs/?code=fact_sheet"]]
    },
    {
      id: "dkd-global-burden", section: "epi", title: "세계 질병부담은 얼마나 큰가?",
      aliases: ["global burden", "GBD", "DALY", "질병부담", "GBD 2023"],
      summary: "GBD 2021 기준 DKD-T2DM DALY 1,128만·사망 47.7만, 1990년 대비 DALY 173.6% 증가 — GBD 2023에서 높은 공복혈당이 CKD DALY의 31.9%를 설명하는 단일 최대 위험요인",
      facts: [
        ["DKD-T2DM DALY (2021)", "11,278,935 (95% UI 9,682,785–13,103,871)", "Li 2025, Chin Med J (GBD 2021)", "2021", false],
        ["DKD-T2DM 연령표준화 DALY율", "131.1/10만 (95% UI 112.8–152.5)", "Li 2025, Chin Med J (GBD 2021)", "2021", false],
        ["DKD 사망 (2021)", "T2DM 477,273 (401,541–565,951) · T1DM 94,020 (71,457–119,984)", "Li 2025, Chin Med J (GBD 2021)", "2021", false],
        ["1990→2021 DALY 증가", "T1DM 74.0% · T2DM 173.6%", "Li 2025, Chin Med J (GBD 2021)", "2021", false],
        ["CKD DALY 중 높은 공복혈당 기여 (PAF)", "31.9% (95% UI 19.8–46.9) — 단일 최대", "GBD 2023 CKD Collaborators 2025, Lancet", "2023", false],
        ["세계 CKD 유병 (20세 이상)", "788 million (743–843) · 연령표준화 14.2%", "GBD 2023 CKD Collaborators 2025, Lancet", "2023", false],
        ["2030 DKD DALY 예측", "T1DM >4.4 million · T2DM >14.6 million", "Li 2025, Chin Med J", "2025", false]
      ],
      body: [
        ["부담의 두 성분", ["조기 사망 → YLL", "기능 저하·투석·합병증 동반 생존 → YLD", "→ 두 성분의 합이 DALY"]],
        ["증가의 동력", ["인구 증가·고령화 → T2DM DALY 증가의 48.3%·31.2%", "역학 변화 → low-SDI 음(−10.5%) · high-SDI 양(+43.1%)", "연령표준화 DALY율 — T1DM −3.9% · T2DM +24.0% → 증가의 대부분이 T2D 축"]],
        ["기여 위험", ["DKD-T2DM — 높은 공복혈당 87.4% · BMI 38.2% · 식이 17.8% · 수축기혈압 10.2%", "CKD 전체 — 공복혈당 31.9% · 수축기혈압 24.5% · BMI 23.5%", "공복혈당 → 20대부터 90세 이상까지 전 연령 1위"]],
        ["수치 사용 주의", ["GBD 추정치 → 불확실구간(UI) 동반 제시 필수", "당뇨성·비당뇨성 CKD 분율은 모델 배분 → DKD 유병의 분모·분자 모두 추정값", "GBD 2021 DKD 분해치와 GBD 2023 CKD 전체 수치 → 추계 연도·대상 상이, 합산·비교 금지"]]
      ],
      related: ["dkd-t1d-t2d", "dkd-korea", "dkd-riskfactors"],
      papers: [["Li 2025 (GBD 2021 DKD), Chin Med J", "https://doi.org/10.1097/CM9.0000000000003428"], ["GBD 2023 CKD Collaborators 2025, Lancet", "https://doi.org/10.1016/S0140-6736(25)01853-7"]]
    },
    {
      id: "dkd-korea", section: "epi", title: "한국에서는 어떤 규모인가?",
      aliases: ["Korea", "한국", "KNHANES", "NHIS", "K-DKD", "대한당뇨병학회"],
      summary: "30세 이상 당뇨 유병률 14.8% 위에서 당뇨인의 25.4%가 DKD — 혈당·혈압 조절은 비DKD 당뇨보다 나쁘고 eGFR 저하 DKD의 SGLT2i 처방은 2019년 5.94%",
      facts: [
        ["30세 이상 당뇨 유병률", "14.8% (남 16.9% · 여 12.6%) · 약 533만명", "Diabetes Fact Sheet in Korea 2024 (KNHANES 2021–2022)", "2024", false],
        ["당뇨인 중 DKD", "25.4% · 약 131만명", "Kim 2024, Diabetes Metab J (KNHANES 2019–2021)", "2024", false],
        ["HbA1c <7.0% 달성 — DKD / 비DKD", "44.1% / 59.5%", "Kim 2024, Diabetes Metab J", "2024", false],
        ["혈압 <130/80 달성 — DKD / 비DKD", "38.1% / 50.6%", "Kim 2024, Diabetes Metab J", "2024", false],
        ["eGFR 저하 DKD의 SGLT2i 처방률", "5.94% (2019)", "Kim 2024, Diabetes Metab J", "2024", false],
        ["당뇨인 전사망 위험 — ESKD vs eGFR ≥90", "HR 7.40", "Kim 2024, Diabetes Metab J (NHIS 2019)", "2024", false]
      ],
      body: [
        ["모수와 관리 현황", ["고령화 + 당뇨 유병률 상승 → DKD 후보 인구 확대", "DKD의 고혈압 동반 73.6% (비DKD 54.2%)", "엄격 종합목표(HbA1c <6.5% · BP <130/80 · LDL-C <70) 달성 2.7%", "RAS blocker 처방 약 70%에서 정체"]],
        ["eGFR 단계별 위험", ["eGFR 30–59 — MI HR 1.60 · 심혈관 사망 2.05 · 전사망 1.50", "ESKD — MI 4.87 · stroke 3.85 · 심혈관 사망 7.27 · 전사망 7.40", "기준 eGFR ≥90 · NHIS 2019 당뇨인 3,950,857명"]],
        ["자료원의 한계", ["KNHANES — 표본조사 기반 유병률", "NHIS — albuminuria 미포함 → 전국 DKD 추세 추적 불가", "SGLT2i 처방률 → 2021년 이전 처방 제한 시기 수치", "K-DKD 전향 코호트(15개 대학병원 · 목표 약 1,300명 · 최대 10년 추적) → 자료 축적 단계"]]
      ],
      related: ["dkd-kidney-failure-share", "dkd-frequency", "dkd-global-burden"],
      papers: [["Kim 2024 (2023 DKD Fact Sheet in Korea), Diabetes Metab J", "https://doi.org/10.4093/dmj.2023.0310"], ["Cha 2026 (K-DKD 코호트), Kidney Res Clin Pract", "https://doi.org/10.23876/j.krcp.26.091"], ["Kim 2024 (KORDS 2021), Kidney Res Clin Pract", "https://doi.org/10.23876/j.krcp.23.130"]],
      links: [["Diabetes Fact Sheet in Korea 2024 (대한당뇨병학회)", "https://diabetes.or.kr/bbs/?code=fact_sheet"]]
    },
    {
      id: "dkd-kidney-failure-share", section: "epi", title: "kidney failure 원인에서 당뇨의 비중은?",
      aliases: ["ESRD", "ESKD", "kidney failure", "CKD 5D", "신대체요법", "KORDS"],
      summary: "한국 투석 환자의 약 절반이 당뇨(2001–2021 46.4–51.0%) — 2023년 신규 ESKD의 약 46%가 당뇨 귀인, 발생률은 정체·유병은 증가",
      facts: [
        ["CKD 5D 중 당뇨 비율", "46.4–51.0% (2001–2021) · 2021년 49.6%", "Kim 2024, Kidney Res Clin Pract (KORDS)", "2024", false],
        ["신규 ESKD 중 당뇨 귀인", "약 46% (2023)", "Cha 2026, Kidney Res Clin Pract", "2026", false],
        ["한국 ESKD 발생률", "355 pmp (2020) — 국제 최상위권", "Cha 2026, Kidney Res Clin Pract", "2026", false],
        ["당뇨 관련 ESKD 발생률 (NHIS 2008–2019)", "201.5–235.1 /100,000 PY — 정체", "Kim 2024, Diabetes Metab J", "2024", false],
        ["당뇨 관련 ESKD 유병률 (NHIS)", "982.0 → 1,169.3 /100,000 PY (+19.1%)", "Kim 2024, Diabetes Metab J", "2024", false],
        ["2021년 신규 혈액투석 — 당뇨 / 비당뇨", "6,680명 / 6,430명", "Kim 2024, Kidney Res Clin Pract (KORDS)", "2024", false],
        ["2021년 CKD 5D 사망률 — 당뇨 / 비당뇨", "40.3 / 41.2 per 1,000 인년", "Kim 2024, Kidney Res Clin Pract (KORDS)", "2024", false]
      ],
      body: [
        ["비중의 안정성", ["20년간 대략 절반에서 등락 → 급증도 급감도 아님", "발생률 정체 + 생존 연장 → 유병 환자 누적"]],
        ["modality와 사망", ["당뇨 CKD 5D 중 PD 41.1%(2001) → 14.6%(2021) · HD 58.9% → 85.4%", "사망률 수렴 — HD만 보면 2019년 이미 역전(2021년 40.3 vs 45.4)", "당뇨 + 복막투석 조합 → 20년간 최고 사망률"]],
        ["사망률 수렴의 이면", ["심장질환 동반 10.9% vs 7.4% · 1년 입원율 41.8% vs 31.7%", "사망원인 1위 심장질환 38.4% vs 30.3%", "HD Kt/V 중앙값 1.39 → 권고선 1.4 미만"]],
        ["해석의 한계", ["등록사업 기반 → 참여 기관·보고 완결성의 영향", "원인 분류가 임상 추정 진단에 의존", "modality별 사망 차이 → 치료 효과와 환자 선택의 미구분"]]
      ],
      related: ["dkd-korea", "dkd-risk-prediction", "dkd-biopsy-discordance"],
      papers: [["Kim 2024 (KORDS 2021), Kidney Res Clin Pract", "https://doi.org/10.23876/j.krcp.23.130"], ["Cha 2026 (K-DKD 코호트), Kidney Res Clin Pract", "https://doi.org/10.23876/j.krcp.26.091"], ["Kim 2024 (2023 DKD Fact Sheet in Korea), Diabetes Metab J", "https://doi.org/10.4093/dmj.2023.0310"]]
    },
    {
      id: "dkd-riskfactors", section: "risk", title: "고혈당 외에 무엇이 위험을 정하는가?",
      aliases: ["risk factor", "위험인자", "BMI", "blood pressure", "susceptibility"],
      summary: "공복혈당이 최대 기여 인자이나 단독 설명 불가 — 비만·수축기혈압·식이, 반복 AKI·평생 nephron capacity, 같은 고혈당에서도 갈리는 개인 감수성이 함께 위험 결정",
      facts: [
        ["기여 위험 — 높은 공복혈당 (DKD-T2DM)", "87.4%", "Li 2025, Chin Med J (GBD 2021)", "2021", false],
        ["기여 위험 — 높은 BMI (DKD-T2DM)", "38.2%", "Li 2025, Chin Med J (GBD 2021)", "2021", false],
        ["기여 위험 — 식이 · 수축기혈압 (DKD-T2DM)", "17.8% · 10.2%", "Li 2025, Chin Med J (GBD 2021)", "2021", false],
        ["CKD DALY 기여 — 공복혈당 · 수축기혈압 · BMI", "31.9% · 24.5% · 23.5%", "GBD 2023 CKD Collaborators 2025, Lancet", "2023", false]
      ],
      body: [
        ["대사·혈역학 축", ["고혈당 → 근위세뇨관 glucose 재흡수 증가 → 사구체 hyperfiltration", "비만 → 전신 저강도 염증·사구체 과부하 · BMI 유전 점수도 DKD와 연관", "혈압 상승 → 사구체 내압 전달 → 여과장벽 손상"]],
        ["capacity 축", ["출생 시 nephron 수·조산·저체중 → 낮은 예비 용량", "반복 AKI·노화 → nephron 추가 소실", "→ 같은 당뇨 부하에서도 잔여 용량에 따라 결과 분화"]],
        ["감수성 축", ["T1D 형제 연구 — index 신증 시 다른 당뇨 형제 위험 72–83% · 음성 시 17–22%", "50년 이상 무합병증 T1D(Joslin Medalist) → 사구체 glycolysis 효소(PKM2) 상향 = 보호 인자", "albumin 노출 → 세뇨관 상피 스트레스 → 면역세포 동원 → 위험인자이자 진행 매개자"]]
      ],
      related: ["dkd-target-cells", "dkd-heterogeneity", "dkd-genetic-risk"],
      papers: [["Li 2025 (GBD 2021 DKD), Chin Med J", "https://doi.org/10.1097/CM9.0000000000003428"], ["GBD 2023 CKD Collaborators 2025, Lancet", "https://doi.org/10.1016/S0140-6736(25)01853-7"], ["van Zuydam 2018, Diabetes", "https://doi.org/10.2337/db17-0914"], ["Qi W 2017, Nat Med", "https://doi.org/10.1038/nm.4328"], ["Brownlee 2001, Nature", "https://doi.org/10.1038/414813a"], ["Jia 2022, Mol Med", "https://doi.org/10.1186/s10020-022-00525-1"]]
    },
    {
      id: "dkd-target-cells", section: "risk", title: "대사 스트레스는 어느 세포를 먼저 치는가?",
      aliases: ["podocyte", "proximal tubule", "근위세뇨관", "target cell", "glomerular endothelium", "사구체 내피"],
      summary: "podocyte·근위세뇨관·사구체 내피가 1차 표적 — 고혈당 직후 podocyte apoptosis 파도와 소실, 사구체보다 앞선 세뇨관 변화, 감수성 계통에 한정된 내피 미토콘드리아 손상",
      facts: [
        ["임상적 신증의 사구체당 podocyte (Pima)", "351±21 vs early diabetes 476±32", "Pagtalunan 1997, J Clin Invest", "1997", false],
        ["당뇨 마우스 podocyte 감소", "Akita −37% (20주) · db/db −26.6% (12주)", "Susztak 2006, Diabetes", "2006", false],
        ["Sirt1 감소 시점 (STZ 마우스)", "근위세뇨관 8주 → 사구체 24주", "Hasegawa 2013, Nat Med", "2013", false],
        ["DKD 감수성 계통 podocyte 감소", "DBA/2J −26.8% (STZ) · 저항 계통 C57BL/6J는 진행 없음", "Qi H 2017, Diabetes", "2017", false],
        ["근위세뇨관 주 연료", "fatty acid oxidation", "Kang 2015, Nat Med", "2015", false]
      ],
      body: [
        ["podocyte", ["고혈당 → NADPH oxidase·미토콘드리아 ROS → 일회성 apoptosis 파도 → 수 감소 후 안정", "남은 podocyte의 보상성 비대 → 덮는 표면적 증가", "ABCA1 하향 → cholesterol efflux 장애 → actin 재배열", "mTORC1 과활성 단독 → DKD 표현형 재현"]],
        ["근위세뇨관", ["재흡수 부담 → 높은 ATP 요구 → FAO 의존", "SGLT2 발현 증가 → 재흡수 부하 가중", "Sirt1·NMN 감소가 사구체보다 먼저 → podocyte Claudin-1 상향의 상류"]],
        ["사구체 내피", ["감수성 계통에서만 OXPHOS 하향 · 내피 한정 8-oxoG 축적", "순환 Edn1 증가 · 내피 Ednra 발현 → 차단 시 fenestrae·podocyte 소실 개선(마우스)", "같은 혈당에서도 계통에 따라 결과 상이 → 감수성의 세포 기반"]]
      ],
      related: ["dkd-metabolic-reprogramming", "dkd-tissue-course", "dkd-atlas"],
      papers: [["Pagtalunan 1997, J Clin Invest", "https://doi.org/10.1172/JCI119163"], ["Susztak 2006, Diabetes", "https://doi.org/10.2337/diabetes.55.01.06.db05-0894"], ["Hasegawa 2013, Nat Med", "https://doi.org/10.1038/nm.3363"], ["Qi H 2017, Diabetes", "https://doi.org/10.2337/db16-0695"], ["Merscher-Gomez 2013, Diabetes", "https://doi.org/10.2337/db13-0399"], ["Kang 2015, Nat Med", "https://doi.org/10.1038/nm.3762"]]
    },
    {
      id: "dkd-genetic-risk", section: "risk", title: "유전 위험은 어떻게 기여하는가?",
      aliases: ["genetic risk", "heritability", "APOL1", "가족력", "COL4A3"],
      summary: "가족 집적은 뚜렷하나 SNP 기반 유전율은 낮음(DKD h² 0.06–0.08) — 재현된 신호는 T1D의 COL4A3 보호 변이 등 소수, 단일 변이로 임상 판단 불가",
      facts: [
        ["SNP 유전율 — DKD (GoDARTS T2D)", "h² 0.08 (CKD 0.12 · eGFR 0.07)", "van Zuydam 2018, Diabetes", "2018", false],
        ["SNP 유전율 — DKD (한국 코호트)", "0.064 ± 0.011", "Jin 2023, BMC Med", "2023", false],
        ["T1D DN 보호 변이", "COL4A3 rs55703767 (Asp326Tyr) · OR 0.79", "Salem 2019, J Am Soc Nephrol", "2019", false],
        ["T1D 형제 간 신증 집적", "index 양성 시 72–83% · 음성 시 17–22%", "Brownlee 2001, Nature", "2001", false],
        ["APOL1 고위험군 9-protein 점수 tAUC", "86.5%", "Nat Med APOL1 APRS", "2026", false]
      ],
      body: [
        ["유전 기여의 층", ["다유전자 배경 — 개별 효과 작고 다수 변이에 분산", "ancestry 특이 — 아프리카계 APOL1 고위험 유전형", "단일유전자 신질환 — 당뇨 동반 시 감별 대상"]],
        ["재현의 현실", ["T1D — COL4A3 보호 allele 보유자의 GBM이 합병증 이전부터 19.7 nm 얇음", "T2D — 기존 DKD locus 55개 중 genome-wide 재현은 UMOD·PRKAG2 둘", "BMI·인슐린 저항 유전 점수와 중첩 → collider bias 주의"]],
        ["임상 번역의 현재", ["유전형만으로 진행 예측 부족 → 혈장 단백 점수가 보완", "유전학의 주된 산출 → 예측보다 표적 발굴"]]
      ],
      related: ["dkd-genetics", "dkd-proteogenomics", "dkd-risk-prediction"],
      papers: [["van Zuydam 2018, Diabetes", "https://doi.org/10.2337/db17-0914"], ["Salem 2019, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2019030218"], ["Jin 2023, BMC Med", "https://doi.org/10.1186/s12916-022-02723-4"], ["APOL1 Proteomic Risk Score 2026, Nat Med", "https://doi.org/10.1038/s41591-026-04337-2"]]
    },
    {
      id: "dkd-heterogeneity", section: "risk", title: "같은 당뇨에서 왜 진행 속도가 갈리는가?",
      aliases: ["heterogeneity", "이질성", "progression", "층화", "eGFR slope", "fast decline"],
      summary: "ESRD로 가는 T1D의 87%가 선형 저하이고 80%가 연 5 mL/min 초과의 빠른 저하 — 표현형·조직 미세환경·면역 구성·보호 인자가 겹쳐 궤적 결정",
      facts: [
        ["ESRD 도달 T1D의 eGFR 궤적", "선형 87% · 가속 6% · 감속 7%", "Krolewski 2017, Kidney Int", "2017", false],
        ["eGFR slope 중앙값", "−9.1 mL/min/년 (Q1 −14.9 · Q3 −5.8) · 80%가 rapid progression", "Krolewski 2017, Kidney Int", "2017", false],
        ["연간 eGFR 저하 — albuminuric / non-albuminuric", "1.75–3.13 / 0–4.6 mL/min/1.73m²", "Shi 2022, Front Endocrinol", "2022", false],
        ["조직 분류의 예후 성능", "fibrotic microenvironment가 전통 조직병리 대비 예후 개선", "Abedini 2024, Nat Genet", "2024", false]
      ],
      body: [
        ["궤적이라는 표현형", ["slope 4분할 — very fast(< −15) · fast · moderate · slow(≥ −5) → ESRD까지 2–6년에서 20–45년", "저하는 신기능 정상 시기에 시작 · albuminuria 단면값으로 궤적 대체 불가", "문헌의 평균 slope(−4.0 ~ −1.5) → decliner·non-decliner 혼합 값"]],
        ["이질성의 층", ["표현형 — albuminuric 대 non-albuminuric", "조직 — fibrotic microenvironment 비율", "면역 — B세포 우세 niche 등 면역 구성 차이", "보호 인자 — 사구체 glycolytic flux(PKM2) 등 진행 저항 요인"]],
        ["층화의 실익", ["평균 경과 기반 예측 → 개인 수준 오차 큼", "조직·혈장 기반 층화 → 고위험군 선별 및 임상시험 환자 선택"]]
      ],
      related: ["dkd-phenotype", "dkd-subtypes", "dkd-risk-prediction"],
      papers: [["Krolewski 2017, Kidney Int", "https://doi.org/10.1016/j.kint.2016.10.046"], ["Shi 2022, Front Endocrinol", "https://doi.org/10.3389/fendo.2022.871272"], ["Abedini 2024, Nat Genet", "https://doi.org/10.1038/s41588-024-01802-x"], ["Dumoulin 2026, Nature", "https://doi.org/10.1038/s41586-026-10363-4"], ["Qi W 2017, Nat Med", "https://doi.org/10.1038/nm.4328"]]
    },
    {
      id: "dkd-metabolic-reprogramming", section: "course", title: "세뇨관·podocyte 대사는 어떻게 재프로그램되는가?",
      aliases: ["metabolic reprogramming", "FAO", "fatty acid oxidation", "lipotoxicity", "대사 재프로그래밍", "AMPK", "PKM2", "superoxide"],
      summary: "FAO 결손·지질 축적에 더해 미토콘드리아 생성·AMPK 축 저하가 사람 소변·생검에서 확인 — FAO 억제 단독으로 섬유화 표현형 재현, AMPK·PKM2 회복은 혈당과 무관하게 보호",
      facts: [
        ["섬유화 신장의 상위 교란 경로", "염증과 대사", "Kang 2015, Nat Med", "2015", false],
        ["DKD 24h 요 대사체 감소", "13종 — 12종이 미토콘드리아 생성·의존", "Sharma 2013, J Am Soc Nephrol", "2013", false],
        ["요 exosome mtDNA", "432±147 → 36±18 copies/ng", "Sharma 2013, J Am Soc Nephrol", "2013", false],
        ["AICAR(AMPK 활성) 효과", "혈당 불변 · PGC1α·complex 활성 회복 · 알부민뇨 감소", "Dugan 2013, J Clin Invest", "2013", false],
        ["ceramide 결합 부위", "VDAC1 Glu59", "Zhu 2025, Nat Commun", "2025", false]
      ],
      body: [
        ["세뇨관 축", ["FAO 효소·조절자 발현 저하 → 지질 축적 → ATP 부족 → 탈분화", "PGC1α·complex I·III·IV 활성·AMPK 저하 → 미토콘드리아 생성 억제", "유전적·약리적 FAO 복구 → 마우스 보호"]],
        ["podocyte 축", ["CerS6 상향 → ceramide(d18:1/16:0) → VDAC1 결합 → 미토콘드리아 투과성 변화", "고혈당 → PKM2 Cys358 sulfenylation → tetramer·활성 저하", "PKM2 활성제 TEPP-46 → 독성 중간대사체 감소·병변 역전(마우스)"]],
        ["superoxide 방향의 두 관찰", ["세포배양 고혈당 → 미토콘드리아 superoxide 증가 → 네 손상 경로 개시", "생체 당뇨 마우스 신장 → superoxide 감소 + AMPK 저하", "→ 모델·세포형·측정 구획 명시 없는 일반화 금물"]],
        ["lncRNA를 통한 조절", ["Tug1 → PGC-1α 프로모터 결합 → 미토콘드리아 생체에너지 회복", "PVT1 → TRIM56 경유 AMPKα 유비퀴틴화 → 미토콘드리아 생성·분열 교란"]]
      ],
      related: ["dkd-target-cells", "dkd-innate-immunity", "dkd-sglt2i"],
      papers: [["Kang 2015, Nat Med", "https://doi.org/10.1038/nm.3762"], ["Sharma 2013, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2013020126"], ["Dugan 2013, J Clin Invest", "https://doi.org/10.1172/JCI66218"], ["Nishikawa 2000, Nature", "https://doi.org/10.1038/35008121"], ["Qi W 2017, Nat Med", "https://doi.org/10.1038/nm.4328"], ["Zhu 2025, Nat Commun", "https://doi.org/10.1038/s41467-025-56891-x"], ["Lv 2024, Cell Death Dis", "https://doi.org/10.1038/s41419-024-07107-5"]]
    },
    {
      id: "dkd-innate-immunity", section: "course", title: "대사 손상은 어떻게 선천면역으로 번역되는가?",
      aliases: ["innate immunity", "cGAS-STING", "NLRP3", "선천면역", "sterile inflammation"],
      summary: "미토콘드리아가 망가지며 세포질로 새어나온 자기 DNA와 ROS가 센서를 켜는 구조 — 염증의 출발점이 침윤 면역세포가 아니라 신장 실질세포",
      facts: [
        ["세뇨관 Tfam 결손 마우스 경과", "미토콘드리아 소실·에너지 결핍 → fibrosis·면역세포 침윤", "Chung 2019, Cell Metab", "2019", false],
        ["STING 억제 효과", "마우스 CKD 모델 fibrosis 완화", "Chung 2019, Cell Metab", "2019", false],
        ["골수 chimera 결과", "Nlrp3 결손 골수 이식은 보호 실패 · Nlrp3 결손 수용체는 WT 골수에도 보호", "Shahzad 2015, Kidney Int", "2015", false],
        ["IL-1R 길항 효과", "마우스 당뇨신증 예방 및 역전", "Shahzad 2015, Kidney Int", "2015", false],
        ["인간 DKD 세뇨관 전사체 상위 경로", "CTL-mediated apoptosis · dendritic cell maturation · allograft rejection", "Woroniecka 2011, Diabetes", "2011", false]
      ],
      body: [
        ["핵산 센싱 경로", ["미토콘드리아 손상 → 세포질 mtDNA 누출 → cGAS-STING 활성", "genotoxic stress·후성유전 탈조절 → 핵 DNA 단편·retroelement 축적", "AIM2·endosomal TLR 등 다른 센서도 맥락에 따라 관여"]],
        ["inflammasome 경로", ["mitochondrial ROS → 사구체 내피·podocyte의 NLRP3 활성", "caspase-1 → IL-1β·IL-18 성숙 → sterile inflammation", "AGE-RAGE → NLRP3 경유 IL-1β·IL-18 유도"]],
        ["인간 조직의 증거", ["미세해부 DKD 세뇨관 → 차등발현 probeset의 약 70%가 증가 · 염증·면역 경로 상위", "초기 DKD(정상 알부민뇨 포함) 생검 → 간질 손상과 염증·미토콘드리아 network 연결 · 상류 조절자 IL1β", "→ ‘비면역성 퇴행성 질환’ 통념과 조직 소견의 불일치"]]
      ],
      related: ["dkd-metabolic-reprogramming", "dkd-immune-feedback", "dkd-complement"],
      papers: [["Chung 2019, Cell Metab", "https://doi.org/10.1016/j.cmet.2019.08.003"], ["Shahzad 2015, Kidney Int", "https://doi.org/10.1038/ki.2014.271"], ["Andrade-Silva 2026, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-026-01120-x"], ["Woroniecka 2011, Diabetes", "https://doi.org/10.2337/db10-1181"], ["Nair 2018, Kidney Int", "https://doi.org/10.1016/j.kint.2017.08.013"], ["Tuttle 2022, Kidney Int", "https://doi.org/10.1016/j.kint.2022.05.012"]]
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
      aliases: ["complement", "보체", "lectin pathway", "C3a", "C5a", "complosome", "C3"],
      summary: "당뇨에서 변형된 당쇄에 mannose가 결합하는 lectin 경로가 특이 진입점 — 보체 성분은 신장 조직에서 국소 전사되고, 효과분자 C3a·C5a가 염증·산화스트레스·fibrosis 조절",
      facts: [
        ["lectin 경로 진입 방식", "변형된 당쇄에 mannose 결합", "Kotsalas 2025, J Clin Med", "2025", false],
        ["주요 효과분자", "C3a · C5a · C5b-9 (MAC)", "Kotsalas 2025, J Clin Med", "2025", false],
        ["DKD 조직 C3 mRNA", "6배 증가 · 면역조직화학과 r=0.82", "Woroniecka 2011, Diabetes", "2011", false],
        ["생검 확진 DKD의 C3 면역형광 양성 (41례)", "50% · 경화 사구체 비율 49.1% vs 22.1% · eGFR·요단백비 차이 없음", "Woroniecka 2011, Diabetes", "2011", false],
        ["complosome 조절 대상", "미토콘드리아 호흡 · glycolysis · autophagy · 유전자 전사", "West & Kemper 2023, Nat Rev Nephrol", "2023", false]
      ],
      body: [
        ["세 경로", ["classical — C1q가 면역복합체·손상 자기항원 인식", "lectin — 당뇨에서 변형된 당쇄 인식 → 당뇨 특이 진입점", "alternative — C3 tick-over가 손상 표면에서 증폭"]],
        ["효과와 조절", ["C3a·C5a → 염증·산화스트레스·미토콘드리아 항상성·fibrosis 조절", "CD55·CD46·CFH·C1q 등 보체 성분·조절인자의 국소 전사 → 혈중 유입만이 아닌 조직 생산", "C3 양성은 DKD의 약 절반 → 분자 아형인지 진행 단계 표지인지 미구분"]],
        ["세포내 보체", ["면역·비면역세포 모두에서 기본 세포생리 조절", "→ 보체를 면역 효과기가 아니라 대사 조절자로 재배치"]],
        ["약물과의 교차", ["SGLT2i·GLP-1 등 신규 항당뇨제의 보체 조절 효과가 별도 정리됨"]]
      ],
      related: ["dkd-innate-immunity", "dkd-immune-feedback", "dkd-drug-update"],
      papers: [["Kotsalas 2025, J Clin Med", "https://doi.org/10.3390/jcm14238589"], ["Woroniecka 2011, Diabetes", "https://doi.org/10.2337/db10-1181"], ["Ma 2025, Diabet Med", "https://doi.org/10.1111/dme.15427"], ["West & Kemper 2023, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-023-00704-1"]]
    },
    {
      id: "dkd-tissue-course", section: "course", title: "조직은 어떤 순서로 망가지는가?",
      aliases: ["disease course", "진행", "hyperfiltration", "fibrosis", "tubulointerstitial", "RPS classification", "reversibility"],
      summary: "과여과·사구체 비대 → podocyte 소실·GBM 비후·mesangial 확장 → 세뇨관간질 fibrosis로 무게중심 이동 — 구조 변화는 비선형으로 가속하고, 10년 정상혈당 후 일부 역전",
      facts: [
        ["DKD 병리 분류 (RPS)", "I GBM 비후 · II mesangial 확장 · III Kimmelstiel–Wilson · IV >50% global sclerosis", "Tervaert 2010, J Am Soc Nephrol", "2010", false],
        ["구조 변화의 가속 (Pima)", "mesangial volume +75% → 6년 뒤 +225% · GBM +15% → +40%", "Pagtalunan 1997, J Clin Invest", "1997", false],
        ["췌장 이식 후 10년 정상혈당", "GBM 594 → 404 nm · Kimmelstiel–Wilson 결절 소실 (5년 시점 무변화)", "Fioretto 1998, NEJM", "1998", false],
        ["초기 DKD 간질 부피 (Pima 생검)", "29.5% vs donor 11.9% · 49명 중 23명 정상 알부민뇨", "Nair 2018, Kidney Int", "2018", false],
        ["fibrotic microenvironment의 예후 가치", "전통 조직병리 대비 개선", "Abedini 2024, Nat Genet", "2024", false]
      ],
      body: [
        ["고전 경로", ["고혈당 → 근위세뇨관 재흡수 증가 → tubuloglomerular feedback 비활성 → 과여과·사구체 비대", "podocyte 소실 + 남은 사구체 벽 투과성 저하 → GFR 저하", "세뇨관 albumin 노출·대사 실패 → 간질 염증 → fibrosis"]],
        ["세뇨관간질로의 이동", ["진행 DKD — 사구체 최대 절반이 위축 세뇨관에 연결 · 최대 17% atubular", "신기능 예후 → 사구체 변화보다 tubulointerstitial fibrosis와 상관", "임상적으로 이른 단계의 간질 손상 → 염증·ECM 상승 · 미토콘드리아·대사 하강 전사 서명", "염증성 PT의 fibrotic niche 국재 → paracrine 원천"]],
        ["가역성과 예외 경로", ["10년 정상혈당 → GBM·TBM 두께·mesangial 부피 감소 · 5년에는 무변화", "구조 회복과 기능 회복의 분리 → creatinine clearance 미회복(cyclosporine 교란)", "non-albuminuric — 여과장벽 손상 없는 eGFR 저하 · 세뇨관간질·혈관 병변 우세"]]
      ],
      related: ["dkd-phenotype", "dkd-target-cells", "dkd-atlas"],
      papers: [["Tervaert 2010, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2010010010"], ["Pagtalunan 1997, J Clin Invest", "https://doi.org/10.1172/JCI119163"], ["Fioretto 1998, NEJM", "https://doi.org/10.1056/NEJM199807093390202"], ["Nair 2018, Kidney Int", "https://doi.org/10.1016/j.kint.2017.08.013"], ["Vallon & Thomson 2020, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-020-0256-y"], ["Abedini 2024, Nat Genet", "https://doi.org/10.1038/s41588-024-01802-x"], ["Reck 2025, Nat Commun", "https://doi.org/10.1038/s41467-025-59997-4"]]
    },
    {
      id: "dkd-screening", section: "dx", title: "언제 어떻게 선별하는가?",
      aliases: ["screening", "선별", "ACR", "UACR", "eGFR", "CKD-EPI"],
      summary: "eGFR과 urine ACR을 함께, 최소 연 1회 — T2D는 진단 시점부터·T1D는 진단 5년 후부터; 한 축만 보면 non-albuminuric 경로 누락, 단회 이상만으로는 만성성 미확정",
      facts: [
        ["선별 검사", "spot urine ACR + eGFR · 최소 연 1회", "de Boer 2022 · ADA 2026", "2026", false],
        ["선별 시작", "T2D 진단 시점 · T1D 진단 5년 후", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["eGFR 식", "2021 CKD-EPI creatinine (race 항 없음)", "de Boer 2022 · ADA 2026", "2026", false],
        ["만성성 기준", "3개월 이상 지속", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false]
      ],
      body: [
        ["두 축을 함께 보는 이유", ["albuminuria 단독 선별 → non-albuminuric 경로 누락", "eGFR 단독 선별 → 초기 여과장벽 손상 누락", "같은 eGFR에서도 ACR 상승 시 위험 증가 → 조합이 위험 규정"]],
        ["해석의 주의", ["단회 eGFR 저하·ACR 상승 → 반복 확인 전 확정 금물", "microalbuminuria → 자연 퇴행 빈번(T1D 6년 누적 58%) → 추세로 판단", "근육량 이상·frailty → cystatin C 병용"]],
        ["현실의 공백", ["T2D 진단 시점에 이미 CKD 근거가 흔함 → 지연 선별의 손실", "선별 자체의 저활용 → 합의문이 명시한 실무 과제"]]
      ],
      related: ["dkd-phenotype", "dkd-retinopathy", "dkd-risk-prediction"],
      papers: [["de Boer 2022 (ADA–KDIGO 합의), Diabetes Care", "https://doi.org/10.2337/dci22-0027"], ["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"], ["Perkins 2003, NEJM", "https://doi.org/10.1056/NEJMoa021835"]],
      links: [["KDIGO 2024 CKD Guideline", "https://kdigo.org/guidelines/ckd-evaluation-and-management/"]]
    },
    {
      id: "dkd-retinopathy", section: "dx", title: "당뇨망막병증은 진단에 어떤 역할을 하는가?",
      aliases: ["retinopathy", "당뇨망막병증", "microvascular"],
      summary: "같은 미세혈관 손상 축의 동반 소견으로 당뇨 귀속 근거를 보강 — 다만 non-albuminuric 표현형에서는 동반이 적어(RR 0.58) 부재가 배제 근거는 아님",
      facts: [
        ["non-albuminuric 표현형의 망막병증", "RR 0.58 (albuminuric 대비)", "Shi 2022, Front Endocrinol", "2022", false],
        ["NDKD 의심 신호로서의 망막병증 부재", "T1D 이환 <5년과 함께 red flag", "ADA 2026", "2026", false]
      ],
      body: [
        ["보강 근거로서의 역할", ["망막·사구체 모두 미세혈관 표적 → 동반 시 당뇨 귀속 설득력 상승", "특히 T1D에서 이환기간과 함께 해석"]],
        ["한계", ["망막병증 부재 → 비당뇨 신질환 가능성 상승이나 배제는 불가", "non-albuminuric 경로 → 망막병증 없이 진행 가능", "T2D 생검 자료에서 NDKD가 33–72.5% → 망막병증만으로 귀속 확정 불가"]]
      ],
      related: ["dkd-biopsy-indication", "dkd-phenotype", "dkd-biopsy-discordance"],
      papers: [["Shi 2022, Front Endocrinol", "https://doi.org/10.3389/fendo.2022.871272"], ["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"], ["Anders 2018, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-018-0001-y"]]
    },
    {
      id: "dkd-biopsy-indication", section: "dx", title: "언제 신장 조직검사를 하는가?",
      aliases: ["biopsy", "조직검사", "indication", "red flag", "RPS"],
      summary: "경과가 전형적 DKD와 어긋날 때 — 비당뇨 신질환을 찾아 치료 방향을 바꾸기 위한 검사; 판독은 RPS 분류와 면역형광·전자현미경 전제",
      facts: [
        ["NDKD 의심 신호", "T1D 이환 <5년 또는 망막병증 부재 · 활동성 요침사 · 지속적으로 양호한 혈당 · 급격한 eGFR 감소 · 급격히 증가하거나 매우 높은 UACR", "ADA 2026", "2026", false],
        ["T2D 생검 중 NDKD", "33–72.5% (센터 보고)", "Anders 2018, Nat Rev Nephrol", "2018", false],
        ["RPS 분류 적용 전제", "사구체 ≥10개 · 면역형광 · 전자현미경 필수", "Tervaert 2010, J Am Soc Nephrol", "2010", false]
      ],
      body: [
        ["비전형 신호", ["당뇨 이환기간 대비 이른 신기능 저하 · T1D 이환 5년 미만", "급속한 eGFR 저하 또는 급격한 UACR 증가", "활동성 요침사(적혈구·세포성 cast)", "당뇨망막병증 부재 · 지속적으로 양호한 혈당 조절"]],
        ["검사의 이득", ["비당뇨 신질환 확인 → 면역억제 등 다른 치료 경로", "혼재 병변의 비중 파악 → 예후 판단 보정"]],
        ["판독의 틀", ["RPS class I–IV + IFTA·간질 염증·세동맥 hyalinosis·동맥경화 별도 점수", "분류의 결과 예측력 검증 → 제안 범위 밖", "일상 생검의 비현실성 → DKD 대부분은 임상 진단으로 유지"]]
      ],
      related: ["dkd-biopsy-discordance", "dkd-retinopathy", "dkd-tissue-course"],
      papers: [["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"], ["Anders 2018, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-018-0001-y"], ["Tervaert 2010, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2010010010"]]
    },
    {
      id: "dkd-risk-prediction", section: "dx", title: "진행 위험을 어떻게 예측하는가?",
      aliases: ["risk prediction", "위험 예측", "eGFR slope", "KFRE", "TNFR1", "KRIS", "KidneyIntelX", "CKD273"],
      summary: "eGFR·ACR 조합과 eGFR slope가 기본 축 — 혈중 TNFR1·KRIS·KIM-1 등 염증·손상 단백이 albuminuria와 독립적으로 ESRD를 예측, 다만 신기능 정상 단계의 예측력은 낮은 수준",
      facts: [
        ["TNFR1 최고 4분위 12년 ESRD 누적위험", "54% vs 나머지 3% (Joslin T2D)", "Niewczas 2012, J Am Soc Nephrol", "2012", false],
        ["KRIS 추가 시 C-statistic", "0.81 → 0.86", "Niewczas 2019, Nat Med", "2019", false],
        ["KidneyIntelX validation AUC", "0.77 vs 임상모델 0.61", "Chan 2021, Diabetologia", "2021", false],
        ["CKD273 고위험군 microalbuminuria 위험", "보정 HR 2.48 · AUC 0.76 → 0.78", "Tofte 2020, Lancet Diabetes Endocrinol", "2020", false],
        ["APOL1 고위험군 9-protein 점수 tAUC", "86.5% vs KFRE 66.1%", "Nat Med APOL1 APRS", "2026", false]
      ],
      body: [
        ["임상 축", ["eGFR 범주 × ACR 범주 → 위험 등급", "eGFR slope → 개인별 진행 속도의 직접 지표", "위험 방정식 → kidney failure 도달 확률 추정"]],
        ["분자 축", ["TNF receptor 계열 → 리간드(TNF-α)와 무관 · 출처는 신장 밖 · albuminuria 비의존 정보", "CKD 3–4기 TNFR1 cut-off → 3년 ESRD 민감도 72%·PPV 81%, 신기능 정상 단계에서는 50%·58%", "바이오마커 점수의 성능 원천 → 알고리즘보다 단백 투입", "CKD273 소변 peptidome → 범용 선별보다 임상시험 enrichment 용도"]],
        ["두 축의 성격 구분", ["유전 점수 → 출생 시점부터 고정된 선행 위험 층화", "단백 점수 → 특정 시점의 상태 반영", "→ 성능 비교표로 병치 시 해석 오류 주의"]]
      ],
      related: ["dkd-genetic-risk", "dkd-heterogeneity", "dkd-subtypes"],
      papers: [["Niewczas 2012, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2011060627"], ["Niewczas 2019, Nat Med", "https://doi.org/10.1038/s41591-019-0415-5"], ["Chan 2021 (KidneyIntelX), Diabetologia", "https://doi.org/10.1007/s00125-021-05444-0"], ["Tofte 2020 (PRIORITY), Lancet Diabetes Endocrinol", "https://doi.org/10.1016/S2213-8587(20)30026-7"], ["Krolewski 2017, Kidney Int", "https://doi.org/10.1016/j.kint.2016.10.046"], ["APOL1 Proteomic Risk Score 2026, Nat Med", "https://doi.org/10.1038/s41591-026-04337-2"]]
    },
    {
      id: "dkd-four-pillars", section: "tx", title: "표준 치료의 기둥은 무엇인가?",
      aliases: ["treatment", "표준 치료", "KDIGO 2022", "ADA", "four pillars"],
      summary: "RAS 차단과 SGLT2 억제제를 기반으로 잔여 위험에 따라 비스테로이드 MRA·GLP-1 수용체 작용제를 더하는 병용 모델 — ADA·KDIGO 권고 수렴, 이중 RAS 차단은 제외",
      facts: [
        ["SGLT2i", "T2D·CKD·eGFR ≥20 개시 — 1A · 이후 투석·이식 전까지 유지", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["비스테로이드 MRA", "eGFR ≥25 · 정상 칼륨 · ACR ≥30 mg/g — 2A", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["GLP-1 RA", "장시간 작용 제제 — 1B", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["finerenone + SGLT2i 동시 시작", "T2D · UACR ≥100 · eGFR 30–90에서 고려 (B)", "ADA 2026", "2026", false],
        ["ACEi + ARB 이중차단", "hyperkalemia HR 2.8 · AKI HR 1.7 · 1차 종말점 무개선", "Fried 2013, NEJM", "2013", false],
        ["metformin", "eGFR ≥30 · 30–44에서 1,000 mg/일로 감량", "de Boer 2022 · ADA 2026", "2026", false]
      ],
      body: [
        ["층위 구조", ["생활습관 교정 → 1차 약물 → 잔여 위험 표적 약물의 단계적 적층", "단일 약제가 아닌 병용이 표준 · ADA·KDIGO 권고 수렴"]],
        ["기반 두 축", ["최대 내약 RAS 차단 → albuminuria·사구체 부하 감소 · 혈압 독립 효과(RENAAL)", "SGLT2 억제제 → 혈당 강하와 독립적인 신·심장 보호"]],
        ["적층 약물", ["잔여 albuminuria + 정상 칼륨 → 비스테로이드 MRA · SGLT2i 병용 시 hyperkalaemia 위험 감소", "혈당 목표 미달 또는 체중·심혈관 위험 → GLP-1 RA", "MRA + SGLT2i 동시 시작 → UACR 감소의 거의 완전한 가산"]],
        ["중단·금기 기준", ["ACEi + ARB 이중차단 → albuminuria는 더 낮추나 hard endpoint 무개선", "SGLT2i → eGFR 20 미만 하강 후에도 투석·이식 개시 전까지 유지", "임신 → ACEi·ARB·MRA·SGLT2i 금기"]]
      ],
      related: ["dkd-sglt2i", "dkd-finerenone", "dkd-glp1"],
      papers: [["de Boer 2022 (ADA–KDIGO 합의), Diabetes Care", "https://doi.org/10.2337/dci22-0027"], ["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"], ["Brenner 2001 (RENAAL), NEJM", "https://doi.org/10.1056/NEJMoa011161"], ["Fried 2013 (VA NEPHRON-D), NEJM", "https://doi.org/10.1056/NEJMoa1303154"], ["Agarwal 2025 (CONFIDENCE), NEJM", "https://doi.org/10.1056/NEJMoa2410659"]],
      links: [["KDIGO 2022 Executive Summary (PDF)", "https://kdigo.org/wp-content/uploads/2022/10/Executive-Summary-KDIGO-2022-Clinical-Practice-Guideline-for-Diabetes-Management-in-CKD.pdf"]]
    },
    {
      id: "dkd-sglt2i", section: "tx", title: "SGLT2 억제제는 무엇을 바꾸는가?",
      aliases: ["SGLT2 inhibitor", "dapagliflozin", "canagliflozin", "DAPA-CKD", "CREDENCE", "gliflozin", "tubuloglomerular feedback"],
      summary: "근위세뇨관 재흡수를 막아 tubuloglomerular feedback으로 사구체 과부하를 낮추는 약제 — T2D 신증 전용 CREDENCE에서 신장 복합 30% 감소, DAPA-CKD에서 당뇨 유무와 무관하게 39% 감소",
      facts: [
        ["CREDENCE 1차 복합 (T2D 신증 4,401명)", "HR 0.70 (0.59–0.82) · 2.5년 NNT 22", "Perkovic 2019, NEJM", "2019", false],
        ["DAPA-CKD 1차 복합 (CKD 4,304명, T2D 67.5%)", "HR 0.61 (0.51–0.72) · NNT 19", "Heerspink 2020, NEJM", "2020", false],
        ["DAPA-CKD 당뇨 유무별", "T2D HR 0.64 · 비당뇨 HR 0.50", "Heerspink 2020, NEJM", "2020", false],
        ["EMPA-KIDNEY 1차 복합 (6,609명)", "HR 0.72 (0.64–0.82)", "ADA 2026", "2026", false],
        ["T1D 과여과군 inulin-GFR (empagliflozin 8주)", "172 → 139 mL/min/1.73m² · 정상여과군 무변화", "Cherney 2014, Circulation", "2014", false],
        ["급성 dip 후 만성 eGFR 기울기 (CREDENCE)", "−1.85 vs −4.59 mL/min/1.73m²/년", "Perkovic 2019, NEJM", "2019", false]
      ],
      body: [
        ["작용의 층", ["근위세뇨관 Na·glucose 재흡수 억제 → macula densa NaCl 전달 회복 → afferent 수축 → 사구체 내압 감소", "biphasic eGFR(초기 dip → 완만한 기울기) → 세뇨관 가설의 임상적 지문 · 중단 시 dip 복귀", "비혈당 경로 — 혈압 3–6 mmHg 감소 · 혈장량 감소 · hematocrit 상승", "대사산물 itaconate 상승 경유 NLRP3 억제 → 전임상 보고"]],
        ["임상 결과", ["CREDENCE — HbA1c 차 0.25%p에 그친 상태에서 ESKD HR 0.68", "DAPA-CKD — 비당뇨 CKD에서 ACEi/ARB 외 첫 신부전 예방 근거", "개시 하한 eGFR 30(KDIGO 2020) → 20(2022)"]],
        ["실무 주의", ["초기 eGFR dip → 중단 사유 아님", "생식기 진균감염 6% vs 1% · DKA 드물게 증가", "체액량·저혈압 모니터링"]]
      ],
      related: ["dkd-four-pillars", "dkd-metabolic-reprogramming", "dkd-tissue-course"],
      papers: [["Perkovic 2019 (CREDENCE), NEJM", "https://doi.org/10.1056/NEJMoa1811744"], ["Heerspink 2020 (DAPA-CKD), NEJM", "https://doi.org/10.1056/NEJMoa2024816"], ["Cherney 2014, Circulation", "https://doi.org/10.1161/CIRCULATIONAHA.113.005081"], ["Vallon & Thomson 2020, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-020-0256-y"], ["Ke 2021, FASEB J", "https://doi.org/10.1096/fj.202100909RR"]]
    },
    {
      id: "dkd-finerenone", section: "tx", title: "비스테로이드 MRA는 어디에 쓰는가?",
      aliases: ["finerenone", "MRA", "FIDELIO-DKD", "FIDELITY", "mineralocorticoid", "spironolactone"],
      summary: "최대 내약 RAS 차단에도 albuminuria가 남는 T2D 동반 CKD에서 신장 복합 18%·통합분석 23% 감소 — kidney failure 단독은 유의 미달, hyperkalaemia 감시 전제",
      facts: [
        ["FIDELIO-DKD 1차 신장 복합 (5,674명)", "HR 0.82 (0.73–0.93) · 3년 NNT 29", "Bakris 2020, NEJM", "2020", false],
        ["FIDELIO-DKD kidney failure 단독", "HR 0.87 (0.72–1.05) — 유의 미달", "Bakris 2020, NEJM", "2020", false],
        ["FIDELITY 신장 복합 (13,026명)", "HR 0.77 (0.67–0.88) · ESKD HR 0.80", "Agarwal 2022, Eur Heart J", "2022", false],
        ["FIDELITY 심혈관 복합", "HR 0.86 (0.78–0.95) — 심부전 입원이 주 동인", "Agarwal 2022, Eur Heart J", "2022", false],
        ["hyperkalaemia (FIDELIO-DKD)", "18.3% vs 9.0% · 영구 중단 2.3% vs 0.9%", "Bakris 2020, NEJM", "2020", false],
        ["용량", "eGFR ≥60 → 20 mg/일 · eGFR 25–60 → 10 mg/일", "Bakris 2020, NEJM", "2020", false]
      ],
      body: [
        ["적응 위치", ["최대 내약 RAS 차단 위에 추가", "잔여 albuminuria ACR ≥30 mg/g · eGFR ≥25 · 정상 칼륨이 개시 조건", "FIDELITY 참가자의 39.9%가 eGFR ≥60 → albuminuria만으로 식별되는 대상"]],
        ["효과의 성격", ["UACR 4개월 약 31–32% 추가 감소 vs SBP 차 약 3 mmHg → 혈역학만으로 설명 불가", "이중 RAS 차단 실패와 대조 → aldosterone·MR 축이 RAS 차단 밖의 잔여 경로", "배경 SGLT2i 4.6%·GLP-1 RA 6.9% → 현대 병용 위 추가 이득은 별도 근거 필요"]],
        ["안전성과 한계", ["hyperkalaemia 빈도가 위약의 약 두 배 · 치명 사례 0", "SGLT2i 병용 시 hyperkalaemia 위험 감소", "steroidal MRA(spironolactone) 정상알부민뇨 예방 시험 → microalbuminuria 감소 미입증(HR 0.81, 0.49–1.34)"]]
      ],
      related: ["dkd-four-pillars", "dkd-glp1", "dkd-drug-update"],
      papers: [["Bakris 2020 (FIDELIO-DKD), NEJM", "https://doi.org/10.1056/NEJMoa2025845"], ["Agarwal 2022 (FIDELITY), Eur Heart J", "https://doi.org/10.1093/eurheartj/ehab777"], ["de Boer 2022 (ADA–KDIGO 합의), Diabetes Care", "https://doi.org/10.2337/dci22-0027"], ["Tofte 2020 (PRIORITY), Lancet Diabetes Endocrinol", "https://doi.org/10.1016/S2213-8587(20)30026-7"]]
    },
    {
      id: "dkd-glp1", section: "tx", title: "GLP-1 수용체 작용제는 어디까지 왔는가?",
      aliases: ["GLP-1", "semaglutide", "FLOW", "GLP-1 RA"],
      summary: "신장 종말점을 1차로 둔 FLOW에서 semaglutide가 주요 신장사건 24% 감소 — 신보호 약제군으로 편입, SGLT2i 병용 위의 추가 효과 근거는 아직 얇은 상태",
      facts: [
        ["FLOW 무작위 배정", "3,533명 · semaglutide 주 1회 1.0 mg · 중앙값 3.4년", "Perkovic 2024, NEJM", "2024", false],
        ["1차 복합 종말점", "HR 0.76 (95% CI 0.66–0.88; P=0.0003) · 3년 NNT 20", "Perkovic 2024, NEJM", "2024", false],
        ["eGFR slope 차이", "연 1.16 mL/min/1.73m² 완만", "Perkovic 2024, NEJM", "2024", false],
        ["심혈관 사망 · MACE · 전체 사망", "HR 0.71 · 0.82 · 0.80", "Perkovic 2024, NEJM", "2024", false],
        ["baseline SGLT2i 사용자 subgroup", "15.6% · HR 1.07 (0.69–1.67) — 검정력 부족", "Perkovic 2024, NEJM", "2024", false]
      ],
      body: [
        ["대상 정의", ["eGFR 50–75 + ACR 300–5,000 mg/g, 또는", "eGFR 25–50 + ACR 100–5,000 mg/g", "RAS 억제제 최대 내약 용량 배경"]],
        ["1차 종말점 구성", ["kidney failure(28일 초과 eGFR <15 또는 장기 KRT·이식)", "기저 eGFR 50% 이상 지속 감소", "신장 또는 심혈관 원인 사망"]],
        ["해석의 범위", ["cystatin C 기반 eGFR에서도 이득 유지 → 체중감소에 따른 creatinine 인공물 배제", "개별 구성요소(eGFR <15 · 신대체요법) 단독은 검정력 부족", "LEADER·REWIND·SUSTAIN-6의 신장 이득은 2차 결과 · 기전 연구 REMODEL 진행", "혈당·체중 관리 약제 → 신보호 약제군으로 위치 이동"]]
      ],
      related: ["dkd-four-pillars", "dkd-drug-update", "dkd-finerenone"],
      papers: [["Perkovic 2024 (FLOW), NEJM", "https://doi.org/10.1056/NEJMoa2403347"], ["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"], ["Tuttle 2022, Kidney Int", "https://doi.org/10.1016/j.kint.2022.05.012"]]
    },
    {
      id: "dkd-glycemic-target", section: "tx", title: "혈당·혈압 목표는 어떻게 잡는가?",
      aliases: ["HbA1c", "glycemic target", "혈당 목표", "혈압 목표", "metformin", "metabolic memory", "DCCT/EDIC"],
      summary: "T1D 집중 혈당조절은 10년 이상 지나서야 GFR 보호(50%)로 드러나고 T2D의 hard endpoint 근거는 약함 — HbA1c는 KDIGO <6.5–8.0% 개별화, 혈압 목표는 기관마다 상이",
      facts: [
        ["DCCT/EDIC impaired GFR", "24 vs 46건 · 50% 감소 (18–69) · 20년 누적 2.0% vs 5.5%", "DCCT/EDIC 2011, NEJM", "2011", false],
        ["HbA1c 목표", "KDIGO <6.5% ~ <8.0% 개별화 · ADA 기본 <7%", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["혈압 목표", "KDIGO SBP <120 (2B) · ADA <130/80 (10년 ASCVD 위험 ≥15%)", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["BPROAD 집중 SBP(≤120)", "주요 심혈관사건 21% 감소 · CKD 진행 무차이", "ADA 2026", "2026", false],
        ["metformin", "eGFR ≥30 · 30–44에서 1,000 mg/일 · <30 금기", "de Boer 2022 · ADA 2026", "2026", false],
        ["statin", "당뇨+CKD 1차예방 moderate · ASCVD 동반 high intensity", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false]
      ],
      body: [
        ["혈당 목표의 개별화", ["미세혈관 합병증 위험 대 저혈당·부담의 균형", "CKD에서 HbA1c–예후 U자형 가능 · 진행 CKD·투석에서 HbA1c 정확도 저하 → CGM 병용", "T2D — ADVANCE-ON에서 ESRD 감소 미입증 · GRADE에서 약제 간 신장 보호 차이 없음"]],
        ["metabolic memory", ["DCCT 종료 후 HbA1c 수렴(7.9% vs 8.0%)에도 이득 지속 · 사건 70건 중 66건이 EDIC 기간", "초기 eGFR 하강(과여과 완화) → 이후 기울기 역전의 2상 궤적", "time-weighted HbA1c 보정 시 효과 소실 → 누적 혈당 노출의 효과"]],
        ["동반 관리", ["혈압·지질·체중·금연이 신·심혈관 결과에 동시 작용", "단백질 0.8 g/kg/일 · 나트륨 <2,000 mg/일(KDIGO) · 신체활동 ≥150분/주"]]
      ],
      related: ["dkd-four-pillars", "dkd-t1d-t2d", "dkd-guideline-change"],
      papers: [["DCCT/EDIC 2011, NEJM", "https://doi.org/10.1056/NEJMoa1111732"], ["de Boer 2022 (ADA–KDIGO 합의), Diabetes Care", "https://doi.org/10.2337/dci22-0027"], ["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"], ["Thomas 2015, Nat Rev Dis Primers", "https://doi.org/10.1038/nrdp.2015.18"]],
      links: [["KDIGO 2022 Executive Summary (PDF)", "https://kdigo.org/wp-content/uploads/2022/10/Executive-Summary-KDIGO-2022-Clinical-Practice-Guideline-for-Diabetes-Management-in-CKD.pdf"]]
    },
    {
      id: "dkd-genetics", section: "omics", title: "DKD에 당뇨 특이 유전효과가 있는가?",
      aliases: ["GWAS", "genetics", "유전", "diabetes-specific loci", "COL4A3"],
      summary: "당뇨군 eGFR GWAS에서 일반 인구와 무관하거나 방향이 반대인 loci 검출 — T1D에서는 COL4A3 보호 변이가 재현되나 T2D DKD GWAS는 재현의 벽",
      facts: [
        ["당뇨군 eGFR GWAS 규모", "52,531명 (T1D 17,267 · T2D 35,264)", "Cole 2025, JASN", "2025", false],
        ["당뇨 특이 loci", "5개 — HIPK3 · TRIM5 · RORA · ERBB4 · BCL6/LPP", "Cole 2025, JASN", "2025", false],
        ["T1D DKD GWAS (최대 19,406명 · 10개 정의)", "study-wide 4 loci — COL4A3 · TAMM41 · BMP7 · HAND2-AS1", "Salem 2019, J Am Soc Nephrol", "2019", false],
        ["T2D DKD GWAS (최대 40,340명)", "all DKD genome-wide 유의 0개 · 기존 55 locus 중 재현 2개(UMOD·PRKAG2)", "van Zuydam 2018, Diabetes", "2018", false],
        ["한국 4개 코호트 (30,069명)", "rs3128852(확장 MHC) 등 3개 · 독립 재현 없음", "Jin 2023, BMC Med", "2023", false],
        ["DKD GWAS 메타 (표현형 10종)", "당뇨 약 27,000명 · 유전자 수준 신호 10개", "Sandholm 2022, Diabetologia", "2022", false]
      ],
      body: [
        ["당뇨 특이성의 근거", ["당뇨군 전용 eGFR GWAS → 일반 인구 eGFR과 무관·역방향 loci 5개", "HIPK3·BCL6·LPP·RORA → 신장 구획·세포에서 DKD·당뇨군 차등발현"]],
        ["T1D와 T2D의 비대칭", ["T1D — COL4A3 Asp326Tyr 보호 · 합병증 이전부터 GBM 얇음 · podocyte 특이 발현", "T2D — 표현형 8개로 쪼개도 신호 미약 · GABRR1 신호는 Asian에서 재현 실패", "혈당 의존성 — HbA1c 높은 군에서만 신호 · 교호작용 자체는 비유의"]],
        ["표현형 정의의 영향", ["DKD case/control 이분 정의 → 이질적 집단 혼합 → 검정력 손실", "eGFR 정량 형질 + 이환기간·아형·BMI·HbA1c 보정 → 신호 회복", "→ 설계 단계에서 정량 형질·eGFR slope 우선 고려"]],
        ["집단 범위의 한계", ["주요 연구 대부분 유럽계 코호트 → 전이성 미확인", "한국 유일 DKD GWAS → 최상위 신호가 확장 MHC 영역 · 독립 재현 없음"]]
      ],
      related: ["dkd-variant-to-cell", "dkd-genetic-risk", "dkd-biopsy-discordance"],
      papers: [["Cole 2025, JASN", "https://doi.org/10.1681/ASN.0000000718"], ["Salem 2019, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2019030218"], ["van Zuydam 2018, Diabetes", "https://doi.org/10.2337/db17-0914"], ["Jin 2023, BMC Med", "https://doi.org/10.1186/s12916-022-02723-4"], ["Sandholm 2022, Diabetologia", "https://doi.org/10.1007/s00125-022-05735-0"]]
    },
    {
      id: "dkd-variant-to-cell", section: "omics", title: "GWAS 변이를 어느 세포로 내려보내는가?",
      aliases: ["variant to gene", "eQTL", "mQTL", "multiome", "scorecard", "variant-to-cell-type", "LDSC"],
      summary: "신장 구획별 eQTL·단일세포 multiome·혈액 메틸화를 합쳐 변이~유전자 쌍을 점수화하는 단계 — eGFR 유전율은 근위세뇨관 상태에 농축, microalbuminuria는 어떤 세포형에도 농축 없음",
      facts: [
        ["multiancestry eGFR GWAS 규모", "2,287,877명 · 독립 loci 1,026개 (신규 97)", "Liu 2025, Science", "2025", false],
        ["통합 정보 종류", "32종 (variant 8 · target 12 · gene 12)", "Liu 2025, Science", "2025", false],
        ["구획별 eQTL 표본 · eGene 수", "사구체 240 · 세뇨관간질 311 / eGene 5,371 · 9,787", "Han 2023, Nat Commun", "2023", false],
        ["eGFR 유전율 농축 세포형 (snATAC LDSC)", "PCT · PST · PT_VCAM1 — microalbuminuria는 농축 없음", "Wilson 2022, Nat Commun", "2022", false],
        ["유전×메틸화×발현 통합 고신뢰 유전자", "40개 (moloc + SMR)", "Sheng 2020, PNAS", "2020", false]
      ],
      body: [
        ["문제의 구조", ["신장 형질 GWAS 변이의 90% 이상이 비코딩 영역", "→ 표적 유전자·조절 기능의 지목이 병목"]],
        ["해법의 층", ["구획별 eQTL → 사구체·세뇨관간질 구분", "단일핵 개방 크로마틴·TSS 거리 → fine-mapping prior → credible set 축소", "allele-specific accessibility·expression → 세포형 수준 추론", "혈액 mQTL·메틸화 → GWAS→유전자 번역의 중간층 (LACTB · IRF5 등)", "점수 통합 → 변이~유전자 쌍의 우선순위"]],
        ["검증과 한계", ["일부 변이·유전자를 in vitro 및 Drosophila nephrocyte 모델로 확인", "DKD 전용 신장 eQTL·TWAS → 다중검정 후 유의 결과 미확보", "혈액 QTL 기반 신호 → 신장 조직 기능 검증 필요"]]
      ],
      related: ["dkd-genetics", "dkd-proteogenomics", "dkd-new-method"],
      papers: [["Liu 2025, Science", "https://doi.org/10.1126/science.adp4753"], ["Han 2023, Nat Commun", "https://doi.org/10.1038/s41467-023-37691-7"], ["Wilson 2022, Nat Commun", "https://doi.org/10.1038/s41467-022-32972-z"], ["Sheng 2020, PNAS", "https://doi.org/10.1073/pnas.2005905117"]],
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
      aliases: ["atlas", "single cell", "spatial", "KPMP", "아틀라스", "snMultiome"],
      summary: "세포형 목록을 넘어 손상 상태와 조직 이웃(niche)이 임상 정보를 담는 단위 — 당뇨 근위세뇨관의 손상 상태 증가와 약제별로 다른 표적 세포형까지 지도화",
      facts: [
        ["KPMP 아틀라스 규모", "건강 45명 · 질환 48명 · >400,000 nuclei/cell · 51 cell type · 28 state", "Lake 2023, Nature", "2023", false],
        ["공간 microenvironment", "glomerular · immune · tubule · fibrotic", "Abedini 2024, Nat Genet", "2024", false],
        ["인간 DKD 손상 PT 상태", "PT_VCAM1 증가 (snATAC 0.12 vs 0.03)", "Wilson 2022, Nat Commun", "2022", false],
        ["마우스 DKD 치료 반응 아틀라스", "70마리 · 946,660 nuclei · 6개 치료군", "Wu 2022, Cell Metab", "2022", false],
        ["근위세뇨관 상태 전환 조절 TF", "ELF3 · KLF6 · KLF10", "Kidney chromatin atlas, Nat Commun", "2024", false],
        ["염증성 PT의 후성유전 각인", "HNF4α 소실 + NF-κB·AP-1 활성", "Reck 2025, Nat Commun", "2025", false]
      ],
      body: [
        ["상태라는 단위", ["cycling · adaptive(successful/maladaptive repair) · transitioning · degenerative", "maladaptive 상태 signature → 신기능 저하 예측", "당뇨 PT → SGLT2·당신생 동시 상향 · GR(NR3C1) motif 접근성 감소"]],
        ["niche라는 단위", ["비지도 deconvolution으로 네 microenvironment 도출", "fibrotic microenvironment 비율 → 전통 조직병리 대비 예후 개선"]],
        ["치료 반응의 지도", ["약제마다 표적 세포형·교정 유전자가 거의 비중첩", "손상 PT(Havcr1·Vcam1·C3+) 정상화 → 병용에서만 뚜렷", "SGLT2 발현 분절(S1)로 직접 효과와 전신 효과 분리"]],
        ["표적 가능성", ["VCAM1⁺ICAM1⁺ 염증성 PT가 fibrotic niche에 국재", "백혈구 동원·myofibroblast 활성의 paracrine 원천", "AP-1 억제제·senolytic → 마우스 모델에서 염증·fibrosis 개선"]]
      ],
      related: ["dkd-tissue-course", "dkd-subtypes", "dkd-new-method"],
      papers: [["Lake 2023, Nature", "https://doi.org/10.1038/s41586-023-05769-3"], ["Abedini 2024, Nat Genet", "https://doi.org/10.1038/s41588-024-01802-x"], ["Wilson 2022, Nat Commun", "https://doi.org/10.1038/s41467-022-32972-z"], ["Wu 2022, Cell Metab", "https://doi.org/10.1016/j.cmet.2022.05.010"], ["Reck 2025, Nat Commun", "https://doi.org/10.1038/s41467-025-59997-4"], ["Kidney chromatin atlas 2024, Nat Commun", "https://doi.org/10.1038/s41467-023-44467-6"]]
    },
    {
      id: "dkd-guideline-change", section: "now", title: "진료 권고는 최근 어떻게 바뀌었는가?",
      aliases: ["guideline", "KDIGO 2022", "ADA 2026", "Standards of Care", "권고 변경"],
      summary: "ADA·KDIGO가 RAS 차단·SGLT2i 기반 위에 비스테로이드 MRA·GLP-1 RA를 더하는 모델로 수렴 — ADA 2026은 finerenone + SGLT2i 동시 시작까지 고려 대상으로 상향",
      facts: [
        ["SGLT2i", "eGFR ≥20 — 1A · 하강 후에도 KRT 개시 전까지 지속", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["GLP-1 RA", "장시간 작용 제제 — 1B", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["비스테로이드 MRA", "eGFR ≥25 · 정상 칼륨 · ACR ≥30 — 2A", "de Boer 2022 (ADA–KDIGO 합의)", "2022", false],
        ["SGLT2i 개시 하한 변화", "eGFR ≥30 (KDIGO 2020) → ≥20 (2022)", "de Boer 2022 · ADA 2026", "2026", false],
        ["finerenone + SGLT2i 동시 시작", "T2D · UACR ≥100 · eGFR 30–90 — 고려 (B)", "ADA 2026", "2026", false]
      ],
      body: [
        ["변화의 방향", ["혈당 중심 → 장기 보호 중심의 약제 선택", "eGFR 하한 완화 → 진행된 CKD에서도 개시", "순차 적층 → 동시 병용 시작으로 이동", "non-albuminuric 표현형 증가를 진료지침이 명시"]],
        ["남은 실무 과제", ["잔여 albuminuria에도 약제가 추가되지 않는 치료 관성", "hyperkalaemia 우려로 인한 MRA 과소 처방", "한국 eGFR 저하 DKD의 SGLT2i 처방률 5.94% (2019)"]]
      ],
      related: ["dkd-four-pillars", "dkd-drug-update", "dkd-glycemic-target"],
      papers: [["de Boer 2022 (ADA–KDIGO 합의), Diabetes Care", "https://doi.org/10.2337/dci22-0027"], ["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"], ["Kim 2024 (2023 DKD Fact Sheet in Korea), Diabetes Metab J", "https://doi.org/10.4093/dmj.2023.0310"]],
      links: [["KDIGO 2022 Guideline (PDF)", "https://kdigo.org/wp-content/uploads/2022/10/KDIGO-2022-Clinical-Practice-Guideline-for-Diabetes-Management-in-CKD.pdf"]]
    },
    {
      id: "dkd-drug-update", section: "now", title: "새 치료 근거는 무엇이 추가됐는가?",
      aliases: ["drug update", "FLOW", "CONFIDENCE", "신약", "semaglutide", "combination", "baricitinib"],
      summary: "SGLT2i·비스테로이드 MRA·GLP-1 RA가 각각 신장 종말점 근거를 갖춘 뒤 2025년 CONFIDENCE가 MRA + SGLT2i 동시 시작의 가산 효과(UACR 52% 감소)를 제시 — 직접 항염 표적은 아직 2상 단계",
      facts: [
        ["CONFIDENCE 180일 UACR 비 (818명)", "병용 0.48 · finerenone 0.68 · empagliflozin 0.71", "Agarwal 2025, NEJM", "2025", false],
        ["CONFIDENCE 약 중단 30일 후", "UACR 반등 (비 1.44–1.63)", "Agarwal 2025, NEJM", "2025", false],
        ["FLOW 1차 복합 종말점", "HR 0.76 (95% CI 0.66–0.88)", "Perkovic 2024, NEJM", "2024", false],
        ["DAPA-CKD 1차 복합 종말점", "HR 0.61 (95% CI 0.51–0.72)", "Heerspink 2020, NEJM", "2020", false],
        ["FIDELIO-DKD 1차 신장 종말점", "HR 0.82 (95% CI 0.73–0.93)", "Bakris 2020, NEJM", "2020", false],
        ["baricitinib 2상 24주 UACR (4 mg)", "41% 감소 · 빈혈 32.0% vs 3.7%", "Tuttle 2018, Nephrol Dial Transplant", "2018", false]
      ],
      body: [
        ["세 축의 정렬", ["SGLT2i — 신장 복합 종말점 30–39% 감소", "비스테로이드 MRA — 신장 복합 종말점 18% 감소", "GLP-1 RA — 신장 복합 종말점 24% 감소"]],
        ["병용의 근거 상태", ["CONFIDENCE → UACR 대리 종말점 · 단독 효과의 거의 완전한 가산", "hard endpoint 병용 시험은 부재 · FLOW의 SGLT2i 사용자 15.6%", "병용군 30일 eGFR 30% 초과 감소 6.3% → 이후 안정·가역적"]],
        ["항염 표적치료의 현재", ["JAK1/2(baricitinib) → UACR·염증 표지 감소, on-target 빈혈로 좁은 치료창", "ASK1 · ET-A 길항 → eGFR 1차 종말점 실패 또는 체액저류·심부전 증가", "실제 신보호 성과는 대사·혈역학 약제 쪽에 집중"]]
      ],
      related: ["dkd-glp1", "dkd-sglt2i", "dkd-finerenone"],
      papers: [["Agarwal 2025 (CONFIDENCE), NEJM", "https://doi.org/10.1056/NEJMoa2410659"], ["Perkovic 2024 (FLOW), NEJM", "https://doi.org/10.1056/NEJMoa2403347"], ["Heerspink 2020 (DAPA-CKD), NEJM", "https://doi.org/10.1056/NEJMoa2024816"], ["Bakris 2020 (FIDELIO-DKD), NEJM", "https://doi.org/10.1056/NEJMoa2025845"], ["Tuttle 2018 (baricitinib 2상), Nephrol Dial Transplant", "https://doi.org/10.1093/ndt/gfx377"], ["Tuttle 2022, Kidney Int", "https://doi.org/10.1016/j.kint.2022.05.012"], ["Tuttle 2026, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-026-01117-6"]]
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
      aliases: ["method", "spatial metabolomics", "공간 대사체", "multiome", "EWAS", "DNA methylation"],
      summary: "공간 대사체·단일세포 multiome·혈액 DNA 메틸화가 더해지며 조직 좌표 위에서 대사·조절·유전을 함께 읽고, 과거 혈당 노출의 흔적까지 재는 단계",
      facts: [
        ["공간 대사체 대표 성과", "DKD 간질 fibrosis 부위의 adenine 국재", "Sharma 2023, J Clin Invest · Sharma 2026, Nat Rev Nephrol", "2026", false],
        ["adenine의 임상 연결", "요중 adenine이 DKD 진행 예측", "Sharma 2023, J Clin Invest", "2023", false],
        ["공간 multi-omics 사례", "podocyte glycerolipid 대사·MAPK 교란 · 요중 MMP3 후보", "Qiu 2026, Fundamental Research", "2026", false],
        ["혈액 메틸화 지속성 (DCCT/EDIC)", "16–17년 간격 두 시점에서 12 loci 유지 · 최강 TXNIP cg19693031", "Chen 2016, PNAS", "2016", false],
        ["DKD EWAS (T1D 1,304명)", "CpG 32개 · 21개가 kidney failure 예측", "Smyth 2022, Nat Commun", "2022", false],
        ["크로마틴 층", "snRNA+snATAC+메틸화+4종 histone mark 통합", "Kidney chromatin atlas, Nat Commun", "2024", false]
      ],
      body: [
        ["측정 층의 확장", ["전사체 → 크로마틴 접근성·메틸화·histone mark", "단일세포 → 공간 좌표(spot 및 단일세포 해상도)", "유전자·단백 → 대사산물", "혈액 DNA 메틸화 → 대사 기억의 후성유전 흔적 · 위험 층화 후보"]],
        ["대사산물의 위치 변화", ["기존 — 하류 산물로서의 biomarker", "최근 — 손상을 매개하는 driver 후보(adenine 사례)"]],
        ["실무적 함의", ["FFPE 임상 검체에서도 공간 multi-omics 수행 사례 존재", "→ 후향적 biopsy 코호트 활용 가능성", "메틸화 신호의 보정 민감도 → 흡연·HbA1c 등 보정 강도 명시 필요"]]
      ],
      related: ["dkd-atlas", "dkd-variant-to-cell", "dkd-tissue-course"],
      papers: [["Sharma 2026, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-025-01007-3"], ["Qiu 2026, Fundamental Research", "https://doi.org/10.1016/j.fmre.2026.02.005"], ["Chen 2016, PNAS", "https://doi.org/10.1073/pnas.1603712113"], ["Smyth 2022, Nat Commun", "https://doi.org/10.1038/s41467-022-34963-6"], ["Kidney chromatin atlas 2024, Nat Commun", "https://doi.org/10.1038/s41467-023-44467-6"]]
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
    "ndkd": { key: "ndkd", definition: "Nondiabetic kidney disease. 당뇨 환자에게 생긴, 당뇨와 무관한 신장질환. 생검으로만 확실히 구분." },
    "hyperfiltration": { key: "hyperfiltration", definition: "사구체 과여과. 당뇨 초기 근위세뇨관 재흡수 증가 → tubuloglomerular feedback 비활성으로 GFR이 비정상적으로 높아진 상태." },
    "metabolic memory": { key: "metabolic-memory", definition: "과거 고혈당의 영향이 혈당 정상화 뒤에도 남는 현상. DNA 메틸화 등 후성유전 흔적이 후보 기전." },
    "microenvironment": { key: "microenvironment", definition: "조직에서 공간적으로 함께 놓인 세포들의 이웃 단위. 신장에서는 glomerular·immune·tubule·fibrotic으로 분해." }
  };
  const glossaryPattern = /(^|[^A-Za-z0-9가-힣])(DKD|albuminuria|ACR|eGFR|podocyte|FAO|NLRP3|cGAS-STING|complosome|SGLT2 inhibitor|finerenone|GLP-1 RA|KRT|APOL1|eQTL|microenvironment|NDKD|hyperfiltration|metabolic memory)(?=$|[^A-Za-z0-9])/gi;

  return { meta: meta, acts: acts, sections: sections, articles: articleList, glossaryTerms: glossaryTerms, glossaryPattern: glossaryPattern };
})();
