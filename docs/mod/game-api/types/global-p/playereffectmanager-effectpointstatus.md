---
title: "PlayerEffectManager.EffectPointStatus"
description: "The effect state of one body point: which temperature level it is at and the smoke, burn and stat effects it can show."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerEffectManager.EffectPointStatus

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

The effect state of one body point: which temperature level it is at and the smoke, burn and stat effects it can show.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerEffectManager`](/mod/game-api/types/global-p/playereffectmanager)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EffectPointStatus("}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition, "}<Link to="/mod/game-api/types/global-p/playereffectmanager">{"PlayerEffectManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/global-p/playereffectmanager-overridesettings">{"PlayerEffectManager.OverrideSettings"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `PlayerEffectManager.EffectPointStatus` from `effectPosition`, `manager` and `settings`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-burnactiveeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{" burnActiveEffectDefinition"}</code> | <span className="api-desc">The burn effect at this point.</span> |
| <Link id="m-effectposition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectposition">{"PlayerEffectManager.EffectPosition"}</Link>{" effectPosition"}</code> | <span className="api-desc">Where on the body this point is.</span> |
| <Link id="m-smokeactiveeffectdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{" smokeActiveEffectDefinition"}</code> | <span className="api-desc">The smoke effect at this point.</span> |
| <Link id="m-stateffectsdefinition" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{", "}<Link to="/mod/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{"[]> statEffectsDefinition"}</code> | <span className="api-desc">The buff and debuff effects for each stat at this point.</span> |
| <Link id="m-temperaturecurve" /><code>{"private AnimationCurve temperatureCurve"}</code> | <span className="api-desc">The manager's temperature to size curve.</span> |
| <Link id="m-temperaturelevelchanged" /><code>{"private Action TemperatureLevelChanged"}</code> | <span className="api-desc">Called when the level changes; set to the manager's `UpdateLightEffects`.</span> |
| <Link id="m-temperaturelevelcount" /><code>{"private int temperatureLevelCount"}</code> | <span className="api-desc">How many temperature thresholds there are.</span> |
| <Link id="m-temperaturelevels" /><code>{"private float[] temperatureLevels"}</code> | <span className="api-desc">The manager's smoke and burn thresholds.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; private set; }"}</code> | <span className="api-desc">-1 when cool, 0 when smoking, 1 when burning.</span> |
| <Link id="m-havestateffectsvalid" /><code>{"bool HaveStatEffectsValid { get; }"}</code> | <span className="api-desc">True if this point shows stat effects for this player (local or remote).</span> |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/global-p/playereffectmanager-effectapplication">{"PlayerEffectManager.EffectApplication"}</Link>{"[] this["}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition] { get; }"}</code> | <span className="api-desc">The buff and debuff effects for a stat at this point, buff first.</span> |

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-updatetemperature" /><code>{"private void UpdateTemperature("}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" point)"}</code> | <span className="api-desc">Moves the point between cool, smoke and burn as its heat point's temperature changes, and resizes the burn effect.</span> |

</details>

## Used in

Members of other types that take, return or hold a `EffectPointStatus`:

<div className="api-used-in">

[`PlayerEffectManager.heatPointStatus`](/mod/game-api/types/global-p/playereffectmanager#m-heatpointstatus).

</div>
