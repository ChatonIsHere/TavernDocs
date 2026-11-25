---
title: "ChunkPhysicsResolver"
description: "class ChunkPhysicsResolver in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ChunkPhysicsResolver

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ChunkPhysicsResolver()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-canceltoken" /><code>{"private CancellationTokenSource cancelToken"}</code> |  |
| <Link id="m-center" /><code>{"private Transform center"}</code> |  |
| <Link id="m-isrunning" /><code>{"private bool isRunning"}</code> |  |
| <Link id="m-iswaiting" /><code>{"private bool isWaiting"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-waitingforplayerstoleave" /><code>{"private TaskCompletionSource<bool> waitingForPlayerstoLeave"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-restart" /><code>{"void Restart()"}</code> |  |
| <Link id="m-stop" /><code>{"void Stop()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-resolvechunkphysicsasync" /><code>{"private async void ResolveChunkPhysicsAsync()"}</code> |  |
| <Link id="m-startafterbootup" /><code>{"private void StartAfterBootup()"}</code> |  |
| <Link id="m-stopwaiting" /><code>{"private void StopWaiting("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-waitforlastplayer" /><code>{"private void WaitForLastPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" obj)"}</code> |  |
