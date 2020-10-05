let vid;
var tresshold = 50, capture;

function preload() {
    vid = createVideo('data/video-sample.webm', vidLoad);
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div');
}

function vidLoad(){
    vid.loop();
    vid.volume(0);
}