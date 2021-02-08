// The magic happens here!


//add listener to click on container
// add black 'pixel' based on coordinates


let screenEl = document.querySelector("#screen")
let buttonEl = document.querySelector("#clear-screen-button")

const size = 5606

for(i=0;i<size;i++){
    let pixel = document.createElement("div")
    pixel.className = "pixel"
    pixel.id = "pixel" + i
    pixel.addEventListener("mouseenter",colorPixel)
    screenEl.appendChild(pixel)
}

let target_pixel
function colorPixel(event){
    let pixel_id = event.target.id
    console.log(pixel_id)
    target_pixel = document.getElementById(pixel_id)
    console.log(target_pixel)
    target_pixel.classList.add("colored-in")
    console.log(event)
}


function clearScreen(){
for(i=0;i<size;i++){
    let id = "pixel" + i
    target_pixel = document.getElementById(id)
    target_pixel.classList.remove("colored-in")
}
}
buttonEl.addEventListener("click",clearScreen)