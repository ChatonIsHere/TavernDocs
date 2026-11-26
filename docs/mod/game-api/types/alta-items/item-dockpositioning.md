---
title: "Item.DockPositioning"
description: "Where an item sits when stored in a dock: a local position and rotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Item.DockPositioning

A **class** in `Root.Township`, `Alta.Inventory`.

Where an item sits when stored in a dock: a local position and rotation. `PickupDock` gets one from `Item.GetPositioning` and scales the position to fit.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`Item`](/mod/game-api/types/alta-items/item)
- **Derived types** [`Item.CustomDockPositioning`](/mod/game-api/types/alta-items/item-customdockpositioning)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockPositioning(Vector3 storePosition, Vector3 storeEuler)"}</code> | <span className="api-desc">Creates an `Item.DockPositioning` from `storePosition` and `storeEuler`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-storeeuler" /><code>{"private Vector3 storeEuler"}</code> | <span className="api-desc">Backing field for `StoreEuler`.</span> |
| <Link id="m-storeposition" /><code>{"private Vector3 storePosition"}</code> | <span className="api-desc">Backing field for `StorePosition`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-storeeuler-2" /><code>{"Vector3 StoreEuler { get; }"}</code> | <span className="api-desc">Rotation of the stored item, as Euler angles.</span> |
| <Link id="m-storeposition-2" /><code>{"Vector3 StorePosition { get; }"}</code> | <span className="api-desc">Position of the stored item relative to the dock, before the dock scales it.</span> |

## Used in

Members of other types that take, return or hold a `DockPositioning`:

<div className="api-used-in">

[`Item.GetPositioning`](/mod/game-api/types/alta-items/item#m-getpositioning), [`Item.normalPositioning`](/mod/game-api/types/alta-items/item#m-normalpositioning), [`Item.scaledPositioning`](/mod/game-api/types/alta-items/item#m-scaledpositioning).

</div>
