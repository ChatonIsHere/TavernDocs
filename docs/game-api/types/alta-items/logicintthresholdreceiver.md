---
title: "LogicIntThresholdReceiver"
description: "Logic receiver that outputs true while an int input is above a threshold (or below, if set)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntThresholdReceiver

A **class** in `Root.Township`, `Alta.Logic`.

Logic receiver that outputs true while an int input is above a threshold (or below, if set). Runs on the server and saves its threshold.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<IntSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicIntThresholdSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicIntThresholdSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicIntThresholdSaveData`](/game-api/types/alta-items/logicintthresholdsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntThresholdReceiver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | Last output value. |
| <Link id="m-isactiveabovethreshold" /><code>{"private bool isActiveAboveThreshold"}</code> | True to output true above the threshold, false for below. |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | Unity event fired with the new output. |
| <Link id="m-threshold" /><code>{"private int threshold"}</code> | The value compared against. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: works out the starting value and fires `onValueUpdated` with it. |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | When the input changes, fires `onValueUpdated` if the result changed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"private bool GetValue()"}</code> | Compares the input to the threshold, strictly above or strictly below depending on `isActiveAboveThreshold`. |

</details>
