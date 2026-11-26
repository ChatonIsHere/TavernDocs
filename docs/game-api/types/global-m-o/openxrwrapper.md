---
title: "OpenXRWrapper"
description: "Receives OpenXR input action callbacks and turns them into per-hand OpenXRControllerInput state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenXRWrapper

A **class** in `Root.Township`, no namespace.

Receives OpenXR input action callbacks and turns them into per-hand `OpenXRControllerInput` state. Implements the callback interfaces of all four playing action maps; client only.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`InputMap.IPlayingActions`](/game-api/types/global-i-l/inputmap-iplayingactions), [`InputMap.IPlayingGenericActions`](/game-api/types/global-i-l/inputmap-iplayinggenericactions), [`InputMap.IPlayingBaseActions`](/game-api/types/global-i-l/inputmap-iplayingbaseactions), [`InputMap.IPlayingPicoActions`](/game-api/types/global-i-l/inputmap-iplayingpicoactions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OpenXRWrapper()"}</code> | Creates an `OpenXRWrapper` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for the class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-leftinput" /><code><Link to="/game-api/types/global-m-o/openxrcontrollerinput">{"OpenXRControllerInput"}</Link>{" LeftInput { get; }"}</code> | Input state for the left controller. |
| <Link id="m-rightinput" /><code><Link to="/game-api/types/global-m-o/openxrcontrollerinput">{"OpenXRControllerInput"}</Link>{" RightInput { get; }"}</code> | Input state for the right controller. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onangularvelocity" /><code>{"void OnAngularVelocity(InputAction.CallbackContext context)"}</code> | Stores the controller's angular velocity in its pose. |
| <Link id="m-onassistgrab" /><code>{"void OnAssistGrab(InputAction.CallbackContext context)"}</code> | Sets the grab assist button state. |
| <Link id="m-ondirectioninput" /><code>{"void OnDirectionInput(InputAction.CallbackContext context)"}</code> | Uses one stick for turning speed, gestures and walking, and sets snap turn and send-item left or right from a sideways push. |
| <Link id="m-ongestures" /><code>{"void OnGestures(InputAction.CallbackContext context)"}</code> | Stores the gesture stick value. |
| <Link id="m-ongrabstrength" /><code>{"void OnGrabStrength(InputAction.CallbackContext context)"}</code> | Stores grip force and sets hard grab when above 0.5. |
| <Link id="m-oninteract" /><code>{"void OnInteract(InputAction.CallbackContext context)"}</code> | Sets the grab state from the grip and mirrors it into the release-toggle-grab state. |
| <Link id="m-onitemleft" /><code>{"void OnItemLeft(InputAction.CallbackContext context)"}</code> | Sets the send-item-left state. |
| <Link id="m-onitemright" /><code>{"void OnItemRight(InputAction.CallbackContext context)"}</code> | Sets the send-item-right state. |
| <Link id="m-onjoystickdpad" /><code>{"void OnJoystickDpad(InputAction.CallbackContext context)"}</code> | A sideways push sets snap turn and send-item left or right. Centring the stick does not clear them. |
| <Link id="m-onlockforgesture" /><code>{"void OnLockForGesture(InputAction.CallbackContext context)"}</code> | Sets the lock-for-gestures state. |
| <Link id="m-onmetamenu" /><code>{"void OnMetaMenu(InputAction.CallbackContext context)"}</code> | Sets the menu button state. |
| <Link id="m-onpicoassistgrab" /><code>{"void OnPicoAssistGrab(InputAction.CallbackContext context)"}</code> | Sets grab assist from the Pico trigger. Unlike the others it reacts to every phase, not just performed. |
| <Link id="m-onpose" /><code>{"void OnPose(InputAction.CallbackContext context)"}</code> | Stores the full controller pose. |
| <Link id="m-onposition" /><code>{"void OnPosition(InputAction.CallbackContext context)"}</code> | Stores the controller position in its pose. |
| <Link id="m-onreleasetogglegrab" /><code>{"void OnReleaseToggleGrab(InputAction.CallbackContext context)"}</code> | Sets the release-toggle-grab state. |
| <Link id="m-onrotation" /><code>{"void OnRotation(InputAction.CallbackContext context)"}</code> | Stores the controller rotation in its pose. |
| <Link id="m-onsecondaryinteract" /><code>{"void OnSecondaryInteract(InputAction.CallbackContext context)"}</code> | Feeds the double-tap check and sets grab assist and long photo states together. |
| <Link id="m-onskeleton" /><code>{"void OnSkeleton(InputAction.CallbackContext context)"}</code> | Does nothing with the value. |
| <Link id="m-onsmoothlocomotion" /><code>{"void OnSmoothLocomotion(InputAction.CallbackContext context)"}</code> | Stores the walking stick value. |
| <Link id="m-onsmoothrotation" /><code>{"void OnSmoothRotation(InputAction.CallbackContext context)"}</code> | Stores turn speed and gestures, and sets snap turn and send-item left or right from a sideways push. |
| <Link id="m-onsqueeze" /><code>{"void OnSqueeze(InputAction.CallbackContext context)"}</code> | Stores the grip axis. |
| <Link id="m-onswipemotion" /><code>{"void OnSwipeMotion(InputAction.CallbackContext context)"}</code> | Stores the swipe position and marks that a swipe happened. |
| <Link id="m-onswipetouch" /><code>{"void OnSwipeTouch(InputAction.CallbackContext context)"}</code> | Sets the swipe touch state. |
| <Link id="m-ontakescreenshotlong" /><code>{"void OnTakeScreenShotLong(InputAction.CallbackContext context)"}</code> | Sets whether the long photo button is held. |
| <Link id="m-onteleport" /><code>{"void OnTeleport(InputAction.CallbackContext context)"}</code> | Sets the teleport button state. |
| <Link id="m-ontogglegrab" /><code>{"void OnToggleGrab(InputAction.CallbackContext context)"}</code> | Feeds the trigger into the double-tap check used for toggle grab. |
| <Link id="m-ontogglegrabdoubletap" /><code>{"void OnToggleGrabDoubleTap(InputAction.CallbackContext context)"}</code> | Sets the toggle grab state directly. |
| <Link id="m-ontogglerun" /><code>{"void OnToggleRun(InputAction.CallbackContext context)"}</code> | Sets the run toggle state. |
| <Link id="m-ontouchingindexaxis" /><code>{"void OnTouchingIndexAxis(InputAction.CallbackContext context)"}</code> | Marks the index finger as touching the trigger. |
| <Link id="m-ontouchingthumb" /><code>{"void OnTouchingThumb(InputAction.CallbackContext context)"}</code> | Marks the thumb as touching the controller face. |
| <Link id="m-ontouchingtriggerbutton" /><code>{"void OnTouchingTriggerButton(InputAction.CallbackContext context)"}</code> | Marks the index finger as touching the trigger. |
| <Link id="m-ontriggeraxis" /><code>{"void OnTriggerAxis(InputAction.CallbackContext context)"}</code> | Stores the trigger axis as the secondary axis. |
| <Link id="m-onturnleft" /><code>{"void OnTurnLeft(InputAction.CallbackContext context)"}</code> | Sets the snap turn left state. |
| <Link id="m-onturnright" /><code>{"void OnTurnRight(InputAction.CallbackContext context)"}</code> | Sets the snap turn right state. |
| <Link id="m-onvelocity" /><code>{"void OnVelocity(InputAction.CallbackContext context)"}</code> | Stores the controller velocity in its pose. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getinput" /><code>{"private bool GetInput(InputAction.CallbackContext context, out "}<Link to="/game-api/types/global-m-o/openxrcontrollerinput">{"OpenXRControllerInput"}</Link>{" input)"}</code> | Returns the left or right controller input for an input action callback, based on the device. Returns false unless the action is in the performed phase. |

</details>

## Used in

Members of other types that take, return or hold a `OpenXRWrapper`:

[`OpenXRInputController.openXRWrapper`](/game-api/types/global-m-o/openxrinputcontroller#m-openxrwrapper).
