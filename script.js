const quizData = [
  {
    question: 'How many children died as a result of U.S. led sanctions on Iraq?',
    options: ['500', '5,000', '50,000', '500,000'],
    answer: '500,000'
  },
  {
    question: 'What country did the US NOT colonize?',
    options: ['Philippines', 'Korea', 'Guam', 'Hawaii'],
    answer: 'Korea'
  },
  {
    question: 'How many ex-Nazi scientists were employed by the US government post-WW2?"?',
    options: ['16', '160', '1,600', '16,000'],
    answer: '1,600'
  }
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const currentQuizData = quizData[currentQuestion];
  questionElement.innerText = currentQuizData.question;
  optionsElement.innerHTML = '';
  currentQuizData.options.forEach(option => {
    const button = document.createElement('button');
    button.innerText = option;
    button.classList.add('option-btn');
    optionsElement.appendChild(button);
    button.addEventListener('click', () => checkAnswer(option));
  });
}

function checkAnswer(answer) {
  const currentQuizData = quizData[currentQuestion];
  if (answer === currentQuizData.answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionElement.style.display = 'none';
  optionsElement.style.display = 'none';
  submitBtn.style.display = 'none';
  resultElement.innerHTML = `<h2>Your score: ${score}/${quizData.length}</h2>`;
}

loadQuestion();