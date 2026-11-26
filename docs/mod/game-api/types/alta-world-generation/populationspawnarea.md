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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationFolder<PopulationSpawnArea, PopulationSpawnAreaSaveData>`](/mod/game-api/types/alta-world-generation/populationfolder-tthis-tdata), [`ISpawnSystem`](/mod/game-api/types/alta-world-generation/ispawnsystem)
- **Derived types** [`PopulationSpawnArea`](/mod/game-api/types/alta-world-generation/populationspawnarea), [`PopulationSpawnAreaSaveData`](/mod/game-api/types/alta-world-generation/populationspawnareasavedata)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations#populationspawnarea)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSpawnArea()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arepointsstatic" /><code>{"private bool arePointsStatic"}</code> | <span className="api-desc">When on, picks `numberOfSpawnPoints` fixed points at start. When off, asks the spawn positions for a point each time.</span> |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | <span className="api-desc">Unused location chunk field.</span> |
| <Link id="m-destroyspawnedwiththis" /><code>{"private bool destroySpawnedWithThis"}</code> | <span className="api-desc">Destroys everything the population spawned when this area is destroyed (not on unload).</span> |
| <Link id="m-isoneoff" /><code>{"private bool isOneOff"}</code> | <span className="api-desc">Spawns once when the chunk loads, then destroys the area. Saved.</span> |
| <Link id="m-isspawnpointsinitialized" /><code>{"private bool isSpawnPointsInitialized"}</code> | <span className="api-desc">Whether the static spawn points have been picked.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger.</span> |
| <Link id="m-maxpopulation" /><code>{"private int maxPopulation"}</code> | <span className="api-desc">Most entities alive at once. Halved (rounded up) for creatures on simple servers. Saved.</span> |
| <Link id="m-numberofspawnpoints" /><code>{"private int numberOfSpawnPoints"}</code> | <span className="api-desc">How many static points to pick. Saved.</span> |
| <Link id="m-population" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" population"}</code> | <span className="api-desc">The spawn information (points or simple) handed to the population.</span> |
| <Link id="m-populationdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" populationDefinition"}</code> | <span className="api-desc">Backing field for `PopulationDefinition`.</span> |
| <Link id="m-spawnpoints" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/spawnpoint">{"SpawnPoint"}</Link>{"> spawnPoints"}</code> | <span className="api-desc">The static spawn points in use.</span> |
| <Link id="m-spawnpositions" /><code>{"private MonoBehaviour spawnPositions"}</code> | <span className="api-desc">The component that gives spawn positions (an `ISpawnPositions`).</span> |
| <Link id="m-startingpopulation" /><code>{"private int startingPopulation"}</code> | <span className="api-desc">How many to spawn when the population starts. Saved.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isskippingcreatures" /><code>{"static bool IsSkippingCreatures { get; set; }"}</code> | <span className="api-desc">Static. When true, spawn areas for creature populations destroy themselves on start.</span> |
| <Link id="m-populationdefinition-2" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" { get; protected set; }"}</code> | <span className="api-desc">What this area spawns, set in the inspector or with `Setup`.</span> |
| <Link id="m-addtoecosystem" /><code>{"protected override bool AddToEcosystem { get; }"}</code> | <span className="api-desc">False: spawn areas don't join the chunk's ecosystem.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-populations-ispawnsystem-item" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/populationspawninformation">{"PopulationSpawnInformation"}</Link>{" this[uint populationHash] { get; }"}</code> | <span className="api-desc">Returns this area's spawn information for any hash.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroypopulation" /><code>{"void DestroyPopulation(bool isUnload)"}</code> | <span className="api-desc">Server: destroys the population. Also destroys its spawned entities if set to, unless the area is only unloading.</span> |
| <Link id="m-forcedestroy" /><code>{"void ForceDestroy()"}</code> | <span className="api-desc">Kills everything the population spawned, then destroys the population.</span> |
| <Link id="m-forcemax" /><code>{"void ForceMax()"}</code> | <span className="api-desc">Spawns up to the population's maximum straight away.</span> |
| <Link id="m-forcespawn" /><code>{"void ForceSpawn(int targetPopulation)"}</code> | <span className="api-desc">Spawns up to the given count straight away.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Builds spawn points and the population (halving creature counts on simple servers), then checks spawns once its chunk is loaded.</span> |
| <Link id="m-preview" /><code>{"void Preview()"}</code> | <span className="api-desc">Editor: draws 5000 sample spawn positions as red lines for 10 seconds.</span> |
| <Link id="m-setup" /><code>{"void Setup("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" populationDefinition, int startingPopulation, int maxPopulation)"}</code> | <span className="api-desc">Server: sets the definition, starting population and maximum. Call before the area initializes.</span> |
| <Link id="m-loadsetup" /><code>{"protected override void LoadSetup("}<Link to="/mod/game-api/types/alta-world-generation/populationspawnareasavedata">{"PopulationSpawnAreaSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Restores spawn point count, starting and max population and the one-off flag from save data.</span> |
| <Link id="m-savesetup" /><code>{"protected override void SaveSetup("}<Link to="/mod/game-api/types/alta-world-generation/populationspawnareasavedata">{"PopulationSpawnAreaSaveData"}</Link>{" data)"}</code> | <span className="api-desc">Writes spawn point count, starting and max population and the one-off flag to save data.</span> |
| <Link id="m-serializesetup" /><code>{"protected override void SerializeSetup("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the same setup values on a stream.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkspawned" /><code>{"private void CheckSpawned("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">When the chunk is fully loaded, runs the population check a couple of frames later. One off areas then destroy themselves.</span> |
| <Link id="m-destroysample" /><code>{"private void DestroySample("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Destroys the population when the entity is destroyed.</span> |
| <Link id="m-initializechunk" /><code>{"private void InitializeChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" newChunk)"}</code> | <span className="api-desc">Initializes the population for its chunk if needed and checks spawns once the chunk is fully loaded.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the static spawn points as small blue spheres.</span> |
| <Link id="m-removefromchunk" /><code>{"private void RemoveFromChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Stops listening to the old chunk's `FullyLoaded`.</span> |

</details>
