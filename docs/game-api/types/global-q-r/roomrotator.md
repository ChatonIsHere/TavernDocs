---
title: "RoomRotator"
description: "class RoomRotator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoomRotator

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)
- **Inherits or implements** [`ControllerExtension`](/game-api/types/global-c-d/controllerextension)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoomRotator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentmultiplier" /><code>{"private float currentMultiplier"}</code> |  |
| <Link id="m-currentsensitivity" /><code>{"private float currentSensitivity"}</code> |  |
| <Link id="m-isclockwise" /><code>{"private bool isClockwise"}</code> |  |
| <Link id="m-isonrelease" /><code>{"private bool isOnRelease"}</code> |  |
| <Link id="m-isrotatingaroundplayernotroom" /><code>{"private bool isRotatingAroundPlayerNotRoom"}</code> |  |
| <Link id="m-isusingplayerteleportsettings" /><code>{"private bool isUsingPlayerTeleportSettings"}</code> |  |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |  |
| <Link id="m-rotationamount" /><code>{"private float rotationAmount"}</code> |  |
| <Link id="m-sensitivitymultiplier" /><code>{"private float[] sensitivityMultiplier"}</code> |  |
| <Link id="m-smoothrotationspeed" /><code>{"private AnimationCurve smoothRotationSpeed"}</code> |  |
| <Link id="m-smoothrotationspeedmultiplier" /><code>{"private float[] smoothRotationSpeedMultiplier"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-checksettings" /><code>{"private void CheckSettings(Settings obj)"}</code> |  |
| <Link id="m-disable" /><code>{"private void Disable()"}</code> |  |
| <Link id="m-enable" /><code>{"private void Enable()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
| <Link id="m-processinput" /><code>{"private void ProcessInput(float input)"}</code> |  |
| <Link id="m-rotatejustvrcontrols" /><code>{"private void RotateJustVRControls("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-rotatejustvrcontrols-2" /><code>{"private void RotateJustVRControls("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> |  |
| <Link id="m-rotateroom" /><code>{"private void RotateRoom(int direction, float rotationAmount)"}</code> |  |
| <Link id="m-rotateroomleft" /><code>{"private void RotateRoomLeft("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-rotateroomleft-2" /><code>{"private void RotateRoomLeft("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> |  |
| <Link id="m-rotateroomright" /><code>{"private void RotateRoomRight("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |  |
| <Link id="m-rotateroomright-2" /><code>{"private void RotateRoomRight("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> |  |
| <Link id="m-rotateroomswipe" /><code>{"private void RotateRoomSwipe("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> |  |
| <Link id="m-thumbsticksmoothrotation" /><code>{"private void ThumbstickSmoothRotation()"}</code> |  |
| <Link id="m-touchpadsmoothrotation" /><code>{"private void TouchPadSmoothRotation()"}</code> |  |
| <Link id="m-updatecontroller" /><code>{"private void UpdateController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> |  |

## Used in

Members of other types that take, return or hold a `RoomRotator`:

[`HandHandler.Rotator`](/game-api/types/global-e-h/handhandler#m-rotator).
