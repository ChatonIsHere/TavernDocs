---
title: "LogicBoolSaveData"
description: "Save data for a LogicBoolSender: its logic link data and its bool value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicBoolSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for a `LogicBoolSender`: its logic link data and its bool value.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicBoolSender, LogicBoolSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`BoolSenderInput`](/game-api/types/alta-items/boolsenderinput), [`LogicBoolSaveData`](/game-api/types/alta-items/logicboolsavedata), [`LogicBoolSender`](/game-api/types/alta-items/logicboolsender)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicBoolSaveData()"}</code> | Creates a `LogicBoolSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | The sender's logic data, including its identifier. |
| <Link id="m-value" /><code>{"bool value"}</code> | The saved bool value. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | Same as `logicData`, through the `ILogicValueData` interface. |

## Used in

Members of other types that take, return or hold a `LogicBoolSaveData`:

[`LogicBoolReceiverData.Data`](/game-api/types/alta-items/logicboolreceiverdata#m-data), [`LogicGateSaveData.Datas`](/game-api/types/alta-items/logicgatesavedata#m-datas), [`LogicGateSaveData1.Datas`](/game-api/types/alta-items/logicgatesavedata1#m-datas), [`LogicResetSaveData.boolSaveData`](/game-api/types/global-i-l/logicresetsavedata#m-boolsavedata).
