---
title: "DeviceLifecycle"
description: "abstract class DeviceLifecycle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeviceLifecycle

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`IDeviceLifecycle`](/game-api/types/global-i-l/idevicelifecycle)
- **Derived types** [`AutoCamDeviceLifecycle`](/game-api/types/global-a-b/autocamdevicelifecycle), [`FlyCamDeviceLifecycle`](/game-api/types/global-e-h/flycamdevicelifecycle), [`VirtualRealityDeviceLifecycle`](/game-api/types/global-t-x/virtualrealitydevicelifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DeviceLifecycle("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-platformdevice" /><code>{"protected "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code><Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" Player { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablesdk" /><code>{"virtual void DisableSDK()"}</code> |  |
| <Link id="m-enablesdk" /><code>{"virtual void EnableSDK()"}</code> |  |
| <Link id="m-fixedupdate" /><code>{"virtual void FixedUpdate()"}</code> |  |
| <Link id="m-lateupdate" /><code>{"virtual void LateUpdate()"}</code> |  |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" newPlayer)"}</code> |  |
| <Link id="m-update" /><code>{"virtual void Update()"}</code> |  |
| <Link id="m-onplatformplayerset" /><code>{"protected virtual void OnPlatformPlayerSet("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" oldPlayer, "}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" newPlayer)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DeviceLifecycle`:

[`AutoCamDeviceController.CreateInterface`](/game-api/types/global-a-b/autocamdevicecontroller#m-createinterface), [`FlyCamDeviceController.CreateInterface`](/game-api/types/global-e-h/flycamdevicecontroller#m-createinterface), [`IXrDeviceSdkController.CreateInterface`](/game-api/types/global-i-l/ixrdevicesdkcontroller#m-createinterface), [`OpenXRDeviceController.CreateInterface`](/game-api/types/global-m-o/openxrdevicecontroller#m-createinterface), [`SteamVRDeviceController.CreateInterface`](/game-api/types/global-s/steamvrdevicecontroller#m-createinterface), [`XrDeviceSdkController.CreateInterface`](/game-api/types/global-t-x/xrdevicesdkcontroller#m-createinterface), [`XrDeviceSdkController.deviceLifecycle`](/game-api/types/global-t-x/xrdevicesdkcontroller#m-devicelifecycle).
