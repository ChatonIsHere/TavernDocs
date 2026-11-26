---
title: "PickupBreakOnImpact"
description: "A BreakOnImpact for pickups that flags the first 0.1 seconds after a grab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupBreakOnImpact

A **class** in `Root.Township`, `Alta.Impact`.

A `BreakOnImpact` for pickups that flags the first 0.1 seconds after a grab. In this build nothing reads the flag, so it behaves like plain `BreakOnImpact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`BreakOnImpact`](/game-api/types/global-a-b/breakonimpact)
- **Attributes** `RequireComponent`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupBreakOnImpact()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isrecentgrab" /><code>{"private bool isRecentGrab"}</code> | True for 0.1 seconds after a grab. Not read anywhere in this build. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup on the same object. |
| <Link id="m-timeddisablecoroutine" /><code>{"private Coroutine timedDisableCoroutine"}</code> | The running `TimedBreakDisable` coroutine, if any. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks `DisableBreak` into the pickup's `InteractionStarted`. |
| <Link id="m-disablebreak" /><code>{"private void DisableBreak("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | On grab, restarts the short `TimedBreakDisable` coroutine. |
| <Link id="m-timedbreakdisable" /><code>{"private IEnumerator TimedBreakDisable() (iterator)"}</code> | Sets `isRecentGrab` for 0.1 seconds, then clears it. |

</details>
