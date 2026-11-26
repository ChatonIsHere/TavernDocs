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
| <Link id="m-ctor" /><code>{"FarAwayController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activemarkers" /><code>{"private List<Transform> activeMarkers"}</code> | <span className="api-desc">Client: marker transforms currently shown.</span> |
| <Link id="m-farawaymarkerprefab" /><code>{"private GameObject farawayMarkerPrefab"}</code> | <span className="api-desc">Prefab spawned for each far-away player marker.</span> |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> | <span className="api-desc">Server: whether the next update frame sends or prepares.</span> |
| <Link id="m-markerpool" /><code>{"private Stack<GameObject> markerPool"}</code> | <span className="api-desc">Client: hidden marker objects kept for reuse.</span> |
| <Link id="m-maxdistancetosendsquared" /><code>{"private float maxDistanceToSendSquared"}</code> | <span className="api-desc">Squared distance within which another player is sent to a client. Default 400 (20 m).</span> |
| <Link id="m-prepareddata" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/farawaycontroller-playertuple">{"FarAwayController.PlayerTuple"}</Link>{"> preparedData"}</code> | <span className="api-desc">Server: per-player tracking data and close-by lists. Only created on a simple server.</span> |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> | <span className="api-desc">Method sync on `SyncE` used to send the close-by lists.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle of the registered update method, `Render` on clients or `UpdateSend` on the server.</span> |
| <Link id="m-workinglist" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/farawaycontroller-playerdata">{"FarAwayController.PlayerData"}</Link>{"> workingList"}</code> | <span className="api-desc">Server: all tracked players' data. Client: the positions last received.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the `syncPlayer` method sync and, on a non-headless client, registers `Render` for updates.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: on a simple server, creates `preparedData` and registers `UpdateSend` for updates.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: starts tracking the joining player's head position.</span> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: stops tracking the leaving player.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Deregisters the update method.</span> |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> | <span className="api-desc">Server: refreshes every tracked player's position, then fills each player's list of others within `maxDistanceToSendSquared`.</span> |
| <Link id="m-render" /><code>{"private void Render()"}</code> | <span className="api-desc">Client: places a marker at each received position whose player has no loaded controller, pooling unused markers.</span> |
| <Link id="m-send" /><code>{"private void Send()"}</code> | <span className="api-desc">Server: sends each connected player their prepared close-by list.</span> |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes a player's close-by list (up to 16 entries) on the server and reads it into `workingList` on the client.</span> |
| <Link id="m-updatesend" /><code>{"private void UpdateSend()"}</code> | <span className="api-desc">Server: alternates frames between `Prepare` and `Send`.</span> |

</details>
