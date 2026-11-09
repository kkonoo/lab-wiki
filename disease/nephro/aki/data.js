window.DISEASE = (function () {
  const meta = {
    id: "aki",
    title: "Acute Kidney Injury (AKI / AKD)",
    domain: "Nephro",
    updated: "2026-11-09"
  };

  const acts = [
    { id: "A", num: "01", en: "DEFINITION · EPIDEMIOLOGY", title: "무엇인가", accent: "#6f3a55",
      blurb: "creatinine·urine output 기준 · AKI–AKD–CKD 시간 구간 · 정의에 따라 달라지는 숫자",
      sections: ["def", "epi"] },
    { id: "B", num: "02", en: "CAUSE · COURSE", title: "왜·어떻게", accent: "#315d78",
      blurb: "취약성과 신독성 · 외수질 저관류에서 세뇨관 사멸을 거쳐 대사 실패로",
      sections: ["risk", "course"] },
    { id: "C", num: "03", en: "CLINICAL", title: "임상", accent: "#94553b",
      blurb: "기능·손상·스트레스 바이오마커 · 예측 · KRT 시작 시점 · subphenotype",
      sections: ["dx", "tx"] },
    { id: "D", num: "04", en: "RESEARCH", title: "연구", accent: "#1f5d43",
      blurb: "수복의 세포 출처 · failed repair 상태 · 유전 변이와 체세포 변이 · 단일세포·공간 분석",
      sections: ["omics", "now"] }
  ];

  const sections = {
    def: { number: "01", title: "정의 · 분류", act: "A", questions: [
      { q: "AKI는 무엇을 측정해 정의하는가?", note: "creatinine·urine output 두 기준 · 3병기 · ungraded 합의", article: "aki-definition" },
      { q: "AKI·AKD·CKD는 어떻게 나뉘는가?", note: "7일 · 7–90일 · 90일 초과로 나뉨", article: "aki-akd-ckd" },
      { q: "기능 지표만으로 충분한가?", note: "misnomer · damage marker 양성 · 제안된 1S 병기", article: "aki-functional-vs-damage" },
      { q: "'회복'은 어떻게 정의하는가?", note: "KRT 독립 14일 · 48시간 경계의 임의성 · 부분 회복", article: "aki-recovery-definition" }
    ]},
    epi: { number: "02", title: "역학 · 질병부담", act: "A", questions: [
      { q: "얼마나 흔한가?", note: "입원 20–32% · ICU 전향 57.3% · AKD가 AKI보다 흔함", article: "aki-frequency" },
      { q: "중증도와 결과는 어떻게 연결되는가?", note: "병기–사망 계단 · 퇴원 시 eGFR 저하 · KRT 사망률", article: "aki-severity-outcome" },
      { q: "지역에 따라 무엇이 다른가?", note: "LMIC 지역사회 발생 77% · 탈수 vs shock · 보정 후 차이 소실", article: "aki-global-divide" },
      { q: "한국에서는 어떤 규모인가?", note: "ICU 청구자료 8.3% · 단일기관 입원 14.3% · CRRT 중심 KRT", article: "aki-korea" }
    ]},
    risk: { number: "01", title: "원인 · 위험인자", act: "B", questions: [
      { q: "누가 AKI에 취약한가?", note: "기존 CKD 최대 10배 · 당뇨 5배 · 고령 · 체세포 변이", article: "aki-riskfactors" },
      { q: "약물은 얼마나 기여하는가?", note: "지역사회 AKI 입원의 20% · nephrotoxin 1개당 odds +53%", article: "aki-nephrotoxins" },
      { q: "손상의 강도·빈도가 결과를 정하는가?", note: "1회는 완전 회복 · 3회 반복하면 IFTA · 강도 역치 존재", article: "aki-repeat-injury" },
      { q: "무엇이 AKI가 아닌가?", note: "RAS 차단 개시 후 30% 이내 상승 · 혈역학적 조정", article: "aki-differential" }
    ]},
    course: { number: "02", title: "발병 · 진행", act: "B", questions: [
      { q: "혈역학·내피에서 무엇이 먼저 무너지는가?", note: "외수질 선택적 저관류 · glycocalyx 소실 · no-reflow", article: "aki-haemodynamics" },
      { q: "염증은 어떤 순서로 들어오는가?", note: "호중구 30분 → 대식세포 24시간 → M2 수복 · 보체 alternative", article: "aki-inflammation" },
      { q: "세뇨관은 어떤 양식으로 죽는가?", note: "necroptosis · MPT · ferroptosis 최소 3경로", article: "aki-cell-death" },
      { q: "대사 실패는 어떻게 기능을 떨어뜨리는가?", note: "PGC1α와 NAD · de novo NAD 합성 병목 · gluconeogenesis 소실", article: "aki-metabolic-failure" }
    ]},
    dx: { number: "01", title: "진단 · 분류", act: "C", questions: [
      { q: "바이오마커는 어떻게 분류하는가?", note: "functional · damage · stress 3분류 · 코호트별 성능 격차", article: "aki-biomarker-classes" },
      { q: "바이오마커가 중재로 이어진 근거는?", note: "PrevAKI · BigpAK · cutoff 0.3 · rule-out 용도", article: "aki-biomarker-intervention" },
      { q: "발생을 미리 예측할 수 있는가?", note: "EHR 시계열 모델 48시간 선행 · DKK3 · furosemide stress test", article: "aki-prediction" },
      { q: "하나의 정의 안에 몇 개의 생물학이 있는가?", note: "원인별 발현 중복 10% 미만 · 궤적 군집 · LCA 2-class", article: "aki-subphenotype" }
    ]},
    tx: { number: "02", title: "치료 · 미충족 수요", act: "C", questions: [
      { q: "지지요법의 기둥은 무엇인가?", note: "혈역학 · 수액 선택 · nephrotoxin stewardship · 용량 강도 무효", article: "aki-supportive-care" },
      { q: "KRT는 언제 시작하는가?", note: "ELAIN vs AKIKI·STARRT-AKI · 지연의 상한 · 긴급 적응증", article: "aki-krt-timing" },
      { q: "패혈증 AKI는 따로 다루는가?", note: "중환자 AKI의 45–70% · 정의 혼재 · endotype 조합", article: "aki-sepsis" },
      { q: "약물 치료는 어디까지 왔는가?", note: "승인된 특이 치료 부재 · 재현 실패의 목록 · 좁은 치료 창", article: "aki-pharmacotherapy" }
    ]},
    omics: { number: "01", title: "유전학 · 오믹스", act: "D", questions: [
      { q: "수복은 누가 하는가?", note: "분화세포의 dedifferentiation · Sox9 de novo 활성화", article: "aki-repair-source" },
      { q: "'기능 회복'과 '구조 수복'은 왜 다른가?", note: "polyploid 비대 보상 · nephron 영구 소실 · 증식 지표의 함정", article: "aki-repair-vs-recovery" },
      { q: "failed repair 상태의 분자 정체는?", note: "FR-PTC · NF-κB 중심 cis-조절망 · 인간 손상 상태 4종", article: "aki-failed-repair" },
      { q: "유전·체세포 변이는 어디까지 밝혀졌나?", note: "SNP 유전율 0.031 · FTO·SHROOM3 · CHIP의 더 강한 신호", article: "aki-genetics" }
    ]},
    now: { number: "02", title: "최신 동향", act: "D", questions: [
      { q: "진료 권고는 최근 어떻게 바뀌었는가?", note: "KDIGO 2012가 현행 · 2026 개정 초안 공개검토 종료 · ADQI 합의 축적", article: "aki-guideline-change" },
      { q: "장기 귀결은 어디까지 확립됐나?", note: "CKD·ESKD·사망의 크기 · MACE null · 3개월 지표 보정", article: "aki-long-term" },
      { q: "새 코호트·데이터는 무엇이 생겼는가?", note: "ASSESS-AKI · KPMP · 생검 연계 프로테옴 · 대규모 EHR", article: "aki-cohorts" },
      { q: "새로 쓸 수 있게 된 분석 기법은?", note: "snATAC 시계열 · 공간 전사체 · 소변 세포 scRNA · deconvolution", article: "aki-new-method" }
    ]}
  };

  const articleList = [
    {
      id: "aki-definition", section: "def", title: "AKI는 무엇을 측정해 정의하는가?",
      aliases: ["acute kidney injury", "급성 신손상", "AKI", "KDIGO", "RIFLE", "AKIN", "serum creatinine", "urine output"],
      summary: "serum creatinine 상승 또는 urine output 감소라는 두 기능 지표로 정의하고 중증도를 3병기로 매김. RIFLE·AKIN을 거쳐 KDIGO 단일 정의로 수렴함. 정의 자체는 직접 비교가 불가능해 ungraded 합의로 제시",
      facts: [
        ["KDIGO 정의 — creatinine", "48시간 내 ≥0.3 mg/dL(26.5 μmol/L) 상승 또는 7일 내 baseline 대비 ≥1.5배", "KDIGO AKI Guideline (Kellum 2013)", "2012", false],
        ["KDIGO 정의 — urine output", "<0.5 mL/kg/h가 6시간 지속", "KDIGO AKI Guideline (Kellum 2013)", "2012", false],
        ["병기", "1 = 1.5–1.9배 또는 ≥0.3 mg/dL · 2 = 2.0–2.9배 · 3 = ≥3.0배 또는 SCr ≥4.0 mg/dL 또는 KRT 시작", "KDIGO AKI Guideline (Kellum 2013)", "2012", false],
        ["병기별 원내 사망 OR (동반질환 보정)", "stage 1 2.2 · stage 2 6.1 · stage 3 8.6", "Kellum 2013, Crit Care", "2013", false],
        ["정의·병기의 근거 등급", "ungraded 합의(정의 간 직접 비교 시험 부재)", "Kellum 2013, Crit Care", "2013", false]
      ],
      body: [
        ["두 축의 결합", ["creatinine 축 — baseline 대비 상대 변화와 절대 변화를 함께 사용", "urine output 축 — 시간당 체중 보정 뒤 6시간 지속 요구", "두 기준 중 나쁜 쪽으로 병기를 부여해 단일 병기로 환산"]],
        ["수렴의 경로", ["RIFLE(2004) → AKIN(2007) → KDIGO(2012)로 기준 통합", "정의 통일의 이득: 연구 간 발생률·결과 비교 가능", "남는 비용: 정의가 측정하는 것은 기능이고 손상 자체는 아님"]],
        ["읽을 때의 한계", ["baseline creatinine 추정 방식(입원 전 값·입원 시 값·역산)에 따라 발생률 변동", "SCr은 기능 nephron의 상당 부분이 소실된 뒤에야 상승해서 검출이 늦음", "eGFR 추정식은 steady state를 전제하므로 급성기 기능 정량에 부적합"]]
      ],
      related: ["aki-akd-ckd", "aki-functional-vs-damage", "aki-frequency"],
      papers: [["Kellum 2013 (KDIGO AKI Part 1), Crit Care", "https://doi.org/10.1186/cc11454"], ["Kellum 2021 (AKI Primer), Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-021-00284-z"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"]],
      links: [["KDIGO AKI Guideline", "https://kdigo.org/guidelines/acute-kidney-injury/"]]
    },
    {
      id: "aki-akd-ckd", section: "def", title: "AKI·AKD·CKD는 어떻게 나뉘는가?",
      aliases: ["acute kidney disease", "AKD", "급성 신장병", "persistent AKI", "rapid reversal", "ADQI 16", "시간축"],
      summary: "같은 손상을 시간 길이로 자른 세 구간 — AKI는 7일 이내, AKD는 7–90일, CKD는 90일 초과; AKD는 'pre-CKD'가 아니라 'post-AKI' 구간으로 개념화되고 부분 회복을 담는 stage 0이 별도로 설정",
      facts: [
        ["AKI 구간", "손상 후 7일 이내", "ADQI 16 consensus (Chawla 2017)", "2017", false],
        ["AKD 구간", "AKI 시작 뒤 7–90일", "ADQI 16 consensus (Chawla 2017)", "2017", false],
        ["CKD 전환 판정", "90일 초과 지속", "ADQI 16 consensus (Chawla 2017)", "2017", false],
        ["persistent AKI / rapid reversal", "발생 후 48시간 초과 지속 / 48시간 내 완전 회복", "ADQI 16 consensus (Chawla 2017)", "2017", false],
        ["AKD stage 0", "0A·0B·0C: creatinine 복귀 뒤에도 남는 부분 회복 상태", "ADQI 16 consensus (Chawla 2017)", "2017", false]
      ],
      body: [
        ["구간의 성격", ["AKI: 급성 기능 변화의 검출 창", "AKD: 회복과 미회복이 갈리는 관찰 구간으로, CKD 확정은 유보", "CKD: 구조·기능 이상의 만성 고정"]],
        ["stage 0의 세 갈래", ["0C: creatinine이 baseline 초과이나 1.5배 미만", "0B: creatinine 복귀, 손상·수복 지속 또는 renal reserve 소실(신규·악화 proteinuria·고혈압)", "0A: 기능·손상 지표 모두 정상 범위"]],
        ["임상 운용", ["AKD가 AKI보다 흔하고 다수가 외래에서 식별되므로 병원 중심 정의에서 누락됨", "퇴원 직후 수치로는 CKD 확정을 유보하고 3개월 시점에 재평가", "경계값 48시간·14일·90일은 합의에 의한 선이며 검증 대상"]]
      ],
      related: ["aki-definition", "aki-recovery-definition", "aki-long-term"],
      papers: [["Chawla 2017 (ADQI 16), Nat Rev Nephrol", "https://doi.org/10.1038/nrneph.2017.2"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"], ["Chawla 2014, N Engl J Med", "https://doi.org/10.1056/NEJMra1214243"]]
    },
    {
      id: "aki-functional-vs-damage", section: "def", title: "기능 지표만으로 충분한가?",
      aliases: ["subclinical AKI", "stage 1S", "damage biomarker", "misnomer", "ADQI 2020", "확장 병기"],
      summary: "creatinine·urine output은 기능 지표라 손상 없는 일과성 volume depletion도 기준을 충족함. 반대로 손상 지표만 양성인 환자는 정의 밖에 남음. damage marker를 얹은 확장 병기(1S·A/B)가 제안됐으나 전향 검증 전",
      facts: [
        ["UO 기준 병용 시 검출률", "SCr 단독 17.7% → SCr+UO 62.1%", "Kellum 2021, Nat Rev Dis Primers", "2021", false],
        ["제안된 확장 병기", "1S(기준 미충족 + damage marker 양성) · 1A/1B · 2A/2B · 3A/3B", "ADQI 2020 (Ostermann 2020, Kellum 2021)", "2020", false],
        ["damage marker의 사용 제한", "insult 이전 측정값은 해석할 수 없어서 사전 위험평가 용도로는 비권고(grade A, strong)", "ADQI 23 (Ostermann 2020)", "2020", false],
        ["급성기 기능 정량의 대안", "timed urine creatinine clearance: 세뇨관 분비로 GFR 과대추정", "Chawla 2017 · Kellum 2021", "2021", false],
        ["1S의 예후 의미", "정의 바이오마커에 따라 결론이 뒤집힘. 전향 검증 전", "Ostermann 2020 · Zarbock 2023", "2023", false]
      ],
      body: [
        ["세 종류의 지표", ["functional: SCr · UO · cystatin C, 여과 기능의 대리", "damage: NGAL · KIM-1 · NAG · IL-18, 구조 손상의 대리", "stress: TIMP-2×IGFBP7 · DKK3, 세포주기 정지·세뇨관 스트레스"]],
        ["정의와 생물학의 괴리", ["기능만 움직이고 damage 지표가 오르지 않으면 혈역학적 조정", "damage만 양성이고 기능 기준을 못 채우면 제안된 subclinical 구간", "실험 모델은 구조 손상을 재는 반면 임상 정의는 기능을 재는 비대칭"]],
        ["확장 병기의 현재 위치", ["KDIGO 공식 정의는 미변경이고 1S·A/B는 제안 단계", "같은 환자에게 어느 marker를 쓰는지가 결론을 좌우", "ADQI 23 패널 다수의 제조사 이해관계 신고를 권고 해석 시 고려"]]
      ],
      related: ["aki-definition", "aki-biomarker-classes", "aki-differential"],
      papers: [["Ostermann 2020 (ADQI 23), JAMA Netw Open", "https://doi.org/10.1001/jamanetworkopen.2020.19209"], ["Kellum 2021 (AKI Primer), Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-021-00284-z"], ["Zarbock 2023 (ADQI 28), Nat Rev Nephrol", "https://doi.org/10.1038/s41581-023-00683-3"]]
    },
    {
      id: "aki-recovery-definition", section: "def", title: "'회복'은 어떻게 정의하는가?",
      aliases: ["recovery", "회복", "persistent AKI", "MAKE", "renal recovery", "KRT independence"],
      summary: "KRT 환자의 회복은 'KRT로부터 14일 이상 지속 독립'이라는 조작적 정의로 운용 — 기능 지표 복귀가 구조 수복과 괴리되므로 분자적 회복 정의는 아직 부재하고, 중증 AKI의 상당수가 퇴원 시점에 미회복 상태",
      facts: [
        ["KRT 환자 회복 정의", "KRT로부터 ≥14일 지속 독립 · 중단 후 3일(늦어도 7일) 이내 재평가", "ADQI 16 consensus (Chawla 2017)", "2017", false],
        ["중증(stage 2–3) 중환자 미회복", "41%(회복 없음 26% + 회복 후 재발 15%)", "Ostermann 2025, Lancet", "2025", false],
        ["입원 AKI 뒤 1년 내 major adverse kidney event", "37% · ICU AKI는 3년 내 94%", "Ostermann 2025, Lancet", "2025", false],
        ["회복 지연의 독립 효과", "peak creatinine→회복 기간이 길수록 이후 eGFR 40% 지속 감소·신부전 위험 상승 (veterans 47,903명)", "Vaara 2022, Crit Care", "2022", false],
        ["경계값의 성격", "14일·48시간 경계는 합의에 의한 선이며, 원문도 검증 대상으로 명시", "Chawla 2017, Nat Rev Nephrol", "2017", false]
      ],
      body: [
        ["세 층의 '회복'", ["KRT 독립: 치료 의존의 종료", "creatinine 복귀: 기능 지표의 정상화", "구조 수복: 조직 수준의 복원으로, 위 둘과 분리 가능"]],
        ["왜 분리되는가", ["보상 기전(남은 nephron의 비대·과여과)이 기능 지표를 정상으로 되돌림", "nephron 자체의 비가역 소실은 지표 복귀 뒤에도 잔존", "'겉보기 회복' 신장이 이후 CKD 소인을 갖는 배경"]],
        ["한계·주의", ["분자적 회복 정의 부재 → 연구 간 '회복' 비교가 어려움", "creatinine 기반 회복과 조직 회복의 괴리가 예후 차이로 나타남", "AKD stage 0B를 쓰면 부분 회복을 기록 가능하나 전향 검증 전"]]
      ],
      related: ["aki-akd-ckd", "aki-repair-vs-recovery", "aki-long-term"],
      papers: [["Chawla 2017 (ADQI 16), Nat Rev Nephrol", "https://doi.org/10.1038/nrneph.2017.2"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"], ["Vaara 2022, Crit Care", "https://doi.org/10.1186/s13054-022-04121-x"]]
    },
    {
      id: "aki-frequency", section: "epi", title: "얼마나 흔한가?",
      aliases: ["incidence", "발생률", "epidemiology", "AKI-EPI", "prevalence", "AKD"],
      summary: "입원 환자 20–32%, 완전한 KDIGO 기준을 전향 적용한 ICU에서 57.3%. 숫자의 상당 부분이 정의와 설계(UO 사용·baseline 처리·후향 여부)에서 생김. AKI 없는 AKD가 AKI보다 흔함",
      facts: [
        ["메타분석: 외래 community-acquired / 입원", "8.3% / 20.0–31.7% (154연구·3,585,911명, 84% HIC)", "Kellum 2021, Nat Rev Dis Primers", "2021", false],
        ["pooled 사망률", "23% · KRT 필요 시 49.4%", "Kellum 2021, Nat Rev Dis Primers", "2021", false],
        ["ICU 전향 단면연구", "입실 첫 1주 AKI 57.3% (95% CI 55.0–59.6) · stage 1 18.4% · 2 8.9% · 3 30.0%", "Hoste 2015 (AKI-EPI), Intensive Care Med", "2015", false],
        ["전 세계 규모 (2017)", "약 13.3M명 · 인구기반 10,000 person-years당 114–174명", "Ostermann 2025, Lancet", "2025", false],
        ["AKI 없는 AKD", "검사받은 성인 100명당 3.8 (AKI 1.4 · CKD 10.6) · 그중 77%가 외래 식별", "Ostermann 2025, Lancet", "2025", false]
      ],
      body: [
        ["설계가 만드는 차이", ["UO 기준을 쓰는지에 따라 검출률이 크게 변동", "baseline creatinine 처리 방식에 따라 분모·분자가 모두 이동", "후향 설계는 측정 빈도에 의존해서 과소추정 쪽으로 기움"]],
        ["수치를 읽는 규칙", ["'입원 AKI 20%'와 'ICU AKI 57%'를 한 문장에서 섞지 않음", "발생률(incidence)과 유병률(prevalence) 구분", "종말점을 함께 읽음(전체 AKI vs KDIGO 2–3 vs KRT 필요)"]],
        ["놓치는 환자군", ["외래 AKD: 병원 중심 정의에서 누락", "subclinical 손상: 기능 기준을 못 채워 집계에서 제외", "핍뇨 기록이 없는 환경에서는 SCr 단독 집계로 축소"]]
      ],
      related: ["aki-definition", "aki-severity-outcome", "aki-korea"],
      papers: [["Kellum 2021 (AKI Primer), Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-021-00284-z"], ["Hoste 2015 (AKI-EPI), Intensive Care Med", "https://doi.org/10.1007/s00134-015-3934-7"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"]]
    },
    {
      id: "aki-severity-outcome", section: "epi", title: "중증도와 결과는 어떻게 연결되는가?",
      aliases: ["mortality", "사망률", "stage", "중증도", "outcome", "eGFR at discharge"],
      summary: "병기가 오를수록 사망 위험이 단조 증가하고 퇴원 시점 신기능 저하도 병기와 함께 커짐. 다만 정점 병기 하나보다 지속기간·궤적이 결과를 더 잘 설명",
      facts: [
        ["ICU 보정 사망 OR", "stage 2 2.945 (1.382–6.276, p=0.005) · stage 3 6.884 (3.876–12.228, p<0.001)", "Hoste 2015 (AKI-EPI), Intensive Care Med", "2015", false],
        ["stage 1의 위치", "주모형에서는 비유의(1.679, p=0.109)하나 결측 없는 완전례에서는 유의(2.09, p=0.010)", "Hoste 2015, Intensive Care Med", "2015", false],
        ["퇴원 시 eGFR <60", "AKI군 47.7% vs 비AKI군 14.8% (p<0.001)", "Hoste 2015, Intensive Care Med", "2015", false],
        ["지속 AKI의 사망 hazard", "회복 없는 persistent AKI는 no AKI 대비 전원인 사망 약 5배 (156,699 입원 코호트). 중증도와는 독립", "Vaara 2022, Crit Care", "2022", false],
        ["병기+지속기간 동시 기준", "SCr·UO 두 기준 충족 + 3일 초과 지속에서 사망·KRT 위험 최대 (중환자 32,045명)", "Chawla 2017, Nat Rev Nephrol", "2017", false]
      ],
      body: [
        ["계단의 모양", ["병기 1→3으로 사망·KRT 위험 단조 증가", "stage 1도 전체의 다수를 차지하며 위험 증가에 기여", "KRT 필요군의 사망률은 전체 AKI의 두 배 수준"]],
        ["정점 병기의 한계", ["입실 시 고병기라도 3일 내 회복군의 사망률이 더 낮음", "저병기로 서서히 악화한 군의 사망률이 더 높음", "그 결과 궤적 모양이 최대 병기보다 결과와 잘 연관"]],
        ["읽을 때의 주의", ["보정 변수 구성(APACHE·동반질환·baseline eGFR)에 따라 stage 1의 유의성 변동", "결측 처리 방식에 따라 추정치가 달라짐", "상대위험과 절대위험의 방향이 어긋나는 구간 존재"]]
      ],
      related: ["aki-frequency", "aki-subphenotype", "aki-long-term"],
      papers: [["Hoste 2015 (AKI-EPI), Intensive Care Med", "https://doi.org/10.1007/s00134-015-3934-7"], ["Vaara 2022, Crit Care", "https://doi.org/10.1186/s13054-022-04121-x"], ["Kellum 2013, Crit Care", "https://doi.org/10.1186/cc11454"]]
    },
    {
      id: "aki-global-divide", section: "epi", title: "지역에 따라 무엇이 다른가?",
      aliases: ["LMIC", "HIC", "global", "community-acquired", "지역차", "탈수"],
      summary: "저·중소득국에서는 AKI의 대부분이 지역사회에서 탈수로 발생하고 고소득국에서는 입원 중 hypotension·shock이 주원인임. 다만 baseline risk를 보정하고 국가·센터를 random effect로 두면 대륙 간 차이가 사라짐",
      facts: [
        ["community-acquired 비중", "LMIC 77%(주원인 탈수) vs HIC 50%(주원인 hypotension·shock)", "Kellum 2021, Nat Rev Dis Primers", "2021", false],
        ["LMIC pooled 사망률", "KDIGO stage 3 42% · KRT 46%", "Kellum 2021, Nat Rev Dis Primers", "2021", false],
        ["평균 연령·성비", "전 세계 60세 · LMIC 50세 · 환자의 60%가 남성", "Kellum 2021, Nat Rev Dis Primers", "2021", false],
        ["보정 후 대륙 간 차이", "baseline risk를 보정하고 country·center random effect를 넣으면 AKI 위험과 사망 위험의 차이가 사라짐", "Hoste 2015, Intensive Care Med", "2015", false],
        ["근거의 지역 편중", "메타분석 구성연구의 84%가 고소득국", "Kellum 2021, Nat Rev Dis Primers", "2021", false]
      ],
      body: [
        ["두 개의 역학", ["LMIC: 지역사회·젊은 연령·탈수·감염이 많고, 접근성 제약이 예후를 좌우", "HIC: 입원·고령·다중동반질환·시술 관련", "같은 정의로 세어도 환자군의 성격이 상이"]],
        ["보정 결과", ["관찰된 지역 격차의 상당 부분이 환자 구성·의료체계 차이에 기인", "생물학적 지역차를 주장하려면 baseline risk 보정이 선행 요건", "센터 효과가 큰 영역이므로 단일 센터 결과를 외삽할 때 주의"]],
        ["한계·주의", ["LMIC 자료는 측정 빈도·등록 체계가 달라 비교가 제한", "KRT 접근성 차이가 사망률 해석을 어렵게 함", "소아·신생아 자료는 더 희박"]]
      ],
      related: ["aki-frequency", "aki-korea", "aki-guideline-change"],
      papers: [["Kellum 2021 (AKI Primer), Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-021-00284-z"], ["Hoste 2015 (AKI-EPI), Intensive Care Med", "https://doi.org/10.1007/s00134-015-3934-7"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"]]
    },
    {
      id: "aki-korea", section: "epi", title: "한국에서는 어떤 규모인가?",
      aliases: ["Korea", "한국", "HIRA", "NHIS", "청구자료", "CRRT", "건강보험"],
      summary: "전국 ICU 청구자료에서 AKI 8.3%, 원내 사망 37.2%, 단일기관 입원 코호트에서 14.3%. 청구자료는 진단코드 기반이라 KDIGO 병기를 산출할 수 없고 과소추정 쪽으로 기움. 급성 KRT는 2014년 이후 CRRT가 대부분",
      facts: [
        ["전국 ICU AKI 발생률 (2008→2015)", "7.4% → 8.3% (p for trend <0.001) · 성인 ICU 입원 1,744,235명", "Hwang 2019, Ann Intensive Care", "2019", false],
        ["연령표준화 AKI율", "100,000 person-years당 7,018.6", "Hwang 2019, Ann Intensive Care", "2019", false],
        ["ICU AKI 원내 사망률 (2008→2015)", "39.1% → 37.2% · AKI의 보정 사망 OR 3.74", "Hwang 2019, Ann Intensive Care", "2019", false],
        ["단일기관 입원 AKI (2013년 입원 13,192명)", "14.3%(community-acquired 4.8% · hospital-acquired 9.5%)", "Medina 2022, Yonsei Med J", "2022", false],
        ["CA-AKI vs HA-AKI 예후", "30일 사망 11.4% vs 5.7% · 1년 사망 20.1% vs 13.3% · 1년 내 KRT 4.3% vs 1.4%", "Medina 2022, Yonsei Med J", "2022", false],
        ["급성 KRT 양식 (2005–2016, CRRT 37,337명)", "2014년 이후 급성 KRT의 80% 초과가 CRRT · 서울에서 45.0% 시행", "Park 2018, Kidney Res Clin Pract", "2018", false]
      ],
      body: [
        ["세 자료층", ["전국 청구자료(HIRA·NHIS): 모집단 전수, 코드 기반", "단일기관 전자의무기록: creatinine 기반 KDIGO 적용 가능, 일반화 제약", "KRT 등록·청구: 치료 양식과 지역 분포"]],
        ["청구자료의 한계를 함께 읽기", ["ICD-10 N17 코드와 KRT 시술코드 기반이라 KDIGO 병기·UO 기준이 반영되지 않음", "경증(stage 1)이 누락되어 발생률이 과소추정됨", "'진료 발생' 기준이므로 미진단·미수진이 제외"]],
        ["국제 수치와의 괴리", ["전향 ICU 연구의 57.3%와 청구 ICU 8.3%는 같은 대상을 재지 않으므로 혼용 금지", "단일기관 14.3%는 입원 전체 대상으로 국제 입원 추정치(20–32%)보다 낮음", "차이의 후보: 측정 빈도·baseline 처리·코드 기반 여부"]],
        ["비어 있는 자리", ["전국 creatinine 연계 코호트로 산출한 KDIGO 기반 발생률 미확보", "AKD 구간·외래 AKI의 국내 규모 미확보", "AKI 뒤 장기 추적의 국내 전향 코호트 미확보"]]
      ],
      related: ["aki-frequency", "aki-global-divide", "aki-cohorts"],
      papers: [["Hwang 2019, Ann Intensive Care", "https://doi.org/10.1186/s13613-019-0534-7"], ["Medina 2022, Yonsei Med J", "https://doi.org/10.3349/ymj.2021.0238"], ["Park 2018, Kidney Res Clin Pract", "https://doi.org/10.23876/j.krcp.2018.37.2.119"]],
      links: [["건강보험심사평가원 보건의료빅데이터개방시스템", "https://opendata.hira.or.kr/"]]
    },
    {
      id: "aki-riskfactors", section: "risk", title: "누가 AKI에 취약한가?",
      aliases: ["risk factor", "위험인자", "CKD", "diabetes", "aging", "CHIP", "clonal hematopoiesis"],
      summary: "기존 CKD가 가장 강한 위험인자(최대 10배)이고 당뇨·고령·수술·중증질환이 겹칠수록 위험이 누적됨. 체세포 변이(CHIP)처럼 germline보다 강한 신호를 주는 축도 확인",
      facts: [
        ["기존 CKD", "AKI 위험 최대 10배", "Chawla 2014, N Engl J Med", "2014", false],
        ["당뇨", "투석이 필요한 AKI 입원 위험 약 5배 (risk ratio 5.0, 95% CI 4.8–5.1)", "ADA 2026 (Standards of Care §11)", "2026", false],
        ["CHIP (UK Biobank 428,793명, 유병률 3.4%)", "incident AKI HR 1.34 (1.29–1.40) · AKI-D 1.65 (1.24–2.20)", "Vlasschaert 2024, Nat Med", "2024", false],
        ["CHIP의 driver 의존성", "DNMT3A 1.03 (null) vs non-DNMT3A 1.48 · JAK2 3.08 · SRSF2 2.60 · TP53 2.13", "Vlasschaert 2024, Nat Med", "2024", false],
        ["large CHIP (VAF ≥10%)의 장기 위험", "ASSESS-AKI에서 5년 ESKD 또는 eGFR ≥50% 감소 HR 2.93 (1.08–7.96)", "Vlasschaert 2024, Nat Med", "2024", false]
      ],
      body: [
        ["감수성의 층", ["구조적 예비력: 기존 nephron 수·CKD·노화", "대사·혈역학: 당뇨·심부전·간질환·volume 상태", "급성 노출: 수술·조영제·감염·신독성 약물"]],
        ["체세포 변이 축", ["변이 세포 내재적 과염증이 기전으로 제시됨: Tet2 결손 macrophage에 국한된 NLRP3·IL-1β 상승", "회복 패턴에도 영향: non-DNMT3A에서 nonresolving AKI odds 상승", "Mendelian randomization은 방향만 일치하고 기기 설명력이 낮아 인과 결론 보류"]],
        ["한계·주의", ["위험인자 목록 대부분이 후향 관찰 기반이라 교란이 남음", "같은 위험인자가 검출 확률(측정 빈도)도 함께 높임", "소아·임신·종양 환자군의 위험 구조는 별도"]]
      ],
      related: ["aki-nephrotoxins", "aki-genetics", "aki-long-term"],
      papers: [["Chawla 2014, N Engl J Med", "https://doi.org/10.1056/NEJMra1214243"], ["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"], ["Vlasschaert 2024, Nat Med", "https://doi.org/10.1038/s41591-024-02854-6"]]
    },
    {
      id: "aki-nephrotoxins", section: "risk", title: "약물은 얼마나 기여하는가?",
      aliases: ["nephrotoxin", "신독성", "drug-associated AKI", "NSAID", "stewardship", "RAS 이중차단"],
      summary: "선진국 지역사회 발생 AKI 입원의 약 20%가 약물 기인이고 노출 약물 수에 따라 위험이 가산됨. 이중 RAS 차단처럼 AKI를 늘리는 조합도 RCT에서 확인",
      facts: [
        ["지역사회 발생 AKI 입원 중 약물 기인", "약 20%", "Chawla 2017, Nat Rev Nephrol", "2017", false],
        ["중환자 drug-associated AKI", "약 25%", "Chawla 2017, Nat Rev Nephrol", "2017", false],
        ["신독성 약물 노출 수 효과", "1개 추가마다 AKI odds 53% 증가 · 비중환자 3개 이상 노출 시 25%가 AKI로 진행", "Chawla 2017, Nat Rev Nephrol", "2017", false],
        ["ACEi+ARB 이중차단 (VA NEPHRON-D, n=1,448)", "입원 동반 AKI 12.2 vs 6.7 events/100 person-yr (HR 1.7, 1.3–2.2, P<0.001). 그 결과 시험 조기 중단", "Fried 2013, N Engl J Med", "2013", false],
        ["같은 시험의 hyperkalemia", "6.3 vs 2.6 events/100 person-yr (HR 2.8, 1.8–4.3, P<0.001)", "Fried 2013, N Engl J Med", "2013", false]
      ],
      body: [
        ["기여의 경로", ["혈역학: efferent·afferent arteriole 조절이 차단되어 GFR 유지 여력 소실", "세뇨관 독성: 약물이 농축되는 S3 분절의 직접 손상", "간질성 신염: 면역 매개 반응"]],
        ["이중차단의 생물학", ["angiotensin II의 efferent 수축과 근위세뇨관 Na 재흡수를 동시에 차단", "volume depletion 등 스트레스에서 GFR 유지 여력 소진", "albuminuria는 더 낮아지나 eGFR slope 차이 부재(−2.7 vs −2.9 mL/min/1.73 m²/yr)"]],
        ["임상 운용", ["noxious 조합의 사전 회피가 사후 조절보다 유효", "stewardship: 노출 목록 점검·용량 조정·대체 약제 전환", "단독 RAS 차단 개시 후의 소폭 creatinine 상승은 별개이므로 감별 문서 참조"]]
      ],
      related: ["aki-riskfactors", "aki-differential", "aki-supportive-care"],
      papers: [["Chawla 2017 (ADQI 16), Nat Rev Nephrol", "https://doi.org/10.1038/nrneph.2017.2"], ["Fried 2013 (VA NEPHRON-D), N Engl J Med", "https://doi.org/10.1056/NEJMoa1303154"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"]]
    },
    {
      id: "aki-repeat-injury", section: "risk", title: "손상의 강도·빈도가 결과를 정하는가?",
      aliases: ["repeated injury", "반복 손상", "maladaptive repair", "IFTA", "threshold", "atubular glomeruli"],
      summary: "근위세뇨관만 선택 손상시킨 모델에서 1회는 완전 회복, 1주 간격 3회 반복은 간질 섬유화·세뇨관 위축·이차 사구체경화를 남김. 강도에도 역치가 있어 일정 수준 아래의 손상은 흔적을 남기지 않음",
      facts: [
        ["1회 vs 3회 반복 손상 (PT 특이 모델)", "1회는 완전 회복, 3회는 tubular atrophy와 IFTA · SCr 0.6±0.1 vs 0.18±0.02 mg/dL", "Grgic 2012, Kidney Int", "2012", false],
        ["섬유화와 동반 변화의 상관", "IFTA ↔ 경화 사구체 r=0.99/0.97 · albuminuria r=0.99", "Grgic 2012, Kidney Int", "2012", false],
        ["강도 역치 (정량적 PT 특이 모델)", "낮은 표지 용량에서는 고용량 손상에도 myofibroblast·distal 손상 부재 · 0.15 mg/g에서 전부 출현", "Takaori 2016, J Am Soc Nephrol", "2016", false],
        ["반복 손상 뒤 남는 구조 변화", "α-SMA+ 사구체 14.2%±2.4% · atubular glomeruli 41.6%±2.5% (albuminuria 부재)", "Takaori 2016, J Am Soc Nephrol", "2016", false],
        ["subclinical 손상의 재현", "요 KIM-1만 상승·NGAL 불변·SCr 유의 변화 부재 상태를 같은 모델에서 재현", "Grgic 2012, Kidney Int", "2012", false]
      ],
      body: [
        ["상피 손상만으로 충분한가", ["사구체·집합관을 건드리지 않고 S1/S2만 손상시켜도 CKD 표현형 전체가 재현됨", "podocyte foot process effacement가 없어서, 사구체 일차 손상 없이도 경화가 발생", "경로는 glomerulotubular junction 소실 쪽"]],
        ["세포 간 전파", ["PT에서 distal로: 분리한 distal 세포에서 Ngal·osteopontin 상승", "tubule에서 fibroblast로: 비접촉 공배양만으로 Col1a1·Acta2·Ccl2·IL-6 상승", "myofibroblast 기원은 EMT보다 pericyte·perivascular 쪽으로 무게"]],
        ["한계·주의", ["강도·빈도 근거는 대부분 마우스 유전 모델이라, 인간에 적용할 때 손상 단위를 환산할 수 없음", "KIM-1 발현량이 후속 섬유화의 좋은 지표로 작동하지 않은 사례 존재", "임상에서 '반복 AKI' 정의(간격·강도)가 표준화 미완"]]
      ],
      related: ["aki-failed-repair", "aki-repair-vs-recovery", "aki-long-term"],
      papers: [["Grgic 2012, Kidney Int", "https://doi.org/10.1038/ki.2012.20"], ["Takaori 2016, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2015060647"], ["Ferenbach 2015, Nat Rev Nephrol", "https://doi.org/10.1038/nrneph.2015.3"]]
    },
    {
      id: "aki-differential", section: "risk", title: "무엇이 AKI가 아닌가?",
      aliases: ["감별", "differential", "RAS blockade", "haemodynamic", "SGLT2 inhibitor", "pseudo-AKI"],
      summary: "RAS 차단·SGLT2 억제제·GLP-1 수용체 작용제 개시 직후의 creatinine 상승은 혈역학적 조정이며 손상 지표가 함께 오르지 않음. 세포외액 결핍 징후가 없으면 약을 유지",
      facts: [
        ["RAS 차단 개시 후 허용 범위", "baseline 대비 ≤30% creatinine 상승은 혈역학적 조정으로 해석 (등급 A)", "ADA 2026 (Standards of Care §11)", "2026", false],
        ["ACCORD BP 분석", "집중 혈압강하군의 30%까지의 creatinine 상승이 사망·신장질환 진행과 비연관", "ADA 2026 (Standards of Care §11)", "2026", false],
        ["SPRINT 바이오마커", "eGFR 저하에도 β2-microglobulin·uromodulin·IL-18·KIM-1·NGAL·MCP-1 등 세뇨관 지표 동반 상승 부재", "ADA 2026 (Standards of Care §11)", "2026", false],
        ["SGLT2i·GLP-1 RA 개시 직후", "tubuloglomerular feedback에 따른 혈역학 변화 · 진행성 CKD RCT와 고심혈관위험 RCT에서 AKI 증가 미확인", "ADA 2026 (Standards of Care §11)", "2026", false],
        ["중단한 RAS 차단의 재개 (eGFR 10–60, 6,065명)", "재시작군의 장기 신장 예후·생존이 더 양호 · hyperkalemia 차이 비유의", "ADA 2026 (Standards of Care §11)", "2026", false]
      ],
      body: [
        ["판별의 논리", ["기능 지표만 이동하고 damage 지표가 오르지 않으면 구조 손상으로 읽지 않음", "시간 패턴: 개시 직후 소폭 상승 뒤 안정화", "맥락: 세포외액 결핍·저혈압·신독성 노출의 동반 여부"]],
        ["흔한 오판", ["개시 후 상승을 AKI로 기록하고 약을 영구 중단해서 장기 신보호를 잃음", "volume depletion 상태의 일과성 상승을 구조 손상으로 간주", "조영제 노출 뒤 모든 상승을 조영제 기인으로 귀속"]],
        ["다른 층과의 구분", ["단독 RAS 차단 개시 후의 소폭 상승: 혈역학적 조정", "이중 RAS 차단: AKI 발생 증가, 별개의 층", "기존 CKD 위의 급성 악화: 두 축을 함께 기술"]]
      ],
      related: ["aki-functional-vs-damage", "aki-nephrotoxins", "aki-biomarker-classes"],
      papers: [["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"], ["Fried 2013 (VA NEPHRON-D), N Engl J Med", "https://doi.org/10.1056/NEJMoa1303154"], ["Ostermann 2020 (ADQI 23), JAMA Netw Open", "https://doi.org/10.1001/jamanetworkopen.2020.19209"]]
    },
    {
      id: "aki-haemodynamics", section: "course", title: "혈역학·내피에서 무엇이 먼저 무너지는가?",
      aliases: ["haemodynamics", "혈역학", "endothelium", "내피", "outer medulla", "no-reflow", "glycocalyx"],
      summary: "전체 신혈류 감소만으로는 기능 저하가 설명되지 않고, 이미 저산소인 외수질 S3와 thick ascending limb의 선택적 저관류가 더 크게 작용함. 내피도 투과성과 미세혈류를 바꾸며 관여",
      facts: [
        ["전체 신혈류 감소의 설명력", "이식신 기능부전에서 RBF 40–50% 감소. GFR 저하를 단독으로 설명하지는 못함", "Bonventre 2011, J Clin Invest", "2011", false],
        ["선택적 취약 분절", "proximal pars recta(S3) · thick ascending limb: vasa recta countercurrent 구조 때문에 기저 저산소", "Bonventre 2011, J Clin Invest", "2011", false],
        ["미세혈관 투과성", "설치류 재관류 2시간 내 피질 barrier 소실 (glycocalyx 소실·actin 붕괴)", "Bonventre 2011, J Clin Invest", "2011", false],
        ["no-reflow 현상", "재관류 후 30분 내 피질 peritubular capillary 혈류의 감속 또는 역전", "Bonventre 2011 · Ferenbach 2015", "2015", false],
        ["미세혈관 소실의 방향", "외수질 inner stripe 미세혈관 수 감소 (VEGF 하향 · ADAMTS-1 상향)", "Bonventre 2011, J Clin Invest", "2011", false]
      ],
      body: [
        ["저관류의 구조적 배경", ["vasa recta의 countercurrent 교환으로 외수질이 생리적 저산소 상태", "arteriolar 과수축(endothelin-1 · angiotensin II · thromboxane A2 · adenosine)", "간질 부종과 백혈구–내피 폐색이 추가 허혈을 중첩"]],
        ["내피의 능동 역할", ["glycocalyx가 소실되면 투과성이 늘고 간질 부종이 생김", "접착분자가 상향되면 백혈구가 포획되고 미세혈관이 막힘", "미세혈관 밀도가 줄면 만성 저산소와 섬유화가 서로를 강화함"]],
        ["임상 접점", ["MAP 목표는 일반적으로 65 mmHg. 중증 고혈압·정맥압 상승군에서 더 높은 목표의 이득은 미결", "정맥 울혈(venous congestion) 축이 관류압과 별개로 작용", "허혈 예측 가능한 상황(이식·심장수술)이 개입 창의 후보"]]
      ],
      related: ["aki-inflammation", "aki-cell-death", "aki-supportive-care"],
      papers: [["Bonventre 2011, J Clin Invest", "https://doi.org/10.1172/JCI45161"], ["Ferenbach 2015, Nat Rev Nephrol", "https://doi.org/10.1038/nrneph.2015.3"], ["Kellum 2021 (AKI Primer), Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-021-00284-z"]]
    },
    {
      id: "aki-inflammation", section: "course", title: "염증은 어떤 순서로 들어오는가?",
      aliases: ["inflammation", "염증", "macrophage", "neutrophil", "complement", "sepsis", "translation shutdown"],
      summary: "호중구가 재관류 30분, 대식세포가 1시간부터 들어와 24시간에 정점을 이루고 3–5일에 수복형으로 전환 — 같은 세포를 언제 제거하는지에 따라 효과의 부호가 뒤집히므로 '염증 차단'이 일률적으로 유익하지 않음",
      facts: [
        ["호중구·단핵구 시간축", "호중구 재관류 30분 외수질 축적 · 단핵구·대식세포 1시간부터 증가해 24시간 정점·7일까지 지속", "Bonventre 2011, J Clin Invest", "2011", false],
        ["수복형 전환 시점", "3–5일에 mannose receptor·arginase-1 높은 pro-repair 표현형 우세", "Bonventre 2011, J Clin Invest", "2011", false],
        ["고갈 시점에 따른 부호 반전", "손상 전 고갈은 BUN 피크 감소 · 48·72시간 후 고갈은 day5 Ki-67+ 세포 45% 감소와 회복 지연(P<0.001)", "Lee 2011, J Am Soc Nephrol", "2011", false],
        ["보체 진입 경로", "alternative pathway 주도. 재관류 6시간에 세뇨관 C3 침착 · factor B 억제가 보호적", "Bonventre 2011, J Clin Invest", "2011", false],
        ["패혈증 AKI의 분자 시계", "NFκB 매개 염증분자 4시간 내 기저 복귀 → 핵산 기반 antiviral 8–16시간 → 전역 translation shutdown", "Hato 2025, J Am Soc Nephrol", "2025", false]
      ],
      body: [
        ["세포의 순서", ["선천면역: 호중구(분 단위) → 단핵구·대식세포(시간~일 단위)", "림프구: NKT 조기 소실 · double-negative T 24시간 급증 · TH17 3일 정점", "지속층: effector-memory T·plasma cell은 주~개월 단위 잔존"]],
        ["세포 수보다 표현형", ["고갈 후 M1 주입은 손상을 되돌리고 M2 주입은 악화를 유발하지 않음", "전환은 국소 환경이 정함: 근위세뇨관과의 비접촉 공배양만으로 Arg1·MR 유도", "마커 2–3개 라벨과 단일세포 기반 상태 정의의 직접 매핑은 미완"]],
        ["임상 적용을 막는 시간 제약", ["초기 염증창의 대부분이 환자 내원 전에 끝나므로, 상류 수용체·cytokine 표적 시험이 잇따라 실패한 것과 들어맞음", "translation shutdown은 수동적 정지가 아니라 재프로그래밍 구간", "인간 AKI의 면역세포 동역학 자료가 사실상 공백"]]
      ],
      related: ["aki-haemodynamics", "aki-cell-death", "aki-sepsis"],
      papers: [["Bonventre 2011, J Clin Invest", "https://doi.org/10.1172/JCI45161"], ["Lee 2011, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.2009060615"], ["Lee 2024, Nat Rev Nephrol", "https://doi.org/10.1038/s41581-024-00875-5"], ["Hato 2025, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.0000000809"]]
    },
    {
      id: "aki-cell-death", section: "course", title: "세뇨관은 어떤 양식으로 죽는가?",
      aliases: ["cell death", "세포사", "necroptosis", "ferroptosis", "regulated necrosis", "MPT", "liproxstatin"],
      summary: "ATN은 수동적 괴사가 아니라 조절된 괴사가 분절 전체의 죽음을 동기화하는 과정임. necroptosis·mitochondrial permeability transition·ferroptosis가 부분 중첩하며 최소 3경로가 함께 작동",
      facts: [
        ["두 독립 경로의 유전학적 분리", "치사 수준 허혈에서 CypD/RIPK3 double-ko만 전 개체 장기 생존 · 단일 ko는 사망 (RIPK3-ko P<0.001 · CypD-ko P<0.01)", "Linkermann 2013, PNAS", "2013", false],
        ["apoptosis의 기여", "재관류 96시간까지 cleaved caspase-3 미검출. caspase-8/RIPK3 dko의 추가 보호도 없음", "Linkermann 2013, PNAS", "2013", false],
        ["ferroptosis의 유전학적 입증", "유도성 Gpx4 전신 KO 마우스가 평균 13.5일에 급성 신부전으로 사망 (n=19, P<0.0001)", "Friedmann Angeli 2014, Nat Cell Biol", "2014", false],
        ["ferroptosis 억제제", "Liproxstatin-1 (IC50 22 nM · 경구 bioavailability 52%): median survival 11→14일", "Friedmann Angeli 2014, Nat Cell Biol", "2014", false],
        ["경로 기여의 자극 의존성", "mild 허혈은 RIPK3-ko 우세 · cisplatin AKI는 CypD-ko 우세. 병용에도 손상이 남아 제3 경로를 시사", "Linkermann 2013 · Linkermann 2014", "2014", false]
      ],
      body: [
        ["동기화 괴사", ["분리 근위세뇨관이 세포→세포 전달을 시사하는 동역학으로 빠르게 괴사", "형태가 AKI 환자 요침사 cast 소견과 유사", "방출된 danger signal이 호중구·대식세포 유입을 유도하는 necroinflammation 고리"]],
        ["죽이는 것 외의 효과", ["ferroptotic stress는 손상연관 근위세뇨관 상태를 고착 — 방어축(system xc−/GSH/GPX4) 하향·Acsl4 상향", "mild 손상에 stress를 더하면 손상 상태 세포가 '감소'가 아니라 '증가'", "억제제 투여로 위축·손상 마커·세포사 지표가 되돌아감"]],
        ["성차와 귀속의 함정", ["female tubule의 ferroptosis 저항은 radical-trapping과 ESR1 의존 경로가 함께 작용. 억제제는 수컷만 보호", "약리 억제제의 반응을 근거로 양식을 귀속하는 추론은 off-target으로 무효화 가능", "양식 귀속에는 유전적 결손 + 양식 특이 생화학 지표가 함께 필요"]]
      ],
      related: ["aki-inflammation", "aki-metabolic-failure", "aki-failed-repair"],
      papers: [["Linkermann 2013, PNAS", "https://doi.org/10.1073/pnas.1305538110"], ["Friedmann Angeli 2014, Nat Cell Biol", "https://doi.org/10.1038/ncb3064"], ["Linkermann 2014, PNAS", "https://doi.org/10.1073/pnas.1415518111"], ["Ide 2021, eLife", "https://doi.org/10.7554/eLife.68603"], ["Tonnus 2025, Nature", "https://doi.org/10.1038/s41586-025-09389-x"]]
    },
    {
      id: "aki-metabolic-failure", section: "course", title: "대사 실패는 어떻게 기능을 떨어뜨리는가?",
      aliases: ["metabolism", "대사", "PGC1a", "NAD", "nicotinamide", "gluconeogenesis", "lactate"],
      summary: "허혈 후 세뇨관 PGC1α가 떨어지면서 de novo NAD 합성 경로가 함께 꺼지고, 근위세뇨관의 gluconeogenesis 소실이 전신 lactate 처리 실패로 이어짐. 전구체 보충이 이미 생긴 손상도 개선시킨 점이 개입 후보",
      facts: [
        ["PGC1α의 인과", "PGC1α−/−는 악화. 세뇨관 유도성 과발현은 생존(p=0.0039)·기능(p<0.0001) 개선. 내피 특이 과발현은 무효", "Tran 2016, Nature", "2016", false],
        ["nicotinamide 보충", "400 mg/kg/day ×4일로 PGC1α−/−의 허혈성 AKI 완전 예방 · 재관류 18시간 후 단회 투여도 개선(p=0.0011)", "Tran 2016, Nature", "2016", false],
        ["비침습 지표", "요중 quinolinate:tryptophan(uQ:T) 사분위가 AKI 위험과 단조 증가 (ICU 215명 · APACHE II 보정 후에도 유의)", "Poyan Mehr 2018, Nat Med", "2018", false],
        ["신장 lactate·glucose flux (심장수술)", "net renal lactate flux −0.18±0.43 → 0.21±0.22 · net glucose release 0.70±0.9 → 0.16±0.54 µmol min⁻¹ kg⁻¹ (P<0.001 / P=0.008)", "Legouis 2020, Nat Metab", "2020", false],
        ["전신 결과와의 연결", "ICU 24,273명에서 '저포도당+고lactate' 패턴의 최강 예측인자가 AKI · 초과 사망이 이 하위군에 국한 (OR≈2.1)", "Legouis 2020, Nat Metab", "2020", false]
      ],
      body: [
        ["축의 구조", ["PGC1α가 de novo NAD 합성 효소군을 함께 조절", "Nam→NAMPT→NAD→β-hydroxybutyrate→HCAR2→PGE2 경로가 보호를 매개", "QPRT는 근위세뇨관 상피에 풍부하며 PGC1α 하류의 병목 지점"]],
        ["기능 손실이 나타나는 방식", ["손상 근위세뇨관에서 FBP1·PCK1·PCK2 하향, 해당과정 유전자 상향", "lactate tolerance test 청소 지연과 동위원소 측정 glucose release 감소로 교차 확인", "28일 시점에도 일부 세포가 비생리적 대사 상태로 잔존"]],
        ["한계·주의", ["요중 quinolinate의 전부가 신장 내 차단에서 오는지 미확정(간 기여 가능)", "최적 NAD 전구체 미확정. nicotinamide는 PARP·sirtuin 억제도 함께 일으킴", "임상 근거는 Phase 1 안전성 수준이고 효능 검정력은 없음"]]
      ],
      related: ["aki-cell-death", "aki-haemodynamics", "aki-pharmacotherapy"],
      papers: [["Tran 2016, Nature", "https://doi.org/10.1038/nature17184"], ["Poyan Mehr 2018, Nat Med", "https://doi.org/10.1038/s41591-018-0138-z"], ["Legouis 2020, Nat Metab", "https://doi.org/10.1038/s42255-020-0238-1"]]
    },
    {
      id: "aki-biomarker-classes", section: "dx", title: "바이오마커는 어떻게 분류하는가?",
      aliases: ["biomarker", "바이오마커", "NGAL", "KIM-1", "TIMP-2", "IGFBP7", "DKK3", "cystatin C"],
      summary: "기능·손상·스트레스 세 갈래로 나누고 각 갈래가 다른 질문에 답함. 같은 마커라도 코호트 구성과 종말점에 따라 성능이 크게 갈리므로, AUC는 환자군·종말점과 함께 읽어야 함",
      facts: [
        ["3분류", "functional(SCr·UO·cystatin C) · damage(NGAL·KIM-1·NAG·IL-18·osteopontin) · stress(TIMP-2×IGFBP7 · DKK3)", "ADQI 23 (Ostermann 2020)", "2020", false],
        ["단일 병인 소아 코호트의 NGAL", "cardiopulmonary bypass 71명 중 2시간 urine NGAL AUC 0.998 · cutoff 50 µg/L에서 sensitivity 1.00·specificity 0.98", "Mishra 2005, Lancet", "2005", false],
        ["혼합 중환자 코호트의 기존 마커", "urine/plasma NGAL·cystatin C·KIM-1·IL-18·pi-GST·L-FABP 모두 AUC ≤0.72 (n=728)", "Kashani 2013, Crit Care", "2013", false],
        ["cell cycle arrest 마커", "[TIMP-2]·[IGFBP7] AUC 0.80으로 기존 7개 마커를 유의하게 능가 (P<0.002)", "Kashani 2013, Crit Care", "2013", false],
        ["KRT 필요 예측 pooled AUROC (>15,000명)", "urine NGAL 0.72 (0.64–0.80) · blood NGAL 0.76 ≈ sCr 0.76 · cystatin C 0.77 · TIMP-2×IGFBP7 0.86 (0.79–0.93)", "ADQI 23 (Ostermann 2020)", "2020", false],
        ["규제 승인 현황", "NGAL은 소아 중증 AKI 예측(2023) · TIMP-2×IGFBP7은 중등도–중증 AKI 예측", "Ostermann 2025, Lancet", "2025", false]
      ],
      body: [
        ["세 갈래가 답하는 질문", ["functional: 지금 여과가 얼마나 떨어졌는가", "damage: 구조 손상이 실제로 있는가", "stress: 세포가 손상 전 단계의 스트레스 상태인가"]],
        ["성능이 갈리는 이유", ["단일 병인·단일 시점(심장수술 소아)의 고성능은 혼합 병인 코호트로 전이되지 않음", "면역세포 유래 NGAL이 신장 손상을 뜻하지 않는 경우", "cutoff 불일치와 단일 측정 의존"]],
        ["읽는 규칙", ["AUC는 코호트 구성(병인·기저 CKD·동반질환)과 함께 기재", "종말점을 구분: 전체 AKI vs KDIGO 2–3 vs KRT 필요", "손상 전 측정값은 해석할 수 없어서 사전 위험평가에 사용하지 않음"]]
      ],
      related: ["aki-functional-vs-damage", "aki-biomarker-intervention", "aki-prediction"],
      papers: [["Ostermann 2020 (ADQI 23), JAMA Netw Open", "https://doi.org/10.1001/jamanetworkopen.2020.19209"], ["Mishra 2005, Lancet", "https://doi.org/10.1016/S0140-6736(05)74811-X"], ["Kashani 2013, Crit Care", "https://doi.org/10.1186/cc12503"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"]]
    },
    {
      id: "aki-biomarker-intervention", section: "dx", title: "바이오마커가 중재로 이어진 근거는?",
      aliases: ["PrevAKI", "BigpAK", "protocolized care", "중재", "care bundle", "rule-out"],
      summary: "스트레스 마커 양성자를 선별해 보호 번들을 적용한 RCT 2건에서 AKI가 줄어든 것이 현재까지 유일한 '마커→중재' 연결. 음성 결과도 rule-out 용도로 쓰임",
      facts: [
        ["심장수술 후 (PrevAKI)", "TIMP-2×IGFBP7 ≥0.3 양성자 선별 + protocolized care → 72시간 AKI 17% 감소", "ADQI 23 (Ostermann 2020)", "2020", false],
        ["복부 대수술 (BigpAK)", "같은 선별 전략으로 stage 2–3 AKI 13% 감소", "ADQI 23 (Ostermann 2020)", "2020", false],
        ["권고 등급", "검증된 바이오마커로 예방중재 수혜 집단을 선별 (grade A, strong)", "ADQI 23 (Ostermann 2020)", "2020", false],
        ["위험 구간", "0.3 ((ng/mL)²/1000) 이상에서 위험 급상승 · 2.0 이상에서 KDIGO 2–3 약 5배·MAKE30 약 2배", "Kashani 2013, Crit Care", "2013", false],
        ["rule-out 용도", "핍뇨 중환자라도 <0.3이면 중증 AKI 진행 위험 증가 부재", "ADQI 23 (Ostermann 2020)", "2020", false],
        ["지속성 AKI 예측 마커", "preoperative urinary DKK3 AUROC 0.78 · DKK3/Cr >471 pg/mg에서 90일 지속 신기능장애 OR 6.67 (1.67–26.61)", "ADQI 23 (Ostermann 2020)", "2020", false]
      ],
      body: [
        ["번들의 내용", ["혈역학 최적화: 관류압·심박출 관리", "volume 상태 조정과 과부하 회피", "신독성 노출 중단·조정"]],
        ["선별이 바꾸는 것", ["같은 번들을 전원에게 적용하기보다 고위험군에 집중", "양성 예측으로 조기 개입, 음성 예측으로 불필요한 개입 회피", "임상모형(동시점 SCr 포함)에 추가 시 예측 지표 개선"]],
        ["한계·주의", ["종말점이 AKI 발생률이며 사망·KRT 등 hard endpoint 이득은 미확립", "단일 센터·특정 수술군 중심이라 일반 중환자 전체로의 외삽은 미검증", "권고 패널의 제조사 이해관계 신고를 해석 시 고려"]]
      ],
      related: ["aki-biomarker-classes", "aki-supportive-care", "aki-prediction"],
      papers: [["Ostermann 2020 (ADQI 23), JAMA Netw Open", "https://doi.org/10.1001/jamanetworkopen.2020.19209"], ["Kashani 2013, Crit Care", "https://doi.org/10.1186/cc12503"], ["Zarbock 2023 (ADQI 28), Nat Rev Nephrol", "https://doi.org/10.1038/s41581-023-00683-3"]]
    },
    {
      id: "aki-prediction", section: "dx", title: "발생을 미리 예측할 수 있는가?",
      aliases: ["prediction", "예측", "machine learning", "RNN", "EHR", "alert", "furosemide stress test"],
      summary: "전자의무기록 시계열 모델이 48시간 선행 예측에서 중증 AKI와 투석 필요 AKI를 높은 비율로 포착. 다만 경보당 위양성 비용과 코호트 편향, 외부·전향 검증 부재가 실사용의 장벽",
      facts: [
        ["EHR 시계열 모델 (703,782명)", "위경보 2 : 진경보 1 작동점에서 전체 AKI의 55.8% 포착 (ROC AUC 92.1% · PR AUC 29.7%)", "Tomašev 2019, Nature", "2019", false],
        ["중증 사례 포착", "stage 3의 84.1% · 30일 내 투석 필요 AKI의 84.3% · 90일 내 정기 외래 투석의 90.2%", "Tomašev 2019, Nature", "2019", false],
        ["기존 모형 대비", "같은 precision에서 3,599-feature GBT baseline은 36.0% (P<1×10⁻⁶)", "Tomašev 2019, Nature", "2019", false],
        ["코호트 편향", "여성이 코호트의 6.38%뿐이며 성능이 더 낮음 · UO 미기록으로 ground truth는 SCr 기반만 사용", "Tomašev 2019, Nature", "2019", false],
        ["생리적 부하 검사", "furosemide stress test 1 mg/kg IV 후 2시간 내 UO <200 mL가 stage 3 진행에 sensitivity 87%·specificity 84%", "Ostermann 2025, Lancet", "2025", false]
      ],
      body: [
        ["세 접근", ["정적 위험점수: 시술 전 위험 층화", "시계열 모델: 연속 경보로 선행 시간 확보", "생리적 부하 검사: 예비력 직접 측정"]],
        ["위양성의 구성", ["위양성의 24.9%는 48시간보다 더 일찍 나온 경보 (그중 57.1%가 기존 CKD)", "24.1%는 사건 뒤에 남은 경보", "나머지의 88%도 중증 신기능 저하·기지 신병리 보유자"]],
        ["한계·주의", ["외부·전향 검증과 코드 공개가 없어 재현성 평가 불가", "경보가 행동으로 이어지는 경로(무엇을 할지)가 모델 밖에 있음", "전자 경보 단독의 결과 개선 근거는 아직 혼재"]]
      ],
      related: ["aki-biomarker-intervention", "aki-subphenotype", "aki-new-method"],
      papers: [["Tomašev 2019, Nature", "https://doi.org/10.1038/s41586-019-1390-1"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"], ["Ostermann 2020 (ADQI 23), JAMA Netw Open", "https://doi.org/10.1001/jamanetworkopen.2020.19209"]]
    },
    {
      id: "aki-subphenotype", section: "dx", title: "하나의 정의 안에 몇 개의 생물학이 있는가?",
      aliases: ["subphenotype", "아형", "endotype", "latent class", "trajectory", "predictive enrichment"],
      summary: "같은 급성 세뇨관 손상이라도 원인이 다르면 전임상 발현 중복이 10% 미만. 임상에서는 궤적 군집과 잠재계층 분석이 중증도 축과 독립된 하위집단을 재현하고, 그중 하나는 치료 반응 차이까지 보임",
      facts: [
        ["전임상 원인별 발현 중복", "저혈압·renal artery ligation·sepsis 간 유전자 발현 중복 10% 미만", "Ostermann 2025, Lancet", "2025", false],
        ["궤적 군집 (ICU 6,816명)", "궤적 모양이 최대 KDIGO stage보다 원내 사망과 더 잘 연관", "Vaara 2022, Crit Care", "2022", false],
        ["잠재계층 분석", "discovery n=794 · 독립 replication n=425 모두에서 2-class 최적 (VLMR p=0.004 · 할당확률 0.96–0.98)", "Bhatraju 2019, Am J Respir Crit Care Med", "2019", false],
        ["AKI-SP2의 예후", "28일 사망 aRR 2.5 (1.6–4.1) / 2.2 (1.3–3.5) · 7일 신기능 비회복 aRR 4.4 (2.5–7.9) / 1.6 (1.1–2.2)", "Bhatraju 2019, Am J Respir Crit Care Med", "2019", false],
        ["치료 반응 차등 (VASST 재분석, AKI 271명)", "AKI-SP1만 vasopressin 추가로 90일 사망 46%→27% (RR 0.54, 0.32–0.92) · SP2는 무반응 (RR 0.99)", "Bhatraju 2019, Am J Respir Crit Care Med", "2019", false]
      ],
      body: [
        ["세 종류의 층화", ["궤적: 시간에 따른 모양(회복·지속·악화)", "생물학: 내피 활성화·염증 지표 기반 잠재계층", "회복: peak 뒤 회복 기간이라는 독립 축"]],
        ["prognostic과 predictive의 구분", ["prognostic: 결과를 예측하나 치료 선택을 바꾸지 않음", "predictive: 치료 반응이 하위집단별로 갈림", "AKI-SP1/SP2의 vasopressin 차등이 후자의 사례 (상호작용 p=0.05)"]],
        ["한계·주의", ["3변수 침상 분류모델의 C-statistic은 높으나 전향 검증 미완", "subphenotype을 정의한 코호트들이 소변을 수집하지 않아 세뇨관 손상 축이 모델에 부재", "임상 subphenotype과 세포상태(failed repair 등)를 잇는 대응표 부재"]]
      ],
      related: ["aki-severity-outcome", "aki-failed-repair", "aki-sepsis"],
      papers: [["Vaara 2022, Crit Care", "https://doi.org/10.1186/s13054-022-04121-x"], ["Bhatraju 2019, Am J Respir Crit Care Med", "https://doi.org/10.1164/rccm.201807-1346OC"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"]]
    },
    {
      id: "aki-supportive-care", section: "tx", title: "지지요법의 기둥은 무엇인가?",
      aliases: ["supportive care", "지지요법", "fluid", "crystalloid", "MAP", "stewardship", "dose intensity"],
      summary: "관류 유지·적절한 수액·신독성 노출 관리가 축이고 세부 선택지는 대부분 근거가 엇갈림. 반대로 '용량을 키우면 회복이 빨라진다'는 가정은 대규모 RCT 2건에서 명확히 기각",
      facts: [
        ["KRT 용량 강도", "solute clearance 강도의 회복 효과 부재 (대규모 RCT 2건, level 1)", "Kellum 2021 · Zarbock 2023", "2023", false],
        ["MAP 목표", "일반적으로 65 mmHg로 충분 · 중증 고혈압·정맥압 상승군의 상향 목표는 시험 결과가 엇갈려 고정 목표 비권고", "Kellum 2021 · Ostermann 2025", "2025", false],
        ["balanced crystalloid", "SMART·SALT-ED에서 MAKE90 감소 · BaSICS·PLUS와 메타분석에서는 이득 부재", "Zarbock 2023 (ADQI 28)", "2023", false],
        ["ADQI 28의 절충", "환자별 생화학 프로파일에 따른 수액 선택 (2B). 소아는 balanced 선호로 성인 권고와 갈림", "Zarbock 2023, Nat Rev Nephrol", "2023", false],
        ["수액 제한 전략", "REVERSE-AKI는 KRT 사용 감소 · CLASSIC은 신장 결과 비우월", "Zarbock 2023, Nat Rev Nephrol", "2023", false],
        ["수술 전 RAAS 억제제", "종래 중단 권고 vs Stop-or-Not RCT(n=2222, 양군 AKI 11%)가 갈림", "Ostermann 2025, Lancet", "2025", false]
      ],
      body: [
        ["세 축", ["관류: MAP·심박출·정맥 울혈 해소", "volume: 결핍 교정과 과부하 회피의 양방향 관리", "노출: 신독성 약물 중단·용량 조정·조영제 최소화"]],
        ["세부 선택의 현재", ["수액 종류는 단일 정답이 없어서 생화학 프로파일에 따라 개별화", "제한 전략은 KRT 사용을 줄이나 신장 결과 우월성 미확립", "modality·ultrafiltration rate·fluid balance·dialysate 온도·Na는 근거가 약함"]],
        ["확립된 음성 결과", ["용량 강도를 올려도 회복·사망 개선 부재", "조기 KRT 개시의 일률적 이득 부재", "상류 cytokine 표적만 차단한 시도는 임상에서 실패"]]
      ],
      related: ["aki-krt-timing", "aki-nephrotoxins", "aki-pharmacotherapy"],
      papers: [["Zarbock 2023 (ADQI 28), Nat Rev Nephrol", "https://doi.org/10.1038/s41581-023-00683-3"], ["Kellum 2021 (AKI Primer), Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-021-00284-z"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"]]
    },
    {
      id: "aki-krt-timing", section: "tx", title: "KRT는 언제 시작하는가?",
      aliases: ["KRT", "RRT", "dialysis", "투석", "ELAIN", "AKIKI", "STARRT-AKI", "timing"],
      summary: "긴급 적응증이 없으면 지켜보며 기다리는 전략이 기본. 단일기관 조기 개시 시험의 이득이 다기관 시험에서 재현되지 않았고, 지연 전략이 불필요한 KRT를 줄였으나 지연에도 상한이 존재",
      facts: [
        ["조기 개시 지지 근거", "단일기관 ELAIN에서 KDIGO stage 2 조기 개시로 생존 개선", "Kellum 2021 · Zarbock 2023", "2023", false],
        ["다기관 시험의 결과", "AKIKI·IDEAL-ICU·STARRT-AKI에서 조기 개시 이득 부재", "Kellum 2021 · Zarbock 2023", "2023", false],
        ["지연 전략의 효과", "RRT 사용 평균 약 40% 감소 · STARRT-AKI 가속군의 90일 RRT 의존이 더 높음", "Zarbock 2023 · Ostermann 2025", "2025", false],
        ["지연의 상한 (AKIKI-2)", "stage 3·72시간 초과 핍뇨·BUN >140 mg/dL에서 추가 지연이 60일 사망률 상승", "Zarbock 2023, Nat Rev Nephrol", "2023", false],
        ["중단·회복 평가", "KRT로부터 ≥14일 지속 독립을 회복으로 간주 · 중단 후 3일(늦어도 7일) 내 재평가", "Chawla 2017 (ADQI 16)", "2017", false]
      ],
      body: [
        ["긴급 적응증", ["난치성 고칼륨혈증", "난치성 대사성 산증", "체액과다로 인한 호흡 곤란", "요독증 증후(심막염·의식 변화)"]],
        ["왜 조기 개시가 이득을 못 내는가", ["지연군 상당수가 자발 회복으로 KRT를 받지 않음 (IDEAL-ICU)", "조기 개시는 불필요한 치료 노출과 혈역학 부담을 추가", "가속군에서 장기 KRT 의존이 더 높게 관찰"]],
        ["운용 원칙", ["긴급 적응증이 없으면 watchful waiting", "지연에도 상한이 있어서 중증 지속 핍뇨·고요독 구간에서는 추가 지연 회피", "양식·용량보다 시작·중단 시점이 결과에 가까움"]]
      ],
      related: ["aki-supportive-care", "aki-recovery-definition", "aki-korea"],
      papers: [["Zarbock 2023 (ADQI 28), Nat Rev Nephrol", "https://doi.org/10.1038/s41581-023-00683-3"], ["Kellum 2021 (AKI Primer), Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-021-00284-z"], ["Chawla 2017 (ADQI 16), Nat Rev Nephrol", "https://doi.org/10.1038/nrneph.2017.2"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"]]
    },
    {
      id: "aki-sepsis", section: "tx", title: "패혈증 AKI는 따로 다루는가?",
      aliases: ["sepsis-associated AKI", "SA-AKI", "패혈증", "endotype", "Sepsis-3", "haemoadsorption"],
      summary: "중환자 AKI의 45–70%가 감염 연관이며 Sepsis-3와 KDIGO를 동시에 충족하고 7일 이내 발생한 경우로 정의. 기전이 단일하지 않아 임상 표현형이 특정 endotype으로 환원되지 않음",
      facts: [
        ["중환자 AKI 중 sepsis 연관 비중", "45–70%", "Zarbock 2023 (ADQI 28)", "2023", false],
        ["정의 혼재의 결과", "47개 관찰연구 리뷰에서 sepsis 정의 4종·AKI 정의 3종이 혼재해 발생률 14–87% · 사망률 11–77%", "Zarbock 2023, Nat Rev Nephrol", "2023", false],
        ["SA-AKI 정의", "Sepsis-3 + KDIGO 동시 충족 + sepsis 진단 후 7일 이내 · 48시간 이내 early / 48시간–7일 late", "Zarbock 2023, Nat Rev Nephrol", "2023", false],
        ["early vs late", "late 쪽 예후가 더 나쁨", "Zarbock 2023, Nat Rev Nephrol", "2023", false],
        ["기전의 다층성", "염증·complement·RAAS 조절이상·mitochondrial dysfunction·metabolic reprogramming·미세·대순환 이상의 endotype 조합", "Zarbock 2023, Nat Rev Nephrol", "2023", false],
        ["진행 중 검증", "Polymyxin B haemoadsorption을 endotoxin activity 0.6–0.9 구간에서 TIGRIS(NCT03901807)로 검증 중", "Zarbock 2023, Nat Rev Nephrol", "2023", false]
      ],
      body: [
        ["왜 분리해 다루는가", ["발생 시점이 감염 경과를 따라가 개입 창이 다름", "혈역학 프로파일(분포성 쇼크)이 허혈 모델과 상이", "사망률이 전체 AKI보다 높고 다장기 침범을 동반"]],
        ["정의 표준화의 효과", ["발생률·사망률 추정치의 폭이 정의 혼재에서 상당 부분 발생", "ADQI 28의 시간 창·순서 규정으로 연구 간 비교 가능성 개선", "소아 SA-AKI 정의는 아직 성인 기준 차용"]],
        ["한계·주의", ["mitochondrial dysfunction을 표적하는 임상개발 단계 화합물 부재", "임상 phenotype(stage × biomarker)과 endotype의 1:1 대응 부재", "감수성을 설명하는 후보가 유전 변이보다 epigenetic cross-tolerance 쪽으로 이동"]]
      ],
      related: ["aki-inflammation", "aki-subphenotype", "aki-pharmacotherapy"],
      papers: [["Zarbock 2023 (ADQI 28), Nat Rev Nephrol", "https://doi.org/10.1038/s41581-023-00683-3"], ["Hato 2025, J Am Soc Nephrol", "https://doi.org/10.1681/ASN.0000000809"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"]]
    },
    {
      id: "aki-pharmacotherapy", section: "tx", title: "약물 치료는 어디까지 왔는가?",
      aliases: ["pharmacotherapy", "약물치료", "alkaline phosphatase", "fenoldopam", "ANP", "senolytic", "치료 창"],
      summary: "AKI 자체를 치료하는 승인 약물이 아직 부재하고 유망했던 후보들이 대규모 시험에서 재현에 실패. 전임상에서 기능 회복 뒤 시작해도 효과를 낸 개입이 치료 창의 후보로 남음",
      facts: [
        ["recombinant alkaline phosphatase", "소규모 시험에서 28일 creatinine clearance 개선 · sepsis-associated AKI 301명 시험에서 재현 실패", "Kellum 2021, Nat Rev Dis Primers", "2021", false],
        ["fenoldopam", "심혈관 수술 메타분석과 Work Group pooled RR 0.96 (0.76–1.2, ns)이 갈림", "Kellum 2013, Crit Care", "2013", false],
        ["ANP", "전체 null · 저용량 하위군만 RRT 감소 (OR 0.34, 0.12–0.96) · 고용량은 저혈압 증가 (OR 4.13, 1.38–12.41)", "Kellum 2013, Crit Care", "2013", false],
        ["세포치료·성장인자", "mesenchymal stem cell · BMP-7 agonist · HGF mimetic 모두 AKI 발생·중증도 감소 미입증", "Zarbock 2023 (ADQI 28)", "2023", false],
        ["원인별 표적치료의 현재", "obstructive uropathy·aHUS 정도만 분자 기반 표적치료 가능", "Kellum 2021, Nat Rev Dis Primers", "2021", false],
        ["전임상 치료 창", "신독성 AKI 후 day4(기능 회복 후) 시작한 YAP1/TEAD 억제 또는 senolytic이 day30 BUN 보존", "De Chiara 2022, Nat Commun", "2022", false]
      ],
      body: [
        ["실패의 구조", ["초기 염증창이 환자 내원 전에 끝나서 상류 표적 약물의 창이 사라짐", "단일 경로 차단으로 최소 3개 사멸 경로를 덮지 못함", "실험 AKI는 구조 손상으로, 임상 AKI는 기능으로 정의해 대상이 어긋남"]],
        ["남아 있는 후보", ["대사 보충: NAD 전구체(Phase 1 안전성 단계)", "수복기 표적: endoreplication·senescence 축", "ferroptosis 억제: 전임상 유전·약리 근거 보유"]],
        ["치료 창의 조작화 문제", ["마우스에서 안전했던 시점을 인간에서 어떤 지표로 정할지 미정", "허혈 모델의 창이 좁아 예측 가능한 허혈(이식·심장수술)로의 적용이 현실적", "세포사를 차단하면 손상 세포가 살아남아 다른 위험이 생길 가능성"]]
      ],
      related: ["aki-metabolic-failure", "aki-cell-death", "aki-repair-vs-recovery"],
      papers: [["Kellum 2021 (AKI Primer), Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-021-00284-z"], ["Kellum 2013, Crit Care", "https://doi.org/10.1186/cc11454"], ["Zarbock 2023 (ADQI 28), Nat Rev Nephrol", "https://doi.org/10.1038/s41581-023-00683-3"], ["De Chiara 2022, Nat Commun", "https://doi.org/10.1038/s41467-022-33110-5"]]
    },
    {
      id: "aki-repair-source", section: "omics", title: "수복은 누가 하는가?",
      aliases: ["repair", "수복", "lineage tracing", "dedifferentiation", "Sox9", "progenitor", "stem cell"],
      summary: "외부 줄기세포가 아니라 살아남은 성숙 세뇨관 세포의 dedifferentiation·증식이 상피를 채움. 분화세포만 표지한 계통추적에서 표지 희석이 관찰되지 않아 산재 progenitor 가설이 배제",
      facts: [
        ["분화 근위세뇨관 전용 계통추적", ">90–95% 표지 후 허혈에서 label dilution 부재 · tdTomato/BrdU 이중양성 2.7±0.2% → 54.1±4.0% (P<0.01)", "Kusaba 2014, PNAS", "2014", false],
        ["'progenitor marker'의 정체", "손상 48시간 분리 세포에서 CD133·CD24 약 10배 상승 · SLC34a1 약 60% 감소 → 분화세포의 일시적 상태", "Kusaba 2014, PNAS", "2014", false],
        ["가장 이른 전사 반응", "Sox9이 허혈 24–48시간에 약 20배 상승해 Havcr1·Lcn2보다 선행", "Kumar 2015, Cell Rep", "2015", false],
        ["Sox9의 de novo 활성화", "손상 직후 표지 시 후손이 day28 근위세뇨관의 75.1%±2.2% · 손상 전 사전표지는 5.6%±1.0%", "Kumar 2015, Cell Rep", "2015", false],
        ["Sox9 결손의 효과", "S1/S2 한정 결손에서 5일 SCr 0.56±0.28 vs 0.2±0.04 mg/dL (p<0.01) · 28일 Fn1·Col1a1·Col3a1·Acta2 상승", "Kumar 2015, Cell Rep", "2015", false]
      ],
      body: [
        ["배제된 가설", ["골수세포의 상피 직접 대체: 계통추적으로 부정, paracrine·microvesicle 효과로 재해석", "세뇨관 내 산재 stem cell: 표지 희석 부재로 배제", "인간의 'progenitor marker' 조합: 손상 상태 표지로 재해석"]],
        ["남은 논점", ["실제 분열이 사전 존재하는 특정 하위집단에 국한된다는 반대 근거 존재", "불일치의 상당 부분이 증식 측정법 차이에서 발생 (Ki-67 vs FUCCI)", "표지 전략·마커·계수 방식을 명시하지 않은 '재생' 주장의 해석 보류"]],
        ["한계·주의", ["근거 대부분이 마우스 유전 모델", "인간 자료는 생검 소수 례·단일 시점에 집중", "분절별(근위 vs 원위) 기여 비중은 미결"]]
      ],
      related: ["aki-repair-vs-recovery", "aki-failed-repair", "aki-new-method"],
      papers: [["Kusaba 2014, PNAS", "https://doi.org/10.1073/pnas.1310653110"], ["Kumar 2015, Cell Rep", "https://doi.org/10.1016/j.celrep.2015.07.034"], ["Humphreys 2008, Cell Stem Cell", "https://doi.org/10.1016/j.stem.2008.01.014"], ["Lazzeri 2018, Nat Commun", "https://doi.org/10.1038/s41467-018-03753-4"]]
    },
    {
      id: "aki-repair-vs-recovery", section: "omics", title: "'기능 회복'과 '구조 수복'은 왜 다른가?",
      aliases: ["polyploidy", "endocycle", "hypertrophy", "YAP1", "nephron loss", "구조 수복"],
      summary: "주기에 들어간 세뇨관세포의 상당 부분이 분열을 완료하지 않고 DNA만 늘려 비대로 보상. creatinine이 돌아와도 nephron은 영구 소실되므로 '기능 회복'이 '구조 수복'을 뜻하지 않음",
      facts: [
        ["주기 진입과 그 운명", "편측 허혈 day2에 세뇨관세포의 39.8±12.5%가 주기 진입 · day3에 그중 44.4±15.8%가 사멸·탈락 · 38.8±9.2%가 ≥4C 획득", "De Chiara 2022, Nat Commun", "2022", false],
        ["polyploid 세포의 분포·지속", "손상 부위 바깥 cortex S1/S2에 집중 (13.3±2.5% vs outer stripe 2.7±0.4%) · day30까지 12.6±2.3% 유지", "De Chiara 2022, Nat Commun", "2022", false],
        ["보상의 정체", "YAP1이 E2F7·E2F8·AKT1을 직접 전사활성 · 결손 시 세포 수는 동일한데 신장 무게(p=1.6×10⁻⁶)·세포 표면적(p=5.4×10⁻¹⁰)이 감소하므로 증식이 아니라 비대", "De Chiara 2022, Nat Commun", "2022", false],
        ["영구 손실의 크기", "30분 편측 허혈 30일 후 계통표지 세뇨관세포의 30.5±2.8% 영구 손실 · 신생 세포는 손실분의 54.1±10.1%만 대체", "Lazzeri 2018, Nat Commun", "2018", false],
        ["증식 지표의 함정", "Ki-67+ 47.1±9.2% vs FUCCI2 S/G2/M 13.2±3.4%로 증식 마커가 분열을 대표하지 못함", "Lazzeri 2018, Nat Commun", "2018", false],
        ["인간 검증", "CKD-after-AKI 생검에서 근위세뇨관의 44.9±7.6%가 CDK4+p-H3+ endocycling 패턴 (정상 8.5±3.5%, p<0.05)", "Lazzeri 2018, Nat Commun", "2018", false]
      ],
      body: [
        ["세 가지 결말", ["성공 수복: 분열로 세포 수 복원", "endocycle 비대: DNA·크기 증가로 기능만 보상", "사멸·탈락: 소변으로 빠져나가 nephron 손실로 귀결"]],
        ["보상의 양면", ["보상을 차단하면 초기 생존이 떨어지므로 비대는 치사 회피의 수단", "상시 활성화 시 손상 없이도 섬유화·senescence·GFR 저하", "같은 축의 양끝이므로 'polyploidy = 수복 실패'라는 단정은 성립하지 않음"]],
        ["한계·주의", ["DNA 함량만으로 polyploid-in-G1과 diploid-in-G2/M을 구분 불가", "증식 촉진 전략이 섬유화를 함께 늘릴 가능성", "완전 소실된 분절은 재생되지 않아 nephron 소실이 장기 예후를 좌우"]]
      ],
      related: ["aki-repair-source", "aki-recovery-definition", "aki-long-term"],
      papers: [["De Chiara 2022, Nat Commun", "https://doi.org/10.1038/s41467-022-33110-5"], ["Lazzeri 2018, Nat Commun", "https://doi.org/10.1038/s41467-018-03753-4"], ["Yang 2010, Nat Med", "https://doi.org/10.1038/nm.2144"], ["Ferenbach 2015, Nat Rev Nephrol", "https://doi.org/10.1038/nrneph.2015.3"]]
    },
    {
      id: "aki-failed-repair", section: "omics", title: "failed repair 상태의 분자 정체는?",
      aliases: ["failed repair", "FR-PTC", "VCAM1", "cell state", "세포 상태", "SOX9", "snRNA-seq"],
      summary: "수복에 실패한 근위세뇨관이 별개의 안정 상태로 남아 만성기 염증 신호의 주 공급원이 됨. NF-κB 중심 조절망이 열려 있고 성숙 전사인자(HNF4A) 결합 자리는 닫힌 상태",
      facts: [
        ["FR-PTC의 지속", "마우스 허혈 시계열 snRNA-seq 126,578 nuclei에서 day2에 출현해 day14 전체 근위세뇨관의 약 30% · 6주에도 약 8%", "Kirita 2020, PNAS", "2020", false],
        ["표지와 궤적", "Vcam1·Dcdc2a·Sema5a 양성 / Slc5a12·Slc22a30·Slc7a13 음성 · pseudotime에서 성공 수복과 별도 분기", "Kirita 2020, PNAS", "2020", false],
        ["조절층", "snATAC 157,000 nuclei·193,731 peak에서 Vcam1 promoter 접근성 증가 · HNF4A motif 소실 · RELA motif 최대 농축", "Muto 2024, Sci Adv", "2024", false],
        ["인간 AKI 상피의 공통 손상 상태", "oxidative stress/NRF2 · hypoxia/HIF1A · IFN-γ+ribosomal/MYC · EMT/failed repair 4종이며, 환자 차이가 조성비로 설명됨", "Hinze 2022, Genome Med", "2022", false],
        ["DKD 상태와의 관계", "DKD의 손상 근위세뇨관은 'DKD 특이 상태'가 아니라 injured 약 60% + failed repair 약 30%의 혼합", "Muto 2024, Sci Adv", "2024", false],
        ["극성 회복이 가르는 운명", "손상 후 SOX9을 켠 계통 중 극성을 회복한 쪽은 SOX9을 끄고 흉터 없이 치유 · 회복 못 한 쪽은 유지하며 인접 myofibroblast 활성화", "Aggarwal 2024, Science", "2024", false]
      ],
      body: [
        ["상태의 기능", ["만성기 염증 ligand의 출처가 fibroblast·내피에서 손상 상피로 이동", "Ccl2–Ccr2 축 주도로 단핵구 유입 유지", "인접 fibroblast·내피에 성장인자 신호를 공급해 섬유화 미세환경 형성"]],
        ["senescence와의 관계", ["SASP 유전자세트에는 농축되나 senescence core signature에는 농축되지 않음", "전·항세포사 유전자가 동시에 상승해 '반쪽 senescence'로 기술", "계통표지로 보면 분포 영역에 따라 기원이 다름(복제 후 실패 vs 이차 손상)"]],
        ["한계·주의", ["같은 'failed repair' 라벨 아래 공유 마커는 있으나 상위 유전자가 어긋나는 집단 존재", "인간에서는 급성 손상 상피와 failed repair가 같은 클러스터로 묶이는 경우", "'failed repair 억제 = 유익'이 자명하지 않음. 억제가 증식까지 함께 줄인 사례 존재"]]
      ],
      related: ["aki-repair-vs-recovery", "aki-cell-death", "aki-new-method"],
      papers: [["Kirita 2020, PNAS", "https://doi.org/10.1073/pnas.2005477117"], ["Gerhardt 2021, PNAS", "https://doi.org/10.1073/pnas.2026684118"], ["Hinze 2022, Genome Med", "https://doi.org/10.1186/s13073-022-01108-9"], ["Muto 2024, Sci Adv", "https://doi.org/10.1126/sciadv.ado2849"], ["Aggarwal 2024, Science", "https://doi.org/10.1126/science.add6371"]]
    },
    {
      id: "aki-genetics", section: "omics", title: "유전·체세포 변이는 어디까지 밝혀졌나?",
      aliases: ["GWAS", "heritability", "유전", "FTO", "SHROOM3", "CHIP", "somatic mutation", "ancestry"],
      summary: "germline 유전율이 매우 낮고(SNP h² 0.031) 재현 신호가 두 개 수준. 표현형을 어떻게 정의하는지와 어느 집단을 보는지가 결과를 좌우하며, 체세포 변이가 더 강한 연관을 보임",
      facts: [
        ["대규모 입원 AKI GWAS", "54,488 cases / 138,051 controls — rs11642015(FTO) OR 1.07 (P=1.9×10⁻¹⁵) · rs4859682(SHROOM3) OR 0.95 (P=2.3×10⁻⁹)", "Siew 2024, Kidney Int", "2024", false],
        ["SNP 유전율", "LDSC SNP h² 0.031 (0.025–0.037) · intercept 1.015", "Siew 2024, Kidney Int", "2024", false],
        ["집단 전이성", "두 신호는 유럽계가 견인 · 일본 코호트 단독에서 모두 null이고 효과 방향 반대 · 아프리카계에서는 다른 locus", "Siew 2024, Kidney Int", "2024", false],
        ["표현형 정의 의존성", "lab 기반에서 ICD 코드 기반으로 바꾸면 SHROOM3는 유의를 잃고 다른 후보가 등장", "Siew 2024, Kidney Int", "2024", false],
        ["선행 중환자 GWAS", "discovery 709/619 → replication 206/1,406에서 genome-wide 유의 도달 0개 · OR>1.6·MAF ≥30%에서만 80% 검정력", "Zhao 2017, Am J Respir Crit Care Med", "2017", false],
        ["체세포 변이", "CHIP 3코호트 메타 incident AKI HR 1.26 (1.19–1.34) · VAF 10% 증가당 1.19 (1.13–1.25)", "Vlasschaert 2024, Nat Med", "2024", false]
      ],
      body: [
        ["왜 신호가 적은가", ["AKI는 급성 노출이 촉발하는 사건이어서 유전 기여 자체가 작음", "표현형이 기능 지표 기반이라 생물학적으로 불균질", "검정력과 표현형 정의가 동시에 변수로 작동"]],
        ["체세포 축이 주는 것", ["driver 유전자별로 효과가 갈려 생물학적 해석이 가능", "변이 세포 내재적 과염증이라는 기전이 마우스 모델로 지지", "회복 패턴·장기 신장 결과까지 연관"]],
        ["한계·주의", ["lead 변이가 어느 세포·구획에 속하는지 비어 있음(세뇨관 eQTL 연관 부재)", "BMI·당뇨 보정 후 신호 약화가 경유 경로인지 검정력 손실인지 미분리", "AKI→CKD 전환 자체를 결과로 둔 유전 분석과 비유럽 층화, 성차 자료가 공백"]]
      ],
      related: ["aki-riskfactors", "aki-failed-repair", "aki-cohorts"],
      papers: [["Siew 2024, Kidney Int", "https://doi.org/10.1016/j.kint.2024.04.019"], ["Zhao 2017, Am J Respir Crit Care Med", "https://doi.org/10.1164/rccm.201603-0518OC"], ["Vlasschaert 2024, Nat Med", "https://doi.org/10.1038/s41591-024-02854-6"]]
    },
    {
      id: "aki-guideline-change", section: "now", title: "진료 권고는 최근 어떻게 바뀌었는가?",
      aliases: ["guideline", "권고", "KDIGO 2026", "ADQI", "public review", "regulatory approval"],
      summary: "공식 지침은 여전히 KDIGO 2012판이고 2026년 개정 초안이 공개검토를 거쳐 발간 준비 단계. 그 사이의 변화는 ADQI 합의문(AKD·바이오마커·패혈증 AKI)과 바이오마커 규제 승인으로 축적",
      facts: [
        ["현행 공식 지침", "KDIGO 2012 AKI Clinical Practice Guideline", "KDIGO (Kellum 2013)", "2012", false],
        ["개정 초안", "KDIGO 2026 AKI·AKD Clinical Practice Guideline 초안 공개검토 (2026-05-11 마감 후 발간 준비 단계)", "KDIGO 공지", "2026", false],
        ["초안이 담은 방향", "AKD를 AKI와 함께 하나의 틀로 · 기능 기준에 구조 바이오마커 결합 · 위험모형·전자경보·수액·nephrotoxin stewardship·조영제 AKI·KRT 운용·추적관리", "KDIGO 공지", "2026", false],
        ["합의문 축적", "ADQI 16(AKD·회복, 2017) · ADQI 23(바이오마커, 2020) · ADQI 28(패혈증 AKI, 2023)", "Chawla 2017 · Ostermann 2020 · Zarbock 2023", "2023", false],
        ["바이오마커 규제 승인", "NGAL 소아 중증 AKI 예측(2023) · TIMP-2×IGFBP7 중등도–중증 AKI 예측", "Ostermann 2025, Lancet", "2025", false],
        ["당뇨 영역의 교차 권고", "RAS 차단·SGLT2i·GLP-1 RA 개시 후 혈역학적 creatinine 상승을 AKI로 오인하지 말 것 (등급 A)", "ADA 2026 (Standards of Care §11)", "2026", false]
      ],
      body: [
        ["바뀐 것", ["시간축: AKI 단독에서 AKI–AKD–CKD 연속선으로 기술 단위 확장", "지표: 기능 단독에서 기능+손상+스트레스 조합으로", "운용: 개시 시점 중심의 KRT 권고와 추적관리를 명시"]],
        ["아직 안 바뀐 것", ["KDIGO 공식 정의·병기는 2012판 그대로", "확장 병기(1S·A/B)는 제안 단계이며 전향 검증 전", "AKI 자체를 치료하는 승인 약물 부재"]],
        ["읽을 때의 주의", ["초안 단계 내용을 확정 권고로 인용하지 않음", "합의문(ADQI)과 지침(KDIGO)의 지위를 구분", "권고의 등급과 근거 수준을 함께 기재"]]
      ],
      related: ["aki-definition", "aki-biomarker-classes", "aki-krt-timing"],
      papers: [["Kellum 2013 (KDIGO AKI Part 1), Crit Care", "https://doi.org/10.1186/cc11454"], ["Ostermann 2025, Lancet", "https://doi.org/10.1016/S0140-6736(24)02385-7"], ["ADA 2026 (Standards of Care §11), Diabetes Care", "https://doi.org/10.2337/dc26-S011"]],
      links: [["KDIGO AKI Guideline", "https://kdigo.org/guidelines/acute-kidney-injury/"]]
    },
    {
      id: "aki-long-term", section: "now", title: "장기 귀결은 어디까지 확립됐나?",
      aliases: ["AKI to CKD", "long-term", "장기 예후", "ESRD", "ASSESS-AKI", "MACE", "heart failure"],
      summary: "AKI 뒤 CKD·ESKD·사망 위험 상승은 후향 메타분석과 전향 매칭 코호트에서 일관됨. 심혈관 복합 종말점은 null이고, 3개월 시점 잔여 신기능을 보정하면 연관이 약해지는 구간이 존재",
      facts: [
        ["후향 메타분석 (13 코호트)", "pooled adjusted HR — CKD 8.8 (3.1–25.5) · ESRD 3.1 (1.9–5.0) · 사망 2.0 (1.3–3.1)", "Coca 2012, Kidney Int", "2012", false],
        ["중증도 gradient", "CKD 2.0→3.3→28.2 · ESRD 2.3→5.0→8.0 (mild→moderate→severe) · I²=98–100% 이질성 잔존", "Coca 2012, Kidney Int", "2012", false],
        ["전향 매칭 코호트 (AKI 769 vs 비AKI 769, 평균 4.5년)", "incident CKD aHR 3.98 (2.51–6.31) · CKD progression 2.37 (1.28–4.39) · heart failure 1.68 (1.22–2.31) · 사망 1.78 (1.24–2.56)", "Ikizler 2021, Kidney Int", "2021", false],
        ["MACE", "0.95 (0.70–1.28)로 null", "Ikizler 2021, Kidney Int", "2021", false],
        ["비신장 결과 (254,150명 메타분석)", "heart failure 58% · myocardial infarction 40% · stroke 15% 위험 증가 · 혈압 >140/90 위험 22% 증가", "Kellum 2021, Nat Rev Dis Primers", "2021", false],
        ["stage 1만으로도 위험 상승", "전체의 73%를 차지하는 stage 1에서도 CKD 결과 위험 증가 · 병기·지속기간 모두 선형 추세 (P<0.001)", "Ikizler 2021, Kidney Int", "2021", false]
      ],
      body: [
        ["상호 유발의 구조", ["기존 CKD가 AKI의 최강 위험인자", "AKI가 기존 신질환 없던 환자에서도 새 CKD·진행·ESKD로 연결", "반복 손상이 nephron 예비력을 줄여 다음 손상에 더 취약해짐"]],
        ["해석의 분기점", ["3개월 eGFR·cystatin C·uPCR을 추가 보정하면 일부 연관이 사라짐. 매개인지 교란 보정인지는 미분리", "정확히 일치한 층 분석에서는 심부전·사망 위험이 잔존", "상대위험과 절대위험의 방향이 어긋남. 기저 정상군은 HR이 크고 절대위험은 저하군이 큼"]],
        ["인과의 공백", ["AKI를 줄이는 개입이 CKD를 줄인다는 RCT 부재", "AKI 예방·조기 개입이 신·심혈관 결과를 바꾸는지 미검증", "후속관리 모델의 효과는 진행 중 시험이 답할 영역"]]
      ],
      related: ["aki-akd-ckd", "aki-repeat-injury", "aki-cohorts"],
      papers: [["Coca 2012, Kidney Int", "https://doi.org/10.1038/ki.2011.379"], ["Ikizler 2021 (ASSESS-AKI), Kidney Int", "https://doi.org/10.1016/j.kint.2020.06.032"], ["Chawla 2014, N Engl J Med", "https://doi.org/10.1056/NEJMra1214243"], ["Kellum 2021 (AKI Primer), Nat Rev Dis Primers", "https://doi.org/10.1038/s41572-021-00284-z"]]
    },
    {
      id: "aki-cohorts", section: "now", title: "새 코호트·데이터는 무엇이 생겼는가?",
      aliases: ["cohort", "코호트", "ASSESS-AKI", "KPMP", "biobank", "proteomics", "EHR"],
      summary: "전향 매칭 추적·생검 연계 프로테옴·대규모 바이오뱅크·전국 규모 전자의무기록의 네 층이 새로 쌓여 서로 다른 질문을 분담. 다만 동일 환자에서 조직과 체액을 동시에 본 자료는 여전히 희박",
      facts: [
        ["전향 매칭 추적", "ASSESS-AKI: AKI 769 vs 개별 매칭 비AKI 769 · 평균 4.5±1.8년 추적", "Ikizler 2021, Kidney Int", "2021", false],
        ["생검 연계 혈장 프로테옴", "생검 확인 급성 세뇨관 손상 중증도와 연관된 혈장 단백질 156개 (n=434 · SomaScan 6,592 aptamer · Bonferroni α=7.58×10⁻⁶)", "Schmidt 2024, Nat Commun", "2024", false],
        ["외부 코호트 방향 일치", "KPMP(AKI 26 vs 건강 18) 93개 유의·전부 동일 방향 · ARIC n=4,610 45개 · CHROME ICU n=268 38개 · 공통 13개", "Schmidt 2024, Nat Commun", "2024", false],
        ["대규모 바이오뱅크", "UK Biobank 428,793명에서 CHIP–AKI 연관 산출 · MVP+BioVU 기반 GWAS 54,488 cases", "Vlasschaert 2024 · Siew 2024", "2024", false],
        ["전국 규모 전자의무기록", "약 70만 명·620,000 feature 시계열로 48시간 선행 예측 모델 학습", "Tomašev 2019, Nature", "2019", false],
        ["소변 세포 자원", "AKI 환자 소변 침전물 scRNA — 32명·40 샘플·42,608 cells (실질세포 12,853)", "Klocke 2022, Kidney Int", "2022", false]
      ],
      body: [
        ["네 층의 분담", ["전향 매칭: 자연경과와 장기 결과의 인과적 추정에 가장 근접", "생검 연계: 조직 소견과 체액 지표를 직접 연결", "바이오뱅크: 유전·체세포 변이 축의 검정력 확보", "전자의무기록: 예측·경보의 실사용 환경 반영"]],
        ["조직–체액 연결의 성과", ["상위 연관 단백질이 세뇨관 발현 쪽에 치우쳐 조직 기원을 확인", "일부 마커가 특정 분절(thick ascending limb 등)에 집중", "만성 질환 생검에서도 급성 세뇨관 손상 소견이 흔하게 동반"]],
        ["남은 공백", ["동일 환자 소변–생검 동시 비교 자료 부재 · 건강 대조 소변에는 비교 가능한 세포가 희박", "failed repair 상태의 운명을 추적한 인간 종단 자료 부재", "세포상태 조성을 임상 결과·치료반응과 연결한 검정력 있는 코호트 부재"]]
      ],
      related: ["aki-long-term", "aki-genetics", "aki-new-method"],
      papers: [["Ikizler 2021 (ASSESS-AKI), Kidney Int", "https://doi.org/10.1016/j.kint.2020.06.032"], ["Schmidt 2024, Nat Commun", "https://doi.org/10.1038/s41467-024-51304-x"], ["Klocke 2022, Kidney Int", "https://doi.org/10.1016/j.kint.2022.07.032"], ["Vlasschaert 2024, Nat Med", "https://doi.org/10.1038/s41591-024-02854-6"]],
      links: [["Kidney Precision Medicine Project", "https://www.kpmp.org/"]]
    },
    {
      id: "aki-new-method", section: "now", title: "새로 쓸 수 있게 된 분석 기법은?",
      aliases: ["snATAC", "spatial transcriptomics", "Visium", "CODEX", "deconvolution", "CUT&RUN", "urine scRNA"],
      summary: "손상 뒤 세포 상태를 재는 수단이 전사체 단일 측정에서 조절층·공간·비침습 쪽으로 확장. 조직 접근이 어려운 인간 AKI에서는 소변 세포와 deconvolution이 대체 창구로 기능",
      facts: [
        ["조절층 시계열", "마우스 허혈 6시점 snATAC 157,000 nuclei · 193,731 peak에서 day2 손상 분절이 healthy/failed repair 두 갈래로 분기", "Muto 2024, Sci Adv", "2024", false],
        ["전사인자 결합 직접 측정", "인간 1차 근위세뇨관 세포 CUT&RUN으로 RELA binding site 2,004개 · failed repair 영역과 겹치는 103개가 chemokine activity에 농축 (fold 28.4, FDR=0.034)", "Muto 2024, Sci Adv", "2024", false],
        ["공간 전사체", "Visium(spot 55 μm) 군집–조직학 일치율 97.6% · 허혈 6시간 호중구 신호가 외수질 S3와 공국재", "Melo Ferreira 2021, JCI Insight", "2021", false],
        ["다중 단백 공간 검증", "CODEX 11-marker — 허혈 침윤 호중구의 52.2%가 outer stripe · 패혈증 모델 침윤 대식세포의 80.2%가 outer cortex", "Melo Ferreira 2021, JCI Insight", "2021", false],
        ["비침습 세포 측정", "소변 침전물 flow sorting 후 scRNA — 배출 세뇨관세포가 원위·수질 편향 · day6–10에 배출 최고", "Klocke 2022, Kidney Int", "2022", false],
        ["bulk 자료 재활용", "deconvolution으로 독립 마우스 시계열·folic acid 모델·인간 신이식 protocol biopsy·rat 노화에서 failed repair 비중 재현", "Kirita 2020, PNAS", "2020", false]
      ],
      body: [
        ["무엇이 가능해졌나", ["상태의 조절층: 어떤 motif가 열리고 닫히는지", "상태의 위치: 어느 분절·어느 이웃과 붙어 있는지", "상태의 비침습 추적: 생검 없이 시간에 따른 변화 관측"]],
        ["조합의 이득", ["단일세포와 공간을 합치면 상피–면역 상호작용의 좌표 확보", "조절층과 결합 실측을 합치면 후보 cis-요소의 기능 검증", "deconvolution으로 기존 bulk 자료를 상태 비중 자료로 재해석"]],
        ["한계·주의", ["공간 해상도가 단일세포 미만인 플랫폼에서는 혼합 신호 해석에 주의", "소변 세포는 원위·수질 편향이라 조직 구성비를 그대로 반영하지 않음", "종간 차이가 전사인자·ligand 수준에서 확인되므로 마우스 결과를 그대로 옮기지 않음"]]
      ],
      related: ["aki-failed-repair", "aki-cohorts", "aki-prediction"],
      papers: [["Muto 2024, Sci Adv", "https://doi.org/10.1126/sciadv.ado2849"], ["Melo Ferreira 2021, JCI Insight", "https://doi.org/10.1172/jci.insight.147703"], ["Klocke 2022, Kidney Int", "https://doi.org/10.1016/j.kint.2022.07.032"], ["Kirita 2020, PNAS", "https://doi.org/10.1073/pnas.2005477117"]]
    }
  ];

  const glossaryTerms = {
    "aki": { key: "aki", definition: "Acute kidney injury. creatinine 상승 또는 urine output 감소로 정의하는 급성 신기능 저하." },
    "akd": { key: "akd", definition: "Acute kidney disease. AKI 시작 뒤 7–90일 구간으로, CKD로 굳기 전의 관찰 구간." },
    "kdigo": { key: "kdigo", definition: "Kidney Disease: Improving Global Outcomes. 국제 신장질환 지침 기구이며 AKI 단일 정의의 출처." },
    "egfr": { key: "egfr", definition: "Estimated glomerular filtration rate. serum creatinine·cystatin C로 추정한 여과 기능. steady state를 전제하므로 급성기에는 해석 제한." },
    "krt": { key: "krt", definition: "Kidney replacement therapy. haemodialysis·peritoneal dialysis·kidney transplantation의 묶음." },
    "crrt": { key: "crrt", definition: "Continuous renal replacement therapy. 중환자에서 느린 속도로 지속 시행하는 신대체요법." },
    "ngal": { key: "ngal", definition: "Neutrophil gelatinase-associated lipocalin. 대표적 damage biomarker이며 면역세포 기원 신호가 섞일 수 있음." },
    "kim-1": { key: "kim1", definition: "Kidney injury molecule-1. 근위세뇨관 손상에서 상승하는 damage biomarker." },
    "timp-2": { key: "timp2", definition: "Tissue inhibitor of metalloproteinases-2. IGFBP7과의 곱으로 세포주기 정지를 재는 stress biomarker." },
    "igfbp7": { key: "igfbp7", definition: "Insulin-like growth factor-binding protein 7. TIMP-2와 함께 cell cycle arrest 지표로 사용." },
    "necroptosis": { key: "necroptosis", definition: "RIPK3·MLKL이 실행하는 조절된 괴사. 막 파열과 염증 유발을 동반." },
    "ferroptosis": { key: "ferroptosis", definition: "인지질 과산화와 철에 의존하는 조절된 세포사. GPX4 결손으로 유도." },
    "failed repair": { key: "failed-repair", definition: "손상 뒤 성숙 상태로 복귀하지 못하고 염증성 상태로 남는 세뇨관 세포 집단." },
    "polyploidy": { key: "polyploidy", definition: "분열 없이 DNA 함량이 늘어난 상태. 세뇨관에서는 비대에 의한 기능 보상과 연결." },
    "senescence": { key: "senescence", definition: "비가역 성장정지 상태. 분비 표현형(SASP)을 통해 주변에 염증·섬유화 신호를 전달." },
    "chip": { key: "chip", definition: "Clonal haematopoiesis of indeterminate potential. 혈액세포의 체세포 변이 클론 확장." },
    "snrna-seq": { key: "snrnaseq", definition: "Single-nucleus RNA sequencing. 동결 조직에서 핵 단위로 전사체를 재는 방법." },
    "snatac": { key: "snatac", definition: "Single-nucleus ATAC-seq. 핵 단위로 열린 염색질 영역을 재는 방법." },
    "subphenotype": { key: "subphenotype", definition: "같은 임상 정의 안에서 생물학·궤적·치료반응이 갈리는 하위집단." },
    "nephron": { key: "nephron", definition: "사구체와 세뇨관으로 이루어진 신장의 기능 단위. 완전 소실된 nephron은 재생되지 않음." }
  };
  const glossaryPattern = /(^|[^A-Za-z0-9가-힣])(AKI|AKD|KDIGO|eGFR|KRT|CRRT|NGAL|KIM-1|TIMP-2|IGFBP7|necroptosis|ferroptosis|failed repair|polyploidy|senescence|CHIP|snRNA-seq|snATAC|subphenotype|nephron)(?=$|[^A-Za-z0-9])/gi;

  return { meta: meta, acts: acts, sections: sections, articles: articleList, glossaryTerms: glossaryTerms, glossaryPattern: glossaryPattern };
})();
