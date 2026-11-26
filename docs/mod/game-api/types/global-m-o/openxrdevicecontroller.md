---
title: "OpenXRDeviceController"
description: "The XR SDK controller for OpenXR headsets."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenXRDeviceController

A **class** in `Root.Township`, the global namespace.

The XR SDK controller for OpenXR headsets. Client-side; it creates the OpenXR input controllers and device lifecycle for the local player.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`XrDeviceSdkController`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OpenXRDeviceController()"}</code> | Creates an `OpenXRDeviceController` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"override bool IsProvidingPosition { get; }"}</code> | Always true: the headset supplies tracked positions. |
| <Link id="m-mode" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | Always `PlayerMode.OpenXR`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Creates a `PlayingOpenXRInputController` for the given hand. |
| <Link id="m-createinterface" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Creates an `OpenXRDeviceLifecycle` for the player and device. |
| <Link id="m-start" /><code>{"protected override IEnumerator Start() (iterator)"}</code> | Turns on `XRSettings.enabled`. |
