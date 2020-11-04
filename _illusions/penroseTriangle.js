// p5 sketch template
function setup() {
    var canvas = createCanvas(400, 400, WEBGL); // Keep canvas reference
    canvas.parent('sketch-div'); // Necessary to position canvas

}

function draw() {
    clear();
    normalMaterial(QUAD_STRIP);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    beginShape();
    vertex(0, 0, 0);
    vertex(0, 10, 0);
    vertex(10, 10, 0);
    vertex(10, 0, 0);
    vertex(0, 0, 30);
    vertex(0, 10, 30);
    vertex(10, 10, 30);
    vertex(10, 0, 30);
    endShape(CLOSE);
}

