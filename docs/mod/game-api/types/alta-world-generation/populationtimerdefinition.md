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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DayNightOnlyTimerDefinition`](/mod/game-api/types/alta-world-generation/daynightonlytimerdefinition), [`FrequencyTimerDefinition`](/mod/game-api/types/alta-world-generation/frequencytimerdefinition)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected PopulationTimerDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elementdecaytime" /><code>{"abstract float ElementDecayTime { get; }"}</code> | <span className="api-desc">How long each spawned element lasts, passed to every `SpawnedElement`.</span> |
| <Link id="m-spawnoninitialize" /><code>{"abstract bool SpawnOnInitialize { get; }"}</code> | <span className="api-desc">If true, the population spawns its starting amount at start-up.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"abstract void Clean("}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | <span className="api-desc">Called from the population's `Clean`; stops the timer for it.</span> |
| <Link id="m-setup" /><code>{"abstract void Setup("}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | <span className="api-desc">Called from the population's `StartUp`; starts the timer for it.</span> |

## Used in

Members of other types that take, return or hold a `PopulationTimerDefinition`:

<div className="api-used-in">

[`GlobalPopulationDefinition.timer`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition#m-timer).

</div>
