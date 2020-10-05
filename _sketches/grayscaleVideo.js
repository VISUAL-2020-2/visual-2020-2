let vid;
var tresshold = 50, capture;

function preload() {
    vid = createVideo('data/video-sample.webm');
}

function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-div', vidLoad);
    vid.loop();
}

function vidLoad(){
    vid.loop();
    vid.volume(0);
}