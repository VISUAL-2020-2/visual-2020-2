let temp = (sketch) => {
    var img;

    sketch.preload = () => {
        img = sketch.loadImage("data/descarga.jpg");
    }

    sketch.setup = () => {
        sketch.createCanvas(400, 400);
        sketch.textAlign(sketch.LEFT, sketch.TOP);
        sketch.fill(255);
    };

    sketch.draw = () => {
        sketch.image(img, 0, 0);
        sketch.loadPixels();
        for (let j = 0; j < 400; j++) {
            for (let i = 0; i < Math.max(Math.min(sketch.mouseX, 400), 0); i++) {
                index = 4 * ((j) * 400 + (i));
                let c = gray(sketch.mode, sketch.pixels[index], sketch.pixels[index + 1], sketch.pixels[index + 2]);
                sketch.pixels[index] = c;
                sketch.pixels[index + 1] = c;
                sketch.pixels[index + 2] = c;
            }
        }
        sketch.updatePixels();

        sketch.text(sketch.frameRate().toFixed(3), 0, 0);
    };
};

function gray(m, r, g, b) {
    if (m) {
        return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 3
    } else {
        return (r + g + b) / 3;
    }
}

let avg = new p5(temp, 'avg-div');
avg.mode = false;
let luma = new p5(temp, 'luma-div');
luma.mode = true;
