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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationTimerDefinition`](/mod/game-api/types/alta-world-generation/populationtimerdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DayNightOnlyTimerDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activepopulations" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{"> activePopulations"}</code> | <span className="api-desc">Populations using this timer.</span> |
| <Link id="m-spawnonlyduringnight" /><code>{"private bool spawnOnlyDuringNight"}</code> | <span className="api-desc">True spawns at night, false spawns during the day.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elementdecaytime" /><code>{"override float ElementDecayTime { get; }"}</code> | <span className="api-desc">The night duration, or the day duration when spawning during the day.</span> |
| <Link id="m-spawnoninitialize" /><code>{"override bool SpawnOnInitialize { get; }"}</code> | <span className="api-desc">Always false: these populations wait for the right time of day.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"override void Clean("}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | <span className="api-desc">Removes a population and unhooks from night changes when none are left.</span> |
| <Link id="m-setup" /><code>{"override void Setup("}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | <span className="api-desc">Adds a population. The first one hooks `GameTimeManager.NightChanged` and checks straight away.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkspawnedinternal" /><code>{"private void CheckSpawnedInternal(bool isNight)"}</code> | <span className="api-desc">On a day or night change, runs `CheckSpawned` on every active population if the new time matches.</span> |

</details>
