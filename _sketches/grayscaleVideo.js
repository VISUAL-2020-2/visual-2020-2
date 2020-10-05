let vid;

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    vid = createVideo(['data/video-sample.webm']);
    vid.hide();
    vid.loop();
}

function draw() {
    image(vid, 0, 0); // draw the video frame to canvas
}