---
title: "ChunkConnections"
description: "class ChunkConnections in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkConnections

A **class** in `Root.Township`, `Alta.Chunks`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkConnections()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-forcedadjacent" /><code>{"private List<"}<Link to="/game-api/types/alta-world/chunkadjacencyconfiguration">{"ChunkAdjacencyConfiguration"}</Link>{"> forcedAdjacent"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" Chunk { get; private set; }"}</code> |  |
| <Link id="m-forcedadjacent-2" /><code>{"List<"}<Link to="/game-api/types/alta-world/chunkadjacencyconfiguration">{"ChunkAdjacencyConfiguration"}</Link>{"> ForcedAdjacent { get; }"}</code> |  |
| <Link id="m-portals" /><code>{"List<"}<Link to="/game-api/types/global-c-d/cullingportal">{"CullingPortal"}</Link>{"> Portals { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-connecttwoway" /><code>{"static void ConnectTwoWay("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" a, "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" b, float connectionCost = 1)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-addadjacent" /><code>{"private void AddAdjacent("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" chunk, float connectionCost = 1)"}</code> |  |
| <Link id="m-removeadjacent" /><code>{"private void RemoveAdjacent("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ChunkConnections`:

[`LocationChunk.connections`](/game-api/types/alta-world/locationchunk#m-connections), [`LocationChunk.Connections`](/game-api/types/alta-world/locationchunk#m-connections-2).
