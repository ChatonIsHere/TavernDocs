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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`BasicSaveData<GlobalCommunalStorageValuesData>`](/game-api/types/global-a-b/basicsavedata-tdata)
- **Derived types** [`GlobalCommunalStorageValuesData`](/game-api/types/alta-items/globalcommunalstoragevaluesdata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalCommunalStorageValuesData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-identifiers" /><code>{"List<"}<Link to="/game-api/types/alta-items/communalstorageuniqueidentifier">{"CommunalStorageUniqueIdentifier"}</Link>{"> identifiers"}</code> | Unique identifier of each communal storage entry. |
| <Link id="m-storagedatas" /><code>{"List<"}<Link to="/game-api/types/alta-items/storagedata">{"StorageData"}</Link>{"> storageDatas"}</code> | Storage data for each entry. |
| <Link id="m-stored" /><code>{"List<int> stored"}</code> | Stored amount for each entry. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyto" /><code>{"protected override void CopyTo("}<Link to="/game-api/types/alta-items/globalcommunalstoragevaluesdata">{"GlobalCommunalStorageValuesData"}</Link>{" target)"}</code> | Copies the three lists (by reference) to another instance. |

## Used in

Members of other types that take, return or hold a `GlobalCommunalStorageValuesData`:

[`GlobalCommunalStorageValues.data`](/game-api/types/alta-items/globalcommunalstoragevalues#m-data).
