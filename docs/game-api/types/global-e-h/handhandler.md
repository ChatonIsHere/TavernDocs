---
title: "HandHandler"
description: "Client: per-hand state for smooth locomotion, with the hand's controller and its teleporter, rotator and gesture input."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandHandler

A **class** in `Root.Township`, no namespace.

Client: per-hand state for smooth locomotion, with the hand's controller and its teleporter, rotator and gesture input. Get them from `SmoothLocomotion.LeftHand` and `RightHand`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandHandler("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Creates a `HandHandler` from `controller`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anglestrength" /><code>{"float AngleStrength { get; set; }"}</code> | Not used by the game's own code. |
| <Link id="m-bodyoffset" /><code><Link to="/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" BodyOffset { get; set; }"}</code> | Not used by the game's own code. |
| <Link id="m-closedposition" /><code>{"Vector3? ClosedPosition { get; set; }"}</code> | Not used by the game's own code. |
| <Link id="m-closedrotation" /><code>{"Quaternion ClosedRotation { get; set; }"}</code> | Not used by the game's own code. |
| <Link id="m-controller" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; }"}</code> | The hand's controller. |
| <Link id="m-controllertransform" /><code>{"Transform ControllerTransform { get; }"}</code> | The controller's transform. |
| <Link id="m-cornerposition" /><code>{"Vector3 CornerPosition { get; set; }"}</code> | Not used by the game's own code. |
| <Link id="m-gestureproxy" /><code><Link to="/game-api/types/global-c-d/controlleractionproxy">{"ControllerActionProxy"}</Link>{" GestureProxy { get; }"}</code> | The controller's gesture action input. |
| <Link id="m-isinteractinterrupted" /><code>{"bool IsInteractInterrupted { get; }"}</code> | True when interact is held but nothing is being interacted with, outside free gesture mode with a skeleton. Smooth locomotion checks it. |
| <Link id="m-isvalidgrab" /><code>{"bool IsValidGrab { get; set; }"}</code> | Not used by the game's own code. |
| <Link id="m-otherhand" /><code><Link to="/game-api/types/global-e-h/handhandler">{"HandHandler"}</Link>{" OtherHand { get; set; }"}</code> | The handler for the other hand. |
| <Link id="m-rotator" /><code><Link to="/game-api/types/global-q-r/roomrotator">{"RoomRotator"}</Link>{" Rotator { get; }"}</code> | The controller's room rotator extension. |
| <Link id="m-teleporter" /><code><Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" "}<Link to="/game-api/types/global-t-x/teleporter">{"Teleporter"}</Link>{" { get; }"}</code> | The controller's teleporter extension. |

## Used in

Members of other types that take, return or hold a `HandHandler`:

[`SmoothLocomotion.ActiveHand`](/game-api/types/global-s/smoothlocomotion#m-activehand), [`SmoothLocomotion.Hands`](/game-api/types/global-s/smoothlocomotion#m-hands), [`SmoothLocomotion.LeftHand`](/game-api/types/global-s/smoothlocomotion#m-lefthand), [`SmoothLocomotion.OtherHand`](/game-api/types/global-s/smoothlocomotion#m-otherhand), [`SmoothLocomotion.RightHand`](/game-api/types/global-s/smoothlocomotion#m-righthand).
