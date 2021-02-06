// The magic happens here!
/* Constants */

/* Game Logic Variables and State */
let divCount = 0
// let enterEventCount = 0;
// let leaveEventCount = 0;
/* DOM References */
const pixelTarget = document.querySelector(".pixel");
const screenTarget = document.querySelector("#screen")
/* Functions and Game Logic */

const createDiv = () => {
   const pix = document.createElement("div");
   pix.classList.add("pixel");
   screenTarget.append(pix);

};
const fillScreen = () =>{
    for (i = 0; i < 9000; i++) {
        createDiv();
        divCount++;
        //console.log(divCount);
    }
};
fillScreen()
/* Event Listeners */
screenTarget.addEventListener("mouseenter", function(){
   for (i = 0; i < divCount; i++) {
   pixelTarget.classList.add("colored-in") 
}
});


// class Pixel {
//    constructor(pix) {
//      this.pix = pix
//      this.addIt = function(){
//         this.pix = document.createElement("div");
//         pix.classList.add("pixel");
//         screenTarget.append(pix);
//      }
//    }
// }