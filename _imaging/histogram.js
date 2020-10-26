// Grayscale Histogram Segmentation

// Juan Camilo Vargas Q. // github.com/jcvar
// 2020-10-03

// Image references
var img;
var img_edit;

// Histogram array
var histogram;
var themax; // Histogram max value for scaling

// Histogram attributes
var histoW = 600;
const histoH = 100;
var bar;
var imgw;
var imgh;

// Mouse control
var pressed = 0;
var released = 0;
var start = 0;
var end = 256;
var mouseFlag = false;

function preload() {
    img = loadImage("bw_manhattan.jpg");
}

function setup() {
    var canvas = createCanvas(histoW, histoW + histoH);
    canvas.parent('sketch-div');
    var input = createFileInput(handleFile);
    input.parent('histogram-div');

    img_setup(img); // loadImage callback
    drawHisto();
    noLoop();
}

function draw() { };

function img_setup(imgin) {
    histogram = new Array(256).fill(0); // Reset histogram
    imgin.loadPixels();
    for (let i = 0; i < imgin.pixels.length; i += 4) {
        let val = lumavalue(0, imgin.pixels[i], imgin.pixels[i + 1], imgin.pixels[i + 2]);
        imgin.pixels[i] = val;
        imgin.pixels[i + 1] = val;
        imgin.pixels[i + 2] = val;
        histogram[val] = histogram[val] + 1;
    }
    imgin.updatePixels();
    themax = max(histogram);

    imgw = imgin.width / 2;
    imgh = imgin.height / 2;
    histoW = imgw;
    bar = histoW / 256.0;

    img_edit = createImage(imgin.width, imgin.height);
    resizeCanvas(imgw, imgh + histoH);
    drawHisto();
    image(imgin, 0, histoH, imgw, imgh);
}

function drawHisto() {
    noStroke();
    fill(0);
    rect(0, 0, histoW, histoH);

    start = map(min(pressed, released), 0, histoW, 0, histogram.length);
    end = map(max(pressed, released), 0, histoW, 0, histogram.length);

    for (let i = 0; i < histogram.length; i++) {
        fill(i > start && i <= end ? [255, 0, 0] : 127);
        rect(i * bar, histoH, bar, -histogram[i] * histoH / themax);
    }
    stroke(255, 0, 0);
    line(pressed, 0, pressed, 100);
    line(released, 0, released, 100);
}

function drawHighlight() {
    img_edit.loadPixels();
    for (let i = 0; i < img_edit.pixels.length; i += 4) {
        let chck = lumavalue(0, img.pixels[i], img.pixels[i + 1], img.pixels[i + 2]);
        if (chck > start && chck < end) {
            img_edit.pixels[i] = 255;
            img_edit.pixels[i + 1] = 0;
            img_edit.pixels[i + 2] = 0;
        } else {
            img_edit.pixels[i] = img.pixels[i];
            img_edit.pixels[i + 1] = img.pixels[i + 1];
            img_edit.pixels[i + 2] = img.pixels[i + 2];
        }
        img_edit.pixels[i + 3] = img.pixels[i + 3]
    }
    img_edit.updatePixels();
    image(img_edit, 0, histoH, imgw, imgh);
}

function lumavalue(y, r, g, b) {
    let l;
    if (y == 709) {
        l = (0.2126 * r + 0.7152 * g + 0.0722 * b);
    } else if (y == 601) {
        l = (0.2989 * r + 0.5870 * g + 0.1140 * b);
    } else {
        l = ((r + g + b) / 3);
    }
    return l;
}

// File input callback
function handleFile(file) {
    if (file.type === 'image') {
        img = loadImage(file.data, img_setup);
    } else {
        alert('The file selected is not an image');
    }
}
// MOUSE CONTROL FUNCTIONS
function mousePressed() {
    if (mouseY > 0 && mouseY < 100) {
        pressed = mouseX;
        released = mouseX;
        mouseFlag = true;
        drawHisto();
    } else {
        mouseFlag = false;
        image(img, 0, histoH, imgw, imgh);
    }
}
function mouseDragged() {
    if (mouseFlag) {
        released = mouseX;
        drawHisto();
    }
}
function mouseReleased() {
    if (mouseFlag) {
        mouseFlag = false;
        drawHisto();
        drawHighlight();
    }
}
