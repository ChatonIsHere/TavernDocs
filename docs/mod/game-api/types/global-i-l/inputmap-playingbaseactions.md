---
title: "InputMap.PlayingBaseActions"
description: "Typed access to the PlayingBase action map of InputMap, one InputAction per input."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InputMap.PlayingBaseActions

A **struct** in `Root.Township`, the global namespace.

Typed access to the `PlayingBase` action map of `InputMap`, one `InputAction` per input. Get it from `inputMap.PlayingBase`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Nested in** [`InputMap`](/mod/game-api/types/global-i-l/inputmap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayingBaseActions("}<Link to="/mod/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" wrapper)"}</code> | <span className="api-desc">Creates an `InputMap.PlayingBaseActions` from `wrapper`.</span> |

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
| <Link id="m-angularvelocity" /><code>{"InputAction AngularVelocity { get; }"}</code> | <span className="api-desc">The controller's angular velocity.</span> |
| <Link id="m-directioninput" /><code>{"InputAction DirectionInput { get; }"}</code> | <span className="api-desc">Thumbstick or trackpad direction, depending on the controller.</span> |
| <Link id="m-enabled" /><code>{"bool enabled { get; }"}</code> | <span className="api-desc">True if this map is enabled.</span> |
| <Link id="m-grabstrength" /><code>{"InputAction GrabStrength { get; }"}</code> | <span className="api-desc">Valve Index grip force.</span> |
| <Link id="m-interact" /><code>{"InputAction Interact { get; }"}</code> | <span className="api-desc">Grip button (trigger on Vive wands), the game's grab and interact.</span> |
| <Link id="m-metamenu" /><code>{"InputAction MetaMenu { get; }"}</code> | <span className="api-desc">Menu button: secondary face button on Oculus, menu on Vive and WMR.</span> |
| <Link id="m-pose" /><code>{"InputAction Pose { get; }"}</code> | <span className="api-desc">The controller's full tracked pose.</span> |
| <Link id="m-position" /><code>{"InputAction Position { get; }"}</code> | <span className="api-desc">The controller's tracked position.</span> |
| <Link id="m-rotation" /><code>{"InputAction Rotation { get; }"}</code> | <span className="api-desc">The controller's tracked rotation.</span> |
| <Link id="m-secondaryinteract" /><code>{"InputAction SecondaryInteract { get; }"}</code> | <span className="api-desc">Trigger press (grip on Vive).</span> |
| <Link id="m-squeeze" /><code>{"InputAction Squeeze { get; }"}</code> | <span className="api-desc">Grip axis.</span> |
| <Link id="m-takescreenshotlong" /><code>{"InputAction TakeScreenShotLong { get; }"}</code> | <span className="api-desc">Trigger press, for the long-press photo.</span> |
| <Link id="m-teleport" /><code>{"InputAction Teleport { get; }"}</code> | <span className="api-desc">Primary face button on Oculus, trackpad press on Vive and WMR.</span> |
| <Link id="m-togglerun" /><code>{"InputAction ToggleRun { get; }"}</code> | <span className="api-desc">Thumbstick or trackpad click.</span> |
| <Link id="m-touchingindexaxis" /><code>{"InputAction TouchingIndexAxis { get; }"}</code> | <span className="api-desc">Whether, or how far, the finger is on the trigger.</span> |
| <Link id="m-touchingthumb" /><code>{"InputAction TouchingThumb { get; }"}</code> | <span className="api-desc">Thumb touching a face button, thumbstick or trackpad.</span> |
| <Link id="m-touchingtriggerbutton" /><code>{"InputAction TouchingTriggerButton { get; }"}</code> | <span className="api-desc">Valve Index trigger touch.</span> |
| <Link id="m-triggeraxis" /><code>{"InputAction TriggerAxis { get; }"}</code> | <span className="api-desc">Trigger axis.</span> |
| <Link id="m-velocity" /><code>{"InputAction Velocity { get; }"}</code> | <span className="api-desc">The controller's linear velocity.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> | <span className="api-desc">Disables this map.</span> |
| <Link id="m-enable" /><code>{"void Enable()"}</code> | <span className="api-desc">Enables this map.</span> |
| <Link id="m-get" /><code>{"InputActionMap Get()"}</code> | <span className="api-desc">The underlying `InputActionMap`.</span> |
| <Link id="m-op-implicit" /><code>{"static InputActionMap op_Implicit("}<Link to="/mod/game-api/types/global-i-l/inputmap-playingbaseactions">{"InputMap.PlayingBaseActions"}</Link>{" set)"}</code> | <span className="api-desc">Converts to the underlying `InputActionMap`.</span> |
| <Link id="m-setcallbacks" /><code>{"void SetCallbacks("}<Link to="/mod/game-api/types/global-i-l/inputmap-iplayingbaseactions">{"InputMap.IPlayingBaseActions"}</Link>{" instance)"}</code> | <span className="api-desc">Replaces the callback receiver for every action in this map. Pass null to remove it.</span> |

## Used in

Members of other types that take, return or hold a `PlayingBaseActions`:

<div className="api-used-in">

[`InputMap.PlayingBase`](/mod/game-api/types/global-i-l/inputmap#m-playingbase).

</div>
