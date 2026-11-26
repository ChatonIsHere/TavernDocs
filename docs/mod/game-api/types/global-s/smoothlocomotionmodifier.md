---
title: "SmoothLocomotionModifier"
description: "Base for components next to SmoothLocomotion that change the local player's smooth movement: friction, height, upward grip, or taking over movement entirely."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmoothLocomotionModifier

An **abstract class** in `Root.Township`, the global namespace.

Base for components next to `SmoothLocomotion` that change the local player's smooth movement: friction, height, upward grip, or taking over movement entirely. Registered with `SmoothLocomotion.InitializeModifier`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`ISmoothLocomotionModifier`](/mod/game-api/types/global-i-l/ismoothlocomotionmodifier)
- **Derived types** [`Climber`](/mod/game-api/types/global-c-d/climber)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SmoothLocomotionModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-locomotion" /><code>{"protected "}<Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" locomotion"}</code> | The `SmoothLocomotion` on the same object. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canoverridemovement" /><code>{"virtual bool CanOverrideMovement { get; }"}</code> | When true, `InitializeModifier` also hooks `MovementOverride`, `IsOverridingMovement` and `IsBlockingTeleportation`. False by default. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"abstract void DrawGizmos("}<Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" locomotion)"}</code> | Editor: draws debug gizmos for the modifier. |
| <Link id="m-getfrictionmultiplier" /><code>{"abstract void GetFrictionMultiplier(ref float friction)"}</code> | Adjusts the friction value passed in by reference. |
| <Link id="m-getheight" /><code>{"abstract void GetHeight(ref float height)"}</code> | Adjusts the player height value passed in by reference. |
| <Link id="m-getupwardgrip" /><code>{"virtual void GetUpwardGrip(ref float upwardGrip)"}</code> | Adjusts the upward grip passed in by reference. Does nothing by default. |
| <Link id="m-isblockingteleportation" /><code>{"virtual void IsBlockingTeleportation(ref bool isBlocking)"}</code> | Sets the flag to block teleporting while the modifier is active. Only hooked when `CanOverrideMovement` is true. |
| <Link id="m-isoverridingmovement" /><code>{"virtual bool IsOverridingMovement()"}</code> | Returns true while the modifier is taking over movement. False by default. |
| <Link id="m-locomotionupdate" /><code>{"abstract void LocomotionUpdate()"}</code> | Runs on every `SmoothLocomotion` fixed update while registered. |
| <Link id="m-movementoverride" /><code>{"virtual bool MovementOverride()"}</code> | Runs the modifier's own movement. False by default. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Finds the `SmoothLocomotion` on the same object. |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | Removes the modifier from `SmoothLocomotion`. The base `OnEnable` does not add it back, so subclasses register themselves. |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | Empty in the base class. |
