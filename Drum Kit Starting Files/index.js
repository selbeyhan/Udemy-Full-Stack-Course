for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // this.style.color = "white";
    makeSound(this.innerHTML);
    keyAnimation(this.innerHTML);
  });
}

addEventListener("keydown", function (event) {
  makeSound(event.key);
  keyAnimation(event.key);
});

function makeSound(key) {
  if (key === "w") {
    var sound = new Audio("./sounds/tom-1.mp3");
    sound.play();
  }
  if (key === "a") {
    var sound = new Audio("./sounds/tom-2.mp3");
    sound.play();
  }
  if (key === "s") {
    var sound = new Audio("./sounds/tom-3.mp3");
    sound.play();
  }
  if (key === "d") {
    var sound = new Audio("./sounds/tom-4.mp3");
    sound.play();
  }
  if (key === "j") {
    var sound = new Audio("./sounds/snare.mp3");
    sound.play();
  }
  if (key === "k") {
    var sound = new Audio("./sounds/crash.mp3");
    sound.play();
  }
  if (key === "l") {
    var sound = new Audio("./sounds/kick-bass.mp3");
    sound.play();
  }
}

function keyAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
