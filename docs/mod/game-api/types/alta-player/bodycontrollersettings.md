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
| <Link id="m-ctor" /><code>{"BodyControllerSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>28 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodyforwardbendmultiplier" /><code>{"private float bodyForwardBendMultiplier"}</code> | Backing field for `BodyForwardBendMultiplier`: how far the body bends the other way when the head nods. Default 1.5. |
| <Link id="m-bodypitchmultiplier" /><code>{"private float bodyPitchMultiplier"}</code> | Backing field for `BodyPitchMultiplier`. |
| <Link id="m-bodyrollmultiplier" /><code>{"private float bodyRollMultiplier"}</code> | Backing field for `BodyRollMultiplier`. Default -1. |
| <Link id="m-bodysidebendmultiplier" /><code>{"private float bodySideBendMultiplier"}</code> | Backing field for `BodySideBendMultiplier`: how far the body bends the other way when the head tilts. Default 1.5. |
| <Link id="m-distancetomovedtobendangle" /><code>{"private AnimationCurve distanceToMovedToBendAngle"}</code> | Backing field for `DistanceToMovedToBendAngle`. |
| <Link id="m-handpositionheadingimpact" /><code>{"private AnimationCurve handPositionHeadingImpact"}</code> | Backing field for `HandPositionHeadingImpact`. |
| <Link id="m-handpositionweight" /><code>{"private float handPositionWeight"}</code> | Backing field for `HandPositionWeight`. |
| <Link id="m-handweightbydistancefrombody" /><code>{"private AnimationCurve handWeightByDistanceFromBody"}</code> | Backing field for `HandWeightByDistanceFromBody`. |
| <Link id="m-headforwardlimit" /><code>{"private float headForwardLimit"}</code> | Backing field for `HeadForwardLimit`. Default 0.2. |
| <Link id="m-headheadingimpactonroll" /><code>{"private AnimationCurve headHeadingImpactOnRoll"}</code> | Backing field for `HeadHeadingImpactOnRoll`: how much head roll is used, by head heading. |
| <Link id="m-headheadingpitchimpact" /><code>{"private AnimationCurve headHeadingPitchImpact"}</code> | Backing field for `HeadHeadingPitchImpact`: how much head pitch is used, by head heading. |
| <Link id="m-headingheadrotationweight" /><code>{"private float headingHeadRotationWeight"}</code> | Backing field for `HeadingHeadRotationWeight`. |
| <Link id="m-headoffset" /><code>{"private Vector3 headOffset"}</code> | Backing field for `HeadOffset`. |
| <Link id="m-headpitchimpactonbodypitch" /><code>{"private AnimationCurve headPitchImpactOnBodyPitch"}</code> | Backing field for `HeadPitchImpactOnBodyPitch`. |
| <Link id="m-headpositionpitchangle" /><code>{"private AnimationCurve headPositionPitchAngle"}</code> | Backing field for `HeadPositionPitchAngle`. |
| <Link id="m-headpositionweight" /><code>{"private float headPositionWeight"}</code> | Backing field for `HeadPositionWeight`. Marked "NOT used anymore" in the inspector. |
| <Link id="m-headrolltobodyrollimpact" /><code>{"private AnimationCurve headRollToBodyRollImpact"}</code> | Backing field for `HeadRollToBodyRollImpact`. |
| <Link id="m-headrotationheadingimpact" /><code>{"private AnimationCurve headRotationHeadingImpact"}</code> | Backing field for `HeadRotationHeadingImpact`. |
| <Link id="m-isbendingwithmovement" /><code>{"private bool isBendingWithMovement"}</code> | Backing field for `IsBendingWithMovement`. Default true. |
| <Link id="m-ischangingheading" /><code>{"private bool isChangingHeading"}</code> | Backing field for `IsChangingHeading`. Default true. |
| <Link id="m-ischangingpitch" /><code>{"private bool isChangingPitch"}</code> | Backing field for `IsChangingPitch`. Default true. |
| <Link id="m-ischangingroll" /><code>{"private bool isChangingRoll"}</code> | Backing field for `IsChangingRoll`. Default true. |
| <Link id="m-minmovementtobend" /><code>{"private float minMovementToBend"}</code> | Backing field for `MinMovementToBend`, stored squared. Default 0.0001. |
| <Link id="m-movementbendlerpspeed" /><code>{"private float movementBendLerpSpeed"}</code> | Backing field for `MovementBendLerpSpeed`. Default 0.2. |
| <Link id="m-pitchheadpositionweight" /><code>{"private float pitchHeadPositionWeight"}</code> | Backing field for `PitchHeadPositionWeight`. |
| <Link id="m-pitchheadrotationweight" /><code>{"private float pitchHeadRotationWeight"}</code> | Backing field for `PitchHeadRotationWeight`. |
| <Link id="m-positionlerpspeed" /><code>{"private AnimationCurve positionLerpSpeed"}</code> | Backing field for `PositionLerpSpeed`. |
| <Link id="m-rotationlerpspeed" /><code>{"private AnimationCurve rotationLerpSpeed"}</code> | Backing field for `RotationLerpSpeed`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodyforwardbendmultiplier-2" /><code>{"float BodyForwardBendMultiplier { get; }"}</code> | How much the body bends the other way when the head nods. Default 1.5. |
| <Link id="m-bodypitchmultiplier-2" /><code>{"float BodyPitchMultiplier { get; }"}</code> | Multiplier on body pitch. Default 1. |
| <Link id="m-bodyrollmultiplier-2" /><code>{"float BodyRollMultiplier { get; }"}</code> | Multiplier on body roll. Default -1. |
| <Link id="m-bodysidebendmultiplier-2" /><code>{"float BodySideBendMultiplier { get; }"}</code> | How much the body bends the other way when the head tilts sideways. Default 1.5. |
| <Link id="m-distancetomovedtobendangle-2" /><code>{"AnimationCurve DistanceToMovedToBendAngle { get; }"}</code> | Curve from distance moved to body bend angle. |
| <Link id="m-handpositionheadingimpact-2" /><code>{"AnimationCurve HandPositionHeadingImpact { get; }"}</code> | Curve for how much hand position turns the body. |
| <Link id="m-handpositionweight-2" /><code>{"float HandPositionWeight { get; }"}</code> | Weight of hand position on body heading. |
| <Link id="m-handweightbydistancefrombody-2" /><code>{"AnimationCurve HandWeightByDistanceFromBody { get; }"}</code> | Curve weighting each hand by how far it is from the body. |
| <Link id="m-headforwardlimit-2" /><code>{"float HeadForwardLimit { get; }"}</code> | Limit on how far forward the head can lead. Default 0.2. |
| <Link id="m-headheadingimpactonroll-2" /><code>{"AnimationCurve HeadHeadingImpactOnRoll { get; }"}</code> | Curve for how much head roll is used, by head heading. |
| <Link id="m-headheadingpitchimpact-2" /><code>{"AnimationCurve HeadHeadingPitchImpact { get; }"}</code> | Curve for how much head pitch is used, by head heading. |
| <Link id="m-headingheadrotationweight-2" /><code>{"float HeadingHeadRotationWeight { get; }"}</code> | Weight of head rotation on body heading. |
| <Link id="m-headoffset-2" /><code>{"Vector3 HeadOffset { get; }"}</code> | Offset from the head to the body. |
| <Link id="m-headpitchimpactonbodypitch-2" /><code>{"AnimationCurve HeadPitchImpactOnBodyPitch { get; }"}</code> | Curve from head pitch to body pitch. |
| <Link id="m-headpositionpitchangle-2" /><code>{"AnimationCurve HeadPositionPitchAngle { get; }"}</code> | Curve from head position to pitch angle. |
| <Link id="m-headpositionweight-2" /><code>{"float HeadPositionWeight { get; }"}</code> | Marked in the inspector as no longer used. |
| <Link id="m-headrolltobodyrollimpact-2" /><code>{"AnimationCurve HeadRollToBodyRollImpact { get; }"}</code> | Curve from head roll to body roll. |
| <Link id="m-headrotationheadingimpact-2" /><code>{"AnimationCurve HeadRotationHeadingImpact { get; }"}</code> | Curve for how much head rotation turns the body. |
| <Link id="m-isbendingwithmovement-2" /><code>{"bool IsBendingWithMovement { get; }"}</code> | Whether the body leans when moving. Default true. |
| <Link id="m-ischangingheading-2" /><code>{"bool IsChangingHeading { get; }"}</code> | Whether the body turns with the head and hands. Default true. |
| <Link id="m-ischangingpitch-2" /><code>{"bool IsChangingPitch { get; }"}</code> | Whether the body pitches with the head. Default true. |
| <Link id="m-ischangingroll-2" /><code>{"bool IsChangingRoll { get; }"}</code> | Whether the body rolls with the head. Default true. |
| <Link id="m-minmovementtobend-2" /><code>{"float MinMovementToBend { get; }"}</code> | Smallest movement (squared) that causes a lean. |
| <Link id="m-movementbendlerpspeed-2" /><code>{"float MovementBendLerpSpeed { get; }"}</code> | Smoothing speed for the movement lean. Default 0.2. |
| <Link id="m-pitchheadpositionweight-2" /><code>{"float PitchHeadPositionWeight { get; }"}</code> | Weight of head position on pitch. Default 1. |
| <Link id="m-pitchheadrotationweight-2" /><code>{"float PitchHeadRotationWeight { get; }"}</code> | Weight of head rotation on pitch. Default 1. |
| <Link id="m-positionlerpspeed-2" /><code>{"AnimationCurve PositionLerpSpeed { get; }"}</code> | Curve for position smoothing speed. |
| <Link id="m-rotationlerpspeed-2" /><code>{"AnimationCurve RotationLerpSpeed { get; }"}</code> | Curve for rotation smoothing speed. |

## Used in

Members of other types that take, return or hold a `BodyControllerSettings`:

[`BodyController.AddOverrideSetting`](/mod/game-api/types/alta-player/bodycontroller#m-addoverridesetting), [`BodyController.Settings`](/mod/game-api/types/alta-player/bodycontroller#m-settings), [`BodyController.BodyControllerSettingsOverride.BodyControllerSettingsOverride`](/mod/game-api/types/alta-player/bodycontroller-bodycontrollersettingsoverride#m-ctor), [`BodyController.BodyControllerSettingsOverride.Settings`](/mod/game-api/types/alta-player/bodycontroller-bodycontrollersettingsoverride#m-settings), [`PlayerControllerSettings.bodyControllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-bodycontrollersettings), [`PlayerControllerSettings.BodyControllerSettings`](/mod/game-api/types/alta-player/playercontrollersettings#m-bodycontrollersettings-2), [`MovementBendController.CalculateMovementBend`](/mod/game-api/types/global-m-o/movementbendcontroller#m-calculatemovementbend), [`OverrideBodySettings.settings`](/mod/game-api/types/global-m-o/overridebodysettings#m-settings).
