var tresshold = 70
var img, canvas
function preload(){
    img = loadImage("data/download.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    image(img,0,0);
    loadPixels();
    for (let i = 0; i < pixels.length; i+=4) {
        let c = color(pixels[i], pixels[i + 1], pixels[i + 2])
        if (brightness(c) < tresshold) {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = 0;
        } else {
            pixels[i] = pixels[i + 1] = pixels[i + 2] = 255;
        }
    }
    updatePixels();
}

function draw() {
    image(img,0,0);
    loadPixels();
    let d = pixelDensity();
    console.log(d)
    for (let i = 0; i < 300; i++) {
        for (let j = 0; j < Math.max(Math.min(mouseX, 300), 0); j++) {
            // loop over
            index = 4 * ((j) * width *  + (i));
            if (brightness(color(pixels[index],pixels[index + 1],pixels[index + 2])) < tresshold) {
                pixels[index] = pixels[index + 1] = pixels[index + 2] = 0;
            } else {
                pixels[index] = pixels[index + 1] = pixels[index + 2] = 255;
            }
        }
    }
    console.log(Math.max(Math.min(mouseX, 300), 0))
    updatePixels();
}