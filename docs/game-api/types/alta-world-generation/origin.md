---
title: "Origin"
description: "class Origin in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Origin

A **class** in `Root.Township`, `Alta.Loot`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`Origin.Create`](/game-api/types/alta-world-generation/origin-create), [`OriginSingleValue`](/game-api/types/alta-world-generation/originsinglevalue)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/origin-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Origin()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allorigins" /><code>{"private static "}<Link to="/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{"[] allOrigins"}</code> |  |
| <Link id="m-alltables" /><code>{"private static "}<Link to="/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] allTables"}</code> |  |
| <Link id="m-isallowinglocal" /><code>{"private bool isAllowingLocal"}</code> |  |
| <Link id="m-iswhitelist" /><code>{"private bool isWhitelist"}</code> |  |
| <Link id="m-tables" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] tables"}</code> |  |
| <Link id="m-workingdistinct" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> workingDistinct"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getitems" /><code>{"void GetItems(List<"}<Link to="/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> results, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" rarity, params "}<Link to="/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] local)"}</code> |  |
| <Link id="m-getrandom" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{" GetRandom("}<Link to="/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" rarity, List<"}<Link to="/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{"> ignore)"}</code> |  |
| <Link id="m-addentries" /><code>{"private static void AddEntries(HashSet<"}<Link to="/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> workingDistinct, "}<Link to="/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" rarity, "}<Link to="/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{" table)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Origin`:

[`LootTable.GetLoot`](/game-api/types/alta-world-generation/loottable#m-getloot-2), [`LootTable.triedOrigins`](/game-api/types/alta-world-generation/loottable#m-triedorigins), [`OriginSingleValue.OriginSingleValue`](/game-api/types/alta-world-generation/originsinglevalue#m-ctor-2).
