const button = document.querySelector(".share-button");
const toggle = document.querySelector(".toggle");
const shareButtonColor = document.querySelector(".user-info div svg path");

button.addEventListener("click", function () {
  button.classList.toggle("share-button");
  button.classList.toggle("share-button-pushed");
  if (!toggle.classList.toggle("disp-none")) {
    shareButtonColor.setAttribute("fill", "#fff");
  } else {
    shareButtonColor.setAttribute("fill", "#6E8098");
  }
});
