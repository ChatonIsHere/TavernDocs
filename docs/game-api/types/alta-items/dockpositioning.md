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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MulticastDelegate`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DockPositioning(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling, out Vector3 position, out Quaternion rotation, out Vector3 scale, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual bool EndInvoke(out Vector3 position, out Quaternion rotation, out Vector3 scale, IAsyncResult result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual bool Invoke("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, bool isScaling, out Vector3 position, out Quaternion rotation, out Vector3 scale)"}</code> |

## Used in

Members of other types that take, return or hold a `DockPositioning`:

[`PickupDock.OverridePositioning`](/game-api/types/alta-items/pickupdock#m-overridepositioning).
