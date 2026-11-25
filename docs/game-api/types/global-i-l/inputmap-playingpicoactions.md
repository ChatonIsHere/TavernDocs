---
title: "InputMap.PlayingPicoActions"
description: "The generated wrapper for the \"PlayingPico\" input action map: in-game actions for a generic XR controller, with Pico trigger bindings for grab assist and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.PlayingPicoActions

A **struct** in `Root.Township`, no namespace.

The generated wrapper for the "PlayingPico" input action map: in-game actions for a generic XR controller, with Pico trigger bindings for grab assist and trigger axis. Nothing outside `InputMap` reads it in this build.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/game-api/types/global-i-l/inputmap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingPicoActions("}<Link to="/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" wrapper)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-m-wrapper" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" m_Wrapper"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"InputAction AngularVelocity { get; }"}</code> | Controller angular velocity. |
| <Link id="m-enabled" /><code>{"bool enabled { get; }"}</code> | Whether the action map is enabled. |
| <Link id="m-gestures" /><code>{"InputAction Gestures { get; }"}</code> | Thumbstick used for gestures. |
| <Link id="m-interact" /><code>{"InputAction Interact { get; }"}</code> | Grab button (grip on a generic XR controller). |
| <Link id="m-metamenu" /><code>{"InputAction MetaMenu { get; }"}</code> | Menu button (secondary button). |
| <Link id="m-picoassistgrab" /><code>{"InputAction PicoAssistGrab { get; }"}</code> | Grab assist from the Pico controller's trigger. |
| <Link id="m-pose" /><code>{"InputAction Pose { get; }"}</code> | Full controller pose. |
| <Link id="m-position" /><code>{"InputAction Position { get; }"}</code> | Controller position. |
| <Link id="m-releasetogglegrab" /><code>{"InputAction ReleaseToggleGrab { get; }"}</code> | Releases a toggle grab. Has no binding in this map. |
| <Link id="m-rotation" /><code>{"InputAction Rotation { get; }"}</code> | Controller rotation. |
| <Link id="m-smoothlocomotion" /><code>{"InputAction SmoothLocomotion { get; }"}</code> | Thumbstick used for walking. |
| <Link id="m-smoothrotation" /><code>{"InputAction SmoothRotation { get; }"}</code> | Thumbstick used for turning. |
| <Link id="m-squeeze" /><code>{"InputAction Squeeze { get; }"}</code> | Grip axis of any XR controller. |
| <Link id="m-takescreenshotlong" /><code>{"InputAction TakeScreenShotLong { get; }"}</code> | Held trigger used for long photo capture. |
| <Link id="m-teleport" /><code>{"InputAction Teleport { get; }"}</code> | Teleport button (primary button). |
| <Link id="m-togglegrab" /><code>{"InputAction ToggleGrab { get; }"}</code> | Toggle grab button (trigger). |
| <Link id="m-togglerun" /><code>{"InputAction ToggleRun { get; }"}</code> | Run toggle (thumbstick click). |
| <Link id="m-touchingthumb" /><code>{"InputAction TouchingThumb { get; }"}</code> | Thumb touching the face buttons or stick. |
| <Link id="m-touchingtriggerbutton" /><code>{"InputAction TouchingTriggerButton { get; }"}</code> | Trigger touch. |
| <Link id="m-triggeraxis" /><code>{"InputAction TriggerAxis { get; }"}</code> | Pico controller trigger axis. |
| <Link id="m-velocity" /><code>{"InputAction Velocity { get; }"}</code> | Controller velocity. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Disables every action in this map. |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Enables every action in this map. |
| <Link id="m-get" /><code>{"InputActionMap Get()"}</code> | Returns the underlying `InputActionMap`. |
| <Link id="m-op-implicit" /><code>{"static InputActionMap op_Implicit("}<Link to="/game-api/types/global-i-l/inputmap-playingpicoactions">{"InputMap.PlayingPicoActions"}</Link>{" set)"}</code> | Converts to the underlying `InputActionMap`. |
| <Link id="m-setcallbacks" /><code>{"void SetCallbacks("}<Link to="/game-api/types/global-i-l/inputmap-iplayingpicoactions">{"InputMap.IPlayingPicoActions"}</Link>{" instance)"}</code> | Hooks an object's `On...` methods to every action's started, performed and cancelled callbacks, unhooking the previous one. Pass null to unhook. |

## Used in

Members of other types that take, return or hold a `PlayingPicoActions`:

[`InputMap.PlayingPico`](/game-api/types/global-i-l/inputmap#m-playingpico).
