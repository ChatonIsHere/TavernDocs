---
title: "InputMap"
description: "Unity Input System wrapper generated from the game's input actions asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap

A **class** in `Root.Township`, the global namespace.

Unity Input System wrapper generated from the game's input actions asset. It has four action maps: `Playing` (per-device bindings for Oculus, Vive, WMR and Index), `PlayingBase`, `PlayingGeneric` (generic XR controller) and `PlayingPico`. The OpenXR input controller holds one shared instance.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `IInputActionCollection2`, `IInputActionCollection`, `IEnumerable<InputAction>`, `IEnumerable`, `IDisposable`
- **Nested types** [`IPlayingActions`](/mod/game-api/types/global-i-l/inputmap-iplayingactions), [`IPlayingBaseActions`](/mod/game-api/types/global-i-l/inputmap-iplayingbaseactions), [`IPlayingGenericActions`](/mod/game-api/types/global-i-l/inputmap-iplayinggenericactions), [`IPlayingPicoActions`](/mod/game-api/types/global-i-l/inputmap-iplayingpicoactions), [`PlayingActions`](/mod/game-api/types/global-i-l/inputmap-playingactions), [`PlayingBaseActions`](/mod/game-api/types/global-i-l/inputmap-playingbaseactions), [`PlayingGenericActions`](/mod/game-api/types/global-i-l/inputmap-playinggenericactions), [`PlayingPicoActions`](/mod/game-api/types/global-i-l/inputmap-playingpicoactions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InputMap()"}</code> | <span className="api-desc">Creates an `InputMap` with default values.</span> |

## Fields

<details className="api-private">
<summary>91 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-m-playing" /><code>{"private readonly InputActionMap m_Playing"}</code> | <span className="api-desc">The `Playing` action map, looked up from the asset in the constructor.</span> |
| <Link id="m-m-playing-angularvelocity" /><code>{"private readonly InputAction m_Playing_AngularVelocity"}</code> | <span className="api-desc">Cached `AngularVelocity` action from the `Playing` map. Read it through `Playing.AngularVelocity`.</span> |
| <Link id="m-m-playing-assistgrab" /><code>{"private readonly InputAction m_Playing_AssistGrab"}</code> | <span className="api-desc">Cached `AssistGrab` action from the `Playing` map. Read it through `Playing.AssistGrab`.</span> |
| <Link id="m-m-playing-gestures" /><code>{"private readonly InputAction m_Playing_Gestures"}</code> | <span className="api-desc">Cached `Gestures` action from the `Playing` map. Read it through `Playing.Gestures`.</span> |
| <Link id="m-m-playing-grabstrength" /><code>{"private readonly InputAction m_Playing_GrabStrength"}</code> | <span className="api-desc">Cached `GrabStrength` action from the `Playing` map. Read it through `Playing.GrabStrength`.</span> |
| <Link id="m-m-playing-interact" /><code>{"private readonly InputAction m_Playing_Interact"}</code> | <span className="api-desc">Cached `Interact` action from the `Playing` map. Read it through `Playing.Interact`.</span> |
| <Link id="m-m-playing-joystickdpad" /><code>{"private readonly InputAction m_Playing_JoystickDpad"}</code> | <span className="api-desc">Cached `JoystickDpad` action from the `Playing` map. Read it through `Playing.JoystickDpad`.</span> |
| <Link id="m-m-playing-metamenu" /><code>{"private readonly InputAction m_Playing_MetaMenu"}</code> | <span className="api-desc">Cached `MetaMenu` action from the `Playing` map. Read it through `Playing.MetaMenu`.</span> |
| <Link id="m-m-playing-pose" /><code>{"private readonly InputAction m_Playing_Pose"}</code> | <span className="api-desc">Cached `Pose` action from the `Playing` map. Read it through `Playing.Pose`.</span> |
| <Link id="m-m-playing-position" /><code>{"private readonly InputAction m_Playing_Position"}</code> | <span className="api-desc">Cached `Position` action from the `Playing` map. Read it through `Playing.Position`.</span> |
| <Link id="m-m-playing-releasetogglegrab" /><code>{"private readonly InputAction m_Playing_ReleaseToggleGrab"}</code> | <span className="api-desc">Cached `ReleaseToggleGrab` action from the `Playing` map. Read it through `Playing.ReleaseToggleGrab`.</span> |
| <Link id="m-m-playing-rotation" /><code>{"private readonly InputAction m_Playing_Rotation"}</code> | <span className="api-desc">Cached `Rotation` action from the `Playing` map. Read it through `Playing.Rotation`.</span> |
| <Link id="m-m-playing-smoothlocomotion" /><code>{"private readonly InputAction m_Playing_SmoothLocomotion"}</code> | <span className="api-desc">Cached `SmoothLocomotion` action from the `Playing` map. Read it through `Playing.SmoothLocomotion`.</span> |
| <Link id="m-m-playing-smoothrotation" /><code>{"private readonly InputAction m_Playing_SmoothRotation"}</code> | <span className="api-desc">Cached `SmoothRotation` action from the `Playing` map. Read it through `Playing.SmoothRotation`.</span> |
| <Link id="m-m-playing-squeeze" /><code>{"private readonly InputAction m_Playing_Squeeze"}</code> | <span className="api-desc">Cached `Squeeze` action from the `Playing` map. Read it through `Playing.Squeeze`.</span> |
| <Link id="m-m-playing-swipemotion" /><code>{"private readonly InputAction m_Playing_SwipeMotion"}</code> | <span className="api-desc">Cached `SwipeMotion` action from the `Playing` map. Read it through `Playing.SwipeMotion`.</span> |
| <Link id="m-m-playing-swipetouch" /><code>{"private readonly InputAction m_Playing_SwipeTouch"}</code> | <span className="api-desc">Cached `SwipeTouch` action from the `Playing` map. Read it through `Playing.SwipeTouch`.</span> |
| <Link id="m-m-playing-takescreenshotlong" /><code>{"private readonly InputAction m_Playing_TakeScreenShotLong"}</code> | <span className="api-desc">Cached `TakeScreenShotLong` action from the `Playing` map. Read it through `Playing.TakeScreenShotLong`.</span> |
| <Link id="m-m-playing-teleport" /><code>{"private readonly InputAction m_Playing_Teleport"}</code> | <span className="api-desc">Cached `Teleport` action from the `Playing` map. Read it through `Playing.Teleport`.</span> |
| <Link id="m-m-playing-togglegrab" /><code>{"private readonly InputAction m_Playing_ToggleGrab"}</code> | <span className="api-desc">Cached `ToggleGrab` action from the `Playing` map. Read it through `Playing.ToggleGrab`.</span> |
| <Link id="m-m-playing-togglerun" /><code>{"private readonly InputAction m_Playing_ToggleRun"}</code> | <span className="api-desc">Cached `ToggleRun` action from the `Playing` map. Read it through `Playing.ToggleRun`.</span> |
| <Link id="m-m-playing-touchingindexaxis" /><code>{"private readonly InputAction m_Playing_TouchingIndexAxis"}</code> | <span className="api-desc">Cached `TouchingIndexAxis` action from the `Playing` map. Read it through `Playing.TouchingIndexAxis`.</span> |
| <Link id="m-m-playing-touchingthumb" /><code>{"private readonly InputAction m_Playing_TouchingThumb"}</code> | <span className="api-desc">Cached `TouchingThumb` action from the `Playing` map. Read it through `Playing.TouchingThumb`.</span> |
| <Link id="m-m-playing-touchingtriggerbutton" /><code>{"private readonly InputAction m_Playing_TouchingTriggerButton"}</code> | <span className="api-desc">Cached `TouchingTriggerButton` action from the `Playing` map. Read it through `Playing.TouchingTriggerButton`.</span> |
| <Link id="m-m-playing-triggeraxis" /><code>{"private readonly InputAction m_Playing_TriggerAxis"}</code> | <span className="api-desc">Cached `TriggerAxis` action from the `Playing` map. Read it through `Playing.TriggerAxis`.</span> |
| <Link id="m-m-playing-velocity" /><code>{"private readonly InputAction m_Playing_Velocity"}</code> | <span className="api-desc">Cached `Velocity` action from the `Playing` map. Read it through `Playing.Velocity`.</span> |
| <Link id="m-m-playingactionscallbackinterface" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/inputmap-iplayingactions">{"InputMap.IPlayingActions"}</Link>{" m_PlayingActionsCallbackInterface"}</code> | <span className="api-desc">The callback object last passed to `Playing.SetCallbacks`, so it can be unhooked when replaced.</span> |
| <Link id="m-m-playingbase" /><code>{"private readonly InputActionMap m_PlayingBase"}</code> | <span className="api-desc">The `PlayingBase` action map, looked up from the asset in the constructor.</span> |
| <Link id="m-m-playingbase-angularvelocity" /><code>{"private readonly InputAction m_PlayingBase_AngularVelocity"}</code> | <span className="api-desc">Cached `AngularVelocity` action from the `PlayingBase` map. Read it through `PlayingBase.AngularVelocity`.</span> |
| <Link id="m-m-playingbase-directioninput" /><code>{"private readonly InputAction m_PlayingBase_DirectionInput"}</code> | <span className="api-desc">Cached `DirectionInput` action from the `PlayingBase` map. Read it through `PlayingBase.DirectionInput`.</span> |
| <Link id="m-m-playingbase-grabstrength" /><code>{"private readonly InputAction m_PlayingBase_GrabStrength"}</code> | <span className="api-desc">Cached `GrabStrength` action from the `PlayingBase` map. Read it through `PlayingBase.GrabStrength`.</span> |
| <Link id="m-m-playingbase-interact" /><code>{"private readonly InputAction m_PlayingBase_Interact"}</code> | <span className="api-desc">Cached `Interact` action from the `PlayingBase` map. Read it through `PlayingBase.Interact`.</span> |
| <Link id="m-m-playingbase-metamenu" /><code>{"private readonly InputAction m_PlayingBase_MetaMenu"}</code> | <span className="api-desc">Cached `MetaMenu` action from the `PlayingBase` map. Read it through `PlayingBase.MetaMenu`.</span> |
| <Link id="m-m-playingbase-pose" /><code>{"private readonly InputAction m_PlayingBase_Pose"}</code> | <span className="api-desc">Cached `Pose` action from the `PlayingBase` map. Read it through `PlayingBase.Pose`.</span> |
| <Link id="m-m-playingbase-position" /><code>{"private readonly InputAction m_PlayingBase_Position"}</code> | <span className="api-desc">Cached `Position` action from the `PlayingBase` map. Read it through `PlayingBase.Position`.</span> |
| <Link id="m-m-playingbase-rotation" /><code>{"private readonly InputAction m_PlayingBase_Rotation"}</code> | <span className="api-desc">Cached `Rotation` action from the `PlayingBase` map. Read it through `PlayingBase.Rotation`.</span> |
| <Link id="m-m-playingbase-secondaryinteract" /><code>{"private readonly InputAction m_PlayingBase_SecondaryInteract"}</code> | <span className="api-desc">Cached `SecondaryInteract` action from the `PlayingBase` map. Read it through `PlayingBase.SecondaryInteract`.</span> |
| <Link id="m-m-playingbase-squeeze" /><code>{"private readonly InputAction m_PlayingBase_Squeeze"}</code> | <span className="api-desc">Cached `Squeeze` action from the `PlayingBase` map. Read it through `PlayingBase.Squeeze`.</span> |
| <Link id="m-m-playingbase-takescreenshotlong" /><code>{"private readonly InputAction m_PlayingBase_TakeScreenShotLong"}</code> | <span className="api-desc">Cached `TakeScreenShotLong` action from the `PlayingBase` map. Read it through `PlayingBase.TakeScreenShotLong`.</span> |
| <Link id="m-m-playingbase-teleport" /><code>{"private readonly InputAction m_PlayingBase_Teleport"}</code> | <span className="api-desc">Cached `Teleport` action from the `PlayingBase` map. Read it through `PlayingBase.Teleport`.</span> |
| <Link id="m-m-playingbase-togglerun" /><code>{"private readonly InputAction m_PlayingBase_ToggleRun"}</code> | <span className="api-desc">Cached `ToggleRun` action from the `PlayingBase` map. Read it through `PlayingBase.ToggleRun`.</span> |
| <Link id="m-m-playingbase-touchingindexaxis" /><code>{"private readonly InputAction m_PlayingBase_TouchingIndexAxis"}</code> | <span className="api-desc">Cached `TouchingIndexAxis` action from the `PlayingBase` map. Read it through `PlayingBase.TouchingIndexAxis`.</span> |
| <Link id="m-m-playingbase-touchingthumb" /><code>{"private readonly InputAction m_PlayingBase_TouchingThumb"}</code> | <span className="api-desc">Cached `TouchingThumb` action from the `PlayingBase` map. Read it through `PlayingBase.TouchingThumb`.</span> |
| <Link id="m-m-playingbase-touchingtriggerbutton" /><code>{"private readonly InputAction m_PlayingBase_TouchingTriggerButton"}</code> | <span className="api-desc">Cached `TouchingTriggerButton` action from the `PlayingBase` map. Read it through `PlayingBase.TouchingTriggerButton`.</span> |
| <Link id="m-m-playingbase-triggeraxis" /><code>{"private readonly InputAction m_PlayingBase_TriggerAxis"}</code> | <span className="api-desc">Cached `TriggerAxis` action from the `PlayingBase` map. Read it through `PlayingBase.TriggerAxis`.</span> |
| <Link id="m-m-playingbase-velocity" /><code>{"private readonly InputAction m_PlayingBase_Velocity"}</code> | <span className="api-desc">Cached `Velocity` action from the `PlayingBase` map. Read it through `PlayingBase.Velocity`.</span> |
| <Link id="m-m-playingbaseactionscallbackinterface" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/inputmap-iplayingbaseactions">{"InputMap.IPlayingBaseActions"}</Link>{" m_PlayingBaseActionsCallbackInterface"}</code> | <span className="api-desc">The callback object last passed to `PlayingBase.SetCallbacks`, so it can be unhooked when replaced.</span> |
| <Link id="m-m-playinggeneric" /><code>{"private readonly InputActionMap m_PlayingGeneric"}</code> | <span className="api-desc">The `PlayingGeneric` action map, looked up from the asset in the constructor.</span> |
| <Link id="m-m-playinggeneric-angularvelocity" /><code>{"private readonly InputAction m_PlayingGeneric_AngularVelocity"}</code> | <span className="api-desc">Cached `AngularVelocity` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.AngularVelocity`.</span> |
| <Link id="m-m-playinggeneric-assistgrab" /><code>{"private readonly InputAction m_PlayingGeneric_AssistGrab"}</code> | <span className="api-desc">Cached `AssistGrab` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.AssistGrab`.</span> |
| <Link id="m-m-playinggeneric-gestures" /><code>{"private readonly InputAction m_PlayingGeneric_Gestures"}</code> | <span className="api-desc">Cached `Gestures` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Gestures`.</span> |
| <Link id="m-m-playinggeneric-interact" /><code>{"private readonly InputAction m_PlayingGeneric_Interact"}</code> | <span className="api-desc">Cached `Interact` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Interact`.</span> |
| <Link id="m-m-playinggeneric-metamenu" /><code>{"private readonly InputAction m_PlayingGeneric_MetaMenu"}</code> | <span className="api-desc">Cached `MetaMenu` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.MetaMenu`.</span> |
| <Link id="m-m-playinggeneric-pose" /><code>{"private readonly InputAction m_PlayingGeneric_Pose"}</code> | <span className="api-desc">Cached `Pose` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Pose`.</span> |
| <Link id="m-m-playinggeneric-position" /><code>{"private readonly InputAction m_PlayingGeneric_Position"}</code> | <span className="api-desc">Cached `Position` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Position`.</span> |
| <Link id="m-m-playinggeneric-releasetogglegrab" /><code>{"private readonly InputAction m_PlayingGeneric_ReleaseToggleGrab"}</code> | <span className="api-desc">Cached `ReleaseToggleGrab` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.ReleaseToggleGrab`.</span> |
| <Link id="m-m-playinggeneric-rotation" /><code>{"private readonly InputAction m_PlayingGeneric_Rotation"}</code> | <span className="api-desc">Cached `Rotation` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Rotation`.</span> |
| <Link id="m-m-playinggeneric-smoothlocomotion" /><code>{"private readonly InputAction m_PlayingGeneric_SmoothLocomotion"}</code> | <span className="api-desc">Cached `SmoothLocomotion` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.SmoothLocomotion`.</span> |
| <Link id="m-m-playinggeneric-smoothrotation" /><code>{"private readonly InputAction m_PlayingGeneric_SmoothRotation"}</code> | <span className="api-desc">Cached `SmoothRotation` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.SmoothRotation`.</span> |
| <Link id="m-m-playinggeneric-squeeze" /><code>{"private readonly InputAction m_PlayingGeneric_Squeeze"}</code> | <span className="api-desc">Cached `Squeeze` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Squeeze`.</span> |
| <Link id="m-m-playinggeneric-takescreenshotlong" /><code>{"private readonly InputAction m_PlayingGeneric_TakeScreenShotLong"}</code> | <span className="api-desc">Cached `TakeScreenShotLong` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.TakeScreenShotLong`.</span> |
| <Link id="m-m-playinggeneric-teleport" /><code>{"private readonly InputAction m_PlayingGeneric_Teleport"}</code> | <span className="api-desc">Cached `Teleport` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Teleport`.</span> |
| <Link id="m-m-playinggeneric-togglegrab" /><code>{"private readonly InputAction m_PlayingGeneric_ToggleGrab"}</code> | <span className="api-desc">Cached `ToggleGrab` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.ToggleGrab`.</span> |
| <Link id="m-m-playinggeneric-togglerun" /><code>{"private readonly InputAction m_PlayingGeneric_ToggleRun"}</code> | <span className="api-desc">Cached `ToggleRun` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.ToggleRun`.</span> |
| <Link id="m-m-playinggeneric-touchingthumb" /><code>{"private readonly InputAction m_PlayingGeneric_TouchingThumb"}</code> | <span className="api-desc">Cached `TouchingThumb` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.TouchingThumb`.</span> |
| <Link id="m-m-playinggeneric-touchingtriggerbutton" /><code>{"private readonly InputAction m_PlayingGeneric_TouchingTriggerButton"}</code> | <span className="api-desc">Cached `TouchingTriggerButton` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.TouchingTriggerButton`.</span> |
| <Link id="m-m-playinggeneric-triggeraxis" /><code>{"private readonly InputAction m_PlayingGeneric_TriggerAxis"}</code> | <span className="api-desc">Cached `TriggerAxis` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.TriggerAxis`.</span> |
| <Link id="m-m-playinggeneric-velocity" /><code>{"private readonly InputAction m_PlayingGeneric_Velocity"}</code> | <span className="api-desc">Cached `Velocity` action from the `PlayingGeneric` map. Read it through `PlayingGeneric.Velocity`.</span> |
| <Link id="m-m-playinggenericactionscallbackinterface" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/inputmap-iplayinggenericactions">{"InputMap.IPlayingGenericActions"}</Link>{" m_PlayingGenericActionsCallbackInterface"}</code> | <span className="api-desc">The callback object last passed to `PlayingGeneric.SetCallbacks`, so it can be unhooked when replaced.</span> |
| <Link id="m-m-playingpico" /><code>{"private readonly InputActionMap m_PlayingPico"}</code> | <span className="api-desc">The `PlayingPico` action map, looked up from the asset in the constructor.</span> |
| <Link id="m-m-playingpico-angularvelocity" /><code>{"private readonly InputAction m_PlayingPico_AngularVelocity"}</code> | <span className="api-desc">Cached `AngularVelocity` action from the `PlayingPico` map. Read it through `PlayingPico.AngularVelocity`.</span> |
| <Link id="m-m-playingpico-gestures" /><code>{"private readonly InputAction m_PlayingPico_Gestures"}</code> | <span className="api-desc">Cached `Gestures` action from the `PlayingPico` map. Read it through `PlayingPico.Gestures`.</span> |
| <Link id="m-m-playingpico-interact" /><code>{"private readonly InputAction m_PlayingPico_Interact"}</code> | <span className="api-desc">Cached `Interact` action from the `PlayingPico` map. Read it through `PlayingPico.Interact`.</span> |
| <Link id="m-m-playingpico-metamenu" /><code>{"private readonly InputAction m_PlayingPico_MetaMenu"}</code> | <span className="api-desc">Cached `MetaMenu` action from the `PlayingPico` map. Read it through `PlayingPico.MetaMenu`.</span> |
| <Link id="m-m-playingpico-picoassistgrab" /><code>{"private readonly InputAction m_PlayingPico_PicoAssistGrab"}</code> | <span className="api-desc">Cached `PicoAssistGrab` action from the `PlayingPico` map. Read it through `PlayingPico.PicoAssistGrab`.</span> |
| <Link id="m-m-playingpico-pose" /><code>{"private readonly InputAction m_PlayingPico_Pose"}</code> | <span className="api-desc">Cached `Pose` action from the `PlayingPico` map. Read it through `PlayingPico.Pose`.</span> |
| <Link id="m-m-playingpico-position" /><code>{"private readonly InputAction m_PlayingPico_Position"}</code> | <span className="api-desc">Cached `Position` action from the `PlayingPico` map. Read it through `PlayingPico.Position`.</span> |
| <Link id="m-m-playingpico-releasetogglegrab" /><code>{"private readonly InputAction m_PlayingPico_ReleaseToggleGrab"}</code> | <span className="api-desc">Cached `ReleaseToggleGrab` action from the `PlayingPico` map. Read it through `PlayingPico.ReleaseToggleGrab`.</span> |
| <Link id="m-m-playingpico-rotation" /><code>{"private readonly InputAction m_PlayingPico_Rotation"}</code> | <span className="api-desc">Cached `Rotation` action from the `PlayingPico` map. Read it through `PlayingPico.Rotation`.</span> |
| <Link id="m-m-playingpico-smoothlocomotion" /><code>{"private readonly InputAction m_PlayingPico_SmoothLocomotion"}</code> | <span className="api-desc">Cached `SmoothLocomotion` action from the `PlayingPico` map. Read it through `PlayingPico.SmoothLocomotion`.</span> |
| <Link id="m-m-playingpico-smoothrotation" /><code>{"private readonly InputAction m_PlayingPico_SmoothRotation"}</code> | <span className="api-desc">Cached `SmoothRotation` action from the `PlayingPico` map. Read it through `PlayingPico.SmoothRotation`.</span> |
| <Link id="m-m-playingpico-squeeze" /><code>{"private readonly InputAction m_PlayingPico_Squeeze"}</code> | <span className="api-desc">Cached `Squeeze` action from the `PlayingPico` map. Read it through `PlayingPico.Squeeze`.</span> |
| <Link id="m-m-playingpico-takescreenshotlong" /><code>{"private readonly InputAction m_PlayingPico_TakeScreenShotLong"}</code> | <span className="api-desc">Cached `TakeScreenShotLong` action from the `PlayingPico` map. Read it through `PlayingPico.TakeScreenShotLong`.</span> |
| <Link id="m-m-playingpico-teleport" /><code>{"private readonly InputAction m_PlayingPico_Teleport"}</code> | <span className="api-desc">Cached `Teleport` action from the `PlayingPico` map. Read it through `PlayingPico.Teleport`.</span> |
| <Link id="m-m-playingpico-togglegrab" /><code>{"private readonly InputAction m_PlayingPico_ToggleGrab"}</code> | <span className="api-desc">Cached `ToggleGrab` action from the `PlayingPico` map. Read it through `PlayingPico.ToggleGrab`.</span> |
| <Link id="m-m-playingpico-togglerun" /><code>{"private readonly InputAction m_PlayingPico_ToggleRun"}</code> | <span className="api-desc">Cached `ToggleRun` action from the `PlayingPico` map. Read it through `PlayingPico.ToggleRun`.</span> |
| <Link id="m-m-playingpico-touchingthumb" /><code>{"private readonly InputAction m_PlayingPico_TouchingThumb"}</code> | <span className="api-desc">Cached `TouchingThumb` action from the `PlayingPico` map. Read it through `PlayingPico.TouchingThumb`.</span> |
| <Link id="m-m-playingpico-touchingtriggerbutton" /><code>{"private readonly InputAction m_PlayingPico_TouchingTriggerButton"}</code> | <span className="api-desc">Cached `TouchingTriggerButton` action from the `PlayingPico` map. Read it through `PlayingPico.TouchingTriggerButton`.</span> |
| <Link id="m-m-playingpico-triggeraxis" /><code>{"private readonly InputAction m_PlayingPico_TriggerAxis"}</code> | <span className="api-desc">Cached `TriggerAxis` action from the `PlayingPico` map. Read it through `PlayingPico.TriggerAxis`.</span> |
| <Link id="m-m-playingpico-velocity" /><code>{"private readonly InputAction m_PlayingPico_Velocity"}</code> | <span className="api-desc">Cached `Velocity` action from the `PlayingPico` map. Read it through `PlayingPico.Velocity`.</span> |
| <Link id="m-m-playingpicoactionscallbackinterface" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/inputmap-iplayingpicoactions">{"InputMap.IPlayingPicoActions"}</Link>{" m_PlayingPicoActionsCallbackInterface"}</code> | <span className="api-desc">The callback object last passed to `PlayingPico.SetCallbacks`, so it can be unhooked when replaced.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-asset" /><code>{"InputActionAsset asset { get; }"}</code> | <span className="api-desc">The `InputActionAsset` built from the embedded JSON.</span> |
| <Link id="m-bindingmask" /><code>{"InputBinding? bindingMask { get; set; }"}</code> | <span className="api-desc">Binding mask applied to the whole asset.</span> |
| <Link id="m-bindings" /><code>{"IEnumerable<InputBinding> bindings { get; }"}</code> | <span className="api-desc">Every binding in the asset.</span> |
| <Link id="m-controlschemes" /><code>{"ReadOnlyArray<InputControlScheme> controlSchemes { get; }"}</code> | <span className="api-desc">The asset's control schemes (none are defined).</span> |
| <Link id="m-devices" /><code>{"ReadOnlyArray<InputDevice>? devices { get; set; }"}</code> | <span className="api-desc">Devices the asset is limited to, or null for all.</span> |
| <Link id="m-playing" /><code><Link to="/mod/game-api/types/global-i-l/inputmap-playingactions">{"InputMap.PlayingActions"}</Link>{" Playing { get; }"}</code> | <span className="api-desc">The main map, with bindings per controller type (Oculus Touch, Vive, WMR, Index).</span> |
| <Link id="m-playingbase" /><code><Link to="/mod/game-api/types/global-i-l/inputmap-playingbaseactions">{"InputMap.PlayingBaseActions"}</Link>{" PlayingBase { get; }"}</code> | <span className="api-desc">A smaller map with per-device bindings and a single `DirectionInput` stick action.</span> |
| <Link id="m-playinggeneric" /><code><Link to="/mod/game-api/types/global-i-l/inputmap-playinggenericactions">{"InputMap.PlayingGenericActions"}</Link>{" PlayingGeneric { get; }"}</code> | <span className="api-desc">Map bound to the generic XR controller layout.</span> |
| <Link id="m-playingpico" /><code><Link to="/mod/game-api/types/global-i-l/inputmap-playingpicoactions">{"InputMap.PlayingPicoActions"}</Link>{" PlayingPico { get; }"}</code> | <span className="api-desc">Map for Pico, like the generic one but reading the trigger from the Pico controller.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(InputAction action)"}</code> | <span className="api-desc">True if the action belongs to this asset.</span> |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Disables every action in every map.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Destroys the underlying input actions asset.</span> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | <span className="api-desc">Enables every action in every map.</span> |
| <Link id="m-findaction" /><code>{"InputAction FindAction(string actionNameOrId, bool throwIfNotFound = false)"}</code> | <span className="api-desc">Finds an action by name or id across all maps.</span> |
| <Link id="m-findbinding" /><code>{"int FindBinding(InputBinding bindingMask, out InputAction action)"}</code> | <span className="api-desc">Finds the first binding matching a mask and returns its index and action.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<InputAction> GetEnumerator()"}</code> | <span className="api-desc">Enumerates every action in the asset.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Enumerates every action in the asset.</span> |

</details>

## Used in

Members of other types that take, return or hold a `InputMap`:

<div className="api-used-in">

[`InputMap.PlayingActions.m_Wrapper`](/mod/game-api/types/global-i-l/inputmap-playingactions#m-m-wrapper), [`InputMap.PlayingActions.PlayingActions`](/mod/game-api/types/global-i-l/inputmap-playingactions#m-ctor), [`InputMap.PlayingBaseActions.m_Wrapper`](/mod/game-api/types/global-i-l/inputmap-playingbaseactions#m-m-wrapper), [`InputMap.PlayingBaseActions.PlayingBaseActions`](/mod/game-api/types/global-i-l/inputmap-playingbaseactions#m-ctor), [`InputMap.PlayingGenericActions.m_Wrapper`](/mod/game-api/types/global-i-l/inputmap-playinggenericactions#m-m-wrapper), [`InputMap.PlayingGenericActions.PlayingGenericActions`](/mod/game-api/types/global-i-l/inputmap-playinggenericactions#m-ctor), [`InputMap.PlayingPicoActions.m_Wrapper`](/mod/game-api/types/global-i-l/inputmap-playingpicoactions#m-m-wrapper), [`InputMap.PlayingPicoActions.PlayingPicoActions`](/mod/game-api/types/global-i-l/inputmap-playingpicoactions#m-ctor), [`OpenXRInputController.inputMap`](/mod/game-api/types/global-m-o/openxrinputcontroller#m-inputmap).

</div>
