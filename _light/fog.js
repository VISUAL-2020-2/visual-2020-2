
let myShader;
let fogColor = [1, 1, 1, 1];
let f=0;

function preload() {

  myShader = loadShader("assets/fog.vert", "assets/fog.frag");
  imgbase = loadImage("assets/descarga.jpg");
}

function setup() {

  var canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('sketch-div');
  
  fogAmount=f
  shader(myShader);
  myShader.setUniform("uMatcapTexture", imgbase);
  noStroke();
}

function draw() {
  background(255);
  fogAmount=f

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.005);
    
  shader(myShader);
  myShader.setUniform("u_fogColor", fogColor);
  myShader.setUniform("u_fogAmount", fogAmount);
    

  box(width / 2);
}

function mouseMoved() {
  f = mouseX*0.005;
  if (brightness > 1) {
    brightness = 1;
  }
}
