---
title: "PointNormal"
description: "struct PointNormal in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointNormal

A **struct** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`SpawnModifierPointNormal`](/game-api/types/global-s/spawnmodifierpointnormal)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PointNormal("}<Link to="/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" pointEdge, float y, Vector3 normal)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"PointNormal(Vector3 point, Vector3 normal)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biome" /><code><Link to="/game-api/types/global-a-b/biomesphere">{"BiomeSphere"}</Link>{" biome"}</code> |  |
| <Link id="m-edgedistance" /><code>{"float edgeDistance"}</code> |  |
| <Link id="m-edgeprogress" /><code>{"float edgeProgress"}</code> |  |
| <Link id="m-ishit" /><code>{"bool isHit"}</code> |  |
| <Link id="m-nearestedge" /><code><Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearestEdge"}</code> |  |
| <Link id="m-normal" /><code>{"Vector3 normal"}</code> |  |
| <Link id="m-point" /><code>{"Vector3 point"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getedge" /><code><Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" GetEdge("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |
| <Link id="m-getedgedistance" /><code>{"float GetEdgeDistance("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PointNormal`:

[`ChunkPositions.GetPosition`](/game-api/types/alta-world/chunkpositions#m-getposition), [`ChunkPositionSurface.GetPosition`](/game-api/types/alta-world/chunkpositionsurface#m-getposition), [`PositionSurfaceDefinition.GetPoint`](/game-api/types/alta-world/positionsurfacedefinition#m-getpoint), [`CliffFill.Raycasts`](/game-api/types/alta-world-generation/clifffill#m-raycasts), [`ForestFillCore.Raycasts`](/game-api/types/alta-world-generation/forestfillcore#m-raycasts), [`ForestPopulationArea.GetPoint`](/game-api/types/alta-world-generation/forestpopulationarea#m-getpoint), [`SpawnModifiers.Process`](/game-api/types/alta-world-generation/spawnmodifiers#m-process-2), [`SpawnParameters.SpawnParameters`](/game-api/types/alta-world-generation/spawnparameters#m-ctor), [`IPointNormalEvaluator.GetPoint`](/game-api/types/alta-world-generation/ipointnormalevaluator#m-getpoint), [`PopulationRaycast.Try`](/game-api/types/alta-world-generation/populationraycast#m-try), [`RadialPopulationArea.GetPoint`](/game-api/types/alta-world-generation/radialpopulationarea#m-getpoint), [`BiomeSwitchFilter.Filter`](/game-api/types/global-a-b/biomeswitchfilter#m-filter), [`ElevationFromPath.Filter`](/game-api/types/global-e-h/elevationfrompath#m-filter), [`HeightFilter.Filter`](/game-api/types/global-e-h/heightfilter#m-filter), [`HeightProgressFilter.Filter`](/game-api/types/global-e-h/heightprogressfilter#m-filter), [`InsetModifier.Filter`](/game-api/types/global-i-l/insetmodifier#m-filter), [`NormalFilter.Filter`](/game-api/types/global-m-o/normalfilter#m-filter), [`PopulationPath.GetPoint`](/game-api/types/global-p/populationpath#m-getpoint), [`RandomCutPointNormalFilter.Filter`](/game-api/types/global-q-r/randomcutpointnormalfilter#m-filter), [`SpawnModifierPointNormalRedirect.Filter`](/game-api/types/global-s/spawnmodifierpointnormalredirect#m-filter), [`SphereCastFilter.Filter`](/game-api/types/global-s/spherecastfilter#m-filter).
