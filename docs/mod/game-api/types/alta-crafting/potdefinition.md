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
| <Link id="m-ctor" /><code>{"PotDefinition()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-minnumberofingredients" /><code>{"private int minNumberOfIngredients"}</code> | <span className="api-desc">Backing field for `MinNumberOfIngredients`.</span> |
| <Link id="m-numberofgarnishes" /><code>{"private int numberOfGarnishes"}</code> | <span className="api-desc">Backing field for `NumberOfGarnishes`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-minnumberofingredients-2" /><code>{"int MinNumberOfIngredients { get; }"}</code> | <span className="api-desc">Ingredients needed before the pot checks for a recipe. Defaults to 4.</span> |
| <Link id="m-numberofgarnishes-2" /><code>{"int NumberOfGarnishes { get; }"}</code> | <span className="api-desc">Most garnishes the pot accepts; more are rejected. Defaults to 3.</span> |

## Used in

Members of other types that take, return or hold a `PotDefinition`:

<div className="api-used-in">

[`CookingPot.Definition`](/mod/game-api/types/alta-crafting/cookingpot#m-definition), [`CookingPot.potDefinition`](/mod/game-api/types/alta-crafting/cookingpot#m-potdefinition).

</div>
