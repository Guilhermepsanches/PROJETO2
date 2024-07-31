function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);
}
function setup() {
  createCanvas(800, 5000);
  background("rgb(241,102,232)");
}
function draw(){
  fill("rgb(123,38,155)");
  stroke ("lightblue");
  if(mouseIsPressed)
    rect (mouseX,mouseY,30,50);
  
}

let cor;
let vertical;
let horizontal;

function setup(){
  createCanvas(1000, 800);
  background("white");
  cor=color(random(0,255),random(0,255),random(0,255));
  vertical= 400;
  horizontal= 500;
}

function draw() {
  circle(horizontal,vertical,100);
  fill(cor)
  
  if (mouseX < horizontal){
    horizontal--
  }
  if (mouseX > horizontal){
    horizontal++
  }
  if (mouseY < vertical){
    vertical--
  }
  if (mouseY > vertical){
    vertical++
  }
  if (mouseIsPressed){
    cor = color(random(0, 255),random(0, 255),random(0, 255));
  }
}
