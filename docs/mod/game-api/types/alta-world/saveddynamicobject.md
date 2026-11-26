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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `IDisposable`
- **Derived types** [`SerializedSavedDynamicObject`](/mod/game-api/types/global-s/serializedsaveddynamicobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SavedDynamicObject(uint[] savingData, uint sizeInBytes, uint prefabHash)"}</code> | <span className="api-desc">Creates a `SavedDynamicObject` from `savingData`, `sizeInBytes` and `prefabHash`.</span> |
| <Link id="m-ctor-2" /><code>{"SavedDynamicObject(List<uint[]> savingData, uint sizeInBytes, uint prefabHash)"}</code> | <span className="api-desc">Creates a `SavedDynamicObject` from `savingData`, `sizeInBytes` and `prefabHash`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"protected List<uint[]> data"}</code> | <span className="api-desc">Backing list for `Data`.</span> |
| <Link id="m-hash" /><code>{"protected uint hash"}</code> | <span className="api-desc">Backing field for `Hash`.</span> |
| <Link id="m-messagesizeinbytes" /><code>{"protected uint messageSizeInBytes"}</code> | <span className="api-desc">Backing field for `MessageSizeInBytes`.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-pool" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<uint> pool"}</code> | <span className="api-desc">Shared uint array pool the saved data arrays come from.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code>{"List<uint[]> Data { get; }"}</code> | <span className="api-desc">The packed save data, in pooled 512-word buffers.</span> |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> | <span className="api-desc">Prefab hash of the saved entity.</span> |
| <Link id="m-messagesizeinbytes-2" /><code>{"uint MessageSizeInBytes { get; }"}</code> | <span className="api-desc">Size of the saved data in bytes.</span> |
| <Link id="m-messagesizeinwords" /><code>{"uint MessageSizeInWords { get; }"}</code> | <span className="api-desc">Size of the saved data in 32-bit words, rounded up.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Returns the data buffers to the pool.</span> |
| <Link id="m-getpositionlesssaveof" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetPositionlessSaveOf("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Saves an entity and its children without its position.</span> |
| <Link id="m-getsaveof" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetSaveOf("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Saves an entity and its children in the latest save format.</span> |
| <Link id="m-getversion" /><code>{"virtual "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" GetVersion()"}</code> | <span className="api-desc">Save format versions of the data. The latest by default.</span> |
| <Link id="m-getwriter" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" GetWriter(out List<uint[]> data)"}</code> | <span className="api-desc">Makes a stream writer that collects its output into pooled buffers.</span> |
| <Link id="m-spawn" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | <span className="api-desc">Spawns the prefab and loads the saved data into it, without initializing. Null if the prefab doesn't exist.</span> |
| <Link id="m-spawnowned" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnOwned("}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> | <span className="api-desc">Spawns, runs load setup and initializes the entity and its children on the server.</span> |
| <Link id="m-stringversion" /><code>{"virtual string StringVersion()"}</code> | <span className="api-desc">Text form: hash, size, the data words, then `\|` and the format versions.</span> |

## Used in

Members of other types that take, return or hold a `SavedDynamicObject`:

<div className="api-used-in">

[`DynamicChunkContentManager.GetEmbeddedSave`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-getembeddedsave), [`DynamicChunkContentManager.LoadSerializeEmbeddedEntity`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeembeddedentity), [`DynamicChunkContentManager.LoadSerializeEntity`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeentity), [`DynamicChunkContentManager.LoadSingle`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadsingle), [`SavableSavedDynamicObject.op_Implicit`](/mod/game-api/types/alta-world/savablesaveddynamicobject#m-op-implicit), [`PickupDock.serializedData`](/mod/game-api/types/alta-items/pickupdock#m-serializeddata), [`DownedState.leftInteractorSave`](/mod/game-api/types/alta-player/downedstate#m-leftinteractorsave), [`DownedState.rightInteractorSave`](/mod/game-api/types/alta-player/downedstate#m-rightinteractorsave), [`DownedState.SpawnInteractableFromSave`](/mod/game-api/types/alta-player/downedstate#m-spawninteractablefromsave), [`DownedState.TrySaveInteractable`](/mod/game-api/types/alta-player/downedstate#m-trysaveinteractable), [`ChunkSaveFormat.LoadObject`](/mod/game-api/types/alta-utilities/chunksaveformat#m-loadobject), [`ChunkSaveFormat.SaveObject`](/mod/game-api/types/alta-utilities/chunksaveformat#m-saveobject), [`ChunkSaveFormat.Version.ChunkData`](/mod/game-api/types/alta-utilities/chunksaveformat-version#m-chunkdata), [`ChunkSaveFormat.Version.Objects`](/mod/game-api/types/alta-utilities/chunksaveformat-version#m-objects), [`InGameInspector.ClonerTool.GetSaveOf`](/mod/game-api/types/global-i-l/ingameinspector-clonertool#m-getsaveof), [`InGameInspector.ClonerTool.savedTool`](/mod/game-api/types/global-i-l/ingameinspector-clonertool#m-savedtool), [`SentGift.Setup`](/mod/game-api/types/global-s/sentgift#m-setup).

</div>
