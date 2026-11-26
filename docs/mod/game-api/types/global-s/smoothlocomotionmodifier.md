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
| <Link id="m-ctor" /><code>{"protected SmoothLocomotionModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-locomotion" /><code>{"protected "}<Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" locomotion"}</code> | <span className="api-desc">The `SmoothLocomotion` on the same object.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canoverridemovement" /><code>{"virtual bool CanOverrideMovement { get; }"}</code> | <span className="api-desc">When true, `InitializeModifier` also hooks `MovementOverride`, `IsOverridingMovement` and `IsBlockingTeleportation`. False by default.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"abstract void DrawGizmos("}<Link to="/mod/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" locomotion)"}</code> | <span className="api-desc">Editor: draws debug gizmos for the modifier.</span> |
| <Link id="m-getfrictionmultiplier" /><code>{"abstract void GetFrictionMultiplier(ref float friction)"}</code> | <span className="api-desc">Adjusts the friction value passed in by reference.</span> |
| <Link id="m-getheight" /><code>{"abstract void GetHeight(ref float height)"}</code> | <span className="api-desc">Adjusts the player height value passed in by reference.</span> |
| <Link id="m-getupwardgrip" /><code>{"virtual void GetUpwardGrip(ref float upwardGrip)"}</code> | <span className="api-desc">Adjusts the upward grip passed in by reference. Does nothing by default.</span> |
| <Link id="m-isblockingteleportation" /><code>{"virtual void IsBlockingTeleportation(ref bool isBlocking)"}</code> | <span className="api-desc">Sets the flag to block teleporting while the modifier is active. Only hooked when `CanOverrideMovement` is true.</span> |
| <Link id="m-isoverridingmovement" /><code>{"virtual bool IsOverridingMovement()"}</code> | <span className="api-desc">Returns true while the modifier is taking over movement. False by default.</span> |
| <Link id="m-locomotionupdate" /><code>{"abstract void LocomotionUpdate()"}</code> | <span className="api-desc">Runs on every `SmoothLocomotion` fixed update while registered.</span> |
| <Link id="m-movementoverride" /><code>{"virtual bool MovementOverride()"}</code> | <span className="api-desc">Runs the modifier's own movement. False by default.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Finds the `SmoothLocomotion` on the same object.</span> |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> | <span className="api-desc">Removes the modifier from `SmoothLocomotion`. The base `OnEnable` does not add it back, so subclasses register themselves.</span> |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> | <span className="api-desc">Empty in the base class.</span> |
