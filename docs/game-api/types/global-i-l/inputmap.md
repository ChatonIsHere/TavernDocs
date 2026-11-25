---
title: "InputMap"
description: "Unity Input System wrapper generated from the game's input actions asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap

A **class** in `Root.Township`, no namespace.

Unity Input System wrapper generated from the game's input actions asset. It has four action maps: `Playing` (per-device bindings for Oculus, Vive, WMR and Index), `PlayingBase`, `PlayingGeneric` (generic XR controller) and `PlayingPico`. The OpenXR input controller holds one shared instance.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `IInputActionCollection2`, `IInputActionCollection`, `IEnumerable<InputAction>`, `IEnumerable`, `IDisposable`
- **Nested types** [`IPlayingActions`](/game-api/types/global-i-l/inputmap-iplayingactions), [`IPlayingBaseActions`](/game-api/types/global-i-l/inputmap-iplayingbaseactions), [`IPlayingGenericActions`](/game-api/types/global-i-l/inputmap-iplayinggenericactions), [`IPlayingPicoActions`](/game-api/types/global-i-l/inputmap-iplayingpicoactions), [`PlayingActions`](/game-api/types/global-i-l/inputmap-playingactions), [`PlayingBaseActions`](/game-api/types/global-i-l/inputmap-playingbaseactions), [`PlayingGenericActions`](/game-api/types/global-i-l/inputmap-playinggenericactions), [`PlayingPicoActions`](/game-api/types/global-i-l/inputmap-playingpicoactions)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InputMap()"}</code> |

## Fields

<details>
<summary>91 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-m-playing" /><code>{"private readonly InputActionMap m_Playing"}</code> |
| <Link id="m-m-playing-angularvelocity" /><code>{"private readonly InputAction m_Playing_AngularVelocity"}</code> |
| <Link id="m-m-playing-assistgrab" /><code>{"private readonly InputAction m_Playing_AssistGrab"}</code> |
| <Link id="m-m-playing-gestures" /><code>{"private readonly InputAction m_Playing_Gestures"}</code> |
| <Link id="m-m-playing-grabstrength" /><code>{"private readonly InputAction m_Playing_GrabStrength"}</code> |
| <Link id="m-m-playing-interact" /><code>{"private readonly InputAction m_Playing_Interact"}</code> |
| <Link id="m-m-playing-joystickdpad" /><code>{"private readonly InputAction m_Playing_JoystickDpad"}</code> |
| <Link id="m-m-playing-metamenu" /><code>{"private readonly InputAction m_Playing_MetaMenu"}</code> |
| <Link id="m-m-playing-pose" /><code>{"private readonly InputAction m_Playing_Pose"}</code> |
| <Link id="m-m-playing-position" /><code>{"private readonly InputAction m_Playing_Position"}</code> |
| <Link id="m-m-playing-releasetogglegrab" /><code>{"private readonly InputAction m_Playing_ReleaseToggleGrab"}</code> |
| <Link id="m-m-playing-rotation" /><code>{"private readonly InputAction m_Playing_Rotation"}</code> |
| <Link id="m-m-playing-smoothlocomotion" /><code>{"private readonly InputAction m_Playing_SmoothLocomotion"}</code> |
| <Link id="m-m-playing-smoothrotation" /><code>{"private readonly InputAction m_Playing_SmoothRotation"}</code> |
| <Link id="m-m-playing-squeeze" /><code>{"private readonly InputAction m_Playing_Squeeze"}</code> |
| <Link id="m-m-playing-swipemotion" /><code>{"private readonly InputAction m_Playing_SwipeMotion"}</code> |
| <Link id="m-m-playing-swipetouch" /><code>{"private readonly InputAction m_Playing_SwipeTouch"}</code> |
| <Link id="m-m-playing-takescreenshotlong" /><code>{"private readonly InputAction m_Playing_TakeScreenShotLong"}</code> |
| <Link id="m-m-playing-teleport" /><code>{"private readonly InputAction m_Playing_Teleport"}</code> |
| <Link id="m-m-playing-togglegrab" /><code>{"private readonly InputAction m_Playing_ToggleGrab"}</code> |
| <Link id="m-m-playing-togglerun" /><code>{"private readonly InputAction m_Playing_ToggleRun"}</code> |
| <Link id="m-m-playing-touchingindexaxis" /><code>{"private readonly InputAction m_Playing_TouchingIndexAxis"}</code> |
| <Link id="m-m-playing-touchingthumb" /><code>{"private readonly InputAction m_Playing_TouchingThumb"}</code> |
| <Link id="m-m-playing-touchingtriggerbutton" /><code>{"private readonly InputAction m_Playing_TouchingTriggerButton"}</code> |
| <Link id="m-m-playing-triggeraxis" /><code>{"private readonly InputAction m_Playing_TriggerAxis"}</code> |
| <Link id="m-m-playing-velocity" /><code>{"private readonly InputAction m_Playing_Velocity"}</code> |
| <Link id="m-m-playingactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap-iplayingactions">{"InputMap.IPlayingActions"}</Link>{" m_PlayingActionsCallbackInterface"}</code> |
| <Link id="m-m-playingbase" /><code>{"private readonly InputActionMap m_PlayingBase"}</code> |
| <Link id="m-m-playingbase-angularvelocity" /><code>{"private readonly InputAction m_PlayingBase_AngularVelocity"}</code> |
| <Link id="m-m-playingbase-directioninput" /><code>{"private readonly InputAction m_PlayingBase_DirectionInput"}</code> |
| <Link id="m-m-playingbase-grabstrength" /><code>{"private readonly InputAction m_PlayingBase_GrabStrength"}</code> |
| <Link id="m-m-playingbase-interact" /><code>{"private readonly InputAction m_PlayingBase_Interact"}</code> |
| <Link id="m-m-playingbase-metamenu" /><code>{"private readonly InputAction m_PlayingBase_MetaMenu"}</code> |
| <Link id="m-m-playingbase-pose" /><code>{"private readonly InputAction m_PlayingBase_Pose"}</code> |
| <Link id="m-m-playingbase-position" /><code>{"private readonly InputAction m_PlayingBase_Position"}</code> |
| <Link id="m-m-playingbase-rotation" /><code>{"private readonly InputAction m_PlayingBase_Rotation"}</code> |
| <Link id="m-m-playingbase-secondaryinteract" /><code>{"private readonly InputAction m_PlayingBase_SecondaryInteract"}</code> |
| <Link id="m-m-playingbase-squeeze" /><code>{"private readonly InputAction m_PlayingBase_Squeeze"}</code> |
| <Link id="m-m-playingbase-takescreenshotlong" /><code>{"private readonly InputAction m_PlayingBase_TakeScreenShotLong"}</code> |
| <Link id="m-m-playingbase-teleport" /><code>{"private readonly InputAction m_PlayingBase_Teleport"}</code> |
| <Link id="m-m-playingbase-togglerun" /><code>{"private readonly InputAction m_PlayingBase_ToggleRun"}</code> |
| <Link id="m-m-playingbase-touchingindexaxis" /><code>{"private readonly InputAction m_PlayingBase_TouchingIndexAxis"}</code> |
| <Link id="m-m-playingbase-touchingthumb" /><code>{"private readonly InputAction m_PlayingBase_TouchingThumb"}</code> |
| <Link id="m-m-playingbase-touchingtriggerbutton" /><code>{"private readonly InputAction m_PlayingBase_TouchingTriggerButton"}</code> |
| <Link id="m-m-playingbase-triggeraxis" /><code>{"private readonly InputAction m_PlayingBase_TriggerAxis"}</code> |
| <Link id="m-m-playingbase-velocity" /><code>{"private readonly InputAction m_PlayingBase_Velocity"}</code> |
| <Link id="m-m-playingbaseactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap-iplayingbaseactions">{"InputMap.IPlayingBaseActions"}</Link>{" m_PlayingBaseActionsCallbackInterface"}</code> |
| <Link id="m-m-playinggeneric" /><code>{"private readonly InputActionMap m_PlayingGeneric"}</code> |
| <Link id="m-m-playinggeneric-angularvelocity" /><code>{"private readonly InputAction m_PlayingGeneric_AngularVelocity"}</code> |
| <Link id="m-m-playinggeneric-assistgrab" /><code>{"private readonly InputAction m_PlayingGeneric_AssistGrab"}</code> |
| <Link id="m-m-playinggeneric-gestures" /><code>{"private readonly InputAction m_PlayingGeneric_Gestures"}</code> |
| <Link id="m-m-playinggeneric-interact" /><code>{"private readonly InputAction m_PlayingGeneric_Interact"}</code> |
| <Link id="m-m-playinggeneric-metamenu" /><code>{"private readonly InputAction m_PlayingGeneric_MetaMenu"}</code> |
| <Link id="m-m-playinggeneric-pose" /><code>{"private readonly InputAction m_PlayingGeneric_Pose"}</code> |
| <Link id="m-m-playinggeneric-position" /><code>{"private readonly InputAction m_PlayingGeneric_Position"}</code> |
| <Link id="m-m-playinggeneric-releasetogglegrab" /><code>{"private readonly InputAction m_PlayingGeneric_ReleaseToggleGrab"}</code> |
| <Link id="m-m-playinggeneric-rotation" /><code>{"private readonly InputAction m_PlayingGeneric_Rotation"}</code> |
| <Link id="m-m-playinggeneric-smoothlocomotion" /><code>{"private readonly InputAction m_PlayingGeneric_SmoothLocomotion"}</code> |
| <Link id="m-m-playinggeneric-smoothrotation" /><code>{"private readonly InputAction m_PlayingGeneric_SmoothRotation"}</code> |
| <Link id="m-m-playinggeneric-squeeze" /><code>{"private readonly InputAction m_PlayingGeneric_Squeeze"}</code> |
| <Link id="m-m-playinggeneric-takescreenshotlong" /><code>{"private readonly InputAction m_PlayingGeneric_TakeScreenShotLong"}</code> |
| <Link id="m-m-playinggeneric-teleport" /><code>{"private readonly InputAction m_PlayingGeneric_Teleport"}</code> |
| <Link id="m-m-playinggeneric-togglegrab" /><code>{"private readonly InputAction m_PlayingGeneric_ToggleGrab"}</code> |
| <Link id="m-m-playinggeneric-togglerun" /><code>{"private readonly InputAction m_PlayingGeneric_ToggleRun"}</code> |
| <Link id="m-m-playinggeneric-touchingthumb" /><code>{"private readonly InputAction m_PlayingGeneric_TouchingThumb"}</code> |
| <Link id="m-m-playinggeneric-touchingtriggerbutton" /><code>{"private readonly InputAction m_PlayingGeneric_TouchingTriggerButton"}</code> |
| <Link id="m-m-playinggeneric-triggeraxis" /><code>{"private readonly InputAction m_PlayingGeneric_TriggerAxis"}</code> |
| <Link id="m-m-playinggeneric-velocity" /><code>{"private readonly InputAction m_PlayingGeneric_Velocity"}</code> |
| <Link id="m-m-playinggenericactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap-iplayinggenericactions">{"InputMap.IPlayingGenericActions"}</Link>{" m_PlayingGenericActionsCallbackInterface"}</code> |
| <Link id="m-m-playingpico" /><code>{"private readonly InputActionMap m_PlayingPico"}</code> |
| <Link id="m-m-playingpico-angularvelocity" /><code>{"private readonly InputAction m_PlayingPico_AngularVelocity"}</code> |
| <Link id="m-m-playingpico-gestures" /><code>{"private readonly InputAction m_PlayingPico_Gestures"}</code> |
| <Link id="m-m-playingpico-interact" /><code>{"private readonly InputAction m_PlayingPico_Interact"}</code> |
| <Link id="m-m-playingpico-metamenu" /><code>{"private readonly InputAction m_PlayingPico_MetaMenu"}</code> |
| <Link id="m-m-playingpico-picoassistgrab" /><code>{"private readonly InputAction m_PlayingPico_PicoAssistGrab"}</code> |
| <Link id="m-m-playingpico-pose" /><code>{"private readonly InputAction m_PlayingPico_Pose"}</code> |
| <Link id="m-m-playingpico-position" /><code>{"private readonly InputAction m_PlayingPico_Position"}</code> |
| <Link id="m-m-playingpico-releasetogglegrab" /><code>{"private readonly InputAction m_PlayingPico_ReleaseToggleGrab"}</code> |
| <Link id="m-m-playingpico-rotation" /><code>{"private readonly InputAction m_PlayingPico_Rotation"}</code> |
| <Link id="m-m-playingpico-smoothlocomotion" /><code>{"private readonly InputAction m_PlayingPico_SmoothLocomotion"}</code> |
| <Link id="m-m-playingpico-smoothrotation" /><code>{"private readonly InputAction m_PlayingPico_SmoothRotation"}</code> |
| <Link id="m-m-playingpico-squeeze" /><code>{"private readonly InputAction m_PlayingPico_Squeeze"}</code> |
| <Link id="m-m-playingpico-takescreenshotlong" /><code>{"private readonly InputAction m_PlayingPico_TakeScreenShotLong"}</code> |
| <Link id="m-m-playingpico-teleport" /><code>{"private readonly InputAction m_PlayingPico_Teleport"}</code> |
| <Link id="m-m-playingpico-togglegrab" /><code>{"private readonly InputAction m_PlayingPico_ToggleGrab"}</code> |
| <Link id="m-m-playingpico-togglerun" /><code>{"private readonly InputAction m_PlayingPico_ToggleRun"}</code> |
| <Link id="m-m-playingpico-touchingthumb" /><code>{"private readonly InputAction m_PlayingPico_TouchingThumb"}</code> |
| <Link id="m-m-playingpico-touchingtriggerbutton" /><code>{"private readonly InputAction m_PlayingPico_TouchingTriggerButton"}</code> |
| <Link id="m-m-playingpico-triggeraxis" /><code>{"private readonly InputAction m_PlayingPico_TriggerAxis"}</code> |
| <Link id="m-m-playingpico-velocity" /><code>{"private readonly InputAction m_PlayingPico_Velocity"}</code> |
| <Link id="m-m-playingpicoactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap-iplayingpicoactions">{"InputMap.IPlayingPicoActions"}</Link>{" m_PlayingPicoActionsCallbackInterface"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-asset" /><code>{"InputActionAsset asset { get; }"}</code> | The `InputActionAsset` built from the embedded JSON. |
| <Link id="m-bindingmask" /><code>{"InputBinding? bindingMask { get; set; }"}</code> | Binding mask applied to the whole asset. |
| <Link id="m-bindings" /><code>{"IEnumerable<InputBinding> bindings { get; }"}</code> | Every binding in the asset. |
| <Link id="m-controlschemes" /><code>{"ReadOnlyArray<InputControlScheme> controlSchemes { get; }"}</code> | The asset's control schemes (none are defined). |
| <Link id="m-devices" /><code>{"ReadOnlyArray<InputDevice>? devices { get; set; }"}</code> | Devices the asset is limited to, or null for all. |
| <Link id="m-playing" /><code><Link to="/game-api/types/global-i-l/inputmap-playingactions">{"InputMap.PlayingActions"}</Link>{" Playing { get; }"}</code> | The main map, with bindings per controller type (Oculus Touch, Vive, WMR, Index). |
| <Link id="m-playingbase" /><code><Link to="/game-api/types/global-i-l/inputmap-playingbaseactions">{"InputMap.PlayingBaseActions"}</Link>{" PlayingBase { get; }"}</code> | A smaller map with per-device bindings and a single `DirectionInput` stick action. |
| <Link id="m-playinggeneric" /><code><Link to="/game-api/types/global-i-l/inputmap-playinggenericactions">{"InputMap.PlayingGenericActions"}</Link>{" PlayingGeneric { get; }"}</code> | Map bound to the generic XR controller layout. |
| <Link id="m-playingpico" /><code><Link to="/game-api/types/global-i-l/inputmap-playingpicoactions">{"InputMap.PlayingPicoActions"}</Link>{" PlayingPico { get; }"}</code> | Map for Pico, like the generic one but reading the trigger from the Pico controller. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(InputAction action)"}</code> | True if the action belongs to this asset. |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Disables every action in every map. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Destroys the underlying input actions asset. |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Enables every action in every map. |
| <Link id="m-findaction" /><code>{"InputAction FindAction(string actionNameOrId, bool throwIfNotFound = false)"}</code> | Finds an action by name or id across all maps. |
| <Link id="m-findbinding" /><code>{"int FindBinding(InputBinding bindingMask, out InputAction action)"}</code> | Finds the first binding matching a mask and returns its index and action. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<InputAction> GetEnumerator()"}</code> | Enumerates every action in the asset. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Enumerates every action in the asset. |

</details>

## Used in

Members of other types that take, return or hold a `InputMap`:

[`InputMap.PlayingActions.m_Wrapper`](/game-api/types/global-i-l/inputmap-playingactions#m-m-wrapper), [`InputMap.PlayingActions.PlayingActions`](/game-api/types/global-i-l/inputmap-playingactions#m-ctor), [`InputMap.PlayingBaseActions.m_Wrapper`](/game-api/types/global-i-l/inputmap-playingbaseactions#m-m-wrapper), [`InputMap.PlayingBaseActions.PlayingBaseActions`](/game-api/types/global-i-l/inputmap-playingbaseactions#m-ctor), [`InputMap.PlayingGenericActions.m_Wrapper`](/game-api/types/global-i-l/inputmap-playinggenericactions#m-m-wrapper), [`InputMap.PlayingGenericActions.PlayingGenericActions`](/game-api/types/global-i-l/inputmap-playinggenericactions#m-ctor), [`InputMap.PlayingPicoActions.m_Wrapper`](/game-api/types/global-i-l/inputmap-playingpicoactions#m-m-wrapper), [`InputMap.PlayingPicoActions.PlayingPicoActions`](/game-api/types/global-i-l/inputmap-playingpicoactions#m-ctor), [`OpenXRInputController.inputMap`](/game-api/types/global-m-o/openxrinputcontroller#m-inputmap).
