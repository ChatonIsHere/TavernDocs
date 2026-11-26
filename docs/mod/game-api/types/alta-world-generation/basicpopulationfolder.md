---
title: "BasicPopulationFolder"
description: "Server-side population holder for an area, such as a forest chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulationFolder

A **class** in `Root.Township`, `Alta.Populations`.

Server-side population holder for an area, such as a forest chunk. Spawns from a `PopulationSetup` with density from its area, and can join its chunk's ecosystem.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IPopulationFolder`](/mod/game-api/types/alta-world-generation/ipopulationfolder), [`ISavable<BasicPopulationFolderSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<BasicPopulationFolderSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BasicPopulationFolderSaveData`](/mod/game-api/types/alta-world-generation/basicpopulationfoldersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPopulationFolder()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition"}</code> | <span className="api-desc">The population setup asset. Restored from save data on load.</span> |
| <Link id="m-density" /><code>{"private float density"}</code> | <span className="api-desc">Backing field for `DensityMultiplier`.</span> |
| <Link id="m-isecosystem" /><code>{"private bool isEcosystem"}</code> | <span className="api-desc">If set, the population joins its chunk's ecosystem when the entity is chunked.</span> |
| <Link id="m-loadpopulation" /><code>{"private int? loadPopulation"}</code> | <span className="api-desc">Population count from the save, held until it is applied.</span> |
| <Link id="m-loadtime" /><code>{"private TimeSpan? loadTime"}</code> | <span className="api-desc">Timer value from the save, held until it is applied.</span> |
| <Link id="m-squaremeters" /><code>{"private float squareMeters"}</code> | <span className="api-desc">Backing field for `SquareMeters`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float AccumulatedTime { get; set; }"}</code> | <span className="api-desc">Seconds of growth time carried over when a spawn check adds no one. Reset to 0 when the population grows. Saved.</span> |
| <Link id="m-definition-2" /><code><Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; }"}</code> | <span className="api-desc">The population setup to spawn from.</span> |
| <Link id="m-densitymultiplier" /><code>{"float DensityMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on the population density.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-world-generation/ipopulationmanager">{"IPopulationManager"}</Link>{" Manager { get; private set; }"}</code> | <span className="api-desc">The population manager built from the spawn data.</span> |
| <Link id="m-pointevaluator" /><code><Link to="/mod/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" PointEvaluator { get; private set; }"}</code> | <span className="api-desc">The component on this object that picks spawn points and normals.</span> |
| <Link id="m-population" /><code><Link to="/mod/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; private set; }"}</code> | <span className="api-desc">The live population.</span> |
| <Link id="m-squaremeters-2" /><code>{"float SquareMeters { get; }"}</code> | <span className="api-desc">Area the population covers, for density.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: creates the manager and population, and if it is an ecosystem, joins the chunk's ecosystem when added.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition, float squareMeters, float density, bool isEcosystem)"}</code> | <span className="api-desc">Sets the definition, area, density and ecosystem flag. Used by `ForestPopulationCreator`.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addtoecosystem" /><code>{"private void AddToEcosystem("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Server: when added to a chunk, adds the population to the chunk's ecosystem, then next frame adopts existing members and restores or starts its timer.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the population from its chunk's ecosystem.</span> |
| <Link id="m-removefromecosystem" /><code>{"private void RemoveFromEcosystem("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Stops the population timer and removes it from the chunk's ecosystem.</span> |

</details>
