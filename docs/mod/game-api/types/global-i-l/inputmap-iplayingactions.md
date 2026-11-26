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
| <Link id="m-onangularvelocity" /><code>{"void OnAngularVelocity(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `AngularVelocity` action.</span> |
| <Link id="m-onassistgrab" /><code>{"void OnAssistGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `AssistGrab` action.</span> |
| <Link id="m-ongestures" /><code>{"void OnGestures(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `Gestures` action.</span> |
| <Link id="m-ongrabstrength" /><code>{"void OnGrabStrength(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `GrabStrength` action.</span> |
| <Link id="m-oninteract" /><code>{"void OnInteract(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `Interact` action.</span> |
| <Link id="m-onjoystickdpad" /><code>{"void OnJoystickDpad(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `JoystickDpad` action.</span> |
| <Link id="m-onmetamenu" /><code>{"void OnMetaMenu(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `MetaMenu` action.</span> |
| <Link id="m-onpose" /><code>{"void OnPose(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `Pose` action.</span> |
| <Link id="m-onposition" /><code>{"void OnPosition(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `Position` action.</span> |
| <Link id="m-onreleasetogglegrab" /><code>{"void OnReleaseToggleGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `ReleaseToggleGrab` action.</span> |
| <Link id="m-onrotation" /><code>{"void OnRotation(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `Rotation` action.</span> |
| <Link id="m-onsmoothlocomotion" /><code>{"void OnSmoothLocomotion(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `SmoothLocomotion` action.</span> |
| <Link id="m-onsmoothrotation" /><code>{"void OnSmoothRotation(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `SmoothRotation` action.</span> |
| <Link id="m-onsqueeze" /><code>{"void OnSqueeze(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `Squeeze` action.</span> |
| <Link id="m-onswipemotion" /><code>{"void OnSwipeMotion(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `SwipeMotion` action.</span> |
| <Link id="m-onswipetouch" /><code>{"void OnSwipeTouch(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `SwipeTouch` action.</span> |
| <Link id="m-ontakescreenshotlong" /><code>{"void OnTakeScreenShotLong(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `TakeScreenShotLong` action.</span> |
| <Link id="m-onteleport" /><code>{"void OnTeleport(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `Teleport` action.</span> |
| <Link id="m-ontogglegrab" /><code>{"void OnToggleGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `ToggleGrab` action.</span> |
| <Link id="m-ontogglerun" /><code>{"void OnToggleRun(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `ToggleRun` action.</span> |
| <Link id="m-ontouchingindexaxis" /><code>{"void OnTouchingIndexAxis(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `TouchingIndexAxis` action.</span> |
| <Link id="m-ontouchingthumb" /><code>{"void OnTouchingThumb(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `TouchingThumb` action.</span> |
| <Link id="m-ontouchingtriggerbutton" /><code>{"void OnTouchingTriggerButton(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `TouchingTriggerButton` action.</span> |
| <Link id="m-ontriggeraxis" /><code>{"void OnTriggerAxis(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `TriggerAxis` action.</span> |
| <Link id="m-onvelocity" /><code>{"void OnVelocity(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called on started, performed and cancelled of the `Velocity` action.</span> |

## Used in

Members of other types that take, return or hold a `IPlayingActions`:

<div className="api-used-in">

[`InputMap.m_PlayingActionsCallbackInterface`](/mod/game-api/types/global-i-l/inputmap#m-m-playingactionscallbackinterface), [`InputMap.PlayingActions.SetCallbacks`](/mod/game-api/types/global-i-l/inputmap-playingactions#m-setcallbacks).

</div>
