---
title: "Path"
description: "One direction of an Edge in the forest generator's node graph, with links to the spaces on either side and the next paths around each node."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Path

A **class** in `Root.Township`, `Alta.Forests`.

One direction of an `Edge` in the forest generator's node graph, with links to the spaces on either side and the next paths around each node. Used during forest generation.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Path<Node, Path>`](/mod/game-api/types/alta-world-generation/path-tnode-tpath)
- **Derived types** [`Node`](/mod/game-api/types/alta-world-generation/node), [`Path`](/mod/game-api/types/alta-world-generation/path)
- **Documented in** [Forest](/mod/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Path("}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" edge, bool isA)"}</code> | <span className="api-desc">Creates a `Path` from `edge` and `isA`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anticlockwise" /><code><Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" AntiClockwise { get; internal set; }"}</code> | <span className="api-desc">The next path anticlockwise around the graph, set by the generator.</span> |
| <Link id="m-clockwise" /><code><Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" Clockwise { get; internal set; }"}</code> | <span className="api-desc">The next path clockwise around the graph, set by the generator.</span> |
| <Link id="m-edge" /><code><Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/edge">{"Edge"}</Link>{" { get; }"}</code> | <span className="api-desc">The undirected edge this path is one direction of.</span> |
| <Link id="m-isab" /><code>{"bool IsAB { get; }"}</code> | <span className="api-desc">True when this path runs from the edge's A node to its B node.</span> |
| <Link id="m-left" /><code><Link to="/mod/game-api/types/alta-world-generation/space">{"Space"}</Link>{" Left { get; internal set; }"}</code> | <span className="api-desc">The space on this path's left, set by the generator.</span> |
| <Link id="m-reverse" /><code><Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" Reverse { get; }"}</code> | <span className="api-desc">The same edge in the other direction.</span> |
| <Link id="m-right" /><code><Link to="/mod/game-api/types/alta-world-generation/space">{"Space"}</Link>{" Right { get; internal set; }"}</code> | <span className="api-desc">The space on this path's right, set by the generator.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getadjacent" /><code>{"void GetAdjacent(out "}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" fromCC, out "}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" fromC, out "}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" toCC, out "}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" toC)"}</code> | <span className="api-desc">Finds the nearest neighbouring paths on each side at both the start and end nodes.</span> |
| <Link id="m-getsides" /><code>{"void GetSides(float additionalRadius, out float startLeft, out float endLeft, out float startRight, out float endRight)"}</code> | <span className="api-desc">Works out where along the path (0 to 1) each side clears the node radii plus extra radius, using the adjacent paths' angles.</span> |
| <Link id="m-insidedot" /><code>{"float InsideDot("}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" path, Vector2 position, out float angleDot)"}</code> | <span className="api-desc">For a path sharing a node, dot between the corner's bisector and the direction to a position. Also outputs the corner's dot.</span> |
| <Link id="m-isinside" /><code>{"bool IsInside("}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" path, Vector2 position, out float angleDot)"}</code> | <span className="api-desc">Whether a position lies inside the corner this path forms with another path that shares a node.</span> |
| <Link id="m-lerp3d" /><code>{"Vector3 Lerp3d(float t)"}</code> | <span className="api-desc">Point along the path in 3D, from start (0) to end (1).</span> |
| <Link id="m-progressfromangle" /><code>{"void ProgressFromAngle("}<Link to="/mod/game-api/types/alta-world-generation/path">{"Path"}</Link>{" path, ref float thisProgress, ref float pathProgress)"}</code> | <span className="api-desc">Flips the two progress values so both measure from the shared node of the corner.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-insidedot-2" /><code>{"private float InsideDot(Vector2 origin, Vector2 arm1, Vector2 arm2, Vector2 position, out float armsDot)"}</code> | <span className="api-desc">For a path sharing a node, dot between the corner's bisector and the direction to a position. Also outputs the corner's dot.</span> |
| <Link id="m-iswithin" /><code>{"private bool IsWithin(Vector2 origin, Vector2 arm1, Vector2 arm2, Vector2 position, out float armsDot)"}</code> | <span className="api-desc">True if a point lies inside the angle between two arms from an origin. Also returns the arms' dot product.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Path`:

<div className="api-used-in">

[`Edge.AB`](/mod/game-api/types/alta-world-generation/edge#m-ab), [`Edge.BA`](/mod/game-api/types/alta-world-generation/edge#m-ba), [`ForestBridges.GetOverlap`](/mod/game-api/types/alta-world-generation/forestbridges#m-getoverlap), [`ForestCliffEvaluator.cliffs`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-cliffs), [`ForestCliffEvaluator.Cliffs`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-cliffs-2), [`ForestCliffEvaluator.currentEvaluation`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-currentevaluation), [`ForestCliffEvaluator.EvaluateCliff`](/mod/game-api/types/alta-world-generation/forestcliffevaluator#m-evaluatecliff), [`ForestCliffEvaluator.CliffPoint.cliff`](/mod/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint#m-cliff), [`ForestCliffEvaluator.CliffPoint.CliffPoint`](/mod/game-api/types/alta-world-generation/forestcliffevaluator-cliffpoint#m-ctor), [`LakeGenerator.EvaluateWaterEdge`](/mod/game-api/types/alta-world-generation/lakegenerator#m-evaluatewateredge), [`Space.AB`](/mod/game-api/types/alta-world-generation/space#m-ab), [`Space.BC`](/mod/game-api/types/alta-world-generation/space#m-bc), [`Space.CA`](/mod/game-api/types/alta-world-generation/space#m-ca), [`Space.Paths`](/mod/game-api/types/alta-world-generation/space#m-paths), [`Space.Space`](/mod/game-api/types/alta-world-generation/space#m-ctor).

</div>
