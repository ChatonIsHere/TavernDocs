---
title: "Origin"
description: "Loot origin asset: which loot tables an item of a given rarity can come from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Origin

A **class** in `Root.Township`, `Alta.Loot`.

Loot origin asset: which loot tables an item of a given rarity can come from. Rarities pick an origin at random by weight, then the origin lists the possible items.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`Origin.Create`](/mod/game-api/types/alta-world-generation/origin-create), [`OriginSingleValue`](/mod/game-api/types/alta-world-generation/originsinglevalue)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/origin-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Origin()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allorigins" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{"[] allOrigins"}</code> | <span className="api-desc">Every origin, loaded from `Resources/Items/Origins/` on first use.</span> |
| <Link id="m-alltables" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] allTables"}</code> | <span className="api-desc">Every loot table, loaded from `Resources/Items/Loot Tables/` on first use.</span> |
| <Link id="m-isallowinglocal" /><code>{"private bool isAllowingLocal"}</code> | <span className="api-desc">If true, `GetItems` also uses the local tables passed in by the caller.</span> |
| <Link id="m-iswhitelist" /><code>{"private bool isWhitelist"}</code> | <span className="api-desc">If true, `tables` lists the tables to use. If false, it lists tables to leave out and every other table is used.</span> |
| <Link id="m-tables" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] tables"}</code> | <span className="api-desc">The loot tables this origin uses, or excludes when `isWhitelist` is off.</span> |
| <Link id="m-workingdistinct" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> workingDistinct"}</code> | <span className="api-desc">Shared scratch set that removes duplicate entries in `GetItems`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getitems" /><code>{"void GetItems(List<"}<Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> results, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, "}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" rarity, params "}<Link to="/mod/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{"[] local)"}</code> | <span className="api-desc">Fills `results` with the distinct loot entries for a rarity from this origin's tables, the local tables if allowed, and only those the dock accepts.</span> |
| <Link id="m-getrandom" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{" GetRandom("}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" rarity, List<"}<Link to="/mod/game-api/types/alta-world-generation/origin">{"Origin"}</Link>{"> ignore)"}</code> | <span className="api-desc">Picks an origin from the rarity's origin weightings at random, skipping ones in `ignore`. Null if none is picked.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addentries" /><code>{"private static void AddEntries(HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"> workingDistinct, "}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" rarity, "}<Link to="/mod/game-api/types/alta-world-generation/loottable">{"LootTable"}</Link>{" table)"}</code> | <span className="api-desc">Adds a table's entries for one rarity to the set, plus entries for any active festivity.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Origin`:

<div className="api-used-in">

[`LootTable.GetLoot`](/mod/game-api/types/alta-world-generation/loottable#m-getloot-2), [`LootTable.triedOrigins`](/mod/game-api/types/alta-world-generation/loottable#m-triedorigins), [`OriginSingleValue.OriginSingleValue`](/mod/game-api/types/alta-world-generation/originsinglevalue#m-ctor-2).

</div>
