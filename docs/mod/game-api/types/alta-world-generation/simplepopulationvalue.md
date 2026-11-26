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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationSpawnInformation`](/mod/game-api/types/alta-world-generation/populationspawninformation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SimplePopulationValue("}<Link to="/mod/game-api/types/global-i-l/ispawnpositions">{"ISpawnPositions"}</Link>{" positions, "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Creates a `SimplePopulationValue` from `positions` and `spawnData`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class. Unused.</span> |
| <Link id="m-tracked" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> tracked"}</code> | <span className="api-desc">Cache of points already made, by index. Never cleared.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-positions" /><code><Link to="/mod/game-api/types/global-i-l/ispawnpositions">{"ISpawnPositions"}</Link>{" Positions { get; }"}</code> | <span className="api-desc">The source of spawn positions.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> | <span className="api-desc">Returns the cached point for an index, or gets it from `Positions` and caches it.</span> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Tries up to three random indexes and returns the first free point the definition accepts, or null. Each try adds to the cache.</span> |
