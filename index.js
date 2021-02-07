
/* DOM References */
let container = document.querySelector('.container')
let pixel = document.querySelector('.pixel')
/* Functions and Game Logic */

// changes color of pixel when mouse enters
pixel.addEventListener('mouseenter', entering);

function entering(e) {
    pixel.classList.add('colored-in');
    e.currentTarget.style.background = '';
    console.log('mouseenter');
}

/* Event Listeners */
// document.addEventListener('DOMContentLoaded', start);
// document.addEventListener('clear-screen-button', clear);

