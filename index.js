/*

            MY  ATTEMPT

*/
// The magic happens here!
/*
const screen = document.getElementById('screen')

// creating pixel screen START
const createPixelScreen = () => {
    // finding a way to draw
                /* not necessary
                const draw = (fill) => {
                    //console.log(fill.target.style.backgroundColor)
                    const ink = (fill.target.style.backgroundColor)
                    const newPixel = document.createElement('div') // create
                    newPixel.classList.add('colored-in') //set
                    newPixel.style.backgroundColor = ink
                    document.querySelector('#screen').append(newPixel) //append
                } */
    
    // adding pixels to make a screen
     /*for (let i = 0; i < 6666; i++) { //6666 xtra comment here ---
        // create
        const pixel = document.createElement('div')
        // set
        pixel.classList.add('pixel')
        //append
        document.querySelector('#screen').append(pixel)
        pixel.addEventListener('mouseover', (e) => {
            // console.log(e.target.style.backgroundColor)
            pixel.style.backgroundColor = 'black'
            // screen.appendChild(pixel)
        })
        // clear the screen
        const clear = document.getElementById('clear-screen-button')
        clear.addEventListener('click', (e) => {
            // Element.style.cursor = 'wait'
            // const message = document.getElementById('message')
            // message.innerText = 'please wait'
            for (let i = 0; i < 6666; i++) {
                pixel.style.backgroundColor = 'white'
            }
            // Element.style.cursor = 'auto'
            // message.innerText = 'Clear screen'
        })
    }
}
createPixelScreen()
*/
// creating pixel screen END

/*

        MY ATTEMPT END

*/


/*

            CODE WITH GABE

*/


let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')

let clearButton = document.querySelector('#clear-screen-button')
// i did not assign variable to pixel and clear button


//draw
pixel.addEventListener('mouseenter', () => {
    pixel.classList.add('colored-in')
})
// simplest solution -- gets the first block colored in


// i used a function to create screen
for (let i = 0; i < 7474; i++) {
    //create
    let newPixel = document.createElement('div')
    //set
    newPixel.classList.add('pixel')

    //add mouseenter function
    newPixel.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
    })


    //append
    screen.append(newPixel)
}




//start & stop function
let addColorClass = (el) => {
    el.classList.add('colored-in')
}

let addDrawingCapability = () => {
    let everyPixel = document.querySelectorAll('pixel')
    everyPixel.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('colored-in')
        })
    })
}

let startDrawing = () => {
    pixel.classList.add('colored-in')
}

let removeDrawingCapability = () => {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.removeEventListener('mouseenter', addDrawingCapability)
    })
}


// clear function
let clearFunction = function() {
    let everyPixel = document.querySelectorAll('.pixel')  //OPTIMAL SOLUTION
    everyPixel.forEach(pixel => {
        pixel.classList.remove('colored-in')
    })
}

clearButton.addEventListener('click', clearFunction) // faster
startButton.addEventListener('click', addDrawingCapability)
stopButton.addEventListener('click', removeDrawingCapability)

const startButton = document.getElementById('start')
const stopButton = document.getElementById('stop')