---
title: "PickupDockSaveDataOld"
description: "Version 1 save data for a PickupDock, migrated to PickupDockSaveData when loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PickupDockSaveDataOld

A **internal class** in `Root.Township`, `Alta.Inventory`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Version 1 save data for a `PickupDock`, migrated to `PickupDockSaveData` when loaded.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PickupDockSaveDataOld()"}</code> | <span className="api-desc">Creates a `PickupDockSaveDataOld` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-childindex" /><code>{"int childIndex"}</code> | <span className="api-desc">Index of the saved child entity that is the docked pickup.</span> |
| <Link id="m-dockedtype" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" dockedType"}</code> | <span className="api-desc">Item type in the dock.</span> |
| <Link id="m-quantity" /><code>{"int quantity"}</code> | <span className="api-desc">How many are stored.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the new format, capping one item type (hash 39982) at 100.</span> |
