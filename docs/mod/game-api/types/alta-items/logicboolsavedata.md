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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicBoolSender, LogicBoolSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/mod/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`BoolSenderInput`](/mod/game-api/types/alta-items/boolsenderinput), [`LogicBoolSaveData`](/mod/game-api/types/alta-items/logicboolsavedata), [`LogicBoolSender`](/mod/game-api/types/alta-items/logicboolsender)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicBoolSaveData()"}</code> | <span className="api-desc">Creates a `LogicBoolSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">The sender's logic data, including its identifier.</span> |
| <Link id="m-value" /><code>{"bool value"}</code> | <span className="api-desc">The saved bool value.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Same as `logicData`, through the `ILogicValueData` interface.</span> |

## Used in

Members of other types that take, return or hold a `LogicBoolSaveData`:

<div className="api-used-in">

[`LogicBoolReceiverData.Data`](/mod/game-api/types/alta-items/logicboolreceiverdata#m-data), [`LogicGateSaveData.Datas`](/mod/game-api/types/alta-items/logicgatesavedata#m-datas), [`LogicGateSaveData1.Datas`](/mod/game-api/types/alta-items/logicgatesavedata1#m-datas), [`LogicResetSaveData.boolSaveData`](/mod/game-api/types/global-i-l/logicresetsavedata#m-boolsavedata).

</div>
