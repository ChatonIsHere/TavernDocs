---
title: "HungerStat"
description: "Server only (its Applied only runs on the server)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HungerStat

A **class** in `Root.Township`, `Alta.StatSystem`.

Server only (its `Applied` only runs on the server).

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`ThresholdStat`](/game-api/types/alta-stats-effects/thresholdstat)
- **Derived types** [`HungerStat.Create`](/game-api/types/alta-stats-effects/hungerstat-create)
- **Nested types** [`Create`](/game-api/types/alta-stats-effects/hungerstat-create)
- **Documented in** [Hunger, eating and drinking](/game-api/game-systems/hunger-and-eating#hungerstat), [Stats](/game-api/game-systems/stats)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HungerStat()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fullnessstatdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" fullnessStatDefinition"}</code> |  |
| <Link id="m-fullstateregen" /><code>{"private AnimationCurve fullStateRegen"}</code> |  |
| <Link id="m-healthdefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" healthDefinition"}</code> |  |
| <Link id="m-hungerdamage" /><code>{"private static "}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" hungerDamage"}</code> |  |
| <Link id="m-hungerstarvedamage" /><code>{"private float hungerStarveDamage"}</code> |  |
| <Link id="m-hungertick" /><code>{"private float hungerTick"}</code> |  |
| <Link id="m-recentdamagedefinition" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" recentDamageDefinition"}</code> |  |
| <Link id="m-starvedamagehealthcutoff" /><code>{"private float starveDamageHealthCutoff"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applied" /><code>{"override void Applied("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-getsets" /><code>{"protected override "}<Link to="/game-api/types/alta-stats-effects/modifierset">{"ModifierSet"}</Link>{"[] GetSets("}<Link to="/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" manager, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> |  |
| <Link id="m-processhealthregen" /><code>{"private void ProcessHealthRegen("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" health, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" recentDamage)"}</code> |  |
| <Link id="m-processstarvedamage" /><code>{"private void ProcessStarveDamage("}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" fullnessStat, "}<Link to="/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" health)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HungerStat`:

[`FullnessStat.hungerDefinition`](/game-api/types/alta-stats-effects/fullnessstat#m-hungerdefinition), [`PlayerHealthVisualEffectsSettings.hungerDefinition`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-hungerdefinition), [`PlayerHealthVisualEffectsSettings.HungerDefinition`](/game-api/types/global-p/playerhealthvisualeffectssettings#m-hungerdefinition-2), [`Pointer.hungerDefinition`](/game-api/types/global-p/pointer#m-hungerdefinition), [`SmoothLocomotionSettings.hungerStatDefinition`](/game-api/types/global-s/smoothlocomotionsettings#m-hungerstatdefinition).
