var vid, tresshold = 50, capture;

function preload() {
    vid = createVideo('data/video-sample.webm', vidLoad);
    vid.hide();
}

function setup() {
    createCanvas(400, 400)
    vid.parent('sketch-div');
}

function draw(){
    image(vid, 0, 0);
    filter(THRESHOLD);
}

function vidLoad(){
    vid.loop();
    vid.volume(0);
}