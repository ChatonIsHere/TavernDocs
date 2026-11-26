---
title: "LogicFloatSaveData"
description: "Save data for a LogicFloatSender: its logic link data and its float value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for a `LogicFloatSender`: its logic link data and its float value.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicFloatSender, LogicFloatSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/mod/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`FloatSenderInput`](/mod/game-api/types/alta-items/floatsenderinput), [`LogicFloatSaveData`](/mod/game-api/types/alta-items/logicfloatsavedata), [`LogicFloatSender`](/mod/game-api/types/alta-items/logicfloatsender)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatSaveData()"}</code> | <span className="api-desc">Creates a `LogicFloatSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">The sender's logic data, including its identifier.</span> |
| <Link id="m-value" /><code>{"float value"}</code> | <span className="api-desc">The saved float value.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Same as `logicData`, through the `ILogicValueData` interface.</span> |

## Used in

Members of other types that take, return or hold a `LogicFloatSaveData`:

<div className="api-used-in">

[`LogicFloatRangeSaveData.Data`](/mod/game-api/types/alta-items/logicfloatrangesavedata#m-data), [`LogicFloatReceiverData.Data`](/mod/game-api/types/alta-items/logicfloatreceiverdata#m-data), [`LogicFloatThresholdSaveData.Data`](/mod/game-api/types/alta-items/logicfloatthresholdsavedata#m-data), [`LogicSumFloatSaveData.Datas`](/mod/game-api/types/alta-items/logicsumfloatsavedata#m-datas).

</div>
