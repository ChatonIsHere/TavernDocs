---
title: "CookableItem"
description: "Item component for a cooking ingredient: its cooking category, how it looks floating in a liquid and the effects it adds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookableItem

A **class** in `Root.Township`, `Alta.Cooking`.

Item component for a cooking ingredient: its cooking category, how it looks floating in a liquid and the effects it adds. Read through `Cookable` and the ingredient recipe pages.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`ItemComponent`](/mod/game-api/types/global-i-l/itemcomponent)
- **Derived types** [`CookingGarnish`](/mod/game-api/types/alta-crafting/cookinggarnish)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookableItem()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{" category"}</code> | Backing field for `Category`, the cookable category this item belongs to. |
| <Link id="m-chunkvisual" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" chunkVisual"}</code> | Backing field for `ChunkVisual`, how the item looks as a chunk in liquid (for example in a stew). |
| <Link id="m-effects" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effects"}</code> | Backing field for `Effects`, the effects the item applies when eaten as part of a dish. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/mod/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{" Category { get; }"}</code> | Cooking category the item counts as. |
| <Link id="m-chunkvisual-2" /><code><Link to="/mod/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" ChunkVisual { get; }"}</code> | How pieces of it look floating in a liquid. |
| <Link id="m-effects-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] Effects { get; }"}</code> | Effects it adds to the dish. |

## Used in

Members of other types that take, return or hold a `CookableItem`:

[`Cookable.cookableItem`](/mod/game-api/types/alta-crafting/cookable#m-cookableitem), [`Cookable.CookableItem`](/mod/game-api/types/alta-crafting/cookable#m-cookableitem-2), [`CookableCategoryDefinition.allCookableItems`](/mod/game-api/types/alta-crafting/cookablecategorydefinition#m-allcookableitems), [`CookableCategoryDefinition.AllCookableItems`](/mod/game-api/types/alta-crafting/cookablecategorydefinition#m-allcookableitems-2), [`CookableCategoryDefinition.ContainsCookable`](/mod/game-api/types/alta-crafting/cookablecategorydefinition#m-containscookable), [`CookableCategoryDefinition.Cookables`](/mod/game-api/types/alta-crafting/cookablecategorydefinition#m-cookables), [`CookableCollectionDefinition.ContainsCookable`](/mod/game-api/types/alta-crafting/cookablecollectiondefinition#m-containscookable), [`CookableCollectionDefinition.cookableLookup`](/mod/game-api/types/alta-crafting/cookablecollectiondefinition#m-cookablelookup), [`CookableCollectionDefinition.cookables`](/mod/game-api/types/alta-crafting/cookablecollectiondefinition#m-cookables), [`CookableCollectionDefinition.Cookables`](/mod/game-api/types/alta-crafting/cookablecollectiondefinition#m-cookables-2), [`IStewIngredient.ContainsCookable`](/mod/game-api/types/alta-crafting/istewingredient#m-containscookable), [`StewContentArguments.Ingredients`](/mod/game-api/types/alta-crafting/stewcontentarguments#m-ingredients), [`StewIngredientBase.ContainsCookable`](/mod/game-api/types/alta-crafting/stewingredientbase#m-containscookable), [`StewIngredientBase.Cookables`](/mod/game-api/types/alta-crafting/stewingredientbase#m-cookables), [`StewManager.AddedIngredient`](/mod/game-api/types/alta-crafting/stewmanager#m-addedingredient), [`StewManager.GetCookableItems`](/mod/game-api/types/alta-crafting/stewmanager#m-getcookableitems), [`StewManager.ingredients`](/mod/game-api/types/alta-crafting/stewmanager#m-ingredients), [`StewManager.Ingredients`](/mod/game-api/types/alta-crafting/stewmanager#m-ingredients-2), [`StewRecipe.FindStewRecipeForIngredients`](/mod/game-api/types/alta-crafting/stewrecipe#m-findstewrecipeforingredients), [`StewRecipe.givenIngredients`](/mod/game-api/types/alta-crafting/stewrecipe#m-giveningredients), [`StewRecipe.IsValidIngredientList`](/mod/game-api/types/alta-crafting/stewrecipe#m-isvalidingredientlist), [`LiquidData.cookablesUsed`](/mod/game-api/types/alta-stats-effects/liquiddata#m-cookablesused), [`LiquidData.CookablesUsed`](/mod/game-api/types/alta-stats-effects/liquiddata#m-cookablesused-2), [`LiquidData.LiquidData`](/mod/game-api/types/alta-stats-effects/liquiddata#m-ctor).
