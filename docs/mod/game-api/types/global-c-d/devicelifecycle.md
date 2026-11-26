---
title: "DeviceLifecycle"
description: "Base for the game's device lifecycles (VR, fly cam, auto cam): hooks for SDK start and stop and the Unity update loop, plus which platform player the device..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeviceLifecycle

An **abstract class** in `Root.Township`, the global namespace.

Base for the game's device lifecycles (VR, fly cam, auto cam): hooks for SDK start and stop and the Unity update loop, plus which platform player the device drives.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`IDeviceLifecycle`](/mod/game-api/types/global-i-l/idevicelifecycle)
- **Derived types** [`AutoCamDeviceLifecycle`](/mod/game-api/types/global-a-b/autocamdevicelifecycle), [`FlyCamDeviceLifecycle`](/mod/game-api/types/global-e-h/flycamdevicelifecycle), [`VirtualRealityDeviceLifecycle`](/mod/game-api/types/global-t-x/virtualrealitydevicelifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected DeviceLifecycle("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Creates a `DeviceLifecycle` from `player` and `platformDevice`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-platformdevice" /><code>{"protected "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice"}</code> | The platform device this lifecycle runs. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" Player { get; private set; }"}</code> | The platform player this device drives. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablesdk" /><code>{"virtual void DisableSDK()"}</code> | Hook to shut the device's SDK down. Empty in the base class. |
| <Link id="m-enablesdk" /><code>{"virtual void EnableSDK()"}</code> | Hook to start the device's SDK. Empty in the base class. |
| <Link id="m-fixedupdate" /><code>{"virtual void FixedUpdate()"}</code> | Per physics step hook. Empty in the base class. |
| <Link id="m-lateupdate" /><code>{"virtual void LateUpdate()"}</code> | Late update hook. Empty in the base class. |
| <Link id="m-setdeviceplayer" /><code>{"void SetDevicePlayer("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" newPlayer)"}</code> | Switches to a new platform player, disconnecting the old one if it differs. |
| <Link id="m-update" /><code>{"virtual void Update()"}</code> | Per frame hook. Empty in the base class. |
| <Link id="m-onplatformplayerset" /><code>{"protected virtual void OnPlatformPlayerSet("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" oldPlayer, "}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" newPlayer)"}</code> | Called when the player changes. The base disables the old player's hand inputs. |

## Used in

Members of other types that take, return or hold a `DeviceLifecycle`:

[`AutoCamDeviceController.CreateInterface`](/mod/game-api/types/global-a-b/autocamdevicecontroller#m-createinterface), [`FlyCamDeviceController.CreateInterface`](/mod/game-api/types/global-e-h/flycamdevicecontroller#m-createinterface), [`IXrDeviceSdkController.CreateInterface`](/mod/game-api/types/global-i-l/ixrdevicesdkcontroller#m-createinterface), [`OpenXRDeviceController.CreateInterface`](/mod/game-api/types/global-m-o/openxrdevicecontroller#m-createinterface), [`SteamVRDeviceController.CreateInterface`](/mod/game-api/types/global-s/steamvrdevicecontroller#m-createinterface), [`XrDeviceSdkController.CreateInterface`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller#m-createinterface), [`XrDeviceSdkController.deviceLifecycle`](/mod/game-api/types/global-t-x/xrdevicesdkcontroller#m-devicelifecycle).
