---
title: "SavedDynamicObject"
description: "class SavedDynamicObject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SavedDynamicObject

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `IDisposable`
- **Derived types** [`SerializedSavedDynamicObject`](/game-api/types/global-s/serializedsaveddynamicobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SavedDynamicObject(uint[] savingData, uint sizeInBytes, uint prefabHash)"}</code> |  |
| <Link id="m-ctor-2" /><code>{"SavedDynamicObject(List<uint[]> savingData, uint sizeInBytes, uint prefabHash)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"protected List<uint[]> data"}</code> |  |
| <Link id="m-hash" /><code>{"protected uint hash"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-messagesizeinbytes" /><code>{"protected uint messageSizeInBytes"}</code> |  |
| <Link id="m-pool" /><code>{"private static "}<Link to="/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<uint> pool"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data-2" /><code>{"List<uint[]> Data { get; }"}</code> |  |
| <Link id="m-hash-2" /><code>{"uint Hash { get; }"}</code> |  |
| <Link id="m-messagesizeinbytes-2" /><code>{"uint MessageSizeInBytes { get; }"}</code> |  |
| <Link id="m-messagesizeinwords" /><code>{"uint MessageSizeInWords { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |  |
| <Link id="m-getpositionlesssaveof" /><code>{"static "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetPositionlessSaveOf("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-getsaveof" /><code>{"static "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetSaveOf("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-getversion" /><code>{"virtual "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" GetVersion()"}</code> |  |
| <Link id="m-getwriter" /><code>{"static "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" GetWriter(out List<uint[]> data)"}</code> |  |
| <Link id="m-spawn" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Spawn("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> |  |
| <Link id="m-spawnowned" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" SpawnOwned("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> |  |
| <Link id="m-stringversion" /><code>{"virtual string StringVersion()"}</code> |  |

## Used in

Members of other types that take, return or hold a `SavedDynamicObject`:

[`DynamicChunkContentManager.GetEmbeddedSave`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-getembeddedsave), [`DynamicChunkContentManager.LoadSerializeEmbeddedEntity`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeembeddedentity), [`DynamicChunkContentManager.LoadSerializeEntity`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadserializeentity), [`DynamicChunkContentManager.LoadSingle`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadsingle), [`SavableSavedDynamicObject.op_Implicit`](/game-api/types/alta-world/savablesaveddynamicobject#m-op-implicit), [`PickupDock.serializedData`](/game-api/types/alta-items/pickupdock#m-serializeddata), [`DownedState.leftInteractorSave`](/game-api/types/alta-player/downedstate#m-leftinteractorsave), [`DownedState.rightInteractorSave`](/game-api/types/alta-player/downedstate#m-rightinteractorsave), [`DownedState.SpawnInteractableFromSave`](/game-api/types/alta-player/downedstate#m-spawninteractablefromsave), [`DownedState.TrySaveInteractable`](/game-api/types/alta-player/downedstate#m-trysaveinteractable), [`ChunkSaveFormat.LoadObject`](/game-api/types/alta-utilities/chunksaveformat#m-loadobject), [`ChunkSaveFormat.SaveObject`](/game-api/types/alta-utilities/chunksaveformat#m-saveobject), [`ChunkSaveFormat.Version.ChunkData`](/game-api/types/alta-utilities/chunksaveformat-version#m-chunkdata), [`ChunkSaveFormat.Version.Objects`](/game-api/types/alta-utilities/chunksaveformat-version#m-objects), [`InGameInspector.ClonerTool.GetSaveOf`](/game-api/types/global-i-l/ingameinspector-clonertool#m-getsaveof), [`InGameInspector.ClonerTool.savedTool`](/game-api/types/global-i-l/ingameinspector-clonertool#m-savedtool), [`SentGift.Setup`](/game-api/types/global-s/sentgift#m-setup).
