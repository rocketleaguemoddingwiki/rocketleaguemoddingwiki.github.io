---
layout: default
title: Setup (Required)
indexed: true
tags:
  - setup
  - udk
  - dummy
  - classes
  - sticky
  - wall
  - walls
---
# 1 - UDK </br>
**YOU MUST USE THESE VERSIONS OF UDK.** <br/>
Download and install<br />
[UDK 2013](https://drive.google.com/file/d/1JOnd0cOk9CWoj6ZENDLnosK4g-5Y9Eru/view) or [UDK 2015](https://drive.google.com/file/d/1z9C3t6nKW1utWilVshODxyGcucxuzbOW/view).<br/>
Note: Maps made with UDK 2015 will not work with UDK 2013. However, maps made with UDK 2013 can work with UDK 2015.<br/>
To be easier, you can install it in the root of your drive to be like:
```
C:\UDK
```

# 2 - Dummy Classes
Download [this classes](https://github.com/timunrue/RL-Dummy-Classes-v2)<br/>
Extract the zip file<br/>
Copy and paste **only** the folders in it (ProjectX and TAGame) there:
```
C:\UDK\UDK-2013-02\Development\Src
```
The two other files are just Github generated files, it's not needed.<br/>

# 3 - Make UDK aware of the Dummy Classes
Go in the following folder:<br/>
```
C:\UDK\UDK-2013-02\UDKGame\Config
```
and open the **DefaultEngine.ini** file with [Notepad++](https://notepad-plus-plus.org/) or any other file editing software.<br/><br/>
Under the heading **[UnrealEd.EditorEngine]**, add these last two lines:
``` python
[UnrealEd.EditorEngine]
+EditPackages=UTGame
+EditPackages=UTGameContent
+EditPackages=ProjectX
+EditPackages=TAGame
```
It is `sensitive to the order`, so be sure they are in that order.<br/>
Save and close the file<br/>
<br/>
> The next time you open UDK, it will ask you to **recompile scripts**. Accept. A command line window will open. When it's finished, you will need to close the command line window manually and relaunch UDK again.

# 4 - Sticky Walls™
We need another step to make the editor Rocket League friendly.<br/>
Go to this folder:
```
C:\UDK\UDK-2013-02\Development\Src\Engine\Classes
```
Open the `StaticMeshActor.uc` file with Notepad++ and find the `defaultproperties` line.<br/>
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

