---
title: "InputMap.IPlayingBaseActions"
description: "Callbacks for the core VR controller actions in the generated InputMap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.IPlayingBaseActions

An **interface** in `Root.Township`, the global namespace.

Callbacks for the core VR controller actions in the generated `InputMap`. `OpenXRWrapper` implements it to fill in each hand's input.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/mod/game-api/types/global-i-l/inputmap)
- **Derived types** [`OpenXRWrapper`](/mod/game-api/types/global-m-o/openxrwrapper)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onangularvelocity" /><code>{"void OnAngularVelocity(InputAction.CallbackContext context)"}</code> | Controller angular velocity. |
| <Link id="m-ondirectioninput" /><code>{"void OnDirectionInput(InputAction.CallbackContext context)"}</code> | Thumbstick or touchpad direction. |
| <Link id="m-ongrabstrength" /><code>{"void OnGrabStrength(InputAction.CallbackContext context)"}</code> | Grip strength; over half sets hard grab. |
| <Link id="m-oninteract" /><code>{"void OnInteract(InputAction.CallbackContext context)"}</code> | Grab button. Sets grab and release-toggle-grab. |
| <Link id="m-onmetamenu" /><code>{"void OnMetaMenu(InputAction.CallbackContext context)"}</code> | Meta menu button. |
| <Link id="m-onpose" /><code>{"void OnPose(InputAction.CallbackContext context)"}</code> | Full controller pose. |
| <Link id="m-onposition" /><code>{"void OnPosition(InputAction.CallbackContext context)"}</code> | Controller position. |
| <Link id="m-onrotation" /><code>{"void OnRotation(InputAction.CallbackContext context)"}</code> | Controller rotation. |
| <Link id="m-onsecondaryinteract" /><code>{"void OnSecondaryInteract(InputAction.CallbackContext context)"}</code> | Secondary button. Drives double-tap and grab assist. |
| <Link id="m-onsqueeze" /><code>{"void OnSqueeze(InputAction.CallbackContext context)"}</code> | Grip squeeze amount, stored as the grab axis. |
| <Link id="m-ontakescreenshotlong" /><code>{"void OnTakeScreenShotLong(InputAction.CallbackContext context)"}</code> | Long-press screenshot button. |
| <Link id="m-onteleport" /><code>{"void OnTeleport(InputAction.CallbackContext context)"}</code> | Teleport button. |
| <Link id="m-ontogglerun" /><code>{"void OnToggleRun(InputAction.CallbackContext context)"}</code> | Run toggle button. |
| <Link id="m-ontouchingindexaxis" /><code>{"void OnTouchingIndexAxis(InputAction.CallbackContext context)"}</code> | Whether the index finger is on the trigger. |
| <Link id="m-ontouchingthumb" /><code>{"void OnTouchingThumb(InputAction.CallbackContext context)"}</code> | Whether the thumb is resting on the controller. |
| <Link id="m-ontouchingtriggerbutton" /><code>{"void OnTouchingTriggerButton(InputAction.CallbackContext context)"}</code> | Whether the index finger is on the trigger button. |
| <Link id="m-ontriggeraxis" /><code>{"void OnTriggerAxis(InputAction.CallbackContext context)"}</code> | Trigger amount, stored as the secondary axis. |
| <Link id="m-onvelocity" /><code>{"void OnVelocity(InputAction.CallbackContext context)"}</code> | Controller velocity. |

## Used in

Members of other types that take, return or hold a `IPlayingBaseActions`:

[`InputMap.m_PlayingBaseActionsCallbackInterface`](/mod/game-api/types/global-i-l/inputmap#m-m-playingbaseactionscallbackinterface), [`InputMap.PlayingBaseActions.SetCallbacks`](/mod/game-api/types/global-i-l/inputmap-playingbaseactions#m-setcallbacks).
