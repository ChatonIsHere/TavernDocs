---
title: "GrabPoint"
description: "A plain serialized class, not a component. Runs wherever a grab is worked out (the holder's client first, then replayed elsewhere from the synced grab"
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabPoint

A **class** in `Root.Township`, no namespace.

A plain serialized class, not a component. Runs wherever a grab is worked out (the holder's client first, then replayed elsewhere from the synced grab point).

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Documented in** [Grab points and hand-touch points](/game-api/items/grab-points#grabpoint)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabPoint()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-rotationmode" /><code><Link to="/game-api/types/global-q-r/rotationmode">{"RotationMode"}</Link>{" rotationMode"}</code> |  |
| <Link id="m-dockedrestriction" /><code>{"private "}<Link to="/game-api/types/global-p/pickupfromdockrestriction">{"PickupFromDockRestriction"}</Link>{" dockedRestriction"}</code> |  |
| <Link id="m-enabledfromdocks" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> enabledFromDocks"}</code> |  |
| <Link id="m-interactor" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor"}</code> |  |
| <Link id="m-isdisabled" /><code>{"private bool isDisabled"}</code> |  |
| <Link id="m-isignoringangle" /><code>{"private bool isIgnoringAngle"}</code> |  |
| <Link id="m-issetupwithleft" /><code>{"private bool isSetupWithLeft"}</code> |  |
| <Link id="m-isusinglocal" /><code>{"private bool isUsingLocal"}</code> |  |
| <Link id="m-linear" /><code>{"private Vector3 linear"}</code> |  |
| <Link id="m-nondockedrestriction" /><code>{"private "}<Link to="/game-api/types/global-p/pickupfromdockrestriction">{"PickupFromDockRestriction"}</Link>{" nonDockedRestriction"}</code> |  |
| <Link id="m-offset" /><code>{"private float offset"}</code> |  |
| <Link id="m-poleforward" /><code>{"private Vector3 poleForward"}</code> |  |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |  |
| <Link id="m-refusemultiplehands" /><code>{"private bool refuseMultipleHands"}</code> |  |
| <Link id="m-rotationeuler" /><code>{"private Vector3 rotationEuler"}</code> |  |
| <Link id="m-thumbposition" /><code>{"private "}<Link to="/game-api/types/global-t-x/thumbposition">{"ThumbPosition"}</Link>{" thumbPosition"}</code> |  |
| <Link id="m-transform" /><code>{"private Transform transform"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-enabledfromdocks-2" /><code>{"List<"}<Link to="/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{"> EnabledFromDocks { get; }"}</code> |  |
| <Link id="m-isdisabled-2" /><code>{"bool IsDisabled { get; set; }"}</code> |  |
| <Link id="m-isocupied" /><code>{"bool IsOcupied { get; set; }"}</code> |  |
| <Link id="m-lastlinearposition" /><code>{"float LastLinearPosition { get; set; }"}</code> |  |
| <Link id="m-lastposition" /><code>{"Vector3 LastPosition { get; set; }"}</code> |  |
| <Link id="m-lastrotation" /><code>{"Quaternion LastRotation { get; set; }"}</code> |  |
| <Link id="m-nondockedrestriction-2" /><code><Link to="/game-api/types/global-p/pickupfromdockrestriction">{"PickupFromDockRestriction"}</Link>{" NonDockedRestriction { get; set; }"}</code> |  |
| <Link id="m-rotationmode-2" /><code><Link to="/game-api/types/global-q-r/rotationmode">{"RotationMode"}</Link>{" "}<Link to="/game-api/types/global-q-r/rotationmode">{"RotationMode"}</Link>{" { get; }"}</code> |  |
| <Link id="m-transform-2" /><code>{"Transform Transform { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"void ApplyTo(float scale, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" holder, Transform target)"}</code> |  |
| <Link id="m-applyto-2" /><code>{"void ApplyTo(float scale, Transform interactionPoint, Transform target)"}</code> |  |
| <Link id="m-checkscore" /><code>{"float CheckScore(Transform pickup, float scale, float distanceWeighting, float angleWeighting, Vector3 localHandPosition, Quaternion localHandRotation, bool isLeft, bool isDocked)"}</code> |  |
| <Link id="m-drawgizmos" /><code>{"void DrawGizmos(float scale)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GrabPoint`:

[`GrabPointParameters.Applied`](/game-api/types/global-e-h/grabpointparameters#m-applied), [`GrabPointParameters.GrabPointForPickup`](/game-api/types/global-e-h/grabpointparameters#m-grabpointforpickup), [`GrabPointParameters.GrabPointParameters`](/game-api/types/global-e-h/grabpointparameters#m-ctor-2), [`Pickup.bestGrab`](/game-api/types/global-p/pickup#m-bestgrab), [`Pickup.BestGrab`](/game-api/types/global-p/pickup#m-bestgrab-2), [`Pickup.grabPoints`](/game-api/types/global-p/pickup#m-grabpoints), [`Pickup.GrabPoints`](/game-api/types/global-p/pickup#m-grabpoints-2), [`Pickup.SetupGrabPoint`](/game-api/types/global-p/pickup#m-setupgrabpoint), [`TelescopicPickup.grabLeft`](/game-api/types/global-t-x/telescopicpickup#m-grableft), [`TelescopicPickup.grabRight`](/game-api/types/global-t-x/telescopicpickup#m-grabright).
