//const { link } = require("fs")
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
let secondsLeft = 120;
let userScore = 0
var timerInterval;
const questions = [
  {
    question: "What is the symbol for termination?",
    answers: [
      { text: "semicolon", correct: true },
      { text: "colon", correct: false },
      { text: "period", correct: false },
    ]
  },
  {
    question: "What is another term used in place of Var?",

    answers: [

      { text: "El", correct: false },

      { text: "const", correct: false },

      { text: "let", correct: true },
    ],
  },
  {
    question: "What is the name of a piece of data that is described as a 'cubby hole' in class?",

    answers: [

      { text: "function", correct: false },

      { text: "variable", correct: true },

      { text: "element", correct: false },

    ],
  }, {
    question: "What is the name of a tool to do something in Javascript?",

    answers: [

      { text: "variable", correct: false },

      { text: "function", correct: true },

      { text: "element", correct: false },

    ],
  }, {
    question: "True or false,'Let' is more strict than 'var'.",

    answers: [

      { text: "true", correct: true },

      { text: "false", correct: false },

    ]
  }
];
//event listener for when the game starts so the user sees the current question, answer it and move onto the next question.
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});
//function to start the game and hide questions so the use sees one question at a time.
function startGame() {
  secondsLeft = 120;
  setTime();
  console.log('Started')
  startButton.classList.add('hide')
  // shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
};
//allows quiz to go from one question to the next question.
function setNextQuestion() {
  resetState()
  showQuestion(questions[currentQuestionIndex])
};
// shows a question and the buttons to answer the question.
function showQuestion(question) {
  questionElement.innerText = question.question
  answerButtonsElement.innerHTML = ''
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    console.log(answer.text)
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    };
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    //while (answerButtonsElement.firstChild) {
    //  answerButtonsElement.removeChild
    //    (answerButtonsElement.firstChild)
    // }
  });
};
//function to reset quiz if the user wants to retake the quiz
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
};
//allows user to select answer from the choices given.
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusclass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusclass(button, button.dataset.correct)
  });
  if (questions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    localStorage.setItem("HighScore", userScore)
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    document.getElementById("High").classList.remove("hide")
    clearInterval(timerInterval)
  }
  nextButton.classList.remove('hide')
};
//shows whether the question was answered right or wrong.
function setStatusclass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    userScore++
  } else {
    element.classList.add('wrong')
    userScore--
  };
};
//once the user selects an answer, the quiz clears the answers selected.
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
};
//timer function code can this be used?
let currentQuestion = 0;
let timerEl = document.querySelector("#timer");
// timer information
function setTime() {
  timerInterval = setInterval(function () {
    timerEl.textContent = "Time:" + secondsLeft;
    secondsLeft--;
    if (secondsLeft <= 0 || currentQuestion >= quizArr.length) {
      clearInterval(timerInterval);
      score();
    }
  }, 1000);
}

//old code, don't know if it's useable or not.
      // question display
      //function questionDisplay(qtn, choice) {
      //console.log("question display");
      //myQuestionsEl.innerHTML = "";
      //var questionTitle = document.createElement("p");
      //var node = document.createTextNode(qtn);
      //questionTitle.appendChild(node);
      //myQuestionsEl.appendChild(questionTitle);
      // answer choices
      //var choiceAEl = document.createElement("li");
      //var choiceBEl = document.createElement("li");
      //var choiceCEl = document.createElement("li");
      //var questiongroup = document.createElement("ol");
      // var nodeA = document.createTextNode(choice[0]);
      //choiceAEl.appendChild(nodeA);
      //var nodeB = document.createTextNode(choice[1]);
      //choiceBEl.appendChild(nodeB);
      //var nodeC = document.createTextNode(choice[2]);
      //choiceCEl.appendChild(nodeC);
      // myQuestionsEl.appendChild(questiongroup);
      //questiongroup.appendChild(choiceAEl);
      //questiongroup.appendChild(choiceBEl);
      //questiongroup.appendChild(choiceCEl);
      //console.log("display" + qtn);
      //}
      // running quiz
      //myQuestionsEl.onclick = function (event) {
      //let li = event.target.closest("li");
      //if (!li) return;
      //if (!myQuestionsEl.contains(li)) return;
      //if (li.textContent === quizArr[currentQuestion].answer) {
      //currentQuestion++;
      //runQuiz();
      //} else {
      //console.log("red");
      //if (secondsLeft < 30) {
      //secondsLeft = 0
      //score();
      //} else {
      //secondsLeft = secondsLeft - 30;
      //}
      //currentQuestion++;
      //runQuiz();
      //}
      //};
      //function runQuiz() {
      //if (currentQuestion < quizArr.length) {
      //questionDisplay(
      //quizArr[currentQuestion].questionText,
      //quizArr[currentQuestion].multipleChoice
      //);
      //} else {
      //score()
      //}
      //}
      //var scoreEl = document.querySelector(".score");
      //function hideQuestions() {
      // myQuestionsEl.getElementsByClassName.display = "none";
      //}
      //function score() {
      //scoreEl.innerHTML = "";
      //hideQuestions();
      //}
      //var scoreHeader = document.createElement("h1");
      //var node = document.createTextNode("The End");
      //scoreHeader.appendChild(node);
      //scoreEl.appendChild(scoreHeader);
      //var yourScore = document.createElement("p");
      //var enterInitial = document.createElement("input");
      //var submitButton = doucment.createElement("button");
      //var tryAgain = document.createElement("a");
      //var brk = document.createElement("br");
      //var nodeA = document.createTextNode("Your score: " + secondsLeft);
      //yourScore.appendChild(nodeA);
      //enterInitial.setAttribute("placeholder", "your initials");
      //enterInitial.setAttribute("maxlength", 4);
      //enterInitial.setAttribute("id", "initialInput");
      //submitButton.setAttribute("class", "submit");
      //submitButton.setAttribute("type", "submit");
      //submitButton.textContent = ("submit");
      //var nodeC = document.createTextNode("Click here to start over");
      //startOver.setAttribute("href", "index.html");
      //startOver.setAttribute("class", "link");
      //startOver.appendChild(nodeC);
      //scoreEl.appendChild(yourScore);
      //scoreEl.appendChild(enterInitial);
      //scoreEl.appendChild(submitButton);
      //scoreEl.appendChild(brk);
      //scoreEl.appendChild(startOver);
      //var submitButton = document.querySelector(".submit");
      //submitButton.addeventlistner("click", function (event) {
      // event.preventDefault();
      // if (enterInitial.value.length < 1)
      // return;
      // else {
      // localStorage.setItem(document.getElementsById("initialInput").value, secondsLeft);
      // enterInitial.value = "";
      // }
      // doucment.querySelector(".submit").disabled = true;
      //})
      // listen for the use to click 
      //document.getElementById("start Button").addEventListener("click", setTime);
      //document.getElementById("start Button").addEventListener("click", runQuiz);

      //var myQuestionsEl = document.querySelector(".question")
