---
layout: default
title: Spawns
indexed: true
tags:
  - udk
  - spawn
  - spawns
  - player
  - playerstart
  - pylon
  - soccar
  - pylon_soccar
---
To get proper spawns for cars in and make the exhibition match and multiplayer to work if you’re not using my template map, drag as many `PlayerStart_TA` into the blue side of the map. Make sure it’s **at least 50 units higher than the ground**. After you have done that, you have to build all or `build AI paths`! You can also add a `Pylon_Soccar_TA` and connect the PlayerStarts in it, it has some options to play with.

If the game crashes when you score a goal, add a `PointInSpace_TA` in the center of the map and set the goal orientation to that.
{% include image.html filename="spawns_1.gif" alt_text="Moutain > Roundhouse > Batmobile" %}
