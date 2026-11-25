---
title: "DurationCurve"
description: "A serializable animation curve paired with a duration in seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurationCurve

A **class** in `Root.Township`, no namespace.

A serializable animation curve paired with a duration in seconds.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurationCurve(AnimationCurve curve, float duration)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code>{"private AnimationCurve curve"}</code> |  |
| <Link id="m-duration" /><code>{"private float duration"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve-2" /><code>{"AnimationCurve Curve { get; }"}</code> | The curve. |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | How long the curve plays for, in seconds. |

## Used in

Members of other types that take, return or hold a `DurationCurve`:

[`ActionGlyphAnimator.fadeCurve`](/game-api/types/global-a-b/actionglyphanimator#m-fadecurve), [`TimberBlockSpawner.rotationAnimation`](/game-api/types/alta-crafting/timberblockspawner#m-rotationanimation), [`CombatShellAnimator.AnimateCombatShield`](/game-api/types/alta-player/combatshellanimator#m-animatecombatshield), [`ShellAnimationHandler.Curve`](/game-api/types/alta-player/shellanimationhandler#m-curve), [`ShellAnimationHandler.ShellAnimationHandler`](/game-api/types/alta-player/shellanimationhandler#m-ctor), [`ShellAnimator.AnimateProgress`](/game-api/types/alta-player/shellanimator#m-animateprogress), [`StatEffectShellSetting.Curve`](/game-api/types/alta-player/stateffectshellsetting#m-curve), [`StatEffectShellSetting.progressCurve`](/game-api/types/alta-player/stateffectshellsetting#m-progresscurve), [`CombatStateSettings.shellAnimationCurve`](/game-api/types/alta-player/combatstatesettings#m-shellanimationcurve), [`CombatStateSettings.ShellAnimationCurve`](/game-api/types/alta-player/combatstatesettings#m-shellanimationcurve-2), [`DurabilityStateChangeEffect.animationProgress`](/game-api/types/global-c-d/durabilitystatechangeeffect#m-animationprogress), [`EcholocationEffect.LevelDefinition.effectDurationCurve`](/game-api/types/global-e-h/echolocationeffect-leveldefinition#m-effectdurationcurve), [`MiningEcho.LevelDefinition.effectDurationCurve`](/game-api/types/global-m-o/miningecho-leveldefinition#m-effectdurationcurve), [`MRK_ActivationLever.columnMovement`](/game-api/types/global-m-o/mrk_activationlever#m-columnmovement), [`PathModelDisplay.animationSettings`](/game-api/types/global-p/pathmodeldisplay#m-animationsettings), [`PlayerHealthVisualEffectsSettings.blurryEffect`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-blurryeffect), [`PlayerHealthVisualEffectsSettings.BlurryEffect`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-blurryeffect-2), [`PlayerHealthVisualEffectsSettings.hurtShellCurve`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-hurtshellcurve), [`PlayerHealthVisualEffectsSettings.HurtShellCurve`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-hurtshellcurve-2), [`PlayerHealthVisualEffectsSettings.vignetteDurationCurve`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-vignettedurationcurve), [`PlayerHealthVisualEffectsSettings.VignetteDurationCurve`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-vignettedurationcurve-2), [`PlayerSpecialEffectsController.enterSpiritModeCurve`](/game-api/types/global-p/playerspecialeffectscontroller#m-enterspiritmodecurve), [`PlayerSpecialEffectsController.exitSpiritModeCurve`](/game-api/types/global-p/playerspecialeffectscontroller#m-exitspiritmodecurve), [`PlayerSpecialEffectsController.waveCurve`](/game-api/types/global-p/playerspecialeffectscontroller#m-wavecurve), [`Spinner.scaleCurve`](/game-api/types/global-s/spinner#m-scalecurve), [`SpiritModeShellAnimator.AnimateSpiritMode`](/game-api/types/global-s/spiritmodeshellanimator#m-animatespiritmode), [`TrainingHittingTool.rotationOverTime`](/game-api/types/global-t-x/traininghittingtool#m-rotationovertime).
