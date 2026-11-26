---
title: "ItemCount"
description: "An item and an amount, used for smelting recipe inputs and outputs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemCount

A **class** in `Root.Township`, `Alta.Inventory`.

An item and an amount, used for smelting recipe inputs and outputs.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemCount()"}</code> | Creates an `ItemCount` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | Backing field for `Count`. |
| <Link id="m-item" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | Backing field for `Item`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> | How many of the item. |
| <Link id="m-item-2" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" { get; }"}</code> | The item. |

## Used in

Members of other types that take, return or hold a `ItemCount`:

[`SmeltingRecipe.input`](/game-api/types/alta-crafting/smeltingrecipe#m-input), [`SmeltingRecipe.Input`](/game-api/types/alta-crafting/smeltingrecipe#m-input-2), [`SmeltingRecipe.output`](/game-api/types/alta-crafting/smeltingrecipe#m-output), [`SmeltingRecipe.Output`](/game-api/types/alta-crafting/smeltingrecipe#m-output-2).
