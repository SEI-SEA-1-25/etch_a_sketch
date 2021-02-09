// The magic happens here!
let pixel = document.querySelector('.pixel')






const update = (event) => {
   pixel.style.backgroundColor = 'black';

}

const update2 = (event) => {
    pixel.style.backgroundColor = 'white';
}


document.querySelector('.pixel').addEventListener('DOMContentLoaded', buildGrid)
document.querySelector('.pixel').addEventListener('mouseenter', update)
document.querySelector('.pixel').addEventListener('mouseleave', update2)



var buildGrid = function(x) {
    var squareSize = (scrnwidth/x);
    $('.square').remove();
  
    for(var i = 0; i < (x*x)*(scrnheight/scrnwidth) ; i++) {
      $('#grid').append("<div class='square'></div>")
    }
  
    $('.square').width(squareSize);
    $('.square').height(squareSize);
  };