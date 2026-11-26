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
| <Link id="m-ctor" /><code>{"LogicIntRangeReceiver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | <span className="api-desc">Last output value.</span> |
| <Link id="m-isactivewithinrange" /><code>{"private bool isActiveWithinRange"}</code> | <span className="api-desc">True to output true inside the range, false to output true outside it.</span> |
| <Link id="m-maximumvalueinclusive" /><code>{"private int maximumValueInclusive"}</code> | <span className="api-desc">Upper bound, included.</span> |
| <Link id="m-minimumvalueinclusive" /><code>{"private int minimumValueInclusive"}</code> | <span className="api-desc">Lower bound, included.</span> |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> | <span className="api-desc">Unity event fired with the new output.</span> |

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
| <Link id="m-getvalue" /><code>{"private bool GetValue()"}</code> | <span className="api-desc">Checks whether the input is within the inclusive bounds, inverted if `isActiveWithinRange` is off.</span> |

</details>
