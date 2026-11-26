---
title: "ChunkSync.Set"
description: "Server: per-player list of chunk spawn and despawn syncs in progress, used by ChunkSync to pace how many entities it sends each player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkSync.Set

A **private class** in `Root.Township`, `Alta.Chunks`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Server: per-player list of chunk spawn and despawn syncs in progress, used by `ChunkSync` to pace how many entities it sends each player.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested in** [`ChunkSync`](/mod/game-api/types/alta-world/chunksync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Set()"}</code> | <span className="api-desc">Creates a `ChunkSync.Set` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nextsendtime" /><code>{"float nextSendTime"}</code> | <span className="api-desc">Time this player is next due a batch, `SendInterval` after the last.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-despawning" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> Despawning { get; }"}</code> | <span className="api-desc">Chunk syncs currently sending entity destroys to this player.</span> |
| <Link id="m-spawning" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> Spawning { get; }"}</code> | <span className="api-desc">Chunk syncs currently sending entity spawns to this player; served before despawns.</span> |

## Used in

Members of other types that take, return or hold a `Set`:

<div className="api-used-in">

[`ChunkSync.playerSyncs`](/mod/game-api/types/alta-world/chunksync#m-playersyncs), [`ChunkSync.set`](/mod/game-api/types/alta-world/chunksync#m-set).

</div>
