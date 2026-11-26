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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkReference("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Creates a `ChunkReference` with default values. |
| <Link id="m-ctor-2" /><code>{"ChunkReference()"}</code> | Creates a `ChunkReference` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunkidentifier" /><code>{"private string chunkIdentifier"}</code> | Backing field for `ChunkIdentifier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" { get; }"}</code> | Looks up the chunk with this identifier; null if it isn't loaded or doesn't exist. |
| <Link id="m-chunkidentifier-2" /><code>{"string ChunkIdentifier { get; }"}</code> | The stored chunk identifier. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | The chunk's own string if found, otherwise the raw identifier. |

## Used in

Members of other types that take, return or hold a `ChunkReference`:

[`WorldLandmark.loadedChunks`](/game-api/types/alta-world/worldlandmark#m-loadedchunks), [`WorldLandmark.staticChunks`](/game-api/types/alta-world/worldlandmark#m-staticchunks).
