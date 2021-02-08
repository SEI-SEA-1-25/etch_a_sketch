// Seecting the DOM
let screen = document.querySelector("#screen");
let pixel = document.querySelector("#onepix");
let newDiv;
let drawing = true;
let x = 0;



// EventListeners

//Change bg color of one pixel
pixel.addEventListener("mouseenter", ()=> {
    pixel.classList.add("colored-in");
});


//Functions
function mouseEv(){
    screen.addEventListener('mousemove', (e)=>{
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "pixel");
        newDiv.classList.add("colored-in")
        screen.append(newDiv);
        evEl = e.target;
        evEl.classList.add("colored-in");
    });
}
mouseEv();

function clearButton(){
    let clear = document.querySelector("#clear-screen-button");
    clear.addEventListener("click", (e)=>{
        document.getElementById("screen").innerHTML = " ";
    });
}
clearButton();
