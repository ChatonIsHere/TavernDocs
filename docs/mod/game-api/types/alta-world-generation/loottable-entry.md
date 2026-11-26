---
title: "LootTable.Entry"
description: "One item in a loot table with a count range."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootTable.Entry

A **class** in `Root.Township`, `Alta.Loot`.

One item in a loot table with a count range.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`LootTable`](/mod/game-api/types/alta-world-generation/loottable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Entry()"}</code> | <span className="api-desc">Creates a `LootTable.Entry` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-item" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> | <span className="api-desc">Backing field for `Item`, the item this entry gives.</span> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | <span className="api-desc">Backing field for `Maximum`, the largest count. Default 1.</span> |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | <span className="api-desc">Backing field for `Minimum`, the smallest count. Default 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item-2" /><code><Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" { get; }"}</code> | <span className="api-desc">The item to give.</span> |
| <Link id="m-maximum-2" /><code>{"int Maximum { get; }"}</code> | <span className="api-desc">Upper count. Exclusive in `GetLoot`, unless equal to `Minimum`.</span> |
| <Link id="m-minimum-2" /><code>{"int Minimum { get; }"}</code> | <span className="api-desc">Lowest count.</span> |

## Used in

Members of other types that take, return or hold a `Entry`:

<div className="api-used-in">

[`Category.Filter`](/mod/game-api/types/alta-world-generation/category#m-filter), [`LootTable.workingList`](/mod/game-api/types/alta-world-generation/loottable#m-workinglist), [`LootTable.FestivityList.entries`](/mod/game-api/types/alta-world-generation/loottable-festivitylist#m-entries), [`LootTable.FestivityList.Entries`](/mod/game-api/types/alta-world-generation/loottable-festivitylist#m-entries-2), [`LootTable.RarityList.entries`](/mod/game-api/types/alta-world-generation/loottable-raritylist#m-entries), [`LootTable.RarityList.Entries`](/mod/game-api/types/alta-world-generation/loottable-raritylist#m-entries-2), [`Origin.AddEntries`](/mod/game-api/types/alta-world-generation/origin#m-addentries), [`Origin.GetItems`](/mod/game-api/types/alta-world-generation/origin#m-getitems), [`Origin.workingDistinct`](/mod/game-api/types/alta-world-generation/origin#m-workingdistinct).

</div>
