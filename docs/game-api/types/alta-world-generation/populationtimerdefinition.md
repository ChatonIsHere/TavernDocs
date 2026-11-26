---
title: "PopulationTimerDefinition"
description: "Base class for the timer that drives a GlobalPopulationDefinition: decides when it ticks and how long spawned elements last."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationTimerDefinition

An **abstract class** in `Root.Township`, `Alta.Populations`.

Base class for the timer that drives a `GlobalPopulationDefinition`: decides when it ticks and how long spawned elements last.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DayNightOnlyTimerDefinition`](/game-api/types/alta-world-generation/daynightonlytimerdefinition), [`FrequencyTimerDefinition`](/game-api/types/alta-world-generation/frequencytimerdefinition)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected PopulationTimerDefinition()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elementdecaytime" /><code>{"abstract float ElementDecayTime { get; }"}</code> | How long each spawned element lasts, passed to every `SpawnedElement`. |
| <Link id="m-spawnoninitialize" /><code>{"abstract bool SpawnOnInitialize { get; }"}</code> | If true, the population spawns its starting amount at start-up. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"abstract void Clean("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | Called from the population's `Clean`; stops the timer for it. |
| <Link id="m-setup" /><code>{"abstract void Setup("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | Called from the population's `StartUp`; starts the timer for it. |

## Used in

Members of other types that take, return or hold a `PopulationTimerDefinition`:

[`GlobalPopulationDefinition.timer`](/game-api/types/alta-world-generation/globalpopulationdefinition#m-timer).
