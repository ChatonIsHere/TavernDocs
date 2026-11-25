---
title: "XrDeviceSdkController"
description: "abstract class XrDeviceSdkController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# XrDeviceSdkController

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`IXrDeviceSdkController`](/game-api/types/global-i-l/ixrdevicesdkcontroller)
- **Derived types** [`AutoCamDeviceController`](/game-api/types/global-a-b/autocamdevicecontroller), [`FlyCamDeviceController`](/game-api/types/global-e-h/flycamdevicecontroller), [`OpenXRDeviceController`](/game-api/types/global-m-o/openxrdevicecontroller), [`SteamVRDeviceController`](/game-api/types/global-s/steamvrdevicecontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected XrDeviceSdkController()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-devicelifecycle" /><code>{"private "}<Link to="/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" deviceLifecycle"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activemode" /><code>{"static "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" ActiveMode { get; }"}</code> |  |
| <Link id="m-isprovidingposition" /><code>{"abstract bool IsProvidingPosition { get; }"}</code> |  |
| <Link id="m-mode" /><code>{"abstract "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code>{"abstract "}<Link to="/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-createinterface" /><code>{"abstract "}<Link to="/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"void FixedUpdate()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> |  |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-startdevice" /><code>{"IEnumerator StartDevice("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice) (iterator)"}</code> |  |
| <Link id="m-stopdevice" /><code>{"void StopDevice()"}</code> |  |
| <Link id="m-update" /><code>{"void Update()"}</code> |  |
| <Link id="m-start" /><code>{"protected abstract IEnumerator Start()"}</code> |  |
