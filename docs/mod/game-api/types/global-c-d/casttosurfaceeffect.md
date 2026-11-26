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
| <Link id="m-ctor" /><code>{"CastToSurfaceEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-castdirection" /><code>{"private Vector3 castDirection"}</code> | <span className="api-desc">Direction of the cast. Default down.</span> |
| <Link id="m-castdistance" /><code>{"private float castDistance"}</code> | <span className="api-desc">Length of the cast, centred on the effect's position.</span> |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> | <span className="api-desc">Layers the cast can hit.</span> |
| <Link id="m-groundparticle" /><code>{"private GameObject groundParticle"}</code> | <span className="api-desc">Child object shown at the ground hit point.</span> |
| <Link id="m-iscasting" /><code>{"private bool isCasting"}</code> | <span className="api-desc">Set at bake time when `groundParticle` is set. Nothing happens at runtime when false.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">If baking found a ground particle, hides it and hooks the pool request and release events.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-casttoground" /><code>{"private void CastToGround("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">On pool request: casts along `castDirection` and, on a hit, moves and shows the ground particle there.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build bake step: sets `isCasting` to whether a ground particle is assigned.</span> |
| <Link id="m-storecasted" /><code>{"private void StoreCasted("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">On pool release: hides the ground particle.</span> |

</details>
