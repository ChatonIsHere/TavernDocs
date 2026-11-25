---
title: "ActionItemHandler"
description: "class ActionItemHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemHandler

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ActionItemHandler("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int itemIndex, "}<Link to="/game-api/types/alta-player/actionitemdata">{"ActionItemData"}</Link>{" data, Action<int, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem)"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-destroyitem" /><code>{"private readonly Action<int, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> destroyItem"}</code> |
| <Link id="m-item" /><code>{"private "}<Link to="/game-api/types/global-a-b/actionitem">{"ActionItem"}</Link>{" Item"}</code> |
| <Link id="m-itemindex" /><code>{"private readonly int ItemIndex"}</code> |
| <Link id="m-maxdistancesquared" /><code>{"private readonly float maxDistanceSquared"}</code> |
| <Link id="m-outofrangehaptic" /><code>{"private readonly float outOfRangeHaptic"}</code> |
| <Link id="m-timer" /><code>{"private float timer"}</code> |
| <Link id="m-timetodespawn" /><code>{"private readonly float timeToDespawn"}</code> |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-itemisactive" /><code>{"bool ItemIsActive { get; }"}</code> |
| <Link id="m-itemposition" /><code>{"Vector3 ItemPosition { get; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" Player { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-dispose" /><code>{"void Dispose()"}</code> |
| <Link id="m-setupspawnedactionitem" /><code>{"void SetupSpawnedActionItem("}<Link to="/game-api/types/global-a-b/actionitem">{"ActionItem"}</Link>{" item)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-itemdestroyed" /><code>{"private void ItemDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" _, bool __)"}</code> |
| <Link id="m-onaddedtochunk" /><code>{"private void OnAddedToChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-playerdestroyed" /><code>{"private void PlayerDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ActionItemHandler`:

[`ActionItemHandlerCollection.GetHandler`](/game-api/types/alta-player/actionitemhandlercollection#m-gethandler), [`ActionItemHandlerCollection.GetHandlerForActionIndex`](/game-api/types/alta-player/actionitemhandlercollection#m-gethandlerforactionindex), [`ActionItemHandlerCollection.localPlayerActionItems`](/game-api/types/alta-player/actionitemhandlercollection#m-localplayeractionitems), [`ActionItemHandlerCollection.LocalPlayerActionItems`](/game-api/types/alta-player/actionitemhandlercollection#m-localplayeractionitems-2), [`ActionItemHandlerCollectionMap.GetHandlerForActionIndex`](/game-api/types/alta-player/actionitemhandlercollectionmap#m-gethandlerforactionindex), [`ActionItemHandlersBase.CreateHandler`](/game-api/types/alta-player/actionitemhandlersbase#m-createhandler), [`IActionItemHandlerCollection.GetHandlerForActionIndex`](/game-api/types/alta-player/iactionitemhandlercollection#m-gethandlerforactionindex).
