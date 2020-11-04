function setup() {
    let canvas = createCanvas(400, 1000);
    canvas.parent('data-div');
}

function draw() {
    textSize(16);
    text("Frame Rate= " + frameRate().toFixed(3), 100, 30);
    text("Frame Count = " + frameCount, 100, 70);
    text("Delta time between previous and current frame = ", deltaTime.toFixed(3), 100, 110);
}