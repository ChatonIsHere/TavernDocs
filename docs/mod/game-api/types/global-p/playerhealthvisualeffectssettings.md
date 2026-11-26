---
title: "PlayerHealthVisualEffectsSettings"
description: "Asset with the local player's health effects: hurt vignette, saturation by health, hunger blur and stomach sounds, recent damage, and the nightmare fog effect."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerHealthVisualEffectsSettings

A **class** in `Root.Township`, the global namespace.

Asset with the local player's health effects: hurt vignette, saturation by health, hunger blur and stomach sounds, recent damage, and the nightmare fog effect.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`NightmareEffectController`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings-nightmareeffectcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerHealthVisualEffectsSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>19 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blurrydelay" /><code>{"private float blurryDelay"}</code> | Backing field for `BlurryDelay`. Shown only when `isBlurringOnRepeat` is on. |
| <Link id="m-blurryeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" blurryEffect"}</code> | Backing field for `BlurryEffect`. |
| <Link id="m-chanceofstomachaudio" /><code>{"private float chanceOfStomachAudio"}</code> | Backing field for `ChanceOfStomachAudio`. Shown only when `isBlurringOnRepeat` is on. |
| <Link id="m-deadsaturation" /><code>{"private float deadSaturation"}</code> | Backing field for `DeadSaturation`. |
| <Link id="m-fogdensityovervalue" /><code>{"private AnimationCurve fogDensityOverValue"}</code> | Curve from the nightmare stat's value to fog density. |
| <Link id="m-hungerdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" hungerDefinition"}</code> | Backing field for `HungerDefinition`. |
| <Link id="m-hurtshell" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" hurtShell"}</code> | Backing field for `HurtShell`. |
| <Link id="m-hurtshellcurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" hurtShellCurve"}</code> | Backing field for `HurtShellCurve`. |
| <Link id="m-isblurringonrepeat" /><code>{"private bool isBlurringOnRepeat"}</code> | Backing field for `IsBlurringOnRepeat`. |
| <Link id="m-maxhungerlevelbeforeblur" /><code>{"private int maxHungerLevelBeforeBlur"}</code> | Backing field for `MaxHungerLevelBeforeBlur`. |
| <Link id="m-nightmareeffectcontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerhealthvisualeffectssettings-nightmareeffectcontroller">{"PlayerHealthVisualEffectsSettings.NightmareEffectController"}</Link>{" nightmareEffectController"}</code> | The nightmare effect controller, made on the first `SetupNightmare` call. |
| <Link id="m-nightmareeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" nightmareEffectDefinition"}</code> | Pooled particle effect spawned at the player's feet during a nightmare. |
| <Link id="m-nightmarestatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" nightmareStatDefinition"}</code> | The stat that drives the nightmare effect. |
| <Link id="m-recentdamagecooldown" /><code>{"private float recentDamageCooldown"}</code> | Backing field for `RecentDamageCooldown`. |
| <Link id="m-recentdamagedefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" recentDamageDefinition"}</code> | Backing field for `RecentDamageDefinition`. |
| <Link id="m-repeatstartsonlevel" /><code>{"private int repeatStartsOnLevel"}</code> | Backing field for `RepeatStartsOnLevel`. Shown only when `isBlurringOnRepeat` is on. |
| <Link id="m-saturationcurve" /><code>{"private AnimationCurve saturationCurve"}</code> | Backing field for `SaturationCurve`. |
| <Link id="m-vignettedurationcurve" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" vignetteDurationCurve"}</code> | Backing field for `VignetteDurationCurve`. |
| <Link id="m-visionlerpspeed" /><code>{"private float visionLerpSpeed"}</code> | Backing field for `VisionLerpSpeed`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-blurrydelay-2" /><code>{"float BlurryDelay { get; }"}</code> | Seconds between repeated hunger blurs. |
| <Link id="m-blurryeffect-2" /><code><Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" BlurryEffect { get; }"}</code> | Curve and length of one hunger blur. |
| <Link id="m-chanceofstomachaudio-2" /><code>{"float ChanceOfStomachAudio { get; }"}</code> | Chance of a stomach rumble with each blur. |
| <Link id="m-deadsaturation-2" /><code>{"float DeadSaturation { get; }"}</code> | Screen saturation while dead. |
| <Link id="m-hungerdefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/hungerstat">{"HungerStat"}</Link>{" HungerDefinition { get; }"}</code> | The hunger stat, used to get the hunger level. |
| <Link id="m-hurtshell-2" /><code><Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" HurtShell { get; }"}</code> | Shell setting for the hurt effect. |
| <Link id="m-hurtshellcurve-2" /><code><Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" HurtShellCurve { get; }"}</code> | Curve and length of the hurt shell effect. |
| <Link id="m-isblurringonrepeat-2" /><code>{"bool IsBlurringOnRepeat { get; }"}</code> | Whether the hunger blur repeats at low hunger levels. |
| <Link id="m-maxhungerlevelbeforeblur-2" /><code>{"int MaxHungerLevelBeforeBlur { get; }"}</code> | Hunger levels at or above this don't blur. |
| <Link id="m-recentdamagecooldown-2" /><code>{"float RecentDamageCooldown { get; }"}</code> | Seconds the recent damage stat stays on after damage. |
| <Link id="m-recentdamagedefinition-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" RecentDamageDefinition { get; }"}</code> | The stat set to 1 while the player was recently damaged. |
| <Link id="m-repeatstartsonlevel-2" /><code>{"int RepeatStartsOnLevel { get; }"}</code> | Hunger level at or below which the blur repeats. |
| <Link id="m-saturationcurve-2" /><code>{"AnimationCurve SaturationCurve { get; }"}</code> | Curve from health to screen saturation. |
| <Link id="m-vignettedurationcurve-2" /><code><Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" VignetteDurationCurve { get; }"}</code> | Curve and length of the hurt vignette. |
| <Link id="m-visionlerpspeed-2" /><code>{"float VisionLerpSpeed { get; }"}</code> | How fast saturation changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupnightmare" /><code>{"void SetupNightmare("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager)"}</code> | Starts watching the nightmare stat to show its particles and fog. |

## Used in

Members of other types that take, return or hold a `PlayerHealthVisualEffectsSettings`:

[`PlayerHealth.settings`](/mod/game-api/types/global-p/playerhealth#m-settings).
