---
title: "ForestGenerator.NearestInfo"
description: "Scratch arrays for forest generation: the nearest path edges to a point, with distance and progress along each."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestGenerator.NearestInfo

A **struct** in `Root.Township`, `Alta.Forests`.

Scratch arrays for forest generation: the nearest path edges to a point, with distance and progress along each. Pooled by `ForestGenerator`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`ForestGenerator`](/game-api/types/alta-world-generation/forestgenerator)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NearestInfo(int size)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nearestdistance" /><code>{"float[] nearestDistance"}</code> | Distance from the point to each nearest edge. |
| <Link id="m-nearestedge" /><code><Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"[] nearestEdge"}</code> | The nearest path edges, closest first probably. |
| <Link id="m-nearestprogresses" /><code>{"float[] nearestProgresses"}</code> | How far along each edge the closest point lies; used to work out target height. |

## Used in

Members of other types that take, return or hold a `NearestInfo`:

[`CutoutPathModifier.ModifyHeight`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifyheight), [`CutoutPathModifier.ModifySplat`](/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifysplat), [`ForestGeneration.EvaluateNearest`](/game-api/types/alta-world-generation/forestgeneration#m-evaluatenearest), [`ForestGenerator.EvaluateTargetHeight`](/game-api/types/alta-world-generation/forestgenerator#m-evaluatetargetheight), [`ForestGenerator.nearestInfos`](/game-api/types/alta-world-generation/forestgenerator#m-nearestinfos), [`ITerrainModifier.ModifyHeight`](/game-api/types/alta-world-generation/iterrainmodifier#m-modifyheight), [`ITerrainModifier.ModifySplat`](/game-api/types/alta-world-generation/iterrainmodifier#m-modifysplat).
