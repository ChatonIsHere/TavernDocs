---
title: "CameraStabelizer"
description: "Client: a second camera that follows the VR head with smoothing, for steadier recordings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraStabelizer

A **class** in `Root.Township`, no namespace.

Client: a second camera that follows the VR head with smoothing, for steadier recordings. Toggled with a key (Z by default); the on/off state is static.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CameraStabelizer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angularstabilizationstrength" /><code>{"private float angularStabilizationStrength"}</code> | How much of the old rotation is kept each frame, 0 to 1. Higher is smoother. |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> | The camera that is turned on while stabilising. |
| <Link id="m-keyboardhandler" /><code>{"private "}<Link to="/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" keyboardHandler"}</code> | Handle for the registered toggle key, used to unregister it. |
| <Link id="m-linearstabilizationstrength" /><code>{"private float linearStabilizationStrength"}</code> | How much of the old position is kept each frame, 0 to 1. Higher is smoother. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | The transform it follows, probably the player's head camera. |
| <Link id="m-togglekey" /><code>{"private Key toggleKey"}</code> | Keyboard key that toggles the stabiliser. Default `Z`. |
| <Link id="m-updatemethod" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMethod"}</code> | Handle for the registered update method. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"static bool IsActive { get; private set; }"}</code> | Whether the stabilised camera is on. Shared by all instances and kept across enable/disable. |

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | Registers the smoothing update, enables the camera and snaps it to the target. |
| <Link id="m-deactivate" /><code>{"private void Deactivate()"}</code> | Removes the smoothing update and disables the camera. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unregisters the toggle key and deactivates the camera. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Registers the toggle key and turns the camera back on next frame if it was active. |
| <Link id="m-stabelizecamera" /><code>{"private void StabelizeCamera()"}</code> | Per-frame update: lerps position and slerps rotation between the target and its current pose. |
| <Link id="m-togglecamera" /><code>{"private void ToggleCamera(Key key)"}</code> | Key handler: flips `IsActive`, logs it and shows a message to the local player. |

</details>
