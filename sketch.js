let imageBgs = [];

function preload(){
  for (let i = 0; i <=3;i++){
    imageBgs[i] = loadImage(`assets/bg"_${i}.JPG`)
  }
}

function setup() {
  createCanvas(400, 400);
  console.log(imageBgs);
}

function draw() {
  background(220);
}
