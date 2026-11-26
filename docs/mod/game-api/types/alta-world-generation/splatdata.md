---
title: "SplatData"
description: "Terrain texture blend for one point: two layer indices and how far to blend from the first to the second."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplatData

A **struct** in `Root.Township`, `Alta.Forests`.

Terrain texture blend for one point: two layer indices and how far to blend from the first to the second. Stored in a colour (red, green, blue).

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplatData(int layer1, int layer2, float lerp)"}</code> | Creates a `SplatData` from `layer1`, `layer2` and `lerp`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-layer1" /><code>{"int layer1"}</code> | First texture layer index (0 to 255). |
| <Link id="m-layer2" /><code>{"int layer2"}</code> | Second texture layer index (0 to 255). |
| <Link id="m-lerp" /><code>{"float lerp"}</code> | Blend from layer 1 (0) to layer 2 (1). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes both layers and the blend. |
| <Link id="m-setlayer1" /><code>{"void SetLayer1(int texture, float strength)"}</code> | Sets layer 1 with a strength, so the blend leans that way. |
| <Link id="m-setlayer1ifstronger" /><code>{"void SetLayer1IfStronger(int texture, float strength)"}</code> | Sets layer 1 only if it would be stronger than now. |
| <Link id="m-setlayer2" /><code>{"void SetLayer2(int texture, float strength)"}</code> | Sets layer 2 with a strength. |
| <Link id="m-setlayer2ifstronger" /><code>{"void SetLayer2IfStronger(int texture, float strength)"}</code> | Sets layer 2 only if it would be stronger than now. |
| <Link id="m-tocolor" /><code>{"Color ToColor()"}</code> | Packs into a colour, or packs a whole grid into a colour array. |
| <Link id="m-tocolor-2" /><code>{"static Color[] ToColor("}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] splatDatas)"}</code> | Packs into a colour, or packs a whole grid into a colour array. |
| <Link id="m-tosplat" /><code>{"static void ToSplat(Color[] color, "}<Link to="/mod/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] splatDatas)"}</code> | Unpacks a colour array into a grid. |

## Used in

Members of other types that take, return or hold a `SplatData`:

[`CutoutPathModifier.ModifySplat`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifysplat), [`ForestGenerator.EvaluateSplatData`](/mod/game-api/types/alta-world-generation/forestgenerator#m-evaluatesplatdata), [`ISplatPainter.Paint`](/mod/game-api/types/alta-world-generation/isplatpainter#m-paint), [`ITerrainModifier.ModifySplat`](/mod/game-api/types/alta-world-generation/iterrainmodifier#m-modifysplat), [`PaintModifiers.Apply`](/mod/game-api/types/alta-world-generation/paintmodifiers#m-apply), [`RiverGenerator.Paint`](/mod/game-api/types/alta-world-generation/rivergenerator#m-paint), [`SplatPainter.Paint`](/mod/game-api/types/alta-world-generation/splatpainter#m-paint), [`TerrainAccess.FillSplat`](/mod/game-api/types/global-t-x/terrainaccess#m-fillsplat), [`TerrainAccess.Splat`](/mod/game-api/types/global-t-x/terrainaccess#m-splat).
