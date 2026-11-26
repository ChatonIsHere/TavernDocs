---
title: "UltimateRope.RopeBreakEventInfo"
description: "Details of a rope break, sent to the rope's events receiver when a link joint breaks and SendEvents is on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UltimateRope.RopeBreakEventInfo

A **class** in `Root.Township`, the global namespace.

Details of a rope break, sent to the rope's events receiver when a link joint breaks and `SendEvents` is on.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`UltimateRope`](/mod/game-api/types/global-t-x/ultimaterope)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeBreakEventInfo()"}</code> | Creates an `UltimateRope.RopeBreakEventInfo` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-link1" /><code>{"GameObject link1"}</code> | The object on one side of the break (the rope start if it broke at the first link). |
| <Link id="m-link2" /><code>{"GameObject link2"}</code> | The object on the other side of the break. |
| <Link id="m-locallink1pos" /><code>{"Vector3 localLink1Pos"}</code> | Break point in `link1`'s local space. |
| <Link id="m-locallink2pos" /><code>{"Vector3 localLink2Pos"}</code> | Break point in `link2`'s local space. |
| <Link id="m-rope" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope">{"UltimateRope"}</Link>{" rope"}</code> | The rope that broke. |
| <Link id="m-worldpos" /><code>{"Vector3 worldPos"}</code> | World position of the break. |
