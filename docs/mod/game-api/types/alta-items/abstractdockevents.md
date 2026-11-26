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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ItemDockedVfxEvent`](/mod/game-api/types/alta-items/itemdockedvfxevent), [`DockEvents`](/mod/game-api/types/global-c-d/dockevents)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected AbstractDockEvents()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">The dock whose events are watched.</span> |
| <Link id="m-isrunonclient" /><code>{"private bool isRunOnClient"}</code> | <span className="api-desc">Whether the callbacks run on clients.</span> |
| <Link id="m-isrunonserver" /><code>{"private bool isRunOnServer"}</code> | <span className="api-desc">Whether the callbacks run on the server.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-firstdocked" /><code>{"protected abstract void FirstDocked()"}</code> | <span className="api-desc">Called when the first item goes into an empty dock.</span> |
| <Link id="m-itemdocked-2" /><code>{"protected abstract void ItemDocked()"}</code> | <span className="api-desc">The private handler calls `FirstDocked` when the dock now holds 1, then the abstract `ItemDocked`.</span> |
| <Link id="m-itemundocked-2" /><code>{"protected abstract void ItemUndocked()"}</code> | <span className="api-desc">The private handler calls `LastUndocked` when the dock is now empty, then the abstract `ItemUndocked`.</span> |
| <Link id="m-lastundocked" /><code>{"protected abstract void LastUndocked()"}</code> | <span className="api-desc">Called when the last item leaves the dock.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the dock's `ItemDocked` and `ItemUndocked` events, if `ShouldRun` allows it on this side.</span> |
| <Link id="m-itemdocked" /><code>{"private void ItemDocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">The private handler calls `FirstDocked` when the dock now holds 1, then the abstract `ItemDocked`.</span> |
| <Link id="m-itemundocked" /><code>{"private void ItemUndocked("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">The private handler calls `LastUndocked` when the dock is now empty, then the abstract `ItemUndocked`.</span> |
| <Link id="m-shouldrun" /><code>{"private bool ShouldRun()"}</code> | <span className="api-desc">True in local tests; otherwise uses `isRunOnServer` or `isRunOnClient` for the current side.</span> |

</details>
