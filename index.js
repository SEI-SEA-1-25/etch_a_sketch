// The magic happens here!
/* Constants */

/* Game Logic Variables and State */
let divCount = 0
/* DOM References */
//const pixelTarget = document.querySelectorAll(".pixel");
const screenTarget = document.querySelector("#screen");
/* Functions and Game Logic */
const createDiv = () => {
   const pix = document.createElement("div");
   pix.classList.add("pixel");
   pix.addEventListener("mouseover", colorize);
   screenTarget.append(pix);
};
const fillScreen = () =>{
    for (i = 0; i < 3000; i++) {
       createDiv();
        divCount++;
    }
   };
   let colorize = (event)=>{
      console.log("help")
      event.target.classList.add("colored-in")
   }
fillScreen();
/* Event Listeners */

   // event.target.pixel
   // pixel.style.backgroundColor = "black";}
//  
//    document.getElementsByClassName("pixel").classList.add("colored-in");
//    // let pixelTarget = document.querySelector(".pixel");
//    // pixelTarget.classList.add("colored-in");
// 
//Clear listeningElement.setAttribute('style', 'display:none;');
//listeningElement.setAttribute('style', 'display:none;')