---
title: "NetworkColliderGroup"
description: "A ColliderGroup on a network entity that syncs whether its colliders are on and which other entities it ignores collision with."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkColliderGroup

A **class** in `Root.Township`, `Alta.Networking`.

A `ColliderGroup` on a network entity that syncs whether its colliders are on and which other entities it ignores collision with. The server sets them; clients follow.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ColliderGroup`](/game-api/types/global-c-d/collidergroup), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Nested types** [`CollisionIgnoreArguments`](/game-api/types/alta-networking/networkcollidergroup-collisionignorearguments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkColliderGroup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Backing field for `Entity`. |
| <Link id="m-isdisablingonstart" /><code>{"private bool isDisablingOnStart"}</code> | If set, the server turns the colliders off when the entity is spawned. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Whether the colliders are on, as synced. |
| <Link id="m-isondelay" /><code>{"private bool isOnDelay"}</code> | True while the on-connect delay is running. |
| <Link id="m-onconnectdelay" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" onConnectDelay"}</code> | The running on-connect delay coroutine. |
| <Link id="m-onconnectupdatedelay" /><code>{"private float onConnectUpdateDelay"}</code> | Seconds a newly connected client waits before applying the enabled state (default 0.5). |
| <Link id="m-syncenabled" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEnabled"}</code> | Method sync for the enabled state. |
| <Link id="m-syncignore" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-networking/networkcollidergroup-collisionignorearguments">{"NetworkColliderGroup.CollisionIgnoreArguments"}</Link>{"> syncIgnore"}</code> | Method sync for ignored collisions. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The network entity this group is on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Reads whether any collider starts enabled and creates the two method syncs. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: turns the colliders off if `isDisablingOnStart` is set. |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the enabled state to a newly connected player. |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Does nothing. |
| <Link id="m-setactive" /><code>{"override void SetActive(bool isEnabled)"}</code> | Turns the colliders on or off; on the server also sends the change to clients. |
| <Link id="m-ignorecollision" /><code>{"protected override void IgnoreCollision(Collider thisCollider, Collider otherCollider, bool isIgnoring)"}</code> | Ignores collision between two colliders; on the server also sends it to clients by the other collider's entity. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-networkignorecollision" /><code>{"private void NetworkIgnoreCollision("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/networkcollidergroup-collisionignorearguments">{"NetworkColliderGroup.CollisionIgnoreArguments"}</Link>{" args)"}</code> | Client: ignores collision with all colliders of the other entity, waiting for it to spawn if needed. |
| <Link id="m-onconnectdelay-2" /><code>{"private IEnumerator OnConnectDelay() (iterator)"}</code> | Coroutine that applies the enabled state after `onConnectUpdateDelay` seconds. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Stops the on-connect delay coroutine. |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isOnConnect)"}</code> | Sends or receives the enabled state; on connect, clients apply it after a delay. |

</details>
