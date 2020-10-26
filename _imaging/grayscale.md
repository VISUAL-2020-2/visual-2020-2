---
title: Grayscale Average & Luma
---

Here we have an image, to which we apply a gray scale filter using the both the 
raw average of the RGB channels and the Luma weighted average for each pixel.

<!-- Sketch file location, (pending organization) -->
<script src="grayscale.js"></script>
<!-- Necessary element to position p5 canvas -->
Raw average:
<div id="avg-div"></div>
Luma:
<div id="luma-div"></div>

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