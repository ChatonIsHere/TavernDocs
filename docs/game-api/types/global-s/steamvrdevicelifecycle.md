---
title: "SteamVRDeviceLifecycle"
description: "class SteamVRDeviceLifecycle in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRDeviceLifecycle

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`VirtualRealityDeviceLifecycle`](/game-api/types/global-t-x/virtualrealitydevicelifecycle)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamVRDeviceLifecycle("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/iplatformdevice">{"IPlatformDevice"}</Link>{" platformDevice)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-devicerolechanged" /><code>{"private SteamVR_Events.Action deviceRoleChanged"}</code> |  |
| <Link id="m-foundcontrollers" /><code>{"private List<"}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{"> foundControllers"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-poses" /><code>{"private List<"}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{"> poses"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disablesdk" /><code>{"override void DisableSDK()"}</code> |  |
| <Link id="m-enablesdk" /><code>{"override void EnableSDK()"}</code> |  |
| <Link id="m-assigncontrollers" /><code>{"private void AssignControllers()"}</code> |  |
| <Link id="m-attemptassigndevice" /><code>{"private bool AttemptAssignDevice("}<Link to="/game-api/types/global-p/posedobject">{"PosedObject"}</Link>{" posedObject, SteamVR_TrackedObject.EIndex device)"}</code> |  |
| <Link id="m-getpose" /><code>{"private "}<Link to="/game-api/types/global-s/steamvrpose">{"SteamVRPose"}</Link>{" GetPose(SteamVR_TrackedObject.EIndex index)"}</code> |  |
| <Link id="m-ondeviceconnected" /><code>{"private void OnDeviceConnected(int deviceIndex, bool isConnected)"}</code> |  |
| <Link id="m-oninputfocus" /><code>{"private void OnInputFocus(bool isShowingDashboard)"}</code> |  |
| <Link id="m-onnewposes" /><code>{"private void OnNewPoses(TrackedDevicePose_t[] devicePoses)"}</code> |  |
| <Link id="m-onplatformplayerset" /><code>{"protected override void OnPlatformPlayerSet("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" oldPlayer, "}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" newPlayer)"}</code> |  |
| <Link id="m-ontrackeddevicerolechanged" /><code>{"private void OnTrackedDeviceRoleChanged(VREvent_t args)"}</code> |  |
