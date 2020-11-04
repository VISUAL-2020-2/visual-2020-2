// p5 sketch template
function setup() {
    var canvas = createCanvas(400, 400); // Keep canvas reference
    canvas.parent('sketch-div'); // Necessary to position canvas
}

function draw() {
    beginShape();
    vertex(0, 0, 0);
    vertex(0, 0, 50);
    vertex(0, 50, 50);
    vertex(0, 50, 0);
    vertex(200, 0, 0);
    vertex(200, 0, 50);
    vertex(200, 50, 50);
    vertex(200, 50, 0);
    endShape();
}

