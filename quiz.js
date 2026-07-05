const classSelect = document.getElementById("classSelect");
const subjectSelect = document.getElementById("subjectSelect");
const chapterSelect = document.getElementById("chapterSelect");
const questionCountSelect = document.getElementById("questionCountSelect");
const startQuizButton = document.getElementById("startQuizButton");
const quizBox = document.getElementById("quizBox");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextQuestionButton = document.getElementById("nextQuestionButton");
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const resultBox = document.getElementById("resultBox");
const scoreText = document.getElementById("scoreText");
const correctCount = document.getElementById("correctCount");
const totalCount = document.getElementById("totalCount");
const restartQuizButton = document.getElementById("restartQuizButton");
const setupCard = document.getElementById("setupCard");

let currentQuestions = [];
let currentQuestionIndex = 0;
let selectedAnswerIndex = null;
let score = 0;
let quizTimer = null;
let remainingTime = 60;

function resetSelect(select, placeholder) {
  select.innerHTML = `<option value="">${placeholder}</option>`;
  select.disabled = true;
}

function populateClassOptions() {
  const classes = Object.keys(quizDatabase);
  classSelect.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = "Select Class";
  classSelect.appendChild(placeholder);

  classes.forEach((className) => {
    const option = document.createElement("option");
    option.value = className;
    option.textContent = className;
    classSelect.appendChild(option);
  });
}

function populateSubjectOptions() {
  resetSelect(subjectSelect, "Select Subject");
  resetSelect(chapterSelect, "Select Chapter");

  const selectedClass = classSelect.value;
  if (!selectedClass || !quizDatabase[selectedClass]) return;

  const subjects = Object.keys(quizDatabase[selectedClass]);
  subjectSelect.disabled = false;
  subjects.forEach((subjectName) => {
    const option = document.createElement("option");
    option.value = subjectName;
    option.textContent = subjectName;
    subjectSelect.appendChild(option);
  });
}

function populateChapterOptions() {
  resetSelect(chapterSelect, "Select Chapter");

  const selectedClass = classSelect.value;
  const selectedSubject = subjectSelect.value;
  if (!selectedClass || !selectedSubject) return;

  const chapters = Object.keys(quizDatabase[selectedClass][selectedSubject] || {});
  if (!chapters.length) return;

  chapterSelect.disabled = false;
  chapters.forEach((chapterName) => {
    const option = document.createElement("option");
    option.value = chapterName;
    option.textContent = chapterName;
    chapterSelect.appendChild(option);
  });
}

function showElement(element) {
  element.classList.remove("hidden");
}

function hideElement(element) {
  element.classList.add("hidden");
}

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

function startTimer() {
  clearInterval(quizTimer);
  remainingTime = 60;
  timerElement.textContent = remainingTime;
  quizTimer = setInterval(() => {
    remainingTime -= 1;
    timerElement.textContent = remainingTime;
    if (remainingTime <= 0) {
      clearInterval(quizTimer);
      finishQuiz();
    }
  }, 1000);
}

function renderQuestion() {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;
  optionsContainer.innerHTML = "";
  selectedAnswerIndex = null;

  currentQuestion.options.forEach((optionText, index) => {
    const optionButton = document.createElement("div");
    optionButton.className = "option";
    optionButton.textContent = optionText;
    optionButton.addEventListener("click", () => selectAnswer(index, optionButton));
    optionsContainer.appendChild(optionButton);
  });

  const progress = Math.round(((currentQuestionIndex + 1) / currentQuestions.length) * 100);
  progressBar.style.width = `${progress}%`;
}

function selectAnswer(index, button) {
  selectedAnswerIndex = index;
  optionsContainer.querySelectorAll(".option").forEach((optionEl) => {
    optionEl.classList.remove("selected");
  });
  button.classList.add("selected");
}

function startQuiz() {
  const selectedClass = classSelect.value;
  const selectedSubject = subjectSelect.value;
  const selectedChapter = chapterSelect.value;
  const questionCount = Number(questionCountSelect.value);

  if (!selectedClass || !selectedSubject || !selectedChapter) {
    alert("Please select class, subject, and chapter to start the quiz.");
    return;
  }

  const chapterQuestions = quizDatabase[selectedClass]?.[selectedSubject]?.[selectedChapter] || [];
  if (!chapterQuestions.length) {
    alert("No questions are available for this chapter yet. Choose another chapter.");
    return;
  }

  currentQuestions = shuffleArray(chapterQuestions).slice(0, questionCount);
  currentQuestionIndex = 0;
  score = 0;
  correctCount.textContent = "0";
  totalCount.textContent = currentQuestions.length.toString();
  scoreText.textContent = `0 / ${currentQuestions.length}`;

  hideElement(setupCard);
  showElement(quizBox);
  hideElement(resultBox);
  startTimer();
  renderQuestion();
}

function nextQuestion() {
  const currentQuestion = currentQuestions[currentQuestionIndex];
  if (selectedAnswerIndex === currentQuestion.answer) {
    score += 1;
  }

  currentQuestionIndex += 1;
  if (currentQuestionIndex >= currentQuestions.length) {
    finishQuiz();
    return;
  }

  renderQuestion();
}

function finishQuiz() {
  clearInterval(quizTimer);
  hideElement(quizBox);
  showElement(resultBox);
  scoreText.textContent = `${score} / ${currentQuestions.length}`;
  correctCount.textContent = score.toString();
  totalCount.textContent = currentQuestions.length.toString();
}

function restartQuiz() {
  hideElement(quizBox);
  hideElement(resultBox);
  showElement(setupCard);
  classSelect.value = "";
  resetSelect(subjectSelect, "Select Subject");
  resetSelect(chapterSelect, "Select Chapter");
  questionCountSelect.value = "5";
}

classSelect.addEventListener("change", populateSubjectOptions);
subjectSelect.addEventListener("change", populateChapterOptions);
startQuizButton.addEventListener("click", startQuiz);
nextQuestionButton.addEventListener("click", nextQuestion);
restartQuizButton.addEventListener("click", restartQuiz);

populateClassOptions();
