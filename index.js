console.log("I'm linked")

//State Variables
let pixelCount = 17249
let coloredPixel = null;
//DOM References
let screenEl = document.querySelector('#screen');
let buttonEl = document.getElementById("clear-screen-button")

//Event Listeners
document.addEventListener("DOMContentLoaded", pixelRepeater(addPixels, pixelCount));
buttonEl.addEventListener('click', clearScreen)

// Game Functions

function pixelRepeater (addPixels, pixelCount, event) {
    
    // let singlePixelEl = document.querySelector('pixel')
    // singlePixelEl.addEventListener('mouseenter', event => {
    //     event.currentTarget.classlist.add('colored-in')
    // })

    for(let i = 0; i < pixelCount; i++){
        addPixels ();
        let pixelEl = document.querySelectorAll('.pixel');
        pixelEl[i].addEventListener('mouseenter', event => {
            event.currentTarget.classList.add('colored-in')
            event.currentTarget.setAttribute('id','user-colored-in')
            coloredPixel++

        

            // resetBoard (coloredPixel)
            // clearScreen(coloredPixel)
            console.log(coloredPixel)
        })
        
    }
}



function addPixels() {
    pixelAdder = document.createElement('div')
    pixelAdder.classList.add('pixel')
    screenEl.append(pixelAdder)
    
}

// function resetBoard (coloredPixel){
//     clearScreen(coloredPixel)
//     console.log(coloredPixel)
// }


function clearScreen () {
    for(let i = 0; i < pixelCount; i++) {
        let pixelEl = document.querySelectorAll('#user-colored-in')
        pixelEl[i].classList.remove('colored-in')
        // console.log("button is working!")
    }
}



