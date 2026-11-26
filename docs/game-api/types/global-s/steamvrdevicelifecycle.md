---
title: "SteamVRDeviceLifecycle"
description: "Device lifecycle for SteamVR: listens to SteamVR events for new poses and controllers connecting or changing role."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRDeviceLifecycle

A **class** in `Root.Township`, no namespace.

Device lifecycle for SteamVR: listens to SteamVR events for new poses and controllers connecting or changing role. Client only.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`VirtualRealityDeviceLifecycle`](/game-api/types/global-t-x/virtualrealitydevicelifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamVRDeviceLifecycle("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | Creates a `SteamVRDeviceLifecycle` from `player` and `platformDevice`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-devicerolechanged" /><code>{"private SteamVR_Events.Action deviceRoleChanged"}</code> | SteamVR system event action for device role changes. |
| <Link id="m-foundcontrollers" /><code>{"private List<"}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{"> foundControllers"}</code> | Connected controller poses. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for assignment warnings. |
| <Link id="m-poses" /><code>{"private List<"}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{"> poses"}</code> | One `SteamVRPose` per tracked device index, created on demand. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablesdk" /><code>{"override void DisableSDK()"}</code> | Removes all SteamVR event listeners. |
| <Link id="m-enablesdk" /><code>{"override void EnableSDK()"}</code> | Registers already connected devices and subscribes to SteamVR pose, focus, connection and role-change events. |
| <Link id="m-onplatformplayerset" /><code>{"protected override void OnPlatformPlayerSet("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" oldPlayer, "}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" newPlayer)"}</code> | Reassigns controllers when the platform player changes. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assigncontrollers" /><code>{"private void AssignControllers()"}</code> | Looks up the left and right hand device indices and tries to assign them to the player's hands. |
| <Link id="m-attemptassigndevice" /><code>{"private bool AttemptAssignDevice("}<Link to="/game-api/types/global-p/posedobject">{"PosedObject"}</Link>{" posedObject, SteamVR_TrackedObject.EIndex device)"}</code> | Returns true if the device's pose exists and isn't reserved, otherwise logs a warning. It doesn't assign anything itself. |
| <Link id="m-getpose" /><code>{"private "}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{" GetPose(SteamVR_TrackedObject.EIndex index)"}</code> | Returns the `SteamVRPose` for a device index, creating poses up to it and enabling it. Null for `None`. |
| <Link id="m-ondeviceconnected" /><code>{"private void OnDeviceConnected(int deviceIndex, bool isConnected)"}</code> | Tracks controllers connecting or disconnecting and reassigns hands. |
| <Link id="m-oninputfocus" /><code>{"private void OnInputFocus(bool isShowingDashboard)"}</code> | Does nothing. |
| <Link id="m-onnewposes" /><code>{"private void OnNewPoses(TrackedDevicePose_t[] devicePoses)"}</code> | Passes new SteamVR poses to each enabled `SteamVRPose`. |
| <Link id="m-ontrackeddevicerolechanged" /><code>{"private void OnTrackedDeviceRoleChanged(VREvent_t args)"}</code> | Reassigns controllers when SteamVR changes a device's hand role. |

</details>
