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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReviveOrbMovementModifier()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private readonly AnimationCurve curve"}</code> | <span className="api-desc">Ease in and out curve for each move.</span> |
| <Link id="m-movementrange" /><code>{"private Vector3 movementRange"}</code> | <span className="api-desc">Per-axis size of the random offset around the origin.</span> |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> | <span className="api-desc">Drift speed in units per second.</span> |
| <Link id="m-originalposition" /><code>{"private Vector3 originalPosition"}</code> | <span className="api-desc">Local position the drift is centred on.</span> |
| <Link id="m-startingposition" /><code>{"private Vector3 startingPosition"}</code> | <span className="api-desc">Where the current move started.</span> |
| <Link id="m-targetposition" /><code>{"private Vector3 targetPosition"}</code> | <span className="api-desc">Where the current move ends.</span> |
| <Link id="m-timer" /><code>{"private float timer"}</code> | <span className="api-desc">Time left in the current move.</span> |
| <Link id="m-timetomove" /><code>{"private float timeToMove"}</code> | <span className="api-desc">Duration of the current move.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(Vector3 movementRange, float moveSpeed)"}</code> | <span className="api-desc">Sets range and speed, takes the current local position as origin and starts drifting.</span> |
| <Link id="m-setoriginposition" /><code>{"void SetOriginPosition(Vector3 newPosition)"}</code> | <span className="api-desc">Restarts drifting around a new origin.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerptoposition" /><code>{"private IEnumerator LerpToPosition() (iterator)"}</code> | <span className="api-desc">Coroutine that moves to a random point in range at `moveSpeed`, then picks another.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ReviveOrbMovementModifier`:

<div className="api-used-in">

[`ReviveCompletableActivity.orbPositionModifiers`](/mod/game-api/types/game-other-namespaces/revivecompletableactivity#m-orbpositionmodifiers).

</div>
