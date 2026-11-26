---
title: "LogicFloatChangeOnBoolSaveData2"
description: "Old save format (version 2) for LogicFloatChangeOnBool."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatChangeOnBoolSaveData2

A **class** in `Root.Township`, `Alta.Logic`.

Old save format (version 2) for `LogicFloatChangeOnBool`. Only read from old saves and migrated to `LogicFloatChangeOnBoolSaveData`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicFloatChangeOnBoolSaveData2()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"float currentValue"}</code> | The float value at save time. Not carried over by `Migrate`. |
| <Link id="m-logicdata" /><code><Link to="/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | The logic link data (identifier and listeners) for this sender. |
| <Link id="m-movespeedpersec" /><code>{"float moveSpeedPerSec"}</code> | How fast the value moved towards its target, per second. |
| <Link id="m-oneway" /><code>{"bool oneWay"}</code> | If true, the value only moved one way and did not go back when the bool turned off. |
| <Link id="m-targetvalue" /><code>{"float targetValue"}</code> | The value it was moving towards at save time. Not carried over by `Migrate`. |
| <Link id="m-timebeforemoving" /><code>{"float timeBeforeMoving"}</code> | Delay in seconds before the value started moving after the bool changed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to the current `LogicFloatChangeOnBoolSaveData`. `currentValue` and `targetValue` are dropped, so progress resets. |
