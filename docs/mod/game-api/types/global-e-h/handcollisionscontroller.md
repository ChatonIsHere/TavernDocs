---
title: "HandCollisionsController"
description: "Turns per-finger hand colliders on and off to match the current hand gesture, so only extended fingers collide."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCollisionsController

A **class** in `Root.Township`, the global namespace.

Turns per-finger hand colliders on and off to match the current hand gesture, so only extended fingers collide.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCollisionsController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderforfinger" /><code>{"private Dictionary<int, Collider> colliderForFinger"}</code> | <span className="api-desc">Finger bit flag to collider lookup.</span> |
| <Link id="m-idlecollidersthreshold" /><code>{"private float idleCollidersThreshold"}</code> | <span className="api-desc">Grip or finger axis above which colliders are turned off (default 0.7).</span> |
| <Link id="m-indexfingercollider" /><code>{"private Collider indexFingerCollider"}</code> | <span className="api-desc">Index finger collider.</span> |
| <Link id="m-littlefingercollider" /><code>{"private Collider littleFingerCollider"}</code> | <span className="api-desc">Little finger collider.</span> |
| <Link id="m-middlefingercollider" /><code>{"private Collider middleFingerCollider"}</code> | <span className="api-desc">Middle finger collider.</span> |
| <Link id="m-numberoffingers" /><code>{"private const int NumberOfFingers"}</code> | <span className="api-desc">Always 5.</span> |
| <Link id="m-ringfingercollider" /><code>{"private Collider ringFingerCollider"}</code> | <span className="api-desc">Ring finger collider.</span> |
| <Link id="m-thumbcollider" /><code>{"private Collider thumbCollider"}</code> | <span className="api-desc">Thumb collider.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableallcolliders" /><code>{"void DisableAllColliders()"}</code> | <span className="api-desc">Turns off every finger collider.</span> |
| <Link id="m-enablecollidersforfreemode" /><code>{"void EnableCollidersForFreeMode(int fingerIndex, float axis)"}</code> | <span className="api-desc">Turns one finger's collider on while its axis is below the idle threshold.</span> |
| <Link id="m-enabledcollidersforgesture" /><code>{"void EnabledCollidersForGesture("}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture)"}</code> | <span className="api-desc">Turns on the colliders for the gesture's active fingers and off the rest.</span> |
| <Link id="m-enabledcollidersforidlegesture" /><code>{"void EnabledCollidersForIdleGesture("}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" idleGesture, float gripAxis)"}</code> | <span className="api-desc">Turns all colliders off when grip is past the threshold, otherwise uses the idle gesture's fingers.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Builds the finger to collider map.</span> |
| <Link id="m-fillcollidersmap" /><code>{"private void FillCollidersMap()"}</code> | <span className="api-desc">Maps finger bit flags (thumb 1, index 2, middle 4, ring 8, little 16) to their colliders.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HandCollisionsController`:

<div className="api-used-in">

[`HandGestureController.collisionsController`](/mod/game-api/types/global-e-h/handgesturecontroller#m-collisionscontroller).

</div>
