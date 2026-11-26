---
title: "DockCounter"
description: "Fires events when the number of items in a PickupDock reaches or drops below a threshold."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockCounter

A **class** in `Root.Township`, no namespace.

Fires events when the number of items in a `PickupDock` reaches or drops below a threshold. Can be limited to server or client.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockCounter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock being counted. |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | Whether the threshold is currently reached. |
| <Link id="m-isrunonclient" /><code>{"private bool isRunOnClient"}</code> | Whether to run on clients. |
| <Link id="m-isrunonserver" /><code>{"private bool isRunOnServer"}</code> | Whether to run on the server. |
| <Link id="m-threshold" /><code>{"private int threshold"}</code> | Item count that triggers the events (10 by default). |
| <Link id="m-thresholddropped" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" thresholdDropped"}</code> | Fired when the count drops back below the threshold. |
| <Link id="m-thresholdreached" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" thresholdReached"}</code> | Fired when the count reaches the threshold. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | If it should run on this side, hooks the dock events and checks the current count. |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Fires `thresholdReached` when the stored count reaches the threshold. |
| <Link id="m-itemundocked" /><code>{"private void ItemUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Fires `thresholdDropped` when the stored count falls below the threshold. |
| <Link id="m-shouldrun" /><code>{"private bool ShouldRun()"}</code> | Whether to run here, by `isRunOnServer` and `isRunOnClient`; always in local test. |

</details>
