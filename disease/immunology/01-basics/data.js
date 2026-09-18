window.IMMUNOLOGY_BASICS = {
  "articleRows": [
    [
      "immunology-overview",
      "면역계는 전체적으로 어떻게 짜여 있나?",
      [
        "immune system",
        "선천면역",
        "적응면역",
        "innate",
        "adaptive",
        "DC",
        "HSC",
        "CMP",
        "CLP",
        "myeloid",
        "lymphoid",
        "Leukocyte",
        "Lymphocyte",
        "PMN",
        "MNC",
        "NK",
        "NKT",
        "mast cell",
        "조혈",
        "계통도",
        "ILC",
        "비만세포",
        "형질세포",
        "선천 적응 연결"
      ],
      "basics",
      "조혈 계통도(계통 ↔ 역할 색 전환) · 용어 포함 관계 · 선천↔적응 연결 · 세포·장소·시간 축",
      [
        [
          "한 장 지도 — 조혈 계통도",
          [
            "HSC → CMP·CLP → 혈액·조직 면역세포",
            "계통(골수계·림프계) ↔ 역할(선천·적응) 색 전환 — NK·NKT에서 어긋남",
            "Leukocyte·WBC · Granulocyte·PMN · Mononuclear cell·MNC · Lymphocyte · Myeloid · Lymphoid 범위 강조"
          ]
        ],
        [
          "선천 ↔ 적응 한눈에",
          [
            "적응면역 첫 반응까지 4–7일 · 클론 증식",
            "DC → 림프절 항원 제시 · 항체 opsonization·보체 · TH1 대식세포 활성화"
          ]
        ],
        [
          "이름이 가리키는 범위",
          [
            "HSC → CMP + CLP",
            "Blood = plasma + formed elements",
            "WBC = granulocyte(PMN) + mononuclear cell",
            "PMN = neutrophil + eosinophil + basophil · mast cell 조직 분화",
            "PBMC = lymphocyte + monocyte + DC · NKT는 T 하위",
            "Lymphoid ≠ adaptive · NK·ILC"
          ]
        ],
        [
          "세 축",
          [
            "장소 — 1차·2차 림프기관 · 조직",
            "시간 — yolk sac → AGM → fetal liver → bone marrow"
          ]
        ]
      ],
      [
        "immunology-cell-identity",
        "immunology-lymph-node",
        "immunology-recognition"
      ]
    ],
    [
      "immunology-cell-identity",
      "면역세포의 종류와 상태는 어떻게 구분하나?",
      [
        "cell type",
        "cell state",
        "taxonomy",
        "scRNA-seq",
        "DC",
        "monocyte",
        "DAM",
        "면역세포 이질성",
        "whole blood",
        "plasma",
        "serum",
        "buffy coat",
        "PBMC",
        "RBC",
        "platelet",
        "혈장",
        "혈청",
        "세포 비율",
        "UMAP",
        "hematocrit",
        "밀도구배",
        "PBMC3k",
        "마커"
      ],
      "basics",
      "혈액 분획(whole blood·plasma·serum·buffy coat·PBMC) · 분모별 세포 비율 · PBMC3k UMAP·조성 · 종류 vs 상태",
      [
        [
          "혈액 분획",
          [
            "whole blood · plasma 혈장 · serum 혈청 · buffy coat · RBC hematocrit · PBMC 밀도구배",
            "plasma ≠ plasma cell · buffy coat ≠ PBMC"
          ]
        ],
        [
          "분모 사다리",
          [
            "전혈 부피 → 혈액 1 µL 개수 → WBC 감별계산 → PBMC → scRNA-seq barcode",
            "림프구 20–40% · 70–90% · 74.1%"
          ]
        ],
        [
          "single-cell PBMC3k",
          [
            "UMAP · cluster 주석별 세포 수·비율 · 마커 IL7R CD14 LYZ MS4A1 CD8A GNLY NKG7 FCGR3A MS4A7 FCER1A CST3 PPBP",
            "Megakaryocytes vs Platelet 명명 차이"
          ]
        ],
        [
          "종류 vs 상태",
          [
            "cell type vs cell state · Villani 2017 · DAM Keren-Shaul 2017"
          ]
        ]
      ],
      [
        "immunology-overview",
        "immunology-ontogeny"
      ]
    ],
    [
      "immunology-lymph-node",
      "같은 림프절도 왜 서로 다른 면역반응을 만드나?",
      [
        "lymph node",
        "LN",
        "림프기관",
        "미세환경",
        "stroma",
        "HEV",
        "retinoic acid",
        "subcapsular sinus",
        "germinal center",
        "배중심",
        "paracortex",
        "FRC",
        "FDC",
        "conduit",
        "Peyer's patch"
      ],
      "basics",
      "림프절 단면 지도(림프·혈액 입구, 반응 경로) · 구역별 세포 · 배수 장기에 따른 림프절 차이",
      [
        [
          "한 장 지도 — 림프절 단면",
          [
            "피막하 굴 · B 여포 · 배중심 · T 영역 paracortex · HEV · 수질 · 수입·수출 림프관",
            "림프 입구: 수입 림프관 → 피막하 굴 → conduit → HEV · 이동성 DC",
            "혈액 입구: HEV · L-selectin · CCR7 → T 영역 · 여포",
            "반응: T–B 경계 · 배중심 · FDC · 형질세포 수질삭"
          ]
        ],
        [
          "같은 림프절, 다른 반응",
          [
            "장 배수 림프절 retinoic acid · α4β7 · CCR9 (Iwata 2004, Hammerschmidt 2008)",
            "근위·원위 장 배수 림프절 관용 vs 염증 (Esterházy 2019)",
            "기질세포 FRC · FDC · LEC (Krishnamurty & Turley 2020)"
          ]
        ],
        [
          "다른 2차 림프기관",
          [
            "비장 백색수질 PALS · 적색수질",
            "Peyer's patch M cell"
          ]
        ]
      ],
      [
        "immunology-cell-identity",
        "immunology-recognition"
      ]
    ],
    [
      "immunology-recognition",
      "면역세포는 무엇으로 서로 신호를 주고받나?",
      [
        "Immune Dictionary",
        "IREA",
        "cytokine niche",
        "STAT tetramer",
        "ACKR",
        "atypical chemokine receptor",
        "cytokine",
        "사이토카인",
        "chemokine",
        "interleukin",
        "JAK-STAT",
        "JAK",
        "STAT",
        "NF-κB",
        "SMAD",
        "GPCR",
        "γc",
        "gp130",
        "공유 사슬",
        "수용체 계열",
        "pleiotropy",
        "redundancy",
        "three-signal",
        "신호 3",
        "TIR",
        "MyD88",
        "TRAF",
        "TNFSF",
        "TNFRSF",
        "CD40L",
        "Th1",
        "Th2",
        "Th17",
        "Treg",
        "Tfh",
        "CCR7",
        "CXCL13",
        "IL7R",
        "JAK 억제제",
        "memory T"
      ],
      "basics",
      "cytokine 수용체 계열과 신호 경로(JAK-STAT · NF-κB · SMAD · GPCR) · 작용 거리와 pleiotropy·redundancy · CD4 T세포 분화를 정하는 조합 · chemokine 주소 · 치료 표적",
      [
        [
          "인식에서 신호로",
          [
            "신호 1 항원 · 신호 2 공동자극 · 신호 3 cytokine — PRR은 02장, MHC는 03장, 활성화·기억은 04장",
            "CD8 T세포: IL-12 또는 I형 IFN이 없으면 작동·기억 대신 결실·무반응 (Curtsinger 2010, mouse)"
          ]
        ],
        [
          "작용 거리와 겹침",
          [
            "autocrine · paracrine · endocrine — 분비 세포 자신, 이웃, 혈류 건너까지",
            "cytokine niche 30–150 µm(시험관) · 생체 80–120 µm — 소비하는 세포 밀도가 범위를 정함 (Oyler-Yaniv 2017, mouse)",
            "pleiotropy는 수용체 분포 때문이고 redundancy는 대개 겉보기 — 결손 표현형은 구별된다 (Lin & Leonard 2019; Cui 2024 실측)"
          ]
        ],
        [
          "수용체 계열 지도",
          [
            "Class I(γc·βc·gp130) · Class II(인터페론·IL-10) → JAK-STAT",
            "IL-1 수용체(TIR → MyD88 → NF-κB) · TNF 수용체(삼량체 · TRAF · death domain)",
            "TGF-β 수용체(Ser/Thr → SMAD) · chemokine 수용체(GPCR → integrin 활성·이동)"
          ]
        ],
        [
          "조합이 정하는 것",
          [
            "Th1 IL-12 · Th2 IL-4 · Th17 TGF-β+IL-6 · iTreg TGF-β+IL-2 — STAT과 전사인자까지 (Zhu 2010, 주로 mouse·시험관)",
            "분화한 세포의 산물이 같은 분화를 다시 밀어주는 되먹임 · TGF-β 농도가 Th17/Treg 갈림길",
            "memory T세포 → myeloid 선천 염증 지시 (Warrick 2025 · McDaniel 2022, mouse)"
          ]
        ],
        [
          "데이터와 치료로",
          [
            "PBMC3k 마커 IL7R·CCR7 = cytokine·chemokine 수용체",
            "cytokine niche 차이 = 단일세포 자료의 비유전적 변이 원천 (Oyler-Yaniv 2017)",
            "차단(TNF-α·IL-6·IL-17·IL-23) · JAK 억제제 · cytokine 자체를 약으로 (Saxton 2023 · Virtanen 2024)"
          ]
        ]
      ],
      [
        "immunology-overview",
        "immunology-lymph-node"
      ]
    ],
    [
      "immunology-ontogeny",
      "면역계는 언제 만들어지고 출생 전후에 어떻게 달라지나?",
      [
        "ontogeny",
        "발생",
        "태아 면역",
        "영아 면역",
        "조혈 wave",
        "HSPC",
        "yolk sac",
        "난황낭",
        "AGM",
        "fetal liver",
        "태아 간",
        "골수",
        "thymus",
        "모체 IgG",
        "태반",
        "FcRn",
        "microchimerism",
        "모체 세포",
        "모유",
        "sIgA",
        "PIGR",
        "HMO",
        "미생물 정착",
        "분만 방식",
        "Baby Biome",
        "Treg",
        "RTE",
        "memory T",
        "critical window"
      ],
      "basics",
      "수정부터 두 돌까지 한 장 타임라인(난황낭 → AGM → 태아 간 → 골수) · 태반을 건너오는 모체 IgG와 모체 세포 · 모유와 미생물 정착 · 영아기 조직별 T세포 — 성인의 축소판이 아닌 시기별 프로그램",
      [
        [
          "한 장 타임라인",
          [
            "난황낭 CS 7–8 · AGM 첫 HSC 30–32 dpc · 태아 간 7–8주 · 골수 CS 23 (Ivanovs 2017)",
            "모체 IgG: 제대혈:모체혈 비가 24–25주 0.11 → 36–37주 0.98 (Sci Rep 2022)",
            "모체 세포가 태아 림프절로 들어와 모체 항원에 대한 Treg 유도 (Mold 2008)"
          ]
        ],
        [
          "성인의 축소판이 아니다",
          [
            "태아·영아 조직의 Treg 10–30% — 성인 2–5% (Thome 2016)",
            "태아기 B1 세포와 비전형 T세포 · effector 기능은 2분기부터 (Suo 2022)",
            "1차 조혈기관 밖 말초 장기에서도 B 림프구 생성 관찰 (Suo 2022)"
          ]
        ],
        [
          "출생 전후에 들어오는 것",
          [
            "모유 — IgA·IgM은 PIGR, IgG는 FcRn으로 유선을 건너감 · 엄마 장의 IgA 레퍼토리가 전달됨 (Immunol Rev 2024)",
            "HMO는 소화되지 않는 prebiotic이자 병원체 decoy (Le Doare 2018)",
            "신생아기 장내 미생물을 가장 크게 가르는 요인은 분만 방식 (Shao 2019)"
          ]
        ],
        [
          "영아기 조직 시계",
          [
            "naive T세포가 70–95%로 우세 · effector memory는 폐·공장·회장에서만 20% 이상 (Thome 2016)",
            "초기 각인이 감염 방어·백신 반응·아토피 위험과 연결된다는 정리 (Palma 2026)"
          ]
        ],
        [
          "근거와 한계",
          [
            "태아 단일세포 아틀라스 — 수정 후 4–17주 · 9개 조직 · 90만 세포 이상 (Suo 2022)",
            "전사체로 그린 발달 경로는 기원에 대한 추론 — 계통추적 결과와 구분 (Haniffa 2025)",
            "수정 후 기준(dpc·CS)과 임신 주수 기준을 섞지 않기"
          ]
        ]
      ],
      [
        "immunology-cell-identity",
        "immunology-lymph-node"
      ]
    ]
  ],
  "paperLinks": {
    "immunology-overview": [
      [
        "Warrick 2025, Annu Rev Immunol",
        "https://doi.org/10.1146/annurev-immunol-083122-040624"
      ],
      [
        "Cruz de Casas 2024, Nat Rev Immunol",
        "https://doi.org/10.1038/s41577-023-00965-8"
      ]
    ],
    "immunology-cell-identity": [
      [
        "Papalexi & Satija 2018, Nat Rev Immunol",
        "https://doi.org/10.1038/nri.2017.76"
      ],
      [
        "Villani 2017, Science",
        "https://doi.org/10.1126/science.aah4573"
      ],
      [
        "Keren-Shaul 2017, Cell",
        "https://doi.org/10.1016/j.cell.2017.05.018"
      ]
    ],
    "immunology-lymph-node": [
      [
        "Cruz de Casas 2024, Nat Rev Immunol",
        "https://doi.org/10.1038/s41577-023-00965-8"
      ]
    ],
    "immunology-recognition": [
      [
        "Lin & Leonard 2019, Annu Rev Immunol",
        "https://doi.org/10.1146/annurev-immunol-042718-041447"
      ],
      [
        "Zhu, Yamane & Paul 2010, Annu Rev Immunol",
        "https://doi.org/10.1146/annurev-immunol-030409-101212"
      ],
      [
        "Griffith, Sokol & Luster 2014, Annu Rev Immunol",
        "https://doi.org/10.1146/annurev-immunol-032713-120145"
      ],
      [
        "Oyler-Yaniv 2017, Immunity",
        "https://doi.org/10.1016/j.immuni.2017.03.011"
      ],
      [
        "Cui 2024, Nature",
        "https://doi.org/10.1038/s41586-023-06816-9"
      ],
      [
        "Altan-Bonnet & Mukherjee 2019, Nat Rev Immunol",
        "https://doi.org/10.1038/s41577-019-0131-x"
      ],
      [
        "Wang, Zhao & Wan 2023, Cell Mol Immunol",
        "https://doi.org/10.1038/s41423-023-01036-7"
      ],
      [
        "Warrick 2025, Annu Rev Immunol",
        "https://doi.org/10.1146/annurev-immunol-083122-040624"
      ],
      [
        "Saxton, Glassman & Garcia 2023, Nat Rev Drug Discov",
        "https://doi.org/10.1038/s41573-022-00557-6"
      ],
      [
        "Virtanen 2024, Nat Rev Rheumatol",
        "https://doi.org/10.1038/s41584-024-01153-1"
      ]
    ],
    "immunology-ontogeny": [
      [
        "Ivanovs 2017, Development",
        "https://doi.org/10.1242/dev.134866"
      ],
      [
        "Haniffa 2025, Nat Rev Immunol",
        "https://doi.org/10.1038/s41577-024-01099-1"
      ],
      [
        "Palma 2026, Nat Immunol",
        "https://doi.org/10.1038/s41590-026-02523-5"
      ],
      [
        "Suo 2022, Science",
        "https://doi.org/10.1126/science.abo0510"
      ],
      [
        "Mold 2008, Science",
        "https://doi.org/10.1126/science.1164511"
      ],
      [
        "Thome 2016, Nat Med",
        "https://doi.org/10.1038/nm.4008"
      ],
      [
        "Shao 2019, Nature",
        "https://doi.org/10.1038/s41586-019-1560-1"
      ],
      [
        "Immunol Rev 2024 · 모유 항체",
        "https://doi.org/10.1111/imr.13411"
      ],
      [
        "Sci Rep 2022 · IgG 태반 이동",
        "https://doi.org/10.1038/s41598-022-21908-8"
      ]
    ]
  },
  "glossaryTerms": {
    "scrna-seq": {
      "key": "scrna",
      "definition": "세포별 RNA 발현을 측정하여 세포 종류와 상태의 차이를 탐색하는 분석"
    },
    "prr": {
      "key": "prr",
      "definition": "보존된 미생물 구조 등을 감지하는 선천면역 수용체"
    },
    "cytokine": {
      "key": "cytokine",
      "definition": "면역세포 사이에서 활성화와 반응의 성격을 조절하는 신호 분자"
    },
    "hspc": {
      "key": "hspc",
      "definition": "혈액·면역세포 계통의 줄기세포와 전구세포"
    },
    "hev": {
      "key": "hev",
      "definition": "혈액의 순환 면역세포가 림프절로 들어오는 특수 혈관"
    },
    "chemokine": {
      "key": "chemokine",
      "definition": "면역세포의 이동 방향을 정하는 cytokine · 수용체는 7회 막관통 GPCR"
    },
    "jak-stat": {
      "key": "jak",
      "definition": "cytokine 수용체에 붙은 JAK이 STAT을 인산화해 핵으로 보내는 신호 경로"
    },
    "tnfsf": {
      "key": "tnfsf",
      "definition": "TNF 계열 리간드 집합 — 기억 T세포와 myeloid 세포 사이 접촉 신호의 한 축"
    }
  },
  "sourceLinks": {
    "immunology-overview": [
      [
        "Janeway 2001 · 면역계 구성",
        "https://www.ncbi.nlm.nih.gov/books/NBK27092/"
      ],
      [
        "Doulatov 2010 · 고전 계통도 보완",
        "https://doi.org/10.1038/ni.1889"
      ],
      [
        "Lee 2017 · DC 분화",
        "https://doi.org/10.1038/ni.3789"
      ],
      [
        "Warrick 2025 · 양방향 소통",
        "https://doi.org/10.1146/annurev-immunol-083122-040624"
      ],
      [
        "NKT cells · 2017",
        "https://www.ncbi.nlm.nih.gov/books/NBK532332/"
      ],
      [
        "Cruz de Casas 2024 · 림프절 이질성",
        "https://doi.org/10.1038/s41577-023-00965-8"
      ],
      [
        "Haniffa 2025 · 태아 면역",
        "https://doi.org/10.1038/s41577-024-01099-1"
      ],
      [
        "Palma 2026 · 초기 면역 발달",
        "https://doi.org/10.1038/s41590-026-02523-5"
      ]
    ],
    "immunology-cell-identity": [
      [
        "10x PBMC3k · 원본 데이터",
        "https://www.10xgenomics.com/datasets/3-k-pbm-cs-from-a-healthy-donor-1-standard-1-1-0"
      ],
      [
        "Scanpy · 가공 데이터 설명",
        "https://scanpy.readthedocs.io/en/stable/generated/scanpy.datasets.pbmc3k_processed.html"
      ],
      [
        "Blood Plasma · 2026",
        "https://www.ncbi.nlm.nih.gov/books/NBK531504/"
      ],
      [
        "SWOG · buffy coat/plasma 분리",
        "https://www.swog.org/BuffyCoatPlasmaCollectionGuidelines"
      ],
      [
        "MedlinePlus · Blood differential test",
        "https://medlineplus.gov/ency/article/003657.htm"
      ]
    ]
  },
  "articlePages": {
    "immunology-overview": "01-basics/overview.html",
    "immunology-cell-identity": "01-basics/cells.html",
    "immunology-lymph-node": "01-basics/lymph-node.html",
    "immunology-recognition": "01-basics/cytokine.html",
    "immunology-ontogeny": "01-basics/ontogeny.html"
  }
};
window.IMMUNOLOGY = {
  "homeSection": "basics",
  "sections": {
    "basics": {
      "number": "01",
      "title": "기초와 구성 — 면역계는 무엇으로 이루어지나",
      "english": "WHAT THE IMMUNE SYSTEM IS MADE OF",
      "accent": "#6f3a55",
      "kuby": "Kuby 1–3장",
      "summary": "면역계 조직도 · 세포 종류와 상태 · 림프절 미세환경 · 선천–적응 신호 · 발생과 영아기",
      "groups": [
        {
          "q": "면역계는 전체적으로 어떻게 짜여 있나?",
          "note": "Kuby 1장 · 면역계 개요",
          "items": [
            [
              "immunology-overview",
              "면역계의 큰 그림",
              "조혈 계통도(계통 ↔ 역할 색 전환) · 용어 포함 관계 · 선천↔적응 연결 · 세포·장소·시간 축",
              "읽기",
              ""
            ]
          ]
        },
        {
          "q": "면역세포의 종류와 상태는 어떻게 구분하나?",
          "note": "Kuby 2장 · 면역세포와 분류",
          "items": [
            [
              "immunology-cell-identity",
              "면역세포의 종류와 상태",
              "혈액 분획(whole blood·plasma·serum·buffy coat·PBMC) · 분모별 세포 비율 · PBMC3k UMAP·조성 · 종류 vs 상태",
              "읽기",
              ""
            ]
          ]
        },
        {
          "q": "같은 림프절도 왜 서로 다른 면역반응을 만드나?",
          "note": "Kuby 2장 · 림프기관과 미세환경",
          "items": [
            [
              "immunology-lymph-node",
              "림프절과 미세환경",
              "림프절 단면 지도(림프·혈액 입구, 반응 경로) · 구역별 세포 · 배수 장기에 따른 림프절 차이",
              "읽기",
              ""
            ]
          ]
        },
        {
          "q": "면역세포는 무엇으로 서로 신호를 주고받나?",
          "note": "Kuby 3장 · 인식과 반응",
          "items": [
            [
              "immunology-recognition",
              "cytokine과 신호 — 수용체 계열 지도",
              "cytokine 수용체 계열과 신호 경로(JAK-STAT · NF-κB · SMAD · GPCR) · 작용 거리와 pleiotropy·redundancy · CD4 T세포 분화를 정하는 조합 · chemokine 주소 · 치료 표적",
              "읽기",
              ""
            ]
          ]
        },
        {
          "q": "면역계는 언제 만들어지고 출생 전후에 어떻게 달라지나?",
          "note": "Kuby 2장 연결 · 발생과 초기 면역",
          "items": [
            [
              "immunology-ontogeny",
              "면역 발생과 영아기",
              "수정부터 두 돌까지 한 장 타임라인(난황낭 → AGM → 태아 간 → 골수) · 태반을 건너오는 모체 IgG와 모체 세포 · 모유와 미생물 정착 · 영아기 조직별 T세포 — 성인의 축소판이 아닌 시기별 프로그램",
              "읽기",
              ""
            ]
          ]
        }
      ]
    }
  }
};
Object.assign(window.IMMUNOLOGY, window.IMMUNOLOGY_BASICS);
