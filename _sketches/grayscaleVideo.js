let vid;

function setup() {
    createCanvas(400, 400);
    // specify multiple formats for different browsers
    vid = createVideo(['data/video-sample.webm']);
    vid.hide(); // by default video shows up in separate dom
    vid.loop();
    // element. hide it and draw it to the canvas
    // instead
}

function draw() {
    background(150);
    image(div, 10, 10); // draw the video frame to canvas
}