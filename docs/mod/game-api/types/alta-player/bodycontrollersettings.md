---
title: "BodyControllerSettings"
description: "Settings asset for how a player's body follows the head and hands: heading, pitch and roll from head movement, bending when moving, and smoothing speeds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BodyControllerSettings

A **class** in `Root.Township`, `Alta.Character`.

Settings asset for how a player's body follows the head and hands: heading, pitch and roll from head movement, bending when moving, and smoothing speeds.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`OverridableSettings`](/mod/game-api/types/global-m-o/overridablesettings)
- **Derived types** [`BodyControllerSettings.Create`](/mod/game-api/types/alta-player/bodycontrollersettings-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-player/bodycontrollersettings-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BodyControllerSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>28 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodyforwardbendmultiplier" /><code>{"private float bodyForwardBendMultiplier"}</code> | <span className="api-desc">Backing field for `BodyForwardBendMultiplier`: how far the body bends the other way when the head nods. Default 1.5.</span> |
| <Link id="m-bodypitchmultiplier" /><code>{"private float bodyPitchMultiplier"}</code> | <span className="api-desc">Backing field for `BodyPitchMultiplier`.</span> |
| <Link id="m-bodyrollmultiplier" /><code>{"private float bodyRollMultiplier"}</code> | <span className="api-desc">Backing field for `BodyRollMultiplier`. Default -1.</span> |
| <Link id="m-bodysidebendmultiplier" /><code>{"private float bodySideBendMultiplier"}</code> | <span className="api-desc">Backing field for `BodySideBendMultiplier`: how far the body bends the other way when the head tilts. Default 1.5.</span> |
| <Link id="m-distancetomovedtobendangle" /><code>{"private AnimationCurve distanceToMovedToBendAngle"}</code> | <span className="api-desc">Backing field for `DistanceToMovedToBendAngle`.</span> |
| <Link id="m-handpositionheadingimpact" /><code>{"private AnimationCurve handPositionHeadingImpact"}</code> | <span className="api-desc">Backing field for `HandPositionHeadingImpact`.</span> |
| <Link id="m-handpositionweight" /><code>{"private float handPositionWeight"}</code> | <span className="api-desc">Backing field for `HandPositionWeight`.</span> |
| <Link id="m-handweightbydistancefrombody" /><code>{"private AnimationCurve handWeightByDistanceFromBody"}</code> | <span className="api-desc">Backing field for `HandWeightByDistanceFromBody`.</span> |
| <Link id="m-headforwardlimit" /><code>{"private float headForwardLimit"}</code> | <span className="api-desc">Backing field for `HeadForwardLimit`. Default 0.2.</span> |
| <Link id="m-headheadingimpactonroll" /><code>{"private AnimationCurve headHeadingImpactOnRoll"}</code> | <span className="api-desc">Backing field for `HeadHeadingImpactOnRoll`: how much head roll is used, by head heading.</span> |
| <Link id="m-headheadingpitchimpact" /><code>{"private AnimationCurve headHeadingPitchImpact"}</code> | <span className="api-desc">Backing field for `HeadHeadingPitchImpact`: how much head pitch is used, by head heading.</span> |
| <Link id="m-headingheadrotationweight" /><code>{"private float headingHeadRotationWeight"}</code> | <span className="api-desc">Backing field for `HeadingHeadRotationWeight`.</span> |
| <Link id="m-headoffset" /><code>{"private Vector3 headOffset"}</code> | <span className="api-desc">Backing field for `HeadOffset`.</span> |
| <Link id="m-headpitchimpactonbodypitch" /><code>{"private AnimationCurve headPitchImpactOnBodyPitch"}</code> | <span className="api-desc">Backing field for `HeadPitchImpactOnBodyPitch`.</span> |
| <Link id="m-headpositionpitchangle" /><code>{"private AnimationCurve headPositionPitchAngle"}</code> | <span className="api-desc">Backing field for `HeadPositionPitchAngle`.</span> |
| <Link id="m-headpositionweight" /><code>{"private float headPositionWeight"}</code> | <span className="api-desc">Backing field for `HeadPositionWeight`. Marked "NOT used anymore" in the inspector.</span> |
| <Link id="m-headrolltobodyrollimpact" /><code>{"private AnimationCurve headRollToBodyRollImpact"}</code> | <span className="api-desc">Backing field for `HeadRollToBodyRollImpact`.</span> |
| <Link id="m-headrotationheadingimpact" /><code>{"private AnimationCurve headRotationHeadingImpact"}</code> | <span className="api-desc">Backing field for `HeadRotationHeadingImpact`.</span> |
| <Link id="m-isbendingwithmovement" /><code>{"private bool isBendingWithMovement"}</code> | <span className="api-desc">Backing field for `IsBendingWithMovement`. Default true.</span> |
| <Link id="m-ischangingheading" /><code>{"private bool isChangingHeading"}</code> | <span className="api-desc">Backing field for `IsChangingHeading`. Default true.</span> |
| <Link id="m-ischangingpitch" /><code>{"private bool isChangingPitch"}</code> | <span className="api-desc">Backing field for `IsChangingPitch`. Default true.</span> |
| <Link id="m-ischangingroll" /><code>{"private bool isChangingRoll"}</code> | <span className="api-desc">Backing field for `IsChangingRoll`. Default true.</span> |
| <Link id="m-minmovementtobend" /><code>{"private float minMovementToBend"}</code> | <span className="api-desc">Backing field for `MinMovementToBend`, stored squared. Default 0.0001.</span> |
| <Link id="m-movementbendlerpspeed" /><code>{"private float movementBendLerpSpeed"}</code> | <span className="api-desc">Backing field for `MovementBendLerpSpeed`. Default 0.2.</span> |
| <Link id="m-pitchheadpositionweight" /><code>{"private float pitchHeadPositionWeight"}</code> | <span className="api-desc">Backing field for `PitchHeadPositionWeight`.</span> |
| <Link id="m-pitchheadrotationweight" /><code>{"private float pitchHeadRotationWeight"}</code> | <span className="api-desc">Backing field for `PitchHeadRotationWeight`.</span> |
| <Link id="m-positionlerpspeed" /><code>{"private AnimationCurve positionLerpSpeed"}</code> | <span className="api-desc">Backing field for `PositionLerpSpeed`.</span> |
| <Link id="m-rotationlerpspeed" /><code>{"private AnimationCurve rotationLerpSpeed"}</code> | <span className="api-desc">Backing field for `RotationLerpSpeed`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodyforwardbendmultiplier-2" /><code>{"float BodyForwardBendMultiplier { get; }"}</code> | <span className="api-desc">How much the body bends the other way when the head nods. Default 1.5.</span> |
| <Link id="m-bodypitchmultiplier-2" /><code>{"float BodyPitchMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on body pitch. Default 1.</span> |
| <Link id="m-bodyrollmultiplier-2" /><code>{"float BodyRollMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on body roll. Default -1.</span> |
| <Link id="m-bodysidebendmultiplier-2" /><code>{"float BodySideBendMultiplier { get; }"}</code> | <span className="api-desc">How much the body bends the other way when the head tilts sideways. Default 1.5.</span> |
| <Link id="m-distancetomovedtobendangle-2" /><code>{"AnimationCurve DistanceToMovedToBendAngle { get; }"}</code> | <span className="api-desc">Curve from distance moved to body bend angle.</span> |
| <Link id="m-handpositionheadingimpact-2" /><code>{"AnimationCurve HandPositionHeadingImpact { get; }"}</code> | <span className="api-desc">Curve for how much hand position turns the body.</span> |
| <Link id="m-handpositionweight-2" /><code>{"float HandPositionWeight { get; }"}</code> | <span className="api-desc">Weight of hand position on body heading.</span> |
| <Link id="m-handweightbydistancefrombody-2" /><code>{"AnimationCurve HandWeightByDistanceFromBody { get; }"}</code> | <span className="api-desc">Curve weighting each hand by how far it is from the body.</span> |
| <Link id="m-headforwardlimit-2" /><code>{"float HeadForwardLimit { get; }"}</code> | <span className="api-desc">Limit on how far forward the head can lead. Default 0.2.</span> |
| <Link id="m-headheadingimpactonroll-2" /><code>{"AnimationCurve HeadHeadingImpactOnRoll { get; }"}</code> | <span className="api-desc">Curve for how much head roll is used, by head heading.</span> |
| <Link id="m-headheadingpitchimpact-2" /><code>{"AnimationCurve HeadHeadingPitchImpact { get; }"}</code> | <span className="api-desc">Curve for how much head pitch is used, by head heading.</span> |
| <Link id="m-headingheadrotationweight-2" /><code>{"float HeadingHeadRotationWeight { get; }"}</code> | <span className="api-desc">Weight of head rotation on body heading.</span> |
| <Link id="m-headoffset-2" /><code>{"Vector3 HeadOffset { get; }"}</code> | <span className="api-desc">Offset from the head to the body.</span> |
| <Link id="m-headpitchimpactonbodypitch-2" /><code>{"AnimationCurve HeadPitchImpactOnBodyPitch { get; }"}</code> | <span className="api-desc">Curve from head pitch to body pitch.</span> |
| <Link id="m-headpositionpitchangle-2" /><code>{"AnimationCurve HeadPositionPitchAngle { get; }"}</code> | <span className="api-desc">Curve from head position to pitch angle.</span> |
| <Link id="m-headpositionweight-2" /><code>{"float HeadPositionWeight { get; }"}</code> | <span className="api-desc">Marked in the inspector as no longer used.</span> |
| <Link id="m-headrolltobodyrollimpact-2" /><code>{"AnimationCurve HeadRollToBodyRollImpact { get; }"}</code> | <span className="api-desc">Curve from head roll to body roll.</span> |
| <Link id="m-headrotationheadingimpact-2" /><code>{"AnimationCurve HeadRotationHeadingImpact { get; }"}</code> | <span className="api-desc">Curve for how much head rotation turns the body.</span> |
| <Link id="m-isbendingwithmovement-2" /><code>{"bool IsBendingWithMovement { get; }"}</code> | <span className="api-desc">Whether the body leans when moving. Default true.</span> |
| <Link id="m-ischangingheading-2" /><code>{"bool IsChangingHeading { get; }"}</code> | <span className="api-desc">Whether the body turns with the head and hands. Default true.</span> |
| <Link id="m-ischangingpitch-2" /><code>{"bool IsChangingPitch { get; }"}</code> | <span className="api-desc">Whether the body pitches with the head. Default true.</span> |
| <Link id="m-ischangingroll-2" /><code>{"bool IsChangingRoll { get; }"}</code> | <span className="api-desc">Whether the body rolls with the head. Default true.</span> |
| <Link id="m-minmovementtobend-2" /><code>{"float MinMovementToBend { get; }"}</code> | <span className="api-desc">Smallest movement (squared) that causes a lean.</span> |
| <Link id="m-movementbendlerpspeed-2" /><code>{"float MovementBendLerpSpeed { get; }"}</code> | <span className="api-desc">Smoothing speed for the movement lean. Default 0.2.</span> |
| <Link id="m-pitchheadpositionweight-2" /><code>{"float PitchHeadPositionWeight { get; }"}</code> | <span className="api-desc">Weight of head position on pitch. Default 1.</span> |
| <Link id="m-pitchheadrotationweight-2" /><code>{"float PitchHeadRotationWeight { get; }"}</code> | <span className="api-desc">Weight of head rotation on pitch. Default 1.</span> |
| <Link id="m-positionlerpspeed-2" /><code>{"AnimationCurve PositionLerpSpeed { get; }"}</code> | <span className="api-desc">Curve for position smoothing speed.</span> |
| <Link id="m-rotationlerpspeed-2" /><code>{"AnimationCurve RotationLerpSpeed { get; }"}</code> | <span className="api-desc">Curve for rotation smoothing speed.</span> |

## Used in

Members of other types that take, return or hold a `BodyControllerSettings`:

<div className="api-used-in">

[`BodyController.AddOverrideSetting`](/mod/game-api/types/alta-player/bodycontroller#m-addoverridesetting), [`BodyController.Settings`](/mod/game-api/types/alta-player/bodycontroller#m-settings), [`BodyController.BodyControllerSettingsOverride.BodyControllerSettingsOverride`](/mod/game-api/types/alta-player/bodycontroller-bodycontrollersettingsoverride#m-ctor), [`BodyController.BodyControllerSettingsOverride.Settings`](/mod/game-api/types/alta-player/bodycontroller-bodycontrollersettingsoverride#m-settings), [`PlayerControllerSettings.bodyControllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-bodycontrollersettings), [`PlayerControllerSettings.BodyControllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-bodycontrollersettings-2), [`MovementBendController.CalculateMovementBend`](/mod/game-api/types/global-m-o/movementbendcontroller#m-calculatemovementbend), [`OverrideBodySettings.settings`](/mod/game-api/types/global-m-o/overridebodysettings#m-settings).

</div>
