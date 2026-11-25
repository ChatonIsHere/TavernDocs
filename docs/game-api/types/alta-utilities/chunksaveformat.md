---
title: "ChunkSaveFormat"
description: "class ChunkSaveFormat in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkSaveFormat

A **class** in `Root.Township`, `Alta.Utilities`.

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
| <Link id="m-versions" /><code>{"List<"}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{"> Versions"}</code> |  |
| <Link id="m-currentsaveversion" /><code>{"private const "}<Link to="/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" CurrentSaveVersion"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-usecount" /><code>{"private int useCount"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-date" /><code>{"DateTime? Date { get; set; }"}</code> |  |
| <Link id="m-name" /><code>{"string Name { get; set; }"}</code> |  |
| <Link id="m-saveversion" /><code><Link to="/game-api/types/alta-world/chunksaveversion">{"ChunkSaveVersion"}</Link>{" SaveVersion { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applychunksave" /><code>{"void ApplyChunkSave("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-clone" /><code>{"override "}<Link to="/game-api/types/assembly-other/ialtafileformat">{"IAltaFileFormat"}</Link>{" Clone()"}</code> |  |
| <Link id="m-dispose" /><code>{"override void Dispose()"}</code> |  |
| <Link id="m-loadobject" /><code>{"static "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" LoadObject(BinaryReader reader)"}</code> |  |
| <Link id="m-loadversion" /><code>{"static "}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" LoadVersion(BinaryReader reader, int index = 0)"}</code> |  |
| <Link id="m-readfrom" /><code>{"override void ReadFrom(FileInfo info, Stream stream)"}</code> |  |
| <Link id="m-saveobject" /><code>{"static void SaveObject(BinaryWriter writer, "}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" saving)"}</code> |  |
| <Link id="m-writeto" /><code>{"override void WriteTo(Stream stream, CancellationToken token)"}</code> |  |
| <Link id="m-writeversion" /><code>{"static void WriteVersion(BinaryWriter writer, "}<Link to="/game-api/types/alta-utilities/chunksaveformat-version">{"ChunkSaveFormat.Version"}</Link>{" version)"}</code> |  |
| <Link id="m-loaddate" /><code>{"private void LoadDate(BinaryReader reader)"}</code> |  |
| <Link id="m-savedate" /><code>{"private void SaveDate(BinaryWriter writer)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkSaveFormat`:

[`DynamicChunkContentManager.CreateSave`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-createsave), [`DynamicChunkContentManager.IsSaveValid`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-issavevalid), [`DynamicChunkContentManager.LoadEntities`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadentities), [`DynamicChunkContentManager.loadFileTask`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadfiletask), [`DynamicChunkContentManager.LoadFromFile`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadfromfile), [`DynamicChunkContentManager.LoadFromSaveOrResources`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-loadfromsaveorresources), [`DynamicChunkContentManager.Merge`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-merge).
