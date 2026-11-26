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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`BreakOnImpact`](/mod/game-api/types/global-a-b/breakonimpact)
- **Attributes** `RequireComponent`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupBreakOnImpact()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isrecentgrab" /><code>{"private bool isRecentGrab"}</code> | <span className="api-desc">True for 0.1 seconds after a grab. Not read anywhere in this build.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup on the same object.</span> |
| <Link id="m-timeddisablecoroutine" /><code>{"private Coroutine timedDisableCoroutine"}</code> | <span className="api-desc">The running `TimedBreakDisable` coroutine, if any.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `DisableBreak` into the pickup's `InteractionStarted`.</span> |
| <Link id="m-disablebreak" /><code>{"private void DisableBreak("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">On grab, restarts the short `TimedBreakDisable` coroutine.</span> |
| <Link id="m-timedbreakdisable" /><code>{"private IEnumerator TimedBreakDisable() (iterator)"}</code> | <span className="api-desc">Sets `isRecentGrab` for 0.1 seconds, then clears it.</span> |

</details>
