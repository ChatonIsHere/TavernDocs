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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`ForestGenerator`](/mod/game-api/types/alta-world-generation/forestgenerator)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NearestInfo(int size)"}</code> | <span className="api-desc">Creates a `ForestGenerator.NearestInfo` from `size`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nearestdistance" /><code>{"float[] nearestDistance"}</code> | <span className="api-desc">Distance from the point to each nearest edge.</span> |
| <Link id="m-nearestedge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"[] nearestEdge"}</code> | <span className="api-desc">The nearest path edges, closest first probably.</span> |
| <Link id="m-nearestprogresses" /><code>{"float[] nearestProgresses"}</code> | <span className="api-desc">How far along each edge the closest point lies; used to work out target height.</span> |

## Used in

Members of other types that take, return or hold a `NearestInfo`:

<div className="api-used-in">

[`CutoutPathModifier.ModifyHeight`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifyheight), [`CutoutPathModifier.ModifySplat`](/mod/game-api/types/alta-world-generation/cutoutpathmodifier#m-modifysplat), [`ForestGeneration.EvaluateNearest`](/mod/game-api/types/alta-world-generation/forestgeneration#m-evaluatenearest), [`ForestGenerator.EvaluateTargetHeight`](/mod/game-api/types/alta-world-generation/forestgenerator#m-evaluatetargetheight), [`ForestGenerator.nearestInfos`](/mod/game-api/types/alta-world-generation/forestgenerator#m-nearestinfos), [`ITerrainModifier.ModifyHeight`](/mod/game-api/types/alta-world-generation/iterrainmodifier#m-modifyheight), [`ITerrainModifier.ModifySplat`](/mod/game-api/types/alta-world-generation/iterrainmodifier#m-modifysplat).

</div>
