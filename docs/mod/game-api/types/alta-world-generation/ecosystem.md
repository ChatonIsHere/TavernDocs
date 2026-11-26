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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISpawnSystem`](/mod/game-api/types/alta-world-generation/ispawnsystem), [`ISavable<EcosystemSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<EcosystemSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`EcosystemSaveData`](/mod/game-api/types/alta-world-generation/ecosystemsavedata)
- **Nested types** [`PopulationApplication`](/mod/game-api/types/alta-world-generation/ecosystem-populationapplication)
- **Attributes** `RequireComponent`
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Ecosystem()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-averagetimebetweensoundeffects" /><code>{"private float averageTimeBetweenSoundEffects"}</code> | <span className="api-desc">Serialized value, defaults to 10. Not read anywhere in the server build.</span> |
| <Link id="m-definitions" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/ecosystem-populationapplication">{"Ecosystem.PopulationApplication"}</Link>{"[] definitions"}</code> | <span className="api-desc">The populations this ecosystem spawns, with their size limits.</span> |
| <Link id="m-definitionsmap" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world-generation/ecosystem-populationapplication">{"Ecosystem.PopulationApplication"}</Link>{"> definitionsMap"}</code> | <span className="api-desc">Private: `definitions` by population hash, built in `InitializeAsServer`.</span> |
| <Link id="m-populationfolderprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" populationFolderPrefab"}</code> | <span className="api-desc">Prefab spawned to hold each population's members.</span> |
| <Link id="m-populations" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{"> populations"}</code> | <span className="api-desc">Private: the population folders currently in this chunk.</span> |
| <Link id="m-spawninformationmap" /><code>{"private Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{"> spawnInformationMap"}</code> | <span className="api-desc">Private: spawn points or areas per population hash, set by `SetPoints` and `SetPopulationValue`.</span> |
| <Link id="m-streamer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/cavelayerstreamer">{"CaveLayerStreamer"}</Link>{" streamer"}</code> | <span className="api-desc">Private: the `CaveLayerStreamer` on this object, if any, used to read the generated biome.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | <span className="api-desc">The `LocationChunk` it is on.</span> |
| <Link id="m-isinitialized" /><code>{"bool IsInitialized { get; private set; }"}</code> | <span className="api-desc">True after server initialization.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-populations-ispawnsystem-item" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" this[uint populationHash] { get; }"}</code> | <span className="api-desc">Indexer: the spawn information stored for a population hash, or null.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addpopulation" /><code>{"void AddPopulation("}<Link to="/mod/game-api/types/alta-world-generation/populationfolderbase">{"PopulationFolderBase"}</Link>{" folder)"}</code> | <span className="api-desc">Adds a population folder to this chunk's list.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: maps its populations and hooks the chunk's load and unload.</span> |
| <Link id="m-setpoints" /><code>{"void SetPoints(List<"}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> spawnPoints, uint populationHash)"}</code> | <span className="api-desc">Sets the spawn points for a population, if none are set yet.</span> |
| <Link id="m-setpopulationvalue" /><code>{"void SetPopulationValue(uint populationHash, "}<Link to="/mod/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" value)"}</code> | <span className="api-desc">Sets the spawn information for a population, if none is set yet.</span> |
| <Link id="m-trygetpopulationvalue" /><code>{"bool TryGetPopulationValue(uint populationHash, out "}<Link to="/mod/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" value)"}</code> | <span className="api-desc">Gets a population's spawn information.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the `LocationChunk` on the same object.</span> |
| <Link id="m-chunkinitializepopulations" /><code>{"private void ChunkInitializePopulations("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Private: when the chunk fully loads, spawns a population folder per definition if none exist, otherwise re-initializes the existing ones.</span> |
| <Link id="m-cleanspawnpoints" /><code>{"private void CleanSpawnPoints("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Private: clears all spawn information when the chunk fully unloads.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-unloadpopulations" /><code>{"private void UnloadPopulations("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Private: destroys every population when the chunk fully unloads.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Ecosystem`:

<div className="api-used-in">

[`CaveLayerStreamer.ecosystem`](/mod/game-api/types/alta-world/cavelayerstreamer#m-ecosystem), [`CaveLayerStreamer.Ecosystem`](/mod/game-api/types/alta-world/cavelayerstreamer#m-ecosystem-2), [`Ecosystem.PopulationApplication.InitializeSample`](/mod/game-api/types/alta-world-generation/ecosystem-populationapplication#m-initializesample).

</div>
