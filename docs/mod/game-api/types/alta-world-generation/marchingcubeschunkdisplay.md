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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`MapChunkDisplay`](/mod/game-api/types/alta-world-generation/mapchunkdisplay)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarchingCubesChunkDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkheight" /><code>{"private float chunkHeight"}</code> | <span className="api-desc">Height of a chunk, used to find edge vertices when smoothing normals.</span> |
| <Link id="m-collider" /><code>{"private MeshCollider collider"}</code> | <span className="api-desc">The `MeshCollider` that gets the mesh.</span> |
| <Link id="m-filter" /><code>{"private MeshFilter filter"}</code> | <span className="api-desc">The `MeshFilter` that shows the mesh on clients.</span> |
| <Link id="m-issmootheddown" /><code>{"private bool isSmoothedDown"}</code> | <span className="api-desc">Whether the bottom edge normals have been smoothed.</span> |
| <Link id="m-issmoothedup" /><code>{"private bool isSmoothedUp"}</code> | <span className="api-desc">Whether the top edge normals have been smoothed.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | <span className="api-desc">The chunk's mesh.</span> |
| <Link id="m-renderer" /><code>{"private MeshRenderer renderer"}</code> | <span className="api-desc">The renderer registered as a terrain renderer with the layer streamer.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Cleans up a previous runtime-only mesh.</span> |
| <Link id="m-render" /><code>{"override IEnumerator Render() (iterator)"}</code> | <span className="api-desc">Gets the mesh, recalculates bounds and normals if new, shows it on clients, sets the collider and updates the streamer bounds.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getmesh" /><code>{"private void GetMesh("}<Link to="/mod/game-api/types/alta-world-generation/marchingcubesplugin">{"MarchingCubesPlugin"}</Link>{" plugin, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, out bool wasGenerated)"}</code> | <span className="api-desc">Gets or builds this chunk's mesh from the marching cubes plugin.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the mesh if it was created at runtime.</span> |
| <Link id="m-smoothnormals" /><code>{"private IEnumerator SmoothNormals("}<Link to="/mod/game-api/types/alta-world-generation/marchingcubeschunkdisplay">{"MarchingCubesChunkDisplay"}</Link>{" below, "}<Link to="/mod/game-api/types/alta-world-generation/marchingcubeschunkdisplay">{"MarchingCubesChunkDisplay"}</Link>{" above) (iterator)"}</code> | <span className="api-desc">Blends normals where this chunk's mesh meets the layer above; not called in the decompiled code.</span> |

</details>
