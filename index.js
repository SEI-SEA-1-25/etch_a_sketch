let divCount = 0

let pixelEls = [];
const buttonEl = document.querySelector("#clear-screen-button");
const screenEl = document.querySelector("#screen");
let width = window.screen.width;
let height = window.screen.height;
console.log(height);
console.log(width);
const createDiv = () => {
   const pix = document.createElement("div");
   pix.classList.add("pixel");
   pix.addEventListener("mouseover", colorize);
   screenEl.append(pix);
};
const fillScreen = () =>{
   for (i = 0; i < 16000; i++) {
      createDiv();
      divCount++;
   }
};
let clearButton = () => {
  // console.log(pixelEls)
   for (pixel of pixelEls){
   pixel.classList.remove("colored-in");
}
}
let colorize = (event)=>{
   event.target.classList.add("colored-in")
   pixelEls = document.querySelectorAll(".colored-in")
   buttonEl.addEventListener("click", clearButton);
   }
fillScreen();
