---
title: "PopulationPath"
description: "Server: a path edge that spawns and keeps a population of creatures along it, using a PopulationSetup picked at generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationPath

A **class** in `Root.Township`, no namespace.

Server: a path edge that spawns and keeps a population of creatures along it, using a `PopulationSetup` picked at generation. Saves its timer and count.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`BasicDynamicPath`](/game-api/types/global-a-b/basicdynamicpath), [`IPopulationFolder`](/game-api/types/alta-world-generation/ipopulationfolder), [`IPointNormalEvaluator`](/game-api/types/alta-world-generation/ipointnormalevaluator), [`ISavable<PopulationPathSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PopulationPathSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PopulationPathSaveData`](/game-api/types/global-p/populationpathsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationPath()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-densitymultiplier" /><code>{"private float densityMultiplier"}</code> | Scales how many creatures the path holds. |
| <Link id="m-loadpopulation" /><code>{"private int? loadPopulation"}</code> | Population count from the save, used once when the path next joins a chunk. |
| <Link id="m-loadtime" /><code>{"private TimeSpan? loadTime"}</code> | Timer value from the save, used once when the path next joins a chunk. |
| <Link id="m-population" /><code>{"private "}<Link to="/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" population"}</code> | Pipeline that picks the `PopulationSetup` at generation. |
| <Link id="m-widthmultiplier" /><code>{"private float widthMultiplier"}</code> | Scales how far from the path's center line spawn points can be (0 to 1.5). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float AccumulatedTime { get; set; }"}</code> | Spawn time built up by the population. Saved. |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; private set; }"}</code> | The population setup in use, chosen from the pipeline on first generation or loaded from the save. |
| <Link id="m-densitymultiplier-2" /><code>{"float DensityMultiplier { get; }"}</code> | Scales how many creatures the path holds. |
| <Link id="m-endradius" /><code>{"float EndRadius { get; }"}</code> | Width of the usable path at its end, after the end node's radius. |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/ipopulationmanager">{"IPopulationManager"}</Link>{" Manager { get; private set; }"}</code> | The population manager for this path. |
| <Link id="m-pointevaluator" /><code><Link to="/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" PointEvaluator { get; }"}</code> | This path, used to pick spawn points. |
| <Link id="m-population-2" /><code><Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; private set; }"}</code> | The population living on this path. |
| <Link id="m-squaremeters" /><code>{"float SquareMeters { get; }"}</code> | Rough area of the path between the two end nodes. |
| <Link id="m-startradius" /><code>{"float StartRadius { get; }"}</code> | Width of the usable path at its start, after the start node's radius. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code><Link to="/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPoint()"}</code> | A random spawn point on the terrain inside the path's area, with the ground normal. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Picks the population setup and starts the population once the entity is in a chunk. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedtochunk" /><code>{"private void AddedToChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | A frame after joining a chunk, adopts existing creatures and either restores the saved timer or starts it and checks for spawns. |
| <Link id="m-removedfromchunk" /><code>{"private void RemovedFromChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Stops the population timer while the path is out of a chunk. |

</details>
