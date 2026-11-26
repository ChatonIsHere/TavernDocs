---
title: "FlyCamInput.PlayingActions"
description: "The fly cam's generated input action map."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FlyCamInput.PlayingActions

A **struct** in `Root.Township`, the global namespace.

The fly cam's generated input action map. Keyboard, mouse and gamepad bindings for moving, looking and fly cam toggles.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`FlyCamInput`](/mod/game-api/types/global-e-h/flycaminput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingActions("}<Link to="/mod/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" wrapper)"}</code> | <span className="api-desc">Creates a `FlyCamInput.PlayingActions` from `wrapper`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-m-wrapper" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/flycaminput">{"FlyCamInput"}</Link>{" m_Wrapper"}</code> | <span className="api-desc">The `FlyCamInput` this action set reads its actions from.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changesenses" /><code>{"InputAction ChangeSenses { get; }"}</code> | <span className="api-desc">Bound to semicolon or d-pad down; its use isn't in the server build.</span> |
| <Link id="m-decreasesensitivity" /><code>{"InputAction DecreaseSensitivity { get; }"}</code> | <span className="api-desc">Lower look sensitivity: d-pad left.</span> |
| <Link id="m-elevation" /><code>{"InputAction Elevation { get; }"}</code> | <span className="api-desc">Up and down: Q and E, or the shoulder buttons.</span> |
| <Link id="m-enabled" /><code>{"bool enabled { get; }"}</code> | <span className="api-desc">Whether the action map is enabled.</span> |
| <Link id="m-explosionmodifier" /><code>{"InputAction ExplosionModifier { get; }"}</code> | <span className="api-desc">Ctrl, read by `FlyCamHands` as a modifier.</span> |
| <Link id="m-increasesensitivity" /><code>{"InputAction IncreaseSensitivity { get; }"}</code> | <span className="api-desc">Raise look sensitivity: d-pad right.</span> |
| <Link id="m-look" /><code>{"InputAction Look { get; }"}</code> | <span className="api-desc">Look: mouse movement or the right stick.</span> |
| <Link id="m-modsmuteaction" /><code>{"InputAction ModsMuteAction { get; }"}</code> | <span className="api-desc">Shift and M.</span> |
| <Link id="m-motion" /><code>{"InputAction Motion { get; }"}</code> | <span className="api-desc">Move: WASD or the left stick.</span> |
| <Link id="m-muteselfaction" /><code>{"InputAction MuteSelfAction { get; }"}</code> | <span className="api-desc">M.</span> |
| <Link id="m-shownames" /><code>{"InputAction ShowNames { get; }"}</code> | <span className="api-desc">Toggle names: N.</span> |
| <Link id="m-speeddirection" /><code>{"InputAction SpeedDirection { get; }"}</code> | <span className="api-desc">Slow or fast: Ctrl and Shift, or stick presses.</span> |
| <Link id="m-togglecinematicmovement" /><code>{"InputAction ToggleCinematicMovement { get; }"}</code> | <span className="api-desc">Toggle cinematic movement: d-pad up.</span> |
| <Link id="m-togglecursor" /><code>{"InputAction ToggleCursor { get; }"}</code> | <span className="api-desc">Toggle the cursor: Backspace.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Disables the action map.</span> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | <span className="api-desc">Enables the action map.</span> |
| <Link id="m-get" /><code>{"InputActionMap Get()"}</code> | <span className="api-desc">The underlying action map.</span> |
| <Link id="m-op-implicit" /><code>{"static InputActionMap op_Implicit("}<Link to="/mod/game-api/types/global-e-h/flycaminput-playingactions">{"FlyCamInput.PlayingActions"}</Link>{" set)"}</code> | <span className="api-desc">Converts to the underlying action map.</span> |
| <Link id="m-setcallbacks" /><code>{"void SetCallbacks("}<Link to="/mod/game-api/types/global-e-h/flycaminput-iplayingactions">{"FlyCamInput.IPlayingActions"}</Link>{" instance)"}</code> | <span className="api-desc">Replaces the object that receives this map's action callbacks.</span> |

## Used in

Members of other types that take, return or hold a `PlayingActions`:

<div className="api-used-in">

[`FlyCamInput.Playing`](/mod/game-api/types/global-e-h/flycaminput#m-playing).

</div>
