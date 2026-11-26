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
| <Link id="m-ctor" /><code>{"OpenXRDeviceController()"}</code> | <span className="api-desc">Creates an `OpenXRDeviceController` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"override bool IsProvidingPosition { get; }"}</code> | <span className="api-desc">Always true: the headset supplies tracked positions.</span> |
| <Link id="m-mode" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | <span className="api-desc">Always `PlayerMode.OpenXR`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Creates a `PlayingOpenXRInputController` for the given hand.</span> |
| <Link id="m-createinterface" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | <span className="api-desc">Creates an `OpenXRDeviceLifecycle` for the player and device.</span> |
| <Link id="m-start" /><code>{"protected override IEnumerator Start() (iterator)"}</code> | <span className="api-desc">Turns on `XRSettings.enabled`.</span> |
