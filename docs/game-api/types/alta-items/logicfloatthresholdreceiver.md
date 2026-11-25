---
title: "LogicFloatThresholdReceiver"
description: "class LogicFloatThresholdReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatThresholdReceiver

A **class** in `Root.Township`, `Alta.Logic`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<FloatSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicFloatThresholdSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicFloatThresholdSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicFloatThresholdSaveData`](/game-api/types/alta-items/logicfloatthresholdsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicFloatThresholdReceiver()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> |
| <Link id="m-isactiveabovethreshold" /><code>{"private bool isActiveAboveThreshold"}</code> |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> |
| <Link id="m-threshold" /><code>{"private float threshold"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-getvalue" /><code>{"private bool GetValue()"}</code> |

</details>
