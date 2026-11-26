---
title: "MarchingCubesPlugin"
description: "Cave generator plugin that turns a density layer into a mesh with marching cubes, one mesh per map chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubesPlugin

A **class** in `Root.Township`, `Alta.Caves`.

Cave generator plugin that turns a density layer into a mesh with marching cubes, one mesh per map chunk. Uses a pregenerated mesh instead when one exists for the same seed.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Plugin`](/mod/game-api/types/alta-world-generation/plugin)
- **Derived types** [`MarchingCubesPlugin.Create`](/mod/game-api/types/alta-world-generation/marchingcubesplugin-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/marchingcubesplugin-create), [`GeneratedMesh`](/mod/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarchingCubesPlugin()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generatorlayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" generatorLayer"}</code> | <span className="api-desc">The plugin layer whose values are meshed.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-meshes" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{", "}<Link to="/mod/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh">{"MarchingCubesPlugin.GeneratedMesh"}</Link>{"> meshes"}</code> | <span className="api-desc">Meshes built for each chunk, waiting to be collected with `GetMesh`.</span> |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | <span className="api-desc">Density value where the surface is placed (default 0.5).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmesh" /><code><Link to="/mod/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh">{"MarchingCubesPlugin.GeneratedMesh"}</Link>{" GetMesh("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Returns and removes the mesh built for the chunk. Throws if none was built.</span> |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/mod/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/mod/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{"[] parts)"}</code> | <span className="api-desc">Builds the chunk's mesh from `generatorLayer` at `threshold` (or takes the pregenerated one) and stores it for `GetMesh`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ensurecleanmeshmap" /><code>{"private void EnsureCleanMeshMap()"}</code> | <span className="api-desc">Removes entries for chunks that have been destroyed from `meshes`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `MarchingCubesPlugin`:

<div className="api-used-in">

[`MarchingCubesChunkDisplay.GetMesh`](/mod/game-api/types/alta-world-generation/marchingcubeschunkdisplay#m-getmesh).

</div>
