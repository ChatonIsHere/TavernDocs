---
title: "ClavicleControllerSettings"
description: "Asset with the curves and limits for turning a player's collarbones toward where the hands are, so the shoulders follow the arms."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClavicleControllerSettings

A **class** in `Root.Township`, `Alta.Character`.

Asset with the curves and limits for turning a player's collarbones toward where the hands are, so the shoulders follow the arms.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ClavicleControllerSettings.Create`](/game-api/types/alta-player/claviclecontrollersettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/claviclecontrollersettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClavicleControllerSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-anglecrossfade" /><code>{"private AnimationCurve angleCrossfade"}</code> |  |
| <Link id="m-claviclexrotationmultiplier" /><code>{"private float clavicleXRotationMultiplier"}</code> |  |
| <Link id="m-clavicleyrotationmultiplier" /><code>{"private float clavicleYRotationMultiplier"}</code> |  |
| <Link id="m-claviclezrotationmultiplier" /><code>{"private float clavicleZRotationMultiplier"}</code> |  |
| <Link id="m-isusingelbowhandaverageforyrotation" /><code>{"private bool isUsingElbowHandAverageForYRotation"}</code> |  |
| <Link id="m-targetxtoclaviclerotation" /><code>{"private AnimationCurve targetXToClavicleRotation"}</code> |  |
| <Link id="m-targetytoclaviclerotation" /><code>{"private AnimationCurve targetYToClavicleRotation"}</code> |  |
| <Link id="m-targetztoclaviclerotation" /><code>{"private AnimationCurve targetZToClavicleRotation"}</code> |  |
| <Link id="m-yrotationmax" /><code>{"private float yRotationMax"}</code> |  |
| <Link id="m-yrotationmin" /><code>{"private float yRotationMin"}</code> |  |
| <Link id="m-zrotationmax" /><code>{"private float zRotationMax"}</code> |  |
| <Link id="m-zrotationmin" /><code>{"private float zRotationMin"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anglecrossfade-2" /><code>{"AnimationCurve AngleCrossfade { get; }"}</code> | Blend by hand angle between using the hand's X and Z position. 0 is across the body, 90 in front, -90 behind. |
| <Link id="m-claviclexrotationmultiplier-2" /><code>{"float ClavicleXRotationMultiplier { get; }"}</code> | Scale on the X rotation curve's result. |
| <Link id="m-clavicleyrotationmultiplier-2" /><code>{"float ClavicleYRotationMultiplier { get; }"}</code> | Scale on the Y rotation curve's result. |
| <Link id="m-claviclezrotationmultiplier-2" /><code>{"float ClavicleZRotationMultiplier { get; }"}</code> | Scale on the Z rotation curve's result. |
| <Link id="m-isusingelbowhandaverageforyrotation-2" /><code>{"bool IsUsingElbowHandAverageForYRotation { get; }"}</code> | Whether Y rotation uses the average of elbow and hand instead of the hand alone. |
| <Link id="m-targetxtoclaviclerotation-2" /><code>{"AnimationCurve TargetXToClavicleRotation { get; }"}</code> | Curve from the target's X position to collarbone rotation. |
| <Link id="m-targetytoclaviclerotation-2" /><code>{"AnimationCurve TargetYToClavicleRotation { get; }"}</code> | Curve from the target's Y position to collarbone rotation. |
| <Link id="m-targetztoclaviclerotation-2" /><code>{"AnimationCurve TargetZToClavicleRotation { get; }"}</code> | Curve from the target's Z position to collarbone rotation. |
| <Link id="m-yrotationmax-2" /><code>{"float YRotationMax { get; }"}</code> | Largest Y rotation, in degrees. |
| <Link id="m-yrotationmin-2" /><code>{"float YRotationMin { get; }"}</code> | Smallest Y rotation, in degrees. |
| <Link id="m-zrotationmax-2" /><code>{"float ZRotationMax { get; }"}</code> | Largest Z rotation, in degrees. |
| <Link id="m-zrotationmin-2" /><code>{"float ZRotationMin { get; }"}</code> | Smallest Z rotation, in degrees. |

## Used in

Members of other types that take, return or hold a `ClavicleControllerSettings`:

[`ClavicleController.Settings`](/game-api/types/alta-player/claviclecontroller#m-settings), [`PlayerControllerSettings.clavicleControllerSettings`](/game-api/types/alta-player/playercontrollersettings#m-claviclecontrollersettings), [`PlayerControllerSettings.ClavicleControllerSettings`](/game-api/types/alta-player/playercontrollersettings#m-claviclecontrollersettings-2).
