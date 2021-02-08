// Seecting the DOM
let screen = document.querySelector("#screen");
let pixel = document.querySelector("#onepix");
let newDiv;






// EventListeners

//Change bg color of one pixel
pixel.addEventListener("mouseenter", ()=> {
    pixel.classList.add("colored-in");
});








//Functions and loops
function mouseEv(){
    screen.addEventListener('mouseenter', ()=>{
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "pixel");
        screen.append(newDiv);
        newDiv.addEventListener('mouseenter', ()=>{
            newDiv.classList.add("colored-in");
        })

        for (var i = 0; i < newDiv.length; i++){
        
        }

    });
}
mouseEv();
// console.log(mouseEv())
