// The magic happens here!

const pixel = document.querySelector('.pixel')
const screen = document.querySelector('#screen')
const clearButton = document.querySelector('#clear-screen-button')


pixel.addEventListener('mouseenter', (e) => {
    e.target.classList.add('colored-in')
})



for (let i = 0; i < 7990; i++) {
    const newPix = document.createElement('div')
    newPix.classList.add('pixel')
    newPix.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
         })
         screen.appendChild(newPix)}

clearButton.addEventListener('click', ()=> {
    const allPixel = document.querySelectorAll('.pixel')
    allPixel.forEach(pixels => {
        pixels.classList.remove('colored-in')
    })
})