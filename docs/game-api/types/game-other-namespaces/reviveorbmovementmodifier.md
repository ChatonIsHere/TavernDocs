---
title: "ReviveOrbMovementModifier"
description: "Makes a revive orb's anchor drift between random points around its origin, with ease in and out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReviveOrbMovementModifier

A **class** in `Root.Township`, `Township.Downed`.

Makes a revive orb's anchor drift between random points around its origin, with ease in and out.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReviveOrbMovementModifier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private readonly AnimationCurve curve"}</code> | Ease in and out curve for each move. |
| <Link id="m-movementrange" /><code>{"private Vector3 movementRange"}</code> | Per-axis size of the random offset around the origin. |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | Drift speed in units per second. |
| <Link id="m-originalposition" /><code>{"private Vector3 originalPosition"}</code> | Local position the drift is centred on. |
| <Link id="m-startingposition" /><code>{"private Vector3 startingPosition"}</code> | Where the current move started. |
| <Link id="m-targetposition" /><code>{"private Vector3 targetPosition"}</code> | Where the current move ends. |
| <Link id="m-timer" /><code>{"private float timer"}</code> | Time left in the current move. |
| <Link id="m-timetomove" /><code>{"private float timeToMove"}</code> | Duration of the current move. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(Vector3 movementRange, float moveSpeed)"}</code> | Sets range and speed, takes the current local position as origin and starts drifting. |
| <Link id="m-setoriginposition" /><code>{"void SetOriginPosition(Vector3 newPosition)"}</code> | Restarts drifting around a new origin. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerptoposition" /><code>{"private IEnumerator LerpToPosition() (iterator)"}</code> | Coroutine that moves to a random point in range at `moveSpeed`, then picks another. |

</details>

## Used in

Members of other types that take, return or hold a `ReviveOrbMovementModifier`:

[`ReviveCompletableActivity.orbPositionModifiers`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-orbpositionmodifiers).
