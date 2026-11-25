---
title: "ChunkSync"
description: "class ChunkSync in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkSync

A **internal class** in `Root.Township`, `Alta.Chunks`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested types** [`Set`](/game-api/types/alta-world/chunksync-set)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor" /><code>{"private ChunkSync()"}</code> |

</details>

## Fields

| Member |
| --- |
| <Link id="m-sendcount" /><code>{"static int SendCount"}</code> |
| <Link id="m-sendinterval" /><code>{"static float SendInterval"}</code> |

<details>
<summary>12 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-cachedentities" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] cachedEntities"}</code> |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> |
| <Link id="m-completecallback" /><code>{"private Action<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> completeCallback"}</code> |
| <Link id="m-disconnectedconnections" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> disconnectedConnections"}</code> |
| <Link id="m-entitycount" /><code>{"private int entityCount"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> |
| <Link id="m-playersyncs" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/alta-world/chunksync-set">{"ChunkSync.Set"}</Link>{"> playerSyncs"}</code> |
| <Link id="m-pool" /><code>{"private static Stack<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> pool"}</code> |
| <Link id="m-progress" /><code>{"private int progress"}</code> |
| <Link id="m-running" /><code>{"private static "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" running"}</code> |
| <Link id="m-set" /><code>{"private "}<Link to="/game-api/types/alta-world/chunksync-set">{"ChunkSync.Set"}</Link>{" set"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-isspawning" /><code>{"bool IsSpawning { get; private set; }"}</code> |
| <Link id="m-player-2" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-forcefinish" /><code>{"void ForceFinish()"}</code> |
| <Link id="m-start" /><code>{"static "}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{" Start("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-world/chunkentitymanager">{"ChunkEntityManager"}</Link>{" entities, bool isSpawning, Action<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> completeCallback)"}</code> |
| <Link id="m-stop" /><code>{"void Stop(bool isInvokingCallback = false)"}</code> |

<details>
<summary>10 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-initializeandstart" /><code>{"private void InitializeAndStart("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-world/chunkentitymanager">{"ChunkEntityManager"}</Link>{" entities, bool isSpawning, Action<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> completeCallback)"}</code> |
| <Link id="m-release" /><code>{"private void Release()"}</code> |
| <Link id="m-removeconnectionsthatdisconnectedduringsync" /><code>{"private static void RemoveConnectionsThatDisconnectedDuringSync()"}</code> |
| <Link id="m-removesync" /><code>{"private static void RemoveSync("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> |
| <Link id="m-sync" /><code>{"private bool Sync(Func<"}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{", int> syncMethod, ref int count)"}</code> |
| <Link id="m-syncall" /><code>{"private static IEnumerator SyncAll() (iterator)"}</code> |
| <Link id="m-syncdestroy" /><code>{"private int SyncDestroy("}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> |
| <Link id="m-syncdestroying" /><code>{"private static int SyncDestroying(int sentCount, List<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> syncing)"}</code> |
| <Link id="m-syncspawn" /><code>{"private int SyncSpawn("}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> |
| <Link id="m-syncspawning" /><code>{"private static int SyncSpawning(int sentCount, List<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> syncing)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkSync`:

[`ChunkSync.Set.Despawning`](/game-api/types/alta-world/chunksync-set#m-despawning), [`ChunkSync.Set.Spawning`](/game-api/types/alta-world/chunksync-set#m-spawning), [`PlayerEntitySyncServer.gradualSync`](/game-api/types/alta-world/playerentitysyncserver#m-gradualsync), [`PlayerEntitySyncServer.SyncFinished`](/game-api/types/alta-world/playerentitysyncserver#m-syncfinished).
