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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`LocationChunk`](/mod/game-api/types/alta-world/locationchunk)
- **Attributes** `TypeConverter`
- **Documented in** [Chunks](/mod/game-api/world/chunks#chunk), [Arguments and results](/mod/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Chunk()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bitstoserialize" /><code>{"const int BitsToSerialize"}</code> | <span className="api-desc">Number of bits used to send a chunk index (13, so up to 8192 chunks).</span> |
| <Link id="m-overworldchunktag" /><code>{"const string OverworldChunkTag"}</code> | <span className="api-desc">The tag string `Overworld Chunk`.</span> |

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autosyncs" /><code>{"private bool autoSyncs"}</code> | <span className="api-desc">Whether the chunk syncs its entities to players without them being in it. Always true for global chunks; read through `AutoSyncs`.</span> |
| <Link id="m-chunkidentifier" /><code>{"private string chunkIdentifier"}</code> | <span className="api-desc">Backing field for `ChunkIdentifier`; defaults to the object name in the editor.</span> |
| <Link id="m-isforceloaded" /><code>{"private bool isForceLoaded"}</code> | <span className="api-desc">Backing field for `IsForceLoaded`.</span> |
| <Link id="m-isforceunloaded" /><code>{"private bool isForceUnloaded"}</code> | <span className="api-desc">When set, the chunk gets an empty content manager, so nothing in it is ever loaded or saved.</span> |
| <Link id="m-isglobal" /><code>{"private bool isGlobal"}</code> | <span className="api-desc">Marks a global chunk; backing field for `IsGlobal`.</span> |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> | <span className="api-desc">Backing field for `IsLoaded`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-logicmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" logicManager"}</code> | <span className="api-desc">Backing field for `LogicManager`, the global logic manager for this chunk.</span> |
| <Link id="m-maxchunksindex" /><code>{"private const int MaxChunksIndex"}</code> | <span className="api-desc">Number of chunk indices (8192, the 13 bits sent over the network).</span> |
| <Link id="m-minimumsaveversion" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" minimumSaveVersion"}</code> | <span className="api-desc">Lowest chunk save version the chunk accepts; older saves are logged as out of date when loaded.</span> |
| <Link id="m-nextindex" /><code>{"private static uint nextIndex"}</code> | <span className="api-desc">Static counter for the next chunk index to try in `FindIndex`.</span> |
| <Link id="m-syncindex" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncIndex"}</code> | <span className="api-desc">Method sync that sends the chunk's index to each player when they connect.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-autosyncs-2" /><code>{"bool AutoSyncs { get; }"}</code> | <span className="api-desc">Whether the server tells clients to load and unload this chunk as players come and go. Always true for global chunks.</span> |
| <Link id="m-chunkidentifier-2" /><code>{"string ChunkIdentifier { get; set; }"}</code> | <span className="api-desc">The chunk's unique name, also used as its save key. Setting it recomputes `Seed`.</span> |
| <Link id="m-chunksbyidentifier" /><code>{"static Dictionary<string, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> ChunksByIdentifier { get; }"}</code> | <span className="api-desc">Static map from chunk identifier to chunk, filled in `Awake`.</span> |
| <Link id="m-chunksbyindex" /><code>{"static Dictionary<uint, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> ChunksByIndex { get; }"}</code> | <span className="api-desc">Static map from network index to chunk. Filled on the server at init and on clients when the index arrives.</span> |
| <Link id="m-contentmanager" /><code><Link to="/mod/game-api/types/alta-world/chunkcontentmanager">{"ChunkContentManager"}</Link>{" ContentManager { get; private set; }"}</code> | <span className="api-desc">Loads, unloads and saves the chunk's content. A server, client or empty manager depending on side and `IsForceUnloaded`.</span> |
| <Link id="m-entities" /><code><Link to="/mod/game-api/types/alta-world/chunkentitymanager">{"ChunkEntityManager"}</Link>{" Entities { get; private set; }"}</code> | <span className="api-desc">Server: the entities in this chunk.</span> |
| <Link id="m-index" /><code>{"uint Index { get; private set; }"}</code> | <span className="api-desc">Small network id for the chunk, assigned by the server and sent to each client.</span> |
| <Link id="m-isforceloaded-2" /><code>{"bool IsForceLoaded { get; set; }"}</code> | <span className="api-desc">Whether the chunk stays loaded regardless of players. Setting it updates the loaded state.</span> |
| <Link id="m-isforceunloaded-2" /><code>{"bool IsForceUnloaded { get; }"}</code> | <span className="api-desc">Set on the prefab. Such chunks use an empty content manager and never load content.</span> |
| <Link id="m-isfullyloaded" /><code>{"bool IsFullyLoaded { get; }"}</code> | <span className="api-desc">Loaded and not in the middle of a content transition.</span> |
| <Link id="m-isfullyunloaded" /><code>{"bool IsFullyUnloaded { get; }"}</code> | <span className="api-desc">Not loaded and not in the middle of a content transition.</span> |
| <Link id="m-isglobal-2" /><code>{"bool IsGlobal { get; }"}</code> | <span className="api-desc">Set on the prefab for chunks that are not a place in the world. Global chunks always auto sync.</span> |
| <Link id="m-isloaded-2" /><code>{"bool IsLoaded { get; private set; }"}</code> | <span className="api-desc">Whether the chunk is meant to be loaded right now. Content may still be loading; see `IsFullyLoaded`.</span> |
| <Link id="m-isskippingstaticcontent" /><code>{"virtual bool IsSkippingStaticContent { get; }"}</code> | <span className="api-desc">When true the server content manager skips the chunk's static content. False here; subclasses override it.</span> |
| <Link id="m-isstatic" /><code>{"bool IsStatic { get; set; }"}</code> | <span className="api-desc">True for chunks that are part of the scene. Personal storage chunks set it false, so destroying them is not logged as an error.</span> |
| <Link id="m-loadedcount" /><code>{"static int LoadedCount { get; private set; }"}</code> | <span className="api-desc">Static count of chunks currently loaded.</span> |
| <Link id="m-logicmanager-2" /><code><Link to="/mod/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; }"}</code> | <span className="api-desc">The chunk's `GlobalLogicManager`, if set on the prefab.</span> |
| <Link id="m-minimumsaveversion-2" /><code><Link to="/mod/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" MinimumSaveVersion { get; }"}</code> | <span className="api-desc">Saves older than this version are treated as invalid and not loaded.</span> |
| <Link id="m-players" /><code><Link to="/mod/game-api/types/alta-world/chunkplayermanager">{"ChunkPlayerManager"}</Link>{" Players { get; private set; }"}</code> | <span className="api-desc">Server: the players currently in this chunk. The first joining and last leaving trigger a load or unload.</span> |
| <Link id="m-proceduralstreamer" /><code><Link to="/mod/game-api/types/alta-world/iproceduralgenerationstreamer">{"IProceduralGenerationStreamer"}</Link>{" ProceduralStreamer { get; private set; }"}</code> | <span className="api-desc">The `IProceduralGenerationStreamer` on the chunk, if it generates content procedurally.</span> |
| <Link id="m-seed" /><code>{"uint Seed { get; private set; }"}</code> | <span className="api-desc">Hash of the chunk identifier, used as a stable random seed.</span> |
| <Link id="m-spawndata" /><code>{"virtual "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> | <span className="api-desc">Spawn data used for entities this chunk spawns. `SpawnData.Default` unless overridden.</span> |
| <Link id="m-unloadinggate" /><code>{"List<Task> UnloadingGate { get; }"}</code> | <span className="api-desc">Tasks to wait for before unloading. Cleared and refilled each time `BeganUnloading` fires.</span> |
| <Link id="m-sync" /><code>{"protected "}<Link to="/mod/game-api/types/alta-world/playerentitysyncserver">{"PlayerEntitySyncServer"}</Link>{" Sync { get; private set; }"}</code> | <span className="api-desc">Server: the sync that streams this chunk's entities to players.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-beganunloading" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> BeganUnloading"}</code> | <span className="api-desc">Raised when the chunk starts unloading. Handlers can add tasks to `UnloadingGate` to delay the unload.</span> |
| <Link id="m-fullyloaded" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> FullyLoaded"}</code> | <span className="api-desc">Raised when the chunk's content has finished loading.</span> |
| <Link id="m-fullyunloaded" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> FullyUnloaded"}</code> | <span className="api-desc">Raised when the chunk's content has finished unloading.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearentities" /><code>{"void ClearEntities()"}</code> | <span className="api-desc">Server: removes every entity from the chunk's entity list. Refuses and logs an error if players are in it.</span> |
| <Link id="m-clearsave" /><code>{"async Task ClearSave()"}</code> | <span className="api-desc">Clears the chunk's saved content through its content manager.</span> |
| <Link id="m-forceload" /><code>{"async Task ForceLoad()"}</code> | <span className="api-desc">Server: keeps the chunk loaded even with no players near, and waits for the load.</span> |
| <Link id="m-forceunloadandsave" /><code>{"void ForceUnloadAndSave()"}</code> | <span className="api-desc">Server: drops all players from the chunk, unloads it and saves it, blocking until done.</span> |
| <Link id="m-handleparentchange" /><code>{"void HandleParentChange("}<Link to="/mod/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> | <span className="api-desc">Passes an entity's parent change to the chunk's player sync, unless the chunk is mid load or unload.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Finds the procedural streamer, sets up the client content manager and registers the index sync.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: sets up the content manager, entity and player lists, and picks a free index.</span> |
| <Link id="m-initializecontentmanager" /><code>{"void InitializeContentManager()"}</code> | <span className="api-desc">Creates the side-specific content manager and sync objects once, and hooks the load and unload events.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the chunk's index to a client who just got the chunk.</span> |
| <Link id="m-save" /><code>{"async Task Save()"}</code> | <span className="api-desc">Saves the chunk's content, logging any exception instead of throwing.</span> |
| <Link id="m-serializechunkandposition" /><code>{"static void SerializeChunkAndPosition("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, ref Vector3 position, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> | <span className="api-desc">Writes or reads a chunk reference followed by a position encoded by that chunk.</span> |
| <Link id="m-serializeentityposition" /><code>{"static void SerializeEntityPosition("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, ref Vector3 position)"}</code> | <span className="api-desc">Writes or reads an entity's position along with its chunk. The server uses the entity's position chunk; clients find the best containing chunk.</span> |
| <Link id="m-serializeposition" /><code>{"virtual void SerializePosition("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 position, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> | <span className="api-desc">Writes or reads a position. The base class sends a full vector; `LocationChunk` overrides it to quantise within its bounds.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the chunk identifier in brackets.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Removes the chunk from the static lookups. Logs an error if a static chunk is destroyed outside a reload or quit.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Defaults the identifier to the GameObject name.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Registers the chunk in `ChunksByIdentifier` and sets `Seed` from the hash of its identifier.</span> |
| <Link id="m-contentisfullyloaded" /><code>{"private void ContentIsFullyLoaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Handler on the content manager's `Loaded` event; raises `FullyLoaded`.</span> |
| <Link id="m-contentisfullyunloaded" /><code>{"private void ContentIsFullyUnloaded("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Handler on the content manager's `Unloaded` event; raises `FullyUnloaded`.</span> |
| <Link id="m-findindex" /><code>{"private uint FindIndex()"}</code> | <span className="api-desc">Server: finds the next free chunk index below 8192, wrapping once. If none is free it logs a fatal error and shuts the server down.</span> |
| <Link id="m-setindex" /><code>{"private void SetIndex(uint index)"}</code> | <span className="api-desc">Stores the chunk's network index and registers it in `ChunksByIndex`.</span> |
| <Link id="m-syncindex-2" /><code>{"private void SyncIndex("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the chunk's index to a player in 13 bits; the client calls `SetIndex` with it.</span> |
| <Link id="m-updateloadedasync" /><code>{"private async Task UpdateLoadedAsync()"}</code> | <span className="api-desc">Server and client: works out whether the chunk should be loaded (force loaded, players syncing, or unload blocked) and loads or unloads its content.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Chunk`:

<div className="api-used-in">

[`CaveLayerManager.PrepareSpawn`](/mod/game-api/types/alta-world-generation/cavelayermanager#m-preparespawn), [`CaveLayerChunk.GetNeighboursForLoading`](/mod/game-api/types/alta-world/cavelayerchunk#m-getneighboursforloading), [`CaveLayerChunk.OnFullyLoaded`](/mod/game-api/types/alta-world/cavelayerchunk#m-onfullyloaded), [`CaveLayerStreamer.Unloaded`](/mod/game-api/types/alta-world/cavelayerstreamer#m-unloaded), [`ChunkContentManager.Chunk`](/mod/game-api/types/alta-world/chunkcontentmanager#m-chunk), [`ChunkContentManager.ChunkContentManager`](/mod/game-api/types/alta-world/chunkcontentmanager#m-ctor), [`ChunkContentManager.Loaded`](/mod/game-api/types/alta-world/chunkcontentmanager#m-loaded), [`ChunkContentManager.Unloaded`](/mod/game-api/types/alta-world/chunkcontentmanager#m-unloaded), [`ChunkEntityManager.Chunk`](/mod/game-api/types/alta-world/chunkentitymanager#m-chunk), [`ChunkEntityManager.ChunkEntityManager`](/mod/game-api/types/alta-world/chunkentitymanager#m-ctor), [`ChunkFileHelper.GetFile`](/mod/game-api/types/alta-world/chunkfilehelper#m-getfile-2), [`ChunkPlayerManager.Chunk`](/mod/game-api/types/alta-world/chunkplayermanager#m-chunk), [`ChunkPlayerManager.ChunkPlayerManager`](/mod/game-api/types/alta-world/chunkplayermanager#m-ctor), [`ChunkPositionSurface.AddToChunk`](/mod/game-api/types/alta-world/chunkpositionsurface#m-addtochunk), [`ChunkPrefabPointer.Unuse`](/mod/game-api/types/alta-world/chunkprefabpointer#m-unuse), [`ChunkPrefabPointer.Use`](/mod/game-api/types/alta-world/chunkprefabpointer#m-use), [`ChunkPrefabPointer.UseOld`](/mod/game-api/types/alta-world/chunkprefabpointer#m-useold), [`ChunkPrefabPointer.PointerInstance.Unuse`](/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance#m-unuse), [`ChunkPrefabPointer.PointerInstance.Use`](/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance#m-use), [`ChunkPrefabPointer.PointerInstance.Uses`](/mod/game-api/types/alta-world/chunkprefabpointer-pointerinstance#m-uses), [`ChunkReference.Chunk`](/mod/game-api/types/alta-world/chunkreference#m-chunk), [`ChunkReference.ChunkReference`](/mod/game-api/types/alta-world/chunkreference#m-ctor), [`ChunkSync.chunk`](/mod/game-api/types/alta-world/chunksync#m-chunk), [`ClientChunkContentManager.ClientChunkContentManager`](/mod/game-api/types/alta-world/clientchunkcontentmanager#m-ctor), [`DynamicChunkContentManager.chunk`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-chunk), [`DynamicChunkContentManager.DynamicChunkContentManager`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-ctor), [`EmptyChunkContentManager.EmptyChunkContentManager`](/mod/game-api/types/alta-world/emptychunkcontentmanager#m-ctor), [`FastChunkLookup.AddChunksInGrid`](/mod/game-api/types/alta-world/fastchunklookup#m-addchunksingrid), [`FastChunkLookup.GetChunksToLoadWithinRadius`](/mod/game-api/types/alta-world/fastchunklookup#m-getchunkstoloadwithinradius), [`LocationChunk.GetNeighboursForLoading`](/mod/game-api/types/alta-world/locationchunk#m-getneighboursforloading), [`LocationChunkHelper.GetChunksToLoad`](/mod/game-api/types/alta-world/locationchunkhelper#m-getchunkstoload), [`LocationChunkHelper.GetChunksWithinRadius`](/mod/game-api/types/alta-world/locationchunkhelper#m-getchunkswithinradius), [`OverworldChunk.GetNeighboursForLoading`](/mod/game-api/types/alta-world/overworldchunk#m-getneighboursforloading), [`PlayerEntitySync.chunk`](/mod/game-api/types/alta-world/playerentitysync#m-chunk), [`PlayerEntitySync.PlayerEntitySync`](/mod/game-api/types/alta-world/playerentitysync#m-ctor), [`PlayerEntitySyncServer.OnChunkLoaded`](/mod/game-api/types/alta-world/playerentitysyncserver#m-onchunkloaded), [`PlayerEntitySyncServer.OnChunkUnloaded`](/mod/game-api/types/alta-world/playerentitysyncserver#m-onchunkunloaded), [`PlayerEntitySyncServer.PlayerEntitySyncServer`](/mod/game-api/types/alta-world/playerentitysyncserver#m-ctor), [`PrefabLoadManager.loadedPointerPrefabs`](/mod/game-api/types/alta-world/prefabloadmanager#m-loadedpointerprefabs), [`PrefabLoadManager.LoadPointer`](/mod/game-api/types/alta-world/prefabloadmanager#m-loadpointer), [`PrefabLoadManager.UnloadPointer`](/mod/game-api/types/alta-world/prefabloadmanager#m-unloadpointer), [`ServerChunkContentManager.ServerChunkContentManager`](/mod/game-api/types/alta-world/serverchunkcontentmanager#m-ctor), [`StaticChunkContentManager.StaticChunkContentManager`](/mod/game-api/types/alta-world/staticchunkcontentmanager#m-ctor), [`WorldLandmark.LoadedChunks`](/mod/game-api/types/alta-world/worldlandmark#m-loadedchunks-2), [`WorldLandmark.sceneLoadedChunks`](/mod/game-api/types/alta-world/worldlandmark#m-sceneloadedchunks), [`WorldLandmark.sceneStaticChunks`](/mod/game-api/types/alta-world/worldlandmark#m-scenestaticchunks), [`WorldLandmark.StaticChunks`](/mod/game-api/types/alta-world/worldlandmark#m-staticchunks-2), [`WorldLandmarkManager.AttemptLoadLandmark`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-attemptloadlandmark), [`WorldLandmarkManager.AttemptLoadLandmarkFromStatic`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-attemptloadlandmarkfromstatic), [`WorldLandmarkManager.AttemptUnloadLandmark`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-attemptunloadlandmark), [`WorldLandmarkManager.ForceUnloadLandmark`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-forceunloadlandmark), [`WorldLandmarkManager.toLoad`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-toload), [`WorldLandmarkManager.toUnload`](/mod/game-api/types/alta-world/worldlandmarkmanager#m-tounload), [`ChunkInfo.op_Implicit`](/mod/game-api/types/alta-console/chunkinfo#m-op-implicit), [`ProfilingCommandModule.ChunkUnloaded`](/mod/game-api/types/alta-console/profilingcommandmodule#m-chunkunloaded), [`ProfilingCommandModule.loadedChunks`](/mod/game-api/types/alta-console/profilingcommandmodule#m-loadedchunks), [`SpawnCommandModule.Spawn`](/mod/game-api/types/alta-console/spawncommandmodule#m-spawn), [`UserInfoDetailed.Chunk`](/mod/game-api/types/alta-console/userinfodetailed#m-chunk), [`WackyCommandModule.DestroyBase`](/mod/game-api/types/alta-console/wackycommandmodule#m-destroybase), [`GenericCraftingPiece.ApplySaveData`](/mod/game-api/types/alta-crafting/genericcraftingpiece#m-applysavedata) and 137 more.

</div>
