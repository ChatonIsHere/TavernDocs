---
title: "ActionItemsManager"
description: "class ActionItemsManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemsManager

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`SpawnedItemInfo`](/game-api/types/alta-player/actionitemsmanager-spawnediteminfo)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActionItemsManager()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-actionitems" /><code>{"private "}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems"}</code> |
| <Link id="m-itemcollection" /><code>{"private "}<Link to="/game-api/types/alta-player/iactionitemhandlercollection">{"IActionItemHandlerCollection"}</Link>{" itemCollection"}</code> |
| <Link id="m-syncspawnedtoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{"> syncSpawnedToClient"}</code> |
| <Link id="m-syncspawnrequesttoserver" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncSpawnRequestToServer"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-player/actionitemsmanager">{"ActionItemsManager"}</Link>{" Instance { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-itemisactiveforlocalplayer" /><code>{"bool ItemIsActiveForLocalPlayer("}<Link to="/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" action)"}</code> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-updateactionitemstatusforplayer" /><code>{"void UpdateActionItemStatusForPlayer("}<Link to="/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" action, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |

<details>
<summary>12 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-destroyactionitem" /><code>{"private void DestroyActionItem(int index, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-destroyplayersactionitem" /><code>{"private void DestroyPlayersActionItem("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int itemIndex)"}</code> |
| <Link id="m-fadeactionitemonremoteplayer" /><code>{"private void FadeActionItemOnRemotePlayer("}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments)"}</code> |
| <Link id="m-gettargetpositionandrotation" /><code>{"private static ValueTuple<Vector3, Quaternion> GetTargetPositionAndRotation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{" data)"}</code> |
| <Link id="m-playitemeffects" /><code>{"private static void PlayItemEffects("}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments, "}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{" actionItemData)"}</code> |
| <Link id="m-processspawndestroyargumentsforlocalplayer" /><code>{"private void ProcessSpawnDestroyArgumentsForLocalPlayer("}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner)"}</code> |
| <Link id="m-spawnactionitemforplayer" /><code>{"private void SpawnActionItemForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int dataIndex)"}</code> |
| <Link id="m-syncspawnediteminfotoclient" /><code>{"private void SyncSpawnedItemInfoToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments)"}</code> |
| <Link id="m-syncspawnrequesttoserver-2" /><code>{"private void SyncSpawnRequestToServer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> |
| <Link id="m-trygetactionindex" /><code>{"private bool TryGetActionIndex("}<Link to="/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" summonAction, out int index)"}</code> |
| <Link id="m-updateactionitemstatusforplayeronserver" /><code>{"private void UpdateActionItemStatusForPlayerOnServer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> |

</details>
