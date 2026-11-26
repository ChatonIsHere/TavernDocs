---
title: "ModifiableStaticManagerSaveData"
description: "Save data for ModifiableStaticManager: which static objects (by hash) are modified."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModifiableStaticManagerSaveData

A **internal class** in `Root.Township`, `Alta.Networking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for `ModifiableStaticManager`: which static objects (by hash) are modified.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`NewSaveData<ModifiableStaticManager, ModifiableStaticManagerSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ModifiableStaticManager`](/game-api/types/alta-networking/modifiablestaticmanager), [`ModifiableStaticManagerSaveData`](/game-api/types/alta-networking/modifiablestaticmanagersavedata)
- **Nested types** [`Item`](/game-api/types/alta-networking/modifiablestaticmanagersavedata-item)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableStaticManagerSaveData()"}</code> | Creates a `ModifiableStaticManagerSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code><Link to="/game-api/types/alta-networking/modifiablestaticmanagersavedata-item">{"ModifiableStaticManagerSaveData.Item"}</Link>{"[] items"}</code> | Each object's hash and modified state. |
