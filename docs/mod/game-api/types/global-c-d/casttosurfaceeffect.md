---
title: "CastToSurfaceEffect"
description: "Pooled effect (a DestroyByTime) that, when taken from the pool, line-casts for ground and shows a child particle at the hit point, facing along the surface..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CastToSurfaceEffect

A **class** in `Root.Township`, the global namespace.

Pooled effect (a `DestroyByTime`) that, when taken from the pool, line-casts for ground and shows a child particle at the hit point, facing along the surface normal.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`DestroyByTime`](/mod/game-api/types/global-c-d/destroybytime), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CastToSurfaceEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-castdirection" /><code>{"private Vector3 castDirection"}</code> | Direction of the cast. Default down. |
| <Link id="m-castdistance" /><code>{"private float castDistance"}</code> | Length of the cast, centred on the effect's position. |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> | Layers the cast can hit. |
| <Link id="m-groundparticle" /><code>{"private GameObject groundParticle"}</code> | Child object shown at the ground hit point. |
| <Link id="m-iscasting" /><code>{"private bool isCasting"}</code> | Set at bake time when `groundParticle` is set. Nothing happens at runtime when false. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | If baking found a ground particle, hides it and hooks the pool request and release events. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-casttoground" /><code>{"private void CastToGround("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | On pool request: casts along `castDirection` and, on a hit, moves and shows the ground particle there. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build bake step: sets `isCasting` to whether a ground particle is assigned. |
| <Link id="m-storecasted" /><code>{"private void StoreCasted("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | On pool release: hides the ground particle. |

</details>
