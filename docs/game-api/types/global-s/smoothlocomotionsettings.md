---
title: "SmoothLocomotionSettings"
description: "Global tuning for the player's smooth (stick) locomotion: speeds, step and slope handling, falling, fall damage and safety recovery."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmoothLocomotionSettings

A **class** in `Root.Township`, no namespace.

Global tuning for the player's smooth (stick) locomotion: speeds, step and slope handling, falling, fall damage and safety recovery. Get it with `GlobalSettings<SmoothLocomotionSettings>.Instance`; read by `SmoothLocomotion`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`GlobalSettings<SmoothLocomotionSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`SmoothLocomotionSettings`](/game-api/types/global-s/smoothlocomotionsettings)
- **Attributes** `GlobalSettings`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SmoothLocomotionSettings()"}</code> |

## Fields

<details>
<summary>42 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-clampedspeed" /><code>{"private float clampedSpeed"}</code> |
| <Link id="m-combatspeedmultiplier" /><code>{"private float combatSpeedMultiplier"}</code> |
| <Link id="m-dangerdamage" /><code>{"private float dangerDamage"}</code> |
| <Link id="m-dangermask" /><code>{"private LayerMask dangerMask"}</code> |
| <Link id="m-deceleratelerp" /><code>{"private float decelerateLerp"}</code> |
| <Link id="m-disablerotatoronactivehandfor" /><code>{"private "}<Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" disableRotatorOnActiveHandFor"}</code> |
| <Link id="m-distancetocheckforinfinitefall" /><code>{"private float distanceToCheckForInfiniteFall"}</code> |
| <Link id="m-extraheight" /><code>{"private float extraHeight"}</code> |
| <Link id="m-fallcrippledamageoverdistance" /><code>{"private AnimationCurve fallCrippleDamageOverDistance"}</code> |
| <Link id="m-falldamageoverdistance" /><code>{"private AnimationCurve fallDamageOverDistance"}</code> |
| <Link id="m-falldamagesound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" fallDamageSound"}</code> |
| <Link id="m-falleffectsscaleoverdistance" /><code>{"private AnimationCurve fallEffectsScaleOverDistance"}</code> |
| <Link id="m-fallingcontrolovertime" /><code>{"private AnimationCurve fallingControlOverTime"}</code> |
| <Link id="m-gravitymultiplier" /><code>{"private float gravityMultiplier"}</code> |
| <Link id="m-hasmovedsensitivitysquared" /><code>{"private float hasMovedSensitivitySquared"}</code> |
| <Link id="m-heightadjustmentlerp" /><code>{"private AnimationCurve heightAdjustmentLerp"}</code> |
| <Link id="m-hungerstatdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" hungerStatDefinition"}</code> |
| <Link id="m-hungrysoundcooldown" /><code>{"private float hungrySoundCooldown"}</code> |
| <Link id="m-inputcurve" /><code>{"private AnimationCurve inputCurve"}</code> |
| <Link id="m-leanlimit" /><code>{"private float leanLimit"}</code> |
| <Link id="m-maxanglebeforeslopedot" /><code>{"private float maxAngleBeforeSlopeDot"}</code> |
| <Link id="m-maxfalldistance" /><code>{"private float maxFallDistance"}</code> |
| <Link id="m-maxleveltorun" /><code>{"private int maxLevelToRun"}</code> |
| <Link id="m-mindistanceforeffect" /><code>{"private float minDistanceForEffect"}</code> |
| <Link id="m-minimumheight" /><code>{"private float minimumHeight"}</code> |
| <Link id="m-minimumvelocity" /><code>{"private float minimumVelocity"}</code> |
| <Link id="m-normalstepheight" /><code>{"private float normalStepHeight"}</code> |
| <Link id="m-onhitgroundeffectscaled" /><code>{"private "}<Link to="/game-api/types/global-t-x/transformscaledevent">{"TransformScaledEvent"}</Link>{" onHitGroundEffectScaled"}</code> |
| <Link id="m-pressacceleratelerp" /><code>{"private float pressAccelerateLerp"}</code> |
| <Link id="m-pressedspeed" /><code>{"private float pressedSpeed"}</code> |
| <Link id="m-recoverfromsafetyrepositionblackfadeduration" /><code>{"private float recoverFromSafetyRepositionBlackFadeDuration"}</code> |
| <Link id="m-recoverfromsafetyrepositionduration" /><code>{"private float recoverFromSafetyRepositionDuration"}</code> |
| <Link id="m-recoveryfadeblackness" /><code>{"private float recoveryFadeBlackness"}</code> |
| <Link id="m-safetymask" /><code>{"private LayerMask safetyMask"}</code> |
| <Link id="m-slipvalueincreaseduration" /><code>{"private float slipValueIncreaseDuration"}</code> |
| <Link id="m-slopehelperdistance" /><code>{"private float slopeHelperDistance"}</code> |
| <Link id="m-slopemultiplier" /><code>{"private float slopeMultiplier"}</code> |
| <Link id="m-standablemask" /><code>{"private LayerMask standableMask"}</code> |
| <Link id="m-teleportfalltimer" /><code>{"private float teleportFallTimer"}</code> |
| <Link id="m-touchacceleratelerp" /><code>{"private float touchAccelerateLerp"}</code> |
| <Link id="m-touchedspeed" /><code>{"private float touchedSpeed"}</code> |
| <Link id="m-tryingtorunsound" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" tryingToRunSound"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clampedspeed-2" /><code>{"float ClampedSpeed { get; }"}</code> | Top horizontal speed movement is clamped to. |
| <Link id="m-combatspeedmultiplier-2" /><code>{"float CombatSpeedMultiplier { get; }"}</code> | Speed multiplier applied while in combat. |
| <Link id="m-dangerdamage-2" /><code>{"float DangerDamage { get; }"}</code> |  |
| <Link id="m-dangermask-2" /><code>{"LayerMask DangerMask { get; }"}</code> | Layers counted as dangerous; a safe recovery point can't be within 1 m of them. |
| <Link id="m-deceleratelerp-2" /><code>{"float DecelerateLerp { get; }"}</code> | How fast movement speed falls off when input stops. |
| <Link id="m-disablerotatoronactivehandfor-2" /><code><Link to="/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" DisableRotatorOnActiveHandFor { get; }"}</code> |  |
| <Link id="m-distancetocheckforinfinitefall-2" /><code>{"float DistanceToCheckForInfiniteFall { get; }"}</code> | How far down to look for ground; with none in range the player is moved back to safety. |
| <Link id="m-extraheight-2" /><code>{"float ExtraHeight { get; }"}</code> | Added to the head height when working out the character height. |
| <Link id="m-fallcrippledamageoverdistance-2" /><code>{"AnimationCurve FallCrippleDamageOverDistance { get; }"}</code> | Curve from fall height to the crippling part of fall damage. |
| <Link id="m-falldamageoverdistance-2" /><code>{"AnimationCurve FallDamageOverDistance { get; }"}</code> | Curve from fall height to fall damage. Its last key sets `MaxFallDistance`. |
| <Link id="m-falldamagesound-2" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" FallDamageSound { get; }"}</code> | Sound played on fall damage. |
| <Link id="m-falleffectsscaleoverdistance-2" /><code>{"AnimationCurve FallEffectsScaleOverDistance { get; }"}</code> | Curve from fall height to the scale of the landing effect. |
| <Link id="m-fallingcontrolovertime-2" /><code>{"AnimationCurve FallingControlOverTime { get; }"}</code> | Curve from time spent falling to how much input control is left. |
| <Link id="m-gravitymultiplier-2" /><code>{"float GravityMultiplier { get; }"}</code> | Gravity multiplier for the player. |
| <Link id="m-hasmovedsensitivitysquared-2" /><code>{"float HasMovedSensitivitySquared { get; }"}</code> | Squared distance the local player's feet must move before it counts as having moved. |
| <Link id="m-hungrysoundcooldown-2" /><code>{"float HungrySoundCooldown { get; }"}</code> | Minimum seconds between "too hungry to run" sounds. |
| <Link id="m-inputcurve-2" /><code>{"AnimationCurve InputCurve { get; }"}</code> | Curve applied to stick input strength. |
| <Link id="m-leanlimit-2" /><code>{"float LeanLimit { get; }"}</code> | How far the head can lean from the body before the character is repositioned. |
| <Link id="m-maxanglebeforeslopedot-2" /><code>{"float MaxAngleBeforeSlopeDot { get; }"}</code> | Ground normal Y below which the ground counts as a slope you slide on. |
| <Link id="m-maxfalldistance-2" /><code>{"float MaxFallDistance { get; }"}</code> | Largest fall distance that is synced; copied from the fall damage curve's last key. |
| <Link id="m-mindistanceforeffect-2" /><code>{"float MinDistanceForEffect { get; }"}</code> |  |
| <Link id="m-minimumheight-2" /><code>{"float MinimumHeight { get; }"}</code> | Lowest the character height can be. |
| <Link id="m-minimumvelocity-2" /><code>{"float MinimumVelocity { get; }"}</code> | Lowest move speed while input is applied. Creatures regaining control also use it. |
| <Link id="m-normalstepheight-2" /><code>{"float NormalStepHeight { get; }"}</code> | Step height the character controller uses. |
| <Link id="m-onhitgroundeffectscaled-2" /><code><Link to="/game-api/types/global-t-x/transformscaledevent">{"TransformScaledEvent"}</Link>{" OnHitGroundEffectScaled { get; }"}</code> | Effect event raised on landing, scaled by fall height. |
| <Link id="m-pressacceleratelerp-2" /><code>{"float PressAccelerateLerp { get; }"}</code> | How fast speed builds up when the stick is pressed (running). |
| <Link id="m-pressedspeed-2" /><code>{"float PressedSpeed { get; }"}</code> | Move speed when the stick is pressed in. |
| <Link id="m-recoverfromsafetyrepositionblackfadeduration-2" /><code>{"float RecoverFromSafetyRepositionBlackFadeDuration { get; }"}</code> | Fade to black time when the player is moved back to safety. |
| <Link id="m-recoverfromsafetyrepositionduration-2" /><code>{"float RecoverFromSafetyRepositionDuration { get; }"}</code> | How long the move back to safety takes. |
| <Link id="m-recoveryfadeblackness-2" /><code>{"float RecoveryFadeBlackness { get; }"}</code> | How dark the screen goes during safety recovery. |
| <Link id="m-safetymask-2" /><code>{"LayerMask SafetyMask { get; }"}</code> | Layers a player can be put back onto when moved to safety. |
| <Link id="m-slipvalueincreaseduration-2" /><code>{"float SlipValueIncreaseDuration { get; }"}</code> | Seconds for sliding on a steep slope to build up to full. |
| <Link id="m-slopehelperdistance-2" /><code>{"float SlopeHelperDistance { get; }"}</code> | Extra distance below the feet checked for ground, to stick to slopes. |
| <Link id="m-slopemultiplier-2" /><code>{"float SlopeMultiplier { get; }"}</code> | Strength of sliding down a steep slope. |
| <Link id="m-standablemask-2" /><code>{"LayerMask StandableMask { get; }"}</code> | Layers the player can stand on. |
| <Link id="m-teleportfalltimer-2" /><code>{"float TeleportFallTimer { get; }"}</code> | Seconds of falling after which the teleporters are turned off. |
| <Link id="m-touchacceleratelerp-2" /><code>{"float TouchAccelerateLerp { get; }"}</code> | How fast speed builds up when the stick is only touched (walking). |
| <Link id="m-touchedspeed-2" /><code>{"float TouchedSpeed { get; }"}</code> | Move speed when the stick is only touched. |
| <Link id="m-tryingtorunhungrysound" /><code><Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" TryingToRunHungrySound { get; }"}</code> | Sound played when the player tries to run while too hungry. |
| <Link id="m-walkingspeedmultiplier" /><code>{"float WalkingSpeedMultiplier { get; set; }"}</code> | Runtime multiplier on walking speed. Settable. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canrun" /><code>{"bool CanRun("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" hungerStat, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" fullnessStat)"}</code> | True unless the hunger stat is enabled and at level 2 or lower; then running needs some fullness left. |
| <Link id="m-lerpheight" /><code>{"float LerpHeight(float currenty, float targetY)"}</code> | Smooths a height towards a target using the height adjustment curve. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SmoothLocomotionSettings`:

[`SmoothLocomotion.settings`](/game-api/types/global-s/smoothlocomotion#m-settings).
