---
title: "LootTable"
description: "class LootTable in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootTable

A **class** in `Root.Township`, `Alta.Loot`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`LootTable.Create`](/game-api/types/alta-world-generation/loottable-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/loottable-create), [`Entry`](/game-api/types/alta-world-generation/loottable-entry), [`FestivityList`](/game-api/types/alta-world-generation/loottable-festivitylist), [`RarityList`](/game-api/types/alta-world-generation/loottable-raritylist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LootTable()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/loottable-raritylist">{"LootTable.RarityList"}</Link>{"> entries"}</code> |  |
| <Link id="m-triedorigins" /><code>{"private static List<"}<Link to="/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{"> triedOrigins"}</code> |  |
| <Link id="m-triedrarities" /><code>{"private static List<"}<Link to="/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{"> triedRarities"}</code> |  |
| <Link id="m-workinglist" /><code>{"private static List<"}<Link to="/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> workingList"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entries-2" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/loottable-raritylist">{"LootTable.RarityList"}</Link>{"> Entries { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getloot" /><code>{"static "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" GetLoot("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] localTables, float weightingPower, out int count)"}</code> |  |
| <Link id="m-getloot-2" /><code>{"static "}<Link to="/game-api/types/alta-items/item">{"Item"}</Link>{" GetLoot("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] localTables, float weightingPower, out int count, out "}<Link to="/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" rarity, out "}<Link to="/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{" origin)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LootTable`:

[`Biome.lootTables`](/game-api/types/alta-world-generation/biome#m-loottables), [`Biome.LootTables`](/game-api/types/alta-world-generation/biome#m-loottables-2), [`Origin.AddEntries`](/game-api/types/alta-world-generation/origin#m-addentries), [`Origin.allTables`](/game-api/types/alta-world-generation/origin#m-alltables), [`Origin.GetItems`](/game-api/types/alta-world-generation/origin#m-getitems), [`Origin.tables`](/game-api/types/alta-world-generation/origin#m-tables).
