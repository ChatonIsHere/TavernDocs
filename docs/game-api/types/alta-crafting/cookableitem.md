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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`ItemComponent`](/game-api/types/global-i-l/itemcomponent)
- **Derived types** [`CookingGarnish`](/game-api/types/alta-crafting/cookinggarnish)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookableItem()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-category" /><code>{"private "}<Link to="/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{" category"}</code> |  |
| <Link id="m-chunkvisual" /><code>{"private "}<Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" chunkVisual"}</code> |  |
| <Link id="m-effects" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] effects"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-category-2" /><code><Link to="/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{" Category { get; }"}</code> | Cooking category the item counts as. |
| <Link id="m-chunkvisual-2" /><code><Link to="/game-api/types/alta-crafting/liquidvisualchunkdefinition">{"LiquidVisualChunkDefinition"}</Link>{" ChunkVisual { get; }"}</code> | How pieces of it look floating in a liquid. |
| <Link id="m-effects-2" /><code><Link to="/game-api/types/alta-stats-effects/effectdefinitionapplication">{"EffectDefinitionApplication"}</Link>{"[] Effects { get; }"}</code> | Effects it adds to the dish. |

## Used in

Members of other types that take, return or hold a `CookableItem`:

[`Cookable.cookableItem`](/game-api/types/alta-crafting/cookable#m-cookableitem), [`Cookable.CookableItem`](/game-api/types/alta-crafting/cookable#m-cookableitem-2), [`CookableCategoryDefinition.allCookableItems`](/game-api/types/alta-crafting/cookablecategorydefinition#m-allcookableitems), [`CookableCategoryDefinition.AllCookableItems`](/game-api/types/alta-crafting/cookablecategorydefinition#m-allcookableitems-2), [`CookableCategoryDefinition.ContainsCookable`](/game-api/types/alta-crafting/cookablecategorydefinition#m-containscookable), [`CookableCategoryDefinition.Cookables`](/game-api/types/alta-crafting/cookablecategorydefinition#m-cookables), [`CookableCollectionDefinition.ContainsCookable`](/game-api/types/alta-crafting/cookablecollectiondefinition#m-containscookable), [`CookableCollectionDefinition.cookableLookup`](/game-api/types/alta-crafting/cookablecollectiondefinition#m-cookablelookup), [`CookableCollectionDefinition.cookables`](/game-api/types/alta-crafting/cookablecollectiondefinition#m-cookables), [`CookableCollectionDefinition.Cookables`](/game-api/types/alta-crafting/cookablecollectiondefinition#m-cookables-2), [`IStewIngredient.ContainsCookable`](/game-api/types/alta-crafting/istewingredient#m-containscookable), [`StewContentArguments.Ingredients`](/game-api/types/alta-crafting/stewcontentarguments#m-ingredients), [`StewIngredientBase.ContainsCookable`](/game-api/types/alta-crafting/stewingredientbase#m-containscookable), [`StewIngredientBase.Cookables`](/game-api/types/alta-crafting/stewingredientbase#m-cookables), [`StewManager.AddedIngredient`](/game-api/types/alta-crafting/stewmanager#m-addedingredient), [`StewManager.GetCookableItems`](/game-api/types/alta-crafting/stewmanager#m-getcookableitems), [`StewManager.ingredients`](/game-api/types/alta-crafting/stewmanager#m-ingredients), [`StewManager.Ingredients`](/game-api/types/alta-crafting/stewmanager#m-ingredients-2), [`StewRecipe.FindStewRecipeForIngredients`](/game-api/types/alta-crafting/stewrecipe#m-findstewrecipeforingredients), [`StewRecipe.givenIngredients`](/game-api/types/alta-crafting/stewrecipe#m-giveningredients), [`StewRecipe.IsValidIngredientList`](/game-api/types/alta-crafting/stewrecipe#m-isvalidingredientlist), [`LiquidData.cookablesUsed`](/game-api/types/alta-stats-effects/liquiddata#m-cookablesused), [`LiquidData.CookablesUsed`](/game-api/types/alta-stats-effects/liquiddata#m-cookablesused-2), [`LiquidData.LiquidData`](/game-api/types/alta-stats-effects/liquiddata#m-ctor).
