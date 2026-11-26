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
| <Link id="m-ctor" /><code>{"DockPositioning(Vector3 storePosition, Vector3 storeEuler)"}</code> | Creates an `Item.DockPositioning` from `storePosition` and `storeEuler`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-storeeuler" /><code>{"private Vector3 storeEuler"}</code> | Backing field for `StoreEuler`. |
| <Link id="m-storeposition" /><code>{"private Vector3 storePosition"}</code> | Backing field for `StorePosition`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-storeeuler-2" /><code>{"Vector3 StoreEuler { get; }"}</code> | Rotation of the stored item, as Euler angles. |
| <Link id="m-storeposition-2" /><code>{"Vector3 StorePosition { get; }"}</code> | Position of the stored item relative to the dock, before the dock scales it. |

## Used in

Members of other types that take, return or hold a `DockPositioning`:

[`Item.GetPositioning`](/mod/game-api/types/alta-items/item#m-getpositioning), [`Item.normalPositioning`](/mod/game-api/types/alta-items/item#m-normalpositioning), [`Item.scaledPositioning`](/mod/game-api/types/alta-items/item#m-scaledpositioning).
