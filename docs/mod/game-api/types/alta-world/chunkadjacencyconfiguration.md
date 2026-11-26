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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkAdjacencyConfiguration(float connectionCost, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Creates a `ChunkAdjacencyConfiguration` with default values.</span> |
| <Link id="m-ctor-2" /><code>{"ChunkAdjacencyConfiguration()"}</code> | <span className="api-desc">Creates a `ChunkAdjacencyConfiguration` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk"}</code> | <span className="api-desc">Backing field for `Chunk`.</span> |
| <Link id="m-connectioncost" /><code>{"private float connectionCost"}</code> | <span className="api-desc">Backing field for `ConnectionCost`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk-2" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; }"}</code> | <span className="api-desc">The location chunk on the other end of the link.</span> |
| <Link id="m-connectioncost-2" /><code>{"float ConnectionCost { get; }"}</code> | <span className="api-desc">Cost of crossing this link (default 1).</span> |

## Used in

Members of other types that take, return or hold a `ChunkAdjacencyConfiguration`:

<div className="api-used-in">

[`ChunkConnections.forcedAdjacent`](/mod/game-api/types/alta-world/chunkconnections#m-forcedadjacent), [`ChunkConnections.ForcedAdjacent`](/mod/game-api/types/alta-world/chunkconnections#m-forcedadjacent-2).

</div>
