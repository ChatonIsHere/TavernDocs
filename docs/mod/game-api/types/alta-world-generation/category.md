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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`Category.Create`](/mod/game-api/types/alta-world-generation/category-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/category-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Category()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-weighting" /><code>{"private float weighting"}</code> | <span className="api-desc">Backing field for `Weighting`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-weighting-2" /><code>{"float Weighting { get; }"}</code> | <span className="api-desc">Relative chance of this category being picked (default 1).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"static void Filter(List<"}<Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> entries)"}</code> | <span className="api-desc">Picks one category at random by weighting from the entries' categories and removes entries from all others. Logs items missing a category.</span> |

## Used in

Members of other types that take, return or hold a `Category`:

<div className="api-used-in">

[`Item.lootCategory`](/mod/game-api/types/alta-items/item#m-lootcategory), [`Item.LootCategory`](/mod/game-api/types/alta-items/item#m-lootcategory-2).

</div>
