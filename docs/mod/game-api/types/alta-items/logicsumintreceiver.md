---
title: "LogicSumIntReceiver"
description: "Logic receiver that adds up any number of int inputs and outputs the total."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicSumIntReceiver

A **class** in `Root.Township`, `Alta.Logic`.

Logic receiver that adds up any number of int inputs and outputs the total. Runs on the server and saves its inputs.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiverArray<IntSenderInput>`](/mod/game-api/types/alta-items/logicvaluereceiverarray-tsenderinput), [`ISavable<LogicSumIntSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicSumIntSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicSumIntSaveData`](/mod/game-api/types/alta-items/logicsumintsavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicSumIntReceiver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private int currentValue"}</code> | <span className="api-desc">Last total sent.</span> |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueUpdated"}</code> | <span className="api-desc">Unity event fired with the new total.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: works out the starting total and fires `onValueUpdated` with it.</span> |
| <Link id="m-valueupdated" /><code>{"protected override void ValueUpdated()"}</code> | <span className="api-desc">When an input changes, fires `onValueUpdated` if the total changed.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"private int GetValue()"}</code> | <span className="api-desc">Adds up all input values.</span> |

</details>
