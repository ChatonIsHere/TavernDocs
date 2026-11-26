---
title: "PulleyBeltHelper.BeltOutput"
description: "One candidate tangent line from a pulley circle to the next, worked out by PulleyBeltHelper when it fits a belt around a list of circles."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PulleyBeltHelper.BeltOutput

A **private struct** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One candidate tangent line from a pulley circle to the next, worked out by `PulleyBeltHelper` when it fits a belt around a list of circles.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PulleyBeltHelper`](/mod/game-api/types/global-p/pulleybelthelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BeltOutput(Vector3 tangent, bool isAExternal, bool isBExternal, bool isCExternal)"}</code> | Creates a `PulleyBeltHelper.BeltOutput` from `tangent`, `isAExternal`, `isBExternal` and `isCExternal`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isaexternal" /><code>{"bool isAExternal"}</code> | Whether the belt wraps the outside of this circle (A) on this tangent. |
| <Link id="m-isbexternal" /><code>{"bool isBExternal"}</code> | Which side of the next circle (B) the tangent meets. |
| <Link id="m-iscexternal" /><code>{"bool isCExternal"}</code> | Which side of the circle after that (C) this option was checked against. |
| <Link id="m-tangent" /><code>{"Vector3 tangent"}</code> | The tangent line offset from circle A's centre toward circle B. |

## Used in

Members of other types that take, return or hold a `BeltOutput`:

[`PulleyBeltHelper.outputs`](/mod/game-api/types/global-p/pulleybelthelper#m-outputs).
