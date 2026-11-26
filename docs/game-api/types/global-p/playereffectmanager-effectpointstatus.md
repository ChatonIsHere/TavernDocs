---
title: "PlayerEffectManager.EffectPointStatus"
description: "The effect state of one body point: which temperature level it is at and the smoke, burn and stat effects it can show."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.EffectPointStatus

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

The effect state of one body point: which temperature level it is at and the smoke, burn and stat effects it can show.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/game-api/types/global-p/playereffectmanager)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectPointStatus("}<Link to="/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition, "}<Link to="/game-api/types/global-p/playereffectmanager">{"PlayerEffectManager"}</Link>{" manager, "}<Link to="/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" settings)"}</code> | Creates a `PlayerEffectManager.EffectPointStatus` from `effectPosition`, `manager` and `settings`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burnactiveeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{" burnActiveEffectDefinition"}</code> | The burn effect at this point. |
| <Link id="m-effectposition" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition"}</code> | Where on the body this point is. |
| <Link id="m-smokeactiveeffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{" smokeActiveEffectDefinition"}</code> | The smoke effect at this point. |
| <Link id="m-stateffectsdefinition" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", "}<Link to="/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{"[]> statEffectsDefinition"}</code> | The buff and debuff effects for each stat at this point. |
| <Link id="m-temperaturecurve" /><code>{"private AnimationCurve temperatureCurve"}</code> | The manager's temperature to size curve. |
| <Link id="m-temperaturelevelchanged" /><code>{"private Action TemperatureLevelChanged"}</code> | Called when the level changes; set to the manager's `UpdateLightEffects`. |
| <Link id="m-temperaturelevelcount" /><code>{"private int temperatureLevelCount"}</code> | How many temperature thresholds there are. |
| <Link id="m-temperaturelevels" /><code>{"private float[] temperatureLevels"}</code> | The manager's smoke and burn thresholds. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; private set; }"}</code> | -1 when cool, 0 when smoking, 1 when burning. |
| <Link id="m-havestateffectsvalid" /><code>{"bool HaveStatEffectsValid { get; }"}</code> | True if this point shows stat effects for this player (local or remote). |
| <Link id="m-item" /><code><Link to="/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{"[] this["}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition] { get; }"}</code> | The buff and debuff effects for a stat at this point, buff first. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatetemperature" /><code>{"private void UpdateTemperature("}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | Moves the point between cool, smoke and burn as its heat point's temperature changes, and resizes the burn effect. |

</details>

## Used in

Members of other types that take, return or hold a `EffectPointStatus`:

[`PlayerEffectManager.heatPointStatus`](/game-api/types/global-p/playereffectmanager#m-heatpointstatus).
