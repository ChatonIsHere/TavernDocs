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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<IntSenderInput>`](/mod/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicIntThresholdSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicIntThresholdSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicIntThresholdSaveData`](/mod/game-api/types/alta-items/logicintthresholdsavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntThresholdReceiver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | <span className="api-desc">Last output value.</span> |
| <Link id="m-isactiveabovethreshold" /><code>{"private bool isActiveAboveThreshold"}</code> | <span className="api-desc">True to output true above the threshold, false for below.</span> |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | <span className="api-desc">Unity event fired with the new output.</span> |
| <Link id="m-threshold" /><code>{"private int threshold"}</code> | <span className="api-desc">The value compared against.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: works out the starting value and fires `onValueUpdated` with it.</span> |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | <span className="api-desc">When the input changes, fires `onValueUpdated` if the result changed.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"private bool GetValue()"}</code> | <span className="api-desc">Compares the input to the threshold, strictly above or strictly below depending on `isActiveAboveThreshold`.</span> |

</details>
