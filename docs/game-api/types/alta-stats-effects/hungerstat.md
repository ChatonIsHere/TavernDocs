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

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ThresholdStat`](/game-api/types/alta-stats-effects/thresholdstat)
- **Derived types** [`HungerStat.Create`](/game-api/types/alta-stats-effects/hungerstat-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/hungerstat-create)
- **Documented in** [Hunger, eating and drinking](/game-api/game-systems/hunger-and-eating#hungerstat), [Stats](/game-api/game-systems/stats)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HungerStat()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fullnessstatdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" fullnessStatDefinition"}</code> | The Fullness stat; starve damage only applies while it is below 1. |
| <Link id="m-fullstateregen" /><code>{"private AnimationCurve fullStateRegen"}</code> | Curve from hunger value (0 hungry, 1 full) to health regained per tick. |
| <Link id="m-healthdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthDefinition"}</code> | The Health stat that regen and starve damage change. |
| <Link id="m-hungerdamage" /><code>{"private static "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hungerDamage"}</code> | Damage data with the Hunger source. Not used in this build. |
| <Link id="m-hungerstarvedamage" /><code>{"private float hungerStarveDamage"}</code> | Health removed per tick while starving. |
| <Link id="m-hungertick" /><code>{"private float hungerTick"}</code> | Hunger drop per tick in the asset. Not used; the server config's `HungerTick` is used instead. |
| <Link id="m-recentdamagedefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" recentDamageDefinition"}</code> | Stat for recent damage; more of it means less regen. |
| <Link id="m-starvedamagehealthcutoff" /><code>{"private float starveDamageHealthCutoff"}</code> | Starving stops dealing damage once health base is below this. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Hooks the stat manager's update to drop hunger by the server config's `HungerTick` each tick, then sets up the threshold levels. |
| <Link id="m-getsets" /><code>{"protected override "}<Link to="/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{"[] GetSets("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Adds health regen to the top two threshold levels and starve damage to the lowest level. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-processhealthregen" /><code>{"private void ProcessHealthRegen("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" health, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" recentDamage)"}</code> | Adds health from `fullStateRegen` by hunger value, reduced by recent damage and scaled by the server's health regen multiplier. |
| <Link id="m-processstarvedamage" /><code>{"private void ProcessStarveDamage("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" fullnessStat, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" health)"}</code> | Server config permitting, removes `hungerStarveDamage` health per tick while Fullness is below 1 and health is above the cutoff. |

</details>

## Used in

Members of other types that take, return or hold a `HungerStat`:

[`FullnessStat.hungerDefinition`](/game-api/types/alta-stats-effects/fullnessstat#m-hungerdefinition), [`PlayerHealthVisualEffectsSettings.hungerDefinition`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-hungerdefinition), [`PlayerHealthVisualEffectsSettings.HungerDefinition`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-hungerdefinition-2), [`Pointer.hungerDefinition`](/game-api/types/global-p/pointer#m-hungerdefinition), [`SmoothLocomotionSettings.hungerStatDefinition`](/game-api/types/global-s/smoothlocomotionsettings#m-hungerstatdefinition).
