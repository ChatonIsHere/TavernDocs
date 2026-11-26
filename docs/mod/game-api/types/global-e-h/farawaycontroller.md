---
title: "FarAwayController"
description: "Shows markers for nearby players whose player controllers a client has not loaded."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FarAwayController

A **class** in `Root.Township`, the global namespace.

Shows markers for nearby players whose player controllers a client has not loaded. On a simple server it sends each player the chunk and head position of the other players within range; clients draw a marker prefab at those spots.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`PlayerData`](/mod/game-api/types/global-e-h/farawaycontroller-playerdata), [`PlayerTuple`](/mod/game-api/types/global-e-h/farawaycontroller-playertuple)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FarAwayController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemarkers" /><code>{"private List<Transform> activeMarkers"}</code> | Client: marker transforms currently shown. |
| <Link id="m-farawaymarkerprefab" /><code>{"private GameObject farawayMarkerPrefab"}</code> | Prefab spawned for each far-away player marker. |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> | Server: whether the next update frame sends or prepares. |
| <Link id="m-markerpool" /><code>{"private Stack<GameObject> markerPool"}</code> | Client: hidden marker objects kept for reuse. |
| <Link id="m-maxdistancetosendsquared" /><code>{"private float maxDistanceToSendSquared"}</code> | Squared distance within which another player is sent to a client. Default 400 (20 m). |
| <Link id="m-prepareddata" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/farawaycontroller-playertuple">{"FarAwayController.PlayerTuple"}</Link>{"> preparedData"}</code> | Server: per-player tracking data and close-by lists. Only created on a simple server. |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> | Method sync on `SyncE` used to send the close-by lists. |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle of the registered update method, `Render` on clients or `UpdateSend` on the server. |
| <Link id="m-workinglist" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/farawaycontroller-playerdata">{"FarAwayController.PlayerData"}</Link>{"> workingList"}</code> | Server: all tracked players' data. Client: the positions last received. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `syncPlayer` method sync and, on a non-headless client, registers `Render` for updates. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: on a simple server, creates `preparedData` and registers `UpdateSend` for updates. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: starts tracking the joining player's head position. |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: stops tracking the leaving player. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Deregisters the update method. |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> | Server: refreshes every tracked player's position, then fills each player's list of others within `maxDistanceToSendSquared`. |
| <Link id="m-render" /><code>{"private void Render()"}</code> | Client: places a marker at each received position whose player has no loaded controller, pooling unused markers. |
| <Link id="m-send" /><code>{"private void Send()"}</code> | Server: sends each connected player their prepared close-by list. |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes a player's close-by list (up to 16 entries) on the server and reads it into `workingList` on the client. |
| <Link id="m-updatesend" /><code>{"private void UpdateSend()"}</code> | Server: alternates frames between `Prepare` and `Send`. |

</details>
