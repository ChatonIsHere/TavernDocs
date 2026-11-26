---
title: "RotatedPositionHelper"
description: "Lays out a number of positions on an arc around a transform's forward axis."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RotatedPositionHelper

A **class** in `Root.Township`, the global namespace.

Lays out a number of positions on an arc around a transform's forward axis. Used by `ProfessionsProgressShrine` to place its tree visuals.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RotatedPositionHelper(Transform origin, int instancesCount, float spread, float radius, "}<Link to="/mod/game-api/types/global-p/positioningmode">{"PositioningMode"}</Link>{" positionedMode = 0)"}</code> | Creates a `RotatedPositionHelper` from `origin`, `instancesCount`, `spread`, `radius` and `positionedMode`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentposition" /><code>{"Vector3 CurrentPosition { get; }"}</code> | The origin's world position when the helper was made. |
| <Link id="m-forwardaxis" /><code>{"Vector3 ForwardAxis { get; }"}</code> | The origin's forward direction, the axis the arc turns around. |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; }"}</code> | A rotation looking along the forward axis with the origin's up. |
| <Link id="m-startposition" /><code>{"Vector3 StartPosition { get; }"}</code> | Offset of the first instance from the origin, before stepping. |
| <Link id="m-step" /><code>{"float Step { get; }"}</code> | Angle in degrees between instances, from the spread, the count and the positioning mode. |
| <Link id="m-upaxis" /><code>{"Vector3 UpAxis { get; }"}</code> | The origin's up direction. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition(int index)"}</code> | Returns the world position of the instance at an index along the arc. |
