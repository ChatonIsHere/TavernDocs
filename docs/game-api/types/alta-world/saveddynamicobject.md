---
title: "SavedDynamicObject"
description: "One saved entity (with its child entities) as a prefab hash plus a packed bit stream."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavedDynamicObject

A **class** in `Root.Township`, `Alta.Chunks`.

One saved entity (with its child entities) as a prefab hash plus a packed bit stream. Chunk saves are lists of these, and `StringVersion` is the text form used by `select tostring` and spawn strings.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `IDisposable`
- **Derived types** [`SerializedSavedDynamicObject`](/game-api/types/global-s/serializedsaveddynamicobject)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SavedDynamicObject(uint[] savingData, uint sizeInBytes, uint prefabHash)"}</code> |
| <Link id="m-ctor-2" /><code>{"SavedDynamicObject(List<uint[]> savingData, uint sizeInBytes, uint prefabHash)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"protected List<uint[]> data"}</code> | Backing list for `Data`. |
| <Link id="m-hash" /><code>{"protected uint hash"}</code> | Backing field for `Hash`. |
| <Link id="m-messagesizeinbytes" /><code>{"protected uint messageSizeInBytes"}</code> | Backing field for `MessageSizeInBytes`. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-pool" /><code>{"private static "}<Link to="/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<uint> pool"}</code> | Shared uint array pool the saved data arrays come from. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code>{"List<uint[]> Data { get; }"}</code> | The packed save data, in pooled 512-word buffers. |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | Prefab hash of the saved entity. |
| <Link id="m-messagesizeinbytes-2" /><code>{"uint MessageSizeInBytes { get; }"}</code> | Size of the saved data in bytes. |
| <Link id="m-messagesizeinwords" /><code>{"uint MessageSizeInWords { get; }"}</code> | Size of the saved data in 32-bit words, rounded up. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Returns the data buffers to the pool. |
| <Link id="m-getpositionlesssaveof" /><code>{"static "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetPositionlessSaveOf("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Saves an entity and its children without its position. |
| <Link id="m-getsaveof" /><code>{"static "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetSaveOf("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | Saves an entity and its children in the latest save format. |
| <Link id="m-getversion" /><code>{"virtual "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" GetVersion()"}</code> | Save format versions of the data. The latest by default. |
| <Link id="m-getwriter" /><code>{"static "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" GetWriter(out List<uint[]> data)"}</code> | Makes a stream writer that collects its output into pooled buffers. |
| <Link id="m-spawn" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Spawns the prefab and loads the saved data into it, without initializing. Null if the prefab doesn't exist. |
| <Link id="m-spawnowned" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnOwned("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | Spawns, runs load setup and initializes the entity and its children on the server. |
| <Link id="m-stringversion" /><code>{"virtual string StringVersion()"}</code> | Text form: hash, size, the data words, then `\|` and the format versions. |

## Used in

Members of other types that take, return or hold a `SavedDynamicObject`:

[`DynamicChunkContentManager.GetEmbeddedSave`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-getembeddedsave), [`DynamicChunkContentManager.LoadSerializeEmbeddedEntity`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeembeddedentity), [`DynamicChunkContentManager.LoadSerializeEntity`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeentity), [`DynamicChunkContentManager.LoadSingle`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadsingle), [`SavableSavedDynamicObject.op_Implicit`](/game-api/types/alta-world/savablesaveddynamicobject#m-op-implicit), [`PickupDock.serializedData`](/game-api/types/alta-items/pickupdock#m-serializeddata), [`DownedState.leftInteractorSave`](/game-api/types/alta-player/downedstate#m-leftinteractorsave), [`DownedState.rightInteractorSave`](/game-api/types/alta-player/downedstate#m-rightinteractorsave), [`DownedState.SpawnInteractableFromSave`](/game-api/types/alta-player/downedstate#m-spawninteractablefromsave), [`DownedState.TrySaveInteractable`](/game-api/types/alta-player/downedstate#m-trysaveinteractable), [`ChunkSaveFormat.LoadObject`](/game-api/types/alta-utilities/chunksaveformat#m-loadobject), [`ChunkSaveFormat.SaveObject`](/game-api/types/alta-utilities/chunksaveformat#m-saveobject), [`ChunkSaveFormat.Version.ChunkData`](/game-api/types/alta-utilities/chunksaveformat-version#m-chunkdata), [`ChunkSaveFormat.Version.Objects`](/game-api/types/alta-utilities/chunksaveformat-version#m-objects), [`InGameInspector.ClonerTool.GetSaveOf`](/game-api/types/global-i-l/ingameinspector-clonertool#m-getsaveof), [`InGameInspector.ClonerTool.savedTool`](/game-api/types/global-i-l/ingameinspector-clonertool#m-savedtool), [`SentGift.Setup`](/game-api/types/global-s/sentgift#m-setup).
