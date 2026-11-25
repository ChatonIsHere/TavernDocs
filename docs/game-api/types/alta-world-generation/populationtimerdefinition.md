---
title: "PopulationTimerDefinition"
description: "abstract class PopulationTimerDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationTimerDefinition

An **abstract class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DayNightOnlyTimerDefinition`](/game-api/types/alta-world-generation/daynightonlytimerdefinition), [`FrequencyTimerDefinition`](/game-api/types/alta-world-generation/frequencytimerdefinition)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected PopulationTimerDefinition()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-elementdecaytime" /><code>{"abstract float ElementDecayTime { get; }"}</code> |
| <Link id="m-spawnoninitialize" /><code>{"abstract bool SpawnOnInitialize { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clean" /><code>{"abstract void Clean("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> |
| <Link id="m-setup" /><code>{"abstract void Setup("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> |

## Used in

Members of other types that take, return or hold a `PopulationTimerDefinition`:

[`GlobalPopulationDefinition.timer`](/game-api/types/alta-world-generation/globalpopulationdefinition#m-timer).
