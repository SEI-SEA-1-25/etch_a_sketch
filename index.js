
/* DOM References */
let container = document.querySelector('.container')
let pixel = document.querySelector('.pixel')
let screen = document.querySelector('#screen')
/* Functions and Game Logic */

// changes color of pixel when mouse enters
pixel.addEventListener('mouseenter', entering);

function entering(e) {
    pixel.classList.add('colored-in');
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
        let childPixel = document.createElement('pixel');
        div.appendChild(childPixel)

        screen.append(div)

    }

}


/* Event Listeners */
document.addEventListener('DOMContentLoaded', fillScreen);
// document.addEventListener('clear-screen-button', clear);

