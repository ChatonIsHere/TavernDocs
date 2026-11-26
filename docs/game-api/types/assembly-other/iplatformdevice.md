---
title: "IPlatformDevice"
description: "Platform hook for device-level settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlatformDevice

An **interface** in `Alta.Platform`, `Alta.Platform`.

Platform hook for device-level settings. Only `FakePlatformDevice` (does nothing) is bound in the Windows build.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`FakePlatformDevice`](/game-api/types/assembly-other/fakeplatformdevice)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setffvsource" /><code>{"void SetFfvSource("}<Link to="/game-api/types/assembly-other/ffvsource">{"FfvSource"}</Link>{" source, bool shouldEnable)"}</code> | Turns one reason (movement, hurt, low performance, cosmetic packing) for FFV, probably fixed foveated rendering, on or off. |

## Used in

Members of other types that take, return or hold a `IPlatformDevice`:

[`CosmeticPackScheduler.platformDevice`](/game-api/types/alta-customization/cosmeticpackscheduler#m-platformdevice), [`AutoCamDeviceController.CreateInterface`](/game-api/types/global-a-b/autocamdevicecontroller#m-createinterface), [`AutoCamDeviceLifecycle.AutoCamDeviceLifecycle`](/game-api/types/global-a-b/autocamdevicelifecycle#m-ctor), [`DeviceLifecycle.DeviceLifecycle`](/game-api/types/global-c-d/devicelifecycle#m-ctor), [`DeviceLifecycle.platformDevice`](/game-api/types/global-c-d/devicelifecycle#m-platformdevice), [`FlyCamDeviceController.CreateInterface`](/game-api/types/global-e-h/flycamdevicecontroller#m-createinterface), [`FlyCamDeviceLifecycle.FlyCamDeviceLifecycle`](/game-api/types/global-e-h/flycamdevicelifecycle#m-ctor), [`IXrDeviceSdkController.CreateInterface`](/game-api/types/global-i-l/ixrdevicesdkcontroller#m-createinterface), [`IXrDeviceSdkController.StartDevice`](/game-api/types/global-i-l/ixrdevicesdkcontroller#m-startdevice), [`OpenXRDeviceController.CreateInterface`](/game-api/types/global-m-o/openxrdevicecontroller#m-createinterface), [`OpenXRDeviceLifecycle.OpenXRDeviceLifecycle`](/game-api/types/global-m-o/openxrdevicelifecycle#m-ctor), [`PlayerVisionComfort.platformDevice`](/game-api/types/global-p/playervisioncomfort#m-platformdevice), [`PlayerVisionComfort.PlayerVisionComfort`](/game-api/types/global-p/playervisioncomfort#m-ctor), [`SteamVRDeviceController.CreateInterface`](/game-api/types/global-s/steamvrdevicecontroller#m-createinterface), [`SteamVRDeviceLifecycle.SteamVRDeviceLifecycle`](/game-api/types/global-s/steamvrdevicelifecycle#m-ctor), [`VirtualRealityDeviceLifecycle.VirtualRealityDeviceLifecycle`](/game-api/types/global-t-x/virtualrealitydevicelifecycle#m-ctor), [`VRPlayerController.InjectPlatformDevice`](/game-api/types/global-t-x/vrplayercontroller#m-injectplatformdevice), [`VRPlayerController.platformDevice`](/game-api/types/global-t-x/vrplayercontroller#m-platformdevice), [`XrDeviceSdkController.CreateInterface`](/game-api/types/global-t-x/xrdevicesdkcontroller#m-createinterface), [`XrDeviceSdkController.StartDevice`](/game-api/types/global-t-x/xrdevicesdkcontroller#m-startdevice).
