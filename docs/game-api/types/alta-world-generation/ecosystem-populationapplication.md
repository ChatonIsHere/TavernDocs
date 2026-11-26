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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Ecosystem`](/game-api/types/alta-world-generation/ecosystem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationApplication()"}</code> | Creates an `Ecosystem.PopulationApplication` with default values. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagemaximumpopulation" /><code>{"private int averageMaximumPopulation"}</code> | Maximum population before biome attribute impacts are applied (default 5). Ignored when limited by spawn points. |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition"}</code> | Backing field for `Definition`. |
| <Link id="m-islimitedbyspawnpoints" /><code>{"private bool isLimitedBySpawnPoints"}</code> | When set, the maximum and starting population both equal the spawn area limit instead of the average. |
| <Link id="m-maxpopulationmultiplieronsimpleservers" /><code>{"private float maxPopulationMultiplierOnSimpleServers"}</code> | Scales the maximum on simple servers. Not applied when limited by spawn points. |
| <Link id="m-minimumstartpopulation" /><code>{"private int minimumStartPopulation"}</code> | Lowest starting count; the start is a random value between this and the maximum. |
| <Link id="m-plugin" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" plugin"}</code> | Backing field for `Plugin`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition-2" /><code><Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" Definition { get; }"}</code> | The population this entry spawns. |
| <Link id="m-hash" /><code>{"uint Hash { get; }"}</code> | Hash of the population definition, used to look up its spawn information. |
| <Link id="m-plugin-2" /><code><Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/plugin">{"Plugin"}</Link>{" { get; }"}</code> | Generation plugin tied to this entry. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializesample" /><code><Link to="/game-api/types/alta-world-generation/populationsample">{"PopulationSample"}</Link>{" InitializeSample("}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{" biome, "}<Link to="/game-api/types/alta-world-generation/ecosystem">{"Ecosystem"}</Link>{" ecosystem, "}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" parent)"}</code> | Works out the maximum (from biome attributes and server type, or from spawn points) and a random starting count, and makes a `PopulationSample`. |

## Used in

Members of other types that take, return or hold a `PopulationApplication`:

[`Ecosystem.definitions`](/game-api/types/alta-world-generation/ecosystem#m-definitions), [`Ecosystem.definitionsMap`](/game-api/types/alta-world-generation/ecosystem#m-definitionsmap).
