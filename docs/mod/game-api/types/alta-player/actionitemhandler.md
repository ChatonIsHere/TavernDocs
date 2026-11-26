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
| <Link id="m-ctor" /><code>{"ActionItemHandler("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int itemIndex, "}<Link to="/mod/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{" data, Action<int, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem)"}</code> | <span className="api-desc">Creates an `ActionItemHandler` from `player`, `itemIndex`, `data` and `destroyItem`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroyitem" /><code>{"private readonly Action<int, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem"}</code> | <span className="api-desc">Callback that destroys the item, given its index and player.</span> |
| <Link id="m-item" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/actionitem">{"ActionItem"}</Link>{" Item"}</code> | <span className="api-desc">The spawned action item, or null before it spawns.</span> |
| <Link id="m-itemindex" /><code>{"private readonly int ItemIndex"}</code> | <span className="api-desc">Index of this item in the action item list, passed back to the destroy callback.</span> |
| <Link id="m-maxdistancesquared" /><code>{"private readonly float maxDistanceSquared"}</code> | <span className="api-desc">Squared distance from the head beyond which the despawn timer runs.</span> |
| <Link id="m-outofrangehaptic" /><code>{"private readonly float outOfRangeHaptic"}</code> | <span className="api-desc">Haptic strength used while the item is out of range.</span> |
| <Link id="m-timer" /><code>{"private float timer"}</code> | <span className="api-desc">Seconds left before an out-of-range item is destroyed; reset while in range.</span> |
| <Link id="m-timetodespawn" /><code>{"private readonly float timeToDespawn"}</code> | <span className="api-desc">Seconds the item may stay out of range before it is destroyed.</span> |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | <span className="api-desc">Handle for the registered late-update distance check.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-itemisactive" /><code>{"bool ItemIsActive { get; }"}</code> | <span className="api-desc">True while an item is attached.</span> |
| <Link id="m-itemposition" /><code>{"Vector3 ItemPosition { get; }"}</code> | <span className="api-desc">The item's world position, or zero when there is no item.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> | <span className="api-desc">The player the item belongs to.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> | <span className="api-desc">Fades the item out and stops the distance check. Note it unhooks `PlayerDestroyed` from the item rather than `ItemDestroyed`.</span> |
| <Link id="m-setupspawnedactionitem" /><code>{"void SetupSpawnedActionItem("}<Link to="/mod/game-api/types/global-a-b/actionitem">{"ActionItem"}</Link>{" item)"}</code> | <span className="api-desc">Attaches a freshly spawned item, hooks its destroy and chunk events, and fades it in. Starts the distance check for the local player.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-itemdestroyed" /><code>{"private void ItemDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" _, bool __)"}</code> | <span className="api-desc">When the item entity is destroyed, calls `Dispose`.</span> |
| <Link id="m-onaddedtochunk" /><code>{"private void OnAddedToChunk("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Destroys the item if it is moved into the global chunk.</span> |
| <Link id="m-playerdestroyed" /><code>{"private void PlayerDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Destroys the item when the owning player's entity is destroyed.</span> |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> | <span className="api-desc">Client: each late update, buzzes both controllers while the item is too far from the head and destroys it once the timer runs out.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ActionItemHandler`:

<div className="api-used-in">

[`ActionItemHandlerCollection.GetHandler`](/mod/game-api/types/alta-player/actionitemhandlercollection#m-gethandler), [`ActionItemHandlerCollection.GetHandlerForActionIndex`](/mod/game-api/types/alta-player/actionitemhandlercollection#m-gethandlerforactionindex), [`ActionItemHandlerCollection.localPlayerActionItems`](/mod/game-api/types/alta-player/actionitemhandlercollection#m-localplayeractionitems), [`ActionItemHandlerCollection.LocalPlayerActionItems`](/mod/game-api/types/alta-player/actionitemhandlercollection#m-localplayeractionitems-2), [`ActionItemHandlerCollectionMap.GetHandlerForActionIndex`](/mod/game-api/types/alta-player/actionitemhandlercollectionmap#m-gethandlerforactionindex), [`ActionItemHandlersBase.CreateHandler`](/mod/game-api/types/alta-player/actionitemhandlersbase#m-createhandler), [`IActionItemHandlerCollection.GetHandlerForActionIndex`](/mod/game-api/types/alta-player/iactionitemhandlercollection#m-gethandlerforactionindex).

</div>
