---
layout: default
title: Software
indexed: true
tags:
  - blender
  - decryptor
  - ue viewer
  - umodel
  - photoshop
  - gimp
---
# Blender
[Blender](https://www.blender.org/download/) is a free 3D Modelling software. You can use it to create all the parts of your map, including meshes and UVs.
This wiki won't teach you how to model, but you can find a lot of tutorials online and on Youtube.
> ### PSK Plugin
> Exported Skeleton Meshes from Rocket League files are `.pskx` files. To open them in Blender, first rename the file to `.psk`, then go to `File > User Preferences > Add-ons` then search for *`Import Unreal Skeleton Mesh (.psk)/Animation Set (psa)`* and enable it.

# Rocket League UPK Decryptor
[RLUPKTool](https://github.com/AltimorTASDK/RLUPKTool/releases) is a tool to decrypt `.upk` files. Normally you wouldn't be able to use `.upk` files from Rocket League but with this tool you can decrypt and then import the decrypted files `_decrypted.upk` to other softwares.

# Umodel (aka UE Viewer)
[UModel](https://github.com/AltimorTASDK/UModel/releases) is a free software to preview and extract content from Unreal Engine files. 
You can load Rocket League decrypted files in Umodel by dragging and dropping them on the umodel `.exe`.
Once it is open, you can navigate between the assets with your `PageUp` and `PageDown` keys. 
The shortcut to extract an asset is `Ctrl + X`. It will be exported to a `UmodelExport` folder.

# Photoshop / GIMP
You'll need an image editor to work with textures. Unreal Engine textures work best if their dimensions are a power of two. To make sure UDK will let you import them, you can resize and scretch your textures in your image editor to fit them in a `512px`, `1024px`, `2048` or even `4096` square. The bigger, the heavier.
