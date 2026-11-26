---
title: "InputMap.IPlayingPicoActions"
description: "Callback receiver for every action in InputMap's PlayingPico map."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.IPlayingPicoActions

An **interface** in `Root.Township`, the global namespace.

Callback receiver for every action in `InputMap`'s `PlayingPico` map. Register one with `PlayingPico.SetCallbacks`; each method gets the action's started, performed and cancelled callbacks.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/mod/game-api/types/global-i-l/inputmap)
- **Derived types** [`OpenXRWrapper`](/mod/game-api/types/global-m-o/openxrwrapper)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onangularvelocity" /><code>{"void OnAngularVelocity(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the controller's angular velocity.</span> |
| <Link id="m-ongestures" /><code>{"void OnGestures(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the thumbstick, as read for hand gestures.</span> |
| <Link id="m-oninteract" /><code>{"void OnInteract(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the grip button (the game's grab and interact).</span> |
| <Link id="m-onmetamenu" /><code>{"void OnMetaMenu(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the secondary face button (the menu).</span> |
| <Link id="m-onpicoassistgrab" /><code>{"void OnPicoAssistGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the Pico controller's trigger axis, used for grab assist.</span> |
| <Link id="m-onpose" /><code>{"void OnPose(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the controller's full tracked pose.</span> |
| <Link id="m-onposition" /><code>{"void OnPosition(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the controller's tracked position.</span> |
| <Link id="m-onreleasetogglegrab" /><code>{"void OnReleaseToggleGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the release toggle grab action. It has no binding in this map.</span> |
| <Link id="m-onrotation" /><code>{"void OnRotation(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the controller's tracked rotation.</span> |
| <Link id="m-onsmoothlocomotion" /><code>{"void OnSmoothLocomotion(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the thumbstick, as read for smooth movement.</span> |
| <Link id="m-onsmoothrotation" /><code>{"void OnSmoothRotation(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the thumbstick, as read for smooth turning.</span> |
| <Link id="m-onsqueeze" /><code>{"void OnSqueeze(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the grip axis (how far the grip is squeezed).</span> |
| <Link id="m-ontakescreenshotlong" /><code>{"void OnTakeScreenShotLong(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the trigger press, as read for the long-press photo.</span> |
| <Link id="m-onteleport" /><code>{"void OnTeleport(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the primary face button.</span> |
| <Link id="m-ontogglegrab" /><code>{"void OnToggleGrab(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the trigger press, as read for toggle grab.</span> |
| <Link id="m-ontogglerun" /><code>{"void OnToggleRun(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for a thumbstick click (run toggle).</span> |
| <Link id="m-ontouchingthumb" /><code>{"void OnTouchingThumb(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called when the thumb touches a face button or the thumbstick.</span> |
| <Link id="m-ontouchingtriggerbutton" /><code>{"void OnTouchingTriggerButton(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called when the finger touches the trigger.</span> |
| <Link id="m-ontriggeraxis" /><code>{"void OnTriggerAxis(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the Pico controller's trigger axis.</span> |
| <Link id="m-onvelocity" /><code>{"void OnVelocity(InputAction.CallbackContext context)"}</code> | <span className="api-desc">Called for the controller's linear velocity.</span> |

## Used in

Members of other types that take, return or hold a `IPlayingPicoActions`:

<div className="api-used-in">

[`InputMap.m_PlayingPicoActionsCallbackInterface`](/mod/game-api/types/global-i-l/inputmap#m-m-playingpicoactionscallbackinterface), [`InputMap.PlayingPicoActions.SetCallbacks`](/mod/game-api/types/global-i-l/inputmap-playingpicoactions#m-setcallbacks).

</div>
