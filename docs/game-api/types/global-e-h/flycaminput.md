---
title: "FlyCamInput"
description: "Generated Unity Input System wrapper for the fly cam (spectator camera) controls, with a single Playing action map (move, look, elevation, sensitivity, show..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamInput

A **class** in `Root.Township`, no namespace.

Generated Unity Input System wrapper for the fly cam (spectator camera) controls, with a single `Playing` action map (move, look, elevation, sensitivity, show names, mute and so on). Client only.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `IInputActionCollection2`, `IInputActionCollection`, `IEnumerable<InputAction>`, `IEnumerable`, `IDisposable`
- **Nested types** [`IPlayingActions`](/game-api/types/global-e-h/flycaminput-iplayingactions), [`PlayingActions`](/game-api/types/global-e-h/flycaminput-playingactions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamInput()"}</code> | Creates a `FlyCamInput` with default values. |

## Fields

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-m-playing" /><code>{"private readonly InputActionMap m_Playing"}</code> | The Playing action map. |
| <Link id="m-m-playing-changesenses" /><code>{"private readonly InputAction m_Playing_ChangeSenses"}</code> | Change senses action (semicolon, gamepad d-pad down). |
| <Link id="m-m-playing-decreasesensitivity" /><code>{"private readonly InputAction m_Playing_DecreaseSensitivity"}</code> | Lower sensitivity action (gamepad d-pad left). |
| <Link id="m-m-playing-elevation" /><code>{"private readonly InputAction m_Playing_Elevation"}</code> | Up and down action (Q and E, gamepad shoulders). |
| <Link id="m-m-playing-explosionmodifier" /><code>{"private readonly InputAction m_Playing_ExplosionModifier"}</code> | Explosion modifier action (Ctrl). |
| <Link id="m-m-playing-increasesensitivity" /><code>{"private readonly InputAction m_Playing_IncreaseSensitivity"}</code> | Raise sensitivity action (gamepad d-pad right). |
| <Link id="m-m-playing-look" /><code>{"private readonly InputAction m_Playing_Look"}</code> | Look action (mouse delta, gamepad right stick). |
| <Link id="m-m-playing-modsmuteaction" /><code>{"private readonly InputAction m_Playing_ModsMuteAction"}</code> | Mods mute action (Shift+M). |
| <Link id="m-m-playing-motion" /><code>{"private readonly InputAction m_Playing_Motion"}</code> | Move action (WASD, gamepad left stick). |
| <Link id="m-m-playing-muteselfaction" /><code>{"private readonly InputAction m_Playing_MuteSelfAction"}</code> | Mute self action (M). |
| <Link id="m-m-playing-shownames" /><code>{"private readonly InputAction m_Playing_ShowNames"}</code> | Show names action (N). |
| <Link id="m-m-playing-speeddirection" /><code>{"private readonly InputAction m_Playing_SpeedDirection"}</code> | Speed up or down action (Shift and Ctrl, gamepad stick presses). |
| <Link id="m-m-playing-togglecinematicmovement" /><code>{"private readonly InputAction m_Playing_ToggleCinematicMovement"}</code> | Toggle cinematic movement action (gamepad d-pad up). |
| <Link id="m-m-playing-togglecursor" /><code>{"private readonly InputAction m_Playing_ToggleCursor"}</code> | Toggle cursor action (Backspace). |
| <Link id="m-m-playingactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycaminput-iplayingactions">{"FlyCamInput.IPlayingActions"}</Link>{" m_PlayingActionsCallbackInterface"}</code> | Callback object currently hooked to the Playing actions. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-asset" /><code>{"InputActionAsset asset { get; }"}</code> | The input action asset built from the embedded JSON. |
| <Link id="m-bindingmask" /><code>{"InputBinding? bindingMask { get; set; }"}</code> | Binding mask applied to the whole asset. |
| <Link id="m-bindings" /><code>{"IEnumerable<InputBinding> bindings { get; }"}</code> | Every binding in the asset. |
| <Link id="m-controlschemes" /><code>{"ReadOnlyArray<InputControlScheme> controlSchemes { get; }"}</code> | The asset's control schemes (none are defined). |
| <Link id="m-devices" /><code>{"ReadOnlyArray<InputDevice>? devices { get; set; }"}</code> | Restricts the asset to these devices, if set. |
| <Link id="m-playing" /><code><Link to="/game-api/types/global-e-h/flycaminput-playingactions">{"FlyCamInput.PlayingActions"}</Link>{" Playing { get; }"}</code> | The `Playing` action map: WASD/left stick motion, mouse/right stick look, Q/E elevation, N to show names, M to mute and more. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(InputAction action)"}</code> | True if the action is in this input asset. |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Disables every action in the asset. |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Destroys the underlying input action asset. |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Enables every action in the asset. |
| <Link id="m-findaction" /><code>{"InputAction FindAction(string actionNameOrId, bool throwIfNotFound = false)"}</code> | Finds an action by name or ID in the asset. |
| <Link id="m-findbinding" /><code>{"int FindBinding(InputBinding bindingMask, out InputAction action)"}</code> | Finds the first binding matching a mask and returns its index and action. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<InputAction> GetEnumerator()"}</code> | Iterates every action in the asset. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Iterates every action in the asset. |

</details>

## Used in

Members of other types that take, return or hold a `FlyCamInput`:

[`FlyCamHands.flyCamInput`](/game-api/types/global-e-h/flycamhands#m-flycaminput), [`FlyCamInput.PlayingActions.m_Wrapper`](/game-api/types/global-e-h/flycaminput-playingactions#m-m-wrapper), [`FlyCamInput.PlayingActions.PlayingActions`](/game-api/types/global-e-h/flycaminput-playingactions#m-ctor), [`FlyCamLocomotionController.flyCamInput`](/game-api/types/global-e-h/flycamlocomotioncontroller#m-flycaminput).
