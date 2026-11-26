---
title: "PopulationPath"
description: "Server: a path edge that spawns and keeps a population of creatures along it, using a PopulationSetup picked at generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationPath

A **class** in `Root.Township`, the global namespace.

Server: a path edge that spawns and keeps a population of creatures along it, using a `PopulationSetup` picked at generation. Saves its timer and count.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`BasicDynamicPath`](/mod/game-api/types/global-a-b/basicdynamicpath), [`IPopulationFolder`](/mod/game-api/types/alta-world-generation/ipopulationfolder), [`IPointNormalEvaluator`](/mod/game-api/types/alta-world-generation/ipointnormalevaluator), [`ISavable<PopulationPathSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PopulationPathSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PopulationPathSaveData`](/mod/game-api/types/global-p/populationpathsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationPath()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-densitymultiplier" /><code>{"private float densityMultiplier"}</code> | <span className="api-desc">Scales how many creatures the path holds.</span> |
| <Link id="m-loadpopulation" /><code>{"private int? loadPopulation"}</code> | <span className="api-desc">Population count from the save, used once when the path next joins a chunk.</span> |
| <Link id="m-loadtime" /><code>{"private TimeSpan? loadTime"}</code> | <span className="api-desc">Timer value from the save, used once when the path next joins a chunk.</span> |
| <Link id="m-population" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/objectpipeline">{"ObjectPipeline"}</Link>{" population"}</code> | <span className="api-desc">Pipeline that picks the `PopulationSetup` at generation.</span> |
| <Link id="m-widthmultiplier" /><code>{"private float widthMultiplier"}</code> | <span className="api-desc">Scales how far from the path's center line spawn points can be (0 to 1.5).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float AccumulatedTime { get; set; }"}</code> | <span className="api-desc">Spawn time built up by the population. Saved.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; private set; }"}</code> | <span className="api-desc">The population setup in use, chosen from the pipeline on first generation or loaded from the save.</span> |
| <Link id="m-densitymultiplier-2" /><code>{"float DensityMultiplier { get; }"}</code> | <span className="api-desc">Scales how many creatures the path holds.</span> |
| <Link id="m-endradius" /><code>{"float EndRadius { get; }"}</code> | <span className="api-desc">Width of the usable path at its end, after the end node's radius.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-world-generation/ipopulationmanager">{"IPopulationManager"}</Link>{" Manager { get; private set; }"}</code> | <span className="api-desc">The population manager for this path.</span> |
| <Link id="m-pointevaluator" /><code><Link to="/mod/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" PointEvaluator { get; }"}</code> | <span className="api-desc">This path, used to pick spawn points.</span> |
| <Link id="m-population-2" /><code><Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; private set; }"}</code> | <span className="api-desc">The population living on this path.</span> |
| <Link id="m-squaremeters" /><code>{"float SquareMeters { get; }"}</code> | <span className="api-desc">Rough area of the path between the two end nodes.</span> |
| <Link id="m-startradius" /><code>{"float StartRadius { get; }"}</code> | <span className="api-desc">Width of the usable path at its start, after the start node's radius.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getpoint" /><code><Link to="/mod/game-api/types/alta-world-generation/pointnormal">{"PointNormal"}</Link>{"? GetPoint()"}</code> | <span className="api-desc">A random spawn point on the terrain inside the path's area, with the ground normal.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Picks the population setup and starts the population once the entity is in a chunk.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addedtochunk" /><code>{"private void AddedToChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">A frame after joining a chunk, adopts existing creatures and either restores the saved timer or starts it and checks for spawns.</span> |
| <Link id="m-removedfromchunk" /><code>{"private void RemovedFromChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Stops the population timer while the path is out of a chunk.</span> |

</details>
