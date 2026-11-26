---
title: "SubDockHandler"
description: "Event handler for a pickup docking into or out of a sub dock of a docked item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SubDockHandler

A **delegate** in `Root.Township`, `Alta.Inventory`.

Event handler for a pickup docking into or out of a sub dock of a docked item. Used by `PickupDock.OnSubDocked` and `OnSubUndocked`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SubDockHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" subDock, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" subDockPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" topDock, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" subDock, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" subDockPickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" topDock)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `SubDockHandler`:

[`PickupDock.OnSubDocked`](/mod/game-api/types/alta-items/pickupdock#m-onsubdocked), [`PickupDock.OnSubUndocked`](/mod/game-api/types/alta-items/pickupdock#m-onsubundocked).
