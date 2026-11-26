---
title: "RendererMeshReplacePooledObject"
description: "Pooled object that swaps the mesh and material on a set of renderers when set up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RendererMeshReplacePooledObject

A **class** in `Root.Township`, the global namespace.

Pooled object that swaps the mesh and material on a set of renderers when set up.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`MeshReplacePooledObject`](/mod/game-api/types/global-m-o/meshreplacepooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RendererMeshReplacePooledObject()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-meshfilters" /><code>{"private MeshFilter[] meshFilters"}</code> | Mesh filters that get the mesh. |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> | Renderers that get the material. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"override void Setup(Mesh mesh, Material material)"}</code> | Sets the material on each renderer and the mesh on each matching filter. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: logs an error if the renderer and mesh filter counts differ. |

</details>
