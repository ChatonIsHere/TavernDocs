---
title: "VelocityPickupSettings"
description: "class VelocityPickupSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VelocityPickupSettings

A **class** in `Root.Township`, no namespace.

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
| <Link id="m-islimitingjointposition-2" /><code>{"bool IsLimitingJointPosition { get; set; }"}</code> |  |
| <Link id="m-isusingdistancecalculation-2" /><code>{"bool IsUsingDistanceCalculation { get; }"}</code> |  |
| <Link id="m-positionscaler-2" /><code>{"AnimationCurve PositionScaler { get; }"}</code> |  |
| <Link id="m-rotationscaler-2" /><code>{"AnimationCurve RotationScaler { get; }"}</code> |  |
| <Link id="m-velocityjointpositionmultiplier-2" /><code>{"float VelocityJointPositionMultiplier { get; }"}</code> |  |
| <Link id="m-velocityjointrotationmultiplier-2" /><code>{"float VelocityJointRotationMultiplier { get; }"}</code> |  |
| <Link id="m-zanglerotationlimit-2" /><code>{"float ZAngleRotationLimit { get; }"}</code> |  |
| <Link id="m-zbounciness-2" /><code>{"float ZBounciness { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyenvironmentalpositiondrive" /><code>{"JointDrive ApplyEnvironmentalPositionDrive(JointDrive drive)"}</code> |  |
| <Link id="m-applyenvironmentalrotationdrive" /><code>{"JointDrive ApplyEnvironmentalRotationDrive(JointDrive drive)"}</code> |  |
| <Link id="m-applyrotationdrive" /><code>{"JointDrive ApplyRotationDrive(JointDrive drive)"}</code> |  |
| <Link id="m-applyrotationdrive-2" /><code>{"JointDrive ApplyRotationDrive(JointDrive drive, float distance)"}</code> |  |
| <Link id="m-appypositiondrive" /><code>{"JointDrive AppyPositionDrive(JointDrive drive)"}</code> |  |

## Used in

Members of other types that take, return or hold a `VelocityPickupSettings`:

[`VelocityJoint.Initialize`](/game-api/types/global-t-x/velocityjoint#m-initialize), [`VelocityJoint.velocityPickupSettings`](/game-api/types/global-t-x/velocityjoint#m-velocitypickupsettings).
