---
title: "Category"
description: "Loot category asset that items belong to (Item.LootCategory)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Category

A **class** in `Root.Township`, `Alta.Loot`.

Loot category asset that items belong to (`Item.LootCategory`). Loot rolls first pick a category by weighting, then an item within it.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`Category.Create`](/game-api/types/alta-world-generation/category-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/category-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Category()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-weighting" /><code>{"private float weighting"}</code> | Backing field for `Weighting`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-weighting-2" /><code>{"float Weighting { get; }"}</code> | Relative chance of this category being picked (default 1). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"static void Filter(List<"}<Link to="/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> entries)"}</code> | Picks one category at random by weighting from the entries' categories and removes entries from all others. Logs items missing a category. |

## Used in

Members of other types that take, return or hold a `Category`:

[`Item.lootCategory`](/game-api/types/alta-items/item#m-lootcategory), [`Item.LootCategory`](/game-api/types/alta-items/item#m-lootcategory-2).
