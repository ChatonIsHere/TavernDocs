---
title: "PickupLiquidContainerEnabler.DockingElibility"
description: "Which docks a liquid container pickup may go in while it holds liquid: none, only physical docks, or any."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupLiquidContainerEnabler.DockingElibility

An **enum** in `Root.Township`, `Alta.Liquid`.

Which docks a liquid container pickup may go in while it holds liquid: none, only physical docks, or any.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Nested in** [`PickupLiquidContainerEnabler`](/mod/game-api/types/alta-stats-effects/pickupliquidcontainerenabler)

## Values

| Member |
| --- |
| <Link id="m-alldocks" /><code>{"AllDocks = 2"}</code> |
| <Link id="m-notallowed" /><code>{"NotAllowed = 0"}</code> |
| <Link id="m-onlyphysical" /><code>{"OnlyPhysical = 1"}</code> |

## Used in

Members of other types that take, return or hold a `DockingElibility`:

<div className="api-used-in">

[`PickupLiquidContainerEnabler.dockingElibilityWhenFull`](/mod/game-api/types/alta-stats-effects/pickupliquidcontainerenabler#m-dockingelibilitywhenfull).

</div>
