let vid;
var tresshold = 50, capture;

function preload() {
    vid = createVideo(['data/video-sample.webm']);
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    vid.loop();
}

function draw() {
    capture = createCapture(vid);
    capture.hide();
    image(capture, 0, 0);
}