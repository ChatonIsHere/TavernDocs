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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`GlobalPopulationDefinition`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationInfo()"}</code> | <span className="api-desc">Creates a `GlobalPopulationDefinition.PopulationInfo` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-hash" /><code>{"uint Hash { get; set; }"}</code> | <span className="api-desc">The population definition's hash.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">The definition asset's name.</span> |
| <Link id="m-populationsize" /><code>{"int PopulationSize { get; set; }"}</code> | <span className="api-desc">Maximum spawned count for the population.</span> |
| <Link id="m-spawnedcount" /><code>{"int SpawnedCount { get; set; }"}</code> | <span className="api-desc">How many are spawned now.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-implicit" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition-populationinfo">{"GlobalPopulationDefinition.PopulationInfo"}</Link>{" op_Implicit("}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" item)"}</code> | <span className="api-desc">Builds a `PopulationInfo` from a `GlobalPopulationDefinition`.</span> |

## Used in

Members of other types that take, return or hold a `PopulationInfo`:

<div className="api-used-in">

[`GlobalPopulationDefinition.ListPopulations`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition#m-listpopulations).

</div>
