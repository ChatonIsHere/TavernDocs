---
title: "MeshEffect"
description: "Pooled effect object that exposes its mesh filter and renderer, so callers can set the mesh and material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeshEffect

A **class** in `Root.Township`, the global namespace.

Pooled effect object that exposes its mesh filter and renderer, so callers can set the mesh and material.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MeshEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-meshfilter" /><code>{"private MeshFilter meshFilter"}</code> | <span className="api-desc">Backing field for `MeshFilter`.</span> |
| <Link id="m-meshrenderer" /><code>{"private MeshRenderer meshRenderer"}</code> | <span className="api-desc">Backing field for `MeshRenderer`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshfilter-2" /><code>{"MeshFilter MeshFilter { get; }"}</code> | <span className="api-desc">The effect's mesh filter.</span> |
| <Link id="m-meshrenderer-2" /><code>{"MeshRenderer MeshRenderer { get; }"}</code> | <span className="api-desc">The effect's mesh renderer.</span> |

## Used in

Members of other types that take, return or hold a `MeshEffect`:

<div className="api-used-in">

[`SteelSongEffect.meshEffects`](/mod/game-api/types/global-s/steelsongeffect#m-mesheffects), [`ToolBasedEffectBase.meshEffects`](/mod/game-api/types/global-t-x/toolbasedeffectbase#m-mesheffects).

</div>
