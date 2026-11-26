---
title: "LogicResetSaveData"
description: "Save data (version 1) for LogicReset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicResetSaveData

A **class** in `Root.Township`, no namespace.

Save data (version 1) for `LogicReset`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`NewSaveData<LogicReset, LogicResetSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`LogicReset`](/game-api/types/global-i-l/logicreset), [`LogicResetSaveData`](/game-api/types/global-i-l/logicresetsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicResetSaveData()"}</code> | Creates a `LogicResetSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boolsavedata" /><code><Link to="/game-api/types/alta-items/logicboolsavedata">{"LogicBoolSaveData"}</Link>{"[] boolSaveData"}</code> | Saved data of each sender, in list order. |
| <Link id="m-resetvalues" /><code>{"bool[] resetValues"}</code> | Reset value for each sender, same order as `boolSaveData`. |
