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
    screen.addEventListener('mouseover', (e)=>{
        newDiv = document.createElement("div");
        newDiv.setAttribute("class", "pixel");
        newDiv.classList.add("colored-in")
        screen.append(newDiv);
        // newDiv.addEventListener('mouseover', (e)=>{
        //     newDiv = document.createElement("div");
        //     newDiv.setAttribute("class", "pixel");
        //     screen.append(newDiv);
        //     newDiv.classList.add("colored-in")
        //     console.log(e.target);
        // })
    });
}
mouseEv();
// console.log(mouseEv())
