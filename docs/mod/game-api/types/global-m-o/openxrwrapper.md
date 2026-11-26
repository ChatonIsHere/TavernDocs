---
title: "OpenXRWrapper"
description: "Receives OpenXR input action callbacks and turns them into per-hand OpenXRControllerInput state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenXRWrapper

A **class** in `Root.Township`, the global namespace.

Receives OpenXR input action callbacks and turns them into per-hand `OpenXRControllerInput` state. Implements the callback interfaces of all four playing action maps; client only.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`InputMap.IPlayingActions`](/mod/game-api/types/global-i-l/inputmap-iplayingactions), [`InputMap.IPlayingGenericActions`](/mod/game-api/types/global-i-l/inputmap-iplayinggenericactions), [`InputMap.IPlayingBaseActions`](/mod/game-api/types/global-i-l/inputmap-iplayingbaseactions), [`InputMap.IPlayingPicoActions`](/mod/game-api/types/global-i-l/inputmap-iplayingpicoactions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OpenXRWrapper()"}</code> | <span className="api-desc">Creates an `OpenXRWrapper` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for the class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-leftinput" /><code><Link to="/mod/game-api/types/global-m-o/openxrcontrollerinput">{"OpenXRControllerInput"}</Link>{" LeftInput { get; }"}</code> | <span className="api-desc">Input state for the left controller.</span> |
| <Link id="m-rightinput" /><code><Link to="/mod/game-api/types/global-m-o/openxrcontrollerinput">{"OpenXRControllerInput"}</Link>{" RightInput { get; }"}</code> | <span className="api-desc">Input state for the right controller.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onangularvelocity" /><code>{"void OnAngularVelocity(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the controller's angular velocity in its pose.</span> |
| <Link id="m-onassistgrab" /><code>{"void OnAssistGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the grab assist button state.</span> |
| <Link id="m-ondirectioninput" /><code>{"void OnDirectionInput(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Uses one stick for turning speed, gestures and walking, and sets snap turn and send-item left or right from a sideways push.</span> |
| <Link id="m-ongestures" /><code>{"void OnGestures(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the gesture stick value.</span> |
| <Link id="m-ongrabstrength" /><code>{"void OnGrabStrength(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores grip force and sets hard grab when above 0.5.</span> |
| <Link id="m-oninteract" /><code>{"void OnInteract(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the grab state from the grip and mirrors it into the release-toggle-grab state.</span> |
| <Link id="m-onitemleft" /><code>{"void OnItemLeft(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the send-item-left state.</span> |
| <Link id="m-onitemright" /><code>{"void OnItemRight(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the send-item-right state.</span> |
| <Link id="m-onjoystickdpad" /><code>{"void OnJoystickDpad(InputAction.CallbackContext context)"}</code> | <span className="api-desc">A sideways push sets snap turn and send-item left or right. Centring the stick does not clear them.</span> |
| <Link id="m-onlockforgesture" /><code>{"void OnLockForGesture(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the lock-for-gestures state.</span> |
| <Link id="m-onmetamenu" /><code>{"void OnMetaMenu(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the menu button state.</span> |
| <Link id="m-onpicoassistgrab" /><code>{"void OnPicoAssistGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets grab assist from the Pico trigger. Unlike the others it reacts to every phase, not just performed.</span> |
| <Link id="m-onpose" /><code>{"void OnPose(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the full controller pose.</span> |
| <Link id="m-onposition" /><code>{"void OnPosition(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the controller position in its pose.</span> |
| <Link id="m-onreleasetogglegrab" /><code>{"void OnReleaseToggleGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the release-toggle-grab state.</span> |
| <Link id="m-onrotation" /><code>{"void OnRotation(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the controller rotation in its pose.</span> |
| <Link id="m-onsecondaryinteract" /><code>{"void OnSecondaryInteract(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Feeds the double-tap check and sets grab assist and long photo states together.</span> |
| <Link id="m-onskeleton" /><code>{"void OnSkeleton(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Does nothing with the value.</span> |
| <Link id="m-onsmoothlocomotion" /><code>{"void OnSmoothLocomotion(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the walking stick value.</span> |
| <Link id="m-onsmoothrotation" /><code>{"void OnSmoothRotation(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores turn speed and gestures, and sets snap turn and send-item left or right from a sideways push.</span> |
| <Link id="m-onsqueeze" /><code>{"void OnSqueeze(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the grip axis.</span> |
| <Link id="m-onswipemotion" /><code>{"void OnSwipeMotion(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the swipe position and marks that a swipe happened.</span> |
| <Link id="m-onswipetouch" /><code>{"void OnSwipeTouch(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the swipe touch state.</span> |
| <Link id="m-ontakescreenshotlong" /><code>{"void OnTakeScreenShotLong(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets whether the long photo button is held.</span> |
| <Link id="m-onteleport" /><code>{"void OnTeleport(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the teleport button state.</span> |
| <Link id="m-ontogglegrab" /><code>{"void OnToggleGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Feeds the trigger into the double-tap check used for toggle grab.</span> |
| <Link id="m-ontogglegrabdoubletap" /><code>{"void OnToggleGrabDoubleTap(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the toggle grab state directly.</span> |
| <Link id="m-ontogglerun" /><code>{"void OnToggleRun(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the run toggle state.</span> |
| <Link id="m-ontouchingindexaxis" /><code>{"void OnTouchingIndexAxis(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Marks the index finger as touching the trigger.</span> |
| <Link id="m-ontouchingthumb" /><code>{"void OnTouchingThumb(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Marks the thumb as touching the controller face.</span> |
| <Link id="m-ontouchingtriggerbutton" /><code>{"void OnTouchingTriggerButton(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Marks the index finger as touching the trigger.</span> |
| <Link id="m-ontriggeraxis" /><code>{"void OnTriggerAxis(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the trigger axis as the secondary axis.</span> |
| <Link id="m-onturnleft" /><code>{"void OnTurnLeft(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the snap turn left state.</span> |
| <Link id="m-onturnright" /><code>{"void OnTurnRight(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Sets the snap turn right state.</span> |
| <Link id="m-onvelocity" /><code>{"void OnVelocity(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Stores the controller velocity in its pose.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getinput" /><code>{"private bool GetInput(InputAction.CallbackContext context, out "}<Link to="/mod/game-api/types/global-m-o/openxrcontrollerinput">{"OpenXRControllerInput"}</Link>{" input)"}</code> | <span className="api-desc">Returns the left or right controller input for an input action callback, based on the device. Returns false unless the action is in the performed phase.</span> |

</details>

## Used in

Members of other types that take, return or hold a `OpenXRWrapper`:

<div className="api-used-in">

[`OpenXRInputController.openXRWrapper`](/mod/game-api/types/global-m-o/openxrinputcontroller#m-openxrwrapper).

</div>
