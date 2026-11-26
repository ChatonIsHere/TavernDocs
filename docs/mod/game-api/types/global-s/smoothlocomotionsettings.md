---
title: "SmoothLocomotionSettings"
description: "Global tuning for the player's smooth (stick) locomotion: speeds, step and slope handling, falling, fall damage and safety recovery."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmoothLocomotionSettings

A **class** in `Root.Township`, the global namespace.

Global tuning for the player's smooth (stick) locomotion: speeds, step and slope handling, falling, fall damage and safety recovery. Get it with `GlobalSettings<SmoothLocomotionSettings>.Instance`; read by `SmoothLocomotion`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`GlobalSettings<SmoothLocomotionSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`SmoothLocomotionSettings`](/mod/game-api/types/global-s/smoothlocomotionsettings)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmoothLocomotionSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>42 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clampedspeed" /><code>{"private float clampedSpeed"}</code> | <span className="api-desc">Top speed for stick movement; faster input movement is clamped to it.</span> |
| <Link id="m-combatspeedmultiplier" /><code>{"private float combatSpeedMultiplier"}</code> | <span className="api-desc">Speed multiplier applied in combat.</span> |
| <Link id="m-dangerdamage" /><code>{"private float dangerDamage"}</code> | <span className="api-desc">Backing field for `DangerDamage`.</span> |
| <Link id="m-dangermask" /><code>{"private LayerMask dangerMask"}</code> | <span className="api-desc">Layers counted as dangerous; a safe spot can't be within 1 m of them.</span> |
| <Link id="m-deceleratelerp" /><code>{"private float decelerateLerp"}</code> | <span className="api-desc">How fast speed falls off when you let go.</span> |
| <Link id="m-disablerotatoronactivehandfor" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" disableRotatorOnActiveHandFor"}</code> | <span className="api-desc">Backing field for `DisableRotatorOnActiveHandFor`. Defaults to every mode.</span> |
| <Link id="m-distancetocheckforinfinitefall" /><code>{"private float distanceToCheckForInfiniteFall"}</code> | <span className="api-desc">How far down to look for ground; if none is found the player is moved to safety.</span> |
| <Link id="m-extraheight" /><code>{"private float extraHeight"}</code> | <span className="api-desc">Added to the head height when working out the body height.</span> |
| <Link id="m-fallcrippledamageoverdistance" /><code>{"private AnimationCurve fallCrippleDamageOverDistance"}</code> | <span className="api-desc">Curve from fall height to cripple damage.</span> |
| <Link id="m-falldamageoverdistance" /><code>{"private AnimationCurve fallDamageOverDistance"}</code> | <span className="api-desc">Curve from fall height to fall damage. Its last key sets `maxFallDistance`.</span> |
| <Link id="m-falldamagesound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" fallDamageSound"}</code> | <span className="api-desc">Sound played on landing.</span> |
| <Link id="m-falleffectsscaleoverdistance" /><code>{"private AnimationCurve fallEffectsScaleOverDistance"}</code> | <span className="api-desc">Curve from fall height to the size of the landing effect.</span> |
| <Link id="m-fallingcontrolovertime" /><code>{"private AnimationCurve fallingControlOverTime"}</code> | <span className="api-desc">Curve from time falling to how much steering you keep.</span> |
| <Link id="m-gravitymultiplier" /><code>{"private float gravityMultiplier"}</code> | <span className="api-desc">Scale on gravity for the smooth locomotion body.</span> |
| <Link id="m-hasmovedsensitivitysquared" /><code>{"private float hasMovedSensitivitySquared"}</code> | <span className="api-desc">Squared distance the local player's feet must move to count as having moved.</span> |
| <Link id="m-heightadjustmentlerp" /><code>{"private AnimationCurve heightAdjustmentLerp"}</code> | <span className="api-desc">Curve used by `LerpHeight` to ease the body height toward its target.</span> |
| <Link id="m-hungerstatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" hungerStatDefinition"}</code> | <span className="api-desc">Hunger stat whose level decides if `CanRun` allows running.</span> |
| <Link id="m-hungrysoundcooldown" /><code>{"private float hungrySoundCooldown"}</code> | <span className="api-desc">Seconds between plays of the too-hungry-to-run sound.</span> |
| <Link id="m-inputcurve" /><code>{"private AnimationCurve inputCurve"}</code> | <span className="api-desc">Curve from stick amount to speed.</span> |
| <Link id="m-leanlimit" /><code>{"private float leanLimit"}</code> | <span className="api-desc">How far the body can lean away from the head before it is pulled back.</span> |
| <Link id="m-maxanglebeforeslopedot" /><code>{"private float maxAngleBeforeSlopeDot"}</code> | <span className="api-desc">Slope steepness (as a normal y value) past which the player slides.</span> |
| <Link id="m-maxfalldistance" /><code>{"private float maxFallDistance"}</code> | <span className="api-desc">Fall height at the end of the damage curve. Set by `OnValidate`.</span> |
| <Link id="m-maxleveltorun" /><code>{"private int maxLevelToRun"}</code> | <span className="api-desc">Hunger level at or below which running needs some fullness.</span> |
| <Link id="m-mindistanceforeffect" /><code>{"private float minDistanceForEffect"}</code> | <span className="api-desc">Backing field for `MinDistanceForEffect`.</span> |
| <Link id="m-minimumheight" /><code>{"private float minimumHeight"}</code> | <span className="api-desc">Lowest the body height can go.</span> |
| <Link id="m-minimumvelocity" /><code>{"private float minimumVelocity"}</code> | <span className="api-desc">Lowest move speed used once moving. Also read by AI regain control.</span> |
| <Link id="m-normalstepheight" /><code>{"private float normalStepHeight"}</code> | <span className="api-desc">Usual step height, and a floor on the body height.</span> |
| <Link id="m-onhitgroundeffectscaled" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/transformscaledevent">{"TransformScaledEvent"}</Link>{" onHitGroundEffectScaled"}</code> | <span className="api-desc">Effect played on landing, scaled by the fall.</span> |
| <Link id="m-pressacceleratelerp" /><code>{"private float pressAccelerateLerp"}</code> | <span className="api-desc">How fast you speed up while running (stick pressed).</span> |
| <Link id="m-pressedspeed" /><code>{"private float pressedSpeed"}</code> | <span className="api-desc">Running speed with the stick pressed.</span> |
| <Link id="m-recoverfromsafetyrepositionblackfadeduration" /><code>{"private float recoverFromSafetyRepositionBlackFadeDuration"}</code> | <span className="api-desc">Seconds the screen stays black after a safety move before fading back.</span> |
| <Link id="m-recoverfromsafetyrepositionduration" /><code>{"private float recoverFromSafetyRepositionDuration"}</code> | <span className="api-desc">Total seconds of the recover state after being moved to safety.</span> |
| <Link id="m-recoveryfadeblackness" /><code>{"private float recoveryFadeBlackness"}</code> | <span className="api-desc">Blackness for the recovery fade. Nothing reads it in this build.</span> |
| <Link id="m-safetymask" /><code>{"private LayerMask safetyMask"}</code> | <span className="api-desc">Layers that count as safe ground to be moved back to.</span> |
| <Link id="m-slipvalueincreaseduration" /><code>{"private float slipValueIncreaseDuration"}</code> | <span className="api-desc">Seconds for sliding on a steep slope to build to full.</span> |
| <Link id="m-slopehelperdistance" /><code>{"private float slopeHelperDistance"}</code> | <span className="api-desc">Extra distance for ground checks that keep you stuck to slopes.</span> |
| <Link id="m-slopemultiplier" /><code>{"private float slopeMultiplier"}</code> | <span className="api-desc">How strongly a steep slope pushes you down it.</span> |
| <Link id="m-standablemask" /><code>{"private LayerMask standableMask"}</code> | <span className="api-desc">Layers you can stand on.</span> |
| <Link id="m-teleportfalltimer" /><code>{"private float teleportFallTimer"}</code> | <span className="api-desc">The teleporter only switches on while you have been falling for less than this many seconds.</span> |
| <Link id="m-touchacceleratelerp" /><code>{"private float touchAccelerateLerp"}</code> | <span className="api-desc">How fast you speed up while walking.</span> |
| <Link id="m-touchedspeed" /><code>{"private float touchedSpeed"}</code> | <span className="api-desc">Walking speed.</span> |
| <Link id="m-tryingtorunsound" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" tryingToRunSound"}</code> | <span className="api-desc">Sound played when you try to run while too hungry.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-clampedspeed-2" /><code>{"float ClampedSpeed { get; }"}</code> | <span className="api-desc">Top horizontal speed movement is clamped to.</span> |
| <Link id="m-combatspeedmultiplier-2" /><code>{"float CombatSpeedMultiplier { get; }"}</code> | <span className="api-desc">Speed multiplier applied while in combat.</span> |
| <Link id="m-dangerdamage-2" /><code>{"float DangerDamage { get; }"}</code> | <span className="api-desc">Damage value for danger layers. Nothing reads it in this build.</span> |
| <Link id="m-dangermask-2" /><code>{"LayerMask DangerMask { get; }"}</code> | <span className="api-desc">Layers counted as dangerous; a safe recovery point can't be within 1 m of them.</span> |
| <Link id="m-deceleratelerp-2" /><code>{"float DecelerateLerp { get; }"}</code> | <span className="api-desc">How fast movement speed falls off when input stops.</span> |
| <Link id="m-disablerotatoronactivehandfor-2" /><code><Link to="/mod/game-api/types/assembly-other/playermode">{"PlayerMode"}</Link>{" DisableRotatorOnActiveHandFor { get; }"}</code> | <span className="api-desc">Player modes for which turning is meant to be disabled on the active hand. Nothing reads it in this build.</span> |
| <Link id="m-distancetocheckforinfinitefall-2" /><code>{"float DistanceToCheckForInfiniteFall { get; }"}</code> | <span className="api-desc">How far down to look for ground; with none in range the player is moved back to safety.</span> |
| <Link id="m-extraheight-2" /><code>{"float ExtraHeight { get; }"}</code> | <span className="api-desc">Added to the head height when working out the character height.</span> |
| <Link id="m-fallcrippledamageoverdistance-2" /><code>{"AnimationCurve FallCrippleDamageOverDistance { get; }"}</code> | <span className="api-desc">Curve from fall height to the crippling part of fall damage.</span> |
| <Link id="m-falldamageoverdistance-2" /><code>{"AnimationCurve FallDamageOverDistance { get; }"}</code> | <span className="api-desc">Curve from fall height to fall damage. Its last key sets `MaxFallDistance`.</span> |
| <Link id="m-falldamagesound-2" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" FallDamageSound { get; }"}</code> | <span className="api-desc">Sound played on fall damage.</span> |
| <Link id="m-falleffectsscaleoverdistance-2" /><code>{"AnimationCurve FallEffectsScaleOverDistance { get; }"}</code> | <span className="api-desc">Curve from fall height to the scale of the landing effect.</span> |
| <Link id="m-fallingcontrolovertime-2" /><code>{"AnimationCurve FallingControlOverTime { get; }"}</code> | <span className="api-desc">Curve from time spent falling to how much input control is left.</span> |
| <Link id="m-gravitymultiplier-2" /><code>{"float GravityMultiplier { get; }"}</code> | <span className="api-desc">Gravity multiplier for the player.</span> |
| <Link id="m-hasmovedsensitivitysquared-2" /><code>{"float HasMovedSensitivitySquared { get; }"}</code> | <span className="api-desc">Squared distance the local player's feet must move before it counts as having moved.</span> |
| <Link id="m-hungrysoundcooldown-2" /><code>{"float HungrySoundCooldown { get; }"}</code> | <span className="api-desc">Minimum seconds between "too hungry to run" sounds.</span> |
| <Link id="m-inputcurve-2" /><code>{"AnimationCurve InputCurve { get; }"}</code> | <span className="api-desc">Curve applied to stick input strength.</span> |
| <Link id="m-leanlimit-2" /><code>{"float LeanLimit { get; }"}</code> | <span className="api-desc">How far the head can lean from the body before the character is repositioned.</span> |
| <Link id="m-maxanglebeforeslopedot-2" /><code>{"float MaxAngleBeforeSlopeDot { get; }"}</code> | <span className="api-desc">Ground normal Y below which the ground counts as a slope you slide on.</span> |
| <Link id="m-maxfalldistance-2" /><code>{"float MaxFallDistance { get; }"}</code> | <span className="api-desc">Largest fall distance that is synced; copied from the fall damage curve's last key.</span> |
| <Link id="m-mindistanceforeffect-2" /><code>{"float MinDistanceForEffect { get; }"}</code> | <span className="api-desc">Minimum fall distance for the landing effect. Nothing reads it in this build.</span> |
| <Link id="m-minimumheight-2" /><code>{"float MinimumHeight { get; }"}</code> | <span className="api-desc">Lowest the character height can be.</span> |
| <Link id="m-minimumvelocity-2" /><code>{"float MinimumVelocity { get; }"}</code> | <span className="api-desc">Lowest move speed while input is applied. Creatures regaining control also use it.</span> |
| <Link id="m-normalstepheight-2" /><code>{"float NormalStepHeight { get; }"}</code> | <span className="api-desc">Step height the character controller uses.</span> |
| <Link id="m-onhitgroundeffectscaled-2" /><code><Link to="/mod/game-api/types/global-t-x/transformscaledevent">{"TransformScaledEvent"}</Link>{" OnHitGroundEffectScaled { get; }"}</code> | <span className="api-desc">Effect event raised on landing, scaled by fall height.</span> |
| <Link id="m-pressacceleratelerp-2" /><code>{"float PressAccelerateLerp { get; }"}</code> | <span className="api-desc">How fast speed builds up when the stick is pressed (running).</span> |
| <Link id="m-pressedspeed-2" /><code>{"float PressedSpeed { get; }"}</code> | <span className="api-desc">Move speed when the stick is pressed in.</span> |
| <Link id="m-recoverfromsafetyrepositionblackfadeduration-2" /><code>{"float RecoverFromSafetyRepositionBlackFadeDuration { get; }"}</code> | <span className="api-desc">Fade to black time when the player is moved back to safety.</span> |
| <Link id="m-recoverfromsafetyrepositionduration-2" /><code>{"float RecoverFromSafetyRepositionDuration { get; }"}</code> | <span className="api-desc">How long the move back to safety takes.</span> |
| <Link id="m-recoveryfadeblackness-2" /><code>{"float RecoveryFadeBlackness { get; }"}</code> | <span className="api-desc">How dark the screen goes during safety recovery.</span> |
| <Link id="m-safetymask-2" /><code>{"LayerMask SafetyMask { get; }"}</code> | <span className="api-desc">Layers a player can be put back onto when moved to safety.</span> |
| <Link id="m-slipvalueincreaseduration-2" /><code>{"float SlipValueIncreaseDuration { get; }"}</code> | <span className="api-desc">Seconds for sliding on a steep slope to build up to full.</span> |
| <Link id="m-slopehelperdistance-2" /><code>{"float SlopeHelperDistance { get; }"}</code> | <span className="api-desc">Extra distance below the feet checked for ground, to stick to slopes.</span> |
| <Link id="m-slopemultiplier-2" /><code>{"float SlopeMultiplier { get; }"}</code> | <span className="api-desc">Strength of sliding down a steep slope.</span> |
| <Link id="m-standablemask-2" /><code>{"LayerMask StandableMask { get; }"}</code> | <span className="api-desc">Layers the player can stand on.</span> |
| <Link id="m-teleportfalltimer-2" /><code>{"float TeleportFallTimer { get; }"}</code> | <span className="api-desc">Seconds of falling after which the teleporters are turned off.</span> |
| <Link id="m-touchacceleratelerp-2" /><code>{"float TouchAccelerateLerp { get; }"}</code> | <span className="api-desc">How fast speed builds up when the stick is only touched (walking).</span> |
| <Link id="m-touchedspeed-2" /><code>{"float TouchedSpeed { get; }"}</code> | <span className="api-desc">Move speed when the stick is only touched.</span> |
| <Link id="m-tryingtorunhungrysound" /><code><Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" TryingToRunHungrySound { get; }"}</code> | <span className="api-desc">Sound played when the player tries to run while too hungry.</span> |
| <Link id="m-walkingspeedmultiplier" /><code>{"float WalkingSpeedMultiplier { get; set; }"}</code> | <span className="api-desc">Runtime multiplier on walking speed. Settable.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canrun" /><code>{"bool CanRun("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" hungerStat, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" fullnessStat)"}</code> | <span className="api-desc">True unless the hunger stat is enabled and at level 2 or lower; then running needs some fullness left.</span> |
| <Link id="m-lerpheight" /><code>{"float LerpHeight(float currenty, float targetY)"}</code> | <span className="api-desc">Smooths a height towards a target using the height adjustment curve.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: sets `maxFallDistance` to the last key of the fall damage curve.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SmoothLocomotionSettings`:

<div className="api-used-in">

[`SmoothLocomotion.settings`](/mod/game-api/types/global-s/smoothlocomotion#m-settings).

</div>
