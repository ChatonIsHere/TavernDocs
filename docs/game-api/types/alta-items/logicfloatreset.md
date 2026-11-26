---
title: "LogicFloatReset"
description: "Logic component that passes a float through to its sender and, once nobody is interacting, eases it back to a default value after a delay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicFloatReset

A **class** in `Root.Township`, `Alta.Logic`.

Logic component that passes a float through to its sender and, once nobody is interacting, eases it back to a default value after a delay. Saves its values.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<LogicFloatResetSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicFloatResetSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicFloatResetSaveData`](/game-api/types/alta-items/logicfloatresetsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicFloatReset()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttimer" /><code>{"private float currentTimer"}</code> | Time waited before returning starts. |
| <Link id="m-defaultvalue" /><code>{"private float defaultValue"}</code> | Value it returns to. |
| <Link id="m-errormessageposted" /><code>{"private bool errorMessagePosted"}</code> | Stops the missing-sender warning from repeating. |
| <Link id="m-isinteracting" /><code>{"private bool isInteracting"}</code> | Whether a player is interacting. |
| <Link id="m-returnspeedpersec" /><code>{"private float returnSpeedPerSec"}</code> | How fast the value returns, per second. |
| <Link id="m-sender" /><code>{"private "}<Link to="/game-api/types/alta-items/logicfloatsender">{"LogicFloatSender"}</Link>{" sender"}</code> | Float sender the value is output on. |
| <Link id="m-targetvalue" /><code>{"private float targetValue"}</code> | Current value being sent. |
| <Link id="m-timebeforereturn" /><code>{"private float timeBeforeReturn"}</code> | Seconds to wait before returning. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isinteracting-2" /><code>{"void IsInteracting(bool value)"}</code> | Sets whether a player is holding the control, which pauses the return. |
| <Link id="m-update" /><code>{"void Update()"}</code> | When not interacting and the delay has passed, moves the value toward `defaultValue` at `returnSpeedPerSec` and sends it. |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float value)"}</code> | Sets and sends a new value, restarting the delay if someone is interacting. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Resets the missing-sender warning flag. |

</details>
