---
title: "XrDeviceSdkController"
description: "Base for a device SDK controller (one per player mode): starts the SDK, makes the device lifecycle and creates input controllers for each hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# XrDeviceSdkController

An **abstract class** in `Root.Township`, no namespace.

Base for a device SDK controller (one per player mode): starts the SDK, makes the device lifecycle and creates input controllers for each hand. Client side.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`IXrDeviceSdkController`](/game-api/types/global-i-l/ixrdevicesdkcontroller)
- **Derived types** [`AutoCamDeviceController`](/game-api/types/global-a-b/autocamdevicecontroller), [`FlyCamDeviceController`](/game-api/types/global-e-h/flycamdevicecontroller), [`OpenXRDeviceController`](/game-api/types/global-m-o/openxrdevicecontroller), [`SteamVRDeviceController`](/game-api/types/global-s/steamvrdevicecontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected XrDeviceSdkController()"}</code> | Creates a `XrDeviceSdkController` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-devicelifecycle" /><code>{"private "}<Link to="/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" deviceLifecycle"}</code> | The `DeviceLifecycle` made by `CreateInterface` in `StartDevice`. The update calls are passed on to it. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activemode" /><code>{"static "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" ActiveMode { get; }"}</code> | The player mode the platform driver is running. |
| <Link id="m-isprovidingposition" /><code>{"abstract bool IsProvidingPosition { get; }"}</code> | Whether this device tracks position. |
| <Link id="m-mode" /><code>{"abstract "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> | The player mode this controller is for. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"abstract "}<Link to="/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Implemented per device: makes the input controller for one hand. |
| <Link id="m-createinterface" /><code>{"abstract "}<Link to="/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Implemented per device: makes the device lifecycle. |
| <Link id="m-fixedupdate" /><code>{"void FixedUpdate()"}</code> | Passes the physics step to the device lifecycle. |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> | Passes late update to the device lifecycle. |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> | Points the lifecycle at a player and gives each of its hands a new input controller. |
| <Link id="m-startdevice" /><code>{"IEnumerator StartDevice("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice) (iterator)"}</code> | Runs `Start`, makes the lifecycle and enables the SDK. |
| <Link id="m-stopdevice" /><code>{"void StopDevice()"}</code> | Disables the SDK. |
| <Link id="m-update" /><code>{"void Update()"}</code> | Passes update to the device lifecycle. |
| <Link id="m-start" /><code>{"protected abstract IEnumerator Start()"}</code> | Implemented per device: starts the SDK, as a coroutine. |
