---
title: "CliffFill.RaycastRequest"
description: "A raycast queued by CliffFill to find a spot on a cliff face to spawn on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CliffFill.RaycastRequest

A **struct** in `Root.Township`, `Alta.Forests`.

A raycast queued by `CliffFill` to find a spot on a cliff face to spawn on.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`CliffFill`](/mod/game-api/types/alta-world-generation/clifffill)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pointedge" /><code><Link to="/mod/game-api/types/alta-world-generation/pointedge">{"PointEdge"}</Link>{" pointEdge"}</code> | <span className="api-desc">The point along the cliff edge to cast from. Its position is updated to the hit point.</span> |
| <Link id="m-y" /><code>{"float y"}</code> | <span className="api-desc">Height the ray starts at.</span> |

## Used in

Members of other types that take, return or hold a `RaycastRequest`:

<div className="api-used-in">

[`CliffFill.Raycasts`](/mod/game-api/types/alta-world-generation/clifffill#m-raycasts).

</div>
