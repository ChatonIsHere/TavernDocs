---
title: "LogicFloatResetSaveData"
description: "Save data for a LogicFloatReset, which eases a float sender back to a default value after a delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatResetSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for a `LogicFloatReset`, which eases a float sender back to a default value after a delay.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicFloatReset, LogicFloatResetSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/mod/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`LogicFloatReset`](/mod/game-api/types/alta-items/logicfloatreset), [`LogicFloatResetSaveData`](/mod/game-api/types/alta-items/logicfloatresetsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatResetSaveData()"}</code> | Creates a `LogicFloatResetSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultvalue" /><code>{"float defaultValue"}</code> | Value it returns to. |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | The shared logic link data. |
| <Link id="m-returnspeedpersec" /><code>{"float returnSpeedPerSec"}</code> | How fast the value moves back, per second. |
| <Link id="m-timebeforereturn" /><code>{"float timeBeforeReturn"}</code> | Seconds to wait before returning. |
| <Link id="m-value" /><code>{"float value"}</code> | The current value. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | Same as `logicData`. |
