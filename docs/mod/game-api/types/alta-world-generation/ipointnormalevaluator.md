---
title: "IPointNormalEvaluator"
description: "Picks spawn points for a population folder."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPointNormalEvaluator

An **interface** in `Root.Township`, `Alta.Populations`.

Picks spawn points for a population folder. The population manager asks it for a point when spawning.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`PositionSurfaceDefinition`](/mod/game-api/types/alta-world/positionsurfacedefinition), [`ForestPopulationArea`](/mod/game-api/types/alta-world-generation/forestpopulationarea), [`RadialPopulationArea`](/mod/game-api/types/alta-world-generation/radialpopulationarea), [`PopulationPath`](/mod/game-api/types/global-p/populationpath)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code><Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPoint()"}</code> | Returns a point with its surface normal, or null if no point was found. |

## Used in

Members of other types that take, return or hold a `IPointNormalEvaluator`:

[`ChunkPositionSurface.surfaceDefinition`](/mod/game-api/types/alta-world/chunkpositionsurface#m-surfacedefinition), [`BasicPopulationFolder.PointEvaluator`](/mod/game-api/types/alta-world-generation/basicpopulationfolder#m-pointevaluator), [`IPopulationFolder.PointEvaluator`](/mod/game-api/types/alta-world-generation/ipopulationfolder#m-pointevaluator), [`PopulationPath.PointEvaluator`](/mod/game-api/types/global-p/populationpath#m-pointevaluator).
