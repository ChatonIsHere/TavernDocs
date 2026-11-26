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
| <Link id="m-isprovidingposition" /><code>{"bool IsProvidingPosition { get; }"}</code> | <span className="api-desc">Whether this SDK supplies tracked head and hand positions.</span> |
| <Link id="m-mode" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | <span className="api-desc">The player mode this SDK runs in.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code><Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Makes the input controller for one hand.</span> |
| <Link id="m-createinterface" /><code><Link to="/mod/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | <span className="api-desc">Makes the device lifecycle object for a player and device.</span> |
| <Link id="m-fixedupdate" /><code>{"void FixedUpdate()"}</code> | <span className="api-desc">Passes the fixed update on to the device lifecycle.</span> |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> | <span className="api-desc">Passes the late update on to the device lifecycle.</span> |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Changes the platform player the device belongs to and gives each hand a new input controller.</span> |
| <Link id="m-startdevice" /><code>{"IEnumerator StartDevice("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | <span className="api-desc">Coroutine that starts the SDK, creates its device lifecycle and enables it.</span> |
| <Link id="m-stopdevice" /><code>{"void StopDevice()"}</code> | <span className="api-desc">Disables the SDK's device lifecycle.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Passes the frame update on to the device lifecycle.</span> |

## Used in

Members of other types that take, return or hold a `IXrDeviceSdkController`:

<div className="api-used-in">

[`DeviceControllerFactory.Create`](/mod/game-api/types/global-c-d/devicecontrollerfactory#m-create), [`DeviceControllerFactory.GetAndroidController`](/mod/game-api/types/global-c-d/devicecontrollerfactory#m-getandroidcontroller), [`DeviceControllerFactory.GetSteamVRController`](/mod/game-api/types/global-c-d/devicecontrollerfactory#m-getsteamvrcontroller), [`PlatformDriver.ActiveDevice`](/mod/game-api/types/global-p/platformdriver#m-activedevice).

</div>
