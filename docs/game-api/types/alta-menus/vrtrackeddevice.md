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

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `IDisposable`
- **Nested types** [`PositionPostProcessor`](/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private VRTrackedDevice(Transform transform, TrackedPoseDriver.TrackedPose pose, "}<Link to="/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor)"}</code> | Creates a `VRTrackedDevice` from `transform`, `pose` and `positionPostProcessor`. |

</details>

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-pose" /><code>{"private TrackedPoseDriver.TrackedPose pose"}</code> | Which tracked pose is read. |
| <Link id="m-positionpostprocessor" /><code>{"private "}<Link to="/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor"}</code> | Optional callback that can change the position before it's applied. |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | Transform being driven. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addtracking" /><code>{"static "}<Link to="/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" AddTracking(Transform transform, "}<Link to="/game-api/types/alta-menus/trackeddevice">{"TrackedDevice"}</Link>{" device, "}<Link to="/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor = null)"}</code> | Starts driving the transform from the given device or pose, with an optional position post-processor. |
| <Link id="m-addtracking-2" /><code>{"static "}<Link to="/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" AddTracking(Transform transform, TrackedPoseDriver.TrackedPose pose, "}<Link to="/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor = null)"}</code> | Starts driving the transform from the given device or pose, with an optional position post-processor. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Stops updating the transform. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> | Reads the pose and sets the local position (after the post-processor) and rotation. |

</details>

## Used in

Members of other types that take, return or hold a `VRTrackedDevice`:

[`GeneralLoadingObjectManager.vrTrackedDevice`](/game-api/types/alta-menus/generalloadingobjectmanager#m-vrtrackeddevice), [`LoadingObject.vrTrackedDevice`](/game-api/types/global-i-l/loadingobject#m-vrtrackeddevice), [`PlayerInput.vrTrackedDevice`](/game-api/types/global-p/playerinput#m-vrtrackeddevice), [`VRPlayerController.vrTrackedDevice`](/game-api/types/global-t-x/vrplayercontroller#m-vrtrackeddevice).
