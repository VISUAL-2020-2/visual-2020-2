var tresshold = 127
var img
function preload(){
    img = loadImage("data/download.jpg");
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    image(img,0,0);
    loadPixels();
    for (let i = 0; i < pixels.length; i+=4) {
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