---
title: "IPlatformPlayer"
description: "The platform-specific side of a player (VR rig, fly cam and so on): its hand inputs, transform and player controller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IPlatformPlayer

An **interface** in `Root.Township`, the global namespace.

The platform-specific side of a player (VR rig, fly cam and so on): its hand inputs, transform and player controller.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`LocomotionlessPlayerController`](/mod/game-api/types/global-i-l/locomotionlessplayercontroller), [`MainMenuPlayerController`](/mod/game-api/types/global-m-o/mainmenuplayercontroller), [`Player`](/mod/game-api/types/global-p/player)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isloaded" /><code>{"bool IsLoaded { get; }"}</code> | True once the platform player is ready. |
| <Link id="m-islocalplayer" /><code>{"bool IsLocalPlayer { get; }"}</code> | True for the player on this machine. |
| <Link id="m-leftinput" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" LeftInput { get; }"}</code> | Input for the left hand. |
| <Link id="m-playercontroller" /><code><Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" { get; }"}</code> | The player controller it drives. |
| <Link id="m-playermode" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" { get; }"}</code> | Which `PlayerMode` this player is using. |
| <Link id="m-playertransform" /><code>{"Transform PlayerTransform { get; }"}</code> | Root transform of the player. |
| <Link id="m-rightinput" /><code><Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" RightInput { get; }"}</code> | Input for the right hand. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-ondisconnectedfromplatform" /><code>{"void OnDisconnectedFromPlatform()"}</code> | Called when the player disconnects from the platform. |

## Used in

Members of other types that take, return or hold a `IPlatformPlayer`:

[`AutoCamDeviceController.CreateInterface`](/mod/game-api/types/global-a-b/autocamdevicecontroller#m-createinterface), [`AutoCamDeviceLifecycle.AutoCamDeviceLifecycle`](/mod/game-api/types/global-a-b/autocamdevicelifecycle#m-ctor), [`ControllerInput.CalculateAndSetVelocities`](/mod/game-api/types/global-c-d/controllerinput#m-calculateandsetvelocities), [`DeviceLifecycle.DeviceLifecycle`](/mod/game-api/types/global-c-d/devicelifecycle#m-ctor), [`DeviceLifecycle.OnPlatformPlayerSet`](/mod/game-api/types/global-c-d/devicelifecycle#m-onplatformplayerset), [`DeviceLifecycle.Player`](/mod/game-api/types/global-c-d/devicelifecycle#m-player), [`DeviceLifecycle.SetDevicePlayer`](/mod/game-api/types/global-c-d/devicelifecycle#m-setdeviceplayer), [`FlyCamDeviceController.CreateInterface`](/mod/game-api/types/global-e-h/flycamdevicecontroller#m-createinterface), [`FlyCamDeviceLifecycle.FlyCamDeviceLifecycle`](/mod/game-api/types/global-e-h/flycamdevicelifecycle#m-ctor), [`IDeviceLifecycle.Player`](/mod/game-api/types/global-i-l/idevicelifecycle#m-player), [`IDeviceLifecycle.SetDevicePlayer`](/mod/game-api/types/global-i-l/idevicelifecycle#m-setdeviceplayer), [`IXrDeviceSdkController.CreateInterface`](/mod/game-api/types/global-i-l/ixrdevicesdkcontroller#m-createinterface), [`IXrDeviceSdkController.SetDevicePlayer`](/mod/game-api/types/global-i-l/ixrdevicesdkcontroller#m-setdeviceplayer), [`IXrDeviceSdkController.StartDevice`](/mod/game-api/types/global-i-l/ixrdevicesdkcontroller#m-startdevice), [`OpenXRDeviceController.CreateInterface`](/mod/game-api/types/global-m-o/openxrdevicecontroller#m-createinterface), [`OpenXRDeviceLifecycle.OpenXRDeviceLifecycle`](/mod/game-api/types/global-m-o/openxrdevicelifecycle#m-ctor), [`PlatformDriver.SetupPlatform`](/mod/game-api/types/global-p/platformdriver#m-setupplatform), [`PlatformDriver.StartPlatform`](/mod/game-api/types/global-p/platformdriver#m-startplatform), [`PlatformDriver.StartPlatformCoroutine`](/mod/game-api/types/global-p/platformdriver#m-startplatformcoroutine), [`PlayerInput.InitializeForPlayer`](/mod/game-api/types/global-p/playerinput#m-initializeforplayer), [`PlayerInput.Player`](/mod/game-api/types/global-p/playerinput#m-player), [`SteamVRDeviceController.CreateInterface`](/mod/game-api/types/global-s/steamvrdevicecontroller#m-createinterface), [`SteamVRDeviceLifecycle.OnPlatformPlayerSet`](/mod/game-api/types/global-s/steamvrdevicelifecycle#m-onplatformplayerset), [`SteamVRDeviceLifecycle.SteamVRDeviceLifecycle`](/mod/game-api/types/global-s/steamvrdevicelifecycle#m-ctor), [`VirtualRealityDeviceLifecycle.VirtualRealityDeviceLifecycle`](/mod/game-api/types/global-t-x/virtualrealitydevicelifecycle#m-ctor), [`XrDeviceSdkController.CreateInterface`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller#m-createinterface), [`XrDeviceSdkController.SetDevicePlayer`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller#m-setdeviceplayer), [`XrDeviceSdkController.StartDevice`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller#m-startdevice).
