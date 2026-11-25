---
title: "Postbox"
description: "Shows each player whether their PlayerPostboxStorage has anything, and gives items out when its handle lever is turned (server)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Postbox

A **class** in `Root.Township`, no namespace.

Shows each player whether their `PlayerPostboxStorage` has anything, and gives items out when its handle lever is turned (server).

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Trading](/game-api/game-systems/trading)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Postbox()"}</code> |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-active" /><code>{"private static int Active"}</code> |
| <Link id="m-flag" /><code>{"private Animator flag"}</code> |
| <Link id="m-handlelever" /><code>{"private "}<Link to="/game-api/types/global-i-l/lever">{"Lever"}</Link>{" handleLever"}</code> |
| <Link id="m-handlepickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" handlePickup"}</code> |
| <Link id="m-interval" /><code>{"private float interval"}</code> |
| <Link id="m-isrotationrandom" /><code>{"private bool isRotationRandom"}</code> |
| <Link id="m-isspawning" /><code>{"private bool isSpawning"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> |
| <Link id="m-spawnpoint" /><code>{"private Transform spawnPoint"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> |
| <Link id="m-velocityrelativetospawnpoint" /><code>{"private Vector3 velocityRelativeToSpawnPoint"}</code> |

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
| <Link id="m-handlenew" /><code>{"private bool HandleNew("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawned)"}</code> |
| <Link id="m-initializeforplayer" /><code>{"private async void InitializeForPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-itemadded" /><code>{"private void ItemAdded("}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" storage, int count)"}</code> |
| <Link id="m-itemremoved" /><code>{"private void ItemRemoved("}<Link to="/game-api/types/global-p/playerpostboxstorage">{"PlayerPostboxStorage"}</Link>{" storage, int count)"}</code> |
| <Link id="m-opened" /><code>{"private async void Opened()"}</code> |
| <Link id="m-synccontent" /><code>{"private void SyncContent("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool hasContent)"}</code> |

</details>
