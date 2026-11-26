---
title: "FlyCamDeviceController"
description: "Device controller for the fly cam (spectator) player mode."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamDeviceController

A **class** in `Root.Township`, no namespace.

Device controller for the fly cam (spectator) player mode. Creates the fly cam's device lifecycle and keyboard/mouse/gamepad input controller.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`XrDeviceSdkController`](/game-api/types/global-t-x/xrdevicesdkcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamDeviceController()"}</code> | Creates a `FlyCamDeviceController` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"override bool IsProvidingPosition { get; }"}</code> | Always true. |
| <Link id="m-mode" /><code>{"override "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | `PlayerMode.Fly`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"override "}<Link to="/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Returns a `FlyCamInputController` for a hand. |
| <Link id="m-createinterface" /><code>{"override "}<Link to="/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Returns a plain `FlyCamDeviceLifecycle`. |
| <Link id="m-start" /><code>{"protected override IEnumerator Start() (iterator)"}</code> | Does nothing, unlike XR controllers that start an SDK. |
