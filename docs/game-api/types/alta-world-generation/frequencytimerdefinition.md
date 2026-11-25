---
title: "FrequencyTimerDefinition"
description: "class FrequencyTimerDefinition in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FrequencyTimerDefinition

A **class** in `Root.Township`, `Alta.Populations`.

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

| Member |
| --- |
| <Link id="m-elementdecaytime" /><code>{"private float elementDecayTime"}</code> |
| <Link id="m-entries" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{", "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{"> entries"}</code> |
| <Link id="m-ticktime" /><code>{"private float tickTime"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-elementdecaytime-2" /><code>{"override float ElementDecayTime { get; }"}</code> |
| <Link id="m-spawnoninitialize" /><code>{"override bool SpawnOnInitialize { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-clean" /><code>{"override void Clean("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> |
| <Link id="m-setup" /><code>{"override void Setup("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" population)"}</code> |
