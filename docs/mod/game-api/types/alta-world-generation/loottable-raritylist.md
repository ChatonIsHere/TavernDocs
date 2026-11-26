---
title: "LootTable.RarityList"
description: "The loot entries a LootTable offers for one rarity, plus extra lists per festivity."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootTable.RarityList

A **class** in `Root.Township`, `Alta.Loot`.

The loot entries a `LootTable` offers for one rarity, plus extra lists per festivity. Set in the loot table asset.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`LootTable`](/mod/game-api/types/alta-world-generation/loottable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RarityList()"}</code> | Creates a `LootTable.RarityList` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"[] entries"}</code> | Backing field for `Entries`. |
| <Link id="m-festivityentries" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/loottable-festivitylist">{"LootTable.FestivityList"}</Link>{"[] festivityEntries"}</code> | Backing field for `FestivityEntries`. |
| <Link id="m-topic" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" topic"}</code> | Backing field for `Rarity`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entries-2" /><code><Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"[] Entries { get; }"}</code> | The normal loot entries (item plus min and max count) for this rarity. |
| <Link id="m-festivityentries-2" /><code><Link to="/mod/game-api/types/alta-world-generation/loottable-festivitylist">{"LootTable.FestivityList"}</Link>{"[] FestivityEntries { get; }"}</code> | Extra entry lists that only apply during a given festivity. |
| <Link id="m-rarity" /><code><Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" { get; }"}</code> | The rarity these entries are for. Backed by the serialized field `topic`. |

## Used in

Members of other types that take, return or hold a `RarityList`:

[`LootTable.entries`](/mod/game-api/types/alta-world-generation/loottable#m-entries), [`LootTable.Entries`](/mod/game-api/types/alta-world-generation/loottable#m-entries-2).
