---
title: "PooledParticleSystemMeshEmision"
description: "A timed pooled effect whose particle system emits from a target mesh renderer's shape."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledParticleSystemMeshEmision

A **class** in `Root.Township`, the global namespace.

A timed pooled effect whose particle system emits from a target mesh renderer's shape.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`DestroyByTime`](/mod/game-api/types/global-c-d/destroybytime), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledParticleSystemMeshEmision()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-system" /><code>{"private ParticleSystem system"}</code> | <span className="api-desc">The particle system that emits from the mesh.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmesh" /><code>{"void SetMesh(MeshRenderer targetMeshRenderer)"}</code> | <span className="api-desc">Sets the particle shape to the given mesh renderer and plays the system.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Build step: finds the particle system in children.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PooledParticleSystemMeshEmision`:

<div className="api-used-in">

[`ForgedModel<TB, TA>.MeshEffect`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-mesheffect), [`WoodcutTreeModel.MeshEffect`](/mod/game-api/types/alta-crafting/woodcuttreemodel#m-mesheffect), [`DurabilityStateChangeEffect.particleSystem`](/mod/game-api/types/global-c-d/durabilitystatechangeeffect#m-particlesystem).

</div>
