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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationSpawnInformation`](/mod/game-api/types/alta-world-generation/populationspawninformation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CavePopulationSpawnInformation("}<Link to="/mod/game-api/types/alta-world-generation/spawnareadisplay">{"SpawnAreaDisplay"}</Link>{" display, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer, "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor)"}</code> | <span className="api-desc">Creates a `CavePopulationSpawnInformation` from `display`, `layer` and `floor`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-display" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spawnareadisplay">{"SpawnAreaDisplay"}</Link>{" display"}</code> | <span className="api-desc">The display that turns a layer cell into a spawn point.</span> |
| <Link id="m-dud" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" dud"}</code> | <span className="api-desc">Placeholder point returned by `GetPoint`.</span> |
| <Link id="m-floor" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" floor"}</code> | <span className="api-desc">The floor layer passed to the display.</span> |
| <Link id="m-layer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer">{"MapChunkLayer"}</Link>{" layer"}</code> | <span className="api-desc">The map chunk layer whose values weight the spawn chance.</span> |
| <Link id="m-points" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/mapchunklayer-value">{"MapChunkLayer.Value"}</Link>{"> points"}</code> | <span className="api-desc">Non-zero layer values, used when the layer plugin keeps such a list.</span> |
| <Link id="m-rows" /><code>{"private float[][] rows"}</code> | <span className="api-desc">Running totals of the layer values row by row, used when there is no non-zero list.</span> |
| <Link id="m-size" /><code>{"private int size"}</code> | <span className="api-desc">Layer chunk size in cells.</span> |
| <Link id="m-totalscore" /><code>{"private float totalScore"}</code> | <span className="api-desc">Sum of all weights (each capped at 1 in the row mode).</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetPoint(int pointIndex)"}</code> | <span className="api-desc">Always returns a dummy point; cave spawns have no fixed indexed points.</span> |
| <Link id="m-getrandom" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" GetRandom("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Picks a cell at random, weighted by the layer's values, and spawns a point there through the display.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-raycast" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{" Raycast(int x, int z)"}</code> | <span className="api-desc">Asks the spawn display for a spawn point at a layer cell.</span> |

</details>
