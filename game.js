// Iteration 2: Generate 2 random number and display it on the screen
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

var num1,num2;
var score = 0;
generateRandomNum();    
function generateRandomNum(){
    num1 = parseInt(Math.random() * 100);
    number1.innerHTML = num1;
    num2 = parseInt(Math.random() * 100);
    number2.innerHTML = num2;
}

function updateSocre(){
    score++;
    generateRandomNum();
    resetTime(timer);
}

function gameOver(){
    localStorage.setItem('score',score);
    location.href = "./gameover.html";
}
// Iteration 3: Make the options button functional
const greaterThan = document.getElementById("greater-than");
const lesserThan = document.getElementById("lesser-than");
const equalTo = document.getElementById("equal-to");



greaterThan.addEventListener('click', () =>{
    if (num1 > num2) {
        updateSocre();
    } 
    else {
        gameOver();
    }
})

lesserThan.addEventListener('click', () =>{
    if (num1 < num2) {
        updateSocre();
    } 
    else {
        gameOver();
    }
    
})

equalTo.addEventListener('click', () =>{
    if (num1 === num2) {
        updateSocre();
    } 
    else {
        gameOver()
    }
})
// Iteration 4: Build a timer for the game
var time = 5;
var timerDiv = document.getElementById("timer");
var timer;

function startTimer() {
  time = 5;
  timerDiv.innerHTML = time;
  timer = setInterval(() => {
    time--;
    if (time == 0) {
      gameOver();
    }
    timerDiv.innerHTML = time;
  }, 1000);
}

function resetTime(timerID) {
  clearInterval(timerID);
  startTimer();
}

startTimer();