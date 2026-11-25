---
title: "PopulationSpawnArea"
description: "Alta.Populations.PopulationSpawnArea, a PopulationFolder entity behaviour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSpawnArea

A **class** in `Root.Township`, `Alta.Populations`.

`Alta.Populations.PopulationSpawnArea`, a `PopulationFolder` entity behaviour.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationFolder<PopulationSpawnArea, PopulationSpawnAreaSaveData>`](/game-api/types/alta-world-generation/populationfolder-tthis-tdata), [`ISpawnSystem`](/game-api/types/alta-world-generation/ispawnsystem)
- **Derived types** [`PopulationSpawnArea`](/game-api/types/alta-world-generation/populationspawnarea), [`PopulationSpawnAreaSaveData`](/game-api/types/alta-world-generation/populationspawnareasavedata)
- **Documented in** [Populations and spawners](/game-api/world/populations#populationspawnarea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSpawnArea()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arepointsstatic" /><code>{"private bool arePointsStatic"}</code> |  |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-destroyspawnedwiththis" /><code>{"private bool destroySpawnedWithThis"}</code> |  |
| <Link id="m-isoneoff" /><code>{"private bool isOneOff"}</code> |  |
| <Link id="m-isspawnpointsinitialized" /><code>{"private bool isSpawnPointsInitialized"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-maxpopulation" /><code>{"private int maxPopulation"}</code> |  |
| <Link id="m-numberofspawnpoints" /><code>{"private int numberOfSpawnPoints"}</code> |  |
| <Link id="m-population" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" population"}</code> |  |
| <Link id="m-populationdefinition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" populationDefinition"}</code> |  |
| <Link id="m-spawnpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> spawnPoints"}</code> |  |
| <Link id="m-spawnpositions" /><code>{"private MonoBehaviour spawnPositions"}</code> |  |
| <Link id="m-startingpopulation" /><code>{"private int startingPopulation"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isskippingcreatures" /><code>{"static bool IsSkippingCreatures { get; set; }"}</code> |  |
| <Link id="m-populationdefinition-2" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" { get; protected set; }"}</code> |  |
| <Link id="m-addtoecosystem" /><code>{"protected override bool AddToEcosystem { get; }"}</code> |  |
| <Link id="m-alta-populations-ispawnsystem-item" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" this[uint populationHash] { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroypopulation" /><code>{"void DestroyPopulation(bool isUnload)"}</code> |  |
| <Link id="m-forcedestroy" /><code>{"void ForceDestroy()"}</code> |  |
| <Link id="m-forcemax" /><code>{"void ForceMax()"}</code> |  |
| <Link id="m-forcespawn" /><code>{"void ForceSpawn(int targetPopulation)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-preview" /><code>{"void Preview()"}</code> |  |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" populationDefinition, int startingPopulation, int maxPopulation)"}</code> |  |
| <Link id="m-checkspawned" /><code>{"private void CheckSpawned("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-destroysample" /><code>{"private void DestroySample("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-initializechunk" /><code>{"private void InitializeChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> |  |
| <Link id="m-loadsetup" /><code>{"protected override void LoadSetup("}<Link to="/game-api/types/alta-world-generation/populationspawnareasavedata">{"PopulationSpawnAreaSaveData"}</Link>{" data)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-removefromchunk" /><code>{"private void RemoveFromChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-savesetup" /><code>{"protected override void SaveSetup("}<Link to="/game-api/types/alta-world-generation/populationspawnareasavedata">{"PopulationSpawnAreaSaveData"}</Link>{" data)"}</code> |  |
| <Link id="m-serializesetup" /><code>{"protected override void SerializeSetup("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
