function pressed() {
  var listOfLists = document.getElementsByClassName("listings");

  for (var i = 0; i < listOfLists.length; i++) {
    listOfLists[i].classList.toggle("invisible");
  }
}
