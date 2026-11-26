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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`RoomFixPlugin`](/game-api/types/alta-world-generation/roomfixplugin)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Tunnel()"}</code> | Creates a `RoomFixPlugin.Tunnel` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-end" /><code>{"private float end"}</code> | Backing field for `End`. |
| <Link id="m-operation" /><code>{"private "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" operation"}</code> | Backing field for `OperationType`. |
| <Link id="m-radius" /><code>{"private AnimationCurve radius"}</code> | Backing field for `Radius`. |
| <Link id="m-start" /><code>{"private float start"}</code> | Backing field for `Start`. |
| <Link id="m-value" /><code>{"private AnimationCurve value"}</code> | Backing field for `Value`. |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | Backing field for `VerticalOffset`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-end-2" /><code>{"float End { get; }"}</code> | End point along the passage, 0 to 1. |
| <Link id="m-operationtype" /><code><Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" "}<Link to="/game-api/types/alta-utilities/operationtype">{"OperationType"}</Link>{" { get; }"}</code> | How the tunnel combines with the voxels. |
| <Link id="m-radius-2" /><code>{"AnimationCurve Radius { get; }"}</code> | Curve for the tunnel radius. |
| <Link id="m-start-2" /><code>{"float Start { get; }"}</code> | Start point along the passage, 0 to 1. |
| <Link id="m-value-2" /><code>{"AnimationCurve Value { get; }"}</code> | Curve for the voxel value the tunnel writes. |
| <Link id="m-verticaloffset-2" /><code>{"float VerticalOffset { get; }"}</code> | Height offset of the tunnel. |

## Used in

Members of other types that take, return or hold a `Tunnel`:

[`RoomFixPlugin.tunnels`](/game-api/types/alta-world-generation/roomfixplugin#m-tunnels), [`RoomFixPlugin.Tunnels`](/game-api/types/alta-world-generation/roomfixplugin#m-tunnels-2).
