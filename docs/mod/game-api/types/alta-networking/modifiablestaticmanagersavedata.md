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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`NewSaveData<ModifiableStaticManager, ModifiableStaticManagerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`ModifiableStaticManager`](/mod/game-api/types/alta-networking/modifiablestaticmanager), [`ModifiableStaticManagerSaveData`](/mod/game-api/types/alta-networking/modifiablestaticmanagersavedata)
- **Nested types** [`Item`](/mod/game-api/types/alta-networking/modifiablestaticmanagersavedata-item)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifiableStaticManagerSaveData()"}</code> | <span className="api-desc">Creates a `ModifiableStaticManagerSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code><Link to="/mod/game-api/types/alta-networking/modifiablestaticmanagersavedata-item">{"ModifiableStaticManagerSaveData.Item"}</Link>{"[] items"}</code> | <span className="api-desc">Each object's hash and modified state.</span> |
