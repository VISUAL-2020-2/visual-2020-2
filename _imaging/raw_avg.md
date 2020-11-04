---
title: Grayscale RAW Average
---

Here we have a gray scale filter using the average of the RAW values for each pixel:

<!-- Sketch file location, (pending organization) -->
<script src="raw_avg.js"></script>
<!-- Necessary element to position p5 canvas -->
<div id="sketch-div"></div>

P5.js code:

```js
image(img,0,0);
loadPixels();
for (let i = 0; i < pixels.length; i+=4) {
    let c = color((pixels[i] + pixels[i + 1] +  pixels[i + 2])/3);
    pixels[i] = red(c);
    pixels[i + 1] = green(c);
    pixels[i + 2] = blue(c);
}
updatePixels();
```