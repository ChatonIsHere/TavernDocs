---
title: "VRTrackedDevice"
description: "Client: drives a transform from a tracked VR pose (head or hand) after each input update and before rendering."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VRTrackedDevice

A **class** in `Root.Township`, `Alta.XR`.

Client: drives a transform from a tracked VR pose (head or hand) after each input update and before rendering. Make one with `AddTracking`, dispose it to stop.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** `IDisposable`
- **Nested types** [`PositionPostProcessor`](/mod/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private VRTrackedDevice(Transform transform, TrackedPoseDriver.TrackedPose pose, "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor)"}</code> | <span className="api-desc">Creates a `VRTrackedDevice` from `transform`, `pose` and `positionPostProcessor`.</span> |

</details>

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pose" /><code>{"private TrackedPoseDriver.TrackedPose pose"}</code> | <span className="api-desc">Which tracked pose is read.</span> |
| <Link id="m-positionpostprocessor" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor"}</code> | <span className="api-desc">Optional callback that can change the position before it's applied.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">Transform being driven.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtracking" /><code>{"static "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" AddTracking(Transform transform, "}<Link to="/mod/game-api/types/alta-menus/trackeddevice">{"TrackedDevice"}</Link>{" device, "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor = null)"}</code> | <span className="api-desc">Starts driving the transform from the given device or pose, with an optional position post-processor.</span> |
| <Link id="m-addtracking-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" AddTracking(Transform transform, TrackedPoseDriver.TrackedPose pose, "}<Link to="/mod/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor = null)"}</code> | <span className="api-desc">Starts driving the transform from the given device or pose, with an optional position post-processor.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Stops updating the transform.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | <span className="api-desc">Reads the pose and sets the local position (after the post-processor) and rotation.</span> |

</details>

## Used in

Members of other types that take, return or hold a `VRTrackedDevice`:

<div className="api-used-in">

[`GeneralLoadingObjectManager.vrTrackedDevice`](/mod/game-api/types/alta-menus/generalloadingobjectmanager#m-vrtrackeddevice), [`LoadingObject.vrTrackedDevice`](/mod/game-api/types/global-i-l/loadingobject#m-vrtrackeddevice), [`PlayerInput.vrTrackedDevice`](/mod/game-api/types/global-p/playerinput#m-vrtrackeddevice), [`VRPlayerController.vrTrackedDevice`](/mod/game-api/types/global-t-x/vrplayercontroller#m-vrtrackeddevice).

</div>
