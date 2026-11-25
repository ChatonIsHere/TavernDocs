---
title: "IXrDeviceSdkController"
description: "interface IXrDeviceSdkController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IXrDeviceSdkController

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`XrDeviceSdkController`](/game-api/types/global-t-x/xrdevicesdkcontroller)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprovidingposition" /><code>{"bool IsProvidingPosition { get; }"}</code> |  |
| <Link id="m-mode" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" Mode { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createcontroller" /><code><Link to="/game-api/types/global-c-d/deviceinputcontroller">{"DeviceInputController"}</Link>{" CreateController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-createinterface" /><code><Link to="/game-api/types/global-c-d/devicelifecycle">{"DeviceLifecycle"}</Link>{" CreateInterface("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"void FixedUpdate()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"void LateUpdate()"}</code> |  |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-startdevice" /><code>{"IEnumerator StartDevice("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> |  |
| <Link id="m-stopdevice" /><code>{"void StopDevice()"}</code> |  |
| <Link id="m-update" /><code>{"void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IXrDeviceSdkController`:

[`DeviceControllerFactory.Create`](/game-api/types/global-c-d/devicecontrollerfactory#m-create), [`DeviceControllerFactory.GetAndroidController`](/game-api/types/global-c-d/devicecontrollerfactory#m-getandroidcontroller), [`DeviceControllerFactory.GetSteamVRController`](/game-api/types/global-c-d/devicecontrollerfactory#m-getsteamvrcontroller), [`PlatformDriver.ActiveDevice`](/game-api/types/global-p/platformdriver#m-activedevice).
