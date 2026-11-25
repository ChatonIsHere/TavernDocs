---
title: "SteamVRPose"
description: "Tracks the pose of one SteamVR tracked device index."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRPose

A **class** in `Root.Township`, no namespace.

Tracks the pose of one SteamVR tracked device index. `SteamVRDeviceLifecycle` keeps a list of these and feeds them new poses each frame. Client only.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SteamVRPose(SteamVR_TrackedObject.EIndex index)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-index" /><code>{"private int index"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"SteamVR_TrackedObject.EIndex Index { get; private set; }"}</code> | The SteamVR tracked device index this pose follows. |
| <Link id="m-isconnected" /><code>{"bool IsConnected { get; private set; }"}</code> | Whether the device counts as connected. Nothing in this class ever sets it to true. |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | When false, `SteamVRDeviceLifecycle` skips this pose in its pose update. |
| <Link id="m-isreserved" /><code>{"bool IsReserved { get; set; }"}</code> | Flag the device lifecycle uses to mark a pose as taken. |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> | Last tracked position, in tracking space. |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; private set; }"}</code> | Last tracked rotation, in tracking space. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/game-api/types/global-p/posechangedhandler">{"PoseChangedHandler"}</Link>{" Changed"}</code> | Raised every time the pose is updated. |
| <Link id="m-connected" /><code>{"event Action Connected"}</code> | Raised when the device connects. The method that raises it is private and nothing calls it, so probably never fires. |
| <Link id="m-disconnected" /><code>{"event Action Disconnected"}</code> | Raised by `OnDisconnected` when a connected device goes away. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleupdate" /><code>{"void HandleUpdate(Vector3 localPosition, Quaternion localRotation)"}</code> | Sets the position and rotation, either directly or from the SteamVR pose array (skipped when that device's pose is invalid or disconnected). |
| <Link id="m-handleupdate-2" /><code>{"void HandleUpdate(TrackedDevicePose_t[] poses)"}</code> | Sets the position and rotation, either directly or from the SteamVR pose array (skipped when that device's pose is invalid or disconnected). |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected()"}</code> | Marks the device disconnected and raises `Disconnected` if it was connected. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onconnected" /><code>{"private void OnConnected()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SteamVRPose`:

[`PoseChangedHandler.BeginInvoke`](/game-api/types/global-p/posechangedhandler#m-begininvoke), [`PoseChangedHandler.Invoke`](/game-api/types/global-p/posechangedhandler#m-invoke), [`SteamVRDeviceLifecycle.foundControllers`](/game-api/types/global-s/steamvrdevicelifecycle#m-foundcontrollers), [`SteamVRDeviceLifecycle.GetPose`](/game-api/types/global-s/steamvrdevicelifecycle#m-getpose), [`SteamVRDeviceLifecycle.poses`](/game-api/types/global-s/steamvrdevicelifecycle#m-poses).
