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
| <Link id="m-ctor" /><code>{"TerrainInfo()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-splatmapdivider" /><code>{"const int SplatMapDivider"}</code> | <span className="api-desc">Constant 2. Probably the splat map's resolution divisor.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-splatcontrol" /><code>{"private static readonly int _SplatControl"}</code> | <span className="api-desc">Shader property ID of the terrain material's splat control texture.</span> |
| <Link id="m-instantiatedsplat" /><code>{"private Texture2D instantiatedSplat"}</code> | <span className="api-desc">Runtime copy of `sourceSplat`, made on first use of `Splat`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-sourcesplat" /><code>{"private Texture2D sourceSplat"}</code> | <span className="api-desc">The splat map asset copied for `Splat`.</span> |
| <Link id="m-terrain" /><code>{"private Terrain terrain"}</code> | <span className="api-desc">The Unity `Terrain` on this object.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-offset" /><code>{"Vector3 Offset { get; private set; }"}</code> | <span className="api-desc">World position of the terrain's corner.</span> |
| <Link id="m-size" /><code>{"Vector3 Size { get; private set; }"}</code> | <span className="api-desc">Terrain size in world units.</span> |
| <Link id="m-splat" /><code>{"Texture2D Splat { get; }"}</code> | <span className="api-desc">A writable copy of the splat (texture blend) map. Made on first read and applied to the terrain material.</span> |
| <Link id="m-terraindata" /><code>{"TerrainData TerrainData { get; private set; }"}</code> | <span className="api-desc">The terrain data in use (a copy, except on Android).</span> |
| <Link id="m-unit" /><code>{"Vector3 Unit { get; private set; }"}</code> | <span className="api-desc">Size of one heightmap cell in world units.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getheightandnormalatposition" /><code>{"float GetHeightAndNormalAtPosition(float x, float z, out Vector3 normal)"}</code> | <span className="api-desc">Terrain height (world y) and surface normal at a world x and z.</span> |
| <Link id="m-getheightatposition" /><code>{"float GetHeightAtPosition("}<Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" access, float x, float z)"}</code> | <span className="api-desc">Terrain height at a world x and z. The `TerrainAccess` overload reads from that segment and does not add the terrain's y offset.</span> |
| <Link id="m-getheightatposition-2" /><code>{"float GetHeightAtPosition(float x, float z)"}</code> | <span className="api-desc">Terrain height at a world x and z. The `TerrainAccess` overload reads from that segment and does not add the terrain's y offset.</span> |
| <Link id="m-getnormalatposition" /><code>{"Vector3 GetNormalAtPosition(float x, float z)"}</code> | <span className="api-desc">Surface normal at a world x and z.</span> |
| <Link id="m-getsegment" /><code><Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" GetSegment(float x, float y, float width, float height, bool isHeight = true, bool isSplat = true)"}</code> | <span className="api-desc">Gets a `TerrainAccess` for a rectangle or bounds, clamped to the heightmap, with heights and splat if asked.</span> |
| <Link id="m-getsegment-2" /><code><Link to="/mod/game-api/types/global-t-x/terrainaccess">{"TerrainAccess"}</Link>{" GetSegment(Bounds bounds, bool isHeight = true, bool isSplat = true)"}</code> | <span className="api-desc">Gets a `TerrainAccess` for a rectangle or bounds, clamped to the heightmap, with heights and splat if asked.</span> |
| <Link id="m-getsteepnessatposition" /><code>{"float GetSteepnessAtPosition(float x, float z)"}</code> | <span className="api-desc">Slope in degrees at a world x and z.</span> |
| <Link id="m-initializeeditor" /><code>{"void InitializeEditor()"}</code> | <span className="api-desc">Editor: reads the terrain data without copying it.</span> |
| <Link id="m-isabove" /><code>{"bool IsAbove(Vector3 point, float lenience = 0)"}</code> | <span className="api-desc">True if the point is above the terrain, allowing some lenience.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Copies the terrain data (except on Android) and hooks it to the terrain and its collider.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the copied splat texture and material, and destroys the copied terrain data (except on Android, which uses the original).</span> |

</details>

## Used in

Members of other types that take, return or hold a `TerrainInfo`:

<div className="api-used-in">

[`ForestGenerator.terrain`](/mod/game-api/types/alta-world-generation/forestgenerator#m-terrain), [`TerrainAccess.ApplyTo`](/mod/game-api/types/global-t-x/terrainaccess#m-applyto), [`TerrainAccess.Terrain`](/mod/game-api/types/global-t-x/terrainaccess#m-terrain), [`TerrainAccess.TerrainAccess`](/mod/game-api/types/global-t-x/terrainaccess#m-ctor).

</div>
