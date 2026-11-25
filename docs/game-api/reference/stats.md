---
title: Stats
description: Stat definitions, the player and creature defaults, and stat effects.
sidebar_position: 6
---

# Stats

A stat is a `StatDefinition` asset (`Alta.StatSystem`, a `HashedGeneralValue`) that a `StatManager` applies to an entity under a name such as `health`. The code looks stats up by that name (`StatManager.GetStat("health", ...)` in `HealthObject`, for example). The default, minimum and maximum come from the `StatManager` on each prefab, not from the definition.

## Stat definitions

- **Stat** is `statName`, the name `StatManager` uses.
- **Saved** means `isSaveSerialized`: the value goes into the save.
- **Sync step** is `changeToSync`, the change needed before a new value is sent to clients.
- **Command range** is `commandMinimumAndMaximumValues`: when it's turned on, `IsValueValidForCommands` only accepts values in this range. Nothing in the server build calls that method, so the range isn't enforced.
- **Other values** are the fields the subclass adds.

| Stat | Asset | Class | Hash | Saved | Sync step | Duration | Command range | Other values |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `aggro` | `Aggroing Stat` | `CrippleStatDefinition` | 50840 |  | 0.1 |  |  | `regenPerTick` 0.2, `isBuildup` 1 |
| `cripplehealth` | `Cripple Health Stat` | `CrippleStatDefinition` | 36208 | yes | 0.01 |  |  | `regenPerTick` 0.075, `isBuildup` 0 |
| `damage` | `Damage Stat` | `StatDefinition` | 33378 |  | 0.1 |  |  |  |
| `damageprotection` | `Cripple Damage Protection Stat` | `StatDefinition` | 44538 |  | 0.1 |  |  |  |
| `damageprotection` | `Damage Protection Stat` | `StatDefinition` | 23030 |  | 0.1 |  |  |  |
| `Frost` | `Frost` | `IncrementingStat` | 47086 |  | 0.1 |  |  | `statChangePerSecond` -0.5 |
| `fullness` | `Fullness Stat` | `FullnessStat` | 34710 | yes | 0.01 |  |  | `notchesCount` 6, `hungerDefinition`: `Hunger Stat` |
| `health` | `Health Stat` | `StatDefinition` | 32712 | yes | 0.01 |  |  |  |
| `hunger` | `Hunger Stat` | `HungerStat` | 42940 | yes | 0.01 |  |  | `notchesCount` 3, `hungerStarveDamage` 0.03, `starveDamageHealthCutoff` 0.1, `hungerTick` 0.001, `healthDefinition`: `Health Stat`, `recentDamageDefinition`: `RecentDamageStat`, `fullnessStatDefinition`: `Fullness Stat` |
| `left-hand-stamina` | `Hand Stamina Left Stat` | `StatDefinition` | 53068 | yes | 0.01 |  |  |  |
| `luminosity` | `Luminosity` | `StatDefinition` | 46602 |  | 0.1 |  |  |  |
| `maxHandStamina` | `MaxHandStamina` | `MaxStatDefinition` | 41666 | yes | 0.1 | 2 |  | `controlDefinitions`: `Hand Stamina Left Stat`, `Hand Stamina Right Stat` |
| `maxhealth` | `MaxHealth Stat` | `MaxStatDefinition` | 42070 | yes | 0.1 | 2 | 0.001 to 100000 | `controlDefinitions`: `Health Stat` |
| `nightmare` | `Nightmare` | `OnFullAffectTargetStatDefinition` | 56516 | yes | 0.01 |  |  | `affectedStatDefinition`: `Health Stat`, `builddownCooldown` 1, `tickBuilddown` 0.05, `modifierValue` -0.05, `isMultiplier` 0, `isContinuous` 1, `isRevertingOnEnd` 0 |
| `playerweight` | `Player Weight Stat` | `PlayerWeightStat` | 59222 | yes | 0.01 |  |  |  |
| `poison` | `Poison Stat` | `PoisonStat` | 41264 | yes | 0.1 |  |  | `poisonedStatDefinition`: `Health Stat`, `tickDamage` 0.05 |
| `recentdamage` | `RecentDamageStat` | `StatDefinition` | 18210 |  | 0.1 |  |  |  |
| `right-hand-stamina` | `Hand Stamina Right Stat` | `StatDefinition` | 18866 | yes | 0.01 |  |  |  |
| `speed` | `Speed Stat` | `StatDefinition` | 32340 |  | 0.1 |  |  |  |
| `visibility` | `Visibility` | `StatDefinition` | 50920 |  | 0.1 |  |  |  |
| `wet` | `Wet Stat` | `IncrementingStat` | 40768 |  | 0.1 |  |  | `statChangePerSecond` 0.1 |
| `xpboost` | `ExperienceBoost` | `StatDefinition` | 15202 |  | 0.1 |  |  |  |

### Threshold levels

`ThresholdStat` subclasses (hunger, fullness) apply the modifiers of the highest level whose threshold the value is above (level 0 otherwise). `x` multiplies the target stat, `+` adds to it.

| Stat | Level | Min threshold | Modifiers |
| --- | --- | --- | --- |
| `fullness` | `famished` | 0 |  |
| `fullness` | `starving` | 1 |  |
| `fullness` | `hungry` | 2 |  |
| `fullness` | `peckish` | 3 |  |
| `fullness` | `satiated` | 4 |  |
| `fullness` | `stuffed` | 4.9 | `Damage Stat` x1.07 |
| `fullness` | `maximum` | 5.9 | `Damage Stat` x1.15 |
| `hunger` | `wasting` | 0 | `Speed Stat` x0.8, `Damage Stat` x0.65 |
| `hunger` | `mal-nourished` | 0.1 | `Speed Stat` x0.9, `Damage Stat` x0.8 |
| `hunger` | `under-nourished` | 0.15 | `Damage Stat` x0.85, `Speed Stat` x0.9 |
| `hunger` | `nourished` | 0.5 | `Speed Stat` x1 |
| `hunger` | `buffed` | 1.75 | `Speed Stat` x1.15 |

## Player defaults

The `StatManager` on the player prefab (`VR Player Character New`): every stat a player has, with the value a new player starts with and its limits.

| Stat | Definition | Default | Min | Max |
| --- | --- | --- | --- | --- |
| `health` | `Health Stat` | 2 | 0 | 2 |
| `maxhealth` | `MaxHealth Stat` | 2 | 0 | 31 |
| `speed` | `Speed Stat` | 1 | 0 | 15 |
| `damage` | `Damage Stat` | 1 | 0 | 15 |
| `poison` | `Poison Stat` | 0 | 0 | 31 |
| `hunger` | `Hunger Stat` | 2 | 0 | 2 |
| `recentdamage` | `RecentDamageStat` | 0 | 0 | 1 |
| `damageprotection` | `Damage Protection Stat` | 1 | 0.1 | 10 |
| `luminosity` | `Luminosity` | 1 | 0 | 15 |
| `cripplehealth` | `Cripple Health Stat` | 1 | 0 | 1 |
| `xpboost` | `ExperienceBoost` | 1 | 0.1 | 10 |
| `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.1 | 10 |
| `nightmare` | `Nightmare` | 0 | 0 | 1 |
| `fullness` | `Fullness Stat` | 3 | 0 | 6 |
| `playerweight` | `Player Weight Stat` | 0 | 0 | 99999 |
| `left-hand-stamina` | `Hand Stamina Left Stat` | 0.2 | 0 | 0.2 |
| `right-hand-stamina` | `Hand Stamina Right Stat` | 0.2 | 0 | 0.2 |
| `aggro` | `Aggroing Stat` | 1 | 1 | 10 |
| `maxHandStamina` | `MaxHandStamina` | 0.2 | 0.2 | 0.2 |
| `Frost` | `Frost` | 0 | 0 | 1 |

Creature stats are on the [Creatures](creatures.md#creature-stats) page.

## Stat effects

Assets that change a stat over time, used by food and stews. Their strength comes from whatever applies them (see [Recipes](recipes.md#stews)).

| Effect | Class | Values |
| --- | --- | --- |
| `Feed` | `StatChangeEffect` | `statToAffect`: `Fullness Stat` |
| `Heal` | `StatChangeEffect` | `statToAffect`: `Health Stat` |
| `Nourish` | `StatChangeEffect` | `statToAffect`: `Hunger Stat` |
| `Damage Indirect effect` | `IndirectStatModifierDefinition` | `targetStat`: `Damage Stat`, `baseValue` 1, `strengthAffects` 2, curve `Static` |
| `Damage Protection Indirect effect` | `IndirectStatModifierDefinition` | `targetStat`: `Damage Protection Stat`, `baseValue` 1, `strengthAffects` 2, curve `Static` |
| `Luminosiy indirect effect` | `IndirectStatModifierDefinition` | `targetStat`: `Luminosity`, `baseValue` 2, `strengthAffects` 2, curve `Static` |
| `Speed Indirect Effect` | `IndirectStatModifierDefinition` | `targetStat`: `Speed Stat`, `baseValue` 1, `strengthAffects` 2, curve `Static` |

## Game action and achievement stats

These track player actions for tasks and achievements. They aren't `StatDefinition`s and a `StatManager` doesn't hold them.

| Asset | Class | Hash |
| --- | --- | --- |
| `Cook Food Item` | `GameActionStat` | 29596 |
| `Distance Travelled` | `GameActionStat` | 7800 |
| `Level Up` | `GameActionStat` | 18452 |
| `Light Campfire` | `GameActionStat` | 54410 |
| `Player Died` | `GameActionStat` | 14008 |
| `Player Finished Customization` | `GameActionStat` | 52862 |
| `Receive Postbox Item` | `GameActionStat` | 24024 |
| `deaths` | `AchievementStatDefinition` |  |
| `player_kills` | `AchievementStatDefinition` |  |
