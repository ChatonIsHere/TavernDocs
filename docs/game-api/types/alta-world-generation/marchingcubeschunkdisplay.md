---
title: "MarchingCubesChunkDisplay"
description: "class MarchingCubesChunkDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubesChunkDisplay

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarchingCubesChunkDisplay()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-chunkheight" /><code>{"private float chunkHeight"}</code> |  |
| <Link id="m-collider" /><code>{"private MeshCollider collider"}</code> |  |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> |  |
| <Link id="m-issmootheddown" /><code>{"private bool isSmoothedDown"}</code> |  |
| <Link id="m-issmoothedup" /><code>{"private bool isSmoothedUp"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> |  |
| <Link id="m-renderer" /><code>{"private MeshRenderer renderer"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> |  |
| <Link id="m-getmesh" /><code>{"private void GetMesh("}<Link to="/game-api/types/alta-world-generation/marchingcubesplugin">{"MarchingCubesPlugin"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, out bool wasGenerated)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-smoothnormals" /><code>{"private IEnumerator SmoothNormals("}<Link to="/game-api/types/alta-world-generation/marchingcubeschunkdisplay">{"MarchingCubesChunkDisplay"}</Link>{" below, "}<Link to="/game-api/types/alta-world-generation/marchingcubeschunkdisplay">{"MarchingCubesChunkDisplay"}</Link>{" above) (iterator)"}</code> |  |
