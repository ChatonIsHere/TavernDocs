---
title: "StewIngredientBase"
description: "Base ScriptableObject for a stew recipe ingredient slot, such as a cookable category or collection, that StewRecipe checks given ingredients against."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewIngredientBase

An **abstract class** in `Root.Township`, `Alta.Cooking`.

Base ScriptableObject for a stew recipe ingredient slot, such as a cookable category or collection, that `StewRecipe` checks given ingredients against.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`, [`IStewIngredient`](/mod/game-api/types/alta-crafting/istewingredient)
- **Derived types** [`CookableCategoryDefinition`](/mod/game-api/types/alta-crafting/cookablecategorydefinition), [`CookableCollectionDefinition`](/mod/game-api/types/alta-crafting/cookablecollectiondefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StewIngredientBase()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-glyph" /><code><Link to="/mod/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph"}</code> | <span className="api-desc">Glyph shown for this ingredient.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookables" /><code>{"abstract IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Cookables { get; }"}</code> | <span className="api-desc">All cookable items that count as this ingredient.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-containscookable" /><code>{"abstract bool ContainsCookable("}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookable, out int score)"}</code> | <span className="api-desc">Whether a cookable item counts as this ingredient, with a match score.</span> |

## Used in

Members of other types that take, return or hold a `StewIngredientBase`:

<div className="api-used-in">

[`StewRecipe.stewIngredients`](/mod/game-api/types/alta-crafting/stewrecipe#m-stewingredients), [`StewRecipe.StewIngredients`](/mod/game-api/types/alta-crafting/stewrecipe#m-stewingredients-2).

</div>
