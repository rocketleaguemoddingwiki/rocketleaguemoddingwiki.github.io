---
layout: default
title: From Blender to Rocket League
indexed: true
tags:
  - blender
  - udk
  - export
  - material
  - materials
  - normal
  - normals
  - backface culling
  - bsp
  - csg
  - uv unwwrap
  - uv
  - unwrap
---

[Original tutorial](https://docs.google.com/document/d/1g4wagWHXDp2n-fJ6_DrnlRG8XaZ6VLJAZ3zgDykga1Q) by [u/DerzoDev](https://www.reddit.com/user/DerzoDev).

# Introduction

Blender default units work with UDK perfectly from my experience. If you changed them to metric, everything in blender will need be much bigger. For the most part it works, but for example when you try to sculpt with dynamic topology with metric scaling, you have to set the scale to over 1000% so that it doesn’t completely fill with geometry. Also, if an object is big enough, blender viewport will have weird displaying artifacts.

{% include image.html filename="blender_to_rl_1.png" alt_text="Weird artifacts" %}

> In blender, make sure you can export fbx by enabling the fbx export add-on. Now select your mesh and go file -> export -> FBX.

### Optionnaly
> Check export selected and then go to geometry tab. There you can change the smoothing from edge (Left image) to face (Right image), this will make the mesh appear smooth in UDK if the mesh is set to Smooth in blender. Then just export it into your mesh folder.

{% include image.html filename="blender_to_rl_2.png" alt_text="Smooooooth" %}

In UDK, import the mesh. You don’t need to change the options, just hit OK.

# Mesh without collision
Drag the mesh into the viewport, congrats you’re done.

# Mesh with collision, sticky walls and flip-back-up-floor
If you want only collision, but invisible mesh, you can check the Hidden Game checkbox from the properties. To update the mesh, just re-export it from blender to the same file. In UDK content browser, right click the mesh and hit reimport. You should be able to change anything else, but if you add or remove material slots, you need to delete the mesh and import it again.