---
title: "ReviveOrbMovementModifier"
description: "class ReviveOrbMovementModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReviveOrbMovementModifier

A **class** in `Root.Township`, `Township.Downed`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReviveOrbMovementModifier()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private readonly AnimationCurve curve"}</code> |  |
| <Link id="m-movementrange" /><code>{"private Vector3 movementRange"}</code> |  |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> |  |
| <Link id="m-originalposition" /><code>{"private Vector3 originalPosition"}</code> |  |
| <Link id="m-startingposition" /><code>{"private Vector3 startingPosition"}</code> |  |
| <Link id="m-targetposition" /><code>{"private Vector3 targetPosition"}</code> |  |
| <Link id="m-timer" /><code>{"private float timer"}</code> |  |
| <Link id="m-timetomove" /><code>{"private float timeToMove"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize(Vector3 movementRange, float moveSpeed)"}</code> |  |
| <Link id="m-setoriginposition" /><code>{"void SetOriginPosition(Vector3 newPosition)"}</code> |  |
| <Link id="m-lerptoposition" /><code>{"private IEnumerator LerpToPosition() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ReviveOrbMovementModifier`:

[`ReviveCompletableActivity.orbPositionModifiers`](/game-api/types/game-other-namespaces/revivecompletableactivity#m-orbpositionmodifiers).
