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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<LogicFloatResetSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicFloatResetSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`LogicFloatResetSaveData`](/mod/game-api/types/alta-items/logicfloatresetsavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicFloatReset()"}</code> | <span className="api-desc">Creates a `LogicFloatReset` with default values.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currenttimer" /><code>{"private float currentTimer"}</code> | <span className="api-desc">Time waited before returning starts.</span> |
| <Link id="m-defaultvalue" /><code>{"private float defaultValue"}</code> | <span className="api-desc">Value it returns to.</span> |
| <Link id="m-errormessageposted" /><code>{"private bool errorMessagePosted"}</code> | <span className="api-desc">Stops the missing-sender warning from repeating.</span> |
| <Link id="m-isinteracting" /><code>{"private bool isInteracting"}</code> | <span className="api-desc">Whether a player is interacting.</span> |
| <Link id="m-returnspeedpersec" /><code>{"private float returnSpeedPerSec"}</code> | <span className="api-desc">How fast the value returns, per second.</span> |
| <Link id="m-sender" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/logicfloatsender">{"LogicFloatSender"}</Link>{" sender"}</code> | <span className="api-desc">Float sender the value is output on.</span> |
| <Link id="m-targetvalue" /><code>{"private float targetValue"}</code> | <span className="api-desc">Current value being sent.</span> |
| <Link id="m-timebeforereturn" /><code>{"private float timeBeforeReturn"}</code> | <span className="api-desc">Seconds to wait before returning.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-isinteracting-2" /><code>{"void IsInteracting(bool value)"}</code> | <span className="api-desc">Sets whether a player is holding the control, which pauses the return.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">When not interacting and the delay has passed, moves the value toward `defaultValue` at `returnSpeedPerSec` and sends it.</span> |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(float value)"}</code> | <span className="api-desc">Sets and sends a new value, restarting the delay if someone is interacting.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Resets the missing-sender warning flag.</span> |

</details>
