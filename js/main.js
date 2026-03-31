const questionBank = [
  {
    id: "goal",
    title: "如果现在要开始找客户，您更接近哪种想法？",
    options: [
      {
        id: "a",
        label: "先尽快拿到一些客户线索，让生意跑起来",
        scores: { ad: 2 },
        primary: "ad"
      },
      {
        id: "b",
        label: "借助专业、可靠的团队推进，更省心、省力",
        scores: { agency: 2 },
        primary: "agency"
      },
      {
        id: "c",
        label: "先把吸引客户、承接客户的基础打好，再慢慢放大",
        scores: { content: 2 },
        primary: "content"
      }
    ]
  },
  {
    id: "participation",
    title: "如果开始做这件事，您更希望自己参与到什么程度？",
    options: [
      {
        id: "a",
        label: "主要由自己或团队来做",
        scores: { ad: 2 },
        primary: "ad"
      },
      {
        id: "b",
        label: "有专业团队一起做，关键环节一起定",
        scores: { content: 2 },
        primary: "content"
      },
      {
        id: "c",
        label: "更希望交给专业团队执行，自己配合就行",
        scores: { agency: 2 },
        primary: "agency"
      }
    ]
  },
  {
    id: "contentState",
    title: "对于内容和经营这件事，您现在更接近哪种状态？",
    options: [
      {
        id: "a",
        label: "暂时不想在这上面投入太多精力",
        scores: { ad: 1, agency: 1 },
        primary: "ad"
      },
      {
        id: "b",
        label: "可以尝试，但希望先轻一点",
        scores: { agency: 1, content: 1 },
        primary: "agency"
      },
      {
        id: "c",
        label: "愿意认真做起来，持续经营",
        scores: { content: 2 },
        primary: "content"
      }
    ]
  },
  {
    id: "concern",
    title: "如果现在开始做推广找客户，您更担心哪件事？",
    options: [
      {
        id: "a",
        label: "投了时间和钱，短期看不到效果",
        scores: { ad: 2 },
        primary: "ad"
      },
      {
        id: "b",
        label: "自己没时间盯，做起来太分散精力",
        scores: { agency: 2 },
        primary: "agency"
      },
      {
        id: "c",
        label: "不知道内容、经营和投放该怎么配合起来",
        scores: { content: 2 },
        primary: "content"
      }
    ]
  },
  {
    id: "business",
    title: "您现在的生意形式，更接近哪一种？",
    options: [
      {
        id: "online",
        label: "线上经营为主",
        scores: { ad: 1, content: 1 },
        primary: "ad"
      },
      {
        id: "offline",
        label: "线下门店为主",
        scores: { agency: 2, ad: 1 },
        primary: "agency"
      },
      {
        id: "mixed",
        label: "线上和线下都在做",
        scores: { content: 2, ad: 1 },
        primary: "content"
      }
    ]
  },
  {
    id: "stores",
    title: "您目前有几家门店？",
    when: (answers) => answers.business && answers.business !== "online",
    options: [
      {
        id: "single",
        label: "1 家",
        scores: { agency: 1, ad: 1 },
        primary: "agency"
      },
      {
        id: "small",
        label: "2-5 家",
        scores: { ad: 2, agency: 1 },
        primary: "ad"
      },
      {
        id: "large",
        label: "6 家以上",
        scores: { content: 1, ad: 1 },
        primary: "content"
      }
    ]
  }
];

const resultProfiles = {
  ad: {
    title: "你现阶段更适合：先直接把找客户这件事跑起来",
    summary: "结合你的回答，你现阶段更适合先用更直接的方式测试线索效果，把第一波客户跑起来。",
    traits: [
      "你当前更看重启动速度和结果反馈",
      "相比先搭很重的经营动作，你更适合先验证效果",
      "先把找客户这件事跑顺，再决定要不要继续放大"
    ],
    actions: [
      "先明确目标客户、咨询入口和承接方式",
      "优先测试更直接的投放动作，看看线索和咨询情况",
      "跑出有效反馈后，再优化投入节奏和后续打法"
    ],
    schemeLabel: "纯广告投放方案"
  },
  agency: {
    title: "你现阶段更适合：先借助专业团队，把找客户这件事做起来",
    summary: "结合你的回答，你更适合先把复杂动作交给专业团队推进，自己重点看结果和后续承接。",
    traits: [
      "你更在意省心、省力和推进效率",
      "当前时间或精力更适合放在经营和跟进上",
      "先由专业团队帮你把线索跑起来，会更顺手"
    ],
    actions: [
      "先确定线索目标和可接受的推进方式",
      "优先选择成熟团队代投，减少前期试错成本",
      "把精力放在销售跟进和后续承接上"
    ],
    schemeLabel: "第三方线索代投方案"
  },
  content: {
    title: "你现阶段更适合：先把内容和经营基础做起来，再慢慢放大",
    summary: "结合你的回答，你更适合把内容经营和流量放大配合起来，做更可持续的找客方式。",
    traits: [
      "你不只关心眼前结果，也愿意为后续打基础",
      "能够接受内容、经营和推广一起推进",
      "更适合边积累边放大，逐步形成稳定打法"
    ],
    actions: [
      "先把内容主题、客户承接和经营基础搭起来",
      "用轻量内容测试吸引客户的方向",
      "基础跑顺后，再配合投流逐步放大效果"
    ],
    schemeLabel: "内容加热 + 投流方案"
  }
};

const loadingMessages = [
  "正在匹配更适合你的找客路子",
  "正在分析你的经营现状和推进偏好",
  "马上生成基础结果"
];

const businessLabels = {
  online: "线上经营为主",
  offline: "线下门店为主",
  mixed: "线上和线下都在做"
};

const storeLabels = {
  single: "1 家门店",
  small: "2-5 家门店",
  large: "6 家以上门店"
};

const concernTexts = {
  a: "你更希望前期动作尽快看到结果，避免投入铺得太重。",
  b: "你当前更在意时间和精力成本，希望推进方式更省心。",
  c: "你对怎么把内容、经营和投放串起来还有顾虑，更需要一条成型路径。"
};

const participationTexts = {
  a: "你更希望自己掌握推进节奏。",
  b: "你更接受和专业团队一起推进，关键动作一起定。",
  c: "你更希望把执行交给专业团队，自己重点看结果。"
};

const state = {
  currentQuestionIndex: 0,
  scores: { ad: 0, agency: 0, content: 0 },
  answers: {},
  answerPrimaries: {},
  loadingTimer: null,
  loadingTextTimer: null
};

const screens = {
  intro: document.getElementById("screen-intro"),
  quiz: document.getElementById("screen-quiz"),
  loading: document.getElementById("screen-loading"),
  result: document.getElementById("screen-result")
};

const questionTitle = document.getElementById("question-title");
const questionOptions = document.getElementById("question-options");
const progressLabel = document.getElementById("progress-label");
const progressPercent = document.getElementById("progress-percent");
const progressFill = document.getElementById("progress-fill");
const loadingText = document.getElementById("loading-text");
const resultTypeTitle = document.getElementById("result-type-title");
const resultScore = document.getElementById("result-score");
const resultSummaryText = document.getElementById("result-summary-text");
const traitList = document.getElementById("trait-list");
const actionList = document.getElementById("action-list");
const resultTags = document.getElementById("result-tags");
const resultPersonalized = document.getElementById("result-personalized");

function getActiveQuestions() {
  return questionBank.filter((question) => !question.when || question.when(state.answers));
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[name].classList.add("active");
}

function renderQuestion() {
  const questions = getActiveQuestions();
  const currentQuestion = questions[state.currentQuestionIndex];
  const currentStep = state.currentQuestionIndex + 1;
  const percent = Math.round((currentStep / questions.length) * 100);

  progressLabel.textContent = `路径判断 ${currentStep} / ${questions.length}`;
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
    button.addEventListener("click", () => selectAnswer(currentQuestion, option));
    questionOptions.appendChild(button);
  });
}

function selectAnswer(question, option) {
  state.answers[question.id] = option.id;
  state.answerPrimaries[question.id] = option.primary;

  Object.entries(option.scores).forEach(([type, value]) => {
    state.scores[type] += value;
  });

  const questions = getActiveQuestions();
  if (state.currentQuestionIndex < questions.length - 1) {
    state.currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  startLoadingAndShowResult();
}

function resolveResultType() {
  const entries = Object.entries(state.scores);
  const maxScore = Math.max(...entries.map(([, score]) => score));
  const candidates = entries.filter(([, score]) => score === maxScore).map(([type]) => type);

  if (candidates.length === 1) {
    return candidates[0];
  }

  const tieBreakOrder = [
    state.answerPrimaries.goal,
    state.answerPrimaries.participation,
    state.answerPrimaries.contentState,
    state.answerPrimaries.concern,
    state.answerPrimaries.business,
    state.answerPrimaries.stores
  ];

  for (const answerType of tieBreakOrder) {
    if (answerType && candidates.includes(answerType)) {
      return answerType;
    }
  }

  return candidates[0];
}

function computeMatchScore(type) {
  const base = { ad: 80, agency: 81, content: 82 }[type] || 80;
  const scoreBoost = state.scores[type] * 3;
  const businessBoost = state.answers.business === "mixed" ? 2 : 1;
  const storeBoost = state.answers.stores === "large" ? 2 : state.answers.stores ? 1 : 0;
  return Math.min(base + scoreBoost + businessBoost + storeBoost, 96);
}

function buildPersonalizedText(type) {
  const businessText = businessLabels[state.answers.business] || "生意形式待补充";
  const storeText = state.answers.stores ? `，目前是 ${storeLabels[state.answers.stores]}` : "";
  const concernText = concernTexts[state.answers.concern] || "";
  const participationText = participationTexts[state.answers.participation] || "";

  const typeLead = {
    ad: "结合你的选择，你现阶段更适合先从更直接的找客动作切入。",
    agency: "结合你的选择，你现阶段更适合先借助成熟团队把找客户这件事做起来。",
    content: "结合你的选择，你现阶段更适合先把内容、经营和后续放大动作串起来。"
  };

  return `${typeLead[type]} 你目前是${businessText}${storeText}。${participationText}${concernText}`;
}

function renderList(container, items) {
  container.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderResult() {
  const resultType = resolveResultType();
  const profile = resultProfiles[resultType];
  const score = computeMatchScore(resultType);
  const tagItems = [businessLabels[state.answers.business], profile.schemeLabel];

  if (state.answers.stores) {
    tagItems.splice(1, 0, storeLabels[state.answers.stores]);
  }

  resultTypeTitle.textContent = profile.title;
  resultScore.textContent = score;
  resultSummaryText.textContent = profile.summary;
  renderList(traitList, profile.traits);
  renderList(actionList, profile.actions);
  resultPersonalized.textContent = buildPersonalizedText(resultType);
  resultTags.innerHTML = tagItems.map((item) => `<span>${item}</span>`).join("");
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
  }, 720);

  state.loadingTimer = setTimeout(() => {
    clearInterval(state.loadingTextTimer);
    renderResult();
    showScreen("result");
  }, 2200);
}

function resetState() {
  state.currentQuestionIndex = 0;
  state.scores = { ad: 0, agency: 0, content: 0 };
  state.answers = {};
  state.answerPrimaries = {};
  clearInterval(state.loadingTextTimer);
  clearTimeout(state.loadingTimer);
  renderQuestion();
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
}

function init() {
  renderQuestion();
  initEvents();
}

init();
