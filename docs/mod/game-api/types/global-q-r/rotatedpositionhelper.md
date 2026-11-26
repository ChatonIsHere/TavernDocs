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
| <Link id="m-ctor" /><code>{"RotatedPositionHelper(Transform origin, int instancesCount, float spread, float radius, "}<Link to="/mod/game-api/types/global-p/positioningmode">{"PositioningMode"}</Link>{" positionedMode = 0)"}</code> | <span className="api-desc">Creates a `RotatedPositionHelper` from `origin`, `instancesCount`, `spread`, `radius` and `positionedMode`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentposition" /><code>{"Vector3 CurrentPosition { get; }"}</code> | <span className="api-desc">The origin's world position when the helper was made.</span> |
| <Link id="m-forwardaxis" /><code>{"Vector3 ForwardAxis { get; }"}</code> | <span className="api-desc">The origin's forward direction, the axis the arc turns around.</span> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; }"}</code> | <span className="api-desc">A rotation looking along the forward axis with the origin's up.</span> |
| <Link id="m-startposition" /><code>{"Vector3 StartPosition { get; }"}</code> | <span className="api-desc">Offset of the first instance from the origin, before stepping.</span> |
| <Link id="m-step" /><code>{"float Step { get; }"}</code> | <span className="api-desc">Angle in degrees between instances, from the spread, the count and the positioning mode.</span> |
| <Link id="m-upaxis" /><code>{"Vector3 UpAxis { get; }"}</code> | <span className="api-desc">The origin's up direction.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Vector3 GetPosition(int index)"}</code> | <span className="api-desc">Returns the world position of the instance at an index along the arc.</span> |
