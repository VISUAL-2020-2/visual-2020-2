let piramide;
let brightness=0;
let pos=1.57*1.70;
function preload() {
  piramide = loadModel('pir.obj', true);
}

function setup() {
  var canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('sketch-div');
}

function draw() {
  ambientLight(brightness);
  background(brightness);
  strokeWeight(0.1)
  rotateX(pos)
  model(piramide);
  ambientMaterial(255, 240, 0);
}

function mouseMoved() {
  brightness = mouseX*0.5;
  if (brightness > 255) {
    brightness = 255;
  }
}
function mouseDragged() {
  pos = pos - (mouseY-200)*0.0001;
}
