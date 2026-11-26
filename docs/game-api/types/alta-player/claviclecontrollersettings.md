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

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClavicleControllerSettings()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglecrossfade" /><code>{"private AnimationCurve angleCrossfade"}</code> | Blends the z rotation between the x-position and z-position curves by the hand's angle around the body (0 across, 90 in front, -90 behind). |
| <Link id="m-claviclexrotationmultiplier" /><code>{"private float clavicleXRotationMultiplier"}</code> | Scales the result of `targetXToClavicleRotation`. |
| <Link id="m-clavicleyrotationmultiplier" /><code>{"private float clavicleYRotationMultiplier"}</code> | Scales the result of `targetYToClavicleRotation`. |
| <Link id="m-claviclezrotationmultiplier" /><code>{"private float clavicleZRotationMultiplier"}</code> | Scales the result of `targetZToClavicleRotation`. |
| <Link id="m-isusingelbowhandaverageforyrotation" /><code>{"private bool isUsingElbowHandAverageForYRotation"}</code> | Uses the average of the elbow and hand targets' height for the y rotation, instead of the hand alone. |
| <Link id="m-targetxtoclaviclerotation" /><code>{"private AnimationCurve targetXToClavicleRotation"}</code> | Maps the hand's sideways position (relative to the body) to clavicle z rotation. |
| <Link id="m-targetytoclaviclerotation" /><code>{"private AnimationCurve targetYToClavicleRotation"}</code> | Maps the hand's height (relative to the body) to clavicle y rotation, the shrug. |
| <Link id="m-targetztoclaviclerotation" /><code>{"private AnimationCurve targetZToClavicleRotation"}</code> | Maps the hand's forward position (relative to the body) to clavicle z rotation. |
| <Link id="m-yrotationmax" /><code>{"private float yRotationMax"}</code> | Upper clamp for the clavicle's y rotation in degrees. Default 15. |
| <Link id="m-yrotationmin" /><code>{"private float yRotationMin"}</code> | Lower clamp for the clavicle's y rotation in degrees. Default -15. |
| <Link id="m-zrotationmax" /><code>{"private float zRotationMax"}</code> | Upper clamp for the clavicle's z rotation in degrees. Default 15. |
| <Link id="m-zrotationmin" /><code>{"private float zRotationMin"}</code> | Lower clamp for the clavicle's z rotation in degrees. Default -15. |

</details>

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
