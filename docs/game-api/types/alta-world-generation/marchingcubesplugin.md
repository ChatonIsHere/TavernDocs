---
title: "MarchingCubesPlugin"
description: "class MarchingCubesPlugin in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubesPlugin

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Plugin`](/game-api/types/alta-world-generation/plugin)
- **Derived types** [`MarchingCubesPlugin.Create`](/game-api/types/alta-world-generation/marchingcubesplugin-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/marchingcubesplugin-create), [`GeneratedMesh`](/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MarchingCubesPlugin()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-generatorlayer" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" generatorLayer"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-meshes" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{", "}<Link to="/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh">{"MarchingCubesPlugin.GeneratedMesh"}</Link>{"> meshes"}</code> |  |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmesh" /><code><Link to="/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh">{"MarchingCubesPlugin.GeneratedMesh"}</Link>{" GetMesh("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-modify" /><code>{"override void Modify("}<Link to="/game-api/types/alta-world-generation/mapchunk">{"MapChunk"}</Link>{" chunk, "}<Link to="/game-api/types/alta-world-generation/ipartinstance">{"IPartInstance"}</Link>{"[] parts)"}</code> |  |
| <Link id="m-ensurecleanmeshmap" /><code>{"private void EnsureCleanMeshMap()"}</code> |  |

## Used in

Members of other types that take, return or hold a `MarchingCubesPlugin`:

[`MarchingCubesChunkDisplay.GetMesh`](/game-api/types/alta-world-generation/marchingcubeschunkdisplay#m-getmesh).
