/* GWAS 용어 사전 — gwas/index.html(SPA)과 gwas 시각 페이지(<NN-섹션>/*.html)가 같이 쓰는 SSOT.
   SPA       : index.html의 createAnnotator가 window.GWAS_GLOSSARY.terms · .pattern을 읽는다 → index.html 인라인 스크립트보다 먼저 로드.
   시각 페이지 : body.vpage면 article.article 본문에서 용어마다 첫 등장 1회에 점선 + hover 정의를 붙인다.
   용어 추가는 terms에만 한다 — pattern은 terms 키에서 긴 것부터 자동으로 만든다.
   스타일(.glossary-term)은 SPA는 index.html, 시각 페이지는 gwas.css 쪽. 규칙: site/_schema/visual-page.md §9 */
(function () {
  "use strict";
  var terms = {
    "genetic variant": { key: "variant", definition: "Reference sequence와 다른 DNA position 또는 sequence." },
    "variant": { key: "variant", definition: "Reference sequence와 다른 DNA position 또는 sequence." },
    "snp": { key: "snp", definition: "Single nucleotide position에서 나타나는 genetic variant." },
    "allele": { key: "allele", definition: "하나의 locus에서 가능한 서로 다른 sequence form." },
    "alleles": { key: "allele", definition: "하나의 locus에서 가능한 서로 다른 sequence form." },
    "genotype": { key: "genotype", definition: "Individual이 보유한 allele combination 또는 allele count." },
    "phenotype": { key: "phenotype", definition: "GWAS에서 분석하는 관찰 가능한 trait 또는 disease status." },
    "locus": { key: "locus", definition: "Genome상의 특정 position 또는 genomic region." },
    "loci": { key: "locus", definition: "Genome상의 특정 position 또는 genomic region." },
    "ld": { key: "ld", definition: "서로 다른 variant가 population에서 non-random하게 함께 나타나는 pattern." },
    "ancestry": { key: "ancestry", definition: "Shared genetic background를 반영하는 population structure." },
    "association": { key: "association", definition: "Variant와 phenotype 사이의 statistical relationship. Causality와는 구분함." },
    "effect size": { key: "effect-size", definition: "Association의 direction과 magnitude. 주로 beta 또는 OR로 표시함." },
    "p-value": { key: "p-value", definition: "Null model에서 현재보다 극단적인 result가 나올 probability." },
    "summary statistics": { key: "summary-statistics", definition: "Variant별 effect size, SE, p-value 등을 담은 result table." },
    "summary stats": { key: "summary-statistics", definition: "Variant별 effect size, SE, p-value 등을 담은 result table." },
    "genome build": { key: "genome-build", definition: "Genomic position의 기준이 되는 reference genome version." },
    "reference panel": { key: "reference-panel", definition: "Imputation 또는 LD 계산에 사용하는 reference genotype dataset." },
    "causal variant": { key: "causal-variant", definition: "Phenotype 변화에 직접 관여한다고 추정되는 genetic variant." },
    "credible set": { key: "fine-mapping", definition: "Causal variant를 정해진 확률(보통 95%)로 담는 최소 variant 집합." },
    "posterior inclusion probability": { key: "fine-mapping", definition: "Variant의 효과가 0이 아닐 사후확률. Fine-mapping이 variant마다 내는 값." },
    "pip": { key: "fine-mapping", definition: "Posterior inclusion probability. Variant의 효과가 0이 아닐 사후확률." },
    "bayes factor": { key: "fine-mapping", definition: "두 가설(예: 이 variant가 causal 대 효과 없음) 아래에서 데이터가 나올 가능도의 비." },
    "manhattan plot": { key: "manhattan", definition: "SNP별 −log10 p-value를 염색체 위치 순서로 찍은 genome 전체 요약 그림." },
    "qq plot": { key: "qq-plot", definition: "관측 p-value를 크기 순으로 null 기대값과 비교하는 진단 그림." },
    "genomic control": { key: "genomic-control", definition: "χ² 중앙값 ÷ 0.456으로 구한 inflation factor λGC로 모든 검정 통계량을 나누는 보정." },
    "ld score": { key: "ld-score", definition: "한 SNP와 주변 SNP 사이 r²의 합. 그 SNP가 주변 변이를 얼마나 tagging하는지 나타냄." },
    "population stratification": { key: "stratification", definition: "표본 안 하위 집단 사이 allele frequency 차이가 phenotype 차이와 겹쳐 생기는 가짜 연관." },
    "effect allele": { key: "effect-allele", definition: "Summary statistics에서 effect size의 부호가 기준으로 삼는 allele." },
    "palindromic": { key: "palindromic", definition: "A/T 또는 G/C처럼 두 strand에서 allele 글자가 같은 SNP. Allele만으로는 strand를 판단할 수 없음." },
    "genetic correlation": { key: "genetic-correlation", definition: "두 형질의 genetic value 사이 상관. Genetic covariance를 두 형질의 genetic SD로 나눈 값으로 −1에서 1 사이." },
    "snp heritability": { key: "snp-heritability", definition: "측정한 SNP의 additive 효과가 설명하는 표현형 분산의 비율." },
    "heritability": { key: "heritability", definition: "형질 분산 가운데 유전 요인이 설명하는 비율." },
    "coheritability": { key: "coheritability", definition: "두 형질이 공유하는 유전 분산의 크기. 형질을 표준화했을 때의 genetic covariance." },
    "pleiotropy": { key: "pleiotropy", definition: "변이 하나가 여러 형질에 영향을 주는 것." },
    "liability": { key: "liability", definition: "질병으로 이어지는 연속적인 소인. threshold를 넘으면 발병한다고 보는 liability threshold 모형의 척도." },
    "assortative mating": { key: "assortative-mating", definition: "비슷한 형질을 가진 사람끼리 짝을 짓는 것. 유전 분산과 genetic correlation 추정치를 키움." },
    "collider bias": { key: "collider-bias", definition: "두 변수가 함께 영향을 주는 제3의 변수(예: 연구 참여)로 표본을 고를 때 생기는 가짜 상관." },
    "polygenic risk score": { key: "prs", definition: "개인의 genotype에 GWAS에서 추정한 효과를 곱해 모두 더한 점수. 유전 소인을 값 하나로 요약함." },
    "polygenic score": { key: "prs", definition: "개인의 genotype에 GWAS에서 추정한 효과를 곱해 모두 더한 점수. 유전 소인을 값 하나로 요약함." },
    "prs": { key: "prs", definition: "개인의 genotype에 GWAS에서 추정한 효과를 곱해 모두 더한 점수. 유전 소인을 값 하나로 요약함." },
    "pgs": { key: "prs", definition: "개인의 genotype에 GWAS에서 추정한 효과를 곱해 모두 더한 점수. 유전 소인을 값 하나로 요약함." },
    "dosage": { key: "dosage", definition: "개인이 가진 효과 allele 개수. imputed genotype에서는 0과 2 사이 실수." },
    "clumping": { key: "clumping", definition: "p가 가장 작은 variant를 고르고 그와 LD에 있는 이웃을 지우는 절차. C+T의 첫 단계." },
    "shrinkage": { key: "shrinkage", definition: "추정한 효과를 0쪽으로 줄이는 것. 잡음이 섞인 작은 효과를 눌러 예측 정확도를 올림." },
    "scoring file": { key: "scoring-file", definition: "점수를 다시 계산하는 데 필요한 최소 정보를 담은 파일. genome build · 위치 · 효과 allele · 가중치." },
    "auc": { key: "auc", definition: "환자와 대조군을 가려내는 능력. 0.5가 무작위, 1이 완전 분류." },
    "calibration": { key: "calibration", definition: "예측한 확률이 실제 발생 빈도와 맞는 정도." },
    "transferability": { key: "transferability", definition: "한 집단에서 만든 점수가 다른 집단에서도 예측력을 유지하는 정도." },
    "mendelian randomization": { key: "mr", definition: "노출과 연관된 genetic variant를 instrumental variable로 써서 노출이 결과에 미치는 인과 효과를 추정하는 설계." },
    "instrumental variable": { key: "instrument", definition: "노출과는 연관되고 교란요인·결과와는 노출을 통해서만 이어지는 변수. MR에서는 genetic variant가 그 역할을 맡음." },
    "instrument": { key: "instrument", definition: "MR에서 노출의 대리로 쓰는 genetic variant. 세 가정(relevance·independence·exclusion restriction)을 만족해야 함." },
    "exclusion restriction": { key: "exclusion-restriction", definition: "노출과 교란요인을 고정하면 instrument가 결과와 조건부 독립이라는 가정. 모형에서는 instrument의 직접효과가 0." },
    "wald ratio": { key: "wald-ratio", definition: "변이 하나로 구한 인과 추정치. 변이–결과 효과를 변이–노출 효과로 나눈 값." },
    "ratio estimate": { key: "wald-ratio", definition: "변이 하나로 구한 인과 추정치. 변이–결과 효과를 변이–노출 효과로 나눈 값." },
    "ivw": { key: "ivw", definition: "변이별 Wald ratio를 결과 쪽 분산의 역수로 가중해 합친 추정량. 원점을 지나는 가중 회귀의 기울기와 같음." },
    "inverse-variance weighted": { key: "ivw", definition: "변이별 Wald ratio를 결과 쪽 분산의 역수로 가중해 합친 추정량. 원점을 지나는 가중 회귀의 기울기와 같음." },
    "mr-egger": { key: "mr-egger", definition: "IVW와 같은 가중 회귀에서 절편 제약을 푼 추정량. 절편이 평균 pleiotropic 효과, 기울기가 보정된 인과효과." },
    "weighted median": { key: "weighted-median", definition: "변이별 Wald ratio를 IVW와 같은 가중치로 정렬해 취한 중앙값. 가중치의 50% 이상이 valid instrument면 일관 추정." },
    "inside": { key: "inside", definition: "InSIDE(Instrument Strength Independent of Direct Effect). 변이의 직접효과 분포가 노출 효과와 독립이라는 가정. MR-Egger가 일관되기 위한 조건." },
    "horizontal pleiotropy": { key: "horizontal-pleiotropy", definition: "변이가 노출을 거치지 않는 경로로 결과에 영향을 주는 것. MR의 exclusion restriction 위반." },
    "vertical pleiotropy": { key: "vertical-pleiotropy", definition: "변이가 노출을 거쳐 결과에 영향을 주는 것. MR이 설계의 재료로 쓰는 쪽." },
    "mr-presso": { key: "mr-presso", definition: "IVW 회귀 잔차로 pleiotropic outlier 변이를 찾아 빼고 다시 추정하는 방법. global·outlier·distortion 세 검정으로 이루어짐." },
    "weak instrument": { key: "weak-instrument", definition: "노출과의 연관이 약한 instrument. F가 작을수록 인과 추정치가 교란된 관찰 연관 쪽으로 끌림." },
    "f statistic": { key: "f-statistic", definition: "instrument 강도의 지표. 변이–노출 회귀의 F이며 10을 넘는 것을 기준으로 삼음." },
    "winner's curse": { key: "winners-curse", definition: "같은 자료에서 가장 강한 변이를 고르면 그 변이의 효과가 과대 추정되는 선택 편향." },
    "harmonisation": { key: "harmonisation", definition: "두 GWAS의 effect allele을 같은 쪽으로 맞추는 절차. strand와 palindromic SNP 처리를 포함함." },
    "funnel plot": { key: "funnel-plot", definition: "instrument 강도를 세로축에, 변이별 추정치를 가로축에 그린 진단 그림. 비대칭이면 directional pleiotropy를 의심함." },
    "cochran's q": { key: "cochran-q", definition: "변이별 추정치가 서로 양립하는지 보는 이질성 검정통계량." },
    "smr": { key: "smr", definition: "GWAS와 eQTL summary statistics를 MR 틀에서 결합해 형질과 연관된 유전자를 우선순위화하는 방법." },
    "population structure": { key: "population-structure", definition: "allele frequency가 표본 안의 하위집단 사이에서 체계적으로 다른 상태." },
    "minor allele frequency": { key: "maf", definition: "biallelic 변이에서 덜 흔한 allele의 비율. 0에서 0.5 사이이고 어느 allele이 minor인지는 집단마다 달라질 수 있음." },
    "maf": { key: "maf", definition: "biallelic 변이에서 덜 흔한 allele의 비율. 0에서 0.5 사이이고 어느 allele이 minor인지는 집단마다 달라질 수 있음." },
    "allele frequency": { key: "allele-frequency", definition: "집단에서 특정 allele이 차지하는 비율." },
    "effect allele frequency": { key: "effect-allele-frequency", definition: "효과를 센 쪽 allele의 빈도. MAF와 달리 어느 allele을 세었는지가 정해져 있음." },
    "genetic drift": { key: "drift", definition: "유한한 집단에서 세대마다 allele 빈도가 우연히 흔들리는 과정. 집단이 작을수록 빠름." },
    "drift": { key: "drift", definition: "유한한 집단에서 세대마다 allele 빈도가 우연히 흔들리는 과정. 집단이 작을수록 빠름." },
    "bottleneck": { key: "bottleneck", definition: "집단 크기가 한동안 크게 줄었다가 회복하는 사건. 변이량을 줄이고 빈도를 크게 움직임." },
    "founder effect": { key: "founder-effect", definition: "소수의 창시자에서 집단이 퍼질 때 창시자가 가진 빈도가 그대로 굳는 현상." },
    "wahlund": { key: "wahlund", definition: "빈도가 다른 하위집단을 섞으면 한 locus에서 heterozygote가 기대보다 적게 나오는 효과. 두 locus로 보면 섞음이 LD를 만드는 것과 같은 구조." },
    "principal component analysis": { key: "pca", definition: "표준화한 genotype 행렬에서 개인 사이 변이가 가장 큰 축을 차례로 뽑는 분해. GWAS에서는 조상 축을 요약하는 데 씀." },
    "pca": { key: "pca", definition: "표준화한 genotype 행렬에서 개인 사이 변이가 가장 큰 축을 차례로 뽑는 분해. GWAS에서는 조상 축을 요약하는 데 씀." },
    "principal component": { key: "pc", definition: "PCA가 뽑은 축 하나. 좌표는 조상 비율이 아니고 부호도 임의임." },
    "eigenvector": { key: "eigenvector", definition: "PCA 축 자체. 개인마다 하나의 좌표를 줌." },
    "eigenvalue": { key: "eigenvalue", definition: "각 축이 설명하는 분산의 크기. 구조가 없는 표본의 값보다 큰 축만 실제 조상 축으로 봄." },
    "eigenstrat": { key: "eigenstrat", definition: "genotype PCA로 조상 축을 추정하고 genotype·phenotype을 그 축에 회귀한 잔차로 연관을 검정하는 보정 방법." },
    "scree plot": { key: "scree-plot", definition: "주성분 번호에 따라 고유값을 늘어놓은 그림. 몇 개의 축이 의미 있는지 보는 데 씀." },
    "mds": { key: "mds", definition: "개인 사이 거리를 보존하는 저차원 좌표를 찾는 방법. IBS 거리를 쓰면 PCA와 수치적으로 같음." },
    "inflation factor": { key: "inflation-factor", definition: "관측 검정통계량 중앙값을 귀무 기대값으로 나눈 값(λGC). 층화·친족·polygenicity가 모두 올림." },
    "cryptic relatedness": { key: "cryptic-relatedness", definition: "표본 안에 모르는 사이에 섞여 있는 친족 관계. 보정하지 않으면 검정통계량이 부풂." },
    "relatedness": { key: "relatedness", definition: "두 사람이 공통 조상에서 물려받아 공유하는 genome의 정도." },
    "kinship": { key: "kinship", definition: "두 사람에서 무작위로 고른 allele 하나씩이 같은 조상에서 온 확률. 부모–자식과 형제는 0.25, 3촌은 0.0625." },
    "king": { key: "king", definition: "allele frequency를 쓰지 않고 heterozygote 수와 반대쪽 homozygote 쌍 수로 kinship을 추정하는 방법. 집단 구조에 둔감함." },
    "ibs": { key: "ibs", definition: "두 사람이 공유하는 allele 개수로 재는 유사도. 공통 조상 여부를 따지지 않음." },
    "grm": { key: "grm", definition: "allele frequency로 표준화한 genotype의 내적으로 만든 개인 사이 유사도 행렬. mixed model의 random effect와 SNP heritability에 씀." },
    "genetic relationship matrix": { key: "grm", definition: "allele frequency로 표준화한 genotype의 내적으로 만든 개인 사이 유사도 행렬. mixed model의 random effect와 SNP heritability에 씀." },
    "mixed model": { key: "mixed-model", definition: "GRM을 random effect로 넣어 친족과 미세 구조를 흡수하는 연관검정 모형." },
    "admixture": { key: "admixture", definition: "서로 다른 조상 집단이 최근에 섞여 한 집단을 이룬 상태." },
    "admixed": { key: "admixture", definition: "서로 다른 조상 집단이 최근에 섞여 한 집단을 이룬 상태." },
    "global ancestry": { key: "global-ancestry", definition: "개인의 genome 전체에서 각 조상 집단이 차지하는 비율." },
    "local ancestry": { key: "local-ancestry", definition: "염색체의 특정 구간이 어느 조상 집단에서 왔는지. 구간마다 다름." },
    "tractor": { key: "tractor", definition: "local ancestry로 dosage를 조상 배경별로 나눠 배경마다 효과를 따로 추정하는 admixed 표본용 연관 분석." },
    "admixture mapping": { key: "admixture-mapping", definition: "환자에서 특정 조상 배경이 기대보다 많이 남은 구간을 찾아 위험 locus를 좁히는 방법." },
    "ld pruning": { key: "ld-pruning", definition: "서로 상관이 큰 변이를 솎아 거의 독립인 변이만 남기는 전처리. PCA와 친족 추정 앞에 둠." },
    "covariate": { key: "covariate", definition: "표현형과 genotype 양쪽에 걸린 요인을 흡수하려고 회귀에 함께 넣는 변수." },
    "heterozygote": { key: "heterozygote", definition: "한 locus에서 서로 다른 allele 두 개를 가진 genotype." },
    "homozygote": { key: "homozygote", definition: "한 locus에서 같은 allele 두 개를 가진 genotype." },
    "genotype imputation": { key: "imputation", definition: "참조 패널의 haplotype을 이용해 측정하지 않은 변이의 genotype을 통계적으로 추론하는 절차." },
    "imputation": { key: "imputation", definition: "참조 패널의 haplotype을 이용해 측정하지 않은 변이의 genotype을 통계적으로 추론하는 절차." },
    "haplotype": { key: "haplotype", definition: "한 염색체 위에 함께 실려 전달되는 allele의 조합." },
    "phasing": { key: "phasing", definition: "genotype에서 두 염색체 각각의 allele 배열을 복원하는 절차. imputation과 local ancestry 추론의 전제." },
    "pre-phasing": { key: "pre-phasing", definition: "채우기 전에 코호트 전체의 haplotype을 먼저 추정해 두는 단계. 비용이 참조 haplotype 수에 선형으로 떨어짐." },
    "switch error": { key: "switch-error", definition: "phasing이 두 haplotype을 뒤바꾼 지점의 비율. phasing 정확도의 표준 지표." },
    "genotyping array": { key: "array", definition: "미리 고른 probe로 정해진 변이만 읽는 측정 장치. 보통 30만에서 400만 개 수준." },
    "snp array": { key: "array", definition: "미리 고른 probe로 정해진 변이만 읽는 측정 장치. 보통 30만에서 400만 개 수준." },
    "tag snp": { key: "tag-snp", definition: "LD를 통해 주변의 측정하지 않은 변이를 대신 대표하도록 고른 변이." },
    "wgs": { key: "wgs", definition: "전장 유전체 시퀀싱. 정해진 변이만 읽는 array와 달리 서열 자체를 읽음." },
    "wes": { key: "wes", definition: "단백질 코딩 exon만 읽는 시퀀싱. 비코딩 영역이 빠짐." },
    "low-pass wgs": { key: "low-pass", definition: "아주 얕은 커버리지로 전장을 읽고 genotype likelihood를 채우기에 바로 넣는 방식." },
    "genotype likelihood": { key: "genotype-likelihood", definition: "관찰된 read가 주어진 genotype 아래 나올 확률. read가 없으면 세 genotype에 균등함." },
    "info score": { key: "info", definition: "채운 값의 사후 분산으로 계산하는 품질 지표. 정답을 쓰지 않으며, info α는 표본의 α배만 완벽히 측정한 것과 같은 정보량." },
    "info": { key: "info", definition: "채운 값의 사후 분산으로 계산하는 품질 지표. 정답을 쓰지 않으며, info α는 표본의 α배만 완벽히 측정한 것과 같은 정보량." },
    "imputation quality": { key: "info", definition: "채운 값이 얼마나 확신을 갖는지 재는 지표. INFO 또는 실제 genotype과의 r²." },
    "best-guess": { key: "best-guess", definition: "채운 dosage를 가장 확률이 높은 genotype 하나로 반올림한 값. 불확실성 정보를 버림." },
    "hard call": { key: "best-guess", definition: "채운 dosage를 가장 확률이 높은 genotype 하나로 반올림한 값. 불확실성 정보를 버림." },
    "li–stephens": { key: "li-stephens", definition: "한 haplotype을 참조 haplotype들을 조각조각 베낀 모자이크로 보는 모형. 거의 모든 phasing · imputation 도구의 바탕." },
    "copying model": { key: "li-stephens", definition: "한 haplotype을 참조 haplotype들을 조각조각 베낀 모자이크로 보는 모형. 거의 모든 phasing · imputation 도구의 바탕." },
    "hidden markov model": { key: "hmm", definition: "숨은 상태가 순서를 따라 바뀌는 확률 모형. imputation에서는 어느 참조 haplotype을 베끼는지가 상태." },
    "imputation server": { key: "imputation-server", definition: "참조 패널을 내려받지 않고 자료를 올려 채우기를 맡기는 공개 서비스." },
    "ascertainment bias": { key: "ascertainment-bias", definition: "변이를 고른 기준 때문에 생기는 치우침. array는 설계에 쓰인 집단 쪽으로 기움." },
    "score test": { key: "score-test", definition: "귀무 모형을 한 번만 적합하고 변이마다는 기울기 방향만 보는 검정. 변이마다 모형을 다시 적합하지 않아 대규모 GWAS에서 빠름." },
    "likelihood ratio": { key: "lrt", definition: "귀무 모형과 대립 모형의 우도를 견주는 검정. 표본이 크면 Wald · score 검정과 같은 값으로 수렴." },
    "saddlepoint": { key: "spa", definition: "통계량의 누적생성함수에서 꼬리 확률을 직접 구하는 근사. 정규 근사가 깨지는 극단 case-control 불균형에서 p값을 바로잡음." },
    "firth": { key: "firth", definition: "penalized likelihood로 계수를 추정하는 보정. 희귀 변이와 불균형 표본에서 효과 크기 편향을 줄임." },
    "random effect": { key: "random-effect", definition: "개인마다 두는 확률적 효과. 혼합모형에서 친족과 미세한 집단 구조를 흡수하는 자리." },
    "genomic relationship matrix": { key: "grm", definition: "개인 쌍이 유전적으로 얼마나 닮았는지 담은 행렬. 혼합모형 random effect의 공분산." },
    "odds ratio": { key: "odds-ratio", definition: "노출이 있는 쪽과 없는 쪽의 odds 비. 로지스틱 회귀 계수의 지수값." },
    "type I error": { key: "type1", definition: "귀무가설이 참인데 기각하는 오류. 거짓양성." },
    "FWER": { key: "fwer", definition: "family-wise error rate. 한 연구에서 거짓양성이 하나라도 나올 확률." },
    "Bonferroni": { key: "bonferroni", definition: "유의수준을 검정 수로 나눠 FWER를 묶는 보정. 검정이 LD로 상관돼 있으면 필요 이상 엄해짐." },
    "genome-wide significance": { key: "significance", definition: "GWAS 한 번 전체의 거짓양성률을 묶으려고 쓰는 임계값. 관례값은 5×10⁻⁸." },
    "suggestive": { key: "suggestive", definition: "genome-wide 기준에는 못 미치지만 탐색 목적으로 따로 표시하는 연관. 흔히 p < 10⁻⁶." },
    "dominant": { key: "dominant", definition: "allele 하나만 있어도 효과가 다 나오는 유전 모형. genotype을 0 · 1 · 1로 코딩." },
    "recessive": { key: "recessive", definition: "allele 둘 다 있어야 효과가 나오는 유전 모형. genotype을 0 · 0 · 1로 코딩." },
    "minor allele count": { key: "mac", definition: "표본에서 minor allele이 나타난 총 개수. MAF와 표본 수를 함께 본 값." },
    "permutation": { key: "permutation", definition: "라벨을 무작위로 섞어 귀무분포를 직접 만드는 방법. 임계값을 자료에서 추정할 때 씀." },
    "polygenic": { key: "polygenic", definition: "작은 효과의 변이 여럿이 함께 형질을 만드는 구조." }
  };

  /* (앞 경계)(용어)(뒤 경계) — 영문·숫자에 붙은 부분 일치는 잡지 않는다. 긴 용어가 먼저 맞도록 길이순 */
  var alternation = Object.keys(terms)
    .sort(function (a, b) { return b.length - a.length; })
    .map(function (t) { return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); })
    .join("|");
  var pattern = new RegExp("(^|[^A-Za-z0-9])(" + alternation + ")(?=$|[^A-Za-z0-9])", "gi");

  window.GWAS_GLOSSARY = { terms: terms, pattern: pattern };

  /* ── 시각 페이지 전용: 본문 텍스트 노드에 직접 붙인다 ── */
  if (!document.body || !document.body.classList.contains("vpage")) return;
  var root = document.querySelector("article.article");
  if (!root) return;

  /* 건드리지 않을 자리 — 링크·제목·코드·그림(SVG 안 글자 포함)·별칭 줄 */
  var SKIP_TAG = /^(A|H1|H2|H3|CODE|PRE|BUTTON|SCRIPT|STYLE|THEAD|TH|SVG|TITLE|DESC|TEXT|TSPAN)$/;
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
