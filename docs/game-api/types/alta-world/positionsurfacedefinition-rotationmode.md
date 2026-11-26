---
title: "PositionSurfaceDefinition.RotationMode"
description: "How a PositionSurfaceDefinition rotates a spawned object to the surface normal: Y axis out with a random spin, Z axis out with a random spin, or Z out kept..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionSurfaceDefinition.RotationMode

An **enum** in `Root.Township`, `Alta.Chunks`.

How a `PositionSurfaceDefinition` rotates a spawned object to the surface normal: Y axis out with a random spin, Z axis out with a random spin, or Z out kept flat.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`PositionSurfaceDefinition`](/game-api/types/alta-world/positionsurfacedefinition)

## Values

| Member |
| --- |
| <Link id="m-youtrandom" /><code>{"YOutRandom = 0"}</code> |
| <Link id="m-zoutflat" /><code>{"ZOutFlat = 2"}</code> |
| <Link id="m-zoutrandom" /><code>{"ZOutRandom = 1"}</code> |

## Used in

Members of other types that take, return or hold a `RotationMode`:

[`PositionSurfaceDefinition.rotationMode`](/game-api/types/alta-world/positionsurfacedefinition#m-rotationmode).
