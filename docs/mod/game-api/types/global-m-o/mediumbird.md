---
title: "MediumBird"
description: "Test driver for a bird's animator: pushes inspector values into the animator each frame and can move the bird forward."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MediumBird

A **class** in `Root.Township`, the global namespace.

Test driver for a bird's animator: pushes inspector values into the animator each frame and can move the bird forward.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MediumBird()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-aggression" /><code>{"private float aggression"}</code> | Value for the Aggression parameter. |
| <Link id="m-ismoving" /><code>{"private bool isMoving"}</code> | Whether the bird moves forward each frame. |
| <Link id="m-passiveaction" /><code>{"private float passiveAction"}</code> | Value for the Idle Behaviour parameter. |
| <Link id="m-passiveweight" /><code>{"private float passiveWeight"}</code> | Weight of animator layer 1. |
| <Link id="m-speed" /><code>{"private float speed"}</code> | Value for the Speed parameter. |
| <Link id="m-speedmovement" /><code>{"private float speedMovement"}</code> | Forward speed when moving. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code><Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" Animator { get; private set; }"}</code> | The `NetworkAnimator` found in the children. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the network animator. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Sets the Speed, Idle Behaviour and Aggression parameters and layer 1 weight, and moves forward if `isMoving`. |

</details>
