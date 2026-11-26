---
title: "DockPositioning"
description: "Override for where a docked pickup sits: fills in local position, rotation and scale, returning false if it can't place it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockPositioning

A **delegate** in `Root.Township`, `Alta.Inventory`.

Override for where a docked pickup sits: fills in local position, rotation and scale, returning false if it can't place it. Set through `PickupDock.OverridePositioning`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockPositioning(object object, IntPtr method)"}</code> | Made by the compiler when you assign a method to this delegate; you don't call it directly. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling, out Vector3 position, out Quaternion rotation, out Vector3 scale, AsyncCallback callback, object object)"}</code> | Starts the call on another thread; not supported in Unity, so use `Invoke`. |
| <Link id="m-endinvoke" /><code>{"virtual bool EndInvoke(out Vector3 position, out Quaternion rotation, out Vector3 scale, IAsyncResult result)"}</code> | Waits for a call started with `BeginInvoke`; not supported in Unity. |
| <Link id="m-invoke" /><code>{"virtual bool Invoke("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling, out Vector3 position, out Quaternion rotation, out Vector3 scale)"}</code> | Calls every method on this delegate with these arguments. |

## Used in

Members of other types that take, return or hold a `DockPositioning`:

[`PickupDock.OverridePositioning`](/mod/game-api/types/alta-items/pickupdock#m-overridepositioning).
