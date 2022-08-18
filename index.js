document.addEventListener("DOMContentLoaded", () => {
    let screen = document.querySelector("#screen")
    let clearScreen = document.querySelector("#clear-screen-button")

    let mouseHover = (e) => {
        e.target.classList.add("colored-in")
    }  

    let etchSketch = () => {
        for (let i = 0; i < 9000; i++) {
            let sketch = document.createElement("div")
            sketch.classList.add("pixel")
            sketch.addEventListener("mouseover", mouseHover)
            screen.append(sketch)
           }
    }
    etchSketch()



    clearScreen.addEventListener("click", () => {
        while(screen.firstChild) {
            screen.removeChild(screen.firstChild)
        }
        for (let i = 0; i < 9000; i++) {
            let sketch = document.createElement("div")
            sketch.classList.add("pixel")
            sketch.addEventListener("mouseover", mouseHover)
            screen.append(sketch)
    }
})
})
