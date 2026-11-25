---
title: "PolygonChunkDisplay"
description: "class PolygonChunkDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PolygonChunkDisplay

A **class** in `Root.Township`, `Alta.Caves.Displays`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PolygonChunkDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> |  |
| <Link id="m-lowerlimit" /><code>{"private float lowerLimit"}</code> |  |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> |  |
| <Link id="m-minimumvertexcount" /><code>{"private const int MinimumVertexCount"}</code> |  |
| <Link id="m-scale" /><code>{"private float scale"}</code> |  |
| <Link id="m-upperlimit" /><code>{"private float upperLimit"}</code> |  |
| <Link id="m-yindex" /><code>{"private int yIndex"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-renderer" /><code>{"private MeshRenderer Renderer { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getdepth" /><code>{"float GetDepth("}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, int x, int z)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
