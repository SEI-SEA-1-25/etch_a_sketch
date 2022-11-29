// The magic happens here!

const pixel = document.querySelector('.pixel')
const screen = document.querySelector('#screen')
const clearButton = document.querySelector('#clear-screen-button')


pixel.addEventListener('mouseenter', (e) => {
    e.target.classList.add('colored-in')
})




for (let i = 0; i < 10000; i++) {
    const newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    newPixel.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
         })
         screen.append(newPixel)}

clearButton.addEventListener('click', ()=> {
    const allPixel = document.querySelectorAll('.pixel')
    allPixel.forEach(pixels => {
        pixels.classList.remove('colored-in')
    })
})