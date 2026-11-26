---
title: "Chunk"
description: "A piece of the world that loads, unloads and saves as a unit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chunk

A **class** in `Root.Township`, `Alta.Chunks`.

A piece of the world that loads, unloads and saves as a unit. Every entity sits in one chunk. The server loads a chunk while players are near it (or it is force loaded) and streams its entities to them. Look one up with `ChunksByIdentifier` or `ChunksByIndex`; `LocationChunk` is the subclass for places in the world.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`LocationChunk`](/game-api/types/alta-world/locationchunk)
- **Attributes** `TypeConverter`
- **Documented in** [Chunks](/game-api/world/chunks#chunk), [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Chunk()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bitstoserialize" /><code>{"const int BitsToSerialize"}</code> | Number of bits used to send a chunk index (13, so up to 8192 chunks). |
| <Link id="m-overworldchunktag" /><code>{"const string OverworldChunkTag"}</code> | The tag string `Overworld Chunk`. |

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autosyncs" /><code>{"private bool autoSyncs"}</code> | Whether the chunk syncs its entities to players without them being in it. Always true for global chunks; read through `AutoSyncs`. |
| <Link id="m-chunkidentifier" /><code>{"private string chunkIdentifier"}</code> | Backing field for `ChunkIdentifier`; defaults to the object name in the editor. |
| <Link id="m-isforceloaded" /><code>{"private bool isForceLoaded"}</code> | Backing field for `IsForceLoaded`. |
| <Link id="m-isforceunloaded" /><code>{"private bool isForceUnloaded"}</code> | When set, the chunk gets an empty content manager, so nothing in it is ever loaded or saved. |
| <Link id="m-isglobal" /><code>{"private bool isGlobal"}</code> | Marks a global chunk; backing field for `IsGlobal`. |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | Backing field for `IsLoaded`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-logicmanager" /><code>{"private "}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" logicManager"}</code> | Backing field for `LogicManager`, the global logic manager for this chunk. |
| <Link id="m-maxchunksindex" /><code>{"private const int MaxChunksIndex"}</code> | Number of chunk indices (8192, the 13 bits sent over the network). |
| <Link id="m-minimumsaveversion" /><code>{"private "}<Link to="/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" minimumSaveVersion"}</code> | Lowest chunk save version the chunk accepts; older saves are logged as out of date when loaded. |
| <Link id="m-nextindex" /><code>{"private static uint nextIndex"}</code> | Static counter for the next chunk index to try in `FindIndex`. |
| <Link id="m-syncindex" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncIndex"}</code> | Method sync that sends the chunk's index to each player when they connect. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-autosyncs-2" /><code>{"bool AutoSyncs { get; }"}</code> | Whether the server tells clients to load and unload this chunk as players come and go. Always true for global chunks. |
| <Link id="m-chunkidentifier-2" /><code>{"string ChunkIdentifier { get; set; }"}</code> | The chunk's unique name, also used as its save key. Setting it recomputes `Seed`. |
| <Link id="m-chunksbyidentifier" /><code>{"static Dictionary<string, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> ChunksByIdentifier { get; }"}</code> | Static map from chunk identifier to chunk, filled in `Awake`. |
| <Link id="m-chunksbyindex" /><code>{"static Dictionary<uint, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> ChunksByIndex { get; }"}</code> | Static map from network index to chunk. Filled on the server at init and on clients when the index arrives. |
| <Link id="m-contentmanager" /><code><Link to="/game-api/types/alta-world/chunkcontentmanager">{"ChunkContentManager"}</Link>{" ContentManager { get; private set; }"}</code> | Loads, unloads and saves the chunk's content. A server, client or empty manager depending on side and `IsForceUnloaded`. |
| <Link id="m-entities" /><code><Link to="/game-api/types/alta-world/chunkentitymanager">{"ChunkEntityManager"}</Link>{" Entities { get; private set; }"}</code> | Server: the entities in this chunk. |
| <Link id="m-index" /><code>{"uint Index { get; private set; }"}</code> | Small network id for the chunk, assigned by the server and sent to each client. |
| <Link id="m-isforceloaded-2" /><code>{"bool IsForceLoaded { get; set; }"}</code> | Whether the chunk stays loaded regardless of players. Setting it updates the loaded state. |
| <Link id="m-isforceunloaded-2" /><code>{"bool IsForceUnloaded { get; }"}</code> | Set on the prefab. Such chunks use an empty content manager and never load content. |
| <Link id="m-isfullyloaded" /><code>{"bool IsFullyLoaded { get; }"}</code> | Loaded and not in the middle of a content transition. |
| <Link id="m-isfullyunloaded" /><code>{"bool IsFullyUnloaded { get; }"}</code> | Not loaded and not in the middle of a content transition. |
| <Link id="m-isglobal-2" /><code>{"bool IsGlobal { get; }"}</code> | Set on the prefab for chunks that are not a place in the world. Global chunks always auto sync. |
| <Link id="m-isloaded-2" /><code>{"bool IsLoaded { get; private set; }"}</code> | Whether the chunk is meant to be loaded right now. Content may still be loading; see `IsFullyLoaded`. |
| <Link id="m-isskippingstaticcontent" /><code>{"virtual bool IsSkippingStaticContent { get; }"}</code> | When true the server content manager skips the chunk's static content. False here; subclasses override it. |
| <Link id="m-isstatic" /><code>{"bool IsStatic { get; set; }"}</code> | True for chunks that are part of the scene. Personal storage chunks set it false, so destroying them is not logged as an error. |
| <Link id="m-loadedcount" /><code>{"static int LoadedCount { get; private set; }"}</code> | Static count of chunks currently loaded. |
| <Link id="m-logicmanager-2" /><code><Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; }"}</code> | The chunk's `GlobalLogicManager`, if set on the prefab. |
| <Link id="m-minimumsaveversion-2" /><code><Link to="/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" MinimumSaveVersion { get; }"}</code> | Saves older than this version are treated as invalid and not loaded. |
| <Link id="m-players" /><code><Link to="/game-api/types/alta-world/chunkplayermanager">{"ChunkPlayerManager"}</Link>{" Players { get; private set; }"}</code> | Server: the players currently in this chunk. The first joining and last leaving trigger a load or unload. |
| <Link id="m-proceduralstreamer" /><code><Link to="/game-api/types/alta-world/iproceduralgenerationstreamer">{"IProceduralGenerationStreamer"}</Link>{" ProceduralStreamer { get; private set; }"}</code> | The `IProceduralGenerationStreamer` on the chunk, if it generates content procedurally. |
| <Link id="m-seed" /><code>{"uint Seed { get; private set; }"}</code> | Hash of the chunk identifier, used as a stable random seed. |
| <Link id="m-spawndata" /><code>{"virtual "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> | Spawn data used for entities this chunk spawns. `SpawnData.Default` unless overridden. |
| <Link id="m-unloadinggate" /><code>{"List<Task> UnloadingGate { get; }"}</code> | Tasks to wait for before unloading. Cleared and refilled each time `BeganUnloading` fires. |
| <Link id="m-sync" /><code>{"protected "}<Link to="/game-api/types/alta-world/playerentitysyncserver">{"PlayerEntitySyncServer"}</Link>{" Sync { get; private set; }"}</code> | Server: the sync that streams this chunk's entities to players. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-beganunloading" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> BeganUnloading"}</code> | Raised when the chunk starts unloading. Handlers can add tasks to `UnloadingGate` to delay the unload. |
| <Link id="m-fullyloaded" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> FullyLoaded"}</code> | Raised when the chunk's content has finished loading. |
| <Link id="m-fullyunloaded" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> FullyUnloaded"}</code> | Raised when the chunk's content has finished unloading. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearentities" /><code>{"void ClearEntities()"}</code> | Server: removes every entity from the chunk's entity list. Refuses and logs an error if players are in it. |
| <Link id="m-clearsave" /><code>{"async Task ClearSave()"}</code> | Clears the chunk's saved content through its content manager. |
| <Link id="m-forceload" /><code>{"async Task ForceLoad()"}</code> | Server: keeps the chunk loaded even with no players near, and waits for the load. |
| <Link id="m-forceunloadandsave" /><code>{"void ForceUnloadAndSave()"}</code> | Server: drops all players from the chunk, unloads it and saves it, blocking until done. |
| <Link id="m-handleparentchange" /><code>{"void HandleParentChange("}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> | Passes an entity's parent change to the chunk's player sync, unless the chunk is mid load or unload. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Finds the procedural streamer, sets up the client content manager and registers the index sync. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: sets up the content manager, entity and player lists, and picks a free index. |
| <Link id="m-initializecontentmanager" /><code>{"void InitializeContentManager()"}</code> | Creates the side-specific content manager and sync objects once, and hooks the load and unload events. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the chunk's index to a client who just got the chunk. |
| <Link id="m-save" /><code>{"async Task Save()"}</code> | Saves the chunk's content, logging any exception instead of throwing. |
| <Link id="m-serializechunkandposition" /><code>{"static void SerializeChunkAndPosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, ref Vector3 position, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> | Writes or reads a chunk reference followed by a position encoded by that chunk. |
| <Link id="m-serializeentityposition" /><code>{"static void SerializeEntityPosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, ref Vector3 position)"}</code> | Writes or reads an entity's position along with its chunk. The server uses the entity's position chunk; clients find the best containing chunk. |
| <Link id="m-serializeposition" /><code>{"virtual void SerializePosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 position, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> | Writes or reads a position. The base class sends a full vector; `LocationChunk` overrides it to quantise within its bounds. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the chunk identifier in brackets. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Removes the chunk from the static lookups. Logs an error if a static chunk is destroyed outside a reload or quit. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Defaults the identifier to the GameObject name. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Registers the chunk in `ChunksByIdentifier` and sets `Seed` from the hash of its identifier. |
| <Link id="m-contentisfullyloaded" /><code>{"private void ContentIsFullyLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Handler on the content manager's `Loaded` event; raises `FullyLoaded`. |
| <Link id="m-contentisfullyunloaded" /><code>{"private void ContentIsFullyUnloaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Handler on the content manager's `Unloaded` event; raises `FullyUnloaded`. |
| <Link id="m-findindex" /><code>{"private uint FindIndex()"}</code> | Server: finds the next free chunk index below 8192, wrapping once. If none is free it logs a fatal error and shuts the server down. |
| <Link id="m-setindex" /><code>{"private void SetIndex(uint index)"}</code> | Stores the chunk's network index and registers it in `ChunksByIndex`. |
| <Link id="m-syncindex-2" /><code>{"private void SyncIndex("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the chunk's index to a player in 13 bits; the client calls `SetIndex` with it. |
| <Link id="m-updateloadedasync" /><code>{"private async Task UpdateLoadedAsync()"}</code> | Server and client: works out whether the chunk should be loaded (force loaded, players syncing, or unload blocked) and loads or unloads its content. |

</details>

## Used in

Members of other types that take, return or hold a `Chunk`:

[`CaveLayerManager.PrepareSpawn`](/game-api/types/alta-world-generation/cavelayermanager#m-preparespawn), [`CaveLayerChunk.GetNeighboursForLoading`](/game-api/types/alta-world/cavelayerchunk#m-getneighboursforloading), [`CaveLayerChunk.OnFullyLoaded`](/game-api/types/alta-world/cavelayerchunk#m-onfullyloaded), [`CaveLayerStreamer.Unloaded`](/game-api/types/alta-world/cavelayerstreamer#m-unloaded), [`ChunkContentManager.Chunk`](/game-api/types/alta-world/chunkcontentmanager#m-chunk), [`ChunkContentManager.ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager#m-ctor), [`ChunkContentManager.Loaded`](/game-api/types/alta-world/chunkcontentmanager#m-loaded), [`ChunkContentManager.Unloaded`](/game-api/types/alta-world/chunkcontentmanager#m-unloaded), [`ChunkEntityManager.Chunk`](/game-api/types/alta-world/chunkentitymanager#m-chunk), [`ChunkEntityManager.ChunkEntityManager`](/game-api/types/alta-world/chunkentitymanager#m-ctor), [`ChunkFileHelper.GetFile`](/game-api/types/alta-world/chunkfilehelper#m-getfile-2), [`ChunkPlayerManager.Chunk`](/game-api/types/alta-world/chunkplayermanager#m-chunk), [`ChunkPlayerManager.ChunkPlayerManager`](/game-api/types/alta-world/chunkplayermanager#m-ctor), [`ChunkPositionSurface.AddToChunk`](/game-api/types/alta-world/chunkpositionsurface#m-addtochunk), [`ChunkPrefabPointer.Unuse`](/game-api/types/alta-world/chunkprefabpointer#m-unuse), [`ChunkPrefabPointer.Use`](/game-api/types/alta-world/chunkprefabpointer#m-use), [`ChunkPrefabPointer.UseOld`](/game-api/types/alta-world/chunkprefabpointer#m-useold), [`ChunkPrefabPointer.PointerInstance.Unuse`](/game-api/types/alta-world/chunkprefabpointer-pointerinstance#m-unuse), [`ChunkPrefabPointer.PointerInstance.Use`](/game-api/types/alta-world/chunkprefabpointer-pointerinstance#m-use), [`ChunkPrefabPointer.PointerInstance.Uses`](/game-api/types/alta-world/chunkprefabpointer-pointerinstance#m-uses), [`ChunkReference.Chunk`](/game-api/types/alta-world/chunkreference#m-chunk), [`ChunkReference.ChunkReference`](/game-api/types/alta-world/chunkreference#m-ctor), [`ChunkSync.chunk`](/game-api/types/alta-world/chunksync#m-chunk), [`ClientChunkContentManager.ClientChunkContentManager`](/game-api/types/alta-world/clientchunkcontentmanager#m-ctor), [`DynamicChunkContentManager.chunk`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-chunk), [`DynamicChunkContentManager.DynamicChunkContentManager`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-ctor), [`EmptyChunkContentManager.EmptyChunkContentManager`](/game-api/types/alta-world/emptychunkcontentmanager#m-ctor), [`FastChunkLookup.AddChunksInGrid`](/game-api/types/alta-world/fastchunklookup#m-addchunksingrid), [`FastChunkLookup.GetChunksToLoadWithinRadius`](/game-api/types/alta-world/fastchunklookup#m-getchunkstoloadwithinradius), [`LocationChunk.GetNeighboursForLoading`](/game-api/types/alta-world/locationchunk#m-getneighboursforloading), [`LocationChunkHelper.GetChunksToLoad`](/game-api/types/alta-world/locationchunkhelper#m-getchunkstoload), [`LocationChunkHelper.GetChunksWithinRadius`](/game-api/types/alta-world/locationchunkhelper#m-getchunkswithinradius), [`OverworldChunk.GetNeighboursForLoading`](/game-api/types/alta-world/overworldchunk#m-getneighboursforloading), [`PlayerEntitySync.chunk`](/game-api/types/alta-world/playerentitysync#m-chunk), [`PlayerEntitySync.PlayerEntitySync`](/game-api/types/alta-world/playerentitysync#m-ctor), [`PlayerEntitySyncServer.OnChunkLoaded`](/game-api/types/alta-world/playerentitysyncserver#m-onchunkloaded), [`PlayerEntitySyncServer.OnChunkUnloaded`](/game-api/types/alta-world/playerentitysyncserver#m-onchunkunloaded), [`PlayerEntitySyncServer.PlayerEntitySyncServer`](/game-api/types/alta-world/playerentitysyncserver#m-ctor), [`PrefabLoadManager.loadedPointerPrefabs`](/game-api/types/alta-world/prefabloadmanager#m-loadedpointerprefabs), [`PrefabLoadManager.LoadPointer`](/game-api/types/alta-world/prefabloadmanager#m-loadpointer), [`PrefabLoadManager.UnloadPointer`](/game-api/types/alta-world/prefabloadmanager#m-unloadpointer), [`ServerChunkContentManager.ServerChunkContentManager`](/game-api/types/alta-world/serverchunkcontentmanager#m-ctor), [`StaticChunkContentManager.StaticChunkContentManager`](/game-api/types/alta-world/staticchunkcontentmanager#m-ctor), [`WorldLandmark.LoadedChunks`](/game-api/types/alta-world/worldlandmark#m-loadedchunks-2), [`WorldLandmark.sceneLoadedChunks`](/game-api/types/alta-world/worldlandmark#m-sceneloadedchunks), [`WorldLandmark.sceneStaticChunks`](/game-api/types/alta-world/worldlandmark#m-scenestaticchunks), [`WorldLandmark.StaticChunks`](/game-api/types/alta-world/worldlandmark#m-staticchunks-2), [`WorldLandmarkManager.AttemptLoadLandmark`](/game-api/types/alta-world/worldlandmarkmanager#m-attemptloadlandmark), [`WorldLandmarkManager.AttemptLoadLandmarkFromStatic`](/game-api/types/alta-world/worldlandmarkmanager#m-attemptloadlandmarkfromstatic), [`WorldLandmarkManager.AttemptUnloadLandmark`](/game-api/types/alta-world/worldlandmarkmanager#m-attemptunloadlandmark), [`WorldLandmarkManager.ForceUnloadLandmark`](/game-api/types/alta-world/worldlandmarkmanager#m-forceunloadlandmark), [`WorldLandmarkManager.toLoad`](/game-api/types/alta-world/worldlandmarkmanager#m-toload), [`WorldLandmarkManager.toUnload`](/game-api/types/alta-world/worldlandmarkmanager#m-tounload), [`ChunkInfo.op_Implicit`](/game-api/types/alta-console/chunkinfo#m-op-implicit), [`ProfilingCommandModule.ChunkUnloaded`](/game-api/types/alta-console/profilingcommandmodule#m-chunkunloaded), [`ProfilingCommandModule.loadedChunks`](/game-api/types/alta-console/profilingcommandmodule#m-loadedchunks), [`SpawnCommandModule.Spawn`](/game-api/types/alta-console/spawncommandmodule#m-spawn), [`UserInfoDetailed.Chunk`](/game-api/types/alta-console/userinfodetailed#m-chunk), [`WackyCommandModule.DestroyBase`](/game-api/types/alta-console/wackycommandmodule#m-destroybase), [`GenericCraftingPiece.ApplySaveData`](/game-api/types/alta-crafting/genericcraftingpiece#m-applysavedata) and 137 more.
