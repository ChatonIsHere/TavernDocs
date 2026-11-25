---
title: "CavePopulationSpawnInformation"
description: "class CavePopulationSpawnInformation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CavePopulationSpawnInformation

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationSpawnInformation`](/game-api/types/alta-world-generation/populationspawninformation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CavePopulationSpawnInformation("}<Link to="/game-api/types/alta-world-generation/spawnareadisplay">{"SpawnAreaDisplay"}</Link>{" display, "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor)"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-display" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnareadisplay">{"SpawnAreaDisplay"}</Link>{" display"}</code> |
| <Link id="m-dud" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" dud"}</code> |
| <Link id="m-floor" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor"}</code> |
| <Link id="m-layer" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer"}</code> |
| <Link id="m-points" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/mapchunklayer-value">{"MapChunkLayer.Value"}</Link>{"> points"}</code> |
| <Link id="m-rows" /><code>{"private float[][] rows"}</code> |
| <Link id="m-size" /><code>{"private int size"}</code> |
| <Link id="m-totalscore" /><code>{"private float totalScore"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-getpoint" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-raycast" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" Raycast(int x, int z)"}</code> |

</details>
