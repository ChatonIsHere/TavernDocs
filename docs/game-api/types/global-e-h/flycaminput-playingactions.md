---
title: "FlyCamInput.PlayingActions"
description: "The fly cam's generated input action map."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamInput.PlayingActions

A **struct** in `Root.Township`, no namespace.

The fly cam's generated input action map. Keyboard, mouse and gamepad bindings for moving, looking and fly cam toggles.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`FlyCamInput`](/game-api/types/global-e-h/flycaminput)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayingActions("}<Link to="/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" wrapper)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-m-wrapper" /><code>{"private "}<Link to="/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" m_Wrapper"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changesenses" /><code>{"InputAction ChangeSenses { get; }"}</code> | Bound to semicolon or d-pad down; its use isn't in the server build. |
| <Link id="m-decreasesensitivity" /><code>{"InputAction DecreaseSensitivity { get; }"}</code> | Lower look sensitivity: d-pad left. |
| <Link id="m-elevation" /><code>{"InputAction Elevation { get; }"}</code> | Up and down: Q and E, or the shoulder buttons. |
| <Link id="m-enabled" /><code>{"bool enabled { get; }"}</code> | Whether the action map is enabled. |
| <Link id="m-explosionmodifier" /><code>{"InputAction ExplosionModifier { get; }"}</code> | Ctrl, read by `FlyCamHands` as a modifier. |
| <Link id="m-increasesensitivity" /><code>{"InputAction IncreaseSensitivity { get; }"}</code> | Raise look sensitivity: d-pad right. |
| <Link id="m-look" /><code>{"InputAction Look { get; }"}</code> | Look: mouse movement or the right stick. |
| <Link id="m-modsmuteaction" /><code>{"InputAction ModsMuteAction { get; }"}</code> | Shift and M. |
| <Link id="m-motion" /><code>{"InputAction Motion { get; }"}</code> | Move: WASD or the left stick. |
| <Link id="m-muteselfaction" /><code>{"InputAction MuteSelfAction { get; }"}</code> | M. |
| <Link id="m-shownames" /><code>{"InputAction ShowNames { get; }"}</code> | Toggle names: N. |
| <Link id="m-speeddirection" /><code>{"InputAction SpeedDirection { get; }"}</code> | Slow or fast: Ctrl and Shift, or stick presses. |
| <Link id="m-togglecinematicmovement" /><code>{"InputAction ToggleCinematicMovement { get; }"}</code> | Toggle cinematic movement: d-pad up. |
| <Link id="m-togglecursor" /><code>{"InputAction ToggleCursor { get; }"}</code> | Toggle the cursor: Backspace. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Disables the action map. |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Enables the action map. |
| <Link id="m-get" /><code>{"InputActionMap Get()"}</code> | The underlying action map. |
| <Link id="m-op-implicit" /><code>{"static InputActionMap op_Implicit("}<Link to="/game-api/types/global-e-h/flycaminput-playingactions">{"FlyCamInput.PlayingActions"}</Link>{" set)"}</code> | Converts to the underlying action map. |
| <Link id="m-setcallbacks" /><code>{"void SetCallbacks("}<Link to="/game-api/types/global-e-h/flycaminput-iplayingactions">{"FlyCamInput.IPlayingActions"}</Link>{" instance)"}</code> | Replaces the object that receives this map's action callbacks. |

## Used in

Members of other types that take, return or hold a `PlayingActions`:

[`FlyCamInput.Playing`](/game-api/types/global-e-h/flycaminput#m-playing).
