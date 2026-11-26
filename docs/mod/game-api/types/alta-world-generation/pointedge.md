---
title: "PointEdge"
description: "A 2D point in forest generation with its nearest path edge, worked out lazily and cached."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointEdge

A **struct** in `Root.Township`, `Alta.Forests`.

A 2D point in forest generation with its nearest path edge, worked out lazily and cached.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Derived types** [`SpawnModifierPoint`](/mod/game-api/types/global-s/spawnmodifierpoint)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-edgedistance" /><code>{"float edgeDistance"}</code> | <span className="api-desc">Cached distance to the nearest edge.</span> |
| <Link id="m-edgeprogress" /><code>{"float edgeProgress"}</code> | <span className="api-desc">Cached progress along the nearest edge.</span> |
| <Link id="m-nearestedge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearestEdge"}</code> | <span className="api-desc">Cached nearest edge. Null until worked out.</span> |
| <Link id="m-point" /><code>{"Vector2 point"}</code> | <span className="api-desc">The point, as world x and z.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateedge" /><code>{"static void EvaluateEdge("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Vector2 point, out "}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearestEdge, out float distance, out float progress)"}</code> | <span className="api-desc">Finds the nearest path edge, the distance to it and progress along it. Distance is 0 if the point is in open space.</span> |
| <Link id="m-getedge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" GetEdge("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">The nearest edge, working it out on first use.</span> |
| <Link id="m-getedgedistance" /><code>{"float GetEdgeDistance("}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> | <span className="api-desc">Distance to the nearest edge, working it out on first use.</span> |

## Used in

Members of other types that take, return or hold a `PointEdge`:

<div className="api-used-in">

[`CliffFill.RaycastRequest.pointEdge`](/mod/game-api/types/alta-world-generation/clifffill-raycastrequest#m-pointedge), [`ForestFillCore.Raycasts`](/mod/game-api/types/alta-world-generation/forestfillcore#m-raycasts), [`PointNormal.PointNormal`](/mod/game-api/types/alta-world-generation/pointnormal#m-ctor), [`SpawnModifiers.Process`](/mod/game-api/types/alta-world-generation/spawnmodifiers#m-process), [`DistanceFilter.EvaluateDistance`](/mod/game-api/types/global-c-d/distancefilter#m-evaluatedistance), [`DistanceFilter.Filter`](/mod/game-api/types/global-c-d/distancefilter#m-filter), [`DistanceToEdgeFilter.EvaluateDistance`](/mod/game-api/types/global-c-d/distancetoedgefilter#m-evaluatedistance), [`DistanceToPathFilter.EvaluateDistance`](/mod/game-api/types/global-c-d/distancetopathfilter#m-evaluatedistance), [`DistanceToRiverFilter.EvaluateDistance`](/mod/game-api/types/global-c-d/distancetoriverfilter#m-evaluatedistance), [`EdgeCutFilter.Filter`](/mod/game-api/types/global-e-h/edgecutfilter#m-filter), [`RandomCutFilter.Filter`](/mod/game-api/types/global-q-r/randomcutfilter#m-filter), [`RandomOffsetFilter.Filter`](/mod/game-api/types/global-q-r/randomoffsetfilter#m-filter), [`SimpleNoiseFilter.Filter`](/mod/game-api/types/global-s/simplenoisefilter#m-filter), [`SpaceFilter.Filter`](/mod/game-api/types/global-s/spacefilter#m-filter), [`SpawnModifierPointRedirect.Filter`](/mod/game-api/types/global-s/spawnmodifierpointredirect#m-filter).

</div>
