---
title: "VelocityPickupSettings"
description: "Pickup type settings for items held with a velocity joint: how strongly the item follows the hand and the joint drive values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VelocityPickupSettings

A **class** in `Root.Township`, the global namespace.

Pickup type settings for items held with a velocity joint: how strongly the item follows the hand and the joint drive values.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`PickupTypeSetting`](/mod/game-api/types/global-p/pickuptypesetting)
- **Derived types** [`VelocityPickupSettings.Create`](/mod/game-api/types/global-t-x/velocitypickupsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-t-x/velocitypickupsettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VelocityPickupSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>17 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-environmentpositiondriveforce" /><code>{"private float environmentPositionDriveForce"}</code> | <span className="api-desc">Position spring used when the joint is an environmental joint (no damping).</span> |
| <Link id="m-environmentrotationdriveforce" /><code>{"private float environmentRotationDriveForce"}</code> | <span className="api-desc">Rotation spring used when the joint is an environmental joint (no damping).</span> |
| <Link id="m-islimitingjointposition" /><code>{"private bool isLimitingJointPosition"}</code> | <span className="api-desc">If true, `VelocityJoint` limits how far the held item can be from the shoulder.</span> |
| <Link id="m-isusingdistancecalculation" /><code>{"private bool isUsingDistanceCalculation"}</code> | <span className="api-desc">Serialized option. Not read anywhere in this build.</span> |
| <Link id="m-positiondamper" /><code>{"private float positionDamper"}</code> | <span className="api-desc">Damper of the position drive for swingable pickups.</span> |
| <Link id="m-positionmaximumforce" /><code>{"private float positionMaximumForce"}</code> | <span className="api-desc">Maximum force of the position drive for swingable pickups.</span> |
| <Link id="m-positionscaler" /><code>{"private AnimationCurve positionScaler"}</code> | <span className="api-desc">Curve passed to the velocity joint to scale position following.</span> |
| <Link id="m-positionspring" /><code>{"private float positionSpring"}</code> | <span className="api-desc">Spring of the position drive for swingable pickups.</span> |
| <Link id="m-rotationdamper" /><code>{"private float rotationDamper"}</code> | <span className="api-desc">Damper of the rotation drive for swingable pickups.</span> |
| <Link id="m-rotationmaximumforce" /><code>{"private float rotationMaximumForce"}</code> | <span className="api-desc">Maximum force of the rotation drive for swingable pickups.</span> |
| <Link id="m-rotationscaler" /><code>{"private AnimationCurve rotationScaler"}</code> | <span className="api-desc">Curve passed to the velocity joint to scale rotation following.</span> |
| <Link id="m-rotationspring" /><code>{"private float rotationSpring"}</code> | <span className="api-desc">Spring of the rotation drive for swingable pickups.</span> |
| <Link id="m-rotationspringoverdistance" /><code>{"private AnimationCurve rotationSpringOverDistance"}</code> | <span className="api-desc">Rotation spring by distance, used by the distance overload of `ApplyRotationDrive` (which also logs every call).</span> |
| <Link id="m-velocityjointpositionmultiplier" /><code>{"private float velocityJointPositionMultiplier"}</code> | <span className="api-desc">Client: position multiplier for the held item's velocity joint. The server always uses 9.</span> |
| <Link id="m-velocityjointrotationmultiplier" /><code>{"private float velocityJointRotationMultiplier"}</code> | <span className="api-desc">Client: rotation multiplier for the held item's velocity joint. The server always uses 75.</span> |
| <Link id="m-zanglerotationlimit" /><code>{"private float zAngleRotationLimit"}</code> | <span className="api-desc">Angular Z limit, in degrees, for swingable pickups.</span> |
| <Link id="m-zbounciness" /><code>{"private float zBounciness"}</code> | <span className="api-desc">Bounciness of the angular Z limit for swingable pickups.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islimitingjointposition-2" /><code>{"bool IsLimitingJointPosition { get; set; }"}</code> | <span className="api-desc">Whether the held item is kept within arm's reach of the shoulder.</span> |
| <Link id="m-isusingdistancecalculation-2" /><code>{"bool IsUsingDistanceCalculation { get; }"}</code> | <span className="api-desc">Whether the rotation spring should come from the distance curve.</span> |
| <Link id="m-positionscaler-2" /><code>{"AnimationCurve PositionScaler { get; }"}</code> | <span className="api-desc">Curve that scales how hard the item is pulled toward the hand.</span> |
| <Link id="m-rotationscaler-2" /><code>{"AnimationCurve RotationScaler { get; }"}</code> | <span className="api-desc">Curve that scales how hard the item is turned toward the hand's rotation.</span> |
| <Link id="m-velocityjointpositionmultiplier-2" /><code>{"float VelocityJointPositionMultiplier { get; }"}</code> | <span className="api-desc">Client: position pull strength. The server always uses 9.</span> |
| <Link id="m-velocityjointrotationmultiplier-2" /><code>{"float VelocityJointRotationMultiplier { get; }"}</code> | <span className="api-desc">Client: rotation pull strength. The server always uses 75.</span> |
| <Link id="m-zanglerotationlimit-2" /><code>{"float ZAngleRotationLimit { get; }"}</code> | <span className="api-desc">Z angle limit for swingable items, in degrees.</span> |
| <Link id="m-zbounciness-2" /><code>{"float ZBounciness { get; }"}</code> | <span className="api-desc">Bounciness of the Z angle limit for swingable items.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyenvironmentalpositiondrive" /><code>{"JointDrive ApplyEnvironmentalPositionDrive(JointDrive drive)"}</code> | <span className="api-desc">Sets a drive's spring to the environment position force with no damping, for items held against the world.</span> |
| <Link id="m-applyenvironmentalrotationdrive" /><code>{"JointDrive ApplyEnvironmentalRotationDrive(JointDrive drive)"}</code> | <span className="api-desc">Sets a drive's spring to the environment rotation force with no damping.</span> |
| <Link id="m-applyrotationdrive" /><code>{"JointDrive ApplyRotationDrive(JointDrive drive)"}</code> | <span className="api-desc">Sets a drive's spring, damper and max force for rotation. The distance version reads the spring from a curve and logs it.</span> |
| <Link id="m-applyrotationdrive-2" /><code>{"JointDrive ApplyRotationDrive(JointDrive drive, float distance)"}</code> | <span className="api-desc">Sets a drive's spring, damper and max force for rotation. The distance version reads the spring from a curve and logs it.</span> |
| <Link id="m-appypositiondrive" /><code>{"JointDrive AppyPositionDrive(JointDrive drive)"}</code> | <span className="api-desc">Sets a drive's spring, damper and max force for position. Used for swingable items.</span> |

## Used in

Members of other types that take, return or hold a `VelocityPickupSettings`:

<div className="api-used-in">

[`VelocityJoint.Initialize`](/mod/game-api/types/global-t-x/velocityjoint#m-initialize), [`VelocityJoint.velocityPickupSettings`](/mod/game-api/types/global-t-x/velocityjoint#m-velocitypickupsettings).

</div>
