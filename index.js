// Seecting the DOM
let screen = document.querySelector("#screen");
let numOfPix = document.querySelectorAll(".glass");
let pixel = document.querySelector("#onepix");
let newDiv;



// EventListeners

function mouseEv(){
    pixel.addEventListener("mouseenter", ()=> {
        pixel.classList.add("colored-in");
    });

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


//Functions and Loops

// clearing the DOM
function clearButton(){
    let clear = document.querySelector("#clear-screen-button");
    clear.addEventListener("click", (e)=>{
        document.getElementById("screen").innerHTML = " ";
    });
}
clearButton();
