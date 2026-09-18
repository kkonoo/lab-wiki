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
        "cytokine",
        "사이토카인",
        "chemokine",
        "interleukin",
        "JAK",
        "STAT",
        "JAK-STAT",
        "NF-κB",
        "SMAD",
        "GPCR",
        "TIR",
        "MyD88",
        "TRAF",
        "TNFSF",
        "TNFRSF",
        "CD40L",
        "수용체 계열",
        "공유 사슬",
        "γc",
        "gp130",
        "three-signal",
        "신호 3",
        "Th1",
        "Th2",
        "Th17",
        "Treg",
        "Tfh",
        "pleiotropy",
        "redundancy",
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
            "pleiotropy와 redundancy의 이유 = 수용체 분포 · 신호 경로 공유 · 수용체 사슬 공유 (Ozaki 2002)"
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
        "조혈",
        "HSPC",
        "yolk sac",
        "AGM",
        "태아",
        "골수",
        "thymus",
        "영아",
        "IgG",
        "모유"
      ],
      "basics",
      "태아기의 연속적인 조혈 wave와 출생 전후 환경이 함께 만드는 면역계 — 성인의 축소판을 넘어 발달 단계별 프로그램으로 해석",
      [
        [
          "조혈의 장소와 인계",
          [
            "yolk sac → AGM → 태아 간 → 태아 골수로 이어지는 조혈의 공간·시간 축",
            "태아 간에서의 면역세포 생산과 조직으로의 전구세포 유입",
            "thymus의 T세포 발달과 골수의 면역세포 생산 — 기관별로 다른 발달 과정"
          ]
        ],
        [
          "발달 단계별 세포 프로그램",
          [
            "태아기에 두드러진 B-1 cell·innate T·pro-angiogenic macrophage 집단 — Haniffa 2025",
            "영아 면역의 관용·조직 보호·빠른 effector 반응에 맞춘 특화 — Palma 2026",
            "폐·장과 림프기관 사이에서 서로 다른 memory T세포 축적의 시간 경과"
          ]
        ],
        [
          "출생 전후의 조정 신호",
          [
            "산모 IgG·모유 성분·미생물과 대사산물 — 초기 면역 환경을 조정하는 입력",
            "면역 발달을 단순한 결손의 보충보다 시기·조직에 맞는 프로그램 변화로 이해",
            "전사체 기반 발달 경로는 기원에 대한 추론 — 실제 계통추적 결과와 구분"
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
        "Ozaki & Leonard 2002, J Biol Chem",
        "https://doi.org/10.1074/jbc.R200003200"
      ],
      [
        "Altan-Bonnet & Mukherjee 2019, Nat Rev Immunol",
        "https://doi.org/10.1038/s41577-019-0131-x"
      ],
      [
        "Oyler-Yaniv 2017, Immunity",
        "https://doi.org/10.1016/j.immuni.2017.03.011"
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
      ]
    ],
    "immunology-ontogeny": [
      [
        "Haniffa 2025, Nat Rev Immunol",
        "https://doi.org/10.1038/s41577-024-01099-1"
      ],
      [
        "Palma 2026, Nat Immunol",
        "https://doi.org/10.1038/s41590-026-02523-5"
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
    "immunology-recognition": "01-basics/cytokine.html"
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
              "태아기의 연속적인 조혈 wave와 출생 전후 환경이 함께 만드는 면역계 — 성인의 축소판을 넘어 발달 단계별 프로그램으로 해석",
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
