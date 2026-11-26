---
title: "VelocityJoint"
description: "class VelocityJoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VelocityJoint

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VelocityJoint()"}</code> |

## Fields

<details>
<summary>22 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-connectedbody" /><code>{"private Rigidbody connectedBody"}</code> |
| <Link id="m-grippointposition" /><code>{"private Vector3 gripPointPosition"}</code> |
| <Link id="m-haspull" /><code>{"private bool hasPull"}</code> |
| <Link id="m-islimitingpositionfrompickup" /><code>{"private bool isLimitingPositionFromPickup"}</code> |
| <Link id="m-ispullhorizontalonly" /><code>{"private bool isPullHorizontalOnly"}</code> |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> |
| <Link id="m-isswingable" /><code>{"private bool isSwingable"}</code> |
| <Link id="m-joint" /><code>{"private ConfigurableJoint joint"}</code> |
| <Link id="m-lastgrabrotation" /><code>{"private Quaternion lastGrabRotation"}</code> |
| <Link id="m-limitedposition" /><code>{"private Vector3 limitedPosition"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> |
| <Link id="m-offsetrotation" /><code>{"private Quaternion offsetRotation"}</code> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |
| <Link id="m-positionmultiplier" /><code>{"private float positionMultiplier"}</code> |
| <Link id="m-positionscaler" /><code>{"private AnimationCurve positionScaler"}</code> |
| <Link id="m-pull" /><code>{"private Transform pull"}</code> |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> |
| <Link id="m-rotationscaler" /><code>{"private AnimationCurve rotationScaler"}</code> |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> |
| <Link id="m-shoulderposition" /><code>{"private Vector3 shoulderPosition"}</code> |
| <Link id="m-velocitypickupsettings" /><code>{"private "}<Link to="/game-api/types/global-t-x/velocitypickupsettings">{"VelocityPickupSettings"}</Link>{" velocityPickupSettings"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-controller" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; private set; }"}</code> |
| <Link id="m-interactor" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; private set; }"}</code> |
| <Link id="m-isrotating-2" /><code>{"bool IsRotating { get; set; }"}</code> |
| <Link id="m-joint-2" /><code>{"Joint Joint { get; }"}</code> |
| <Link id="m-offsetrotation-2" /><code>{"Quaternion OffsetRotation { get; set; }"}</code> |
| <Link id="m-positionmultiplier-2" /><code>{"float PositionMultiplier { get; set; }"}</code> |
| <Link id="m-positionscaler-2" /><code>{"AnimationCurve PositionScaler { get; set; }"}</code> |
| <Link id="m-rotationmultiplier-2" /><code>{"float RotationMultiplier { get; set; }"}</code> |
| <Link id="m-rotationscaler-2" /><code>{"AnimationCurve RotationScaler { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Rigidbody connectedBody, bool isLimitingPosition, "}<Link to="/game-api/types/global-t-x/velocitypickupsettings">{"VelocityPickupSettings"}</Link>{" velocityPickupSettings, Quaternion lastGrabRotation)"}</code> |
| <Link id="m-setpull" /><code>{"void SetPull(Transform transform, bool isHorizontalOnly)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |
| <Link id="m-pickupinteractionended" /><code>{"private void PickupInteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |

</details>
