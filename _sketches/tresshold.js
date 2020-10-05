var tresshold = 70
var img, canvas, index;
function preload(){
    img = loadImage("data/download.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
}

function draw() {
    image(img,0,0);
    loadPixels();
    text(frameRate(), 10, 10);
    for (let j = 0; j < 400; j++) {
        for (let i = 0; i < Math.max(Math.min(mouseX, 400), 0); i++) {
            index = 4 * ((j) * 400 + (i));
            if (brightness(color(pixels[index],pixels[index + 1],pixels[index + 2])) < tresshold) {
                pixels[index] = pixels[index + 1] = pixels[index + 2] = 0;
            } else {
                pixels[index] = pixels[index + 1] = pixels[index + 2] = 255;
            }

        }
    }
    updatePixels();
}