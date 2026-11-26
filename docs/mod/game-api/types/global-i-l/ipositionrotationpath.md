---
title: "IPositionRotationPath"
description: "A path that gives a position and rotation for a value along it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPositionRotationPath

An **interface** in `Root.Township`, the global namespace.

A path that gives a position and rotation for a value along it. Implemented by `WayPointPath` and `PresetWayPointPath`; `GuidedMovement` follows one.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`PresetWayPointPath`](/mod/game-api/types/global-p/presetwaypointpath), [`WayPointPath`](/mod/game-api/types/global-t-x/waypointpath)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"void GetPosition(float value, out Vector3 position, out Quaternion rotation, bool isNormalized = true)"}</code> | <span className="api-desc">Gets the position and rotation at `value` along the path, which is 0 to 1 when `isNormalized` is true.</span> |

## Used in

Members of other types that take, return or hold a `IPositionRotationPath`:

<div className="api-used-in">

[`GuidedMovement.path`](/mod/game-api/types/global-e-h/guidedmovement#m-path).

</div>
