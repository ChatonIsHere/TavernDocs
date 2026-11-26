---
title: "OpenXRControllerInput"
description: "Raw input state for one OpenXR controller, filled by OpenXRWrapper from Input System callbacks and read by OpenXRInputController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenXRControllerInput

A **class** in `Root.Township`, no namespace.

Raw input state for one OpenXR controller, filled by `OpenXRWrapper` from Input System callbacks and read by `OpenXRInputController`.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`ControllerInput`](/game-api/types/global-c-d/controllerinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OpenXRControllerInput()"}</code> | Creates an `OpenXRControllerInput` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-istouchingthumb" /><code>{"bool isTouchingThumb"}</code> | Whether the thumb is touching the thumb button or stick. Drives the hand pose. |
| <Link id="m-istouchingtrigger" /><code>{"bool isTouchingTrigger"}</code> | Whether the finger is touching the trigger. Drives the hand pose. |
| <Link id="m-longphotoispressed" /><code>{"bool longPhotoIsPressed"}</code> | Whether the photo button is held. Used to work out `TakePhoto`. |
| <Link id="m-pose" /><code>{"PoseState pose"}</code> | Latest tracked pose of the controller (position, rotation, velocity). |

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-doubletapspeed" /><code>{"private const float doubleTapSpeed"}</code> | Seconds allowed between taps for a double tap (1). |
| <Link id="m-doubletaptarget" /><code>{"private float doubleTapTarget"}</code> | Real time when the double tap window ends, or -1 when no tap is waiting. |
| <Link id="m-wastapping" /><code>{"private bool wasTapping"}</code> | Tap state from the last `CalculateDoubleTap` call. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatedoubletap" /><code>{"void CalculateDoubleTap(bool isTapping)"}</code> | Sets `ToggleGrab` true when a second tap starts within a second of the first. |

## Used in

Members of other types that take, return or hold a `OpenXRControllerInput`:

[`OpenXRInputController.openXRInput`](/game-api/types/global-m-o/openxrinputcontroller#m-openxrinput), [`OpenXRWrapper.GetInput`](/game-api/types/global-m-o/openxrwrapper#m-getinput), [`OpenXRWrapper.LeftInput`](/game-api/types/global-m-o/openxrwrapper#m-leftinput), [`OpenXRWrapper.RightInput`](/game-api/types/global-m-o/openxrwrapper#m-rightinput).
