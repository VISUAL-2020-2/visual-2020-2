// p5 sketch template
function setup() {
    var canvas = createCanvas(400, 400, WEBGL); // Keep canvas reference
    canvas.parent('sketch-div'); // Necessary to position canvas

}

function draw() {
    clear();
    fill(237, 34, 93);
    strokeWeight(3);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    beginShape(QUAD_STRIP);
    vertex(0, 0, 0);
    vertex(0, 50, 0);
    vertex(50, 50, 0);
    vertex(50, 0, 0);
    vertex(50, 0, 150);
    vertex(50, 50, 150);
    vertex(0, 50, 150);
    vertex(0, 0, 150);
    endShape(CLOSE);
}

