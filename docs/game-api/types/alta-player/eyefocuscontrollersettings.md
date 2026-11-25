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

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EyeFocusControllerSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-baseupdateinterval" /><code>{"private float baseUpdateInterval"}</code> |  |
| <Link id="m-defaultfocusoffset" /><code>{"private Vector3 defaultFocusOffset"}</code> |  |
| <Link id="m-detectionoffset" /><code>{"private Vector3 detectionOffset"}</code> |  |
| <Link id="m-detectionrange" /><code>{"private float detectionRange"}</code> |  |
| <Link id="m-disconnecthorizontalangletan" /><code>{"private float disconnectHorizontalAngleTan"}</code> |  |
| <Link id="m-disconnectverticalangletan" /><code>{"private float disconnectVerticalAngleTan"}</code> |  |
| <Link id="m-distancedetriment" /><code>{"private AnimationCurve distanceDetriment"}</code> |  |
| <Link id="m-horizontalangledetriment" /><code>{"private AnimationCurve horizontalAngleDetriment"}</code> |  |
| <Link id="m-isusingrotationlimits" /><code>{"private bool isUsingRotationLimits"}</code> |  |
| <Link id="m-layerdetrimentmask" /><code>{"private float[] layerDetrimentMask"}</code> |  |
| <Link id="m-lefteyesplinerotationlimitpoints" /><code>{"private AnimationCurve leftEyeSplineRotationLimitPoints"}</code> |  |
| <Link id="m-lookat" /><code>{"private LayerMask lookAt"}</code> |  |
| <Link id="m-maximumdetriment" /><code>{"private float maximumDetriment"}</code> |  |
| <Link id="m-maximumoverlap" /><code>{"private int maximumOverlap"}</code> |  |
| <Link id="m-missingrigidbodydetriment" /><code>{"private float missingRigidbodyDetriment"}</code> |  |
| <Link id="m-righteyesplinerotationlimitpoints" /><code>{"private AnimationCurve rightEyeSplineRotationLimitPoints"}</code> |  |
| <Link id="m-updatemaximum" /><code>{"private float updateMaximum"}</code> |  |
| <Link id="m-updateminimum" /><code>{"private float updateMinimum"}</code> |  |
| <Link id="m-updateweaknessmultiplier" /><code>{"private float updateWeaknessMultiplier"}</code> |  |
| <Link id="m-velocitydetriment" /><code>{"private AnimationCurve velocityDetriment"}</code> |  |
| <Link id="m-verticalangledetriment" /><code>{"private AnimationCurve verticalAngleDetriment"}</code> |  |

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
