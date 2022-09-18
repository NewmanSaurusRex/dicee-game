var randomNumberOne = Math.random();
randomNumberOne = randomNumberOne * 6;
randomNumberOne = Math.floor(randomNumberOne) + 1;

var randomNumberTwo = Math.random();
randomNumberTwo = randomNumberTwo * 6;
randomNumberTwo = Math.floor(randomNumberTwo) + 1;

document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumberOne + ".png");

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumberTwo + ".png");

if (randomNumberOne === randomNumberTwo) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumberOne > randomNumberTwo) {
  document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
} else if (randomNumberTwo > randomNumberOne) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}
