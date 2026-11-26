---
title: "ChunkPhysicsResolver"
description: "Server: after bootup, force-loads each location chunk (not cave layers) in turn, nearest to center first, lets physics settle, then saves and unloads it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPhysicsResolver

A **class** in `Root.Township`, no namespace.

Server: after bootup, force-loads each location chunk (not cave layers) in turn, nearest to `center` first, lets physics settle, then saves and unloads it. Only runs while no players are online.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPhysicsResolver()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canceltoken" /><code>{"private CancellationTokenSource cancelToken"}</code> | Cancels the current run. |
| <Link id="m-center" /><code>{"private Transform center"}</code> | Optional point used to order chunks by flat distance. Logs an error if missing. |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> | True while the loop is going. |
| <Link id="m-iswaiting" /><code>{"private bool isWaiting"}</code> | True while waiting for a chunk to load fully. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-waitingforplayerstoleave" /><code>{"private TaskCompletionSource<bool> waitingForPlayerstoLeave"}</code> | Completed when the last player leaves. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts the resolver once server bootup is finished, if the component is enabled. |
| <Link id="m-restart" /><code>{"void Restart()"}</code> | Makes a new cancel token and starts the loop if it isn't running. |
| <Link id="m-stop" /><code>{"void Stop()"}</code> | Cancels the run; it ends at its next check. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Server: cancels the run and unhooks the player event. |
| <Link id="m-resolvechunkphysicsasync" /><code>{"private async void ResolveChunkPhysicsAsync()"}</code> | The main loop: per chunk, waits for an empty server, loads it, waits 1 to 30 seconds by entity count, unloads and saves. |
| <Link id="m-startafterbootup" /><code>{"private void StartAfterBootup()"}</code> | Starts the run unless a server wipe is under way, and stops it when one begins. |
| <Link id="m-stopwaiting" /><code>{"private void StopWaiting("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Handler for a chunk finishing loading; ends the wait. |
| <Link id="m-waitforlastplayer" /><code>{"private void WaitForLastPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" obj)"}</code> | Handler for a player leaving; continues the loop once the server is empty. |

</details>
