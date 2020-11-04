// p5 sketch template
function setup() {
    var canvas = createCanvas(400, 400); // Keep canvas reference
    canvas.parent('sketch-div'); // Necessary to position canvas
}

function draw() {
    beginShape();
    vertex(0, 0, 0);
    vertex(0, 0, 10);
    vertex(0, 10, 10);
    vertex(0, 10, 0);
    vertex(100, 0, 0);
    vertex(100, 0, 10);
    vertex(100, 10, 10);
    vertex(100, 10, 0);
    endShape();
}

