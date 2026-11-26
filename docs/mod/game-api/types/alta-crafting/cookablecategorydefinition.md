---
title: "CookableCategoryDefinition"
description: "A stew ingredient that matches any cookable item in a category, rather than one item."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CookableCategoryDefinition

A **class** in `Root.Township`, `Alta.Cooking`.

A stew ingredient that matches any cookable item in a category, rather than one item.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`StewIngredientBase`](/mod/game-api/types/alta-crafting/stewingredientbase)
- **Derived types** [`CookableCategoryDefinition.Create`](/mod/game-api/types/alta-crafting/cookablecategorydefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-crafting/cookablecategorydefinition-create)
- **Documented in** [Cooking](/mod/game-api/game-systems/cooking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CookableCategoryDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-allcookableitems" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{">> allCookableItems"}</code> | Backing field for `AllCookableItems`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-allcookableitems-2" /><code>{"static Dictionary<"}<Link to="/mod/game-api/types/alta-crafting/cookablecategorydefinition">{"CookableCategoryDefinition"}</Link>{", List<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{">> AllCookableItems { get; }"}</code> | Every `CookableItem` grouped by its category, built from all items on first use. |
| <Link id="m-cookables" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{"> Cookables { get; }"}</code> | The cookable items in this category. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-containscookable" /><code>{"override bool ContainsCookable("}<Link to="/mod/game-api/types/alta-crafting/cookableitem">{"CookableItem"}</Link>{" cookable, out int score)"}</code> | True, with score 1, if the item's category is this one. |

## Used in

Members of other types that take, return or hold a `CookableCategoryDefinition`:

[`CookableItem.category`](/mod/game-api/types/alta-crafting/cookableitem#m-category), [`CookableItem.Category`](/mod/game-api/types/alta-crafting/cookableitem#m-category-2).
