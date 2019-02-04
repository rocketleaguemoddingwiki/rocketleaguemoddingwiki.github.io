---
layout: default
title: Cameras
indexed: true
tags
  - udk
  - cameras
  - camera
  - cam
  - ball
  - ballcam
---
Add a `CameraActor` into the level. That will now be the exhibition match startup camera. 
![Startup Camera]({{ site.baseurl }}/img/camera_1.png "Startup Camera")
You can also use the `SetCameraTarget` kismet node to use that camera instead of the car camera. Here I used that on player spawn and attached the `CameraActor` to the player so that it’s inside it, creating a first person view.
![FPS view]({{ site.baseurl }}/img/camera_2.gif "FPS view")
