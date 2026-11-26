---
title: "SteamVRDeviceLifecycle"
description: "Device lifecycle for SteamVR: listens to SteamVR events for new poses and controllers connecting or changing role."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRDeviceLifecycle

A **class** in `Root.Township`, the global namespace.

Device lifecycle for SteamVR: listens to SteamVR events for new poses and controllers connecting or changing role. Client only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`VirtualRealityDeviceLifecycle`](/mod/game-api/types/global-t-x/virtualrealitydevicelifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamVRDeviceLifecycle("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> | <span className="api-desc">Creates a `SteamVRDeviceLifecycle` from `player` and `platformDevice`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-devicerolechanged" /><code>{"private SteamVR_Events.Action deviceRoleChanged"}</code> | <span className="api-desc">SteamVR system event action for device role changes.</span> |
| <Link id="m-foundcontrollers" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{"> foundControllers"}</code> | <span className="api-desc">Connected controller poses.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for assignment warnings.</span> |
| <Link id="m-poses" /><code>{"private List<"}<Link to="/mod/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{"> poses"}</code> | <span className="api-desc">One `SteamVRPose` per tracked device index, created on demand.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablesdk" /><code>{"override void DisableSDK()"}</code> | <span className="api-desc">Removes all SteamVR event listeners.</span> |
| <Link id="m-enablesdk" /><code>{"override void EnableSDK()"}</code> | <span className="api-desc">Registers already connected devices and subscribes to SteamVR pose, focus, connection and role-change events.</span> |
| <Link id="m-onplatformplayerset" /><code>{"protected override void OnPlatformPlayerSet("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" oldPlayer, "}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" newPlayer)"}</code> | <span className="api-desc">Reassigns controllers when the platform player changes.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assigncontrollers" /><code>{"private void AssignControllers()"}</code> | <span className="api-desc">Looks up the left and right hand device indices and tries to assign them to the player's hands.</span> |
| <Link id="m-attemptassigndevice" /><code>{"private bool AttemptAssignDevice("}<Link to="/mod/game-api/types/global-p/posedobject">{"PosedObject"}</Link>{" posedObject, SteamVR_TrackedObject.EIndex device)"}</code> | <span className="api-desc">Returns true if the device's pose exists and isn't reserved, otherwise logs a warning. It doesn't assign anything itself.</span> |
| <Link id="m-getpose" /><code>{"private "}<Link to="/mod/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{" GetPose(SteamVR_TrackedObject.EIndex index)"}</code> | <span className="api-desc">Returns the `SteamVRPose` for a device index, creating poses up to it and enabling it. Null for `None`.</span> |
| <Link id="m-ondeviceconnected" /><code>{"private void OnDeviceConnected(int deviceIndex, bool isConnected)"}</code> | <span className="api-desc">Tracks controllers connecting or disconnecting and reassigns hands.</span> |
| <Link id="m-oninputfocus" /><code>{"private void OnInputFocus(bool isShowingDashboard)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-onnewposes" /><code>{"private void OnNewPoses(TrackedDevicePose_t[] devicePoses)"}</code> | <span className="api-desc">Passes new SteamVR poses to each enabled `SteamVRPose`.</span> |
| <Link id="m-ontrackeddevicerolechanged" /><code>{"private void OnTrackedDeviceRoleChanged(VREvent_t args)"}</code> | <span className="api-desc">Reassigns controllers when SteamVR changes a device's hand role.</span> |

</details>
