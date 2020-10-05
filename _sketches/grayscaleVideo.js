let vid;

function preload() {
    vid = createVideo(['data/video-sample.webm']);
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    vid.loop();
}

function draw() {
    image(vid, 0, 0); // draw the video frame to canvas
}