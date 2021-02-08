// The magic happens here!


let container = document.getElementsByClassName('pixel')
let pixel = document.querySelector('#screen')
let button = document.querySelector('#clear-screen-button')
console.log(container)

button.addEventListener('click', clearScreen)
// Add event listner

pixel.addEventListener('mouseover', function (e){
    // e.target.classList.remove('.pixel')
    e.target.classList.add('colored-in')
})



// pixel.style.background = 'blue'
// create div and appendchild divs to the screen
for (let i = 0; i < 8703; i++) {
    let div = document.createElement("div")
    div.classList = 'pixel'
    pixel.appendChild(div)
    
}

// clear screen function that changes the class name to pixel
function clearScreen(){
    console.log('clear')
    //container.classList.remove('colored-in')
    let children = pixel.children
    console.log(children)
    for(let i = 0; i < children.length; i++){
        let removeChildren = children[i]
        removeChildren.classList.remove('colored-in')
        
    }
}