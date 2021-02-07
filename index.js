//Variables
const resetButton = document.querySelector("#resetButton");
let pixel = document.querySelector(".pixel");
const squaresContainer = document.querySelector("#squaresContainer");

//hoovering over pixel
function hooverOver(event) {
  event.currentTarget.classList.add("colored-in");
  event.currentTarget.style.background = "";
}
//adding a buncha pixel squares
function addPixelation() {
  for (let i = 0; i < 9050; i++) {
    let div = document.createElement("div");
    div.className = "pixel";
    div.addEventListener("mouseenter", hooverOver);
    squaresContainer.appendChild(div);
  }
}
//clearing function
const clear = () => {
  for (div of squaresContainer.children) {
    div.classList.remove("colored-in");
  }
};

document.addEventListener("DOMContentLoaded", addPixelation);

//clear button
resetButton.addEventListener("click", clear);
git;
