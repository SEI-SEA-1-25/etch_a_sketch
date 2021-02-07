console.log("hello");

// Variables
const container = document.getElementById("container");

const clrButton = document.getElementById("clrscreen");
const pixel = document.getElementById("pixel");

function startState() {
  createGrid(1600);

  container.style.backgroundColor = "grey";
}

clrButton.addEventListener("click", startState);

// grid creater
createGrid = (number) => {
  for (let i = 0; i < number; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = "grey";
    // div.style.border = "white solid .01px";
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.margin = "none";
    div.setAttribute("class", "pixel");
    // div.addEventListener("mousedown", cb);
    container.append(div);
    const pixel = document.querySelectorAll(".pixel");
    // console.log(container);

    for (let i = 0; i <= pixel.length; i++) {
      if (pixel[i] == undefined) {
        // console.log(pixel[i]);
      } else {
        pixel[i].addEventListener("mouseenter", changeColor);
        // console.log(pixel[i]);
      }
    }
  }
};

createGrid(3000);

function changeColor(e) {
  // console.log(e.target, "test");
  e.target.style.backgroundColor = "rgb(105, 104, 104)";
}
