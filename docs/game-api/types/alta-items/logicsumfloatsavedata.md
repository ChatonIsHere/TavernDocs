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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicSumFloatReceiver, LogicSumFloatSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`LogicSumFloatReceiver`](/game-api/types/alta-items/logicsumfloatreceiver), [`LogicSumFloatSaveData`](/game-api/types/alta-items/logicsumfloatsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicSumFloatSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | The receiver's own logic data, which holds the summed output. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datas" /><code><Link to="/game-api/types/alta-items/logicfloatsavedata">{"LogicFloatSaveData"}</Link>{"[] Datas { get; set; }"}</code> | Logic data of each linked float sender being summed. |
| <Link id="m-logicsavedata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | Wraps `logicData` for the `ILogicValueData` interface. |
