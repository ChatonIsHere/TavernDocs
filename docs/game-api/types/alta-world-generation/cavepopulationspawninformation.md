---
title: "CavePopulationSpawnInformation"
description: "Spawn information for cave populations: picks random spawn spots weighted by a map chunk layer's values, then places them through a SpawnAreaDisplay."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CavePopulationSpawnInformation

A **class** in `Root.Township`, `Alta.Populations`.

Spawn information for cave populations: picks random spawn spots weighted by a map chunk layer's values, then places them through a `SpawnAreaDisplay`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationSpawnInformation`](/game-api/types/alta-world-generation/populationspawninformation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CavePopulationSpawnInformation("}<Link to="/game-api/types/alta-world-generation/spawnareadisplay">{"SpawnAreaDisplay"}</Link>{" display, "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor)"}</code> | Creates a `CavePopulationSpawnInformation` from `display`, `layer` and `floor`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-display" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnareadisplay">{"SpawnAreaDisplay"}</Link>{" display"}</code> | The display that turns a layer cell into a spawn point. |
| <Link id="m-dud" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" dud"}</code> | Placeholder point returned by `GetPoint`. |
| <Link id="m-floor" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor"}</code> | The floor layer passed to the display. |
| <Link id="m-layer" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer"}</code> | The map chunk layer whose values weight the spawn chance. |
| <Link id="m-points" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/mapchunklayer-value">{"MapChunkLayer.Value"}</Link>{"> points"}</code> | Non-zero layer values, used when the layer plugin keeps such a list. |
| <Link id="m-rows" /><code>{"private float[][] rows"}</code> | Running totals of the layer values row by row, used when there is no non-zero list. |
| <Link id="m-size" /><code>{"private int size"}</code> | Layer chunk size in cells. |
| <Link id="m-totalscore" /><code>{"private float totalScore"}</code> | Sum of all weights (each capped at 1 in the row mode). |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> | Always returns a dummy point; cave spawns have no fixed indexed points. |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | Picks a cell at random, weighted by the layer's values, and spawns a point there through the display. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-raycast" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" Raycast(int x, int z)"}</code> | Asks the spawn display for a spawn point at a layer cell. |

</details>
