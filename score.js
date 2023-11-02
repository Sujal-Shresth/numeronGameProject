// Iteration 5: Store the player score and display it on the game over screen
let score = localStorage.getItem("score");
console.log(score);

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) => {
  location.href = "./game.html";
};