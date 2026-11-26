---
title: "GrassBlade"
description: "A single grass blade object, with a mesh built from a GrassBladeMesh asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrassBlade

A **class** in `Root.Township`, `Alta.Environmental.Vegetation`.

A single grass blade object, with a mesh built from a `GrassBladeMesh` asset.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrassBlade()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blademesh" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" bladeMesh"}</code> | <span className="api-desc">Backing field for `Mesh`.</span> |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">Cached `MeshFilter` for `Filter`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-filter-2" /><code>{"MeshFilter Filter { get; }"}</code> | <span className="api-desc">The blade's `MeshFilter`, fetched on first use.</span> |
| <Link id="m-mesh" /><code><Link to="/mod/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" Mesh { get; }"}</code> | <span className="api-desc">The `GrassBladeMesh` asset this blade uses.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlocalvertices" /><code>{"List<Vector3> GetLocalVertices()"}</code> | <span className="api-desc">Returns the blade's vertices offset by its local position and rotated back by its rotation.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" mesh, Material grassMaterial, bool hasThickening)"}</code> | <span className="api-desc">Builds the blade's mesh from the asset, with UVs and vertex colours for height and thickening, and sets the material with shadows off.</span> |

## Used in

Members of other types that take, return or hold a `GrassBlade`:

<div className="api-used-in">

[`GrassClumpHolder.blades`](/mod/game-api/types/alta-world/grassclumpholder#m-blades).

</div>
