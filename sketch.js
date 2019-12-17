let backgroundImage;
let bgBtn;
let backgroundButn;



function preload(){
  bg = loadImage('assets/ok.jpg');

}

function setup() {
  noCanvas();
  backgroundButn = select('#backgroundButton');
  backgroundImage = select ('#backg');
backgroundButn.style("background-color","#98FB98");



  backgroundButn.mousePressed(toggleBg);


}

function draw() {
  background(220);
}

function toggleBg(){
  backgroundImage.show();
}
