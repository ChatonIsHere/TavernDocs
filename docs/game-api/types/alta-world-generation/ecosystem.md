---
title: "Ecosystem"
description: "Component on a location chunk listing the creature populations that live there."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Ecosystem

A **class** in `Root.Township`, `Alta.Populations`.

Component on a location chunk listing the creature populations that live there. Server: when the chunk loads it spawns a population folder per population, or reloads the saved ones.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISpawnSystem`](/game-api/types/alta-world-generation/ispawnsystem), [`ISavable<EcosystemSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<EcosystemSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`EcosystemSaveData`](/game-api/types/alta-world-generation/ecosystemsavedata)
- **Nested types** [`PopulationApplication`](/game-api/types/alta-world-generation/ecosystem-populationapplication)
- **Attributes** `RequireComponent`
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Ecosystem()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagetimebetweensoundeffects" /><code>{"private float averageTimeBetweenSoundEffects"}</code> | Serialized value, defaults to 10. Not read anywhere in the server build. |
| <Link id="m-definitions" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/ecosystem-populationapplication">{"Ecosystem.PopulationApplication"}</Link>{"[] definitions"}</code> | The populations this ecosystem spawns, with their size limits. |
| <Link id="m-definitionsmap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world-generation/ecosystem-populationapplication">{"Ecosystem.PopulationApplication"}</Link>{"> definitionsMap"}</code> | Private: `definitions` by population hash, built in `InitializeAsServer`. |
| <Link id="m-populationfolderprefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" populationFolderPrefab"}</code> | Prefab spawned to hold each population's members. |
| <Link id="m-populations" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{"> populations"}</code> | Private: the population folders currently in this chunk. |
| <Link id="m-spawninformationmap" /><code>{"private Dictionary<uint, "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{"> spawnInformationMap"}</code> | Private: spawn points or areas per population hash, set by `SetPoints` and `SetPopulationValue`. |
| <Link id="m-streamer" /><code>{"private "}<Link to="/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer"}</code> | Private: the `CaveLayerStreamer` on this object, if any, used to read the generated biome. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | The `LocationChunk` it is on. |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> | True after server initialization. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-populations-ispawnsystem-item" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" this[uint populationHash] { get; }"}</code> | Indexer: the spawn information stored for a population hash, or null. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpopulation" /><code>{"void AddPopulation("}<Link to="/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" folder)"}</code> | Adds a population folder to this chunk's list. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: maps its populations and hooks the chunk's load and unload. |
| <Link id="m-setpoints" /><code>{"void SetPoints(List<"}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> spawnPoints, uint populationHash)"}</code> | Sets the spawn points for a population, if none are set yet. |
| <Link id="m-setpopulationvalue" /><code>{"void SetPopulationValue(uint populationHash, "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" value)"}</code> | Sets the spawn information for a population, if none is set yet. |
| <Link id="m-trygetpopulationvalue" /><code>{"bool TryGetPopulationValue(uint populationHash, out "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" value)"}</code> | Gets a population's spawn information. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Caches the `LocationChunk` on the same object. |
| <Link id="m-chunkinitializepopulations" /><code>{"private void ChunkInitializePopulations("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Private: when the chunk fully loads, spawns a population folder per definition if none exist, otherwise re-initializes the existing ones. |
| <Link id="m-cleanspawnpoints" /><code>{"private void CleanSpawnPoints("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Private: clears all spawn information when the chunk fully unloads. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Empty in this build. |
| <Link id="m-unloadpopulations" /><code>{"private void UnloadPopulations("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Private: destroys every population when the chunk fully unloads. |

</details>

## Used in

Members of other types that take, return or hold a `Ecosystem`:

[`CaveLayerStreamer.ecosystem`](/game-api/types/alta-world/cavelayerstreamer#m-ecosystem), [`CaveLayerStreamer.Ecosystem`](/game-api/types/alta-world/cavelayerstreamer#m-ecosystem-2), [`Ecosystem.PopulationApplication.InitializeSample`](/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample).
