window.IMMUNOLOGY_RECOGNITION = {
  "articleRows": [
    [
      "immunology-vdj-recombination",
      "림프구 수용체의 다양성은 어떻게 만들어지나?",
      ["V(D)J recombination", "V(D)J 재조합", "RAG", "RAG1", "RAG2", "RSS", "recombination signal sequence",
       "12/23 규칙", "heptamer", "nonamer", "spacer", "junctional diversity", "접합부 다양성",
       "loop extrusion", "cohesin", "CTCF", "IGCR1", "PAX5", "Wapl", "chromatin scanning",
       "NHEJ", "classical NHEJ", "DCLRE1C", "LIG4", "insert 항체", "somatic exon shuffling", "LAIR1",
       "antibody repertoire", "항체 레퍼토리", "cryptic RSS", "IGH", "TCR"],
      "recognition",
      "RSS 문법과 12/23 규칙 · RAG1-RAG2의 단계적 포획과 classical NHEJ 강제 · cohesin loop extrusion이 정하는 조각 사용 빈도 · 접합부 다양성과 항체에 끼어드는 다른 유전자 조각 · 자르는 기계를 몸에 두는 대가",
      [
        ["문법은 서열에 적혀 있다",
         ["RSS = heptamer(CACAGTG) + 12 또는 23 bp spacer + nonamer, 앞의 CAC가 절단점",
          "12/23 규칙 — 12-RSS는 23-RSS와만 효율적으로 짝을 짓는다",
          "TCRβ에는 B12/23 제한이 얹혀 Vβ가 Dβ의 12-RSS와만 재조합한다",
          "RAG2의 PHD가 H3K4me3를 읽고 T490 인산화가 재조합을 G1에 묶어 둔다"]],
        ["무작위성에도 좌표가 있다",
         ["cohesin loop extrusion이 수렴 방향 RSS만 쓰이게 만든다",
          "가까운 VH는 RSS가 아니라 하류 CTCF site가 있어야 쓰인다 · IGCR1을 끄면 약 50배 증가",
          "PAX5 → PRC2 → Wapl 약 4배 감소가 distal VH 접근의 조건",
          "2.4 Mb VH 역위에서 기능 VH 37개가 전혀 재조합되지 않는다"]],
        ["접합부와 삽입",
         ["p·n 뉴클레오타이드 추가로 다양성이 커지는 대신 읽기 틀이 자주 깨진다",
          "수용 지점 둘 — VDJ 접합부(꼭대기)와 J–CH1 접합부(팔꿈치)",
          "네 부류 mtVDJ · nucVDJ · telJC · nucJC, 전체 삽입의 약 14%가 mtDNA",
          "말라리아 노출 인구 5% 이상에서 LAIR1 함유 항체가 특이 반응을 지배 — 보호 이득 근거는 없다"]],
        ["자르는 기계를 몸에 두는 대가",
         ["cryptic RSS는 최소 CAC만 있어도 잘린다 — 전좌의 출발점",
          "core RAG2 × p53 결손 mouse의 Tcra·Igh 전좌 흉선 림프종",
          "RAG1/RAG2 변이는 T-B-SCID부터 Omenn·γδ 확장·자가면역까지",
          "수선 쪽 결함은 방사선 감수성 중증 복합면역결핍"]]
      ],
      ["immunology-antigen-presentation", "immunology-thymic-selection", "immunology-b-cell-development"]
    ],
    [
      "immunology-antigen-presentation",
      "항원은 어떻게 제시되나?",
      ["antigen presentation", "항원 제시", "antigen processing", "항원 처리", "MHC", "주조직적합복합체",
       "HLA", "MHC class I", "MHC class II", "β2m", "beta-2 microglobulin", "proteasome", "immunoproteasome",
       "β5t", "PSMB11", "TAP1", "TAP2", "ERAAP", "tapasin", "peptide-loading complex", "calreticulin",
       "invariant chain", "Ii", "CLIP", "HLA-DM", "HLA-DO", "cathepsin", "GILT",
       "cross-presentation", "교차제시", "spliced peptide", "CD1", "MR1", "HLA-E", "HLA-G",
       "immunopeptidomics", "neoantigen"],
      "recognition",
      "획득→표지→절단→전달→적재→제시 6단계 · MHC class I은 proteasome·TAP·peptide-loading complex, class II는 엔도리소좀·invariant chain·HLA-DM 편집 · 비고전 제시 분자와 교차제시 · spliced peptide와 예측의 한계 · HLA 다형성이 왜 표현형인가",
      [
        ["두 경로는 구획으로 갈린다",
         ["class I — DRiP·ERAD 산물 → proteasome → TAP1/TAP2 → ERAAP 다듬기 → peptide-loading complex",
          "class II — 삼킨 항원 → 엔도리소좀 cathepsin → invariant chain이 남긴 CLIP → HLA-DM 편집",
          "리간드를 못 받은 MHC class I은 불안정해져 회수된다",
          "8–10 잔기는 CD8 T세포, 10–15 잔기는 CD4 T세포"]],
        ["대립형이 다르면 보이는 것이 다르다",
         ["인간 대립형이 수천 개 — 제시 가능한 펩타이드 집합 자체가 유전형에 달려 있다",
          "위험 대립형이 말초에서 자가항원을 더 잘 제시한다는 설명과 흉선 레퍼토리를 바꾼다는 설명",
          "흉선 피질은 β5t·cathepsin L·TSSP로 다른 조직에 없는 peptidome을 만든다",
          "질환별 수치와 아미노산 fine-mapping은 자가면역 문서에 둔다"]],
        ["예측 규칙이 못 잡는 항원",
         ["proteasome 내 transpeptidation이 4–40 잔기 떨어진 조각을 잇는 spliced peptide를 만든다",
          "immunopeptidomics·구조 기반 motif·유전체 규모 epitope 스크린이 필요한 이유",
          "MHC class I 소실·TAP 차단·MHC 유사 decoy는 같은 지도를 거꾸로 읽은 것"]],
        ["비고전 제시 분자",
         ["HLA-E·F·G는 신호펩타이드, CD1은 지질, MR1은 비타민 B 대사산물",
          "교차제시는 세포외 항원을 MHC class I에 올린다 — RAB7·SEC22B·WDFY4"]]
      ],
      ["immunology-thymic-selection", "immunology-vdj-recombination", "immunology-b-cell-development"]
    ],
    [
      "immunology-thymic-selection",
      "T세포는 흉선에서 어떻게 골라지나?",
      ["thymic selection", "흉선 선택", "중추관용", "central tolerance", "양성선택", "positive selection",
       "음성선택", "negative selection", "clonal deletion", "death by neglect", "β-selection",
       "DN", "DP", "SP", "cTEC", "mTEC", "AIRE", "APS-1", "APECED", "FEZF2", "mimetic cell",
       "FOXP3", "IPEX", "Treg", "agonist selection", "iNKT", "MAIT", "γδ T세포", "IEL",
       "ZBTB7B", "ThPok", "RUNX3", "PSMB11", "TSSP", "KLF2", "S1PR1", "DiGeorge", "TBX1", "ZAP70"],
      "recognition",
      "DN의 β-selection과 DP의 TCRα 오디션 · cTEC 고유 peptidome에 의한 양성선택(약 5%)과 death by neglect · 수질의 AIRE·FEZF2·mimetic cell과 clonal deletion·Treg 선택·agonist 선택 · 친화도만으로 결과가 갈리지 않는 이유 · 사람의 고장 목록",
      [
        ["피질에서 수질로",
         ["DN에서 Notch로 T계통 지정 후 TCRβ 재조합 → β-selection",
          "DP에서 TCRα를 3–4일 안에 여러 번 바꿔 끼우며 오디션",
          "cTEC의 PSMB11(β5t)·cathepsin L·TSSP가 만드는 고유 peptidome",
          "약 5%만 양성선택되고 나머지는 death by neglect"]],
        ["수질이 보여주는 것",
         ["AIRE⁺ mTEC가 조직특이 유전자를 탈억제, FEZF2와 mimetic cell이 보완",
          "흉선 B세포와 수지상세포 아형도 항원 공급에 참여",
          "강한 반응은 BIM 의존 clonal deletion — CD28 공자극이 필요하다",
          "흔한 항원은 삭제, 희소 항원은 Treg — IL-2 가용성이 생사를 가른다"]],
        ["친화도 하나로는 결과가 갈리지 않는다",
         ["Treg 선택 구간이 삭제 구간과 겹친다",
          "신호 세기 + IL-2 가용성 + 자기항원 밀도의 조합",
          "agonist 선택 — Treg·γδ·iNKT·MAIT·CD8αα IEL은 강한 신호에도 죽지 않는다"]],
        ["사람의 고장 목록",
         ["만들지 못하면 면역결핍 — RAG·수선 계열·ZAP70·TBX1·CHD7·MHC 발현 결손",
          "거르지 못하면 자가면역 — AIRE(APS-1)·FOXP3(IPEX)",
          "clonal deletion의 기여는 논쟁 중 — 자가반응 세포의 존재와 질병은 다르다"]]
      ],
      ["immunology-b-cell-development", "immunology-antigen-presentation", "immunology-vdj-recombination"]
    ],
    [
      "immunology-b-cell-development",
      "B세포는 골수에서 어떻게 만들어지고 검사되나?",
      ["B cell development", "B세포 발달", "pro-B", "pre-B", "immature B", "CLP", "pre-BCR",
       "receptor editing", "수용체 편집", "central tolerance", "중심 관용", "tolerance checkpoint",
       "PU.1", "SPI1", "IKAROS", "IKZF1", "E2A", "TCF3", "EBF1", "PAX5",
       "BTK", "BLNK", "IGHM", "IGLL1", "CD79A", "CD79B", "PIK3CD", "SLC39A7",
       "UNC93B1", "IRAK4", "MYD88", "PTPN22", "inborn errors of immunity", "IEI", "면역결핍",
       "B-ALL", "급성림프구성백혈병", "ETV6", "RUNX1", "전백혈병 클론"],
      "recognition",
      "PU.1·IKAROS·E2A의 지정과 EBF1·PAX5의 고정 · pre-BCR의 전부 아니면 전무 관문과 자기반응성 검사 · receptor editing · 단계별 인간 유전자 결함 지도 · 자가반응 세포의 존재와 질병은 다르다 · 같은 회로가 B-ALL에서 쓰이는 방식",
      [
        ["검사관이 따로 없다",
         ["B세포 수용체는 MHC 제약을 받지 않아 전용 장기가 필요 없다",
          "검사는 골수 안에서 두 번 — pre-BCR 관문과 자기반응성 검사",
          "재배열의 약 66%가 읽기 틀을 잃고, in-frame 중쇄 성공률은 약 55%",
          "어느 시점에나 발달 중 세포의 약 20%가 receptor editing 중"]],
        ["유전자 결함이 막는 자리",
         ["전사인자·cytokine — TCF3·IKZF1·IKZF3·SPI1·PAX5·FLT3LG",
          "V(D)J와 수선 — RAG1/2·DCLRE1C·LIG4·PRKDC·NHEJ1·ATM·NBN",
          "pre-BCR 신호 — IGHM·IGLL1·CD79A/B·BTK·BLNK·PIK3CD·SLC39A7",
          "DNA 복제 — POLD1·POLE1/2·TOP2B, B세포와 NK세포가 특히 취약"]],
        ["자가반응 세포가 있다 ≠ 자가면역이다",
         ["UNC93B1·IRAK4·MYD88 결손은 항핵 naive B세포가 쌓여도 임상 자가면역이 없다",
          "자기항원 인식과 활성화가 둘 다 필요하다",
          "흔한 변이 쪽에서는 PTPN22 R620W가 자가반응 B세포를 늘린다"]],
        ["같은 회로가 백혈병에서 다시 쓰인다",
         ["IKZF1·TCF3·PAX5·NBN·RAG가 면역결핍·자가면역·B-ALL 어디로든 나타난다",
          "PAX5 결손은 B-ALL의 약 30%, IKZF1 결손은 고위험군에서 최대 70%",
          "ETV6 배선 변이는 상대위험 약 23배",
          "전백혈병 클론은 신생아에 흔하고 발병은 드물다 — 유전–환경 협력"]]
      ],
      ["immunology-thymic-selection", "immunology-vdj-recombination", "immunology-antigen-presentation"]
    ]
  ],
  "paperLinks": {
    "immunology-vdj-recombination": [
      ["Schatz & Swanson 2011, Annu Rev Genet", "https://doi.org/10.1146/annurev-genet-110410-132552"],
      ["Zhang 2022, Nat Rev Immunol", "https://doi.org/10.1038/s41577-022-00679-3"],
      ["Lebedin & de la Rosa 2024, Annu Rev Cell Dev Biol", "https://doi.org/10.1146/annurev-cellbio-112122-030835"],
      ["Neehus 2025, J Hum Immun", "https://doi.org/10.70962/jhi.20250042"]
    ],
    "immunology-antigen-presentation": [
      ["Pishesha 2022, Nat Rev Immunol", "https://doi.org/10.1038/s41577-022-00707-2"],
      ["Ashby & Hogquist 2024, Nat Rev Immunol", "https://doi.org/10.1038/s41577-023-00911-8"]
    ],
    "immunology-thymic-selection": [
      ["Ashby & Hogquist 2024, Nat Rev Immunol", "https://doi.org/10.1038/s41577-023-00911-8"],
      ["Pishesha 2022, Nat Rev Immunol", "https://doi.org/10.1038/s41577-022-00707-2"],
      ["Neehus 2025, J Hum Immun", "https://doi.org/10.70962/jhi.20250042"]
    ],
    "immunology-b-cell-development": [
      ["Neehus 2025, J Hum Immun", "https://doi.org/10.70962/jhi.20250042"],
      ["Fischer 2020, Blood Cancer Discov", "https://doi.org/10.1158/2643-3230.BCD-20-0011"],
      ["Ashby & Hogquist 2024, Nat Rev Immunol", "https://doi.org/10.1038/s41577-023-00911-8"]
    ]
  },
  "glossaryTerms": {
    "rss": {"key": "rss", "definition": "조각 옆에 붙은 재조합 신호 서열 — heptamer + 12/23 spacer + nonamer"},
    "12/23 규칙": {"key": "r1223", "definition": "12-RSS는 23-RSS와만 효율적으로 재조합된다는 제약"},
    "loop extrusion": {"key": "loopex", "definition": "cohesin이 수렴 방향 CTCF site 사이의 염색질을 선형으로 끌어당기는 과정"},
    "receptor editing": {"key": "editing", "definition": "자기반응 B세포가 경쇄를 다시 재조합해 수용체를 갈아 끼우는 구제 경로"},
    "mhc": {"key": "mhc", "definition": "펩타이드를 실어 T세포에 보여주는 분자와 그 유전자 영역"},
    "cross-presentation": {"key": "xpres", "definition": "세포외 항원을 MHC class I에 실어 CD8 T세포에 보여주는 경로"},
    "spliced peptide": {"key": "spliced", "definition": "proteasome 안에서 떨어진 두 조각이 이어 붙어 만들어진 펩타이드"},
    "positive selection": {"key": "possel", "definition": "자기 MHC를 낮은 친화도로 읽는 흉선세포만 살리는 선택"},
    "negative selection": {"key": "negsel", "definition": "자기 항원에 강하게 반응하는 클론을 삭제하는 선택"},
    "agonist selection": {"key": "agosel", "definition": "강한 수용체 신호를 받고도 죽지 않고 조절 계통이 되는 선택"},
    "pre-bcr": {"key": "prebcr", "definition": "쓸 수 있는 중쇄를 만들었는지 전부 아니면 전무로 판정하는 관문 수용체"},
    "iei": {"key": "iei", "definition": "면역계 유전자의 단일유전자 결함으로 생기는 선천 면역 이상"}
  },
  "articlePages": {
    "immunology-vdj-recombination": "03-adaptive-recognition/diversity.html",
    "immunology-antigen-presentation": "03-adaptive-recognition/presentation.html",
    "immunology-thymic-selection": "03-adaptive-recognition/thymus.html",
    "immunology-b-cell-development": "03-adaptive-recognition/b-cell.html"
  }
};
window.IMMUNOLOGY = {
  "homeSection": "recognition",
  "sections": {
    "recognition": {
      "number": "03",
      "title": "적응면역 I — 인식과 발달",
      "english": "HOW LYMPHOCYTES LEARN TO RECOGNIZE",
      "accent": "#94553b",
      "kuby": "Kuby 6–9장",
      "summary": "항원수용체 유전자의 조립 문법 · MHC와 항원제시 · 흉선 선택 · 골수 B세포의 발달과 관용",
      "groups": [
        {
          "q": "림프구 수용체의 다양성은 어떻게 만들어지나?",
          "note": "Kuby 6장 · 림프구 수용체 유전자의 구성과 발현",
          "items": [
            ["immunology-vdj-recombination", "V(D)J 재조합 — 조립의 문법과 그것을 훑는 기구",
             "RSS와 12/23 규칙 · RAG의 단계적 포획과 classical NHEJ 강제 · loop extrusion이 정하는 조각 사용 빈도 · 접합부 다양성과 삽입 항체",
             "읽기", ""]
          ]
        },
        {
          "q": "항원은 어떻게 제시되나?",
          "note": "Kuby 7장 · 주조직적합복합체와 항원제시",
          "items": [
            ["immunology-antigen-presentation", "MHC와 항원제시 경로",
             "6단계와 두 경로(class I · class II) · 비고전 제시 분자와 교차제시 · spliced peptide와 예측의 한계 · 대립형이 곧 표현형인 이유",
             "읽기", ""],
            ["", "HLA와 자가면역 — 질환 위험 수치",
             "MHC 영역이 설명하는 위험과 아미노산 수준 fine-mapping은 자가면역 문서에 둔다",
             "wiki 문서 있음", "../../autoimmune/general/index.html"]
          ]
        },
        {
          "q": "T세포는 흉선에서 어떻게 골라지나?",
          "note": "Kuby 8장 · T 세포 발달",
          "items": [
            ["immunology-thymic-selection", "흉선 선택 — 유용한 것과 안전한 것",
             "β-selection과 DP 오디션 · cTEC 고유 peptidome과 양성선택 · 수질의 AIRE·FEZF2·mimetic cell · 삭제와 Treg·agonist 선택 · 사람의 고장 목록",
             "읽기", ""]
          ]
        },
        {
          "q": "B세포는 골수에서 어떻게 만들어지고 검사되나?",
          "note": "Kuby 9장 · B 세포의 발달",
          "items": [
            ["immunology-b-cell-development", "골수 B세포 발달과 중심 관용",
             "전사인자 회로와 두 관문 · receptor editing · 단계별 유전자 결함 지도 · 자가반응 세포의 존재와 질병은 다르다 · 같은 회로와 B-ALL",
             "읽기", ""]
          ]
        }
      ]
    }
  }
};
Object.assign(window.IMMUNOLOGY, window.IMMUNOLOGY_RECOGNITION);
