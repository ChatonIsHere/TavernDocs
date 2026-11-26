---
title: "CaveLayerManager"
description: "Owns the cave system: the seed, the layers that exist, each layer's entrance and depth, and their biomes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerManager

A **class** in `Root.Township`, `Alta.Caves`.

Owns the cave system: the seed, the layers that exist, each layer's entrance and depth, and their biomes. A scene singleton (`Instance`); mostly server side, with the seed synced to clients.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveLayerManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveLayerManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CaveLayerManagerSaveData`](/mod/game-api/types/alta-world-generation/cavelayermanagersavedata)
- **Documented in** [Caves](/mod/game-api/world/caves#cavelayermanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biomes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{"> biomes"}</code> | Generated biomes by layer, built in order by `GetBiome`. |
| <Link id="m-currentlayercount" /><code>{"private int currentLayerCount"}</code> | Number of layers to spawn on start. Saved. |
| <Link id="m-depths" /><code>{"private List<float> depths"}</code> | Depth of each layer's entrance below the manager. |
| <Link id="m-entrancechunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" entranceChunk"}</code> | Overworld chunk the top cave layer connects to. |
| <Link id="m-entrancedirections" /><code>{"private List<Vector2> entranceDirections"}</code> | Direction of each layer's entrance. |
| <Link id="m-entrances" /><code>{"private List<Vector2> entrances"}</code> | Horizontal position of each layer's entrance. |
| <Link id="m-layerprefabs" /><code>{"private List<uint> layerPrefabs"}</code> | Prefab hash used for each layer, recorded as layers are created. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-pregenerated" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/pregeneratedcave">{"PregeneratedCave"}</Link>{" pregenerated"}</code> | Backing field for `Pregenerated`. When set, its seed is used. |
| <Link id="m-requested" /><code>{"private Dictionary<int, TaskCompletionSource<bool>> requested"}</code> | Layers waiting for entrance information, by index. |
| <Link id="m-seed" /><code>{"private int seed"}</code> | Backing field for `Seed`. -1 means not chosen yet. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for `SyncSeed`, sent on connect and after `ClearCaveSystem`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Instance { get; private set; }"}</code> | The scene's cave layer manager. Logs an error if a second one wakes. |
| <Link id="m-layers" /><code>{"Dictionary<int, "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{"> Layers { get; }"}</code> | The layers made so far, by layer number (0 is the top). |
| <Link id="m-layersseedhash" /><code><Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" LayersSeedHash { get; private set; }"}</code> | Hash built from the seed that layers and biomes derive their own seeds from. |
| <Link id="m-pregenerated-2" /><code><Link to="/mod/game-api/types/alta-world-generation/pregeneratedcave">{"PregeneratedCave"}</Link>{" Pregenerated { get; }"}</code> | Optional pregenerated cave asset whose seed is used if set. |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> | The cave seed. -1 until chosen; a random one wipes old cave saves. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcavesystem" /><code>{"async Task ClearCaveSystem()"}</code> | Server: unloads and wipes every layer's save, destroys the layers, picks a new seed and makes layer 0 again. Does not move players. |
| <Link id="m-despawn" /><code>{"void Despawn(int layer)"}</code> | Drops a pending request for a layer that was never made. Does nothing to layers that exist. |
| <Link id="m-getbiome" /><code>{"async Task<"}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{"> GetBiome(int layer)"}</code> | The generated biome for a layer, making the biomes above it first if needed. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network message that syncs the seed. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: once the entity has a chunk, picks the seed and spawns the saved number of layers. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the seed to a joining player. |
| <Link id="m-requestportalregistering" /><code>{"void RequestPortalRegistering("}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" streamer)"}</code> | Connects a layer's chunk to the layer above (or the entrance chunk for layer 0) and registers its portal. |
| <Link id="m-spawnwithoutgenerating" /><code><Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" SpawnWithoutGenerating(int layer)"}</code> | Returns the layer, making its streamer if it does not exist yet. Does not load or generate it. |
| <Link id="m-waitforentranceinformation" /><code>{"async Task WaitForEntranceInformation(int layer)"}</code> | Waits until the layer's entrance position is known (set when the layer above finds its exit). |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance`, logging an error if one exists, and initializes biome resources. |
| <Link id="m-createlayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" CreateLayer(int layer)"}</code> | Spawns the cave layer prefab for a layer index at its entrance and depth, and connects it to the layer above. |
| <Link id="m-exitready" /><code>{"private void ExitReady(int layer, float depth, Vector2 exit, Vector2 direction)"}</code> | Called when a layer reports its exit; sets that as the entrance of the next layer down. |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> | Server: picks the seed (settings, pregenerated cave or random) and sets the top entrance if none is set. |
| <Link id="m-preparespawn" /><code>{"private void PrepareSpawn("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Server: once the manager is in a chunk, prepares and spawns the saved number of layers. |
| <Link id="m-setentrance" /><code>{"private void SetEntrance(int layer, float depth, Vector2 entrance, Vector2 direction)"}</code> | Records a layer's entrance, direction and depth, and wakes anything waiting on it in `WaitForEntranceInformation`. |
| <Link id="m-syncseed" /><code>{"private void SyncSeed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the cave seed; clients build `LayersSeedHash` from it. |

</details>

## Used in

Members of other types that take, return or hold a `CaveLayerManager`:

[`MarchingCubesPlugin.GeneratedMesh.GetOrCreateMesh`](/mod/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh#m-getorcreatemesh), [`CaveLayerStreamer.InitializeCaveLayer`](/mod/game-api/types/alta-world/cavelayerstreamer#m-initializecavelayer), [`CaveLayerStreamer.Manager`](/mod/game-api/types/alta-world/cavelayerstreamer#m-manager), [`ICaveLayer.InitializeCaveLayer`](/mod/game-api/types/alta-world/icavelayer#m-initializecavelayer), [`ICaveLayer.Manager`](/mod/game-api/types/alta-world/icavelayer#m-manager), [`StaticCaveChunk.InitializeCaveLayer`](/mod/game-api/types/alta-world/staticcavechunk#m-initializecavelayer), [`StaticCaveChunk.Manager`](/mod/game-api/types/alta-world/staticcavechunk#m-manager), [`InGameInspector.MineStairsPointer.manager`](/mod/game-api/types/global-i-l/ingameinspector-minestairspointer#m-manager).
