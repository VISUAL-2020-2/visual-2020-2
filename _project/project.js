// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'data/model/';

// Video
let video;
let flippedVideo;
// To store the classification
let label = "";
let img;
// Load the model first
function preload() {
  img = loadImage("0101.jpeg");
  classifier = ml5.imageClassifier(imageModelURL+'model.json');
}

function setup() {
  var canvas = createCanvas(400, 700);
  canvas.parent('sketch-div');
  img.resize(400, 400);
  flippedVideo = ml5.flipImage(img);
  // Start classifying
  classifyVideo();
  var input = createFileInput(handleFile);
  input.parent('histogram-div');
}

function draw() {
  background(0);
  // Draw the video
  image(img, 0, 0);
  img.resize(400, 400);
  // Draw the label
  fill(255,0,0);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
}

function classifyVideo() {
  flippedVideo = ml5.flipImage(img)
  classifier.classify(flippedVideo, gotResult);
  flippedVideo.remove();
}

function gotResult(error, results) {
  console.log(results);
  if (error) {
    console.error(error);
    return;
  }
  label = results[0].label;
}

function handleFile(file) {
  if (file.type === 'image') {
    img = loadImage(file.data);
    img.resize(400, 400);
    classifyVideo();
  } else {
    alert('The file selected is not an image');
  }
}

function drawHistogram() {

}
