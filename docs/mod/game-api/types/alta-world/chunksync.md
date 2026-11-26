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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Nested types** [`Set`](/mod/game-api/types/alta-world/chunksync-set)

## Constructors

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"private ChunkSync()"}</code> | <span className="api-desc">Creates a `ChunkSync` with default values.</span> |

</details>

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-sendcount" /><code>{"static int SendCount"}</code> | <span className="api-desc">Most prefabs spawned or despawned per player per send (default 30).</span> |
| <Link id="m-sendinterval" /><code>{"static float SendInterval"}</code> | <span className="api-desc">Seconds between sends to each player (default 0.1).</span> |

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cachedentities" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{"[] cachedEntities"}</code> | <span className="api-desc">The chunk's entities, copied when the sync started.</span> |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">The chunk being synced.</span> |
| <Link id="m-completecallback" /><code>{"private Action<"}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> completeCallback"}</code> | <span className="api-desc">Called when the sync finishes or is stopped with callback.</span> |
| <Link id="m-disconnectedconnections" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{"> disconnectedConnections"}</code> | <span className="api-desc">Connections that dropped during a pass, cleaned up after it.</span> |
| <Link id="m-entitycount" /><code>{"private int entityCount"}</code> | <span className="api-desc">Number of valid entries in `cachedEntities`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Logger for this class.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">Backing field for `Player`.</span> |
| <Link id="m-playersyncs" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/alta-world/chunksync-set">{"ChunkSync.Set"}</Link>{"> playerSyncs"}</code> | <span className="api-desc">Queued spawn and despawn syncs, and the next send time, for each player.</span> |
| <Link id="m-pool" /><code>{"private static Stack<"}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> pool"}</code> | <span className="api-desc">Finished syncs kept for reuse.</span> |
| <Link id="m-progress" /><code>{"private int progress"}</code> | <span className="api-desc">Index of the next entity to send.</span> |
| <Link id="m-running" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" running"}</code> | <span className="api-desc">Unused in this build.</span> |
| <Link id="m-set" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunksync-set">{"ChunkSync.Set"}</Link>{" set"}</code> | <span className="api-desc">This sync's player queue in `playerSyncs`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isspawning" /><code>{"bool IsSpawning { get; private set; }"}</code> | <span className="api-desc">True when this sync spawns the chunk's entities, false when it despawns them.</span> |
| <Link id="m-player-2" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> | <span className="api-desc">The player the chunk is being synced to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcefinish" /><code>{"void ForceFinish()"}</code> | <span className="api-desc">Sends everything left in one go, ignoring the per-frame limit.</span> |
| <Link id="m-start" /><code>{"static "}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{" Start("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-world/chunkentitymanager">{"ChunkEntityManager"}</Link>{" entities, bool isSpawning, Action<"}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> completeCallback)"}</code> | <span className="api-desc">Takes a sync from the pool and starts it. The first call also starts the loop that drives all syncs.</span> |
| <Link id="m-stop" /><code>{"void Stop(bool isInvokingCallback = false)"}</code> | <span className="api-desc">Cancels the sync, optionally calling its complete callback first.</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializeandstart" /><code>{"private void InitializeAndStart("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-world/chunkentitymanager">{"ChunkEntityManager"}</Link>{" entities, bool isSpawning, Action<"}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> completeCallback)"}</code> | <span className="api-desc">Sets the sync up for a player and chunk, caches the entities (sorted by distance to the feet for Quest players) and queues it.</span> |
| <Link id="m-release" /><code>{"private void Release()"}</code> | <span className="api-desc">Removes the sync from its player's queue, returns the entity array and puts the sync back in the pool.</span> |
| <Link id="m-removeconnectionsthatdisconnectedduringsync" /><code>{"private static void RemoveConnectionsThatDisconnectedDuringSync()"}</code> | <span className="api-desc">For players that disconnected, stops all their queued syncs with callbacks and forgets them.</span> |
| <Link id="m-removesync" /><code>{"private static void RemoveSync("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection)"}</code> | <span className="api-desc">Disconnect handler; marks the connection so its syncs are cleaned up after the current pass.</span> |
| <Link id="m-sync" /><code>{"private bool Sync(Func<"}<Link to="/mod/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{", int> syncMethod, ref int count)"}</code> | <span className="api-desc">Works through the cached entities with the given spawn or despawn method until the send limit is hit; finishes and releases when done.</span> |
| <Link id="m-syncall" /><code>{"private static IEnumerator SyncAll() (iterator)"}</code> | <span className="api-desc">Coroutine that runs every frame: for each player whose send time has come, spawns first, then despawns with what is left of the limit.</span> |
| <Link id="m-syncdestroy" /><code>{"private int SyncDestroy("}<Link to="/mod/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> | <span className="api-desc">Despawns one entity and its children for the player, if it is still in this chunk. Returns how many prefabs were sent.</span> |
| <Link id="m-syncdestroying" /><code>{"private static int SyncDestroying(int sentCount, List<"}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> syncing)"}</code> | <span className="api-desc">Runs the queued despawn syncs for a player until the send limit is reached.</span> |
| <Link id="m-syncspawn" /><code>{"private int SyncSpawn("}<Link to="/mod/game-api/types/global-i-l/ichunker">{"IChunker"}</Link>{" chunker)"}</code> | <span className="api-desc">Spawns one entity and its children for the player, if it is still in this chunk. Returns how many prefabs were sent.</span> |
| <Link id="m-syncspawning" /><code>{"private static int SyncSpawning(int sentCount, List<"}<Link to="/mod/game-api/types/alta-world/chunksync">{"ChunkSync"}</Link>{"> syncing)"}</code> | <span className="api-desc">Runs the queued spawn syncs for a player until the send limit is reached.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ChunkSync`:

<div className="api-used-in">

[`ChunkSync.Set.Despawning`](/mod/game-api/types/alta-world/chunksync-set#m-despawning), [`ChunkSync.Set.Spawning`](/mod/game-api/types/alta-world/chunksync-set#m-spawning), [`PlayerEntitySyncServer.gradualSync`](/mod/game-api/types/alta-world/playerentitysyncserver#m-gradualsync), [`PlayerEntitySyncServer.SyncFinished`](/mod/game-api/types/alta-world/playerentitysyncserver#m-syncfinished).

</div>
