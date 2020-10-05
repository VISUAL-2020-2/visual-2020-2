var img
function preload(){
    img = loadImage("data/descarga.jpg");
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');

}

function draw(){
    image(img,0,0);
    loadPixels();
    for (let j = 0; j < 400; j++) {
        for (let i = 0; i < Math.max(Math.min(mouseX, 400), 0); i++) {
            index = 4 * ((j) * 400 + (i));
            let c = color((0.2126*pixels[index] + 0.0722*pixels[index + 1] +  0.7152*pixels[index + 2])/3);
            pixels[index] = red(c);
            pixels[index + 1] = green(c);
            pixels[index + 2] = blue(c);
        }
    }
    updatePixels();
}