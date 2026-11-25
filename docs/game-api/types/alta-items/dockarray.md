---
title: "DockArray"
description: "class DockArray in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockArray

A **class** in `Root.Township`, `Alta.Inventory`.

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
| <Link id="m-count" /><code>{"int Count { get; }"}</code> |  |
| <Link id="m-docks-2" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> Docks { get; }"}</code> |  |
| <Link id="m-item" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" this[int index] { get; }"}</code> |  |
| <Link id="m-parent-2" /><code><Link to="/game-api/types/alta-items/dockarray">{"DockArray"}</Link>{" Parent { get; set; }"}</code> |  |
| <Link id="m-quantitystored" /><code>{"int QuantityStored { get; }"}</code> |  |
| <Link id="m-totalcount" /><code>{"int TotalCount { get; }"}</code> |  |
| <Link id="m-totaldocks" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> TotalDocks { get; }"}</code> |  |
| <Link id="m-weightmultiplier" /><code>{"float WeightMultiplier { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-weightchanged" /><code>{"event Action WeightChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"bool Add("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-add-2" /><code>{"void Add(IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks)"}</code> |  |
| <Link id="m-calculateweight" /><code>{"float CalculateWeight("}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup)"}</code> |  |
| <Link id="m-remove" /><code>{"bool Remove("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-remove-2" /><code>{"void Remove(IEnumerable<"}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{"> docks)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-onweightchanged" /><code>{"private void OnWeightChanged()"}</code> |  |

## Used in

Members of other types that take, return or hold a `DockArray`:

[`OnlyAllowDockingWhenEmpty.docks`](/game-api/types/alta-items/onlyallowdockingwhenempty#m-docks), [`Pickup.subDocks`](/game-api/types/global-p/pickup#m-subdocks), [`Pickup.SubDocks`](/game-api/types/global-p/pickup#m-subdocks-2), [`WallHookFilter.docks`](/game-api/types/global-t-x/wallhookfilter#m-docks).
