---
title: "SimplePopulationValue"
description: "class SimplePopulationValue in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SimplePopulationValue

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationSpawnInformation`](/game-api/types/alta-world-generation/populationspawninformation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SimplePopulationValue("}<Link to="/game-api/types/global-i-l/ispawnpositions">{"ISpawnPositions"}</Link>{" positions, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-tracked" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> tracked"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-positions" /><code><Link to="/game-api/types/global-i-l/ispawnpositions">{"ISpawnPositions"}</Link>{" Positions { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getpoint" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> |
