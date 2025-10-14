var apple=0;
var orange=255;

//The setup function only happens once
function setup() {
	createCanvas(700, 700); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(126,72,137); //an RGB color for the canvas' background
  //circle
  stroke(73,97,35); // an RGB color for the circle's border
  fill(67,94,35,255); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(700/2,700/2,680,680); // center of canvas, 20px dia
  //the left eye
  stroke(188,28,28); // an RGB color for the circle's border
  fill(155,23,17,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(350/2,600/2,200,40); // center of canvas, 20px dia
  //left eye pupil background
  fill(56,44,67,150);
  ellipse(350/2,600/2,40,40);
  //left eye pupil
  stroke(33,28,17); // an RGB color for the circle's border
  fill(mouseX,44,67,mouseY); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(350/2,600/2,40,40); 
//face cut
  fill(126,72,137);
  stroke(126,72,137);
  triangle(1000,mouseX,800,150,350,450);
}