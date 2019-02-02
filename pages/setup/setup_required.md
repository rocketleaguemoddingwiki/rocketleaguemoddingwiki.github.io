---
layout: default
title: SETUP (Required)
---

# 1 - UDK
Download and install [this specific](https://www.dropbox.com/s/t1hw4wwnugyzmec/UDKInstall-2013-02-BETA.exe?dl=0) UDK version.<br/>
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
Open the **StaticMeshActor.uc** file with Notepad++ and find the **defaultproperties** line.<br/>
Change it to be like with the higkighted lines below:
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


