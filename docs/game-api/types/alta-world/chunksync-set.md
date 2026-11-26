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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested in** [`ChunkSync`](/game-api/types/alta-world/chunksync)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Set()"}</code> | Creates a `ChunkSync.Set` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nextsendtime" /><code>{"float nextSendTime"}</code> | Time this player is next due a batch, `SendInterval` after the last. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-despawning" /><code>{"List<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> Despawning { get; }"}</code> | Chunk syncs currently sending entity destroys to this player. |
| <Link id="m-spawning" /><code>{"List<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> Spawning { get; }"}</code> | Chunk syncs currently sending entity spawns to this player; served before despawns. |

## Used in

Members of other types that take, return or hold a `Set`:

[`ChunkSync.playerSyncs`](/game-api/types/alta-world/chunksync#m-playersyncs), [`ChunkSync.set`](/game-api/types/alta-world/chunksync#m-set).
