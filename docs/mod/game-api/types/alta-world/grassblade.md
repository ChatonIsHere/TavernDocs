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
| <Link id="m-ctor" /><code>{"GrassBlade()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blademesh" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" bladeMesh"}</code> | Backing field for `Mesh`. |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | Cached `MeshFilter` for `Filter`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-filter-2" /><code>{"MeshFilter Filter { get; }"}</code> | The blade's `MeshFilter`, fetched on first use. |
| <Link id="m-mesh" /><code><Link to="/mod/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" Mesh { get; }"}</code> | The `GrassBladeMesh` asset this blade uses. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlocalvertices" /><code>{"List<Vector3> GetLocalVertices()"}</code> | Returns the blade's vertices offset by its local position and rotated back by its rotation. |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-world/grassblademesh">{"GrassBladeMesh"}</Link>{" mesh, Material grassMaterial, bool hasThickening)"}</code> | Builds the blade's mesh from the asset, with UVs and vertex colours for height and thickening, and sets the material with shadows off. |

## Used in

Members of other types that take, return or hold a `GrassBlade`:

[`GrassClumpHolder.blades`](/mod/game-api/types/alta-world/grassclumpholder#m-blades).
