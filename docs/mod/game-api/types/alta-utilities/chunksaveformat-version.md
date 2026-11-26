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

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Nested in** [`ChunkSaveFormat`](/mod/game-api/types/alta-utilities/chunksaveformat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Version()"}</code> | <span className="api-desc">Creates a `ChunkSaveFormat.Version` from `versioning`.</span> |
| <Link id="m-ctor-2" /><code>{"Version("}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" versioning)"}</code> | <span className="api-desc">Creates a `ChunkSaveFormat.Version` from `versioning`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunkdata" /><code><Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{" ChunkData { get; set; }"}</code> | <span className="api-desc">The chunk's own saved data, or null if none was saved.</span> |
| <Link id="m-chunkversioning" /><code><Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunkversioning">{"ChunkVersioning"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The save format versioning the objects in this block were written with; defaults to the latest.</span> |
| <Link id="m-objects" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world/saveddynamicobject">{"SavedDynamicObject"}</Link>{"> Objects { get; set; }"}</code> | <span className="api-desc">The saved entities in this block.</span> |

## Used in

Members of other types that take, return or hold a `Version`:

<div className="api-used-in">

[`DynamicChunkContentManager.SaveEmbedded`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-saveembedded), [`DynamicChunkContentManager.SaveEntities`](/mod/game-api/types/alta-world/dynamicchunkcontentmanager#m-saveentities), [`ChunkSaveFormat.LoadVersion`](/mod/game-api/types/alta-utilities/chunksaveformat#m-loadversion), [`ChunkSaveFormat.Versions`](/mod/game-api/types/alta-utilities/chunksaveformat#m-versions), [`ChunkSaveFormat.WriteVersion`](/mod/game-api/types/alta-utilities/chunksaveformat#m-writeversion), [`PlayerPostboxStorage.latest`](/mod/game-api/types/global-p/playerpostboxstorage#m-latest), [`PlayerPostboxStorageFileFormat.Versions`](/mod/game-api/types/global-p/playerpostboxstoragefileformat#m-versions).

</div>
