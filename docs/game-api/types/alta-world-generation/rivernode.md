---
title: "RiverNode"
description: "A point in the forest's river network."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverNode

A **class** in `Root.Township`, `Alta.Forests`.

A point in the forest's river network. Water volume flows down its outgoing path, and its width comes from the volume. Used while generating rivers and their edge decorations.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Node<RiverNode, RiverPath>`](/game-api/types/alta-world-generation/node-tnode-tpath)
- **Derived types** [`RiverNode`](/game-api/types/alta-world-generation/rivernode), [`RiverPath`](/game-api/types/alta-world-generation/riverpath)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RiverNode(int index, "}<Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{" space, Vector2 position, float height, float volume)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isbelowthreshold" /><code>{"private bool isBelowThreshold"}</code> |
| <Link id="m-isvolumecached" /><code>{"private bool isVolumeCached"}</code> |
| <Link id="m-volumecache" /><code>{"private float volumeCache"}</code> |
| <Link id="m-width" /><code>{"private float width"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-catchment" /><code><Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" Catchment { get; private set; }"}</code> | The last node downstream, where this node's water ends up. Set by `EvaluateCatchment`. |
| <Link id="m-flowedelsewhere" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{"> FlowedElsewhere { get; }"}</code> | Nodes whose water was sent elsewhere. |
| <Link id="m-groundattachment" /><code>{"float GroundAttachment { get; set; }"}</code> | Ground attachment value for the node. |
| <Link id="m-incoming" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> Incoming { get; }"}</code> | Paths flowing into this node. |
| <Link id="m-istoosmall" /><code>{"bool IsTooSmall { get; set; }"}</code> | Set when the river here is too small to keep. |
| <Link id="m-isunderground" /><code>{"bool IsUnderground { get; }"}</code> | True if the volume is below the overground threshold or the node is too small. |
| <Link id="m-outgoing" /><code><Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" Outgoing { get; }"}</code> | The path flowing out of this node, or null. |
| <Link id="m-radius" /><code>{"float Radius { get; }"}</code> | Half the width. |
| <Link id="m-selfvolume" /><code>{"float SelfVolume { get; set; }"}</code> | Water this node adds on its own. |
| <Link id="m-space" /><code><Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{" { get; }"}</code> | The forest space the node lies in. |
| <Link id="m-staticvolumemultiplier" /><code>{"float StaticVolumeMultiplier { get; set; }"}</code> | Multiplier on the cached volume. Default 1. |
| <Link id="m-volume" /><code>{"float Volume { get; }"}</code> | Cached volume times `StaticVolumeMultiplier`. |
| <Link id="m-width-2" /><code>{"float Width { get; }"}</code> | River width here, from the volume. Set by `CacheVolume`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cachevolume" /><code>{"float CacheVolume("}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" river, bool isRecache = false)"}</code> | Works out and caches the volume (its own plus everything flowing in, capped), the width, and whether it is too small to show above ground. |
| <Link id="m-evaluateadjacent" /><code>{"void EvaluateAdjacent()"}</code> | Links each above-ground path at this node to its clockwise and anticlockwise neighbours, with angles. |
| <Link id="m-evaluatecatchment" /><code>{"void EvaluateCatchment()"}</code> | Follows outgoing paths to the end and stores it as `Catchment`. |
| <Link id="m-evaluateedgeinformation" /><code>{"static void EvaluateEdgeInformation(float decorationMultiplier, List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> decorations, "}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" finalOutgoing)"}</code> | Walks around the river's outline from a final outgoing path and adds line and arc decoration segments along the banks. |
| <Link id="m-evaluatesegmentinformation" /><code>{"static void EvaluateSegmentInformation(List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> segments, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" node, float offset = 0)"}</code> | Adds a line segment for every path upstream of a node, recursively. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-evaluateedgeinformation-2" /><code>{"private static Vector2 EvaluateEdgeInformation(float decorationMultiplier, List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> decorations, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" nodeA, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" nodeB, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" nodeC, Vector2 nodeAB, Vector2 nodeBC, Vector2 leftPoint, ref float totalLength, ref float totalAngle, bool isWaterfall, bool isCurveWaterfall, float height)"}</code> | Walks around the river's outline from a final outgoing path and adds line and arc decoration segments along the banks. |

</details>

## Used in

Members of other types that take, return or hold a `RiverNode`:

[`LakeGenerator.GenerateLake`](/game-api/types/alta-world-generation/lakegenerator#m-generatelake), [`RiverGCoreInstruction.RiverGCoreInstruction`](/game-api/types/alta-world-generation/rivergcoreinstruction#m-ctor-2), [`RiverGeneration.nodes`](/game-api/types/alta-world-generation/rivergeneration#m-nodes), [`RiverGeneration.Nodes`](/game-api/types/alta-world-generation/rivergeneration#m-nodes-2), [`RiverGeneration.WorkingNodes`](/game-api/types/alta-world-generation/rivergeneration#m-workingnodes), [`RiverMeshTest.Generate`](/game-api/types/alta-world-generation/rivermeshtest#m-generate-2), [`RiverMeshTest.pathSplines`](/game-api/types/alta-world-generation/rivermeshtest#m-pathsplines), [`RiverMeshTest.TraceBack`](/game-api/types/alta-world-generation/rivermeshtest#m-traceback), [`RiverPath.RiverPath`](/game-api/types/alta-world-generation/riverpath#m-ctor), [`Waterfall.Bottom`](/game-api/types/alta-world-generation/waterfall#m-bottom), [`Waterfall.SetBottom`](/game-api/types/alta-world-generation/waterfall#m-setbottom), [`Waterfall.Top`](/game-api/types/alta-world-generation/waterfall#m-top), [`RiverNodeMapSpawnData.Node`](/game-api/types/global-q-r/rivernodemapspawndata#m-node), [`RiverNodeMapSpawnData.RiverNodeMapSpawnData`](/game-api/types/global-q-r/rivernodemapspawndata#m-ctor).
