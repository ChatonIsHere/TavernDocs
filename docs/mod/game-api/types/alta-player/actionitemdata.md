---
title: "ActionItemData"
description: "Settings for an item summoned from the quick access menu: what to spawn, where, and when it despawns if the player walks away."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionItemData

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Settings for an item summoned from the quick access menu: what to spawn, where, and when it despawns if the player walks away.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionItemData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" action"}</code> | <span className="api-desc">Backing field for `Action`, the quick access action that summons this item.</span> |
| <Link id="m-actionitemprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" actionItemPrefab"}</code> | <span className="api-desc">Backing field for `ActionItemPrefab`, the prefab spawned for the action.</span> |
| <Link id="m-distancefromplayer" /><code>{"private float distanceFromPlayer"}</code> | <span className="api-desc">Backing field for `DistanceFromPlayer`. Default 1.</span> |
| <Link id="m-maxdistancefromplayersquared" /><code>{"private float maxDistanceFromPlayerSquared"}</code> | <span className="api-desc">Backing field for `MaxDistanceFromPlayerSquared`, stored squared. Default 9 (3 m).</span> |
| <Link id="m-onactionitemdisappeareffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onActionItemDisappearEffects"}</code> | <span className="api-desc">Backing field for `OnActionItemDisappearEffects`, effects played where the item vanishes.</span> |
| <Link id="m-onactionitemspawneffects" /><code>{"private "}<Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" onActionItemSpawnEffects"}</code> | <span className="api-desc">Backing field for `OnActionItemSpawnEffects`, effects played where the item appears.</span> |
| <Link id="m-outofrangehaptic" /><code>{"private float outOfRangeHaptic"}</code> | <span className="api-desc">Backing field for `OutOfRangeHaptic`. Default 0.2.</span> |
| <Link id="m-timetodespawn" /><code>{"private float timeToDespawn"}</code> | <span className="api-desc">Backing field for `TimeToDespawn`. Default 4.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-action-2" /><code><Link to="/mod/game-api/types/alta-player/summonactionitemquickaccess">{"SummonActionItemQuickAccess"}</Link>{" Action { get; }"}</code> | <span className="api-desc">The quick access action that summons this item.</span> |
| <Link id="m-actionitemprefab-2" /><code><Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" ActionItemPrefab { get; }"}</code> | <span className="api-desc">The prefab spawned.</span> |
| <Link id="m-distancefromplayer-2" /><code>{"float DistanceFromPlayer { get; }"}</code> | <span className="api-desc">How far in front of the player it spawns.</span> |
| <Link id="m-maxdistancefromplayersquared-2" /><code>{"float MaxDistanceFromPlayerSquared { get; }"}</code> | <span className="api-desc">Squared distance from the player's head beyond which the despawn timer runs.</span> |
| <Link id="m-onactionitemdisappeareffects-2" /><code><Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnActionItemDisappearEffects { get; }"}</code> | <span className="api-desc">Event with a position, for effects when the item goes.</span> |
| <Link id="m-onactionitemspawneffects-2" /><code><Link to="/mod/game-api/types/global-p/positionevent">{"PositionEvent"}</Link>{" OnActionItemSpawnEffects { get; }"}</code> | <span className="api-desc">Event with a position, for effects when the item appears.</span> |
| <Link id="m-outofrangehaptic-2" /><code>{"float OutOfRangeHaptic { get; }"}</code> | <span className="api-desc">Haptic strength on both hands while the item is out of range.</span> |
| <Link id="m-timetodespawn-2" /><code>{"float TimeToDespawn { get; }"}</code> | <span className="api-desc">Seconds out of range before the item is destroyed. Resets when back in range.</span> |

## Used in

Members of other types that take, return or hold a `ActionItemData`:

<div className="api-used-in">

[`ActionItemHandler.ActionItemHandler`](/mod/game-api/types/alta-player/actionitemhandler#m-ctor), [`ActionItemHandlerCollection.ActionItemHandlerCollection`](/mod/game-api/types/alta-player/actionitemhandlercollection#m-ctor), [`ActionItemHandlerCollectionMap.ActionItemHandlerCollectionMap`](/mod/game-api/types/alta-player/actionitemhandlercollectionmap#m-ctor), [`ActionItemHandlersBase.ActionItemHandlersBase`](/mod/game-api/types/alta-player/actionitemhandlersbase#m-ctor), [`ActionItemHandlersBase.actionItems`](/mod/game-api/types/alta-player/actionitemhandlersbase#m-actionitems), [`ActionItemsManager.actionItems`](/mod/game-api/types/alta-player/actionitemsmanager#m-actionitems), [`ActionItemsManager.GetTargetPositionAndRotation`](/mod/game-api/types/alta-player/actionitemsmanager#m-gettargetpositionandrotation), [`ActionItemsManager.PlayItemEffects`](/mod/game-api/types/alta-player/actionitemsmanager#m-playitemeffects).

</div>
