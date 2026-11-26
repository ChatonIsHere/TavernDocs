---
title: "PickupDockInteractionHandler"
description: "Callback with the interactor, pickup and dock, used by PickupDocker's PreDocked, Docked and Undocked events."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockInteractionHandler

A **delegate** in `Root.Township`, `Alta.Inventory`.

Callback with the interactor, pickup and dock, used by `PickupDocker`'s `PreDocked`, `Docked` and `Undocked` events.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockInteractionHandler(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `PickupDockInteractionHandler`:

[`PickupDock.ItemDocked`](/game-api/types/alta-items/pickupdock#m-itemdocked), [`PickupDock.ItemUndocked`](/game-api/types/alta-items/pickupdock#m-itemundocked), [`PickupDock.PreItemDocked`](/game-api/types/alta-items/pickupdock#m-preitemdocked), [`PickupDocker.Docked`](/game-api/types/alta-items/pickupdocker#m-docked), [`PickupDocker.PreDocked`](/game-api/types/alta-items/pickupdocker#m-predocked), [`PickupDocker.Undocked`](/game-api/types/alta-items/pickupdocker#m-undocked), [`Pickup.PreDocked`](/game-api/types/global-p/pickup#m-predocked), [`PickupDockingChecker.HoverOverDockEnded`](/game-api/types/global-p/pickupdockingchecker#m-hoveroverdockended), [`PickupDockingChecker.HoverOverDockStarted`](/game-api/types/global-p/pickupdockingchecker#m-hoveroverdockstarted).
