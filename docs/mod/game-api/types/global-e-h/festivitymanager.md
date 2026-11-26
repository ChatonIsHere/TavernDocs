---
title: "FestivityManager"
description: "Network entity that turns festivities on and off by the real date and syncs their state to players."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FestivityManager

A **class** in `Root.Township`, the global namespace.

Network entity that turns festivities on and off by the real date and syncs their state to players. The server checks dates; clients only receive.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FestivityManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"private CancellationTokenSource cancel"}</code> | Cancels the recheck loop when the manager is destroyed. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{"> sync"}</code> | Method sync (`SyncA`) used to send festivity state. |
| <Link id="m-updateintervalseconds" /><code>{"private float updateIntervalSeconds"}</code> | Seconds between date checks. Default 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Both sides: resets every festivity to inactive and sets up the sync message. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: starts the `Recheck` loop. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends each active festivity to a joining player. |
| <Link id="m-setfestivityactive" /><code>{"void SetFestivityActive("}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity, bool isActive)"}</code> | Sets a festivity's state and, if it changed, sends it to all chunks. Used by `Check` and the console commands. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check()"}</code> | Server: sets each festivity active if it is enabled and the current `MonthDayHour` is between its start and end. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels the recheck loop. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor while playing on a server: restarts the check loop after inspector changes. |
| <Link id="m-recheck" /><code>{"private async void Recheck(CancellationToken token)"}</code> | Server: async loop that runs `Check` every `updateIntervalSeconds` until cancelled. |
| <Link id="m-syncfestivity" /><code>{"private void SyncFestivity("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity)"}</code> | Sync handler: writes the festivity hash and state; remote clients apply the state on read. |

</details>
