let vid;

function setup() {
    createCanvas(400, 400);
    // specify multiple formats for different browsers
    fingers = createVideo(['data/video-sample.webm']);
    fingers.hide(); // by default video shows up in separate dom
    fingers.loop();
    // element. hide it and draw it to the canvas
    // instead
}

function draw() {
    background(150);
    image(fingers, 10, 10); // draw the video frame to canvas
}