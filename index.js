let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')

let thepixel = document.getElementsByClassName('.pixel')
const btn = document.getElementById('clear-screen-button')


// blackPixel.addEventListener("mouseenter", function(){
//     const blackPixel = document.querySelector('.pixel')
//  blackPixel.style.backgroundColor = "black";
// })
//     blackPixel.addEventListener("mouseleave", function(){
//      blackPixel.style.backgroundColor = "gray"
//  })
pixel.addEventListener('mouseenter', function(e){
    pixel.classList.add('colored-in')
})

for (let i = 0; i < 7423; i++){
    let div = document.createElement('div')
    div.classList.add('pixel')
    div.addEventListener('mouseenter', function(e){
        e.target.classList.add('colored-in')
       
    })
    screen.append(div)
}

btn.addEventListener("click", function(e){
    let everyPixel = document.querySelectorAll('.pixel')
    for (let i = 0; everyPixel.length; i++){
        everyPixel[i].classList.remove('colored-in')
    }
})

// btn.addEventListener("click", function(e) {
//     pixel.style.backgroundColor = ""
// })


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