---
title: "OpenXRInputController"
description: "Client: reads one hand's controller through OpenXR and fills the game's controller input, including velocity, finger curl and pose."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenXRInputController

An **abstract class** in `Root.Township`, no namespace.

Client: reads one hand's controller through OpenXR and fills the game's controller input, including velocity, finger curl and pose.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`DeviceInputController`](/game-api/types/global-c-d/deviceinputcontroller)
- **Derived types** [`BaseOpenXRInputController`](/game-api/types/global-a-b/baseopenxrinputcontroller), [`GenericOpenXRInputController`](/game-api/types/global-e-h/genericopenxrinputcontroller), [`PlayingOpenXRInputController`](/game-api/types/global-p/playingopenxrinputcontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OpenXRInputController("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inputmap" /><code>{"protected static readonly "}<Link to="/game-api/types/global-i-l/inputmap">{"InputMap"}</Link>{" inputMap"}</code> | Shared input map for OpenXR controllers. |
| <Link id="m-openxrwrapper" /><code>{"protected static readonly "}<Link to="/game-api/types/global-m-o/openxrwrapper">{"OpenXRWrapper"}</Link>{" openXRWrapper"}</code> | Shared wrapper that holds the left and right OpenXR inputs. |

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-angularvelocity" /><code>{"private Vector3 angularVelocity"}</code> |
| <Link id="m-angularvelocitythreshold" /><code>{"private const float AngularVelocityThreshold"}</code> |
| <Link id="m-devicecharacteristics" /><code>{"private InputDeviceCharacteristics deviceCharacteristics"}</code> |
| <Link id="m-devices" /><code>{"private static List<InputDevice> devices"}</code> |
| <Link id="m-isrighthand" /><code>{"private bool isRightHand"}</code> |
| <Link id="m-lerpspeed" /><code>{"private const float LerpSpeed"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-openxrinput" /><code>{"private "}<Link to="/game-api/types/global-m-o/openxrcontrollerinput">{"OpenXRControllerInput"}</Link>{" openXRInput"}</code> |
| <Link id="m-previousrotation" /><code>{"private Quaternion previousRotation"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-input" /><code>{"protected override "}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" Input { get; }"}</code> | This hand's OpenXR controller input. |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-device" /><code>{"private XRController Device { get; }"}</code> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-triggerhaptics" /><code>{"override void TriggerHaptics(float strength, float frequency, float remainingTime)"}</code> | Sends a vibration of the given strength and time to this hand's controller. |
| <Link id="m-updateposition" /><code>{"override void UpdatePosition()"}</code> | Moves the hand target to the tracked controller pose, adjusted by the player height fix. |
| <Link id="m-populateinput" /><code>{"protected override void PopulateInput("}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> | Fills the input each frame: velocities, finger skeleton from touch and grip, swipe and photo button. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-lerptouchskeleton" /><code>{"private void LerpTouchSkeleton("}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input, int index, bool isTouching, float axis, float lerp)"}</code> |
| <Link id="m-updateangularvelocity" /><code>{"private void UpdateAngularVelocity()"}</code> |

</details>
