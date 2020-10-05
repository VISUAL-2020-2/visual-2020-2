---
title: Grayscale Luma 
---

Here we have a gray scale filter using the Luma weighted average of the RAW values for each pixel:

<!-- Sketch file location, (pending organization) -->
<script src="luma.js"></script>
<!-- Necessary element to position p5 canvas -->
<div id="sketch-div"></div>

P5.js code:

```js
image(img,0,0);
loadPixels();
for (let i = 0; i < pixels.length; i+=4) {
    let c = color((0.2126*pixels[i] + 0.0722*pixels[i + 1] +  0.7152*pixels[i + 2])/3);
    pixels[i] = red(c);
    pixels[i + 1] = green(c);
    pixels[i + 2] = blue(c);
}
updatePixels();
```