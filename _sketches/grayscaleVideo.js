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
    loadPixels();
    noStroke();
    for (let j = 0; j < pixels.length; j+=4) {
        if (brightness(color(pixels[i], pixels[i + 1], pixels[i + 2])) < tresshold) {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = 0;
        } else {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = 255;
        }
    }
    updatePixels();
}