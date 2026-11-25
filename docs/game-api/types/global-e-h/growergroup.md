---
title: "GrowerGroup"
description: "class GrowerGroup in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowerGroup

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GrowerGroupSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GrowerGroupSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IGrowthManager`](/game-api/types/global-i-l/igrowthmanager)
- **Derived types** [`GrowerGroupSaveData`](/game-api/types/global-e-h/growergroupsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrowerGroup()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-items" /><code>{"private List<"}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{"> items"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-isdestroyedoncompletion" /><code>{"bool IsDestroyedOnCompletion { get; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pickupderegistered" /><code>{"event Action<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> PickupDeregistered"}</code> |  |
| <Link id="m-pickupregistered" /><code>{"event Action<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> PickupRegistered"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"void Add("}<Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition, Vector3 position, Quaternion rotation)"}</code> |  |
| <Link id="m-allpickups" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{"> AllPickups() (iterator)"}</code> |  |
| <Link id="m-entityadded" /><code>{"private void EntityAdded("}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{" item, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-entityremoved" /><code>{"private void EntityRemoved("}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{" item, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity)"}</code> |  |
| <Link id="m-itemremoved" /><code>{"private void ItemRemoved("}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{" item)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/global-e-h/growthitem">{"GrowthItem"}</Link>{" item)"}</code> |  |

## Used in

Members of other types that take, return or hold a `GrowerGroup`:

[`PotatoSapling.growerGroup`](/game-api/types/global-p/potatosapling#m-growergroup).
