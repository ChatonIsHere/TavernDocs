---
title: "ChunkConnections"
description: "A location chunk's links to other chunks: forced adjacent chunks (set in the inspector or at runtime, for example cave layers) and culling portals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkConnections

A **class** in `Root.Township`, `Alta.Chunks`.

A location chunk's links to other chunks: forced adjacent chunks (set in the inspector or at runtime, for example cave layers) and culling portals. Found on `LocationChunk.Connections`.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkConnections()"}</code> | <span className="api-desc">Creates a `ChunkConnections` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forcedadjacent" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world/chunkadjacencyconfiguration">{"ChunkAdjacencyConfiguration"}</Link>{"> forcedAdjacent"}</code> | <span className="api-desc">Backing field for `ForcedAdjacent`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; logs each two-way connection made.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> | <span className="api-desc">The location chunk these connections belong to, set by `Initialize`.</span> |
| <Link id="m-forcedadjacent-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world/chunkadjacencyconfiguration">{"ChunkAdjacencyConfiguration"}</Link>{"> ForcedAdjacent { get; }"}</code> | <span className="api-desc">Chunks treated as adjacent to this one regardless of position.</span> |
| <Link id="m-portals" /><code>{"List<"}<Link to="/mod/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{"> Portals { get; }"}</code> | <span className="api-desc">Culling portals leading out of this chunk.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-connecttwoway" /><code>{"static void ConnectTwoWay("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" a, "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" b, float connectionCost = 1)"}</code> | <span className="api-desc">Links two location chunks to each other with the given cost. Used by `CaveLayerManager` to join caves to their entrances.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Sets the owning chunk.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addadjacent" /><code>{"private void AddAdjacent("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, float connectionCost = 1)"}</code> | <span className="api-desc">Adds a forced link to a chunk and removes it again when that chunk's entity is destroyed by the scene.</span> |
| <Link id="m-removeadjacent" /><code>{"private void RemoveAdjacent("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Drops the forced link to a chunk whose entity was destroyed. Hooked to `DestroyedByScene` by `AddAdjacent`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkConnections`:

<div className="api-used-in">

[`LocationChunk.connections`](/mod/game-api/types/alta-world/locationchunk#m-connections), [`LocationChunk.Connections`](/mod/game-api/types/alta-world/locationchunk#m-connections-2).

</div>
