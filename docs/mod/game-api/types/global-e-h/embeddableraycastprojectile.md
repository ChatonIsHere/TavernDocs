---
title: "EmbeddableRaycastProjectile"
description: "Links a RaycastProjectile to an Embeddable, so a raycast hit makes the projectile embed where it hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmbeddableRaycastProjectile

A **class** in `Root.Township`, the global namespace.

Links a `RaycastProjectile` to an `Embeddable`, so a raycast hit makes the projectile embed where it hit.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EmbeddableRaycastProjectile()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-embeddable" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/embeddable">{"Embeddable"}</Link>{" embeddable"}</code> | <span className="api-desc">The embeddable that sticks into the hit.</span> |
| <Link id="m-raycastprojectile" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/raycastprojectile">{"RaycastProjectile"}</Link>{" raycastProjectile"}</code> | <span className="api-desc">The projectile whose hits are forwarded.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generatehitforembeddable" /><code>{"private void GenerateHitForEmbeddable(RaycastHit hit)"}</code> | <span className="api-desc">Passes the hit collider, point and normal to the embeddable as an external collision.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Subscribes to the projectile's collided event.</span> |

</details>
