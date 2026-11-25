---
title: "RiverPath"
description: "class RiverPath in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverPath

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Path<RiverNode, RiverPath>`](/game-api/types/alta-world-generation/path-tnode-tpath)
- **Derived types** [`RiverNode`](/game-api/types/alta-world-generation/rivernode), [`RiverPath`](/game-api/types/alta-world-generation/riverpath)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverPath("}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" from, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" to)"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anticlockwiseangleend" /><code>{"float AnticlockwiseAngleEnd { get; set; }"}</code> |  |
| <Link id="m-anticlockwiseanglestart" /><code>{"float AnticlockwiseAngleStart { get; set; }"}</code> |  |
| <Link id="m-anticlockwiseend" /><code><Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" AnticlockwiseEnd { get; set; }"}</code> |  |
| <Link id="m-anticlockwisestart" /><code><Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" AnticlockwiseStart { get; set; }"}</code> |  |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; set; }"}</code> |  |
| <Link id="m-clockwiseangleend" /><code>{"float ClockwiseAngleEnd { get; set; }"}</code> |  |
| <Link id="m-clockwiseanglestart" /><code>{"float ClockwiseAngleStart { get; set; }"}</code> |  |
| <Link id="m-clockwiseend" /><code><Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" ClockwiseEnd { get; set; }"}</code> |  |
| <Link id="m-clockwisestart" /><code><Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" ClockwiseStart { get; set; }"}</code> |  |
| <Link id="m-isunderground" /><code>{"bool IsUnderground { get; }"}</code> |  |
| <Link id="m-mesh" /><code><Link to="/game-api/types/global-q-r/ramspline">{"RamSpline"}</Link>{" Mesh { get; set; }"}</code> |  |
| <Link id="m-waterfall" /><code><Link to="/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/waterfall">{"Waterfall"}</Link>{" { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disableriver" /><code>{"void DisableRiver("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-enableriver" /><code>{"void EnableRiver("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"void OnDestroy()"}</code> |  |
| <Link id="m-foreach" /><code>{"internal void ForEach(Func<object, object> p)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RiverPath`:

[`RiverAudio.lastPath`](/game-api/types/alta-world-generation/riveraudio#m-lastpath), [`RiverGCoreInstruction.RiverGCoreInstruction`](/game-api/types/alta-world-generation/rivergcoreinstruction#m-ctor-2), [`RiverGeneration.overground`](/game-api/types/alta-world-generation/rivergeneration#m-overground), [`RiverGeneration.Overground`](/game-api/types/alta-world-generation/rivergeneration#m-overground-2), [`RiverGeneration.WorkingOverground`](/game-api/types/alta-world-generation/rivergeneration#m-workingoverground), [`RiverIntersections.Intersection.river`](/game-api/types/alta-world-generation/riverintersections-intersection#m-river), [`RiverMeshTest.EvaluateMergePower`](/game-api/types/alta-world-generation/rivermeshtest#m-evaluatemergepower), [`RiverMeshTest.EvaluateValidMerge`](/game-api/types/alta-world-generation/rivermeshtest#m-evaluatevalidmerge), [`RiverMeshTest.Generate`](/game-api/types/alta-world-generation/rivermeshtest#m-generate-3), [`RiverMeshTest.riversWithChunksAssigned`](/game-api/types/alta-world-generation/rivermeshtest#m-riverswithchunksassigned), [`RiverNode.EvaluateEdgeInformation`](/game-api/types/alta-world-generation/rivernode#m-evaluateedgeinformation), [`RiverNode.Incoming`](/game-api/types/alta-world-generation/rivernode#m-incoming), [`RiverNode.Outgoing`](/game-api/types/alta-world-generation/rivernode#m-outgoing), [`Waterfall.AddPath`](/game-api/types/alta-world-generation/waterfall#m-addpath), [`Waterfall.paths`](/game-api/types/alta-world-generation/waterfall#m-paths), [`Waterfall.Paths`](/game-api/types/alta-world-generation/waterfall#m-paths-2), [`RiverNodeMapSpawnData.Edge`](/game-api/types/global-q-r/rivernodemapspawndata#m-edge), [`RiverNodeMapSpawnData.RiverNodeMapSpawnData`](/game-api/types/global-q-r/rivernodemapspawndata#m-ctor).
