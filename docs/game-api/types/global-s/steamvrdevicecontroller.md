---
title: "SteamVRDeviceController"
description: "XR SDK controller for SteamVR (OpenVR)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRDeviceController

A **class** in `Root.Township`, no namespace.

XR SDK controller for SteamVR (OpenVR). Creates the SteamVR lifecycle and input controllers. Client only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`XrDeviceSdkController`](/game-api/types/global-t-x/xrdevicesdkcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SteamVRDeviceController()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"override bool IsProvidingPosition { get; }"}</code> | Always true: SteamVR tracks the head and hands. |
| <Link id="m-mode" /><code>{"override "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | Always `PlayerMode.OpenVR`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"override "}<Link to="/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Returns a new `SteamVRInputController` for the given hand. |
| <Link id="m-createinterface" /><code>{"override "}<Link to="/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Returns a new `SteamVRDeviceLifecycle`. |
| <Link id="m-start" /><code>{"protected override IEnumerator Start() (iterator)"}</code> | Turns on `SteamVR_Render`. |
