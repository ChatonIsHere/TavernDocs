---
title: "FlyCamInputController"
description: "Fly cam hand input: places each hand in front of the camera and maps grab to mouse buttons or gamepad triggers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamInputController

A **class** in `Root.Township`, the global namespace.

Fly cam hand input: places each hand in front of the camera and maps grab to mouse buttons or gamepad triggers.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`DeviceInputController`](/mod/game-api/types/global-c-d/deviceinputcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamInputController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Creates a `FlyCamInputController` from `controller`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-triggerhaptics" /><code>{"override void TriggerHaptics(float strength, float frequency, float timeRemaining)"}</code> | Does nothing; the fly cam has no haptics. |
| <Link id="m-populateinput" /><code>{"protected override void PopulateInput("}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> | Sets hand position, and grab from the trigger or mouse button on that side; middle mouse is grab assist. |
