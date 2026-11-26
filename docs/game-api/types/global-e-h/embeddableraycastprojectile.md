---
title: "EmbeddableRaycastProjectile"
description: "Links a RaycastProjectile to an Embeddable, so a raycast hit makes the projectile embed where it hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableRaycastProjectile

A **class** in `Root.Township`, no namespace.

Links a `RaycastProjectile` to an `Embeddable`, so a raycast hit makes the projectile embed where it hit.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EmbeddableRaycastProjectile()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-embeddable" /><code>{"private "}<Link to="/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable"}</code> | The embeddable that sticks into the hit. |
| <Link id="m-raycastprojectile" /><code>{"private "}<Link to="/game-api/types/global-q-r/raycastprojectile">{"RaycastProjectile"}</Link>{" raycastProjectile"}</code> | The projectile whose hits are forwarded. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generatehitforembeddable" /><code>{"private void GenerateHitForEmbeddable(RaycastHit hit)"}</code> | Passes the hit collider, point and normal to the embeddable as an external collision. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Subscribes to the projectile's collided event. |

</details>
