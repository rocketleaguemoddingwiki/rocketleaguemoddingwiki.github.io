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
[Original tutorial](https://www.reddit.com/r/RocketLeagueMods/comments/6vs9gw/collisions_on_custom_maps_are_finally_fixed_the/) by [u/DerzoDev](https://www.reddit.com/user/DerzoDev).
# Editing UDK StaticMeshActor file
If you followed the [Setup](https://rocketleaguemoddingwiki.github.io/pages/setup/setup_required.html) on this wiki, you can skip to the next part.

Close UDK.

Open up the following file with your favorite text editor:
```
\UDK\Custom\Development\Src\Engine\Classes\StaticMeshActor.uc
```
Find the `defaultproperties` line.

Add these three lines before the `End Object` line:
```
BlockRigidBody=false
bDisableAllRigidBody=true
bAcceptsDynamicDecals=false
```
It should look like that:
```python
defaultproperties
{
	Begin Object Class=StaticMeshComponent Name=StaticMeshComponent0
		bAllowApproximateOcclusion=TRUE
		bForceDirectLightMap=TRUE
		bUsePrecomputedShadows=TRUE
		BlockRigidBody=false
		bDisableAllRigidBody=true
		bAcceptsDynamicDecals=false
	End Object
	CollisionComponent=StaticMeshComponent0
	StaticMeshComponent=StaticMeshComponent0
	Components.Add(StaticMeshComponent0)

	bDisableAutoBaseOnProcBuilding=false;
	bProxy=false;
	bHiddenByProxy=false;
	OldCastShadow=false;
	OldAcceptsLights=false;
	OldCollisionType=COLLIDE_NoCollision;
}
```
> The next time you open UDK, it will ask you to **recompile scripts**. Accept. A command line window will open. When it's finished, you will need to close the command line window manually and relaunch UDK again.

# In UDK
Import a static mesh, double click it and uncheck the following:
* `UseSimpleBoxCollision`
* `UseSimpleLineCollision`
* `UseSimpleRigidBodyCollision`

Drag the mesh into the scene, double-click it and it will open this mesh property window.
Use the search bar at the top of this window to:
* check `BlockRigidBody`
* check `AcceptsDynamicDecals`
* uncheck `DisableAllRigidBody`

In your content browser, right click the choose `New PhysicalMaterial`.

In the Package entry, select or type your map package name (it's faster to begin to type then to select in the list, your package will probably be in the first propositions).

In the Name entry, type `StickyWalls`. You could name it like you want but it's easier to use StickyWalls since everyone refers to this material by this name.

Click OK. A window open, it's the material property window you just created. Click on the blue arrow at the very bottom on the window and choose `PhysicalMaterialProperty_TA` (have you installed the dummy classes ? this is one of them).

You can now expand the `Physical Material Property` and check the `Sticky Wheels` property.

Now you can either:
* drag and drop this `StickyWalls` material on the mesh
* open the mesh property window by double-click it and set the physical material to `StickyWalls`
* edit an other material that usually handles only a texture and set the physical material to `StickyWalls`. Then drag and drop this other material on the mesh.

{% include image.html filename="sticky_walls.gif" alt_text="They see me driftin'" %}