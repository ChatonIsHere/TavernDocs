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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager)
- **Documented in** [Chunk loading and saving](/game-api/world/chunk-loading-and-saving)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DynamicChunkContentManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, bool isLogging = false)"}</code> | Creates a `DynamicChunkContentManager` from `chunk` and `isLogging`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areentitiesloaded" /><code>{"private bool areEntitiesLoaded"}</code> | True once the chunk's entities have been loaded, until unload. |
| <Link id="m-cancelload" /><code>{"private CancellationTokenSource cancelLoad"}</code> | Cancels the procedural static load when the chunk unloads early. |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | The chunk this manager loads. |
| <Link id="m-chunkfile" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" chunkFile"}</code> | The chunk's save file. |
| <Link id="m-isloadingentities" /><code>{"private bool isLoadingEntities"}</code> | True while entities are being spawned from the save. |
| <Link id="m-islogging" /><code>{"private bool isLogging"}</code> | Turns on extra info and debug logging for this chunk. |
| <Link id="m-loadfiletask" /><code>{"private Task<ValueTuple<bool, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{">> loadFileTask"}</code> | The running save file read, shared between callers. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-pool" /><code>{"private static "}<Link to="/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<uint> pool"}</code> | Shared array pool that unused save buffers go back to. |
| <Link id="m-scene" /><code>{"private "}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene"}</code> | The network scene the chunk belongs to. |
| <Link id="m-spawnmanager" /><code>{"private "}<Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" spawnManager"}</code> | The chunk's spawner, used to spawn and destroy entities. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activematrix" /><code>{"static "}<Link to="/game-api/types/alta-world/chunkmatrix">{"ChunkMatrix"}</Link>{" ActiveMatrix { get; set; }"}</code> | Offset matrix of the location chunk whose resource save is being loaded; loaders use it to move saved positions into place. Null otherwise. |
| <Link id="m-isallowingunload" /><code>{"override bool IsAllowingUnload { get; }"}</code> | False while entities are being loaded in. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"override async Task Clear()"}</code> | Clears the chunk's content and deletes its save file and backup. |
| <Link id="m-loadfromfile" /><code>{"async Task<ValueTuple<bool, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{">> LoadFromFile()"}</code> | Loads the chunk save, sharing one read task between callers. Returns whether it came from a real save file, and the save. |
| <Link id="m-mergewithresources" /><code>{"async Task MergeWithResources(uint hash)"}</code> | Waits for the chunk to unload, then resets every saved object with the given prefab hash to the default save's copies and writes the file. |
| <Link id="m-save" /><code>{"override async Task Save()"}</code> | Writes the chunk's current entities to its save file, unless it is still loading. |
| <Link id="m-startloadingfromfile" /><code>{"bool StartLoadingFromFile()"}</code> | Starts reading the save file early if it isn't loaded or loading yet. Returns true if it started. |
| <Link id="m-updateidentifier" /><code>{"override void UpdateIdentifier()"}</code> | Picks up the chunk's new save file after its identifier changes. |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> | Loads the procedural static content, the save, the procedural dynamic content and then the entities. |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> | Saves and destroys the chunk's entities (or just destroys them if the scene has no save files). |
| <Link id="m-waitingtoloadforunload" /><code>{"protected override void WaitingToLoadForUnload()"}</code> | Cancels the running load when an unload is requested. |

<details>
<summary>13 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createsave" /><code>{"private "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" CreateSave(bool isDestroying)"}</code> | Builds a new chunk save from the chunk's current entities (or embedded entities for the global chunk). |
| <Link id="m-destroyentities" /><code>{"private void DestroyEntities()"}</code> | Destroys every prefab entity in the chunk without saving. Used on unload when the scene has no save files. |
| <Link id="m-getembeddedsave" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetEmbeddedSave("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint hash)"}</code> | Serializes one entity into a saved object, or returns null if there was nothing to write. |
| <Link id="m-issavevalid" /><code>{"private bool IsSaveValid("}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" save)"}</code> | False when the save's version is older than the chunk's `MinimumSaveVersion`, so the default save is used instead. |
| <Link id="m-loadentities" /><code>{"private void LoadEntities("}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" save, bool hasGenerated)"}</code> | Spawns every saved object in the save, runs load setup and server init on root entities, then puts them in the chunk. Skips unknown prefab hashes. |
| <Link id="m-loadfromsaveorresources" /><code>{"private async Task<ValueTuple<bool, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{">> LoadFromSaveOrResources()"}</code> | Reads the chunk's save file if valid; otherwise loads the default save `Save/<chunk id>` from Resources, or makes an empty one. |
| <Link id="m-loadserializeembeddedentity" /><code>{"private void LoadSerializeEmbeddedEntity("}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedObject, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Applies a saved object to the matching embedded scene entity, for the global chunk. |
| <Link id="m-loadserializeentity" /><code>{"private void LoadSerializeEntity("}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedObject, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, ref "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Spawns an entity from a saved object's prefab hash (if not given one) and reads its saved data into it. |
| <Link id="m-loadsingle" /><code>{"private void LoadSingle("}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedObject, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Loads one saved object back into the chunk. Used when an unloaded-chunk entity has to be restored. |
| <Link id="m-merge" /><code>{"private void Merge(uint hash, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" current, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" resources = null)"}</code> | Removes every object with the given prefab hash from a save, then adds back the ones in the resources save. |
| <Link id="m-saveembedded" /><code>{"private void SaveEmbedded("}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" version)"}</code> | Saves the global chunk's embedded (non-prefab) entities. |
| <Link id="m-saveentities" /><code>{"private void SaveEntities("}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" version, bool isDestroying)"}</code> | Saves each entity with save mode `Base` that is above y -15000; when destroying, also destroys all of the chunk's entities. |
| <Link id="m-unloadsingle" /><code>{"private async void UnloadSingle("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Handles an entity entering this chunk while it is unloaded: saves it into the chunk save, or destroys it if it isn't saved. |

</details>

## Used in

Members of other types that take, return or hold a `DynamicChunkContentManager`:

[`ServerChunkContentManager.DynamicManager`](/game-api/types/alta-world/serverchunkcontentmanager#m-dynamicmanager).
