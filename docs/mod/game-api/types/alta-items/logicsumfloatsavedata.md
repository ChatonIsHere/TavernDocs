---
title: "LogicSumFloatSaveData"
description: "Save data for LogicSumFloatReceiver: its own output value data and the float inputs it adds up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicSumFloatSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicSumFloatReceiver`: its own output value data and the float inputs it adds up.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicSumFloatReceiver, LogicSumFloatSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/mod/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`LogicSumFloatReceiver`](/mod/game-api/types/alta-items/logicsumfloatreceiver), [`LogicSumFloatSaveData`](/mod/game-api/types/alta-items/logicsumfloatsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicSumFloatSaveData()"}</code> | Creates a `LogicSumFloatSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | The receiver's own logic data, which holds the summed output. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datas" /><code><Link to="/mod/game-api/types/alta-items/logicfloatsavedata">{"LogicFloatSaveData"}</Link>{"[] Datas { get; set; }"}</code> | Logic data of each linked float sender being summed. |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | Wraps `logicData` for the `ILogicValueData` interface. |
