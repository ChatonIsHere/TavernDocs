---
title: Creatures
description: Creature prefabs with their AI class, health, damage multipliers and action sets.
sidebar_position: 5
---

# Creatures

Spawnable prefabs that carry one of the game's `Agent<T>` AI classes (`Alta.Intelligence`). The AI only runs on the server: on a client, `Target.Initialize` disables the AI component, and its GameObject too when `isObjectDisabledOnClient` is set. Prefabs with an AI class but no `HealthObject` on the root (geysers, reactive spawners and similar) are listed too, with no health.

## Creature prefabs

- **AI class** is the `Agent<T>` subclass on the prefab.
- **Health** and **damage** are the default values of the `health` and `damage` stats on the creature's `StatManager` (see [Stats](stats.md)).
- **Impact multipliers** come from `HealthObject.multipliers`: incoming damage of that `ImpactType` is multiplied by this value.
- **Max speed** is the `Walker`'s `maximumSpeed`, for creatures that walk.
- **Action sets** are the `ActionComponentSet` prefabs the AI component points at, with the field that holds each. A set is a prefab whose children carry `ActionComponent`s; the AI swaps between sets as it changes state.

| Prefab | Hash | AI class | Health | Damage | Combatant | Impact multipliers | Max speed | Action sets |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `Babu` | 9140 | `Babu` | 45 | 1 | yes | Slash x1.2, Caustic x0.5 | 1 | `Babu Passive AI` (passiveActions), `Babu Stunned Set` (stunnedAction) |
| `Chute Gcore Dynamic` | 60246 | `DeathFern` |  |  |  |  |  | `Reactive Geyser Area AI` (passiveActions) |
| `Crystal Wyrm` | 37392 | `Wyrm` | 5 |  | yes | Caustic x0 |  | `Crystal Wyrm AI` (burrowedActions), `Crystal Wyrm AI` (emergedActions) |
| `Crystal Wyrm (Trial)` | 48128 | `Wyrm` | 5 |  | yes | Caustic x0, Explosive x0.2 |  | `Trial Crystal Burrowed Set` (burrowedActions), `Trial Crystal Emerged Set` (emergedActions) |
| `Dais Antler Red Variant` | 18358 | `Dragonfly` | 15 |  |  |  | 1 | `Dais Male Passive Set Variant` (passiveActions), `Dais Male Stunned Set Variant` (stunnedAction) |
| `Dais Antler Variant` | 30180 | `Dragonfly` | 15 |  |  |  | 1 | `Dais Male Passive Set Variant` (passiveActions), `Dais Male Stunned Set Variant` (stunnedAction) |
| `Dais Base` | 27576 | `Dragonfly` | 5 |  |  |  | 1 | `Dais Passive Set` (passiveActions), `Dais Stunned Set` (stunnedAction) |
| `Dais Child Red Variant` | 13444 | `Dragonfly` | 2 |  |  |  | 1 | `Dais Child Passive Set Variant` (passiveActions), `Dais Child Stunned Set Variant` (stunnedAction) |
| `Dais Child Variant` | 31838 | `Dragonfly` | 2 |  |  |  | 1 | `Dais Child Passive Set Variant` (passiveActions), `Dais Child Stunned Set Variant` (stunnedAction) |
| `Dais Red Variant` | 8530 | `Dragonfly` | 5 |  |  |  | 1 | `Dais Passive Set Variant` (passiveActions), `Dais Stunned Set Variant` (stunnedAction) |
| `Dais Variant` | 42430 | `Dragonfly` | 5 |  |  |  | 1 | `Dais Passive Set Variant` (passiveActions), `Dais Stunned Set Variant` (stunnedAction) |
| `Death Fern` | 37642 | `DeathFern` | 1 |  |  | Slash x1, Pierce x0.5, Blunt x0 |  | `Death Fern AI` (passiveActions) |
| `Dragonfly` | 54404 | `Dragonfly` | 0.1 |  |  |  | 1 | `Dragonfly Passive Set` (passiveActions), `Gotera Stunned Set` (stunnedAction) |
| `Firebug` | 40478 | `FireBug` | 0.5 |  |  |  |  | `Firebug AI` (emergeActionSet), `Firebug AI` (regainControlActionSet), `Firebug AI` (loseControlActionSet) |
| `Gotera` | 9466 | `Gotera` | 5 |  | yes | Slash x1.5 | 9 | `Gotera Passive Set` (passiveActions), `Gotera Stunned Set` (stunnedAction) |
| `Gotera Ash Bomb` | 56764 | `DeathFern` | 0.2 |  |  |  |  | `Death Fern AI` (passiveActions) |
| `Gotera Ash Variant` | 61448 | `Gotera` | 30 |  | yes | Slash x1.2 | 9 | `Gotera Passive Set` (passiveActions), `Gotera Stunned Set` (stunnedAction) |
| `Gotera Birch Variant` | 2370 | `Gotera` | 15 |  | yes | Slash x1.5 | 9 | `Gotera Passive Set` (passiveActions), `Gotera Stunned Set` (stunnedAction) |
| `Gotera Redwood Variant` | 27128 | `Gotera` | 50 |  | yes | Slash x1.3, Pierce x0.75, Spiritual x0.75 | 3 | `Gotera Passive Set` (passiveActions), `Gotera Stunned Set` (stunnedAction) |
| `Gotera Walnut Variant` | 38096 | `Gotera` | 15 |  | yes | Slash x1.5 | 9 | `Walnut Gotera Passive Set` (passiveActions), `Gotera Stunned Set` (stunnedAction) |
| `Greater Gotera` | 19034 | `GreaterGotera` | 150 | 1 | yes |  | 1 | `Greater Gotera Passive Set` (passiveActions), `Greater Gotera Stunned Set` (stunnedAction) |
| `Mother Fern` | 65004 | `DeathFern` | 5 |  |  | Slash x1, Pierce x0.4, Blunt x0.4, Spiritual x1.5 |  | `Death Fern AI` (passiveActions) |
| `Phantom` | 17772 | `Phantom` | 2 |  |  |  | 4 | `Phantom Passive Set AI` (passiveActions), `Phantom Materialize Action` (materializeAction), `Phantom Dematerialize Action` (deMaterializeAction), `Phantom Materialized Hit Action` (materializedHitAction) |
| `Phantom Head` | 43960 | `Phantom` | 0.5 |  |  | Spiritual x2, Slash x1.2 | 4 | `Phantom Head Aggro Set AI` (passiveActions), `Phantom Head Materialize Action` (materializeAction), `Phantom Head Dematerialize Action` (deMaterializeAction), `Phantom Head Materialized Hit Action` (materializedHitAction) |
| `Schmeechee Glowing` | 53576 | `Schmeechee` | 2 |  |  |  |  | `Schmeechee AI` (passiveActions) |
| `Schmeechee Orange` | 63728 | `Schmeechee` | 0.5 |  |  |  |  | `Schmeechee AI` (passiveActions) |
| `Schmeechee Poisonous` | 31646 | `Schmeechee` | 0.3 |  |  |  |  | `Schmeechee AI` (passiveActions) |
| `Schmeechee Red` | 3532 | `Schmeechee` | 2 |  |  |  |  | `Schmeechee AI` (passiveActions) |
| `Spriggull` | 62050 | `Spriggull` | 0.5 |  | yes |  | 3 | `Spriggull AI` (passiveActions), `Spriggull AI` (flailAction) |
| `Targeted Geyser` | 60812 | `DeathFern` |  |  |  |  |  | `Reactive Geyser Area AI` (passiveActions) |
| `Turabada` | 13804 | `Turabada` | 5 | 1 | yes | Slash x0.7, Caustic x1.2, Explosive x2, Blunt x0.8, Pierce x1.1, Spiritual x1.3 | 4 | `Turabada Passive Set` (passiveActions), `Turabada Stunned Set` (stunnedAction) |
| `Turabada Copper Trial Variant` | 14248 | `Turabada` | 5 | 1 | yes | Slash x0.6, Caustic x1.5, Explosive x2.2, Blunt x0.8, Pierce x1, Spiritual x0.8 | 4 | `Turabada Copper Passive Set Variant` (passiveActions), `Turabada Copper Stunned Set Variant` (stunnedAction) |
| `Turabada Copper Variant` | 39056 | `Turabada` | 5 | 1 | yes | Slash x0.6, Caustic x1.5, Explosive x2.2, Blunt x0.8, Pierce x1, Spiritual x0.8 | 4 | `Turabada Copper Passive Set Variant` (passiveActions), `Turabada Copper Stunned Set Variant` (stunnedAction) |
| `Turabada Gold Trial Variant` | 15506 | `Turabada` | 15 | 1 | yes | Slash x1, Caustic x1.2, Explosive x2, Blunt x1.2, Pierce x0.8, Spiritual x1 | 4 | `Turabada Gold Passive Set Variant` (passiveActions), `Turabada Gold Stunned Set Variant` (stunnedAction) |
| `Turabada Gold Variant` | 37176 | `Turabada` | 15 | 1 | yes | Slash x1, Caustic x1.2, Explosive x2, Blunt x1.2, Pierce x0.8, Spiritual x1 | 4 | `Turabada Gold Passive Set Variant` (passiveActions), `Turabada Gold Stunned Set Variant` (stunnedAction) |
| `Turabada Iron Trial Variant` | 16684 | `Turabada` | 15 | 1 | yes | Slash x0.7, Caustic x1.2, Explosive x2, Blunt x0.8, Pierce x1.1, Spiritual x0.7 | 4 | `Turabada Iron Passive Set Variant` (passiveActions), `Turabada Iron Stunned Set Variant` (stunnedAction) |
| `Turabada Iron Variant` | 8298 | `Turabada` | 15 | 1 | yes | Slash x0.7, Caustic x1.2, Explosive x2, Blunt x0.8, Pierce x1.1, Spiritual x0.7 | 4 | `Turabada Iron Passive Set Variant` (passiveActions), `Turabada Iron Stunned Set Variant` (stunnedAction) |
| `Turabada Large Trial Variant` | 17814 | `Turabada` | 7 | 1 | yes | Slash x0.7, Caustic x1.2, Explosive x2, Blunt x0.8, Pierce x1.1, Spiritual x1 | 4 | `Turabada Large Passive Set Variant` (passiveActions), `Turabada Large Stunned Set Variant` (stunnedAction) |
| `Turabada Large Variant` | 41172 | `Turabada` | 7 | 1 | yes | Slash x0.7, Caustic x1.2, Explosive x2, Blunt x0.8, Pierce x1.1, Spiritual x1 | 4 | `Turabada Large Passive Set Variant` (passiveActions), `Turabada Large Stunned Set Variant` (stunnedAction) |
| `Turabada Mythril Trial Variant` | 18722 | `Turabada` | 30 | 1 | yes | Slash x0.35, Caustic x1, Explosive x1, Blunt x0.4, Pierce x1, Spiritual x0.4 | 4 | `Turabada Mythril Passive Set Variant` (passiveActions), `Turabada Mythril Stunned Set Variant` (stunnedAction) |
| `Turabada Mythril Variant` | 62968 | `Turabada` | 30 | 1 | yes | Slash x0.35, Caustic x1, Explosive x1, Blunt x0.4, Pierce x1, Spiritual x0.4 | 4 | `Turabada Mythril Passive Set Variant` (passiveActions), `Turabada Mythril Stunned Set Variant` (stunnedAction) |
| `Turabada Short Trial Variant` | 19936 | `Turabada` | 3 | 1 | yes | Slash x0.9, Caustic x1.2, Explosive x2, Blunt x1, Pierce x1.1, Spiritual x1.2 | 4 | `Turabada Short Passive Set Variant` (passiveActions), `Turabada Short Stunned Set Variant` (stunnedAction) |
| `Turabada Short Variant` | 63878 | `Turabada` | 3 | 1 | yes | Slash x0.9, Caustic x1.2, Explosive x2, Blunt x1, Pierce x1.1, Spiritual x1.2 | 4 | `Turabada Short Passive Set Variant` (passiveActions), `Turabada Short Stunned Set Variant` (stunnedAction) |
| `Turabada Silver Trial Variant` | 20844 | `Turabada` | 20 | 1 | yes | Slash x0.5, Caustic x0.8, Explosive x2, Blunt x0.8, Pierce x1, Spiritual x0.4 | 4 | `Turabada Silver Passive Set Variant` (passiveActions), `Turabada Silver Stunned Set Variant` (stunnedAction) |
| `Turabada Silver Variant` | 45716 | `Turabada` | 20 | 1 | yes | Slash x0.5, Caustic x0.8, Explosive x2, Blunt x0.8, Pierce x1, Spiritual x0.4 | 4 | `Turabada Silver Passive Set Variant` (passiveActions), `Turabada Silver Stunned Set Variant` (stunnedAction) |
| `Turabada Spawner Reactive` | 27188 | `DeathFern` |  |  |  |  |  | `Reactive Turabada Spawner AI` (passiveActions) |
| `Turabada Trial Variant` | 21882 | `Turabada` | 5 | 1 | yes | Slash x0.7, Caustic x1.2, Explosive x2, Blunt x0.8, Pierce x1.1, Spiritual x1.3 | 4 | `Turabada Passive Set` (passiveActions), `Turabada Stunned Set` (stunnedAction) |
| `Vine Attack Fern` | 24402 | `DeathFern` | 1 |  |  | Slash x1, Pierce x0.5, Blunt x0.5 |  | `Vine Attack Fern AI` (passiveActions) |
| `Wyrm` | 21642 | `Wyrm` | 3.5 |  | yes | Caustic x0 |  | `Wyrm AI` (burrowedActions), `Wyrm AI` (emergedActions) |
| `Wyrm (Trial)` | 6004 | `Wyrm` | 3.5 |  | yes | Caustic x0 |  | `Trial Burrowed Set` (burrowedActions), `Trial Emerged Set` (emergedActions) |

## Creature stats

Every stat on each creature's `StatManager`: the stat name the code looks up, the `StatDefinition` asset, and the default, minimum and maximum the creature starts with.

| Prefab | Stat | Definition | Default | Min | Max |
| --- | --- | --- | --- | --- | --- |
| `Babu` | `health` | `Health Stat` | 45 | 0 | 45 |
| `Babu` | `damage` | `Damage Stat` | 1 | 1 | 10 |
| `Babu` | `cripplehealth` | `Cripple Health Stat` | 30 | 0 | 30 |
| `Babu` | `damageprotection` | `Damage Protection Stat` | 1 | 0 | 5 |
| `Crystal Wyrm` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Crystal Wyrm (Trial)` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Dais Antler Red Variant` | `health` | `Health Stat` | 15 | 0 | 15 |
| `Dais Antler Red Variant` | `cripplehealth` | `Cripple Health Stat` | 12 | 0 | 12 |
| `Dais Antler Variant` | `health` | `Health Stat` | 15 | 0 | 15 |
| `Dais Antler Variant` | `cripplehealth` | `Cripple Health Stat` | 12 | 0 | 12 |
| `Dais Base` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Dais Base` | `cripplehealth` | `Cripple Health Stat` | 5 | 0 | 5 |
| `Dais Child Red Variant` | `health` | `Health Stat` | 2 | 0 | 2 |
| `Dais Child Red Variant` | `cripplehealth` | `Cripple Health Stat` | 1 | 0 | 1 |
| `Dais Child Variant` | `health` | `Health Stat` | 2 | 0 | 2 |
| `Dais Child Variant` | `cripplehealth` | `Cripple Health Stat` | 1 | 0 | 1 |
| `Dais Red Variant` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Dais Red Variant` | `cripplehealth` | `Cripple Health Stat` | 5 | 0 | 5 |
| `Dais Variant` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Dais Variant` | `cripplehealth` | `Cripple Health Stat` | 5 | 0 | 5 |
| `Death Fern` | `health` | `Health Stat` | 1 | 0 | 1 |
| `Dragonfly` | `health` | `Health Stat` | 0.1 | 0 | 0.1 |
| `Firebug` | `health` | `Health Stat` | 0.5 | 0 | 0.5 |
| `Gotera` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Gotera` | `cripplehealth` | `Cripple Health Stat` | 2 | 0 | 2 |
| `Gotera Ash Bomb` | `health` | `Health Stat` | 0.2 | 0 | 0.2 |
| `Gotera Ash Variant` | `health` | `Health Stat` | 30 | 0 | 30 |
| `Gotera Ash Variant` | `cripplehealth` | `Cripple Health Stat` | 17 | 0 | 17 |
| `Gotera Ash Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0 | 2 |
| `Gotera Birch Variant` | `health` | `Health Stat` | 15 | 0 | 15 |
| `Gotera Birch Variant` | `cripplehealth` | `Cripple Health Stat` | 7 | 0 | 7 |
| `Gotera Birch Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0 | 2 |
| `Gotera Redwood Variant` | `health` | `Health Stat` | 50 | 0 | 50 |
| `Gotera Redwood Variant` | `cripplehealth` | `Cripple Health Stat` | 30 | 0 | 30 |
| `Gotera Redwood Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0 | 3 |
| `Gotera Walnut Variant` | `health` | `Health Stat` | 15 | 0 | 15 |
| `Gotera Walnut Variant` | `cripplehealth` | `Cripple Health Stat` | 10 | 0 | 10 |
| `Gotera Walnut Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0 | 2 |
| `Greater Gotera` | `health` | `Health Stat` | 150 | 0 | 150 |
| `Greater Gotera` | `cripplehealth` | `Cripple Health Stat` | 15 | 0 | 15 |
| `Greater Gotera` | `damage` | `Damage Stat` | 1 | 0 | 3 |
| `Mother Fern` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Phantom` | `health` | `Health Stat` | 2 | 0 | 2 |
| `Phantom` | `cripplehealth` | `Cripple Health Stat` | 1 | 0 | 1 |
| `Phantom` | `visibility` | `Visibility` | 0 | 0 | 1 |
| `Phantom` | `speed` | `Speed Stat` | 1 | 0 | 1 |
| `Phantom Head` | `health` | `Health Stat` | 0.5 | 0 | 0.5 |
| `Phantom Head` | `cripplehealth` | `Cripple Health Stat` | 1 | 0 | 1 |
| `Phantom Head` | `visibility` | `Visibility` | 0 | 0 | 1 |
| `Phantom Head` | `speed` | `Speed Stat` | 1 | 0 | 1 |
| `Schmeechee Glowing` | `health` | `Health Stat` | 2 | 0 | 2 |
| `Schmeechee Orange` | `health` | `Health Stat` | 0.5 | 0 | 0.5 |
| `Schmeechee Poisonous` | `health` | `Health Stat` | 0.3 | 0 | 0.3 |
| `Schmeechee Red` | `health` | `Health Stat` | 2 | 0 | 2 |
| `Spriggull` | `health` | `Health Stat` | 0.5 | 0 | 0.5 |
| `Spriggull` | `poison` | `Poison Stat` | 0 | 0 | 2 |
| `Turabada` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Turabada` | `cripplehealth` | `Cripple Health Stat` | 3 | 0 | 3 |
| `Turabada` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Copper Trial Variant` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Turabada Copper Trial Variant` | `cripplehealth` | `Cripple Health Stat` | 6 | 0 | 6 |
| `Turabada Copper Trial Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Copper Trial Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Copper Trial Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Copper Variant` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Turabada Copper Variant` | `cripplehealth` | `Cripple Health Stat` | 6 | 0 | 6 |
| `Turabada Copper Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Copper Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Copper Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Gold Trial Variant` | `health` | `Health Stat` | 15 | 0 | 15 |
| `Turabada Gold Trial Variant` | `cripplehealth` | `Cripple Health Stat` | 4 | 0 | 4 |
| `Turabada Gold Trial Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Gold Trial Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Gold Trial Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Gold Variant` | `health` | `Health Stat` | 15 | 0 | 15 |
| `Turabada Gold Variant` | `cripplehealth` | `Cripple Health Stat` | 4 | 0 | 4 |
| `Turabada Gold Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Gold Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Gold Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Iron Trial Variant` | `health` | `Health Stat` | 15 | 0 | 15 |
| `Turabada Iron Trial Variant` | `cripplehealth` | `Cripple Health Stat` | 7 | 0 | 7 |
| `Turabada Iron Trial Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Iron Trial Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Iron Trial Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Iron Variant` | `health` | `Health Stat` | 15 | 0 | 15 |
| `Turabada Iron Variant` | `cripplehealth` | `Cripple Health Stat` | 7 | 0 | 7 |
| `Turabada Iron Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Iron Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Iron Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Large Trial Variant` | `health` | `Health Stat` | 7 | 0 | 7 |
| `Turabada Large Trial Variant` | `cripplehealth` | `Cripple Health Stat` | 4 | 0 | 4 |
| `Turabada Large Trial Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Large Trial Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Large Trial Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Large Variant` | `health` | `Health Stat` | 7 | 0 | 7 |
| `Turabada Large Variant` | `cripplehealth` | `Cripple Health Stat` | 4 | 0 | 4 |
| `Turabada Large Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Large Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Large Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Mythril Trial Variant` | `health` | `Health Stat` | 30 | 0 | 30 |
| `Turabada Mythril Trial Variant` | `cripplehealth` | `Cripple Health Stat` | 25 | 0 | 25 |
| `Turabada Mythril Trial Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Mythril Trial Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Mythril Trial Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Mythril Variant` | `health` | `Health Stat` | 30 | 0 | 30 |
| `Turabada Mythril Variant` | `cripplehealth` | `Cripple Health Stat` | 25 | 0 | 25 |
| `Turabada Mythril Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Mythril Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Mythril Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Short Trial Variant` | `health` | `Health Stat` | 3 | 0 | 3 |
| `Turabada Short Trial Variant` | `cripplehealth` | `Cripple Health Stat` | 1.5 | 0 | 1.5 |
| `Turabada Short Trial Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Short Trial Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Short Trial Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Short Variant` | `health` | `Health Stat` | 3 | 0 | 3 |
| `Turabada Short Variant` | `cripplehealth` | `Cripple Health Stat` | 1.5 | 0 | 1.5 |
| `Turabada Short Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Short Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Short Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Silver Trial Variant` | `health` | `Health Stat` | 20 | 0 | 20 |
| `Turabada Silver Trial Variant` | `cripplehealth` | `Cripple Health Stat` | 10 | 0 | 10 |
| `Turabada Silver Trial Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Silver Trial Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Silver Trial Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Silver Variant` | `health` | `Health Stat` | 20 | 0 | 20 |
| `Turabada Silver Variant` | `cripplehealth` | `Cripple Health Stat` | 10 | 0 | 10 |
| `Turabada Silver Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Silver Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Silver Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Turabada Trial Variant` | `health` | `Health Stat` | 5 | 0 | 5 |
| `Turabada Trial Variant` | `cripplehealth` | `Cripple Health Stat` | 3 | 0 | 3 |
| `Turabada Trial Variant` | `damage` | `Damage Stat` | 1 | 0 | 5 |
| `Turabada Trial Variant` | `damageprotection` | `Damage Protection Stat` | 1 | 0.01 | 7 |
| `Turabada Trial Variant` | `damageprotection` | `Cripple Damage Protection Stat` | 1 | 0.01 | 10 |
| `Vine Attack Fern` | `health` | `Health Stat` | 1 | 0 | 1 |
| `Wyrm` | `health` | `Health Stat` | 3.5 | 0 | 3.5 |
| `Wyrm (Trial)` | `health` | `Health Stat` | 3.5 | 0 | 3.5 |

## Action sets

Prefabs with an `ActionComponentSet` on the root. **Actions** are the action and settings components in the set. **Swaps** are its `AgentSwapActionSetSettings` children and the set each one switches to.

| Action set | Actions | Swaps |
| --- | --- | --- |
| `Babu Aggro AI` | `AgentDistanceFromTargetSettings`, `AgentFollowSettings`, `AgentSwapActionSetSettings` | `Enter Passive` to `Babu Passive AI` |
| `Babu Aggro Start AI` | `AgentRegainControlSettings` |  |
| `Babu Passive AI` | `AgentDistanceFromTargetSettings`, `AgentEatSettings`, `AgentIdleSettings`, `AgentInteractApproachSettings`, `AgentNestSettings`, `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Babu Aggro Start AI` |
| `Babu Stunned Recovery State` | `AgentRegainControlSettings` |  |
| `Dais Child Passive Set Variant` | `AgentDistanceFromTargetSettings`, `AgentIdleSettings`, `AgentWanderSettings` |  |
| `Dais Child Stunned Recovery Variant` | `AgentRegainControlSettings` |  |
| `Dais Male Passive Set Variant` | `AgentDistanceFromTargetSettings`, `AgentIdleSettings`, `AgentWanderSettings` |  |
| `Dais Male Stunned Recovery Variant` | `AgentRegainControlSettings` |  |
| `Dais Passive Set` | `AgentDistanceFromTargetSettings`, `AgentIdleSettings`, `AgentWanderSettings` |  |
| `Dais Passive Set Variant` | `AgentDistanceFromTargetSettings`, `AgentIdleSettings`, `AgentWanderSettings` |  |
| `Dais Stunned Recovery` | `AgentRegainControlSettings` |  |
| `Dais Stunned Recovery Variant` | `AgentRegainControlSettings` |  |
| `Death Fern AI` | `AgentIdleSettings` |  |
| `Dragonfly Passive Set` | `AgentDistanceFromTargetSettings`, `AgentIdleSettings`, `AgentWanderSettings` |  |
| `Gotera Passive Set` | `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Gotera Standing Set` |
| `Gotera Planted Set` | `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Enter Stand` to `Gotera Standing Set`, `Become Passive` to `Gotera Passive Set`, `Enter Prowl` to `Gotera Prowl Set` |
| `Gotera Prowl Set` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentWanderSettings` | `Enter Planted` to `Gotera Planted Set`, `Become Passive` to `Gotera Passive Set` |
| `Gotera Standing Set` | `AgentFollowSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Gotera Passive Set`, `Enter Planted` to `Gotera Planted Set`, `Enter Prowl` to `Gotera Prowl Set` |
| `Gotera Stunned Recovery` | `AgentRegainControlSettings` |  |
| `Greater Gotera Aggro Phase 1 Set` | `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Enter Passive` to `Greater Gotera Passive Set`, `Phase 2` to `Greater Gotera Aggro Phase 2 Set` |
| `Greater Gotera Aggro Phase 2 Set` | `AgentFollowSettings`, `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Enter Passive` to `Greater Gotera Passive Set` |
| `Greater Gotera Passive Set` | `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Enter Aggro` to `Greater Gotera Aggro Phase 1 Set` |
| `Phantom Aggro Set AI` | `AgentCircleCloserSettings`, `AgentMoveCloserSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Phantom Passive Set AI` |
| `Phantom Head Aggro Set AI` | `AgentCircleCloserSettings`, `AgentMoveCloserSettings` |  |
| `Phantom Passive Set AI` | `AgentSwapActionSetSettings`, `AgentWanderSettings` | `Vision Aggro` to `Phantom Aggro Set AI`, `Instant Aggro` to `Phantom Aggro Set AI` |
| `Reactive Geyser Area AI` | `AgentIdleSettings` |  |
| `Reactive Turabada Spawner AI` | `AgentIdleSettings` |  |
| `Schmeechee AI` | `SchmeecheeFleeSettings`, `SchmeecheeFlipSettings`, `SchmeecheePlantSettings`, `SchmeecheePlaySettings` |  |
| `Trial Burrowed Set` | `AgentIdleSettings`, `WyrmEmergeSettings` |  |
| `Trial Crystal Burrowed Set` | `AgentIdleSettings`, `WyrmEmergeSettings` |  |
| `Trial Crystal Emerged Set` | `AgentIdleSettings`, `WyrmCatchSettings`, `WyrmDigSettings`, `WyrmDodgeSettings`, `WyrmMeleeSettings`, `WyrmSpinSettings`, `WyrmSpitSettings` |  |
| `Trial Emerged Set` | `AgentIdleSettings`, `WyrmCatchSettings`, `WyrmDigSettings`, `WyrmDodgeSettings`, `WyrmMeleeSettings`, `WyrmSpinSettings`, `WyrmSpitSettings` |  |
| `Turabada Aggro Set` | `AgentAttackDirectionReactSettings`, `AgentCircleRepositionSettings`, `AgentFollowSettings`, `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Turabada Passive Set` |
| `Turabada Copper Aggro Set Variant` | `AgentAttackDirectionReactSettings`, `AgentCircleRepositionSettings`, `AgentFollowSettings`, `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Turabada Copper Passive Set Variant` |
| `Turabada Copper Passive Set Variant` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Turabada Copper Aggro Set Variant` |
| `Turabada Copper Stunned Recovery State Variant` | `AgentRegainControlSettings` |  |
| `Turabada Gold Aggro Set Variant` | `AgentAttackDirectionReactSettings`, `AgentCircleRepositionSettings`, `AgentFollowSettings`, `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Turabada Gold Passive Set Variant` |
| `Turabada Gold Passive Set Variant` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Turabada Gold Aggro Set Variant` |
| `Turabada Gold Stunned Recovery State Variant` | `AgentRegainControlSettings` |  |
| `Turabada Iron Aggro Set Variant` | `AgentAttackDirectionReactSettings`, `AgentCircleRepositionSettings`, `AgentFollowSettings`, `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Turabada Iron Passive Set Variant` |
| `Turabada Iron Passive Set Variant` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Turabada Iron Aggro Set Variant` |
| `Turabada Iron Stunned Recovery State Variant` | `AgentRegainControlSettings` |  |
| `Turabada Large Aggro Set Variant` | `AgentAttackDirectionReactSettings`, `AgentCircleRepositionSettings`, `AgentFollowSettings`, `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Turabada Large Passive Set Variant` |
| `Turabada Large Passive Set Variant` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Turabada Large Aggro Set Variant` |
| `Turabada Large Stunned Recovery State Variant` | `AgentRegainControlSettings` |  |
| `Turabada Mythril Aggro Set Variant Variant` | `AgentAttackDirectionReactSettings`, `AgentCircleRepositionSettings`, `AgentFollowSettings`, `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Turabada Mythril Passive Set Variant` |
| `Turabada Mythril Passive Set Variant` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Turabada Mythril Aggro Set Variant Variant` |
| `Turabada Mythril Stunned Recovery State Variant` | `AgentRegainControlSettings` |  |
| `Turabada Passive Set` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Turabada Aggro Set` |
| `Turabada Short Aggro Set Variant` | `AgentAttackDirectionReactSettings`, `AgentCircleRepositionSettings`, `AgentFollowSettings`, `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Turabada Short Passive Set Variant` |
| `Turabada Short Passive Set Variant` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Turabada Short Aggro Set Variant` |
| `Turabada Short Stunned Recovery State Variant` | `AgentRegainControlSettings` |  |
| `Turabada Silver Aggro Set Variant` | `AgentAttackDirectionReactSettings`, `AgentCircleRepositionSettings`, `AgentFollowSettings`, `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Turabada Silver Passive Set Variant` |
| `Turabada Silver Passive Set Variant` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Turabada Silver Aggro Set Variant` |
| `Turabada Silver Stunned Recovery State Variant` | `AgentRegainControlSettings` |  |
| `Turabada Stunned Recovery State` | `AgentRegainControlSettings` |  |
| `Vine Attack Fern AI` | `AgentIdleSettings` |  |
| `Walnut Gotera Passive Set` | `AgentSwapActionSetSettings`, `AgentThreatenSettings`, `AgentWanderSettings` | `Instant Aggro` to `Walnut Gotera Standing Set` |
| `Walnut Gotera Planted Set` | `AgentIdleSettings`, `AgentSwapActionSetSettings` | `Enter Stand` to `Walnut Gotera Standing Set`, `Become Passive` to `Walnut Gotera Passive Set`, `Enter Prowl` to `Walnut Gotera Prowl Set` |
| `Walnut Gotera Prowl Set` | `AgentIdleSettings`, `AgentSwapActionSetSettings`, `AgentWanderSettings` | `Enter Planted` to `Walnut Gotera Planted Set`, `Become Passive` to `Walnut Gotera Passive Set` |
| `Walnut Gotera Standing Set` | `AgentFollowSettings`, `AgentSwapActionSetSettings` | `Become Passive` to `Walnut Gotera Passive Set`, `Enter Planted` to `Walnut Gotera Planted Set`, `Enter Prowl` to `Walnut Gotera Prowl Set` |
