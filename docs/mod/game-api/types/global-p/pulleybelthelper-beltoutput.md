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
| <Link id="m-ctor" /><code>{"BeltOutput(Vector3 tangent, bool isAExternal, bool isBExternal, bool isCExternal)"}</code> | <span className="api-desc">Creates a `PulleyBeltHelper.BeltOutput` from `tangent`, `isAExternal`, `isBExternal` and `isCExternal`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isaexternal" /><code>{"bool isAExternal"}</code> | <span className="api-desc">Whether the belt wraps the outside of this circle (A) on this tangent.</span> |
| <Link id="m-isbexternal" /><code>{"bool isBExternal"}</code> | <span className="api-desc">Which side of the next circle (B) the tangent meets.</span> |
| <Link id="m-iscexternal" /><code>{"bool isCExternal"}</code> | <span className="api-desc">Which side of the circle after that (C) this option was checked against.</span> |
| <Link id="m-tangent" /><code>{"Vector3 tangent"}</code> | <span className="api-desc">The tangent line offset from circle A's centre toward circle B.</span> |

## Used in

Members of other types that take, return or hold a `BeltOutput`:

<div className="api-used-in">

[`PulleyBeltHelper.outputs`](/mod/game-api/types/global-p/pulleybelthelper#m-outputs).

</div>
