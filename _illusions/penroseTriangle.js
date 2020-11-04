// p5 sketch template

let claro = '#c6c6c6';
let medio = '#848484';
let oscuro = '#424242';
let rosa = '#ffafaf';
let azul = '#afc0ff';
let amarillo = '#fff4af';

function setup() {
    var canvas = createCanvas(400, 400, WEBGL); // Keep canvas reference
    canvas.parent('sketch-div'); // Necessary to position canvas
}

function draw() {
    console.log("X: "+ (mouseX * 0.005));
    console.log("Y: "+ (mouseY * 0.005));
    clear();
    rotateX(mouseX * 0.005);
    rotateY(mouseY * 0.005);
    rotateZ(0);
    noStroke();
    drawBottom();
}

function drawBottom(){
    //Cara izquierda
    fill(azul);
    beginShape();
    vertex(0,  0,   0);
    vertex(0,  0,   20);
    vertex(0,  20,  20);
    vertex(0,  20,  0);
    endShape(CLOSE)

    //Cara derecha
    fill(medio);
    beginShape();
    vertex(100,  0,   0);
    vertex(100,  0,   20);
    vertex(100,  20,  20);
    vertex(100,  20,  0);
    endShape(CLOSE)

    //Cara inferior
    fill(oscuro);
    beginShape();
    vertex(0,    0,   0);
    vertex(0,    0,   20);
    vertex(100,  0,   20);
    vertex(100,  0,   0);
    endShape(CLOSE)

    //Cara frontal
    fill(rosa);
    beginShape();
    vertex(0,    0,  20);
    vertex(0,   20,  20);
    vertex(100, 20,  20);
    vertex(100,  0,  20);
    endShape(CLOSE)

    //Cara superior
    fill(amarillo);
    beginShape();
    vertex(0,    20,   0);
    vertex(0,    20,   20);
    vertex(100,  20,   20);
    vertex(100,  20,   0);
    endShape(CLOSE)

    //Cara posterior
    fill(claro);
    beginShape();
    vertex(0,    0,  0);
    vertex(0,   20,  0);
    vertex(100, 20,  0);
    vertex(100,  0,  0);
    endShape(CLOSE)

}

function drawRight(){
    //Cara izquierda
    fill(claro);
    beginShape();
    vertex(20,  0,   0);
    vertex(20,  0,   20);
    vertex(20,  100,  20);
    vertex(20,  100,  0);
    endShape(CLOSE)
}