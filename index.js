const submitButton = document.getElementById("submit");
const buttons = document.querySelectorAll("a.large.button");
const form = document.getElementById("flex-grid-form");
const email = document.getElementById("email");
const zipCode = document.getElementById("zip-code");
const errorMessage = document.getElementById("errorname");
const successMessage = document.getElementById("successMessage");
const listenNow = document.getElementById("listen-now");
const songGrid = document.getElementById("song-grid");

buttons.forEach(button => {
  button.addEventListener("click", function(ev) {
    ev.preventDefault();
  });
});

listenNow.addEventListener("click", event => {
  event.preventDefault();
  songGrid.scrollIntoView();
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
