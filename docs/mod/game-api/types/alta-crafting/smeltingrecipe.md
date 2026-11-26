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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`HashedGeneralValue<SmeltingRecipe>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t)
- **Derived types** [`SmeltingRecipe`](/mod/game-api/types/alta-crafting/smeltingrecipe), [`SmeltingRecipe.Create`](/mod/game-api/types/alta-crafting/smeltingrecipe-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/smeltingrecipe-create)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging#smeltingrecipe)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SmeltingRecipe()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | Backing field for `Duration`. Defaults to 2. |
| <Link id="m-input" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/itemcount">{"ItemCount"}</Link>{"[] input"}</code> | Backing field for `Input`. |
| <Link id="m-output" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/itemcount">{"ItemCount"}</Link>{"[] output"}</code> | Backing field for `Output`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration-2" /><code>{"float Duration { get; }"}</code> | Fuel the smelter must hold for this recipe to match, and the fuel it then burns. Defaults to 2. |
| <Link id="m-input-2" /><code><Link to="/mod/game-api/types/alta-items/itemcount">{"ItemCount"}</Link>{"[] Input { get; }"}</code> | Items and counts the smelter must contain. The smelter's contents must match these item types exactly. |
| <Link id="m-output-2" /><code><Link to="/mod/game-api/types/alta-items/itemcount">{"ItemCount"}</Link>{"[] Output { get; }"}</code> | Items and counts the smelter produces when the recipe finishes. |

## Used in

Members of other types that take, return or hold a `SmeltingRecipe`:

[`Smelter.FindRecipe`](/mod/game-api/types/alta-crafting/smelter#m-findrecipe), [`Smelter.recipe`](/mod/game-api/types/alta-crafting/smelter#m-recipe), [`SmelterSaveData.currentRecipe`](/mod/game-api/types/alta-crafting/smeltersavedata#m-currentrecipe), [`SmelterUnlockManager.recipes`](/mod/game-api/types/alta-crafting/smelterunlockmanager#m-recipes), [`SmelterUnlockManager.Recipes`](/mod/game-api/types/alta-crafting/smelterunlockmanager#m-recipes-2), [`SmelterUpgrades.recipes`](/mod/game-api/types/alta-crafting/smelterupgrades#m-recipes), [`SmelterUpgrades.Recipes`](/mod/game-api/types/alta-crafting/smelterupgrades#m-recipes-2).
