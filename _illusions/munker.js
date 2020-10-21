function setup() {
  var canvas = createCanvas(400, 400); // Keep canvas reference
  canvas.parent('sketch-div'); // Necessary to position canvas
  noStroke();
  a = color(0, 126, 255, 255);
  b = color(255, 225, 0, 255);
  c = color(255, 0, 0, 255);
  x = true;
}

function draw() {
  background(220);
  fill(a);
  rect(0, 0, 400, 200);
  fill(c);
  circle(100, 100, 150);
  circle(300, 100, 150);
  fill(b);
  rect(0, 200, 400, 200);
    for (let i = 0; i < width; i+=12) {
    rect(i, 0, 6, 200);
  }
  fill(c);
  circle(100, 300, 150);
  circle(300, 300, 150);
  fill(a);
  for (let i = 6; i < width; i+=12) {
    rect(i, 200, 6, 200);
  }
  if (!x){
    canvas.newCircles();
  }
}

function newCircles() {
  fill(c);
  circle(100, 100, 150);
  circle(300, 100, 150);
  circle(100, 300, 150);
  circle(300, 300, 150);
}

function mouseClicked() {
  if(x){
    x=false;
  }  else{
    x=true;
  }
}