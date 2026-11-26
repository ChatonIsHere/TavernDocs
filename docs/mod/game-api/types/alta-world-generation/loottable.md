---
title: "LootTable"
description: "A loot table asset: item entries grouped by rarity, with extra entries for festivals."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootTable

A **class** in `Root.Township`, `Alta.Loot`.

A loot table asset: item entries grouped by rarity, with extra entries for festivals. `GetLoot` rolls an item for a dock.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`LootTable.Create`](/mod/game-api/types/alta-world-generation/loottable-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/loottable-create), [`Entry`](/mod/game-api/types/alta-world-generation/loottable-entry), [`FestivityList`](/mod/game-api/types/alta-world-generation/loottable-festivitylist), [`RarityList`](/mod/game-api/types/alta-world-generation/loottable-raritylist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootTable()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/loottable-raritylist">{"LootTable.RarityList"}</Link>{"> entries"}</code> | Item entries grouped by rarity, with optional festival-only entries. Exposed as `Entries`. |
| <Link id="m-triedorigins" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{"> triedOrigins"}</code> | Origins already tried for the current rarity in `GetLoot`. |
| <Link id="m-triedrarities" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{"> triedRarities"}</code> | Rarities already tried in `GetLoot`. |
| <Link id="m-workinglist" /><code>{"private static List<"}<Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> workingList"}</code> | Shared list of candidate entries filled while picking loot. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entries-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/loottable-raritylist">{"LootTable.RarityList"}</Link>{"> Entries { get; }"}</code> | The entry lists, one per rarity. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getloot" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" GetLoot("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] localTables, float weightingPower, out int count)"}</code> | Rolls a rarity, then an origin, then a category and an item for a dock. Returns the item and count, or null. The count never reaches `Maximum` unless it equals `Minimum`. |
| <Link id="m-getloot-2" /><code>{"static "}<Link to="/mod/game-api/types/alta-items/item">{"Item"}</Link>{" GetLoot("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] localTables, float weightingPower, out int count, out "}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" rarity, out "}<Link to="/mod/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{" origin)"}</code> | Rolls a rarity, then an origin, then a category and an item for a dock. Returns the item and count, or null. The count never reaches `Maximum` unless it equals `Minimum`. |

## Used in

Members of other types that take, return or hold a `LootTable`:

[`Biome.lootTables`](/mod/game-api/types/alta-world-generation/biome#m-loottables), [`Biome.LootTables`](/mod/game-api/types/alta-world-generation/biome#m-loottables-2), [`Origin.AddEntries`](/mod/game-api/types/alta-world-generation/origin#m-addentries), [`Origin.allTables`](/mod/game-api/types/alta-world-generation/origin#m-alltables), [`Origin.GetItems`](/mod/game-api/types/alta-world-generation/origin#m-getitems), [`Origin.tables`](/mod/game-api/types/alta-world-generation/origin#m-tables).
