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
| <Link id="m-ctor" /><code>{"RendererMeshReplacePooledObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-meshfilters" /><code>{"private MeshFilter[] meshFilters"}</code> | <span className="api-desc">Mesh filters that get the mesh.</span> |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> | <span className="api-desc">Renderers that get the material.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"override void Setup(Mesh mesh, Material material)"}</code> | <span className="api-desc">Sets the material on each renderer and the mesh on each matching filter.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: logs an error if the renderer and mesh filter counts differ.</span> |

</details>
