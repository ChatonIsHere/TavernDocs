---
title: "ChunkPhysicsResolver"
description: "Server: after bootup, force-loads each location chunk (not cave layers) in turn, nearest to center first, lets physics settle, then saves and unloads it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPhysicsResolver

A **class** in `Root.Township`, the global namespace.

Server: after bootup, force-loads each location chunk (not cave layers) in turn, nearest to `center` first, lets physics settle, then saves and unloads it. Only runs while no players are online.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPhysicsResolver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canceltoken" /><code>{"private CancellationTokenSource cancelToken"}</code> | <span className="api-desc">Cancels the current run.</span> |
| <Link id="m-center" /><code>{"private Transform center"}</code> | <span className="api-desc">Optional point used to order chunks by flat distance. Logs an error if missing.</span> |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> | <span className="api-desc">True while the loop is going.</span> |
| <Link id="m-iswaiting" /><code>{"private bool isWaiting"}</code> | <span className="api-desc">True while waiting for a chunk to load fully.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-waitingforplayerstoleave" /><code>{"private TaskCompletionSource<bool> waitingForPlayerstoLeave"}</code> | <span className="api-desc">Completed when the last player leaves.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: starts the resolver once server bootup is finished, if the component is enabled.</span> |
| <Link id="m-restart" /><code>{"void Restart()"}</code> | <span className="api-desc">Makes a new cancel token and starts the loop if it isn't running.</span> |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | <span className="api-desc">Cancels the run; it ends at its next check.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Server: cancels the run and unhooks the player event.</span> |
| <Link id="m-resolvechunkphysicsasync" /><code>{"private async void ResolveChunkPhysicsAsync()"}</code> | <span className="api-desc">The main loop: per chunk, waits for an empty server, loads it, waits 1 to 30 seconds by entity count, unloads and saves.</span> |
| <Link id="m-startafterbootup" /><code>{"private void StartAfterBootup()"}</code> | <span className="api-desc">Starts the run unless a server wipe is under way, and stops it when one begins.</span> |
| <Link id="m-stopwaiting" /><code>{"private void StopWaiting("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Handler for a chunk finishing loading; ends the wait.</span> |
| <Link id="m-waitforlastplayer" /><code>{"private void WaitForLastPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" obj)"}</code> | <span className="api-desc">Handler for a player leaving; continues the loop once the server is empty.</span> |

</details>
