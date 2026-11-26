---
title: "ICraftingIngredientProvider"
description: "A recipe that can list its ingredients, such as GenericCraftingRecipe and StewRecipe."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ICraftingIngredientProvider

An **interface** in `Root.Township`, the global namespace.

A recipe that can list its ingredients, such as `GenericCraftingRecipe` and `StewRecipe`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`StewRecipe`](/mod/game-api/types/alta-crafting/stewrecipe), [`GenericCraftingRecipe`](/mod/game-api/types/alta-crafting/genericcraftingrecipe)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-prefabquantities" /><code>{"Dictionary<uint, int> PrefabQuantities { get; }"}</code> | Ingredient prefab hashes mapped to how many of each are needed. |
