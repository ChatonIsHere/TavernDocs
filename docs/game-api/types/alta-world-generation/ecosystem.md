---
title: "Ecosystem"
description: "A chunk's (or cave layer's) set of populations, with spawn points worked out from the ground."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Ecosystem

A **class** in `Root.Township`, `Alta.Populations`.

A chunk's (or cave layer's) set of populations, with spawn points worked out from the ground.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISpawnSystem`](/game-api/types/alta-world-generation/ispawnsystem), [`ISavable<EcosystemSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<EcosystemSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`EcosystemSaveData`](/game-api/types/alta-world-generation/ecosystemsavedata)
- **Nested types** [`PopulationApplication`](/game-api/types/alta-world-generation/ecosystem-populationapplication)
- **Attributes** `RequireComponent`
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Ecosystem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-averagetimebetweensoundeffects" /><code>{"private float averageTimeBetweenSoundEffects"}</code> |  |
| <Link id="m-definitions" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ecosystem-populationapplication">{"Ecosystem.PopulationApplication"}</Link>{"[] definitions"}</code> |  |
| <Link id="m-definitionsmap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world-generation/ecosystem-populationapplication">{"Ecosystem.PopulationApplication"}</Link>{"> definitionsMap"}</code> |  |
| <Link id="m-populationfolderprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" populationFolderPrefab"}</code> |  |
| <Link id="m-populations" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{"> populations"}</code> |  |
| <Link id="m-spawninformationmap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{"> spawnInformationMap"}</code> |  |
| <Link id="m-streamer" /><code>{"private "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> |  |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> |  |
| <Link id="m-alta-populations-ispawnsystem-item" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" this[uint populationHash] { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpopulation" /><code>{"void AddPopulation("}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" folder)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-setpoints" /><code>{"void SetPoints(List<"}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> spawnPoints, uint populationHash)"}</code> |  |
| <Link id="m-setpopulationvalue" /><code>{"void SetPopulationValue(uint populationHash, "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" value)"}</code> |  |
| <Link id="m-trygetpopulationvalue" /><code>{"bool TryGetPopulationValue(uint populationHash, out "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" value)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-chunkinitializepopulations" /><code>{"private void ChunkInitializePopulations("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-cleanspawnpoints" /><code>{"private void CleanSpawnPoints("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-unloadpopulations" /><code>{"private void UnloadPopulations("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Ecosystem`:

[`CaveLayerStreamer.ecosystem`](/game-api/types/alta-world/cavelayerstreamer#m-ecosystem), [`CaveLayerStreamer.Ecosystem`](/game-api/types/alta-world/cavelayerstreamer#m-ecosystem-2), [`Ecosystem.PopulationApplication.InitializeSample`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample).
