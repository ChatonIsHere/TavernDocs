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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<LogicFloatChangeOnBool, LogicFloatChangeOnBoolSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata), [`ILogicValueData`](/game-api/types/alta-items/ilogicvaluedata)
- **Derived types** [`LogicFloatChangeOnBool`](/game-api/types/alta-items/logicfloatchangeonbool), [`LogicFloatChangeOnBoolSaveData`](/game-api/types/alta-items/logicfloatchangeonboolsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatChangeOnBoolSaveData()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"float currentProgress"}</code> | Progress (0 to 1) between the start and end values. |
| <Link id="m-ismovingforward" /><code>{"bool isMovingForward"}</code> | Whether it is moving towards the end value. |
| <Link id="m-logicdata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | Backing field for `LogicSaveData`. |
| <Link id="m-movespeedpersec" /><code>{"float moveSpeedPerSec"}</code> | Speed of the change, in value units per second. |
| <Link id="m-oneway" /><code>{"bool oneWay"}</code> | If true it stops at the end instead of reversing. |
| <Link id="m-timebeforemoving" /><code>{"float timeBeforeMoving"}</code> | Seconds to wait before moving. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | The shared logic data. |
