---
title: "PositionFromOriginHandler"
description: "Wraps how a heat point or health object reports its position relative to an origin: through a PositionFromOriginHelper if one is set, else the transform's..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionFromOriginHandler

A **class** in `Root.Township`, the global namespace.

Wraps how a heat point or health object reports its position relative to an origin: through a `PositionFromOriginHelper` if one is set, else the transform's position.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionFromOriginHandler(Transform transform, "}<Link to="/mod/game-api/types/global-p/positionfromoriginhelper">{"PositionFromOriginHelper"}</Link>{" helper)"}</code> | <span className="api-desc">Creates a `PositionFromOriginHandler` from `transform` and `helper`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"Func<Vector3, Vector3> GetPosition"}</code> | <span className="api-desc">Given an origin, returns the position to use; without a helper it ignores the origin and returns the transform's position.</span> |

## Used in

Members of other types that take, return or hold a `PositionFromOriginHandler`:

<div className="api-used-in">

[`HeatPoint.PositionHelper`](/mod/game-api/types/alta-stats-effects/heatpoint#m-positionhelper-2), [`HealthObject.PositionHandler`](/mod/game-api/types/global-e-h/healthobject#m-positionhandler).

</div>
