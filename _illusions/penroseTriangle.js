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

    fill('#424242');
    beginShape();
    vertex(0,   0,  0);
    vertex(0,   0,  10);
    vertex(40,  0,  10);
    vertex(40,  0,  50);
    vertex(50,  0,  50);
    vertex(50,  0,  0);
    vertex(0,   0,  0);
    endShape(CLOSE);

    fill('#848484');
    beginShape();
    vertex(0,   0,  10);
    vertex(50,  0,  10);
    vertex(50,  10, 10);
    vertex(10,  10, 10);
    vertex(10,  50, 10);
    vertex(0,   50, 10);
    vertex(0,    0, 10);
    endShape(CLOSE);

    fill('#c6c6c6');
    beginShape();
    vertex(10,  50, 10);
    vertex(10,  50,  0);
    vertex(10,   0,  0);
    vertex(10,   0, 10);
    endShape(CLOSE);

    fill('#c6c6c6');
    beginShape();
    vertex(50,  10,  0);
    vertex(50,   0,  0);
    vertex(50,   0, 50);
    vertex(50,  10, 50);
    endShape(CLOSE);
}

