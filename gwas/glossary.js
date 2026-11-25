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
    "smr": { key: "smr", definition: "GWAS와 eQTL summary statistics를 MR 틀에서 결합해 형질과 연관된 유전자를 우선순위화하는 방법." }
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
