let vid;
var tresshold = 50, capture;

function preload() {
    vid = createVideo('data/video-sample.webm', vidLoad);
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
    image(vid, 0, 0);
}

function vidLoad(){
    vid.loop();
    vid.volume(0);
}