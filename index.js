// Seecting the DOM
let screen = document.querySelector("#screen");
let pixel = document.querySelector("#onepix");






// EventListeners

//Change bg color of one pixel
pixel.addEventListener("mouseenter", ()=> {
    pixel.classList.add("colored-in");

    //Create a new div dynamically
    var newDiv = document.createElement("div");
    
    //Add ID of 'onepix' and a CLASS of 'pixel'
    newDiv.setAttribute("class", "pixel");

    //Append div to 'screen' div.
    screen.append(newDiv);
    console.log(newDiv);
    
    for (var i = 0; i < screen.length; i++){
        
    }
});








//Functions
