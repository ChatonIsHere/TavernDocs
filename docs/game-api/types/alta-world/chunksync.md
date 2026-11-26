---
title: "ChunkSync"
description: "Server: spreads the spawning or despawning of one chunk's entities for one player over several frames."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkSync

A **internal class** in `Root.Township`, `Alta.Chunks`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Server: spreads the spawning or despawning of one chunk's entities for one player over several frames. Started by `PlayerEntitySyncServer`; instances are pooled.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Nested types** [`Set`](/game-api/types/alta-world/chunksync-set)

## Constructors

<details>
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private ChunkSync()"}</code> | Creates a `ChunkSync` with default values. |

</details>

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sendcount" /><code>{"static int SendCount"}</code> | Most prefabs spawned or despawned per player per send (default 30). |
| <Link id="m-sendinterval" /><code>{"static float SendInterval"}</code> | Seconds between sends to each player (default 0.1). |

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedentities" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] cachedEntities"}</code> | The chunk's entities, copied when the sync started. |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | The chunk being synced. |
| <Link id="m-completecallback" /><code>{"private Action<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> completeCallback"}</code> | Called when the sync finishes or is stopped with callback. |
| <Link id="m-disconnectedconnections" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> disconnectedConnections"}</code> | Connections that dropped during a pass, cleaned up after it. |
| <Link id="m-entitycount" /><code>{"private int entityCount"}</code> | Number of valid entries in `cachedEntities`. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | Logger for this class. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | Backing field for `Player`. |
| <Link id="m-playersyncs" /><code>{"private static Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/alta-world/chunksync-set">{"ChunkSync.Set"}</Link>{"> playerSyncs"}</code> | Queued spawn and despawn syncs, and the next send time, for each player. |
| <Link id="m-pool" /><code>{"private static Stack<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> pool"}</code> | Finished syncs kept for reuse. |
| <Link id="m-progress" /><code>{"private int progress"}</code> | Index of the next entity to send. |
| <Link id="m-running" /><code>{"private static "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" running"}</code> | Unused in this build. |
| <Link id="m-set" /><code>{"private "}<Link to="/game-api/types/alta-world/chunksync-set">{"ChunkSync.Set"}</Link>{" set"}</code> | This sync's player queue in `playerSyncs`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isspawning" /><code>{"bool IsSpawning { get; private set; }"}</code> | True when this sync spawns the chunk's entities, false when it despawns them. |
| <Link id="m-player-2" /><code><Link to="/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> | The player the chunk is being synced to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcefinish" /><code>{"void ForceFinish()"}</code> | Sends everything left in one go, ignoring the per-frame limit. |
| <Link id="m-start" /><code>{"static "}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{" Start("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-world/chunkentitymanager">{"ChunkEntityManager"}</Link>{" entities, bool isSpawning, Action<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> completeCallback)"}</code> | Takes a sync from the pool and starts it. The first call also starts the loop that drives all syncs. |
| <Link id="m-stop" /><code>{"void Stop(bool isInvokingCallback = false)"}</code> | Cancels the sync, optionally calling its complete callback first. |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializeandstart" /><code>{"private void InitializeAndStart("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-world/chunkentitymanager">{"ChunkEntityManager"}</Link>{" entities, bool isSpawning, Action<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> completeCallback)"}</code> | Sets the sync up for a player and chunk, caches the entities (sorted by distance to the feet for Quest players) and queues it. |
| <Link id="m-release" /><code>{"private void Release()"}</code> | Removes the sync from its player's queue, returns the entity array and puts the sync back in the pool. |
| <Link id="m-removeconnectionsthatdisconnectedduringsync" /><code>{"private static void RemoveConnectionsThatDisconnectedDuringSync()"}</code> | For players that disconnected, stops all their queued syncs with callbacks and forgets them. |
| <Link id="m-removesync" /><code>{"private static void RemoveSync("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | Disconnect handler; marks the connection so its syncs are cleaned up after the current pass. |
| <Link id="m-sync" /><code>{"private bool Sync(Func<"}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{", int> syncMethod, ref int count)"}</code> | Works through the cached entities with the given spawn or despawn method until the send limit is hit; finishes and releases when done. |
| <Link id="m-syncall" /><code>{"private static IEnumerator SyncAll() (iterator)"}</code> | Coroutine that runs every frame: for each player whose send time has come, spawns first, then despawns with what is left of the limit. |
| <Link id="m-syncdestroy" /><code>{"private int SyncDestroy("}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> | Despawns one entity and its children for the player, if it is still in this chunk. Returns how many prefabs were sent. |
| <Link id="m-syncdestroying" /><code>{"private static int SyncDestroying(int sentCount, List<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> syncing)"}</code> | Runs the queued despawn syncs for a player until the send limit is reached. |
| <Link id="m-syncspawn" /><code>{"private int SyncSpawn("}<Link to="/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> | Spawns one entity and its children for the player, if it is still in this chunk. Returns how many prefabs were sent. |
| <Link id="m-syncspawning" /><code>{"private static int SyncSpawning(int sentCount, List<"}<Link to="/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> syncing)"}</code> | Runs the queued spawn syncs for a player until the send limit is reached. |

</details>

## Used in

Members of other types that take, return or hold a `ChunkSync`:

[`ChunkSync.Set.Despawning`](/game-api/types/alta-world/chunksync-set#m-despawning), [`ChunkSync.Set.Spawning`](/game-api/types/alta-world/chunksync-set#m-spawning), [`PlayerEntitySyncServer.gradualSync`](/game-api/types/alta-world/playerentitysyncserver#m-gradualsync), [`PlayerEntitySyncServer.SyncFinished`](/game-api/types/alta-world/playerentitysyncserver#m-syncfinished).
