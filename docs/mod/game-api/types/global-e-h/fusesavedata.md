---
title: "FuseSaveData"
description: "Save data for a Fuse."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FuseSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `Fuse`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NewSaveData<Fuse, FuseSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Fuse`](/mod/game-api/types/global-e-h/fuse), [`FuseSaveData`](/mod/game-api/types/global-e-h/fusesavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FuseSaveData()"}</code> | <span className="api-desc">Creates a `FuseSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentfuseamount" /><code>{"float currentFuseAmount"}</code> | <span className="api-desc">How much fuse is left.</span> |
| <Link id="m-isfinished" /><code>{"bool isFinished"}</code> | <span className="api-desc">Whether the fuse has burned out.</span> |
| <Link id="m-islit" /><code>{"bool isLit"}</code> | <span className="api-desc">Whether the fuse is burning.</span> |
