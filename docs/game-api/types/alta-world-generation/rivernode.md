---
title: "RiverNode"
description: "class RiverNode in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverNode

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`Node<RiverNode, RiverPath>`](/game-api/types/alta-world-generation/node-tnode-tpath)
- **Derived types** [`RiverNode`](/game-api/types/alta-world-generation/rivernode), [`RiverPath`](/game-api/types/alta-world-generation/riverpath)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverNode(int index, "}<Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{" space, Vector2 position, float height, float volume)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isbelowthreshold" /><code>{"private bool isBelowThreshold"}</code> |  |
| <Link id="m-isvolumecached" /><code>{"private bool isVolumeCached"}</code> |  |
| <Link id="m-volumecache" /><code>{"private float volumeCache"}</code> |  |
| <Link id="m-width" /><code>{"private float width"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-catchment" /><code><Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" Catchment { get; private set; }"}</code> |  |
| <Link id="m-flowedelsewhere" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{"> FlowedElsewhere { get; }"}</code> |  |
| <Link id="m-groundattachment" /><code>{"float GroundAttachment { get; set; }"}</code> |  |
| <Link id="m-incoming" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{"> Incoming { get; }"}</code> |  |
| <Link id="m-istoosmall" /><code>{"bool IsTooSmall { get; set; }"}</code> |  |
| <Link id="m-isunderground" /><code>{"bool IsUnderground { get; }"}</code> |  |
| <Link id="m-outgoing" /><code><Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" Outgoing { get; }"}</code> |  |
| <Link id="m-radius" /><code>{"float Radius { get; }"}</code> |  |
| <Link id="m-selfvolume" /><code>{"float SelfVolume { get; set; }"}</code> |  |
| <Link id="m-space" /><code><Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/space">{"Space"}</Link>{" { get; }"}</code> |  |
| <Link id="m-staticvolumemultiplier" /><code>{"float StaticVolumeMultiplier { get; set; }"}</code> |  |
| <Link id="m-volume" /><code>{"float Volume { get; }"}</code> |  |
| <Link id="m-width-2" /><code>{"float Width { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cachevolume" /><code>{"float CacheVolume("}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" river, bool isRecache = false)"}</code> |  |
| <Link id="m-evaluateadjacent" /><code>{"void EvaluateAdjacent()"}</code> |  |
| <Link id="m-evaluatecatchment" /><code>{"void EvaluateCatchment()"}</code> |  |
| <Link id="m-evaluateedgeinformation" /><code>{"static void EvaluateEdgeInformation(float decorationMultiplier, List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> decorations, "}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" finalOutgoing)"}</code> |  |
| <Link id="m-evaluatesegmentinformation" /><code>{"static void EvaluateSegmentInformation(List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> segments, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" node, float offset = 0)"}</code> |  |
| <Link id="m-evaluateedgeinformation-2" /><code>{"private static Vector2 EvaluateEdgeInformation(float decorationMultiplier, List<"}<Link to="/game-api/types/alta-world-generation/iriverdecorationsegment">{"IRiverDecorationSegment"}</Link>{"> decorations, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" nodeA, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" nodeB, "}<Link to="/game-api/types/alta-world-generation/rivernode">{"RiverNode"}</Link>{" nodeC, Vector2 nodeAB, Vector2 nodeBC, Vector2 leftPoint, ref float totalLength, ref float totalAngle, bool isWaterfall, bool isCurveWaterfall, float height)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RiverNode`:

[`LakeGenerator.GenerateLake`](/game-api/types/alta-world-generation/lakegenerator#m-generatelake), [`RiverGCoreInstruction.RiverGCoreInstruction`](/game-api/types/alta-world-generation/rivergcoreinstruction#m-ctor-2), [`RiverGeneration.nodes`](/game-api/types/alta-world-generation/rivergeneration#m-nodes), [`RiverGeneration.Nodes`](/game-api/types/alta-world-generation/rivergeneration#m-nodes-2), [`RiverGeneration.WorkingNodes`](/game-api/types/alta-world-generation/rivergeneration#m-workingnodes), [`RiverMeshTest.Generate`](/game-api/types/alta-world-generation/rivermeshtest#m-generate-2), [`RiverMeshTest.pathSplines`](/game-api/types/alta-world-generation/rivermeshtest#m-pathsplines), [`RiverMeshTest.TraceBack`](/game-api/types/alta-world-generation/rivermeshtest#m-traceback), [`RiverPath.RiverPath`](/game-api/types/alta-world-generation/riverpath#m-ctor), [`Waterfall.Bottom`](/game-api/types/alta-world-generation/waterfall#m-bottom), [`Waterfall.SetBottom`](/game-api/types/alta-world-generation/waterfall#m-setbottom), [`Waterfall.Top`](/game-api/types/alta-world-generation/waterfall#m-top), [`RiverNodeMapSpawnData.Node`](/game-api/types/global-q-r/rivernodemapspawndata#m-node), [`RiverNodeMapSpawnData.RiverNodeMapSpawnData`](/game-api/types/global-q-r/rivernodemapspawndata#m-ctor).
