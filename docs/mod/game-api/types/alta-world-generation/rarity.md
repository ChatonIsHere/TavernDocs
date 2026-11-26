---
title: "Rarity"
description: "A loot rarity asset with a weighting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Rarity

A **class** in `Root.Township`, `Alta.Loot`.

A loot rarity asset with a weighting. All rarities load from Resources/Items/Rarities, and loot tables pick one at random.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue)
- **Derived types** [`Rarity.Create`](/mod/game-api/types/alta-world-generation/rarity-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/rarity-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Rarity()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allrarities" /><code>{"private static "}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{"[] allRarities"}</code> | <span className="api-desc">Every rarity in `Resources/Items/Rarities`, loaded on the first `GetRandom` call.</span> |
| <Link id="m-originweightings" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/originsinglevalue">{"OriginSingleValue"}</Link>{"[] originWeightings"}</code> | <span className="api-desc">Weight of each origin for loot of this rarity. Exposed as `OriginWeightings`.</span> |
| <Link id="m-weighting" /><code>{"private float weighting"}</code> | <span className="api-desc">How likely this rarity is picked relative to others. Exposed as `Weighting`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-originweightings-2" /><code><Link to="/mod/game-api/types/alta-world-generation/originsinglevalue">{"OriginSingleValue"}</Link>{"[] OriginWeightings { get; }"}</code> | <span className="api-desc">Weightings used to pick an `Origin` for loot of this rarity.</span> |
| <Link id="m-weighting-2" /><code>{"float Weighting { get; }"}</code> | <span className="api-desc">Base weighting (default 1).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandom" /><code>{"static "}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{" GetRandom(float weightingPower, List<"}<Link to="/mod/game-api/types/alta-world-generation/rarity">{"Rarity"}</Link>{"> ignore)"}</code> | <span className="api-desc">Weighted pick from all rarities not in `ignore`. The running total is raised to `weightingPower` before comparing, which favours rarities earlier in the list as it grows.</span> |

## Used in

Members of other types that take, return or hold a `Rarity`:

<div className="api-used-in">

[`LootTable.GetLoot`](/mod/game-api/types/alta-world-generation/loottable#m-getloot-2), [`LootTable.triedRarities`](/mod/game-api/types/alta-world-generation/loottable#m-triedrarities), [`LootTable.RarityList.Rarity`](/mod/game-api/types/alta-world-generation/loottable-raritylist#m-rarity), [`LootTable.RarityList.topic`](/mod/game-api/types/alta-world-generation/loottable-raritylist#m-topic), [`Origin.AddEntries`](/mod/game-api/types/alta-world-generation/origin#m-addentries), [`Origin.GetItems`](/mod/game-api/types/alta-world-generation/origin#m-getitems), [`Origin.GetRandom`](/mod/game-api/types/alta-world-generation/origin#m-getrandom).

</div>
