---
title: Project Report
---

## Motivation
During the semester, our focus within the course was p5.js, developing all workshops with this library.
For our final project, we wanted to explore and extend the usability of p5.js with established machine learning libraries.

Our main objective was to create an image classifier and be able to use it inside of a p5 sketch.

## Resources
To achive our goal, we explored the capabilities of ml5.js, a machine learning library following the same open and embracing philosophy of p5.js.
Similar to how p5 acts as a mask for the canvas API, ml5 serves as a friendlier approach to TensorFlow.js and,
with the influence inherited from p5, ml5 although independent from the former, is completely compatible with it.

As someone familiar with the core concepts of machine learning would wonder,
in order to build neural network and use it as a multiclass classifier, for images in this case,
there is still the concern of designing and training the model.
To simplify this task we made use of Google's Teachable Machine project, which presents a simple interface
for the creation of custom image classifiers, that can be exported for use with TensorFlow.js.

## Methodology
In order to showcase this workflow, we built our image classifier, using a dataset of x-ray images of lungs, available in [Kaggle](https://www.kaggle.com/pranavraikokte/covid19-image-dataset).
In this dataset, we can find three categories of images: healthy, pneumonia, and COVID-19.

Google's Teachable Machine allows us to make us of a pre-trained model (MobileNet) that, with some transfer learning,
we can adopt to make our neural network.
Defining our classifier categories and feeding our image dataset in Google's Teachable Machine interface, allows us to begin the training of our model. Building on top of the provided model allows us to achive significant performance with very minimal training,
compared to that necessary if we were to build the model from scratch.

After completing the training of our model, we can export it in a TensorFlow.js compatible format, allowing us to insert it inside of any TensorFlow.js instance.
In this case, we make use of ml5.js model functionality to import it and interface with it.

For our sample sketch, we load and display an image, and once ready we feed it to our model, obtaining and displaying the generated prediction.
