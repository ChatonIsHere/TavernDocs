---
title: "RoomFixPlugin.Tunnel"
description: "Settings for a tunnel in a RoomFixPlugin: operation, start and end, radius and value curves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoomFixPlugin.Tunnel

A **class** in `Root.Township`, `Alta.Caves`.

Settings for a tunnel in a `RoomFixPlugin`: operation, start and end, radius and value curves. Nothing reads them in this build.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`RoomFixPlugin`](/mod/game-api/types/alta-world-generation/roomfixplugin)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tunnel()"}</code> | <span className="api-desc">Creates a `RoomFixPlugin.Tunnel` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code>{"private float end"}</code> | <span className="api-desc">Backing field for `End`.</span> |
| <Link id="m-operation" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operation"}</code> | <span className="api-desc">Backing field for `OperationType`.</span> |
| <Link id="m-radius" /><code>{"private AnimationCurve radius"}</code> | <span className="api-desc">Backing field for `Radius`.</span> |
| <Link id="m-start" /><code>{"private float start"}</code> | <span className="api-desc">Backing field for `Start`.</span> |
| <Link id="m-value" /><code>{"private AnimationCurve value"}</code> | <span className="api-desc">Backing field for `Value`.</span> |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | <span className="api-desc">Backing field for `VerticalOffset`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-end-2" /><code>{"float End { get; }"}</code> | <span className="api-desc">End point along the passage, 0 to 1.</span> |
| <Link id="m-operationtype" /><code><Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/mod/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | <span className="api-desc">How the tunnel combines with the voxels.</span> |
| <Link id="m-radius-2" /><code>{"AnimationCurve Radius { get; }"}</code> | <span className="api-desc">Curve for the tunnel radius.</span> |
| <Link id="m-start-2" /><code>{"float Start { get; }"}</code> | <span className="api-desc">Start point along the passage, 0 to 1.</span> |
| <Link id="m-value-2" /><code>{"AnimationCurve Value { get; }"}</code> | <span className="api-desc">Curve for the voxel value the tunnel writes.</span> |
| <Link id="m-verticaloffset-2" /><code>{"float VerticalOffset { get; }"}</code> | <span className="api-desc">Height offset of the tunnel.</span> |

## Used in

Members of other types that take, return or hold a `Tunnel`:

<div className="api-used-in">

[`RoomFixPlugin.tunnels`](/mod/game-api/types/alta-world-generation/roomfixplugin#m-tunnels), [`RoomFixPlugin.Tunnels`](/mod/game-api/types/alta-world-generation/roomfixplugin#m-tunnels-2).

</div>
