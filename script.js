var questions = [
  {
    question: "This Tag is used To Give Heading To The Table:",
    answerA: "Head",
    answerB: "Td",
    answerC: "Th",
    answerD: "Caption",
    answer: "Th"
  },
  {
    question: "This Function is Used To Parse a String To Int:",
    answerA: "I.P",
    answerB: "Int.Parse",
    answerC: "Parse.Int",
    answerD: "None",
    answer: "Parse.Int"

  },
  {
    question: "This JavaScript File Has An Extension of:",
    answerA: ".java",
    answerB: ".js",
    answerC: ".javascript",
    answerD: ".Exe", 
    answer: ".js"

  },
  {
    question: "A Function Associated With An object is Called:",
    answerA: "Function",
    answerB: "Method",
    answerC: "Link",
    answerD: "None",   
    answer: "Method"
  },
  {
    question: "Which Of The Following Dialog Box options Display a Message And a Data Entry Field?",
    answerA: "Alert()",
    answerB: "Prompt()",
    answerC: "Confirm()",
    answerD: "Message()",
    answer: "Prompt()"
  }
]
//randomize the quiz questions 
var highScores = []
function random(array) {
  let userIndex = array.length,  randomIndex;
  while (userIndex != 0) {
    randomIndex = Math.floor(Math.random() * userIndex);
    userIndex--;
    [array[userIndex], array[randomIndex]] = [array[randomIndex], array[userIndex]];
  }

  return array;
}

var randomArray = random(questions)

var questionEle = document.querySelector(".questionContainer")
var answerAEle = document.querySelector(".answer1")
var answerBEle = document.querySelector(".answer2")
var answerCEle = document.querySelector(".answer3")
var answerDEle = document.querySelector(".answer4")


var index = 0

questionEle.textContent = randomArray[0].question
answerAEle.textContent = randomArray[0].answerA
answerBEle.textContent = randomArray[0].answerB
answerCEle.textContent = randomArray[0].answerC
answerDEle.textContent = randomArray[0].answerD


var score = 0

//
function button1(){
  if(answerAEle.textContent === questions[index].answer){
    score += 1
  } else {
  }
  addIndexNumber()

}

function button2(){
  if(answerBEle.textContent === questions[index].answer){
    score += 1
  } else {
  }
  addIndexNumber()
}

function button3(){
  if(answerCEle.textContent === questions[index].answer){
    score += 1
  } else {
  }
  addIndexNumber()
}

function button4(){
  if(answerDEle.textContent === questions[index].answer){
    score += 1
  } else {
  }
  addIndexNumber()
}

var scoreEle = document.querySelector(".score")

function showQuizFinalScreen() {
    document.getElementById("answerContainer").style.display = "none";
    document.getElementById("userScore").style.display = "flex";
    scoreEle.textContent = score
}

function addIndexNumber() {
  index += 1
  if (index <= randomArray.length - 1){
    questionEle.textContent = randomArray[index].question
    answerAEle.textContent = randomArray[index].answerA
    answerBEle.textContent = randomArray[index].answerB
    answerCEle.textContent = randomArray[index].answerC
    answerDEle.textContent = randomArray[index].answerD
  } else {
    showQuizFinalScreen()
  }
}

var timerEl = document.querySelector(".timer");

var secondsLeft = 60;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + " seconds remaining";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
      showQuizFinalScreen();
 
    }

  }, 1000);
}

function sendMessage() {
  timerEl.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");

}

setTime();