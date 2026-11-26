---
title: "AnimatedInt"
description: "A synced integer animator parameter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedInt

A **class** in `Root.Township`, `Alta.Networking.Animation`.

A synced integer animator parameter. The server sets it and clients write the received value to their animator.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedValue<int>`](/mod/game-api/types/alta-networking/animatedvalue-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedInt(string name)"}</code> | <span className="api-desc">Creates an `AnimatedInt` from `name`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | <span className="api-desc">Highest value the parameter can sync. Default 1.</span> |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | <span className="api-desc">Lowest value the parameter can sync. Default 0.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> | <span className="api-desc">Links to the animator parameter and starts from its current integer value.</span> |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the value packed between `minimum` and `maximum`. Clients apply it on read.</span> |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | <span className="api-desc">Writes the value to the animator's integer parameter.</span> |

## Used in

Members of other types that take, return or hold a `AnimatedInt`:

<div className="api-used-in">

[`NetworkAnimator.GetInt`](/mod/game-api/types/alta-networking/networkanimator#m-getint), [`NetworkAnimator.intMap`](/mod/game-api/types/alta-networking/networkanimator#m-intmap), [`NetworkAnimator.ints`](/mod/game-api/types/alta-networking/networkanimator#m-ints).

</div>
