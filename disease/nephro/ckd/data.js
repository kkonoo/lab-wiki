window.DISEASE = (function () {
  const meta = {
    id: "ckd",
    title: "Chronic Kidney Disease (CKD)",
    domain: "Nephro"
  };

  const acts = [
    { id: "A", num: "01", en: "DEFINITION · EPIDEMIOLOGY", title: "무엇인가", accent: "#6f3a55",
      blurb: "정의·CGA 분류 · 세계와 한국의 유병률 · 발생 · 사망·장애 부담",
      sections: ["def", "epi"] },
    { id: "B", num: "02", en: "CAUSE · COURSE", title: "왜·어떻게", accent: "#315d78",
      blurb: "평생 nephron 용량 · 대사·유전 위험 · overload · hyperfiltration · 합병증",
      sections: ["risk", "course"] },
    { id: "C", num: "03", en: "CLINICAL", title: "임상", accent: "#94553b",
      blurb: "eGFR·albuminuria 진단 · 원인 평가 · 병용 치료 · 합병증·KRT",
      sections: ["dx", "tx"] },
    { id: "D", num: "04", en: "RESEARCH", title: "연구", accent: "#1f5d43",
      blurb: "단일유전자·다유전자 구조 · APOL1·PKD·COL4 · 권고·약제·코호트·분석의 변화",
      sections: ["omics", "now"] }
  ];

  const sections = {
    def: { number: "01", title: "정의 · 분류", act: "A", questions: [
      { q: "CKD는 어떻게 정의하는가?", note: "신장 구조·기능 이상 → 3개월 초과 → 건강 영향", article: "ckd-definition" },
      { q: "CGA 분류는 무엇을 함께 보는가?", note: "Cause · GFR G1–G5 · Albuminuria A1–A3", article: "ckd-cga" },
      { q: "AKI·CKD·kidney failure는 어떻게 구분하는가?", note: "급성 시간축 · 3개월 지속 · G5/KRT", article: "ckd-acute-failure" },
      { q: "원인 중심 이름은 왜 다인자 관점으로 바뀌는가?", note: "단일 원인명 → 평생 위험 누적 → CKD with diabetes", article: "ckd-multifactorial" }
    ] },
    epi: { number: "02", title: "역학 · 질병부담", act: "A", questions: [
      { q: "세계와 한국에서 얼마나 흔한가?", note: "GBD 성인 추정 · 국민건강통계 · 청구 진료인원", article: "ckd-prevalence" },
      { q: "발생과 유병 규모는 어떻게 변하는가?", note: "신규 발생 · 절대 환자 증가 · 표준화율 구분", article: "ckd-trend" },
      { q: "어떤 연령·성별·집단에서 부담이 큰가?", note: "고령 · 성별 · 저 SDI · 한국 70세 이상", article: "ckd-demographics" },
      { q: "사망·장애·의료 부담은 얼마나 큰가?", note: "사망 순위 · DALY · ESKD · 진료비", article: "ckd-burden" }
    ] },
    risk: { number: "01", title: "원인 · 위험인자", act: "B", questions: [
      { q: "주요 후천적 위험인자는 무엇인가?", note: "diabetes · obesity · 반복 AKI · 노화", article: "ckd-riskfactors" },
      { q: "출생 시 nephron 수는 평생 위험에 어떤 영향을 주는가?", note: "태아기 형성 → 저체중·조산 → 낮은 capacity", article: "ckd-nephron-endowment" },
      { q: "유전은 CKD 위험에 어떻게 기여하는가?", note: "단일유전자 · 다유전자 · ancestry", article: "ckd-genetic-risk" },
      { q: "hypertension은 원인인가 결과인가?", note: "sodium 배설 용량 부족 ↔ 혈압 상승 → 선별 신호", article: "ckd-hypertension" }
    ] },
    course: { number: "02", title: "발병 · 진행", act: "B", questions: [
      { q: "서로 다른 원인은 왜 비슷한 경로로 진행하는가?", note: "nephron 소실 → workload/capacity 불일치 → 공통 경로", article: "ckd-common-pathway" },
      { q: "hyperfiltration은 어떻게 nephron 소실을 가속하는가?", note: "보상 여과·비대 → podocyte stress → glomerulosclerosis", article: "ckd-hyperfiltration" },
      { q: "fibrosis는 원인인가 결과인가?", note: "overload의 2차 결과 · 진행 증폭 · 직접 표적 한계", article: "ckd-fibrosis" },
      { q: "기능 저하에서 kidney failure까지 어떤 문제가 나타나는가?", note: "대사·내분비 합병증 → uraemia → KRT·보존 치료", article: "ckd-progression" }
    ] },
    dx: { number: "01", title: "진단 · 분류", act: "C", questions: [
      { q: "누구를 어떻게 선별하는가?", note: "위험집단 → serum creatinine/eGFR + urine ACR", article: "ckd-screening" },
      { q: "최신 진단 기준은 무엇인가?", note: "KDIGO 2024 · 3개월 초과 · 구조·기능 표지", article: "ckd-criteria" },
      { q: "eGFR은 무엇을 측정하고 어떻게 분류하는가?", note: "배설능 추정 → G1·G2·G3a·G3b·G4·G5", article: "ckd-egfr" },
      { q: "albuminuria는 무엇을 측정하고 어떻게 분류하는가?", note: "여과장벽 손상 → ACR → A1·A2·A3", article: "ckd-albuminuria" },
      { q: "원인 평가와 유전검사는 언제 필요한가?", note: "CGA의 C → 임상·영상·조직·유전 통합", article: "ckd-cause-testing" }
    ] },
    tx: { number: "02", title: "치료 · 미충족 수요", act: "C", questions: [
      { q: "현재 표준 치료 전략은 무엇인가?", note: "원인 치료 + overload 감소 + 병용 + 위험 추적", article: "ckd-standard-tx" },
      { q: "RAASi와 SGLT2 inhibitor는 어떤 효과가 있는가?", note: "albuminuria·glomerular load 감소 → kidney·CV 보호", article: "ckd-kidney-protection" },
      { q: "diabetes 동반 CKD에서 어떤 약제를 더하는가?", note: "finerenone · semaglutide → cardiorenal 병용", article: "ckd-diabetes-combination" },
      { q: "합병증은 어떻게 관리하는가?", note: "anaemia · hyperkalaemia · acidosis · CKD-MBD · pruritus", article: "ckd-complications" },
      { q: "kidney failure에서 어떤 치료 경로를 선택하는가?", note: "haemodialysis · peritoneal dialysis · transplantation · 보존 치료", article: "ckd-krt" }
    ] },
    omics: { number: "01", title: "유전학 · 오믹스", act: "D", questions: [
      { q: "CKD의 유전 구조는 어떻게 구성되는가?", note: "nephropathic variant 수백 개 · 단일유전자 + 다유전자", article: "ckd-genetic-architecture" },
      { q: "APOL1은 위험과 진화의 trade-off를 어떻게 보여주는가?", note: "trypanosomiasis 저항 ↔ epithelial 소실 가속", article: "ckd-apol-risk" },
      { q: "PKD1/2와 COL4A3/4/5는 어떤 질환축을 가리키는가?", note: "cyst 형성 · basement membrane collagenopathy", article: "ckd-cystic-collagen" },
      { q: "유전검사는 임상 알고리즘에 어떻게 들어가는가?", note: "원인 미상·가족력 → 변이 해석 → 진단·상담", article: "ckd-genetic-testing" }
    ] },
    now: { number: "02", title: "최신 동향", act: "D", questions: [
      { q: "진료 권고는 최근 어떻게 바뀌었는가?", note: "KDIGO 2012→2024 · CGA 유지 · SGLT2i 확대", article: "ckd-guideline-change" },
      { q: "새 치료제와 안전성 정보는 무엇인가?", note: "SGLT2i · finerenone · semaglutide 효과·위험", article: "ckd-drug-update" },
      { q: "새 코호트·역학 데이터는 무엇이 생겼는가?", note: "GBD 2023 · KNOW-CKD 15년 · KORDS", article: "ckd-new-data" },
      { q: "새로 쓸 수 있게 된 분석·평가 기법은 무엇인가?", note: "race-free eGFR · cystatin C · eGFR slope · proteinuria surrogate", article: "ckd-new-method" }
    ] }
  };

  const articleList = [
    {
      id: "ckd-definition", section: "def", title: "CKD는 어떻게 정의하는가?",
      aliases: ["chronic kidney disease", "만성콩팥병", "만성신장질환", "definition"],
      summary: "신장 구조·기능 이상이 3개월을 초과해 지속되고 건강에 영향을 주는 상태 — 단일 creatinine 이상만으로 확정 금물",
      facts: [
        ["지속 기간", ">3개월", "KDIGO 2024", "2024", false],
        ["기능 기준", "GFR <60 mL/min/1.73m²", "KDIGO 2024", "2024", false],
        ["손상 기준", "ACR ≥30 mg/g 또는 다른 구조·기능 표지", "KDIGO 2024", "2024", false]
      ],
      body: [
        ["정의의 세 요소", ["신장 구조 또는 기능의 이상", "3개월 초과의 만성 시간축", "현재 또는 미래 건강 위험과의 연결"]],
        ["진단의 함정", ["한 번의 eGFR 저하·albuminuria → 반복 확인 전 만성성 미확정", "G1·G2라도 albuminuria·영상·조직 이상 동반 시 CKD 가능", "GFR과 albuminuria의 독립적 위험 정보 → 한 축만으로 축약 금물"]]
      ],
      related: ["ckd-cga", "ckd-acute-failure", "ckd-criteria"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"], ["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]],
      links: [["KDIGO 2024 CKD Guideline", "https://kdigo.org/guidelines/ckd-evaluation-and-management/"]]
    },
    {
      id: "ckd-cga", section: "def", title: "CGA 분류는 무엇을 함께 보는가?",
      aliases: ["CGA", "cause GFR albuminuria", "G stage", "A stage"],
      summary: "Cause·GFR G1–G5·albuminuria A1–A3의 세 좌표 → 진단명·위험·추적·치료 결정을 한 프레임에 통합",
      facts: [
        ["GFR 범주", "G1·G2·G3a·G3b·G4·G5", "KDIGO 2024", "2024", false],
        ["albuminuria 범주", "A1·A2·A3", "KDIGO 2024", "2024", false],
        ["분류 축", "Cause + GFR + Albuminuria", "KDIGO 2024", "2024", false]
      ],
      body: [
        ["세 좌표", ["C — diabetes 동반·유전질환·사구체질환 등 원인 맥락", "G — 배설능 저하 정도", "A — 여과장벽 손상 정도"]],
        ["위험 해석", ["같은 eGFR에서도 ACR 상승 시 kidney·CV 위험 증가", "같은 ACR에서도 eGFR 저하 시 위험 증가", "G×A 조합 → 추적 빈도·전문의 의뢰·치료 강도의 기준"]]
      ],
      related: ["ckd-definition", "ckd-egfr", "ckd-albuminuria"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]]
    },
    {
      id: "ckd-acute-failure", section: "def", title: "AKI·CKD·kidney failure는 어떻게 구분하는가?",
      aliases: ["AKI", "acute kidney injury", "kidney failure", "KRT"],
      summary: "AKI는 급성 변화·CKD는 3개월 초과 지속·kidney failure는 G5 또는 KRT 맥락 — 시간축과 중증도 축의 분리",
      facts: [
        ["CKD 시간축", ">3개월", "KDIGO 2024", "2024", false],
        ["G5", "GFR <15 mL/min/1.73m²", "KDIGO 2024", "2024", false],
        ["AKI 뒤 CKD 판정", "퇴원 3개월 뒤 만성성 평가", "KDIGO 2024 Top 10 Takeaways", "2024", false]
      ],
      body: [
        ["서로 다른 축", ["AKI — 시간 단위의 급성 기능 변화", "CKD — 구조·기능 이상이 3개월 초과", "kidney failure — 기능 중증도·KRT 필요성의 표현"]],
        ["연속성", ["반복 AKI → nephron capacity 감소 → CKD 위험", "CKD 위의 AKI → 남은 capacity의 추가 손실", "회복 직후 수치 → 3개월 시점 재평가 전 CKD 확정 유보"]]
      ],
      related: ["ckd-definition", "ckd-nephron-endowment", "ckd-krt"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]]
    },
    {
      id: "ckd-multifactorial", section: "def", title: "원인 중심 이름은 왜 다인자 관점으로 바뀌는가?",
      aliases: ["multifactorial CKD", "CKD with diabetes", "diabetic nephropathy"],
      summary: "단일 원인보다 평생의 연속·동시 손상이 capacity를 소모하는 경우 다수 → ‘diabetic nephropathy’보다 ‘CKD with diabetes’의 다인자 표현",
      facts: [
        ["세계 인구 추정", "약 10%", "Romagnani et al., Nat Rev Nephrol", "2026", false],
        ["명명 방향", "CKD with diabetes", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["단일 원인 모델의 한계", ["diabetes·obesity·노화·AKI·유전 위험의 중첩", "한 시점의 지배 원인만으로 평생 손상 이력 미포착", "원인 특이 치료와 공통 overload 감소 치료의 병행 필요"]],
        ["명명의 변화", ["‘diabetic nephropathy’ → diabetes 하나를 단일 driver로 전제", "‘CKD with diabetes’ → 동반 위험과 다인자 경로를 포함", "CGA의 Cause → 단일 라벨이 아닌 임상 맥락의 정리"]]
      ],
      related: ["ckd-riskfactors", "ckd-common-pathway", "ckd-standard-tx"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"], ["Romagnani 2026, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-025-01038-w"]]
    },
    {
      id: "ckd-prevalence", section: "epi", title: "세계와 한국에서 얼마나 흔한가?",
      aliases: ["prevalence", "유병률", "GBD 2023", "KNHANES", "HIRA"],
      summary: "GBD 2023 성인 CKD 7.88억명·14.2%와 한국 2024 표준화 유병률 6.3% — 연령 범위·표준화·자료원 차이로 직접 혼용 금지",
      facts: [
        ["전 세계 성인 환자", "7.88억명 (95% UI 7.43–8.43억)", "GBD 2023 CKD Collaborators, Lancet", "2023", false],
        ["전 세계 성인 연령표준화 유병률", "14.2% (95% UI 13.4–15.2)", "GBD 2023 CKD Collaborators, Lancet", "2023", false],
        ["GBD 2021 전 연령 환자", "6.737억명 (95% UI 6.291–7.224억)", "Li et al., BMC Nephrol", "2021", false],
        ["한국 성인 표준화 유병률", "6.3%", "대한신장학회 2026 Fact Sheet·2024 국민건강통계", "2024", false],
        ["한국 진료 인원", "296,397명", "HIRA 질병소분류 N18 청구자료", "2022", false]
      ],
      body: [
        ["세계와 한국", ["GBD 2023 — 20세 이상 성인·모델 추정 7.88억명", "한국 2024 국민건강통계 — 19세 이상·CKD-EPI+ACR·연령표준화 6.3%", "HIRA 2022 — N18 코드로 의료이용이 발생한 진료 인원 296,397명"]],
        ["수치의 혼용 금지", ["GBD 2023 성인 14.2% vs GBD 2021 전 연령 규모 → 연령 범위·모델 버전 상이", "국민건강통계 유병률 vs HIRA 진료 인원 → 모집단 선별 vs 청구 발생의 차이", "청구자료 → 미진단·미수진 제외·코드 정확도 의존 · 유병률로 환산 금지"]]
      ],
      related: ["ckd-trend", "ckd-demographics", "ckd-burden"],
      papers: [["GBD 2023 CKD Collaborators 2025, Lancet 406(10518):2461–2482", "https://doi.org/10.1016/S0140-6736(25)01853-7"], ["Li et al. 2025, BMC Nephrol 26:385", "https://doi.org/10.1186/s12882-025-04309-7"]],
      links: [["대한신장학회 2026 CKD Fact Sheet", "https://ksn.or.kr/bbs/skin/publication/download.php?code=Factsheet&number=2358"], ["HIRA 보건의료빅데이터", "https://opendata.hira.or.kr/"]]
    },
    {
      id: "ckd-trend", section: "epi", title: "발생과 유병 규모는 어떻게 변하는가?",
      aliases: ["incidence", "trend", "발생률", "추세"],
      summary: "GBD 2021 신규 약 1,994만명·ASIR 233.6/10만, GBD 2023 성인 유병 1990→2023 두 배 이상 — 절대 규모와 표준화율의 분리",
      facts: [
        ["전 세계 신규 환자", "19,935,038명 (95% UI 18,702,793–21,170,794)", "Li et al., BMC Nephrol", "2021", false],
        ["연령표준화 발생률", "10만명당 233.6 (95% UI 220.0–247.2)", "Li et al., BMC Nephrol", "2021", false],
        ["성인 유병 인구", "3.78억명(1990) → 7.88억명(2023)", "GBD 2023 CKD Collaborators", "1990–2023", false],
        ["성인 연령표준화 유병률 변화", "+3.5% (95% UI 2.7–4.1)", "GBD 2023 CKD Collaborators", "1990–2023", false]
      ],
      body: [
        ["절대 수와 표준화율", ["절대 환자 수 → 인구 증가·고령화·생존의 영향", "연령표준화율 → 연령 구조를 고정한 비교", "‘증가’ 표현 → 지표·연령·연도 없는 사용 금지"]],
        ["자료원 주의", ["GBD 2021 전 연령 incidence와 GBD 2023 성인 prevalence의 교차 계산 금지", "모델 업데이트 → 같은 연도의 과거 추정치도 변경 가능", "한국 연도별 표준화 유병률 → 표본 변동과 산식 변경의 영향"]]
      ],
      related: ["ckd-prevalence", "ckd-demographics", "ckd-new-data"],
      papers: [["Li et al. 2025, BMC Nephrol 26:385", "https://doi.org/10.1186/s12882-025-04309-7"], ["GBD 2023 CKD Collaborators 2025, Lancet", "https://doi.org/10.1016/S0140-6736(25)01853-7"]]
    },
    {
      id: "ckd-demographics", section: "epi", title: "어떤 연령·성별·집단에서 부담이 큰가?",
      aliases: ["age", "sex", "demographics", "고령", "성별"],
      summary: "한국 2024 표준화 유병률 남 7.0%·여 5.7%, 70세 이상 25.9% — 고령과 낮은 kidney capacity가 부담 집중의 중심",
      facts: [
        ["한국 남성", "7.0%", "대한신장학회 2026 Fact Sheet·2024 국민건강통계", "2024", false],
        ["한국 여성", "5.7%", "대한신장학회 2026 Fact Sheet·2024 국민건강통계", "2024", false],
        ["한국 70세 이상", "25.9%", "대한신장학회 2026 Fact Sheet·2024 국민건강통계", "2024", false],
        ["최고 지역 유병률", "북아프리카·중동 18.0%", "GBD 2023 CKD Collaborators", "2023", false]
      ],
      body: [
        ["연령과 성별", ["노화 → nephron 소실 누적·capacity 감소", "한국 70세 이상 약 4명 중 1명", "한국 표준화 유병률 남성이 여성보다 1.3%p 높음"]],
        ["지역·사회 조건", ["낮은 SDI 지역 → 사망·DALY 부담 집중", "diabetes·obesity·의료 접근·KRT 접근의 지역 차이", "지역 유병률 비교 → 연령표준화와 사례 정의 확인 필수"]]
      ],
      related: ["ckd-prevalence", "ckd-nephron-endowment", "ckd-burden"],
      papers: [["GBD 2023 CKD Collaborators 2025, Lancet", "https://doi.org/10.1016/S0140-6736(25)01853-7"]],
      links: [["대한신장학회 2026 CKD Fact Sheet", "https://ksn.or.kr/bbs/skin/publication/download.php?code=Factsheet&number=2358"]]
    },
    {
      id: "ckd-burden", section: "epi", title: "사망·장애·의료 부담은 얼마나 큰가?",
      aliases: ["mortality", "DALY", "ESKD", "질병부담", "KORDS"],
      summary: "CKD는 2023년 세계 사망 9위·148만명, 한국 ESKD 2022년 134,826명 — 초기 CKD와 KRT 단계의 지표 분리 필요",
      facts: [
        ["전 세계 CKD 사망", "148만명 (95% UI 130–165만)·사망원인 9위", "GBD 2023 CKD Collaborators", "2023", false],
        ["연령표준화 DALY율", "10만명당 769.2 (95% UI 691.8–857.4)·12위", "GBD 2023 CKD Collaborators", "2023", false],
        ["심혈관 사망 기여", "impaired kidney function 관련 11.5%", "GBD 2023 CKD Collaborators", "2023", false],
        ["한국 ESKD 등록 환자", "134,826명", "KORDS·대한신장학회 ESKD Fact Sheet", "2022", false],
        ["한국 신규 ESKD", "18,598명", "KORDS·대한신장학회 ESKD Fact Sheet", "2022", false]
      ],
      body: [
        ["부담의 두 층", ["초기 CKD → 심혈관·사망 위험의 대규모 인구 부담", "kidney failure → dialysis·transplantation·보존 치료의 고강도 의료 부담", "삶의 질·빈혈·pruritus 등 증상 부담 → eGFR만으로 미포착"]],
        ["수치 해석", ["GBD 사망·DALY → 모델 기반 세계 비교", "KORDS ESKD → KRT 등록 환자 · 전체 CKD 유병률과 다른 분모", "HIRA 진료비·진료 인원 → 청구 발생 기반 · 인구 유병률과 혼용 금지"]]
      ],
      related: ["ckd-prevalence", "ckd-progression", "ckd-krt"],
      papers: [["GBD 2023 CKD Collaborators 2025, Lancet", "https://doi.org/10.1016/S0140-6736(25)01853-7"]],
      links: [["대한신장학회 ESKD Fact Sheet 2024", "https://www.ksn.or.kr/bbs/skin/publication/download.php?code=Factsheet&number=2175"]]
    },
    {
      id: "ckd-riskfactors", section: "risk", title: "주요 후천적 위험인자는 무엇인가?",
      aliases: ["diabetes", "obesity", "aging", "AKI", "risk factor"],
      summary: "diabetes·obesity·노화·반복 AKI가 nephron capacity를 낮추거나 workload를 높이는 공통 구조",
      facts: [
        ["GBD 주요 DALY 위험", "고혈당 · 높은 BMI · 높은 수축기혈압", "GBD 2023 CKD Collaborators", "2023", false],
        ["ESKD 원인 중 diabetes", "48%", "KORDS", "2022", false]
      ],
      body: [
        ["capacity를 줄이는 요인", ["노화 → nephron의 평생 소실", "반복 AKI → 회복 뒤에도 남는 nephron 손실", "조산·저체중 → 낮은 출생 nephron 수"]],
        ["workload를 높이는 요인", ["diabetes·obesity → 대사·여과 부하 증가", "남은 nephron의 보상 요구량 증가", "여러 위험의 동시 노출 → 단일 원인보다 빠른 capacity/workload 불균형"]]
      ],
      related: ["ckd-nephron-endowment", "ckd-hypertension", "ckd-common-pathway"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"], ["GBD 2023 CKD Collaborators 2025, Lancet", "https://doi.org/10.1016/S0140-6736(25)01853-7"]]
    },
    {
      id: "ckd-nephron-endowment", section: "risk", title: "출생 시 nephron 수는 평생 위험에 어떤 영향을 주는가?",
      aliases: ["nephron endowment", "birth weight", "prematurity", "조산", "저체중"],
      summary: "출생 nephron 수 평균 약 95만·20만–250만의 큰 개인차 → 낮은 초기 capacity가 hypertension·CKD 취약성으로 연결",
      facts: [
        ["평균 nephron 수", "약 95만/신장", "Romagnani 2025 Primer", "2025", false],
        ["개인 범위", "약 20만–250만/신장", "Romagnani 2025 Primer", "2025", false],
        ["형성 시기", "임신 12–36주", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["태아기의 capacity", ["nephron 형성 → 태아기에 대부분 결정", "조산·저체중 → nephron 형성 기간 단축·초기 capacity 감소", "출생 이후 노화·AKI·대사 부하가 같은 초기 자산에서 차감"]],
        ["평생 영향", ["낮은 nephron 수 → nephron당 workload 증가", "single-nephron hyperfiltration의 조기 시작 가능성", "성인 혈압 상승·CKD 선별에서 출생력의 잠재적 가치"]]
      ],
      related: ["ckd-riskfactors", "ckd-hyperfiltration", "ckd-hypertension"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-genetic-risk", section: "risk", title: "유전은 CKD 위험에 어떻게 기여하는가?",
      aliases: ["genetics", "monogenic", "polygenic", "APOL1", "PKD", "COL4"],
      summary: "수백 개 nephropathic variant의 단일유전자·다유전자 스펙트럼 → 원인 규명과 평생 capacity 차이의 한 축",
      facts: [
        ["nephropathic 변이", "수백 개 보고", "Romagnani 2025 Primer", "2025", false],
        ["대표 유전자", "APOL1 · PKD1/2 · COL4A3/4/5", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["유전 구조", ["고침투 단일유전자 질환 → 명확한 원인 축", "소효과 다유전자 배경 → acquired risk와 결합", "ancestry별 변이 빈도·LD·진화 선택의 차이"]],
        ["임상 의미", ["원인 미상 CKD의 재분류 가능성", "가족 상담·이식 평가·원인 특이 추적의 근거", "병적 변이와 불확실 변이의 구분 → 전문 해석 필요"]]
      ],
      related: ["ckd-genetic-architecture", "ckd-apol-risk", "ckd-genetic-testing"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-hypertension", section: "risk", title: "hypertension은 원인인가 결과인가?",
      aliases: ["hypertension", "고혈압", "sodium excretion", "bidirectional"],
      summary: "높은 혈압은 CKD 위험과 진행을 높이는 동시에 nephron 부족의 sodium 배설 한계에서 먼저 드러나는 신호 — 양방향 임상 해석",
      facts: [
        ["한국 KoGES 대상", "7,343명", "대한신장학회 2025 고혈압콩팥병 진료지침", "2001–2014", false],
        ["SBP ≥160 mmHg CKD 위험", "RR 3.22 vs 110–119 mmHg", "KoGES·대한신장학회 2025 지침", "2001–2014", false]
      ],
      body: [
        ["두 방향", ["높은 혈압 → 사구체 부하·진행 위험 상승", "nephron capacity 부족 → sodium 배설 한계 → 혈압 상승", "원인 대 결과의 이분법보다 상호 증폭 고리"]],
        ["실용적 해석", ["새 hypertension → serum creatinine/eGFR+urine ACR 선별 트리거", "CKD 동반 hypertension → workload 감소 치료의 핵심 표적", "관찰 연관과 병인 방향의 혼동 금지"]]
      ],
      related: ["ckd-riskfactors", "ckd-screening", "ckd-kidney-protection"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]],
      links: [["대한신장학회 2025 고혈압콩팥병 진료지침", "https://ksn.or.kr/bbs/skin/publication/download.php?code=g_guideline&number=2252"]]
    },
    {
      id: "ckd-common-pathway", section: "course", title: "서로 다른 원인은 왜 비슷한 경로로 진행하는가?",
      aliases: ["common pathway", "capacity workload", "remnant nephron", "자가진행"],
      summary: "최초 trigger와 무관하게 nephron 소실 뒤 workload/capacity 불일치가 지속 → remnant nephron의 공통 자가진행 경로",
      facts: [
        ["공통 병기전", "nephron workload/capacity 불일치", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["공통 수렴", ["유전·대사·염증·AKI → 시작점은 상이", "nephron 소실 → 총 capacity 감소", "남은 nephron에 동일 총 workload 집중 → 원인 비의존적 진행"]],
        ["치료 함의", ["원인 특이 치료만으로 이미 형성된 overload 고리 미차단 가능성", "RAASi·SGLT2i → remnant nephron load 감소", "병용 치료 → 여러 workload 축의 동시 완화"]]
      ],
      related: ["ckd-hyperfiltration", "ckd-fibrosis", "ckd-standard-tx"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-hyperfiltration", section: "course", title: "hyperfiltration은 어떻게 nephron 소실을 가속하는가?",
      aliases: ["single-nephron hyperfiltration", "podocyte stress", "glomerulosclerosis", "hypertrophy"],
      summary: "nephron 감소 → 남은 nephron의 hyperfiltration·hypertrophy → podocyte stress·glomerulosclerosis → 추가 nephron 소실",
      facts: [
        ["진행 사슬", "nephron 소실 → hyperfiltration·hypertrophy → podocyte stress → glomerulosclerosis", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["보상의 역설", ["초기 총 GFR 유지 → nephron당 여과량 증가", "hypertrophy·single-nephron hyperfiltration → 단기 보상", "장기 podocyte stress·여과장벽 손상 → albuminuria"]],
        ["악순환", ["glomerulosclerosis → 기능 nephron 추가 감소", "더 적은 nephron에 더 큰 workload 집중", "overload 감소 치료 → 보상 고리의 강도 완화"]]
      ],
      related: ["ckd-common-pathway", "ckd-albuminuria", "ckd-kidney-protection"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-fibrosis", section: "course", title: "fibrosis는 원인인가 결과인가?",
      aliases: ["fibrosis", "renal fibrosis", "overload", "섬유화"],
      summary: "fibrosis는 overload의 원발 driver보다 2차 결과에 가까운 해석 — 진행 기여와 직접 표적치료의 제한을 함께 고려",
      facts: [
        ["병태 위치", "overload의 2차 결과", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["패러다임 이동", ["과거 — fibrosis 자체를 진행의 중심 driver로 강조", "현재 SSOT — capacity/workload 불일치 뒤의 2차 조직 반응", "심부전 모델과 유사한 load 감소 중심의 치료 관점"]],
        ["해석의 균형", ["2차 결과 ≠ 임상적 무의미", "형성된 fibrosis → 회복 capacity 제한·진행 증폭 가능성", "직접 anti-fibrotic 효과 → overload 감소 치료만큼 확립되지 않은 단계"]]
      ],
      related: ["ckd-common-pathway", "ckd-progression", "ckd-standard-tx"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-progression", section: "course", title: "기능 저하에서 kidney failure까지 어떤 문제가 나타나는가?",
      aliases: ["progression", "kidney failure", "uraemia", "complications"],
      summary: "GFR 저하와 함께 anaemia·hyperkalaemia·acidosis·CKD-MBD·pruritus가 누적 → kidney failure에서 KRT 또는 보존 치료",
      facts: [
        ["kidney failure GFR", "<15 mL/min/1.73m²", "KDIGO 2024", "2024", false],
        ["한국 ESKD 평균 연령", "65.9세", "KORDS ESKD Fact Sheet", "2022", false],
        ["한국 ESKD 65세 이상", "56.6%", "KORDS ESKD Fact Sheet", "2022", false]
      ],
      body: [
        ["진행 중 합병증", ["erythropoietic 기능 저하·철 대사 이상 → anaemia", "potassium·acid 배설 저하 → hyperkalaemia·metabolic acidosis", "mineral·hormone 조절 이상 → secondary hyperparathyroidism·CKD-MBD"]],
        ["kidney failure", ["uraemic symptom·volume·전해질·영양 문제의 누적", "eGFR 수치만이 아닌 증상·위험·선호에 따른 KRT 시점", "dialysis·transplantation·포괄적 보존 치료의 선택"]]
      ],
      related: ["ckd-complications", "ckd-krt", "ckd-burden"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"], ["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-screening", section: "dx", title: "누구를 어떻게 선별하는가?",
      aliases: ["screening", "creatinine", "urine ACR", "선별검사"],
      summary: "diabetes·hypertension·obesity·AKI·가족력·고령 등 위험집단에서 eGFR과 urine ACR을 함께 측정",
      facts: [
        ["기본 평가", "serum creatinine/eGFR + urine ACR", "KDIGO 2024", "2024", false],
        ["한국 CKD 인지율", "확인 필요 — 동일 정의의 최신 국민건강통계 표 필요", "질병관리청 국민건강영양조사", "", true]
      ],
      body: [
        ["선별 대상", ["diabetes·obesity·hypertension·심혈관 위험", "AKI 병력·조산·저체중·가족력·유전질환 의심", "새 hypertension → CKD의 조기 신호 가능성"]],
        ["두 검사", ["eGFR → 배설 capacity", "urine ACR → 여과장벽 손상", "한 번의 이상 → 만성성·일시적 변동을 위한 반복 확인"]]
      ],
      related: ["ckd-criteria", "ckd-egfr", "ckd-albuminuria"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]],
      links: [["KDIGO 2024 CKD Guideline", "https://kdigo.org/guidelines/ckd-evaluation-and-management/"]]
    },
    {
      id: "ckd-criteria", section: "dx", title: "최신 진단 기준은 무엇인가?",
      aliases: ["KDIGO 2024", "diagnostic criteria", "classification", "진단 기준"],
      summary: "KDIGO 2024 — >3개월 구조·기능 이상 + CGA 분류를 유지하며 GFR·albuminuria·원인 평가를 정련",
      facts: [
        ["최신 종합 지침", "KDIGO 2024 CKD Evaluation and Management", "KDIGO", "2024", false],
        ["직전 종합 지침", "KDIGO 2012", "KDIGO", "2012", false],
        ["개정 간격", "12년 — 고정 주기 아님", "KDIGO 2012·2024", "2012–2024", false],
        ["만성성", ">3개월", "KDIGO 2024", "2024", false]
      ],
      body: [
        ["진단 표지", ["GFR <60 mL/min/1.73m²", "ACR ≥30 mg/g·소변침사·전해질·조직·영상 이상", "kidney transplantation 병력"]],
        ["사용 원칙", ["단일 검사 → 만성성 확인 전 확정 금지", "G1·G2 → kidney damage 표지 없으면 CKD 기준 미충족", "CGA 전체 표기 → 원인·중증도·위험의 축약"]]
      ],
      related: ["ckd-definition", "ckd-cga", "ckd-guideline-change"],
      papers: [["KDIGO 2024, Kidney Int 105(Suppl 4S):S117–S314", "https://doi.org/10.1016/j.kint.2023.10.018"]]
    },
    {
      id: "ckd-egfr", section: "dx", title: "eGFR은 무엇을 측정하고 어떻게 분류하는가?",
      aliases: ["eGFR", "GFR", "creatinine", "cystatin C", "G1 G5"],
      summary: "eGFR은 배설능의 추정치 — G1 ≥90에서 G5 <15까지 분류하되 creatinine 비-GFR 요인과 식의 집단 적합성 고려",
      facts: [
        ["G1", "≥90 mL/min/1.73m²", "KDIGO 2024", "2024", false],
        ["G2", "60–89 mL/min/1.73m²", "KDIGO 2024", "2024", false],
        ["G3a / G3b", "45–59 / 30–44 mL/min/1.73m²", "KDIGO 2024", "2024", false],
        ["G4 / G5", "15–29 / <15 mL/min/1.73m²", "KDIGO 2024", "2024", false]
      ],
      body: [
        ["무엇을 추정하는가", ["serum creatinine 또는 cystatin C → filtration capacity의 간접 추정", "근육량·식이·약제 등 비-GFR 요인 → creatinine 기반 오차", "임상 결정에 정확도가 중요할 때 creatinine+cystatin C 조합 고려"]],
        ["범주 해석", ["G1·G2 단독 → kidney damage 표지 없으면 CKD 아님", "G3a–G5 → GFR 자체가 CKD 기준", "연속값을 범주로 바꾼 결과 → 경계 근처 반복 측정과 추세 확인"]]
      ],
      related: ["ckd-cga", "ckd-albuminuria", "ckd-new-method"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]]
    },
    {
      id: "ckd-albuminuria", section: "dx", title: "albuminuria는 무엇을 측정하고 어떻게 분류하는가?",
      aliases: ["albuminuria", "ACR", "A1", "A2", "A3", "알부민뇨"],
      summary: "urine ACR은 여과장벽 손상의 지표 — A1 <30·A2 30–300·A3 >300 mg/g, eGFR과 독립적으로 위험 정보 제공",
      facts: [
        ["A1", "ACR <30 mg/g", "KDIGO 2024", "2024", false],
        ["A2", "ACR 30–300 mg/g", "KDIGO 2024", "2024", false],
        ["A3", "ACR >300 mg/g", "KDIGO 2024", "2024", false],
        ["이상 기준", "ACR ≥30 mg/g", "KDIGO 2024", "2024", false]
      ],
      body: [
        ["측정 원칙", ["성인 초기 검사 → 첫 아침 중간뇨 urine ACR 우선", "dipstick 양성 → 정량 ACR로 확인", "운동·감염·월경 등 일시적 상승 요인 → 반복 확인"]],
        ["임상 의미", ["podocyte·여과장벽 stress의 임상 표지", "A2·A3 상승 → 같은 eGFR에서도 kidney·CV 위험 증가", "RAASi·SGLT2i 적응과 위험 추적의 핵심 축"]]
      ],
      related: ["ckd-cga", "ckd-egfr", "ckd-kidney-protection"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]]
    },
    {
      id: "ckd-cause-testing", section: "dx", title: "원인 평가와 유전검사는 언제 필요한가?",
      aliases: ["cause evaluation", "genetic testing", "kidney biopsy", "CGA cause"],
      summary: "임상·가족력·검사·영상·조직을 통합하고 원인 미상·유전질환 의심에서 genetic testing을 진단 알고리즘에 포함",
      facts: [
        ["분류 원칙", "Cause를 GFR·albuminuria와 함께 기록", "KDIGO 2024", "2024", false],
        ["유전검사 위치", "진단 알고리즘 포함 제안", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["원인 평가", ["병력·약제·가족력·출생력·AKI 이력", "urine·혈액·영상·필요 시 kidney biopsy", "diabetes 동반 여부만으로 단일 원인 확정 금지"]],
        ["유전검사", ["가족력·젊은 발병·낭성·기저막 질환·원인 미상에서 우선 고려", "병적 변이 → 진단명·가족 상담·이식 평가의 변화", "불확실 변이 → 임상표현형과 분리된 과잉 해석 금지"]]
      ],
      related: ["ckd-genetic-risk", "ckd-genetic-testing", "ckd-cystic-collagen"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"], ["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]]
    },
    {
      id: "ckd-standard-tx", section: "tx", title: "현재 표준 치료 전략은 무엇인가?",
      aliases: ["standard treatment", "combination therapy", "overload reduction", "표준 치료"],
      summary: "원인 특이 치료와 remnant nephron overload 감소를 병행 — RAASi·SGLT2i 중심의 조기 병용과 합병증 관리",
      facts: [
        ["최신 종합 지침", "KDIGO 2024", "KDIGO", "2024", false],
        ["치료 중심", "RAASi + SGLT2i 기반 overload 감소", "Romagnani 2025 Primer·KDIGO 2024", "2024–2025", false]
      ],
      body: [
        ["세 치료축", ["원인 특이 치료 → 가역·면역·유전 질환 맥락", "workload 감소 → BP·albuminuria·glomerular load 관리", "합병증·심혈관·생활·약물 안전성의 동시 관리"]],
        ["병용 패러다임", ["RAASi·SGLT2i → diabetes 유무를 넘어 cardiorenal 보호", "T2D 동반 → finerenone·semaglutide 추가 고려", "순차 단독요법보다 조기 병용 → 심부전 치료와 유사한 다중 축 접근"]]
      ],
      related: ["ckd-kidney-protection", "ckd-diabetes-combination", "ckd-complications"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"], ["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]]
    },
    {
      id: "ckd-kidney-protection", section: "tx", title: "RAASi와 SGLT2 inhibitor는 어떤 효과가 있는가?",
      aliases: ["RAASi", "ACE inhibitor", "ARB", "SGLT2 inhibitor", "dapagliflozin", "empagliflozin"],
      summary: "DAPA-CKD 9.2% vs 14.5%(HR 0.61)·EMPA-KIDNEY 13.1% vs 16.9%(HR 0.72) — SGLT2i의 diabetes 비의존 kidney 보호",
      facts: [
        ["DAPA-CKD 일차복합결과", "9.2% vs 14.5%; HR 0.61 (95% CI 0.51–0.72); NNT 19", "Heerspink et al., N Engl J Med 383(15):1436–1446", "2020", false],
        ["EMPA-KIDNEY 일차복합결과", "13.1% vs 16.9%; HR 0.72 (95% CI 0.64–0.82)", "Herrington et al., N Engl J Med 388(2):117–127", "2023", false],
        ["KDIGO SGLT2i 강한 권고", "eGFR ≥20 + ACR ≥200 mg/g 또는 heart failure", "KDIGO 2024", "2024", false],
        ["DAPA-CKD 전체 사망", "4.7% vs 6.8%; HR 0.69", "Heerspink et al., N Engl J Med", "2020", false]
      ],
      body: [
        ["RAASi", ["ACEi·ARB → intraglomerular pressure·albuminuria 감소", "A3 CKD에서 diabetes 없이도 강한 권고", "ACEi+ARB 병용 → 이득보다 hyperkalaemia·AKI 위험"]],
        ["SGLT2 inhibitor", ["DAPA-CKD·EMPA-KIDNEY → diabetes 유무 전반의 kidney outcome 감소", "초기 reversible eGFR dip → 일반적으로 중단 근거 아님", "금식·수술·중증 질환 → ketosis 위험 때문에 일시 중지 고려"]],
        ["안전성", ["volume depletion·genital infection·드문 ketoacidosis 감시", "eGFR·potassium·혈압·volume 상태의 치료 전후 확인", "시험군 차이 → DAPA-CKD와 EMPA-KIDNEY 절대율 직접 비교 금지"]]
      ],
      related: ["ckd-standard-tx", "ckd-albuminuria", "ckd-drug-update"],
      papers: [["Heerspink et al. 2020, N Engl J Med 383(15):1436–1446", "https://doi.org/10.1056/NEJMoa2024816"], ["Herrington et al. 2023, N Engl J Med 388(2):117–127", "https://doi.org/10.1056/NEJMoa2204233"]]
    },
    {
      id: "ckd-diabetes-combination", section: "tx", title: "diabetes 동반 CKD에서 어떤 약제를 더하는가?",
      aliases: ["finerenone", "semaglutide", "GLP-1", "MRA", "FIDELIO-DKD", "FLOW"],
      summary: "FIDELIO-DKD finerenone HR 0.82·FLOW semaglutide HR 0.76 — RAASi·SGLT2i 위에 T2D cardiorenal 위험을 추가로 낮추는 축",
      facts: [
        ["FIDELIO-DKD kidney outcome", "17.8% vs 21.1%; HR 0.82 (95% CI 0.73–0.93)", "Bakris et al., N Engl J Med 383(23):2219–2229", "2020", false],
        ["finerenone 중단 hyperkalaemia", "2.3% vs 0.9%", "Bakris et al., N Engl J Med", "2020", false],
        ["FLOW major kidney event", "331 vs 410; HR 0.76 (95% CI 0.66–0.88)", "Perkovic et al., N Engl J Med 391:109–121", "2024", false],
        ["FLOW serious adverse event", "49.6% vs 53.8%", "Perkovic et al., N Engl J Med", "2024", false]
      ],
      body: [
        ["finerenone", ["T2D+albuminuric CKD·최대 내약 RAAS blockade 위의 kidney outcome 감소", "hyperkalaemia → 시작 전·치료 중 potassium 감시", "mild hyperkalaemia 21.4% vs 9.2%·moderate 4.5% vs 1.4%"]],
        ["semaglutide", ["FLOW → major kidney disease event 24% 상대위험 감소", "serious adverse event는 placebo보다 낮은 비율", "위장관 이상으로 인한 중단·탈수 가능성 감시"]],
        ["병용 해석", ["각 시험의 background therapy·포함 기준 상이", "절대 사건률의 약제 간 순위 비교 금지", "RAASi·SGLT2i·finerenone·GLP-1RA → 개인 위험·내약성에 맞춘 조합"]]
      ],
      related: ["ckd-standard-tx", "ckd-kidney-protection", "ckd-drug-update"],
      papers: [["Bakris et al. 2020, N Engl J Med 383(23):2219–2229", "https://doi.org/10.1056/NEJMoa2025845"], ["Perkovic et al. 2024, N Engl J Med 391:109–121", "https://doi.org/10.1056/NEJMoa2403347"], ["Agarwal et al. 2022, J Am Soc Nephrol 33(1):225–237", "https://doi.org/10.1681/ASN.2021070942"]]
    },
    {
      id: "ckd-complications", section: "tx", title: "합병증은 어떻게 관리하는가?",
      aliases: ["anaemia", "hyperkalaemia", "metabolic acidosis", "CKD-MBD", "pruritus"],
      summary: "anaemia·hyperkalaemia·metabolic acidosis·secondary hyperparathyroidism·uraemic pruritus를 진행 단계와 환자 증상에 맞춰 병렬 관리",
      facts: [
        ["관리 대상", "anaemia · hyperkalaemia · metabolic acidosis · secondary hyperparathyroidism · uraemic pruritus", "Romagnani 2025 Primer", "2025", false],
        ["합병증별 국내 최신 유병률", "확인 필요 — 동일 stage 정의의 KORDS·KNOW-CKD 표 대조", "KORDS·KNOW-CKD", "", true]
      ],
      body: [
        ["기능 저하의 결과", ["erythropoietin·철 축 → anaemia", "potassium·acid 배설 축 → hyperkalaemia·acidosis", "phosphate·calcium·PTH 축 → CKD-MBD"]],
        ["관리 원칙", ["단일 수치보다 증상·추세·G/A stage·치료 부작용 통합", "hyperkalaemia 관리 → cardiorenal 보호 약제의 불필요한 중단 최소화", "pruritus·피로·수면·영양 → 환자보고 결과와 삶의 질 포함"]]
      ],
      related: ["ckd-progression", "ckd-standard-tx", "ckd-krt"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"], ["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"]]
    },
    {
      id: "ckd-krt", section: "tx", title: "kidney failure에서 어떤 치료 경로를 선택하는가?",
      aliases: ["KRT", "hemodialysis", "peritoneal dialysis", "transplant", "conservative care"],
      summary: "kidney failure 치료는 haemodialysis·peritoneal dialysis·transplantation·포괄적 보존 치료 — 수치보다 임상 필요와 선호 중심",
      facts: [
        ["한국 ESKD 환자", "134,826명", "KORDS", "2022", false],
        ["한국 KRT 분포", "haemodialysis 84%", "KORDS", "2022", false],
        ["한국 ESKD 원인", "diabetes 48% · hypertension 21%", "KORDS", "2022", false]
      ],
      body: [
        ["치료 선택지", ["haemodialysis → 시설·혈관접근·일정의 고려", "peritoneal dialysis → 재택·복막·감염 관리의 고려", "transplantation → 기능 회복 잠재력·면역억제·공여자 평가"]],
        ["보존 치료와 시점", ["포괄적 보존 치료 → symptom control·advance care planning·삶의 질", "KRT 시작 → eGFR 숫자 하나가 아닌 uraemia·volume·전해질·영양·선호", "조기 교육·접근 준비·이식 평가 → 위기 시작의 회피"]]
      ],
      related: ["ckd-progression", "ckd-complications", "ckd-burden"],
      papers: [["KDIGO 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2023.10.018"], ["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]],
      links: [["대한신장학회 ESKD Fact Sheet 2024", "https://www.ksn.or.kr/bbs/skin/publication/download.php?code=Factsheet&number=2175"]]
    },
    {
      id: "ckd-genetic-architecture", section: "omics", title: "CKD의 유전 구조는 어떻게 구성되는가?",
      aliases: ["genetic architecture", "monogenic", "polygenic", "nephropathic variants"],
      summary: "수백 개 nephropathic variant가 고침투 단일유전자 질환부터 다유전자 감수성까지 연속체를 구성",
      facts: [
        ["보고 변이", "수백 개 nephropathic variant", "Romagnani 2025 Primer", "2025", false],
        ["대표 축", "APOL1 · PKD1/2 · COL4A3/4/5", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["연속체", ["단일 병적 변이 → 높은 침투도·가족성 질환", "다수 소효과 변이 → acquired risk와 결합", "유전 배경 → 초기 capacity·손상 반응·진행 속도의 차이"]],
        ["해석의 층", ["variant 발견 → pathogenicity 평가", "유전자–표현형 일치 → 원인 진단", "ancestry 편중·불확실 변이 → 임상 전이의 제한"]]
      ],
      related: ["ckd-genetic-risk", "ckd-apol-risk", "ckd-cystic-collagen"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-apol-risk", section: "omics", title: "APOL1은 위험과 진화의 trade-off를 어떻게 보여주는가?",
      aliases: ["APOL1", "trypanosomiasis", "African ancestry", "trade-off"],
      summary: "서·남아프리카 기원의 APOL1 위험변이 — trypanosomiasis 저항의 선택 이득과 kidney epithelial 소실 가속의 비용",
      facts: [
        ["기원", "서·남아프리카 ancestry", "Romagnani 2025 Primer", "2025", false],
        ["진화 이득", "trypanosomiasis 저항", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["trade-off", ["감염 저항 → 특정 집단에서 변이 빈도 상승", "kidney epithelial cell 소실 가속 → CKD 감수성", "현재 질병 위험과 과거 선택 이득의 같은 변이"]],
        ["임상 해석", ["ancestry ≠ genotype → 집단 라벨만으로 위험 판정 금지", "유전 결과 → 임상표현형·가족력과 통합", "APOL1 표적치료·검사 알고리즘 편입 → 진행 중"]]
      ],
      related: ["ckd-genetic-architecture", "ckd-genetic-testing", "ckd-new-data"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-cystic-collagen", section: "omics", title: "PKD1/2와 COL4A3/4/5는 어떤 질환축을 가리키는가?",
      aliases: ["PKD1", "PKD2", "COL4A3", "COL4A4", "COL4A5", "Alport"],
      summary: "PKD1/2는 cystic kidney disease·COL4A3/4/5는 basement membrane collagenopathy의 대표 단일유전자 축",
      facts: [
        ["cystic 축", "PKD1 · PKD2", "Romagnani 2025 Primer", "2025", false],
        ["collagen 축", "COL4A3 · COL4A4 · COL4A5", "Romagnani 2025 Primer", "2025", false]
      ],
      body: [
        ["PKD1/2", ["낭성 구조 이상 → 영상·가족력과 유전 결과의 결합", "구조적 nephron capacity의 점진적 소실", "원인 진단 → 가족 선별·진행 감시의 변화"]],
        ["COL4A3/4/5", ["glomerular basement membrane collagenopathy", "혈뇨·단백뇨·가족력·청각·안과 표현형의 통합", "초기 비특이 CKD 라벨 → 분자 원인 기반 재분류 가능성"]]
      ],
      related: ["ckd-genetic-architecture", "ckd-cause-testing", "ckd-genetic-testing"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-genetic-testing", section: "omics", title: "유전검사는 임상 알고리즘에 어떻게 들어가는가?",
      aliases: ["genetic testing", "variant interpretation", "VUS", "clinical algorithm"],
      summary: "원인 미상·가족성·젊은 발병·낭성·기저막 표현형에서 유전검사 → 진단·상담·이식 평가의 정밀화",
      facts: [
        ["알고리즘 위치", "원인 평가에 genetic testing 포함 제안", "Romagnani 2025 Primer", "2025", false],
        ["한국 유전검사 진단 수율", "확인 필요 — 적응증별 국내 다기관 자료 필요", "국내 CKD 유전 코호트", "", true]
      ],
      body: [
        ["검사 전", ["표현형·가족력·가계도·영상·조직의 정리", "단일유전자·panel·exome/genome 범위 선택", "검사 결과가 진료를 바꿀 질문의 명시"]],
        ["검사 후", ["pathogenic/likely pathogenic → 원인 진단·가족 cascade testing", "VUS → 질환 원인으로 단정 금지", "ancestry별 reference 부족 → 분류 불균형·재평가 필요"]]
      ],
      related: ["ckd-cause-testing", "ckd-apol-risk", "ckd-cystic-collagen"],
      papers: [["Romagnani 2025, Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-024-00589-9"]]
    },
    {
      id: "ckd-guideline-change", section: "now", title: "진료 권고는 최근 어떻게 바뀌었는가?",
      aliases: ["guideline", "KDIGO 2024", "KDIGO 2022 diabetes", "KDIGO 2021 BP"],
      summary: "KDIGO CKD 종합 지침 2012→2024 개정 — CGA 유지·race-free GFR 평가·SGLT2i 적응 확대·risk-based care 강화",
      facts: [
        ["CKD 평가·관리", "KDIGO 2024 — 직전 2012", "KDIGO", "2024", false],
        ["diabetes in CKD", "KDIGO 2022 — 직전 2020", "KDIGO", "2022", false],
        ["BP in CKD", "KDIGO 2021 — 직전 2012", "KDIGO", "2021", false],
        ["개정 주기", "CKD 12년 · diabetes 2년 · BP 9년 — 고정 주기 아님", "KDIGO", "2012–2024", false]
      ],
      body: [
        ["주요 변화", ["SGLT2i → T2D를 넘어 CKD+albuminuria 또는 heart failure로 확대", "creatinine+cystatin C와 집단 검증식의 활용 강화", "kidney failure risk → 전문의 의뢰·KRT 준비의 보조 기준"]],
        ["유지된 뼈대", ["CKD 정의 >3개월", "CGA 분류", "RAASi·BP·albuminuria 관리의 중심성"]],
        ["개정 해석", ["12년 간격 → 정기 주기 아닌 근거 축적 기반 update", "세부 BP·diabetes 권고 → 각각 2021·2022 지침과 함께 사용", "국내 허가·급여·진료지침의 반영 시차 별도 확인"]]
      ],
      related: ["ckd-criteria", "ckd-standard-tx", "ckd-drug-update"],
      papers: [["KDIGO 2024, Kidney Int 105(Suppl 4S):S117–S314", "https://doi.org/10.1016/j.kint.2023.10.018"]],
      links: [["KDIGO CKD Evaluation and Management", "https://kdigo.org/guidelines/ckd-evaluation-and-management/"]]
    },
    {
      id: "ckd-drug-update", section: "now", title: "새 치료제와 안전성 정보는 무엇인가?",
      aliases: ["drug update", "DAPA-CKD", "EMPA-KIDNEY", "FIDELIO-DKD", "FLOW", "safety"],
      summary: "SGLT2i·finerenone·semaglutide가 kidney outcome을 각각 낮췄으나 hyperkalaemia·ketosis·volume·GI 위험의 계열별 감시 필요",
      facts: [
        ["dapagliflozin", "HR 0.61; 9.2% vs 14.5%", "DAPA-CKD·Heerspink 2020", "2020", false],
        ["empagliflozin", "HR 0.72; 13.1% vs 16.9%", "EMPA-KIDNEY·Herrington 2023", "2023", false],
        ["finerenone", "HR 0.82; 중단 hyperkalaemia 2.3% vs 0.9%", "FIDELIO-DKD·Bakris 2020", "2020", false],
        ["semaglutide", "HR 0.76; serious AE 49.6% vs 53.8%", "FLOW·Perkovic 2024", "2024", false]
      ],
      body: [
        ["효과", ["SGLT2i → diabetes 유무를 넘어 kidney progression 감소", "finerenone → T2D+albuminuric CKD의 추가 보호", "semaglutide → T2D+CKD major kidney event 감소"]],
        ["안전성", ["SGLT2i → volume depletion·genital infection·드문 ketoacidosis", "finerenone → hyperkalaemia·potassium monitoring", "semaglutide → 위장관 이상·탈수·치료 중단"]],
        ["비교 주의", ["서로 다른 trial population·endpoint·background therapy", "약제 간 절대 사건률의 직접 순위화 금지", "병용 효과·장기 안전성 → 지속 갱신 대상"]]
      ],
      related: ["ckd-kidney-protection", "ckd-diabetes-combination", "ckd-guideline-change"],
      papers: [["Heerspink et al. 2020, N Engl J Med", "https://doi.org/10.1056/NEJMoa2024816"], ["Herrington et al. 2023, N Engl J Med", "https://doi.org/10.1056/NEJMoa2204233"], ["Bakris et al. 2020, N Engl J Med", "https://doi.org/10.1056/NEJMoa2025845"], ["Perkovic et al. 2024, N Engl J Med", "https://doi.org/10.1056/NEJMoa2403347"]]
    },
    {
      id: "ckd-new-data", section: "now", title: "새 코호트·역학 데이터는 무엇이 생겼는가?",
      aliases: ["GBD 2023", "KNOW-CKD", "CRIC", "KORDS", "cohort"],
      summary: "GBD 2023 성인 7.88억명·KNOW-CKD 약 4,000명 15년 추적·KORDS 2022 ESKD 134,826명 — 인구·임상·KRT 층의 보완",
      facts: [
        ["GBD 2023 성인 CKD", "7.88억명", "GBD 2023 CKD Collaborators", "2023", false],
        ["KNOW-CKD", "전국 14개 대학병원·약 4,000명·최장 15년", "국립보건연구원·대한신장학회", "2011–2026", false],
        ["KNOW-CKD vs CRIC", "kidney progression 위험 약 1.66배", "국립보건연구원 2026 CKD Fact Sheet", "2026", false],
        ["KORDS ESKD", "134,826명", "대한신장학회", "2022", false]
      ],
      body: [
        ["세 데이터 층", ["GBD → 204개 국가·모델 기반 세계 부담", "KNOW-CKD → 한국 임상 CKD의 종단 예후", "KORDS → kidney failure·KRT 등록 현황"]],
        ["KNOW-CKD 2026", ["중도 탈락률 20% 미만의 장기 추적", "한국 환자의 kidney progression 위험이 미국 CRIC보다 높다는 비교", "운동·골다공증·철 결핍 등 예후 연관의 임상 자료"]],
        ["자료 결합 주의", ["일반 인구 prevalence·전문병원 cohort·KRT registry → 선택 기준 상이", "1.66배 → cohort 구성·endpoint·보정의 영향", "인과 해석보다 외부 검증·국내 위험모형의 근거"]]
      ],
      related: ["ckd-prevalence", "ckd-trend", "ckd-genetic-testing"],
      papers: [["Oh et al. 2022, J Prev Med Public Health 55(4):313–320", "https://doi.org/10.3961/jpmph.22.031"], ["GBD 2023 CKD Collaborators 2025, Lancet", "https://doi.org/10.1016/S0140-6736(25)01853-7"]],
      links: [["국립보건연구원 KNOW-CKD 15년 Fact Sheet 보도자료", "https://www.nih.go.kr/ko/bbs/B0000130/view.do?menuNo=300830&nttId=13230&pageIndex="]]
    },
    {
      id: "ckd-new-method", section: "now", title: "새로 쓸 수 있게 된 분석·평가 기법은 무엇인가?",
      aliases: ["race-free eGFR", "cystatin C", "eGFR slope", "surrogate endpoint", "KFRE"],
      summary: "race-free eGFR·creatinine+cystatin C·kidney failure risk·eGFR slope·proteinuria surrogate가 측정과 시험 설계를 정련",
      facts: [
        ["CKD-EPI race-free 식", "2021 creatinine·creatinine-cystatin C", "Inker et al., N Engl J Med", "2021", false],
        ["3년 total eGFR slope R²", "0.97 (95% BCI 0.78–1.00)", "Levey et al., Am J Kidney Dis", "2020", false],
        ["IgAN proteinuria 30% 감소", "eGFR slope 이득 확률 ≥90%", "Inker et al., Am J Kidney Dis", "2021", false],
        ["한국인 식별 성능", "확인 필요 — CKD-EPI 2021·EKFC·한국식의 mGFR 외부검증", "국내 mGFR 코호트", "", true]
      ],
      body: [
        ["개인 평가", ["race coefficient 제거 → 사회적 race를 생물학적 보정값으로 쓰는 문제 완화", "creatinine+cystatin C → 비-GFR 요인의 상호 보완", "kidney failure risk equation → referral·KRT 준비의 확률 기반 보조"]],
        ["임상시험", ["eGFR slope → 느린 진행 질환의 시험 기간·표본 효율 개선", "proteinuria 감소 → 특정 단백뇨성 질환의 surrogate", "초기 hemodynamic eGFR dip → chronic slope와 분리 해석"]],
        ["한계", ["식의 집단별 calibration → 한국인 mGFR 자료 필요", "surrogate 유효성 → 질환·기전·기간별 맥락 의존", "방법 개선 ≠ 실제 환자 이득의 자동 보장"]]
      ],
      related: ["ckd-egfr", "ckd-guideline-change", "ckd-new-data"],
      papers: [["Inker et al. 2021, N Engl J Med 385:1737–1749", "https://doi.org/10.1056/NEJMoa2102953"], ["Levey et al. 2020, Am J Kidney Dis 75(1):84–104", "https://doi.org/10.1053/j.ajkd.2019.06.009"], ["Inker et al. 2021, Am J Kidney Dis 78(3):340–349.e1", "https://doi.org/10.1053/j.ajkd.2021.03.030"]]
    }
  ];

  const glossaryTerms = {
    "ckd": { key: "ckd", definition: "Chronic kidney disease. 신장 구조·기능 이상이 3개월을 초과해 지속되고 건강에 영향을 주는 상태." },
    "nephron": { key: "nephron", definition: "신장의 기본 기능 단위. 수가 줄수록 남은 nephron의 workload 증가." },
    "egfr": { key: "egfr", definition: "Estimated glomerular filtration rate. serum creatinine·cystatin C로 추정한 여과 기능." },
    "albuminuria": { key: "albuminuria", definition: "소변 albumin 증가. 여과장벽 손상과 kidney·cardiovascular 위험의 지표." },
    "acr": { key: "acr", definition: "Urine albumin-to-creatinine ratio. albuminuria를 A1–A3로 분류하는 정량 지표." },
    "hyperfiltration": { key: "hyperfiltration", definition: "남은 nephron 하나당 여과량 증가. 단기 보상 뒤 podocyte stress·glomerulosclerosis와 연결." },
    "podocyte": { key: "podocyte", definition: "사구체 여과장벽을 구성하는 epithelial cell. 과부하 손상 시 albuminuria와 nephron 소실에 연결." },
    "raasi": { key: "raasi", definition: "Renin–angiotensin–aldosterone system inhibitor. ACE inhibitor·ARB 등 glomerular load·albuminuria 감소 약제." },
    "sglt2 inhibitor": { key: "sglt2i", definition: "Sodium–glucose cotransporter-2 inhibitor. diabetes 유무를 넘어 CKD 진행과 cardiorenal 위험을 낮추는 약제군." },
    "finerenone": { key: "finerenone", definition: "Nonsteroidal mineralocorticoid receptor antagonist. T2D 동반 CKD에서 사용하며 hyperkalaemia 감시 필요." },
    "krt": { key: "krt", definition: "Kidney replacement therapy. haemodialysis·peritoneal dialysis·kidney transplantation의 묶음." },
    "apol1": { key: "apol1", definition: "Trypanosomiasis 저항과 kidney epithelial injury 위험의 진화적 trade-off를 보이는 유전자." }
  };
  const glossaryPattern = /(^|[^A-Za-z0-9가-힣])(CKD|nephron|eGFR|albuminuria|ACR|hyperfiltration|podocyte|RAASi|SGLT2 inhibitor|finerenone|KRT|APOL1)(?=$|[^A-Za-z0-9])/gi;

  return { meta: meta, acts: acts, sections: sections, articles: articleList, glossaryTerms: glossaryTerms, glossaryPattern: glossaryPattern };
})();
