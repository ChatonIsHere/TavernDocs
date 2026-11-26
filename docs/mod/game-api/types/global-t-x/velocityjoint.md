---
title: "VelocityJoint"
description: "Hold joint for velocity-driven pickups."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VelocityJoint

A **class** in `Root.Township`, the global namespace.

Hold joint for velocity-driven pickups. `PickupJoints` adds it to the interactor's interaction point, and each physics step it sets the held body's velocity and angular velocity toward the hand.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VelocityJoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>22 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-connectedbody" /><code>{"private Rigidbody connectedBody"}</code> | <span className="api-desc">The held pickup's rigidbody.</span> |
| <Link id="m-grippointposition" /><code>{"private Vector3 gripPointPosition"}</code> | <span className="api-desc">The interaction point position this step, the unlimited target.</span> |
| <Link id="m-haspull" /><code>{"private bool hasPull"}</code> | <span className="api-desc">True while a pull transform is set.</span> |
| <Link id="m-islimitingpositionfrompickup" /><code>{"private bool isLimitingPositionFromPickup"}</code> | <span className="api-desc">Whether the pickup asked for the target to be kept within arm's reach of the shoulder.</span> |
| <Link id="m-ispullhorizontalonly" /><code>{"private bool isPullHorizontalOnly"}</code> | <span className="api-desc">Whether the pull aim drops the component along the hand's up axis.</span> |
| <Link id="m-isrotating" /><code>{"private bool isRotating"}</code> | <span className="api-desc">Backing field for `IsRotating`.</span> |
| <Link id="m-isswingable" /><code>{"private bool isSwingable"}</code> | <span className="api-desc">Copied from `Pickup.IsSwingable`. Swingable items move the joint target instead of having their velocity set.</span> |
| <Link id="m-joint" /><code>{"private ConfigurableJoint joint"}</code> | <span className="api-desc">Backing field for `Joint`.</span> |
| <Link id="m-lastgrabrotation" /><code>{"private Quaternion lastGrabRotation"}</code> | <span className="api-desc">Hand rotation at grab time, so the item keeps the angle it was grabbed at relative to the hand.</span> |
| <Link id="m-limitedposition" /><code>{"private Vector3 limitedPosition"}</code> | <span className="api-desc">The target position after limiting it to arm's reach.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logs failures while working out the pull rotation.</span> |
| <Link id="m-networkrigidbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkrigidbody">{"NetworkRigidbody"}</Link>{" networkRigidbody"}</code> | <span className="api-desc">The held body's `NetworkRigidbody`, turned off while held.</span> |
| <Link id="m-offsetrotation" /><code>{"private Quaternion offsetRotation"}</code> | <span className="api-desc">Backing field for `OffsetRotation`.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The held pickup.</span> |
| <Link id="m-positionmultiplier" /><code>{"private float positionMultiplier"}</code> | <span className="api-desc">Backing field for `PositionMultiplier`.</span> |
| <Link id="m-positionscaler" /><code>{"private AnimationCurve positionScaler"}</code> | <span className="api-desc">Backing field for `PositionScaler`.</span> |
| <Link id="m-pull" /><code>{"private Transform pull"}</code> | <span className="api-desc">Transform set by `SetPull`.</span> |
| <Link id="m-rotationmultiplier" /><code>{"private float rotationMultiplier"}</code> | <span className="api-desc">Backing field for `RotationMultiplier`.</span> |
| <Link id="m-rotationscaler" /><code>{"private AnimationCurve rotationScaler"}</code> | <span className="api-desc">Backing field for `RotationScaler`.</span> |
| <Link id="m-shoulder" /><code>{"private Transform shoulder"}</code> | <span className="api-desc">Shoulder transform from the hand's `ArmController`, used to limit reach. Null when the hand has no arm IK.</span> |
| <Link id="m-shoulderposition" /><code>{"private Vector3 shoulderPosition"}</code> | <span className="api-desc">Shoulder position this step, for reach limiting and gizmos.</span> |
| <Link id="m-velocitypickupsettings" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/velocitypickupsettings">{"VelocityPickupSettings"}</Link>{" velocityPickupSettings"}</code> | <span className="api-desc">The pickup type's settings. Its `IsLimitingJointPosition` must be on for reach limiting.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controller" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The controller of the hand holding the pickup, set in `Initialize`.</span> |
| <Link id="m-interactor" /><code><Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" { get; private set; }"}</code> | <span className="api-desc">The interactor (hand) holding the pickup.</span> |
| <Link id="m-isrotating-2" /><code>{"bool IsRotating { get; set; }"}</code> | <span className="api-desc">When false, the item is only pulled to the hand's position and its rotation isn't driven.</span> |
| <Link id="m-joint-2" /><code>{"Joint Joint { get; }"}</code> | <span className="api-desc">The `ConfigurableJoint` added in `Initialize`, or null after release.</span> |
| <Link id="m-offsetrotation-2" /><code>{"Quaternion OffsetRotation { get; set; }"}</code> | <span className="api-desc">A stored rotation offset. This class's own code never reads it.</span> |
| <Link id="m-positionmultiplier-2" /><code>{"float PositionMultiplier { get; set; }"}</code> | <span className="api-desc">Scales the velocity that pulls the item toward the hand.</span> |
| <Link id="m-positionscaler-2" /><code>{"AnimationCurve PositionScaler { get; set; }"}</code> | <span className="api-desc">Curve over distance to the target that scales the pull velocity.</span> |
| <Link id="m-rotationmultiplier-2" /><code>{"float RotationMultiplier { get; set; }"}</code> | <span className="api-desc">Scales the angular velocity that turns the item toward the hand's rotation.</span> |
| <Link id="m-rotationscaler-2" /><code>{"AnimationCurve RotationScaler { get; set; }"}</code> | <span className="api-desc">Curve over the remaining angle (0 to 1 for 0 to 180 degrees) that scales the turn speed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, Rigidbody connectedBody, bool isLimitingPosition, "}<Link to="/mod/game-api/types/global-t-x/velocitypickupsettings">{"VelocityPickupSettings"}</Link>{" velocityPickupSettings, Quaternion lastGrabRotation)"}</code> | <span className="api-desc">Starts the hold: adds a `ConfigurableJoint`, connects the pickup's body, turns off its `NetworkRigidbody` and hooks `InteractionEnded`.</span> |
| <Link id="m-setpull" /><code>{"void SetPull(Transform transform, bool isHorizontalOnly)"}</code> | <span className="api-desc">Makes the held item point away from the given transform, optionally only horizontally. `BowString` uses it for the drawing hand; null clears it.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdate" /><code>{"private void FixedUpdate()"}</code> | <span className="api-desc">While held, sets the body's velocity and spin toward the grip point (limited to arm's reach), or moves the joint target for swingable items.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor gizmos for the shoulder, grip point and arm-limited target.</span> |
| <Link id="m-pickupinteractionended" /><code>{"private void PickupInteractionEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When this hand lets go, turns the `NetworkRigidbody` back on (unless docked or still held), restores max angular velocity and destroys the joint.</span> |

</details>
