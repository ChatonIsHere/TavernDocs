---
title: "FlyCamInput"
description: "class FlyCamInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamInput

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `IInputActionCollection2`, `IInputActionCollection`, `IEnumerable<InputAction>`, `IEnumerable`, `IDisposable`
- **Nested types** [`IPlayingActions`](/game-api/types/global-e-h/flycaminput-iplayingactions), [`PlayingActions`](/game-api/types/global-e-h/flycaminput-playingactions)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FlyCamInput()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-m-playing" /><code>{"private readonly InputActionMap m_Playing"}</code> |  |
| <Link id="m-m-playing-changesenses" /><code>{"private readonly InputAction m_Playing_ChangeSenses"}</code> |  |
| <Link id="m-m-playing-decreasesensitivity" /><code>{"private readonly InputAction m_Playing_DecreaseSensitivity"}</code> |  |
| <Link id="m-m-playing-elevation" /><code>{"private readonly InputAction m_Playing_Elevation"}</code> |  |
| <Link id="m-m-playing-explosionmodifier" /><code>{"private readonly InputAction m_Playing_ExplosionModifier"}</code> |  |
| <Link id="m-m-playing-increasesensitivity" /><code>{"private readonly InputAction m_Playing_IncreaseSensitivity"}</code> |  |
| <Link id="m-m-playing-look" /><code>{"private readonly InputAction m_Playing_Look"}</code> |  |
| <Link id="m-m-playing-modsmuteaction" /><code>{"private readonly InputAction m_Playing_ModsMuteAction"}</code> |  |
| <Link id="m-m-playing-motion" /><code>{"private readonly InputAction m_Playing_Motion"}</code> |  |
| <Link id="m-m-playing-muteselfaction" /><code>{"private readonly InputAction m_Playing_MuteSelfAction"}</code> |  |
| <Link id="m-m-playing-shownames" /><code>{"private readonly InputAction m_Playing_ShowNames"}</code> |  |
| <Link id="m-m-playing-speeddirection" /><code>{"private readonly InputAction m_Playing_SpeedDirection"}</code> |  |
| <Link id="m-m-playing-togglecinematicmovement" /><code>{"private readonly InputAction m_Playing_ToggleCinematicMovement"}</code> |  |
| <Link id="m-m-playing-togglecursor" /><code>{"private readonly InputAction m_Playing_ToggleCursor"}</code> |  |
| <Link id="m-m-playingactionscallbackinterface" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycaminput-iplayingactions">{"FlyCamInput.IPlayingActions"}</Link>{" m_PlayingActionsCallbackInterface"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-asset" /><code>{"InputActionAsset asset { get; }"}</code> |  |
| <Link id="m-bindingmask" /><code>{"InputBinding? bindingMask { get; set; }"}</code> |  |
| <Link id="m-bindings" /><code>{"IEnumerable<InputBinding> bindings { get; }"}</code> |  |
| <Link id="m-controlschemes" /><code>{"ReadOnlyArray<InputControlScheme> controlSchemes { get; }"}</code> |  |
| <Link id="m-devices" /><code>{"ReadOnlyArray<InputDevice>? devices { get; set; }"}</code> |  |
| <Link id="m-playing" /><code><Link to="/game-api/types/global-e-h/flycaminput-playingactions">{"FlyCamInput.PlayingActions"}</Link>{" Playing { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-contains" /><code>{"bool Contains(InputAction action)"}</code> |  |
| <Link id="m-disable" /><code>{"void Disable()"}</code> |  |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-enable" /><code>{"void Enable()"}</code> |  |
| <Link id="m-findaction" /><code>{"InputAction FindAction(string actionNameOrId, bool throwIfNotFound = false)"}</code> |  |
| <Link id="m-findbinding" /><code>{"int FindBinding(InputBinding bindingMask, out InputAction action)"}</code> |  |
| <Link id="m-getenumerator" /><code>{"IEnumerator<InputAction> GetEnumerator()"}</code> |  |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> |  |

## Used in

Members of other types that take, return or hold a `FlyCamInput`:

[`FlyCamHands.flyCamInput`](/game-api/types/global-e-h/flycamhands#m-flycaminput), [`FlyCamInput.PlayingActions.m_Wrapper`](/game-api/types/global-e-h/flycaminput-playingactions#m-m-wrapper), [`FlyCamInput.PlayingActions.PlayingActions`](/game-api/types/global-e-h/flycaminput-playingactions#m-ctor), [`FlyCamLocomotionController.flyCamInput`](/game-api/types/global-e-h/flycamlocomotioncontroller#m-flycaminput).
