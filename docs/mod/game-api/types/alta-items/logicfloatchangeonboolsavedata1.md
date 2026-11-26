---
title: "LogicFloatChangeOnBoolSaveData1"
description: "Version 1 save data for a LogicFloatChangeOnBool, migrated to LogicFloatChangeOnBoolSaveData2 when loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatChangeOnBoolSaveData1

A **class** in `Root.Township`, `Alta.Logic`.

Version 1 save data for a `LogicFloatChangeOnBool`, migrated to `LogicFloatChangeOnBoolSaveData2` when loaded.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatChangeOnBoolSaveData1()"}</code> | <span className="api-desc">Creates a `LogicFloatChangeOnBoolSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"float currentValue"}</code> | <span className="api-desc">The float value when saved.</span> |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">The logic identifier data.</span> |
| <Link id="m-movespeedpersec" /><code>{"float moveSpeedPerSec"}</code> | <span className="api-desc">How fast the value moves per second.</span> |
| <Link id="m-targetvalue" /><code>{"float targetValue"}</code> | <span className="api-desc">The value it was moving toward.</span> |
| <Link id="m-timebeforemoving" /><code>{"float timeBeforeMoving"}</code> | <span className="api-desc">Delay left before it starts moving.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | <span className="api-desc">Property over `logicData`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Copies every field into `LogicFloatChangeOnBoolSaveData2`.</span> |
