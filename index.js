var submitButton = document.getElementById("submit");
var email = document.getElementById("auto");
var error = document.querySelector(".error");
var buttons = document.querySelectorAll("a.large.button");

buttons.forEach(button => {
  button.addEventListener("click", function(ev) {
    ev.preventDefault();
  });
});

submitButton.addEventListener("click", event => {
  event.preventDefault();
});
