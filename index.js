var form = document.getElementById("submit");
var email = document.getElementById("auto");
var error = document.querySelector(".error");

form.addEventListener("click", event => {
  event.preventDefault();
  console.log("hi");
});
