/* Human genetics 용어 사전 — disease/genetics 시각 페이지(<NN-절>/*.html)가 같이 쓰는 SSOT.
   body.vpage면 article.article 본문에서 용어마다 첫 등장 1회에 점선 + hover 정의를 붙인다.
   용어 추가는 terms에만 한다 — pattern은 terms 키에서 긴 것부터 자동으로 만든다.
   동작은 gwas/glossary.js와 같다(visual-page.md §9.4). 스타일(.glossary-term)은 spa.css. */
(function () {
  "use strict";
  var terms = {
    "cis-regulatory element": { key: "cre", definition: "같은 염색체 위 표적 유전자의 전사를 조절하는 비암호화 DNA 서열. promoter · enhancer · insulator 등." },
    "cre": { key: "cre", definition: "Cis-regulatory element. 같은 염색체 위 표적 유전자의 전사를 조절하는 비암호화 DNA 서열." },
    "ccre": { key: "ccre", definition: "Candidate cis-regulatory element. chromatin accessibility · histone 표지 같은 측정으로 찾은 조절 요소 후보." },
    "promoter": { key: "promoter", definition: "전사 시작점(TSS) 바로 앞, RNA polymerase와 기본 전사 인자가 모이는 자리." },
    "enhancer": { key: "enhancer", definition: "표적 유전자에서 떨어진 곳에 있으면서 그 유전자의 전사를 높이는 조절 요소. 세포형마다 켜지는 것이 다름." },
    "super-enhancer": { key: "super-enhancer", definition: "enhancer 여러 개가 몰려 있고 활성 표지가 특히 강한 구간. 세포 정체성 유전자 근처에 많음." },
    "insulator": { key: "insulator", definition: "양쪽에 있는 enhancer와 promoter 사이의 상호작용을 막는 서열. 사람에서는 주로 CTCF가 결합함." },
    "ctcf": { key: "ctcf", definition: "Insulator 서열에 결합하는 단백질. cohesin과 함께 chromatin loop와 TAD 경계를 만듦." },
    "cohesin": { key: "cohesin", definition: "DNA를 고리 모양으로 끌어당겨 chromatin loop를 만드는 단백질 복합체. CTCF 자리에서 멈춤." },
    "tad": { key: "tad", definition: "Topologically associating domain. 안쪽끼리는 자주 접촉하고 바깥과는 덜 접촉하는 염색체 구간." },
    "transcription factor": { key: "tf", definition: "특정 DNA 서열(motif)에 결합해 근처 유전자의 전사를 높이거나 낮추는 단백질." },
    "motif": { key: "motif", definition: "Transcription factor가 알아보고 결합하는 짧은 DNA 서열 패턴." },
    "chromatin accessibility": { key: "accessibility", definition: "Nucleosome이 비켜나 단백질이 DNA에 닿을 수 있는 정도. ATAC-seq · DNase-seq로 잼." },
    "atac-seq": { key: "atac", definition: "Tn5 효소가 열린 chromatin에만 끼어드는 성질로 접근 가능한 DNA 구간을 찾는 시퀀싱." },
    "histone modification": { key: "histone", definition: "Histone 꼬리의 아세틸화 · 메틸화 같은 화학 표지. H3K27ac는 활성 조절 요소, H3K4me3는 활성 promoter에 많음." },
    "eqtl": { key: "eqtl", definition: "Expression QTL. genotype에 따라 유전자 발현량이 달라지는 변이." },
    "caqtl": { key: "caqtl", definition: "Chromatin accessibility QTL. genotype에 따라 chromatin accessibility가 달라지는 변이." },
    "qtl": { key: "qtl", definition: "Quantitative trait locus. genotype에 따라 양적 측정값이 달라지는 유전체 위치." },
    "molecular qtl": { key: "molqtl", definition: "측정값이 발현 · splicing · chromatin 접근성 · 단백질량 같은 분자 형질인 QTL." },
    "sqtl": { key: "sqtl", definition: "Splicing QTL. genotype에 따라 exon 포함 비율이나 intron 잘림 비율이 달라지는 변이." },
    "pqtl": { key: "pqtl", definition: "Protein QTL. genotype에 따라 단백질량이 달라지는 변이. 주로 혈장 proteomics로 잼." },
    "mqtl": { key: "mqtl", definition: "Methylation QTL. genotype에 따라 CpG 자리의 DNA methylation 수준이 달라지는 변이." },
    "egene": { key: "egene", definition: "eQTL이 하나 이상 있는 유전자." },
    "cis-eqtl": { key: "cis-eqtl", definition: "유전자 가까이(보통 TSS ±1 Mb 안)에 있는 변이가 그 유전자의 발현을 바꾸는 eQTL." },
    "trans-eqtl": { key: "trans-eqtl", definition: "유전자에서 멀리 떨어지거나 다른 염색체에 있는 변이가 그 유전자의 발현을 바꾸는 eQTL." },
    "allele-specific expression": { key: "ase", definition: "이형접합인 사람 한 명 안에서 두 allele이 만든 RNA read를 따로 세어 비교하는 방법." },
    "psi": { key: "psi", definition: "Percent spliced in. 한 exon이 성숙 mRNA에 포함되는 비율(0–1)." },
    "credible set": { key: "credible-set", definition: "Causal variant를 정해진 확률(보통 95%)로 포함하는 변이 묶음. fine-mapping의 결과." },
    "colocalization": { key: "coloc", definition: "두 연관 신호(예: GWAS와 eQTL)가 같은 causal variant를 공유하는지 확률로 따지는 분석." },
    "twas": { key: "twas", definition: "Transcriptome-wide association study. eQTL로 학습한 발현 예측값을 GWAS 표본에 붙여 유전자 단위로 형질과의 연관을 검정." },
    "bulk rna-seq": { key: "bulk", definition: "조직이나 세포 집단 전체의 RNA를 한꺼번에 읽는 시퀀싱. 세포형별 발현이 섞인 평균이 나옴." },
    "pseudobulk": { key: "pseudobulk", definition: "단일세포 데이터에서 같은 사람 · 같은 세포형의 세포를 합쳐 bulk처럼 만든 값." },
    "winner's curse": { key: "winners-curse", definition: "발견 단계에서 유의성 기준을 통과한 효과 크기가 실제보다 크게 추정되는 현상." },
    "allelic imbalance": { key: "allelic-imbalance", definition: "이형접합인 사람에서 두 allele 쪽의 신호(발현 · accessibility 등)가 1:1에서 벗어나는 현상." },
    "mpra": { key: "mpra", definition: "Massively parallel reporter assay. 수천 개 서열을 reporter 앞에 붙여 allele마다 전사 활성을 한 번에 재는 실험." },
    "fine-mapping": { key: "fine-mapping", definition: "LD로 묶인 연관 변이 가운데 causal variant일 확률을 변이마다 계산하는 통계 분석." },
    "splicing": { key: "splicing", definition: "Pre-mRNA에서 intron을 잘라 내고 exon을 잇는 과정." },
    "splice site": { key: "splice-site", definition: "Exon과 intron의 경계에서 splicing 기구가 알아보는 서열." },
    "micro capture-c": { key: "mcc", definition: "관심 구간을 골라 잡아 그 구간이 접촉하는 상대 서열을 bp 수준 해상도로 읽는 chromosome conformation capture 방법." },
    "gwas": { key: "gwas", definition: "Genome-wide association study. 유전체 전체 변이를 하나씩 형질과의 연관으로 검정하는 연구." },
    "lead snp": { key: "lead-snp", definition: "한 locus에서 연관 p-value가 가장 작은 변이. causal variant와 같다는 보장은 없음." },
    "causal variant": { key: "causal-variant", definition: "형질 변화에 직접 관여한다고 추정되는 변이." },
    "reporter assay": { key: "reporter", definition: "조절 서열을 reporter 유전자 앞에 붙여 그 서열이 전사를 얼마나 올리는지 재는 실험." },
    "starr-seq": { key: "starr", definition: "Self-transcribing active regulatory region sequencing. 후보 조각을 reporter transcript 안에 넣어 스스로 전사되게 함으로써 조각 수백만 개의 enhancer 활성을 한 번에 재는 방법." },
    "luciferase": { key: "luciferase", definition: "빛을 내는 효소를 reporter로 써서 서열 하나의 조절 활성을 따로 재는 실험." },
    "barcode": { key: "barcode", definition: "서열마다 붙이는 짧은 식별 표지. RNA 쪽 barcode 수를 세어 어떤 서열이 전사됐는지 가림." },
    "saturation genome editing": { key: "sge", definition: "한 exon에서 가능한 거의 모든 한 염기 치환을 내인성 유전체에 넣고 기능을 한꺼번에 재는 방법." },
    "mave": { key: "mave", definition: "Multiplexed assay of variant effect. 변이 수천 개의 기능을 한 실험에서 재는 assay 계열." },
    "deep mutational scanning": { key: "dms", definition: "변이를 많이 넣은 단백질을 선별해 변이마다 기능 점수를 매기는 방법. 흔히 cDNA를 과발현해 내인성 맥락이 빠짐." },
    "vus": { key: "vus", definition: "Variant of uncertain significance. 병원성 여부를 아직 정하지 못한 변이." },
    "hdr": { key: "hdr", definition: "Homology-directed repair. 주형 서열을 본떠 끊어진 DNA를 고치는 수선 경로. 원하는 염기를 넣을 때 씀." },
    "crispri": { key: "crispri", definition: "촉매 활성을 없앤 dCas9에 억제 도메인(KRAB)을 붙여 표적 구간의 전사를 낮추는 방법." },
    "crispra": { key: "crispra", definition: "dCas9에 활성 도메인을 붙여 표적 구간의 전사를 올리는 방법." },
    "dcas9": { key: "dcas9", definition: "DNA를 자르지 못하게 만든 Cas9. sgRNA가 가리키는 자리에 붙어 다른 도메인을 데려감." },
    "sgrna": { key: "sgrna", definition: "Single guide RNA. Cas9을 표적 DNA 서열로 데려가는 RNA." },
    "crispri-flowfish": { key: "flowfish", definition: "RNA FISH로 표적 유전자의 mRNA를 염색하고 세포를 분류해, 요소를 끈 효과를 발현량으로 정량하는 스크린." },
    "abc model": { key: "abc", definition: "Activity-by-contact. 요소의 활성과 접촉 빈도를 곱해 요소와 유전자의 연결을 예측하는 모델." },
    "perturb-seq": { key: "perturb-seq", definition: "Pooled CRISPR 스크린과 단일세포 RNA-seq를 묶어, 세포마다 어떤 교란이 들어갔는지와 그 세포의 전사체를 함께 읽는 방법." },
    "crop-seq": { key: "crop-seq", definition: "sgRNA를 전사되는 자리에 넣어 단일세포 RNA-seq에서 바로 포획하는 Perturb-seq 변형." },
    "knockdown": { key: "knockdown", definition: "유전자를 아예 없애지 않고 발현만 낮추는 조작." },
    "organoid": { key: "organoid", definition: "줄기세포를 분화시켜 만든, 장기의 구조를 일부 닮은 3차원 세포 덩어리." },
    "ipsc": { key: "ipsc", definition: "Induced pluripotent stem cell. 체세포를 되돌려 만든 만능 줄기세포." },
    "mendelian randomization": { key: "mr", definition: "유전 변이를 도구변수로 삼아 노출(예: 단백질 수준)에서 결과(질환)로 가는 인과 효과를 추정하는 방법." },
    "druggable": { key: "druggable", definition: "작은 분자나 항체가 붙어 기능을 바꿀 수 있다고 보는 단백질. 그런 단백질의 집합을 druggable genome이라 부름." },
    "lof": { key: "lof", definition: "Loss of function. 유전자 기능이 줄거나 없어지는 변이." },
    "gof": { key: "gof", definition: "Gain of function. 유전자 기능이 늘거나 새로 생기는 변이." },
    "allelic series": { key: "allelic-series", definition: "같은 유전자의 allele을 기능이 낮은 쪽부터 높은 쪽까지 늘어놓은 것. 표현형이 어느 방향으로 움직이는지를 읽음." },
    "pharmacogenomics": { key: "pgx", definition: "유전형에 따라 약물 반응과 부작용이 달라지는 것을 다루는 분야. 표적을 고르는 일과는 축이 다름." },
    "forward genetics": { key: "forward", definition: "표현형에서 출발해 원인 유전자를 찾아가는 방향. phenotype-first라고도 함." },
    "reverse genetics": { key: "reverse", definition: "유전자나 변이에서 출발해 그것이 만드는 표현형을 보는 방향. genotype-first라고도 함." },
    "genotype-first": { key: "genotype-first", definition: "biobank 유전형으로 변이 보유자를 먼저 찾고 그 사람들의 표현형을 보는 설계." },
    "phewas": { key: "phewas", definition: "Phenome-wide association study. 변이 하나를 수백에서 수천 가지 표현형과 한꺼번에 검정하는 분석." },
    "phecode": { key: "phecode", definition: "진단 코드(ICD)를 연구용 질환 단위로 묶어 만든 표현형 코드." },
    "pleiotropy": { key: "pleiotropy", definition: "변이나 유전자 하나가 서로 다른 여러 형질에 영향을 주는 것." },
    "penetrance": { key: "penetrance", definition: "그 변이를 가진 사람 가운데 실제로 표현형이 나타나는 비율." },
    "expressivity": { key: "expressivity", definition: "같은 변이를 가진 사람들 사이에서 표현형의 심한 정도와 모습이 달라지는 것." },
    "ascertainment bias": { key: "ascertainment", definition: "사람을 어떻게 모았는지 때문에 생기는 치우침. 심한 환자만 모으면 침투도가 높게 추정됨." },
    "positional cloning": { key: "positional-cloning", definition: "표현형과 함께 유전되는 염색체 구간을 좁혀 원인 유전자를 찾아내던 고전적 방법." },
    "liability-threshold model": { key: "lt-model", definition: "이분형 질환을 liability 정규분포 위의 threshold 넘기로 보는 모델. threshold 위치는 집단 유병률이 정함." },
    "liability-scale": { key: "lsh", definition: "Liability 척도에서 계산한 유전율. 표본 유병률에 좌우되지 않아 질환끼리 견줄 수 있음." },
    "liability": { key: "liability", definition: "소인. 질환이 생길 소질을 나타내는 관찰되지 않는 연속 척도로, 유전과 환경의 몫을 합쳐 분산을 1로 맞춤." },
    "observed scale": { key: "observed-scale", definition: "질환을 0과 1 그대로 두고 계산한 척도. 표본 유병률에 따라 값이 달라져 연구끼리 비교하기 어려움." },
    "lt-fh": { key: "lt-fh", definition: "본인의 case · control 상태와 가족 병력을 합쳐 사후 평균 유전 소인을 구하고, 그 연속값을 GWAS 표현형으로 쓰는 방법." },
    "gwax": { key: "gwax", definition: "GWAS by proxy. 본인 대신 부모 · 형제자매의 병력을 표현형으로 삼아 돌리는 GWAS." },
    "pcgc": { key: "pcgc", definition: "Phenotype correlation–genotype correlation 회귀. Haseman–Elston 회귀를 일반화해 이분형 형질의 liability 유전율을 바로 추정함." },
    "ascertainment": { key: "ascertainment", definition: "표본을 모으는 방식. case를 일부러 많이 모으거나 건강한 사람이 더 참여하면 추정값이 치우침." },
    "broad-sense heritability": { key: "h2-broad", definition: "dominance와 recessive 효과, 유전 요인 사이 상호작용까지 포함해 모든 유전 요인이 설명하는 형질 분산의 비율(H²)." },
    "narrow-sense heritability": { key: "h2-narrow", definition: "가산 유전 효과만 세어 계산한 형질 분산의 비율(h²). GWAS · PRS 문헌의 h²는 대개 이쪽." },
    "snp-based heritability": { key: "snp-h2", definition: "GWAS에서 보통 유전형을 재고 imputation하는 변이 부류의 가산 효과가 설명하는 형질 분산의 비율." },
    "grm": { key: "grm", definition: "Genetic relationship matrix. 유전체 전체 SNP로 계산한 사람 쌍의 유전 유사도 행렬. 혼합모형의 분산 구조로 씀." },
    "greml": { key: "greml", definition: "GRM을 넣은 혼합모형을 REML로 적합해 모든 SNP가 함께 설명하는 분산을 추정하는 방법. GCTA가 대표 구현." },
    "gcta": { key: "gcta", definition: "GRM 계산과 GREML 추정을 묶은 도구. 개별 SNP를 검정하는 대신 전체가 설명하는 분산을 추정함." },
    "assortative mating": { key: "assortative-mating", definition: "닮은 사람끼리 짝을 이루는 경향. 친족 사이 유사도를 올려 가계 기반 유전율 추정치를 부풀릴 수 있음." },
    "still-missing heritability": { key: "still-missing", definition: "가계 기반 유전율과 흔한 SNP가 설명하는 몫 사이에 남는 간격. 드문 변이 · 공유 환경 · non-additive 효과가 후보 설명." },
    "genetic architecture": { key: "genetic-architecture", definition: "한 형질에 기여하는 변이의 수, 빈도 분포, 변이마다의 효과 크기, 변이 사이 상호작용을 한데 묶어 부르는 말." },
    "maf": { key: "maf", definition: "Minor allele frequency. 집단에서 덜 흔한 allele의 빈도. common은 5% 이상, low-frequency는 1–5%, rare는 1% 미만으로 가름." },
    "oligogenic": { key: "oligogenic", definition: "효과가 비교적 큰 소수의 locus가 형질 변이의 대부분을 만드는 구조. polygenic의 반대쪽 끝." },
    "omnigenic": { key: "omnigenic", definition: "유전자 조절망이 충분히 얽혀 있어 질환 관련 세포에서 발현되는 거의 모든 유전자가 core 유전자의 기능에 영향을 줄 수 있다고 보는 모형." },
    "negative selection": { key: "negative-selection", definition: "적합도를 낮추는 allele의 빈도를 떨어뜨리는 선택. penetrance가 높은 변이가 집단에서 흔해지지 못하는 이유." },
    "purifying selection": { key: "purifying-selection", definition: "해로운 변이를 걸러 내는 선택. negative selection과 같은 작용을 가리키는 말이고, 큰 효과 변이를 드물게 유지함." },
    "protein-truncating variant": { key: "ptv", definition: "단백질을 중간에서 끊는 변이. nonsense · frameshift · 핵심 splice site 변이가 여기 들어감." },
    "ptv": { key: "ptv", definition: "Protein-truncating variant. 단백질을 중간에서 끊는 변이. nonsense · frameshift · 핵심 splice site 변이." },
    "cnv": { key: "cnv", definition: "Copy number variant. 유전체 구간이 중복되거나 결실돼 복제수가 달라진 변이. 구간이 길수록 유전자를 여럿 건드림." },
    "epistasis": { key: "epistasis", definition: "한 locus의 효과가 다른 locus의 유전형에 달려 있는 현상. 상위성." },
    "statistical epistasis": { key: "statistical-epistasis", definition: "통계 모형에 넣은 상호작용 항이 유의한 경우. 분자 수준에서 실제로 맞물린다는 뜻은 아님." },
    "functional epistasis": { key: "functional-epistasis", definition: "분자나 경로 수준에서 두 유전자가 실제로 맞물리는 것. 통계 모형에서는 잡히지 않을 수 있음." },
    "gene-environment interaction": { key: "gxe", definition: "유전 효과의 크기가 노출 수준에 따라 달라지는 현상. 맥락에는 환경 · 행동 · 사회경제 지표 · 생체지표 · 성별이 들어감." },
    "g×e": { key: "gxe", definition: "Gene-environment interaction. 유전 효과의 크기가 노출 수준에 따라 달라지는 현상." },
    "amplification": { key: "amplification", definition: "불리한 맥락에서 같은 유전 효과의 크기가 커지는 것. 효과의 방향 자체가 달라지는 재배열과 구분함." },
    "x-chromosome inactivation": { key: "xci", definition: "여성의 두 X 가운데 하나를 배아기에 전사적으로 침묵시키는 기전. lncRNA XIST와 DNA methylation이 유지함." },
    "xci": { key: "xci", definition: "X-chromosome inactivation. 여성의 두 X 가운데 하나를 전사적으로 침묵시키는 기전." },
    "xci escape": { key: "xci-escape", definition: "불활성화된 X에서도 침묵을 벗어나 발현되는 유전자. 여성에서 그 유전자의 dosage가 올라감." },
    "skewed xci": { key: "skewed-xci", definition: "두 X 가운데 한쪽이 세포 다수에서 우선 불활성화된 상태. X 연관 유전자의 유효 dosage가 한쪽으로 치우침." },
    "carter effect": { key: "carter-effect", definition: "유병률이 낮은 성이 발병하려면 더 큰 유전 소인이 필요하다고 보는 성 의존 liability threshold 모형." },
    "proportion needed to benefit": { key: "pnb", definition: "이득을 한 사람 보려면 몇 명이 행동을 바꿔야 하는지로 개입 효율을 재는 지표." },
    "pnb": { key: "pnb", definition: "Proportion needed to benefit. 이득을 한 사람 보려면 몇 명이 행동을 바꿔야 하는지로 재는 개입 효율 지표." },
    "reference genome": { key: "reference-genome", definition: "read를 정렬하고 변이 좌표를 매기는 기준이 되는 표준 유전체 어셈블리. 정답 서열이 아니라 좌표계." },
    "grch38": { key: "grch38", definition: "지금 표준으로 쓰이는 사람 참조 유전체. primary scaffold에 약 151 Mb의 빈틈이 남아 있음." },
    "t2t-chm13": { key: "t2t-chm13", definition: "Y를 뺀 모든 염색체를 빈틈 없이 이은 3.055 Gb 어셈블리. 단일 haploid라 haplotype 다양성은 담지 않음." },
    "reference bias": { key: "reference-bias", definition: "참조와 같은 allele을 가진 read가 더 잘 붙어 호출이 참조 쪽으로 치우치는 현상." },
    "dark region": { key: "dark-region", definition: "coverage나 매핑 품질이 너무 낮아 사실상 변이를 볼 수 없는 유전체 구간." },
    "pangenome": { key: "pangenome", definition: "여러 haplotype의 서열을 한 참조 자료구조에 함께 담은 것. 대개 sequence graph 형태." },
    "pangenome reference": { key: "pangenome", definition: "여러 haplotype을 한 그래프에 담아 reference bias를 줄이려는 참조." },
    "sequence graph": { key: "sequence-graph", definition: "서열이 갈라지고 합쳐지는 구조로 여러 haplotype을 함께 표현한 자료구조." },
    "haplotype": { key: "haplotype", definition: "같은 염색체에 함께 실려 전달되는 allele의 조합." },
    "segmental duplication": { key: "segdup", definition: "유전체 안에서 서로 길고 비슷하게 겹치는 구간. read가 어느 복제본에서 왔는지 가리기 어려움." },
    "pseudogene": { key: "pseudogene", definition: "기능하는 유전자와 서열이 닮았으나 단백질을 만들지 못하는 사본. 매핑을 모호하게 만듦." },
    "snp array": { key: "snp-array", definition: "미리 고른 common SNP만 직접 재는 저비용 유전형 측정 방식. 나머지는 대치로 채움." },
    "wes": { key: "wes", definition: "Whole-exome sequencing. 유전체의 coding 영역만 깊게 읽는 방식." },
    "wgs": { key: "wgs", definition: "Whole-genome sequencing. 유전체 전장을 읽는 방식." },
    "low-pass sequencing": { key: "low-pass", definition: "낮은 depth로 전장을 훑고 참조 패널로 대치해 메우는 설계." },
    "coverage": { key: "coverage", definition: "같은 자리를 평균 몇 개의 read가 덮는지. depth라고도 함." },
    "exome capture": { key: "exome-capture", definition: "probe로 coding 영역만 끌어모아 라이브러리를 만드는 단계." },
    "blended genome exome": { key: "bge", definition: "같은 DNA의 PCR-free genome 풀과 exome capture 풀을 섞어 한 런에서 두 층을 얻는 설계." },
    "bge": { key: "bge", definition: "Blended genome exome. 깊은 exome과 얕은 genome을 한 런에서 함께 얻는 설계." },
    "variant calling": { key: "variant-calling", definition: "정렬된 read에서 변이를 찾아내고 사람마다 유전형을 매기는 단계." },
    "joint calling": { key: "joint-calling", definition: "여러 사람의 자료를 모아 한 번에 유전형을 매기는 방식. 드문 변이의 호출이 안정됨." },
    "truth set": { key: "truth-set", definition: "성능을 재는 기준으로 삼는, 답이 확립된 변이 목록." },
    "recall": { key: "recall", definition: "실제로 있는 것 가운데 몇을 찾아냈는지. 정밀도와 함께 봐야 함." },
    "imputation": { key: "imputation", definition: "참조 패널의 haplotype을 써서 직접 재지 않은 자리의 유전형을 추정하는 것." },
    "genotype imputation": { key: "imputation", definition: "참조 패널을 써서 측정하지 않은 자리의 유전형을 채우는 절차." },
    "long read": { key: "long-read", definition: "수 kb 이상 길이로 읽는 시퀀싱. 반복영역과 구조변이, haplotype 가르기에 강함." },
    "vaf": { key: "vaf", definition: "Variant allele fraction. 그 자리를 덮은 read 가운데 변이 allele을 가진 비율." },
    "snv": { key: "snv", definition: "Single-nucleotide variant. 염기 하나가 바뀐 변이." },
    "indel": { key: "indel", definition: "1–50 bp 길이의 짧은 삽입과 결실." },
    "structural variant": { key: "sv", definition: "50 bp를 넘는 변이. 결실 · 중복 · 역위 · 전좌가 들어감." },
    "sv": { key: "sv", definition: "Structural variant. 50 bp를 넘는 결실 · 중복 · 역위 · 전좌." },
    "tandem repeat": { key: "tandem-repeat", definition: "짧은 단위가 머리-꼬리로 연달아 반복되는 서열. 사람마다 반복 수가 다름." },
    "str": { key: "str", definition: "Short tandem repeat. 반복 단위가 1–6 bp인 tandem repeat. microsatellite라고도 함." },
    "vntr": { key: "vntr", definition: "Variable number tandem repeat. 반복 단위가 7 bp 이상인 tandem repeat." },
    "repeat expansion": { key: "repeat-expansion", definition: "반복 수가 정상 범위를 크게 넘어선 상태. 멘델 질환 수십 가지의 원인." },
    "transposable element": { key: "te", definition: "유전체 안에서 자리를 옮겼거나 옮길 수 있는 서열. SINE · LINE · LTR 계열이 있음." },
    "alu": { key: "alu", definition: "길이 약 300 bp의 primate 특이적 SINE. 사람 유전체의 약 10%를 차지하고 생쥐에는 없음." },
    "line-1": { key: "line-1", definition: "자율적으로 자리를 옮길 수 있는 약 6 kb 길이의 LINE 계열 전이인자. L1이라고도 함." },
    "herv": { key: "herv", definition: "Human endogenous retrovirus. 과거 감염된 레트로바이러스가 생식세포에 남은 잔재. 사람 DNA의 9%에 가까움." },
    "multi-allelic": { key: "multi-allelic", definition: "allele이 두 가지가 아니라 여럿인 변이. bi-allelic을 전제한 검정 틀에 그대로 들어가지 않음." },
    "centromere": { key: "centromere", definition: "방추사가 붙는 염색체의 잘록한 부위. 반복서열이 길게 이어져 있어 가장 늦게 읽혔음." },
    "telomere": { key: "telomere", definition: "염색체 끝을 덮어 보호하는 반복서열 구조." },
    "satellite": { key: "satellite", definition: "같은 단위가 아주 길게 이어진 반복서열. centromere 주변에 많음." },
    "acrocentric": { key: "acrocentric", definition: "centromere가 한쪽 끝에 치우쳐 짧은 팔이 아주 작은 염색체." },
    "transcript": { key: "transcript", definition: "한 유전자에서 만들어지는 RNA 산물. 유전자 하나가 여러 전사체를 가질 수 있음." },
    "gene annotation": { key: "gene-annotation", definition: "서열 위에 유전자와 전사체의 경계를 표시해 놓은 것. 방식이 달라지면 개수도 달라짐." },
    "de novo variant": { key: "de-novo", definition: "부모 두 사람에게는 없고 자손에게서 새로 생긴 변이." },
    "trio": { key: "trio", definition: "부모 두 사람과 자녀를 함께 시퀀싱하는 설계. de novo 변이를 가려내는 데 씀." },
    "mosaicism": { key: "mosaicism", definition: "한 사람 안에 유전체가 다른 세포 집단이 섞여 있는 상태. 수정 뒤에 생긴 변이에서 비롯됨." },
    "clonal haematopoiesis": { key: "chip", definition: "조혈줄기세포의 체세포 변이가 적합도 차이로 확장돼 혈액세포에 클론으로 나타나는 상태." },
    "chip": { key: "chip", definition: "Clonal haematopoiesis of indeterminate potential. 백혈병 driver 유전자의 변이가 일정 비율 이상으로 확장된 상태." },
    "mosaic chromosomal alteration": { key: "mca", definition: "일부 세포 클론에만 있는 대규모 염색체 변화. 결실 · 중복 · copy-neutral LOH." },
    "mca": { key: "mca", definition: "Mosaic chromosomal alteration. 일부 세포 클론에만 있는 대규모 염색체 변화." },
    "loss of y": { key: "loy", definition: "남성의 일부 혈액세포가 Y 염색체를 잃은 상태. 나이와 함께 흔해짐." },
    "loy": { key: "loy", definition: "Mosaic loss of Y. 일부 혈액세포가 Y 염색체를 잃은 상태." },
    "singleton": { key: "singleton", definition: "한 표본에서 딱 한 번 관찰되는 변이. 새로 생긴 변이의 출발점." },
    "constraint": { key: "constraint", definition: "그 유전자에서 기능을 망가뜨리는 변이가 기대보다 얼마나 적게 관찰되는지. 선택압의 지표." },
    "loeuf": { key: "loeuf", definition: "Loss-of-function observed/expected upper bound fraction. 관찰/기대 비의 신뢰구간 90% 상한을 쓴 제약 지표." },
    "pli": { key: "pli", definition: "Probability of being loss-of-function intolerant. 제약을 이분법으로 나눈 지표로, LOEUF가 이를 대체함." },
    "plof": { key: "plof", definition: "Predicted loss-of-function. nonsense · frameshift · 핵심 splice 변이를 묶어 부르는 말." },
    "haploinsufficiency": { key: "haploinsufficiency", definition: "두 copy 가운데 하나만 망가져도 기능이 모자라 표현형이 나타나는 것." },
    "missense": { key: "missense", definition: "아미노산 하나가 다른 것으로 바뀌는 변이. 자리에 따라 효과가 천차만별." },
    "nonsense": { key: "nonsense", definition: "종결 신호가 생겨 단백질 사슬이 중간에서 끊기는 변이." },
    "frameshift": { key: "frameshift", definition: "삽입·결실로 읽는 틀이 밀려 그 뒤 아미노산이 전부 달라지는 변이." },
    "synonymous": { key: "synonymous", definition: "염기는 바뀌지만 아미노산은 그대로인 변이. splicing이나 번역 속도는 건드릴 수 있음." },
    "dominant-negative": { key: "dominant-negative", definition: "망가진 단백질이 정상 단백질의 기능까지 방해하는 경우." },
    "gain-of-function": { key: "gof-variant", definition: "원래 없던 활성이 생기거나 조절을 벗어나 과하게 작동하게 되는 변이." },
    "loss-of-function": { key: "lof-variant", definition: "단백질이 제 기능을 하지 못하게 되는 변이." },
    "proteingym": { key: "proteingym", definition: "여러 단백질의 deep mutational scanning 결과를 모아 예측 모델을 같은 자로 채점하는 표준 묶음." },
    "clinvar": { key: "clinvar", definition: "변이와 임상적 해석을 모아 둔 공개 데이터베이스. 예측과 측정을 채점할 때 정답지로 자주 쓰임." },
    "incomplete penetrance": { key: "incomplete-penetrance", definition: "변이를 지녔는데도 표현형이 나타나지 않는 사람이 있는 것. 침투도가 100%가 아닌 경우." },
    "complete penetrance": { key: "complete-penetrance", definition: "변이를 지닌 사람에게서 표현형이 빠짐없이 나타나는 것. 기준으로 삼는 나이에 따라 달라짐." },
    "variable expressivity": { key: "variable-expressivity", definition: "표현형이 나타나기는 하되 중증도와 모습이 사람마다 크게 달라지는 것. 침투도와는 다른 축." },
    "modifier": { key: "modifier", definition: "그 자체로는 질환을 만들지 않으면서 다른 변이의 침투도나 발현도를 바꾸는 변이." },
    "modifier variant": { key: "modifier", definition: "그 자체로는 질환을 만들지 않으면서 다른 변이의 침투도나 발현도를 바꾸는 변이." },
    "variant hierarchy": { key: "variant-hierarchy", definition: "한 유전자 안에서 결손의 정도에 따라 침투도와 중증도가 단계로 갈리는 것." },
    "gene hierarchy": { key: "gene-hierarchy", definition: "같은 경로에 놓인 유전자들 사이에서 그 기능이 얼마나 필수적인지에 따라 침투도가 갈리는 것." },
    "revertant mosaicism": { key: "revertant-mosaicism", definition: "몸의 일부 세포에서 원인 변이가 되돌려져 기능이 회복된 상태. 보인자가 건강해 보이게 만들 수 있음." },
    "somatic genetic rescue": { key: "somatic-genetic-rescue", definition: "체세포에서 일어난 변화가 원래 변이의 효과를 덜어 주는 것. 되돌림 변이나 해당 allele의 소실 등." },
    "protective allele": { key: "protective-allele", definition: "보유자의 질환 위험을 낮추는 변이. 주로 loss-of-function 형태이고 약 표적의 단서가 됨." },
    "msmd": { key: "msmd", definition: "Mendelian susceptibility to mycobacterial disease. 약독화 mycobacteria에 유독 약해지는 단일유전자 질환군." },
    "vexas": { key: "vexas", definition: "UBA1 체세포 변이로 생기는 성인 발병 염증 질환. 치료에 잘 듣지 않고 경과가 나쁨." },
    "cvid": { key: "cvid", definition: "Common variable immunodeficiency. 항체가 모자라 감염이 잦아지는 가장 흔한 증상성 일차 면역결핍." },
    "alps": { key: "alps", definition: "Autoimmune lymphoproliferative syndrome. FAS 경로 결함으로 림프구가 제때 죽지 않아 생기는 질환." },
    "iei": { key: "iei", definition: "Inborn errors of immunity. 면역계를 건드리는 단일유전자 질환을 묶어 부르는 이름." },
    "telomere biology disorder": { key: "telomere-biology-disorder", definition: "telomere 유지에 필요한 유전자의 변이로 생기는 질환군. 골수부전 · 폐섬유증 등으로 다양하게 나타남." },
    "hypomorphic": { key: "hypomorphic", definition: "기능이 완전히 없어지지는 않고 줄어든 상태. 흔한 위험 allele이 자주 이 성격을 띰." },
    "phenocopy": { key: "phenocopy", definition: "유전 변이 없이 같은 표현형이 나타나는 것. 중화 자가항체나 체세포 변이가 같은 경로를 끄는 경우." },
    "inflammasome": { key: "inflammasome", definition: "위험 신호를 받아 caspase-1을 켜고 IL-1β · IL-18을 만들어 내는 세포질 단백 복합체." },
    "pyroptosis": { key: "pyroptosis", definition: "inflammasome 활성에 뒤따르는 염증성 세포사. 세포 내용물이 밖으로 나와 염증을 키움." },
    "blau syndrome": { key: "blau-syndrome", definition: "NOD2의 NACHT domain 기능 획득 변이로 생기는 조기 발병 육아종 자가염증질환." },
    "macrophage activation syndrome": { key: "mas", definition: "대식세포와 T세포가 과활성되어 생기는 전신 염증 증후군. 자가염증질환의 중증 합병증으로 옴." },
    "aicardi–goutières syndrome": { key: "ags", definition: "핵산 대사·감지 유전자의 결함으로 type I interferon이 과하게 만들어지는 조기 발병 신경질환군." },
    "behçet": { key: "behcet", definition: "구강·생식기 궤양과 포도막염 등을 보이는 다인자 염증질환. 위험 좌위 일부가 단일유전자 질환 유전자와 겹침." },
    "deucravacitinib": { key: "deucravacitinib", definition: "TYK2 억제제. 보호 allele TYK2 P1104A가 알려 준 억제 정도와 적응증을 근거로 개발돼 건선에서 승인됨." },
    "genetic dose–response curve": { key: "genetic-dose-response", definition: "표적 유전자의 기능을 여러 단계로 바꾸는 변이들을 모아 효능과 안전역을 임상시험 전에 추정하려는 틀." },
    "iuis": { key: "iuis", definition: "International Union of Immunological Societies. 선천 면역 오류의 공식 분류 목록을 주기적으로 갱신함." }
  };

  /* (앞 경계)(용어)(뒤 경계) — 영문·숫자에 붙은 부분 일치는 잡지 않는다. 긴 용어가 먼저 맞도록 길이순 */
  var alternation = Object.keys(terms)
    .sort(function (a, b) { return b.length - a.length; })
    .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); })
    .join("|");
  var pattern = new RegExp("(^|[^A-Za-z0-9])(" + alternation + ")(?=$|[^A-Za-z0-9])", "gi");

  window.GENETICS_GLOSSARY = { terms: terms, pattern: pattern };

  if (!document.body || !document.body.classList.contains("vpage")) return;
  var root = document.querySelector("article.article");
  if (!root) return;

  /* 건드리지 않을 자리 — 링크·제목·코드·그림(SVG 안 글자 포함)·별칭 줄 */
  var SKIP_TAG = /^(A|H1|H2|H3|H4|CODE|PRE|BUTTON|SCRIPT|STYLE|THEAD|TH|SVG|TITLE|DESC|TEXT|TSPAN)$/;
  function skipped(node) {
    for (var el = node.parentNode; el && el !== root; el = el.parentNode) {
      if (el.nodeType !== 1) continue;
      if (SKIP_TAG.test(String(el.tagName).toUpperCase())) return true;     /* SVG 요소는 tagName이 소문자 */
      if (el.classList && (el.classList.contains("aliases") || el.classList.contains("glossary-term"))) return true;
    }
    return false;
  }

  var nodes = [], walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  while (walker.nextNode()) {
    var n = walker.currentNode;
    if (n.nodeValue && n.nodeValue.trim() && !skipped(n)) nodes.push(n);
  }

  var seen = {}, marked = 0;
  function wrapNext(node) {
    var re = new RegExp(pattern.source, "gi"), text = node.nodeValue, m;
    while ((m = re.exec(text))) {
      var item = terms[m[2].toLowerCase()];
      if (!item || seen[item.key]) continue;
      seen[item.key] = true;
      marked++;
      var rest = node.splitText(m.index + m[1].length);
      rest.nodeValue = rest.nodeValue.slice(m[2].length);
      var span = document.createElement("span");
      span.className = "glossary-term";
      span.setAttribute("tabindex", "0");
      span.setAttribute("data-definition", item.definition);
      span.textContent = m[2];
      node.parentNode.insertBefore(span, rest);
      return rest;                                   /* 남은 뒤쪽을 이어서 검사 */
    }
    return null;
  }
  nodes.forEach(function (node) {
    var cur = node, guard = 0;
    while (cur && guard++ < 12) cur = wrapNext(cur);
  });

  if (marked) document.documentElement.setAttribute("data-glossary", String(marked));
})();
