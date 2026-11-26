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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicFloatChangeOnBoolSaveData1()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"float currentValue"}</code> | The float value when saved. |
| <Link id="m-logicdata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | The logic identifier data. |
| <Link id="m-movespeedpersec" /><code>{"float moveSpeedPerSec"}</code> | How fast the value moves per second. |
| <Link id="m-targetvalue" /><code>{"float targetValue"}</code> | The value it was moving toward. |
| <Link id="m-timebeforemoving" /><code>{"float timeBeforeMoving"}</code> | Delay left before it starts moving. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-logicsavedata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" "}<Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" { get; set; }"}</code> | Property over `logicData`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Copies every field into `LogicFloatChangeOnBoolSaveData2`. |
