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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicIntSender, LogicIntSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`IntSenderInput`](/game-api/types/alta-items/intsenderinput), [`LogicIntSaveData`](/game-api/types/alta-items/logicintsavedata), [`LogicIntSender`](/game-api/types/alta-items/logicintsender)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntSaveData()"}</code> | Creates a `LogicIntSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | The sender's logic data, including its identifier. |
| <Link id="m-value" /><code>{"int value"}</code> | The saved int value. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | Same as `logicData`, through the `ILogicValueData` interface. |

## Used in

Members of other types that take, return or hold a `LogicIntSaveData`:

[`LogicIntRangeSaveData.Data`](/game-api/types/alta-items/logicintrangesavedata#m-data), [`LogicIntReceiverData.Data`](/game-api/types/alta-items/logicintreceiverdata#m-data), [`LogicIntThresholdSaveData.Data`](/game-api/types/alta-items/logicintthresholdsavedata#m-data), [`LogicSumIntSaveData.Datas`](/game-api/types/alta-items/logicsumintsavedata#m-datas).
