// The magic happens here!
/* Constants */

/* Game Logic Variables and State */
let divCount = 0
/* DOM References */
let pixelEls = [];
const buttonEl = document.querySelector("#clear-screen-button");
const screenEl = document.querySelector("#screen");
/* Functions and Game Logic */
const createDiv = () => {
   const pix = document.createElement("div");
   pix.classList.add("pixel");
   pix.addEventListener("mouseover", colorize);
   screenEl.append(pix);
};
const fillScreen = () =>{
   for (i = 0; i < 3000; i++) {
      createDiv();
      divCount++;
   }
};
let clearButton = () => {
   console.log(pixelEls)
   for (pixel of pixelEls){
   pixel.classList.remove("colored-in");
}
}
let colorize = (event)=>{
   //console.log("help")
   event.target.classList.add("colored-in")
   pixelEls = document.querySelectorAll(".colored-in")
   buttonEl.addEventListener("click", clearButton);
   }
fillScreen();
/* Event Listeners */
//buttonEl.addEventListener("click", clearButton);
   // event.target.pixel
   // pixel.style.backgroundColor = "black";}
//  
//    document.getElementsByClassName("pixel").classList.add("colored-in");
//    // let pixelTarget = document.querySelector(".pixel");
//    // pixelTarget.classList.add("colored-in");
// 
//Clear listeningElement.setAttribute('style', 'display:none;');
//listeningElement.setAttribute('style', 'display:none;')