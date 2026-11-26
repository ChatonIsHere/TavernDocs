---
title: "GrabPoint"
description: "A spot on a pickup where a hand can hold it, with a rule for how the hand may turn."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabPoint

A **class** in `Root.Township`, the global namespace.

A spot on a pickup where a hand can hold it, with a rule for how the hand may turn. A plain serialized class; a `Pickup` has an array of them and grabs the lowest scoring one.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Documented in** [Grab points and hand-touch points](/mod/game-api/items/grab-points#grabpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabPoint()"}</code> | <span className="api-desc">Creates a `GrabPoint` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-rotationmode" /><code><Link to="/mod/game-api/types/global-q-r/rotationmode">{"RotationMode"}</Link>{" rotationMode"}</code> | <span className="api-desc">Backing field for `RotationMode`.</span> |

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockedrestriction" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupfromdockrestriction">{"PickupFromDockRestriction"}</Link>{" dockedRestriction"}</code> | <span className="api-desc">Hand and rotation limits used when grabbing the pickup out of a dock: can block the left or right hand, or force fixed rotation.</span> |
| <Link id="m-enabledfromdocks" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> enabledFromDocks"}</code> | <span className="api-desc">Backing field for `EnabledFromDocks`.</span> |
| <Link id="m-interactor" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> | <span className="api-desc">Not used by this class.</span> |
| <Link id="m-isdisabled" /><code>{"private bool isDisabled"}</code> | <span className="api-desc">Backing field for `IsDisabled`. Shown under Debug in the inspector.</span> |
| <Link id="m-isignoringangle" /><code>{"private bool isIgnoringAngle"}</code> | <span className="api-desc">When true, `CheckScore` scores only on distance and ignores the hand angle.</span> |
| <Link id="m-issetupwithleft" /><code>{"private bool isSetupWithLeft"}</code> | <span className="api-desc">For `FixedFlip` mode, which hand the fixed rotation was authored for; the other hand gets it flipped 180 degrees.</span> |
| <Link id="m-isusinglocal" /><code>{"private bool isUsingLocal"}</code> | <span className="api-desc">With a `transform` set, read its local position and rotation directly instead of converting from world space.</span> |
| <Link id="m-linear" /><code>{"private Vector3 linear"}</code> | <span className="api-desc">Local axis the grip can slide along; the hand's position is projected onto it.</span> |
| <Link id="m-nondockedrestriction" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickupfromdockrestriction">{"PickupFromDockRestriction"}</Link>{" nonDockedRestriction"}</code> | <span className="api-desc">Backing field for `NonDockedRestriction`: the hand and rotation limits used when the pickup isn't docked.</span> |
| <Link id="m-offset" /><code>{"private float offset"}</code> | <span className="api-desc">Sideways shift of the hand along its right axis, mirrored for the left hand, before scoring.</span> |
| <Link id="m-poleforward" /><code>{"private Vector3 poleForward"}</code> | <span className="api-desc">Pole direction for the pole modes. In `Surface` mode it holds the surface half extents instead.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Local grip position used when no `transform` is set.</span> |
| <Link id="m-refusemultiplehands" /><code>{"private bool refuseMultipleHands"}</code> | <span className="api-desc">When true, `ApplyTo` marks the point occupied so a second hand can't use it.</span> |
| <Link id="m-rotationeuler" /><code>{"private Vector3 rotationEuler"}</code> | <span className="api-desc">Local grip rotation in Euler angles, used when no `transform` is set.</span> |
| <Link id="m-thumbposition" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/thumbposition">{"ThumbPosition"}</Link>{" thumbPosition"}</code> | <span className="api-desc">Thumb pose given to the holder's grip animator when the point is applied.</span> |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> | <span className="api-desc">Backing field for `Transform`. When set, the grip position and rotation come from it.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enabledfromdocks-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> EnabledFromDocks { get; }"}</code> | <span className="api-desc">If not empty, the point can only be used while docked when the dock is one of these kinds. Undocked, it is always usable.</span> |
| <Link id="m-isdisabled-2" /><code>{"bool IsDisabled { get; set; }"}</code> | <span className="api-desc">Turns the point off.</span> |
| <Link id="m-isocupied" /><code>{"bool IsOcupied { get; set; }"}</code> | <span className="api-desc">Taken by a hand. Only set for points that refuse a second hand (misspelt in the code).</span> |
| <Link id="m-lastlinearposition" /><code>{"float LastLinearPosition { get; set; }"}</code> | <span className="api-desc">Where along the linear extent (0 to 1) the hand ended up in the last `CheckScore`.</span> |
| <Link id="m-lastposition" /><code>{"Vector3 LastPosition { get; set; }"}</code> | <span className="api-desc">Fitted local position from the last `CheckScore`.</span> |
| <Link id="m-lastrotation" /><code>{"Quaternion LastRotation { get; set; }"}</code> | <span className="api-desc">Fitted local rotation from the last `CheckScore`.</span> |
| <Link id="m-nondockedrestriction-2" /><code><Link to="/mod/game-api/types/global-p/pickupfromdockrestriction">{"PickupFromDockRestriction"}</Link>{" NonDockedRestriction { get; set; }"}</code> | <span className="api-desc">Flags for when the item is not docked: no left hand, no right hand, or force fixed rotation.</span> |
| <Link id="m-rotationmode-2" /><code><Link to="/mod/game-api/types/global-q-r/rotationmode">{"RotationMode"}</Link>{" "}<Link to="/mod/game-api/types/global-q-r/rotationmode">{"RotationMode"}</Link>{" { get; }"}</code> | <span className="api-desc">How the hand's rotation is fitted: free, fixed, fixed flip, pole, one-way pole or surface.</span> |
| <Link id="m-transform-2" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">Transform marking the point, if used. Otherwise a stored local position and rotation are used.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"void ApplyTo(float scale, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" holder, Transform target)"}</code> | <span className="api-desc">Moves the item so the hand sits on the pose from the last `CheckScore`. Marks single-hand points as taken.</span> |
| <Link id="m-applyto-2" /><code>{"void ApplyTo(float scale, Transform interactionPoint, Transform target)"}</code> | <span className="api-desc">Moves the item so the hand sits on the pose from the last `CheckScore`. Marks single-hand points as taken.</span> |
| <Link id="m-checkscore" /><code>{"float CheckScore(Transform pickup, float scale, float distanceWeighting, float angleWeighting, Vector3 localHandPosition, Quaternion localHandRotation, bool isLeft, bool isDocked)"}</code> | <span className="api-desc">Scores a hand against this point (distance plus angle) and stores the fitted pose. Infinity means not allowed for this hand.</span> |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float scale)"}</code> | <span className="api-desc">Editor: draws the point, its axes, linear extent and pole or surface limits.</span> |

## Used in

Members of other types that take, return or hold a `GrabPoint`:

<div className="api-used-in">

[`GrabPointParameters.Applied`](/mod/game-api/types/global-e-h/grabpointparameters#m-applied), [`GrabPointParameters.GrabPointForPickup`](/mod/game-api/types/global-e-h/grabpointparameters#m-grabpointforpickup), [`GrabPointParameters.GrabPointParameters`](/mod/game-api/types/global-e-h/grabpointparameters#m-ctor-2), [`Pickup.bestGrab`](/mod/game-api/types/global-p/pickup#m-bestgrab), [`Pickup.BestGrab`](/mod/game-api/types/global-p/pickup#m-bestgrab-2), [`Pickup.grabPoints`](/mod/game-api/types/global-p/pickup#m-grabpoints), [`Pickup.GrabPoints`](/mod/game-api/types/global-p/pickup#m-grabpoints-2), [`Pickup.SetupGrabPoint`](/mod/game-api/types/global-p/pickup#m-setupgrabpoint), [`TelescopicPickup.grabLeft`](/mod/game-api/types/global-t-x/telescopicpickup#m-grableft), [`TelescopicPickup.grabRight`](/mod/game-api/types/global-t-x/telescopicpickup#m-grabright).

</div>
