let vid;

function preload() {
    vid = createVideo(['data/video-sample.webm']);
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    fingers.hide();
    vid.loop();
    vid.loadPixels();
    for (let j = 0; j < 400; j++) {
        for (let i = 0; i < Math.max(Math.min(mouseX, 400), 0); i++) {
            index = 4 * ((j) * 400 + (i));
            if (brightness(color(pixels[index], pixels[index + 1], pixels[index + 2])) < tresshold) {
                pixels[index] = pixels[index + 1] = pixels[index + 2] = 0;
            } else {
                pixels[index] = pixels[index + 1] = pixels[index + 2] = 255;
            }

        }
    }
}

function draw() {
    image(vid, 0, 0); // draw the video frame to canvas
}