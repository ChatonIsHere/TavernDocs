---
title: "DockArray"
description: "A group of pickup docks (a bag's or belt's slots) with totals for count, stored quantity and weight."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockArray

A **class** in `Root.Township`, `Alta.Inventory`.

A group of pickup docks (a bag's or belt's slots) with totals for count, stored quantity and weight. Arrays can nest, so a parent includes its children's docks.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`GeneratedLoot`](/game-api/types/alta-world-generation/generatedloot)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockArray()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-children" /><code>{"private HashSet<"}<Link to="/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{"> children"}</code> |  |
| <Link id="m-docks" /><code>{"private List<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks"}</code> |  |
| <Link id="m-parent" /><code>{"private "}<Link to="/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" parent"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | Number of docks directly in this array. |
| <Link id="m-docks-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Docks { get; }"}</code> | Docks directly in this array. |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" this[int index] { get; }"}</code> | Indexer: the dock at an index in this array. |
| <Link id="m-parent-2" /><code><Link to="/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" Parent { get; set; }"}</code> | The array this one is nested in. Setting it moves it between parents' child lists. |
| <Link id="m-quantitystored" /><code>{"int QuantityStored { get; }"}</code> | Total items stored across all docks, nested ones included. |
| <Link id="m-totalcount" /><code>{"int TotalCount { get; }"}</code> | Dock count including nested arrays. |
| <Link id="m-totaldocks" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> TotalDocks { get; }"}</code> | All docks including nested arrays. |
| <Link id="m-weightmultiplier" /><code>{"float WeightMultiplier { get; set; }"}</code> | Multiplier for docks whose settings match the pickup's storage weight settings. 1 by default. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-weightchanged" /><code>{"event Action WeightChanged"}</code> | Raised when a dock's weight changes or docks are added or removed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Adds one or more docks, skipping ones already in. The single version returns false if already present. |
| <Link id="m-add-2" /><code>{"void Add(IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks)"}</code> | Adds one or more docks, skipping ones already in. The single version returns false if already present. |
| <Link id="m-calculateweight" /><code>{"float CalculateWeight("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | Total weight of this array's docks, applying the multiplier where the pickup's storage settings match. |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Removes one or more docks. The single version returns false if not present. |
| <Link id="m-remove-2" /><code>{"void Remove(IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks)"}</code> | Removes one or more docks. The single version returns false if not present. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-onweightchanged" /><code>{"private void OnWeightChanged()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DockArray`:

[`OnlyAllowDockingWhenEmpty.docks`](/game-api/types/alta-items/onlyallowdockingwhenempty#m-docks), [`Pickup.subDocks`](/game-api/types/global-p/pickup#m-subdocks), [`Pickup.SubDocks`](/game-api/types/global-p/pickup#m-subdocks-2), [`WallHookFilter.docks`](/game-api/types/global-t-x/wallhookfilter#m-docks).
