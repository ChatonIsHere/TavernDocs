---
title: "DynamicChunkContentManager"
description: "The chunk's save file, procedural content, then its entities."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DynamicChunkContentManager

A **class** in `Root.Township`, `Alta.Chunks`.

The chunk's save file, procedural content, then its entities.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`ChunkContentManager`](/game-api/types/alta-world/chunkcontentmanager)
- **Documented in** [Chunk loading and saving](/game-api/world/chunk-loading-and-saving)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DynamicChunkContentManager("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk, bool isLogging = false)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-areentitiesloaded" /><code>{"private bool areEntitiesLoaded"}</code> |  |
| <Link id="m-cancelload" /><code>{"private CancellationTokenSource cancelLoad"}</code> |  |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> |  |
| <Link id="m-chunkfile" /><code>{"private "}<Link to="/game-api/types/assembly-other/ialtafile">{"IAltaFile"}</Link>{" chunkFile"}</code> |  |
| <Link id="m-isloadingentities" /><code>{"private bool isLoadingEntities"}</code> |  |
| <Link id="m-islogging" /><code>{"private bool isLogging"}</code> |  |
| <Link id="m-loadfiletask" /><code>{"private Task<ValueTuple<bool, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{">> loadFileTask"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-pool" /><code>{"private static "}<Link to="/game-api/types/assembly-other/unclearedpower2arraypool-t">{"UnclearedPower2ArrayPool"}</Link>{"<uint> pool"}</code> |  |
| <Link id="m-scene" /><code>{"private "}<Link to="/game-api/types/alta-networking/inetworkscene">{"INetworkScene"}</Link>{" scene"}</code> |  |
| <Link id="m-spawnmanager" /><code>{"private "}<Link to="/game-api/types/alta-networking/spawnmanager">{"SpawnManager"}</Link>{" spawnManager"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activematrix" /><code>{"static "}<Link to="/game-api/types/alta-world/chunkmatrix">{"ChunkMatrix"}</Link>{" ActiveMatrix { get; set; }"}</code> |  |
| <Link id="m-isallowingunload" /><code>{"override bool IsAllowingUnload { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"override async Task Clear()"}</code> |  |
| <Link id="m-loadfromfile" /><code>{"async Task<ValueTuple<bool, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{">> LoadFromFile()"}</code> |  |
| <Link id="m-mergewithresources" /><code>{"async Task MergeWithResources(uint hash)"}</code> |  |
| <Link id="m-save" /><code>{"override async Task Save()"}</code> |  |
| <Link id="m-startloadingfromfile" /><code>{"bool StartLoadingFromFile()"}</code> |  |
| <Link id="m-updateidentifier" /><code>{"override void UpdateIdentifier()"}</code> |  |
| <Link id="m-createsave" /><code>{"private "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" CreateSave(bool isDestroying)"}</code> |  |
| <Link id="m-destroyentities" /><code>{"private void DestroyEntities()"}</code> |  |
| <Link id="m-getembeddedsave" /><code>{"private "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" GetEmbeddedSave("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, uint hash)"}</code> |  |
| <Link id="m-issavevalid" /><code>{"private bool IsSaveValid("}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" save)"}</code> |  |
| <Link id="m-loadentities" /><code>{"private void LoadEntities("}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" save, bool hasGenerated)"}</code> |  |
| <Link id="m-loadfromsaveorresources" /><code>{"private async Task<ValueTuple<bool, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{">> LoadFromSaveOrResources()"}</code> |  |
| <Link id="m-loadinternal" /><code>{"protected override async Task LoadInternal()"}</code> |  |
| <Link id="m-loadserializeembeddedentity" /><code>{"private void LoadSerializeEmbeddedEntity("}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedObject, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> |  |
| <Link id="m-loadserializeentity" /><code>{"private void LoadSerializeEntity("}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedObject, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning, ref "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-loadsingle" /><code>{"private void LoadSingle("}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" savedObject, "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" chunkVersioning)"}</code> |  |
| <Link id="m-merge" /><code>{"private void Merge(uint hash, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" current, "}<Link to="/game-api/types/alta-utilities/chunksaveformat">{"ChunkSaveFormat"}</Link>{" resources = null)"}</code> |  |
| <Link id="m-saveembedded" /><code>{"private void SaveEmbedded("}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" version)"}</code> |  |
| <Link id="m-saveentities" /><code>{"private void SaveEntities("}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" version, bool isDestroying)"}</code> |  |
| <Link id="m-unloadinternal" /><code>{"protected override async Task UnloadInternal()"}</code> |  |
| <Link id="m-unloadsingle" /><code>{"private async void UnloadSingle("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-waitingtoloadforunload" /><code>{"protected override void WaitingToLoadForUnload()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DynamicChunkContentManager`:

[`ServerChunkContentManager.DynamicManager`](/game-api/types/alta-world/serverchunkcontentmanager#m-dynamicmanager).
