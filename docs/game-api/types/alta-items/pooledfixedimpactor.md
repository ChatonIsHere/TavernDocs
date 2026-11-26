---
title: "PooledFixedImpactor"
description: "A FixedImpactor on a pooled object."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PooledFixedImpactor

A **class** in `Root.Township`, `Alta.Impact`.

A `FixedImpactor` on a pooled object. It recharges each time the object is taken from the pool and can ignore resets.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`FixedImpactor`](/game-api/types/alta-items/fixedimpactor)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PooledFixedImpactor()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isoverridingreset" /><code>{"private bool isOverridingReset"}</code> | When on, `Reset` does nothing. |
| <Link id="m-targetpooledobject" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" targetPooledObject"}</code> | The pooled object whose requests recharge this impactor. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"override void Reset()"}</code> | Resets as normal unless `isOverridingReset` is on. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | If `isChargedOnStart`, charges the impactor each time the pooled object is requested. |
