---
title: "OpenXRControllerInput"
description: "class OpenXRControllerInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# OpenXRControllerInput

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** [`ControllerInput`](/game-api/types/global-c-d/controllerinput)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OpenXRControllerInput()"}</code> |

## Fields

| Member |
| --- |
| <Link id="m-istouchingthumb" /><code>{"bool isTouchingThumb"}</code> |
| <Link id="m-istouchingtrigger" /><code>{"bool isTouchingTrigger"}</code> |
| <Link id="m-longphotoispressed" /><code>{"bool longPhotoIsPressed"}</code> |
| <Link id="m-pose" /><code>{"PoseState pose"}</code> |

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-doubletapspeed" /><code>{"private const float doubleTapSpeed"}</code> |
| <Link id="m-doubletaptarget" /><code>{"private float doubleTapTarget"}</code> |
| <Link id="m-wastapping" /><code>{"private bool wasTapping"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-calculatedoubletap" /><code>{"void CalculateDoubleTap(bool isTapping)"}</code> |

## Used in

Members of other types that take, return or hold a `OpenXRControllerInput`:

[`OpenXRInputController.openXRInput`](/game-api/types/global-m-o/openxrinputcontroller#m-openxrinput), [`OpenXRWrapper.GetInput`](/game-api/types/global-m-o/openxrwrapper#m-getinput), [`OpenXRWrapper.LeftInput`](/game-api/types/global-m-o/openxrwrapper#m-leftinput), [`OpenXRWrapper.RightInput`](/game-api/types/global-m-o/openxrwrapper#m-rightinput).
