---
title: "DurationCurve"
description: "A serializable animation curve paired with a duration in seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurationCurve

A **class** in `Root.Township`, the global namespace.

A serializable animation curve paired with a duration in seconds.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurationCurve(AnimationCurve curve, float duration)"}</code> | <span className="api-desc">Creates a `DurationCurve` from `curve` and `duration`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> | <span className="api-desc">Backing field for `Curve`.</span> |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">Backing field for `Duration`, in seconds.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | <span className="api-desc">The curve.</span> |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | <span className="api-desc">How long the curve plays for, in seconds.</span> |

## Used in

Members of other types that take, return or hold a `DurationCurve`:

<div className="api-used-in">

[`ActionGlyphAnimator.fadeCurve`](/mod/game-api/types/global-a-b/actionglyphanimator#m-fadecurve), [`TimberBlockSpawner.rotationAnimation`](/mod/game-api/types/alta-crafting/timberblockspawner#m-rotationanimation), [`CombatShellAnimator.AnimateCombatShield`](/mod/game-api/types/alta-player/combatshellanimator#m-animatecombatshield), [`ShellAnimationHandler.Curve`](/mod/game-api/types/alta-player/shellanimationhandler#m-curve), [`ShellAnimationHandler.ShellAnimationHandler`](/mod/game-api/types/alta-player/shellanimationhandler#m-ctor), [`ShellAnimator.AnimateProgress`](/mod/game-api/types/alta-player/shellanimator#m-animateprogress), [`StatEffectShellSetting.Curve`](/mod/game-api/types/alta-player/stateffectshellsetting#m-curve), [`StatEffectShellSetting.progressCurve`](/mod/game-api/types/alta-player/stateffectshellsetting#m-progresscurve), [`CombatStateSettings.shellAnimationCurve`](/mod/game-api/types/alta-player/combatstatesettings#m-shellanimationcurve), [`CombatStateSettings.ShellAnimationCurve`](/mod/game-api/types/alta-player/combatstatesettings#m-shellanimationcurve-2), [`DurabilityStateChangeEffect.animationProgress`](/mod/game-api/types/global-c-d/durabilitystatechangeeffect#m-animationprogress), [`EcholocationEffect.LevelDefinition.effectDurationCurve`](/mod/game-api/types/global-e-h/echolocationeffect-leveldefinition#m-effectdurationcurve), [`MiningEcho.LevelDefinition.effectDurationCurve`](/mod/game-api/types/global-m-o/miningecho-leveldefinition#m-effectdurationcurve), [`MRK_ActivationLever.columnMovement`](/mod/game-api/types/global-m-o/mrk_activationlever#m-columnmovement), [`PathModelDisplay.animationSettings`](/mod/game-api/types/global-p/pathmodeldisplay#m-animationsettings), [`PlayerHealthVisualEffectsSettings.blurryEffect`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-blurryeffect), [`PlayerHealthVisualEffectsSettings.BlurryEffect`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-blurryeffect-2), [`PlayerHealthVisualEffectsSettings.hurtShellCurve`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-hurtshellcurve), [`PlayerHealthVisualEffectsSettings.HurtShellCurve`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-hurtshellcurve-2), [`PlayerHealthVisualEffectsSettings.vignetteDurationCurve`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-vignettedurationcurve), [`PlayerHealthVisualEffectsSettings.VignetteDurationCurve`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-vignettedurationcurve-2), [`PlayerSpecialEffectsController.enterSpiritModeCurve`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-enterspiritmodecurve), [`PlayerSpecialEffectsController.exitSpiritModeCurve`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-exitspiritmodecurve), [`PlayerSpecialEffectsController.waveCurve`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-wavecurve), [`Spinner.scaleCurve`](/mod/game-api/types/global-s/spinner#m-scalecurve), [`SpiritModeShellAnimator.AnimateSpiritMode`](/mod/game-api/types/global-s/spiritmodeshellanimator#m-animatespiritmode), [`TrainingHittingTool.rotationOverTime`](/mod/game-api/types/global-t-x/traininghittingtool#m-rotationovertime).

</div>
