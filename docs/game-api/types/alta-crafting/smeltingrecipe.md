---
title: "SmeltingRecipe"
description: "A smelter recipe asset: the items that go in, what comes out and how much fuel it needs."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmeltingRecipe

A **class** in `Root.Township`, `Alta.Blacksmithing`.

A smelter recipe asset: the items that go in, what comes out and how much fuel it needs. Looked up by hash like other `HashedGeneralValue` assets.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<SmeltingRecipe>`](/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`SmeltingRecipe`](/game-api/types/alta-crafting/smeltingrecipe), [`SmeltingRecipe.Create`](/game-api/types/alta-crafting/smeltingrecipe-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/smeltingrecipe-create)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging#smeltingrecipe)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmeltingRecipe()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> |  |
| <Link id="m-input" /><code>{"private "}<Link to="/game-api/types/alta-items/itemcount">{"ItemCount"}</Link>{"[] input"}</code> |  |
| <Link id="m-output" /><code>{"private "}<Link to="/game-api/types/alta-items/itemcount">{"ItemCount"}</Link>{"[] output"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | Fuel the smelter must hold for this recipe to match, and the fuel it then burns. Defaults to 2. |
| <Link id="m-input-2" /><code><Link to="/game-api/types/alta-items/itemcount">{"ItemCount"}</Link>{"[] Input { get; }"}</code> | Items and counts the smelter must contain. The smelter's contents must match these item types exactly. |
| <Link id="m-output-2" /><code><Link to="/game-api/types/alta-items/itemcount">{"ItemCount"}</Link>{"[] Output { get; }"}</code> | Items and counts the smelter produces when the recipe finishes. |

## Used in

Members of other types that take, return or hold a `SmeltingRecipe`:

[`Smelter.FindRecipe`](/game-api/types/alta-crafting/smelter#m-findrecipe), [`Smelter.recipe`](/game-api/types/alta-crafting/smelter#m-recipe), [`SmelterSaveData.currentRecipe`](/game-api/types/alta-crafting/smeltersavedata#m-currentrecipe), [`SmelterUnlockManager.recipes`](/game-api/types/alta-crafting/smelterunlockmanager#m-recipes), [`SmelterUnlockManager.Recipes`](/game-api/types/alta-crafting/smelterunlockmanager#m-recipes-2), [`SmelterUpgrades.recipes`](/game-api/types/alta-crafting/smelterupgrades#m-recipes), [`SmelterUpgrades.Recipes`](/game-api/types/alta-crafting/smelterupgrades#m-recipes-2).
