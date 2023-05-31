var ran1 = Math.floor(Math.random() * 6) + 1;
var dice1Path = "./images/dice" + ran1 + ".png";
var ran2 = Math.floor(Math.random() * 6) + 1;
var dice2Path = "./images/dice" + ran2 + ".png";

document.getElementById("img1").setAttribute("src", dice1Path);
document.getElementById("img2").setAttribute("src", dice2Path);

if (ran1 < ran2) {
  document.getElementsByClassName("title")[0].innerHTML = "Player 2 Wins";
} else if (ran1 > ran2) {
  document.getElementsByClassName("title")[0].innerHTML = "Player 1 Wins";
} else {
  document.getElementsByClassName("title")[0].innerHTML = "Its A Tie";
}
