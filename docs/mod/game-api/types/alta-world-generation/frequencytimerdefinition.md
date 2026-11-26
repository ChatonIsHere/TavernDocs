---
title: "FrequencyTimerDefinition"
description: "Population timer asset that checks each population every tickTime seconds on the Timeline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FrequencyTimerDefinition

A **class** in `Root.Township`, `Alta.Populations`.

Population timer asset that checks each population every `tickTime` seconds on the `Timeline`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationTimerDefinition`](/mod/game-api/types/alta-world-generation/populationtimerdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FrequencyTimerDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementdecaytime" /><code>{"private float elementDecayTime"}</code> | <span className="api-desc">Seconds a spawned element lasts.</span> |
| <Link id="m-entries" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{", "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> entries"}</code> | <span className="api-desc">The timeline entry for each population.</span> |
| <Link id="m-ticktime" /><code>{"private float tickTime"}</code> | <span className="api-desc">Seconds between population checks.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elementdecaytime-2" /><code>{"override float ElementDecayTime { get; }"}</code> | <span className="api-desc">Seconds before a spawned element decays, from `elementDecayTime`.</span> |
| <Link id="m-spawnoninitialize" /><code>{"override bool SpawnOnInitialize { get; }"}</code> | <span className="api-desc">Always true: populations spawn when they initialize.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"override void Clean("}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | <span className="api-desc">Cancels the population's repeating timeline entry.</span> |
| <Link id="m-setup" /><code>{"override void Setup("}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | <span className="api-desc">Starts (or restarts) a repeating `CheckSpawned` call for the population every `tickTime` seconds.</span> |
