---
title: "CameraStabelizer"
description: "Client: a second camera that follows the VR head with smoothing, for steadier recordings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CameraStabelizer

A **class** in `Root.Township`, the global namespace.

Client: a second camera that follows the VR head with smoothing, for steadier recordings. Toggled with a key (Z by default); the on/off state is static.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CameraStabelizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angularstabilizationstrength" /><code>{"private float angularStabilizationStrength"}</code> | <span className="api-desc">How much of the old rotation is kept each frame, 0 to 1. Higher is smoother.</span> |
| <Link id="m-camera" /><code>{"private Camera camera"}</code> | <span className="api-desc">The camera that is turned on while stabilising.</span> |
| <Link id="m-keyboardhandler" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/ikeyboardtriggerhandler">{"IKeyBoardTriggerHandler"}</Link>{" keyboardHandler"}</code> | <span className="api-desc">Handle for the registered toggle key, used to unregister it.</span> |
| <Link id="m-linearstabilizationstrength" /><code>{"private float linearStabilizationStrength"}</code> | <span className="api-desc">How much of the old position is kept each frame, 0 to 1. Higher is smoother.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-targettransform" /><code>{"private Transform targetTransform"}</code> | <span className="api-desc">The transform it follows, probably the player's head camera.</span> |
| <Link id="m-togglekey" /><code>{"private Key toggleKey"}</code> | <span className="api-desc">Keyboard key that toggles the stabiliser. Default `Z`.</span> |
| <Link id="m-updatemethod" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateMethod"}</code> | <span className="api-desc">Handle for the registered update method.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"static bool IsActive { get; private set; }"}</code> | <span className="api-desc">Whether the stabilised camera is on. Shared by all instances and kept across enable/disable.</span> |

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | <span className="api-desc">Registers the smoothing update, enables the camera and snaps it to the target.</span> |
| <Link id="m-deactivate" /><code>{"private void Deactivate()"}</code> | <span className="api-desc">Removes the smoothing update and disables the camera.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Unregisters the toggle key and deactivates the camera.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Registers the toggle key and turns the camera back on next frame if it was active.</span> |
| <Link id="m-stabelizecamera" /><code>{"private void StabelizeCamera()"}</code> | <span className="api-desc">Per-frame update: lerps position and slerps rotation between the target and its current pose.</span> |
| <Link id="m-togglecamera" /><code>{"private void ToggleCamera(Key key)"}</code> | <span className="api-desc">Key handler: flips `IsActive`, logs it and shows a message to the local player.</span> |

</details>
