---
title: "AutoCamDeviceController"
description: "XR device controller for the AutoCam spectator mode: no device input, and it supplies its own camera position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCamDeviceController

A **class** in `Root.Township`, the global namespace.

XR device controller for the AutoCam spectator mode: no device input, and it supplies its own camera position.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`XrDeviceSdkController`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AutoCamDeviceController()"}</code> | Creates an `AutoCamDeviceController` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"override bool IsProvidingPosition { get; }"}</code> | Always true. |
| <Link id="m-mode" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | Always `PlayerMode.AutoCam`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Returns null; AutoCam has no input controller. |
| <Link id="m-createinterface" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Returns an `AutoCamDeviceLifecycle` for the player and device. |
| <Link id="m-start" /><code>{"protected override IEnumerator Start() (iterator)"}</code> | Does nothing. |
