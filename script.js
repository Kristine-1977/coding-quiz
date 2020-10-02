let timerEl = document.getElementById('timer');
var secondsLeft = 120;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){


function showQuestions(questions, quizContainer){
var output = [];

var answers;

for(var i=0; i<questions.length; i++){
  answers = [];
  for(letter in questions[i].answers){
answers.forEachpush('<label>'+'input type'="radio" name="'question' +i+'value="'+ letter + ': '+ questions[i].answers[letter] + '</label>'
);
output.push(
  `${`<div class="question">` + questions[i].question}<div><div class="answers">${answers.join('')}</div>`
);
  }
  quizContainer.innerHtml = output.join('');
}
  

var myQuestions = [
  {
    question: "What is the symbol for termination?",

    answers: {

      a: "semicolon",

      b: "colon",

      c: "period"
    }
    .correctAnswer, "a"
  };
  userAnswer = (answerContainers[i].querySelector('input'[name=question'+i+]:checked)||{}).value;
  if(userAnswer===questions[i].correctAnswer){
    numCorrect++;
    answerContainers[i].style.color = 'lightgreen';
  }
  else{
    answerContainers[i].style.color = 'red';
  }
  resultsContainer.innerHtml = numCorrect + ' out of ' + questions.length;

  resultsContainer.innerHtml = numCorrect +'out of' + questions.length
  for(var i=0; i<questions.length; i++){
    answers = [];
    for(letter in questions[i].answers){
      answers.forEachpush('<label>'+'input type'="radio" name="'question' +i+' value="'+ letter + ': '+ questions[i].answers[letter] + '</label>'
      );
      output.push(
        `${`<div class="question">` + questions[i].question}<div><div class="answers">${answers.join('')}</div>`
      );
    }
  function handleClick(event) {
    console.log(event);
  };
  BroadcastChannel.addEventListner("click", handleClick);
  submitButton.onclick = function(){
    function showresults(questions, quizContainer, resultsContainer){
    }

  question, "What is another term used in place of Var?",

  answers, {

    a: "El",

    b: "const",

    c: "let"

    .correctAnswer, "c"
    },
    
    userAnswer = (answerContainers[i].querySelector('input'[name=question'+i+]:checked)||{}).value;
    if(userAnswer===questions[i].correctAnswer){
      numCorrect++;
      answerContainers[i].style.color = 'lightgreen';
    }
    else{
      answerContainers[i].style.color = 'red';
      resultsContainer.innerHtml = numCorrect + ' out of ' + questions.length;

    for(var i=0; i<questions.length; i++){
      answers = [];
      for(letter in questions[i].answers){
        answers.forEachpush('<label>'+'input type'="radio" name="'question' +i+' value="'+ letter + ': '+ questions[i].answers[letter] + '</label>'
        );
        output.push(
          `<div class="question">` + questions[i].question + '<div>' 
        + '<div class="answers">' + answers.join('') + '</div>'
        );
      }
      function handleClick(event) {
        console.log(event);
      };
      BroadcastChannel.addEventListner("click", handleClick);
      submitButton.onclick = function(){
        function showresults(questions, quizContainer, resultsContainer){
        }

    question, "What is the name of a piece of data that is described as a 'cubby hole' in class?",

    answers, {

      a: "function",

      b: "variable",

      c: "element"

      },
    correctAnswer, "b"
    userAnswer = (answerContainers[i].querySelector('input'[name=question'+i+]:checked)||{}).value;
    if(userAnswer===questions[i].correctAnswer){
      numCorrect++;
      answerContainers[i].style.color = 'lightgreen';
    }
    else{
      answerContainers[i].style.color = 'red';
      resultsContainer.innerHtml = numCorrect + ' out of ' + questions.length;
    for(var i=0; i<questions.length; i++){
      answers = [];
      for(letter in questions[i].answers){
        answers.forEachpush(
          '<label>'+'input type'="radio" name="'question' +i+'value="'
          + letter + ': '+ questions[i].answers[letter] + '</label>'
    );
    output.push(
      `<div class="question">` + questions[i].question + '<div>' 
      + '<div class="answers">' + answers.join('') + '</div>'
      );
      }
      function handleClick(event) {
        console.log(event);
      };
      BroadcastChannel.addEventListner("click", handleClick);
      submitButton.onclick = function(){
        function showresults(questions, quizContainer, resultsContainer){
        }

    question, "What is the name of a tool to do something in Javascript?",

    answers, {

      a: "variable",

      b: "function",

      c: "element"

    },

    correctAnswer, "b"

    userAnswer = (answerContainers[i].querySelector('input'[name=question'+i+]:checked)||{}).value;
    if(userAnswer===questions[i].correctAnswer){
      numCorrect++;
      answerContainers[i].style.color = 'lightgreen';
    }
    else{
      answerContainers[i].style.color = 'red';
      resultsContainer.innerHtml = numCorrect + ' out of ' + questions.length;
    for(var i=0; i<questions.length; i++){
      answers = [];
      for(letter in questions[i].answers){
        answers.forEachpush(
          '<label>'+'input type'="radio" name="'question' +i+' value="`${letter}: ${questions[i].answers[letter]}</label>`
  );
  output.push(
  `<div class="question">` + questions[i].question + '<div>' 
  + '<div class="answers">' + answers.join('') + '</div>'
  );
      }
      function handleClick(event) {
        console.log(event);
      };
      BroadcastChannel.addEventListner("click", handleClick);
      submitButton.onclick = function(){
        function showresults(questions, quizContainer, resultsContainer){
        }
    question, "True or false,'Let' is more strict than 'var'.",

    answers, {

      a: "true",
      
      b: "false"
   
    },
    correctAnswer, "a"
  };
userAnswer = (answerContainers[i].querySelector('input'[name=question]'+i+]:checked)||{}).value;
if(userAnswer===questions[i].correctAnswer){
  numCorrect++;
  answerContainers[i].style.color = 'lightgreen';
}
else{
  answerContainers[i].style.color = 'red';
  resultsContainer.innerHtml = numCorrect + ' out of ' + questions.length;

submitButton.onclick = function(){
function showresults(questions, quizContainer, resultsContainer){
}
function handleClick(event) {
  console.log(event);
};
BroadcastChannel.addEventListner("click", handleClick);
var answerContainers = quizContainer.querySelectorAll('.answers');
var userAnswer = '';
var numCorrect = 0;
// show the questions
showQuestions(questions, quizContainer);

submitButton.oneclick = function(){
  showresults(questions, quizContainer, resultsContainer);
}
      function newFunction(quizContainer, output) {
        quizContainer.innerHtml = output.join('');
      }
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);