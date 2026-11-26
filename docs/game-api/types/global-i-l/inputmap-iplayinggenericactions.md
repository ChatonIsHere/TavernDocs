---
title: "InputMap.IPlayingGenericActions"
description: "Callback receiver for every action in InputMap's PlayingGeneric map (generic XR controller)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.IPlayingGenericActions

An **interface** in `Root.Township`, no namespace.

Callback receiver for every action in `InputMap`'s `PlayingGeneric` map (generic XR controller). Register one with `PlayingGeneric.SetCallbacks`; each method gets the action's started, performed and cancelled callbacks.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/game-api/types/global-i-l/inputmap)
- **Derived types** [`OpenXRWrapper`](/game-api/types/global-m-o/openxrwrapper)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onangularvelocity" /><code>{"void OnAngularVelocity(InputAction.CallbackContext context)"}</code> | Called for the controller's angular velocity. |
| <Link id="m-onassistgrab" /><code>{"void OnAssistGrab(InputAction.CallbackContext context)"}</code> | Called for the trigger press, used for grab assist. |
| <Link id="m-ongestures" /><code>{"void OnGestures(InputAction.CallbackContext context)"}</code> | Called for the thumbstick, as read for hand gestures. |
| <Link id="m-oninteract" /><code>{"void OnInteract(InputAction.CallbackContext context)"}</code> | Called for the grip button (the game's grab and interact). |
| <Link id="m-onmetamenu" /><code>{"void OnMetaMenu(InputAction.CallbackContext context)"}</code> | Called for the secondary face button (the menu). |
| <Link id="m-onpose" /><code>{"void OnPose(InputAction.CallbackContext context)"}</code> | Called for the controller's full tracked pose. |
| <Link id="m-onposition" /><code>{"void OnPosition(InputAction.CallbackContext context)"}</code> | Called for the controller's tracked position. |
| <Link id="m-onreleasetogglegrab" /><code>{"void OnReleaseToggleGrab(InputAction.CallbackContext context)"}</code> | Called for the release toggle grab action. It has no binding in this map. |
| <Link id="m-onrotation" /><code>{"void OnRotation(InputAction.CallbackContext context)"}</code> | Called for the controller's tracked rotation. |
| <Link id="m-onsmoothlocomotion" /><code>{"void OnSmoothLocomotion(InputAction.CallbackContext context)"}</code> | Called for the thumbstick, as read for smooth movement. |
| <Link id="m-onsmoothrotation" /><code>{"void OnSmoothRotation(InputAction.CallbackContext context)"}</code> | Called for the thumbstick, as read for smooth turning. |
| <Link id="m-onsqueeze" /><code>{"void OnSqueeze(InputAction.CallbackContext context)"}</code> | Called for the grip axis (how far the grip is squeezed). |
| <Link id="m-ontakescreenshotlong" /><code>{"void OnTakeScreenShotLong(InputAction.CallbackContext context)"}</code> | Called for the trigger press, as read for the long-press photo. |
| <Link id="m-onteleport" /><code>{"void OnTeleport(InputAction.CallbackContext context)"}</code> | Called for the primary face button. |
| <Link id="m-ontogglegrab" /><code>{"void OnToggleGrab(InputAction.CallbackContext context)"}</code> | Called for the trigger press, as read for toggle grab. |
| <Link id="m-ontogglerun" /><code>{"void OnToggleRun(InputAction.CallbackContext context)"}</code> | Called for a thumbstick click (run toggle). |
| <Link id="m-ontouchingthumb" /><code>{"void OnTouchingThumb(InputAction.CallbackContext context)"}</code> | Called when the thumb touches a face button or the thumbstick. |
| <Link id="m-ontouchingtriggerbutton" /><code>{"void OnTouchingTriggerButton(InputAction.CallbackContext context)"}</code> | Called when the finger touches the trigger. |
| <Link id="m-ontriggeraxis" /><code>{"void OnTriggerAxis(InputAction.CallbackContext context)"}</code> | Called for the trigger axis. |
| <Link id="m-onvelocity" /><code>{"void OnVelocity(InputAction.CallbackContext context)"}</code> | Called for the controller's linear velocity. |

## Used in

Members of other types that take, return or hold a `IPlayingGenericActions`:

[`InputMap.m_PlayingGenericActionsCallbackInterface`](/game-api/types/global-i-l/inputmap#m-m-playinggenericactionscallbackinterface), [`InputMap.PlayingGenericActions.SetCallbacks`](/game-api/types/global-i-l/inputmap-playinggenericactions#m-setcallbacks).
