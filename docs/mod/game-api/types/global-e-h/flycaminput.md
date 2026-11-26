---
title: "FlyCamInput"
description: "Generated Unity Input System wrapper for the fly cam (spectator camera) controls, with a single Playing action map (move, look, elevation, sensitivity, show..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamInput

A **class** in `Root.Township`, the global namespace.

Generated Unity Input System wrapper for the fly cam (spectator camera) controls, with a single `Playing` action map (move, look, elevation, sensitivity, show names, mute and so on). Client only.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `IInputActionCollection2`, `IInputActionCollection`, `IEnumerable<InputAction>`, `IEnumerable`, `IDisposable`
- **Nested types** [`IPlayingActions`](/mod/game-api/types/global-e-h/flycaminput-iplayingactions), [`PlayingActions`](/mod/game-api/types/global-e-h/flycaminput-playingactions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamInput()"}</code> | <span className="api-desc">Creates a `FlyCamInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-m-playing" /><code>{"private readonly InputActionMap m_Playing"}</code> | <span className="api-desc">The Playing action map.</span> |
| <Link id="m-m-playing-changesenses" /><code>{"private readonly InputAction m_Playing_ChangeSenses"}</code> | <span className="api-desc">Change senses action (semicolon, gamepad d-pad down).</span> |
| <Link id="m-m-playing-decreasesensitivity" /><code>{"private readonly InputAction m_Playing_DecreaseSensitivity"}</code> | <span className="api-desc">Lower sensitivity action (gamepad d-pad left).</span> |
| <Link id="m-m-playing-elevation" /><code>{"private readonly InputAction m_Playing_Elevation"}</code> | <span className="api-desc">Up and down action (Q and E, gamepad shoulders).</span> |
| <Link id="m-m-playing-explosionmodifier" /><code>{"private readonly InputAction m_Playing_ExplosionModifier"}</code> | <span className="api-desc">Explosion modifier action (Ctrl).</span> |
| <Link id="m-m-playing-increasesensitivity" /><code>{"private readonly InputAction m_Playing_IncreaseSensitivity"}</code> | <span className="api-desc">Raise sensitivity action (gamepad d-pad right).</span> |
| <Link id="m-m-playing-look" /><code>{"private readonly InputAction m_Playing_Look"}</code> | <span className="api-desc">Look action (mouse delta, gamepad right stick).</span> |
| <Link id="m-m-playing-modsmuteaction" /><code>{"private readonly InputAction m_Playing_ModsMuteAction"}</code> | <span className="api-desc">Mods mute action (Shift+M).</span> |
| <Link id="m-m-playing-motion" /><code>{"private readonly InputAction m_Playing_Motion"}</code> | <span className="api-desc">Move action (WASD, gamepad left stick).</span> |
| <Link id="m-m-playing-muteselfaction" /><code>{"private readonly InputAction m_Playing_MuteSelfAction"}</code> | <span className="api-desc">Mute self action (M).</span> |
| <Link id="m-m-playing-shownames" /><code>{"private readonly InputAction m_Playing_ShowNames"}</code> | <span className="api-desc">Show names action (N).</span> |
| <Link id="m-m-playing-speeddirection" /><code>{"private readonly InputAction m_Playing_SpeedDirection"}</code> | <span className="api-desc">Speed up or down action (Shift and Ctrl, gamepad stick presses).</span> |
| <Link id="m-m-playing-togglecinematicmovement" /><code>{"private readonly InputAction m_Playing_ToggleCinematicMovement"}</code> | <span className="api-desc">Toggle cinematic movement action (gamepad d-pad up).</span> |
| <Link id="m-m-playing-togglecursor" /><code>{"private readonly InputAction m_Playing_ToggleCursor"}</code> | <span className="api-desc">Toggle cursor action (Backspace).</span> |
| <Link id="m-m-playingactionscallbackinterface" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/flycaminput-iplayingactions">{"FlyCamInput.IPlayingActions"}</Link>{" m_PlayingActionsCallbackInterface"}</code> | <span className="api-desc">Callback object currently hooked to the Playing actions.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-asset" /><code>{"InputActionAsset asset { get; }"}</code> | <span className="api-desc">The input action asset built from the embedded JSON.</span> |
| <Link id="m-bindingmask" /><code>{"InputBinding? bindingMask { get; set; }"}</code> | <span className="api-desc">Binding mask applied to the whole asset.</span> |
| <Link id="m-bindings" /><code>{"IEnumerable<InputBinding> bindings { get; }"}</code> | <span className="api-desc">Every binding in the asset.</span> |
| <Link id="m-controlschemes" /><code>{"ReadOnlyArray<InputControlScheme> controlSchemes { get; }"}</code> | <span className="api-desc">The asset's control schemes (none are defined).</span> |
| <Link id="m-devices" /><code>{"ReadOnlyArray<InputDevice>? devices { get; set; }"}</code> | <span className="api-desc">Restricts the asset to these devices, if set.</span> |
| <Link id="m-playing" /><code><Link to="/mod/game-api/types/global-e-h/flycaminput-playingactions">{"FlyCamInput.PlayingActions"}</Link>{" Playing { get; }"}</code> | <span className="api-desc">The `Playing` action map: WASD/left stick motion, mouse/right stick look, Q/E elevation, N to show names, M to mute and more.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(InputAction action)"}</code> | <span className="api-desc">True if the action is in this input asset.</span> |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Disables every action in the asset.</span> |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Destroys the underlying input action asset.</span> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | <span className="api-desc">Enables every action in the asset.</span> |
| <Link id="m-findaction" /><code>{"InputAction FindAction(string actionNameOrId, bool throwIfNotFound = false)"}</code> | <span className="api-desc">Finds an action by name or ID in the asset.</span> |
| <Link id="m-findbinding" /><code>{"int FindBinding(InputBinding bindingMask, out InputAction action)"}</code> | <span className="api-desc">Finds the first binding matching a mask and returns its index and action.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<InputAction> GetEnumerator()"}</code> | <span className="api-desc">Iterates every action in the asset.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Iterates every action in the asset.</span> |

</details>

## Used in

Members of other types that take, return or hold a `FlyCamInput`:

<div className="api-used-in">

[`FlyCamHands.flyCamInput`](/mod/game-api/types/global-e-h/flycamhands#m-flycaminput), [`FlyCamInput.PlayingActions.m_Wrapper`](/mod/game-api/types/global-e-h/flycaminput-playingactions#m-m-wrapper), [`FlyCamInput.PlayingActions.PlayingActions`](/mod/game-api/types/global-e-h/flycaminput-playingactions#m-ctor), [`FlyCamLocomotionController.flyCamInput`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller#m-flycaminput).

</div>
