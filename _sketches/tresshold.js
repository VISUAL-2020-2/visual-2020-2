var tresshold = 70
var img, canvas, index;
function preload(){
    img = loadImage("data/download.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    frameRate(30);
}

function draw() {
    image(img,0,0);
    loadPixels();
    for (let i = 0; i < 400; i++) {
        for (let j = 0; j < Math.max(Math.min(mouseX, 400), 0); j++) {
            // loop over
            index = 4 * ((j) * 400 *  + (i));
            try {
                if (brightness(color(pixels[index],pixels[index + 1],pixels[index + 2])) < tresshold) {
                    pixels[index] = pixels[index + 1] = pixels[index + 2] = 0;
                } else {
                    pixels[index] = pixels[index + 1] = pixels[index + 2] = 255;
                }
            } catch (e){}

        }
    }
    console.log(Math.max(Math.min(mouseX, 400), 0))
    updatePixels();
}