---
title: "VelocityPickupSettings"
description: "Pickup type settings for items held with a velocity joint: how strongly the item follows the hand and the joint drive values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VelocityPickupSettings

A **class** in `Root.Township`, no namespace.

Pickup type settings for items held with a velocity joint: how strongly the item follows the hand and the joint drive values.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`PickupTypeSetting`](/game-api/types/global-p/pickuptypesetting)
- **Derived types** [`VelocityPickupSettings.Create`](/game-api/types/global-t-x/velocitypickupsettings-create)
- **Nested types** [`Create`](/game-api/types/global-t-x/velocitypickupsettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VelocityPickupSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-environmentpositiondriveforce" /><code>{"private float environmentPositionDriveForce"}</code> |  |
| <Link id="m-environmentrotationdriveforce" /><code>{"private float environmentRotationDriveForce"}</code> |  |
| <Link id="m-islimitingjointposition" /><code>{"private bool isLimitingJointPosition"}</code> |  |
| <Link id="m-isusingdistancecalculation" /><code>{"private bool isUsingDistanceCalculation"}</code> |  |
| <Link id="m-positiondamper" /><code>{"private float positionDamper"}</code> |  |
| <Link id="m-positionmaximumforce" /><code>{"private float positionMaximumForce"}</code> |  |
| <Link id="m-positionscaler" /><code>{"private AnimationCurve positionScaler"}</code> |  |
| <Link id="m-positionspring" /><code>{"private float positionSpring"}</code> |  |
| <Link id="m-rotationdamper" /><code>{"private float rotationDamper"}</code> |  |
| <Link id="m-rotationmaximumforce" /><code>{"private float rotationMaximumForce"}</code> |  |
| <Link id="m-rotationscaler" /><code>{"private AnimationCurve rotationScaler"}</code> |  |
| <Link id="m-rotationspring" /><code>{"private float rotationSpring"}</code> |  |
| <Link id="m-rotationspringoverdistance" /><code>{"private AnimationCurve rotationSpringOverDistance"}</code> |  |
| <Link id="m-velocityjointpositionmultiplier" /><code>{"private float velocityJointPositionMultiplier"}</code> |  |
| <Link id="m-velocityjointrotationmultiplier" /><code>{"private float velocityJointRotationMultiplier"}</code> |  |
| <Link id="m-zanglerotationlimit" /><code>{"private float zAngleRotationLimit"}</code> |  |
| <Link id="m-zbounciness" /><code>{"private float zBounciness"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-islimitingjointposition-2" /><code>{"bool IsLimitingJointPosition { get; set; }"}</code> | Whether the held item is kept within arm's reach of the shoulder. |
| <Link id="m-isusingdistancecalculation-2" /><code>{"bool IsUsingDistanceCalculation { get; }"}</code> | Whether the rotation spring should come from the distance curve. |
| <Link id="m-positionscaler-2" /><code>{"AnimationCurve PositionScaler { get; }"}</code> | Curve that scales how hard the item is pulled toward the hand. |
| <Link id="m-rotationscaler-2" /><code>{"AnimationCurve RotationScaler { get; }"}</code> | Curve that scales how hard the item is turned toward the hand's rotation. |
| <Link id="m-velocityjointpositionmultiplier-2" /><code>{"float VelocityJointPositionMultiplier { get; }"}</code> | Client: position pull strength. The server always uses 9. |
| <Link id="m-velocityjointrotationmultiplier-2" /><code>{"float VelocityJointRotationMultiplier { get; }"}</code> | Client: rotation pull strength. The server always uses 75. |
| <Link id="m-zanglerotationlimit-2" /><code>{"float ZAngleRotationLimit { get; }"}</code> | Z angle limit for swingable items, in degrees. |
| <Link id="m-zbounciness-2" /><code>{"float ZBounciness { get; }"}</code> | Bounciness of the Z angle limit for swingable items. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyenvironmentalpositiondrive" /><code>{"JointDrive ApplyEnvironmentalPositionDrive(JointDrive drive)"}</code> | Sets a drive's spring to the environment position force with no damping, for items held against the world. |
| <Link id="m-applyenvironmentalrotationdrive" /><code>{"JointDrive ApplyEnvironmentalRotationDrive(JointDrive drive)"}</code> | Sets a drive's spring to the environment rotation force with no damping. |
| <Link id="m-applyrotationdrive" /><code>{"JointDrive ApplyRotationDrive(JointDrive drive)"}</code> | Sets a drive's spring, damper and max force for rotation. The distance version reads the spring from a curve and logs it. |
| <Link id="m-applyrotationdrive-2" /><code>{"JointDrive ApplyRotationDrive(JointDrive drive, float distance)"}</code> | Sets a drive's spring, damper and max force for rotation. The distance version reads the spring from a curve and logs it. |
| <Link id="m-appypositiondrive" /><code>{"JointDrive AppyPositionDrive(JointDrive drive)"}</code> | Sets a drive's spring, damper and max force for position. Used for swingable items. |

## Used in

Members of other types that take, return or hold a `VelocityPickupSettings`:

[`VelocityJoint.Initialize`](/game-api/types/global-t-x/velocityjoint#m-initialize), [`VelocityJoint.velocityPickupSettings`](/game-api/types/global-t-x/velocityjoint#m-velocitypickupsettings).
