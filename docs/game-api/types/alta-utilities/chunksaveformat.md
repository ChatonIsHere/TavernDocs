---
title: "ChunkSaveFormat"
description: "File format for one chunk's save: a list of versions, each with the chunk's own data and its saved objects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkSaveFormat

A **class** in `Root.Township`, `Alta.Utilities`.

File format for one chunk's save: a list of versions, each with the chunk's own data and its saved objects. Shared by reference count.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** [`IAltaFileFormat`](/game-api/types/assembly-other/ialtafileformat)
- **Nested types** [`Version`](/game-api/types/alta-utilities/chunksaveformat-version)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkSaveFormat()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-versions" /><code>{"List<"}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{"> Versions"}</code> | Saved versions of the chunk. The first is the one applied. |
| <Link id="m-currentsaveversion" /><code>{"private const "}<Link to="/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" CurrentSaveVersion"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-usecount" /><code>{"private int useCount"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-date" /><code>{"DateTime? Date { get; set; }"}</code> | Save date. One date is read and written for the whole file. |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | Name of the save file. |
| <Link id="m-saveversion" /><code><Link to="/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" SaveVersion { get; private set; }"}</code> | Format version read from the file header. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applychunksave" /><code>{"void ApplyChunkSave("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Loads the first version's chunk data into the chunk's entity. Only while playing. |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | Returns the same object and adds a user, rather than copying. |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | Drops a user. When none are left, disposes all saved objects. |
| <Link id="m-loadobject" /><code>{"static "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" LoadObject(BinaryReader reader)"}</code> | Reads one saved object (data words, size and prefab hash). |
| <Link id="m-loadversion" /><code>{"static "}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" LoadVersion(BinaryReader reader, int index = 0)"}</code> | Reads one version: versioning, chunk data and objects. |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | Reads every version from a file stream. |
| <Link id="m-saveobject" /><code>{"static void SaveObject(BinaryWriter writer, "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" saving)"}</code> | Writes one saved object. |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | Writes every version to a stream. Writes nothing if there are none. |
| <Link id="m-writeversion" /><code>{"static void WriteVersion(BinaryWriter writer, "}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" version)"}</code> | Writes one version. |
| <Link id="m-loaddate" /><code>{"private void LoadDate(BinaryReader reader)"}</code> |  |
| <Link id="m-savedate" /><code>{"private void SaveDate(BinaryWriter writer)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkSaveFormat`:

[`DynamicChunkContentManager.CreateSave`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-createsave), [`DynamicChunkContentManager.IsSaveValid`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-issavevalid), [`DynamicChunkContentManager.LoadEntities`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadentities), [`DynamicChunkContentManager.loadFileTask`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadfiletask), [`DynamicChunkContentManager.LoadFromFile`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadfromfile), [`DynamicChunkContentManager.LoadFromSaveOrResources`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadfromsaveorresources), [`DynamicChunkContentManager.Merge`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-merge).
