---
title: "Postbox"
description: "The postbox players collect mail from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Postbox

A **class** in `Root.Township`, the global namespace.

The postbox players collect mail from. Server: pulling its lever pops the puller's queued items out of their `PlayerPostboxStorage` one by one; each player sees its flag raised only when they have mail.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Trading](/mod/game-api/game-systems/trading)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Postbox()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"private static int Active"}</code> | <span className="api-desc">Animator hash for the flag's `Active` bool.</span> |
| <Link id="m-flag" /><code>{"private Animator flag"}</code> | <span className="api-desc">Animator for the flag that shows the local player has mail.</span> |
| <Link id="m-handlelever" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lever">{"Lever"}</Link>{" handleLever"}</code> | <span className="api-desc">The lever whose `TurnedOn` event starts popping items.</span> |
| <Link id="m-handlepickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handlePickup"}</code> | <span className="api-desc">The handle pickup; its last player interactor is who receives their mail.</span> |
| <Link id="m-interval" /><code>{"private float interval"}</code> | <span className="api-desc">Seconds between popped items.</span> |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> | <span className="api-desc">When true, popped items get a random rotation instead of the spawn point's.</span> |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> | <span className="api-desc">True while `Opened` is popping items, so a second pull doesn't start another run.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Spawn position captured when the lever is pulled.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Spawn rotation captured when the lever is pulled.</span> |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> | <span className="api-desc">Where popped items appear and the frame `velocityRelativeToSpawnPoint` is measured in.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> | <span className="api-desc">Per-player message carrying whether that player has mail.</span> |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> | <span className="api-desc">World-space launch velocity captured when the lever is pulled.</span> |
| <Link id="m-velocityrelativetospawnpoint" /><code>{"private Vector3 velocityRelativeToSpawnPoint"}</code> | <span className="api-desc">Launch velocity for popped items, in the spawn point's local space.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the `sync` message used to tell a player whether they have mail.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: hooks `Opened` to the lever turning on.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: runs `InitializeForPlayer` for each player who connects to the entity.</span> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: unsubscribes from the leaving player's storage events, if it's loaded.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handlenew" /><code>{"private bool HandleNew("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> | <span className="api-desc">Server: places one popped entity at the spawn point with the launch velocity and fires its `IPostboxPopped` handlers. Recurses into children of a `SetPiece`; destroys other entities without a rigidbody.</span> |
| <Link id="m-initializeforplayer" /><code>{"private async void InitializeForPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: loads the player's postbox storage, sends them the current has-mail state and subscribes to its item added and removed events.</span> |
| <Link id="m-itemadded" /><code>{"private void ItemAdded("}<Link to="/mod/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" storage, int count)"}</code> | <span className="api-desc">Server: when a player's storage goes from empty to one item, tells that player to raise the flag.</span> |
| <Link id="m-itemremoved" /><code>{"private void ItemRemoved("}<Link to="/mod/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" storage, int count)"}</code> | <span className="api-desc">Server: when a player's storage becomes empty, tells that player to lower the flag.</span> |
| <Link id="m-opened" /><code>{"private async void Opened()"}</code> | <span className="api-desc">Server: while the lever stays on and the same player holds the handle, pops their items one at a time, waiting `interval` seconds between them.</span> |
| <Link id="m-synccontent" /><code>{"private void SyncContent("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasContent)"}</code> | <span className="api-desc">Serializes the has-mail bool; on a client it sets the flag animator.</span> |

</details>
