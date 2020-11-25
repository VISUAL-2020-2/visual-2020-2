let piramide;
let pos=1.57*1.70;
function preload() {
  piramide = loadModel('assets/pir.obj', true);
}

function setup() {
  var canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('sketch-div');
  zPosSlider = createSlider(-200, 0, 0, 0.1); 
  zPosSlider.position(20, 40);
}

function draw() {
  background(0);
  
  xPositionValue = (mouseX - width / 2)*2;
  yPositionValue = (mouseY - height / 2)*2;
  noStroke()
  zPositionValue = zPosSlider.value()
  ambientLight(0)
  lightFalloff(1, 0.01,0);
  pointLight(255, 255, 255, xPositionValue, yPositionValue, -zPositionValue);
  rotateX(pos)
  specularMaterial(255, 255, 0)
  model(piramide)
}
