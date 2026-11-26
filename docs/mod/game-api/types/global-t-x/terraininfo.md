---
title: "TerrainInfo"
description: "Singleton (SingletonBehaviour<TerrainInfo>.Instance) wrapping the world's Unity terrain: height, normal and steepness lookups in world coordinates, and the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainInfo

A **class** in `Root.Township`, the global namespace.

Singleton (`SingletonBehaviour<TerrainInfo>.Instance`) wrapping the world's Unity terrain: height, normal and steepness lookups in world coordinates, and the splat map. The server disables the terrain renderer.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`SingletonBehaviour<TerrainInfo>`](/mod/game-api/types/assembly-other/singletonbehaviour-t)
- **Derived types** [`TerrainInfo`](/mod/game-api/types/global-t-x/terraininfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainInfo()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-splatmapdivider" /><code>{"const int SplatMapDivider"}</code> | Constant 2. Probably the splat map's resolution divisor. |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-splatcontrol" /><code>{"private static readonly int _SplatControl"}</code> | Shader property ID of the terrain material's splat control texture. |
| <Link id="m-instantiatedsplat" /><code>{"private Texture2D instantiatedSplat"}</code> | Runtime copy of `sourceSplat`, made on first use of `Splat`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-sourcesplat" /><code>{"private Texture2D sourceSplat"}</code> | The splat map asset copied for `Splat`. |
| <Link id="m-terrain" /><code>{"private Terrain terrain"}</code> | The Unity `Terrain` on this object. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"Vector3 Offset { get; private set; }"}</code> | World position of the terrain's corner. |
| <Link id="m-size" /><code>{"Vector3 Size { get; private set; }"}</code> | Terrain size in world units. |
| <Link id="m-splat" /><code>{"Texture2D Splat { get; }"}</code> | A writable copy of the splat (texture blend) map. Made on first read and applied to the terrain material. |
| <Link id="m-terraindata" /><code>{"TerrainData TerrainData { get; private set; }"}</code> | The terrain data in use (a copy, except on Android). |
| <Link id="m-unit" /><code>{"Vector3 Unit { get; private set; }"}</code> | Size of one heightmap cell in world units. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getheightandnormalatposition" /><code>{"float GetHeightAndNormalAtPosition(float x, float z, out Vector3 normal)"}</code> | Terrain height (world y) and surface normal at a world x and z. |
| <Link id="m-getheightatposition" /><code>{"float GetHeightAtPosition("}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, float x, float z)"}</code> | Terrain height at a world x and z. The `TerrainAccess` overload reads from that segment and does not add the terrain's y offset. |
| <Link id="m-getheightatposition-2" /><code>{"float GetHeightAtPosition(float x, float z)"}</code> | Terrain height at a world x and z. The `TerrainAccess` overload reads from that segment and does not add the terrain's y offset. |
| <Link id="m-getnormalatposition" /><code>{"Vector3 GetNormalAtPosition(float x, float z)"}</code> | Surface normal at a world x and z. |
| <Link id="m-getsegment" /><code><Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" GetSegment(float x, float y, float width, float height, bool isHeight = true, bool isSplat = true)"}</code> | Gets a `TerrainAccess` for a rectangle or bounds, clamped to the heightmap, with heights and splat if asked. |
| <Link id="m-getsegment-2" /><code><Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" GetSegment(Bounds bounds, bool isHeight = true, bool isSplat = true)"}</code> | Gets a `TerrainAccess` for a rectangle or bounds, clamped to the heightmap, with heights and splat if asked. |
| <Link id="m-getsteepnessatposition" /><code>{"float GetSteepnessAtPosition(float x, float z)"}</code> | Slope in degrees at a world x and z. |
| <Link id="m-initializeeditor" /><code>{"void InitializeEditor()"}</code> | Editor: reads the terrain data without copying it. |
| <Link id="m-isabove" /><code>{"bool IsAbove(Vector3 point, float lenience = 0)"}</code> | True if the point is above the terrain, allowing some lenience. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Copies the terrain data (except on Android) and hooks it to the terrain and its collider. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the copied splat texture and material, and destroys the copied terrain data (except on Android, which uses the original). |

</details>

## Used in

Members of other types that take, return or hold a `TerrainInfo`:

[`ForestGenerator.terrain`](/mod/game-api/types/alta-world-generation/forestgenerator#m-terrain), [`TerrainAccess.ApplyTo`](/mod/game-api/types/global-t-x/terrainaccess#m-applyto), [`TerrainAccess.Terrain`](/mod/game-api/types/global-t-x/terrainaccess#m-terrain), [`TerrainAccess.TerrainAccess`](/mod/game-api/types/global-t-x/terrainaccess#m-ctor).
