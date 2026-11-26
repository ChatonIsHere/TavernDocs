---
title: Creature data
description: Health, damage, senses, ranges, drops and populations of the game's creatures, from the shipped prefabs.
sidebar_position: 11
---

# Creature data

Everything on this page comes from the game's assets (prefabs and ScriptableObjects in build `main-1.7.2.1.42203`), not from code. These are **asset values**: an update to the game can change them, and a mod can change them at runtime. The other pages in this section say what the fields do.

This page picks out what explains creature behaviour. For the complete lists (every creature prefab with its hash, every stat with its range, every action set and its swaps) use the generated [Creatures reference](../reference/creatures.md), and [Spawnable prefabs](../reference/spawnable-prefabs.md) for hashes of everything else.

## Which prefab uses which class

| Class | Prefabs |
| --- | --- |
| `Spriggull` | Spriggull |
| `Turabada` | Turabada; Turabada Short, Large, Copper, Iron, Silver, Gold and Mythril Variant; and a "Trial" version of each |
| `Wyrm` | Wyrm, Crystal Wyrm, Wyrm (Trial), Crystal Wyrm (Trial) |
| `Gotera` | Gotera; Gotera Ash, Birch, Redwood and Walnut Variant |
| `GreaterGotera` | Greater Gotera |
| `Babu` | Babu |
| `Phantom` | Phantom, Phantom Head |
| `PlayerLikeSpectralGhost` | Spectral Ghost |
| `FireBug` | Firebug |
| `Schmeechee` | Schmeechee Red, Orange, Glowing and Poisonous |
| `Dragonfly` | Dragonfly, and the Dais animals: Dais Base, Dais Variant, Dais Red, Antler, Antler Red, Child and Child Red Variant |
| `DeathFern` | Death Fern, Mother Fern, Vine Attack Fern, Targeted Geyser (also inside Chute Gcore Dynamic), Gotera Ash Bomb, Turabada Spawner Reactive |

`DeathFern` is the game's general "stationary agent": a body and one action set, used for hazards and spawners as well as ferns. `Dragonfly` likewise drives the Dais herd animals.

Each creature's `Agent` sits on a child GameObject of the prefab (named "Spriggull AI", "Turabada AI", "AI" and so on), separate from its body. That's the object `Target.Initialize` turns off on clients.

## Action sets are shared prefabs

Every creature's action sets are **separate prefab assets**, not part of the creature's own prefab: "Spriggull AI", "Turabada Passive Set", "Turabada Aggro Set", "Wyrm AI" (holding "Burrowed Set" and "Emerged Set"), "Gotera Planted Set" and so on. Unity doesn't copy a referenced prefab when it spawns a creature, so every spriggull really does share one set of `ActionComponent`s, and the static caches in the creature classes point at those shared assets.

Turabada variants each have their own variant sets ("Turabada Gold Passive Set Variant" and so on). Each shipped class with a "first one wins" static (`Spriggull`, `Babu`, `FireBug`) has only one prefab, so that quirk doesn't bite in the shipped game.

## Health and damage

Player health is 2 (the "health" stat on the player prefab), for scale. The [Creatures reference](../reference/creatures.md#creature-prefabs) has health and impact multipliers for every variant; this table adds the cripple health and the attack hitboxes.

| Prefab | Health | Cripple health | Impact type multipliers | Attack hitboxes |
| --- | --- | --- | --- | --- |
| Spriggull | 0.5 | | | Beak: `FixedImpactor` "Spriggull_0_Impactor" (blunt, health 0.5, cripple 0.2) on an `ImpactTool` with damage 1 |
| Turabada | 5 | 3 | Slash 0.7, Blunt 0.8, Pierce 1.1, Caustic 1.2, Spiritual 1.3, Explosive 2 | Arms: `FixedImpactor` "Turabada-0" (blunt, health 0.5, cripple 1.5) with a `TriggerImpactTool` (damage 1) |
| Turabada Short / Large Variant | 3 / 7 | 1.5 / 4 | Similar | Own impactor values (health 0.25 / 0.8) |
| Turabada Copper / Iron / Silver / Gold / Mythril Variant | 5 / 15 / 20 / 15 / 30 | 6 / 7 / 10 / 4 / 25 | Mythril: Slash 0.35, Blunt 0.4 | Health 0.35 / 0.5 / 1.4 / 0.5 / 1.6 |
| Wyrm | 3.5 | | Caustic 0 | Scythes: `FixedImpactor` "Wyrm_0_SlashDamage" (pierce, health 1) on `ImpactTool`s with damage 0.5 |
| Crystal Wyrm | 5 | | Caustic 0 | Same, health 2 on tools with damage 1 |
| Gotera | 5 | 2 | Slash 1.5 | Vine whip: "Gotera Vine" (health 1) on a `TriggerImpactTool` with damage 0.5; seed spray and darts |
| Gotera Walnut / Redwood Variant | 15 / 50 | 10 / 30 | Slash 1.5 / 1.3 | Same vine; walnut has big darts |
| Greater Gotera | 150 | 15 | | Six arm hitboxes ("Babu - 0", blunt, health 1, cripple 1.5) |
| Babu | 45 | 30 | Slash 1.2, Caustic 0.5 | Tusks and head ("Babu - 0") |
| Phantom / Phantom Head | 2 / 0.5 | 1 / 1 | Head: Spiritual 2, Slash 1.2 | Vision attack |
| Spectral Ghost | 2 | 1 | | |
| Firebug | 0.5 | | | |
| Schmeechee Red / Glowing / Orange / Poisonous | 2 / 2 / 0.5 / 0.3 | | | |
| Dragonfly | 0.1 | | | |
| Dais Base, Variant and Red / Antler and Antler Red / Child and Child Red | 5 / 15 / 2 | 5 / 12 / 1 | | |
| Death Fern / Vine Attack Fern / Mother Fern | 1 / 1 / 5 | | Blunt 0 on the death fern | Poison cloud on death; vine whips |

Turabadas, babus and Greater Gotera also have a "damage" stat (1) that their impactors use as a multiplier, and turabadas a "damage protection" stat (1, up to 7) that their blocking stance and spheres raise for a while. Only creatures marked combatant put players in combat when hit: spriggull, turabadas, wyrms, goteras, Greater Gotera and babu.

## Senses, ranges, speeds

| Prefab | Senses it gives off | Decides every | Collector radius | Walker top speed |
| --- | --- | --- | --- | --- |
| Player ("VR Player Character New") | Flesh 1, Life 1, Danger 2 | | | |
| Flycam player | Danger 0, Life 0, Flesh 0 | | | |
| Spriggull | Flesh 1, Life 1, Danger 0.5, Bird 1, Asleep 0 | 0.5 s | 20 m | 3 |
| Turabada (non-trial) | Life 1, Danger 0.5, Plant 0.1 | 0.1 s | 20 m | 4 |
| Turabada trial variants | none | 0.1 s | 20 m | 4 |
| Wyrm, Crystal Wyrm | none until it emerges, then Danger, Life, Flesh and Bug 1 | 0.1 s | 20 m | no walker |
| Gotera | Danger 1, Plant 1, Life 1 | 0.1 s | 25 m (Redwood 40 m) | 9 (Redwood 3) |
| Greater Gotera | none | 0.1 s | 50 m | 1 |
| Babu | Life 1, Swine 1 | 0.1 s | 75 m | 1 |
| Phantom, Spectral Ghost | none | 0.1 s | 10 m | 4 |
| Schmeechee | Flesh 1, Life 1, Food 1 | 0.1 s | 3 m | no walker |
| Death Fern, Vine Attack Fern | Danger 1, Plant 1, Forest Hazard 1 | 0.1 s | 3 m | |
| Dais, Dragonfly | none | 0.1 s | 50 m / 20 m | 1 |
| Food items (spriggull drumstick, apple core) | Food 1 (apple core also Plant 1) | | | |

`hurtReducePerSecond` is 0.1 on most, 0.02 on wyrms, 0.01 on turabadas and goteras, and 0.001 on the babu, so those hold a grudge much longer.

The sense assets are: `BasicSense` Armed, Asleep, Bird, Bug, Danger, Facing3D, Flesh, Food, Forest Hazard, Life, Movement, Noise, Plant, Swine and Velocity; `DistanceSense` Distance; `DistanceSquaredSense` DistanceSquared; `Facing2DSense` Facing2D; `HurtSense` Hurt; `ViewConeSense` ViewCone. So **Velocity and Facing3D are fixed values a target gives off, not measured**, and players give off neither.

Many attack rules also prefer targets with a high "Aggroing Stat" (0 to 10). On players that's the "aggro" stat, 1 by default.

## Drops

Wired on each creature's `HealthObject.Destroyed` event, which calls `Spawner.Spawn` or `MultiSpawner.Spawn` on the server. A `Distribution` roll first has its `nullChance` of giving nothing, then picks an item by weight.

| Prefab | Drops |
| --- | --- |
| Spriggull | 2 rolls of Spriggull Drumstick (10% nothing each), 2 feathers (blue 70%, red 30%) |
| Turabada | 5 rolls of stone (Stone or Flint), 3 rolls of Stone, Flint, Explosive Spike or (rarely) Turabada Arm, 3 rolls of ore (Iron and Copper most likely, Gold, Silver and Mythril rarer, weighted by area attributes) |
| Wyrm | 1 roll, 25% chance: Soft Fabric Medium Roll (87.5%) or Large Roll (12.5%), in the wyrm's material |
| Crystal Wyrm | 2 such rolls |
| Gotera | 5 Woodcut Wedges and 2 rolls of Gotera Seedling Orb (50% each); the redwood drops a Redwood Gotera Core instead |
| Babu | 4 Babu Leg |
| Phantom, Phantom Head | 1 roll, 1%: Phantom Guard |
| Dais Base | 5 Soft Fabric Medium Roll, 4 Dais Meat, and a 10% Soft Fabric Large Roll |
| Dragonfly | Dragonfly Corpse |
| Death Fern, Mother Fern, Vine Attack Fern | Death Fern Poison Cloud |

## Populations

`PopulationDefinition` assets marked `isCreature`. The tick is the base `tickFrequency`, before `SpawningRateMultiplier` and any `settings population set-time` override.

| Definition | Spawns | Tick | Spawned share | Growth per tick | Spawn point held after a death |
| --- | --- | --- | --- | --- | --- |
| Spriggull Population | Spriggull | 1800 s | 50% | 2 | 0 s |
| Turabada Overworld Population | Turabada, Short or Large Variant | 1800 s | 100% | 5 | 60 s |
| Turabada Copper / Iron / Path Population | Copper / Iron / Gold Variant | 1800 / 3600 / 1800 s | 100% | 5 / 3 / 5 | 0 s |
| Wyrm Population | Wyrm | 1800 s | 35% | 5 | 60 s |
| Absolute Wyrm Population | Wyrm | 1800 s | 100% | 10 | 60 s |
| Crystal Wyrm Population | Crystal Wyrm | 1800 s | 35% | 5 | 120 s |
| Gotera Population, Birch Gotera Population | Gotera, Gotera Birch Variant | 1800 s | 100% | 3 / 4 | 0 s |
| Dais Population | Dais animals (by weight) | 1800 s | 35% | 3 | 0 s |
| Trial populations | Trial wyrms and turabadas | 1800 s | 100% | 0 or 1 | 0 s |

Spriggull, Gotera, Birch Gotera and Turabada Overworld allow disconnecting with no radius, so they use `BoundsPopulationItem`; "Trial Tura Population T-1" uses `RadialPopulationItem` with a 20 m radius. Death ferns come from populations that aren't marked as creatures (Death Fern Population ticks every 5400 s).

## See also

- [Common creatures](common-creatures.md) for the spriggull, turabada, wyrm and gotera action sets
- [Other creatures](other-creatures.md)
