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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`LootTable`](/game-api/types/alta-world-generation/loottable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Entry()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-item" /><code>{"private "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" item"}</code> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-item-2" /><code><Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" { get; }"}</code> | The item to give. |
| <Link id="m-maximum-2" /><code>{"int Maximum { get; }"}</code> | Upper count. Exclusive in `GetLoot`, unless equal to `Minimum`. |
| <Link id="m-minimum-2" /><code>{"int Minimum { get; }"}</code> | Lowest count. |

## Used in

Members of other types that take, return or hold a `Entry`:

[`Category.Filter`](/game-api/types/alta-world-generation/category#m-filter), [`LootTable.workingList`](/game-api/types/alta-world-generation/loottable#m-workinglist), [`LootTable.FestivityList.entries`](/game-api/types/alta-world-generation/loottable-festivitylist#m-entries), [`LootTable.FestivityList.Entries`](/game-api/types/alta-world-generation/loottable-festivitylist#m-entries-2), [`LootTable.RarityList.entries`](/game-api/types/alta-world-generation/loottable-raritylist#m-entries), [`LootTable.RarityList.Entries`](/game-api/types/alta-world-generation/loottable-raritylist#m-entries-2), [`Origin.AddEntries`](/game-api/types/alta-world-generation/origin#m-addentries), [`Origin.GetItems`](/game-api/types/alta-world-generation/origin#m-getitems), [`Origin.workingDistinct`](/game-api/types/alta-world-generation/origin#m-workingdistinct).
