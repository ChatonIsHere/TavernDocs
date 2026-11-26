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
| <Link id="m-ctor" /><code>{"MediumBird()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-aggression" /><code>{"private float aggression"}</code> | <span className="api-desc">Value for the Aggression parameter.</span> |
| <Link id="m-ismoving" /><code>{"private bool isMoving"}</code> | <span className="api-desc">Whether the bird moves forward each frame.</span> |
| <Link id="m-passiveaction" /><code>{"private float passiveAction"}</code> | <span className="api-desc">Value for the Idle Behaviour parameter.</span> |
| <Link id="m-passiveweight" /><code>{"private float passiveWeight"}</code> | <span className="api-desc">Weight of animator layer 1.</span> |
| <Link id="m-speed" /><code>{"private float speed"}</code> | <span className="api-desc">Value for the Speed parameter.</span> |
| <Link id="m-speedmovement" /><code>{"private float speedMovement"}</code> | <span className="api-desc">Forward speed when moving.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code><Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" Animator { get; private set; }"}</code> | <span className="api-desc">The `NetworkAnimator` found in the children.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the network animator.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Sets the Speed, Idle Behaviour and Aggression parameters and layer 1 weight, and moves forward if `isMoving`.</span> |

</details>
