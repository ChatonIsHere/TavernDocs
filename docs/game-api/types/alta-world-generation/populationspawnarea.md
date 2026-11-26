---
title: "PopulationSpawnArea"
description: "Server: a placed spawner that keeps a population of one definition alive at fixed or generated spawn points, with a starting and maximum count."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSpawnArea

A **class** in `Root.Township`, `Alta.Populations`.

Server: a placed spawner that keeps a population of one definition alive at fixed or generated spawn points, with a starting and maximum count. Also acts as its own spawn system.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationFolder<PopulationSpawnArea, PopulationSpawnAreaSaveData>`](/game-api/types/alta-world-generation/populationfolder-tthis-tdata), [`ISpawnSystem`](/game-api/types/alta-world-generation/ispawnsystem)
- **Derived types** [`PopulationSpawnArea`](/game-api/types/alta-world-generation/populationspawnarea), [`PopulationSpawnAreaSaveData`](/game-api/types/alta-world-generation/populationspawnareasavedata)
- **Documented in** [Populations and spawners](/game-api/world/populations#populationspawnarea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSpawnArea()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arepointsstatic" /><code>{"private bool arePointsStatic"}</code> | When on, picks `numberOfSpawnPoints` fixed points at start. When off, asks the spawn positions for a point each time. |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | Unused location chunk field. |
| <Link id="m-destroyspawnedwiththis" /><code>{"private bool destroySpawnedWithThis"}</code> | Destroys everything the population spawned when this area is destroyed (not on unload). |
| <Link id="m-isoneoff" /><code>{"private bool isOneOff"}</code> | Spawns once when the chunk loads, then destroys the area. Saved. |
| <Link id="m-isspawnpointsinitialized" /><code>{"private bool isSpawnPointsInitialized"}</code> | Whether the static spawn points have been picked. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Class logger. |
| <Link id="m-maxpopulation" /><code>{"private int maxPopulation"}</code> | Most entities alive at once. Halved (rounded up) for creatures on simple servers. Saved. |
| <Link id="m-numberofspawnpoints" /><code>{"private int numberOfSpawnPoints"}</code> | How many static points to pick. Saved. |
| <Link id="m-population" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" population"}</code> | The spawn information (points or simple) handed to the population. |
| <Link id="m-populationdefinition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" populationDefinition"}</code> | Backing field for `PopulationDefinition`. |
| <Link id="m-spawnpoints" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> spawnPoints"}</code> | The static spawn points in use. |
| <Link id="m-spawnpositions" /><code>{"private MonoBehaviour spawnPositions"}</code> | The component that gives spawn positions (an `ISpawnPositions`). |
| <Link id="m-startingpopulation" /><code>{"private int startingPopulation"}</code> | How many to spawn when the population starts. Saved. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isskippingcreatures" /><code>{"static bool IsSkippingCreatures { get; set; }"}</code> | Static. When true, spawn areas for creature populations destroy themselves on start. |
| <Link id="m-populationdefinition-2" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" { get; protected set; }"}</code> | What this area spawns, set in the inspector or with `Setup`. |
| <Link id="m-addtoecosystem" /><code>{"protected override bool AddToEcosystem { get; }"}</code> | False: spawn areas don't join the chunk's ecosystem. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-populations-ispawnsystem-item" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" this[uint populationHash] { get; }"}</code> | Returns this area's spawn information for any hash. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroypopulation" /><code>{"void DestroyPopulation(bool isUnload)"}</code> | Server: destroys the population. Also destroys its spawned entities if set to, unless the area is only unloading. |
| <Link id="m-forcedestroy" /><code>{"void ForceDestroy()"}</code> | Kills everything the population spawned, then destroys the population. |
| <Link id="m-forcemax" /><code>{"void ForceMax()"}</code> | Spawns up to the population's maximum straight away. |
| <Link id="m-forcespawn" /><code>{"void ForceSpawn(int targetPopulation)"}</code> | Spawns up to the given count straight away. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Builds spawn points and the population (halving creature counts on simple servers), then checks spawns once its chunk is loaded. |
| <Link id="m-preview" /><code>{"void Preview()"}</code> | Editor: draws 5000 sample spawn positions as red lines for 10 seconds. |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" populationDefinition, int startingPopulation, int maxPopulation)"}</code> | Server: sets the definition, starting population and maximum. Call before the area initializes. |
| <Link id="m-loadsetup" /><code>{"protected override void LoadSetup("}<Link to="/game-api/types/alta-world-generation/populationspawnareasavedata">{"PopulationSpawnAreaSaveData"}</Link>{" data)"}</code> | Restores spawn point count, starting and max population and the one-off flag from save data. |
| <Link id="m-savesetup" /><code>{"protected override void SaveSetup("}<Link to="/game-api/types/alta-world-generation/populationspawnareasavedata">{"PopulationSpawnAreaSaveData"}</Link>{" data)"}</code> | Writes spawn point count, starting and max population and the one-off flag to save data. |
| <Link id="m-serializesetup" /><code>{"protected override void SerializeSetup("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the same setup values on a stream. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkspawned" /><code>{"private void CheckSpawned("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | When the chunk is fully loaded, runs the population check a couple of frames later. One off areas then destroy themselves. |
| <Link id="m-destroysample" /><code>{"private void DestroySample("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Destroys the population when the entity is destroyed. |
| <Link id="m-initializechunk" /><code>{"private void InitializeChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> | Initializes the population for its chunk if needed and checks spawns once the chunk is fully loaded. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the static spawn points as small blue spheres. |
| <Link id="m-removefromchunk" /><code>{"private void RemoveFromChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Stops listening to the old chunk's `FullyLoaded`. |

</details>
