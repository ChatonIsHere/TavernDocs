---
title: "ChunkSaveFormat.Version"
description: "One block of a chunk save file: the chunk data and saved objects written under one chunk versioning."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkSaveFormat.Version

A **class** in `Root.Township`, `Alta.Utilities`.

One block of a chunk save file: the chunk data and saved objects written under one chunk versioning. A file holds one block per versioning that has data in it.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Nested in** [`ChunkSaveFormat`](/game-api/types/alta-utilities/chunksaveformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Version()"}</code> | Creates a `ChunkSaveFormat.Version` from `versioning`. |
| <Link id="m-ctor-2" /><code>{"Version("}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | Creates a `ChunkSaveFormat.Version` from `versioning`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkdata" /><code><Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" ChunkData { get; set; }"}</code> | The chunk's own saved data, or null if none was saved. |
| <Link id="m-chunkversioning" /><code><Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" "}<Link to="/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" { get; set; }"}</code> | The save format versioning the objects in this block were written with; defaults to the latest. |
| <Link id="m-objects" /><code>{"List<"}<Link to="/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{"> Objects { get; set; }"}</code> | The saved entities in this block. |

## Used in

Members of other types that take, return or hold a `Version`:

[`DynamicChunkContentManager.SaveEmbedded`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-saveembedded), [`DynamicChunkContentManager.SaveEntities`](/game-api/types/alta-world/dynamicchunkcontentmanager#m-saveentities), [`ChunkSaveFormat.LoadVersion`](/game-api/types/alta-utilities/chunksaveformat#m-loadversion), [`ChunkSaveFormat.Versions`](/game-api/types/alta-utilities/chunksaveformat#m-versions), [`ChunkSaveFormat.WriteVersion`](/game-api/types/alta-utilities/chunksaveformat#m-writeversion), [`PlayerPostboxStorage.latest`](/game-api/types/global-p/playerpostboxstorage#m-latest), [`PlayerPostboxStorageFileFormat.Versions`](/game-api/types/global-p/playerpostboxstoragefileformat#m-versions).
