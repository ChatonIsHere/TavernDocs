---
title: "Ecosystem.PopulationApplication"
description: "One population entry in an Ecosystem asset: which population, how big it can get, and whether spawn points cap it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Ecosystem.PopulationApplication

A **class** in `Root.Township`, `Alta.Populations`.

One population entry in an `Ecosystem` asset: which population, how big it can get, and whether spawn points cap it. Server: turned into a `PopulationSample` per chunk.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`Ecosystem`](/mod/game-api/types/alta-world-generation/ecosystem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationApplication()"}</code> | <span className="api-desc">Creates an `Ecosystem.PopulationApplication` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagemaximumpopulation" /><code>{"private int averageMaximumPopulation"}</code> | <span className="api-desc">Maximum population before biome attribute impacts are applied (default 5). Ignored when limited by spawn points.</span> |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition"}</code> | <span className="api-desc">Backing field for `Definition`.</span> |
| <Link id="m-islimitedbyspawnpoints" /><code>{"private bool isLimitedBySpawnPoints"}</code> | <span className="api-desc">When set, the maximum and starting population both equal the spawn area limit instead of the average.</span> |
| <Link id="m-maxpopulationmultiplieronsimpleservers" /><code>{"private float maxPopulationMultiplierOnSimpleServers"}</code> | <span className="api-desc">Scales the maximum on simple servers. Not applied when limited by spawn points.</span> |
| <Link id="m-minimumstartpopulation" /><code>{"private int minimumStartPopulation"}</code> | <span className="api-desc">Lowest starting count; the start is a random value between this and the maximum.</span> |
| <Link id="m-plugin" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" plugin"}</code> | <span className="api-desc">Backing field for `Plugin`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; }"}</code> | <span className="api-desc">The population this entry spawns.</span> |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">Hash of the population definition, used to look up its spawn information.</span> |
| <Link id="m-plugin-2" /><code><Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" { get; }"}</code> | <span className="api-desc">Generation plugin tied to this entry.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializesample" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" InitializeSample("}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" biome, "}<Link to="/mod/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" ecosystem, "}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent)"}</code> | <span className="api-desc">Works out the maximum (from biome attributes and server type, or from spawn points) and a random starting count, and makes a `PopulationSample`.</span> |

## Used in

Members of other types that take, return or hold a `PopulationApplication`:

<div className="api-used-in">

[`Ecosystem.definitions`](/mod/game-api/types/alta-world-generation/ecosystem#m-definitions), [`Ecosystem.definitionsMap`](/mod/game-api/types/alta-world-generation/ecosystem#m-definitionsmap).

</div>
