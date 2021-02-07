let pixel = document.querySelector('.pixel')
let screen = document.querySelector('#screen')
let clearButton = document.querySelector('#clear-screen-button')


// changes color of pixel when mouse enters

function entering(e) {
    e.currentTarget.classList.add('colored-in');
    e.currentTarget.style.background = '';
    console.log('mouseenter');
}

// fill screen with pixels

function fillScreen() {
    // e.preventDefault();

    for (let i = 0; i < 10000; i++) {
        // let filledPixel = document.createElement('filledPixel')
        // let pixels = document.createElement('div')
        // pixels. = pixel

        // // filledPixel.classList.add('filledPixel');
        // // screen.appendChild(filledPixel);
        // filledPixel.appendchild(pixel)


        // return filledPixel;

        let div = document.createElement('div');
        div.className = "pixel";

        // div.appendChild(childPixel)
        div.addEventListener('mouseenter', entering);

        screen.appendChild(div);
    }

}

const clear = e => {

    for (div of screen.children) {
        div.classList.remove('colored-in')
    }

    // let button = document.querySelector('#clear-screen-button');
    //     button.addEventListener('click', () => {
    //         let clearScreen = document.querySelectorAll('.pixel');
    //         clearScreen.classList.remove('colored-in')
    // }

}

document.addEventListener('DOMContentLoaded', fillScreen);
document.addEventListener('click', clear);

