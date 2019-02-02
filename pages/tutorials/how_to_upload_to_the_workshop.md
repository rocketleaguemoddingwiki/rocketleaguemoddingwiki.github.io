---
layout: default
title: How to upload or update a map ?
indexed: true
tags:
  - upload
  - map
  - update
  - steam
  - workshop
  - umap
  - udk
  - vdf
  - dasoccerguy
  - steamcmd
---
# First time
Simply follow the [official tutorial](https://steamcommunity.com/sharedfiles/filedetails/?id=813629808) from Psyonix.

# Updating the workshop map
[Original tutorial](https://www.reddit.com/r/RocketLeagueMods/comments/5hzin2/guide_how_to_update_your_steam_workshop_maps/) by [u/Dasoccerguy](https://www.reddit.com/user/Dasoccerguy). Go give him some karma.

## Step 1: 
Download [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD). This is a command line tool to let you run some of the underlying functionality of Steam.

## Step 2:
Place your map ( `.udk` or `.umap` ) in its own folder, and make a 512x512 (roughly) image to use as the preview image.
Note that both this and Psyonix's Workshop Uploader tool will completely fail to upload if the preview image is too large.
Steam defaults to showing square tiles in the Workshop, which is why everyone's pictures are stretched like that.
I have a folder inside my mods folder called SteamWorkshop, and subfolders in there for each map.
That way I can keep the current version on the Workshop separate from the copy I want to keep improving.

## Step 3:
Open up a text editor and create a file that looks like this:

```
"workshopitem"
{
    "appid"              "252950"
    "publishedfileid"    "123456789"
    "contentfolder"      "C:\UDK\RocketLeagueMods\UDKGame\Content\Maps\SteamWorkshop\YourMap"
    "previewfile"        "C:\UDK\RocketLeagueMods\UDKGame\Content\Maps\SteamWorkshop\YourMap\preview.jpg"
    "visibility"         "0"
    "title"              "YourMap v2"
    "description"        "A description of your map. You can change this easily in Steam"
    "changenote"         "v2 - a description of what you did, for posterity's sake"
}
```
`appid` needs to be what I've shown here. That is the code that corresponds to Rocket League, as you can see at the end of its Steam URL:
```
http://store.steampowered.com/app/252950/
```
`publishedfileid` is the unique ID tied to your item and profile. Only the contributors to an item have access to modify that Workshop item. You can see the number at the end of the workshop page's URL:
```
http://steamcommunity.com/sharedfiles/filedetails/?id=814858208 (shameless plug)
```
`visibility` when set to 0 means Public. If you just want to use this as way to iteratively test maps and not be judged, you can change that to 1 or 2. 1 means Friends Only, and 2 means Me Only.

## Step 4:
Save this file as `YourMap.vdf`. It is still a plaintext file, so you can still edit it after.

## Step 5:
Run SteamCMD.

## Step 6:
Log in to Steam through SteamCMD. Make sure you aren't streaming or capturing video, because you're about to type your password in plain sight.
Type the following:
```
login YourUserName YourPassword SteamGuardCode
```
If you don't have SteamGuard enabled, ignore that ```SteamGuardCode``` field.
You should see it log you in, and that's half the battle.

## Step 7:
Copy the full path of your `.vdf` file from the file explorer window. In this example, that is
```
C:\UDK\RocketLeagueMods\UDKGame\Content\Maps\SteamWorkshop\YourMap\YourMap.vdf
```
In SteamCMD, type the following:
```
workshop_build_item
```
and then right click to paste the path you copied.

The full command would be
```
workshop_build_item C:\UDK\RocketLeagueMods\UDKGame\Content\Maps\SteamWorkshop\YourMap\YourMap.vdf
```
Depending of the size of your map and your upload speed (and Steam servers also sometimes), it may take more or less time.

## Step 8:
Check the Workshop page to see if the update worked. If it looks like it did in SteamCMD, you should be good to go.

## Step 9:
Type `quit` in SteamCMD to close it. You may have to restart Steam before you can properly launch a game. Every time I update it tells me that "Steam will be unable to sync resources with the Steam Cloud" or something, which is probably due to the fact I was just logged in twice on the same computer and so Steam is confused.

## Step 10:
Check it out in Rocket League! gg!
