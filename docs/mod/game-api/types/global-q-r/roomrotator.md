---
title: "RoomRotator"
description: "Controller extension that turns the local VR player with snap or smooth rotation, following the turn settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RoomRotator

A **class** in `Root.Township`, the global namespace.

Controller extension that turns the local VR player with snap or smooth rotation, following the turn settings. Client only; one per hand controller.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`ControllerExtension`](/mod/game-api/types/global-c-d/controllerextension)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RoomRotator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentmultiplier" /><code>{"private float currentMultiplier"}</code> | Smooth turn speed multiplier picked from the speed setting. |
| <Link id="m-currentsensitivity" /><code>{"private float currentSensitivity"}</code> | Swipe sensitivity multiplier picked from the settings. |
| <Link id="m-isclockwise" /><code>{"private bool isClockwise"}</code> | Direction for `RotateJustVRControls`. Flipped for the left hand. |
| <Link id="m-isonrelease" /><code>{"private bool isOnRelease"}</code> | When true, snap turns happen on button release rather than press. |
| <Link id="m-isrotatingaroundplayernotroom" /><code>{"private bool isRotatingAroundPlayerNotRoom"}</code> | When true, turns around the player's position; otherwise uses the locomotion controller's plain `RotateTo`. |
| <Link id="m-isusingplayerteleportsettings" /><code>{"private bool isUsingPlayerTeleportSettings"}</code> | When true, the turn uses the player's teleport style (fade or lerp) instead of instant. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The player controller being turned. |
| <Link id="m-rotationamount" /><code>{"private float rotationAmount"}</code> | Snap turn angle in degrees. Defaults to 90. |
| <Link id="m-sensitivitymultiplier" /><code>{"private float[] sensitivityMultiplier"}</code> | Multipliers for the four swipe sensitivity levels. |
| <Link id="m-smoothrotationspeed" /><code>{"private AnimationCurve smoothRotationSpeed"}</code> | Curve from input to turn speed for smooth turning. |
| <Link id="m-smoothrotationspeedmultiplier" /><code>{"private float[] smoothRotationSpeedMultiplier"}</code> | Multipliers for the four smooth turn speed settings. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle for the registered smooth turn update. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared update module all room rotators register their smooth turn with. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Finds the player controller, flips direction for the left hand and listens for settings changes. |

<details>
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checksettings" /><code>{"private void CheckSettings(Settings obj)"}</code> | Re-applies the turn mode when game settings change, if enabled. |
| <Link id="m-disable" /><code>{"private void Disable()"}</code> | Unhooks all turn actions and the smooth turn update. |
| <Link id="m-enable" /><code>{"private void Enable()"}</code> | Hooks snap turn actions or a smooth turn update to match the settings, and reads speed and swipe sensitivity. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops listening for settings changes. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops listening for new controllers and unhooks all turning. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Listens for the controller arriving and sets up turning once it has. |
| <Link id="m-processinput" /><code>{"private void ProcessInput(float input)"}</code> | Smooth turn step: scales the input, runs it through the speed curve and turns, if the hand is free. |
| <Link id="m-rotatejustvrcontrols" /><code>{"private void RotateJustVRControls("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Turns the play space by `rotationAmount` while putting the body back where it was. |
| <Link id="m-rotatejustvrcontrols-2" /><code>{"private void RotateJustVRControls("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> | Turns the play space by `rotationAmount` while putting the body back where it was. |
| <Link id="m-rotateroom" /><code>{"private void RotateRoom(int direction, float rotationAmount)"}</code> | Turns the player by an angle around the player (or the room), unless locomotion is blocked. |
| <Link id="m-rotateroomleft" /><code>{"private void RotateRoomLeft("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Snap turns left by `rotationAmount` if the hand is free. |
| <Link id="m-rotateroomleft-2" /><code>{"private void RotateRoomLeft("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> | Snap turns left by `rotationAmount` if the hand is free. |
| <Link id="m-rotateroomright" /><code>{"private void RotateRoomRight("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | Snap turns right by `rotationAmount` if the hand is free. |
| <Link id="m-rotateroomright-2" /><code>{"private void RotateRoomRight("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> | Snap turns right by `rotationAmount` if the hand is free. |
| <Link id="m-rotateroomswipe" /><code>{"private void RotateRoomSwipe("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | Snap turns in the swipe direction on OpenXR controllers with a swipe pad. |
| <Link id="m-thumbsticksmoothrotation" /><code>{"private void ThumbstickSmoothRotation()"}</code> | Per-frame smooth turn from the left and right turn actions, scaled by stick amount. |
| <Link id="m-touchpadsmoothrotation" /><code>{"private void TouchPadSmoothRotation()"}</code> | Per-frame smooth turn from the swipe pad while it is touched. |
| <Link id="m-updatecontroller" /><code>{"private void UpdateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | Calls `Enable` a frame later when a new controller is received. |

</details>

## Used in

Members of other types that take, return or hold a `RoomRotator`:

[`HandHandler.Rotator`](/mod/game-api/types/global-e-h/handhandler#m-rotator).
