---
title: "ChunkAdjacencyConfiguration"
description: "One forced link from a location chunk to another chunk, with a travel cost."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkAdjacencyConfiguration

A **class** in `Root.Township`, `Alta.Chunks`.

One forced link from a location chunk to another chunk, with a travel cost. Held in `ChunkConnections.ForcedAdjacent` and walked by chunk lookup and audio environment code.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkAdjacencyConfiguration(float connectionCost, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | Creates a `ChunkAdjacencyConfiguration` with default values. |
| <Link id="m-ctor-2" /><code>{"ChunkAdjacencyConfiguration()"}</code> | Creates a `ChunkAdjacencyConfiguration` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | Backing field for `Chunk`. |
| <Link id="m-connectioncost" /><code>{"private float connectionCost"}</code> | Backing field for `ConnectionCost`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | The location chunk on the other end of the link. |
| <Link id="m-connectioncost-2" /><code>{"float ConnectionCost { get; }"}</code> | Cost of crossing this link (default 1). |

## Used in

Members of other types that take, return or hold a `ChunkAdjacencyConfiguration`:

[`ChunkConnections.forcedAdjacent`](/game-api/types/alta-world/chunkconnections#m-forcedadjacent), [`ChunkConnections.ForcedAdjacent`](/game-api/types/alta-world/chunkconnections#m-forcedadjacent-2).
