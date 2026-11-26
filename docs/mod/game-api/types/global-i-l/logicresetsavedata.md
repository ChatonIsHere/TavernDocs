---
title: "LogicResetSaveData"
description: "Save data (version 1) for LogicReset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicResetSaveData

A **class** in `Root.Township`, the global namespace.

Save data (version 1) for `LogicReset`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`NewSaveData<LogicReset, LogicResetSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicReset`](/mod/game-api/types/global-i-l/logicreset), [`LogicResetSaveData`](/mod/game-api/types/global-i-l/logicresetsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicResetSaveData()"}</code> | <span className="api-desc">Creates a `LogicResetSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boolsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicboolsavedata">{"LogicBoolSaveData"}</Link>{"[] boolSaveData"}</code> | <span className="api-desc">Saved data of each sender, in list order.</span> |
| <Link id="m-resetvalues" /><code>{"bool[] resetValues"}</code> | <span className="api-desc">Reset value for each sender, same order as `boolSaveData`.</span> |
