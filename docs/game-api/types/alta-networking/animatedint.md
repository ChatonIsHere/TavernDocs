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

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedValue<int>`](/game-api/types/alta-networking/animatedvalue-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedInt(string name)"}</code> | Creates an `AnimatedInt` from `name`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | Highest value the parameter can sync. Default 1. |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | Lowest value the parameter can sync. Default 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> | Links to the animator parameter and starts from its current integer value. |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the value packed between `minimum` and `maximum`. Clients apply it on read. |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | Writes the value to the animator's integer parameter. |

## Used in

Members of other types that take, return or hold a `AnimatedInt`:

[`NetworkAnimator.GetInt`](/game-api/types/alta-networking/networkanimator#m-getint), [`NetworkAnimator.intMap`](/game-api/types/alta-networking/networkanimator#m-intmap), [`NetworkAnimator.ints`](/game-api/types/alta-networking/networkanimator#m-ints).
