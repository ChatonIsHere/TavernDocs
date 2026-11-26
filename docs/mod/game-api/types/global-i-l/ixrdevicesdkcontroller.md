---
title: "IXrDeviceSdkController"
description: "One device SDK the game can drive the player with: SteamVR, OpenXR, the fly cam or the auto cam."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IXrDeviceSdkController

An **interface** in `Root.Township`, the global namespace.

One device SDK the game can drive the player with: SteamVR, OpenXR, the fly cam or the auto cam. The platform driver starts it and it creates the device lifecycle and per-hand input controllers. Client only.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`XrDeviceSdkController`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"bool IsProvidingPosition { get; }"}</code> | Whether this SDK supplies tracked head and hand positions. |
| <Link id="m-mode" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | The player mode this SDK runs in. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code><Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Makes the input controller for one hand. |
| <Link id="m-createinterface" /><code><Link to="/mod/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Makes the device lifecycle object for a player and device. |
| <Link id="m-fixedupdate" /><code>{"void FixedUpdate()"}</code> | Passes the fixed update on to the device lifecycle. |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> | Passes the late update on to the device lifecycle. |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> | Changes the platform player the device belongs to and gives each hand a new input controller. |
| <Link id="m-startdevice" /><code>{"IEnumerator StartDevice("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Coroutine that starts the SDK, creates its device lifecycle and enables it. |
| <Link id="m-stopdevice" /><code>{"void StopDevice()"}</code> | Disables the SDK's device lifecycle. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Passes the frame update on to the device lifecycle. |

## Used in

Members of other types that take, return or hold a `IXrDeviceSdkController`:

[`DeviceControllerFactory.Create`](/mod/game-api/types/global-c-d/devicecontrollerfactory#m-create), [`DeviceControllerFactory.GetAndroidController`](/mod/game-api/types/global-c-d/devicecontrollerfactory#m-getandroidcontroller), [`DeviceControllerFactory.GetSteamVRController`](/mod/game-api/types/global-c-d/devicecontrollerfactory#m-getsteamvrcontroller), [`PlatformDriver.ActiveDevice`](/mod/game-api/types/global-p/platformdriver#m-activedevice).
