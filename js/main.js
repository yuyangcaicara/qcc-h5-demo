const questions = [
  {
    id: "goal",
    title: "你当前最想优先解决的问题是什么？",
    options: [
      { id: "a", label: "想尽快启动获客，先把量跑起来", scores: { direct: 2 }, primary: "direct" },
      { id: "b", label: "想先拿到更稳定的销售线索，少走弯路", scores: { easy: 2 }, primary: "easy" },
      { id: "c", label: "想建立更长期的获客方式，不只靠短期投放", scores: { long: 2 }, primary: "long" }
    ]
  },
  {
    id: "team",
    title: "如果现在要启动增长动作，你这边更接近哪种状态？",
    options: [
      { id: "a", label: "可以配合搭建和测试，先跑起来再优化", scores: { direct: 2 }, primary: "direct" },
      { id: "b", label: "人手有限，希望有更省心的方式推进", scores: { easy: 2 }, primary: "easy" },
      { id: "c", label: "愿意投入一些时间，把内容和转化一起做起来", scores: { long: 2 }, primary: "long" }
    ]
  },
  {
    id: "approach",
    title: "你更能接受哪种推进方式？",
    options: [
      { id: "a", label: "自己掌握节奏，边跑边看效果", scores: { direct: 2 }, primary: "direct" },
      { id: "b", label: "交给专业团队执行，自己重点看结果", scores: { easy: 2 }, primary: "easy" },
      { id: "c", label: "先把内容做好，再持续放大流量", scores: { long: 2 }, primary: "long" }
    ]
  },
  {
    id: "foundation",
    title: "你目前在内容或经营阵地上，更接近哪种状态？",
    options: [
      { id: "a", label: "还没系统做，但可以先从获客启动", scores: { direct: 2 }, primary: "direct" },
      { id: "b", label: "暂时不想花精力做内容，只想先拿线索", scores: { easy: 2 }, primary: "easy" },
      { id: "c", label: "已经有一些基础，或愿意开始搭建", scores: { long: 2 }, primary: "long" }
    ]
  },
  {
    id: "experience",
    title: "你过去做增长时，更接近哪种情况？",
    options: [
      { id: "a", label: "基本还没系统尝试过", scores: { direct: 1 }, primary: "direct" },
      { id: "b", label: "做过一些渠道尝试，但效果不太稳定", scores: { direct: 1, easy: 1 }, primary: "easy" },
      { id: "c", label: "已经持续在做，希望进一步放大效果", scores: { long: 2 }, primary: "long" },
      { id: "d", label: "更希望由专业团队协助推进，自己少操心", scores: { easy: 2 }, primary: "easy" }
    ]
  }
];

const infoOptions = {
  city: [
    { id: "tier1", label: "一线城市" },
    { id: "newtier1", label: "新一线城市" },
    { id: "tier2plus", label: "二线及以下城市" },
    { id: "multi", label: "多城市布局" }
  ],
  store: [
    { id: "single", label: "1 家" },
    { id: "small", label: "2–5 家" },
    { id: "medium", label: "6–20 家" },
    { id: "large", label: "20 家以上" }
  ]
};

const resultProfiles = {
  direct: {
    title: "你的增长类型：直接起量型",
    summary: "你当前更适合先从“快速启动、边跑边调”的方式切入。",
    traits: [
      "目标相对明确，更看重启动效率",
      "愿意先测通路径，再逐步加码",
      "更适合先建立基础动作，再看数据优化"
    ],
    actions: [
      "先完成基础搭建，快速开启第一轮测试",
      "用更短路径验证不同方向的转化效率",
      "跑出有效反馈后，再逐步优化投入结构"
    ],
    reportTitle: "《专属获客路径报告》"
  },
  easy: {
    title: "你的增长类型：省心获客型",
    summary: "你当前更适合用更省心的方式先获得线索，再决定后续投入节奏。",
    traits: [
      "人手或时间有限，更关注结果效率",
      "希望减少前期复杂操作和试错成本",
      "适合先借助成熟推进方式获取有效线索"
    ],
    actions: [
      "优先选择更省心的启动路径",
      "先看线索质量与转化效率，再考虑放大",
      "把精力集中在跟进结果和后续承接上"
    ],
    reportTitle: "《线索增长建议》"
  },
  long: {
    title: "你的增长类型：长线经营型",
    summary: "你更适合把内容经营和流量放大结合起来，做更可持续的增长。",
    traits: [
      "不仅关注当下结果，也愿意为长期增长打基础",
      "能够接受内容与转化配合推进",
      "更适合打造持续沉淀、可迭代优化的增长方式"
    ],
    actions: [
      "先明确内容主题与转化目标",
      "搭出基础内容框架，再配合流量放大",
      "持续积累可复用的经营动作，形成稳定闭环"
    ],
    reportTitle: "《内容增长路径报告》"
  }
};

const loadingMessages = [
  "正在匹配企业阶段与经营目标",
  "正在分析更适合你的推进方式",
  "即将输出专属建议"
];

const state = {
  currentQuestionIndex: 0,
  scores: { direct: 0, easy: 0, long: 0 },
  answers: {},
  info: { city: "", store: "" },
  loadingTimer: null,
  loadingTextTimer: null
};

const screens = {
  intro: document.getElementById("screen-intro"),
  quiz: document.getElementById("screen-quiz"),
  info: document.getElementById("screen-info"),
  loading: document.getElementById("screen-loading"),
  result: document.getElementById("screen-result")
};

const questionTitle = document.getElementById("question-title");
const questionOptions = document.getElementById("question-options");
const progressLabel = document.getElementById("progress-label");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");
const cityOptionsEl = document.getElementById("city-options");
const storeOptionsEl = document.getElementById("store-options");
const generateResultBtn = document.getElementById("generate-result");
const infoError = document.getElementById("info-error");
const loadingText = document.getElementById("loading-text");
const resultTypeTitle = document.getElementById("result-type-title");
const resultScore = document.getElementById("result-score");
const resultSummaryText = document.getElementById("result-summary-text");
const traitList = document.getElementById("trait-list");
const actionList = document.getElementById("action-list");
const resultTags = document.getElementById("result-tags");
const resultPersonalized = document.getElementById("result-personalized");

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
}

function renderQuestion() {
  const currentQuestion = questions[state.currentQuestionIndex];
  const currentStep = state.currentQuestionIndex + 1;
  const percent = Math.round((currentStep / questions.length) * 100);

  progressLabel.textContent = `增长诊断 ${currentStep} / ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
  questionTitle.textContent = currentQuestion.title;

  questionOptions.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.innerHTML = `
      <span class="option-tag">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${option.label}</span>
    `;
    button.addEventListener("click", () => selectAnswer(option));
    questionOptions.appendChild(button);
  });
}

function selectAnswer(option) {
  const currentQuestion = questions[state.currentQuestionIndex];
  state.answers[currentQuestion.id] = option.primary;

  Object.entries(option.scores).forEach(([type, value]) => {
    state.scores[type] += value;
  });

  if (state.currentQuestionIndex < questions.length - 1) {
    state.currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  showScreen("info");
}

function renderInfoOptions() {
  createInfoButtons(cityOptionsEl, infoOptions.city, "city");
  createInfoButtons(storeOptionsEl, infoOptions.store, "store");
}

function createInfoButtons(container, list, field) {
  container.innerHTML = "";
  list.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.dataset.value = item.id;
    button.innerHTML = `
      <span class="option-tag">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${item.label}</span>
    `;
    button.addEventListener("click", () => {
      state.info[field] = item.id;
      [...container.querySelectorAll(".option-btn")].forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      infoError.textContent = "";
    });
    container.appendChild(button);
  });
}

function resolveResultType() {
  const entries = Object.entries(state.scores);
  const maxScore = Math.max(...entries.map(([, score]) => score));
  const candidates = entries.filter(([, score]) => score === maxScore).map(([type]) => type);

  if (candidates.length === 1) {
    return candidates[0];
  }

  const tieBreakOrder = [state.answers.team, state.answers.foundation, state.answers.goal, state.answers.experience];
  for (const answerType of tieBreakOrder) {
    if (answerType && candidates.includes(answerType)) {
      return answerType;
    }
  }

  return candidates[0];
}

function computeMatchScore(type) {
  const base = { direct: 78, easy: 80, long: 82 }[type] || 78;
  const scoreBoost = state.scores[type] * 4;
  const cityBoost = state.info.city === "multi" ? 3 : state.info.city === "tier1" || state.info.city === "newtier1" ? 2 : 1;
  const storeBoost = state.info.store === "large" ? 4 : state.info.store === "medium" ? 3 : state.info.store === "small" ? 2 : 1;
  return Math.min(base + scoreBoost + cityBoost + storeBoost, 96);
}

function getCityLabel(value) {
  return infoOptions.city.find((item) => item.id === value)?.label || "城市层级待补充";
}

function getStoreLabel(value) {
  return infoOptions.store.find((item) => item.id === value)?.label || "门店规模待补充";
}

function buildPersonalizedText(type) {
  const cityTextMap = {
    tier1: "当前经营环境更适合尽早关注转化效率与测试节奏，避免投入过散。",
    newtier1: "你的经营环境兼顾增长潜力与效率要求，建议尽快找到更稳定的推进模型。",
    tier2plus: "当前更适合兼顾获客效率与投入节奏，先找到可复制的有效动作。",
    multi: "你已经具备多城市布局特征，更适合考虑便于复制与标准化推进的路径。"
  };

  const storeTextMap = {
    single: "单店阶段更重要的是先跑出可验证的第一条路径。",
    small: "小规模门店适合先跑通方法，再逐步把有效动作复制到更多门店。",
    medium: "中等门店规模已经值得考虑更稳的节奏与可复制性。",
    large: "多门店阶段建议优先关注标准化推进和后续承接效率。"
  };

  const typeLead = {
    direct: "结合你的回答，你更适合从较短链路开始，先验证起量动作。",
    easy: "结合你的回答，你更适合优先拿到线索结果，把复杂动作交给更成熟的推进方式。",
    long: "结合你的回答，你更适合把内容经营和流量放大联动起来，做持续积累。"
  };

  return `${typeLead[type]} ${cityTextMap[state.info.city]} ${storeTextMap[state.info.store]}`;
}

function renderList(container, items) {
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderResult() {
  const resultType = resolveResultType();
  const profile = resultProfiles[resultType];
  const score = computeMatchScore(resultType);

  resultTypeTitle.textContent = profile.title;
  resultScore.textContent = score;
  resultSummaryText.textContent = profile.summary;
  renderList(traitList, profile.traits);
  renderList(actionList, profile.actions);
  resultPersonalized.textContent = buildPersonalizedText(resultType);

  resultTags.innerHTML = `
    <span>${getCityLabel(state.info.city)}</span>
    <span>${getStoreLabel(state.info.store)}</span>
    <span>${profile.reportTitle}</span>
  `;
}

function startLoadingAndShowResult() {
  let loadingIndex = 0;
  loadingText.textContent = loadingMessages[loadingIndex];
  showScreen("loading");

  clearInterval(state.loadingTextTimer);
  clearTimeout(state.loadingTimer);

  state.loadingTextTimer = setInterval(() => {
    loadingIndex = (loadingIndex + 1) % loadingMessages.length;
    loadingText.textContent = loadingMessages[loadingIndex];
  }, 700);

  state.loadingTimer = setTimeout(() => {
    clearInterval(state.loadingTextTimer);
    renderResult();
    showScreen("result");
  }, 2200);
}

function validateInfo() {
  if (!state.info.city || !state.info.store) {
    infoError.textContent = "请先补充完整两项信息，再生成结果。";
    return false;
  }

  infoError.textContent = "";
  return true;
}

function resetState() {
  state.currentQuestionIndex = 0;
  state.scores = { direct: 0, easy: 0, long: 0 };
  state.answers = {};
  state.info = { city: "", store: "" };
  infoError.textContent = "";
  clearInterval(state.loadingTextTimer);
  clearTimeout(state.loadingTimer);
  renderQuestion();
  renderInfoOptions();
}

function initEvents() {
  document.querySelector('[data-action="start"]').addEventListener("click", () => {
    resetState();
    showScreen("quiz");
  });

  document.querySelector('[data-action="restart"]').addEventListener("click", () => {
    resetState();
    showScreen("intro");
  });

  generateResultBtn.addEventListener("click", () => {
    if (!validateInfo()) {
      return;
    }
    startLoadingAndShowResult();
  });
}

function init() {
  renderQuestion();
  renderInfoOptions();
  initEvents();
}

init();
