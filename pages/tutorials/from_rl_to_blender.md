---
layout: default
title: From Rocket League to Blender
indexed: true
tags:
  - blender
  - rlupktools
  - umodel
  - ue viewer
  - import
  - export
  - psk
  - pskx
---

[Original tutorial](https://docs.google.com/document/d/1g4wagWHXDp2n-fJ6_DrnlRG8XaZ6VLJAZ3zgDykga1Q) by [u/DerzoDev](https://www.reddit.com/user/DerzoDev).

> This tutorial works in pair with the tutorial [How to use any in-game asset](https://rocketleaguemoddingwiki.github.io/pages/tutorials/How_to_use_any_in-game_assets.html)

# Required
Create a `ImportRLModels` folder in your workspace (where you want but you probably use it a lot so don't hide it too much). Then download and unzip the two following softwares.

[RLUPKTool](https://github.com/AltimorTASDK/RLUPKTool/releases). Download the latest.

[UModel](https://github.com/AltimorTASDK/UModel/releases) (also known as `UE Viewer`). Download the latest. This software requires a small configuration to be able to open Rocket League files. Right click on umodel.exe and create a shortcut (it is very important). Then, right click on the shortcut and add this at the end of the target:
```
-game=rocket
```
It should look like that
```
C:\Any\Path\umodel.exe -game=rocket
```
# Extracting files from the game
Open the `CookedPCConsole` (../rocketleague/TAGame/CookedPCConsole) folder , it contains everything. Copy any file from there into the same folder as `RLUPKTool`, For the exemple, we'll use `Body_Octane_SF.upk`. Drag this upk file into `RLUPKTool`, it will create a decrypted file. Then, drag the decrypted file into the `UModel` **shortcut**.

>Do not Navigate -> Include meshes/materials, for some reason doing this prevents some textures from showing up (Ignore it on the gif). Use page up and page down to go through the items.

{% include image.html filename="rl_to_blender_1.gif" alt_text="Step by step" %}

If you want to see the textures in higher quality, you can copy the `Textures.tfc` and `Textures2.tfc` files from `CookedPCConsole` folder to your `ImportRLModels` folder. To export the currently viewed mesh, press `Ctrl + X`. Now go to Tools -> Open export folder. Find the mesh file and if it’s `.pskx` or something, rename it to `.psk`.

# Import .psk files into Blender
Open up blender, go user preferences and enable the `Import Unreal Skeleton Mesh (.psk)/Animation Set (psa)` plugin. Now you can import the mesh as `.psk`. Make sure to delete the armature if you don’t need it. If you try to import another psk with same object name, it’ll give you errors so rename the first one to something else. It will be way too big, so just scale it by 0.01.

### Blender Tips
> You can use `S` to scale in Blender most of the time.

