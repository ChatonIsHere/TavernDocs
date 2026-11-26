---
title: "Edge"
description: "A connection between two nodes in the forest generator's graph, with a path in each direction and the spaces on either side."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Edge

A **class** in `Root.Township`, `Alta.Forests`.

A connection between two nodes in the forest generator's graph, with a path in each direction and the spaces on either side.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Edge("}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" nodeA, "}<Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" nodeB, "}<Link to="/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" type)"}</code> | Creates an `Edge` from `nodeA`, `nodeB` and `type`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code><Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" A { get; private set; }"}</code> | First node. |
| <Link id="m-ab" /><code><Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{" AB { get; private set; }"}</code> | Path from `A` to `B`. |
| <Link id="m-attributes" /><code><Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; }"}</code> | Attribute set for this edge. |
| <Link id="m-averageheight" /><code>{"float AverageHeight { get; }"}</code> | Mean height of the two nodes. |
| <Link id="m-averageradius" /><code>{"float AverageRadius { get; }"}</code> | Mean radius of the two nodes. |
| <Link id="m-b" /><code><Link to="/game-api/types/alta-world-generation/node">{"Node"}</Link>{" B { get; private set; }"}</code> | Second node. |
| <Link id="m-ba" /><code><Link to="/game-api/types/alta-world-generation/path">{"Path"}</Link>{" BA { get; private set; }"}</code> | Path from `B` to `A`. |
| <Link id="m-length2d" /><code>{"float Length2d { get; }"}</code> | Distance between the nodes on the horizontal plane. |
| <Link id="m-type" /><code><Link to="/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" Type { get; set; }"}</code> | The edge's type flags. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-is" /><code>{"bool Is("}<Link to="/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" type)"}</code> | True if the edge's type has any of the given `EdgeType` flags. |
| <Link id="m-ischeck" /><code>{"static Predicate<"}<Link to="/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> IsCheck("}<Link to="/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" type)"}</code> | Returns a predicate that checks `Is` for the given type. |
| <Link id="m-ison" /><code>{"bool IsOn("}<Link to="/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" type)"}</code> | True if the space on either side of the edge has any of the given `SpaceType` flags. |
| <Link id="m-isonright" /><code>{"bool IsOnRight(Vector2 point)"}</code> | True if a point is on the right of the A to B direction. |

## Used in

Members of other types that take, return or hold a `Edge`:

[`ForestAttributeEvaluator.EvaluateEdge`](/game-api/types/alta-world-generation/forestattributeevaluator#m-evaluateedge), [`ForestBridges.GetOverlap`](/game-api/types/alta-world-generation/forestbridges#m-getoverlap), [`ForestCliffEvaluator.evaluated`](/game-api/types/alta-world-generation/forestcliffevaluator#m-evaluated), [`ForestCliffEvaluator.IsLegitimateEdge`](/game-api/types/alta-world-generation/forestcliffevaluator#m-islegitimateedge), [`ForestGCoreInstruction.ForestGCoreInstruction`](/game-api/types/alta-world-generation/forestgcoreinstruction#m-ctor-2), [`ForestGeneration.chunkEdges`](/game-api/types/alta-world-generation/forestgeneration#m-chunkedges), [`ForestGeneration.CreateEdge`](/game-api/types/alta-world-generation/forestgeneration#m-createedge), [`ForestGeneration.DistanceToPath`](/game-api/types/alta-world-generation/forestgeneration#m-distancetopath), [`ForestGeneration.DistanceToPathOrNode`](/game-api/types/alta-world-generation/forestgeneration#m-distancetopathornode), [`ForestGeneration.edges`](/game-api/types/alta-world-generation/forestgeneration#m-edges), [`ForestGeneration.Edges`](/game-api/types/alta-world-generation/forestgeneration#m-edges-2), [`ForestGeneration.EvaluateNearest`](/game-api/types/alta-world-generation/forestgeneration#m-evaluatenearest), [`ForestGeneration.GetEdge`](/game-api/types/alta-world-generation/forestgeneration#m-getedge), [`ForestGeneration.GetEdgesWithinChunk`](/game-api/types/alta-world-generation/forestgeneration#m-getedgeswithinchunk), [`ForestGeneration.sortedEdges`](/game-api/types/alta-world-generation/forestgeneration#m-sortededges), [`ForestGeneration.WorkingEdges`](/game-api/types/alta-world-generation/forestgeneration#m-workingedges), [`ForestGenerator.NearestInfo.nearestEdge`](/game-api/types/alta-world-generation/forestgenerator-nearestinfo#m-nearestedge), [`ForestPopulationArea.edges`](/game-api/types/alta-world-generation/forestpopulationarea#m-edges), [`LandBridgeModifier.landBridges`](/game-api/types/alta-world-generation/landbridgemodifier#m-landbridges), [`Path.Edge`](/game-api/types/alta-world-generation/path#m-edge), [`Path.Path`](/game-api/types/alta-world-generation/path#m-ctor), [`PointEdge.EvaluateEdge`](/game-api/types/alta-world-generation/pointedge#m-evaluateedge), [`PointEdge.GetEdge`](/game-api/types/alta-world-generation/pointedge#m-getedge), [`PointEdge.nearestEdge`](/game-api/types/alta-world-generation/pointedge#m-nearestedge), [`PointNormal.GetEdge`](/game-api/types/alta-world-generation/pointnormal#m-getedge), [`PointNormal.nearestEdge`](/game-api/types/alta-world-generation/pointnormal#m-nearestedge), [`RiverIntersections.Intersection.edge`](/game-api/types/alta-world-generation/riverintersections-intersection#m-edge), [`BasicDynamicPath.Edge`](/game-api/types/global-a-b/basicdynamicpath#m-edge), [`BasicDynamicPath.Initialize`](/game-api/types/global-a-b/basicdynamicpath#m-initialize), [`DistanceToPathFilter.EdgePredicate`](/game-api/types/global-c-d/distancetopathfilter#m-edgepredicate), [`ForestNodeMapSpawnData.Edge`](/game-api/types/global-e-h/forestnodemapspawndata#m-edge), [`ForestNodeMapSpawnData.ForestNodeMapSpawnData`](/game-api/types/global-e-h/forestnodemapspawndata#m-ctor), [`IDynamicPath.Initialize`](/game-api/types/global-i-l/idynamicpath#m-initialize).
