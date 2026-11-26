---
title: "Postbox"
description: "The postbox players collect mail from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Postbox

A **class** in `Root.Township`, no namespace.

The postbox players collect mail from. Server: pulling its lever pops the puller's queued items out of their `PlayerPostboxStorage` one by one; each player sees its flag raised only when they have mail.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Trading](/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Postbox()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private static int Active"}</code> | Animator hash for the flag's `Active` bool. |
| <Link id="m-flag" /><code>{"private Animator flag"}</code> | Animator for the flag that shows the local player has mail. |
| <Link id="m-handlelever" /><code>{"private "}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" handleLever"}</code> | The lever whose `TurnedOn` event starts popping items. |
| <Link id="m-handlepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handlePickup"}</code> | The handle pickup; its last player interactor is who receives their mail. |
| <Link id="m-interval" /><code>{"private float interval"}</code> | Seconds between popped items. |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | When true, popped items get a random rotation instead of the spawn point's. |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> | True while `Opened` is popping items, so a second pull doesn't start another run. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Spawn position captured when the lever is pulled. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Spawn rotation captured when the lever is pulled. |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | Where popped items appear and the frame `velocityRelativeToSpawnPoint` is measured in. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> | Per-player message carrying whether that player has mail. |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> | World-space launch velocity captured when the lever is pulled. |
| <Link id="m-velocityrelativetospawnpoint" /><code>{"private Vector3 velocityRelativeToSpawnPoint"}</code> | Launch velocity for popped items, in the spawn point's local space. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the `sync` message used to tell a player whether they have mail. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: hooks `Opened` to the lever turning on. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: runs `InitializeForPlayer` for each player who connects to the entity. |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: unsubscribes from the leaving player's storage events, if it's loaded. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlenew" /><code>{"private bool HandleNew("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | Server: places one popped entity at the spawn point with the launch velocity and fires its `IPostboxPopped` handlers. Recurses into children of a `SetPiece`; destroys other entities without a rigidbody. |
| <Link id="m-initializeforplayer" /><code>{"private async void InitializeForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: loads the player's postbox storage, sends them the current has-mail state and subscribes to its item added and removed events. |
| <Link id="m-itemadded" /><code>{"private void ItemAdded("}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" storage, int count)"}</code> | Server: when a player's storage goes from empty to one item, tells that player to raise the flag. |
| <Link id="m-itemremoved" /><code>{"private void ItemRemoved("}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" storage, int count)"}</code> | Server: when a player's storage becomes empty, tells that player to lower the flag. |
| <Link id="m-opened" /><code>{"private async void Opened()"}</code> | Server: while the lever stays on and the same player holds the handle, pops their items one at a time, waiting `interval` seconds between them. |
| <Link id="m-synccontent" /><code>{"private void SyncContent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasContent)"}</code> | Serializes the has-mail bool; on a client it sets the flag animator. |

</details>
