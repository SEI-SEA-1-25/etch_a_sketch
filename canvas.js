window.addEventListener("load", function () {
  const canvas = document.querySelector("#screen");
  const ctx = canvas.getContext("2d");

  // EventListeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);

  //resize
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;


  

  // ctx.beginPath();
  // ctx.moveTo(100, 100);
  // ctx.lineTo(100, 100);
  // ctx.lineTo(100, 100);
  // ctx.closePath();
  // ctx.stroke();
  // ctx.strokeStyle = "red";
  // ctx.lineWidth = 5;
  // ctx.strokeRect(50, 200, 500, 500);

  //variables
  let painting = false;

  //functions
  function clearall() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) {
      console.log("crap!!");
    } else {
      ctx.lineWidth = 10;
      ctx.lineCap = "round";
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    }
  }
});
