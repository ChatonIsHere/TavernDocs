---
title: "PooledParticleSystemMeshEmision"
description: "A timed pooled effect whose particle system emits from a target mesh renderer's shape."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledParticleSystemMeshEmision

A **class** in `Root.Township`, no namespace.

A timed pooled effect whose particle system emits from a target mesh renderer's shape.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`DestroyByTime`](/game-api/types/global-c-d/destroybytime), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledParticleSystemMeshEmision()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-system" /><code>{"private ParticleSystem system"}</code> | The particle system that emits from the mesh. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setmesh" /><code>{"void SetMesh(MeshRenderer targetMeshRenderer)"}</code> | Sets the particle shape to the given mesh renderer and plays the system. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Build step: finds the particle system in children. |

</details>

## Used in

Members of other types that take, return or hold a `PooledParticleSystemMeshEmision`:

[`ForgedModel<TB, TA>.MeshEffect`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-mesheffect), [`WoodcutTreeModel.MeshEffect`](/game-api/types/alta-crafting/woodcuttreemodel#m-mesheffect), [`DurabilityStateChangeEffect.particleSystem`](/game-api/types/global-c-d/durabilitystatechangeeffect#m-particlesystem).
