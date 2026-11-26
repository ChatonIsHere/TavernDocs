---
title: "HungerStat"
description: "Stat definition asset for Hunger, a ThresholdStat."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HungerStat

A **class** in `Root.Township`, `Alta.StatSystem`.

Stat definition asset for Hunger, a `ThresholdStat`. The value drops each stat update, regenerates health when well fed and deals starve damage when low, all scaled by server config settings.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ThresholdStat`](/mod/game-api/types/alta-stats-effects/thresholdstat)
- **Derived types** [`HungerStat.Create`](/mod/game-api/types/alta-stats-effects/hungerstat-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-stats-effects/hungerstat-create)
- **Documented in** [Hunger, eating and drinking](/mod/game-api/game-systems/hunger-and-eating#hungerstat), [Stats](/mod/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HungerStat()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fullnessstatdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" fullnessStatDefinition"}</code> | <span className="api-desc">The Fullness stat; starve damage only applies while it is below 1.</span> |
| <Link id="m-fullstateregen" /><code>{"private AnimationCurve fullStateRegen"}</code> | <span className="api-desc">Curve from hunger value (0 hungry, 1 full) to health regained per tick.</span> |
| <Link id="m-healthdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthDefinition"}</code> | <span className="api-desc">The Health stat that regen and starve damage change.</span> |
| <Link id="m-hungerdamage" /><code>{"private static "}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hungerDamage"}</code> | <span className="api-desc">Damage data with the Hunger source. Not used in this build.</span> |
| <Link id="m-hungerstarvedamage" /><code>{"private float hungerStarveDamage"}</code> | <span className="api-desc">Health removed per tick while starving.</span> |
| <Link id="m-hungertick" /><code>{"private float hungerTick"}</code> | <span className="api-desc">Hunger drop per tick in the asset. Not used; the server config's `HungerTick` is used instead.</span> |
| <Link id="m-recentdamagedefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" recentDamageDefinition"}</code> | <span className="api-desc">Stat for recent damage; more of it means less regen.</span> |
| <Link id="m-starvedamagehealthcutoff" /><code>{"private float starveDamageHealthCutoff"}</code> | <span className="api-desc">Starving stops dealing damage once health base is below this.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Hooks the stat manager's update to drop hunger by the server config's `HungerTick` each tick, then sets up the threshold levels.</span> |
| <Link id="m-getsets" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{"[] GetSets("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">Adds health regen to the top two threshold levels and starve damage to the lowest level.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processhealthregen" /><code>{"private void ProcessHealthRegen("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" health, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" recentDamage)"}</code> | <span className="api-desc">Adds health from `fullStateRegen` by hunger value, reduced by recent damage and scaled by the server's health regen multiplier.</span> |
| <Link id="m-processstarvedamage" /><code>{"private void ProcessStarveDamage("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" fullnessStat, "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" health)"}</code> | <span className="api-desc">Server config permitting, removes `hungerStarveDamage` health per tick while Fullness is below 1 and health is above the cutoff.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HungerStat`:

<div className="api-used-in">

[`FullnessStat.hungerDefinition`](/mod/game-api/types/alta-stats-effects/fullnessstat#m-hungerdefinition), [`PlayerHealthVisualEffectsSettings.hungerDefinition`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-hungerdefinition), [`PlayerHealthVisualEffectsSettings.HungerDefinition`](/mod/game-api/types/global-p/playerhealthvisualeffectssettings#m-hungerdefinition-2), [`Pointer.hungerDefinition`](/mod/game-api/types/global-p/pointer#m-hungerdefinition), [`SmoothLocomotionSettings.hungerStatDefinition`](/mod/game-api/types/global-s/smoothlocomotionsettings#m-hungerstatdefinition).

</div>
