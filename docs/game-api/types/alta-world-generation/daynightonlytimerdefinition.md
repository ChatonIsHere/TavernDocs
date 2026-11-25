---
title: "DayNightOnlyTimerDefinition"
description: "class DayNightOnlyTimerDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DayNightOnlyTimerDefinition

A **class** in `Root.Township`, `Alta.Populations`.

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

| Member |
| --- |
| <Link id="m-activepopulations" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{"> activePopulations"}</code> |
| <Link id="m-spawnonlyduringnight" /><code>{"private bool spawnOnlyDuringNight"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-elementdecaytime" /><code>{"override float ElementDecayTime { get; }"}</code> |
| <Link id="m-spawnoninitialize" /><code>{"override bool SpawnOnInitialize { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clean" /><code>{"override void Clean("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> |
| <Link id="m-setup" /><code>{"override void Setup("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-checkspawnedinternal" /><code>{"private void CheckSpawnedInternal(bool isNight)"}</code> |

</details>
