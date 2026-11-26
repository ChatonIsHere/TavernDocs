---
title: "TerrainAccess"
description: "A copied rectangle of a terrain's heightmap and splat (paint) map that can be edited and written back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainAccess

A **class** in `Root.Township`, the global namespace.

A copied rectangle of a terrain's heightmap and splat (paint) map that can be edited and written back. Made by `TerrainInfo` for forest generation and cached to disk as an `ICacheable`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`ICacheable`](/mod/game-api/types/alta-world/icacheable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainAccess("}<Link to="/mod/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" terrain)"}</code> | <span className="api-desc">Creates a `TerrainAccess` from `terrain`, `x`, `y`, `width`, `height`, `isHeight` and `isSplat`.</span> |

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-2" /><code>{"internal TerrainAccess("}<Link to="/mod/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" terrain, int x, int y, int width, int height, bool isHeight, bool isSplat)"}</code> | <span className="api-desc">Creates a `TerrainAccess` from `terrain`, `x`, `y`, `width`, `height`, `isHeight` and `isSplat`.</span> |

</details>

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heights" /><code>{"float[,] Heights { get; private set; }"}</code> | <span className="api-desc">The copied heights, indexed `[row, column]` like Unity's `GetHeights`.</span> |
| <Link id="m-heightsheight" /><code>{"int HeightsHeight { get; private set; }"}</code> | <span className="api-desc">Number of height rows in the region.</span> |
| <Link id="m-heightswidth" /><code>{"int HeightsWidth { get; private set; }"}</code> | <span className="api-desc">Number of height columns in the region.</span> |
| <Link id="m-offset" /><code>{"Vector3 Offset { get; private set; }"}</code> | <span className="api-desc">World offset of the region's corner.</span> |
| <Link id="m-scale" /><code>{"Vector3 Scale { get; private set; }"}</code> | <span className="api-desc">The terrain's heightmap scale.</span> |
| <Link id="m-splat" /><code><Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] Splat { get; private set; }"}</code> | <span className="api-desc">Splat cells for the region, one per two height samples, or null if not requested.</span> |
| <Link id="m-splatheight" /><code>{"int SplatHeight { get; private set; }"}</code> | <span className="api-desc">Splat rows in the region.</span> |
| <Link id="m-splatwidth" /><code>{"int SplatWidth { get; private set; }"}</code> | <span className="api-desc">Splat columns in the region.</span> |
| <Link id="m-terrain" /><code><Link to="/mod/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" Terrain { get; }"}</code> | <span className="api-desc">The terrain this region was taken from.</span> |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> | <span className="api-desc">Cache format version (1).</span> |
| <Link id="m-x" /><code>{"int X { get; private set; }"}</code> | <span className="api-desc">Heightmap X of the region's corner.</span> |
| <Link id="m-y" /><code>{"int Y { get; private set; }"}</code> | <span className="api-desc">Heightmap Y of the region's corner.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyheights" /><code>{"void ApplyHeights()"}</code> | <span className="api-desc">Writes `Heights` back to the terrain at `X`, `Y`.</span> |
| <Link id="m-applysplat" /><code>{"void ApplySplat()"}</code> | <span className="api-desc">Writes `Splat` back into the terrain's splat texture and applies it.</span> |
| <Link id="m-applyto" /><code>{"void ApplyTo("}<Link to="/mod/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" other)"}</code> | <span className="api-desc">Writes the same heights and splat region onto another terrain.</span> |
| <Link id="m-fillsplat" /><code>{"void FillSplat("}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" splatData)"}</code> | <span className="api-desc">Sets every splat cell to one value.</span> |
| <Link id="m-getaverage" /><code>{"float GetAverage(int x, int y)"}</code> | <span className="api-desc">Average of the four heights around a splat cell. The static overload reads a given array instead.</span> |
| <Link id="m-getaverage-2" /><code>{"static float GetAverage(int x, int y, float[,] customSource)"}</code> | <span className="api-desc">Average of the four heights around a splat cell. The static overload reads a given array instead.</span> |
| <Link id="m-getmaxdifference" /><code>{"float GetMaxDifference(int x, int y)"}</code> | <span className="api-desc">Highest minus lowest of the four heights around a splat cell. The static overload reads a given array instead.</span> |
| <Link id="m-getmaxdifference-2" /><code>{"static float GetMaxDifference(int x, int y, float[,] customSource)"}</code> | <span className="api-desc">Highest minus lowest of the four heights around a splat cell. The static overload reads a given array instead.</span> |
| <Link id="m-samplesplat" /><code>{"void SampleSplat()"}</code> | <span className="api-desc">Reads the terrain's splat texture into `Splat`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializeasync" /><code>{"private Task Alta.Static.ICacheable.SerializeAsync(uint version, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Explicit `ICacheable` implementation: writes or reads the region bounds, heights and splat data to a cache stream.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TerrainAccess`:

<div className="api-used-in">

[`ForestGenerator.EvaluateHeights`](/mod/game-api/types/alta-world-generation/forestgenerator#m-evaluateheights), [`ForestGenerator.EvaluateSplatData`](/mod/game-api/types/alta-world-generation/forestgenerator#m-evaluatesplatdata), [`ISplatPainter.Paint`](/mod/game-api/types/alta-world-generation/isplatpainter#m-paint), [`RiverGenerator.Calculate`](/mod/game-api/types/alta-world-generation/rivergenerator#m-calculate), [`RiverGenerator.GetGenerationAsync`](/mod/game-api/types/alta-world-generation/rivergenerator#m-getgenerationasync), [`RiverGenerator.Modify`](/mod/game-api/types/alta-world-generation/rivergenerator#m-modify), [`RiverGenerator.Paint`](/mod/game-api/types/alta-world-generation/rivergenerator#m-paint), [`SplatPainter.Paint`](/mod/game-api/types/alta-world-generation/splatpainter#m-paint), [`TerrainInfo.GetHeightAtPosition`](/mod/game-api/types/global-t-x/terraininfo#m-getheightatposition), [`TerrainInfo.GetSegment`](/mod/game-api/types/global-t-x/terraininfo#m-getsegment).

</div>
