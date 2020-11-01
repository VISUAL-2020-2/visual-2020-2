var t = 0;
var mult = 1;
function setup() {
  var canvas = createCanvas(400, 400); // Keep canvas reference
  canvas.parent('sketch-div'); // Necessary to position canvas
  a = color(0, 0, 0, 255);
  b = color(200, 0,0,255);
  c = b;
  d = color(0, 0,200,255);
}

function draw() {
  background(255);
  for (let i = 40; i < height-40; i+=80) {
    for (let j = 20; j < width; j+=20) {
      stroke(c);
      strokeWeight(2)
      line(j, i, j, i+80)
      
    }
    if (c==b){
      c = d
    } else{
      c=b
    }
  }
  movingLines()
  t += mult*0.01;
  if(t > 1 || t < -1){
	mult *= -1;
  }
}

function movingLines(){
  for (let i = 40; i < height; i+=160){
    for (let j = 20; j < width; j+=20) {
      stroke(a);
      line(j, i, j-10, i+t*15)
      line(j, i, j+10, i+t*15)
      line(j, i+80, j-10, i+80-t*15)
      line(j, i+80, j+10, i+80-t*15)
    }
  }
}