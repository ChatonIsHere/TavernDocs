---
title: "CommunalStorageUniqueIdentifier"
description: "A hashed asset that names one global communal storage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommunalStorageUniqueIdentifier

A **class** in `Root.Township`, `Alta.Inventory`.

A hashed asset that names one global communal storage. The server saves what each one holds in the Global Communal Storage file.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`HashedGeneralValue<CommunalStorageUniqueIdentifier>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`CommunalStorageUniqueIdentifier`](/mod/game-api/types/alta-items/communalstorageuniqueidentifier)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommunalStorageUniqueIdentifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Used in

Members of other types that take, return or hold a `CommunalStorageUniqueIdentifier`:

<div className="api-used-in">

[`CommunalStorage.uniqueIdentifier`](/mod/game-api/types/alta-items/communalstorage#m-uniqueidentifier), [`CommunalStorageData.uniqueIdentifier`](/mod/game-api/types/alta-items/communalstoragedata#m-uniqueidentifier), [`GlobalCommunalStorageValues.Load`](/mod/game-api/types/alta-items/globalcommunalstoragevalues#m-load), [`GlobalCommunalStorageValues.Save`](/mod/game-api/types/alta-items/globalcommunalstoragevalues#m-save), [`GlobalCommunalStorageValues.uniqueStorages`](/mod/game-api/types/alta-items/globalcommunalstoragevalues#m-uniquestorages), [`GlobalCommunalStorageValuesData.identifiers`](/mod/game-api/types/alta-items/globalcommunalstoragevaluesdata#m-identifiers).

</div>
