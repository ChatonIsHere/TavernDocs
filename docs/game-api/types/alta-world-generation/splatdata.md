---
title: "SplatData"
description: "struct SplatData in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplatData

A **struct** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplatData(int layer1, int layer2, float lerp)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-layer1" /><code>{"int layer1"}</code> |  |
| <Link id="m-layer2" /><code>{"int layer2"}</code> |  |
| <Link id="m-lerp" /><code>{"float lerp"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-setlayer1" /><code>{"void SetLayer1(int texture, float strength)"}</code> |  |
| <Link id="m-setlayer1ifstronger" /><code>{"void SetLayer1IfStronger(int texture, float strength)"}</code> |  |
| <Link id="m-setlayer2" /><code>{"void SetLayer2(int texture, float strength)"}</code> |  |
| <Link id="m-setlayer2ifstronger" /><code>{"void SetLayer2IfStronger(int texture, float strength)"}</code> |  |
| <Link id="m-tocolor" /><code>{"Color ToColor()"}</code> |  |
| <Link id="m-tocolor-2" /><code>{"static Color[] ToColor("}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] splatDatas)"}</code> |  |
| <Link id="m-tosplat" /><code>{"static void ToSplat(Color[] color, "}<Link to="/game-api/types/alta-world-generation/splatdata">{"SplatData"}</Link>{"[,] splatDatas)"}</code> |  |

## Used in

Members of other types that take, return or hold a `SplatData`:

[`CutoutPathModifier.ModifySplat`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifysplat), [`ForestGenerator.EvaluateSplatData`](/game-api/types/alta-world-generation/forestgenerator#m-evaluatesplatdata), [`ISplatPainter.Paint`](/game-api/types/alta-world-generation/isplatpainter#m-paint), [`ITerrainModifier.ModifySplat`](/game-api/types/alta-world-generation/iterrainmodifier#m-modifysplat), [`PaintModifiers.Apply`](/game-api/types/alta-world-generation/paintmodifiers#m-apply), [`RiverGenerator.Paint`](/game-api/types/alta-world-generation/rivergenerator#m-paint), [`SplatPainter.Paint`](/game-api/types/alta-world-generation/splatpainter#m-paint), [`TerrainAccess.FillSplat`](/game-api/types/global-t-x/terrainaccess#m-fillsplat), [`TerrainAccess.Splat`](/game-api/types/global-t-x/terrainaccess#m-splat).
