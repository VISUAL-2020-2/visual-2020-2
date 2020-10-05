function preload() {
  img = loadImage("data/conv2.jpg");
}


function setup() {
  var canvas = createCanvas(400, 400);
  canvas.parent('sketch-div');
}

function draw() {
  image(img, 0, 0);
}
