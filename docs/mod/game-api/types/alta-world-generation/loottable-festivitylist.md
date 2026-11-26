---
title: "LootTable.FestivityList"
description: "Loot entries in a RarityList that apply for one festivity (a seasonal event)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LootTable.FestivityList

A **class** in `Root.Township`, `Alta.Loot`.

Loot entries in a `RarityList` that apply for one festivity (a seasonal event). Set in the loot table asset.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`LootTable`](/mod/game-api/types/alta-world-generation/loottable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FestivityList()"}</code> | Creates a `LootTable.FestivityList` with default values. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"[] entries"}</code> | Backing field for `Entries`. |
| <Link id="m-festivity" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity"}</code> | Backing field for `Festivity`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entries-2" /><code><Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"[] Entries { get; }"}</code> | The loot entries (item plus min and max count) for this festivity. |
| <Link id="m-festivity-2" /><code><Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" { get; }"}</code> | The festivity these entries belong to. |

## Used in

Members of other types that take, return or hold a `FestivityList`:

[`LootTable.RarityList.festivityEntries`](/mod/game-api/types/alta-world-generation/loottable-raritylist#m-festivityentries), [`LootTable.RarityList.FestivityEntries`](/mod/game-api/types/alta-world-generation/loottable-raritylist#m-festivityentries-2).
