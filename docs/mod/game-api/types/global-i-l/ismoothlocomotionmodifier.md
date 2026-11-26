---
title: "ISmoothLocomotionModifier"
description: "Something that changes smooth locomotion, such as Climber."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISmoothLocomotionModifier

An **interface** in `Root.Township`, the global namespace.

Something that changes smooth locomotion, such as `Climber`. `SmoothLocomotion.InitializeModifier` hooks each member into its movement update. Base class `SmoothLocomotionModifier`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`SmoothLocomotionModifier`](/mod/game-api/types/global-s/smoothlocomotionmodifier)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canoverridemovement" /><code>{"bool CanOverrideMovement { get; }"}</code> | <span className="api-desc">If true, the movement override and teleport block members are hooked up too.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfrictionmultiplier" /><code>{"void GetFrictionMultiplier(ref float friction)"}</code> | <span className="api-desc">Adjusts the friction multiplier passed by reference.</span> |
| <Link id="m-getheight" /><code>{"void GetHeight(ref float height)"}</code> | <span className="api-desc">Adjusts the body height passed by reference.</span> |
| <Link id="m-getupwardgrip" /><code>{"void GetUpwardGrip(ref float upwardGrip)"}</code> | <span className="api-desc">Adjusts the upward grip passed by reference.</span> |
| <Link id="m-isblockingteleportation" /><code>{"void IsBlockingTeleportation(ref bool isBlocking)"}</code> | <span className="api-desc">Set the flag to true to block teleporting.</span> |
| <Link id="m-isoverridingmovement" /><code>{"bool IsOverridingMovement()"}</code> | <span className="api-desc">Whether this modifier is currently taking over movement.</span> |
| <Link id="m-locomotionupdate" /><code>{"void LocomotionUpdate()"}</code> | <span className="api-desc">Called every fixed update of smooth locomotion.</span> |
| <Link id="m-movementoverride" /><code>{"bool MovementOverride()"}</code> | <span className="api-desc">Runs the modifier's own movement in place of the normal one.</span> |

## Used in

Members of other types that take, return or hold a `ISmoothLocomotionModifier`:

<div className="api-used-in">

[`SmoothLocomotion.InitializeModifier`](/mod/game-api/types/global-s/smoothlocomotion#m-initializemodifier), [`SmoothLocomotion.RemoveModifier`](/mod/game-api/types/global-s/smoothlocomotion#m-removemodifier).

</div>
