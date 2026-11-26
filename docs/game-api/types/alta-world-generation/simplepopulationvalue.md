---
title: "SimplePopulationValue"
description: "Spawn information that asks an ISpawnPositions source for points by index and caches them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplePopulationValue

A **class** in `Root.Township`, `Alta.Populations`.

Spawn information that asks an `ISpawnPositions` source for points by index and caches them.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationSpawnInformation`](/game-api/types/alta-world-generation/populationspawninformation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimplePopulationValue("}<Link to="/game-api/types/global-i-l/ispawnpositions">{"ISpawnPositions"}</Link>{" positions, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Creates a `SimplePopulationValue` from `positions` and `spawnData`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. Unused. |
| <Link id="m-tracked" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> tracked"}</code> | Cache of points already made, by index. Never cleared. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code><Link to="/game-api/types/global-i-l/ispawnpositions">{"ISpawnPositions"}</Link>{" Positions { get; }"}</code> | The source of spawn positions. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> | Returns the cached point for an index, or gets it from `Positions` and caches it. |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | Tries up to three random indexes and returns the first free point the definition accepts, or null. Each try adds to the cache. |
