---
title: "LogicFloatChangeOnBool"
description: "class LogicFloatChangeOnBool in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatChangeOnBool

A **class** in `Root.Township`, `Alta.Logic`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<LogicFloatChangeOnBoolSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicFloatChangeOnBoolSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicFloatChangeOnBoolSaveData`](/game-api/types/alta-items/logicfloatchangeonboolsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicFloatChangeOnBool()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> |
| <Link id="m-currenttimer" /><code>{"private float currentTimer"}</code> |
| <Link id="m-endvalue" /><code>{"private float endValue"}</code> |
| <Link id="m-errormessageposted" /><code>{"private bool errorMessagePosted"}</code> |
| <Link id="m-ispowered" /><code>{"private bool isPowered"}</code> |
| <Link id="m-movespeedpersec" /><code>{"private float moveSpeedPerSec"}</code> |
| <Link id="m-movingforward" /><code>{"private bool movingForward"}</code> |
| <Link id="m-oneway" /><code>{"private bool oneWay"}</code> |
| <Link id="m-returntostartifunpowered" /><code>{"private bool returnToStartIfUnpowered"}</code> |
| <Link id="m-sender" /><code>{"private "}<Link to="/game-api/types/alta-items/logicfloatsender">{"LogicFloatSender"}</Link>{" sender"}</code> |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> |
| <Link id="m-timebeforemoving" /><code>{"private float timeBeforeMoving"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-ispowered-2" /><code>{"void IsPowered(bool value)"}</code> |
| <Link id="m-update" /><code>{"void Update()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-move" /><code>{"private bool Move()"}</code> |
| <Link id="m-onvaluechanged" /><code>{"private void OnValueChanged()"}</code> |
| <Link id="m-switchdirections" /><code>{"private void SwitchDirections(bool resetProgress)"}</code> |

</details>
