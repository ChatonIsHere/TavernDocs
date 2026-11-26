---
title: "LogicFloatRangeReceiver"
description: "Logic receiver that outputs true while a float input is strictly between a minimum and maximum (or outside it, if set)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatRangeReceiver

A **class** in `Root.Township`, `Alta.Logic`.

Logic receiver that outputs true while a float input is strictly between a minimum and maximum (or outside it, if set). Runs on the server and saves its range.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<FloatSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicFloatRangeSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicFloatRangeSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicFloatRangeSaveData`](/game-api/types/alta-items/logicfloatrangesavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatRangeReceiver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | Last output value. |
| <Link id="m-isactivewithinrange" /><code>{"private bool isActiveWithinRange"}</code> | True to output true inside the range, false to output true outside it. |
| <Link id="m-maximumvalue" /><code>{"private float maximumValue"}</code> | Upper bound (exclusive). |
| <Link id="m-minimumvalue" /><code>{"private float minimumValue"}</code> | Lower bound (exclusive). |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | Unity event fired with the new output. |

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
| <Link id="m-getvalue" /><code>{"private bool GetValue()"}</code> | Checks whether the input is strictly between the bounds, inverted if `isActiveWithinRange` is off. |

</details>
