window.DISEASE = (function () {
  const meta = {
    id:"mdd",
    title: "Major Depressive Disorder (MDD)",
    domain: "Neuro",
    description: "우울삽화의 임상 정의부터 다유전자 위험·전신 조절축·시냅스 가소성·최신 치료까지"
  };

  const acts = [
    { id:"A", num: "01", en: "DEFINITION · EPIDEMIOLOGY", title: "무엇인가", accent: "#6f3a55",
      blurb: "정의·분류 · 감별 · 아형 · 세계와 한국의 규모 · 질병부담",
      sections: ["def", "epi"] },
    { id:"B", num: "02", en: "CAUSE · COURSE", title: "왜·어떻게", accent: "#315d78",
      blurb: "유전·환경 · 스트레스·전신 조절축 · 발병 전 변화 · 재발과 동반질환",
      sections: ["risk", "course"] },
    { id:"C", num: "03", en: "CLINICAL", title: "임상", accent: "#94553b",
      blurb: "증상·진단 기준 · 평가도구 · 표준 치료 · 반응·안전성·치료저항",
      sections: ["dx", "tx"] },
    { id:"D", num: "04", en: "RESEARCH", title: "연구", accent: "#1f5d43",
      blurb: "GWAS·multi-omics·single-cell · 새 권고·치료제·데이터·분석 기법",
      sections: ["omics", "now"] }
  ];

  const sections = {
    def: { number: "01", title: "정의 · 분류", act: "A",
      questions: [
        { q: "어떻게 정의하고 분류하는가?", note: "우울삽화 · 단일·반복성 · 관해 상태", article: "ckd-definition" },
        { q: "비슷한 상태와 무엇이 다른가?", note: "정상 애도 · 양극성 · 물질·의학적 원인", article: "ckd-differential" },
        { q: "주요 아형과 specifier는 무엇인가?", note: "불안성 고통 · melancholic · psychotic · 계절성", article: "ckd-subtypes" },
        { q: "monoamine 모델은 MDD를 어디까지 설명하는가?", note: "치료 표적과 병인의 분리 · 시냅스·전신 축", article: "ckd-monoamine-model" }
      ] },
    epi: { number: "02", title: "역학 · 질병부담", act: "A",
      questions: [
        { q: "세계와 한국에서 얼마나 흔한가?", note: "MDD와 depressive disorders 정의 분리 · 조사와 청구의 분리", article: "ckd-prevalence" },
        { q: "발생률·유병률은 어떻게 변하는가?", note: "COVID-19 충격 · 장기 추세 · 정의 차이", article: "ckd-trend" },
        { q: "어떤 연령·성별·집단에서 많이 발생하는가?", note: "여성 · 청년층 진료 증가 · 고령층 조사 유병률", article: "ckd-demography" },
        { q: "질병부담과 사회경제적 영향은 얼마나 큰가?", note: "DALY · 장애 부담 · 진료비", article: "ckd-burden" }
      ] },
    risk: { number: "01", title: "원인 · 위험인자", act: "B",
      questions: [
        { q: "주요 위험인자는 무엇인가?", note: "스트레스 · 초기 역경 · 동반질환 · 생활환경", article: "ckd-risk-factors" },
        { q: "유전과 환경은 각각 얼마나 기여하는가?", note: "가족·쌍생아 유전력과 SNP 유전력의 간극", article: "ckd-gene-environment" },
        { q: "스트레스와 전신 조절축은 어떻게 위험을 높이는가?", note: "HPA·자율신경 · 면역·염증 · 뇌 가소성", article: "ckd-systemic-stress" },
        { q: "보호요인과 촉발요인은 무엇인가?", note: "사회적 지지·회복탄력성 · 반복 스트레스", article: "ckd-protective-triggers" }
      ] },
    course: { number: "02", title: "발병 · 진행", act: "B",
      questions: [
        { q: "발병 전에는 어떤 변화가 나타나는가?", note: "스트레스 누적 · HPA 변화 · 무쾌감·수면 변화", article: "ckd-prodrome" },
        { q: "첫 삽화부터 재발까지 어떤 경로를 밟는가?", note: "삽화 · 부분관해 · 관해 · 재발", article: "ckd-course" },
        { q: "환자마다 경과와 표현형이 다른 이유는 무엇인가?", note: "증상 조합 · 유전·환경 · 염증성 subset", article: "ckd-heterogeneity" },
        { q: "주요 동반질환과 사망 위험은 무엇인가?", note: "불안·물질사용 · 심혈관·대사 · 자살 위험", article: "ckd-comorbidity" }
      ] },
    dx: { number: "01", title: "진단 · 분류", act: "C",
      questions: [
        { q: "핵심 증상과 초기 신호는 무엇인가?", note: "우울 기분·무쾌감 · 인지·신체 증상 · 자살사고", article: "ckd-symptoms" },
        { q: "현재 진단 기준은 무엇인가?", note: "DSM-5-TR 2022 · ICD-11 CDDR 2024", article: "ckd-criteria" },
        { q: "어떤 평가도구와 검사를 사용하는가?", note: "임상 면담 · PHQ-9 · 원인 감별 검사", article: "ckd-assessment" },
        { q: "감별진단과 중증도는 어떻게 판단하는가?", note: "양극성·정신병·물질·신체질환 · 기능 손상", article: "ckd-dx-severity" }
      ] },
    tx: { number: "02", title: "치료 · 미충족 수요", act: "C",
      questions: [
        { q: "현재 표준 치료는 무엇인가?", note: "psychotherapy·항우울제 · 병합 · ECT·rTMS", article: "ckd-standard-treatment" },
        { q: "항우울제의 반응률과 관해율은 어느 정도인가?", note: "STAR*D 1단계 · 측정도구별 차이", article: "ckd-response-remission" },
        { q: "속효성 치료는 무엇을 바꾸었는가?", note: "ketamine·esketamine · AMPA–mTORC1·BDNF", article: "ckd-rapid-treatment" },
        { q: "치료저항·재발·부작용 문제는 무엇인가?", note: "부분반응 · 장기 유지 · 연령별 suicidality 경고", article: "ckd-treatment-resistance-safety" }
      ] },
    omics: { number: "01", title: "유전학 · 오믹스", act: "D",
      questions: [
        { q: "GWAS는 어떤 유전 구조를 보여주는가?", note: "작은 효과의 다수 변이 · SNP 유전력 · 정신질환 공유", article: "ckd-gwas" },
        { q: "위험변이는 어느 뇌영역과 세포에서 작동하는가?", note: "전전두피질·피질 · 뉴런·시냅스 · 세포 맥락", article: "ckd-variant-celltype" },
        { q: "transcriptome·epigenome·single-cell 연구는 무엇을 보여주는가?", note: "뇌영역·세포별 상태 · 면역·시냅스·stress hormone", article: "ckd-multiomics" },
        { q: "ancestry와 성차는 결과를 어떻게 바꾸는가?", note: "유럽계 편중 · PRS 전이 · 여성 위험과 기전 차이", article: "ckd-ancestry-sex" }
      ] },
    now: { number: "02", title: "최신 동향", act: "D",
      questions: [
        { q: "진료 권고는 최근 어떻게 바뀌었는가?", note: "NICE 2022 · CANMAT 2023 · KMAP-DD 2025", article: "ckd-guideline-update" },
        { q: "새 치료제와 안전성 정보는 무엇인가?", note: "esketamine · dextromethorphan–bupropion · 감시", article: "ckd-drug-update" },
        { q: "새 코호트·오믹스 데이터는 무엇이 생겼는가?", note: "다인종 GWAS · 뇌–혈액 multi-omics", article: "ckd-new-data" },
        { q: "새로 쓸 수 있게 된 분석 기법은 무엇인가?", note: "single-nucleus · multi-omics factor · fine-mapping·PRS", article: "ckd-new-method" }
      ] }
  };

  const articleList = [
    {
      id: "ckd-definition", section: "def",
      title: "어떻게 정의하고 분류하는가?",
      aliases: ["major depressive disorder", "MDD", "주요우울장애", "우울삽화", "remission"],
      summary: "우울 기분 또는 흥미·즐거움 상실을 중심으로 기능 손상을 동반하는 삽화성 질환 · 단일삽화와 반복성·관해 상태로 분류",
      facts: [
        ["핵심 기간", "같은 2주 동안 증상 지속", "APA DSM-5-TR", "2022", false],
        ["핵심 문턱", "9개 증상 중 5개 이상 · 우울 기분 또는 무쾌감 1개 이상", "APA DSM-5-TR", "2022", false],
        ["ICD-11 발효", "2022-01-01", "WHO ICD-11", "2022", false]
      ],
      body: [
        ["핵심 개념", ["삽화성 우울증후군 + 임상적으로 유의한 고통·기능 손상", "우울 기분·무쾌감 중심 → 인지·수면·식욕·정신운동·에너지 증상의 조합", "정상적 기분 변동보다 기간·중증도·기능 손상에 무게"]],
        ["분류 축", ["단일삽화 / 반복성 · 부분관해 / 완전관해", "경도·중등도·중증도 + psychotic features 등 specifier", "MDD와 depressive disorders 상위 범주의 분리"]],
        ["해석 주의", ["증상 기준 기반 진단 → 단일 병리기전과의 일대일 대응 불가", "같은 진단 안의 서로 다른 증상 조합·경과·생물학", "연구 phenotype 정의 차이 → 결과 비교 전 조작적 정의 확인"]]
      ],
      related: ["ckd-differential", "ckd-subtypes", "ckd-criteria"],
      papers: [["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]],
      links: [["APA DSM-5-TR", "https://www.psychiatry.org/psychiatrists/practice/dsm"], ["WHO ICD-11 CDDR", "https://www.who.int/publications/i/item/9789240077263"]]
    },
    {
      id: "ckd-differential", section: "def",
      title: "비슷한 상태와 무엇이 다른가?",
      aliases: ["감별진단", "grief", "bipolar disorder", "adjustment disorder", "substance induced"],
      summary: "정상 애도·적응반응보다 지속성과 기능 손상 · 조증·경조증 병력 확인으로 양극성 우울과 분리 · 물질·신체질환 원인 배제",
      facts: [
        ["양극성 감별", "조증·경조증의 과거 또는 현재 병력 확인", "APA DSM-5-TR", "2022", false],
        ["물질·의학적 원인", "직접 생리효과 여부 평가", "APA DSM-5-TR", "2022", false],
        ["prolonged grief disorder", "DSM-5-TR에 신규 포함", "American Psychiatric Association", "2022", false]
      ],
      body: [
        ["정상 반응과의 경계", ["상실·스트레스 맥락만으로 자동 제외 불가 → 증상군·기간·기능 손상 평가", "애도에서 유지되는 자기존중감과 MDD의 광범위한 무가치감 비교", "prolonged grief disorder·적응장애의 시간 경과와 초점 확인"]],
        ["양극성과 정신병", ["조증·경조증 병력 → bipolar disorder 경로", "기분삽화 밖에서 지속되는 정신병 증상 → schizophrenia spectrum 검토", "항우울제 단독 치료 전 양극성 가능성 점검"]],
        ["이차성 우울", ["약물·알코올·기타 물질의 시간적 관계", "갑상선·신경계·만성질환 등 의학적 원인 감별", "단일 혈액검사보다 병력·진찰·선택적 검사 조합"]]
      ],
      related: ["ckd-definition", "ckd-criteria", "ckd-dx-severity"],
      papers: [["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]],
      links: [["APA DSM-5-TR release", "https://www.psychiatry.org/news-room/news-releases/apa-releases-diagnostic-and-statistical-manual-of"]]
    },
    {
      id: "ckd-subtypes", section: "def",
      title: "주요 아형과 specifier는 무엇인가?",
      aliases: ["specifier", "melancholic", "atypical", "psychotic", "seasonal pattern", "anxious distress"],
      summary: "불안성 고통·melancholic·atypical·psychotic·계절성 등 임상 specifier → 위험·치료 선택·추적 강도의 보조 축",
      facts: [
        ["DSM 판본", "DSM-5-TR", "American Psychiatric Association", "2022", false],
        ["핵심 분류 단위", "단일삽화·반복성 + 관해·중증도 + specifier", "APA DSM-5-TR", "2022", false],
        ["분자 아형", "임상 적용 가능한 표준 taxonomy 미확립", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false]
      ],
      body: [
        ["임상 specifier", ["anxious distress · melancholic features · atypical features", "mood-congruent 또는 mood-incongruent psychotic features", "seasonal pattern · peripartum onset 등 시간·맥락 축"]],
        ["임상적 용도", ["자살위험·정신병·긴장증 등 즉시 안전계획과 치료 강도 결정", "수면·식욕·정신운동 양상의 기록 → 종단 비교", "치료반응 예측의 보조 정보"]],
        ["분자 아형과의 거리", ["증상 기반 specifier와 omics cluster의 직접 대응 미확립", "염증성 표지 상승은 일부 환자 subset의 후보", "임상 분류와 기전 분류의 혼용 금지"]]
      ],
      related: ["ckd-definition", "ckd-heterogeneity", "ckd-multiomics"],
      papers: [["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]],
      links: [["APA DSM-5-TR", "https://www.psychiatry.org/psychiatrists/practice/dsm"]]
    },
    {
      id: "ckd-monoamine-model", section: "def",
      title: "monoamine 모델은 MDD를 어디까지 설명하는가?",
      aliases: ["monoamine hypothesis", "serotonin", "SSRI", "SLC6A4", "HTR2A", "TPH2"],
      summary: "monoamine은 유효한 치료 표적의 한 축 · 대규모 GWAS의 serotonergic 핵심 유전자 신호 부재 → 흔한 변이 병인 전체 설명과 혼용 금지",
      facts: [
        ["Howard GWAS", "102개 독립 변이 · 87개 replication 재현", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["serotonergic 후보", "SLC6A4·HTR2A·TPH2의 genome-wide 유의 신호 부재", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["SNP 유전력", "h²SNP 8.9%", "Howard et al., Nat Neurosci 22:343–352", "2019", false]
      ],
      body: [
        ["모델의 기여", ["serotonin·norepinephrine·dopamine 조절 → 항우울제 약리의 핵심 축", "신경전달 변화와 증상 개선의 임상적 연결", "치료 표적의 유효성과 질환 원인의 동일성은 별개"]],
        ["유전학의 제약", ["대규모 GWAS → serotonergic 대표 후보 유전자에서 유의 신호 부재", "유전 신호 → cortical neuron·synapse·neurotransmission에 넓게 분산", "작은 효과의 다수 변이 → 단일 전달물질 결핍 모델의 한계"]],
        ["현재 통합상", ["stress–glutamate–plasticity · HPA · immune 축의 상호연결", "monoamine 즉시 변화와 임상효과 지연 사이의 시간차", "monoamine 치료 표적과 공통변이 병인 설명의 혼용 금지"]]
      ],
      related: ["ckd-gwas", "ckd-systemic-stress", "ckd-rapid-treatment"],
      papers: [["Howard et al. 2019, Nat Neurosci 22:343–352", "https://doi.org/10.1038/s41593-018-0326-7"], ["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]]
    },
    {
      id: "ckd-prevalence", section: "epi",
      title: "세계와 한국에서 얼마나 흔한가?",
      aliases: ["prevalence", "유병률", "GBD", "HIRA", "정신건강실태조사", "진료 인원"],
      summary: "GBD 2021 depressive disorders 3.324억 명과 2020 MDD 2.46억 명은 질환 정의·연도·COVID-19 모형이 달라 혼용 금지 · 한국 조사 유병률과 청구 진료 인원도 혼용 금지",
      facts: [
        ["세계 유병 인구", "332.41 million · depressive disorders(MDD+dysthymia)", "IHME GBD 2021", "2021", false],
        ["세계 연령표준화 유병률", "4,006.8/100,000 · depressive disorders", "IHME GBD 2021", "2021", false],
        ["세계 MDD 유병 인구", "246 million · COVID-19 영향 포함 모형", "Santomauro et al., Lancet 398:1700–1712", "2020", false],
        ["한국 12개월 유병률", "1.7% · depressive disorders(MDD+dysthymia) · 18–79세 5,511명 조사", "국립정신건강센터 정신건강실태조사", "2021", false],
        ["한국 진료 인원", "933,481명 · 청구 발생 기준", "건강보험심사평가원", "2021", false],
        ["한국 진료 인원", "1,000,032명 · F32·F33 청구 발생 기준", "건강보험심사평가원 생활 속 질병·진료행위 통계", "2022", false]
      ],
      body: [
        ["세계 추정치의 분모", ["GBD 2021 depressive disorders → MDD와 dysthymia 합산", "Santomauro 2020 → MDD 단독 + COVID-19 영향 모형", "3.324억 명과 2.46억 명의 직접 비교·비율 계산 금지"]],
        ["한국의 두 측정", ["2021 정신건강실태조사 → 지역사회 면접조사 기반 12개월 유병률", "HIRA → 의료이용 후 청구가 발생한 진료 인원", "미진단·미수진 인구가 빠지는 청구 수치 → 유병률 해석 금지"]],
        ["혼용 금지", ["MDD 단독 / depressive disorders 합산의 구분", "조사 유병률 / 청구 진료 인원의 구분", "산출 연도·표본연령·진단코드의 병기"]]
      ],
      related: ["ckd-trend", "ckd-demography", "ckd-burden"],
      papers: [["GBD 2021 Depression Collaborators 2025, Br J Psychiatry", "https://doi.org/10.1192/bjp.2024.266"], ["Santomauro et al. 2021, Lancet 398:1700–1712", "https://doi.org/10.1016/S0140-6736(21)02143-7"]],
      links: [["IHME GBD 2021 depressive disorders factsheet", "https://www.healthdata.org/sites/default/files/disease_and_injury/gbd_2021/topic_pdf/cause/567.pdf"], ["국립정신건강센터 2021 정신건강실태조사", "https://mhs.ncmh.go.kr/menu.es?mid=a10501040000"], ["HIRA 2021 우울증 진료 통계", "https://www.hira.or.kr/bbsDummy.do?brdBltNo=10627&brdScnBltNo=4&pageIndex=1&pgmid=HIRAA020041000100"]]
    },
    {
      id: "ckd-trend", section: "epi",
      title: "발생률·유병률은 어떻게 변하는가?",
      aliases: ["incidence", "trend", "COVID-19", "발생률", "추세"],
      summary: "GBD 2021 depressive disorders 신규 발생 3.574억 건 · COVID-19 모형의 2020 MDD 추가 유병 5,320만 명 → 장기 추세와 급성 충격의 분리",
      facts: [
        ["세계 신규 발생", "357.44 million · depressive disorders", "GBD 2021 Depression Collaborators", "2021", false],
        ["세계 연령표준화 발생률", "4,333.6/100,000 · depressive disorders", "IHME GBD 2021", "2021", false],
        ["COVID-19 추가 MDD", "53.2 million · pandemic impact model", "Santomauro et al., Lancet 398:1700–1712", "2020", false],
        ["한국 진료 인원 변화", "753,011명→1,000,032명 · 32.8% 증가 · F32·F33 청구", "건강보험심사평가원", "2018–2022", false]
      ],
      body: [
        ["세계 변화", ["2020 pandemic impact model → MDD 추가 유병 5,320만 명 추정", "GBD 2021 → depressive disorders 발생 건수와 연령표준화율 동시 제시", "급성 환경 충격·인구증가·연령구조 변화의 분리 필요"]],
        ["한국 의료이용 변화", ["F32·F33 진료 인원 2018년 75만3,011명 → 2022년 100만32명", "청구 증가 → 질환 발생 증가·인식 개선·접근성 변화의 혼합", "청구 인원을 인구 유병률로 환산 금지"]],
        ["비교 원칙", ["같은 질환정의·성별·연령표준화 방식·연도에서만 추세 비교", "MDD와 dysthymia 합산 지표의 별도 표기", "COVID-19 모형 기반 초과분과 관측 청구량의 혼용 금지"]]
      ],
      related: ["ckd-prevalence", "ckd-demography", "ckd-burden"],
      papers: [["GBD 2021 Depression Collaborators 2025, Br J Psychiatry", "https://doi.org/10.1192/bjp.2024.266"], ["Santomauro et al. 2021, Lancet 398:1700–1712", "https://doi.org/10.1016/S0140-6736(21)02143-7"]],
      links: [["HIRA 생활 속 질병·진료행위 통계", "https://www.hira.or.kr/bbsDummy.do?brdBltNo=2399&brdScnBltNo=4&pageIndex=1&pgmid=HIRAA020045010000"]]
    },
    {
      id: "ckd-demography", section: "epi",
      title: "어떤 연령·성별·집단에서 많이 발생하는가?",
      aliases: ["sex difference", "gender", "age", "여성", "연령", "집단"],
      summary: "한국 2021 조사 12개월 유병률 여성 2.4%·남성 1.1% · 2021 청구 진료 인원 여성 63만334명·남성 30만3,147명 → 조사와 의료이용의 같은 방향, 다른 측정",
      facts: [
        ["한국 12개월 유병률", "여성 2.4% · 남성 1.1% · depressive disorders", "국립정신건강센터 정신건강실태조사", "2021", false],
        ["한국 평생 유병률", "전체 7.7% · 여성 9.8% · 남성 5.7%", "국립정신건강센터 정신건강실태조사", "2021", false],
        ["한국 진료 인원", "여성 630,334명 · 남성 303,147명", "건강보험심사평가원", "2021", false],
        ["20대 진료 인원", "177,166명 · 전체의 19.0% · 2017년 대비 127.1% 증가", "건강보험심사평가원", "2021", false],
        ["70–79세 12개월 유병률", "3.1% · depressive disorders", "국립정신건강센터 정신건강실태조사", "2021", false]
      ],
      body: [
        ["성별 차이", ["지역사회 조사 → 여성 2.4%·남성 1.1%의 12개월 유병률", "청구자료 → 여성 진료 인원이 남성의 약 2.1배", "생물학·사회환경·도움요청·의료접근 차이의 복합"]],
        ["연령 패턴", ["2021 HIRA → 20대 진료 인원 17만7,166명·가파른 증가", "2021 면접조사 → 70–79세 12개월 유병률 3.1%", "연령별 조사 유병률과 진료 인원 비중의 직접 비교 금지"]],
        ["집단 해석", ["연령·성별 strata 안의 표본오차와 의료이용 차이", "전 생애 발병 가능성 + 초기 성인기 흔한 발병", "집단 평균을 개인 진단·예후로 전환 금지"]]
      ],
      related: ["ckd-prevalence", "ckd-ancestry-sex", "ckd-risk-factors"],
      papers: [["Bangasser & Cuarenta 2021, Nat Rev Neurosci 22:674–684", "https://doi.org/10.1038/s41583-021-00513-0"]],
      links: [["국립정신건강센터 2021 정신건강실태조사", "https://mhs.ncmh.go.kr/menu.es?mid=a10501040000"], ["HIRA 2021 우울증 진료 통계", "https://www.hira.or.kr/bbsDummy.do?brdBltNo=10627&brdScnBltNo=4&pageIndex=1&pgmid=HIRAA020041000100"]]
    },
    {
      id: "ckd-burden", section: "epi",
      title: "질병부담과 사회경제적 영향은 얼마나 큰가?",
      aliases: ["DALY", "YLD", "disease burden", "질병부담", "진료비", "사회경제"],
      summary: "GBD 2021 depressive disorders 5,633만 DALYs · 한국 2022 F32·F33 진료비 5,378억 원 → 장애 부담과 의료비를 서로 다른 지표로 분리",
      facts: [
        ["세계 DALYs", "56.33 million · depressive disorders", "IHME GBD 2021", "2021", false],
        ["세계 연령표준화 DALY율", "681.2/100,000", "IHME GBD 2021", "2021", false],
        ["성별 DALYs", "여성 34.1 million · 남성 22.2 million", "IHME GBD 2021", "2021", false],
        ["한국 진료비", "537.8 billion KRW · F32·F33 청구", "건강보험심사평가원", "2022", false],
        ["한국 1인당 진료비", "538,000 KRW · 청구 환자 기준", "건강보험심사평가원", "2022", false]
      ],
      body: [
        ["장애 부담", ["GBD → 사망보다 비치명적 장애 중심의 부담 산정", "2021 depressive disorders DALYs 5,633만·연령표준화 10만 명당 681.2", "MDD 단독 수치로 재표기 금지"]],
        ["한국 의료비", ["2022 F32·F33 청구 진료비 5,378억 원", "2018년 대비 총진료비 60.1% 증가 · HIRA 집계", "보험청구 직접비용 → 생산성 손실·돌봄 부담 미포함"]],
        ["지표의 경계", ["DALY · 진료비 · 노동손실의 단위와 분모 차이", "청구 인원·1인당 비용은 치료 접근의 영향 포함", "정의·연도·가격기준 병기 없는 합산 금지"]]
      ],
      related: ["ckd-prevalence", "ckd-trend", "ckd-comorbidity"],
      papers: [["GBD 2021 Depression Collaborators 2025, Br J Psychiatry", "https://doi.org/10.1192/bjp.2024.266"]],
      links: [["IHME GBD 2021 depressive disorders factsheet", "https://www.healthdata.org/sites/default/files/disease_and_injury/gbd_2021/topic_pdf/cause/567.pdf"], ["HIRA 생활 속 질병·진료행위 통계", "https://www.hira.or.kr/bbsDummy.do?brdBltNo=2399&brdScnBltNo=4&pageIndex=1&pgmid=HIRAA020045010000"]]
    },    {
      id: "ckd-risk-factors", section: "risk",
      title: "주요 위험인자는 무엇인가?",
      aliases: ["risk factor", "stress", "trauma", "early life adversity", "위험인자"],
      summary: "유전 취약성 위에 초기 역경·반복 스트레스·사회적 고립·신체질환이 중첩 → 단일 충분원인보다 누적 위험",
      facts: [
        ["가족·쌍생아 유전력", "약 37%", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false],
        ["여성 대 남성", "한국 12개월 유병률 2.4% 대 1.1%", "국립정신건강센터 정신건강실태조사", "2021", false],
        ["GWAS 개별 효과", "대부분 OR <1.05", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false]
      ],
      body: [
        ["취약성 층위", ["polygenic liability · 가족력", "초기 생애 역경·반복적 psychosocial stress", "만성 신체질환·통증·수면 교란·물질사용"]],
        ["사회환경 층위", ["사회적 고립·불리한 생활조건·관계 단절", "성별·연령별 노출과 도움요청 차이", "급성 사건보다 누적 부하와 맥락의 중요성"]],
        ["해석 원칙", ["위험인자 존재 ≠ MDD 필연", "작은 유전효과와 환경 노출의 조합", "관찰 연관·역인과·공통 원인의 분리 필요"]]
      ],
      related: ["ckd-gene-environment", "ckd-systemic-stress", "ckd-protective-triggers"],
      papers: [["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"], ["Hodes et al. 2015, Nat Neurosci 18:1386–1393", "https://doi.org/10.1038/nn.4113"]]
    },
    {
      id: "ckd-gene-environment", section: "risk",
      title: "유전과 환경은 각각 얼마나 기여하는가?",
      aliases: ["heritability", "SNP heritability", "gene environment", "유전력", "환경"],
      summary: "가족·쌍생아 유전력 약 37%와 SNP 유전력 약 8.4–8.9%의 간극 → 희귀변이·구조변이·불완전 측정·환경·상호작용의 여지",
      facts: [
        ["가족·쌍생아 유전력", "약 37%", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false],
        ["SNP 유전력", "약 8.4%", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false],
        ["SNP 유전력", "8.9% · Howard phenotype", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["Howard discovery", "807,553명", "Howard et al., Nat Neurosci 22:343–352", "2019", false]
      ],
      body: [
        ["유전 기여", ["가족·쌍생아 연구의 넓은 유전력 약 37%", "common SNP 기반 추정 약 8.4–8.9%", "작은 효과의 다수 변이 + phenotype 이질성"]],
        ["간극의 의미", ["common SNP array가 포착하지 못한 유전변이", "표본·진단정의·LD·ancestry에 따른 추정 변화", "환경·측정오차·gene–environment correlation·interaction의 여지"]],
        ["비율 해석", ["유전력 → 특정 인구·환경에서의 분산 비율", "개인의 운명·변경 불가능성 지표로 해석 금지", "8.4%와 8.9% → 서로 다른 분석·phenotype의 값, 혼용 금지"]]
      ],
      related: ["ckd-risk-factors", "ckd-gwas", "ckd-ancestry-sex"],
      papers: [["Howard et al. 2019, Nat Neurosci 22:343–352", "https://doi.org/10.1038/s41593-018-0326-7"], ["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]]
    },
    {
      id: "ckd-systemic-stress", section: "risk",
      title: "스트레스와 전신 조절축은 어떻게 위험을 높이는가?",
      aliases: ["HPA axis", "cortisol", "neuroimmune", "microglia", "cytokine", "NLRP3"],
      summary: "반복 스트레스 → HPA·교감신경 변화 → myelopoiesis·염증성 monocyte·microglia → cytokine·BDNF·glutamate 가소성 교란",
      facts: [
        ["면역 표지", "IL-6·TNF·CRP 상승 · 일부 MDD subset", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false],
        ["뇌 면역영상", "TSPO PET 증가 보고 · 전체 MDD 일반화 제한", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false],
        ["핵심 기전 근거", "사람 연관 + 동물 인과기전의 결합", "Hodes et al., Nat Neurosci 18:1386–1393", "2015", false]
      ],
      body: [
        ["스트레스–면역 경로", ["반복 스트레스 → HPA·교감신경 활성", "골수 myelopoiesis 편향 → 염증성 monocyte 동원", "뇌 유입·cytokine 신호 → microglia 반응"]],
        ["뇌 가소성 연결", ["IL-1β·IL-6·TNF·NLRP3 축 → neurogenesis·BDNF 조절", "glutamate·GABA 균형과 synaptic plasticity 변화", "만성 cortisol 부담 → hippocampus·PFC 취약성"]],
        ["적용 범위", ["염증 표지 상승 → 전체 환자보다 subset 신호", "말초 cytokine과 뇌 원인경로의 동일시 금지", "동물 스트레스 모델의 세포기전과 인간 MDD 진단의 직접 등치 금지"]]
      ],
      related: ["ckd-risk-factors", "ckd-multiomics", "ckd-rapid-treatment"],
      papers: [["Hodes et al. 2015, Nat Neurosci 18:1386–1393", "https://doi.org/10.1038/nn.4113"], ["Wohleb & Delpech 2017, Prog Neuropsychopharmacol Biol Psychiatry 79:40–48", "https://doi.org/10.1016/j.pnpbp.2016.04.013"], ["Daskalakis et al. 2024, Science 384:eadh3707", "https://doi.org/10.1126/science.adh3707"]]
    },
    {
      id: "ckd-protective-triggers", section: "risk",
      title: "보호요인과 촉발요인은 무엇인가?",
      aliases: ["protective factor", "trigger", "resilience", "social support", "회복탄력성"],
      summary: "사회적 지지·안정적 수면·적절한 치료 접근은 위험 완충의 임상 축 · 반복 스트레스·상실·신체질환은 취약성 위의 촉발 맥락",
      facts: [
        ["환경 기여", "단일 결정인자보다 누적 노출 모형", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false],
        ["반복 스트레스", "neuroimmune·HPA·synaptic plasticity 변화와 연결", "Hodes et al., Nat Neurosci 18:1386–1393", "2015", false],
        ["예방 근거 단위", "보편·선별·지시 예방의 구분", "WHO depression resources", "2023", false]
      ],
      body: [
        ["보호 맥락", ["사회적 지지·안전한 관계·접근 가능한 돌봄", "규칙적 수면·활동·물질사용 감소", "초기 증상 인지와 빠른 평가·치료"]],
        ["촉발 맥락", ["상실·대인 갈등·만성 스트레스", "수면 박탈·통증·염증성 신체질환", "출산 전후·계절 변화 등 개인별 반복 패턴"]],
        ["주의", ["보호요인 → 개인 책임으로 환원 금지", "촉발 사건이 없는 MDD도 포함", "집단 연관을 개인 원인으로 단정 금지"]]
      ],
      related: ["ckd-risk-factors", "ckd-prodrome", "ckd-course"],
      papers: [["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"], ["Hodes et al. 2015, Nat Neurosci 18:1386–1393", "https://doi.org/10.1038/nn.4113"]]
    },
    {
      id: "ckd-prodrome", section: "course",
      title: "발병 전에는 어떤 변화가 나타나는가?",
      aliases: ["prodrome", "subthreshold depression", "anhedonia", "sleep", "전구기"],
      summary: "수면·에너지·집중·흥미의 아역치 변화와 스트레스 반응 누적 → 뚜렷한 경계 없는 발병 전 구간",
      facts: [
        ["진단 기간", "같은 2주 동안 5개 이상 증상", "APA DSM-5-TR", "2022", false],
        ["GWAS 한계", "self-report·broad phenotype의 이질성", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["생물학적 전구기", "임상 적용 가능한 단일 biomarker 미확립", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false]
      ],
      body: [
        ["임상 전 변화", ["흥미·즐거움 저하 · 수면·에너지·집중 변화", "사회적 철수·기능 저하·스트레스 민감성", "진단 문턱 아래의 아역치 증상"]],
        ["가능한 생물학", ["반복 스트레스 → HPA·면역·자율신경 조절 변화", "PFC·hippocampus의 synaptic plasticity 취약성", "말초 염증·cortisol의 개인 간 큰 변동"]],
        ["경계의 한계", ["정상 반응과 전구기의 명확한 cutoff 부재", "후향적 기억 편향·증상 측정 간격", "단일 biomarker 기반 발병 예측의 임상 미확립"]]
      ],
      related: ["ckd-symptoms", "ckd-course", "ckd-systemic-stress"],
      papers: [["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]]
    },
    {
      id: "ckd-course", section: "course",
      title: "첫 삽화부터 재발까지 어떤 경로를 밟는가?",
      aliases: ["episode", "remission", "relapse", "recurrence", "kindling", "재발"],
      summary: "첫 삽화 → 반응·부분관해·완전관해 또는 지속 증상 → 재발 위험의 누적 · 반복 삽화에서 더 작은 stressor로 촉발될 가능성",
      facts: [
        ["재발", "일부 장기 연구에서 최대 85% 보고", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false],
        ["STAR*D 1단계 관해", "HAM-D 28% · QIDS-SR 33%", "Trivedi et al., Am J Psychiatry 163:28–40", "2006", false],
        ["반응까지 시간", "다수의 반응·관해가 8주 이후", "Trivedi et al., Am J Psychiatry 163:28–40", "2006", false]
      ],
      body: [
        ["경과 상태", ["첫 삽화 → 치료 반응·부분관해·완전관해", "잔류 증상 → 기능 회복 지연·재발 위험", "재발성 삽화 또는 만성 경과"]],
        ["반복의 기전", ["초기 삽화 → 강한 stressor와 연결 가능", "반복 삽화 → kindling·stress sensitization 가설", "HPA·glutamate·BDNF·synaptic plasticity 변화의 누적 가능성"]],
        ["수치 해석", ["최대 85% 재발 보고 → 추적기간·표본·관해 정의 의존", "STAR*D 관해율 → 실제진료형 표본·측정도구별 값", "집단 평균을 개인 예후로 직접 전환 금지"]]
      ],
      related: ["ckd-prodrome", "ckd-response-remission", "ckd-treatment-resistance-safety"],
      papers: [["Trivedi et al. 2006, Am J Psychiatry 163:28–40", "https://doi.org/10.1176/appi.ajp.163.1.28"], ["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]]
    },
    {
      id: "ckd-heterogeneity", section: "course",
      title: "환자마다 경과와 표현형이 다른 이유는 무엇인가?",
      aliases: ["heterogeneity", "phenotype", "inflammatory subtype", "이질성", "표현형"],
      summary: "같은 진단 안의 증상 조합·발병연령·삽화성·염증 상태·유전 배경의 혼재 → 평균 신호와 개인 경로의 괴리",
      facts: [
        ["DSM 증상", "9개 중 5개 이상 · 조합 다수", "APA DSM-5-TR", "2022", false],
        ["Howard phenotype", "807,553명 discovery + 약 130만 명 replication", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["염증 subset", "CRP 상승군에서 치료효과 차이 신호 · 일관성 제한", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false]
      ],
      body: [
        ["임상 이질성", ["우울·무쾌감·수면·식욕·정신운동 조합의 다양성", "단일삽화·반복성·만성 경과의 혼재", "불안·정신병·melancholic·atypical specifier의 중첩"]],
        ["생물학 이질성", ["polygenic background와 환경 노출의 조합", "HPA·면역·glutamate·monoamine 축의 상대 기여 차이", "성별·연령·ancestry·약물 노출의 효과 수정"]],
        ["연구 설계 영향", ["임상진단·self-report·전자건강기록 phenotype의 정밀도 차이", "bulk tissue의 세포조성 혼합", "평균 효과 기반 biomarker의 개인 예측 한계"]]
      ],
      related: ["ckd-subtypes", "ckd-gwas", "ckd-multiomics"],
      papers: [["Howard et al. 2019, Nat Neurosci 22:343–352", "https://doi.org/10.1038/s41593-018-0326-7"], ["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]]
    },
    {
      id: "ckd-comorbidity", section: "course",
      title: "주요 동반질환과 사망 위험은 무엇인가?",
      aliases: ["comorbidity", "suicide", "anxiety", "cardiovascular", "동반질환", "사망"],
      summary: "불안·물질사용·심혈관·대사질환과의 양방향 중첩 · 직접 사망원인보다 자살·신체질환·기능저하를 통한 부담",
      facts: [
        ["GBD 직접 사망", "depressive disorders에 직접 귀속한 deaths·YLL 없음", "IHME GBD 2021", "2021", false],
        ["유전 상관", "schizophrenia rg=0.32 · bipolar disorder rg=0.33", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["DALYs", "56.33 million · depressive disorders", "IHME GBD 2021", "2021", false]
      ],
      body: [
        ["정신질환 동반", ["불안장애·PTSD·물질사용과 높은 임상 중첩", "schizophrenia·bipolar disorder와 공통 유전 신호", "양극성 우울 감별 실패 → 치료경로 차이"]],
        ["신체질환 동반", ["심혈관·대사·통증·염증성 질환과 양방향 연관", "수면·활동·약물·stress physiology의 매개", "신체질환 치료순응과 기능 회복의 상호영향"]],
        ["사망·안전", ["GBD depressive disorders → 직접 deaths·YLL 미귀속", "자살사고·행동 위험 → 모든 평가 단계의 직접 확인", "MDD 자체 사망률과 특정 사망원인의 인과 귀속 구분"]]
      ],
      related: ["ckd-burden", "ckd-differential", "ckd-treatment-resistance-safety"],
      papers: [["Howard et al. 2019, Nat Neurosci 22:343–352", "https://doi.org/10.1038/s41593-018-0326-7"], ["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]],
      links: [["IHME GBD 2021 depressive disorders factsheet", "https://www.healthdata.org/sites/default/files/disease_and_injury/gbd_2021/topic_pdf/cause/567.pdf"]]
    },    {
      id: "ckd-symptoms", section: "dx",
      title: "핵심 증상과 초기 신호는 무엇인가?",
      aliases: ["depressed mood", "anhedonia", "sleep", "appetite", "suicidal ideation", "증상"],
      summary: "우울 기분 또는 무쾌감이 핵심 · 수면·식욕·정신운동·에너지·죄책감·집중·자살사고의 조합과 기능 손상",
      facts: [
        ["증상 수", "9개 중 5개 이상", "APA DSM-5-TR", "2022", false],
        ["기간", "같은 2주 동안 거의 매일", "APA DSM-5-TR", "2022", false],
        ["필수 핵심", "우울 기분 또는 흥미·즐거움 상실 중 1개 이상", "APA DSM-5-TR", "2022", false]
      ],
      body: [
        ["핵심 정서·인지", ["지속적 우울 기분 · 흥미·즐거움 상실", "무가치감·과도한 죄책감·집중곤란·우유부단", "죽음·자살에 대한 반복적 사고"]],
        ["신체·행동", ["불면 또는 과다수면", "식욕·체중 변화 · 피로·에너지 저하", "정신운동 초조 또는 지연"]],
        ["초기 확인", ["평소 기능 대비 변화와 지속성", "학교·직장·관계·자기관리의 손상", "자살사고·계획·수단·보호요인의 즉시 평가"]]
      ],
      related: ["ckd-criteria", "ckd-assessment", "ckd-prodrome"],
      papers: [["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]],
      links: [["APA DSM-5-TR", "https://www.psychiatry.org/psychiatrists/practice/dsm"]]
    },
    {
      id: "ckd-criteria", section: "dx",
      title: "현재 진단 기준은 무엇인가?",
      aliases: ["DSM-5-TR", "ICD-11", "CDDR", "diagnostic criteria", "진단 기준"],
      summary: "DSM-5-TR 2022와 ICD-11 CDDR 2024가 최신 임상 기준 · 증상 문턱·기능 손상·배제진단을 함께 평가",
      facts: [
        ["DSM 최신판", "DSM-5-TR · 2022-03-18 발행", "American Psychiatric Association", "2022", false],
        ["DSM MDE 문턱", "2주 · 9개 중 5개 이상 · 핵심 1개 이상", "APA DSM-5-TR", "2022", false],
        ["ICD-11 발효", "2022-01-01", "World Health Organization", "2022", false],
        ["ICD-11 CDDR", "Clinical Descriptions and Diagnostic Requirements 발행", "World Health Organization", "2024", false],
        ["ICD 개정 방식", "digital classification의 연례 release", "WHO ICD-11 implementation", "2026", false]
      ],
      body: [
        ["DSM-5-TR", ["같은 2주 동안 9개 증상 중 5개 이상", "우울 기분 또는 무쾌감 중 최소 1개", "임상적 고통·기능 손상 + 물질·의학적 원인·양극성 경과 배제"]],
        ["ICD-11", ["2022년 1월 발효 · CDDR 2024 발행", "우울삽화의 증상·중증도·경과 기반 분류", "디지털 연례 release → 고정된 장기 개정주기보다 지속 보정"]],
        ["판본 사용", ["연구·진료·청구체계별 코드와 판본 확인", "HIRA F32·F33 청구와 ICD-11 임상기준의 직접 혼용 금지", "DSM-5-TR·ICD-11 간 용어·threshold 차이 명시"]]
      ],
      related: ["ckd-definition", "ckd-differential", "ckd-dx-severity"],
      papers: [["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]],
      links: [["APA DSM-5-TR release", "https://www.psychiatry.org/news-room/news-releases/apa-releases-diagnostic-and-statistical-manual-of"], ["WHO ICD-11 CDDR", "https://www.who.int/publications/i/item/9789240077263"], ["WHO ICD-11 implementation", "https://www.who.int/standards/classifications/frequently-asked-questions/icd-11-implementation"]]
    },
    {
      id: "ckd-assessment", section: "dx",
      title: "어떤 평가도구와 검사를 사용하는가?",
      aliases: ["PHQ-9", "HAM-D", "QIDS-SR", "MADRS", "screening", "평가도구"],
      summary: "구조화 임상면담이 진단의 중심 · PHQ-9·HAM-D·QIDS-SR·MADRS는 선별·중증도·반응 추적 도구 · 검사는 이차 원인 감별용",
      facts: [
        ["PHQ-9", "9문항 · DSM 증상 기반 자기보고", "Kroenke et al., J Gen Intern Med 16:606–613", "2001", false],
        ["STAR*D 평가", "HAM-D·QIDS-SR 병행 → 관해율 28%·33%", "Trivedi et al., Am J Psychiatry 163:28–40", "2006", false],
        ["확진 방식", "임상면담 + 기능 손상·배제진단", "APA DSM-5-TR", "2022", false]
      ],
      body: [
        ["임상 평가", ["현재 증상·기간·기능 손상·과거 삽화", "조증·경조증·정신병·물질사용·약물 노출", "자살사고·계획·수단·과거 시도·보호요인"]],
        ["척도", ["PHQ-9 → 선별과 중증도 추적", "HAM-D·MADRS → clinician-rated 변화", "QIDS-SR → 자기보고 기반 증상 변화"]],
        ["검사의 역할", ["갑상선·빈혈·대사·약물 관련성 등 임상 맥락별 선택", "단일 혈액·영상·유전검사로 MDD 확진 불가", "척도 cutoff와 임상진단의 동일시 금지"]]
      ],
      related: ["ckd-symptoms", "ckd-criteria", "ckd-response-remission"],
      papers: [["Kroenke et al. 2001, J Gen Intern Med 16:606–613", "https://doi.org/10.1046/j.1525-1497.2001.016009606.x"], ["Trivedi et al. 2006, Am J Psychiatry 163:28–40", "https://doi.org/10.1176/appi.ajp.163.1.28"]]
    },
    {
      id: "ckd-dx-severity", section: "dx",
      title: "감별진단과 중증도는 어떻게 판단하는가?",
      aliases: ["severity", "differential diagnosis", "psychotic depression", "suicide risk", "중증도"],
      summary: "증상 수만이 아니라 강도·기능 손상·자살위험·psychotic features·긴장증을 종합 · 양극성·물질·신체질환 경로 우선 감별",
      facts: [
        ["DSM 중증도", "경도·중등도·중증도 + psychotic features·관해 상태", "APA DSM-5-TR", "2022", false],
        ["핵심 기간", "2주", "APA DSM-5-TR", "2022", false],
        ["PHQ-9 용도", "선별·중증도 추적 · 단독 확진 불가", "Kroenke et al., J Gen Intern Med 16:606–613", "2001", false]
      ],
      body: [
        ["감별 순서", ["조증·경조증 과거력 → bipolar spectrum", "물질·약물·신체질환과 증상 시작의 시간 관계", "정신병 증상의 기분삽화 안팎 지속 여부"]],
        ["중증도 축", ["증상 수·강도·지속시간", "학교·직장·관계·자기관리의 기능 손상", "psychotic features·긴장증·영양·수분 섭취 저하"]],
        ["안전 우선", ["자살사고·의도·계획·수단·과거 시도", "즉각 위험 시 응급평가·보호환경", "척도 총점보다 개별 자살 문항과 임상 판단 우선"]]
      ],
      related: ["ckd-differential", "ckd-symptoms", "ckd-standard-treatment"],
      papers: [["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]],
      links: [["APA DSM-5-TR", "https://www.psychiatry.org/psychiatrists/practice/dsm"]]
    },
    {
      id: "ckd-standard-treatment", section: "tx",
      title: "현재 표준 치료는 무엇인가?",
      aliases: ["psychotherapy", "antidepressant", "SSRI", "SNRI", "ECT", "rTMS", "표준 치료"],
      summary: "중증도·선호·과거반응에 따른 psychotherapy·항우울제 선택 또는 병합 · 중증·정신병·긴급 상황에서 ECT 등 생물학적 치료",
      facts: [
        ["NICE 현행 지침", "NG222 · 2022-06-29 발행", "National Institute for Health and Care Excellence", "2022", false],
        ["CANMAT 현행 지침", "2023 Update · 2024년 출판", "Lam et al., Can J Psychiatry 69:641–687", "2024", false],
        ["한국 약물 알고리듬", "KMAP-DD 2025 · fifth revision", "Kim et al., Clin Psychopharmacol Neurosci 23:683–706", "2025", false]
      ],
      body: [
        ["초기 치료", ["psychotherapy · antidepressant · 환자 선호 기반 공동결정", "중등도·중증 또는 반복성 → 약물과 psychotherapy 병합 고려", "수면·활동·사회기능·자살위험의 동시 관리"]],
        ["약물 전략", ["SSRI·SNRI 등 1차 계열 → 효과·부작용·동반질환·상호작용에 따른 선택", "충분한 용량·기간·순응도 확인 → switch·augmentation·combination", "급작스러운 중단보다 tapering과 재발 모니터링"]],
        ["비약물 생물학적 치료", ["ECT → 중증·psychotic depression·긴급한 생명위험", "rTMS → 비침습적 neuromodulation 선택지", "ketamine·esketamine → 치료저항 상황의 속효성 선택지 + 감독"]]
      ],
      related: ["ckd-response-remission", "ckd-rapid-treatment", "ckd-guideline-update"],
      papers: [["Lam et al. 2024, Can J Psychiatry 69:641–687", "https://doi.org/10.1177/07067437241245384"], ["Kim et al. 2025, Clin Psychopharmacol Neurosci 23:683–706", "https://doi.org/10.9758/cpn.25.1328"]],
      links: [["NICE NG222", "https://www.nice.org.uk/guidance/ng222"], ["VA/DoD MDD CPG 2022", "https://www.healthquality.va.gov/guidelines/MH/mdd/"]]
    },
    {
      id: "ckd-response-remission", section: "tx",
      title: "항우울제의 반응률과 관해율은 어느 정도인가?",
      aliases: ["STAR*D", "citalopram", "response rate", "remission rate", "반응률", "관해율"],
      summary: "STAR*D citalopram 1단계 반응 47%·관해 28% 또는 33% · 척도·분모·치료단계에 따른 값 차이로 혼용 금지",
      facts: [
        ["표본", "2,876명 · citalopram 1단계", "Trivedi et al., Am J Psychiatry 163:28–40", "2006", false],
        ["반응률", "47% · QIDS-SR 기준", "Trivedi et al., Am J Psychiatry 163:28–40", "2006", false],
        ["관해율", "28% · HAM-D 기준", "Trivedi et al., Am J Psychiatry 163:28–40", "2006", false],
        ["관해율", "33% · QIDS-SR 기준", "Trivedi et al., Am J Psychiatry 163:28–40", "2006", false],
        ["시간", "다수의 반응·관해가 8주 이후", "Trivedi et al., Am J Psychiatry 163:28–40", "2006", false]
      ],
      body: [
        ["1단계 결과", ["실제진료형 STAR*D 표본 2,876명·citalopram", "QIDS-SR 반응 47%", "관해 HAM-D 28%·QIDS-SR 33%"]],
        ["측정 차이", ["반응 → 기준점 대비 증상감소", "관해 → 특정 척도 cutoff 이하", "HAM-D 28%와 QIDS-SR 33%의 선택·합산 금지"]],
        ["적용 한계", ["개방형 단계 연구·복잡한 실제진료 표본", "약물·단계·측정시점이 다른 연구 간 직접 비교 제한", "초기 4주 무반응만으로 성급한 실패 판정 주의"]]
      ],
      related: ["ckd-standard-treatment", "ckd-course", "ckd-treatment-resistance-safety"],
      papers: [["Trivedi et al. 2006, Am J Psychiatry 163:28–40", "https://doi.org/10.1176/appi.ajp.163.1.28"]]
    },
    {
      id: "ckd-rapid-treatment", section: "tx",
      title: "속효성 치료는 무엇을 바꾸었는가?",
      aliases: ["ketamine", "esketamine", "rapid acting antidepressant", "AMPA", "mTORC1", "BDNF"],
      summary: "ketamine의 하루 내 반응과 esketamine 병합의 4주 효과 → monoamine 농도보다 glutamate–AMPA·mTORC1·BDNF·synaptic plasticity의 시간축 강조",
      facts: [
        ["ketamine 표본", "무작위 이중눈가림 crossover · 18명", "Zarate et al., Arch Gen Psychiatry 63:856–864", "2006", false],
        ["ketamine 1일 반응", "71%", "Zarate et al., Arch Gen Psychiatry 63:856–864", "2006", false],
        ["ketamine 1일 관해", "29%", "Zarate et al., Arch Gen Psychiatry 63:856–864", "2006", false],
        ["ketamine 1주 반응 유지", "35%", "Zarate et al., Arch Gen Psychiatry 63:856–864", "2006", false],
        ["esketamine 28일 반응", "69.3% 대 52.0% · 병합군 대 active comparator", "Popova et al., Am J Psychiatry", "2019", false],
        ["esketamine 28일 관해", "52.5% 대 31.0%", "Popova et al., Am J Psychiatry", "2019", false]
      ],
      body: [
        ["임상 시간축", ["ketamine 단회 투여 후 1일 반응 71%·관해 29%", "1주 반응 유지 35% → 빠른 시작과 지속성의 분리", "esketamine + 새 경구 항우울제 28일 반응 69.3%"]],
        ["가소성 경로", ["만성 stress → PFC·hippocampus BDNF·mTORC1·GluA1 저하와 spine 소실", "ketamine → glutamate surge·AMPA 우세·mTORC1·BDNF", "새 spine 제거 실험 → 지속적 행동효과 소실 · 동물 인과근거"]],
        ["주의", ["소규모 ketamine crossover와 대규모 esketamine 병합시험의 직접 비교 금지", "TRANSFORM-2 active comparator 반응 52.0% → 높은 대조군 반응", "spine 증가만으로 치료효과 단정 금지 · cocaine도 spine 증가"]]
      ],
      related: ["ckd-monoamine-model", "ckd-standard-treatment", "ckd-treatment-resistance-safety"],
      papers: [["Zarate et al. 2006, Arch Gen Psychiatry 63:856–864", "https://doi.org/10.1001/archpsyc.63.8.856"], ["Popova et al. 2019, Am J Psychiatry", "https://doi.org/10.1176/appi.ajp.2019.19020172"], ["Moda-Sava et al. 2019, Science 364:eaat8078", "https://doi.org/10.1126/science.aat8078"], ["Liao et al. 2025, Nat Rev Neurosci 26:101–114", "https://doi.org/10.1038/s41583-024-00876-0"]]
    },
    {
      id: "ckd-treatment-resistance-safety", section: "tx",
      title: "치료저항·재발·부작용 문제는 무엇인가?",
      aliases: ["treatment resistant depression", "TRD", "relapse", "adverse effect", "suicidality", "치료저항"],
      summary: "불충분 반응·잔류증상·재발·중단증상의 연속선 · 젊은 성인의 항우울제 suicidality 경고와 ketamine계 감독 필요 · 국내 TRD 규모는 정의 기반 재분석 필요",
      facts: [
        ["일반 치료 비효율", "약 30–50%에서 승인 치료의 불충분 효과", "Hodes et al., Nat Neurosci 18:1386–1393", "2015", false],
        ["18–24세 suicidality", "항우울제 치료 1,000명당 5건 추가 · thoughts/behavior", "FDA antidepressant class labeling", "2014", false],
        ["한국 TRD 규모", "확인 필요 — 충분한 용량·기간·치료 단계 정의를 적용한 HIRA/NHIS 재분석", "직접 분석 필요", "", true],
        ["KMAP-DD TRD", "2025판에서 임상적 정의·약물 전략 갱신", "Kim et al., Clin Psychopharmacol Neurosci 23:683–706", "2025", false]
      ],
      body: [
        ["치료저항의 구성", ["적절한 약물·용량·기간·순응도 확인 전 pseudo-resistance 배제", "부분반응·잔류증상·완전 무반응의 분리", "양극성·물질·불안·신체질환 동반의 재평가"]],
        ["안전성", ["18–24세 → 치료 초기 suicidality 모니터링 강화", "경고 지표는 suicidal thoughts/behavior · completed suicide와 혼용 금지", "ketamine·esketamine → dissociation·혈압·오남용 위험의 감독"]],
        ["염증 표적의 제한", ["anti-inflammatory benefit → high-CRP subset 신호", "NSAID 효과 modest–negligible·일부 SSRI 상호작용 신호", "전체 MDD의 표준 항염증 치료로 일반화 금지"]]
      ],
      related: ["ckd-response-remission", "ckd-course", "ckd-drug-update"],
      papers: [["Stone et al. 2009, BMJ 339:b2880", "https://doi.org/10.1136/bmj.b2880"], ["Kim et al. 2025, Clin Psychopharmacol Neurosci 23:683–706", "https://doi.org/10.9758/cpn.25.1328"], ["Hodes et al. 2015, Nat Neurosci 18:1386–1393", "https://doi.org/10.1038/nn.4113"]],
      links: [["FDA antidepressant labeling", "https://www.accessdata.fda.gov/drugsatfda_docs/label/2014/085966s095%2C085969s084%2C085968s096%2C085971s075%2C085967s076%2C085970s072lbl.pdf"]]
    },    {
      id: "ckd-gwas", section: "omics",
      title: "GWAS는 어떤 유전 구조를 보여주는가?",
      aliases: ["GWAS", "polygenic", "SNP heritability", "genetic correlation", "다유전자"],
      summary: "Howard 2019의 102개 변이에서 2025 trans-ancestry GWAS의 635 loci로 확대 · 작은 효과의 다유전자 구조와 synaptic·neuronal 경로",
      facts: [
        ["Howard discovery", "807,553명", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["Howard 신호", "102개 독립 변이 · 87개 replication 재현", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["Howard SNP 유전력", "8.9%", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["2025 표본", "688,808 cases · 4,364,225 controls", "Adams et al., Cell 188:640–652.e9", "2025", false],
        ["2025 신호", "697 associations · 635 loci · 293 novel", "Adams et al., Cell 188:640–652.e9", "2025", false],
        ["European PRS", "liability variance 최대 5.8%", "Adams et al., Cell 188:640–652.e9", "2025", false]
      ],
      body: [
        ["다유전자 구조", ["개별 common variant의 작은 효과 · Marx review에서 대부분 OR 1.05 미만", "수백 loci의 누적 → 단일 원인유전자 모형과 불일치", "가족·쌍생아 유전력과 SNP 유전력 사이의 간극"]],
        ["공유 유전", ["Howard 2019 → schizophrenia rg 0.32·bipolar disorder rg 0.33", "neuroticism·insomnia 등과의 공유 신호", "유전 상관 → 동일 질환·직접 인과의 증거와 구분"]],
        ["규모 확대", ["2025 trans-ancestry GWAS → 68만8,808 cases·436만4,225 controls", "635 loci 중 293 novel", "규모 증가와 phenotype·ancestry 구성 변화의 동시 고려"]]
      ],
      related: ["ckd-gene-environment", "ckd-variant-celltype", "ckd-ancestry-sex"],
      papers: [["Howard et al. 2019, Nat Neurosci 22:343–352", "https://doi.org/10.1038/s41593-018-0326-7"], ["Adams et al. 2025, Cell 188:640–652.e9", "https://doi.org/10.1016/j.cell.2024.12.002"], ["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]]
    },
    {
      id: "ckd-variant-celltype", section: "omics",
      title: "위험변이는 어느 뇌영역과 세포에서 작동하는가?",
      aliases: ["cell type", "prefrontal cortex", "cortical neuron", "synapse", "variant mapping"],
      summary: "유전 신호의 prefrontal·cortical tissue와 neuron·synapse enrichment → 세포 맥락의 후보 · variant-to-gene 인과 연결은 별도 검증 대상",
      facts: [
        ["조직 enrichment", "prefrontal·cortical tissue", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["세포·기능 enrichment", "CNS neuron · synapse·neurotransmission", "Howard et al., Nat Neurosci 22:343–352", "2019", false],
        ["대표 유전자", "DRD2·CELF4·ELAVL2 등", "Marx et al., Nat Rev Dis Primers 9:44", "2023", false]
      ],
      body: [
        ["조직 수준", ["partitioned heritability → prefrontal·cortical tissue 강조", "뇌영역 enrichment → 모든 locus의 해당 영역 작동을 의미하지 않음", "bulk 조직 신호 안의 세포조성 영향"]],
        ["세포·경로 수준", ["CNS neuron·synaptic structure·neurotransmission의 수렴", "면역·염증 관련 단백질 신호도 병렬", "neuronal 중심과 systemic immune 축의 배타적 선택 불필요"]],
        ["variant-to-function", ["noncoding variant → 조절요소·표적 유전자 연결 필요", "eQTL·chromatin contact·single-cell annotation의 결합", "연관 locus·유전자 근접성·인과유전자의 구분"]]
      ],
      related: ["ckd-gwas", "ckd-multiomics", "ckd-new-method"],
      papers: [["Howard et al. 2019, Nat Neurosci 22:343–352", "https://doi.org/10.1038/s41593-018-0326-7"], ["Marx et al. 2023, Nat Rev Dis Primers 9:44", "https://doi.org/10.1038/s41572-023-00454-1"]]
    },
    {
      id: "ckd-multiomics", section: "omics",
      title: "transcriptome·epigenome·single-cell 연구는 무엇을 보여주는가?",
      aliases: ["transcriptome", "epigenome", "single nucleus", "multi-omics", "PsychENCODE", "omics"],
      summary: "mPFC 중심의 재현 신호와 neuronal·non-neuronal cell state 변화 · immune·synaptic·stress hormone 경로의 동시 등장 · omics 간 낮은 일치",
      facts: [
        ["분석 뇌영역", "central amygdala·dentate gyrus·mPFC", "Daskalakis et al., Science 384:eadh3707", "2024", false],
        ["뇌–혈액 확장", "UK Biobank 50,000명 초과", "Daskalakis et al., Science 384:eadh3707", "2024", false],
        ["핵심 영역", "두 독립 cohort에서 mPFC genes·exons 신호 재현", "Daskalakis et al., Science 384:eadh3707", "2024", false],
        ["paired 뇌–혈액 일치도", "확인 필요 — 동일 개인 paired tissue·blood 종단자료 분석", "직접 분석 필요", "", true]
      ],
      body: [
        ["뇌영역 multi-omics", ["central amygdala·dentate gyrus·mPFC 비교", "mPFC genes·exons → 두 독립 cohort의 재현 신호 중심", "immune function·neuronal/synaptic regulation·stress hormone 경로"]],
        ["세포 해상도", ["dorsolateral PFC single-nucleus RNA-seq", "neuronal·non-neuronal cell type의 질환 관련 상태", "bulk 평균 변화와 세포비율·세포상태 변화의 분리"]],
        ["통합 한계", ["transcriptome·epigenome·proteome 사이 낮은 concordance", "사후뇌 질환상태·치료·사망 전 요인의 혼입", "혈액 proxy와 뇌 질환과정의 개인별 직접 대응 미확보"]]
      ],
      related: ["ckd-systemic-stress", "ckd-variant-celltype", "ckd-new-data"],
      papers: [["Daskalakis et al. 2024, Science 384:eadh3707", "https://doi.org/10.1126/science.adh3707"]]
    },
    {
      id: "ckd-ancestry-sex", section: "omics",
      title: "ancestry와 성차는 결과를 어떻게 바꾸는가?",
      aliases: ["ancestry", "sex differences", "PRS portability", "female", "성차", "인종"],
      summary: "여성의 높은 임상 위험과 stress circuit·immune 기전 차이 · 유럽계 중심 발견에서 trans-ancestry 확장 중이나 한국인 PRS 외부검증은 미확보",
      facts: [
        ["2025 diverse-ancestry subset", "160,611 cases · 1,001,890 controls", "Adams et al., Cell 188:640–652.e9", "2025", false],
        ["European PRS", "liability variance 최대 5.8%", "Adams et al., Cell 188:640–652.e9", "2025", false],
        ["한국 12개월 유병률", "여성 2.4% · 남성 1.1%", "국립정신건강센터 정신건강실태조사", "2021", false],
        ["한국인 PRS 설명력", "확인 필요 — 독립 한국인 임상 cohort 외부검증", "직접 분석 필요", "", true]
      ],
      body: [
        ["ancestry", ["Howard 2019 → 유럽계 중심 · 전이성 제약", "Adams 2025 → diverse-ancestry subset 16만611 cases·100만1,890 controls", "후속 기전분석 일부 → reference resource 제약으로 유럽계 중심"]],
        ["성차", ["여성의 더 높은 조사 유병률과 진료 인원", "CRF1 locus coeruleus signaling·NAc DNMT3A·microglia 반응의 성별 차이 후보", "기전 근거의 상당 부분 → 동물·전임상"]],
        ["해석 한계", ["sex-stratified genomics의 표본력 부족", "European PRS 5.8%를 한국인 성능으로 전환 금지", "sex·gender·사회적 노출의 분석 축 분리"]]
      ],
      related: ["ckd-demography", "ckd-gwas", "ckd-new-data"],
      papers: [["Bangasser & Cuarenta 2021, Nat Rev Neurosci 22:674–684", "https://doi.org/10.1038/s41583-021-00513-0"], ["Adams et al. 2025, Cell 188:640–652.e9", "https://doi.org/10.1016/j.cell.2024.12.002"]]
    },
    {
      id: "ckd-guideline-update", section: "now",
      title: "진료 권고는 최근 어떻게 바뀌었는가?",
      aliases: ["guideline", "NICE NG222", "CANMAT 2023", "KMAP-DD 2025", "VA DoD"],
      summary: "NICE NG222 2022·CANMAT 2023 Update·KMAP-DD 2025가 현행 축 · 고정 주기보다 근거·안전성 사건에 따른 갱신",
      facts: [
        ["NICE", "NG222 · 2022-06-29 발행 · 2026-01-30 검토", "National Institute for Health and Care Excellence", "2022–2026", false],
        ["NICE 이전판", "CG90 · 2009-10 발행", "National Institute for Health and Care Excellence", "2009", false],
        ["CANMAT", "2023 Update · 2024 출판 · 이전 종합판 2016", "Lam et al., Can J Psychiatry 69:641–687", "2023–2024", false],
        ["VA/DoD", "MDD CPG version 4.0 · third update · 36 recommendations", "Department of Veterans Affairs/Department of Defense", "2022", false],
        ["KMAP-DD", "2025 fifth revision · 2002년 개발 후 5회 개정", "Kim et al., Clin Psychopharmacol Neurosci 23:683–706", "2025", false]
      ],
      body: [
        ["현행판", ["NICE NG222 → 2022 발행·2026 검토에서 권고 변경 없음", "CANMAT 2023 Update → 2016판 이후 7년 간격의 종합 갱신", "KMAP-DD 2025 → 한국 임상 expert consensus의 fifth revision"]],
        ["변화의 방향", ["환자 선호·공동의사결정·단계별 치료 선택", "psychotherapy·약물·neuromodulation·속효성 치료의 통합", "TRD·부작용·동반질환·special population 세분화"]],
        ["개정주기 해석", ["NICE → 고정 주기보다 surveillance·사건 기반", "CANMAT 2016→2023·KMAP 2002 이후 5회 개정 → 역사적 간격", "과거 간격을 다음 개정 예정일로 간주 금지"]]
      ],
      related: ["ckd-standard-treatment", "ckd-drug-update", "ckd-criteria"],
      papers: [["Lam et al. 2024, Can J Psychiatry 69:641–687", "https://doi.org/10.1177/07067437241245384"], ["Kim et al. 2025, Clin Psychopharmacol Neurosci 23:683–706", "https://doi.org/10.9758/cpn.25.1328"]],
      links: [["NICE NG222", "https://www.nice.org.uk/guidance/ng222"], ["VA/DoD MDD CPG", "https://www.healthquality.va.gov/guidelines/MH/mdd/"]]
    },
    {
      id: "ckd-drug-update", section: "now",
      title: "새 치료제와 안전성 정보는 무엇인가?",
      aliases: ["esketamine", "dextromethorphan bupropion", "Auvelity", "GEMINI", "신약", "안전성"],
      summary: "esketamine의 속효성 경로와 2022 dextromethorphan–bupropion 승인 · GEMINI 6주 반응 54.0%·관해 39.5% · 각 약제의 감독·상호작용 확인",
      facts: [
        ["dextromethorphan–bupropion", "미국 FDA MDD 승인 · 2022-08-18", "US Food and Drug Administration", "2022", false],
        ["GEMINI 6주 반응", "54.0% 대 placebo 34.0%", "Tabuteau et al., J Clin Psychiatry 83:21m14345", "2022", false],
        ["GEMINI 6주 관해", "39.5% 대 placebo 17.3%", "Tabuteau et al., J Clin Psychiatry 83:21m14345", "2022", false],
        ["esketamine 28일 반응", "69.3% 대 active comparator 52.0%", "Popova et al., Am J Psychiatry", "2019", false],
        ["esketamine 28일 관해", "52.5% 대 31.0%", "Popova et al., Am J Psychiatry", "2019", false]
      ],
      body: [
        ["새 기전", ["esketamine → NMDA modulation·감독하 비강 투여", "dextromethorphan–bupropion → NMDA·sigma-1 관련 작용 + CYP2D6 억제를 통한 노출 조절", "기전 다양화 → monoamine 단일경로 밖의 치료 선택"]],
        ["효과 수치", ["GEMINI 6주 반응 54.0%·placebo 34.0%", "GEMINI 6주 관해 39.5%·placebo 17.3%", "TRANSFORM-2 28일 반응 69.3%·active comparator 52.0%"]],
        ["안전성·범위", ["esketamine → dissociation·sedation·혈압·오남용 감시", "dextromethorphan–bupropion → seizure risk·drug interaction·bupropion 금기 확인", "zuranolone의 미국 승인 적응증은 postpartum depression → 일반 MDD와 혼용 금지"]]
      ],
      related: ["ckd-rapid-treatment", "ckd-guideline-update", "ckd-treatment-resistance-safety"],
      papers: [["Tabuteau et al. 2022, J Clin Psychiatry 83:21m14345", "https://doi.org/10.4088/JCP.21m14345"], ["Popova et al. 2019, Am J Psychiatry", "https://doi.org/10.1176/appi.ajp.2019.19020172"]],
      links: [["FDA dextromethorphan–bupropion approval package", "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2023/215430Orig1s000Approv.pdf"]]
    },
    {
      id: "ckd-new-data", section: "now",
      title: "새 코호트·오믹스 데이터는 무엇이 생겼는가?",
      aliases: ["cohort", "trans ancestry GWAS", "PsychENCODE", "multi-omics", "biobank", "새 데이터"],
      summary: "2025 trans-ancestry GWAS 505만여 명과 2024 뇌 3영역·single-nucleus·UK Biobank 5만 명 초과 통합 → 규모와 조직·세포 해상도의 동시 확대",
      facts: [
        ["2025 GWAS 총표본", "688,808 cases · 4,364,225 controls", "Adams et al., Cell 188:640–652.e9", "2025", false],
        ["2025 loci", "697 associations · 635 loci · 293 novel", "Adams et al., Cell 188:640–652.e9", "2025", false],
        ["2024 multi-omics 영역", "central amygdala·dentate gyrus·mPFC", "Daskalakis et al., Science 384:eadh3707", "2024", false],
        ["2024 brain–blood 분석", "UK Biobank 50,000명 초과", "Daskalakis et al., Science 384:eadh3707", "2024", false]
      ],
      body: [
        ["유전 데이터", ["trans-ancestry GWAS → 총 68만8,808 cases·436만4,225 controls", "697 associations·635 loci·293 novel", "diverse-ancestry subset 포함 → 이전 유럽계 편중 일부 완화"]],
        ["뇌·세포 데이터", ["central amygdala·dentate gyrus·mPFC multi-omics", "dorsolateral PFC single-nucleus RNA-seq", "UK Biobank 5만 명 초과 brain–blood intersection"]],
        ["사용 전 점검", ["case definition·ancestry·조직 품질·치료 노출", "사후뇌 cross-sectional state와 발병 위험의 분리", "요약통계 공개범위·동의·data access 조건"]]
      ],
      related: ["ckd-gwas", "ckd-multiomics", "ckd-new-method"],
      papers: [["Adams et al. 2025, Cell 188:640–652.e9", "https://doi.org/10.1016/j.cell.2024.12.002"], ["Daskalakis et al. 2024, Science 384:eadh3707", "https://doi.org/10.1126/science.adh3707"]]
    },
    {
      id: "ckd-new-method", section: "now",
      title: "새로 쓸 수 있게 된 분석 기법은 무엇인가?",
      aliases: ["single nucleus RNA-seq", "multiomic factor", "fine mapping", "colocalization", "PRS", "분석 기법"],
      summary: "single-nucleus·multi-omics factor·network·fine-mapping·PRS의 결합 → 조직 평균에서 세포상태·위험변이·말초 proxy를 분리하는 분석",
      facts: [
        ["single-nucleus 적용", "dorsolateral PFC의 neuronal·non-neuronal 상태 분해", "Daskalakis et al., Science 384:eadh3707", "2024", false],
        ["multi-omics 통합", "factor·gene network 분석", "Daskalakis et al., Science 384:eadh3707", "2024", false],
        ["European PRS", "liability variance 최대 5.8%", "Adams et al., Cell 188:640–652.e9", "2025", false],
        ["한국인 임상 전이성", "확인 필요 — 독립 한국인 cohort의 calibration·discrimination·utility 평가", "직접 분석 필요", "", true]
      ],
      body: [
        ["세포·분자 통합", ["single-nucleus RNA-seq → 세포유형별 상태", "multi-omics factor·gene network → 층위 간 공통 축", "bulk deconvolution → 세포비율 변화와 세포내 변화의 분리"]],
        ["유전 인과화", ["multi-ancestry fine-mapping → LD 차이를 통한 후보변이 축소", "colocalization·eQTL → GWAS와 조절신호의 공유 평가", "PRS → 다수 작은 효과의 합산·외부 cohort 검증"]],
        ["검증 기준", ["discovery와 replication의 분리", "ancestry·sex·phenotype별 calibration", "통계 설명력과 임상 효용의 구분"]]
      ],
      related: ["ckd-variant-celltype", "ckd-new-data", "ckd-ancestry-sex"],
      papers: [["Daskalakis et al. 2024, Science 384:eadh3707", "https://doi.org/10.1126/science.adh3707"], ["Adams et al. 2025, Cell 188:640–652.e9", "https://doi.org/10.1016/j.cell.2024.12.002"]]
    }
  ];

  const glossaryTerms = {
    "MDD": { key: "mdd", definition: "Major depressive disorder. 주요우울장애." },
    "anhedonia": { key: "anhedonia", definition: "이전에 즐겁던 활동에서 흥미·즐거움이 크게 줄어든 상태." },
    "HPA": { key: "hpa", definition: "Hypothalamic–pituitary–adrenal axis. 스트레스 호르몬 조절축." },
    "microglia": { key: "microglia", definition: "중추신경계의 상주 면역세포." },
    "cytokine": { key: "cytokine", definition: "면역세포 사이 신호를 전달하는 작은 단백질." },
    "BDNF": { key: "bdnf", definition: "Brain-derived neurotrophic factor. 신경 생존과 시냅스 가소성 조절 인자." },
    "AMPA": { key: "ampa", definition: "빠른 흥분성 전달을 담당하는 glutamate 수용체." },
    "mTORC1": { key: "mtorc", definition: "단백질 합성과 synapse 형성에 관여하는 신호복합체." },
    "GWAS": { key: "gwas", definition: "Genome-wide association study. 전 게놈 연관분석." },
    "PRS": { key: "prs", definition: "Polygenic risk score. 다수 변이 효과의 가중합." },
    "PHQ-9": { key: "phq", definition: "우울 증상 선별·중증도 추적용 9문항 자기보고 척도." },
    "TRD": { key: "trd", definition: "Treatment-resistant depression. 적절한 치료에도 충분히 반응하지 않은 우울증." },
    "DALY": { key: "daly", definition: "Disability-adjusted life year. 조기사망과 장애를 합한 질병부담 단위." },
    "remission": { key: "remission", definition: "증상이 임상적으로 최소 수준에 도달한 관해 상태." }
  };
  const glossaryPattern = /(^|[^A-Za-z0-9가-힣])(MDD|anhedonia|HPA|microglia|cytokine|BDNF|AMPA|mTORC1|GWAS|PRS|PHQ-9|TRD|DALY|remission)(?=$|[^A-Za-z0-9])/gi;

  return { meta: meta, acts: acts, sections: sections, articles: articleList, glossaryTerms: glossaryTerms, glossaryPattern: glossaryPattern };
})();