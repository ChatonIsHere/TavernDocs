---
title: "InputMap.PlayingActions"
description: "The generated wrapper for the \"Playing\" input action map: in-game controller actions with bindings for Oculus, Vive, WMR and Index controllers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.PlayingActions

A **struct** in `Root.Township`, the global namespace.

The generated wrapper for the "Playing" input action map: in-game controller actions with bindings for Oculus, Vive, WMR and Index controllers. Get it from an `InputMap` instance's `Playing`; `PlayingOpenXRInputController` reads it.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/mod/game-api/types/global-i-l/inputmap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingActions("}<Link to="/mod/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" wrapper)"}</code> | <span className="api-desc">Creates an `InputMap.PlayingActions` from `wrapper`.</span> |

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
| <Link id="m-assistgrab" /><code>{"InputAction AssistGrab { get; }"}</code> | <span className="api-desc">Grab assist button (trigger on most controllers, grip on the Vive wand).</span> |
| <Link id="m-enabled" /><code>{"bool enabled { get; }"}</code> | <span className="api-desc">Whether the action map is enabled.</span> |
| <Link id="m-gestures" /><code>{"InputAction Gestures { get; }"}</code> | <span className="api-desc">Thumbstick or trackpad used for gestures.</span> |
| <Link id="m-grabstrength" /><code>{"InputAction GrabStrength { get; }"}</code> | <span className="api-desc">Valve Index grip force axis.</span> |
| <Link id="m-interact" /><code>{"InputAction Interact { get; }"}</code> | <span className="api-desc">Grab button (grip on Oculus and WMR, trigger on Vive).</span> |
| <Link id="m-joystickdpad" /><code>{"InputAction JoystickDpad { get; }"}</code> | <span className="api-desc">Stick used as a left and right dpad. Has no binding in this map.</span> |
| <Link id="m-metamenu" /><code>{"InputAction MetaMenu { get; }"}</code> | <span className="api-desc">Menu button (secondary button on Oculus, menu on Vive and WMR).</span> |
| <Link id="m-pose" /><code>{"InputAction Pose { get; }"}</code> | <span className="api-desc">Full controller pose.</span> |
| <Link id="m-position" /><code>{"InputAction Position { get; }"}</code> | <span className="api-desc">Controller position.</span> |
| <Link id="m-releasetogglegrab" /><code>{"InputAction ReleaseToggleGrab { get; }"}</code> | <span className="api-desc">Releases a toggle grab. Has no binding in this map.</span> |
| <Link id="m-rotation" /><code>{"InputAction Rotation { get; }"}</code> | <span className="api-desc">Controller rotation.</span> |
| <Link id="m-smoothlocomotion" /><code>{"InputAction SmoothLocomotion { get; }"}</code> | <span className="api-desc">Thumbstick or trackpad used for walking.</span> |
| <Link id="m-smoothrotation" /><code>{"InputAction SmoothRotation { get; }"}</code> | <span className="api-desc">Thumbstick or trackpad used for turning.</span> |
| <Link id="m-squeeze" /><code>{"InputAction Squeeze { get; }"}</code> | <span className="api-desc">Grip axis of any XR controller.</span> |
| <Link id="m-swipemotion" /><code>{"InputAction SwipeMotion { get; }"}</code> | <span className="api-desc">Trackpad or touchpad position, for swipe locomotion.</span> |
| <Link id="m-swipetouch" /><code>{"InputAction SwipeTouch { get; }"}</code> | <span className="api-desc">Vive trackpad touch, used for swipe input.</span> |
| <Link id="m-takescreenshotlong" /><code>{"InputAction TakeScreenShotLong { get; }"}</code> | <span className="api-desc">Held trigger (grip on Vive) used for long photo capture.</span> |
| <Link id="m-teleport" /><code>{"InputAction Teleport { get; }"}</code> | <span className="api-desc">Teleport button (primary button on Oculus, trackpad press on Vive and WMR).</span> |
| <Link id="m-togglegrab" /><code>{"InputAction ToggleGrab { get; }"}</code> | <span className="api-desc">Toggle grab button (trigger on Oculus and WMR, grip on Vive).</span> |
| <Link id="m-togglerun" /><code>{"InputAction ToggleRun { get; }"}</code> | <span className="api-desc">Run toggle (thumbstick or trackpad click).</span> |
| <Link id="m-touchingindexaxis" /><code>{"InputAction TouchingIndexAxis { get; }"}</code> | <span className="api-desc">Index finger on the trigger (touch or trigger axis).</span> |
| <Link id="m-touchingthumb" /><code>{"InputAction TouchingThumb { get; }"}</code> | <span className="api-desc">Thumb touching the face buttons, stick or trackpad.</span> |
| <Link id="m-touchingtriggerbutton" /><code>{"InputAction TouchingTriggerButton { get; }"}</code> | <span className="api-desc">Valve Index trigger touch.</span> |
| <Link id="m-triggeraxis" /><code>{"InputAction TriggerAxis { get; }"}</code> | <span className="api-desc">Trigger axis of any XR controller.</span> |
| <Link id="m-velocity" /><code>{"InputAction Velocity { get; }"}</code> | <span className="api-desc">Controller velocity.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Disables every action in this map.</span> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | <span className="api-desc">Enables every action in this map.</span> |
| <Link id="m-get" /><code>{"InputActionMap Get()"}</code> | <span className="api-desc">Returns the underlying `InputActionMap`.</span> |
| <Link id="m-op-implicit" /><code>{"static InputActionMap op_Implicit("}<Link to="/mod/game-api/types/global-i-l/inputmap-playingactions">{"InputMap.PlayingActions"}</Link>{" set)"}</code> | <span className="api-desc">Converts to the underlying `InputActionMap`.</span> |
| <Link id="m-setcallbacks" /><code>{"void SetCallbacks("}<Link to="/mod/game-api/types/global-i-l/inputmap-iplayingactions">{"InputMap.IPlayingActions"}</Link>{" instance)"}</code> | <span className="api-desc">Hooks an object's `On...` methods to every action's started, performed and cancelled callbacks, unhooking the previous one. Pass null to unhook.</span> |

## Used in

Members of other types that take, return or hold a `PlayingActions`:

<div className="api-used-in">

[`InputMap.Playing`](/mod/game-api/types/global-i-l/inputmap#m-playing).

</div>
