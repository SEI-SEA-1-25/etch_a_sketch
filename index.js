const pixel = document.getElementsByClassName('pixel')
const screen = document.getElementById('screen')
const container = document.getElementsByClassName("container")
const btn = document.getElementById('clear-screen-button')

const makePixel = function(){
 for (let i = 0; i <= 5588; i++) {
        // create the new DOM element
        const div = document.createElement('div')
        screen.appendChild(div).className = 'pixel'
        // append the new element
        document.querySelector('#screen').appendChild(div)
 }
}
makePixel()
const blackPixel = document.querySelector('.pixel')
blackPixel.addEventListener("mouseenter", function(){
 blackPixel.style.backgroundColor = "black";
})
    blackPixel.addEventListener("mouseleave", function(){
     blackPixel.style.backgroundColor = "gray"
 })

btn.addEventListener("click", function(e) {
    blackPixel.style.backgroundColor = ""
})


// //make the pixel turn black
// const blackPixel = document.querySelector('.pixel')
// blackPixel.addEventListener("mouseenter", function(){
// let change = blackPixel.style.backgroundColor = "black";
// })

// blackPixel.addEventListener("mouseleave", function(){
// blackPixel.style.backgroundColor = "gray"
// })

// const makePixel = function(){
//  for (let i = 0; i <= 5588; i++) {
//         // create the new DOM element
//         const div = document.createElement('div')
//         div.classList.add('pixel')
//         // append the new element
//         document.querySelector('#screen').appendChild(div)
//         // blackPixel.addEventListener("mouseleave", function(){
//         //     blackPixel.style.backgroundColor = "gray"
//         //     })
//         // const blackPixel = document.querySelector('.pixel')
//         // blackPixel.addEventListener("mouseenter", function(){
//         // blackPixel.style.backgroundColor = "black";
//     }//)
// }
 

//      // This only works on the first pixel and  I don't know why. shouldn't it apply to all of the pixel class?




// document.addEventListener("DOMContentLoaded", () =>{
// makePixel(500)
// })