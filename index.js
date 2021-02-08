console.log('hey there');


/* DOM References */
let pixel = document.querySelector('.pixel');
let clearBut = document.getElementById('clear-screen-button');
let screen = document.getElementById('screen');

/* Functions and Game Logic */

function clearFunction() {
    for (div of screen.children) {
        div.classList.remove('colored-in')
    }
}

function addPixels() {
 for (let i = 0; i < 3000; i++) {
     let allDiv = document.createElement('div');
     let allPixels = document.createElement('pixel');
     allDiv.appendChild(allPixels);
     screen.appendChild(allDiv);
    i++
 }
}

/* Event Listeners */
pixel.addEventListener('mouseenter', e => {
    console.log(e.target)
    e.target.classList.add('colored-in');
})

clearBut.addEventListener('click', clearFunction)
document.addEventListener('DOMContentLoaded', addPixels)
