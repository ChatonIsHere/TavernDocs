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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`FakePlatformDevice`](/mod/game-api/types/assembly-other/fakeplatformdevice)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setffvsource" /><code>{"void SetFfvSource("}<Link to="/mod/game-api/types/assembly-other/ffvsource">{"FfvSource"}</Link>{" source, bool shouldEnable)"}</code> | <span className="api-desc">Turns one reason (movement, hurt, low performance, cosmetic packing) for FFV, probably fixed foveated rendering, on or off.</span> |

## Used in

Members of other types that take, return or hold a `IPlatformDevice`:

<div className="api-used-in">

[`CosmeticPackScheduler.platformDevice`](/mod/game-api/types/alta-customization/cosmeticpackscheduler#m-platformdevice), [`AutoCamDeviceController.CreateInterface`](/mod/game-api/types/global-a-b/autocamdevicecontroller#m-createinterface), [`AutoCamDeviceLifecycle.AutoCamDeviceLifecycle`](/mod/game-api/types/global-a-b/autocamdevicelifecycle#m-ctor), [`DeviceLifecycle.DeviceLifecycle`](/mod/game-api/types/global-c-d/devicelifecycle#m-ctor), [`DeviceLifecycle.platformDevice`](/mod/game-api/types/global-c-d/devicelifecycle#m-platformdevice), [`FlyCamDeviceController.CreateInterface`](/mod/game-api/types/global-e-h/flycamdevicecontroller#m-createinterface), [`FlyCamDeviceLifecycle.FlyCamDeviceLifecycle`](/mod/game-api/types/global-e-h/flycamdevicelifecycle#m-ctor), [`IXrDeviceSdkController.CreateInterface`](/mod/game-api/types/global-i-l/ixrdevicesdkcontroller#m-createinterface), [`IXrDeviceSdkController.StartDevice`](/mod/game-api/types/global-i-l/ixrdevicesdkcontroller#m-startdevice), [`OpenXRDeviceController.CreateInterface`](/mod/game-api/types/global-m-o/openxrdevicecontroller#m-createinterface), [`OpenXRDeviceLifecycle.OpenXRDeviceLifecycle`](/mod/game-api/types/global-m-o/openxrdevicelifecycle#m-ctor), [`PlayerVisionComfort.platformDevice`](/mod/game-api/types/global-p/playervisioncomfort#m-platformdevice), [`PlayerVisionComfort.PlayerVisionComfort`](/mod/game-api/types/global-p/playervisioncomfort#m-ctor), [`SteamVRDeviceController.CreateInterface`](/mod/game-api/types/global-s/steamvrdevicecontroller#m-createinterface), [`SteamVRDeviceLifecycle.SteamVRDeviceLifecycle`](/mod/game-api/types/global-s/steamvrdevicelifecycle#m-ctor), [`VirtualRealityDeviceLifecycle.VirtualRealityDeviceLifecycle`](/mod/game-api/types/global-t-x/virtualrealitydevicelifecycle#m-ctor), [`VRPlayerController.InjectPlatformDevice`](/mod/game-api/types/global-t-x/vrplayercontroller#m-injectplatformdevice), [`VRPlayerController.platformDevice`](/mod/game-api/types/global-t-x/vrplayercontroller#m-platformdevice), [`XrDeviceSdkController.CreateInterface`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller#m-createinterface), [`XrDeviceSdkController.StartDevice`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller#m-startdevice).

</div>
