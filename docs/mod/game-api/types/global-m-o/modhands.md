---
title: "ModHands"
description: "Controller extension that fires ModCalled when the debug mod button is pressed while grab is held."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModHands

A **class** in `Root.Township`, the global namespace.

Controller extension that fires `ModCalled` when the debug mod button is pressed while grab is held. Only hooks up for users with the `debug_features` permission.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`ControllerExtension`](/mod/game-api/types/global-c-d/controllerextension)
- **Nested types** [`ModEvent`](/mod/game-api/types/global-m-o/modhands-modevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModHands()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-modcalled" /><code>{"static event "}<Link to="/mod/game-api/types/global-m-o/modhands-modevent">{"ModHands.ModEvent"}</Link>{" ModCalled"}</code> | <span className="api-desc">Static event raised with the controller when a player triggers the debug mod input.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | <span className="api-desc">Hooks the debug mod action if the user has `debug_features` and a controller is set.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonpressed" /><code>{"private void ButtonPressed("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">Raises `ModCalled` with this controller if grab is held when the debug mod action starts.</span> |

</details>
