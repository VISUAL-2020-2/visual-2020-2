let vid;
var tresshold = 50, capture;

function preload() {
    vid = createVideo('data/video-sample.webm', vidLoad);
}

function setup() {
    vid.parent('sketch-div');
}

function vidLoad(){
    vid.loop();
    vid.volume(0);
}