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
| <Link id="m-ctor" /><code>{"RoomRotator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentmultiplier" /><code>{"private float currentMultiplier"}</code> | <span className="api-desc">Smooth turn speed multiplier picked from the speed setting.</span> |
| <Link id="m-currentsensitivity" /><code>{"private float currentSensitivity"}</code> | <span className="api-desc">Swipe sensitivity multiplier picked from the settings.</span> |
| <Link id="m-isclockwise" /><code>{"private bool isClockwise"}</code> | <span className="api-desc">Direction for `RotateJustVRControls`. Flipped for the left hand.</span> |
| <Link id="m-isonrelease" /><code>{"private bool isOnRelease"}</code> | <span className="api-desc">When true, snap turns happen on button release rather than press.</span> |
| <Link id="m-isrotatingaroundplayernotroom" /><code>{"private bool isRotatingAroundPlayerNotRoom"}</code> | <span className="api-desc">When true, turns around the player's position; otherwise uses the locomotion controller's plain `RotateTo`.</span> |
| <Link id="m-isusingplayerteleportsettings" /><code>{"private bool isUsingPlayerTeleportSettings"}</code> | <span className="api-desc">When true, the turn uses the player's teleport style (fade or lerp) instead of instant.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The player controller being turned.</span> |
| <Link id="m-rotationamount" /><code>{"private float rotationAmount"}</code> | <span className="api-desc">Snap turn angle in degrees. Defaults to 90.</span> |
| <Link id="m-sensitivitymultiplier" /><code>{"private float[] sensitivityMultiplier"}</code> | <span className="api-desc">Multipliers for the four swipe sensitivity levels.</span> |
| <Link id="m-smoothrotationspeed" /><code>{"private AnimationCurve smoothRotationSpeed"}</code> | <span className="api-desc">Curve from input to turn speed for smooth turning.</span> |
| <Link id="m-smoothrotationspeedmultiplier" /><code>{"private float[] smoothRotationSpeedMultiplier"}</code> | <span className="api-desc">Multipliers for the four smooth turn speed settings.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered smooth turn update.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared update module all room rotators register their smooth turn with.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Finds the player controller, flips direction for the left hand and listens for settings changes.</span> |

<details className="api-private">
<summary>18 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checksettings" /><code>{"private void CheckSettings(Settings obj)"}</code> | <span className="api-desc">Re-applies the turn mode when game settings change, if enabled.</span> |
| <Link id="m-disable" /><code>{"private void Disable()"}</code> | <span className="api-desc">Unhooks all turn actions and the smooth turn update.</span> |
| <Link id="m-enable" /><code>{"private void Enable()"}</code> | <span className="api-desc">Hooks snap turn actions or a smooth turn update to match the settings, and reads speed and swipe sensitivity.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops listening for settings changes.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops listening for new controllers and unhooks all turning.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Listens for the controller arriving and sets up turning once it has.</span> |
| <Link id="m-processinput" /><code>{"private void ProcessInput(float input)"}</code> | <span className="api-desc">Smooth turn step: scales the input, runs it through the speed curve and turns, if the hand is free.</span> |
| <Link id="m-rotatejustvrcontrols" /><code>{"private void RotateJustVRControls("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Turns the play space by `rotationAmount` while putting the body back where it was.</span> |
| <Link id="m-rotatejustvrcontrols-2" /><code>{"private void RotateJustVRControls("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> | <span className="api-desc">Turns the play space by `rotationAmount` while putting the body back where it was.</span> |
| <Link id="m-rotateroom" /><code>{"private void RotateRoom(int direction, float rotationAmount)"}</code> | <span className="api-desc">Turns the player by an angle around the player (or the room), unless locomotion is blocked.</span> |
| <Link id="m-rotateroomleft" /><code>{"private void RotateRoomLeft("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Snap turns left by `rotationAmount` if the hand is free.</span> |
| <Link id="m-rotateroomleft-2" /><code>{"private void RotateRoomLeft("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput, bool isDisabling)"}</code> | <span className="api-desc">Snap turns left by `rotationAmount` if the hand is free.</span> |
| <Link id="m-rotateroomright" /><code>{"private void RotateRoomRight("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Snap turns right by `rotationAmount` if the hand is free.</span> |
| <Link id="m-rotateroomright-2" /><code>{"private void RotateRoomRight("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, bool isDisabling)"}</code> | <span className="api-desc">Snap turns right by `rotationAmount` if the hand is free.</span> |
| <Link id="m-rotateroomswipe" /><code>{"private void RotateRoomSwipe("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" playerInput)"}</code> | <span className="api-desc">Snap turns in the swipe direction on OpenXR controllers with a swipe pad.</span> |
| <Link id="m-thumbsticksmoothrotation" /><code>{"private void ThumbstickSmoothRotation()"}</code> | <span className="api-desc">Per-frame smooth turn from the left and right turn actions, scaled by stick amount.</span> |
| <Link id="m-touchpadsmoothrotation" /><code>{"private void TouchPadSmoothRotation()"}</code> | <span className="api-desc">Per-frame smooth turn from the swipe pad while it is touched.</span> |
| <Link id="m-updatecontroller" /><code>{"private void UpdateController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" input)"}</code> | <span className="api-desc">Calls `Enable` a frame later when a new controller is received.</span> |

</details>

## Used in

Members of other types that take, return or hold a `RoomRotator`:

<div className="api-used-in">

[`HandHandler.Rotator`](/mod/game-api/types/global-e-h/handhandler#m-rotator).

</div>
