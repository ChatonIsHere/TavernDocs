---
title: "AbstractDockEvents"
description: "Base component that turns a PickupDock's dock and undock events into first, each, last and undock callbacks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AbstractDockEvents

An **abstract class** in `Root.Township`, `Alta.Inventory`.

Base component that turns a `PickupDock`'s dock and undock events into first, each, last and undock callbacks. Can be limited to server or client.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ItemDockedVfxEvent`](/game-api/types/alta-items/itemdockedvfxevent), [`DockEvents`](/game-api/types/global-c-d/dockevents)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected AbstractDockEvents()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | The dock whose events are watched. |
| <Link id="m-isrunonclient" /><code>{"private bool isRunOnClient"}</code> | Whether the callbacks run on clients. |
| <Link id="m-isrunonserver" /><code>{"private bool isRunOnServer"}</code> | Whether the callbacks run on the server. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-firstdocked" /><code>{"protected abstract void FirstDocked()"}</code> | Called when the first item goes into an empty dock. |
| <Link id="m-itemdocked-2" /><code>{"protected abstract void ItemDocked()"}</code> | The private handler calls `FirstDocked` when the dock now holds 1, then the abstract `ItemDocked`. |
| <Link id="m-itemundocked-2" /><code>{"protected abstract void ItemUndocked()"}</code> | The private handler calls `LastUndocked` when the dock is now empty, then the abstract `ItemUndocked`. |
| <Link id="m-lastundocked" /><code>{"protected abstract void LastUndocked()"}</code> | Called when the last item leaves the dock. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the dock's `ItemDocked` and `ItemUndocked` events, if `ShouldRun` allows it on this side. |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | The private handler calls `FirstDocked` when the dock now holds 1, then the abstract `ItemDocked`. |
| <Link id="m-itemundocked" /><code>{"private void ItemUndocked("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | The private handler calls `LastUndocked` when the dock is now empty, then the abstract `ItemUndocked`. |
| <Link id="m-shouldrun" /><code>{"private bool ShouldRun()"}</code> | True in local tests; otherwise uses `isRunOnServer` or `isRunOnClient` for the current side. |

</details>
