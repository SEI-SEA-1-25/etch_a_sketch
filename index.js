document.addEventListener('DOMContentLoaded', () => {

  
    const makeGrid = () => {
        const screen = document.querySelector('#screen')
        for (let i = 0; i < 1011; i++){
            //make boxes
            const pixelBox = document.createElement('div')
            //set properties
            pixelBox.classList.add('pixel')
            // append box to container
         screen.append(pixelBox)
        
        }
        const pixel = document.querySelector('.pixel')
        pixel.addEventListener('mouseenter', () => {
            pixel.style.background = 'black';
            console.log(pixel)
        });
    
  }


  

  makeGrid()

})
