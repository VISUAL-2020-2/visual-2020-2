var img;
function preload() {
    img = loadImage("data/descarga.jpg");
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    textAlign(LEFT, TOP);
    fill(255);
}

function draw() {
    image(img, 0, 0);
    loadPixels();
    for (let j = 0; j < 400; j++) {
        for (let i = 0; i < Math.max(Math.min(mouseX, 400), 0); i++) {
            index = 4 * ((j) * 400 + (i));
            let c = (pixels[index] + pixels[index + 1] + pixels[index + 2]) / 3; // avoid p5.Color
            pixels[index] = c;
            pixels[index + 1] = c;
            pixels[index + 2] = c;
        }
    }
    updatePixels();
    text(frameRate().toFixed(3), 0, 0); // text AFTER image
}
