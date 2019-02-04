---
layout: default
title: Boost pickup
indexed: true
tags:
  - udk
  - boost
  - pickup
  - pickups
  - pad
  - pads
  - vehicle
  - vehiclepickup
  - vehiclepickup_boost_ta
---
From the Actor Classes tab (same window as the Content Browser), drag and drop a `VehiclePickup_Boost_TA` on your map. Then from the Scene tab, select the `VehiclePickup_Boost_TA` and change the `Boost Amount` parameter to be 0.12 and the `Respawn Delay` parmeter to be 4.

It will be invisible so add a mesh at the same Location to represent the boost pickup.
{% include image.html filename="boost_pads_1.gif" alt_text="A basic boost pickup" %}

> To try it out in RL, go to training -> tutorial -> basic, that has limited boost.