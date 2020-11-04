// p5 sketch template
function setup() {
    var canvas = createCanvas(400, 400, WEBGL); // Keep canvas reference
    canvas.parent('sketch-div'); // Necessary to position canvas
}

function draw() {
    clear();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(60);

    fill('#424242');
    noStroke();
    beginShape();
    vertex(0,   0,  0);
    vertex(0,   0,  20);
    vertex(80,  0,  20);
    vertex(80,  0,  100);
    vertex(100,  0,  100);
    vertex(100,  0,  0);
    vertex(0,   0,  0);
    endShape();

    fill('#848484');
    noStroke();
    beginShape();
    vertex(0,   0,  20);
    vertex(100,  0,  20);
    vertex(100,  20, 20);
    vertex(20,  20, 20);
    vertex(20,  100, 20);
    vertex(0,   100, 20);
    vertex(0,    0, 20);
    endShape(CLOSE);

    fill('#c6c6c6');
    noStroke();
    beginShape();
    vertex(20,  100, 20);
    vertex(20,  100,  0);
    vertex(20,   0,  0);
    vertex(20,   0, 20);
    endShape(CLOSE);

    fill('#c6c6c6');
    noStroke();
    beginShape();
    vertex(100,  20,  0);
    vertex(100,   0,  0);
    vertex(100,   0, 100);
    vertex(100,  20, 100);
    endShape(CLOSE);
}

