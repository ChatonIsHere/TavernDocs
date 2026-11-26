---
title: "PolygonChunkDisplay"
description: "Cave chunk display that builds a height mesh from one Y slice of its layer and traces solid regions into EdgeCollider2D outlines."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PolygonChunkDisplay

A **class** in `Root.Township`, `Alta.Caves.Displays`.

Cave chunk display that builds a height mesh from one Y slice of its layer and traces solid regions into `EdgeCollider2D` outlines. Probably an older 2D cave display.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PolygonChunkDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | The `MeshFilter` holding the mesh. |
| <Link id="m-lowerlimit" /><code>{"private float lowerLimit"}</code> | Cells at or below this value get no triangles. |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | The generated mesh. |
| <Link id="m-minimumvertexcount" /><code>{"private const int MinimumVertexCount"}</code> | Outlines with fewer points than this (20) are dropped unless they touch a chunk corner. |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Height multiplier for layer values. |
| <Link id="m-upperlimit" /><code>{"private float upperLimit"}</code> | Cells at or above this value count as solid and are outlined. |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | Which Y slice of the layer to use. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-renderer" /><code>{"private MeshRenderer Renderer { get; set; }"}</code> | The mesh renderer on this object. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdepth" /><code>{"float GetDepth("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int x, int z)"}</code> | Height of a cell: its layer value at `yIndex` times `scale`. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Gets the filter, renderer and parent chunk and creates the mesh. |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | Traces edge colliders around cells at or above `upperLimit`, then builds triangles for cells between the limits. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the generated mesh. |

</details>
