---
title: "ChunkReference"
description: "A serializable reference to a chunk by its identifier string, resolved through Chunk.ChunksByIdentifier when read."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkReference

A **class** in `Root.Township`, `Alta.Chunks`.

A serializable reference to a chunk by its identifier string, resolved through `Chunk.ChunksByIdentifier` when read.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkReference("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates a `ChunkReference` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"ChunkReference()"}</code> | <span className="api-desc">Creates a `ChunkReference` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkidentifier" /><code>{"private string chunkIdentifier"}</code> | <span className="api-desc">Backing field for `ChunkIdentifier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> | <span className="api-desc">Looks up the chunk with this identifier; null if it isn't loaded or doesn't exist.</span> |
| <Link id="m-chunkidentifier-2" /><code>{"string ChunkIdentifier { get; }"}</code> | <span className="api-desc">The stored chunk identifier.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">The chunk's own string if found, otherwise the raw identifier.</span> |

## Used in

Members of other types that take, return or hold a `ChunkReference`:

<div className="api-used-in">

[`WorldLandmark.loadedChunks`](/mod/game-api/types/alta-world/worldlandmark#m-loadedchunks), [`WorldLandmark.staticChunks`](/mod/game-api/types/alta-world/worldlandmark#m-staticchunks).

</div>
