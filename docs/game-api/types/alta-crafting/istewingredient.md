---
title: "IStewIngredient"
description: "Internal interface for stew recipe ingredients (StewIngredientBase): checks whether a cookable item counts as this ingredient."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IStewIngredient

An **internal interface** in `Root.Township`, `Alta.Cooking`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal interface for stew recipe ingredients (`StewIngredientBase`): checks whether a cookable item counts as this ingredient.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Derived types** [`StewIngredientBase`](/game-api/types/alta-crafting/stewingredientbase)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-containscookable" /><code>{"bool ContainsCookable("}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookable, out int score)"}</code> | True if the cookable counts as this ingredient, with a match score. `StewRecipe` uses it to match what is in the pot. |
