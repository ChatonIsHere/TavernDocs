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
| <Link id="m-ctor" /><code>{"LootValue()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dockcolortint" /><code>{"private Color dockColorTint"}</code> | Backing field for `DockColorTint`. |
| <Link id="m-value" /><code>{"private int value"}</code> | The number values are compared by. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dockcolortint-2" /><code>{"Color DockColorTint { get; }"}</code> | Colour tint a dock shows when holding an item of this value. |
| <Link id="m-subfolder" /><code>{"override string SubFolder { get; }"}</code> | Asset sub folder for these assets (`Items/`). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-op-greaterthan" /><code>{"static bool op_GreaterThan("}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" valueA, "}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" ValueB)"}</code> | True if the first value's number is higher. |
| <Link id="m-op-lessthan" /><code>{"static bool op_LessThan("}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" valueA, "}<Link to="/mod/game-api/types/global-i-l/lootvalue">{"LootValue"}</Link>{" ValueB)"}</code> | True if the first value's number is lower. |

## Used in

Members of other types that take, return or hold a `LootValue`:

[`CraftingPart.RemoveSize`](/mod/game-api/types/alta-crafting/craftingpart#m-removesize), [`Item.lootValue`](/mod/game-api/types/alta-items/item#m-lootvalue), [`Item.LootValue`](/mod/game-api/types/alta-items/item#m-lootvalue-2), [`Pickup.CurrentValue`](/mod/game-api/types/global-p/pickup#m-currentvalue).
