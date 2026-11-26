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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StorageData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | The stored item. |
| <Link id="m-material" /><code><Link to="/game-api/types/global-p/physicalmaterial">{"PhysicalMaterial"}</Link>{" material"}</code> | Physical material of the stored item, or null; rows are matched on item and material. |
| <Link id="m-quantity" /><code>{"int quantity"}</code> | How many are stored. |

## Used in

Members of other types that take, return or hold a `StorageData`:

[`GlobalCommunalStorageValues.availableData`](/game-api/types/alta-items/globalcommunalstoragevalues#m-availabledata), [`GlobalCommunalStorageValuesData.storageDatas`](/game-api/types/alta-items/globalcommunalstoragevaluesdata#m-storagedatas).
