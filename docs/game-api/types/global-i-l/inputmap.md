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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputMap()"}</code> | Creates an `InputMap` with default values. |

## Fields

<details>
<summary>91 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-m-playing" /><code>{"private readonly InputActionMap m_Playing"}</code> | The `Playing` action map, looked up from the asset in the constructor. |
| <Link id="m-m-playing-angularvelocity" /><code>{"private readonly InputAction m_Playing_AngularVelocity"}</code> | Cached `AngularVelocity` action from the `Playing` map. Read it through `Playing.AngularVelocity`. |
| <Link id="m-m-playing-assistgrab" /><code>{"private readonly InputAction m_Playing_AssistGrab"}</code> | Cached `AssistGrab` action from the `Playing` map. Read it through `Playing.AssistGrab`. |
| <Link id="m-m-playing-gestures" /><code>{"private readonly InputAction m_Playing_Gestures"}</code> | Cached `Gestures` action from the `Playing` map. Read it through `Playing.Gestures`. |
| <Link id="m-m-playing-grabstrength" /><code>{"private readonly InputAction m_Playing_GrabStrength"}</code> | Cached `GrabStrength` action from the `Playing` map. Read it through `Playing.GrabStrength`. |
| <Link id="m-m-playing-interact" /><code>{"private readonly InputAction m_Playing_Interact"}</code> | Cached `Interact` action from the `Playing` map. Read it through `Playing.Interact`. |
| <Link id="m-m-playing-joystickdpad" /><code>{"private readonly InputAction m_Playing_JoystickDpad"}</code> | Cached `JoystickDpad` action from the `Playing` map. Read it through `Playing.JoystickDpad`. |
| <Link id="m-m-playing-metamenu" /><code>{"private readonly InputAction m_Playing_MetaMenu"}</code> | Cached `MetaMenu` action from the `Playing` map. Read it through `Playing.MetaMenu`. |
| <Link id="m-m-playing-pose" /><code>{"private readonly InputAction m_Playing_Pose"}</code> | Cached `Pose` action from the `Playing` map. Read it through `Playing.Pose`. |
| <Link id="m-m-playing-position" /><code>{"private readonly InputAction m_Playing_Position"}</code> | Cached `Position` action from the `Playing` map. Read it through `Playing.Position`. |
| <Link id="m-m-playing-releasetogglegrab" /><code>{"private readonly InputAction m_Playing_ReleaseToggleGrab"}</code> | Cached `ReleaseToggleGrab` action from the `Playing` map. Read it through `Playing.ReleaseToggleGrab`. |
| <Link id="m-m-playing-rotation" /><code>{"private readonly InputAction m_Playing_Rotation"}</code> | Cached `Rotation` action from the `Playing` map. Read it through `Playing.Rotation`. |
| <Link id="m-m-playing-smoothlocomotion" /><code>{"private readonly InputAction m_Playing_SmoothLocomotion"}</code> | Cached `SmoothLocomotion` action from the `Playing` map. Read it through `Playing.SmoothLocomotion`. |
| <Link id="m-m-playing-smoothrotation" /><code>{"private readonly InputAction m_Playing_SmoothRotation"}</code> | Cached `SmoothRotation` action from the `Playing` map. Read it through `Playing.SmoothRotation`. |
| <Link id="m-m-playing-squeeze" /><code>{"private readonly InputAction m_Playing_Squeeze"}</code> | Cached `Squeeze` action from the `Playing` map. Read it through `Playing.Squeeze`. |
| <Link id="m-m-playing-swipemotion" /><code>{"private readonly InputAction m_Playing_SwipeMotion"}</code> | Cached `SwipeMotion` action from the `Playing` map. Read it through `Playing.SwipeMotion`. |
| <Link id="m-m-playing-swipetouch" /><code>{"private readonly InputAction m_Playing_SwipeTouch"}</code> | Cached `SwipeTouch` action from the `Playing` map. Read it through `Playing.SwipeTouch`. |
| <Link id="m-m-playing-takescreenshotlong" /><code>{"private readonly InputAction m_Playing_TakeScreenShotLong"}</code> | Cached `TakeScreenShotLong` action from the `Playing` map. Read it through `Playing.TakeScreenShotLong`. |
| <Link id="m-m-playing-teleport" /><code>{"private readonly InputAction m_Playing_Teleport"}</code> | Cached `Teleport` action from the `Playing` map. Read it through `Playing.Teleport`. |
| <Link id="m-m-playing-togglegrab" /><code>{"private readonly InputAction m_Playing_ToggleGrab"}</code> | Cached `ToggleGrab` action from the `Playing` map. Read it through `Playing.ToggleGrab`. |
| <Link id="m-m-playing-togglerun" /><code>{"private readonly InputAction m_Playing_ToggleRun"}</code> | Cached `ToggleRun` action from the `Playing` map. Read it through `Playing.ToggleRun`. |
| <Link id="m-m-playing-touchingindexaxis" /><code>{"private readonly InputAction m_Playing_TouchingIndexAxis"}</code> | Cached `TouchingIndexAxis` action from the `Playing` map. Read it through `Playing.TouchingIndexAxis`. |
| <Link id="m-m-playing-touchingthumb" /><code>{"private readonly InputAction m_Playing_TouchingThumb"}</code> | Cached `TouchingThumb` action from the `Playing` map. Read it through `Playing.TouchingThumb`. |
| <Link id="m-m-playing-touchingtriggerbutton" /><code>{"private readonly InputAction m_Playing_TouchingTriggerButton"}</code> | Cached `TouchingTriggerButton` action from the `Playing` map. Read it through `Playing.TouchingTriggerButton`. |
| <Link id="m-m-playing-triggeraxis" /><code>{"private readonly InputAction m_Playing_TriggerAxis"}</code> | Cached `TriggerAxis` action from the `Playing` map. Read it through `Playing.TriggerAxis`. |
| <Link id="m-m-playing-velocity" /><code>{"private readonly InputAction m_Playing_Velocity"}</code> | Cached `Velocity` action from the `Playing` map. Read it through `Playing.Velocity`. |
| <Link id="m-m-playingactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap-iplayingactions">{"InputMap.IPlayingActions"}</Link>{" m_PlayingActionsCallbackInterface"}</code> | The callback object last passed to `Playing.SetCallbacks`, so it can be unhooked when replaced. |
| <Link id="m-m-playingbase" /><code>{"private readonly InputActionMap m_PlayingBase"}</code> | The `PlayingBase` action map, looked up from the asset in the constructor. |
| <Link id="m-m-playingbase-angularvelocity" /><code>{"private readonly InputAction m_PlayingBase_AngularVelocity"}</code> | Cached `AngularVelocity` action from the `PlayingBase` map. Read it through `PlayingBase.AngularVelocity`. |
| <Link id="m-m-playingbase-directioninput" /><code>{"private readonly InputAction m_PlayingBase_DirectionInput"}</code> | Cached `DirectionInput` action from the `PlayingBase` map. Read it through `PlayingBase.DirectionInput`. |
| <Link id="m-m-playingbase-grabstrength" /><code>{"private readonly InputAction m_PlayingBase_GrabStrength"}</code> | Cached `GrabStrength` action from the `PlayingBase` map. Read it through `PlayingBase.GrabStrength`. |
| <Link id="m-m-playingbase-interact" /><code>{"private readonly InputAction m_PlayingBase_Interact"}</code> | Cached `Interact` action from the `PlayingBase` map. Read it through `PlayingBase.Interact`. |
| <Link id="m-m-playingbase-metamenu" /><code>{"private readonly InputAction m_PlayingBase_MetaMenu"}</code> | Cached `MetaMenu` action from the `PlayingBase` map. Read it through `PlayingBase.MetaMenu`. |
| <Link id="m-m-playingbase-pose" /><code>{"private readonly InputAction m_PlayingBase_Pose"}</code> | Cached `Pose` action from the `PlayingBase` map. Read it through `PlayingBase.Pose`. |
| <Link id="m-m-playingbase-position" /><code>{"private readonly InputAction m_PlayingBase_Position"}</code> | Cached `Position` action from the `PlayingBase` map. Read it through `PlayingBase.Position`. |
| <Link id="m-m-playingbase-rotation" /><code>{"private readonly InputAction m_PlayingBase_Rotation"}</code> | Cached `Rotation` action from the `PlayingBase` map. Read it through `PlayingBase.Rotation`. |
| <Link id="m-m-playingbase-secondaryinteract" /><code>{"private readonly InputAction m_PlayingBase_SecondaryInteract"}</code> | Cached `SecondaryInteract` action from the `PlayingBase` map. Read it through `PlayingBase.SecondaryInteract`. |
| <Link id="m-m-playingbase-squeeze" /><code>{"private readonly InputAction m_PlayingBase_Squeeze"}</code> | Cached `Squeeze` action from the `PlayingBase` map. Read it through `PlayingBase.Squeeze`. |
| <Link id="m-m-playingbase-takescreenshotlong" /><code>{"private readonly InputAction m_PlayingBase_TakeScreenShotLong"}</code> | Cached `TakeScreenShotLong` action from the `PlayingBase` map. Read it through `PlayingBase.TakeScreenShotLong`. |
| <Link id="m-m-playingbase-teleport" /><code>{"private readonly InputAction m_PlayingBase_Teleport"}</code> | Cached `Teleport` action from the `PlayingBase` map. Read it through `PlayingBase.Teleport`. |
| <Link id="m-m-playingbase-togglerun" /><code>{"private readonly InputAction m_PlayingBase_ToggleRun"}</code> | Cached `ToggleRun` action from the `PlayingBase` map. Read it through `PlayingBase.ToggleRun`. |
| <Link id="m-m-playingbase-touchingindexaxis" /><code>{"private readonly InputAction m_PlayingBase_TouchingIndexAxis"}</code> | Cached `TouchingIndexAxis` action from the `PlayingBase` map. Read it through `PlayingBase.TouchingIndexAxis`. |
| <Link id="m-m-playingbase-touchingthumb" /><code>{"private readonly InputAction m_PlayingBase_TouchingThumb"}</code> | Cached `TouchingThumb` action from the `PlayingBase` map. Read it through `PlayingBase.TouchingThumb`. |
| <Link id="m-m-playingbase-touchingtriggerbutton" /><code>{"private readonly InputAction m_PlayingBase_TouchingTriggerButton"}</code> | Cached `TouchingTriggerButton` action from the `PlayingBase` map. Read it through `PlayingBase.TouchingTriggerButton`. |
| <Link id="m-m-playingbase-triggeraxis" /><code>{"private readonly InputAction m_PlayingBase_TriggerAxis"}</code> | Cached `TriggerAxis` action from the `PlayingBase` map. Read it through `PlayingBase.TriggerAxis`. |
| <Link id="m-m-playingbase-velocity" /><code>{"private readonly InputAction m_PlayingBase_Velocity"}</code> | Cached `Velocity` action from the `PlayingBase` map. Read it through `PlayingBase.Velocity`. |
| <Link id="m-m-playingbaseactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap-iplayingbaseactions">{"InputMap.IPlayingBaseActions"}</Link>{" m_PlayingBaseActionsCallbackInterface"}</code> | The callback object last passed to `PlayingBase.SetCallbacks`, so it can be unhooked when replaced. |
| <Link id="m-m-playinggeneric" /><code>{"private readonly InputActionMap m_PlayingGeneric"}</code> | The `PlayingGeneric` action map, looked up from the asset in the constructor. |
| <Link id="m-m-playinggeneric-angularvelocity" /><code>{"private readonly InputAction m_PlayingGeneric_AngularVelocity"}</code> | Cached `AngularVelocity` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.AngularVelocity`. |
| <Link id="m-m-playinggeneric-assistgrab" /><code>{"private readonly InputAction m_PlayingGeneric_AssistGrab"}</code> | Cached `AssistGrab` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.AssistGrab`. |
| <Link id="m-m-playinggeneric-gestures" /><code>{"private readonly InputAction m_PlayingGeneric_Gestures"}</code> | Cached `Gestures` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Gestures`. |
| <Link id="m-m-playinggeneric-interact" /><code>{"private readonly InputAction m_PlayingGeneric_Interact"}</code> | Cached `Interact` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Interact`. |
| <Link id="m-m-playinggeneric-metamenu" /><code>{"private readonly InputAction m_PlayingGeneric_MetaMenu"}</code> | Cached `MetaMenu` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.MetaMenu`. |
| <Link id="m-m-playinggeneric-pose" /><code>{"private readonly InputAction m_PlayingGeneric_Pose"}</code> | Cached `Pose` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Pose`. |
| <Link id="m-m-playinggeneric-position" /><code>{"private readonly InputAction m_PlayingGeneric_Position"}</code> | Cached `Position` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Position`. |
| <Link id="m-m-playinggeneric-releasetogglegrab" /><code>{"private readonly InputAction m_PlayingGeneric_ReleaseToggleGrab"}</code> | Cached `ReleaseToggleGrab` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.ReleaseToggleGrab`. |
| <Link id="m-m-playinggeneric-rotation" /><code>{"private readonly InputAction m_PlayingGeneric_Rotation"}</code> | Cached `Rotation` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Rotation`. |
| <Link id="m-m-playinggeneric-smoothlocomotion" /><code>{"private readonly InputAction m_PlayingGeneric_SmoothLocomotion"}</code> | Cached `SmoothLocomotion` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.SmoothLocomotion`. |
| <Link id="m-m-playinggeneric-smoothrotation" /><code>{"private readonly InputAction m_PlayingGeneric_SmoothRotation"}</code> | Cached `SmoothRotation` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.SmoothRotation`. |
| <Link id="m-m-playinggeneric-squeeze" /><code>{"private readonly InputAction m_PlayingGeneric_Squeeze"}</code> | Cached `Squeeze` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Squeeze`. |
| <Link id="m-m-playinggeneric-takescreenshotlong" /><code>{"private readonly InputAction m_PlayingGeneric_TakeScreenShotLong"}</code> | Cached `TakeScreenShotLong` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.TakeScreenShotLong`. |
| <Link id="m-m-playinggeneric-teleport" /><code>{"private readonly InputAction m_PlayingGeneric_Teleport"}</code> | Cached `Teleport` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Teleport`. |
| <Link id="m-m-playinggeneric-togglegrab" /><code>{"private readonly InputAction m_PlayingGeneric_ToggleGrab"}</code> | Cached `ToggleGrab` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.ToggleGrab`. |
| <Link id="m-m-playinggeneric-togglerun" /><code>{"private readonly InputAction m_PlayingGeneric_ToggleRun"}</code> | Cached `ToggleRun` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.ToggleRun`. |
| <Link id="m-m-playinggeneric-touchingthumb" /><code>{"private readonly InputAction m_PlayingGeneric_TouchingThumb"}</code> | Cached `TouchingThumb` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.TouchingThumb`. |
| <Link id="m-m-playinggeneric-touchingtriggerbutton" /><code>{"private readonly InputAction m_PlayingGeneric_TouchingTriggerButton"}</code> | Cached `TouchingTriggerButton` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.TouchingTriggerButton`. |
| <Link id="m-m-playinggeneric-triggeraxis" /><code>{"private readonly InputAction m_PlayingGeneric_TriggerAxis"}</code> | Cached `TriggerAxis` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.TriggerAxis`. |
| <Link id="m-m-playinggeneric-velocity" /><code>{"private readonly InputAction m_PlayingGeneric_Velocity"}</code> | Cached `Velocity` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Velocity`. |
| <Link id="m-m-playinggenericactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap-iplayinggenericactions">{"InputMap.IPlayingGenericActions"}</Link>{" m_PlayingGenericActionsCallbackInterface"}</code> | The callback object last passed to `PlayingGeneric.SetCallbacks`, so it can be unhooked when replaced. |
| <Link id="m-m-playingpico" /><code>{"private readonly InputActionMap m_PlayingPico"}</code> | The `PlayingPico` action map, looked up from the asset in the constructor. |
| <Link id="m-m-playingpico-angularvelocity" /><code>{"private readonly InputAction m_PlayingPico_AngularVelocity"}</code> | Cached `AngularVelocity` action from the `PlayingPico` map. Read it through `PlayingPico.AngularVelocity`. |
| <Link id="m-m-playingpico-gestures" /><code>{"private readonly InputAction m_PlayingPico_Gestures"}</code> | Cached `Gestures` action from the `PlayingPico` map. Read it through `PlayingPico.Gestures`. |
| <Link id="m-m-playingpico-interact" /><code>{"private readonly InputAction m_PlayingPico_Interact"}</code> | Cached `Interact` action from the `PlayingPico` map. Read it through `PlayingPico.Interact`. |
| <Link id="m-m-playingpico-metamenu" /><code>{"private readonly InputAction m_PlayingPico_MetaMenu"}</code> | Cached `MetaMenu` action from the `PlayingPico` map. Read it through `PlayingPico.MetaMenu`. |
| <Link id="m-m-playingpico-picoassistgrab" /><code>{"private readonly InputAction m_PlayingPico_PicoAssistGrab"}</code> | Cached `PicoAssistGrab` action from the `PlayingPico` map. Read it through `PlayingPico.PicoAssistGrab`. |
| <Link id="m-m-playingpico-pose" /><code>{"private readonly InputAction m_PlayingPico_Pose"}</code> | Cached `Pose` action from the `PlayingPico` map. Read it through `PlayingPico.Pose`. |
| <Link id="m-m-playingpico-position" /><code>{"private readonly InputAction m_PlayingPico_Position"}</code> | Cached `Position` action from the `PlayingPico` map. Read it through `PlayingPico.Position`. |
| <Link id="m-m-playingpico-releasetogglegrab" /><code>{"private readonly InputAction m_PlayingPico_ReleaseToggleGrab"}</code> | Cached `ReleaseToggleGrab` action from the `PlayingPico` map. Read it through `PlayingPico.ReleaseToggleGrab`. |
| <Link id="m-m-playingpico-rotation" /><code>{"private readonly InputAction m_PlayingPico_Rotation"}</code> | Cached `Rotation` action from the `PlayingPico` map. Read it through `PlayingPico.Rotation`. |
| <Link id="m-m-playingpico-smoothlocomotion" /><code>{"private readonly InputAction m_PlayingPico_SmoothLocomotion"}</code> | Cached `SmoothLocomotion` action from the `PlayingPico` map. Read it through `PlayingPico.SmoothLocomotion`. |
| <Link id="m-m-playingpico-smoothrotation" /><code>{"private readonly InputAction m_PlayingPico_SmoothRotation"}</code> | Cached `SmoothRotation` action from the `PlayingPico` map. Read it through `PlayingPico.SmoothRotation`. |
| <Link id="m-m-playingpico-squeeze" /><code>{"private readonly InputAction m_PlayingPico_Squeeze"}</code> | Cached `Squeeze` action from the `PlayingPico` map. Read it through `PlayingPico.Squeeze`. |
| <Link id="m-m-playingpico-takescreenshotlong" /><code>{"private readonly InputAction m_PlayingPico_TakeScreenShotLong"}</code> | Cached `TakeScreenShotLong` action from the `PlayingPico` map. Read it through `PlayingPico.TakeScreenShotLong`. |
| <Link id="m-m-playingpico-teleport" /><code>{"private readonly InputAction m_PlayingPico_Teleport"}</code> | Cached `Teleport` action from the `PlayingPico` map. Read it through `PlayingPico.Teleport`. |
| <Link id="m-m-playingpico-togglegrab" /><code>{"private readonly InputAction m_PlayingPico_ToggleGrab"}</code> | Cached `ToggleGrab` action from the `PlayingPico` map. Read it through `PlayingPico.ToggleGrab`. |
| <Link id="m-m-playingpico-togglerun" /><code>{"private readonly InputAction m_PlayingPico_ToggleRun"}</code> | Cached `ToggleRun` action from the `PlayingPico` map. Read it through `PlayingPico.ToggleRun`. |
| <Link id="m-m-playingpico-touchingthumb" /><code>{"private readonly InputAction m_PlayingPico_TouchingThumb"}</code> | Cached `TouchingThumb` action from the `PlayingPico` map. Read it through `PlayingPico.TouchingThumb`. |
| <Link id="m-m-playingpico-touchingtriggerbutton" /><code>{"private readonly InputAction m_PlayingPico_TouchingTriggerButton"}</code> | Cached `TouchingTriggerButton` action from the `PlayingPico` map. Read it through `PlayingPico.TouchingTriggerButton`. |
| <Link id="m-m-playingpico-triggeraxis" /><code>{"private readonly InputAction m_PlayingPico_TriggerAxis"}</code> | Cached `TriggerAxis` action from the `PlayingPico` map. Read it through `PlayingPico.TriggerAxis`. |
| <Link id="m-m-playingpico-velocity" /><code>{"private readonly InputAction m_PlayingPico_Velocity"}</code> | Cached `Velocity` action from the `PlayingPico` map. Read it through `PlayingPico.Velocity`. |
| <Link id="m-m-playingpicoactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap-iplayingpicoactions">{"InputMap.IPlayingPicoActions"}</Link>{" m_PlayingPicoActionsCallbackInterface"}</code> | The callback object last passed to `PlayingPico.SetCallbacks`, so it can be unhooked when replaced. |

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
