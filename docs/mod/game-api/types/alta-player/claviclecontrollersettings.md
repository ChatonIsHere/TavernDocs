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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ClavicleControllerSettings.Create`](/mod/game-api/types/alta-player/claviclecontrollersettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/claviclecontrollersettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClavicleControllerSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglecrossfade" /><code>{"private AnimationCurve angleCrossfade"}</code> | <span className="api-desc">Blends the z rotation between the x-position and z-position curves by the hand's angle around the body (0 across, 90 in front, -90 behind).</span> |
| <Link id="m-claviclexrotationmultiplier" /><code>{"private float clavicleXRotationMultiplier"}</code> | <span className="api-desc">Scales the result of `targetXToClavicleRotation`.</span> |
| <Link id="m-clavicleyrotationmultiplier" /><code>{"private float clavicleYRotationMultiplier"}</code> | <span className="api-desc">Scales the result of `targetYToClavicleRotation`.</span> |
| <Link id="m-claviclezrotationmultiplier" /><code>{"private float clavicleZRotationMultiplier"}</code> | <span className="api-desc">Scales the result of `targetZToClavicleRotation`.</span> |
| <Link id="m-isusingelbowhandaverageforyrotation" /><code>{"private bool isUsingElbowHandAverageForYRotation"}</code> | <span className="api-desc">Uses the average of the elbow and hand targets' height for the y rotation, instead of the hand alone.</span> |
| <Link id="m-targetxtoclaviclerotation" /><code>{"private AnimationCurve targetXToClavicleRotation"}</code> | <span className="api-desc">Maps the hand's sideways position (relative to the body) to clavicle z rotation.</span> |
| <Link id="m-targetytoclaviclerotation" /><code>{"private AnimationCurve targetYToClavicleRotation"}</code> | <span className="api-desc">Maps the hand's height (relative to the body) to clavicle y rotation, the shrug.</span> |
| <Link id="m-targetztoclaviclerotation" /><code>{"private AnimationCurve targetZToClavicleRotation"}</code> | <span className="api-desc">Maps the hand's forward position (relative to the body) to clavicle z rotation.</span> |
| <Link id="m-yrotationmax" /><code>{"private float yRotationMax"}</code> | <span className="api-desc">Upper clamp for the clavicle's y rotation in degrees. Default 15.</span> |
| <Link id="m-yrotationmin" /><code>{"private float yRotationMin"}</code> | <span className="api-desc">Lower clamp for the clavicle's y rotation in degrees. Default -15.</span> |
| <Link id="m-zrotationmax" /><code>{"private float zRotationMax"}</code> | <span className="api-desc">Upper clamp for the clavicle's z rotation in degrees. Default 15.</span> |
| <Link id="m-zrotationmin" /><code>{"private float zRotationMin"}</code> | <span className="api-desc">Lower clamp for the clavicle's z rotation in degrees. Default -15.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anglecrossfade-2" /><code>{"AnimationCurve AngleCrossfade { get; }"}</code> | <span className="api-desc">Blend by hand angle between using the hand's X and Z position. 0 is across the body, 90 in front, -90 behind.</span> |
| <Link id="m-claviclexrotationmultiplier-2" /><code>{"float ClavicleXRotationMultiplier { get; }"}</code> | <span className="api-desc">Scale on the X rotation curve's result.</span> |
| <Link id="m-clavicleyrotationmultiplier-2" /><code>{"float ClavicleYRotationMultiplier { get; }"}</code> | <span className="api-desc">Scale on the Y rotation curve's result.</span> |
| <Link id="m-claviclezrotationmultiplier-2" /><code>{"float ClavicleZRotationMultiplier { get; }"}</code> | <span className="api-desc">Scale on the Z rotation curve's result.</span> |
| <Link id="m-isusingelbowhandaverageforyrotation-2" /><code>{"bool IsUsingElbowHandAverageForYRotation { get; }"}</code> | <span className="api-desc">Whether Y rotation uses the average of elbow and hand instead of the hand alone.</span> |
| <Link id="m-targetxtoclaviclerotation-2" /><code>{"AnimationCurve TargetXToClavicleRotation { get; }"}</code> | <span className="api-desc">Curve from the target's X position to collarbone rotation.</span> |
| <Link id="m-targetytoclaviclerotation-2" /><code>{"AnimationCurve TargetYToClavicleRotation { get; }"}</code> | <span className="api-desc">Curve from the target's Y position to collarbone rotation.</span> |
| <Link id="m-targetztoclaviclerotation-2" /><code>{"AnimationCurve TargetZToClavicleRotation { get; }"}</code> | <span className="api-desc">Curve from the target's Z position to collarbone rotation.</span> |
| <Link id="m-yrotationmax-2" /><code>{"float YRotationMax { get; }"}</code> | <span className="api-desc">Largest Y rotation, in degrees.</span> |
| <Link id="m-yrotationmin-2" /><code>{"float YRotationMin { get; }"}</code> | <span className="api-desc">Smallest Y rotation, in degrees.</span> |
| <Link id="m-zrotationmax-2" /><code>{"float ZRotationMax { get; }"}</code> | <span className="api-desc">Largest Z rotation, in degrees.</span> |
| <Link id="m-zrotationmin-2" /><code>{"float ZRotationMin { get; }"}</code> | <span className="api-desc">Smallest Z rotation, in degrees.</span> |

## Used in

Members of other types that take, return or hold a `ClavicleControllerSettings`:

<div className="api-used-in">

[`ClavicleController.Settings`](/mod/game-api/types/alta-player/claviclecontroller#m-settings), [`PlayerControllerSettings.clavicleControllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-claviclecontrollersettings), [`PlayerControllerSettings.ClavicleControllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-claviclecontrollersettings-2).

</div>
