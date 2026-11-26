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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`FixedImpactor`](/mod/game-api/types/alta-items/fixedimpactor)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PooledFixedImpactor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isoverridingreset" /><code>{"private bool isOverridingReset"}</code> | <span className="api-desc">When on, `Reset` does nothing.</span> |
| <Link id="m-targetpooledobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" targetPooledObject"}</code> | <span className="api-desc">The pooled object whose requests recharge this impactor.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reset" /><code>{"override void Reset()"}</code> | <span className="api-desc">Resets as normal unless `isOverridingReset` is on.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">If `isChargedOnStart`, charges the impactor each time the pooled object is requested.</span> |
