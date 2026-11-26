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
| <Link id="m-ctor" /><code>{"MeshEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-meshfilter" /><code>{"private MeshFilter meshFilter"}</code> | Backing field for `MeshFilter`. |
| <Link id="m-meshrenderer" /><code>{"private MeshRenderer meshRenderer"}</code> | Backing field for `MeshRenderer`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-meshfilter-2" /><code>{"MeshFilter MeshFilter { get; }"}</code> | The effect's mesh filter. |
| <Link id="m-meshrenderer-2" /><code>{"MeshRenderer MeshRenderer { get; }"}</code> | The effect's mesh renderer. |

## Used in

Members of other types that take, return or hold a `MeshEffect`:

[`SteelSongEffect.meshEffects`](/mod/game-api/types/global-s/steelsongeffect#m-mesheffects), [`ToolBasedEffectBase.meshEffects`](/mod/game-api/types/global-t-x/toolbasedeffectbase#m-mesheffects).
