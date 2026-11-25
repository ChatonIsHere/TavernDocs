---
title: "LogicIntRangeReceiver"
description: "class LogicIntRangeReceiver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntRangeReceiver

A **class** in `Root.Township`, `Alta.Logic`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueReceiver<IntSenderInput>`](/game-api/types/alta-items/logicvaluereceiver-tsenderinput), [`ISavable<LogicIntRangeSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicIntRangeSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicIntRangeSaveData`](/game-api/types/alta-items/logicintrangesavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicIntRangeReceiver()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> |
| <Link id="m-isactivewithinrange" /><code>{"private bool isActiveWithinRange"}</code> |
| <Link id="m-maximumvalueinclusive" /><code>{"private int maximumValueInclusive"}</code> |
| <Link id="m-minimumvalueinclusive" /><code>{"private int minimumValueInclusive"}</code> |
| <Link id="m-onvalueupdated" /><code>{"private "}<Link to="/game-api/types/global-a-b/boolunityevent">{"BoolUnityEvent"}</Link>{" onValueUpdated"}</code> |

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
