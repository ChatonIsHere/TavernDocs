---
title: "PositionFromOriginHelper"
description: "Base component that works out a position from an origin point; subclasses decide how."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionFromOriginHelper

An **abstract class** in `Root.Township`, the global namespace.

Base component that works out a position from an origin point; subclasses decide how.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ColliderPositionHelper`](/mod/game-api/types/global-c-d/colliderpositionhelper), [`PlayerPositionHelper`](/mod/game-api/types/global-p/playerpositionhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PositionFromOriginHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getposition" /><code>{"abstract Vector3 GetPosition(Vector3 origin)"}</code> | Returns the position for the given origin. |

## Used in

Members of other types that take, return or hold a `PositionFromOriginHelper`:

[`HeatPoint.positionHelper`](/mod/game-api/types/alta-stats-effects/heatpoint#m-positionhelper), [`HealthObject.positionHelper`](/mod/game-api/types/global-e-h/healthobject#m-positionhelper), [`PositionFromOriginHandler.PositionFromOriginHandler`](/mod/game-api/types/global-p/positionfromoriginhandler#m-ctor).
