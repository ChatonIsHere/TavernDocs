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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`PotDefinition.Create`](/game-api/types/alta-crafting/potdefinition-create)
- **Nested types** [`Create`](/game-api/types/alta-crafting/potdefinition-create)
- **Documented in** [Cooking](/game-api/game-systems/cooking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PotDefinition()"}</code> |

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

[`CookingPot.Definition`](/game-api/types/alta-crafting/cookingpot#m-definition), [`CookingPot.potDefinition`](/game-api/types/alta-crafting/cookingpot#m-potdefinition).
