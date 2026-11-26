---
title: "GlobalPopulationDefinition.PopulationInfo"
description: "A snapshot of a global population for listing: hash, name, how many are spawned and the maximum."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPopulationDefinition.PopulationInfo

A **class** in `Root.Township`, `Alta.Populations`.

A snapshot of a global population for listing: hash, name, how many are spawned and the maximum.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`GlobalPopulationDefinition`](/game-api/types/alta-world-generation/globalpopulationdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationInfo()"}</code> | Creates a `GlobalPopulationDefinition.PopulationInfo` with default values. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; set; }"}</code> | The population definition's hash. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | The definition asset's name. |
| <Link id="m-populationsize" /><code>{"int PopulationSize { get; set; }"}</code> | Maximum spawned count for the population. |
| <Link id="m-spawnedcount" /><code>{"int SpawnedCount { get; set; }"}</code> | How many are spawned now. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition-populationinfo">{"GlobalPopulationDefinition.PopulationInfo"}</Link>{" op_Implicit("}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" item)"}</code> | Builds a `PopulationInfo` from a `GlobalPopulationDefinition`. |

## Used in

Members of other types that take, return or hold a `PopulationInfo`:

[`GlobalPopulationDefinition.ListPopulations`](/game-api/types/alta-world-generation/globalpopulationdefinition#m-listpopulations).
