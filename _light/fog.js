let myShader;
let fogColor = [1, 1, 1, 1];
function preload() {

  myShader = loadShader("fog.vert", "fog.frag");
  imgbase = loadImage("descarga.jpg");
}

function setup() {

  var canvas = createCanvas(400, 400, WEBGL);
  canvas.parent('sketch-div');
  
  slide = createSlider(0, 1, 0, 0.01); 
  slide.position(20, 40);
  fogAmount=slide.value()
  shader(myShader);
  myShader.setUniform("uMatcapTexture", imgbase);
  noStroke();
}

function draw() {
  background(255);
  fogAmount=slide.value()

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.005);
    
  shader(myShader);
  myShader.setUniform("u_fogColor", fogColor);
  myShader.setUniform("u_fogAmount", fogAmount);
    

  box(width / 2);
}

