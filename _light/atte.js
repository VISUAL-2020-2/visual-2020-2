let piramide;
let pos=1.57*1.70;
let zPositionValue=0
function preload() {
  piramide = loadModel('assets/pir.obj', true);
}

function setup() {
  var canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('sketch-div');
}

function draw() {
  background(0);
  
  xPositionValue = (mouseX - width / 2)*2;
  yPositionValue = (mouseY - height / 2)*2;
  noStroke()
  ambientLight(0)
  lightFalloff(1, 0.01,0);
  pointLight(255, 255, 255, xPositionValue, yPositionValue,zPositionValue);
  rotateX(pos)
  specularMaterial(255, 255, 0)
  model(piramide)
}


function keyPressed() {
  if (keyCode === 98) {
    if (zPositionValue >= 1000){
      zPositionValue = zPositionValue;
    } else{
      zPositionValue = zPositionValue + 100;
    }
  } else if (keyCode === 104) {
    if (zPositionValue <= 0){
      zPositionValue = zPositionValue;
    } else{
      zPositionValue = zPositionValue - 100;
    }
  }
}