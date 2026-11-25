---
title: "PickupBreakOnImpact"
description: "Breaks an item on a hard hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupBreakOnImpact

A **class** in `Root.Township`, `Alta.Impact`.

Breaks an item on a hard hit.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`BreakOnImpact`](/game-api/types/global-a-b/breakonimpact)
- **Attributes** `RequireComponent`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupBreakOnImpact()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isrecentgrab" /><code>{"private bool isRecentGrab"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-timeddisablecoroutine" /><code>{"private Coroutine timedDisableCoroutine"}</code> |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-disablebreak" /><code>{"private void DisableBreak("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |
| <Link id="m-timedbreakdisable" /><code>{"private IEnumerator TimedBreakDisable() (iterator)"}</code> |

</details>
