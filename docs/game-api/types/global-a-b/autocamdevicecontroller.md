---
title: "AutoCamDeviceController"
description: "XR device controller for the AutoCam spectator mode: no device input, and it supplies its own camera position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AutoCamDeviceController

A **class** in `Root.Township`, no namespace.

XR device controller for the AutoCam spectator mode: no device input, and it supplies its own camera position.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`XrDeviceSdkController`](/game-api/types/global-t-x/xrdevicesdkcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AutoCamDeviceController()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"override bool IsProvidingPosition { get; }"}</code> | Always true. |
| <Link id="m-mode" /><code>{"override "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | Always `PlayerMode.AutoCam`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"override "}<Link to="/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Returns null; AutoCam has no input controller. |
| <Link id="m-createinterface" /><code>{"override "}<Link to="/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Returns an `AutoCamDeviceLifecycle` for the player and device. |
| <Link id="m-start" /><code>{"protected override IEnumerator Start() (iterator)"}</code> | Does nothing. |
