var state = 'start'

var startEl = document.querySelector('start')

var quizEl= document.querySelector('quiz')

var endEl = document.querySelector('end')

var beginButton = document.querySelector('begin')

var submitButton = document.getElementById("save")





function displayState(type){
    if(state === "start"){
        startEl.display = 'block'
        quizEl.display = 'none'
        endEl.display = 'none'
    }
    if(state === "quiz"){
        startEl.display = 'none'
        quizEl.display = 'block'
        endEl.display = 'none'
    }
    if(state === "end"){
        startEl.display = 'none'
        quizEl.display = 'none'
        endEl.display = 'block'
    }

}
function init(){
    displayState()
}


beginButton.addEventListener("click", startGame);





submitButton.addEventListener("click", function(event) {
    event.preventDefault();




})

