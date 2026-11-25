---
title: "Rarity"
description: "class Rarity in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Rarity

A **class** in `Root.Township`, `Alta.Loot`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue)
- **Derived types** [`Rarity.Create`](/game-api/types/alta-world-generation/rarity-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/rarity-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Rarity()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-allrarities" /><code>{"private static "}<Link to="/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{"[] allRarities"}</code> |  |
| <Link id="m-originweightings" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/originsinglevalue">{"OriginSingleValue"}</Link>{"[] originWeightings"}</code> |  |
| <Link id="m-weighting" /><code>{"private float weighting"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-originweightings-2" /><code><Link to="/game-api/types/alta-world-generation/originsinglevalue">{"OriginSingleValue"}</Link>{"[] OriginWeightings { get; }"}</code> |  |
| <Link id="m-weighting-2" /><code>{"float Weighting { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"static "}<Link to="/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" GetRandom(float weightingPower, List<"}<Link to="/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{"> ignore)"}</code> |  |

## Used in

Members of other types that take, return or hold a `Rarity`:

[`LootTable.GetLoot`](/game-api/types/alta-world-generation/loottable#m-getloot-2), [`LootTable.triedRarities`](/game-api/types/alta-world-generation/loottable#m-triedrarities), [`LootTable.RarityList.Rarity`](/game-api/types/alta-world-generation/loottable-raritylist#m-rarity), [`LootTable.RarityList.topic`](/game-api/types/alta-world-generation/loottable-raritylist#m-topic), [`Origin.AddEntries`](/game-api/types/alta-world-generation/origin#m-addentries), [`Origin.GetItems`](/game-api/types/alta-world-generation/origin#m-getitems), [`Origin.GetRandom`](/game-api/types/alta-world-generation/origin#m-getrandom).
