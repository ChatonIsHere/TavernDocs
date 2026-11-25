---
title: "CaveLayerManager"
description: "Alta.Caves.CaveLayerManager, a scene NetworkEntityBehaviour. static CaveLayerManager Instance. Mostly server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveLayerManager

A **class** in `Root.Township`, `Alta.Caves`.

`Alta.Caves.CaveLayerManager`, a scene `NetworkEntityBehaviour`. `static CaveLayerManager Instance`. Mostly server.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CaveLayerManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CaveLayerManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CaveLayerManagerSaveData`](/game-api/types/alta-world-generation/cavelayermanagersavedata)
- **Documented in** [Caves](/game-api/world/caves#cavelayermanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveLayerManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-biomes" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{"> biomes"}</code> |  |
| <Link id="m-currentlayercount" /><code>{"private int currentLayerCount"}</code> |  |
| <Link id="m-depths" /><code>{"private List<float> depths"}</code> |  |
| <Link id="m-entrancechunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" entranceChunk"}</code> |  |
| <Link id="m-entrancedirections" /><code>{"private List<Vector2> entranceDirections"}</code> |  |
| <Link id="m-entrances" /><code>{"private List<Vector2> entrances"}</code> |  |
| <Link id="m-layerprefabs" /><code>{"private List<uint> layerPrefabs"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-pregenerated" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/pregeneratedcave">{"PregeneratedCave"}</Link>{" pregenerated"}</code> |  |
| <Link id="m-requested" /><code>{"private Dictionary<int, TaskCompletionSource<bool>> requested"}</code> |  |
| <Link id="m-seed" /><code>{"private int seed"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/cavelayermanager">{"CaveLayerManager"}</Link>{" Instance { get; private set; }"}</code> |  |
| <Link id="m-layers" /><code>{"Dictionary<int, "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{"> Layers { get; }"}</code> |  |
| <Link id="m-layersseedhash" /><code><Link to="/game-api/types/global-e-h/hashfunction">{"HashFunction"}</Link>{" LayersSeedHash { get; private set; }"}</code> |  |
| <Link id="m-pregenerated-2" /><code><Link to="/game-api/types/alta-world-generation/pregeneratedcave">{"PregeneratedCave"}</Link>{" Pregenerated { get; }"}</code> |  |
| <Link id="m-seed-2" /><code>{"int Seed { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearcavesystem" /><code>{"async Task ClearCaveSystem()"}</code> |  |
| <Link id="m-despawn" /><code>{"void Despawn(int layer)"}</code> |  |
| <Link id="m-getbiome" /><code>{"async Task<"}<Link to="/game-api/types/alta-world-generation/generatedbiome">{"GeneratedBiome"}</Link>{"> GetBiome(int layer)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-requestportalregistering" /><code>{"void RequestPortalRegistering("}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" streamer)"}</code> |  |
| <Link id="m-spawnwithoutgenerating" /><code><Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" SpawnWithoutGenerating(int layer)"}</code> |  |
| <Link id="m-waitforentranceinformation" /><code>{"async Task WaitForEntranceInformation(int layer)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-createlayer" /><code>{"private "}<Link to="/game-api/types/alta-world/icavelayer">{"ICaveLayer"}</Link>{" CreateLayer(int layer)"}</code> |  |
| <Link id="m-exitready" /><code>{"private void ExitReady(int layer, float depth, Vector2 exit, Vector2 direction)"}</code> |  |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> |  |
| <Link id="m-preparespawn" /><code>{"private void PrepareSpawn("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-setentrance" /><code>{"private void SetEntrance(int layer, float depth, Vector2 entrance, Vector2 direction)"}</code> |  |
| <Link id="m-syncseed" /><code>{"private void SyncSeed("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CaveLayerManager`:

[`MarchingCubesPlugin.GeneratedMesh.GetOrCreateMesh`](/game-api/types/alta-world-generation/marchingcubesplugin-generatedmesh#m-getorcreatemesh), [`CaveLayerStreamer.InitializeCaveLayer`](/game-api/types/alta-world/cavelayerstreamer#m-initializecavelayer), [`CaveLayerStreamer.Manager`](/game-api/types/alta-world/cavelayerstreamer#m-manager), [`ICaveLayer.InitializeCaveLayer`](/game-api/types/alta-world/icavelayer#m-initializecavelayer), [`ICaveLayer.Manager`](/game-api/types/alta-world/icavelayer#m-manager), [`StaticCaveChunk.InitializeCaveLayer`](/game-api/types/alta-world/staticcavechunk#m-initializecavelayer), [`StaticCaveChunk.Manager`](/game-api/types/alta-world/staticcavechunk#m-manager), [`InGameInspector.MineStairsPointer.manager`](/game-api/types/global-i-l/ingameinspector-minestairspointer#m-manager).
