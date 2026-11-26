---
title: "EyeFocusControllerSettings"
description: "Settings asset for EyeFocusController, which picks what a character's eyes look at."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EyeFocusControllerSettings

A **class** in `Root.Township`, `Alta.Character`.

Settings asset for `EyeFocusController`, which picks what a character's eyes look at. Nearby colliders are scored by adding up penalties (detriments) and the lowest score under the maximum wins.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`EyeFocusControllerSettings.Create`](/mod/game-api/types/alta-player/eyefocuscontrollersettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/eyefocuscontrollersettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EyeFocusControllerSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseupdateinterval" /><code>{"private float baseUpdateInterval"}</code> | <span className="api-desc">Base time before the eyes look for a new target. The interval is this minus `updateWeaknessMultiplier` times the target's score.</span> |
| <Link id="m-defaultfocusoffset" /><code>{"private Vector3 defaultFocusOffset"}</code> | <span className="api-desc">Where the eyes focus, relative to the head, when there is no target.</span> |
| <Link id="m-detectionoffset" /><code>{"private Vector3 detectionOffset"}</code> | <span className="api-desc">Centre of the sphere searched for targets, relative to the head.</span> |
| <Link id="m-detectionrange" /><code>{"private float detectionRange"}</code> | <span className="api-desc">Radius of the target search sphere, scaled by the player's size.</span> |
| <Link id="m-disconnecthorizontalangletan" /><code>{"private float disconnectHorizontalAngleTan"}</code> | <span className="api-desc">Tangent of the sideways angle past which a target is dropped or ignored.</span> |
| <Link id="m-disconnectverticalangletan" /><code>{"private float disconnectVerticalAngleTan"}</code> | <span className="api-desc">Tangent of the vertical angle past which a target is dropped or ignored.</span> |
| <Link id="m-distancedetriment" /><code>{"private AnimationCurve distanceDetriment"}</code> | <span className="api-desc">Score penalty by distance from the head. Lowest score wins.</span> |
| <Link id="m-horizontalangledetriment" /><code>{"private AnimationCurve horizontalAngleDetriment"}</code> | <span className="api-desc">Score penalty by sideways angle in degrees.</span> |
| <Link id="m-isusingrotationlimits" /><code>{"private bool isUsingRotationLimits"}</code> | <span className="api-desc">Turns on eye rotation limits. Not read by game code.</span> |
| <Link id="m-layerdetrimentmask" /><code>{"private float[] layerDetrimentMask"}</code> | <span className="api-desc">Score penalty per physics layer, indexed by layer number.</span> |
| <Link id="m-lefteyesplinerotationlimitpoints" /><code>{"private AnimationCurve leftEyeSplineRotationLimitPoints"}</code> | <span className="api-desc">Left eye rotation limit curve. Not read by game code.</span> |
| <Link id="m-lookat" /><code>{"private LayerMask lookAt"}</code> | <span className="api-desc">Physics layers searched for things to look at.</span> |
| <Link id="m-maximumdetriment" /><code>{"private float maximumDetriment"}</code> | <span className="api-desc">Highest score a candidate can have and still be looked at.</span> |
| <Link id="m-maximumoverlap" /><code>{"private int maximumOverlap"}</code> | <span className="api-desc">Maximum colliders gathered per search. Default 100.</span> |
| <Link id="m-missingrigidbodydetriment" /><code>{"private float missingRigidbodyDetriment"}</code> | <span className="api-desc">Score penalty for colliders without a rigidbody.</span> |
| <Link id="m-righteyesplinerotationlimitpoints" /><code>{"private AnimationCurve rightEyeSplineRotationLimitPoints"}</code> | <span className="api-desc">Right eye rotation limit curve. Not read by game code.</span> |
| <Link id="m-updatemaximum" /><code>{"private float updateMaximum"}</code> | <span className="api-desc">Longest time before looking for a new target. Default 5.</span> |
| <Link id="m-updateminimum" /><code>{"private float updateMinimum"}</code> | <span className="api-desc">Shortest time before looking for a new target.</span> |
| <Link id="m-updateweaknessmultiplier" /><code>{"private float updateWeaknessMultiplier"}</code> | <span className="api-desc">How much a target's score shortens the time before the next search.</span> |
| <Link id="m-velocitydetriment" /><code>{"private AnimationCurve velocityDetriment"}</code> | <span className="api-desc">Score change by the candidate's speed. Moving things score lower and so draw the eye.</span> |
| <Link id="m-verticalangledetriment" /><code>{"private AnimationCurve verticalAngleDetriment"}</code> | <span className="api-desc">Score penalty by vertical angle in degrees.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseupdateinterval-2" /><code>{"float BaseUpdateInterval { get; }"}</code> | <span className="api-desc">Base time before the focus target is re-chosen. The winning score times `UpdateWeaknessMultiplier` is subtracted from it.</span> |
| <Link id="m-defaultfocusoffset-2" /><code>{"Vector3 DefaultFocusOffset { get; }"}</code> | <span className="api-desc">Local position the focus handle returns to when there is no target.</span> |
| <Link id="m-detectionoffset-2" /><code>{"Vector3 DetectionOffset { get; }"}</code> | <span className="api-desc">Local offset of the centre of the detection sphere from the head.</span> |
| <Link id="m-detectionrange-2" /><code>{"float DetectionRange { get; }"}</code> | <span className="api-desc">Radius of the detection sphere, scaled by the head's world scale.</span> |
| <Link id="m-disconnecthorizontalangletan-2" /><code>{"float DisconnectHorizontalAngleTan { get; }"}</code> | <span className="api-desc">Tangent of the horizontal angle past which a target is dropped or ignored (about 50 degrees by default).</span> |
| <Link id="m-disconnectverticalangletan-2" /><code>{"float DisconnectVerticalAngleTan { get; }"}</code> | <span className="api-desc">Tangent of the vertical angle past which a target is dropped or ignored (about 30 degrees by default).</span> |
| <Link id="m-distancedetriment-2" /><code>{"AnimationCurve DistanceDetriment { get; }"}</code> | <span className="api-desc">Penalty curve by distance from the head.</span> |
| <Link id="m-horizontalangledetriment-2" /><code>{"AnimationCurve HorizontalAngleDetriment { get; }"}</code> | <span className="api-desc">Penalty curve by horizontal angle (degrees) off straight ahead.</span> |
| <Link id="m-isusingrotationlimits-2" /><code>{"bool IsUsingRotationLimits { get; }"}</code> | <span className="api-desc">Inspector flag for eye rotation limits. Not read anywhere in this build.</span> |
| <Link id="m-layerdetrimentmask-2" /><code>{"float[] LayerDetrimentMask { get; }"}</code> | <span className="api-desc">Extra penalty per physics layer, indexed by layer number (32 entries).</span> |
| <Link id="m-lefteyesplinerotationlimitpoints-2" /><code>{"AnimationCurve LeftEyeSplineRotationLimitPoints { get; }"}</code> | <span className="api-desc">Curve for the left eye's rotation limit. Not read anywhere in this build.</span> |
| <Link id="m-lookat-2" /><code>{"LayerMask LookAt { get; }"}</code> | <span className="api-desc">Layers searched for things to look at.</span> |
| <Link id="m-maximumdetriment-2" /><code>{"float MaximumDetriment { get; }"}</code> | <span className="api-desc">Score ceiling. Candidates scoring above it are never picked.</span> |
| <Link id="m-maximumoverlap-2" /><code>{"int MaximumOverlap { get; }"}</code> | <span className="api-desc">Size of the collider buffer, so the most colliders checked per search.</span> |
| <Link id="m-missingrigidbodydetriment-2" /><code>{"float MissingRigidbodyDetriment { get; }"}</code> | <span className="api-desc">Penalty for colliders with no attached rigidbody (static scenery).</span> |
| <Link id="m-righteyesplinerotationlimitpoints-2" /><code>{"AnimationCurve RightEyeSplineRotationLimitPoints { get; }"}</code> | <span className="api-desc">Curve for the right eye's rotation limit. Not read anywhere in this build.</span> |
| <Link id="m-updatemaximum-2" /><code>{"float UpdateMaximum { get; }"}</code> | <span className="api-desc">Longest time allowed between re-choosing the focus target.</span> |
| <Link id="m-updateminimum-2" /><code>{"float UpdateMinimum { get; }"}</code> | <span className="api-desc">Shortest time allowed between re-choosing the focus target.</span> |
| <Link id="m-updateweaknessmultiplier-2" /><code>{"float UpdateWeaknessMultiplier { get; }"}</code> | <span className="api-desc">How much the winning score shortens the time until the next search.</span> |
| <Link id="m-velocitydetriment-2" /><code>{"AnimationCurve VelocityDetriment { get; }"}</code> | <span className="api-desc">Penalty curve by the candidate's speed. By default faster objects score lower (better).</span> |
| <Link id="m-verticalangledetriment-2" /><code>{"AnimationCurve VerticalAngleDetriment { get; }"}</code> | <span className="api-desc">Penalty curve by vertical angle (degrees) off straight ahead.</span> |

## Used in

Members of other types that take, return or hold a `EyeFocusControllerSettings`:

<div className="api-used-in">

[`EyeFocusController.settings`](/mod/game-api/types/alta-player/eyefocuscontroller#m-settings), [`PlayerControllerSettings.eyeFocusDetectionSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-eyefocusdetectionsettings), [`PlayerControllerSettings.EyeFocusDetectionSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-eyefocusdetectionsettings-2).

</div>
