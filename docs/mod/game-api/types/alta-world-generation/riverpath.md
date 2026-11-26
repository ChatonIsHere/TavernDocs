---
title: "RiverPath"
description: "A river segment between two RiverNodes in the forest generator, with its spline mesh, any waterfall and its neighbouring segments at each end."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverPath

A **class** in `Root.Township`, `Alta.Forests`.

A river segment between two `RiverNode`s in the forest generator, with its spline mesh, any waterfall and its neighbouring segments at each end.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`Path<RiverNode, RiverPath>`](/mod/game-api/types/alta-world-generation/path-tnode-tpath)
- **Derived types** [`RiverNode`](/mod/game-api/types/alta-world-generation/rivernode), [`RiverPath`](/mod/game-api/types/alta-world-generation/riverpath)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverPath("}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" from, "}<Link to="/mod/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" to)"}</code> | <span className="api-desc">Creates a `RiverPath` from `from` and `to`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anticlockwiseangleend" /><code>{"float AnticlockwiseAngleEnd { get; set; }"}</code> | <span className="api-desc">Angle to the next segment anticlockwise at the end node.</span> |
| <Link id="m-anticlockwiseanglestart" /><code>{"float AnticlockwiseAngleStart { get; set; }"}</code> | <span className="api-desc">Angle to the next segment anticlockwise at the start node.</span> |
| <Link id="m-anticlockwiseend" /><code><Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" AnticlockwiseEnd { get; set; }"}</code> | <span className="api-desc">Neighbouring segment anticlockwise at the end node.</span> |
| <Link id="m-anticlockwisestart" /><code><Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" AnticlockwiseStart { get; set; }"}</code> | <span className="api-desc">Neighbouring segment anticlockwise at the start node.</span> |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; set; }"}</code> | <span className="api-desc">The location chunk the segment's mesh belongs to.</span> |
| <Link id="m-clockwiseangleend" /><code>{"float ClockwiseAngleEnd { get; set; }"}</code> | <span className="api-desc">Angle to the next segment clockwise at the end node.</span> |
| <Link id="m-clockwiseanglestart" /><code>{"float ClockwiseAngleStart { get; set; }"}</code> | <span className="api-desc">Angle to the next segment clockwise at the start node.</span> |
| <Link id="m-clockwiseend" /><code><Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" ClockwiseEnd { get; set; }"}</code> | <span className="api-desc">Neighbouring segment clockwise at the end node.</span> |
| <Link id="m-clockwisestart" /><code><Link to="/mod/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" ClockwiseStart { get; set; }"}</code> | <span className="api-desc">Neighbouring segment clockwise at the start node.</span> |
| <Link id="m-isunderground" /><code>{"bool IsUnderground { get; }"}</code> | <span className="api-desc">True if the start node is underground.</span> |
| <Link id="m-mesh" /><code><Link to="/mod/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" Mesh { get; set; }"}</code> | <span className="api-desc">The river spline mesh.</span> |
| <Link id="m-waterfall" /><code><Link to="/mod/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Waterfall on this segment, if any.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableriver" /><code>{"void DisableRiver("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Hides the river mesh. Hooked to the chunk unloading.</span> |
| <Link id="m-enableriver" /><code>{"void EnableRiver("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Shows the river mesh. Hooked to the chunk finishing loading.</span> |
| <Link id="m-ondestroy" /><code>{"void OnDestroy()"}</code> | <span className="api-desc">Unhooks the mesh from the chunk's load and unload events.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-foreach" /><code>{"internal void ForEach(Func<object, object> p)"}</code> | <span className="api-desc">Unfinished stub. Throws `NotImplementedException`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RiverPath`:

<div className="api-used-in">

[`RiverAudio.lastPath`](/mod/game-api/types/alta-world-generation/riveraudio#m-lastpath), [`RiverGCoreInstruction.RiverGCoreInstruction`](/mod/game-api/types/alta-world-generation/rivergcoreinstruction#m-ctor-2), [`RiverGeneration.overground`](/mod/game-api/types/alta-world-generation/rivergeneration#m-overground), [`RiverGeneration.Overground`](/mod/game-api/types/alta-world-generation/rivergeneration#m-overground-2), [`RiverGeneration.WorkingOverground`](/mod/game-api/types/alta-world-generation/rivergeneration#m-workingoverground), [`RiverIntersections.Intersection.river`](/mod/game-api/types/alta-world-generation/riverintersections-intersection#m-river), [`RiverMeshTest.EvaluateMergePower`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-evaluatemergepower), [`RiverMeshTest.EvaluateValidMerge`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-evaluatevalidmerge), [`RiverMeshTest.Generate`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-generate-3), [`RiverMeshTest.riversWithChunksAssigned`](/mod/game-api/types/alta-world-generation/rivermeshtest#m-riverswithchunksassigned), [`RiverNode.EvaluateEdgeInformation`](/mod/game-api/types/alta-world-generation/rivernode#m-evaluateedgeinformation), [`RiverNode.Incoming`](/mod/game-api/types/alta-world-generation/rivernode#m-incoming), [`RiverNode.Outgoing`](/mod/game-api/types/alta-world-generation/rivernode#m-outgoing), [`Waterfall.AddPath`](/mod/game-api/types/alta-world-generation/waterfall#m-addpath), [`Waterfall.paths`](/mod/game-api/types/alta-world-generation/waterfall#m-paths), [`Waterfall.Paths`](/mod/game-api/types/alta-world-generation/waterfall#m-paths-2), [`RiverNodeMapSpawnData.Edge`](/mod/game-api/types/global-q-r/rivernodemapspawndata#m-edge), [`RiverNodeMapSpawnData.RiverNodeMapSpawnData`](/mod/game-api/types/global-q-r/rivernodemapspawndata#m-ctor).

</div>
