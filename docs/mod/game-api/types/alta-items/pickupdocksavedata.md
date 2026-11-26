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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<PickupDock, PickupDockSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PickupDock`](/mod/game-api/types/alta-items/pickupdock), [`PickupDockSaveData`](/mod/game-api/types/alta-items/pickupdocksavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockSaveData()"}</code> | <span className="api-desc">Creates a `PickupDockSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-childindex" /><code>{"int childIndex"}</code> | <span className="api-desc">Index of the saved child entity that is the docked pickup.</span> |
| <Link id="m-dockedtype" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" dockedType"}</code> | <span className="api-desc">Item type in the dock.</span> |
| <Link id="m-quantity" /><code>{"int quantity"}</code> | <span className="api-desc">How many are stored.</span> |
