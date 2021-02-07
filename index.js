var screen = document.querySelector("#screen")
var clearBtn = document.getElementById("clear-screen-button")
const NUM = 5417;

for (let i=0; i < NUM; i++) {
    let pixelContainer = document.createElement("div")
    pixelContainer.classList.add("pixel")
    screen.appendChild(pixelContainer)
}
var pixel = document.querySelectorAll(".pixel")
for (let i=0; i <= NUM; i++) {
    pixel[i].addEventListener('mouseenter', (event) => {
        event.target.classList.add("colored-in")
        console.log(event.target);
    })
}
clearBtn.addEventListener('click', () => {
    for (let i=0; i <= NUM; i++) {
        var pixel = document.querySelectorAll(".pixel")
        pixel[i].classList.remove("colored-in")
    }
    
})