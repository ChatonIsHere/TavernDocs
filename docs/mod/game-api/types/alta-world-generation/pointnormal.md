---
title: "PointNormal"
description: "A point on the ground with its normal, plus cached info about the nearest forest edge and biome."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointNormal

A **struct** in `Root.Township`, `Alta.Forests`.

A point on the ground with its normal, plus cached info about the nearest forest edge and biome. Passed through forest spawning and spawn modifiers.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`SpawnModifierPointNormal`](/mod/game-api/types/global-s/spawnmodifierpointnormal)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointNormal("}<Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" pointEdge, float y, Vector3 normal)"}</code> | <span className="api-desc">Creates a `PointNormal` from `point` and `normal`.</span> |
| <Link id="m-ctor-2" /><code>{"PointNormal(Vector3 point, Vector3 normal)"}</code> | <span className="api-desc">Creates a `PointNormal` from `point` and `normal`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code><Link to="/mod/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" biome"}</code> | <span className="api-desc">The biome sphere this point is in, if one has been set.</span> |
| <Link id="m-edgedistance" /><code>{"float edgeDistance"}</code> | <span className="api-desc">Cached distance to `nearestEdge`; only valid once the edge is set.</span> |
| <Link id="m-edgeprogress" /><code>{"float edgeProgress"}</code> | <span className="api-desc">Cached position along `nearestEdge` (0 to 1).</span> |
| <Link id="m-ishit" /><code>{"bool isHit"}</code> | <span className="api-desc">Whether this point came from a valid ground hit. Both constructors set it true.</span> |
| <Link id="m-nearestedge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearestEdge"}</code> | <span className="api-desc">Cached nearest edge, or null until worked out.</span> |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> | <span className="api-desc">The ground normal at the point.</span> |
| <Link id="m-point" /><code>{"Vector3 point"}</code> | <span className="api-desc">The world position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getedge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" GetEdge("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">The nearest forest edge, worked out and cached on first call.</span> |
| <Link id="m-getedgedistance" /><code>{"float GetEdgeDistance("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Distance to the nearest forest edge, worked out and cached on first call.</span> |

## Used in

Members of other types that take, return or hold a `PointNormal`:

<div className="api-used-in">

[`ChunkPositions.GetPosition`](/mod/game-api/types/alta-world/chunkpositions#m-getposition), [`ChunkPositionSurface.GetPosition`](/mod/game-api/types/alta-world/chunkpositionsurface#m-getposition), [`PositionSurfaceDefinition.GetPoint`](/mod/game-api/types/alta-world/positionsurfacedefinition#m-getpoint), [`CliffFill.Raycasts`](/mod/game-api/types/alta-world-generation/clifffill#m-raycasts), [`ForestFillCore.Raycasts`](/mod/game-api/types/alta-world-generation/forestfillcore#m-raycasts), [`ForestPopulationArea.GetPoint`](/mod/game-api/types/alta-world-generation/forestpopulationarea#m-getpoint), [`SpawnModifiers.Process`](/mod/game-api/types/alta-world-generation/spawnmodifiers#m-process-2), [`SpawnParameters.SpawnParameters`](/mod/game-api/types/alta-world-generation/spawnparameters#m-ctor), [`IPointNormalEvaluator.GetPoint`](/mod/game-api/types/alta-world-generation/ipointnormalevaluator#m-getpoint), [`PopulationRaycast.Try`](/mod/game-api/types/alta-world-generation/populationraycast#m-try), [`RadialPopulationArea.GetPoint`](/mod/game-api/types/alta-world-generation/radialpopulationarea#m-getpoint), [`BiomeSwitchFilter.Filter`](/mod/game-api/types/global-a-b/biomeswitchfilter#m-filter), [`ElevationFromPath.Filter`](/mod/game-api/types/global-e-h/elevationfrompath#m-filter), [`HeightFilter.Filter`](/mod/game-api/types/global-e-h/heightfilter#m-filter), [`HeightProgressFilter.Filter`](/mod/game-api/types/global-e-h/heightprogressfilter#m-filter), [`InsetModifier.Filter`](/mod/game-api/types/global-i-l/insetmodifier#m-filter), [`NormalFilter.Filter`](/mod/game-api/types/global-m-o/normalfilter#m-filter), [`PopulationPath.GetPoint`](/mod/game-api/types/global-p/populationpath#m-getpoint), [`RandomCutPointNormalFilter.Filter`](/mod/game-api/types/global-q-r/randomcutpointnormalfilter#m-filter), [`SpawnModifierPointNormalRedirect.Filter`](/mod/game-api/types/global-s/spawnmodifierpointnormalredirect#m-filter), [`SphereCastFilter.Filter`](/mod/game-api/types/global-s/spherecastfilter#m-filter).

</div>
