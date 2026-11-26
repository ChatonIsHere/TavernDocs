---
title: "SteamVRDeviceController"
description: "XR SDK controller for SteamVR (OpenVR)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRDeviceController

A **class** in `Root.Township`, the global namespace.

XR SDK controller for SteamVR (OpenVR). Creates the SteamVR lifecycle and input controllers. Client only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`XrDeviceSdkController`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamVRDeviceController()"}</code> | <span className="api-desc">Creates a `SteamVRDeviceController` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"override bool IsProvidingPosition { get; }"}</code> | <span className="api-desc">Always true: SteamVR tracks the head and hands.</span> |
| <Link id="m-mode" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | <span className="api-desc">Always `PlayerMode.OpenVR`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Returns a new `SteamVRInputController` for the given hand.</span> |
| <Link id="m-createinterface" /><code>{"override "}<Link to="/mod/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | <span className="api-desc">Returns a new `SteamVRDeviceLifecycle`.</span> |
| <Link id="m-start" /><code>{"protected override IEnumerator Start() (iterator)"}</code> | <span className="api-desc">Turns on `SteamVR_Render`.</span> |
