// Seecting the DOM
let screen = document.querySelector("#screen");
let pixel = document.querySelector("#onepix");
let newDiv;


// EventListeners

//Change bg color of one pixel
pixel.addEventListener("mouseenter", ()=> {
    pixel.classList.add("colored-in");
});


//Functions
function mouseEv(){
    screen.addEventListener('mouseenter', ()=>{
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "pixel");
        screen.append(newDiv);
        newDiv.addEventListener('mouseenter', (e)=>{
            console.log(e);
            // let theBunch = document.querySelectorAll(".pixel");
            // console.log(theBunch[1]).style.backgroundColor = "#000000";
        })
    });
}
mouseEv();
// console.log(mouseEv())
