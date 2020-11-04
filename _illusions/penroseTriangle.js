// p5 sketch template
function setup() {
    var canvas = createCanvas(400, 400, WEBGL); // Keep canvas reference
    canvas.parent('sketch-div'); // Necessary to position canvas

}

function draw() {
    clear();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    beginShape(TESS);
    fill('#424242');
    strokeWeight(3);
    // X Y Z
    vertex(0,   0,  0);
    vertex(0,   0,  10);
    vertex(40,  0,  10);
    vertex(40,  0,  50);
    vertex(50,  0,  50);
    vertex(50,  0,  0);
    vertex(0,   0,  0);
    endShape();
}

