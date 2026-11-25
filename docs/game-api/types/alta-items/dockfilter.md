---
title: "DockFilter"
description: "delegate DockFilter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockFilter

A **delegate** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MulticastDelegate`
- **Documented in** [Docks](/game-api/items/docks)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DockFilter(object object, IntPtr method)"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-begininvoke" /><code>{"virtual IAsyncResult BeginInvoke("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result, AsyncCallback callback, object object)"}</code> |
| <Link id="m-endinvoke" /><code>{"virtual void EndInvoke(ref bool result, IAsyncResult __result)"}</code> |
| <Link id="m-invoke" /><code>{"virtual void Invoke("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |

## Used in

Members of other types that take, return or hold a `DockFilter`:

[`PickupDock.DockFilter`](/game-api/types/alta-items/pickupdock#m-dockfilter), [`RepairBox.filter1`](/game-api/types/global-q-r/repairbox#m-filter1), [`RepairBox.filter2`](/game-api/types/global-q-r/repairbox#m-filter2), [`RepairBox.filter3`](/game-api/types/global-q-r/repairbox#m-filter3), [`RepairBox.Prepare`](/game-api/types/global-q-r/repairbox#m-prepare-2).
