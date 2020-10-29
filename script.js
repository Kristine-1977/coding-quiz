<link rel="stylesheet" href="index.html"/>
let currentQuestion = 0;
let timerEl = document.querySelector(".navbar-text");
var secondsLeft = 120;
// timer information
function setTime() {
  var timerInterval = setInterval(function() {
    timerEl.textContent = "Time:" + secondsLeft;
    if(secondsLeft <= 0 || currentQuestion >= quizArr.length) {
      clearInterval(timerInterval);
      score();
      } else {
  secondsLeft--;
}
  }, 1000);
}
// question display
function questionDisplay(qtn, choice) {
  console.log("question display");
  myQuestionsEl.innerHTML = "";
  var questionTitle = document.createElement("p");
  var node =document.createTextNode(qtn);
  questionTitle.appendChild(node);
  myQuestionsEl.appendChild(questionTitle);
// answer choices
  var choiceAEl = document.createElement("li");
  var choiceBEl = document.createElement("li");
  var choiceCEl = document.createElement("li");
  var questiongroup = document.createElement("ol");

  var nodeA = document.createTextNode(choice[0]);
  choiceAEl.appendChild(nodeA);
  var nodeB = document.createTextNode(choice[1]);
  choiceBEl.appendChild(nodeB);
  var nodeC = document.createTextNode(choice[2]);
  choiceCEl.appendChild(nodeC);

 myQuestionsEl.appendChild(questiongroup);
 questiongroup.appendChild(choiceAEl);
 questiongroup.appendChild(choiceBEl);
 questiongroup.appendChild(choiceCEl);
 console.log("display" + qtn);
}
// running quiz
myQuestionsEl.onclick =function (event) {
  let li = event.target.closest("li");
  if(!li) return;
  if (!myQuestionsEl.contains(li)) return;
  if (li.textContent === quizArr[currentQuestion].answer) {
    currentQuestion++;
    runQuiz();
  } else {
    console.log("red");
    if(secondsLeft < 30) {
      secondsLeft = 0 
      score();
    } else {
      secondsLeft = secondsLeft - 30;
    }
  currentQuestion++;
  runQuiz();
}
};
function runQuiz() {
  if(currentQuestion < quizArr.length) {
    questionDisplay(
      quizArr[currentQuestion].questionText,
      quizArr[currentQuestion].multipleChoice
    );
  } else {
    score()
  }
}
var scoreEl = document.querySelector(".score");
function hideQuestions() {
  myQuestionsEl.getElementsByClassName.display = "none";
}
function score() {
  scoreEl.innerHTML = "";
  hideQuestions();
}
var scoreHeader = document.createElement("h1");
var node = document.createTextNode("The End");
scoreHeader.appendChild(node);
scoreEl.appendChild(scoreHeader);

var yourScore = document.createElement("p");
var enterInitial = document.createElement("input");
var submitButton = doucment.createElement("button");
var tryAgain = document.createElement("a");
var brk = document.createElement("br");

var nodeA = document.createTextNode("Your score: " + secondsLeft);
yourScore.appendChild(nodeA);
enterInitial.setAttribute("placeholder", "your initials");
enterInitial.setAttribute("maxlength", 4);
enterInitial.setAttribute("id", "initialInput");

submitButton.setAttribute("class", "submit");
submitButton.setAttribute("type", "submit");
submitButton.textContent = ("submit");

var nodeC = document.createTextNode("Click here to start over");
startOver.setAttribute("href", "index.html");
startOver.setAttribute("class", "link");
startOver.appendChild(nodeC);

scoreEl.appendChild(yourScore);
scoreEl.appendChild(enterInitial);
scoreEl.appendChild(submitButton);
scoreEl.appendChild(brk);
scoreEl.appendChild(startOver);

var submitButton = document.querySelector(".submit");
submitButton.addeventlistner("click", function (event) {
  event.preventDefault();
  if (enterInitial.value.length < 1)
  return;
  else {
    localStorage.setItem(document.getElementsById("initialInput").value, secondsLeft);
    enterInitial.value = "";
  }
  doucment.querySelector(".submit").disabled = true;
  })
}
// listen for the use to click 
document.getElementById("start Button").addEventListener("click", setTime);
document.getElementById("start Button").addEventListener("click", runQuiz);

var myQuestionsEl = document.querySelector(".question") 
quizArr = [{
    questionText: "What is the symbol for termination?",
    
    answers: {

      a: "semicolon",

      b: "colon",

      c: "period"
    }
    .correctAnswer, "a"
  },
 
  questionText, "What is another term used in place of Var?",

  answers, {

    a: "El",

    b: "const",

    c: "let"

    .correctAnswer, "c"
    },
 
    question, "What is the name of a piece of data that is described as a 'cubby hole' in class?",

    answers, {

      a: "function",

      b: "variable",

      c: "element"

      },
    correctAnswer, "b"
   
    questionText: "What is the name of a tool to do something in Javascript?",

    answers, {

      a: "variable",

      b: "function",

      c: "element"

    },

    correctAnswer, "b"

      questionText: "True or false,'Let' is more strict than 'var'.",

    answers, {

      a: "true",
      
      b: "false"
   
    },
    correctAnswer, "a"
  };
};
