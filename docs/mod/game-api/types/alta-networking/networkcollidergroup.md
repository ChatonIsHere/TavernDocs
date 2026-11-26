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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`ColliderGroup`](/mod/game-api/types/global-c-d/collidergroup), [`INetworkEntityBehaviour`](/mod/game-api/types/alta-networking/inetworkentitybehaviour)
- **Nested types** [`CollisionIgnoreArguments`](/mod/game-api/types/alta-networking/networkcollidergroup-collisionignorearguments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkColliderGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Backing field for `Entity`.</span> |
| <Link id="m-isdisablingonstart" /><code>{"private bool isDisablingOnStart"}</code> | <span className="api-desc">If set, the server turns the colliders off when the entity is spawned.</span> |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | <span className="api-desc">Whether the colliders are on, as synced.</span> |
| <Link id="m-isondelay" /><code>{"private bool isOnDelay"}</code> | <span className="api-desc">True while the on-connect delay is running.</span> |
| <Link id="m-onconnectdelay" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" onConnectDelay"}</code> | <span className="api-desc">The running on-connect delay coroutine.</span> |
| <Link id="m-onconnectupdatedelay" /><code>{"private float onConnectUpdateDelay"}</code> | <span className="api-desc">Seconds a newly connected client waits before applying the enabled state (default 0.5).</span> |
| <Link id="m-syncenabled" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEnabled"}</code> | <span className="api-desc">Method sync for the enabled state.</span> |
| <Link id="m-syncignore" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-networking/networkcollidergroup-collisionignorearguments">{"NetworkColliderGroup.CollisionIgnoreArguments"}</Link>{"> syncIgnore"}</code> | <span className="api-desc">Method sync for ignored collisions.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The network entity this group is on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Reads whether any collider starts enabled and creates the two method syncs.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: turns the colliders off if `isDisablingOnStart` is set.</span> |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the enabled state to a newly connected player.</span> |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-setactive" /><code>{"override void SetActive(bool isEnabled)"}</code> | <span className="api-desc">Turns the colliders on or off; on the server also sends the change to clients.</span> |
| <Link id="m-ignorecollision" /><code>{"protected override void IgnoreCollision(Collider thisCollider, Collider otherCollider, bool isIgnoring)"}</code> | <span className="api-desc">Ignores collision between two colliders; on the server also sends it to clients by the other collider's entity.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-networkignorecollision" /><code>{"private void NetworkIgnoreCollision("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-networking/networkcollidergroup-collisionignorearguments">{"NetworkColliderGroup.CollisionIgnoreArguments"}</Link>{" args)"}</code> | <span className="api-desc">Client: ignores collision with all colliders of the other entity, waiting for it to spawn if needed.</span> |
| <Link id="m-onconnectdelay-2" /><code>{"private IEnumerator OnConnectDelay() (iterator)"}</code> | <span className="api-desc">Coroutine that applies the enabled state after `onConnectUpdateDelay` seconds.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the on-connect delay coroutine.</span> |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isOnConnect)"}</code> | <span className="api-desc">Sends or receives the enabled state; on connect, clients apply it after a delay.</span> |

</details>
