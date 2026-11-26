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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`EyeFocusControllerSettings.Create`](/game-api/types/alta-player/eyefocuscontrollersettings-create)
- **Nested types** [`Create`](/game-api/types/alta-player/eyefocuscontrollersettings-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EyeFocusControllerSettings()"}</code> |

## Fields

<details>
<summary>21 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-baseupdateinterval" /><code>{"private float baseUpdateInterval"}</code> | Base time before the eyes look for a new target. The interval is this minus `updateWeaknessMultiplier` times the target's score. |
| <Link id="m-defaultfocusoffset" /><code>{"private Vector3 defaultFocusOffset"}</code> | Where the eyes focus, relative to the head, when there is no target. |
| <Link id="m-detectionoffset" /><code>{"private Vector3 detectionOffset"}</code> | Centre of the sphere searched for targets, relative to the head. |
| <Link id="m-detectionrange" /><code>{"private float detectionRange"}</code> | Radius of the target search sphere, scaled by the player's size. |
| <Link id="m-disconnecthorizontalangletan" /><code>{"private float disconnectHorizontalAngleTan"}</code> | Tangent of the sideways angle past which a target is dropped or ignored. |
| <Link id="m-disconnectverticalangletan" /><code>{"private float disconnectVerticalAngleTan"}</code> | Tangent of the vertical angle past which a target is dropped or ignored. |
| <Link id="m-distancedetriment" /><code>{"private AnimationCurve distanceDetriment"}</code> | Score penalty by distance from the head. Lowest score wins. |
| <Link id="m-horizontalangledetriment" /><code>{"private AnimationCurve horizontalAngleDetriment"}</code> | Score penalty by sideways angle in degrees. |
| <Link id="m-isusingrotationlimits" /><code>{"private bool isUsingRotationLimits"}</code> | Turns on eye rotation limits. Not read by game code. |
| <Link id="m-layerdetrimentmask" /><code>{"private float[] layerDetrimentMask"}</code> | Score penalty per physics layer, indexed by layer number. |
| <Link id="m-lefteyesplinerotationlimitpoints" /><code>{"private AnimationCurve leftEyeSplineRotationLimitPoints"}</code> | Left eye rotation limit curve. Not read by game code. |
| <Link id="m-lookat" /><code>{"private LayerMask lookAt"}</code> | Physics layers searched for things to look at. |
| <Link id="m-maximumdetriment" /><code>{"private float maximumDetriment"}</code> | Highest score a candidate can have and still be looked at. |
| <Link id="m-maximumoverlap" /><code>{"private int maximumOverlap"}</code> | Maximum colliders gathered per search. Default 100. |
| <Link id="m-missingrigidbodydetriment" /><code>{"private float missingRigidbodyDetriment"}</code> | Score penalty for colliders without a rigidbody. |
| <Link id="m-righteyesplinerotationlimitpoints" /><code>{"private AnimationCurve rightEyeSplineRotationLimitPoints"}</code> | Right eye rotation limit curve. Not read by game code. |
| <Link id="m-updatemaximum" /><code>{"private float updateMaximum"}</code> | Longest time before looking for a new target. Default 5. |
| <Link id="m-updateminimum" /><code>{"private float updateMinimum"}</code> | Shortest time before looking for a new target. |
| <Link id="m-updateweaknessmultiplier" /><code>{"private float updateWeaknessMultiplier"}</code> | How much a target's score shortens the time before the next search. |
| <Link id="m-velocitydetriment" /><code>{"private AnimationCurve velocityDetriment"}</code> | Score change by the candidate's speed. Moving things score lower and so draw the eye. |
| <Link id="m-verticalangledetriment" /><code>{"private AnimationCurve verticalAngleDetriment"}</code> | Score penalty by vertical angle in degrees. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-baseupdateinterval-2" /><code>{"float BaseUpdateInterval { get; }"}</code> | Base time before the focus target is re-chosen. The winning score times `UpdateWeaknessMultiplier` is subtracted from it. |
| <Link id="m-defaultfocusoffset-2" /><code>{"Vector3 DefaultFocusOffset { get; }"}</code> | Local position the focus handle returns to when there is no target. |
| <Link id="m-detectionoffset-2" /><code>{"Vector3 DetectionOffset { get; }"}</code> | Local offset of the centre of the detection sphere from the head. |
| <Link id="m-detectionrange-2" /><code>{"float DetectionRange { get; }"}</code> | Radius of the detection sphere, scaled by the head's world scale. |
| <Link id="m-disconnecthorizontalangletan-2" /><code>{"float DisconnectHorizontalAngleTan { get; }"}</code> | Tangent of the horizontal angle past which a target is dropped or ignored (about 50 degrees by default). |
| <Link id="m-disconnectverticalangletan-2" /><code>{"float DisconnectVerticalAngleTan { get; }"}</code> | Tangent of the vertical angle past which a target is dropped or ignored (about 30 degrees by default). |
| <Link id="m-distancedetriment-2" /><code>{"AnimationCurve DistanceDetriment { get; }"}</code> | Penalty curve by distance from the head. |
| <Link id="m-horizontalangledetriment-2" /><code>{"AnimationCurve HorizontalAngleDetriment { get; }"}</code> | Penalty curve by horizontal angle (degrees) off straight ahead. |
| <Link id="m-isusingrotationlimits-2" /><code>{"bool IsUsingRotationLimits { get; }"}</code> | Inspector flag for eye rotation limits. Not read anywhere in this build. |
| <Link id="m-layerdetrimentmask-2" /><code>{"float[] LayerDetrimentMask { get; }"}</code> | Extra penalty per physics layer, indexed by layer number (32 entries). |
| <Link id="m-lefteyesplinerotationlimitpoints-2" /><code>{"AnimationCurve LeftEyeSplineRotationLimitPoints { get; }"}</code> | Curve for the left eye's rotation limit. Not read anywhere in this build. |
| <Link id="m-lookat-2" /><code>{"LayerMask LookAt { get; }"}</code> | Layers searched for things to look at. |
| <Link id="m-maximumdetriment-2" /><code>{"float MaximumDetriment { get; }"}</code> | Score ceiling. Candidates scoring above it are never picked. |
| <Link id="m-maximumoverlap-2" /><code>{"int MaximumOverlap { get; }"}</code> | Size of the collider buffer, so the most colliders checked per search. |
| <Link id="m-missingrigidbodydetriment-2" /><code>{"float MissingRigidbodyDetriment { get; }"}</code> | Penalty for colliders with no attached rigidbody (static scenery). |
| <Link id="m-righteyesplinerotationlimitpoints-2" /><code>{"AnimationCurve RightEyeSplineRotationLimitPoints { get; }"}</code> | Curve for the right eye's rotation limit. Not read anywhere in this build. |
| <Link id="m-updatemaximum-2" /><code>{"float UpdateMaximum { get; }"}</code> | Longest time allowed between re-choosing the focus target. |
| <Link id="m-updateminimum-2" /><code>{"float UpdateMinimum { get; }"}</code> | Shortest time allowed between re-choosing the focus target. |
| <Link id="m-updateweaknessmultiplier-2" /><code>{"float UpdateWeaknessMultiplier { get; }"}</code> | How much the winning score shortens the time until the next search. |
| <Link id="m-velocitydetriment-2" /><code>{"AnimationCurve VelocityDetriment { get; }"}</code> | Penalty curve by the candidate's speed. By default faster objects score lower (better). |
| <Link id="m-verticalangledetriment-2" /><code>{"AnimationCurve VerticalAngleDetriment { get; }"}</code> | Penalty curve by vertical angle (degrees) off straight ahead. |

## Used in

Members of other types that take, return or hold a `EyeFocusControllerSettings`:

[`EyeFocusController.settings`](/game-api/types/alta-player/eyefocuscontroller#m-settings), [`PlayerControllerSettings.eyeFocusDetectionSettings`](/game-api/types/alta-player/playercontrollersettings#m-eyefocusdetectionsettings), [`PlayerControllerSettings.EyeFocusDetectionSettings`](/game-api/types/alta-player/playercontrollersettings#m-eyefocusdetectionsettings-2).
