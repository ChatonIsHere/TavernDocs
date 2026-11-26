---
title: "LootValue"
description: "An item's loot value tier, as an asset."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootValue

A **class** in `Root.Township`, the global namespace.

An item's loot value tier, as an asset. Items compare by its number, and it sets the tint of docks holding the item.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`PopupScriptableObject`](/mod/game-api/types/global-p/popupscriptableobject), `IComparable<LootValue>`
- **Derived types** [`LootValue`](/mod/game-api/types/global-i-l/lootvalue)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootValue()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockcolortint" /><code>{"private Color dockColorTint"}</code> | <span className="api-desc">Backing field for `DockColorTint`.</span> |
| <Link id="m-value" /><code>{"private int value"}</code> | <span className="api-desc">The number values are compared by.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dockcolortint-2" /><code>{"Color DockColorTint { get; }"}</code> | <span className="api-desc">Colour tint a dock shows when holding an item of this value.</span> |
| <Link id="m-subfolder" /><code>{"override string SubFolder { get; }"}</code> | <span className="api-desc">Asset sub folder for these assets (`Items/`).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-greaterthan" /><code>{"static bool op_GreaterThan("}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" valueA, "}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" ValueB)"}</code> | <span className="api-desc">True if the first value's number is higher.</span> |
| <Link id="m-op-lessthan" /><code>{"static bool op_LessThan("}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" valueA, "}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" ValueB)"}</code> | <span className="api-desc">True if the first value's number is lower.</span> |

## Used in

Members of other types that take, return or hold a `LootValue`:

<div className="api-used-in">

[`CraftingPart.RemoveSize`](/mod/game-api/types/alta-crafting/craftingpart#m-removesize), [`Item.lootValue`](/mod/game-api/types/alta-items/item#m-lootvalue), [`Item.LootValue`](/mod/game-api/types/alta-items/item#m-lootvalue-2), [`Pickup.CurrentValue`](/mod/game-api/types/global-p/pickup#m-currentvalue).

</div>
