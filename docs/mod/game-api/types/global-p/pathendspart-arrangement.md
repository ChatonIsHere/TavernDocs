---
title: "PathEndsPart.Arrangement"
description: "How PathEndsPart picks which path end gets which side: fixed direction, side A or B towards the forest entrance, or random."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PathEndsPart.Arrangement

An **enum** in `Root.Township`, the global namespace.

How `PathEndsPart` picks which path end gets which side: fixed direction, side A or B towards the forest entrance, or random.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PathEndsPart`](/mod/game-api/types/global-p/pathendspart)

## Values

| Member |
| --- |
| <Link id="m-random" /><code>{"Random = 3"}</code> |
| <Link id="m-sideatoentrance" /><code>{"SideAToEntrance = 1"}</code> |
| <Link id="m-sidebtoentrance" /><code>{"SideBToEntrance = 2"}</code> |
| <Link id="m-symmetrical" /><code>{"Symmetrical = 0"}</code> |

## Used in

Members of other types that take, return or hold a `Arrangement`:

<div className="api-used-in">

[`PathEndsPart.arrangement`](/mod/game-api/types/global-p/pathendspart#m-arrangement).

</div>
