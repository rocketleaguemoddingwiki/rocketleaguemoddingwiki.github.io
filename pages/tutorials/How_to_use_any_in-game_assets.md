---
layout: default
title: How to make Sticky Walls ?
indexed: true
tags:
  - sticky
  - wall
  - walls
  - physical
  - material
  - materials
  - mesh
  - meshes
  - udk
  - derzo
  - derzodev
---
[Original tutorial](https://www.reddit.com/r/RocketLeagueMods/comments/6uc8lp/how_to_access_any_ingame_asset_for_mapping_rl/) by [u/DerzoDev](https://www.reddit.com/user/DerzoDev).

# Overview
With this method you can access any asset that is in the game files such as boost pads, goal explosions or background meshes for instance. You can also create material instances from the enormous material library created by Psyonix. Plus because everything is already in the game files, you don't even need to include anything extra in CookedPCConsole like before with some of the engine materials! 
{% include image.html filename="use_assets_1.jpg" alt_text="In-game materials look stunning!" %}

# RL Dummy Assets

First off I want to announce [RL Dummy Assets](https://rocketleaguemods.com/mods/rl-dummy-assets/). It’s basically the same thing as RL Dummy Classes, but instead of code it includes content. The intention is to increase mapping workflow by creating placeholders for every single asset in the game, but this won’t be happening as each package has so many of them and I’ve only finished Beckwith Park so far. However I’ll have a tutorial on how to use other assets too

# Using the RL Dummy Assets

Download them and follow the instructions

You can now use everything as you like! Drag them into the scene, create material instances, etc... Only thing you can’t do is edit the actual assets by double clicking them from the content browser or changing the imported mesh/texture, because we’re using the Psyonix’s versions in-game. It’s still useful to have placeholder assets in UDK to get a general picture of what the end result is going to look like. There are proper placeholders for meshes and textures because those were relatively fast to extract, but for materials I went with a colored checkerboard approach.

# Explaining the thing
So a while back glhglh showed me how he recreated the ball dropdown decal and applied it to his own ball. This was done by creating a dummy archetype inside an external package so that when referencing it in the ball properties, it directed to the right asset in the game files. Because we didn't ever manually add the package to CookedPCConsole, the game used its own asset. 
{% include image.html filename="use_assets_2.png" alt_text="Actors tab" %}
{% include image.html filename="use_assets_3.png" alt_text="Properties window" %}
{% include image.html filename="use_assets_4.png" alt_text="Content browser" %}
This could only be done to assets that were inside the TAGame.upk file though (The core package of RL), so it didn't work for other packages like maps or car bodies.

You can do this with those other packages too by moving the path up by 1. By this I mean that FXActors.Ball.Ball_FXActor would be TAGame.FXActors.Ball.Ball_FXActor instead. The problem here becomes that you would need to have a group inside a group. Well it turns out you can actually do this by putting a dot between them like so:
{% include image.html filename="use_assets_5.png" alt_text="Exemple" %}
{% include image.html filename="use_assets_6.png" alt_text="Exemple shown in Content Browser" %}

# Step by step guide on accessing anything

Download Rocket league decryptor and UE Explorer

Decrypt a file (using Park_P.upk as an example) from CookedPCConsole with the decryptor by dragging it in there. Park_P_Decrypted.upk should appear

Open UE Explorer, go to File - Open File, select the decrypted file and go to Objects - Content

Pick any asset you want from there (UModel could be helpful here), I'll do this with Advert_Strip_Mat material that is inside Park_P - Adverts - Materials

Right click to create a new material in UDK. If you want to use a mesh or a texture, you’ll need to import a placeholder, or copy one from the Engine Content. The Package has to be Park_P and the grouping Adverts.Materials with the name Advert_Strip_Mat (These of course depend on what asset you use)

Make sure you are not replacing the packages you're accessing stuff from with your map file. You need to find a map file that you're not taking any assets from, and replace your map with that. Or use your workshop file. I save my maps into Labs_Underpass_P instead of the usual Park_P so my example works here

You're done! 
{% include image.html filename="use_assets_6.png" alt_text="UE Explorer" %}
{% include image.html filename="use_assets_7.png" alt_text="New Material popup window" %}
{% include image.html filename="use_assets_8.png" alt_text="Actor properties window" %}
{% include image.html filename="use_assets_9.png" alt_text="In-game result" %}

> Save often! When dealing with external packages, UDK likes to crash way too much. Sometimes when I was making the dummy assets it would literally crash after every time I saved the package, but at least it crashes after the save so everything gets saved. Also make a backup of your map often, once my UDK just kept crashing when trying to load a map for no reason (Day before it worked), so everything was lost.

If you want to use the parameters of the materials in material instances, you can do that by creating dummy parameters to your material based on the real ones (Expand the material in UE Explorer and you can see all the parameters), creating a material instance into your own level package. You can take a look at how I did it with the Dummy Assets. Some parameters seem to do nothing and Static Switch Parameters and Static Bool Parameters break the material instances completely, so you need to avoid those. This is also the case for some engine materials which is why I was able to make an engine material that before didn't work with instances, work. https://streamable.com/tpcwk

<div style="width: 100%; height: 0px;"><iframe src="https://streamable.com/s/tpcwk/oixxko" frameborder="0" width="100%" height="100%" allowfullscreen style="width: 100%; height: 100%; position: absolute;"></iframe></div>