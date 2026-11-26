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
| <Link id="m-ctor" /><code>{"FestivityManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancel" /><code>{"private CancellationTokenSource cancel"}</code> | <span className="api-desc">Cancels the recheck loop when the manager is destroyed.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{"> sync"}</code> | <span className="api-desc">Method sync (`SyncA`) used to send festivity state.</span> |
| <Link id="m-updateintervalseconds" /><code>{"private float updateIntervalSeconds"}</code> | <span className="api-desc">Seconds between date checks. Default 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Both sides: resets every festivity to inactive and sets up the sync message.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: starts the `Recheck` loop.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends each active festivity to a joining player.</span> |
| <Link id="m-setfestivityactive" /><code>{"void SetFestivityActive("}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity, bool isActive)"}</code> | <span className="api-desc">Sets a festivity's state and, if it changed, sends it to all chunks. Used by `Check` and the console commands.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-check" /><code>{"private void Check()"}</code> | <span className="api-desc">Server: sets each festivity active if it is enabled and the current `MonthDayHour` is between its start and end.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the recheck loop.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor while playing on a server: restarts the check loop after inspector changes.</span> |
| <Link id="m-recheck" /><code>{"private async void Recheck(CancellationToken token)"}</code> | <span className="api-desc">Server: async loop that runs `Check` every `updateIntervalSeconds` until cancelled.</span> |
| <Link id="m-syncfestivity" /><code>{"private void SyncFestivity("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity)"}</code> | <span className="api-desc">Sync handler: writes the festivity hash and state; remote clients apply the state on read.</span> |

</details>
