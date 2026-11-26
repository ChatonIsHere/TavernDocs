---
title: "DayNightOnlyTimerDefinition"
description: "Population timer asset that checks its populations only when night starts (or day, if spawnOnlyDuringNight is off)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DayNightOnlyTimerDefinition

A **class** in `Root.Township`, `Alta.Populations`.

Population timer asset that checks its populations only when night starts (or day, if `spawnOnlyDuringNight` is off). Spawned elements decay after one night or day.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationTimerDefinition`](/game-api/types/alta-world-generation/populationtimerdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DayNightOnlyTimerDefinition()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activepopulations" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{"> activePopulations"}</code> | Populations using this timer. |
| <Link id="m-spawnonlyduringnight" /><code>{"private bool spawnOnlyDuringNight"}</code> | True spawns at night, false spawns during the day. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elementdecaytime" /><code>{"override float ElementDecayTime { get; }"}</code> | The night duration, or the day duration when spawning during the day. |
| <Link id="m-spawnoninitialize" /><code>{"override bool SpawnOnInitialize { get; }"}</code> | Always false: these populations wait for the right time of day. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"override void Clean("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | Removes a population and unhooks from night changes when none are left. |
| <Link id="m-setup" /><code>{"override void Setup("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | Adds a population. The first one hooks `GameTimeManager.NightChanged` and checks straight away. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkspawnedinternal" /><code>{"private void CheckSpawnedInternal(bool isNight)"}</code> | On a day or night change, runs `CheckSpawned` on every active population if the new time matches. |

</details>
