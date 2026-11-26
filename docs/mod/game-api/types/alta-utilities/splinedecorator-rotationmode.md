---
title: "SplineDecorator.RotationMode"
description: "How SplineDecorator rotates placed objects: not at all, look along the forward direction, look along it flattened to horizontal, or look along it with up..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplineDecorator.RotationMode

An **enum** in `Root.Township`, `Alta.Bezier`.

How `SplineDecorator` rotates placed objects: not at all, look along the forward direction, look along it flattened to horizontal, or look along it with up set to the terrain normal.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`SplineDecorator`](/mod/game-api/types/alta-utilities/splinedecorator)

## Values

| Member |
| --- |
| <Link id="m-look" /><code>{"Look = 1"}</code> |
| <Link id="m-looky" /><code>{"LookY = 2"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |
| <Link id="m-terrain" /><code>{"Terrain = 3"}</code> |

## Used in

Members of other types that take, return or hold a `RotationMode`:

<div className="api-used-in">

[`SplineDecorator.rotationMode`](/mod/game-api/types/alta-utilities/splinedecorator#m-rotationmode).

</div>
