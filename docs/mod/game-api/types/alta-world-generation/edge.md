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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Edge("}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" nodeA, "}<Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" nodeB, "}<Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" type)"}</code> | <span className="api-desc">Creates an `Edge` from `nodeA`, `nodeB` and `type`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code><Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" A { get; private set; }"}</code> | <span className="api-desc">First node.</span> |
| <Link id="m-ab" /><code><Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" AB { get; private set; }"}</code> | <span className="api-desc">Path from `A` to `B`.</span> |
| <Link id="m-attributes" /><code><Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Attributes { get; }"}</code> | <span className="api-desc">Attribute set for this edge.</span> |
| <Link id="m-averageheight" /><code>{"float AverageHeight { get; }"}</code> | <span className="api-desc">Mean height of the two nodes.</span> |
| <Link id="m-averageradius" /><code>{"float AverageRadius { get; }"}</code> | <span className="api-desc">Mean radius of the two nodes.</span> |
| <Link id="m-b" /><code><Link to="/mod/game-api/types/alta-world-generation/node">{"Node"}</Link>{" B { get; private set; }"}</code> | <span className="api-desc">Second node.</span> |
| <Link id="m-ba" /><code><Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" BA { get; private set; }"}</code> | <span className="api-desc">Path from `B` to `A`.</span> |
| <Link id="m-length2d" /><code>{"float Length2d { get; }"}</code> | <span className="api-desc">Distance between the nodes on the horizontal plane.</span> |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" Type { get; set; }"}</code> | <span className="api-desc">The edge's type flags.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-is" /><code>{"bool Is("}<Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" type)"}</code> | <span className="api-desc">True if the edge's type has any of the given `EdgeType` flags.</span> |
| <Link id="m-ischeck" /><code>{"static Predicate<"}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{"> IsCheck("}<Link to="/mod/game-api/types/alta-world-generation/edgetype">{"EdgeType"}</Link>{" type)"}</code> | <span className="api-desc">Returns a predicate that checks `Is` for the given type.</span> |
| <Link id="m-ison" /><code>{"bool IsOn("}<Link to="/mod/game-api/types/alta-world-generation/spacetype">{"SpaceType"}</Link>{" type)"}</code> | <span className="api-desc">True if the space on either side of the edge has any of the given `SpaceType` flags.</span> |
| <Link id="m-isonright" /><code>{"bool IsOnRight(Vector2 point)"}</code> | <span className="api-desc">True if a point is on the right of the A to B direction.</span> |

## Used in

Members of other types that take, return or hold a `Edge`:

<div className="api-used-in">

[`ForestAttributeEvaluator.EvaluateEdge`](/mod/game-api/types/alta-world-generation/forestattributeevaluator#m-evaluateedge), [`ForestBridges.GetOverlap`](/mod/game-api/types/alta-world-generation/forestbridges#m-getoverlap), [`ForestCliffEvaluator.evaluated`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-evaluated), [`ForestCliffEvaluator.IsLegitimateEdge`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-islegitimateedge), [`ForestGCoreInstruction.ForestGCoreInstruction`](/mod/game-api/types/alta-world-generation/forestgcoreinstruction#m-ctor-2), [`ForestGeneration.chunkEdges`](/mod/game-api/types/alta-world-generation/forestgeneration#m-chunkedges), [`ForestGeneration.CreateEdge`](/mod/game-api/types/alta-world-generation/forestgeneration#m-createedge), [`ForestGeneration.DistanceToPath`](/mod/game-api/types/alta-world-generation/forestgeneration#m-distancetopath), [`ForestGeneration.DistanceToPathOrNode`](/mod/game-api/types/alta-world-generation/forestgeneration#m-distancetopathornode), [`ForestGeneration.edges`](/mod/game-api/types/alta-world-generation/forestgeneration#m-edges), [`ForestGeneration.Edges`](/mod/game-api/types/alta-world-generation/forestgeneration#m-edges-2), [`ForestGeneration.EvaluateNearest`](/mod/game-api/types/alta-world-generation/forestgeneration#m-evaluatenearest), [`ForestGeneration.GetEdge`](/mod/game-api/types/alta-world-generation/forestgeneration#m-getedge), [`ForestGeneration.GetEdgesWithinChunk`](/mod/game-api/types/alta-world-generation/forestgeneration#m-getedgeswithinchunk), [`ForestGeneration.sortedEdges`](/mod/game-api/types/alta-world-generation/forestgeneration#m-sortededges), [`ForestGeneration.WorkingEdges`](/mod/game-api/types/alta-world-generation/forestgeneration#m-workingedges), [`ForestGenerator.NearestInfo.nearestEdge`](/mod/game-api/types/alta-world-generation/forestgenerator-nearestinfo#m-nearestedge), [`ForestPopulationArea.edges`](/mod/game-api/types/alta-world-generation/forestpopulationarea#m-edges), [`LandBridgeModifier.landBridges`](/mod/game-api/types/alta-world-generation/landbridgemodifier#m-landbridges), [`Path.Edge`](/mod/game-api/types/alta-world-generation/path#m-edge), [`Path.Path`](/mod/game-api/types/alta-world-generation/path#m-ctor), [`PointEdge.EvaluateEdge`](/mod/game-api/types/alta-world-generation/pointedge#m-evaluateedge), [`PointEdge.GetEdge`](/mod/game-api/types/alta-world-generation/pointedge#m-getedge), [`PointEdge.nearestEdge`](/mod/game-api/types/alta-world-generation/pointedge#m-nearestedge), [`PointNormal.GetEdge`](/mod/game-api/types/alta-world-generation/pointnormal#m-getedge), [`PointNormal.nearestEdge`](/mod/game-api/types/alta-world-generation/pointnormal#m-nearestedge), [`RiverIntersections.Intersection.edge`](/mod/game-api/types/alta-world-generation/riverintersections-intersection#m-edge), [`BasicDynamicPath.Edge`](/mod/game-api/types/global-a-b/basicdynamicpath#m-edge), [`BasicDynamicPath.Initialize`](/mod/game-api/types/global-a-b/basicdynamicpath#m-initialize), [`DistanceToPathFilter.EdgePredicate`](/mod/game-api/types/global-c-d/distancetopathfilter#m-edgepredicate), [`ForestNodeMapSpawnData.Edge`](/mod/game-api/types/global-e-h/forestnodemapspawndata#m-edge), [`ForestNodeMapSpawnData.ForestNodeMapSpawnData`](/mod/game-api/types/global-e-h/forestnodemapspawndata#m-ctor), [`IDynamicPath.Initialize`](/mod/game-api/types/global-i-l/idynamicpath#m-initialize).

</div>
