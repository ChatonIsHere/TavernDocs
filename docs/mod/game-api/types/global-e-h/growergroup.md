---
title: "GrowerGroup"
description: "Networked, saved group of growing items that each go through a GrowthDefinition's stages, such as the potato sapling's crops."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowerGroup

A **class** in `Root.Township`, the global namespace.

Networked, saved group of growing items that each go through a `GrowthDefinition`'s stages, such as the potato sapling's crops. Raises events as grown pickups appear and go away.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GrowerGroupSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GrowerGroupSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IGrowthManager`](/mod/game-api/types/global-i-l/igrowthmanager)
- **Derived types** [`GrowerGroupSaveData`](/mod/game-api/types/global-e-h/growergroupsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowerGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private List<"}<Link to="/mod/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{"> items"}</code> | <span className="api-desc">The group's growth items.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">Class logger, used when a loaded stage time can't be worked out.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of growth items in the group.</span> |
| <Link id="m-isdestroyedoncompletion" /><code>{"bool IsDestroyedOnCompletion { get; }"}</code> | <span className="api-desc">Always false: the group stays when its items finish growing.</span> |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The group's transform.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pickupderegistered" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> PickupDeregistered"}</code> | <span className="api-desc">Raised when an item's pickup leaves the group.</span> |
| <Link id="m-pickupregistered" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> PickupRegistered"}</code> | <span className="api-desc">Raised when an item spawns an entity with a pickup.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition, Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Adds a new growth item at a position and rotation and starts it growing.</span> |
| <Link id="m-allpickups" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> AllPickups() (iterator)"}</code> | <span className="api-desc">Yields the pickup of every item that currently has a spawned entity.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entityadded" /><code>{"private void EntityAdded("}<Link to="/mod/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{" item, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Item handler that raises `PickupRegistered` when an item's spawned entity has a pickup.</span> |
| <Link id="m-entityremoved" /><code>{"private void EntityRemoved("}<Link to="/mod/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{" item, "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> | <span className="api-desc">Item handler that raises `PickupDeregistered` when an item's entity with a pickup is removed.</span> |
| <Link id="m-itemremoved" /><code>{"private void ItemRemoved("}<Link to="/mod/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{" item)"}</code> | <span className="api-desc">Item handler for destroyed or removed items: drops it from the list and raises `PickupDeregistered`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Tells every item the group is being destroyed.</span> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{" item)"}</code> | <span className="api-desc">Parents an item to this group, hooks its events and adds it to the list.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GrowerGroup`:

<div className="api-used-in">

[`PotatoSapling.growerGroup`](/mod/game-api/types/global-p/potatosapling#m-growergroup).

</div>
