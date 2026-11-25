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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPopulationFolder`](/game-api/types/alta-world-generation/ipopulationfolder), [`ISavable<BasicPopulationFolderSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<BasicPopulationFolderSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BasicPopulationFolderSaveData`](/game-api/types/alta-world-generation/basicpopulationfoldersavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BasicPopulationFolder()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition"}</code> |
| <Link id="m-density" /><code>{"private float density"}</code> |
| <Link id="m-isecosystem" /><code>{"private bool isEcosystem"}</code> |
| <Link id="m-loadpopulation" /><code>{"private int? loadPopulation"}</code> |
| <Link id="m-loadtime" /><code>{"private TimeSpan? loadTime"}</code> |
| <Link id="m-squaremeters" /><code>{"private float squareMeters"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float AccumulatedTime { get; set; }"}</code> | Seconds of growth time carried over when a spawn check adds no one. Reset to 0 when the population grows. Saved. |
| <Link id="m-definition-2" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; }"}</code> | The population setup to spawn from. |
| <Link id="m-densitymultiplier" /><code>{"float DensityMultiplier { get; }"}</code> | Multiplier on the population density. |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/ipopulationmanager">{"IPopulationManager"}</Link>{" Manager { get; private set; }"}</code> | The population manager built from the spawn data. |
| <Link id="m-pointevaluator" /><code><Link to="/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" PointEvaluator { get; private set; }"}</code> | The component on this object that picks spawn points and normals. |
| <Link id="m-population" /><code><Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; private set; }"}</code> | The live population. |
| <Link id="m-squaremeters-2" /><code>{"float SquareMeters { get; }"}</code> | Area the population covers, for density. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: creates the manager and population, and if it is an ecosystem, joins the chunk's ecosystem when added. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition, float squareMeters, float density, bool isEcosystem)"}</code> | Sets the definition, area, density and ecosystem flag. Used by `ForestPopulationCreator`. |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addtoecosystem" /><code>{"private void AddToEcosystem("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-removefromecosystem" /><code>{"private void RemoveFromEcosystem("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |

</details>
