---
title: "KinematicForceMode"
description: "How a growth stage sets rigidbodies: leave them, force kinematic, or force non-kinematic."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# KinematicForceMode

An **enum** in `Root.Township`, the global namespace.

How a growth stage sets rigidbodies: leave them, force kinematic, or force non-kinematic. Read by `GrowthItem` and `GrowerComponent`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)

## Values

| Member |
| --- |
| <Link id="m-forcekinematic" /><code>{"ForceKinematic = 1"}</code> |
| <Link id="m-forcenonkinematic" /><code>{"ForceNonKinematic = 2"}</code> |
| <Link id="m-none" /><code>{"None = 0"}</code> |

## Used in

Members of other types that take, return or hold a `KinematicForceMode`:

[`GrowthStage.forceKinematic`](/mod/game-api/types/global-e-h/growthstage#m-forcekinematic), [`GrowthStage.ForceKinematic`](/mod/game-api/types/global-e-h/growthstage#m-forcekinematic-2).
