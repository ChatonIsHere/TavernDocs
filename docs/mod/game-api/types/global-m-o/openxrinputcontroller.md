---
title: "OpenXRInputController"
description: "Client: reads one hand's controller through OpenXR and fills the game's controller input, including velocity, finger curl and pose."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenXRInputController

An **abstract class** in `Root.Township`, the global namespace.

Client: reads one hand's controller through OpenXR and fills the game's controller input, including velocity, finger curl and pose.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`DeviceInputController`](/mod/game-api/types/global-c-d/deviceinputcontroller)
- **Derived types** [`BaseOpenXRInputController`](/mod/game-api/types/global-a-b/baseopenxrinputcontroller), [`GenericOpenXRInputController`](/mod/game-api/types/global-e-h/genericopenxrinputcontroller), [`PlayingOpenXRInputController`](/mod/game-api/types/global-p/playingopenxrinputcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OpenXRInputController("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> | <span className="api-desc">Creates an `OpenXRInputController` from `controller`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inputmap" /><code>{"protected static readonly "}<Link to="/mod/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" inputMap"}</code> | <span className="api-desc">Shared input map for OpenXR controllers.</span> |
| <Link id="m-openxrwrapper" /><code>{"protected static readonly "}<Link to="/mod/game-api/types/global-m-o/openxrwrapper">{"OpenXRWrapper"}</Link>{" openXRWrapper"}</code> | <span className="api-desc">Shared wrapper that holds the left and right OpenXR inputs.</span> |

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"private Vector3 angularVelocity"}</code> | <span className="api-desc">Angular velocity from `UpdateAngularVelocity`, passed into the input's velocities.</span> |
| <Link id="m-angularvelocitythreshold" /><code>{"private const float AngularVelocityThreshold"}</code> | <span className="api-desc">If the frame's rotation change has a `w` above this, angular velocity is treated as zero.</span> |
| <Link id="m-devicecharacteristics" /><code>{"private InputDeviceCharacteristics deviceCharacteristics"}</code> | <span className="api-desc">Left or right device characteristics for this hand.</span> |
| <Link id="m-devices" /><code>{"private static List<InputDevice> devices"}</code> | <span className="api-desc">Shared scratch list of input devices.</span> |
| <Link id="m-isrighthand" /><code>{"private bool isRightHand"}</code> | <span className="api-desc">True when this controller is for the right hand.</span> |
| <Link id="m-lerpspeed" /><code>{"private const float LerpSpeed"}</code> | <span className="api-desc">Seconds it takes the finger skeleton values to move fully towards their target.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-openxrinput" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/openxrcontrollerinput">{"OpenXRControllerInput"}</Link>{" openXRInput"}</code> | <span className="api-desc">The hand's input state from the shared `OpenXRWrapper`.</span> |
| <Link id="m-previousrotation" /><code>{"private Quaternion previousRotation"}</code> | <span className="api-desc">Hand rotation from the previous frame, used for angular velocity.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"protected override "}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" Input { get; }"}</code> | <span className="api-desc">This hand's OpenXR controller input.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-device" /><code>{"private XRController Device { get; }"}</code> | <span className="api-desc">The left or right `XRController`, used to send haptics.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-triggerhaptics" /><code>{"override void TriggerHaptics(float strength, float frequency, float remainingTime)"}</code> | <span className="api-desc">Sends a vibration of the given strength and time to this hand's controller.</span> |
| <Link id="m-updateposition" /><code>{"override void UpdatePosition()"}</code> | <span className="api-desc">Moves the hand target to the tracked controller pose, adjusted by the player height fix.</span> |
| <Link id="m-populateinput" /><code>{"protected override void PopulateInput("}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> | <span className="api-desc">Fills the input each frame: velocities, finger skeleton from touch and grip, swipe and photo button.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerptouchskeleton" /><code>{"private void LerpTouchSkeleton("}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input, int index, bool isTouching, float axis, float lerp)"}</code> | <span className="api-desc">Moves one finger's skeleton value towards its target, which depends on whether it's touching and the axis value.</span> |
| <Link id="m-updateangularvelocity" /><code>{"private void UpdateAngularVelocity()"}</code> | <span className="api-desc">Works out the hand's angular velocity from its rotation change since last frame, relative to the player's rotation.</span> |

</details>
