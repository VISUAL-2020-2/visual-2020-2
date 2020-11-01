function setup() {
  var canvas = createCanvas(400, 400); // Keep canvas reference
  canvas.parent('sketch-div'); // Necessary to position canvas
  a = color(0, 0, 0, 255);
  b = color(255, 0,0,100);
  c = a;
}

function draw() {
  background(255);
  //line(x1, y1, x2, y2)
  stroke(a);
  strokeWeight(4)
  line(100, 100, 300, 100)
  line(100, 200, 300, 200)
  line(100, 300, 300, 300)
  stroke(c);
      //Flechas 1
  line(100, 100, 135, 75)
  line(100, 100, 135, 125)
  line(300, 100, 265, 75)
  line(300, 100, 265, 125)
    //Flechas 2
  line(100, 200, 65, 175)
  line(100, 200, 65, 225)
  line(300, 200, 335, 175)
  line(300, 200, 335, 225)
    //Flechas 3
  line(100, 300, 135, 275)
  line(100, 300, 135, 325)
  line(300, 300, 335, 275)
  line(300, 300, 335, 325)
  if (mouseIsPressed) {
    c = color(0, 0,0,100);
    stroke(b);
    line(100, 100, 100, 300)
    line(300, 100, 300, 300)
  } else{
    c=a;
  }

}
