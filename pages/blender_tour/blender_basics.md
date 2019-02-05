---
layout: default
title: Blender basics
indexed: true
tags:
  - blender
  - mesh
  - meshes
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

# Why blender ?
* Curved surfaces are important part of RL and `BSP` doesn’t handle that well.
> Technically, BSP (Binary Space Partitioning) refers to a data structure that is used to organize objects within a space, and thus it is not semantically correct. A more accurate term for this type of geometry would be CSG (Constructive Solid Geometry). However, the terms BSP and CSG are used interchangeably so just keep that in mind if you come across either of these terms in other docs. https://api.unrealengine.com/udk/Three/UsingBspBrushes.html

* Modeling meshes is so much more convenient and faster
* No collision issues in Rocket League if done properly
* Better performance (FPS)
* Possibility to make them move and simulate physics

`UDK` has a max triangle count of 650k. If your mesh goes over that, split it up into multiple meshes.

I like to use blender for creating meshes because it’s fast, versatile and free. Here are my tips for it (Assuming you already know blender modeling basics, if not, go watch tutorials) while creating an arena where I accidentally made way oversized goals:

* Have properly facing normals. `Ctrl + F` to `Flip Normals`. To check if it’s right, hit `N` and enable shading -> `Backface culling`
{% include image.html filename="blender_basics_1.gif" alt_text="CHANGE_THIS" %}
* Watch tutorials, get creative
* Take a look how at psyonix modeled the maps and take that into your models
* Use subdivision surfaces or bevels for smooth meshes, subdiv tends to be easier for complex stuff

{% include image.html filename="blender_basics_2.gif" alt_text="CHANGE_THIS" %}

You could also make curved surfaces using `subdivision surface modifier`, curves & array modifiers, booleans or even like metaballs or something. Just make sure the triangle density stays reasonable
Duplicate the mesh and move it into separate layers with `Ctrl + M` before committing something big or save into multiple files often.
Before exporting, apply the location, rotation and scale with `Ctrl + A`
`UV Unwrap` the mesh before importing it into UDK. If you’re lazy, just select all in edit mode, press `U` and `Auto UV Unwrap`. You can tile a repeating texture by scaling the UVs in UV/Image editor, only do this if your mesh will have a tiling material

{% include image.html filename="blender_basics_3.gif" alt_text="CHANGE_THIS" %}

Use material slots

{% include image.html filename="blender_basics_4.gif" alt_text="CHANGE_THIS" %}

Bake and paint custom textures for your materials, there are lots of tutorials or make tiling reusable materials

{% include image.html filename="blender_basics_5.gif" alt_text="CHANGE_THIS" %}