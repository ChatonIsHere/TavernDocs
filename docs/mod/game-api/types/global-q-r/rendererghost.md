---
title: "RendererGhost"
description: "Pooled copy of a mesh renderer, given the same mesh and materials; used by ObjectVisualDouble to show a ghost of an object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererGhost

A **class** in `Root.Township`, the global namespace.

Pooled copy of a mesh renderer, given the same mesh and materials; used by `ObjectVisualDouble` to show a ghost of an object.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererGhost()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-targetfilter" /><code>{"private MeshFilter targetFilter"}</code> | <span className="api-desc">Mesh filter that gets the mesh.</span> |
| <Link id="m-targetrenderer" /><code>{"private MeshRenderer targetRenderer"}</code> | <span className="api-desc">Renderer that gets the materials.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"void Setup(MeshRenderer renderer)"}</code> | <span className="api-desc">Copies the source renderer's shared materials and mesh.</span> |
