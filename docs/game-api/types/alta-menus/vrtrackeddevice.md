---
title: "VRTrackedDevice"
description: "class VRTrackedDevice in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VRTrackedDevice

A **class** in `Root.Township`, `Alta.XR`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** `IDisposable`
- **Nested types** [`PositionPostProcessor`](/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"private VRTrackedDevice(Transform transform, TrackedPoseDriver.TrackedPose pose, "}<Link to="/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor)"}</code> |

</details>

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-pose" /><code>{"private TrackedPoseDriver.TrackedPose pose"}</code> |
| <Link id="m-positionpostprocessor" /><code>{"private "}<Link to="/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor"}</code> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-addtracking" /><code>{"static "}<Link to="/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" AddTracking(Transform transform, "}<Link to="/game-api/types/alta-menus/trackeddevice">{"TrackedDevice"}</Link>{" device, "}<Link to="/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor = null)"}</code> |
| <Link id="m-addtracking-2" /><code>{"static "}<Link to="/game-api/types/alta-menus/vrtrackeddevice">{"VRTrackedDevice"}</Link>{" AddTracking(Transform transform, TrackedPoseDriver.TrackedPose pose, "}<Link to="/game-api/types/alta-menus/vrtrackeddevice-positionpostprocessor">{"VRTrackedDevice.PositionPostProcessor"}</Link>{" positionPostProcessor = null)"}</code> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-updateposition" /><code>{"private void UpdatePosition()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `VRTrackedDevice`:

[`GeneralLoadingObjectManager.vrTrackedDevice`](/game-api/types/alta-menus/generalloadingobjectmanager#m-vrtrackeddevice), [`LoadingObject.vrTrackedDevice`](/game-api/types/global-i-l/loadingobject#m-vrtrackeddevice), [`PlayerInput.vrTrackedDevice`](/game-api/types/global-p/playerinput#m-vrtrackeddevice), [`VRPlayerController.vrTrackedDevice`](/game-api/types/global-t-x/vrplayercontroller#m-vrtrackeddevice).
