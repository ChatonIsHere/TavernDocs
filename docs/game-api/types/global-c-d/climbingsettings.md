---
title: "ClimbingSettings"
description: "Global settings for climbing: what can be grabbed, how hands pull the body, hand stamina drain and regen, and grab effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingSettings

A **class** in `Root.Township`, no namespace.

Global settings for climbing: what can be grabbed, how hands pull the body, hand stamina drain and regen, and grab effects. Get it with `ClimbingSettings.Instance`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<ClimbingSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ClimbingSettings`](/game-api/types/global-c-d/climbingsettings)
- **Nested types** [`LayerStaminaConsumptionMultiplier`](/game-api/types/global-c-d/climbingsettings-layerstaminaconsumptionmultiplier)
- **Attributes** `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClimbingSettings()"}</code> |

## Fields

<details>
<summary>33 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activetightgriplayer" /><code>{"private int activeTightGripLayer"}</code> |
| <Link id="m-againstdrag" /><code>{"private AnimationCurve againstDrag"}</code> |
| <Link id="m-assumedbaseplayerweight" /><code>{"private float assumedBasePlayerWeight"}</code> |
| <Link id="m-bodyheight" /><code>{"private float bodyHeight"}</code> |
| <Link id="m-bodyheighttransitionduration" /><code>{"private float bodyHeightTransitionDuration"}</code> |
| <Link id="m-distancefromwalldirectionpower" /><code>{"private AnimationCurve distanceFromWallDirectionPower"}</code> |
| <Link id="m-extraresistpressureperhand" /><code>{"private float extraResistPressurePerHand"}</code> |
| <Link id="m-frictionfade" /><code>{"private AnimationCurve frictionFade"}</code> |
| <Link id="m-grabbroken" /><code>{"private "}<Link to="/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" grabBroken"}</code> |
| <Link id="m-grabhaptic" /><code>{"private AnimationCurve grabHaptic"}</code> |
| <Link id="m-grabradius" /><code>{"private float grabRadius"}</code> |
| <Link id="m-grabsuccessful" /><code>{"private "}<Link to="/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" grabSuccessful"}</code> |
| <Link id="m-handdistancedrain" /><code>{"private AnimationCurve handDistanceDrain"}</code> |
| <Link id="m-hangdistance" /><code>{"private float hangDistance"}</code> |
| <Link id="m-holdbreakhaptic" /><code>{"private AnimationCurve holdBreakHaptic"}</code> |
| <Link id="m-incorrecthandstrengthmodifier" /><code>{"private AnimationCurve incorrectHandStrengthModifier"}</code> |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> |
| <Link id="m-layerstaminaconsumptionmultipliers" /><code>{"private "}<Link to="/game-api/types/global-c-d/climbingsettings-layerstaminaconsumptionmultiplier">{"ClimbingSettings.LayerStaminaConsumptionMultiplier"}</Link>{"[] layerStaminaConsumptionMultipliers"}</code> |
| <Link id="m-lefthandstamina" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" leftHandStamina"}</code> |
| <Link id="m-maximumgripperhand" /><code>{"private float maximumGripPerHand"}</code> |
| <Link id="m-maximumpressureperhand" /><code>{"private float maximumPressurePerHand"}</code> |
| <Link id="m-minimumtimebeforeconsideringshaking" /><code>{"private float minimumTimeBeforeConsideringShaking"}</code> |
| <Link id="m-pressurefromdistance" /><code>{"private AnimationCurve pressureFromDistance"}</code> |
| <Link id="m-pressuresmoothing" /><code>{"private float pressureSmoothing"}</code> |
| <Link id="m-righthandstamina" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" rightHandStamina"}</code> |
| <Link id="m-staminahangmultiplier" /><code>{"private float staminaHangMultiplier"}</code> |
| <Link id="m-staminalosspersecond" /><code>{"private float staminaLossPerSecond"}</code> |
| <Link id="m-staminaregenpersecondidle" /><code>{"private float staminaRegenPerSecondIdle"}</code> |
| <Link id="m-staminaregenshakemultiplier" /><code>{"private float staminaRegenShakeMultiplier"}</code> |
| <Link id="m-startingvalueformaximumstamina" /><code>{"private float startingValueForMaximumStamina"}</code> |
| <Link id="m-stepheight" /><code>{"private float stepHeight"}</code> |
| <Link id="m-towardspalmoffset" /><code>{"private float towardsPalmOffset"}</code> |
| <Link id="m-velocitydampening" /><code>{"private float velocityDampening"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetightgriplayer-2" /><code>{"int ActiveTightGripLayer { get; }"}</code> | Layer index used for an active tight grip. Default 31. |
| <Link id="m-againstdrag-2" /><code>{"AnimationCurve AgainstDrag { get; }"}</code> | Curve for drag that resists moving against the wanted direction. |
| <Link id="m-assumedbaseplayerweight-2" /><code>{"float AssumedBasePlayerWeight { get; }"}</code> | Player weight the grip and pressure values are scaled by. Higher means more force needed. Default 80. |
| <Link id="m-bodyheight-2" /><code>{"float BodyHeight { get; }"}</code> | Controller height while climbing. Default 1. |
| <Link id="m-bodyheighttransitionduration-2" /><code>{"float BodyHeightTransitionDuration { get; }"}</code> | Seconds to change to climbing height. Default 0.2. |
| <Link id="m-defaultclimbable" /><code><Link to="/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{" DefaultClimbable { get; }"}</code> | Climbable settings used for surfaces without their own. |
| <Link id="m-distancefromwalldirectionpower-2" /><code>{"AnimationCurve DistanceFromWallDirectionPower { get; }"}</code> | Curve setting how much push and pull alignment counts, by arm stretch. |
| <Link id="m-extraresistpressureperhand-2" /><code>{"float ExtraResistPressurePerHand { get; }"}</code> | Extra pressure for resisting the opposite direction, times the base weight. |
| <Link id="m-frictionfade-2" /><code>{"AnimationCurve FrictionFade { get; }"}</code> | Friction curve over time after letting go. |
| <Link id="m-grabbroken-2" /><code><Link to="/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" GrabBroken { get; }"}</code> | Effect hook when a hold breaks. |
| <Link id="m-grabhaptic-2" /><code>{"AnimationCurve GrabHaptic { get; }"}</code> | Haptic curve on a successful grab. |
| <Link id="m-grabradius-2" /><code>{"float GrabRadius { get; }"}</code> | Radius around the hand searched for grabbable colliders. Default 0.1. |
| <Link id="m-grabsuccessful-2" /><code><Link to="/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" GrabSuccessful { get; }"}</code> | Effect hook on a successful grab. |
| <Link id="m-handdistancedrain-2" /><code>{"AnimationCurve HandDistanceDrain { get; }"}</code> | Curve for extra stamina drain by how far the ghost hand is from the gripping hand. |
| <Link id="m-hangdistance-2" /><code>{"float HangDistance { get; }"}</code> | Distance before an overburdened player stops being pulled down. Default 0.8. |
| <Link id="m-holdbreakhaptic-2" /><code>{"AnimationCurve HoldBreakHaptic { get; }"}</code> | Haptic curve by how close the hold is to breaking. |
| <Link id="m-incorrecthandstrengthmodifier-2" /><code>{"AnimationCurve IncorrectHandStrengthModifier { get; }"}</code> | Curve for strength gained or lost over time by ghost hand distance. |
| <Link id="m-layermask-2" /><code>{"LayerMask LayerMask { get; }"}</code> | Layers checked for climbable surfaces. |
| <Link id="m-lefthandstamina-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" LeftHandStamina { get; }"}</code> | Stat used for the left hand's stamina. |
| <Link id="m-maximumgripperhand-2" /><code>{"float MaximumGripPerHand { get; }"}</code> | Most grip one hand can apply (at full stretch), times the base weight. |
| <Link id="m-maximumpressureperhand-2" /><code>{"float MaximumPressurePerHand { get; }"}</code> | Most pressure one hand can apply, including against gravity, times the base weight. |
| <Link id="m-pressurefromdistance-2" /><code>{"AnimationCurve PressureFromDistance { get; }"}</code> | Curve for velocity added by how far the ghost hand is from the grip point. |
| <Link id="m-pressuresmoothing-2" /><code>{"float PressureSmoothing { get; }"}</code> | Pressure kept to smooth movement. Higher is smoother. |
| <Link id="m-righthandstamina-2" /><code><Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" RightHandStamina { get; }"}</code> | Stat used for the right hand's stamina. |
| <Link id="m-staminahangmultiplier-2" /><code>{"float StaminaHangMultiplier { get; }"}</code> | Multiplier on stamina loss while hanging. Default 0.5. |
| <Link id="m-staminalosspersecond-2" /><code>{"float StaminaLossPerSecond { get; }"}</code> | Stamina lost per second, based on the base weight. Default 0.1. |
| <Link id="m-stepheight-2" /><code>{"float StepHeight { get; }"}</code> | Height the controller can step up while climbing. Default 1. |
| <Link id="m-towardspalmoffset-2" /><code>{"float TowardsPalmOffset { get; }"}</code> | When gripping, how far back towards the hand from the nearest surface point. Default 0.2. |
| <Link id="m-velocitydampening-2" /><code>{"float VelocityDampening { get; }"}</code> | Velocity dampening while climbing. Default 1. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlayerstaminaconsumptionmultiplier" /><code>{"float GetLayerStaminaConsumptionMultiplier(int layer)"}</code> | Stamina drain multiplier for a surface layer. 1 if the layer is not listed. |
| <Link id="m-getstaminaregen" /><code>{"float GetStaminaRegen(float currentMaximumStamina, float shakeValue, float lastClimbingTime)"}</code> | Stamina regained per second while not holding, more when shaking the hand after a short wait. |

## Used in

Members of other types that take, return or hold a `ClimbingSettings`:

[`Climber.initialSettings`](/game-api/types/global-c-d/climber#m-initialsettings), [`ClimbingHandler.Settings`](/game-api/types/game-other-namespaces/climbinghandler#m-settings), [`ClimbingPressureCalculator.ClimbingPressureCalculator`](/game-api/types/game-other-namespaces/climbingpressurecalculator#m-ctor), [`ClimbingPressureCalculator.settings`](/game-api/types/game-other-namespaces/climbingpressurecalculator#m-settings).
