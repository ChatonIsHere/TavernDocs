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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** [`IAltaFileFormat`](/mod/game-api/types/assembly-other/ialtafileformat)
- **Nested types** [`Version`](/mod/game-api/types/alta-utilities/chunksaveformat-version)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkSaveFormat()"}</code> | <span className="api-desc">Creates a `ChunkSaveFormat` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-versions" /><code>{"List<"}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{"> Versions"}</code> | <span className="api-desc">Saved versions of the chunk. The first is the one applied.</span> |

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentsaveversion" /><code>{"private const "}<Link to="/mod/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" CurrentSaveVersion"}</code> | <span className="api-desc">The chunk save version this build writes (`Release1720`).</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for date read errors.</span> |
| <Link id="m-usecount" /><code>{"private int useCount"}</code> | <span className="api-desc">Reference count; `Clone` increments it and `Dispose` only frees saved objects when it reaches zero.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-date" /><code>{"DateTime? Date { get; set; }"}</code> | <span className="api-desc">Save date. One date is read and written for the whole file.</span> |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> | <span className="api-desc">Name of the save file.</span> |
| <Link id="m-saveversion" /><code><Link to="/mod/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" SaveVersion { get; private set; }"}</code> | <span className="api-desc">Format version read from the file header.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applychunksave" /><code>{"void ApplyChunkSave("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Loads the first version's chunk data into the chunk's entity. Only while playing.</span> |
| <Link id="m-clone" /><code>{"override "}<Link to="/mod/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> | <span className="api-desc">Returns the same object and adds a user, rather than copying.</span> |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> | <span className="api-desc">Drops a user. When none are left, disposes all saved objects.</span> |
| <Link id="m-loadobject" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" LoadObject(BinaryReader reader)"}</code> | <span className="api-desc">Reads one saved object (data words, size and prefab hash).</span> |
| <Link id="m-loadversion" /><code>{"static "}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" LoadVersion(BinaryReader reader, int index = 0)"}</code> | <span className="api-desc">Reads one version: versioning, chunk data and objects.</span> |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> | <span className="api-desc">Reads every version from a file stream.</span> |
| <Link id="m-saveobject" /><code>{"static void SaveObject(BinaryWriter writer, "}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" saving)"}</code> | <span className="api-desc">Writes one saved object.</span> |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> | <span className="api-desc">Writes every version to a stream. Writes nothing if there are none.</span> |
| <Link id="m-writeversion" /><code>{"static void WriteVersion(BinaryWriter writer, "}<Link to="/mod/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" version)"}</code> | <span className="api-desc">Writes one version.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-loaddate" /><code>{"private void LoadDate(BinaryReader reader)"}</code> | <span className="api-desc">Reads the saved date after a version block if at least 12 bytes remain; falls back to now on a bad date.</span> |
| <Link id="m-savedate" /><code>{"private void SaveDate(BinaryWriter writer)"}</code> | <span className="api-desc">Writes `Date` (or now) as six 16-bit values: year, month, day, hour, minute, second.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkSaveFormat`:

<div className="api-used-in">

[`DynamicChunkContentManager.CreateSave`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-createsave), [`DynamicChunkContentManager.IsSaveValid`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-issavevalid), [`DynamicChunkContentManager.LoadEntities`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadentities), [`DynamicChunkContentManager.loadFileTask`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadfiletask), [`DynamicChunkContentManager.LoadFromFile`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadfromfile), [`DynamicChunkContentManager.LoadFromSaveOrResources`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadfromsaveorresources), [`DynamicChunkContentManager.Merge`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-merge).

</div>
