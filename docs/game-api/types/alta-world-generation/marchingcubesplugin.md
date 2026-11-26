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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Plugin`](/game-api/types/alta-world-generation/plugin)
- **Derived types** [`MarchingCubesPlugin.Create`](/game-api/types/alta-world-generation/marchingcubesplugin-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/marchingcubesplugin-create), [`GeneratedMesh`](/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarchingCubesPlugin()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-generatorlayer" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" generatorLayer"}</code> | The plugin layer whose values are meshed. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-meshes" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{", "}<Link to="/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh">{"MarchingCubesPlugin.GeneratedMesh"}</Link>{"> meshes"}</code> | Meshes built for each chunk, waiting to be collected with `GetMesh`. |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> | Density value where the surface is placed (default 0.5). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmesh" /><code><Link to="/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh">{"MarchingCubesPlugin.GeneratedMesh"}</Link>{" GetMesh("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> | Returns and removes the mesh built for the chunk. Throws if none was built. |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{"[] parts)"}</code> | Builds the chunk's mesh from `generatorLayer` at `threshold` (or takes the pregenerated one) and stores it for `GetMesh`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ensurecleanmeshmap" /><code>{"private void EnsureCleanMeshMap()"}</code> | Removes entries for chunks that have been destroyed from `meshes`. |

</details>

## Used in

Members of other types that take, return or hold a `MarchingCubesPlugin`:

[`MarchingCubesChunkDisplay.GetMesh`](/game-api/types/alta-world-generation/marchingcubeschunkdisplay#m-getmesh).
