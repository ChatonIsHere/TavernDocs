---
title: "StewIngredientBase"
description: "abstract class StewIngredientBase in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StewIngredientBase

An **abstract class** in `Root.Township`, `Alta.Cooking`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`, [`IStewIngredient`](/game-api/types/alta-crafting/istewingredient)
- **Derived types** [`CookableCategoryDefinition`](/game-api/types/alta-crafting/cookablecategorydefinition), [`CookableCollectionDefinition`](/game-api/types/alta-crafting/cookablecollectiondefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected StewIngredientBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-glyph" /><code><Link to="/game-api/types/alta-items/glyph">{"Glyph"}</Link>{" glyph"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cookables" /><code>{"abstract IEnumerable<"}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Cookables { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-containscookable" /><code>{"abstract bool ContainsCookable("}<Link to="/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookable, out int score)"}</code> |  |

## Used in

Members of other types that take, return or hold a `StewIngredientBase`:

[`StewRecipe.stewIngredients`](/game-api/types/alta-crafting/stewrecipe#m-stewingredients), [`StewRecipe.StewIngredients`](/game-api/types/alta-crafting/stewrecipe#m-stewingredients-2).
