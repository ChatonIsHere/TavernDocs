---
title: "ControllerInput"
description: "class ControllerInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerInput

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Derived types** [`OpenXRControllerInput`](/game-api/types/global-m-o/openxrcontrollerinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerInput()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-booleaninputs" /><code>{"private readonly "}<Link to="/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{"[] booleanInputs"}</code> |  |
| <Link id="m-inputlength" /><code>{"private readonly int inputLength"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"Vector3 AngularVelocity { get; private set; }"}</code> |  |
| <Link id="m-gestures" /><code>{"Vector2 Gestures { get; set; }"}</code> |  |
| <Link id="m-grab" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" Grab { get; }"}</code> |  |
| <Link id="m-grabassist" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" GrabAssist { get; }"}</code> |  |
| <Link id="m-grabaxis" /><code>{"float GrabAxis { get; set; }"}</code> |  |
| <Link id="m-grabstrength" /><code>{"float GrabStrength { get; set; }"}</code> |  |
| <Link id="m-hardgrab" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" HardGrab { get; }"}</code> |  |
| <Link id="m-hasskeleton" /><code>{"bool HasSkeleton { get; set; }"}</code> |  |
| <Link id="m-hasswipe" /><code>{"bool HasSwipe { get; set; }"}</code> |  |
| <Link id="m-lockforgestures" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" LockForGestures { get; }"}</code> |  |
| <Link id="m-longphoto" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" LongPhoto { get; private set; }"}</code> |  |
| <Link id="m-metamenu" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" MetaMenu { get; }"}</code> |  |
| <Link id="m-releasetogglegrab" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ReleaseToggleGrab { get; }"}</code> |  |
| <Link id="m-secondaryaxis" /><code>{"float SecondaryAxis { get; set; }"}</code> |  |
| <Link id="m-senditemleft" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SendItemLeft { get; }"}</code> |  |
| <Link id="m-senditemright" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SendItemRight { get; }"}</code> |  |
| <Link id="m-skeleton" /><code>{"float[] Skeleton { get; }"}</code> |  |
| <Link id="m-smoothlocomotion" /><code>{"Vector2 SmoothLocomotion { get; set; }"}</code> |  |
| <Link id="m-smoothrotationspeed" /><code>{"float SmoothRotationSpeed { get; set; }"}</code> |  |
| <Link id="m-snapturnleft" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SnapTurnLeft { get; }"}</code> |  |
| <Link id="m-snapturnright" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SnapTurnRight { get; }"}</code> |  |
| <Link id="m-swipemotion" /><code>{"Vector2 SwipeMotion { get; set; }"}</code> |  |
| <Link id="m-swipetouch" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SwipeTouch { get; }"}</code> |  |
| <Link id="m-takephoto" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" TakePhoto { get; }"}</code> |  |
| <Link id="m-teleport" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" Teleport { get; }"}</code> |  |
| <Link id="m-togglegrab" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ToggleGrab { get; }"}</code> |  |
| <Link id="m-togglemetamenu" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ToggleMetaMenu { get; }"}</code> |  |
| <Link id="m-togglerun" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ToggleRun { get; }"}</code> |  |
| <Link id="m-velocity" /><code>{"Vector3 Velocity { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateandsetvelocities" /><code>{"void CalculateAndSetVelocities("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, Vector3 velocity, Vector3 angularVelocity)"}</code> |  |
| <Link id="m-getbutton" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" GetButton("}<Link to="/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" button)"}</code> |  |
| <Link id="m-setandcallevents" /><code>{"void SetAndCallEvents("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, "}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ControllerInput`:

[`ControllerDPad.input`](/game-api/types/global-c-d/controllerdpad#m-input), [`DeviceInputController.CalculatePhoto`](/game-api/types/global-c-d/deviceinputcontroller#m-calculatephoto), [`DeviceInputController.input`](/game-api/types/global-c-d/deviceinputcontroller#m-input), [`DeviceInputController.Input`](/game-api/types/global-c-d/deviceinputcontroller#m-input-2), [`DeviceInputController.PopulateInput`](/game-api/types/global-c-d/deviceinputcontroller#m-populateinput), [`FlyCamInputController.PopulateInput`](/game-api/types/global-e-h/flycaminputcontroller#m-populateinput), [`OpenXRInputController.Input`](/game-api/types/global-m-o/openxrinputcontroller#m-input), [`OpenXRInputController.LerpTouchSkeleton`](/game-api/types/global-m-o/openxrinputcontroller#m-lerptouchskeleton), [`OpenXRInputController.PopulateInput`](/game-api/types/global-m-o/openxrinputcontroller#m-populateinput), [`PlayerInput.RawInput`](/game-api/types/global-p/playerinput#m-rawinput), [`SteamVRInputController.PopulateInput`](/game-api/types/global-s/steamvrinputcontroller#m-populateinput).
