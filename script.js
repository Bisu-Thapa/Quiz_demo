// Lets create an array and store all questions and answers
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stands for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Style",
    d: "Cascading State Sheets",
    correct: "b",
  },
  {
    question: "What does HTML stands for?",
    a: "HyperText Markup Language",
    b: "HyperText Markdown Language",
    c: "HyperText Markright Language",
    d: "HyperText Markleft Language",
    correct: "a",
  },
  {
    question: "What year was Javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of above",
    correct: "b",
  },
];

// Then we need to get access to quiz in html file
const quiz = document.getElementById("quiz");
// To select answers
const answers = document.querySelectorAll(".answer");
// To select questions
const question = document.getElementById("question");
// For the question from a to d
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
// To select submit button
const submit = document.getElementById("submit");

let currentQuiz = 0; // Initial index of an array
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answers.forEach((answers) => (answers.checked = false));
}

function getSelected() {
  let ans;
  answers.forEach((answers) => {
    if (answers.checked) {
      ans = answers.id;
    }
  });
  return ans;
}

submit.addEventListener("click", () => {
  const ans = getSelected();
  if (ans) {
    if (ans === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h2> You answered
      ${score}/${quizData.length} questions correctly. </h2>

      <button onClick="location.reload()">Reload</button>
      `;
    }
  }
});
