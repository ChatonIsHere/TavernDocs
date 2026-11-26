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
| <Link id="m-ctor" /><code>{"LogicSumFloatSaveData()"}</code> | <span className="api-desc">Creates a `LogicSumFloatSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">The receiver's own logic data, which holds the summed output.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datas" /><code><Link to="/mod/game-api/types/alta-items/logicfloatsavedata">{"LogicFloatSaveData"}</Link>{"[] Datas { get; set; }"}</code> | <span className="api-desc">Logic data of each linked float sender being summed.</span> |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Wraps `logicData` for the `ILogicValueData` interface.</span> |
