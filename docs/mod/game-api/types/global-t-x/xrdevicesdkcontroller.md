---
title: "XrDeviceSdkController"
description: "Base for a device SDK controller (one per player mode): starts the SDK, makes the device lifecycle and creates input controllers for each hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# XrDeviceSdkController

An **abstract class** in `Root.Township`, the global namespace.

Base for a device SDK controller (one per player mode): starts the SDK, makes the device lifecycle and creates input controllers for each hand. Client side.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`IXrDeviceSdkController`](/mod/game-api/types/global-i-l/ixrdevicesdkcontroller)
- **Derived types** [`AutoCamDeviceController`](/mod/game-api/types/global-a-b/autocamdevicecontroller), [`FlyCamDeviceController`](/mod/game-api/types/global-e-h/flycamdevicecontroller), [`OpenXRDeviceController`](/mod/game-api/types/global-m-o/openxrdevicecontroller), [`SteamVRDeviceController`](/mod/game-api/types/global-s/steamvrdevicecontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected XrDeviceSdkController()"}</code> | <span className="api-desc">Creates a `XrDeviceSdkController` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-devicelifecycle" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" deviceLifecycle"}</code> | <span className="api-desc">The `DeviceLifecycle` made by `CreateInterface` in `StartDevice`. The update calls are passed on to it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activemode" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" ActiveMode { get; }"}</code> | <span className="api-desc">The player mode the platform driver is running.</span> |
| <Link id="m-isprovidingposition" /><code>{"abstract bool IsProvidingPosition { get; }"}</code> | <span className="api-desc">Whether this device tracks position.</span> |
| <Link id="m-mode" /><code>{"abstract "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | <span className="api-desc">The player mode this controller is for.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"abstract "}<Link to="/mod/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Implemented per device: makes the input controller for one hand.</span> |
| <Link id="m-createinterface" /><code>{"abstract "}<Link to="/mod/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | <span className="api-desc">Implemented per device: makes the device lifecycle.</span> |
| <Link id="m-fixedupdate" /><code>{"void FixedUpdate()"}</code> | <span className="api-desc">Passes the physics step to the device lifecycle.</span> |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> | <span className="api-desc">Passes late update to the device lifecycle.</span> |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Points the lifecycle at a player and gives each of its hands a new input controller.</span> |
| <Link id="m-startdevice" /><code>{"IEnumerator StartDevice("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice) (iterator)"}</code> | <span className="api-desc">Runs `Start`, makes the lifecycle and enables the SDK.</span> |
| <Link id="m-stopdevice" /><code>{"void StopDevice()"}</code> | <span className="api-desc">Disables the SDK.</span> |
| <Link id="m-update" /><code>{"void Update()"}</code> | <span className="api-desc">Passes update to the device lifecycle.</span> |
| <Link id="m-start" /><code>{"protected abstract IEnumerator Start()"}</code> | <span className="api-desc">Implemented per device: starts the SDK, as a coroutine.</span> |
