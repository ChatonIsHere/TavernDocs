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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Nested types** [`SpawnedItemInfo`](/mod/game-api/types/alta-player/actionitemsmanager-spawnediteminfo)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItemsManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-actionitems" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{"[] actionItems"}</code> | <span className="api-desc">The summonable items (`ActionItemData`), set in the prefab.</span> |
| <Link id="m-itemcollection" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/iactionitemhandlercollection">{"IActionItemHandlerCollection"}</Link>{" itemCollection"}</code> | <span className="api-desc">Handler store: a per player map on the server, the local collection on clients.</span> |
| <Link id="m-syncspawnedtoclient" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<"}<Link to="/mod/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{"> syncSpawnedToClient"}</code> | <span className="api-desc">Sync that tells clients about spawned and removed items.</span> |
| <Link id="m-syncspawnrequesttoserver" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<int> syncSpawnRequestToServer"}</code> | <span className="api-desc">Sync for toggle requests from clients.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/alta-player/actionitemsmanager">{"ActionItemsManager"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The one manager in the scene.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Makes a per player handler map on the server or a single collection on a client, and sets up the two syncs.</span> |
| <Link id="m-itemisactiveforlocalplayer" /><code>{"bool ItemIsActiveForLocalPlayer("}<Link to="/mod/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" action)"}</code> | <span className="api-desc">True if the local player has that summon action's item out.</span> |
| <Link id="m-ondisconnected" /><code>{"override void OnDisconnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Removes the player's handlers.</span> |
| <Link id="m-updateactionitemstatusforplayer" /><code>{"void UpdateActionItemStatusForPlayer("}<Link to="/mod/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" action, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Toggles a summon action's item: a client sends the request, the server toggles directly.</span> |

<details className="api-private">
<summary>12 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets `Instance`, or destroys this copy if one already exists.</span> |
| <Link id="m-destroyactionitem" /><code>{"private void DestroyActionItem(int index, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Destroy callback for handlers. Server destroys and tells clients; a client disposes its handler and sends a toggle request.</span> |
| <Link id="m-destroyplayersactionitem" /><code>{"private void DestroyPlayersActionItem("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int itemIndex)"}</code> | <span className="api-desc">Server: disposes the player's handler for that item and tells clients it went.</span> |
| <Link id="m-fadeactionitemonremoteplayer" /><code>{"private void FadeActionItemOnRemotePlayer("}<Link to="/mod/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments)"}</code> | <span className="api-desc">Client: waits for the item to spawn and fades it in or out (skipped when headless).</span> |
| <Link id="m-gettargetpositionandrotation" /><code>{"private static ValueTuple<Vector3, Quaternion> GetTargetPositionAndRotation("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{" data)"}</code> | <span className="api-desc">Spot in front of the player's head at the item's distance, facing the head's flat forward.</span> |
| <Link id="m-playitemeffects" /><code>{"private static void PlayItemEffects("}<Link to="/mod/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments, "}<Link to="/mod/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{" actionItemData)"}</code> | <span className="api-desc">Plays the spawn or disappear effects at the item's position, but only when headless, which looks inverted.</span> |
| <Link id="m-processspawndestroyargumentsforlocalplayer" /><code>{"private void ProcessSpawnDestroyArgumentsForLocalPlayer("}<Link to="/mod/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" owner)"}</code> | <span className="api-desc">Client: hooks the spawned item into the local handler, or disposes it on removal.</span> |
| <Link id="m-spawnactionitemforplayer" /><code>{"private void SpawnActionItemForPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int dataIndex)"}</code> | <span className="api-desc">Server: spawns the item unsaved in front of the player, sets its owner, puts it in the player's chunk and tells clients.</span> |
| <Link id="m-syncspawnediteminfotoclient" /><code>{"private void SyncSpawnedItemInfoToClient("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/alta-player/actionitemsmanager-spawnediteminfo">{"ActionItemsManager.SpawnedItemInfo"}</Link>{" arguments)"}</code> | <span className="api-desc">Message handler (`EffectRequest`) telling clients an item spawned or went; sets up or fades it and plays effects.</span> |
| <Link id="m-syncspawnrequesttoserver-2" /><code>{"private void SyncSpawnRequestToServer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, int index)"}</code> | <span className="api-desc">Message handler for a client's toggle request (`SyncA`); the server toggles that item.</span> |
| <Link id="m-trygetactionindex" /><code>{"private bool TryGetActionIndex("}<Link to="/mod/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" summonAction, out int index)"}</code> | <span className="api-desc">Finds the index of a summon action in `actionItems`; logs an error if missing.</span> |
| <Link id="m-updateactionitemstatusforplayeronserver" /><code>{"private void UpdateActionItemStatusForPlayerOnServer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int index)"}</code> | <span className="api-desc">Server: destroys the player's item if spawned, otherwise spawns it.</span> |

</details>
