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
| <Link id="m-ctor" /><code>{"RopeBreakEventInfo()"}</code> | <span className="api-desc">Creates an `UltimateRope.RopeBreakEventInfo` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-link1" /><code>{"GameObject link1"}</code> | <span className="api-desc">The object on one side of the break (the rope start if it broke at the first link).</span> |
| <Link id="m-link2" /><code>{"GameObject link2"}</code> | <span className="api-desc">The object on the other side of the break.</span> |
| <Link id="m-locallink1pos" /><code>{"Vector3 localLink1Pos"}</code> | <span className="api-desc">Break point in `link1`'s local space.</span> |
| <Link id="m-locallink2pos" /><code>{"Vector3 localLink2Pos"}</code> | <span className="api-desc">Break point in `link2`'s local space.</span> |
| <Link id="m-rope" /><code><Link to="/mod/game-api/types/global-t-x/ultimaterope">{"UltimateRope"}</Link>{" rope"}</code> | <span className="api-desc">The rope that broke.</span> |
| <Link id="m-worldpos" /><code>{"Vector3 worldPos"}</code> | <span className="api-desc">World position of the break.</span> |
