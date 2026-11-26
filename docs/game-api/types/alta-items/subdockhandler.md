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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SubDockHandler(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" subDock, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" subDockPickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" topDock, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" subDock, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" subDockPickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" topDock)"}</code> |

## Used in

Members of other types that take, return or hold a `SubDockHandler`:

[`PickupDock.OnSubDocked`](/game-api/types/alta-items/pickupdock#m-onsubdocked), [`PickupDock.OnSubUndocked`](/game-api/types/alta-items/pickupdock#m-onsubundocked).
