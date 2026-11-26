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
| <Link id="m-ctor" /><code>{"FuseSaveData()"}</code> | Creates a `FuseSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentfuseamount" /><code>{"float currentFuseAmount"}</code> | How much fuse is left. |
| <Link id="m-isfinished" /><code>{"bool isFinished"}</code> | Whether the fuse has burned out. |
| <Link id="m-islit" /><code>{"bool isLit"}</code> | Whether the fuse is burning. |
