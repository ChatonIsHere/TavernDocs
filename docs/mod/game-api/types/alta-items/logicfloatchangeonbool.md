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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<LogicFloatChangeOnBoolSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicFloatChangeOnBoolSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicFloatChangeOnBoolSaveData`](/mod/game-api/types/alta-items/logicfloatchangeonboolsavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatChangeOnBool()"}</code> | <span className="api-desc">Creates a `LogicFloatChangeOnBool` with default values.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | <span className="api-desc">Progress from 0 to 1 along the current direction.</span> |
| <Link id="m-currenttimer" /><code>{"private float currentTimer"}</code> | <span className="api-desc">Time waited since the last direction change.</span> |
| <Link id="m-endvalue" /><code>{"private float endValue"}</code> | <span className="api-desc">Value sent at the end of the move.</span> |
| <Link id="m-errormessageposted" /><code>{"private bool errorMessagePosted"}</code> | <span className="api-desc">Stops the missing-sender warning from repeating.</span> |
| <Link id="m-ispowered" /><code>{"private bool isPowered"}</code> | <span className="api-desc">Whether the input is on.</span> |
| <Link id="m-movespeedpersec" /><code>{"private float moveSpeedPerSec"}</code> | <span className="api-desc">How fast the value moves, in value units per second.</span> |
| <Link id="m-movingforward" /><code>{"private bool movingForward"}</code> | <span className="api-desc">True while moving from start to end.</span> |
| <Link id="m-oneway" /><code>{"private bool oneWay"}</code> | <span className="api-desc">When set, does not turn around at the end.</span> |
| <Link id="m-returntostartifunpowered" /><code>{"private bool returnToStartIfUnpowered"}</code> | <span className="api-desc">Whether to move back to the start value when power goes off.</span> |
| <Link id="m-sender" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicfloatsender">{"LogicFloatSender"}</Link>{" sender"}</code> | <span className="api-desc">Float sender the value is output on.</span> |
| <Link id="m-startvalue" /><code>{"private float startValue"}</code> | <span className="api-desc">Value sent at the start of the move.</span> |
| <Link id="m-timebeforemoving" /><code>{"private float timeBeforeMoving"}</code> | <span className="api-desc">Seconds to wait before moving after a direction change.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ispowered-2" /><code>{"void IsPowered(bool value)"}</code> | <span className="api-desc">Sets the powered state; powering it on re-enables updates.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">After waiting `timeBeforeMoving`, moves toward the end while powered, or back to the start while unpowered if `returnToStartIfUnpowered`.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Resets the missing-sender warning flag.</span> |
| <Link id="m-move" /><code>{"private bool Move()"}</code> | <span className="api-desc">Advances progress by the move speed and sends the new value; returns false once it passes the end.</span> |
| <Link id="m-onvaluechanged" /><code>{"private void OnValueChanged()"}</code> | <span className="api-desc">Sends the value for the current progress and direction through `sender`.</span> |
| <Link id="m-switchdirections" /><code>{"private void SwitchDirections(bool resetProgress)"}</code> | <span className="api-desc">Flips the direction and resets the wait timer, optionally mirroring the progress.</span> |

</details>
