---
title: "LogicFloatChangeOnBoolSaveData"
description: "Save data for LogicFloatChangeOnBool, which moves a float between two values while powered by a bool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatChangeOnBoolSaveData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `LogicFloatChangeOnBool`, which moves a float between two values while powered by a bool.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicFloatChangeOnBool, LogicFloatChangeOnBoolSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/mod/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`LogicFloatChangeOnBool`](/mod/game-api/types/alta-items/logicfloatchangeonbool), [`LogicFloatChangeOnBoolSaveData`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatChangeOnBoolSaveData()"}</code> | <span className="api-desc">Creates a `LogicFloatChangeOnBoolSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"float currentProgress"}</code> | <span className="api-desc">Progress (0 to 1) between the start and end values.</span> |
| <Link id="m-ismovingforward" /><code>{"bool isMovingForward"}</code> | <span className="api-desc">Whether it is moving towards the end value.</span> |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">Backing field for `LogicSaveData`.</span> |
| <Link id="m-movespeedpersec" /><code>{"float moveSpeedPerSec"}</code> | <span className="api-desc">Speed of the change, in value units per second.</span> |
| <Link id="m-oneway" /><code>{"bool oneWay"}</code> | <span className="api-desc">If true it stops at the end instead of reversing.</span> |
| <Link id="m-timebeforemoving" /><code>{"float timeBeforeMoving"}</code> | <span className="api-desc">Seconds to wait before moving.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The shared logic data.</span> |
