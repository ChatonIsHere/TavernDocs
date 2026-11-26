---
title: "ActionItemHandler"
description: "Tracks one quick-access action item spawned for a player: fades it in and out, and despawns it when the player walks away, leaves or the item lands in the..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemHandler

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Tracks one quick-access action item spawned for a player: fades it in and out, and despawns it when the player walks away, leaves or the item lands in the global chunk.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItemHandler("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int itemIndex, "}<Link to="/mod/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{" data, Action<int, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem)"}</code> | Creates an `ActionItemHandler` from `player`, `itemIndex`, `data` and `destroyItem`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyitem" /><code>{"private readonly Action<int, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem"}</code> | Callback that destroys the item, given its index and player. |
| <Link id="m-item" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/actionitem">{"ActionItem"}</Link>{" Item"}</code> | The spawned action item, or null before it spawns. |
| <Link id="m-itemindex" /><code>{"private readonly int ItemIndex"}</code> | Index of this item in the action item list, passed back to the destroy callback. |
| <Link id="m-maxdistancesquared" /><code>{"private readonly float maxDistanceSquared"}</code> | Squared distance from the head beyond which the despawn timer runs. |
| <Link id="m-outofrangehaptic" /><code>{"private readonly float outOfRangeHaptic"}</code> | Haptic strength used while the item is out of range. |
| <Link id="m-timer" /><code>{"private float timer"}</code> | Seconds left before an out-of-range item is destroyed; reset while in range. |
| <Link id="m-timetodespawn" /><code>{"private readonly float timeToDespawn"}</code> | Seconds the item may stay out of range before it is destroyed. |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | Handle for the registered late-update distance check. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-itemisactive" /><code>{"bool ItemIsActive { get; }"}</code> | True while an item is attached. |
| <Link id="m-itemposition" /><code>{"Vector3 ItemPosition { get; }"}</code> | The item's world position, or zero when there is no item. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> | The player the item belongs to. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | Fades the item out and stops the distance check. Note it unhooks `PlayerDestroyed` from the item rather than `ItemDestroyed`. |
| <Link id="m-setupspawnedactionitem" /><code>{"void SetupSpawnedActionItem("}<Link to="/mod/game-api/types/global-a-b/actionitem">{"ActionItem"}</Link>{" item)"}</code> | Attaches a freshly spawned item, hooks its destroy and chunk events, and fades it in. Starts the distance check for the local player. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-itemdestroyed" /><code>{"private void ItemDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" _, bool __)"}</code> | When the item entity is destroyed, calls `Dispose`. |
| <Link id="m-onaddedtochunk" /><code>{"private void OnAddedToChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Destroys the item if it is moved into the global chunk. |
| <Link id="m-playerdestroyed" /><code>{"private void PlayerDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Destroys the item when the owning player's entity is destroyed. |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> | Client: each late update, buzzes both controllers while the item is too far from the head and destroys it once the timer runs out. |

</details>

## Used in

Members of other types that take, return or hold a `ActionItemHandler`:

[`ActionItemHandlerCollection.GetHandler`](/mod/game-api/types/alta-player/actionitemhandlercollection#m-gethandler), [`ActionItemHandlerCollection.GetHandlerForActionIndex`](/mod/game-api/types/alta-player/actionitemhandlercollection#m-gethandlerforactionindex), [`ActionItemHandlerCollection.localPlayerActionItems`](/mod/game-api/types/alta-player/actionitemhandlercollection#m-localplayeractionitems), [`ActionItemHandlerCollection.LocalPlayerActionItems`](/mod/game-api/types/alta-player/actionitemhandlercollection#m-localplayeractionitems-2), [`ActionItemHandlerCollectionMap.GetHandlerForActionIndex`](/mod/game-api/types/alta-player/actionitemhandlercollectionmap#m-gethandlerforactionindex), [`ActionItemHandlersBase.CreateHandler`](/mod/game-api/types/alta-player/actionitemhandlersbase#m-createhandler), [`IActionItemHandlerCollection.GetHandlerForActionIndex`](/mod/game-api/types/alta-player/iactionitemhandlercollection#m-gethandlerforactionindex).
