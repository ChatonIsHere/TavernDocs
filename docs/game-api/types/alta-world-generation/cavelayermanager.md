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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveLayerManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveLayerManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CaveLayerManagerSaveData`](/game-api/types/alta-world-generation/cavelayermanagersavedata)
- **Documented in** [Caves](/game-api/world/caves#cavelayermanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CaveLayerManager()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-biomes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{"> biomes"}</code> |
| <Link id="m-currentlayercount" /><code>{"private int currentLayerCount"}</code> |
| <Link id="m-depths" /><code>{"private List<float> depths"}</code> |
| <Link id="m-entrancechunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" entranceChunk"}</code> |
| <Link id="m-entrancedirections" /><code>{"private List<Vector2> entranceDirections"}</code> |
| <Link id="m-entrances" /><code>{"private List<Vector2> entrances"}</code> |
| <Link id="m-layerprefabs" /><code>{"private List<uint> layerPrefabs"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-pregenerated" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/pregeneratedcave">{"PregeneratedCave"}</Link>{" pregenerated"}</code> |
| <Link id="m-requested" /><code>{"private Dictionary<int, TaskCompletionSource<bool>> requested"}</code> |
| <Link id="m-seed" /><code>{"private int seed"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Instance { get; private set; }"}</code> | The scene's cave layer manager. Logs an error if a second one wakes. |
| <Link id="m-layers" /><code>{"Dictionary<int, "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{"> Layers { get; }"}</code> | The layers made so far, by layer number (0 is the top). |
| <Link id="m-layersseedhash" /><code><Link to="/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" LayersSeedHash { get; private set; }"}</code> | Hash built from the seed that layers and biomes derive their own seeds from. |
| <Link id="m-pregenerated-2" /><code><Link to="/game-api/types/alta-world-generation/pregeneratedcave">{"PregeneratedCave"}</Link>{" Pregenerated { get; }"}</code> | Optional pregenerated cave asset whose seed is used if set. |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> | The cave seed. -1 until chosen; a random one wipes old cave saves. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcavesystem" /><code>{"async Task ClearCaveSystem()"}</code> | Server: unloads and wipes every layer's save, destroys the layers, picks a new seed and makes layer 0 again. Does not move players. |
| <Link id="m-despawn" /><code>{"void Despawn(int layer)"}</code> | Drops a pending request for a layer that was never made. Does nothing to layers that exist. |
| <Link id="m-getbiome" /><code>{"async Task<"}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{"> GetBiome(int layer)"}</code> | The generated biome for a layer, making the biomes above it first if needed. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the network message that syncs the seed. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: once the entity has a chunk, picks the seed and spawns the saved number of layers. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the seed to a joining player. |
| <Link id="m-requestportalregistering" /><code>{"void RequestPortalRegistering("}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" streamer)"}</code> | Connects a layer's chunk to the layer above (or the entrance chunk for layer 0) and registers its portal. |
| <Link id="m-spawnwithoutgenerating" /><code><Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" SpawnWithoutGenerating(int layer)"}</code> | Returns the layer, making its streamer if it does not exist yet. Does not load or generate it. |
| <Link id="m-waitforentranceinformation" /><code>{"async Task WaitForEntranceInformation(int layer)"}</code> | Waits until the layer's entrance position is known (set when the layer above finds its exit). |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-createlayer" /><code>{"private "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" CreateLayer(int layer)"}</code> |
| <Link id="m-exitready" /><code>{"private void ExitReady(int layer, float depth, Vector2 exit, Vector2 direction)"}</code> |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> |
| <Link id="m-preparespawn" /><code>{"private void PrepareSpawn("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-setentrance" /><code>{"private void SetEntrance(int layer, float depth, Vector2 entrance, Vector2 direction)"}</code> |
| <Link id="m-syncseed" /><code>{"private void SyncSeed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CaveLayerManager`:

[`MarchingCubesPlugin.GeneratedMesh.GetOrCreateMesh`](/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh#m-getorcreatemesh), [`CaveLayerStreamer.InitializeCaveLayer`](/game-api/types/alta-world/cavelayerstreamer#m-initializecavelayer), [`CaveLayerStreamer.Manager`](/game-api/types/alta-world/cavelayerstreamer#m-manager), [`ICaveLayer.InitializeCaveLayer`](/game-api/types/alta-world/icavelayer#m-initializecavelayer), [`ICaveLayer.Manager`](/game-api/types/alta-world/icavelayer#m-manager), [`StaticCaveChunk.InitializeCaveLayer`](/game-api/types/alta-world/staticcavechunk#m-initializecavelayer), [`StaticCaveChunk.Manager`](/game-api/types/alta-world/staticcavechunk#m-manager), [`InGameInspector.MineStairsPointer.manager`](/game-api/types/global-i-l/ingameinspector-minestairspointer#m-manager).
