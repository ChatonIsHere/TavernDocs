---
title: "InputMap.PlayingBaseActions"
description: "Typed access to the PlayingBase action map of InputMap, one InputAction per input."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.PlayingBaseActions

A **struct** in `Root.Township`, no namespace.

Typed access to the `PlayingBase` action map of `InputMap`, one `InputAction` per input. Get it from `inputMap.PlayingBase`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/game-api/types/global-i-l/inputmap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingBaseActions("}<Link to="/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" wrapper)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-m-wrapper" /><code>{"private "}<Link to="/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" m_Wrapper"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"InputAction AngularVelocity { get; }"}</code> | The controller's angular velocity. |
| <Link id="m-directioninput" /><code>{"InputAction DirectionInput { get; }"}</code> | Thumbstick or trackpad direction, depending on the controller. |
| <Link id="m-enabled" /><code>{"bool enabled { get; }"}</code> | True if this map is enabled. |
| <Link id="m-grabstrength" /><code>{"InputAction GrabStrength { get; }"}</code> | Valve Index grip force. |
| <Link id="m-interact" /><code>{"InputAction Interact { get; }"}</code> | Grip button (trigger on Vive wands), the game's grab and interact. |
| <Link id="m-metamenu" /><code>{"InputAction MetaMenu { get; }"}</code> | Menu button: secondary face button on Oculus, menu on Vive and WMR. |
| <Link id="m-pose" /><code>{"InputAction Pose { get; }"}</code> | The controller's full tracked pose. |
| <Link id="m-position" /><code>{"InputAction Position { get; }"}</code> | The controller's tracked position. |
| <Link id="m-rotation" /><code>{"InputAction Rotation { get; }"}</code> | The controller's tracked rotation. |
| <Link id="m-secondaryinteract" /><code>{"InputAction SecondaryInteract { get; }"}</code> | Trigger press (grip on Vive). |
| <Link id="m-squeeze" /><code>{"InputAction Squeeze { get; }"}</code> | Grip axis. |
| <Link id="m-takescreenshotlong" /><code>{"InputAction TakeScreenShotLong { get; }"}</code> | Trigger press, for the long-press photo. |
| <Link id="m-teleport" /><code>{"InputAction Teleport { get; }"}</code> | Primary face button on Oculus, trackpad press on Vive and WMR. |
| <Link id="m-togglerun" /><code>{"InputAction ToggleRun { get; }"}</code> | Thumbstick or trackpad click. |
| <Link id="m-touchingindexaxis" /><code>{"InputAction TouchingIndexAxis { get; }"}</code> | Whether, or how far, the finger is on the trigger. |
| <Link id="m-touchingthumb" /><code>{"InputAction TouchingThumb { get; }"}</code> | Thumb touching a face button, thumbstick or trackpad. |
| <Link id="m-touchingtriggerbutton" /><code>{"InputAction TouchingTriggerButton { get; }"}</code> | Valve Index trigger touch. |
| <Link id="m-triggeraxis" /><code>{"InputAction TriggerAxis { get; }"}</code> | Trigger axis. |
| <Link id="m-velocity" /><code>{"InputAction Velocity { get; }"}</code> | The controller's linear velocity. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | Disables this map. |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | Enables this map. |
| <Link id="m-get" /><code>{"InputActionMap Get()"}</code> | The underlying `InputActionMap`. |
| <Link id="m-op-implicit" /><code>{"static InputActionMap op_Implicit("}<Link to="/game-api/types/global-i-l/inputmap-playingbaseactions">{"InputMap.PlayingBaseActions"}</Link>{" set)"}</code> | Converts to the underlying `InputActionMap`. |
| <Link id="m-setcallbacks" /><code>{"void SetCallbacks("}<Link to="/game-api/types/global-i-l/inputmap-iplayingbaseactions">{"InputMap.IPlayingBaseActions"}</Link>{" instance)"}</code> | Replaces the callback receiver for every action in this map. Pass null to remove it. |

## Used in

Members of other types that take, return or hold a `PlayingBaseActions`:

[`InputMap.PlayingBase`](/game-api/types/global-i-l/inputmap#m-playingbase).
