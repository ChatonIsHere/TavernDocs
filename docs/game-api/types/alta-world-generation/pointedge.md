---
title: "PointEdge"
description: "struct PointEdge in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PointEdge

A **struct** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Derived types** [`SpawnModifierPoint`](/game-api/types/global-s/spawnmodifierpoint)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-edgedistance" /><code>{"float edgeDistance"}</code> |  |
| <Link id="m-edgeprogress" /><code>{"float edgeProgress"}</code> |  |
| <Link id="m-nearestedge" /><code><Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearestEdge"}</code> |  |
| <Link id="m-point" /><code>{"Vector2 point"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateedge" /><code>{"static void EvaluateEdge("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest, Vector2 point, out "}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" nearestEdge, out float distance, out float progress)"}</code> |  |
| <Link id="m-getedge" /><code><Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" GetEdge("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |
| <Link id="m-getedgedistance" /><code>{"float GetEdgeDistance("}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" forest)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PointEdge`:

[`CliffFill.RaycastRequest.pointEdge`](/game-api/types/alta-world-generation/clifffill-raycastrequest#m-pointedge), [`ForestFillCore.Raycasts`](/game-api/types/alta-world-generation/forestfillcore#m-raycasts), [`PointNormal.PointNormal`](/game-api/types/alta-world-generation/pointnormal#m-ctor), [`SpawnModifiers.Process`](/game-api/types/alta-world-generation/spawnmodifiers#m-process), [`DistanceFilter.EvaluateDistance`](/game-api/types/global-c-d/distancefilter#m-evaluatedistance), [`DistanceFilter.Filter`](/game-api/types/global-c-d/distancefilter#m-filter), [`DistanceToEdgeFilter.EvaluateDistance`](/game-api/types/global-c-d/distancetoedgefilter#m-evaluatedistance), [`DistanceToPathFilter.EvaluateDistance`](/game-api/types/global-c-d/distancetopathfilter#m-evaluatedistance), [`DistanceToRiverFilter.EvaluateDistance`](/game-api/types/global-c-d/distancetoriverfilter#m-evaluatedistance), [`EdgeCutFilter.Filter`](/game-api/types/global-e-h/edgecutfilter#m-filter), [`RandomCutFilter.Filter`](/game-api/types/global-q-r/randomcutfilter#m-filter), [`RandomOffsetFilter.Filter`](/game-api/types/global-q-r/randomoffsetfilter#m-filter), [`SimpleNoiseFilter.Filter`](/game-api/types/global-s/simplenoisefilter#m-filter), [`SpaceFilter.Filter`](/game-api/types/global-s/spacefilter#m-filter), [`SpawnModifierPointRedirect.Filter`](/game-api/types/global-s/spawnmodifierpointredirect#m-filter).
