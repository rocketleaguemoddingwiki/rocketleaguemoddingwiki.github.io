---
layout: default
title: Volumes
indexed: true
tags:
  - udk
  - goal
  - goals
  - volume
  - brush
  - goalvolume
  - pointinspace

---
# Goals
Move the brush to the desired position and right click -> Add Volume -> `GoalVolume_TA` to create goals. In the properties window, set Team number 0 for blue, Team Number 1 for orange. 

If the game crashes when you score a goal, add a `PointInSpace_TA` in the center of the map and set the goal orientation to that.
{% include image.html filename="goal_1.gif" alt_text="Derzo almost missing an open net" %}

# Gravity
Move the brush to the desired position and right click -> Add Volume -> Gravity Volume. You can change the gravity in the properties window.