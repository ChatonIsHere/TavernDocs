---
title: "MarchingCubesPlugin.GeneratedMesh"
description: "Mesh made by the marching cubes plugin for one map chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MarchingCubesPlugin.GeneratedMesh

A **class** in `Root.Township`, `Alta.Caves`.

Mesh made by the marching cubes plugin for one map chunk. Holds either an existing mesh or raw vertices and indices to build one from later.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`MarchingCubesPlugin`](/mod/game-api/types/alta-world-generation/marchingcubesplugin)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneratedMesh(Mesh existing)"}</code> | Creates a `MarchingCubesPlugin.GeneratedMesh` from `vertices` and `indices`. |
| <Link id="m-ctor-2" /><code>{"GeneratedMesh(List<Vector3> vertices, int[] indices)"}</code> | Creates a `MarchingCubesPlugin.GeneratedMesh` from `vertices` and `indices`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-indices" /><code>{"private int[] indices"}</code> | Triangle indices for the mesh to build. |
| <Link id="m-mesh" /><code>{"private Mesh mesh"}</code> | The mesh, once it exists. Built meshes are marked not to save. |
| <Link id="m-vertices" /><code>{"private List<Vector3> vertices"}</code> | Vertices for the mesh to build. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getorcreatemesh" /><code>{"Mesh GetOrCreateMesh("}<Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" manager, int layer, out bool wasGenerated)"}</code> | Returns the mesh, building it from the stored vertices and indices the first time. `wasGenerated` says if it was just built. |

## Used in

Members of other types that take, return or hold a `GeneratedMesh`:

[`MarchingCubesPlugin.GetMesh`](/mod/game-api/types/alta-world-generation/marchingcubesplugin#m-getmesh), [`MarchingCubesPlugin.meshes`](/mod/game-api/types/alta-world-generation/marchingcubesplugin#m-meshes).
