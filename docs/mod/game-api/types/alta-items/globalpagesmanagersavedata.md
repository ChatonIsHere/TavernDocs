---
title: "GlobalPagesManagerSaveData"
description: "Save data (version 2) for the GlobalPagesManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPagesManagerSaveData

A **internal class** in `Root.Township`, `Alta.Pages`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 2) for the `GlobalPagesManager`.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<GlobalPagesManager, GlobalPagesManagerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GlobalPagesManager`](/mod/game-api/types/alta-items/globalpagesmanager), [`GlobalPagesManagerSaveData`](/mod/game-api/types/alta-items/globalpagesmanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalPagesManagerSaveData()"}</code> | Creates a `GlobalPagesManagerSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pages" /><code>{"uint[] pages"}</code> | Page hashes of the pages added to the manager, matched by index with `providers`. |
| <Link id="m-providers" /><code>{"int[] providers"}</code> | Page provider id for each entry in `pages`, matched by index. |
