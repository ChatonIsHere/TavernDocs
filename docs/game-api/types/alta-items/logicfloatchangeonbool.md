---
title: "LogicFloatChangeOnBool"
description: "Logic component that moves a float output from a start value to an end value over time while powered, and optionally back when unpowered."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatChangeOnBool

A **class** in `Root.Township`, `Alta.Logic`.

Logic component that moves a float output from a start value to an end value over time while powered, and optionally back when unpowered. Saves its progress.

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

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | Progress from 0 to 1 along the current direction. |
| <Link id="m-currenttimer" /><code>{"private float currentTimer"}</code> | Time waited since the last direction change. |
| <Link id="m-endvalue" /><code>{"private float endValue"}</code> | Value sent at the end of the move. |
| <Link id="m-errormessageposted" /><code>{"private bool errorMessagePosted"}</code> | Stops the missing-sender warning from repeating. |
| <Link id="m-ispowered" /><code>{"private bool isPowered"}</code> | Whether the input is on. |
| <Link id="m-movespeedpersec" /><code>{"private float moveSpeedPerSec"}</code> | How fast the value moves, in value units per second. |
| <Link id="m-movingforward" /><code>{"private bool movingForward"}</code> | True while moving from start to end. |
| <Link id="m-oneway" /><code>{"private bool oneWay"}</code> | When set, does not turn around at the end. |
| <Link id="m-returntostartifunpowered" /><code>{"private bool returnToStartIfUnpowered"}</code> | Whether to move back to the start value when power goes off. |
| <Link id="m-sender" /><code>{"private "}<Link to="/game-api/types/alta-items/logicfloatsender">{"LogicFloatSender"}</Link>{" sender"}</code> | Float sender the value is output on. |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> | Value sent at the start of the move. |
| <Link id="m-timebeforemoving" /><code>{"private float timeBeforeMoving"}</code> | Seconds to wait before moving after a direction change. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ispowered-2" /><code>{"void IsPowered(bool value)"}</code> | Sets the powered state; powering it on re-enables updates. |
| <Link id="m-update" /><code>{"void Update()"}</code> | After waiting `timeBeforeMoving`, moves toward the end while powered, or back to the start while unpowered if `returnToStartIfUnpowered`. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Resets the missing-sender warning flag. |
| <Link id="m-move" /><code>{"private bool Move()"}</code> | Advances progress by the move speed and sends the new value; returns false once it passes the end. |
| <Link id="m-onvaluechanged" /><code>{"private void OnValueChanged()"}</code> | Sends the value for the current progress and direction through `sender`. |
| <Link id="m-switchdirections" /><code>{"private void SwitchDirections(bool resetProgress)"}</code> | Flips the direction and resets the wait timer, optionally mirroring the progress. |

</details>
