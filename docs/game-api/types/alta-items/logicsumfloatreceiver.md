---
title: "LogicSumFloatReceiver"
description: "class LogicSumFloatReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicSumFloatReceiver

A **class** in `Root.Township`, `Alta.Logic`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiverArray<FloatSenderInput>`](/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput), [`ISavable<LogicSumFloatSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicSumFloatSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicSumFloatSaveData`](/game-api/types/alta-items/logicsumfloatsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicSumFloatReceiver()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private float currentValue"}</code> |  |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatunityevent">{"FloatUnityEvent"}</Link>{" onValueUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-getvalue" /><code>{"private float GetValue()"}</code> |  |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> |  |
