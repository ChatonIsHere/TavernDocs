---
title: "DynamicChunkContentManager"
description: "Loads, saves and unloads the saved entities of one chunk: reads the chunk's save file (or the default save in Resources), spawns its entities, and writes..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicChunkContentManager

A **class** in `Root.Township`, `Alta.Chunks`.

Loads, saves and unloads the saved entities of one chunk: reads the chunk's save file (or the default save in Resources), spawns its entities, and writes them back on save or unload. Server side; created per chunk.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/mod/game-api/types/alta-world/chunkcontentmanager)
- **Documented in** [Chunk loading and saving](/mod/game-api/world/chunk-loading-and-saving)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DynamicChunkContentManager("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, bool isLogging = false)"}</code> | <span className="api-desc">Creates a `DynamicChunkContentManager` from `chunk` and `isLogging`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areentitiesloaded" /><code>{"private bool areEntitiesLoaded"}</code> | <span className="api-desc">True once the chunk's entities have been loaded, until unload.</span> |
| <Link id="m-cancelload" /><code>{"private CancellationTokenSource cancelLoad"}</code> | <span className="api-desc">Cancels the procedural static load when the chunk unloads early.</span> |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">The chunk this manager loads.</span> |
| <Link id="m-chunkfile" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" chunkFile"}</code> | <span className="api-desc">The chunk's save file.</span> |
| <Link id="m-isloadingentities" /><code>{"private bool isLoadingEntities"}</code> | <span className="api-desc">True while entities are being spawned from the save.</span> |
| <Link id="m-islogging" /><code>{"private bool isLogging"}</code> | <span className="api-desc">Turns on extra info and debug logging for this chunk.</span> |
| <Link id="m-loadfiletask" /><code>{"private Task<ValueTuple<bool, "}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{">> loadFileTask"}</code> | <span className="api-desc">The running save file read, shared between callers.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-pool" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<uint> pool"}</code> | <span className="api-desc">Shared array pool that unused save buffers go back to.</span> |
| <Link id="m-scene" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene"}</code> | <span className="api-desc">The network scene the chunk belongs to.</span> |
| <Link id="m-spawnmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" spawnManager"}</code> | <span className="api-desc">The chunk's spawner, used to spawn and destroy entities.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activematrix" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/chunkmatrix">{"ChunkMatrix"}</Link>{" ActiveMatrix { get; set; }"}</code> | <span className="api-desc">Offset matrix of the location chunk whose resource save is being loaded; loaders use it to move saved positions into place. Null otherwise.</span> |
| <Link id="m-isallowingunload" /><code>{"override bool IsAllowingUnload { get; }"}</code> | <span className="api-desc">False while entities are being loaded in.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"override async Task Clear()"}</code> | <span className="api-desc">Clears the chunk's content and deletes its save file and backup.</span> |
| <Link id="m-loadfromfile" /><code>{"async Task<ValueTuple<bool, "}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{">> LoadFromFile()"}</code> | <span className="api-desc">Loads the chunk save, sharing one read task between callers. Returns whether it came from a real save file, and the save.</span> |
| <Link id="m-mergewithresources" /><code>{"async Task MergeWithResources(uint hash)"}</code> | <span className="api-desc">Waits for the chunk to unload, then resets every saved object with the given prefab hash to the default save's copies and writes the file.</span> |
| <Link id="m-save" /><code>{"override async Task Save()"}</code> | <span className="api-desc">Writes the chunk's current entities to its save file, unless it is still loading.</span> |
| <Link id="m-startloadingfromfile" /><code>{"bool StartLoadingFromFile()"}</code> | <span className="api-desc">Starts reading the save file early if it isn't loaded or loading yet. Returns true if it started.</span> |
| <Link id="m-updateidentifier" /><code>{"override void UpdateIdentifier()"}</code> | <span className="api-desc">Picks up the chunk's new save file after its identifier changes.</span> |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> | <span className="api-desc">Loads the procedural static content, the save, the procedural dynamic content and then the entities.</span> |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> | <span className="api-desc">Saves and destroys the chunk's entities (or just destroys them if the scene has no save files).</span> |
| <Link id="m-waitingtoloadforunload" /><code>{"protected override void WaitingToLoadForUnload()"}</code> | <span className="api-desc">Cancels the running load when an unload is requested.</span> |

<details className="api-private">
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createsave" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" CreateSave(bool isDestroying)"}</code> | <span className="api-desc">Builds a new chunk save from the chunk's current entities (or embedded entities for the global chunk).</span> |
| <Link id="m-destroyentities" /><code>{"private void DestroyEntities()"}</code> | <span className="api-desc">Destroys every prefab entity in the chunk without saving. Used on unload when the scene has no save files.</span> |
| <Link id="m-getembeddedsave" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetEmbeddedSave("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint hash)"}</code> | <span className="api-desc">Serializes one entity into a saved object, or returns null if there was nothing to write.</span> |
| <Link id="m-issavevalid" /><code>{"private bool IsSaveValid("}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" save)"}</code> | <span className="api-desc">False when the save's version is older than the chunk's `MinimumSaveVersion`, so the default save is used instead.</span> |
| <Link id="m-loadentities" /><code>{"private void LoadEntities("}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" save, bool hasGenerated)"}</code> | <span className="api-desc">Spawns every saved object in the save, runs load setup and server init on root entities, then puts them in the chunk. Skips unknown prefab hashes.</span> |
| <Link id="m-loadfromsaveorresources" /><code>{"private async Task<ValueTuple<bool, "}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{">> LoadFromSaveOrResources()"}</code> | <span className="api-desc">Reads the chunk's save file if valid; otherwise loads the default save `Save/<chunk id>` from Resources, or makes an empty one.</span> |
| <Link id="m-loadserializeembeddedentity" /><code>{"private void LoadSerializeEmbeddedEntity("}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedObject, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | <span className="api-desc">Applies a saved object to the matching embedded scene entity, for the global chunk.</span> |
| <Link id="m-loadserializeentity" /><code>{"private void LoadSerializeEntity("}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedObject, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, ref "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Spawns an entity from a saved object's prefab hash (if not given one) and reads its saved data into it.</span> |
| <Link id="m-loadsingle" /><code>{"private void LoadSingle("}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedObject, "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | <span className="api-desc">Loads one saved object back into the chunk. Used when an unloaded-chunk entity has to be restored.</span> |
| <Link id="m-merge" /><code>{"private void Merge(uint hash, "}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" current, "}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" resources = null)"}</code> | <span className="api-desc">Removes every object with the given prefab hash from a save, then adds back the ones in the resources save.</span> |
| <Link id="m-saveembedded" /><code>{"private void SaveEmbedded("}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" version)"}</code> | <span className="api-desc">Saves the global chunk's embedded (non-prefab) entities.</span> |
| <Link id="m-saveentities" /><code>{"private void SaveEntities("}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" version, bool isDestroying)"}</code> | <span className="api-desc">Saves each entity with save mode `Base` that is above y -15000; when destroying, also destroys all of the chunk's entities.</span> |
| <Link id="m-unloadsingle" /><code>{"private async void UnloadSingle("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Handles an entity entering this chunk while it is unloaded: saves it into the chunk save, or destroys it if it isn't saved.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DynamicChunkContentManager`:

<div className="api-used-in">

[`ServerChunkContentManager.DynamicManager`](/mod/game-api/types/alta-world/serverchunkcontentmanager#m-dynamicmanager).

</div>
