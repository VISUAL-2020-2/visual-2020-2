var vid, tresshold = 50, capture;

function preload() {
    vid = createVideo('data/video-sample.webm', vidLoad);
}

function setup() {
    noCanvas();
    vid.parent('sketch-div');
}

function vidLoad(){
    vid.loop();
    vid.volume(0);
}

function draw() {
    capture = createCapture(vid);
    capture.hide();
    image(capture, 0, 0);
    filter(THRESHOLD);
}