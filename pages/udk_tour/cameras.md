---
layout: default
title: Cameras
indexed: true
tags:
  - udk
  - cameras
  - camera
  - cam
  - ball
  - ballcam
  - cameraactor
  - actor
  - setcameratarget
  - kismet
  - kismets
---
Add a `CameraActor` into the level. That will now be the exhibition match startup camera. 
{% include image.html filename="camera_1.png" alt_text="Startup Camera" %}
You can also use the `SetCameraTarget` kismet node to use that camera instead of the car camera.

Here I used that on player spawn and attached the `CameraActor` to the player so that it’s inside it, creating a first person view.
{% include image.html filename="camera_2.gif" alt_text="FPS View" %}
