---
title: "ControllerInput"
description: "A snapshot of one hand controller's input: buttons, sticks, finger curl and hand velocity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerInput

A **class** in `Root.Township`, the global namespace.

A snapshot of one hand controller's input: buttons, sticks, finger curl and hand velocity. `SetAndCallEvents` copies a new snapshot in and fires the button events that changed.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Derived types** [`OpenXRControllerInput`](/mod/game-api/types/global-m-o/openxrcontrollerinput)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControllerInput()"}</code> | <span className="api-desc">Creates a `ControllerInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-booleaninputs" /><code>{"private readonly "}<Link to="/mod/game-api/types/global-i-l/inputsource">{"InputSource"}</Link>{"[] booleanInputs"}</code> | <span className="api-desc">All the button inputs in a fixed order, so `SetAndCallEvents` can copy and fire them in loops.</span> |
| <Link id="m-inputlength" /><code>{"private readonly int inputLength"}</code> | <span className="api-desc">Number of entries in `booleanInputs`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angularvelocity" /><code>{"Vector3 AngularVelocity { get; private set; }"}</code> | <span className="api-desc">Hand angular velocity in world space.</span> |
| <Link id="m-gestures" /><code>{"Vector2 Gestures { get; set; }"}</code> | <span className="api-desc">Stick value used for gesture input.</span> |
| <Link id="m-grab" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" Grab { get; }"}</code> | <span className="api-desc">Grab button.</span> |
| <Link id="m-grabassist" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" GrabAssist { get; }"}</code> | <span className="api-desc">Grab assist button.</span> |
| <Link id="m-grabaxis" /><code>{"float GrabAxis { get; set; }"}</code> | <span className="api-desc">Analogue grab value.</span> |
| <Link id="m-grabstrength" /><code>{"float GrabStrength { get; set; }"}</code> | <span className="api-desc">How hard the player is gripping.</span> |
| <Link id="m-hardgrab" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" HardGrab { get; }"}</code> | <span className="api-desc">Hard grab button.</span> |
| <Link id="m-hasskeleton" /><code>{"bool HasSkeleton { get; set; }"}</code> | <span className="api-desc">True if the controller reports finger tracking.</span> |
| <Link id="m-hasswipe" /><code>{"bool HasSwipe { get; set; }"}</code> | <span className="api-desc">True if the controller has a swipe surface.</span> |
| <Link id="m-lockforgestures" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" LockForGestures { get; }"}</code> | <span className="api-desc">Button that locks the hand for gestures.</span> |
| <Link id="m-longphoto" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" LongPhoto { get; private set; }"}</code> | <span className="api-desc">Long press of the photo button.</span> |
| <Link id="m-metamenu" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" MetaMenu { get; }"}</code> | <span className="api-desc">Meta menu (wrist menu) button, held.</span> |
| <Link id="m-releasetogglegrab" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ReleaseToggleGrab { get; }"}</code> | <span className="api-desc">Button that releases a toggled grab.</span> |
| <Link id="m-secondaryaxis" /><code>{"float SecondaryAxis { get; set; }"}</code> | <span className="api-desc">Secondary analogue value.</span> |
| <Link id="m-senditemleft" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SendItemLeft { get; }"}</code> | <span className="api-desc">Button that sends a held item to the left.</span> |
| <Link id="m-senditemright" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SendItemRight { get; }"}</code> | <span className="api-desc">Button that sends a held item to the right.</span> |
| <Link id="m-skeleton" /><code>{"float[] Skeleton { get; }"}</code> | <span className="api-desc">Curl of the five fingers.</span> |
| <Link id="m-smoothlocomotion" /><code>{"Vector2 SmoothLocomotion { get; set; }"}</code> | <span className="api-desc">Stick value for smooth movement.</span> |
| <Link id="m-smoothrotationspeed" /><code>{"float SmoothRotationSpeed { get; set; }"}</code> | <span className="api-desc">Speed for smooth turning.</span> |
| <Link id="m-snapturnleft" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SnapTurnLeft { get; }"}</code> | <span className="api-desc">Snap turn left button.</span> |
| <Link id="m-snapturnright" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SnapTurnRight { get; }"}</code> | <span className="api-desc">Snap turn right button.</span> |
| <Link id="m-swipemotion" /><code>{"Vector2 SwipeMotion { get; set; }"}</code> | <span className="api-desc">Swipe movement on the swipe surface.</span> |
| <Link id="m-swipetouch" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" SwipeTouch { get; }"}</code> | <span className="api-desc">Touch on the swipe surface.</span> |
| <Link id="m-takephoto" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" TakePhoto { get; }"}</code> | <span className="api-desc">Photo button.</span> |
| <Link id="m-teleport" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" Teleport { get; }"}</code> | <span className="api-desc">Teleport button.</span> |
| <Link id="m-togglegrab" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ToggleGrab { get; }"}</code> | <span className="api-desc">Toggle grab button.</span> |
| <Link id="m-togglemetamenu" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ToggleMetaMenu { get; }"}</code> | <span className="api-desc">Button that toggles the meta menu.</span> |
| <Link id="m-togglerun" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" ToggleRun { get; }"}</code> | <span className="api-desc">Run toggle button.</span> |
| <Link id="m-velocity" /><code>{"Vector3 Velocity { get; private set; }"}</code> | <span className="api-desc">Hand velocity in world space.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-calculateandsetvelocities" /><code>{"void CalculateAndSetVelocities("}<Link to="/mod/game-api/types/global-i-l/iplatformplayer">{"IPlatformPlayer"}</Link>{" player, Vector3 velocity, Vector3 angularVelocity)"}</code> | <span className="api-desc">Sets the hand velocities, rotated from the player's local space into world space.</span> |
| <Link id="m-getbutton" /><code><Link to="/mod/game-api/types/global-a-b/booleaninput">{"BooleanInput"}</Link>{" GetButton("}<Link to="/mod/game-api/types/global-e-h/generalinputtype">{"GeneralInputType"}</Link>{" button)"}</code> | <span className="api-desc">Returns the button for a `GeneralInputType`, or null.</span> |
| <Link id="m-setandcallevents" /><code>{"void SetAndCallEvents("}<Link to="/mod/game-api/types/global-p/playerinput">{"PlayerInput"}</Link>{" controller, "}<Link to="/mod/game-api/types/global-c-d/controllerinput">{"ControllerInput"}</Link>{" input)"}</code> | <span className="api-desc">Copies all values from another snapshot, then fires events for buttons that changed.</span> |

## Used in

Members of other types that take, return or hold a `ControllerInput`:

<div className="api-used-in">

[`ControllerDPad.input`](/mod/game-api/types/global-c-d/controllerdpad#m-input), [`DeviceInputController.CalculatePhoto`](/mod/game-api/types/global-c-d/deviceinputcontroller#m-calculatephoto), [`DeviceInputController.input`](/mod/game-api/types/global-c-d/deviceinputcontroller#m-input), [`DeviceInputController.Input`](/mod/game-api/types/global-c-d/deviceinputcontroller#m-input-2), [`DeviceInputController.PopulateInput`](/mod/game-api/types/global-c-d/deviceinputcontroller#m-populateinput), [`FlyCamInputController.PopulateInput`](/mod/game-api/types/global-e-h/flycaminputcontroller#m-populateinput), [`OpenXRInputController.Input`](/mod/game-api/types/global-m-o/openxrinputcontroller#m-input), [`OpenXRInputController.LerpTouchSkeleton`](/mod/game-api/types/global-m-o/openxrinputcontroller#m-lerptouchskeleton), [`OpenXRInputController.PopulateInput`](/mod/game-api/types/global-m-o/openxrinputcontroller#m-populateinput), [`PlayerInput.RawInput`](/mod/game-api/types/global-p/playerinput#m-rawinput), [`SteamVRInputController.PopulateInput`](/mod/game-api/types/global-s/steamvrinputcontroller#m-populateinput).

</div>
