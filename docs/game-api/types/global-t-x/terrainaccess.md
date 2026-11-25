---
title: "TerrainAccess"
description: "class TerrainAccess in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TerrainAccess

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`ICacheable`](/game-api/types/alta-world/icacheable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TerrainAccess("}<Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" terrain)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"internal TerrainAccess("}<Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" terrain, int x, int y, int width, int height, bool isHeight, bool isSplat)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heights" /><code>{"float[,] Heights { get; private set; }"}</code> |  |
| <Link id="m-heightsheight" /><code>{"int HeightsHeight { get; private set; }"}</code> |  |
| <Link id="m-heightswidth" /><code>{"int HeightsWidth { get; private set; }"}</code> |  |
| <Link id="m-offset" /><code>{"Vector3 Offset { get; private set; }"}</code> |  |
| <Link id="m-scale" /><code>{"Vector3 Scale { get; private set; }"}</code> |  |
| <Link id="m-splat" /><code><Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] Splat { get; private set; }"}</code> |  |
| <Link id="m-splatheight" /><code>{"int SplatHeight { get; private set; }"}</code> |  |
| <Link id="m-splatwidth" /><code>{"int SplatWidth { get; private set; }"}</code> |  |
| <Link id="m-terrain" /><code><Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" Terrain { get; }"}</code> |  |
| <Link id="m-version" /><code>{"uint Version { get; }"}</code> |  |
| <Link id="m-x" /><code>{"int X { get; private set; }"}</code> |  |
| <Link id="m-y" /><code>{"int Y { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyheights" /><code>{"void ApplyHeights()"}</code> |  |
| <Link id="m-applysplat" /><code>{"void ApplySplat()"}</code> |  |
| <Link id="m-applyto" /><code>{"void ApplyTo("}<Link to="/game-api/types/global-t-x/terraininfo">{"TerrainInfo"}</Link>{" other)"}</code> |  |
| <Link id="m-fillsplat" /><code>{"void FillSplat("}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{" splatData)"}</code> |  |
| <Link id="m-getaverage" /><code>{"float GetAverage(int x, int y)"}</code> |  |
| <Link id="m-getaverage-2" /><code>{"static float GetAverage(int x, int y, float[,] customSource)"}</code> |  |
| <Link id="m-getmaxdifference" /><code>{"float GetMaxDifference(int x, int y)"}</code> |  |
| <Link id="m-getmaxdifference-2" /><code>{"static float GetMaxDifference(int x, int y, float[,] customSource)"}</code> |  |
| <Link id="m-samplesplat" /><code>{"void SampleSplat()"}</code> |  |
| <Link id="m-serializeasync" /><code>{"private Task Alta.Static.ICacheable.SerializeAsync(uint version, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `TerrainAccess`:

[`ForestGenerator.EvaluateHeights`](/game-api/types/alta-world-generation/forestgenerator#m-evaluateheights), [`ForestGenerator.EvaluateSplatData`](/game-api/types/alta-world-generation/forestgenerator#m-evaluatesplatdata), [`ISplatPainter.Paint`](/game-api/types/alta-world-generation/isplatpainter#m-paint), [`RiverGenerator.Calculate`](/game-api/types/alta-world-generation/rivergenerator#m-calculate), [`RiverGenerator.GetGenerationAsync`](/game-api/types/alta-world-generation/rivergenerator#m-getgenerationasync), [`RiverGenerator.Modify`](/game-api/types/alta-world-generation/rivergenerator#m-modify), [`RiverGenerator.Paint`](/game-api/types/alta-world-generation/rivergenerator#m-paint), [`SplatPainter.Paint`](/game-api/types/alta-world-generation/splatpainter#m-paint), [`TerrainInfo.GetHeightAtPosition`](/game-api/types/global-t-x/terraininfo#m-getheightatposition), [`TerrainInfo.GetSegment`](/game-api/types/global-t-x/terraininfo#m-getsegment).
