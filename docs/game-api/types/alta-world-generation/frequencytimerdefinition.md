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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationTimerDefinition`](/game-api/types/alta-world-generation/populationtimerdefinition)
- **Attributes** `CreateAssetMenu`
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FrequencyTimerDefinition()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-elementdecaytime" /><code>{"private float elementDecayTime"}</code> | Seconds a spawned element lasts. |
| <Link id="m-entries" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{", "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> entries"}</code> | The timeline entry for each population. |
| <Link id="m-ticktime" /><code>{"private float tickTime"}</code> | Seconds between population checks. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-elementdecaytime-2" /><code>{"override float ElementDecayTime { get; }"}</code> | Seconds before a spawned element decays, from `elementDecayTime`. |
| <Link id="m-spawnoninitialize" /><code>{"override bool SpawnOnInitialize { get; }"}</code> | Always true: populations spawn when they initialize. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"override void Clean("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | Cancels the population's repeating timeline entry. |
| <Link id="m-setup" /><code>{"override void Setup("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> | Starts (or restarts) a repeating `CheckSpawned` call for the population every `tickTime` seconds. |
