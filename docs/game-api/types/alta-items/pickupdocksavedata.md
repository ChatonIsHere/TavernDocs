---
title: "PickupDockSaveData"
description: "Save data for a PickupDock (version 2): what is docked and how many."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockSaveData

A **internal class** in `Root.Township`, `Alta.Inventory`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `PickupDock` (version 2): what is docked and how many.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<PickupDock, PickupDockSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PickupDock`](/game-api/types/alta-items/pickupdock), [`PickupDockSaveData`](/game-api/types/alta-items/pickupdocksavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PickupDockSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-childindex" /><code>{"int childIndex"}</code> | Index of the saved child entity that is the docked pickup. |
| <Link id="m-dockedtype" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" dockedType"}</code> | Item type in the dock. |
| <Link id="m-quantity" /><code>{"int quantity"}</code> | How many are stored. |
