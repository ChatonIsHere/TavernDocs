---
title: "SteamVRPose"
description: "Tracks the pose of one SteamVR tracked device index."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteamVRPose

A **class** in `Root.Township`, the global namespace.

Tracks the pose of one SteamVR tracked device index. `SteamVRDeviceLifecycle` keeps a list of these and feeds them new poses each frame. Client only.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteamVRPose(SteamVR_TrackedObject.EIndex index)"}</code> | <span className="api-desc">Creates a `SteamVRPose` from `index`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-index" /><code>{"private int index"}</code> | <span className="api-desc">`Index` as an int, used to read this device from the SteamVR pose array.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-index-2" /><code>{"SteamVR_TrackedObject.EIndex Index { get; private set; }"}</code> | <span className="api-desc">The SteamVR tracked device index this pose follows.</span> |
| <Link id="m-isconnected" /><code>{"bool IsConnected { get; private set; }"}</code> | <span className="api-desc">Whether the device counts as connected. Nothing in this class ever sets it to true.</span> |
| <Link id="m-isenabled" /><code>{"bool IsEnabled { get; set; }"}</code> | <span className="api-desc">When false, `SteamVRDeviceLifecycle` skips this pose in its pose update.</span> |
| <Link id="m-isreserved" /><code>{"bool IsReserved { get; set; }"}</code> | <span className="api-desc">Flag the device lifecycle uses to mark a pose as taken.</span> |
| <Link id="m-position" /><code>{"Vector3 Position { get; private set; }"}</code> | <span className="api-desc">Last tracked position, in tracking space.</span> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; private set; }"}</code> | <span className="api-desc">Last tracked rotation, in tracking space.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event "}<Link to="/mod/game-api/types/global-p/posechangedhandler">{"PoseChangedHandler"}</Link>{" Changed"}</code> | <span className="api-desc">Raised every time the pose is updated.</span> |
| <Link id="m-connected" /><code>{"event Action Connected"}</code> | <span className="api-desc">Raised when the device connects. The method that raises it is private and nothing calls it, so probably never fires.</span> |
| <Link id="m-disconnected" /><code>{"event Action Disconnected"}</code> | <span className="api-desc">Raised by `OnDisconnected` when a connected device goes away.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleupdate" /><code>{"void HandleUpdate(Vector3 localPosition, Quaternion localRotation)"}</code> | <span className="api-desc">Sets the position and rotation, either directly or from the SteamVR pose array (skipped when that device's pose is invalid or disconnected).</span> |
| <Link id="m-handleupdate-2" /><code>{"void HandleUpdate(TrackedDevicePose_t[] poses)"}</code> | <span className="api-desc">Sets the position and rotation, either directly or from the SteamVR pose array (skipped when that device's pose is invalid or disconnected).</span> |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected()"}</code> | <span className="api-desc">Marks the device disconnected and raises `Disconnected` if it was connected.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onconnected" /><code>{"private void OnConnected()"}</code> | <span className="api-desc">Marks the device connected and raises `Connected` the first time. Private and not called anywhere in the server build.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SteamVRPose`:

<div className="api-used-in">

[`PoseChangedHandler.BeginInvoke`](/mod/game-api/types/global-p/posechangedhandler#m-begininvoke), [`PoseChangedHandler.Invoke`](/mod/game-api/types/global-p/posechangedhandler#m-invoke), [`SteamVRDeviceLifecycle.foundControllers`](/mod/game-api/types/global-s/steamvrdevicelifecycle#m-foundcontrollers), [`SteamVRDeviceLifecycle.GetPose`](/mod/game-api/types/global-s/steamvrdevicelifecycle#m-getpose), [`SteamVRDeviceLifecycle.poses`](/mod/game-api/types/global-s/steamvrdevicelifecycle#m-poses).

</div>
