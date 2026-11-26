---
title: "ISmoothLocomotionModifier"
description: "Something that changes smooth locomotion, such as Climber."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISmoothLocomotionModifier

An **interface** in `Root.Township`, no namespace.

Something that changes smooth locomotion, such as `Climber`. `SmoothLocomotion.InitializeModifier` hooks each member into its movement update. Base class `SmoothLocomotionModifier`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`SmoothLocomotionModifier`](/game-api/types/global-s/smoothlocomotionmodifier)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canoverridemovement" /><code>{"bool CanOverrideMovement { get; }"}</code> | If true, the movement override and teleport block members are hooked up too. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfrictionmultiplier" /><code>{"void GetFrictionMultiplier(ref float friction)"}</code> | Adjusts the friction multiplier passed by reference. |
| <Link id="m-getheight" /><code>{"void GetHeight(ref float height)"}</code> | Adjusts the body height passed by reference. |
| <Link id="m-getupwardgrip" /><code>{"void GetUpwardGrip(ref float upwardGrip)"}</code> | Adjusts the upward grip passed by reference. |
| <Link id="m-isblockingteleportation" /><code>{"void IsBlockingTeleportation(ref bool isBlocking)"}</code> | Set the flag to true to block teleporting. |
| <Link id="m-isoverridingmovement" /><code>{"bool IsOverridingMovement()"}</code> | Whether this modifier is currently taking over movement. |
| <Link id="m-locomotionupdate" /><code>{"void LocomotionUpdate()"}</code> | Called every fixed update of smooth locomotion. |
| <Link id="m-movementoverride" /><code>{"bool MovementOverride()"}</code> | Runs the modifier's own movement in place of the normal one. |

## Used in

Members of other types that take, return or hold a `ISmoothLocomotionModifier`:

[`SmoothLocomotion.InitializeModifier`](/game-api/types/global-s/smoothlocomotion#m-initializemodifier), [`SmoothLocomotion.RemoveModifier`](/game-api/types/global-s/smoothlocomotion#m-removemodifier).
