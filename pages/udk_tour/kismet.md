---
layout: default
title: Kismet
indexed: true
tags:
  - udk
  - kismet
  - logic
---
Make sure to explore kismet, it’s much more useful than you might think first.

The kismet window can be shown from menu at the top of UDK.

For example if you want to change the ball location, you can use `AddGameBall`-node and `DestroyAll` first and then `Add` (Plug the instigators to AllPlayers). This is especially useful for parkour maps, when you complete a level, move the ball to the next levels end so that their ball cam isn’t all messed up.

You can also use event `Player Spawned` with max trigger count as 0 to use on level reset. For example, you can teleport the player to the last checkpoint.

{% include image.html filename="kismet_1.gif" alt_text="No animals were hurt during this sequence" %}
