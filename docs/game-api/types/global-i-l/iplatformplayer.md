---
title: "IPlatformPlayer"
description: "interface IPlatformPlayer in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlatformPlayer

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`LocomotionlessPlayerController`](/game-api/types/global-i-l/locomotionlessplayercontroller), [`MainMenuPlayerController`](/game-api/types/global-m-o/mainmenuplayercontroller), [`Player`](/game-api/types/global-p/player)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; }"}</code> |  |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; }"}</code> |  |
| <Link id="m-leftinput" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> |  |
| <Link id="m-playercontroller" /><code><Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playermode" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> |  |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> |  |
| <Link id="m-rightinput" /><code><Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisconnectedfromplatform" /><code>{"void OnDisconnectedFromPlatform()"}</code> |  |

## Used in

Members of other types that take, return or hold a `IPlatformPlayer`:

[`AutoCamDeviceController.CreateInterface`](/game-api/types/global-a-b/autocamdevicecontroller#m-createinterface), [`AutoCamDeviceLifecycle.AutoCamDeviceLifecycle`](/game-api/types/global-a-b/autocamdevicelifecycle#m-ctor), [`ControllerInput.CalculateAndSetVelocities`](/game-api/types/global-c-d/controllerinput#m-calculateandsetvelocities), [`DeviceLifecycle.DeviceLifecycle`](/game-api/types/global-c-d/devicelifecycle#m-ctor), [`DeviceLifecycle.OnPlatformPlayerSet`](/game-api/types/global-c-d/devicelifecycle#m-onplatformplayerset), [`DeviceLifecycle.Player`](/game-api/types/global-c-d/devicelifecycle#m-player), [`DeviceLifecycle.SetDevicePlayer`](/game-api/types/global-c-d/devicelifecycle#m-setdeviceplayer), [`FlyCamDeviceController.CreateInterface`](/game-api/types/global-e-h/flycamdevicecontroller#m-createinterface), [`FlyCamDeviceLifecycle.FlyCamDeviceLifecycle`](/game-api/types/global-e-h/flycamdevicelifecycle#m-ctor), [`IDeviceLifecycle.Player`](/game-api/types/global-i-l/idevicelifecycle#m-player), [`IDeviceLifecycle.SetDevicePlayer`](/game-api/types/global-i-l/idevicelifecycle#m-setdeviceplayer), [`IXrDeviceSdkController.CreateInterface`](/game-api/types/global-i-l/ixrdevicesdkcontroller#m-createinterface), [`IXrDeviceSdkController.SetDevicePlayer`](/game-api/types/global-i-l/ixrdevicesdkcontroller#m-setdeviceplayer), [`IXrDeviceSdkController.StartDevice`](/game-api/types/global-i-l/ixrdevicesdkcontroller#m-startdevice), [`OpenXRDeviceController.CreateInterface`](/game-api/types/global-m-o/openxrdevicecontroller#m-createinterface), [`OpenXRDeviceLifecycle.OpenXRDeviceLifecycle`](/game-api/types/global-m-o/openxrdevicelifecycle#m-ctor), [`PlatformDriver.SetupPlatform`](/game-api/types/global-p/platformdriver#m-setupplatform), [`PlatformDriver.StartPlatform`](/game-api/types/global-p/platformdriver#m-startplatform), [`PlatformDriver.StartPlatformCoroutine`](/game-api/types/global-p/platformdriver#m-startplatformcoroutine), [`PlayerInput.InitializeForPlayer`](/game-api/types/global-p/playerinput#m-initializeforplayer), [`PlayerInput.Player`](/game-api/types/global-p/playerinput#m-player), [`SteamVRDeviceController.CreateInterface`](/game-api/types/global-s/steamvrdevicecontroller#m-createinterface), [`SteamVRDeviceLifecycle.OnPlatformPlayerSet`](/game-api/types/global-s/steamvrdevicelifecycle#m-onplatformplayerset), [`SteamVRDeviceLifecycle.SteamVRDeviceLifecycle`](/game-api/types/global-s/steamvrdevicelifecycle#m-ctor), [`VirtualRealityDeviceLifecycle.VirtualRealityDeviceLifecycle`](/game-api/types/global-t-x/virtualrealitydevicelifecycle#m-ctor), [`XrDeviceSdkController.CreateInterface`](/game-api/types/global-t-x/xrdevicesdkcontroller#m-createinterface), [`XrDeviceSdkController.SetDevicePlayer`](/game-api/types/global-t-x/xrdevicesdkcontroller#m-setdeviceplayer), [`XrDeviceSdkController.StartDevice`](/game-api/types/global-t-x/xrdevicesdkcontroller#m-startdevice).
