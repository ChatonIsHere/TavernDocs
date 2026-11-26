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
| <Link id="m-ctor" /><code>{"GlobalPagesManagerSaveData()"}</code> | <span className="api-desc">Creates a `GlobalPagesManagerSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-pages" /><code>{"uint[] pages"}</code> | <span className="api-desc">Page hashes of the pages added to the manager, matched by index with `providers`.</span> |
| <Link id="m-providers" /><code>{"int[] providers"}</code> | <span className="api-desc">Page provider id for each entry in `pages`, matched by index.</span> |
