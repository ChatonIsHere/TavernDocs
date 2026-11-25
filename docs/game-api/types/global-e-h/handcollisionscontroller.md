---
title: "HandCollisionsController"
description: "class HandCollisionsController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandCollisionsController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandCollisionsController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderforfinger" /><code>{"private Dictionary<int, Collider> colliderForFinger"}</code> |  |
| <Link id="m-idlecollidersthreshold" /><code>{"private float idleCollidersThreshold"}</code> |  |
| <Link id="m-indexfingercollider" /><code>{"private Collider indexFingerCollider"}</code> |  |
| <Link id="m-littlefingercollider" /><code>{"private Collider littleFingerCollider"}</code> |  |
| <Link id="m-middlefingercollider" /><code>{"private Collider middleFingerCollider"}</code> |  |
| <Link id="m-numberoffingers" /><code>{"private const int NumberOfFingers"}</code> |  |
| <Link id="m-ringfingercollider" /><code>{"private Collider ringFingerCollider"}</code> |  |
| <Link id="m-thumbcollider" /><code>{"private Collider thumbCollider"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableallcolliders" /><code>{"void DisableAllColliders()"}</code> |  |
| <Link id="m-enablecollidersforfreemode" /><code>{"void EnableCollidersForFreeMode(int fingerIndex, float axis)"}</code> |  |
| <Link id="m-enabledcollidersforgesture" /><code>{"void EnabledCollidersForGesture("}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture)"}</code> |  |
| <Link id="m-enabledcollidersforidlegesture" /><code>{"void EnabledCollidersForIdleGesture("}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" idleGesture, float gripAxis)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-fillcollidersmap" /><code>{"private void FillCollidersMap()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HandCollisionsController`:

[`HandGestureController.collisionsController`](/game-api/types/global-e-h/handgesturecontroller#m-collisionscontroller).
