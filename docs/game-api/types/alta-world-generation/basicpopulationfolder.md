---
title: "BasicPopulationFolder"
description: "class BasicPopulationFolder in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BasicPopulationFolder

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IPopulationFolder`](/game-api/types/alta-world-generation/ipopulationfolder), [`ISavable<BasicPopulationFolderSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<BasicPopulationFolderSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`BasicPopulationFolderSaveData`](/game-api/types/alta-world-generation/basicpopulationfoldersavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BasicPopulationFolder()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition"}</code> |  |
| <Link id="m-density" /><code>{"private float density"}</code> |  |
| <Link id="m-isecosystem" /><code>{"private bool isEcosystem"}</code> |  |
| <Link id="m-loadpopulation" /><code>{"private int? loadPopulation"}</code> |  |
| <Link id="m-loadtime" /><code>{"private TimeSpan? loadTime"}</code> |  |
| <Link id="m-squaremeters" /><code>{"private float squareMeters"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-accumulatedtime" /><code>{"float AccumulatedTime { get; set; }"}</code> |  |
| <Link id="m-definition-2" /><code><Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" Definition { get; }"}</code> |  |
| <Link id="m-densitymultiplier" /><code>{"float DensityMultiplier { get; }"}</code> |  |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-world-generation/ipopulationmanager">{"IPopulationManager"}</Link>{" Manager { get; private set; }"}</code> |  |
| <Link id="m-pointevaluator" /><code><Link to="/game-api/types/alta-world-generation/ipointnormalevaluator">{"IPointNormalEvaluator"}</Link>{" PointEvaluator { get; private set; }"}</code> |  |
| <Link id="m-population" /><code><Link to="/game-api/types/alta-world-generation/basicpopulation">{"BasicPopulation"}</Link>{" Population { get; private set; }"}</code> |  |
| <Link id="m-squaremeters-2" /><code>{"float SquareMeters { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-world-generation/populationsetup">{"PopulationSetup"}</Link>{" definition, float squareMeters, float density, bool isEcosystem)"}</code> |  |
| <Link id="m-addtoecosystem" /><code>{"private void AddToEcosystem("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-removefromecosystem" /><code>{"private void RemoveFromEcosystem("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
