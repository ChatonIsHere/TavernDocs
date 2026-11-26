---
title: "HandCollisionsController"
description: "Turns per-finger hand colliders on and off to match the current hand gesture, so only extended fingers collide."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCollisionsController

A **class** in `Root.Township`, no namespace.

Turns per-finger hand colliders on and off to match the current hand gesture, so only extended fingers collide.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCollisionsController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderforfinger" /><code>{"private Dictionary<int, Collider> colliderForFinger"}</code> | Finger bit flag to collider lookup. |
| <Link id="m-idlecollidersthreshold" /><code>{"private float idleCollidersThreshold"}</code> | Grip or finger axis above which colliders are turned off (default 0.7). |
| <Link id="m-indexfingercollider" /><code>{"private Collider indexFingerCollider"}</code> | Index finger collider. |
| <Link id="m-littlefingercollider" /><code>{"private Collider littleFingerCollider"}</code> | Little finger collider. |
| <Link id="m-middlefingercollider" /><code>{"private Collider middleFingerCollider"}</code> | Middle finger collider. |
| <Link id="m-numberoffingers" /><code>{"private const int NumberOfFingers"}</code> | Always 5. |
| <Link id="m-ringfingercollider" /><code>{"private Collider ringFingerCollider"}</code> | Ring finger collider. |
| <Link id="m-thumbcollider" /><code>{"private Collider thumbCollider"}</code> | Thumb collider. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableallcolliders" /><code>{"void DisableAllColliders()"}</code> | Turns off every finger collider. |
| <Link id="m-enablecollidersforfreemode" /><code>{"void EnableCollidersForFreeMode(int fingerIndex, float axis)"}</code> | Turns one finger's collider on while its axis is below the idle threshold. |
| <Link id="m-enabledcollidersforgesture" /><code>{"void EnabledCollidersForGesture("}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture)"}</code> | Turns on the colliders for the gesture's active fingers and off the rest. |
| <Link id="m-enabledcollidersforidlegesture" /><code>{"void EnabledCollidersForIdleGesture("}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" idleGesture, float gripAxis)"}</code> | Turns all colliders off when grip is past the threshold, otherwise uses the idle gesture's fingers. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Builds the finger to collider map. |
| <Link id="m-fillcollidersmap" /><code>{"private void FillCollidersMap()"}</code> | Maps finger bit flags (thumb 1, index 2, middle 4, ring 8, little 16) to their colliders. |

</details>

## Used in

Members of other types that take, return or hold a `HandCollisionsController`:

[`HandGestureController.collisionsController`](/game-api/types/global-e-h/handgesturecontroller#m-collisionscontroller).
