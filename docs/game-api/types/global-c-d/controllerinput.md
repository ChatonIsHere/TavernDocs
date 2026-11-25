---
title: "ControllerInput"
description: "A snapshot of one hand controller's input: buttons, sticks, finger curl and hand velocity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerInput

A **class** in `Root.Township`, no namespace.

A snapshot of one hand controller's input: buttons, sticks, finger curl and hand velocity. `SetAndCallEvents` copies a new snapshot in and fires the button events that changed.

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
| <Link id="m-angularvelocity" /><code>{"Vector3 AngularVelocity { get; private set; }"}</code> | Hand angular velocity in world space. |
| <Link id="m-gestures" /><code>{"Vector2 Gestures { get; set; }"}</code> | Stick value used for gesture input. |
| <Link id="m-grab" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" Grab { get; }"}</code> | Grab button. |
| <Link id="m-grabassist" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" GrabAssist { get; }"}</code> | Grab assist button. |
| <Link id="m-grabaxis" /><code>{"float GrabAxis { get; set; }"}</code> | Analogue grab value. |
| <Link id="m-grabstrength" /><code>{"float GrabStrength { get; set; }"}</code> | How hard the player is gripping. |
| <Link id="m-hardgrab" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" HardGrab { get; }"}</code> | Hard grab button. |
| <Link id="m-hasskeleton" /><code>{"bool HasSkeleton { get; set; }"}</code> | True if the controller reports finger tracking. |
| <Link id="m-hasswipe" /><code>{"bool HasSwipe { get; set; }"}</code> | True if the controller has a swipe surface. |
| <Link id="m-lockforgestures" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" LockForGestures { get; }"}</code> | Button that locks the hand for gestures. |
| <Link id="m-longphoto" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" LongPhoto { get; private set; }"}</code> | Long press of the photo button. |
| <Link id="m-metamenu" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" MetaMenu { get; }"}</code> | Meta menu (wrist menu) button, held. |
| <Link id="m-releasetogglegrab" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ReleaseToggleGrab { get; }"}</code> | Button that releases a toggled grab. |
| <Link id="m-secondaryaxis" /><code>{"float SecondaryAxis { get; set; }"}</code> | Secondary analogue value. |
| <Link id="m-senditemleft" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SendItemLeft { get; }"}</code> | Button that sends a held item to the left. |
| <Link id="m-senditemright" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SendItemRight { get; }"}</code> | Button that sends a held item to the right. |
| <Link id="m-skeleton" /><code>{"float[] Skeleton { get; }"}</code> | Curl of the five fingers. |
| <Link id="m-smoothlocomotion" /><code>{"Vector2 SmoothLocomotion { get; set; }"}</code> | Stick value for smooth movement. |
| <Link id="m-smoothrotationspeed" /><code>{"float SmoothRotationSpeed { get; set; }"}</code> | Speed for smooth turning. |
| <Link id="m-snapturnleft" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SnapTurnLeft { get; }"}</code> | Snap turn left button. |
| <Link id="m-snapturnright" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SnapTurnRight { get; }"}</code> | Snap turn right button. |
| <Link id="m-swipemotion" /><code>{"Vector2 SwipeMotion { get; set; }"}</code> | Swipe movement on the swipe surface. |
| <Link id="m-swipetouch" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SwipeTouch { get; }"}</code> | Touch on the swipe surface. |
| <Link id="m-takephoto" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" TakePhoto { get; }"}</code> | Photo button. |
| <Link id="m-teleport" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" Teleport { get; }"}</code> | Teleport button. |
| <Link id="m-togglegrab" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ToggleGrab { get; }"}</code> | Toggle grab button. |
| <Link id="m-togglemetamenu" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ToggleMetaMenu { get; }"}</code> | Button that toggles the meta menu. |
| <Link id="m-togglerun" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ToggleRun { get; }"}</code> | Run toggle button. |
| <Link id="m-velocity" /><code>{"Vector3 Velocity { get; private set; }"}</code> | Hand velocity in world space. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateandsetvelocities" /><code>{"void CalculateAndSetVelocities("}<Link to="/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, Vector3 velocity, Vector3 angularVelocity)"}</code> | Sets the hand velocities, rotated from the player's local space into world space. |
| <Link id="m-getbutton" /><code><Link to="/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" GetButton("}<Link to="/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" button)"}</code> | Returns the button for a `GeneralInputType`, or null. |
| <Link id="m-setandcallevents" /><code>{"void SetAndCallEvents("}<Link to="/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, "}<Link to="/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> | Copies all values from another snapshot, then fires events for buttons that changed. |

## Used in

Members of other types that take, return or hold a `ControllerInput`:

[`ControllerDPad.input`](/game-api/types/global-c-d/controllerdpad#m-input), [`DeviceInputController.CalculatePhoto`](/game-api/types/global-c-d/deviceinputcontroller#m-calculatephoto), [`DeviceInputController.input`](/game-api/types/global-c-d/deviceinputcontroller#m-input), [`DeviceInputController.Input`](/game-api/types/global-c-d/deviceinputcontroller#m-input-2), [`DeviceInputController.PopulateInput`](/game-api/types/global-c-d/deviceinputcontroller#m-populateinput), [`FlyCamInputController.PopulateInput`](/game-api/types/global-e-h/flycaminputcontroller#m-populateinput), [`OpenXRInputController.Input`](/game-api/types/global-m-o/openxrinputcontroller#m-input), [`OpenXRInputController.LerpTouchSkeleton`](/game-api/types/global-m-o/openxrinputcontroller#m-lerptouchskeleton), [`OpenXRInputController.PopulateInput`](/game-api/types/global-m-o/openxrinputcontroller#m-populateinput), [`PlayerInput.RawInput`](/game-api/types/global-p/playerinput#m-rawinput), [`SteamVRInputController.PopulateInput`](/game-api/types/global-s/steamvrinputcontroller#m-populateinput).
