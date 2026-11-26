---
title: "StorageData"
description: "One saved row of the global communal storage: an item, its material and how many are stored."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StorageData

A **class** in `Root.Township`, `Alta.Inventory`.

One saved row of the global communal storage: an item, its material and how many are stored. Kept by `GlobalCommunalStorageValues`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StorageData()"}</code> | <span className="api-desc">Creates a `StorageData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | <span className="api-desc">The stored item.</span> |
| <Link id="m-material" /><code><Link to="/mod/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> | <span className="api-desc">Physical material of the stored item, or null; rows are matched on item and material.</span> |
| <Link id="m-quantity" /><code>{"int quantity"}</code> | <span className="api-desc">How many are stored.</span> |

## Used in

Members of other types that take, return or hold a `StorageData`:

<div className="api-used-in">

[`GlobalCommunalStorageValues.availableData`](/mod/game-api/types/alta-items/globalcommunalstoragevalues#m-availabledata), [`GlobalCommunalStorageValuesData.storageDatas`](/mod/game-api/types/alta-items/globalcommunalstoragevaluesdata#m-storagedatas).

</div>
