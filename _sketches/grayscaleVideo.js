var vid, tresshold = 50,
    capture;

function preload() {
    vid = createVideo('data/video-sample.webm', vidLoad);
    vid.hide();
}

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch-div');
}

function draw() {
    image(vid, 0, 0);
    filter(GRAY);
    textSize(16);
    text("Frame Rate= " + frameRate().toFixed(3), 100, 30);
    text("Frame Count = " + frameCount, 100, 70);
    text("Delta time between previous and current frame = ", deltaTime.toFixed(3), 100, 110);
}

function vidLoad() {
    vid.loop();
    vid.volume(0);
}