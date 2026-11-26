---
title: "ActionItemsManager"
description: "Network singleton (Instance) that spawns and removes summoned quick access items, one per player per action."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemsManager

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Network singleton (`Instance`) that spawns and removes summoned quick access items, one per player per action. Clients ask, the server spawns.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`SpawnedItemInfo`](/game-api/types/alta-player/actionitemsmanager-spawnediteminfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItemsManager()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionitems" /><code>{"private "}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems"}</code> | The summonable items (`ActionItemData`), set in the prefab. |
| <Link id="m-itemcollection" /><code>{"private "}<Link to="/game-api/types/alta-player/iactionitemhandlercollection">{"IActionItemHandlerCollection"}</Link>{" itemCollection"}</code> | Handler store: a per player map on the server, the local collection on clients. |
| <Link id="m-syncspawnedtoclient" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{"> syncSpawnedToClient"}</code> | Sync that tells clients about spawned and removed items. |
| <Link id="m-syncspawnrequesttoserver" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncSpawnRequestToServer"}</code> | Sync for toggle requests from clients. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/alta-player/actionitemsmanager">{"ActionItemsManager"}</Link>{" Instance { get; private set; }"}</code> | The one manager in the scene. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Makes a per player handler map on the server or a single collection on a client, and sets up the two syncs. |
| <Link id="m-itemisactiveforlocalplayer" /><code>{"bool ItemIsActiveForLocalPlayer("}<Link to="/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" action)"}</code> | True if the local player has that summon action's item out. |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Removes the player's handlers. |
| <Link id="m-updateactionitemstatusforplayer" /><code>{"void UpdateActionItemStatusForPlayer("}<Link to="/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" action, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Toggles a summon action's item: a client sends the request, the server toggles directly. |

<details>
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets `Instance`, or destroys this copy if one already exists. |
| <Link id="m-destroyactionitem" /><code>{"private void DestroyActionItem(int index, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Destroy callback for handlers. Server destroys and tells clients; a client disposes its handler and sends a toggle request. |
| <Link id="m-destroyplayersactionitem" /><code>{"private void DestroyPlayersActionItem("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int itemIndex)"}</code> | Server: disposes the player's handler for that item and tells clients it went. |
| <Link id="m-fadeactionitemonremoteplayer" /><code>{"private void FadeActionItemOnRemotePlayer("}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments)"}</code> | Client: waits for the item to spawn and fades it in or out (skipped when headless). |
| <Link id="m-gettargetpositionandrotation" /><code>{"private static ValueTuple<Vector3, Quaternion> GetTargetPositionAndRotation("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{" data)"}</code> | Spot in front of the player's head at the item's distance, facing the head's flat forward. |
| <Link id="m-playitemeffects" /><code>{"private static void PlayItemEffects("}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments, "}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{" actionItemData)"}</code> | Plays the spawn or disappear effects at the item's position, but only when headless, which looks inverted. |
| <Link id="m-processspawndestroyargumentsforlocalplayer" /><code>{"private void ProcessSpawnDestroyArgumentsForLocalPlayer("}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner)"}</code> | Client: hooks the spawned item into the local handler, or disposes it on removal. |
| <Link id="m-spawnactionitemforplayer" /><code>{"private void SpawnActionItemForPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int dataIndex)"}</code> | Server: spawns the item unsaved in front of the player, sets its owner, puts it in the player's chunk and tells clients. |
| <Link id="m-syncspawnediteminfotoclient" /><code>{"private void SyncSpawnedItemInfoToClient("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments)"}</code> | Message handler (`EffectRequest`) telling clients an item spawned or went; sets up or fades it and plays effects. |
| <Link id="m-syncspawnrequesttoserver-2" /><code>{"private void SyncSpawnRequestToServer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> | Message handler for a client's toggle request (`SyncA`); the server toggles that item. |
| <Link id="m-trygetactionindex" /><code>{"private bool TryGetActionIndex("}<Link to="/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" summonAction, out int index)"}</code> | Finds the index of a summon action in `actionItems`; logs an error if missing. |
| <Link id="m-updateactionitemstatusforplayeronserver" /><code>{"private void UpdateActionItemStatusForPlayerOnServer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> | Server: destroys the player's item if spawned, otherwise spawns it. |

</details>
