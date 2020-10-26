---
title: Grayscale Threshold
---

Here we have a gray scale filter using thresshold:

<!-- Sketch file location, (pending organization) -->
<script src="tresshold.js"></script>
<!-- Necessary element to position p5 canvas -->
<div id="sketch-div"></div>

P5.js code:

```js
image(img,0,0);
loadPixels();
for (let i = 0; i < pixels.length; i+=4) {
    let c = color(pixels[i], pixels[i + 1], pixels[i + 2])
    if (brightness(c) < tresshold) {
        pixels[i] = pixels[i + 1] = pixels[i + 2] = 0;
    } else {
        pixels[i] = pixels[i + 1] = pixels[i + 2] = 255;
    }
}
updatePixels();
```