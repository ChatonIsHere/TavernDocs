---
title: "DockCounter"
description: "Fires events when the number of items in a PickupDock reaches or drops below a threshold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockCounter

A **class** in `Root.Township`, the global namespace.

Fires events when the number of items in a `PickupDock` reaches or drops below a threshold. Can be limited to server or client.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockCounter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The dock being counted.</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">Whether the threshold is currently reached.</span> |
| <Link id="m-isrunonclient" /><code>{"private bool isRunOnClient"}</code> | <span className="api-desc">Whether to run on clients.</span> |
| <Link id="m-isrunonserver" /><code>{"private bool isRunOnServer"}</code> | <span className="api-desc">Whether to run on the server.</span> |
| <Link id="m-threshold" /><code>{"private int threshold"}</code> | <span className="api-desc">Item count that triggers the events (10 by default).</span> |
| <Link id="m-thresholddropped" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" thresholdDropped"}</code> | <span className="api-desc">Fired when the count drops back below the threshold.</span> |
| <Link id="m-thresholdreached" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" thresholdReached"}</code> | <span className="api-desc">Fired when the count reaches the threshold.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">If it should run on this side, hooks the dock events and checks the current count.</span> |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Fires `thresholdReached` when the stored count reaches the threshold.</span> |
| <Link id="m-itemundocked" /><code>{"private void ItemUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Fires `thresholdDropped` when the stored count falls below the threshold.</span> |
| <Link id="m-shouldrun" /><code>{"private bool ShouldRun()"}</code> | <span className="api-desc">Whether to run here, by `isRunOnServer` and `isRunOnClient`; always in local test.</span> |

</details>
