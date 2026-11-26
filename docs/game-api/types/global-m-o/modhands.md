---
title: "ModHands"
description: "Controller extension that fires ModCalled when the debug mod button is pressed while grab is held."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModHands

A **class** in `Root.Township`, no namespace.

Controller extension that fires `ModCalled` when the debug mod button is pressed while grab is held. Only hooks up for users with the `debug_features` permission.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)
- **Nested types** [`ModEvent`](/game-api/types/global-m-o/modhands-modevent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ModHands()"}</code> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-modcalled" /><code>{"static event "}<Link to="/game-api/types/global-m-o/modhands-modevent">{"ModHands.ModEvent"}</Link>{" ModCalled"}</code> | Static event raised with the controller when a player triggers the debug mod input. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializecontrollerextension" /><code>{"override void InitializeControllerExtension()"}</code> | Hooks the debug mod action if the user has `debug_features` and a controller is set. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonpressed" /><code>{"private void ButtonPressed("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Raises `ModCalled` with this controller if grab is held when the debug mod action starts. |

</details>
