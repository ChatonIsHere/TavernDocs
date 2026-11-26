---
title: "Item.CustomDockPositioning"
description: "A store position and rotation for an item in one kind of dock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Item.CustomDockPositioning

A **class** in `Root.Township`, `Alta.Inventory`.

A store position and rotation for an item in one kind of dock. A null dock type acts as the fallback for any dock.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Nested in** [`Item`](/mod/game-api/types/alta-items/item)
- **Inherits or implements** [`Item.DockPositioning`](/mod/game-api/types/alta-items/item-dockpositioning)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomDockPositioning("}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" type, Vector3 storePosition, Vector3 storeEuler)"}</code> | Creates an `Item.CustomDockPositioning` from `type`, `storePosition` and `storeEuler`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-docktype" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" dockType"}</code> | Backing field for `Type`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-type" /><code><Link to="/mod/game-api/types/alta-items/pickupdocksettings">{"PickupDockSettings"}</Link>{" Type { get; }"}</code> | The dock settings this positioning applies to, or null for the fallback. |

## Used in

Members of other types that take, return or hold a `CustomDockPositioning`:

[`Item.customPositions`](/mod/game-api/types/alta-items/item#m-custompositions), [`Item.customPositionsWhenCrafted`](/mod/game-api/types/alta-items/item#m-custompositionswhencrafted).
