---
title: "InputMap.IPlayingActions"
description: "Callback interface for the \"Playing\" action map, one method per action."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.IPlayingActions

An **interface** in `Root.Township`, the global namespace.

Callback interface for the "Playing" action map, one method per action. Register an implementation with `PlayingActions.SetCallbacks`; `OpenXRWrapper` implements it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/mod/game-api/types/global-i-l/inputmap)
- **Derived types** [`OpenXRWrapper`](/mod/game-api/types/global-m-o/openxrwrapper)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onangularvelocity" /><code>{"void OnAngularVelocity(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `AngularVelocity` action. |
| <Link id="m-onassistgrab" /><code>{"void OnAssistGrab(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `AssistGrab` action. |
| <Link id="m-ongestures" /><code>{"void OnGestures(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `Gestures` action. |
| <Link id="m-ongrabstrength" /><code>{"void OnGrabStrength(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `GrabStrength` action. |
| <Link id="m-oninteract" /><code>{"void OnInteract(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `Interact` action. |
| <Link id="m-onjoystickdpad" /><code>{"void OnJoystickDpad(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `JoystickDpad` action. |
| <Link id="m-onmetamenu" /><code>{"void OnMetaMenu(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `MetaMenu` action. |
| <Link id="m-onpose" /><code>{"void OnPose(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `Pose` action. |
| <Link id="m-onposition" /><code>{"void OnPosition(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `Position` action. |
| <Link id="m-onreleasetogglegrab" /><code>{"void OnReleaseToggleGrab(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `ReleaseToggleGrab` action. |
| <Link id="m-onrotation" /><code>{"void OnRotation(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `Rotation` action. |
| <Link id="m-onsmoothlocomotion" /><code>{"void OnSmoothLocomotion(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `SmoothLocomotion` action. |
| <Link id="m-onsmoothrotation" /><code>{"void OnSmoothRotation(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `SmoothRotation` action. |
| <Link id="m-onsqueeze" /><code>{"void OnSqueeze(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `Squeeze` action. |
| <Link id="m-onswipemotion" /><code>{"void OnSwipeMotion(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `SwipeMotion` action. |
| <Link id="m-onswipetouch" /><code>{"void OnSwipeTouch(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `SwipeTouch` action. |
| <Link id="m-ontakescreenshotlong" /><code>{"void OnTakeScreenShotLong(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `TakeScreenShotLong` action. |
| <Link id="m-onteleport" /><code>{"void OnTeleport(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `Teleport` action. |
| <Link id="m-ontogglegrab" /><code>{"void OnToggleGrab(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `ToggleGrab` action. |
| <Link id="m-ontogglerun" /><code>{"void OnToggleRun(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `ToggleRun` action. |
| <Link id="m-ontouchingindexaxis" /><code>{"void OnTouchingIndexAxis(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `TouchingIndexAxis` action. |
| <Link id="m-ontouchingthumb" /><code>{"void OnTouchingThumb(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `TouchingThumb` action. |
| <Link id="m-ontouchingtriggerbutton" /><code>{"void OnTouchingTriggerButton(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `TouchingTriggerButton` action. |
| <Link id="m-ontriggeraxis" /><code>{"void OnTriggerAxis(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `TriggerAxis` action. |
| <Link id="m-onvelocity" /><code>{"void OnVelocity(InputAction.CallbackContext context)"}</code> | Called on started, performed and cancelled of the `Velocity` action. |

## Used in

Members of other types that take, return or hold a `IPlayingActions`:

[`InputMap.m_PlayingActionsCallbackInterface`](/mod/game-api/types/global-i-l/inputmap#m-m-playingactionscallbackinterface), [`InputMap.PlayingActions.SetCallbacks`](/mod/game-api/types/global-i-l/inputmap-playingactions#m-setcallbacks).
