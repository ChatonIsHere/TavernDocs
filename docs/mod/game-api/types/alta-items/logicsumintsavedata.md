---
title: "LogicSumIntSaveData"
description: "Save data for LogicSumIntReceiver: its own output value data and the int inputs it adds up."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicSumIntSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicSumIntReceiver`: its own output value data and the int inputs it adds up.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicSumIntReceiver, LogicSumIntSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/mod/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`LogicSumIntReceiver`](/mod/game-api/types/alta-items/logicsumintreceiver), [`LogicSumIntSaveData`](/mod/game-api/types/alta-items/logicsumintsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicSumIntSaveData()"}</code> | <span className="api-desc">Creates a `LogicSumIntSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">The receiver's own logic data, which holds the summed output.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-datas" /><code><Link to="/mod/game-api/types/alta-items/logicintsavedata">{"LogicIntSaveData"}</Link>{"[] Datas { get; set; }"}</code> | <span className="api-desc">Logic data of each linked int sender being summed.</span> |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Wraps `logicData` for the `ILogicValueData` interface.</span> |
