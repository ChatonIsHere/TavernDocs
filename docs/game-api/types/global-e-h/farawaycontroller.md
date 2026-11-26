---
title: "FarAwayController"
description: "class FarAwayController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FarAwayController

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`PlayerData`](/game-api/types/global-e-h/farawaycontroller-playerdata), [`PlayerTuple`](/game-api/types/global-e-h/farawaycontroller-playertuple)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FarAwayController()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activemarkers" /><code>{"private List<Transform> activeMarkers"}</code> |
| <Link id="m-farawaymarkerprefab" /><code>{"private GameObject farawayMarkerPrefab"}</code> |
| <Link id="m-issending" /><code>{"private bool isSending"}</code> |
| <Link id="m-markerpool" /><code>{"private Stack<GameObject> markerPool"}</code> |
| <Link id="m-maxdistancetosendsquared" /><code>{"private float maxDistanceToSendSquared"}</code> |
| <Link id="m-prepareddata" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{", "}<Link to="/game-api/types/global-e-h/farawaycontroller-playertuple">{"FarAwayController.PlayerTuple"}</Link>{"> preparedData"}</code> |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |
| <Link id="m-workinglist" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/farawaycontroller-playerdata">{"FarAwayController.PlayerData"}</Link>{"> workingList"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-prepare" /><code>{"private void Prepare()"}</code> |
| <Link id="m-render" /><code>{"private void Render()"}</code> |
| <Link id="m-send" /><code>{"private void Send()"}</code> |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-updatesend" /><code>{"private void UpdateSend()"}</code> |

</details>
