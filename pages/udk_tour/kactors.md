---
layout: default
title: KActors
indexed: true
tags:
  - udk
  - kactor
  - kactors
---
{% include image.html filename="kactors_1.gif" alt_text="Yeay, physics." %}

# Unreal Custom Collision
Complex collision does not work on a `KActor`, this is UDK limitation. That’s why we need to create a custom collision mesh for them in `Blender`. To do this, just duplicate your mesh with `Shift + D` or if your mesh is complex, you can model a more low poly collision mesh for it. Rename this to `UCX_YourMeshName`. Your mesh has to be closed, otherwise it’ll unfortunately not work.

UCX isn’t perfect, the more complex it gets, the more buggy the collisions start to be and the longer the import takes. If the collision is a box, in game it’ll be rotated 90 degrees for some reason. To fix this you can add extra geometry to the mesh, such as a small bevel or something.

# Making the physics work
Import and open the mesh in the content browser. You can make sure the collision import worked by going to `view -> collision`. Do not uncheck the 3 collision checkboxes like we would normally with the [Sticky Walls](https://rocketleaguemoddingwiki.github.io/pages/tutorials/how_to_make_sticky_walls.html)! Drag the mesh into the viewport, right click it and convert it into an `KActor`.

If you want the ball to be able to collide with a `KActor`, you’ll need to install [this](https://rocketleaguemods.com/mods/replicated-rocket-league-collision-channels-ballblockers-vehicleblockers-etc/) file. Open up the `KActor` properties and go to `Collision -> Collision Component -> Collision -> RBCollide With Channels` and check `Vehicle` and `Ball`.

# KActors and Physical Materials
You can add a physical materials to a `KActor`. You can control:
* Friction
* Restitution (Bounciness)
* Density (Controls the mass scale)
* Damping (Adds force to reduce velocity)

# Moving KActors with Matinee
Let’s create a working matinee first and then worry about the collisions. Duplicate your KActor and convert it into a Mover/Interpactor. Open kismet and create a new matinee. Play it on level load event, select the matinee and check Looping. Now double click it to open it up.

Select the Interpactor and right click in matinee and Create Empty Group. Right click the group box and press Add Movement Track. I recommend creating a keyframe to the end with same exact transform as start, this way it’ll loop smoothly. You can move the timeline, move the interpactor and hit enter to create a keyframe and make sure to drag the green triangle on the bottom all the way to the right. When the matinee works in UDK, you can see it in game too.
{% include image.html filename="kactors_2.gif" alt_text="Flying doughnut" %}

Now the collisions, there’s an easy, but not perfect way to do it. We are rapidly teleporting the KActor instead of using physics to do it, this is why it can’t bump you. It also means that if the mesh is thin, you might go through it. Physics constraints (Hinge/pulley actors) would solve it, but we haven’t got them to work yet, however thrusters do work, more on that later.

You can do some kismet magic to set the velocity of the KActor towards the target and delay loop it which works as expected, but you can’t set the angular velocity.

On level load, teleport the KActor into the interpactor with a teleport node. Connect the node output to its input and set a 0.001 second delay to it. Create a physical material for the KActor, set the density, linear damping and angular damping to 100000. Also remember to check hidden game on InterpActor properties. Now test it in game, it should work pretty well.
{% include image.html filename="kactors_3.png" alt_text="Kismet" %}
{% include image.html filename="kactors_4.gif" alt_text="Crazy Aerial Time aka CAT" %}
To make a trigger event for it, just use event rigidbody collision with MaxTriggerCount as 0. From there you can teleport the toucher to somewhere else for example. Just note that Teleport doesn’t work on the ball, for that you’d have to use GetActorLocation, SetActorLocation and SetVelocity nodes.
{% include image.html filename="kactors_5.png" alt_text="Kismet" %}
{% include image.html filename="kactors_6.gif" alt_text="Crazy Aerial Time aka CAT" %}
If you want a mesh that doesn’t move but still can trigger collision event, just remove the matinee and the InterpActor. Event RigidBodyCollision for DynamicMesh_TA actors should be coming with the dummy classes update, so then you can get trigger events from complex collisions!