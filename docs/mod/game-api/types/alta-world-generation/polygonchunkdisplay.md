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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/mod/game-api/types/alta-world-generation/mapchunkdisplay)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PolygonChunkDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">The `MeshFilter` holding the mesh.</span> |
| <Link id="m-lowerlimit" /><code>{"private float lowerLimit"}</code> | <span className="api-desc">Cells at or below this value get no triangles.</span> |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | <span className="api-desc">The generated mesh.</span> |
| <Link id="m-minimumvertexcount" /><code>{"private const int MinimumVertexCount"}</code> | <span className="api-desc">Outlines with fewer points than this (20) are dropped unless they touch a chunk corner.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Height multiplier for layer values.</span> |
| <Link id="m-upperlimit" /><code>{"private float upperLimit"}</code> | <span className="api-desc">Cells at or above this value count as solid and are outlined.</span> |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> | <span className="api-desc">Which Y slice of the layer to use.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-renderer" /><code>{"private MeshRenderer Renderer { get; set; }"}</code> | <span className="api-desc">The mesh renderer on this object.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdepth" /><code>{"float GetDepth("}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int x, int z)"}</code> | <span className="api-desc">Height of a cell: its layer value at `yIndex` times `scale`.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Gets the filter, renderer and parent chunk and creates the mesh.</span> |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | <span className="api-desc">Traces edge colliders around cells at or above `upperLimit`, then builds triangles for cells between the limits.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the generated mesh.</span> |

</details>
