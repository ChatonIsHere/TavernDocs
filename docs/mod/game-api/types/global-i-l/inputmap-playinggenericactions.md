---
title: "InputMap.PlayingGenericActions"
description: "The generated wrapper for the \"PlayingGeneric\" input action map: the same in-game actions bound to a generic XR controller."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.PlayingGenericActions

A **struct** in `Root.Township`, the global namespace.

The generated wrapper for the "PlayingGeneric" input action map: the same in-game actions bound to a generic XR controller. Read by `GenericOpenXRInputController`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/mod/game-api/types/global-i-l/inputmap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingGenericActions("}<Link to="/mod/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" wrapper)"}</code> | <span className="api-desc">Creates an `InputMap.PlayingGenericActions` from `wrapper`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-m-wrapper" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" m_Wrapper"}</code> | <span className="api-desc">The `InputMap` this action set reads its actions from.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"InputAction AngularVelocity { get; }"}</code> | <span className="api-desc">Controller angular velocity.</span> |
| <Link id="m-assistgrab" /><code>{"InputAction AssistGrab { get; }"}</code> | <span className="api-desc">Grab assist button (trigger).</span> |
| <Link id="m-enabled" /><code>{"bool enabled { get; }"}</code> | <span className="api-desc">Whether the action map is enabled.</span> |
| <Link id="m-gestures" /><code>{"InputAction Gestures { get; }"}</code> | <span className="api-desc">Thumbstick used for gestures.</span> |
| <Link id="m-interact" /><code>{"InputAction Interact { get; }"}</code> | <span className="api-desc">Grab button (grip on a generic XR controller).</span> |
| <Link id="m-metamenu" /><code>{"InputAction MetaMenu { get; }"}</code> | <span className="api-desc">Menu button (secondary button).</span> |
| <Link id="m-pose" /><code>{"InputAction Pose { get; }"}</code> | <span className="api-desc">Full controller pose.</span> |
| <Link id="m-position" /><code>{"InputAction Position { get; }"}</code> | <span className="api-desc">Controller position.</span> |
| <Link id="m-releasetogglegrab" /><code>{"InputAction ReleaseToggleGrab { get; }"}</code> | <span className="api-desc">Releases a toggle grab. Has no binding in this map.</span> |
| <Link id="m-rotation" /><code>{"InputAction Rotation { get; }"}</code> | <span className="api-desc">Controller rotation.</span> |
| <Link id="m-smoothlocomotion" /><code>{"InputAction SmoothLocomotion { get; }"}</code> | <span className="api-desc">Thumbstick used for walking.</span> |
| <Link id="m-smoothrotation" /><code>{"InputAction SmoothRotation { get; }"}</code> | <span className="api-desc">Thumbstick used for turning.</span> |
| <Link id="m-squeeze" /><code>{"InputAction Squeeze { get; }"}</code> | <span className="api-desc">Grip axis of any XR controller.</span> |
| <Link id="m-takescreenshotlong" /><code>{"InputAction TakeScreenShotLong { get; }"}</code> | <span className="api-desc">Held trigger used for long photo capture.</span> |
| <Link id="m-teleport" /><code>{"InputAction Teleport { get; }"}</code> | <span className="api-desc">Teleport button (primary button).</span> |
| <Link id="m-togglegrab" /><code>{"InputAction ToggleGrab { get; }"}</code> | <span className="api-desc">Toggle grab button (trigger).</span> |
| <Link id="m-togglerun" /><code>{"InputAction ToggleRun { get; }"}</code> | <span className="api-desc">Run toggle (thumbstick click).</span> |
| <Link id="m-touchingthumb" /><code>{"InputAction TouchingThumb { get; }"}</code> | <span className="api-desc">Thumb touching the face buttons or stick.</span> |
| <Link id="m-touchingtriggerbutton" /><code>{"InputAction TouchingTriggerButton { get; }"}</code> | <span className="api-desc">Trigger touch.</span> |
| <Link id="m-triggeraxis" /><code>{"InputAction TriggerAxis { get; }"}</code> | <span className="api-desc">Trigger axis of any XR controller.</span> |
| <Link id="m-velocity" /><code>{"InputAction Velocity { get; }"}</code> | <span className="api-desc">Controller velocity.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Disables every action in this map.</span> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | <span className="api-desc">Enables every action in this map.</span> |
| <Link id="m-get" /><code>{"InputActionMap Get()"}</code> | <span className="api-desc">Returns the underlying `InputActionMap`.</span> |
| <Link id="m-op-implicit" /><code>{"static InputActionMap op_Implicit("}<Link to="/mod/game-api/types/global-i-l/inputmap-playinggenericactions">{"InputMap.PlayingGenericActions"}</Link>{" set)"}</code> | <span className="api-desc">Converts to the underlying `InputActionMap`.</span> |
| <Link id="m-setcallbacks" /><code>{"void SetCallbacks("}<Link to="/mod/game-api/types/global-i-l/inputmap-iplayinggenericactions">{"InputMap.IPlayingGenericActions"}</Link>{" instance)"}</code> | <span className="api-desc">Hooks an object's `On...` methods to every action's started, performed and cancelled callbacks, unhooking the previous one. Pass null to unhook.</span> |

## Used in

Members of other types that take, return or hold a `PlayingGenericActions`:

<div className="api-used-in">

[`InputMap.PlayingGeneric`](/mod/game-api/types/global-i-l/inputmap#m-playinggeneric).

</div>
