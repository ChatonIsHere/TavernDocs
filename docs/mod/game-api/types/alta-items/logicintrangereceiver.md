---
title: "LogicIntRangeReceiver"
description: "Logic receiver that outputs true while an int input is within an inclusive range (or outside it, if set)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntRangeReceiver

A **class** in `Root.Township`, `Alta.Logic`.

Logic receiver that outputs true while an int input is within an inclusive range (or outside it, if set). Runs on the server and saves its range.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<IntSenderInput>`](/mod/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicIntRangeSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicIntRangeSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicIntRangeSaveData`](/mod/game-api/types/alta-items/logicintrangesavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntRangeReceiver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | Last output value. |
| <Link id="m-isactivewithinrange" /><code>{"private bool isActiveWithinRange"}</code> | True to output true inside the range, false to output true outside it. |
| <Link id="m-maximumvalueinclusive" /><code>{"private int maximumValueInclusive"}</code> | Upper bound, included. |
| <Link id="m-minimumvalueinclusive" /><code>{"private int minimumValueInclusive"}</code> | Lower bound, included. |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | Unity event fired with the new output. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: works out the starting value and fires `onValueUpdated` with it. |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | When the input changes, fires `onValueUpdated` if the result changed. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"private bool GetValue()"}</code> | Checks whether the input is within the inclusive bounds, inverted if `isActiveWithinRange` is off. |

</details>
