---
title: "GlobalCommunalStorageValuesData"
description: "Save data for the global communal storage: parallel lists of storage data, their identifiers and stored counts."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalCommunalStorageValuesData

A **class** in `Root.Township`, `Alta.Inventory`.

Save data for the global communal storage: parallel lists of storage data, their identifiers and stored counts.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`BasicSaveData<GlobalCommunalStorageValuesData>`](/mod/game-api/types/global-a-b/basicsavedata-tdata)
- **Derived types** [`GlobalCommunalStorageValuesData`](/mod/game-api/types/alta-items/globalcommunalstoragevaluesdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalCommunalStorageValuesData()"}</code> | <span className="api-desc">Creates a `GlobalCommunalStorageValuesData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifiers" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{"> identifiers"}</code> | <span className="api-desc">Unique identifier of each communal storage entry.</span> |
| <Link id="m-storagedatas" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/storagedata">{"StorageData"}</Link>{"> storageDatas"}</code> | <span className="api-desc">Storage data for each entry.</span> |
| <Link id="m-stored" /><code>{"List<int> stored"}</code> | <span className="api-desc">Stored amount for each entry.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyto" /><code>{"protected override void CopyTo("}<Link to="/mod/game-api/types/alta-items/globalcommunalstoragevaluesdata">{"GlobalCommunalStorageValuesData"}</Link>{" target)"}</code> | <span className="api-desc">Copies the three lists (by reference) to another instance.</span> |

## Used in

Members of other types that take, return or hold a `GlobalCommunalStorageValuesData`:

<div className="api-used-in">

[`GlobalCommunalStorageValues.data`](/mod/game-api/types/alta-items/globalcommunalstoragevalues#m-data).

</div>
