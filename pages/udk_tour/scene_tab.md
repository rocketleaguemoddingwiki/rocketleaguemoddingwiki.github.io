---
layout: default
title: Scene Tab
indexed: true
tags:
  - udk
  - scene
  - list
  - map
  - actor
  - actors
  - toolbar
  - button
  - translucent
---
Usually an actor will have some sprite, but sometimes it’s completely invisible and there’s no way to select it. To select it, you’ll need to go to the scene tab, go to View and hit refresh. Find the actor from the list and select it. Now it’s selected in the viewport too so you can move it, but still can’t open its properties.

You can edit the properties inside the Scene tab too. Use the search bar in properties tabs, so convenient. To keep track of what’s happening in the Scene tab, you can set the actor Tag from the properties.

{% include image.html filename="scene_1.png" alt_text="Tag field from the scene tab" %}

{% include image.html filename="scene_2.png" alt_text="List of actors in your scene (map)" %}

Once refreshed the scene tab, the tag name will update under the Tag column. For example if you’ll have multiple mesh actors that you can’t select, it’ll be much faster to find and select it in the Scene tab.

You can select mesh actors with translucent materials from the scene tab or by checking this very useful button in the UDK toolbar.

{% include image.html filename="scene_3.png" alt_text="Allow Translucent Selection toolbar button" %}