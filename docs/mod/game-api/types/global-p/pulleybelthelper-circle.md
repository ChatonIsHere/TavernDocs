---
title: "PulleyBeltHelper.Circle"
description: "Internal copy of an input ICircle used by PulleyBeltHelper, with the radius grown by the belt offset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PulleyBeltHelper.Circle

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal copy of an input `ICircle` used by `PulleyBeltHelper`, with the radius grown by the belt offset.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PulleyBeltHelper`](/mod/game-api/types/global-p/pulleybelthelper)
- **Inherits or implements** [`ICircle`](/mod/game-api/types/global-i-l/icircle)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-face" /><code>{"Vector3 Face { get; set; }"}</code> | The circle's facing axis (the pulley's axle direction). |
| <Link id="m-position" /><code>{"Vector3 Position { get; set; }"}</code> | Centre of the circle in world space. |
| <Link id="m-radius" /><code>{"float Radius { get; set; }"}</code> | Input radius plus the offset passed to `GetRope` or `GetExterior`. |

## Used in

Members of other types that take, return or hold a `Circle`:

[`PulleyBeltHelper.circles`](/mod/game-api/types/global-p/pulleybelthelper#m-circles).
