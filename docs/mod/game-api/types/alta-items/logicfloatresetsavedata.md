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
| <Link id="m-ctor" /><code>{"LogicFloatResetSaveData()"}</code> | <span className="api-desc">Creates a `LogicFloatResetSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultvalue" /><code>{"float defaultValue"}</code> | <span className="api-desc">Value it returns to.</span> |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">The shared logic link data.</span> |
| <Link id="m-returnspeedpersec" /><code>{"float returnSpeedPerSec"}</code> | <span className="api-desc">How fast the value moves back, per second.</span> |
| <Link id="m-timebeforereturn" /><code>{"float timeBeforeReturn"}</code> | <span className="api-desc">Seconds to wait before returning.</span> |
| <Link id="m-value" /><code>{"float value"}</code> | <span className="api-desc">The current value.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Same as `logicData`.</span> |
