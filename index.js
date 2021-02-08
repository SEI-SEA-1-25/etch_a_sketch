/* Constants */

/* Game Logic Variables and State */

/* DOM References */
let pixel = document.querySelector(".pixel");

console.log(pixel)

/* Functions and Game Logic*/
function mouseEnter() {
    pixel.classList.add("colored-in");
};

/* Event Listeners*/

pixel.addEventListener("mouseenter", mouseEnter);


// add event listener for all pixels on screen with a for loop

// Step 2: filling the screen with pixels
// We want a bunch of tiny little pixels that behave just like our original. Let's fill 
// the grey screen div up with them. It is totally ok if they do not fill the space perfectly,
// or if there are any awkward little gaps of grey. A hard-coded guesstimate of how many pixels 
// should fit in the box is fine!

// Tools: for loops, document.createElement, <anyDomElement>.classList.add, <anyDomElement>.append
// Step 3: making all the pixels function like our original
// Let's replicate the behavior of our original pixel for the entire bunch. Warning: if you find yourself writing several thousand addEventListeners, you are doing it wrong!

// Tools: everything from Step 1, using the event parameter and event.target inside your callback function, document.querySelectorAll
// Step 4: the clear screen button
// Attach a click listener to the Clear Screen button. When clicked, this button should reset all the pixels to white.

// Tools: document.querySelectorAll, <anyDomElement>.classList.remove
// Step 5: celebrate your success! 🍰 🎉 🎁
// Play with your new etch-a-sketch!