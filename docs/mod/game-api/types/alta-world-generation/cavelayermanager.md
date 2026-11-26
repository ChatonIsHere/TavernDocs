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
| <Link id="m-ctor" /><code>{"CaveLayerManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biomes" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{"> biomes"}</code> | <span className="api-desc">Generated biomes by layer, built in order by `GetBiome`.</span> |
| <Link id="m-currentlayercount" /><code>{"private int currentLayerCount"}</code> | <span className="api-desc">Number of layers to spawn on start. Saved.</span> |
| <Link id="m-depths" /><code>{"private List<float> depths"}</code> | <span className="api-desc">Depth of each layer's entrance below the manager.</span> |
| <Link id="m-entrancechunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" entranceChunk"}</code> | <span className="api-desc">Overworld chunk the top cave layer connects to.</span> |
| <Link id="m-entrancedirections" /><code>{"private List<Vector2> entranceDirections"}</code> | <span className="api-desc">Direction of each layer's entrance.</span> |
| <Link id="m-entrances" /><code>{"private List<Vector2> entrances"}</code> | <span className="api-desc">Horizontal position of each layer's entrance.</span> |
| <Link id="m-layerprefabs" /><code>{"private List<uint> layerPrefabs"}</code> | <span className="api-desc">Prefab hash used for each layer, recorded as layers are created.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-pregenerated" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/pregeneratedcave">{"PregeneratedCave"}</Link>{" pregenerated"}</code> | <span className="api-desc">Backing field for `Pregenerated`. When set, its seed is used.</span> |
| <Link id="m-requested" /><code>{"private Dictionary<int, TaskCompletionSource<bool>> requested"}</code> | <span className="api-desc">Layers waiting for entrance information, by index.</span> |
| <Link id="m-seed" /><code>{"private int seed"}</code> | <span className="api-desc">Backing field for `Seed`. -1 means not chosen yet.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for `SyncSeed`, sent on connect and after `ClearCaveSystem`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The scene's cave layer manager. Logs an error if a second one wakes.</span> |
| <Link id="m-layers" /><code>{"Dictionary<int, "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{"> Layers { get; }"}</code> | <span className="api-desc">The layers made so far, by layer number (0 is the top).</span> |
| <Link id="m-layersseedhash" /><code><Link to="/mod/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" LayersSeedHash { get; private set; }"}</code> | <span className="api-desc">Hash built from the seed that layers and biomes derive their own seeds from.</span> |
| <Link id="m-pregenerated-2" /><code><Link to="/mod/game-api/types/alta-world-generation/pregeneratedcave">{"PregeneratedCave"}</Link>{" Pregenerated { get; }"}</code> | <span className="api-desc">Optional pregenerated cave asset whose seed is used if set.</span> |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> | <span className="api-desc">The cave seed. -1 until chosen; a random one wipes old cave saves.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcavesystem" /><code>{"async Task ClearCaveSystem()"}</code> | <span className="api-desc">Server: unloads and wipes every layer's save, destroys the layers, picks a new seed and makes layer 0 again. Does not move players.</span> |
| <Link id="m-despawn" /><code>{"void Despawn(int layer)"}</code> | <span className="api-desc">Drops a pending request for a layer that was never made. Does nothing to layers that exist.</span> |
| <Link id="m-getbiome" /><code>{"async Task<"}<Link to="/mod/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{"> GetBiome(int layer)"}</code> | <span className="api-desc">The generated biome for a layer, making the biomes above it first if needed.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the network message that syncs the seed.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: once the entity has a chunk, picks the seed and spawns the saved number of layers.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the seed to a joining player.</span> |
| <Link id="m-requestportalregistering" /><code>{"void RequestPortalRegistering("}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" streamer)"}</code> | <span className="api-desc">Connects a layer's chunk to the layer above (or the entrance chunk for layer 0) and registers its portal.</span> |
| <Link id="m-spawnwithoutgenerating" /><code><Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" SpawnWithoutGenerating(int layer)"}</code> | <span className="api-desc">Returns the layer, making its streamer if it does not exist yet. Does not load or generate it.</span> |
| <Link id="m-waitforentranceinformation" /><code>{"async Task WaitForEntranceInformation(int layer)"}</code> | <span className="api-desc">Waits until the layer's entrance position is known (set when the layer above finds its exit).</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance`, logging an error if one exists, and initializes biome resources.</span> |
| <Link id="m-createlayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" CreateLayer(int layer)"}</code> | <span className="api-desc">Spawns the cave layer prefab for a layer index at its entrance and depth, and connects it to the layer above.</span> |
| <Link id="m-exitready" /><code>{"private void ExitReady(int layer, float depth, Vector2 exit, Vector2 direction)"}</code> | <span className="api-desc">Called when a layer reports its exit; sets that as the entrance of the next layer down.</span> |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> | <span className="api-desc">Server: picks the seed (settings, pregenerated cave or random) and sets the top entrance if none is set.</span> |
| <Link id="m-preparespawn" /><code>{"private void PrepareSpawn("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Server: once the manager is in a chunk, prepares and spawns the saved number of layers.</span> |
| <Link id="m-setentrance" /><code>{"private void SetEntrance(int layer, float depth, Vector2 entrance, Vector2 direction)"}</code> | <span className="api-desc">Records a layer's entrance, direction and depth, and wakes anything waiting on it in `WaitForEntranceInformation`.</span> |
| <Link id="m-syncseed" /><code>{"private void SyncSeed("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the cave seed; clients build `LayersSeedHash` from it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CaveLayerManager`:

<div className="api-used-in">

[`MarchingCubesPlugin.GeneratedMesh.GetOrCreateMesh`](/mod/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh#m-getorcreatemesh), [`CaveLayerStreamer.InitializeCaveLayer`](/mod/game-api/types/alta-world/cavelayerstreamer#m-initializecavelayer), [`CaveLayerStreamer.Manager`](/mod/game-api/types/alta-world/cavelayerstreamer#m-manager), [`ICaveLayer.InitializeCaveLayer`](/mod/game-api/types/alta-world/icavelayer#m-initializecavelayer), [`ICaveLayer.Manager`](/mod/game-api/types/alta-world/icavelayer#m-manager), [`StaticCaveChunk.InitializeCaveLayer`](/mod/game-api/types/alta-world/staticcavechunk#m-initializecavelayer), [`StaticCaveChunk.Manager`](/mod/game-api/types/alta-world/staticcavechunk#m-manager), [`InGameInspector.MineStairsPointer.manager`](/mod/game-api/types/global-i-l/ingameinspector-minestairspointer#m-manager).

</div>
