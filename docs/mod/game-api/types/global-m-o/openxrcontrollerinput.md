---
title: "OpenXRControllerInput"
description: "Raw input state for one OpenXR controller, filled by OpenXRWrapper from Input System callbacks and read by OpenXRInputController."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenXRControllerInput

A **class** in `Root.Township`, the global namespace.

Raw input state for one OpenXR controller, filled by `OpenXRWrapper` from Input System callbacks and read by `OpenXRInputController`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** [`ControllerInput`](/mod/game-api/types/global-c-d/controllerinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OpenXRControllerInput()"}</code> | <span className="api-desc">Creates an `OpenXRControllerInput` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-istouchingthumb" /><code>{"bool isTouchingThumb"}</code> | <span className="api-desc">Whether the thumb is touching the thumb button or stick. Drives the hand pose.</span> |
| <Link id="m-istouchingtrigger" /><code>{"bool isTouchingTrigger"}</code> | <span className="api-desc">Whether the finger is touching the trigger. Drives the hand pose.</span> |
| <Link id="m-longphotoispressed" /><code>{"bool longPhotoIsPressed"}</code> | <span className="api-desc">Whether the photo button is held. Used to work out `TakePhoto`.</span> |
| <Link id="m-pose" /><code>{"PoseState pose"}</code> | <span className="api-desc">Latest tracked pose of the controller (position, rotation, velocity).</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-doubletapspeed" /><code>{"private const float doubleTapSpeed"}</code> | <span className="api-desc">Seconds allowed between taps for a double tap (1).</span> |
| <Link id="m-doubletaptarget" /><code>{"private float doubleTapTarget"}</code> | <span className="api-desc">Real time when the double tap window ends, or -1 when no tap is waiting.</span> |
| <Link id="m-wastapping" /><code>{"private bool wasTapping"}</code> | <span className="api-desc">Tap state from the last `CalculateDoubleTap` call.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculatedoubletap" /><code>{"void CalculateDoubleTap(bool isTapping)"}</code> | <span className="api-desc">Sets `ToggleGrab` true when a second tap starts within a second of the first.</span> |

## Used in

Members of other types that take, return or hold a `OpenXRControllerInput`:

<div className="api-used-in">

[`OpenXRInputController.openXRInput`](/mod/game-api/types/global-m-o/openxrinputcontroller#m-openxrinput), [`OpenXRWrapper.GetInput`](/mod/game-api/types/global-m-o/openxrwrapper#m-getinput), [`OpenXRWrapper.LeftInput`](/mod/game-api/types/global-m-o/openxrwrapper#m-leftinput), [`OpenXRWrapper.RightInput`](/mod/game-api/types/global-m-o/openxrwrapper#m-rightinput).

</div>
