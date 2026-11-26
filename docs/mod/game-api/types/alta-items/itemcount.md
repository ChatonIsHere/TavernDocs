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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemCount()"}</code> | <span className="api-desc">Creates an `ItemCount` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-count" /><code>{"private int count"}</code> | <span className="api-desc">Backing field for `Count`.</span> |
| <Link id="m-item" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | <span className="api-desc">Backing field for `Item`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-count-2" /><code>{"int Count { get; }"}</code> | <span className="api-desc">How many of the item.</span> |
| <Link id="m-item-2" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" { get; }"}</code> | <span className="api-desc">The item.</span> |

## Used in

Members of other types that take, return or hold a `ItemCount`:

<div className="api-used-in">

[`SmeltingRecipe.input`](/mod/game-api/types/alta-crafting/smeltingrecipe#m-input), [`SmeltingRecipe.Input`](/mod/game-api/types/alta-crafting/smeltingrecipe#m-input-2), [`SmeltingRecipe.output`](/mod/game-api/types/alta-crafting/smeltingrecipe#m-output), [`SmeltingRecipe.Output`](/mod/game-api/types/alta-crafting/smeltingrecipe#m-output-2).

</div>
