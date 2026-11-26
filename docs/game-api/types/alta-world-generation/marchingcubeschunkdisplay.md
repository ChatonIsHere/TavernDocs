---
title: "MarchingCubesChunkDisplay"
description: "Cave chunk display that shows the marching cubes mesh for its chunk and sets it as the collider."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubesChunkDisplay

A **class** in `Root.Township`, `Alta.Caves`.

Cave chunk display that shows the marching cubes mesh for its chunk and sets it as the collider. Both sides; only clients assign the visible mesh.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/game-api/types/alta-world-generation/mapchunkdisplay)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MarchingCubesChunkDisplay()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkheight" /><code>{"private float chunkHeight"}</code> | Height of a chunk, used to find edge vertices when smoothing normals. |
| <Link id="m-collider" /><code>{"private MeshCollider collider"}</code> | The `MeshCollider` that gets the mesh. |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | The `MeshFilter` that shows the mesh on clients. |
| <Link id="m-issmootheddown" /><code>{"private bool isSmoothedDown"}</code> | Whether the bottom edge normals have been smoothed. |
| <Link id="m-issmoothedup" /><code>{"private bool isSmoothedUp"}</code> | Whether the top edge normals have been smoothed. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | The chunk's mesh. |
| <Link id="m-renderer" /><code>{"private MeshRenderer renderer"}</code> | The renderer registered as a terrain renderer with the layer streamer. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Cleans up a previous runtime-only mesh. |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | Gets the mesh, recalculates bounds and normals if new, shows it on clients, sets the collider and updates the streamer bounds. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getmesh" /><code>{"private void GetMesh("}<Link to="/game-api/types/alta-world-generation/marchingcubesplugin">{"MarchingCubesPlugin"}</Link>{" plugin, "}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, out bool wasGenerated)"}</code> | Gets or builds this chunk's mesh from the marching cubes plugin. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the mesh if it was created at runtime. |
| <Link id="m-smoothnormals" /><code>{"private IEnumerator SmoothNormals("}<Link to="/game-api/types/alta-world-generation/marchingcubeschunkdisplay">{"MarchingCubesChunkDisplay"}</Link>{" below, "}<Link to="/game-api/types/alta-world-generation/marchingcubeschunkdisplay">{"MarchingCubesChunkDisplay"}</Link>{" above) (iterator)"}</code> | Blends normals where this chunk's mesh meets the layer above; not called in the decompiled code. |

</details>
