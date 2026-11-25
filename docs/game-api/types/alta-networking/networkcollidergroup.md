---
title: "NetworkColliderGroup"
description: "class NetworkColliderGroup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkColliderGroup

A **class** in `Root.Township`, `Alta.Networking`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`ColliderGroup`](/game-api/types/global-c-d/collidergroup), [`INetworkEntityBehaviour`](/game-api/types/alta-networking/inetworkentitybehaviour)
- **Nested types** [`CollisionIgnoreArguments`](/game-api/types/alta-networking/networkcollidergroup-collisionignorearguments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkColliderGroup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |  |
| <Link id="m-isdisablingonstart" /><code>{"private bool isDisablingOnStart"}</code> |  |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> |  |
| <Link id="m-isondelay" /><code>{"private bool isOnDelay"}</code> |  |
| <Link id="m-onconnectdelay" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" onConnectDelay"}</code> |  |
| <Link id="m-onconnectupdatedelay" /><code>{"private float onConnectUpdateDelay"}</code> |  |
| <Link id="m-syncenabled" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncEnabled"}</code> |  |
| <Link id="m-syncignore" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-networking/networkcollidergroup-collisionignorearguments">{"NetworkColliderGroup.CollisionIgnoreArguments"}</Link>{"> syncIgnore"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-onconnected" /><code>{"void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-ondisconnected" /><code>{"void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-setactive" /><code>{"override void SetActive(bool isEnabled)"}</code> |  |
| <Link id="m-ignorecollision" /><code>{"protected override void IgnoreCollision(Collider thisCollider, Collider otherCollider, bool isIgnoring)"}</code> |  |
| <Link id="m-networkignorecollision" /><code>{"private void NetworkIgnoreCollision("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-networking/networkcollidergroup-collisionignorearguments">{"NetworkColliderGroup.CollisionIgnoreArguments"}</Link>{" args)"}</code> |  |
| <Link id="m-onconnectdelay-2" /><code>{"private IEnumerator OnConnectDelay() (iterator)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-sync" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isOnConnect)"}</code> |  |
