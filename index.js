var submitButton = document.getElementById("submit");
var buttons = document.querySelectorAll("a.large.button");
var form = document.getElementById("flex-grid-form");
var successMessage = document.getElementById("successMessage");

buttons.forEach(button => {
  button.addEventListener("click", function(ev) {
    ev.preventDefault();
  });
});

submitButton.addEventListener("click", event => {
  event.preventDefault();
  check(event);
});

function check(event) {
  if (zipCode.value === "" || email.value === "") {
    errorMessage.innerText =
      "Please enter a valid zip code and/or email address.";
  } else {
    errorMessage.innerText = "";
    form.style.display = "none";
    successMessage.style.display = "block";
    successMessage.innerText = "Thank you for submittng!";
  }
}

var email = document.getElementById("email");
var zipCode = document.getElementById("zip-code");
var errorMessage = document.getElementById("errorname");
