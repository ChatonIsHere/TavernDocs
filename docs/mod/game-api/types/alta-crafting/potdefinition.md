---
title: "PotDefinition"
description: "Settings for a cooking pot type: how many ingredients make a stew and how many garnishes it takes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PotDefinition

A **class** in `Root.Township`, `Alta.Cooking`.

Settings for a cooking pot type: how many ingredients make a stew and how many garnishes it takes. Read by `StewManager`.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PotDefinition.Create`](/mod/game-api/types/alta-crafting/potdefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/potdefinition-create)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PotDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minnumberofingredients" /><code>{"private int minNumberOfIngredients"}</code> | Backing field for `MinNumberOfIngredients`. |
| <Link id="m-numberofgarnishes" /><code>{"private int numberOfGarnishes"}</code> | Backing field for `NumberOfGarnishes`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-minnumberofingredients-2" /><code>{"int MinNumberOfIngredients { get; }"}</code> | Ingredients needed before the pot checks for a recipe. Defaults to 4. |
| <Link id="m-numberofgarnishes-2" /><code>{"int NumberOfGarnishes { get; }"}</code> | Most garnishes the pot accepts; more are rejected. Defaults to 3. |

## Used in

Members of other types that take, return or hold a `PotDefinition`:

[`CookingPot.Definition`](/mod/game-api/types/alta-crafting/cookingpot#m-definition), [`CookingPot.potDefinition`](/mod/game-api/types/alta-crafting/cookingpot#m-potdefinition).
