---
title: "VelocityJoint"
description: "Hold joint for velocity-driven pickups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VelocityJoint

A **class** in `Root.Township`, no namespace.

Hold joint for velocity-driven pickups. `PickupJoints` adds it to the interactor's interaction point, and each physics step it sets the held body's velocity and angular velocity toward the hand.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VelocityJoint()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectedbody" /><code>{"private Rigidbody connectedBody"}</code> | The held pickup's rigidbody. |
| <Link id="m-grippointposition" /><code>{"private Vector3 gripPointPosition"}</code> | The interaction point position this step, the unlimited target. |
| <Link id="m-haspull" /><code>{"private bool hasPull"}</code> | True while a pull transform is set. |
| <Link id="m-islimitingpositionfrompickup" /><code>{"private bool isLimitingPositionFromPickup"}</code> | Whether the pickup asked for the target to be kept within arm's reach of the shoulder. |
| <Link id="m-ispullhorizontalonly" /><code>{"private bool isPullHorizontalOnly"}</code> | Whether the pull aim drops the component along the hand's up axis. |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> | Backing field for `IsRotating`. |
| <Link id="m-isswingable" /><code>{"private bool isSwingable"}</code> | Copied from `Pickup.IsSwingable`. Swingable items move the joint target instead of having their velocity set. |
| <Link id="m-joint" /><code>{"private ConfigurableJoint joint"}</code> | Backing field for `Joint`. |
| <Link id="m-lastgrabrotation" /><code>{"private Quaternion lastGrabRotation"}</code> | Hand rotation at grab time, so the item keeps the angle it was grabbed at relative to the hand. |
| <Link id="m-limitedposition" /><code>{"private Vector3 limitedPosition"}</code> | The target position after limiting it to arm's reach. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logs failures while working out the pull rotation. |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | The held body's `NetworkRigidbody`, turned off while held. |
| <Link id="m-offsetrotation" /><code>{"private Quaternion offsetRotation"}</code> | Backing field for `OffsetRotation`. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The held pickup. |
| <Link id="m-positionmultiplier" /><code>{"private float positionMultiplier"}</code> | Backing field for `PositionMultiplier`. |
| <Link id="m-positionscaler" /><code>{"private AnimationCurve positionScaler"}</code> | Backing field for `PositionScaler`. |
| <Link id="m-pull" /><code>{"private Transform pull"}</code> | Transform set by `SetPull`. |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> | Backing field for `RotationMultiplier`. |
| <Link id="m-rotationscaler" /><code>{"private AnimationCurve rotationScaler"}</code> | Backing field for `RotationScaler`. |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | Shoulder transform from the hand's `ArmController`, used to limit reach. Null when the hand has no arm IK. |
| <Link id="m-shoulderposition" /><code>{"private Vector3 shoulderPosition"}</code> | Shoulder position this step, for reach limiting and gizmos. |
| <Link id="m-velocitypickupsettings" /><code>{"private "}<Link to="/game-api/types/global-t-x/velocitypickupsettings">{"VelocityPickupSettings"}</Link>{" velocityPickupSettings"}</code> | The pickup type's settings. Its `IsLimitingJointPosition` must be on for reach limiting. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; private set; }"}</code> | The controller of the hand holding the pickup, set in `Initialize`. |
| <Link id="m-interactor" /><code><Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; private set; }"}</code> | The interactor (hand) holding the pickup. |
| <Link id="m-isrotating-2" /><code>{"bool IsRotating { get; set; }"}</code> | When false, the item is only pulled to the hand's position and its rotation isn't driven. |
| <Link id="m-joint-2" /><code>{"Joint Joint { get; }"}</code> | The `ConfigurableJoint` added in `Initialize`, or null after release. |
| <Link id="m-offsetrotation-2" /><code>{"Quaternion OffsetRotation { get; set; }"}</code> | A stored rotation offset. This class's own code never reads it. |
| <Link id="m-positionmultiplier-2" /><code>{"float PositionMultiplier { get; set; }"}</code> | Scales the velocity that pulls the item toward the hand. |
| <Link id="m-positionscaler-2" /><code>{"AnimationCurve PositionScaler { get; set; }"}</code> | Curve over distance to the target that scales the pull velocity. |
| <Link id="m-rotationmultiplier-2" /><code>{"float RotationMultiplier { get; set; }"}</code> | Scales the angular velocity that turns the item toward the hand's rotation. |
| <Link id="m-rotationscaler-2" /><code>{"AnimationCurve RotationScaler { get; set; }"}</code> | Curve over the remaining angle (0 to 1 for 0 to 180 degrees) that scales the turn speed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Rigidbody connectedBody, bool isLimitingPosition, "}<Link to="/game-api/types/global-t-x/velocitypickupsettings">{"VelocityPickupSettings"}</Link>{" velocityPickupSettings, Quaternion lastGrabRotation)"}</code> | Starts the hold: adds a `ConfigurableJoint`, connects the pickup's body, turns off its `NetworkRigidbody` and hooks `InteractionEnded`. |
| <Link id="m-setpull" /><code>{"void SetPull(Transform transform, bool isHorizontalOnly)"}</code> | Makes the held item point away from the given transform, optionally only horizontally. `BowString` uses it for the drawing hand; null clears it. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | While held, sets the body's velocity and spin toward the grip point (limited to arm's reach), or moves the joint target for swingable items. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor gizmos for the shoulder, grip point and arm-limited target. |
| <Link id="m-pickupinteractionended" /><code>{"private void PickupInteractionEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When this hand lets go, turns the `NetworkRigidbody` back on (unless docked or still held), restores max angular velocity and destroys the joint. |

</details>
