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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`HashedGeneralValue<CommunalStorageUniqueIdentifier>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`CommunalStorageUniqueIdentifier`](/game-api/types/alta-items/communalstorageuniqueidentifier)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommunalStorageUniqueIdentifier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Used in

Members of other types that take, return or hold a `CommunalStorageUniqueIdentifier`:

[`CommunalStorage.uniqueIdentifier`](/game-api/types/alta-items/communalstorage#m-uniqueidentifier), [`CommunalStorageData.uniqueIdentifier`](/game-api/types/alta-items/communalstoragedata#m-uniqueidentifier), [`GlobalCommunalStorageValues.Load`](/game-api/types/alta-items/globalcommunalstoragevalues#m-load), [`GlobalCommunalStorageValues.Save`](/game-api/types/alta-items/globalcommunalstoragevalues#m-save), [`GlobalCommunalStorageValues.uniqueStorages`](/game-api/types/alta-items/globalcommunalstoragevalues#m-uniquestorages), [`GlobalCommunalStorageValuesData.identifiers`](/game-api/types/alta-items/globalcommunalstoragevaluesdata#m-identifiers).
