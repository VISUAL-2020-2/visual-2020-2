var tresshold = 70
var vid

function preload() {
    vid = createVideo(['data/video-sample.webm']);
}

function setup() {
    var canvas = createCanvas(400, 400, WEBGL);
    canvas.parent('sketch-div');
    vid.loop();
    loadPixels();
    for (let i = 0; i < pixels.length; i += 4) {
        let c = color(pixels[i], pixels[i + 1], pixels[i + 2])
        console.log(brightness(c));
        if (brightness(c) < tresshold) {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = 0;
        } else {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = 255;
        }
    }
    updatePixels();
}