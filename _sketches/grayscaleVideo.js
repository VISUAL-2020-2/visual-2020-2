let vid;
var tresshold = 50

function preload() {
    vid = createVideo(['data/video-sample.webm']);
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    vid.loop();
}

function draw() {
    image(vid, 0, 0);
    vid.loadPixels();
    for (let j = 0; j < pixels.length; j++) {
        index = 4 * ((j) * pixels.length + (i));
        if (brightness(color(pixels[index], pixels[index + 1], pixels[index + 2])) < tresshold) {
            pixels[index] = pixels[index + 1] = pixels[index + 2] = 0;
        } else {
            pixels[index] = pixels[index + 1] = pixels[index + 2] = 255;
        }
    }
}