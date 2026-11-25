---
title: "InputMap.PlayingActions"
description: "The generated wrapper for the \"Playing\" input action map: in-game controller actions with bindings for Oculus, Vive, WMR and Index controllers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.PlayingActions

A **struct** in `Root.Township`, no namespace.

The generated wrapper for the "Playing" input action map: in-game controller actions with bindings for Oculus, Vive, WMR and Index controllers. Get it from an `InputMap` instance's `Playing`; `PlayingOpenXRInputController` reads it.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/game-api/types/global-i-l/inputmap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingActions("}<Link to="/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" wrapper)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-m-wrapper" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" m_Wrapper"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"InputAction AngularVelocity { get; }"}</code> | Controller angular velocity. |
| <Link id="m-assistgrab" /><code>{"InputAction AssistGrab { get; }"}</code> | Grab assist button (trigger on most controllers, grip on the Vive wand). |
| <Link id="m-enabled" /><code>{"bool enabled { get; }"}</code> | Whether the action map is enabled. |
| <Link id="m-gestures" /><code>{"InputAction Gestures { get; }"}</code> | Thumbstick or trackpad used for gestures. |
| <Link id="m-grabstrength" /><code>{"InputAction GrabStrength { get; }"}</code> | Valve Index grip force axis. |
| <Link id="m-interact" /><code>{"InputAction Interact { get; }"}</code> | Grab button (grip on Oculus and WMR, trigger on Vive). |
| <Link id="m-joystickdpad" /><code>{"InputAction JoystickDpad { get; }"}</code> | Stick used as a left and right dpad. Has no binding in this map. |
| <Link id="m-metamenu" /><code>{"InputAction MetaMenu { get; }"}</code> | Menu button (secondary button on Oculus, menu on Vive and WMR). |
| <Link id="m-pose" /><code>{"InputAction Pose { get; }"}</code> | Full controller pose. |
| <Link id="m-position" /><code>{"InputAction Position { get; }"}</code> | Controller position. |
| <Link id="m-releasetogglegrab" /><code>{"InputAction ReleaseToggleGrab { get; }"}</code> | Releases a toggle grab. Has no binding in this map. |
| <Link id="m-rotation" /><code>{"InputAction Rotation { get; }"}</code> | Controller rotation. |
| <Link id="m-smoothlocomotion" /><code>{"InputAction SmoothLocomotion { get; }"}</code> | Thumbstick or trackpad used for walking. |
| <Link id="m-smoothrotation" /><code>{"InputAction SmoothRotation { get; }"}</code> | Thumbstick or trackpad used for turning. |
| <Link id="m-squeeze" /><code>{"InputAction Squeeze { get; }"}</code> | Grip axis of any XR controller. |
| <Link id="m-swipemotion" /><code>{"InputAction SwipeMotion { get; }"}</code> | Trackpad or touchpad position, for swipe locomotion. |
| <Link id="m-swipetouch" /><code>{"InputAction SwipeTouch { get; }"}</code> | Vive trackpad touch, used for swipe input. |
| <Link id="m-takescreenshotlong" /><code>{"InputAction TakeScreenShotLong { get; }"}</code> | Held trigger (grip on Vive) used for long photo capture. |
| <Link id="m-teleport" /><code>{"InputAction Teleport { get; }"}</code> | Teleport button (primary button on Oculus, trackpad press on Vive and WMR). |
| <Link id="m-togglegrab" /><code>{"InputAction ToggleGrab { get; }"}</code> | Toggle grab button (trigger on Oculus and WMR, grip on Vive). |
| <Link id="m-togglerun" /><code>{"InputAction ToggleRun { get; }"}</code> | Run toggle (thumbstick or trackpad click). |
| <Link id="m-touchingindexaxis" /><code>{"InputAction TouchingIndexAxis { get; }"}</code> | Index finger on the trigger (touch or trigger axis). |
| <Link id="m-touchingthumb" /><code>{"InputAction TouchingThumb { get; }"}</code> | Thumb touching the face buttons, stick or trackpad. |
| <Link id="m-touchingtriggerbutton" /><code>{"InputAction TouchingTriggerButton { get; }"}</code> | Valve Index trigger touch. |
| <Link id="m-triggeraxis" /><code>{"InputAction TriggerAxis { get; }"}</code> | Trigger axis of any XR controller. |
| <Link id="m-velocity" /><code>{"InputAction Velocity { get; }"}</code> | Controller velocity. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Disables every action in this map. |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Enables every action in this map. |
| <Link id="m-get" /><code>{"InputActionMap Get()"}</code> | Returns the underlying `InputActionMap`. |
| <Link id="m-op-implicit" /><code>{"static InputActionMap op_Implicit("}<Link to="/game-api/types/global-i-l/inputmap-playingactions">{"InputMap.PlayingActions"}</Link>{" set)"}</code> | Converts to the underlying `InputActionMap`. |
| <Link id="m-setcallbacks" /><code>{"void SetCallbacks("}<Link to="/game-api/types/global-i-l/inputmap-iplayingactions">{"InputMap.IPlayingActions"}</Link>{" instance)"}</code> | Hooks an object's `On...` methods to every action's started, performed and cancelled callbacks, unhooking the previous one. Pass null to unhook. |

## Used in

Members of other types that take, return or hold a `PlayingActions`:

[`InputMap.Playing`](/game-api/types/global-i-l/inputmap#m-playing).
