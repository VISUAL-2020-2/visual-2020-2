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
    let newx = mouseX - 200;
    let newy = mouseY - 200;

    console.log("X: "+ (newx * 0.005));
    console.log("Y: "+ (newy * 0.005));
    clear();
    if(newx*newx > 50000 || newy*newy > 50000){
        rotateX(0.5425);
        rotateY(-0.802833251953125);
    } else {
        rotateX(newx * 0.005);
        rotateY(newy * 0.005);
    }
    rotateZ(0);
    noStroke();
    drawBottom();
    drawLeft();
    drawRight();
}

function drawBottom(){
    //Cara derecha
    fill(medio);
    beginShape();
    vertex(100,  0,   0);
    vertex(100,  0,   20);
    vertex(100,  20,  20);
    vertex(100,  20,  0);
    endShape(CLOSE);

    //Cara inferior
    fill(oscuro);
    beginShape();
    vertex(0,    20,   0);
    vertex(0,    20,   20);
    vertex(100,  20,   20);
    vertex(100,  20,   0);
    endShape(CLOSE);

    //Cara frontal
    fill(claro);
    beginShape();
    vertex(0,    0,  20);
    vertex(0,   20,  20);
    vertex(100, 20,  20);
    vertex(100,  0,  20);
    endShape(CLOSE);

}

function drawLeft(){
    //Cara derecha
    fill(medio);
    beginShape();
    vertex(20,  0,   0);
    vertex(20,  0,   20);
    vertex(20,  -120,  30);
    vertex(20,  -120,  0);
    endShape(CLOSE);

    //Cara frontal
    fill(claro);
    beginShape();
    vertex(0,    0,  20);
    vertex(-10,   -120,  30);
    vertex(20,   -120,  30);
    vertex(20,   0,  20);
    endShape(CLOSE);

}

function drawRight(){
    //Cara derecha
    fill(medio);
    beginShape();
    vertex(100,  0,   0);
    vertex(100,  0,   100);
    vertex(100,  20,  100);
    vertex(100,  20,  0);
    endShape(CLOSE);

    //Cara inferior
    fill(oscuro);
    beginShape();
    vertex(80,   20,   0);
    vertex(90,   20,   75);
    vertex(100,  20,   85);
    vertex(100,  20,   0);
    endShape(CLOSE);

}