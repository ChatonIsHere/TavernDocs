---
title: "Chunk"
description: "Both sides, but most of it only does anything on the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Chunk

A **class** in `Root.Township`, `Alta.Chunks`.

Both sides, but most of it only does anything on the server.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`LocationChunk`](/game-api/types/alta-world/locationchunk)
- **Attributes** `TypeConverter`
- **Documented in** [Chunks](/game-api/world/chunks#chunk), [Arguments and results](/game-api/console-and-utilities/arguments-and-results)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Chunk()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bitstoserialize" /><code>{"const int BitsToSerialize"}</code> |  |
| <Link id="m-overworldchunktag" /><code>{"const string OverworldChunkTag"}</code> |  |
| <Link id="m-autosyncs" /><code>{"private bool autoSyncs"}</code> |  |
| <Link id="m-chunkidentifier" /><code>{"private string chunkIdentifier"}</code> |  |
| <Link id="m-isforceloaded" /><code>{"private bool isForceLoaded"}</code> |  |
| <Link id="m-isforceunloaded" /><code>{"private bool isForceUnloaded"}</code> |  |
| <Link id="m-isglobal" /><code>{"private bool isGlobal"}</code> |  |
| <Link id="m-isloaded" /><code>{"private bool isLoaded"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-logicmanager" /><code>{"private "}<Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" logicManager"}</code> |  |
| <Link id="m-maxchunksindex" /><code>{"private const int MaxChunksIndex"}</code> |  |
| <Link id="m-minimumsaveversion" /><code>{"private "}<Link to="/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" minimumSaveVersion"}</code> |  |
| <Link id="m-nextindex" /><code>{"private static uint nextIndex"}</code> |  |
| <Link id="m-syncindex" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncIndex"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-autosyncs-2" /><code>{"bool AutoSyncs { get; }"}</code> |  |
| <Link id="m-chunkidentifier-2" /><code>{"string ChunkIdentifier { get; set; }"}</code> |  |
| <Link id="m-chunksbyidentifier" /><code>{"static Dictionary<string, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> ChunksByIdentifier { get; }"}</code> |  |
| <Link id="m-chunksbyindex" /><code>{"static Dictionary<uint, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> ChunksByIndex { get; }"}</code> |  |
| <Link id="m-contentmanager" /><code><Link to="/game-api/types/alta-world/chunkcontentmanager">{"ChunkContentManager"}</Link>{" ContentManager { get; private set; }"}</code> |  |
| <Link id="m-entities" /><code><Link to="/game-api/types/alta-world/chunkentitymanager">{"ChunkEntityManager"}</Link>{" Entities { get; private set; }"}</code> |  |
| <Link id="m-index" /><code>{"uint Index { get; private set; }"}</code> |  |
| <Link id="m-isforceloaded-2" /><code>{"bool IsForceLoaded { get; set; }"}</code> |  |
| <Link id="m-isforceunloaded-2" /><code>{"bool IsForceUnloaded { get; }"}</code> |  |
| <Link id="m-isfullyloaded" /><code>{"bool IsFullyLoaded { get; }"}</code> |  |
| <Link id="m-isfullyunloaded" /><code>{"bool IsFullyUnloaded { get; }"}</code> |  |
| <Link id="m-isglobal-2" /><code>{"bool IsGlobal { get; }"}</code> |  |
| <Link id="m-isloaded-2" /><code>{"bool IsLoaded { get; private set; }"}</code> |  |
| <Link id="m-isskippingstaticcontent" /><code>{"virtual bool IsSkippingStaticContent { get; }"}</code> |  |
| <Link id="m-isstatic" /><code>{"bool IsStatic { get; set; }"}</code> |  |
| <Link id="m-loadedcount" /><code>{"static int LoadedCount { get; private set; }"}</code> |  |
| <Link id="m-logicmanager-2" /><code><Link to="/game-api/types/alta-items/globallogicmanager">{"GlobalLogicManager"}</Link>{" LogicManager { get; }"}</code> |  |
| <Link id="m-minimumsaveversion-2" /><code><Link to="/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" MinimumSaveVersion { get; }"}</code> |  |
| <Link id="m-players" /><code><Link to="/game-api/types/alta-world/chunkplayermanager">{"ChunkPlayerManager"}</Link>{" Players { get; private set; }"}</code> |  |
| <Link id="m-proceduralstreamer" /><code><Link to="/game-api/types/alta-world/iproceduralgenerationstreamer">{"IProceduralGenerationStreamer"}</Link>{" ProceduralStreamer { get; private set; }"}</code> |  |
| <Link id="m-seed" /><code>{"uint Seed { get; private set; }"}</code> |  |
| <Link id="m-spawndata" /><code>{"virtual "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" { get; }"}</code> |  |
| <Link id="m-unloadinggate" /><code>{"List<Task> UnloadingGate { get; }"}</code> |  |
| <Link id="m-sync" /><code>{"protected "}<Link to="/game-api/types/alta-world/playerentitysyncserver">{"PlayerEntitySyncServer"}</Link>{" Sync { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-beganunloading" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> BeganUnloading"}</code> |  |
| <Link id="m-fullyloaded" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> FullyLoaded"}</code> |  |
| <Link id="m-fullyunloaded" /><code>{"event Action<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> FullyUnloaded"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clearentities" /><code>{"void ClearEntities()"}</code> |  |
| <Link id="m-clearsave" /><code>{"async Task ClearSave()"}</code> |  |
| <Link id="m-forceload" /><code>{"async Task ForceLoad()"}</code> |  |
| <Link id="m-forceunloadandsave" /><code>{"void ForceUnloadAndSave()"}</code> |  |
| <Link id="m-handleparentchange" /><code>{"void HandleParentChange("}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-initializecontentmanager" /><code>{"void InitializeContentManager()"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-save" /><code>{"async Task Save()"}</code> |  |
| <Link id="m-serializechunkandposition" /><code>{"static void SerializeChunkAndPosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, ref Vector3 position, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> |  |
| <Link id="m-serializeentityposition" /><code>{"static void SerializeEntityPosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/inetworkentity">{"INetworkEntity"}</Link>{" entity, ref Vector3 position)"}</code> |  |
| <Link id="m-serializeposition" /><code>{"virtual void SerializePosition("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref Vector3 position, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity = null)"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-contentisfullyloaded" /><code>{"private void ContentIsFullyLoaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-contentisfullyunloaded" /><code>{"private void ContentIsFullyUnloaded("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-findindex" /><code>{"private uint FindIndex()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> |  |
| <Link id="m-setindex" /><code>{"private void SetIndex(uint index)"}</code> |  |
| <Link id="m-syncindex-2" /><code>{"private void SyncIndex("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updateloadedasync" /><code>{"private async Task UpdateLoadedAsync()"}</code> |  |

## Used in

Members of other types that take, return or hold a `Chunk`:

[`CaveLayerManager.PrepareSpawn`](/game-api/types/alta-world-generation/cavelayermanager#m-preparespawn), [`CaveLayerChunk.GetNeighboursForLoading`](/game-api/types/alta-world/cavelayerchunk#m-getneighboursforloading), [`CaveLayerChunk.OnFullyLoaded`](/game-api/types/alta-world/cavelayerchunk#m-onfullyloaded), [`CaveLayerStreamer.Unloaded`](/game-api/types/alta-world/cavelayerstreamer#m-unloaded), [`ChunkContentManager.Chunk`](/game-api/types/alta-world/chunkcontentmanager#m-chunk), [`ChunkContentManager.ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager#m-ctor), [`ChunkContentManager.Loaded`](/game-api/types/alta-world/chunkcontentmanager#m-loaded), [`ChunkContentManager.Unloaded`](/game-api/types/alta-world/chunkcontentmanager#m-unloaded), [`ChunkEntityManager.Chunk`](/game-api/types/alta-world/chunkentitymanager#m-chunk), [`ChunkEntityManager.ChunkEntityManager`](/game-api/types/alta-world/chunkentitymanager#m-ctor), [`ChunkFileHelper.GetFile`](/game-api/types/alta-world/chunkfilehelper#m-getfile-2), [`ChunkPlayerManager.Chunk`](/game-api/types/alta-world/chunkplayermanager#m-chunk), [`ChunkPlayerManager.ChunkPlayerManager`](/game-api/types/alta-world/chunkplayermanager#m-ctor), [`ChunkPositionSurface.AddToChunk`](/game-api/types/alta-world/chunkpositionsurface#m-addtochunk), [`ChunkPrefabPointer.Unuse`](/game-api/types/alta-world/chunkprefabpointer#m-unuse), [`ChunkPrefabPointer.Use`](/game-api/types/alta-world/chunkprefabpointer#m-use), [`ChunkPrefabPointer.UseOld`](/game-api/types/alta-world/chunkprefabpointer#m-useold), [`ChunkPrefabPointer.PointerInstance.Unuse`](/game-api/types/alta-world/chunkprefabpointer-pointerinstance#m-unuse), [`ChunkPrefabPointer.PointerInstance.Use`](/game-api/types/alta-world/chunkprefabpointer-pointerinstance#m-use), [`ChunkPrefabPointer.PointerInstance.Uses`](/game-api/types/alta-world/chunkprefabpointer-pointerinstance#m-uses), [`ChunkReference.Chunk`](/game-api/types/alta-world/chunkreference#m-chunk), [`ChunkReference.ChunkReference`](/game-api/types/alta-world/chunkreference#m-ctor), [`ChunkSync.chunk`](/game-api/types/alta-world/chunksync#m-chunk), [`ClientChunkContentManager.ClientChunkContentManager`](/game-api/types/alta-world/clientchunkcontentmanager#m-ctor), [`DynamicChunkContentManager.chunk`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-chunk), [`DynamicChunkContentManager.DynamicChunkContentManager`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-ctor), [`EmptyChunkContentManager.EmptyChunkContentManager`](/game-api/types/alta-world/emptychunkcontentmanager#m-ctor), [`FastChunkLookup.AddChunksInGrid`](/game-api/types/alta-world/fastchunklookup#m-addchunksingrid), [`FastChunkLookup.GetChunksToLoadWithinRadius`](/game-api/types/alta-world/fastchunklookup#m-getchunkstoloadwithinradius), [`LocationChunk.GetNeighboursForLoading`](/game-api/types/alta-world/locationchunk#m-getneighboursforloading), [`LocationChunkHelper.GetChunksToLoad`](/game-api/types/alta-world/locationchunkhelper#m-getchunkstoload), [`LocationChunkHelper.GetChunksWithinRadius`](/game-api/types/alta-world/locationchunkhelper#m-getchunkswithinradius), [`OverworldChunk.GetNeighboursForLoading`](/game-api/types/alta-world/overworldchunk#m-getneighboursforloading), [`PlayerEntitySync.chunk`](/game-api/types/alta-world/playerentitysync#m-chunk), [`PlayerEntitySync.PlayerEntitySync`](/game-api/types/alta-world/playerentitysync#m-ctor), [`PlayerEntitySyncServer.OnChunkLoaded`](/game-api/types/alta-world/playerentitysyncserver#m-onchunkloaded), [`PlayerEntitySyncServer.OnChunkUnloaded`](/game-api/types/alta-world/playerentitysyncserver#m-onchunkunloaded), [`PlayerEntitySyncServer.PlayerEntitySyncServer`](/game-api/types/alta-world/playerentitysyncserver#m-ctor), [`PrefabLoadManager.loadedPointerPrefabs`](/game-api/types/alta-world/prefabloadmanager#m-loadedpointerprefabs), [`PrefabLoadManager.LoadPointer`](/game-api/types/alta-world/prefabloadmanager#m-loadpointer), [`PrefabLoadManager.UnloadPointer`](/game-api/types/alta-world/prefabloadmanager#m-unloadpointer), [`ServerChunkContentManager.ServerChunkContentManager`](/game-api/types/alta-world/serverchunkcontentmanager#m-ctor), [`StaticChunkContentManager.StaticChunkContentManager`](/game-api/types/alta-world/staticchunkcontentmanager#m-ctor), [`WorldLandmark.LoadedChunks`](/game-api/types/alta-world/worldlandmark#m-loadedchunks-2), [`WorldLandmark.sceneLoadedChunks`](/game-api/types/alta-world/worldlandmark#m-sceneloadedchunks), [`WorldLandmark.sceneStaticChunks`](/game-api/types/alta-world/worldlandmark#m-scenestaticchunks), [`WorldLandmark.StaticChunks`](/game-api/types/alta-world/worldlandmark#m-staticchunks-2), [`WorldLandmarkManager.AttemptLoadLandmark`](/game-api/types/alta-world/worldlandmarkmanager#m-attemptloadlandmark), [`WorldLandmarkManager.AttemptLoadLandmarkFromStatic`](/game-api/types/alta-world/worldlandmarkmanager#m-attemptloadlandmarkfromstatic), [`WorldLandmarkManager.AttemptUnloadLandmark`](/game-api/types/alta-world/worldlandmarkmanager#m-attemptunloadlandmark), [`WorldLandmarkManager.ForceUnloadLandmark`](/game-api/types/alta-world/worldlandmarkmanager#m-forceunloadlandmark), [`WorldLandmarkManager.toLoad`](/game-api/types/alta-world/worldlandmarkmanager#m-toload), [`WorldLandmarkManager.toUnload`](/game-api/types/alta-world/worldlandmarkmanager#m-tounload), [`ChunkInfo.op_Implicit`](/game-api/types/alta-console/chunkinfo#m-op-implicit), [`ProfilingCommandModule.ChunkUnloaded`](/game-api/types/alta-console/profilingcommandmodule#m-chunkunloaded), [`ProfilingCommandModule.loadedChunks`](/game-api/types/alta-console/profilingcommandmodule#m-loadedchunks), [`SpawnCommandModule.Spawn`](/game-api/types/alta-console/spawncommandmodule#m-spawn), [`UserInfoDetailed.Chunk`](/game-api/types/alta-console/userinfodetailed#m-chunk), [`WackyCommandModule.DestroyBase`](/game-api/types/alta-console/wackycommandmodule#m-destroybase), [`GenericCraftingPiece.ApplySaveData`](/game-api/types/alta-crafting/genericcraftingpiece#m-applysavedata) and 137 more.
