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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatChangeOnBoolSaveData2()"}</code> | <span className="api-desc">Creates a `LogicFloatChangeOnBoolSaveData2` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"float currentValue"}</code> | <span className="api-desc">The float value at save time. Not carried over by `Migrate`.</span> |
| <Link id="m-logicdata" /><code><Link to="/mod/game-api/types/alta-items/logicsavedata">{"LogicSaveData"}</Link>{" logicData"}</code> | <span className="api-desc">The logic link data (identifier and listeners) for this sender.</span> |
| <Link id="m-movespeedpersec" /><code>{"float moveSpeedPerSec"}</code> | <span className="api-desc">How fast the value moved towards its target, per second.</span> |
| <Link id="m-oneway" /><code>{"bool oneWay"}</code> | <span className="api-desc">If true, the value only moved one way and did not go back when the bool turned off.</span> |
| <Link id="m-targetvalue" /><code>{"float targetValue"}</code> | <span className="api-desc">The value it was moving towards at save time. Not carried over by `Migrate`.</span> |
| <Link id="m-timebeforemoving" /><code>{"float timeBeforeMoving"}</code> | <span className="api-desc">Delay in seconds before the value started moving after the bool changed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to the current `LogicFloatChangeOnBoolSaveData`. `currentValue` and `targetValue` are dropped, so progress resets.</span> |
