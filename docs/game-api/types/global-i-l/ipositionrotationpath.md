---
title: "IPositionRotationPath"
description: "A path that gives a position and rotation for a value along it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPositionRotationPath

An **interface** in `Root.Township`, no namespace.

A path that gives a position and rotation for a value along it. Implemented by `WayPointPath` and `PresetWayPointPath`; `GuidedMovement` follows one.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`PresetWayPointPath`](/game-api/types/global-p/presetwaypointpath), [`WayPointPath`](/game-api/types/global-t-x/waypointpath)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"void GetPosition(float value, out Vector3 position, out Quaternion rotation, bool isNormalized = true)"}</code> | Gets the position and rotation at `value` along the path, which is 0 to 1 when `isNormalized` is true. |

## Used in

Members of other types that take, return or hold a `IPositionRotationPath`:

[`GuidedMovement.path`](/game-api/types/global-e-h/guidedmovement#m-path).
