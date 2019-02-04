---
layout: default
title: UDK Tour - Cameras
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
IMG
You can also use the `SetCameraTarget` kismet node to use that camera instead of the car camera. Here I used that on player spawn and attached the `CameraActor` to the player so that it’s inside it, creating a first person view.
IMG
