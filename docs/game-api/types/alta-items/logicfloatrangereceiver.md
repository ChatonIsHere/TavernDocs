---
title: "LogicFloatRangeReceiver"
description: "class LogicFloatRangeReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatRangeReceiver

A **class** in `Root.Township`, `Alta.Logic`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<FloatSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicFloatRangeSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicFloatRangeSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicFloatRangeSaveData`](/game-api/types/alta-items/logicfloatrangesavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatRangeReceiver()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> |  |
| <Link id="m-isactivewithinrange" /><code>{"private bool isActiveWithinRange"}</code> |  |
| <Link id="m-maximumvalue" /><code>{"private float maximumValue"}</code> |  |
| <Link id="m-minimumvalue" /><code>{"private float minimumValue"}</code> |  |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-getvalue" /><code>{"private bool GetValue()"}</code> |  |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> |  |
