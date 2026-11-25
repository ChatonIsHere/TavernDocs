---
title: "TerrainAccess"
description: "A copied rectangle of a terrain's heightmap and splat (paint) map that can be edited and written back."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainAccess

A **class** in `Root.Township`, no namespace.

A copied rectangle of a terrain's heightmap and splat (paint) map that can be edited and written back. Made by `TerrainInfo` for forest generation and cached to disk as an `ICacheable`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ICacheable`](/game-api/types/alta-world/icacheable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TerrainAccess("}<Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" terrain)"}</code> |

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor-2" /><code>{"internal TerrainAccess("}<Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" terrain, int x, int y, int width, int height, bool isHeight, bool isSplat)"}</code> |

</details>

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heights" /><code>{"float[,] Heights { get; private set; }"}</code> | The copied heights, indexed `[row, column]` like Unity's `GetHeights`. |
| <Link id="m-heightsheight" /><code>{"int HeightsHeight { get; private set; }"}</code> | Number of height rows in the region. |
| <Link id="m-heightswidth" /><code>{"int HeightsWidth { get; private set; }"}</code> | Number of height columns in the region. |
| <Link id="m-offset" /><code>{"Vector3 Offset { get; private set; }"}</code> | World offset of the region's corner. |
| <Link id="m-scale" /><code>{"Vector3 Scale { get; private set; }"}</code> | The terrain's heightmap scale. |
| <Link id="m-splat" /><code><Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] Splat { get; private set; }"}</code> | Splat cells for the region, one per two height samples, or null if not requested. |
| <Link id="m-splatheight" /><code>{"int SplatHeight { get; private set; }"}</code> | Splat rows in the region. |
| <Link id="m-splatwidth" /><code>{"int SplatWidth { get; private set; }"}</code> | Splat columns in the region. |
| <Link id="m-terrain" /><code><Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" Terrain { get; }"}</code> | The terrain this region was taken from. |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> | Cache format version (1). |
| <Link id="m-x" /><code>{"int X { get; private set; }"}</code> | Heightmap X of the region's corner. |
| <Link id="m-y" /><code>{"int Y { get; private set; }"}</code> | Heightmap Y of the region's corner. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyheights" /><code>{"void ApplyHeights()"}</code> | Writes `Heights` back to the terrain at `X`, `Y`. |
| <Link id="m-applysplat" /><code>{"void ApplySplat()"}</code> | Writes `Splat` back into the terrain's splat texture and applies it. |
| <Link id="m-applyto" /><code>{"void ApplyTo("}<Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" other)"}</code> | Writes the same heights and splat region onto another terrain. |
| <Link id="m-fillsplat" /><code>{"void FillSplat("}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" splatData)"}</code> | Sets every splat cell to one value. |
| <Link id="m-getaverage" /><code>{"float GetAverage(int x, int y)"}</code> | Average of the four heights around a splat cell. The static overload reads a given array instead. |
| <Link id="m-getaverage-2" /><code>{"static float GetAverage(int x, int y, float[,] customSource)"}</code> | Average of the four heights around a splat cell. The static overload reads a given array instead. |
| <Link id="m-getmaxdifference" /><code>{"float GetMaxDifference(int x, int y)"}</code> | Highest minus lowest of the four heights around a splat cell. The static overload reads a given array instead. |
| <Link id="m-getmaxdifference-2" /><code>{"static float GetMaxDifference(int x, int y, float[,] customSource)"}</code> | Highest minus lowest of the four heights around a splat cell. The static overload reads a given array instead. |
| <Link id="m-samplesplat" /><code>{"void SampleSplat()"}</code> | Reads the terrain's splat texture into `Splat`. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-serializeasync" /><code>{"private Task Alta.Static.ICacheable.SerializeAsync(uint version, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TerrainAccess`:

[`ForestGenerator.EvaluateHeights`](/game-api/types/alta-world-generation/forestgenerator#m-evaluateheights), [`ForestGenerator.EvaluateSplatData`](/game-api/types/alta-world-generation/forestgenerator#m-evaluatesplatdata), [`ISplatPainter.Paint`](/game-api/types/alta-world-generation/isplatpainter#m-paint), [`RiverGenerator.Calculate`](/game-api/types/alta-world-generation/rivergenerator#m-calculate), [`RiverGenerator.GetGenerationAsync`](/game-api/types/alta-world-generation/rivergenerator#m-getgenerationasync), [`RiverGenerator.Modify`](/game-api/types/alta-world-generation/rivergenerator#m-modify), [`RiverGenerator.Paint`](/game-api/types/alta-world-generation/rivergenerator#m-paint), [`SplatPainter.Paint`](/game-api/types/alta-world-generation/splatpainter#m-paint), [`TerrainInfo.GetHeightAtPosition`](/game-api/types/global-t-x/terraininfo#m-getheightatposition), [`TerrainInfo.GetSegment`](/game-api/types/global-t-x/terraininfo#m-getsegment).
