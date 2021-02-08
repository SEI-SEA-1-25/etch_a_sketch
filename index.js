/* Constants */


/* Game Logic Variables and State */


/* DOM References */
let buttonEl = document.querySelector('#clear-screen-button')
let screenEl = document.querySelector('#screen')


/* Functions and Game Logic */

const initialize = event => {
      for(let i = 0; i < 4897; i++) {
            let pixelDiv = fillScreen()
            screenEl.appendChild(pixelDiv);
      }
}

const colorChange = event => {
      event.target.classList.add('colored-in');
}

const fillScreen = event => {
            let newPixel = document.createElement('div');
            newPixel.classList.add('pixel');
            newPixel.addEventListener('mouseenter', colorChange)
            return newPixel;
            // let pixelDivEl = document.querySelectorAll('.pixel')
            // for(let i = 0; i < 4897; i++) {
                  //       pixelDivEl.classList.add('colored-in')
                  // }
}

const clearScreen = () => {
      for(const div of screenEl.children) {
            div.classList.remove('colored-in')
      }
}
            
            
            
            
/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize);
buttonEl.addEventListener('click', clearScreen)