// p5 sketch template
function setup() {
    var canvas = createCanvas(400, 400); // Keep canvas reference
    canvas.parent('sketch-div'); // Necessary to position canvas
    background(200);
    beginShape();
    fill(237, 34, 93);
    vertex(0, 0, 0);
    vertex(0, 0, 100);
    vertex(0, 100, 100);
    vertex(0, 100, 0);
    endShape(CLOSE);
    beginShape();
    vertex(300, 0, 0);
    vertex(300, 0, 100);
    vertex(300, 100, 100);
    vertex(300, 100, 0);
    endShape(CLOSE);
}

function draw() {
    rotateX(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
}

