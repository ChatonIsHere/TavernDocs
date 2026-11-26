---
title: "LogicIntSaveData"
description: "Save data for a LogicIntSender: its logic link data and its int value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for a `LogicIntSender`: its logic link data and its int value.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicIntSender, LogicIntSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/mod/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`IntSenderInput`](/mod/game-api/types/alta-items/intsenderinput), [`LogicIntSaveData`](/mod/game-api/types/alta-items/logicintsavedata), [`LogicIntSender`](/mod/game-api/types/alta-items/logicintsender)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntSaveData()"}</code> | <span className="api-desc">Creates a `LogicIntSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">The sender's logic data, including its identifier.</span> |
| <Link id="m-value" /><code>{"int value"}</code> | <span className="api-desc">The saved int value.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Same as `logicData`, through the `ILogicValueData` interface.</span> |

## Used in

Members of other types that take, return or hold a `LogicIntSaveData`:

<div className="api-used-in">

[`LogicIntRangeSaveData.Data`](/mod/game-api/types/alta-items/logicintrangesavedata#m-data), [`LogicIntReceiverData.Data`](/mod/game-api/types/alta-items/logicintreceiverdata#m-data), [`LogicIntThresholdSaveData.Data`](/mod/game-api/types/alta-items/logicintthresholdsavedata#m-data), [`LogicSumIntSaveData.Datas`](/mod/game-api/types/alta-items/logicsumintsavedata#m-datas).

</div>
