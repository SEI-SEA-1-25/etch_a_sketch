// The magic happens here!
/* Constants */

/* Game Logic Variables and State */
let divCount = 0
// let enterEventCount = 0;
// let leaveEventCount = 0;
/* DOM References */
//const pixelTarget = document.querySelectorAll(".pixel");
const screenTarget = document.querySelector("#screen")
/* Functions and Game Logic */

const createDiv = () => {
   const pix = document.createElement("div");
   pix.classList.add("pixel");
   screenTarget.append(pix);

};
 fillScreen = () =>{
    for (i = 0; i < 3000; i++) {
        createDiv();
        divCount++;
        //console.log(divCount);
    }
};
colorize = ()=>{style.backgroundColor = "black";}
//  
//    document.getElementsByClassName("pixel").classList.add("colored-in");
//    // let pixelTarget = document.querySelector(".pixel");
//    // pixelTarget.classList.add("colored-in");
// 
fillScreen()
/* Event Listeners */
screenTarget.addEventListener("mouseover", function(event){
  for (i=0; i < 3000; i++){
     
   const pixel = document.querySelector(".pixel");
   let colorPixel = event.target.pixel;
   colorPixel(colorize);
   return;
  };
});
//Clear listeningElement.setAttribute('style', 'display:none;');
//listeningElement.setAttribute('style', 'display:none;');