$(document).on("keydown", function () {
  startGame();
});

function startGame() {
  var alive = true;
  var patternList = [1, 3, 4, 2, 1, 2];
  while (alive) {
    // Go Through the list to highlight the pattern
    highlightPatern(patternList);

    alive = false;
  }
}
// function randomColor() {
//   return Math.floor(Math.random() * 4) + 1;
// }

async function highlightPatern(patternList) {
  var delay = 500;
  for (var i = 0; i < patternList.length; i++) {
    if (patternList[i] === 1) {
      toggleForThatColor("#green");
    }
    if (patternList[i] === 2) {
      toggleForThatColor("#red");
    }
    if (patternList[i] === 3) {
      toggleForThatColor("#yellow");
    }
    if (patternList[i] === 4) {
      toggleForThatColor("#blue");
    }
    await sleep(delay);
  }
}

function toggleForThatColor(color) {
  console.log("idk");
  $(color).addClass("pressed");
  setTimeout(function () {
    $(color).removeClass("pressed");
  }, 500);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
