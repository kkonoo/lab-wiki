window.DISEASE = (function () {
  const meta = { id: 'asd', title: "Autism Spectrum Disorder (ASD)", domain: "Neuro" };

  const acts = [
    { id: 'A', num: "01", en: "DEFINITION · EPIDEMIOLOGY", title: "무엇인가", accent: "#6f3a55", blurb: "정의·스펙트럼 · 감별 · 세계와 한국의 유병 · 질병부담", sections: ["def", "epi"] },
    { id: 'B', num: "02", en: "CAUSE · COURSE", title: "왜·어떻게", accent: "#315d78", blurb: "유전·환경의 기여 · 변이 계층 · 태아기 시작 · 생애 발달 경로", sections: ["risk", "course"] },
    { id: 'C', num: "03", en: "CLINICAL", title: "임상", accent: "#94553b", blurb: "초기 신호 · 최신 진단 기준 · 선별·평가 · 중재와 생애주기 지원", sections: ["dx", "tx"] },
    { id: 'D', num: "04", en: "RESEARCH", title: "연구", accent: "#1f5d43", blurb: "common·rare·de novo · 비코딩 · 세포·발달 시점 · 최신 권고와 데이터", sections: ["omics", "now"] }
  ];

  const sections = {
    def: { number: "01", title: "정의 · 분류", act: "A", questions: [
      { q: "ASD를 어떻게 정의하고 분류하는가?", note: "신경발달 조건 → 사회적 의사소통 + 제한·반복 행동", article: "ckd-definition" },
      { q: "스펙트럼의 이질성은 무엇을 뜻하는가?", note: "능력·필요 지원 · 언어·인지 · 감각 특성의 조합", article: "ckd-spectrum" },
      { q: "비슷한 발달·정신건강 상태와 무엇이 다른가?", note: "언어장애 · 지적장애 · ADHD · 불안 감별", article: "ckd-differential" },
      { q: "아형 대신 어떤 명시자를 사용하는가?", note: "지적·언어 기능 · 동반 상태 · 지원 수준", article: "ckd-specifiers" }
    ] },
    epi: { number: "02", title: "역학 · 질병부담", act: "A", questions: [
      { q: "세계와 한국에서 얼마나 흔한가?", note: "GBD 모델 · 국제 연구 중앙값 · 한국 조사·청구·등록", article: "ckd-prevalence" },
      { q: "발생률과 측정 유병률은 어떻게 변해 왔는가?", note: "모델 발생률 · 진단 확대 · 포착 체계 변화", article: "ckd-trends" },
      { q: "성별·연령·지역에 따라 어떻게 다른가?", note: "남녀 차이 · 전 생애 · 지역별 자료 공백", article: "ckd-demographics" },
      { q: "건강·기능·사회적 부담은 얼마나 큰가?", note: "DALY · 동반 상태 · 의료비 · 돌봄·서비스 부담", article: "ckd-burden" }
    ] },
    risk: { number: "01", title: "원인 · 위험인자", act: "B", questions: [
      { q: "유전과 환경은 각각 얼마나 기여하는가?", note: "heritability 40–90% · 다요인 구조 · 비결정론", article: "ckd-heritability" },
      { q: "어떤 변이 계층이 위험을 구성하는가?", note: "common polygenic + rare/de novo + CNV", article: "ckd-variant-classes" },
      { q: "산전·주산기 요인은 어떤 방식으로 연관되는가?", note: "부모 연령 · 임신·출생 요인 · MIA · 2-hit", article: "ckd-prenatal-risk" },
      { q: "확립된 오해와 예방 해석의 주의점은 무엇인가?", note: "백신 비인과 · 연관과 인과 구분 · 지원 중심", article: "ckd-misconceptions" }
    ] },
    course: { number: "02", title: "발병 · 진행", act: "B", questions: [
      { q: "생물학적 변화는 언제 시작되는가?", note: "태아기 피질 · GER prenatal bias · mid-fetal neuron", article: "ckd-onset" },
      { q: "발달 경로는 생애 동안 어떻게 달라지는가?", note: "초기 신호 → 기술 획득 · 환경 적합성 · 성인기", article: "ckd-trajectory" },
      { q: "개인마다 표현형과 경과가 다른 이유는 무엇인가?", note: "변이 효과 · 언어·인지 · 동반 상태 · 환경", article: "ckd-heterogeneity" },
      { q: "주요 동반 상태와 사망 위험은 무엇인가?", note: "지적·언어 · ADHD·불안 · 수면·간질 · 안전", article: "ckd-comorbidity" }
    ] },
    dx: { number: "01", title: "진단 · 평가", act: "C", questions: [
      { q: "초기 신호는 무엇인가?", note: "사회적 주의 · 공동주의 · 언어·행동 · 퇴행", article: "ckd-early-signs" },
      { q: "현재 진단 기준은 무엇인가?", note: "DSM-5-TR 2022 · ICD-11 · 두 핵심 영역", article: "ckd-criteria" },
      { q: "선별과 표준화 평가 도구는 어떻게 사용하는가?", note: "18·24개월 선별 · ADOS-2·ADI-R · 임상 판단", article: "ckd-screening" },
      { q: "원인 평가와 유전 검사는 누구에게 필요한가?", note: "발달·신체 평가 → 유전검사 · 증상 기반 EEG·MRI", article: "ckd-etiologic-testing" },
      { q: "진단이 늦거나 누락되는 이유는 무엇인가?", note: "여성 masking · 성인 · 자원·문화 · 도구 한계", article: "ckd-diagnosis-delay" }
    ] },
    tx: { number: "02", title: "중재 · 지원", act: "C", questions: [
      { q: "현재 표준 중재 원칙은 무엇인가?", note: "개별 목표 · 발달·행동·교육 · 가족 참여 · 환경 조정", article: "ckd-standard-care" },
      { q: "조기 발달·행동 중재의 효과는 어느 정도인가?", note: "ESDM RCT · 인지·적응 변화 · 개인차", article: "ckd-early-intervention" },
      { q: "부모 매개 사회적 의사소통 중재의 효과는 무엇인가?", note: "PACT · 상호작용 경로 · 장기 효과", article: "ckd-parent-mediated" },
      { q: "약물은 어떤 표적 증상에 사용하며 안전성은 어떠한가?", note: "핵심 특성 아님 · irritability 표적 · 체중·대사 모니터", article: "ckd-medication" },
      { q: "생애주기 지원은 어떻게 이어지는가?", note: "유아기 → 학교 → 전환기 → 성인 의료·고용", article: "ckd-lifespan-support" }
    ] },
    omics: { number: "01", title: "유전학 · 오믹스", act: "D", questions: [
      { q: "common·rare·de novo 위험은 어떻게 함께 작동하는가?", note: "polygenic 배경 + 큰 효과 변이 · 축 간 수렴 미확정", article: "ckd-common-rare" },
      { q: "de novo 연구는 어떤 유전자와 경로를 지목했는가?", note: "102 genes · GER ∪ NC · synapse ∪ chromatin", article: "ckd-denovo-genes" },
      { q: "비코딩 변이는 무엇을 더하는가?", note: "promoter 집계 신호 · fetal enhancer · causal locus 미지정", article: "ckd-noncoding" },
      { q: "위험은 어느 세포·발달 시점·집단으로 수렴하는가?", note: "mid-fetal neuron · 성차 · ancestry 편향", article: "ckd-cell-timing" }
    ] },
    now: { number: "02", title: "최신 동향", act: "D", questions: [
      { q: "진단·진료 권고는 최근 어떻게 바뀌었는가?", note: "DSM-5-TR · ICD-11 · 한국 2024 지침 · NICE 감시", article: "ckd-guideline-update" },
      { q: "치료제와 안전성 정보는 무엇이 달라졌는가?", note: "핵심 특성 치료제 부재 · 표적 증상 · 장기 모니터", article: "ckd-drug-update" },
      { q: "새 코호트·단일세포 데이터는 무엇을 보여주는가?", note: "Wamsley 2024 · state 변화 · Yap 2024 조성", article: "ckd-new-data" },
      { q: "새로 쓸 수 있게 된 분석 기법은 무엇인가?", note: "single-cell GRN · methylomic deconvolution · organoid", article: "ckd-new-method" }
    ] }
  };

  const articleList = [
    {
      id: "ckd-definition", section: "def", title: "ASD를 어떻게 정의하고 분류하는가?",
      aliases: ["autism spectrum disorder", "자폐스펙트럼장애", "ASD", "neurodevelopment"],
      summary: "사회적 의사소통·상호작용의 지속적 차이와 제한·반복 행동·관심의 조합으로 정의되는 이질적 신경발달 스펙트럼",
      facts: [
        ["DSM 최신판", "DSM-5-TR", "American Psychiatric Association", "2022", false],
        ["ICD 분류", "6A02 Autism spectrum disorder", "WHO ICD-11", "2022", false],
        ["핵심 영역", "2개 — 사회적 의사소통·상호작용 / 제한·반복 행동·관심", "DSM-5-TR", "2022", false]
      ],
      body: [
        ["핵심 정의", ["발달 초기부터 이어지는 신경발달 조건 · 획일적 단일 표현형과 구분", "사회적 의사소통·상호작용의 지속적 차이 + 제한·반복 행동·관심", "현재 기능과 참여에 미치는 영향 · 개인별 강점과 지원 필요의 동시 평가"]],
        ["분류의 변화", ["DSM-5 이후 과거 autistic disorder·Asperger disorder·PDD-NOS를 단일 spectrum으로 통합", "ICD-11 — 지적 발달과 기능적 언어 수준에 따른 세분", "심각도 숫자만으로 개인의 모든 지원 필요를 대표하기 어려움"]]
      ],
      related: ["ckd-spectrum", "ckd-specifiers", "ckd-criteria"],
      papers: [["Lord et al. 2020, Nat Rev Dis Primers 6:5", "https://doi.org/10.1038/s41572-019-0138-4"]],
      links: [["WHO — Autism", "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders"], ["APA — Autism Spectrum Disorder", "https://www.psychiatry.org/patients-families/autism/what-is-autism-spectrum-disorder"]]
    },
    {
      id: "ckd-spectrum", section: "def", title: "스펙트럼의 이질성은 무엇을 뜻하는가?",
      aliases: ["heterogeneity", "support needs", "spectrum", "neurodiversity"],
      summary: "언어·인지·감각·적응 기능과 동반 상태가 서로 독립적으로 조합 → 같은 진단 안에서도 강점·어려움·지원 필요의 큰 폭",
      facts: [["지적장애 동반 중앙값", "33.0%", "Zeidan et al., Autism Res 15:778–790", "2022", false]],
      body: [
        ["여러 축의 조합", ["말하기 수준·비언어 의사소통·사회적 동기·감각 반응의 서로 다른 조합", "지적 기능·적응 기능·학업·일상생활 사이의 불균형 가능", "같은 개인에서도 환경·발달 단계·스트레스에 따른 지원 필요 변화"]],
        ["해석의 원칙", ["단일 high/low functioning 꼬리표보다 영역별 프로파일", "결함만이 아닌 관심·기술·선호·의사소통 방식의 동시 기록", "진단명보다 구체적 지원 목표와 환경 적합성 중심"]]
      ],
      related: ["ckd-definition", "ckd-specifiers", "ckd-lifespan-support"],
      papers: [["Zeidan et al. 2022, Autism Research 15:778–790", "https://doi.org/10.1002/aur.2696"]]
    },
    {
      id: "ckd-differential", section: "def", title: "비슷한 발달·정신건강 상태와 무엇이 다른가?",
      aliases: ["differential diagnosis", "language disorder", "ADHD", "intellectual disability"],
      summary: "발달력·여러 환경의 직접 관찰·언어·인지·적응 프로파일을 통합 → 언어장애·지적장애·ADHD·불안과 감별",
      facts: [["평가 원칙", "다학제 발달력 + 직접 관찰 + 기능 프로파일", "Kim & Yoo, J Korean Acad Child Adolesc Psychiatry 35:15–21", "2024", false]],
      body: [
        ["주요 감별 축", ["언어장애 — 언어 지연만으로 ASD 판정 불가 · 사회적 상호성·RRB 별도 평가", "지적장애 — 전반 발달 수준을 넘어서는 사회적 의사소통 차이 확인", "ADHD·불안 — 주의·회피가 사회적 상호작용에 미치는 영향과 초기 발달력 대조"]],
        ["중복의 가능성", ["ASD와 ADHD·불안·지적장애의 동시 진단 가능", "청각·시각 문제와 수면·통증 등 신체 요인의 행동 영향", "표준화 도구 단독 판정 금지 · 숙련된 임상 판단과 정보 통합"]]
      ],
      related: ["ckd-definition", "ckd-screening", "ckd-comorbidity"],
      papers: [["Kim & Yoo 2024, J Korean Acad Child Adolesc Psychiatry 35:15–21", "https://doi.org/10.5765/jkacap.230009"]]
    },
    {
      id: "ckd-specifiers", section: "def", title: "아형 대신 어떤 명시자를 사용하는가?",
      aliases: ["specifier", "language", "intellectual function", "support level", "syndromic autism"],
      summary: "과거 아형 대신 지적·언어 기능·의학·유전 상태·지원 수준을 명시 → 개인별 표현형과 돌봄 요구의 분리 기록",
      facts: [
        ["syndromic ASD", "임상 ASD의 10% 미만", "Lord et al., Nat Rev Dis Primers 6:5", "2020", false],
        ["단일 핵심 유전자 몫", "각각 ASD의 0.5% 미만", "Lord et al., Lancet 392:508–520", "2018", false]
      ],
      body: [
        ["현재 명시자", ["지적 손상 동반 여부 · 언어 손상 동반 여부", "알려진 의학·유전 상태 또는 환경 요인과의 연관", "catatonia 등 추가 상태와 현재 지원 필요 수준"]],
        ["유전 아형의 위치", ["fragile X·tuberous sclerosis·MECP2·PTEN 등 syndromic 원인의 소수 비중", "CHD8·SCN2A·SHANK3 등 개별 유전자 효과와 넓은 표현형", "유전자명만으로 행동·기능 경과의 완전 예측 불가"]]
      ],
      related: ["ckd-spectrum", "ckd-variant-classes", "ckd-etiologic-testing"],
      papers: [["Lord et al. 2018, Lancet 392:508–520", "https://doi.org/10.1016/S0140-6736(18)31129-2"]]
    },
    {
      id: "ckd-prevalence", section: "epi", title: "세계와 한국에서 얼마나 흔한가?",
      aliases: ["prevalence", "GBD", "Korea", "NHIS", "KOSIS", "유병률"],
      summary: "GBD 2021 세계 6,180만명·0.788% vs 국제 연구 중앙값 1.0% vs 한국 학교 선별 2.64% — 사례 정의·연령·포착 방식이 달라 혼용 금지",
      facts: [
        ["세계 환자 수", "6,180만명 (95% UI 5,210만–7,270만)", "GBD 2021, Lancet Psychiatry 12:111–121", "2021", false],
        ["세계 연령표준화 유병률", "10만명당 788.3 (약 0.788%; 1/127)", "GBD 2021", "2021", false],
        ["국제 연구 중앙값", "아동 10,000명당 100 (1.0%; 범위 1.09–436.0)", "Zeidan et al., Autism Res 15:778–790", "2022", false],
        ["한국 학교 전수선별", "7–12세 2.64% (95% CI 1.91–3.37)", "Kim et al., Am J Psychiatry 168:904–912", "2011", false],
        ["한국 NHIS autistic disorder", "10만명당 19.1 — 청구 포착률", "Kim et al., Psychiatry Investig 20:1038–1047", "2019", false],
        ["한국 등록 자폐성장애", "약 4.7만명 — 복지 등록 인원", "보건복지부 등록장애인 현황", "2024", false],
        ["한국 최신 ASD 진료 인원", "확인 필요 — HIRA 질병소분류 F84 연간 진료 통계", "HIRA 보건의료빅데이터개방시스템", "2026 확인", true]
      ],
      body: [
        ["세계 추정", ["GBD 모델 — 전 연령 0.788% · 6,180만명", "연구 중앙값 — 아동 1.0% · 연구 간 400배 범위", "모형·직접 선별·행정자료의 서로 다른 포착 체계"]],
        ["한국 수치의 층위", ["학교 전수선별 2.64% — 특정 지역·7–12세·미진단 아동 적극 탐색", "NHIS·HIRA — 진단코드가 붙은 진료 인원 · 미진단·미수진 제외", "등록장애인 — 복지 등록 요건 충족 인원 · 임상 ASD 전체와 불일치"]],
        ["수치 사용 주의", ["GBD 0.788%·국제 연구 중앙값 1.0%·한국 학교 선별 2.64%의 혼용 금지", "한국 청구·등록 인원을 인구 유병률로 표현 금지", "인용 시 대상 연령·연도·사례 정의·자료원을 한 묶음으로 병기"]]
      ],
      related: ["ckd-trends", "ckd-demographics", "ckd-burden"],
      papers: [["GBD 2021 Autism Collaborators 2025, Lancet Psychiatry 12:111–121", "https://doi.org/10.1016/S2215-0366(24)00363-8"], ["Kim et al. 2011, Am J Psychiatry 168:904–912", "https://doi.org/10.1176/appi.ajp.2011.10101532"], ["Kim et al. 2023, Psychiatry Investigation", "https://doi.org/10.30773/pi.2023.0123"]],
      links: [["WHO — Autism", "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders"], ["KOSIS — 국가통계포털", "https://kosis.kr/"]]
    },
    {
      id: "ckd-trends", section: "epi", title: "발생률과 측정 유병률은 어떻게 변해 왔는가?",
      aliases: ["incidence", "trend", "observed prevalence", "발생률", "추세"],
      summary: "GBD 2021 발생 116만건·전 연령 18.81/10만 vs 0–14세 61.88/10만 — 연령창 고정 후 추세 해석",
      facts: [
        ["세계 신규 발생", "1,163,706건 (95% UI 981,645–1,371,347)", "GBD 2021 재분석, Brain Behav 16:e71365", "2021", false],
        ["연령표준화 발생률(전 연령)", "10만명당 18.81 (95% UI 15.87–22.17)", "GBD 2021 전 연령 재분석", "2021", false],
        ["연령표준화 발생률(0–14세)", "10만명당 61.88 (95% UI 52.20–72.92)", "GBD 2021 아동 재분석, Psychiatry Res 362:117181", "2021", false],
        ["1990→2021 발생률 변화", "+5.2%", "GBD 2021 재분석", "2021", false],
        ["한국 PDD 청구 포착", "10만명당 22.0→44.6", "NHIS claims, Kim et al.", "2007→2019", false]
      ],
      body: [
        ["증가의 두 층", ["모델 발생률의 완만한 변화 vs 행정자료 진단 수의 가파른 증가", "사례 정의 확대·인식 향상·서비스 접근·진단 대체의 복합 효과", "측정 증가를 생물학적 발생 증가로 곧바로 환산 불가"]],
        ["한국 해석", ["PDD 청구 포착률 2007–2019 두 배 이상 증가", "청구코드·진료 접근·성인 의료 이용 감소의 강한 영향", "출생코호트 누적발생과 연도별 진료 인원의 구분 필요"]],
        ["혼용 금지", ["전 연령 ASIR 18.81/10만 vs 0–14세 ASIR 61.88/10만 — 연령창 차이로 직접 비교 금지", "신규 발생률·점유병률·누적진단률의 서로 다른 분모", "전 생애 조건의 특성상 진단 시점과 생물학적 시작 시점의 불일치", "연도별 추세 비교 시 동일 사례 정의와 동일 연령창 사용"]]
      ],
      related: ["ckd-prevalence", "ckd-demographics", "ckd-diagnosis-delay"],
      papers: [["Zhu et al. 2026, Brain and Behavior 16:e71365", "https://doi.org/10.1002/brb3.71365"], ["Guo et al. 2026, Psychiatry Research 362:117181", "https://doi.org/10.1016/j.psychres.2026.117181"], ["Kim et al. 2023, Psychiatry Investigation", "https://doi.org/10.30773/pi.2023.0123"]]
    },
    {
      id: "ckd-demographics", section: "epi", title: "성별·연령·지역에 따라 어떻게 다른가?",
      aliases: ["sex ratio", "female protective effect", "age", "region", "성비"],
      summary: "GBD 남성 1,064.7/10만 vs 여성 508.1/10만 · 국제 연구 남:녀 중앙값 4.2 — 진단 포착과 생물학적 차이의 동시 영향",
      facts: [
        ["GBD 남성 유병률", "10만명당 1,064.7", "GBD 2021", "2021", false],
        ["GBD 여성 유병률", "10만명당 508.1", "GBD 2021", "2021", false],
        ["연구별 남:녀 중앙값", "4.2:1", "Zeidan et al., Autism Res 15:778–790", "2022", false]
      ],
      body: [
        ["성별 차이", ["남성 진단률 우세 · GBD 약 2.1배", "연구 중앙 성비 4.2:1 — 자료원·지적장애 구성에 따른 변동", "여성의 masking·도구 기준·의뢰 편향과 female protective effect 가설의 병존"]],
        ["연령·지역", ["전 생애에 걸친 ASD · 아동 진단자료의 과대표", "저·중소득국가와 성인·노년층의 자료 공백", "지역 차이의 일부 — 서비스·인식·사례 탐색 방식 차이"]],
        ["주의", ["출생 시 성별·gender 경험·진단 포착을 단일 축으로 단순화 금지", "아동 유병률을 전체 연령에 그대로 적용 금지", "ethnicity별 GBD 입력자료 부재"]]
      ],
      related: ["ckd-prevalence", "ckd-spectrum", "ckd-diagnosis-delay"],
      papers: [["GBD 2021 Autism Collaborators 2025, Lancet Psychiatry", "https://doi.org/10.1016/S2215-0366(24)00363-8"], ["Zeidan et al. 2022, Autism Research", "https://doi.org/10.1002/aur.2696"]]
    },
    {
      id: "ckd-burden", section: "epi", title: "건강·기능·사회적 부담은 얼마나 큰가?",
      aliases: ["DALY", "disability", "economic burden", "mortality", "질병부담"],
      summary: "GBD 2021 ASD 관련 1,150만 DALY·147.6/10만 — 전 생애 기능·동반 건강·서비스 접근을 함께 반영할 필요",
      facts: [
        ["세계 DALY", "1,150만 (95% UI 780만–1,630만)", "GBD 2021", "2021", false],
        ["연령표준화 DALY율", "10만명당 147.6 (95% UI 100.2–208.2)", "GBD 2021", "2021", false],
        ["한국 청구 경제비용", "US$9,645,503 · 직접비 72.3%", "Hong et al., J Autism Dev Disord 50:333–339", "2015", false],
        ["한국 아동 사망 위험", "비ASD 대비 HR 2.340 (95% CI 2.063–2.654)", "Lee et al., J Korean Med Sci 37:e1", "2022", false]
      ],
      body: [
        ["부담의 구성", ["DALY — 기능 제한의 인구 수준 합산 · 개인 삶의 가치와 동일 개념 아님", "수면·간질·정신건강·신체질환과 안전 위험의 추가 부담", "교육·고용·주거·의사소통 접근성과 가족 돌봄의 서비스 부담"]],
        ["한국 자료의 한계", ["청구 경제비용 — 의료 이용 포착분 중심 · 교육·비공식 돌봄 과소포착", "아동 사망 HR — 동반 질환·사회 요인의 잔여 교란 가능", "성인 의료 이용과 미등록 ASD의 과소포착"]],
        ["해석 주의", ["지원 필요를 개인 결함만으로 환원 금지 · 환경 장벽 포함", "DALY와 의료비·돌봄시간의 서로 다른 단위", "진단 포착률이 낮은 자료에서 비용 총액의 과소추정 가능"]]
      ],
      related: ["ckd-prevalence", "ckd-comorbidity", "ckd-lifespan-support"],
      papers: [["GBD 2021 Autism Collaborators 2025, Lancet Psychiatry", "https://doi.org/10.1016/S2215-0366(24)00363-8"], ["Hong et al. 2020, J Autism Dev Disord 50:333–339", "https://doi.org/10.1007/s10803-019-04255-y"], ["Lee et al. 2022, J Korean Med Sci 37:e1", "https://doi.org/10.3346/jkms.2022.37.e1"]]
    },
    {
      id: "ckd-heritability", section: "risk", title: "유전과 환경은 각각 얼마나 기여하는가?",
      aliases: ["heritability", "genetic architecture", "environment", "유전율"],
      summary: "쌍둥이 기반 heritability 약 40–90% — 높은 집단 수준 유전 기여와 개인 수준 결정론은 별개",
      facts: [["heritability 범위", "약 40–90%", "Lord et al., Nat Rev Dis Primers 6:5", "2020", false], ["다른 종설 범위", "74–93%", "Lord et al., Lancet 392:508–520", "2018", false]],
      body: [
        ["집단 수준 해석", ["유전적 차이가 특정 인구의 변이에 기여하는 비율 · 개인의 원인 비율과 구분", "연구 설계·진단 기준·시대·집단에 따른 넓은 범위", "common polygenic·rare inherited·de novo·CNV의 합성 구조"]],
        ["환경의 위치", ["산전·주산기 노출과 유전 소인의 상호작용 가능", "관찰 연관의 교란·역인과·측정 오차", "높은 heritability가 환경 조정·지원 효과의 부재를 뜻하지 않음"]],
        ["주의", ["유전성 = 불변성이라는 해석 금지", "부모 책임·단일 원인 서사와 구분", "인구집단 추정치를 개인 예측으로 직접 전환 금지"]]
      ],
      related: ["ckd-variant-classes", "ckd-common-rare", "ckd-prenatal-risk"],
      papers: [["Lord et al. 2020, Nat Rev Dis Primers 6:5", "https://doi.org/10.1038/s41572-019-0138-4"]]
    },
    {
      id: "ckd-variant-classes", section: "risk", title: "어떤 변이 계층이 위험을 구성하는가?",
      aliases: ["common variant", "rare variant", "de novo", "CNV", "polygenic"],
      summary: "작은 효과의 common variant 다수 + 큰 효과의 rare·de novo SNV/CNV + 소수 syndromic 원인 → 단일 유전자 모델 부적합",
      facts: [
        ["rare de novo SNV/CNV 보유", "임상 ASD의 10–20%", "Lord et al., Nat Rev Dis Primers 6:5", "2020", false],
        ["ID·seizure 동반군", "20–30%", "Lord et al., Nat Rev Dis Primers 6:5", "2020", false],
        ["de novo 인구기여", "전체 인구 위험의 약 3%", "Lord et al., Nat Rev Dis Primers 6:5", "2020", false]
      ],
      body: [
        ["세 계층", ["common variant — 개별 효과 작고 수가 많은 polygenic 배경", "rare inherited·de novo coding variant — 개인 수준 큰 효과 가능", "CNV — 16p11.2·15q11–q13 등 반복 영역과 다양한 표현형"]],
        ["크기와 빈도의 교환", ["큰 효과 변이의 낮은 빈도 · 인구 전체 부담의 제한", "polygenic 위험의 넓은 분포 · 단일 cutoff 부재", "동일 개인에서 rare variant와 polygenic background의 공존 가능"]],
        ["주의", ["variant 발견과 임상 원인 확정의 구분", "penetrance·variable expressivity·가족 맥락 고려", "유전자 목록을 단일 공통 기전으로 과도하게 압축 금지"]]
      ],
      related: ["ckd-heritability", "ckd-common-rare", "ckd-denovo-genes"],
      papers: [["Lord et al. 2020, Nat Rev Dis Primers 6:5", "https://doi.org/10.1038/s41572-019-0138-4"]]
    },
    {
      id: "ckd-prenatal-risk", section: "risk", title: "산전·주산기 요인은 어떤 방식으로 연관되는가?",
      aliases: ["maternal immune activation", "MIA", "prenatal", "perinatal", "two hit"],
      summary: "부모 연령·산모 대사·면역·대기오염·조산 등 관찰 연관 + 유전 소인의 2-hit 가능성 — 단일 환경 원인 단정 금지",
      facts: [["근거 성격", "다수 관찰연구 + 제한적 동물 기전", "WHO Autism fact sheet", "2025", false]],
      body: [
        ["반복 보고된 연관", ["부모의 높은 연령 · 산모 당뇨 · 조산·저체중·중증 출생 합병증", "산전 대기오염·일부 중금속 노출의 관찰 연관", "산모 감염·자가면역·알레르기와 자손 NDD 위험의 연관"]],
        ["MIA 기전 틀", ["산모 IL-17A·IL-6·type I interferon 등 염증 매개체 후보", "유전 소인 + 면역 challenge의 2-hit 모델", "마우스 poly(I:C)·LPS 결과의 lot·strain·환경 민감성"]],
        ["주의", ["연관 ≠ 인과 · 가족·사회·의료 교란 가능", "특정 노출별 연구 간 상충", "인간 번역 전 종단·기능 검증 필요"]]
      ],
      related: ["ckd-heritability", "ckd-onset", "ckd-misconceptions"],
      links: [["WHO — Autism causes", "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders"]]
    },
    {
      id: "ckd-misconceptions", section: "risk", title: "확립된 오해와 예방 해석의 주의점은 무엇인가?",
      aliases: ["vaccine", "prevention", "myth", "causality", "백신"],
      summary: "백신과 ASD의 인과 연관 근거 부재 · 유전·환경의 다요인 구조 → 단일 원인·단일 예방 약속과 구분",
      facts: [["백신 인과", "근거 없음 · 최초 연관 주장은 철회·사기 판정", "WHO Autism fact sheet", "2025", false]],
      body: [
        ["확립된 구분", ["백신이 ASD를 유발한다는 과학적 근거 부재", "부모 양육 방식 원인설의 폐기", "ASD 전체를 하나의 독성 노출로 설명하는 단일 원인 서사의 부적합"]],
        ["예방의 언어", ["발생 예방보다 조기 발견·의사소통 접근·건강 관리·환경 조정", "위험인자 연관을 개인 책임이나 회피 지침으로 환원 금지", "근거 기반 중재와 검증되지 않은 치료 주장 분리"]],
        ["정보 평가", ["원 논문·공식 가이드라인·재현 여부 확인", "전후 비교만 있는 치료 후기의 자연 발달·회귀 효과", "경제적 이해관계와 위해 가능성 점검"]]
      ],
      related: ["ckd-prenatal-risk", "ckd-standard-care", "ckd-guideline-update"],
      links: [["WHO — Autism", "https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders"]]
    },
    {
      id: "ckd-onset", section: "course", title: "생물학적 변화는 언제 시작되는가?",
      aliases: ["mid-fetal", "prenatal", "cortical development", "GER", "발달 시점"],
      summary: "위험 유전자 신호가 태아 중기 피질의 성숙 중 흥분성·억제성 뉴런과 전사·chromatin 프로그램에 수렴",
      facts: [["주요 수렴 시점", "mid-fetal cortical development", "Satterstrom et al., Cell 180:568–584.e23", "2020", false]],
      body: [
        ["태아기 수렴", ["GER 유전자군 — 전사·chromatin 조절 · prenatal 발현 편향", "mid-fetal maturing excitatory·inhibitory neuron의 위험유전자 enrichment", "발달 enhancer와 promoter의 비코딩 변이 신호"]],
        ["임상 시점과의 차이", ["생물학적 시작과 행동 특성의 관찰·진단 시점 불일치", "출생 후 회로 성숙·학습·환경 요구 증가에 따른 표현", "퇴행 보고 시 신경학적·발달 평가 필요"]],
        ["주의", ["발달 시점 enrichment와 단일 세포 원인의 구분", "태아기 신호가 이후 변화의 고정을 의미하지 않음", "모델·organoid의 후기 발달 대표성 제한"]]
      ],
      related: ["ckd-trajectory", "ckd-denovo-genes", "ckd-cell-timing"],
      papers: [["Satterstrom et al. 2020, Cell 180:568–584.e23", "https://doi.org/10.1016/j.cell.2019.12.036"]]
    },
    {
      id: "ckd-trajectory", section: "course", title: "발달 경로는 생애 동안 어떻게 달라지는가?",
      aliases: ["developmental trajectory", "lifespan", "regression", "adult autism"],
      summary: "핵심 특성은 생애 지속 가능하나 표현과 지원 필요는 발달·학습·환경 적합성·동반 건강에 따라 변화",
      facts: [["진단 가능 시점", "18개월부터 가능", "AAP Clinical Report, Pediatrics 145:e20193447", "2020", false]],
      body: [
        ["초기부터 학령기", ["사회적 주의·공동주의·언어·놀이·감각 반응의 다양한 초기 경로", "기술 획득과 환경 요구 증가의 동시 진행", "지원 반응의 큰 개인차 · 평균 효과와 개인 예후의 구분"]],
        ["청소년기·성인기", ["교육·고용·관계·독립생활 요구의 변화", "불안·우울·수면·신체건강과 burnout의 영향", "아동 서비스에서 성인 의료·복지로의 전환 단절 위험"]],
        ["주의", ["증상 점수 감소와 삶의 질·자율성 향상의 비동일성", "masking에 따른 겉보기 적응과 내부 부담의 분리", "전 생애 종단자료의 상대적 부족"]]
      ],
      related: ["ckd-onset", "ckd-heterogeneity", "ckd-lifespan-support"],
      papers: [["Hyman et al. 2020, Pediatrics 145:e20193447", "https://doi.org/10.1542/peds.2019-3447"]]
    },
    {
      id: "ckd-heterogeneity", section: "course", title: "개인마다 표현형과 경과가 다른 이유는 무엇인가?",
      aliases: ["variable expressivity", "penetrance", "phenotype", "heterogeneity"],
      summary: "변이 계층·효과 방향·인지·언어·동반 상태·환경의 조합 → 유전자 하나나 초기 점수만으로 경과 예측 불가",
      facts: [["확실한 연관 유전자·영역", "100개 초과", "Lord et al., Nat Rev Dis Primers 6:5", "2020", false]],
      body: [
        ["생물학적 이질성", ["common polygenic 배경과 rare variant의 다양한 조합", "같은 유전자에서도 변이 위치·LoF·GoF에 따른 다른 표현형", "synaptic·chromatin 경로의 수렴과 개별 경로 차이의 공존"]],
        ["임상·환경 이질성", ["언어·인지·적응·감각·운동 프로파일의 독립적 조합", "간질·ADHD·불안·수면 등 동반 상태의 영향", "가족·학교·지역사회 접근성과 환경 적합성"]],
        ["예측의 한계", ["평균 집단 경로를 개인 예후로 직접 적용 금지", "지원 반응의 목표·용량·측정도구 차이", "강점·선호·자기결정의 정량지표 부족"]]
      ],
      related: ["ckd-spectrum", "ckd-trajectory", "ckd-common-rare"],
      papers: [["Lord et al. 2020, Nat Rev Dis Primers 6:5", "https://doi.org/10.1038/s41572-019-0138-4"]]
    },
    {
      id: "ckd-comorbidity", section: "course", title: "주요 동반 상태와 사망 위험은 무엇인가?",
      aliases: ["comorbidity", "epilepsy", "ADHD", "anxiety", "sleep", "mortality"],
      summary: "지적·언어·ADHD·불안·수면·섭식·위장·간질 등 동반 상태의 높은 부담 → 행동 변화 시 신체·정신건강 원인 우선 평가",
      facts: [
        ["동반 질환 1개 이상", "95% 초과", "Chung & Kim, J Korean Acad Child Adolesc Psychiatry 35:39–43", "2024", false],
        ["한국 아동 사망 위험", "HR 2.340 (95% CI 2.063–2.654)", "Lee et al., J Korean Med Sci 37:e1", "2022", false]
      ],
      body: [
        ["빈번한 동반 상태", ["지적·언어장애 · ADHD·불안·우울", "수면·섭식·위장관 증상·비만·간질", "감각·운동 차이와 wandering·자해·사고 위험"]],
        ["평가 우선순위", ["갑작스러운 행동 변화 → 통증·감염·수면·간질·약물 부작용 확인", "의사소통 접근성·감각 조정·예측 가능한 진료 환경", "동반 상태별 일반 지침을 ASD 특성에 맞게 조정"]],
        ["사망 위험 해석", ["ASD 자체 효과와 간질·지적장애·사회적 장벽의 분리 어려움", "한국 아동 코호트의 잔여 교란 가능", "예방 가능한 사고·자살·신체질환 접근성의 동시 관리"]]
      ],
      related: ["ckd-burden", "ckd-medication", "ckd-lifespan-support"],
      papers: [["Chung & Kim 2024, J Korean Acad Child Adolesc Psychiatry 35:39–43", "https://doi.org/10.5765/jkacap.230006"], ["Lee et al. 2022, J Korean Med Sci 37:e1", "https://doi.org/10.3346/jkms.2022.37.e1"]]
    },
    {
      id: "ckd-early-signs", section: "dx", title: "초기 신호는 무엇인가?",
      aliases: ["early signs", "joint attention", "regression", "발달 감시"],
      summary: "사회적 주의·공동주의·몸짓·언어·놀이·감각 반응의 비전형적 조합 — 단일 신호보다 발달 궤적과 여러 환경의 반복 관찰",
      facts: [["표준 선별 시점", "18개월·24개월", "AAP Clinical Report, Pediatrics 145:e20193447", "2020", false]],
      body: [
        ["관찰 신호", ["이름 반응·눈맞춤·공동주의·가리키기·상호 모방의 차이", "언어·몸짓 발달 지연 또는 이미 획득한 기술의 퇴행", "반복 움직임·강한 동일성 선호·감각 과민·둔감"]],
        ["대응 경로", ["보호자 우려 + 정기 발달 감시 + 표준 선별", "선별 양성 → 기다림보다 포괄적 발달·청각·ASD 평가", "진단 확정 전에도 확인된 발달 필요에 대한 지원 시작"]],
        ["주의", ["단일 행동의 진단적 특이도 제한", "문화·언어·기질·시각·청각의 영향", "퇴행·발작 의심 시 소아신경 평가"]]
      ],
      related: ["ckd-screening", "ckd-criteria", "ckd-diagnosis-delay"],
      papers: [["Hyman et al. 2020, Pediatrics 145:e20193447", "https://doi.org/10.1542/peds.2019-3447"]]
    },
    {
      id: "ckd-criteria", section: "dx", title: "현재 진단 기준은 무엇인가?",
      aliases: ["DSM-5-TR", "ICD-11", "6A02", "diagnostic criteria"],
      summary: "DSM-5-TR 2022 — 사회적 의사소통 3개 모두 + 제한·반복 행동 4개 중 2개 이상 · 발달기 시작·기능 영향·대안 설명 평가",
      facts: [
        ["DSM 최신판", "DSM-5-TR", "American Psychiatric Association", "2022", false],
        ["DSM Criterion A", "3개 영역 모두", "APA DSM-5-TR ASD clarification", "2022", false],
        ["DSM Criterion B", "4개 유형 중 2개 이상", "APA DSM-5-TR", "2022", false],
        ["ICD 최신 체계", "ICD-11 6A02 · 공식 발효 2022-01-01", "WHO", "2022", false]
      ],
      body: [
        ["DSM-5-TR 구조", ["사회·정서적 상호성 · 비언어 의사소통 · 관계의 3개 모두", "상동행동·동일성·제한 관심·감각 특성 중 2개 이상", "발달 초기 존재 · 임상적으로 유의한 기능 영향 · 지적장애만으로 설명 불가"]],
        ["ICD-11 구조", ["사회적 의사소통·상호작용 + 제한·반복·경직 행동", "지적 발달과 기능적 언어 수준에 따른 6A02 하위 코드", "WHO CDDR 2024의 임상 기술 지침"]],
        ["주의", ["분류 기준과 진단 과정의 비동일성", "DSM-5-TR의 Criterion A 문구 명확화 — all of the following", "한국 KCD 전환 시점과 임상 DSM·ICD 사용의 구분"]]
      ],
      related: ["ckd-definition", "ckd-screening", "ckd-guideline-update"],
      links: [["APA — DSM-5-TR ASD clarification", "https://www.psychiatry.org/File%20Library/Psychiatrists/Practice/DSM/DSM-5-TR/APA-DSM5TR-AutismSpectrumDisorder.pdf"], ["WHO — ICD-11 2022 release", "https://www.who.int/news/item/11-02-2022-icd-11-2022-release"]]
    },
    {
      id: "ckd-screening", section: "dx", title: "선별과 표준화 평가 도구는 어떻게 사용하는가?",
      aliases: ["M-CHAT", "ADOS-2", "ADI-R", "CARS-2", "K-DST", "screening"],
      summary: "18·24개월 표준 ASD 선별 + 지속적 발달 감시 → 양성 시 다학제 진단평가 · ADOS-2·ADI-R은 정보 보조이지 단독 확진 검사 아님",
      facts: [
        ["AAP ASD 선별", "18개월·24개월", "Hyman et al., Pediatrics 145:e20193447", "2020", false],
        ["국내 이용 도구", "K-DST · ADI-R · ADOS-2 · CARS-2", "Kim & Yoo, J Korean Acad Child Adolesc Psychiatry 35:15–21", "2024", false]
      ],
      body: [
        ["선별 단계", ["모든 아동의 발달 감시 + 표준화 ASD 선별", "선별 양성은 위험 신호 · 진단 확정과 구분", "보호자·보육·학교 정보와 직접 관찰의 결합"]],
        ["진단 평가", ["발달력·의학력·가족력 · 사회적 의사소통·RRB 직접 관찰", "ADOS-2·ADI-R·CARS-2 등 구조화 도구의 선택적 사용", "언어·인지·적응·감각·운동·정신건강 프로파일"]],
        ["주의", ["도구 cutoff 단독 판정 금지", "연령·언어·문화·성별 masking에 따른 민감도 차이", "대기 중 기능적 지원의 지연 금지"]]
      ],
      related: ["ckd-early-signs", "ckd-criteria", "ckd-diagnosis-delay"],
      papers: [["Kim & Yoo 2024, J Korean Acad Child Adolesc Psychiatry 35:15–21", "https://doi.org/10.5765/jkacap.230009"], ["Hyman et al. 2020, Pediatrics 145:e20193447", "https://doi.org/10.1542/peds.2019-3447"]]
    },
    {
      id: "ckd-etiologic-testing", section: "dx", title: "원인 평가와 유전 검사는 누구에게 필요한가?",
      aliases: ["genetic testing", "chromosomal microarray", "exome", "EEG", "MRI"],
      summary: "임상 진단 뒤 발달·신체·가족력 기반 원인 평가 → 유전검사 고려 · EEG·MRI는 발작·퇴행·신경학적 소견 등 적응증 중심",
      facts: [["검사 원칙", "유전검사 고려 · MRI/EEG는 임상 적응증 기반", "Kim & Yoo, J Korean Acad Child Adolesc Psychiatry 35:15–21", "2024", false]],
      body: [
        ["기본 평가", ["임신·출생·발달·가족력과 3세대 pedigree", "성장·머리둘레·피부·이형성·신경학적 신체진찰", "청각·시각·언어·인지·적응 기능 평가"]],
        ["검사 선택", ["유전상담과 chromosomal microarray·fragile X·exome 등 상황별 고려", "발작·의식 변화·퇴행 → EEG", "국소 신경 소견·비정상 머리둘레·특정 증후군 단서 → MRI·표적검사"]],
        ["결과 해석", ["pathogenic variant·VUS·음성 결과의 구분", "유전 원인 확인과 개인 경과·지원 반응 예측의 비동일성", "가족 재발 위험·우연 발견·동의의 유전상담"]]
      ],
      related: ["ckd-specifiers", "ckd-variant-classes", "ckd-denovo-genes"],
      papers: [["Kim & Yoo 2024, J Korean Acad Child Adolesc Psychiatry 35:15–21", "https://doi.org/10.5765/jkacap.230009"]]
    },
    {
      id: "ckd-diagnosis-delay", section: "dx", title: "진단이 늦거나 누락되는 이유는 무엇인가?",
      aliases: ["diagnostic delay", "masking", "female autism", "adult diagnosis", "진단 지연"],
      summary: "초기 특성의 비특이성·여성 masking·지적·언어 프로파일·문화·전문가 접근성 → 진단 가능 시점과 실제 진단 사이의 간극",
      facts: [
        ["발달국 진단 연령 범위", "38–120개월", "Hwang & Lee, J Korean Acad Child Adolesc Psychiatry 35:8–14", "2024", false],
        ["한국 전국 진단 연령", "확인 필요 — NHIS 출생코호트의 최초 F84 코드 연령 분석", "NHIS 자료 직접 분석", "직접 분석 필요", true]
      ],
      body: [
        ["개인·도구 장벽", ["초기 언어 지연·ADHD·불안·지적장애와의 중첩", "여성·성인의 masking과 기존 도구 표본 편향", "언어·문화·감각 특성에 맞지 않는 평가 환경"]],
        ["체계 장벽", ["전문 다학제 평가의 대기 · 지역 격차", "학교·의료·복지 자료의 분절", "성인기 발달력 정보와 적절한 서비스 경로 부족"]],
        ["주의", ["늦은 진단이 특성의 늦은 시작을 의미하지 않음", "행정자료 최초 코드와 실제 진단·첫 우려 시점의 차이", "한국 전국 진단 연령은 공개 집계가 아닌 직접 분석 과제"]]
      ],
      related: ["ckd-early-signs", "ckd-screening", "ckd-demographics"],
      papers: [["Hwang & Lee 2024, J Korean Acad Child Adolesc Psychiatry 35:8–14", "https://doi.org/10.5765/jkacap.230040"]]
    },
    {
      id: "ckd-standard-care", section: "tx", title: "현재 표준 중재 원칙은 무엇인가?",
      aliases: ["standard care", "behavioral intervention", "education", "shared decision making"],
      summary: "개별 목표·강점·지원 필요에 맞춘 발달·행동·교육·의사소통 중재 + 가족 참여 + 환경 조정 + 동반 건강 관리",
      facts: [["한국 지침 구성", "진단부터 전 생애 중재까지 7개 권고 논문", "Korean Academy of Child and Adolescent Psychiatry", "2024", false]],
      body: [
        ["핵심 원칙", ["개인·가족과 공유한 구체적 기능·참여 목표", "발달·행동·언어·교육 접근의 조합", "감각·의사소통·예측 가능성에 대한 환경 조정"]],
        ["개입의 선택", ["아동의 발달 단계·선호·문화·가족 자원에 맞춘 강도", "측정 가능한 목표와 정기적 반응·부담·위해 검토", "동반 수면·ADHD·불안·간질·신체질환의 병행 관리"]],
        ["하지 말아야 할 것", ["핵심 특성을 약물로 없애려는 접근", "facilitated communication·chelation·hyperbaric oxygen 등 비권고 중재", "개인 자율성과 의사소통을 무시한 획일적 정상화 목표"]]
      ],
      related: ["ckd-early-intervention", "ckd-parent-mediated", "ckd-lifespan-support"],
      papers: [["Chung et al. 2024, J Korean Acad Child Adolesc Psychiatry 35:29–38", "https://doi.org/10.5765/jkacap.230019"], ["Son & Nam 2024, J Korean Acad Child Adolesc Psychiatry 35:22–28", "https://doi.org/10.5765/jkacap.230011"]],
      links: [["NICE CG170 — Under 19 support and management", "https://www.nice.org.uk/guidance/cg170"]]
    },
    {
      id: "ckd-early-intervention", section: "tx", title: "조기 발달·행동 중재의 효과는 어느 정도인가?",
      aliases: ["ESDM", "Early Start Denver Model", "NDBI", "early intervention"],
      summary: "ESDM RCT 48명·2년 — 인지 표준점수 +17.6 vs +7.0 · 적응행동 성장 유지, 단 소표본·고강도·개인차를 함께 해석",
      facts: [
        ["ESDM RCT 표본", "48명 · 18–30개월", "Dawson et al., Pediatrics 125:e17–e23", "2010", false],
        ["2년 인지 표준점수 변화", "+17.6 vs +7.0", "Dawson et al.", "2010", false],
        ["중재 기간", "2년", "Dawson et al.", "2010", false]
      ],
      body: [
        ["RCT 결과", ["발달 원리 + applied behavior analysis를 자연스러운 상호작용에 결합", "인지·적응행동 평균 개선 · 비교군 대비 차이", "진단 범주 변화는 당시 DSM-IV 분류에 기반"]],
        ["임상 적용", ["조기 시작보다 목표 적합성·치료 fidelity·가족 실행 가능성의 동시 고려", "언어·공동주의·놀이·일상 참여 등 다영역 결과", "고강도 1:1 모델의 비용·접근성·일반화 문제"]],
        ["주의", ["평균 점수 변화와 모든 아동의 동일 반응의 구분", "소표본·선별된 참여자·장기 기능 결과의 제한", "중재 용량만으로 질을 대체 불가"]]
      ],
      related: ["ckd-standard-care", "ckd-parent-mediated", "ckd-trajectory"],
      papers: [["Dawson et al. 2010, Pediatrics 125:e17–e23", "https://doi.org/10.1542/peds.2009-0958"]]
    },
    {
      id: "ckd-parent-mediated", section: "tx", title: "부모 매개 사회적 의사소통 중재의 효과는 무엇인가?",
      aliases: ["PACT", "parent mediated", "social communication", "caregiver"],
      summary: "PACT 장기 추적 121명 — 전체 기간 ADOS severity 효과크기 0.55 · 부모-아동 상호작용 변화의 지속, 언어 composite 차이는 불명확",
      facts: [
        ["장기 추적 표본", "121/152명 (80%)", "Pickles et al., Lancet 388:2501–2509", "2016", false],
        ["추적 기간", "원 trial 종료 후 중앙 5.75년", "Pickles et al.", "2016", false],
        ["ADOS severity 전체 효과", "ES 0.55 (95% CI 0.14–0.91; p=0.004)", "Pickles et al.", "2016", false],
        ["언어 composite", "ES 0.15 (95% CI −0.23–0.53)", "Pickles et al.", "2016", false]
      ],
      body: [
        ["작동 경로", ["보호자의 아동 신호 읽기·반응 조정 → 아동의 사회적 의사소통 시작 증가", "치료실 기술을 일상 상호작용으로 확장", "2024 mediation 분석 — 중간 시점 child initiation이 추적 효과의 73% 매개"]],
        ["장기 결과", ["ADOS severity의 작은~중간 평균 효과", "부모-아동 dyadic interaction 변화의 지속", "언어 composite의 명확한 집단 차이 부재"]],
        ["주의", ["부모 책임론과 구분 · 코칭·지원 자원 제공", "관찰 점수 변화와 삶의 질·자기결정의 비동일성", "다양한 언어·문화·가족 구조의 일반화 필요"]]
      ],
      related: ["ckd-standard-care", "ckd-early-intervention", "ckd-lifespan-support"],
      papers: [["Pickles et al. 2016, Lancet 388:2501–2509", "https://doi.org/10.1016/S0140-6736(16)31229-6"], ["Carruthers et al. 2024, J Child Psychol Psychiatry 65:233–244", "https://doi.org/10.1111/jcpp.13798"]]
    },
    {
      id: "ckd-medication", section: "tx", title: "약물은 어떤 표적 증상에 사용하며 안전성은 어떠한가?",
      aliases: ["risperidone", "aripiprazole", "irritability", "aggression", "safety"],
      summary: "약물은 ASD 핵심 특성보다 심한 irritability·공격·자해 또는 동반 상태의 표적 치료 — risperidone 반응 69% vs 12%, 체중·대사 위해 모니터 필수",
      facts: [
        ["risperidone 양성 반응", "69% (34/49) vs placebo 12% (6/52)", "McCracken et al., N Engl J Med 347:314–321", "2002", false],
        ["ABC irritability 감소", "56.9% vs 14.1%", "McCracken et al.", "2002", false],
        ["8주 체중 증가", "2.7±2.9 kg vs 0.8±2.2 kg", "McCracken et al.", "2002", false],
        ["6개월 효과 유지", "초기 반응자 23/34", "McCracken et al.", "2002", false],
        ["aripiprazole 8주 체중", "+1.3 kg(5·10mg), +1.5 kg(15mg) vs +0.3 kg", "Marcus et al., JAACAP 48:1110–1119", "2009", false]
      ],
      body: [
        ["적응 표적", ["심한 irritability·tantrum·공격·자해로 기능·안전 저하", "ADHD·불안·우울·수면·간질 등 동반 상태별 치료", "ASD 핵심 사회적 의사소통 특성의 약물 치료와 구분"]],
        ["효과와 위해", ["risperidone·aripiprazole의 단기 irritability 감소", "체중 증가·식욕·졸림·운동 부작용·대사 위험", "낮은 용량 시작·명확한 표적 행동·정기적 중단 가능성 검토"]],
        ["주의", ["RCT의 아동·중증 irritability 표본을 모든 ASD에 확대 금지", "행동의 통증·환경·의사소통 원인 우선 평가", "장기 안전성·성인 근거의 상대적 부족"]]
      ],
      related: ["ckd-comorbidity", "ckd-standard-care", "ckd-drug-update"],
      papers: [["McCracken et al. 2002, N Engl J Med 347:314–321", "https://doi.org/10.1056/NEJMoa013171"], ["Marcus et al. 2009, J Am Acad Child Adolesc Psychiatry 48:1110–1119", "https://doi.org/10.1097/CHI.0b013e3181b76658"], ["Owen et al. 2009, Pediatrics 124:1533–1540", "https://doi.org/10.1542/peds.2008-3782"]]
    },
    {
      id: "ckd-lifespan-support", section: "tx", title: "생애주기 지원은 어떻게 이어지는가?",
      aliases: ["lifespan support", "transition", "employment", "adult care", "supported living"],
      summary: "유아기 의사소통·발달 지원 → 학교 참여·자기옹호 → 성인 의료·고용·주거·관계 지원의 연속 경로",
      facts: [["국내 생애주기 지침", "영유아·학령기·성인 전환 맞춤 전략", "Son & Nam, J Korean Acad Child Adolesc Psychiatry 35:22–28", "2024", false]],
      body: [
        ["발달 단계별 초점", ["영유아 — 의사소통·놀이·가족 코칭·감각 조정", "학령기 — 학습 접근·또래·정서·행동·학교 환경", "청소년·성인 — 전환계획·성·관계·고용·주거·자기결정"]],
        ["의료 연속성", ["소아에서 성인 주치의·정신건강·신경과로의 명시적 이관", "건강 passport·의사소통 선호·감각 조정·의사결정 지원", "수면·간질·대사·구강·정신건강의 예방적 관리"]],
        ["주의", ["독립생활만을 유일한 성공 기준으로 설정 금지", "지원 강도와 자율성의 동시 설계", "성인·노년기 효과 연구와 서비스 자료의 부족"]]
      ],
      related: ["ckd-standard-care", "ckd-trajectory", "ckd-burden"],
      papers: [["Son & Nam 2024, J Korean Acad Child Adolesc Psychiatry 35:22–28", "https://doi.org/10.5765/jkacap.230011"]],
      links: [["NICE CG142 — Autism in adults", "https://www.nice.org.uk/guidance/cg142"]]
    },
    {
      id: "ckd-common-rare", section: "omics", title: "common·rare·de novo 위험은 어떻게 함께 작동하는가?",
      aliases: ["common rare convergence", "polygenic risk", "de novo", "GWAS", "genetic architecture"],
      summary: "polygenic common 위험과 큰 효과 rare·de novo 위험의 공존은 확립 · 같은 유전자·세포로의 수렴은 ASD GWAS 검정력 한계로 미확정",
      facts: [
        ["de novo PTV 상대위험", "RR 3.5; P=4×10⁻¹⁷", "Satterstrom et al., Cell 180:568–584.e23", "2020", false],
        ["rare/de novo 유전자와 ASD GWAS", "enrichment 무유의", "Satterstrom et al.", "2020", false]
      ],
      body: [
        ["함께 작동하는 층", ["common variant의 누적 배경 + rare inherited·de novo variant의 큰 효과", "개인별 조합과 penetrance·expressivity의 변화", "희귀변이 보유군 안에서도 polygenic background의 추가 가능"]],
        ["수렴의 한계", ["102 de novo 위험 유전자와 ASD common-variant GWAS enrichment 무유의", "schizophrenia·educational attainment GWAS와는 유의한 교차 신호", "ASD GWAS 검정력 부족인지 별개 생물학인지 미분리"]],
        ["주의", ["두 변이 축을 같은 유전자·세포 결론으로 성급히 통합 금지", "GWAS null enrichment를 생물학적 비연관으로 단정 금지", "ancestry·표현형 구성의 비교 가능성 점검"]]
      ],
      related: ["ckd-variant-classes", "ckd-denovo-genes", "ckd-cell-timing"],
      papers: [["Satterstrom et al. 2020, Cell 180:568–584.e23", "https://doi.org/10.1016/j.cell.2019.12.036"]]
    },
    {
      id: "ckd-denovo-genes", section: "omics", title: "de novo 연구는 어떤 유전자와 경로를 지목했는가?",
      aliases: ["Satterstrom", "CHD8", "SCN2A", "SYNGAP1", "GER", "NC"],
      summary: "WES 35,584명에서 102 위험 유전자(FDR≤0.1) → GER 전사·chromatin과 NC neuronal communication의 두 기능군",
      facts: [
        ["WES 총표본", "35,584명 · ASD 11,986명", "Satterstrom et al., Cell 180:568–584.e23", "2020", false],
        ["위험 유전자", "102개 (FDR≤0.1)", "Satterstrom et al.", "2020", false],
        ["CNV locus 내 유전자", "13개", "Satterstrom et al.", "2020", false]
      ],
      body: [
        ["두 기능군", ["GER — gene expression regulation · chromatin·전사 · prenatal 편향", "NC — neuronal communication · synaptic function · postnatal 편향", "발달 프로그램과 성숙 회로 기능의 동시 기여"]],
        ["대표 유전자", ["CHD8·ARID1B·ADNP·POGZ·MECP2·KMT2C — chromatin·전사", "SHANK3·SYNGAP1·GRIN2B·NRXN/NLGN·SCN2A — 시냅스·흥분성", "FMR1·TSC1/2·PTEN — syndromic 축"]],
        ["주의", ["유전자 연관과 변이 방향의 구분", "SCN2A LoF vs GoF의 ASD·infantile seizure 방향 차이", "유전자 목록만으로 개별 표현형 예측 불가"]]
      ],
      related: ["ckd-common-rare", "ckd-noncoding", "ckd-cell-timing"],
      papers: [["Satterstrom et al. 2020, Cell 180:568–584.e23", "https://doi.org/10.1016/j.cell.2019.12.036"]]
    },
    {
      id: "ckd-noncoding", section: "omics", title: "비코딩 변이는 무엇을 더하는가?",
      aliases: ["noncoding", "promoter", "enhancer", "de novo risk score", "TFBS"],
      summary: "quartet WGS 1,902가 단일 annotation의 무유의 속에서 promoter 중심 집계 신호(R²=1.67%)를 포착 · 특정 causal locus는 미지정",
      facts: [
        ["WGS 설계", "1,902 quartet · 7,608명", "An et al., Science 362:eaat6576", "2018", false],
        ["de novo mutation", "255,106개", "An et al.", "2018", false],
        ["de novo risk score", "R²=1.67%", "An et al.", "2018", false],
        ["특정 비코딩 causal locus", "확인 필요 — 집계 신호의 독립 재현·기능검증", "WGS+MPRA/CRISPR 직접 연구", "직접 연구 필요", true]
      ],
      body: [
        ["집계 신호", ["단일 noncoding category 분석은 다중검정 후 무유의", "여러 annotation을 합친 risk score에서 promoter 기여", "보존된 distal promoter·TFBS의 상대적 강한 신호"]],
        ["발달 맥락", ["fetal cortex·organoid enhancer에서 TF motif 교란 enrichment", "코딩 GER 유전자와 조절 네트워크의 개념적 연결", "효과크기는 coding de novo보다 작은 방향"]],
        ["주의", ["집계 연관을 개별 변이의 병원성으로 전환 금지", "특정 causal locus·표적 유전자의 미지정", "episomal MPRA·organoid의 생체 조직 대표성 제한"]]
      ],
      related: ["ckd-denovo-genes", "ckd-new-method", "ckd-onset"],
      papers: [["An et al. 2018, Science 362:eaat6576", "https://doi.org/10.1126/science.aat6576"]]
    },
    {
      id: "ckd-cell-timing", section: "omics", title: "위험은 어느 세포·발달 시점·집단으로 수렴하는가?",
      aliases: ["midfetal neuron", "excitatory inhibitory", "female protective effect", "ancestry", "PRS"],
      summary: "mid-fetal maturing 흥분성·억제성 뉴런과 피질 전사 프로그램으로 수렴 · 여성 de novo PTV 약 2배 · European ancestry 편향",
      facts: [
        ["여성 constrained-gene de novo PTV", "남성 대비 약 2배", "Satterstrom et al., Cell 180:568–584.e23", "2020", false],
        ["한국인 PRS 전이성", "확인 필요 — 한국 코호트 외부검증", "한국인 genotype+phenotype 직접 분석", "직접 분석 필요", true]
      ],
      body: [
        ["세포·시점", ["midfetal maturing excitatory·inhibitory neuron의 위험유전자 enrichment", "GER prenatal bias + NC postnatal bias의 시간적 분화", "피질 glutamatergic neuron과 발달 enhancer의 반복 수렴"]],
        ["성차", ["여성 constrained 유전자의 de novo PTV 부담 증가", "female protective effect의 threshold 가설", "진단 포착·masking과 생물학적 차이의 분리 필요"]],
        ["ancestry", ["대규모 유전체 연구의 European ancestry 편중", "LD·allele frequency·환경·진단 체계 차이", "한국인 PRS의 외부검증 없는 임상 적용 금지"]]
      ],
      related: ["ckd-onset", "ckd-common-rare", "ckd-new-data"],
      papers: [["Satterstrom et al. 2020, Cell 180:568–584.e23", "https://doi.org/10.1016/j.cell.2019.12.036"]]
    },
    {
      id: "ckd-guideline-update", section: "now", title: "진단·진료 권고는 최근 어떻게 바뀌었는가?",
      aliases: ["guideline", "DSM-5-TR", "ICD-11", "Korean guideline", "NICE"],
      summary: "DSM-5-TR 2022의 Criterion A 문구 명확화 · ICD-11 2022 발효 · 한국 2024 전 생애 7편 지침 · NICE는 근거 트리거 방식 감시",
      facts: [
        ["DSM-5-TR", "Criterion A에 all of the following 명확화", "American Psychiatric Association", "2022", false],
        ["ICD-11", "공식 발효 2022-01-01 · CDDR 발행", "WHO", "2022 / 2024", false],
        ["한국 ASD 지침", "진단·평가·행동·약물·생애주기 등 7편", "Korean Academy of Child and Adolescent Psychiatry 35(1)", "2024", false],
        ["NICE CG170", "2013 발행 · 2021 최종 갱신", "NICE", "2021", false],
        ["한국 지침 개정 주기", "확인 필요 — 발행 학회·국가센터 갱신 계획", "대한소아청소년정신의학회·국가센터", "확인 필요", true]
      ],
      body: [
        ["진단 체계", ["DSM-5-TR — 사회적 의사소통 3개 영역 모두라는 문구 명확화", "ICD-11 — 지적·기능적 언어 명시자 중심 세분", "WHO ICD-11 CDDR 2024 — 임상 진단 기술 지침"]],
        ["진료 권고", ["한국 2024 — 진단·평가부터 행동·약물·문제행동·생애주기까지 묶음", "NICE 아동·성인 지침 — 핵심 특성보다 지원·기능·동반 상태 중심", "AAP 2020 — 18·24개월 선별과 다학제 평가·공유 의사결정"]],
        ["갱신 방식", ["NICE — 고정 주기보다 새 근거가 권고를 바꿀 때 재검토", "한국 지침 — 첫 묶음판 이후 공식 개정 주기 미공개", "판본·발행연도·검토일의 분리 기록"]]
      ],
      related: ["ckd-criteria", "ckd-standard-care", "ckd-drug-update"],
      papers: [["Yoo 2024, J Korean Acad Child Adolesc Psychiatry 35:1", "https://doi.org/10.5765/jkacap.230076"], ["Hyman et al. 2020, Pediatrics 145:e20193447", "https://doi.org/10.1542/peds.2019-3447"]],
      links: [["WHO — ICD-11 CDDR 2024", "https://www.who.int/news/item/08-03-2024-new-manual-released-to-support-diagnosis-of-mental--behavioural-and-neurodevelopmental-disorders-added-in-icd-11"], ["NICE CG170 history", "https://www.nice.org.uk/guidance/cg170/timeline"]]
    },
    {
      id: "ckd-drug-update", section: "now", title: "치료제와 안전성 정보는 무엇이 달라졌는가?",
      aliases: ["drug update", "risperidone", "aripiprazole", "metabolic monitoring", "pharmacotherapy"],
      summary: "ASD 핵심 특성 치료제 부재라는 원칙 유지 · irritability와 동반 상태의 표적 약물 사용 · 체중·대사·운동 부작용의 장기 모니터 강조",
      facts: [
        ["aripiprazole 52주 EPS 관련 이상반응", "48/330명 (14.5%)", "Marcus et al., J Clin Psychiatry 72:1270–1276", "2011", false],
        ["risperidone 8주 체중 증가", "2.7±2.9 kg", "McCracken et al., N Engl J Med 347:314–321", "2002", false]
      ],
      body: [
        ["유지된 원칙", ["핵심 사회적 의사소통·RRB를 약물로 치료하는 승인 근거 부재", "심한 irritability·공격·자해 또는 동반 질환의 표적 치료", "행동 기능분석·통증·환경·의사소통 원인 평가 선행"]],
        ["안전성 강조", ["risperidone — 체중·식욕·졸림·prolactin·대사", "aripiprazole — 체중·졸림·akathisia·EPS", "신체계측·혈압·대사검사·표적 행동의 정기 검토"]],
        ["근거 공백", ["단기 소아 RCT 대비 장기·성인 비교근거 부족", "비약물 중재와 병합의 최적 순서 불명확", "개인별 최소 유효용량·감량 시점의 데이터 제한"]]
      ],
      related: ["ckd-medication", "ckd-guideline-update", "ckd-comorbidity"],
      papers: [["Marcus et al. 2011, J Clin Psychiatry 72:1270–1276", "https://doi.org/10.4088/JCP.09m05933"], ["McCracken et al. 2002, N Engl J Med 347:314–321", "https://doi.org/10.1056/NEJMoa013171"]]
    },
    {
      id: "ckd-new-data", section: "now", title: "새 코호트·단일세포 데이터는 무엇을 보여주는가?",
      aliases: ["Wamsley 2024", "Yap 2024", "single nucleus", "microglia", "cell state"],
      summary: "Wamsley 2024 63 donor·591k nuclei — 3,485 DE의 2/3가 cell-type-specific · 표재 Ex·SST·reactive glia의 state 변화 중심",
      facts: [
        ["ASD 단일핵 코호트", "63 donor · 591,000 nuclei", "Wamsley et al., Science 384:eadh2602", "2024", false],
        ["차등발현 유전자", "3,485개 · 약 2/3 cell-type-specific", "Wamsley et al.", "2024", false],
        ["bulk 일치도", "R²=0.86", "Wamsley et al.", "2024", false],
        ["methylomic deconvolution", "1,270 brain · ASD arm n=31", "Yap et al., Sci Adv 10:eadn7655", "2024", false],
        ["치료 전후 종단 single-cell", "확인 필요 — 충분한 ASD 공개 코호트", "PsychENCODE·Autism BrainNet 직접 조사", "직접 조사 필요", true]
      ],
      body: [
        ["세포 상태", ["표재 excitatory neuron·SST interneuron·reactive glia에 DE 집중", "세포 분율 변화는 미미 · 조성보다 transcriptional state 우세", "IRF8 glia·CUX1 neuron GRN driver의 common+rare 위험 enrichment"]],
        ["조성 신호", ["Yap methylomic deconvolution — ASD microglia 분율 증가", "ASD arm n=31의 제한 · 독립 재현 필요", "state 변화와 composition 변화의 세포·방법별 공존 가능"]],
        ["주의", ["사후 뇌 단면에서 원인·결과 방향 단정 금지", "연령·사망원인·뇌영역·약물의 교란", "치료 전후 종단·다인종·다영역 데이터 부족"]]
      ],
      related: ["ckd-cell-timing", "ckd-new-method", "ckd-common-rare"],
      papers: [["Wamsley et al. 2024, Science 384:eadh2602", "https://doi.org/10.1126/science.adh2602"], ["Yap et al. 2024, Science Advances 10:eadn7655", "https://doi.org/10.1126/sciadv.adn7655"]]
    },
    {
      id: "ckd-new-method", section: "now", title: "새로 쓸 수 있게 된 분석 기법은 무엇인가?",
      aliases: ["single-cell", "GRN", "methylomic deconvolution", "organoid", "MPRA", "scQTL"],
      summary: "single-cell GRN·methylomic deconvolution·발달 organoid·WGS risk score의 결합 → 변이·세포·시점 연결, 인과 검증은 별도 단계",
      facts: [
        ["single-cell ASD", "591,000 nuclei", "Wamsley et al., Science 384:eadh2602", "2024", false],
        ["비코딩 WGS", "1,902 quartet", "An et al., Science 362:eaat6576", "2018", false]
      ],
      body: [
        ["세포 해상도", ["snRNA-seq — cell-type-specific DE·GRN·state 분리", "methylomic deconvolution — 대규모 bulk 뇌의 세포 분율 추정", "scQTL·caQTL — 위험 조절효과의 세포유형 맥락"]],
        ["발달·비코딩", ["organoid·fetal enhancer atlas — 태아기 조절 맥락", "WGS de novo risk score — 작은 비코딩 집계 신호", "MPRA·CRISPR — 후보 조절변이의 기능 검증"]],
        ["주의", ["deconvolution의 참조 atlas 의존", "organoid의 후기 성숙·비피질·면역환경 제한", "예측·집계 신호와 생체 인과의 구분"]]
      ],
      related: ["ckd-noncoding", "ckd-new-data", "ckd-cell-timing"],
      papers: [["Wamsley et al. 2024, Science 384:eadh2602", "https://doi.org/10.1126/science.adh2602"], ["An et al. 2018, Science 362:eaat6576", "https://doi.org/10.1126/science.aat6576"]]
    }
  ];

  const glossaryTerms = {
    "asd": { key: "asd", definition: "Autism spectrum disorder. 사회적 의사소통과 제한·반복 행동의 신경발달 스펙트럼." },
    "de novo": { key: "denovo", definition: "부모에게 없고 자손에서 새로 생긴 변이." },
    "cnv": { key: "cnv", definition: "Copy-number variant. 유전체 구간의 결실·중복." },
    "heritability": { key: "heritability", definition: "특정 집단의 표현형 차이 중 유전적 차이가 설명하는 비율." },
    "polygenic": { key: "polygenic", definition: "작은 효과의 다수 변이가 함께 만드는 유전 구조." },
    "ger": { key: "ger", definition: "Gene expression regulation. 전사·chromatin 조절 ASD 위험 유전자군." },
    "neuronal communication": { key: "nc", definition: "시냅스·신경 전달 기능에 수렴하는 ASD 위험 유전자군." },
    "mid-fetal": { key: "midfetal", definition: "태아 중기 뇌 발달 시점. ASD 위험유전자 수렴 구간." },
    "ados-2": { key: "ados", definition: "Autism Diagnostic Observation Schedule, Second Edition. 구조화 직접 관찰 도구." },
    "adi-r": { key: "adir", definition: "Autism Diagnostic Interview-Revised. 보호자 기반 구조화 발달 면담." },
    "rrb": { key: "rrb", definition: "Restricted and repetitive behaviors or interests. 제한·반복 행동·관심." },
    "esdm": { key: "esdm", definition: "Early Start Denver Model. 자연적 상호작용 기반 조기 발달·행동 중재." },
    "pact": { key: "pact", definition: "Preschool Autism Communication Trial. 부모 매개 사회적 의사소통 중재." },
    "grn": { key: "grn", definition: "Gene regulatory network. 유전자 조절 관계의 네트워크." },
    "prs": { key: "prs", definition: "Polygenic risk score. 다수 common variant 효과의 가중 합." }
  };
  const glossaryPattern = /(^|[^A-Za-z0-9가-힣])(ASD|de novo|CNV|heritability|polygenic|GER|neuronal communication|mid-fetal|ADOS-2|ADI-R|RRB|ESDM|PACT|GRN|PRS)(?=$|[^A-Za-z0-9])/gi;

  return { meta: meta, acts: acts, sections: sections, articles: articleList, glossaryTerms: glossaryTerms, glossaryPattern: glossaryPattern };
})();
