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
| <Link id="m-ctor" /><code>{"RarityList()"}</code> | <span className="api-desc">Creates a `LootTable.RarityList` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"[] entries"}</code> | <span className="api-desc">Backing field for `Entries`.</span> |
| <Link id="m-festivityentries" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/loottable-festivitylist">{"LootTable.FestivityList"}</Link>{"[] festivityEntries"}</code> | <span className="api-desc">Backing field for `FestivityEntries`.</span> |
| <Link id="m-topic" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" topic"}</code> | <span className="api-desc">Backing field for `Rarity`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entries-2" /><code><Link to="/mod/game-api/types/alta-world-generation/loottable-entry">{"LootTable.Entry"}</Link>{"[] Entries { get; }"}</code> | <span className="api-desc">The normal loot entries (item plus min and max count) for this rarity.</span> |
| <Link id="m-festivityentries-2" /><code><Link to="/mod/game-api/types/alta-world-generation/loottable-festivitylist">{"LootTable.FestivityList"}</Link>{"[] FestivityEntries { get; }"}</code> | <span className="api-desc">Extra entry lists that only apply during a given festivity.</span> |
| <Link id="m-rarity" /><code><Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" { get; }"}</code> | <span className="api-desc">The rarity these entries are for. Backed by the serialized field `topic`.</span> |

## Used in

Members of other types that take, return or hold a `RarityList`:

<div className="api-used-in">

[`LootTable.entries`](/mod/game-api/types/alta-world-generation/loottable#m-entries), [`LootTable.Entries`](/mod/game-api/types/alta-world-generation/loottable#m-entries-2).

</div>
