---
title: "LogicSumIntReceiver"
description: "class LogicSumIntReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicSumIntReceiver

A **class** in `Root.Township`, `Alta.Logic`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiverArray<IntSenderInput>`](/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput), [`ISavable<LogicSumIntSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicSumIntSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicSumIntSaveData`](/game-api/types/alta-items/logicsumintsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicSumIntReceiver()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private int currentValue"}</code> |  |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-getvalue" /><code>{"private int GetValue()"}</code> |  |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> |  |
