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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Derived types** [`GeneratedLoot`](/mod/game-api/types/alta-world-generation/generatedloot)
- **Attributes** `DefaultMember`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockArray()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-children" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{"> children"}</code> | <span className="api-desc">Dock arrays whose `Parent` is this one, included in `TotalCount` and `TotalDocks`.</span> |
| <Link id="m-docks" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks"}</code> | <span className="api-desc">The docks in this array.</span> |
| <Link id="m-parent" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" parent"}</code> | <span className="api-desc">Backing field for `Parent`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"int Count { get; }"}</code> | <span className="api-desc">Number of docks directly in this array.</span> |
| <Link id="m-docks-2" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Docks { get; }"}</code> | <span className="api-desc">Docks directly in this array.</span> |
| <Link id="m-item" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" this[int index] { get; }"}</code> | <span className="api-desc">Indexer: the dock at an index in this array.</span> |
| <Link id="m-parent-2" /><code><Link to="/mod/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" Parent { get; set; }"}</code> | <span className="api-desc">The array this one is nested in. Setting it moves it between parents' child lists.</span> |
| <Link id="m-quantitystored" /><code>{"int QuantityStored { get; }"}</code> | <span className="api-desc">Total items stored across all docks, nested ones included.</span> |
| <Link id="m-totalcount" /><code>{"int TotalCount { get; }"}</code> | <span className="api-desc">Dock count including nested arrays.</span> |
| <Link id="m-totaldocks" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> TotalDocks { get; }"}</code> | <span className="api-desc">All docks including nested arrays.</span> |
| <Link id="m-weightmultiplier" /><code>{"float WeightMultiplier { get; set; }"}</code> | <span className="api-desc">Multiplier for docks whose settings match the pickup's storage weight settings. 1 by default.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-weightchanged" /><code>{"event Action WeightChanged"}</code> | <span className="api-desc">Raised when a dock's weight changes or docks are added or removed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Adds one or more docks, skipping ones already in. The single version returns false if already present.</span> |
| <Link id="m-add-2" /><code>{"void Add(IEnumerable<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks)"}</code> | <span className="api-desc">Adds one or more docks, skipping ones already in. The single version returns false if already present.</span> |
| <Link id="m-calculateweight" /><code>{"float CalculateWeight("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> | <span className="api-desc">Total weight of this array's docks, applying the multiplier where the pickup's storage settings match.</span> |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Removes one or more docks. The single version returns false if not present.</span> |
| <Link id="m-remove-2" /><code>{"void Remove(IEnumerable<"}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks)"}</code> | <span className="api-desc">Removes one or more docks. The single version returns false if not present.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Listens for weight changes on the docks set on the prefab.</span> |
| <Link id="m-onweightchanged" /><code>{"private void OnWeightChanged()"}</code> | <span className="api-desc">Raises `WeightChanged`. Called when a dock's weight changes or docks are added or removed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DockArray`:

<div className="api-used-in">

[`OnlyAllowDockingWhenEmpty.docks`](/mod/game-api/types/alta-items/onlyallowdockingwhenempty#m-docks), [`Pickup.subDocks`](/mod/game-api/types/global-p/pickup#m-subdocks), [`Pickup.SubDocks`](/mod/game-api/types/global-p/pickup#m-subdocks-2), [`WallHookFilter.docks`](/mod/game-api/types/global-t-x/wallhookfilter#m-docks).

</div>
