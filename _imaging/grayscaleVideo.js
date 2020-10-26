var vid, tresshold = 50,
    capture;

function preload() {
    vid = createVideo('data/video-sample.webm', vidLoad);
    vid.hide();
}

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    textAlign(LEFT, TOP);
    fill(255);
}

function draw() {
    image(vid, 0, 0);
    filter(GRAY);
    text(frameRate().toFixed(3), 0, 0);
}

function vidLoad() {
    vid.loop();
    vid.volume(0);
}
