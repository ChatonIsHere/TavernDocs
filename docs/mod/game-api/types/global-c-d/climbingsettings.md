---
title: "ClimbingSettings"
description: "Global settings for climbing: what can be grabbed, how hands pull the body, hand stamina drain and regen, and grab effects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClimbingSettings

A **class** in `Root.Township`, the global namespace.

Global settings for climbing: what can be grabbed, how hands pull the body, hand stamina drain and regen, and grab effects. Get it with `ClimbingSettings.Instance`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`GlobalSettings<ClimbingSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ClimbingSettings`](/mod/game-api/types/global-c-d/climbingsettings)
- **Nested types** [`LayerStaminaConsumptionMultiplier`](/mod/game-api/types/global-c-d/climbingsettings-layerstaminaconsumptionmultiplier)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClimbingSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>33 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetightgriplayer" /><code>{"private int activeTightGripLayer"}</code> | <span className="api-desc">Layer index used for the active tight grip (default 31).</span> |
| <Link id="m-againstdrag" /><code>{"private AnimationCurve againstDrag"}</code> | <span className="api-desc">Curve of drag that resists velocity against the wanted direction.</span> |
| <Link id="m-assumedbaseplayerweight" /><code>{"private float assumedBasePlayerWeight"}</code> | <span className="api-desc">Base player weight. Grip and pressure limits are multiplied by it, so a higher value needs more force to move.</span> |
| <Link id="m-bodyheight" /><code>{"private float bodyHeight"}</code> | <span className="api-desc">Character controller height while climbing.</span> |
| <Link id="m-bodyheighttransitionduration" /><code>{"private float bodyHeightTransitionDuration"}</code> | <span className="api-desc">Seconds to go from normal height to climbing height.</span> |
| <Link id="m-distancefromwalldirectionpower" /><code>{"private AnimationCurve distanceFromWallDirectionPower"}</code> | <span className="api-desc">Curve giving the power the push or pull alignment is raised to, based on arm stretch.</span> |
| <Link id="m-extraresistpressureperhand" /><code>{"private float extraResistPressurePerHand"}</code> | <span className="api-desc">Extra pressure per hand for resisting pull in the opposite direction, times the base weight.</span> |
| <Link id="m-frictionfade" /><code>{"private AnimationCurve frictionFade"}</code> | <span className="api-desc">Friction over time after letting go. Starts at the curve's 0 while climbing.</span> |
| <Link id="m-grabbroken" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" grabBroken"}</code> | <span className="api-desc">Effect hook played when a hold breaks.</span> |
| <Link id="m-grabhaptic" /><code>{"private AnimationCurve grabHaptic"}</code> | <span className="api-desc">Haptic curve on a successful grab.</span> |
| <Link id="m-grabradius" /><code>{"private float grabRadius"}</code> | <span className="api-desc">Radius around the hand checked for climbable colliders (default 0.1).</span> |
| <Link id="m-grabsuccessful" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" grabSuccessful"}</code> | <span className="api-desc">Effect hook played on a successful grab.</span> |
| <Link id="m-handdistancedrain" /><code>{"private AnimationCurve handDistanceDrain"}</code> | <span className="api-desc">Stamina drain multiplier from how far the ghost hand is from the climbing hand.</span> |
| <Link id="m-hangdistance" /><code>{"private float hangDistance"}</code> | <span className="api-desc">Distance before an overburdened player stops being pulled down by gravity.</span> |
| <Link id="m-holdbreakhaptic" /><code>{"private AnimationCurve holdBreakHaptic"}</code> | <span className="api-desc">Haptic curve from how close the hold is to breaking.</span> |
| <Link id="m-incorrecthandstrengthmodifier" /><code>{"private AnimationCurve incorrectHandStrengthModifier"}</code> | <span className="api-desc">Curve of strength gain or loss over time from ghost hand distance.</span> |
| <Link id="m-layermask" /><code>{"private LayerMask layerMask"}</code> | <span className="api-desc">Layers checked for grabbing.</span> |
| <Link id="m-layerstaminaconsumptionmultipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/climbingsettings-layerstaminaconsumptionmultiplier">{"ClimbingSettings.LayerStaminaConsumptionMultiplier"}</Link>{"[] layerStaminaConsumptionMultipliers"}</code> | <span className="api-desc">Per-layer stamina use multipliers. Layers not listed use 1.</span> |
| <Link id="m-lefthandstamina" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" leftHandStamina"}</code> | <span className="api-desc">Stat used for left hand stamina.</span> |
| <Link id="m-maximumgripperhand" /><code>{"private float maximumGripPerHand"}</code> | <span className="api-desc">Most grip per hand, at full arm stretch, times the base weight.</span> |
| <Link id="m-maximumpressureperhand" /><code>{"private float maximumPressurePerHand"}</code> | <span className="api-desc">Most pressure per hand including gravity resistance, times the base weight.</span> |
| <Link id="m-minimumtimebeforeconsideringshaking" /><code>{"private float minimumTimeBeforeConsideringShaking"}</code> | <span className="api-desc">Seconds since last climbing before a hand counts as shaking for regen.</span> |
| <Link id="m-pressurefromdistance" /><code>{"private AnimationCurve pressureFromDistance"}</code> | <span className="api-desc">Curve of velocity added from the ghost hand's distance to the grip point.</span> |
| <Link id="m-pressuresmoothing" /><code>{"private float pressureSmoothing"}</code> | <span className="api-desc">How much pressure is kept to smooth movement. Higher is smoother.</span> |
| <Link id="m-righthandstamina" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" rightHandStamina"}</code> | <span className="api-desc">Stat used for right hand stamina.</span> |
| <Link id="m-staminahangmultiplier" /><code>{"private float staminaHangMultiplier"}</code> | <span className="api-desc">Multiplier on stamina lost while hanging.</span> |
| <Link id="m-staminalosspersecond" /><code>{"private float staminaLossPerSecond"}</code> | <span className="api-desc">Stamina lost per second, based on the base weight.</span> |
| <Link id="m-staminaregenpersecondidle" /><code>{"private float staminaRegenPerSecondIdle"}</code> | <span className="api-desc">Stamina regained per second when idle and not holding.</span> |
| <Link id="m-staminaregenshakemultiplier" /><code>{"private float staminaRegenShakeMultiplier"}</code> | <span className="api-desc">Regen multiplier when shaking the hand.</span> |
| <Link id="m-startingvalueformaximumstamina" /><code>{"private float startingValueForMaximumStamina"}</code> | <span className="api-desc">Starting maximum stamina used to scale shake regen in `GetStaminaRegen`.</span> |
| <Link id="m-stepheight" /><code>{"private float stepHeight"}</code> | <span className="api-desc">Height the character controller can step up while climbing.</span> |
| <Link id="m-towardspalmoffset" /><code>{"private float towardsPalmOffset"}</code> | <span className="api-desc">When placing a grip, how far the nearest mesh point is pulled back toward the hand.</span> |
| <Link id="m-velocitydampening" /><code>{"private float velocityDampening"}</code> | <span className="api-desc">Scale on the player's movement velocity used to offset the climbing hand's position in `ClimbingHand`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetightgriplayer-2" /><code>{"int ActiveTightGripLayer { get; }"}</code> | <span className="api-desc">Layer index used for an active tight grip. Default 31.</span> |
| <Link id="m-againstdrag-2" /><code>{"AnimationCurve AgainstDrag { get; }"}</code> | <span className="api-desc">Curve for drag that resists moving against the wanted direction.</span> |
| <Link id="m-assumedbaseplayerweight-2" /><code>{"float AssumedBasePlayerWeight { get; }"}</code> | <span className="api-desc">Player weight the grip and pressure values are scaled by. Higher means more force needed. Default 80.</span> |
| <Link id="m-bodyheight-2" /><code>{"float BodyHeight { get; }"}</code> | <span className="api-desc">Controller height while climbing. Default 1.</span> |
| <Link id="m-bodyheighttransitionduration-2" /><code>{"float BodyHeightTransitionDuration { get; }"}</code> | <span className="api-desc">Seconds to change to climbing height. Default 0.2.</span> |
| <Link id="m-defaultclimbable" /><code><Link to="/mod/game-api/types/global-i-l/iclimbable">{"IClimbable"}</Link>{" DefaultClimbable { get; }"}</code> | <span className="api-desc">Climbable settings used for surfaces without their own.</span> |
| <Link id="m-distancefromwalldirectionpower-2" /><code>{"AnimationCurve DistanceFromWallDirectionPower { get; }"}</code> | <span className="api-desc">Curve setting how much push and pull alignment counts, by arm stretch.</span> |
| <Link id="m-extraresistpressureperhand-2" /><code>{"float ExtraResistPressurePerHand { get; }"}</code> | <span className="api-desc">Extra pressure for resisting the opposite direction, times the base weight.</span> |
| <Link id="m-frictionfade-2" /><code>{"AnimationCurve FrictionFade { get; }"}</code> | <span className="api-desc">Friction curve over time after letting go.</span> |
| <Link id="m-grabbroken-2" /><code><Link to="/mod/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" GrabBroken { get; }"}</code> | <span className="api-desc">Effect hook when a hold breaks.</span> |
| <Link id="m-grabhaptic-2" /><code>{"AnimationCurve GrabHaptic { get; }"}</code> | <span className="api-desc">Haptic curve on a successful grab.</span> |
| <Link id="m-grabradius-2" /><code>{"float GrabRadius { get; }"}</code> | <span className="api-desc">Radius around the hand searched for grabbable colliders. Default 0.1.</span> |
| <Link id="m-grabsuccessful-2" /><code><Link to="/mod/game-api/types/global-p/positionhandler">{"PositionHandler"}</Link>{" GrabSuccessful { get; }"}</code> | <span className="api-desc">Effect hook on a successful grab.</span> |
| <Link id="m-handdistancedrain-2" /><code>{"AnimationCurve HandDistanceDrain { get; }"}</code> | <span className="api-desc">Curve for extra stamina drain by how far the ghost hand is from the gripping hand.</span> |
| <Link id="m-hangdistance-2" /><code>{"float HangDistance { get; }"}</code> | <span className="api-desc">Distance before an overburdened player stops being pulled down. Default 0.8.</span> |
| <Link id="m-holdbreakhaptic-2" /><code>{"AnimationCurve HoldBreakHaptic { get; }"}</code> | <span className="api-desc">Haptic curve by how close the hold is to breaking.</span> |
| <Link id="m-incorrecthandstrengthmodifier-2" /><code>{"AnimationCurve IncorrectHandStrengthModifier { get; }"}</code> | <span className="api-desc">Curve for strength gained or lost over time by ghost hand distance.</span> |
| <Link id="m-layermask-2" /><code>{"LayerMask LayerMask { get; }"}</code> | <span className="api-desc">Layers checked for climbable surfaces.</span> |
| <Link id="m-lefthandstamina-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" LeftHandStamina { get; }"}</code> | <span className="api-desc">Stat used for the left hand's stamina.</span> |
| <Link id="m-maximumgripperhand-2" /><code>{"float MaximumGripPerHand { get; }"}</code> | <span className="api-desc">Most grip one hand can apply (at full stretch), times the base weight.</span> |
| <Link id="m-maximumpressureperhand-2" /><code>{"float MaximumPressurePerHand { get; }"}</code> | <span className="api-desc">Most pressure one hand can apply, including against gravity, times the base weight.</span> |
| <Link id="m-pressurefromdistance-2" /><code>{"AnimationCurve PressureFromDistance { get; }"}</code> | <span className="api-desc">Curve for velocity added by how far the ghost hand is from the grip point.</span> |
| <Link id="m-pressuresmoothing-2" /><code>{"float PressureSmoothing { get; }"}</code> | <span className="api-desc">Pressure kept to smooth movement. Higher is smoother.</span> |
| <Link id="m-righthandstamina-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" RightHandStamina { get; }"}</code> | <span className="api-desc">Stat used for the right hand's stamina.</span> |
| <Link id="m-staminahangmultiplier-2" /><code>{"float StaminaHangMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on stamina loss while hanging. Default 0.5.</span> |
| <Link id="m-staminalosspersecond-2" /><code>{"float StaminaLossPerSecond { get; }"}</code> | <span className="api-desc">Stamina lost per second, based on the base weight. Default 0.1.</span> |
| <Link id="m-stepheight-2" /><code>{"float StepHeight { get; }"}</code> | <span className="api-desc">Height the controller can step up while climbing. Default 1.</span> |
| <Link id="m-towardspalmoffset-2" /><code>{"float TowardsPalmOffset { get; }"}</code> | <span className="api-desc">When gripping, how far back towards the hand from the nearest surface point. Default 0.2.</span> |
| <Link id="m-velocitydampening-2" /><code>{"float VelocityDampening { get; }"}</code> | <span className="api-desc">Velocity dampening while climbing. Default 1.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getlayerstaminaconsumptionmultiplier" /><code>{"float GetLayerStaminaConsumptionMultiplier(int layer)"}</code> | <span className="api-desc">Stamina drain multiplier for a surface layer. 1 if the layer is not listed.</span> |
| <Link id="m-getstaminaregen" /><code>{"float GetStaminaRegen(float currentMaximumStamina, float shakeValue, float lastClimbingTime)"}</code> | <span className="api-desc">Stamina regained per second while not holding, more when shaking the hand after a short wait.</span> |

## Used in

Members of other types that take, return or hold a `ClimbingSettings`:

<div className="api-used-in">

[`Climber.initialSettings`](/mod/game-api/types/global-c-d/climber#m-initialsettings), [`ClimbingHandler.Settings`](/mod/game-api/types/game-other-namespaces/climbinghandler#m-settings), [`ClimbingPressureCalculator.ClimbingPressureCalculator`](/mod/game-api/types/game-other-namespaces/climbingpressurecalculator#m-ctor), [`ClimbingPressureCalculator.settings`](/mod/game-api/types/game-other-namespaces/climbingpressurecalculator#m-settings).

</div>
